function solution(code) {
	// var answer = ""
	let mode = 0

	const resultCode = [...code]
		.filter((string, idx) => {
			if (string === "1") {
				mode = mode === 0 ? 1 : 0
				return false
			}

			if (mode) {
				return idx % 2 === 1
			}

			return idx % 2 === 0
		})
		.join("")

	return (answer = resultCode.length !== 0 ? resultCode : "EMPTY")
}
solution("abc1abc1abc")
