// 서울에서 김서방 찾기
'use strict';

function solution(seoul) {
    var answer = seoul.indexOf("Kim");
    return `김서방은 ${answer}에 있다`;
}

console.log(solution(["Jane", "Kim"]));