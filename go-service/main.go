package main

import (
	"fmt"
	"go-service/prime"
)

func main() {
	fmt.Println("hello world")

	num := 50
	channel := make(chan int)

	go func() {
		prime.FindPrimeNumbers(num, channel)

	}()

	for v := range channel {

		fmt.Println(v)
	}
}
