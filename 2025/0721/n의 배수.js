function solution(num, n) {
	var answer = 0
	answer = num % n === 0 ? 1 : 0
	return answer
}

solution(98, 2)
solution(34, 3)
