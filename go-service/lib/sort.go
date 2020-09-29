package lib


func Sort(numbers []int32) []int32{

	for i := len(numbers); i > 0; i-- {
		
		for j := 1; j < i; j++ {
			if numbers[j-1] > numbers[j] {
				intermediate := numbers[j]
				numbers[j] = numbers[j-1]
				numbers[j-1] = intermediate
			}
		}
	}
	return numbers
}