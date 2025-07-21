function solution(my_strings, parts) {
	var answer = ""
	parts.forEach((number, idx) => {
		console.log(number)
		answer += my_strings[idx].slice(number[0], number[1] + 1)
	})

	return answer
}
