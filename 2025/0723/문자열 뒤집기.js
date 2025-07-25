function solution(my_string, s, e) {
	var answer = ""

	console.log(my_string, s, e)
	const beforeStr = my_string.slice(0, s)
	const lastStr = my_string.slice(e + 1)
	const reverseStr = my_string
		.slice(s, e + 1)
		.split("")
		.reverse()
		.join("")

	console.log(beforeStr)
	console.log(reverseStr)
	console.log(lastStr)

	answer = beforeStr + reverseStr + lastStr

	return answer
}

solution("Progra21Sremm3", 6, 12)

// 해당 my_string의 s부터 e까지의 문자열을 뒤집어서 반환하는 문제입니다.
// s와 e는 0부터 시작하는 인덱스입니다.
// my_string.slice()를 사용하여 문자열을 잘라내고, split(), reverse(), join()을 사용하여 뒤집은 후 다시 합쳤습니다.
