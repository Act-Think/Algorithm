// 자연수 뒤집어 배열로 만들기
'use strict'

function solution(n) {
    return n.toString().split('').reverse().map(x=>parseInt(x));
}

console.log(solution(12345));



function solution(n) {
    // 문자풀이
    // return (n+"").split("").reverse().map(v => parseInt(v));

    // 숫자풀이
    var arr = [];

    do {
        arr.push(n%10);
        n = Math.floor(n/10);
    } while (n>0);

    return arr;
}