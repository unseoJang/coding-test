function solution(my_string, is_prefix) {
	isState = my_string.startsWith(is_prefix)
	console.log(isState)

	return isState ? 1 : 0
}

solution("banana", "bana")

// 해당 is_prefix가 my_string의 접두사인지 확인하는 문제입니다.
// startsWith 메서드를 사용하여 간단하게 해결했습니다.
