function solution(num_list) {
	const even_array = num_list.filter((data) => data % 2 === 0)
	const odd_array = num_list.filter((data) => data % 2 === 1)

	const even = even_array.join("")
	const odd = odd_array.join("")

	return Number(even) + Number(odd)
}
