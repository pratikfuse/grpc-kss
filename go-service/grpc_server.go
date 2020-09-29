package main

import (
	"context"
	"errors"
	"fmt"
	"go-service/lib"
	"google.golang.org/grpc"
	"io"
	"log"
	"net"
	"time"
)



type GreeterServer struct {
}


func (g *GreeterServer) Sort(server lib.Greeter_SortServer) error {

	var numbers []int32

	for {
		number, err  := server.Recv()
		if err == io.EOF {
			break
		}
		if err != nil {
			return err
		}
		numbers = append(numbers, number.Num)
	}

	sorted := lib.Sort(numbers)

	err := server.SendAndClose(&lib.SortResponse{Result: sorted})

	if err != nil {
		return err
	}
	return nil


}

func (g *GreeterServer) SayHello(ctx context.Context, helloRequest *lib.HelloRequest) (*lib.HelloReply, error) {

	name := helloRequest.Name

	greeting := lib.GetGreeting(name)

	return &lib.HelloReply{
		Message: greeting,
	}, nil
}

func (g *GreeterServer) SayHelloStream(helloRequest *lib.HelloRequest, stream lib.Greeter_SayHelloStreamServer) error {

	if helloRequest.Name == "" {
		return errors.New("name cannot be empty")
	}
	greeting := lib.GetGreeting(helloRequest.Name)

	response := &lib.HelloReply{
		Message: greeting,
	}

	for {
		err := stream.Send(response)

		if err != nil {
			return err
		}

		time.Sleep(time.Second * 3)
	}

}

func main() {
	errorChan := make(chan error)
	listener, err := net.Listen("tcp", "localhost:9001")
	if err != nil {
		errorChan <- err
	}

	defer listener.Close()

	srv := grpc.NewServer()

	lib.RegisterGreeterServer(srv, &GreeterServer{})

	go func() {
		if err := srv.Serve(listener); err != nil {
			errorChan <- err
		}
	}()



	fmt.Println("Server running at port 9001")
	log.Fatal(<-errorChan)


}
