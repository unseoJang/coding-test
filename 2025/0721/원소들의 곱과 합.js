function solution(num_list) {
	const num_multiply = num_list.reduce(
		(accumulator, currentValue) => accumulator * currentValue,
		1
	)
	const num_plus = Math.pow(
		num_list.reduce((accumulator, currentValue) => accumulator + currentValue),
		2
	)
	console.log(num_multiply, num_plus)
	return num_multiply > num_plus ? 0 : 1
}

solution([3, 4, 5, 2, 1])
solution([5, 7, 8, 3])
