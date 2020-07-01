// 문자열 내림차순으로 배치하기

'use strict';

function solution(s) {
    var arr = [...s];
    arr.sort().reverse();
    return arr.join('');
}

console.log(solution("Zbcdefg"));


function solution(s) {
  return s
    .split("")
    .sort()
    .reverse()
    .join("");
}

