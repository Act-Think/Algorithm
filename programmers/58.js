// 실패율
/*
신규 사용자 수 급감
∵ 신규 사용자와 기존 사용자 사이에 스테이지 차이가 너무 큰 것
-> 동적으로 게임 시간을 늘려서 난이도를 조절

실패율: 
 up - 스테이지에 도달했으나 아직 클리어하지 못한 플레이어의 수
 down - 스테이지에 도달한 플레이어 수

N: 전체 스테이지의 개수 (1<=n<=500)
stages: 게임을 이용하는 사용자가 현재 멈춰있는 스테이지의 번호가 담긴 배열 (1<=stages<=200000)
return: 실패율이 높은 스테이지부터 내림차순으로 스테이지의 번호가 담겨있는 배열

만약 실패율이 같은 스테이지가 있다면 작은 번호의 스테이지가 먼저 오도록 하면 된다.
*/

'use strict'

function solution(N, stages) {
    var failRate = [];
    for (var i = 1; i <= N; i++) {
        var up = stages.filter(x => x == i);
        var upN = up.length;
        var down = stages.filter(x => x >= i);
        var downN = down.length;
        if (downN == 0) {
            failRate.push([i, 0])
        } else {
            failRate.push([i, upN / downN]);
        }

        failRate.sort((a, b) => {
            if (b[1] == a[1]) return a[0] - b[0];
            return b[1] - a[1];
        })
    }

    var answer = [];
    for (var j = 0; j < failRate.length; j++) {
        answer.push(failRate[j][0]);
    }
    return answer;
}

var a = [2, 1, 2, 4, 2, 4, 3, 3];
var b = [4, 4, 4, 4, 4];

console.log(solution(5, a));