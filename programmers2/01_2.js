// 탑
/*
수평 직선에 탑 N대
발사한 신호는 신호를 보낸 탑보다 높은 탑에서만 수신
한 번 수신된 신호는 다른 탑으로 송신되지 않는다.

heights: 맨 왼쪽부터 순서대로 탑의 높이를 담은 배열 
 - 길이 2 이상 100 이하인 정수 배열
 - 모든 탑의 높이는 1 이상 100 이하
return: 각 탑이 쏜 신호를 어느 탑에서 받았는지 기록한 배열
*/
'use strict'

function solution(heights) {
    heights.reverse();
    var answer = [];
    for (var i=0; i<heights.length; i++) {
        var towerIdx = heights.findIndex((x, idx) => x>heights[i] && idx>i);
        var towerNum = 0;
        if (towerIdx !== -1) towerNum = heights.length-towerIdx;
        answer.push(towerNum);
    }
    return answer.reverse();
}



var ex1 = [6, 9, 5, 7, 4];
var ex2 = [3, 9, 9, 3, 5, 7, 2];
var ex3 = [1, 5, 3, 6, 7, 6, 5];

console.log(solution(ex1));
console.log(solution(ex2));
console.log(solution(ex3));

