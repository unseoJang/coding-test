function solution(intStrs, k, s, l) {
	let res = []
	intStrs.forEach((el) => {
		const str = el.substr(s, l)
		if (str > k) {
			res.push(Number(str))
		}
	})
	return res
}
