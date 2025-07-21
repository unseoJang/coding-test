function solution(str1, str2) {
	var answer = ""

	answer = [...str1].map((e, i) => e + str2[i]).join("")

	return answer
}
solution("abc", "123")
solution("hello", "world")
