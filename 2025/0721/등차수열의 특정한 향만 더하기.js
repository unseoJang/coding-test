function solution(a, d, included) {
	return included.reduce((acc, curr, idx) => {
		if (curr) acc += a + idx * d
		return acc
	}, 0)
}

solution(3, 4, [true, false, true, true, false]) // 15
solution(7, 1, [false, true, false, true, true]) //
