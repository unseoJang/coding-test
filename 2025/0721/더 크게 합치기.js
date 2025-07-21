function solution(a, b) {
	var answer = 0

	var aToB = String(a) + String(b)
	var bToA = String(b) + String(a)

	answer = aToB >= bToA ? Number(aToB) : Number(bToA)

	return answer
}

solution(3, 5)
solution(2, 91)
