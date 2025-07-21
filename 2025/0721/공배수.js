function solution(number, n, m) {
	var answer = 0

	answer = number % n === 0 && number % m === 0 ? 1 : 0
	return answer
}

solution(60, 2, 3)
solution(55, 10, 5)
