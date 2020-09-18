package prime

func isPrime(num int) bool {
	if num <= 1 {
		return false
	}

	for i := 2; i < num; i++ {

		if num%i == 0 {
			return false
		}

	}
	return true
}

// FindPrimeNumbers ...
func FindPrimeNumbers(num int, primeChannel chan<- int) {

	for i := 0; i <= num; i++ {
		if isPrime(i) {
			primeChannel <- i
		}
	}
}
