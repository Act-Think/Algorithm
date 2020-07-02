// K번째수
/*
array 의 i~j번째 숫자를 자르고 정렬했을 때, k번째에 있는 수



*/


'use strict'

function solution(array, commands) {
    var answer = [];
    for (var a=0; a<commands.length; a++) {
        var i = commands[a][0];
        var j = commands[a][1];
        var k = commands[a][2];

        var arr = array.slice(i-1, j);
        arr.sort((a,b) => a-b);
        answer.push(arr[k-1]);
    }
    return answer;
}