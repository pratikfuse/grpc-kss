package lib

import (
	"fmt"
	"time"
)

func GetGreeting(name string) string {
	hour := time.Now().Hour()
	if hour < 12 {
		return fmt.Sprintf("Good morning, %s", name)
	}

	if hour >= 12 && hour < 17 {
		return fmt.Sprintf("Good afternoon, %s", name)
	}

	if hour >= 17 && hour <= 20 {
		return fmt.Sprintf("Good evening %s", name)
	}

	return fmt.Sprintf("Good night %s", name)
}
