// 쇠막대기
/*
각 기능은 진도가 100%일 때 서비스에 반영할 수 있다.
뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있고,
이때 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포됩니다.

progresses: 먼저 배포되어야 하는 순서대로 작업의 진도가 적힌 정수 배열
 - 길이 100 이하
 - 진도는 100 미만의 자연수

speeds: 각 작업의 개발 속도가 적힌 정수 배열
 - 길이 100 이하
 - 속도는 100 이하의 자연수

return: 각 배포마다 몇 개의 기능이 배포되는지

배포는 하루에 한 번만 할 수 있으며,
하루의 끝에 이루어진다.
ex) 진도율이 95%인 작업의 개발 속도가 하루에 4%라면
 배포는 2일 뒤에 이루어진다.



*/

'use strict'

function solution(progresses, speeds) {
    var day = [];
    for (var i = 0; i < progresses.length; i++) {
        var daysTaken = Math.ceil((100 - progresses[i]) / speeds[i]);
        day.push(daysTaken);
    }

    day.push(100);
    var answer = [];
    var count = 1;
    var reference = day[0];
    for (var j = 1; j < day.length; j++) {
        if (day[j] <= reference) {
            count++;
        } else {
            answer.push(count);
            reference = day[j];
            count = 1;
        }
    }
    return answer;
}


var ex1 = [93, 30, 55];
var ex2 = [1, 30, 5];

console.log(solution(ex1, ex2));