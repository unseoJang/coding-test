function solution(ineq, eq, n, m) {
	//     var answer = 0;
	//     if(ineq === '<'){
	//         answer =
	//     }
	//     else{

	//     }
	//     return answer;

	return eval(`${n} ${ineq}${eq === "=" ? "=" : ""} ${m}`) ? 1 : 0
}

solution("<", "=", 20, 50)
solution(">", "!", 20, 50)
