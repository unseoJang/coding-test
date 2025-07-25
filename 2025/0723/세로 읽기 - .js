// function solution(my_string, m, c) {
//     var answer = '';

//     for(let i = 0; i =< my_string.length; i++){

//     }

//     const strArray = my_string.slice(m);
//     console.log(strArray)

//     return answer;
// }

// solution("ihrhbakrfpndopljhygc"	,4,2)

function solution(my_string, m, c) {
	var answer = ""
	let strArray = []

	for (let i = 0; i < my_string.length; i += m) {
		const line = my_string.slice(i, i + m)
		strArray.push(line)
	}

	console.log("1=>", strArray)
	for (let j = 0; j < strArray.length; j++) {
		answer += strArray[j][c - 1]
	}

	console.log(answer)

	return answer
}

solution("ihrhbakrfpndopljhygc", 4, 2)

// my_string 을 배열로 만든다
// m씩 잘라서 각각의 배열에 담는다
// 헤맨 부분 : c-1 인덱스 접근, my_string을 잘라서 배열로 만드는 부분, strArray[j][c-1] 접근
// 각 배열의 c-1 인덱스에 해당하는 값을 answer에 담는다
// answer를 반환한다
// 테스트 케이스를 통해 확인한다
// 다시 풀어봐야함
