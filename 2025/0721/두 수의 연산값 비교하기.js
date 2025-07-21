function solution(a, b) {
	var answer = 0

	answer = Math.max(`${a}${b}`, 2 * a * b)
	return answer
}

solution(2, 91)
solution(91, 2)
