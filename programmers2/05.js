// 프린터
/*
1. 인쇄 대기목록의 가장 앞에 있는 문서(J)를 대기목록에서 꺼냅니다.
2. 나머지 인쇄 대기목록에서 J보다 중요도가 높은 문서가 한 개라도 존재하면
 J를 대기목록의 가장 마지막에 넣습니다.
3. 그렇지 않으면 J를 인쇄합니다.
*/

'use strict'

function solution(priorities, location) {
    var arr = [];
    for (var j = 0; j < priorities.length; j++) {
        arr.push([j, priorities[j]]);
    }
    
    var count = 0;
    while (true) {
        var idx = arr.findIndex(x => x[1] > arr[0][1]);
        if (idx == -1) {
            if (arr[0][0] == location) {
                return count+1;
            } else {
                arr.shift();
                count ++;
            }
        } else {
            arr.push(arr[0]);
            arr.shift();
        }
    }
}

var ex1 = [2, 1, 3, 2];
var ex2 = [1, 1, 9, 1, 1, 1];

console.log(solution(ex1, 2));
console.log(solution(ex2, 0));


// var arr = [[1,2], [3,4], [5,6], 5];
// var idx = arr.findIndex(x => x[1] == arr[2][1]);
// console.log(idx);
