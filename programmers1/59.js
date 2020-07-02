// 다트 게임
/*
다트판에 다트를 세 차례 던져 그 점수의 합계로 실력을 겨루는 게임
점수 계산 로직
3번 * 0~10점

< 점수마다 하나씩 존재 >
S -> 1제곱
D -> 2제곱
T -> 3제곱

< 점수마다 둘 중 하나만 존재할 수 있으며, 존재하지 않을 수도 있다. >
* ->  해당 점수와 바로 전에 얻은 점수를 각 2배
 (만약 첫 번째라면, 첫 번째 점수만 2배)
 (중첩 가능 -> 4배)
# ->  해당 점수는 마이너스된다.
 (*과 중첩되면 -2배)

0~10의 정수와 문자 S, D, T, *, #로 구성된 문자열이 입력될 시
총점수를 반환하는 함수를 작성하라.

"점수|보너스|[옵션]"으로 이루어진 문자열 3세트.
예) 1S2D*3T

점수는 0에서 10 사이의 정수이다.
보너스는 S, D, T 중 하나이다.
옵선은 *이나 # 중 하나이며, 없을 수도 있다.
*/

'use strict'

function solution(dartResult) {
    var match = dartResult.match(/\d+[^\d]+/g); // 1S, 2D*, 3T
    var answer = [];
    var score = 0;
    for (var i = 0; i < 3; i++) { // 1D, 2S#, 10S
        if (match[i][1] == 0) {
            score = 10;
            match[i] = match[i].slice(1);

        } else {
            score = match[i][0];
        }

        if (match[i][1] == "S") {
            score = score ** 1;
        } else if (match[i][1] == "D") {
            score = score ** 2;
        } else {
            score = score ** 3;
        }
        answer.push(score);

        if (match[i][2] == "*") {
            if (i == 0) {
                answer[i] *= 2;
            } else {
                answer[i] *= 2;
                answer[i - 1] *= 2;
            }
        }

        if (match[i][2] == "#") answer[i] *= (-1);
    }
    return answer.reduce((a, b) => a + b);
}





console.log(solution("1D2S#10S"));


// var str = "1D#2S*3S"
// var ex = str.match(/\d+[^\d]+/g)
// console.log(ex);







5
6
7
8
9
10
11
12
13
14
15
16
17
18
19
20
21
22
function solution(dartResult) {
    const bonus = {'S': 1, 'D': 2, 'T': 3};
    let darts = dartResult.match(/\\d.?\\D/g);

    for (let i = 0; i < darts.length; i++) {
        let split = darts[i].match(/(\\d{1,})([SDT])([*#])?/),
            score = Math.pow(split[1], bonus[split[2]]);

        if (split[3] !== undefined) {
            if (split[3] === '*') {
                score *= 2;

                if (i > 0) darts[i - 1] *= 2;
            } else score *= -1;
        }

        darts[i] = score;
    }

    return darts.reduce((a, b) => a + b);
}