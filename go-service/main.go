package main

import (
	"context"
	"go-service/lib"
	"log"
	"net"

	"google.golang.org/grpc"
)

type GreeterServer struct {
}

func (g *GreeterServer) SayHello(ctx context.Context, helloRequest *lib.HelloRequest) (*lib.HelloReply, error) {

	name := helloRequest.Name

	greeting := lib.GetGreeting(name)

	return &lib.HelloReply{
		Message: greeting,
	}, nil
}

func main() {

	listener, err := net.Listen("tcp", "localhost:9001")

	if err != nil {
		log.Fatal(err)
	}

	defer listener.Close()

	srv := grpc.NewServer()

	lib.RegisterGreeterServer(srv, &GreeterServer{})

	if err := srv.Serve(listener); err != nil {
		log.Fatal("failed to start server", err)
	}

}
