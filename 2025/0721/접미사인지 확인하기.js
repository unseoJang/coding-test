function solution(my_string, is_suffix) {
	var answer = 0
	let str = []

	for (let i = 0; i < my_string.length; i++) {
		str.push(my_string.slice(i))
		if (str[i] === is_suffix) {
			answer = 1
		}
	}

	return answer
}

// 테스트
console.log(solution("banana", "ana")) // 1
console.log(solution("banana", "nan")) // 0

// 해당 is_suffix가 my_string의 접미사인지 확인하는 문제입니다.
// 그냥 for 문돌리고 하나씩 비교 했어요
