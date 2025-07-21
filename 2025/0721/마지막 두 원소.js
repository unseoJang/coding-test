function solution(num_list) {
	const lastNum = num_list[num_list.length - 1]
	const secountLast = num_list[num_list.length - 2]

	if (lastNum > secountLast) {
		num_list.push(lastNum - secountLast)
	} else {
		num_list.push(lastNum + lastNum)
	}

	return num_list
}
