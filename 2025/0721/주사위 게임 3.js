function solution(a, b, c, d) {
	let answer = 0
	const dices = [a, b, c, d].reduce((acc, cur, idx, arr) => {
		acc.set(cur, (acc.get(cur) || 0) + 1)

		return acc
	}, new Map())

	// Map 자료형을 Array 로 변환 하면서 내림차순 정렬 예) [[4, 3], [1, 1]]
	const diceCount = [...dices].sort((a, b) => b[1] - a[1])

	// console.log('diceCount : ', diceCount);

	// [[4, 3], [1, 1]] 의 key: 4, value: 3
	// 여기서 key 는 주사위의 값, value 는 중복 갯수
	for (let [key, value] of diceCount) {
		// console.log('for of : ', key, value);

		// 네 주사위의 숫자가 모두 같은 경우
		if (value === 4) answer = 1111 * key
		// 세 주사위의 숫자가 같은 경우
		if (value === 3) answer = (10 * key + diceCount[1][0]) ** 2
		// 두 주사위의 숫자가 같으면서 중복된 값이 2세트인 경우 예) [[6, 2], [3, 2]]
		if (value === 2 && diceCount.length === 2)
			answer =
				(diceCount[0][0] + diceCount[1][0]) *
				Math.abs(diceCount[0][0] - diceCount[1][0])
		// 두 주사위의 숫자가 같으면서 중복 값을 포함하여 3세트인 경우 예) [[2, 2], [5, 1], [6, 1]]
		if (value === 2 && diceCount.length === 3)
			answer = diceCount[1][0] * diceCount[2][0]
		if (value === 1 && diceCount.length === 4) answer = Math.min(a, b, c, d)
	}

	return answer
}
