function solution(my_string) {
	let answer = []

	for (let i = 0; i < my_string.length; i++) {
		console.log(i)
		answer.push(my_string.slice(i))
	}

	return answer.sort()

	console.log(answer)
}

solution("banana", "ana") // 이렇게 두 개의 인자를 넣어야 함

// i갯수당 앞에서부터 하나씩 짜르면 되는 문제
