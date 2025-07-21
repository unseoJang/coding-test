function solution(n) {
	let answer = []
	const isOdd = (x) => x % 2 === 1
	const isEven = (x) => x % 2 === 0

	while (n > 0) {
		answer.push(n)

		if (n === 1) break

		if (isEven(n)) {
			n = n / 2
		} else if (isOdd(n)) {
			n = 3 * n + 1
		}
	}

	return answer
}
