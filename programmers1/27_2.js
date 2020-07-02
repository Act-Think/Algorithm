// 핸드폰 번호 가리기
'use strict'

function solution(phone_number) {
    return "*".repeat(phone_number.length-4)+phone_number.slice(-4);
}


var x = "027778428"
console.log(solution(x));