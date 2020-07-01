// 문자열 다루기 기본
'use strict';

function solution(s) {
    if (s.length !== 4 && s.length !== 6) return false;
    var sArr = s.split('')
        .filter(x => Number.isInteger(parseInt(x)) == false)
    if (sArr.length > 0) return false;
    return true;
}

console.log(solution("12345"));


function alpha_string46(s){
    var regex = /^\d{6}$|^\d{4}$/;
    return regex.test(s);
  }