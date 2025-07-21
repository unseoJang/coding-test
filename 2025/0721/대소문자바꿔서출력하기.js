const readline = require("readline")
const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
})

let input = []

rl.on("line", function (line) {
	input = [line]
}).on("close", function () {
	str = input[0]

	// 알파벳에 대해 체크하여 대문자는 소문자로 , 소문자는 대문자로 리턴 처리 한 문자열 result를 출력
	const result = str.replace(/[A-z]/gi, (string) => {
		if (string === string.toUpperCase()) return string.toLowerCase()
		else return string.toUpperCase()
	})

	console.log(result)
})
