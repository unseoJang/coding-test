function solution(a, b, flag) {
	var answer = 0
	answer = flag ? a + b : a - b
	return answer
}

solution(2, 3, true)
solution(5, 4, false)
