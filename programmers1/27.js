// 핸드폰 번호 가리기
'use strict'

function solution(phone_number) {
    var length = phone_number.length
    var arr = new Array(length).fill("*");
    for (var i= length-4; i<length; i++) {
        arr[i] = phone_number[i];
    }
    return arr.join('');
}

var x = "027778428"

console.log(solution(x));


function hide_numbers(s){
  var result = "*".repeat(s.length - 4) + s.slice(-4);
  return result;
}

function hide_numbers(s) {
    return s.replace(/\d(?=\d{4})/g, "*");
  }