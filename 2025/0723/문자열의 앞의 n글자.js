function solution(my_string, n) {
	var answer = ""

	answer = my_string.substr(0, n)
	console.log(answer)
	return answer
}

solution("ProgrammerS123", 3)
// 해당 my_string의 처음부터 n글자를 잘라서 반환하는 문제입니다.
