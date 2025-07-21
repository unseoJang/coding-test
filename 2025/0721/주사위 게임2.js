function solution(a, b, c) {
	if (a !== b && a !== c && b !== c) {
		return a + b + c
	}

	if (a === b && a === c && b === c) {
		return (a + b + c) * (a ** 2 + b ** 2 + c ** 2) * (a ** 3 + b ** 3 + c ** 3)
	} else {
		return (a + b + c) * (a ** 2 + b ** 2 + c ** 2)
	}
}

solution(2, 6, 1)
solution(5, 3, 3)
solution(4, 4, 4)
