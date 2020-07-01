// 문자열 내 마음대로 정렬하기
// 'use strict';

// function solution(strings, n) {
//     var answer = strings.sort((a, b) => {
//         if(a[n] == b[n]) return a.localeCompare(b);
//         return a[n].localeCompare(b[n]);
//     })
//     return answer;
// }

function solution(strings, n) {
    var answer = [];
    
    answer = strings.sort((a, b) => a[n] == b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]));
    
    return answer;
}

console.log(solution(["sun", "bed", "car"], 1));
console.log(solution(["abce", "abcd", "cdx"], 3));