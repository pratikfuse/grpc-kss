package concurrency

import "fmt"

func ExecuteChannel(){

	ch := make(chan string)

	go GoRoutineA(ch)

	response := <- ch

	fmt.Println(response)

}



