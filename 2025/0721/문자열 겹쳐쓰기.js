function solution(my_string, overwrite_string, s) {
	var answer = ""
	const str = [...my_string]
	str.splice(s, overwrite_string.length, overwrite_string)
	answer = str.join("")
	return answer
}

solution("He11oWor1d", "lloWorl", 2)
solution("Program29b8UYP", "merS123", 7)
