function solution(my_string) {
	let answer = new Array(52).fill(0)
	console.log(my_string)
	for (let i = 0; i < my_string.length; i++) {
		const char = my_string[i]
		const code = char.charCodeAt(0)
		console.log(my_string[i].charCodeAt(0))

		if (code >= 65 && code <= 90) {
			answer[code - 65]++
		} else {
			answer[code - 97 + 26]++
		}
	}
	return answer
}

solution("Programmers")

// my_string을 순회하면서 각 알파벳의 개수를 세는 배열을 만든다
// my_string을 m씩 잘라서 배열로 만든다
// 각 배열의 c-1 인덱스에 해당하는 값을 answer에 담는다
// answer를 반환한다
// 테스트 케이스를 통해 확인한다
// 다시 풀어봐야함
