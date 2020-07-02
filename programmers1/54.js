// 체육복
/*
일부 학생이 도난
여벌 체육복
바로 앞/뒷번호에게만
최대한 많은 학생에게

n: 전체 학생수 (2<=n<=30)
lost: 도난당한 학생들의 번호 (1<=lost<=n) 중복X
reserve: 여벌의 체육복을 가져온 학생의 번호 (1<=reserve<=n) 중복X
return: 체육수업을 들을 수 있는 학생의 최댓값

여벌 체육복을 가져온 학생이 체육복을 도난당했을 수 있습니다.
이때 이 학생은 체육복을 하나만 도난당했다고 가정하며,
남은 체육복이 하나이기에 다른 학생에게는 체육복을 빌려줄 수 없습니다.
*/

'use strict'

function solution(n, lost, reserve) {

    var count = 0;
    for (var k = 0; k < reserve.length; k++) {
        for (var l = 0; l < lost.length; l++) {
            if (reserve[k] == lost[l]) {
                reserve[k] = -1;
                lost[l] = -1;
            }
        }
    }
    lost = lost.filter(x => x>0).sort((a, b) => a - b);
    reserve = reserve.filter(x => x>=1).sort((a, b) => a - b);

    for (var i = 0; i < lost.length; i++) {
        var can = false;
        for (var j = 0; j < reserve.length; j++) {
            if (lost[i] - 1 == reserve[j]) {
                reserve.splice(0, j + 1);
                can = true;
                break;
            } else if (lost[i] + 1 == reserve[j]) {
                reserve.splice(0, j + 1);
                can = true;
                break;
            }
        }
        if (can == false) n -= 1;

    }
    return n;
}



// solution(5, [1, 2, 5], [1, 2, 3, 4, 5]);

console.log(solution(5, [2, 3, 4], [1, 3, 5]));
console.log(solution(5, [2, 3, 4], [3, 4]));
console.log(solution(3, [3], [1]));

// var x = [1, 2, 3, 4, 5];
// x.splice(3, 1);
// console.log(x);
