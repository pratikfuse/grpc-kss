package concurrency

import (
	"fmt"
	"time"
)

func Execute() {

	chA := make(chan string)
	chB := make(chan string)
	go GoRoutineA(chA)
	go GoRoutineB(chB)

	select {
	case res := <-chA:
		fmt.Println(res)
	case res := <-chB:
		fmt.Println(res)
	}

}

func GoRoutineA(ch chan string) {
	time.Sleep(time.Second * 10)
	ch <- "From go routine A"
}

func GoRoutineB(ch chan string) {
	time.Sleep(time.Second * 5)
	ch <- "From go routine B"
}
