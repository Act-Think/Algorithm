// 핸드폰 번호 가리기
'use strict'

function solution(phone_number) {
    return phone_number.replace(/[^\d{4}$]/, "*");
    
}


var x = "027778568"
console.log(solution(x));