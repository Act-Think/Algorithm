// 제일 작은 수 제거하기
'use strict'

function solution(arr) {
    if (arr.length == 1) return [-1];
    var answer = arr.filter(x => x > Math.min.apply(null,arr));
    return answer;
}

console.log(solution([1, 3, 2, 4]));

function solution2(arr) {
    if (arr.length == 1) return [-1];
    var answer = arr.filter(x => x > Math.min(...arr));
    return answer;
}

console.log(solution2([1, 3, 2, 4]));

function solution3(arr) {
    if (arr.length == 1) return [-1];
    var min = Math.min(...arr);
    arr.splice(arr.indexOf(min),1);
    return arr;
}

console.log(solution2([1, 5, 2, 6, 3, 7]));