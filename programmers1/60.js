// 키패드 누르기
/*
시작
 L - *
 R - # 

엄지손가락은 상하좌우 4가지 방향으로만 이동할 수 있으며
키패드 이동 한 칸은 거리로 1에 해당

 1, 4, 7 - L
 3, 6, 9 - R
 2, 5, 8, 0 - 더 가까운 쪽. 만약 같다면 오른손잡이/왼손잡이

numbers: 순서대로 누를 번호가 담긴 배열
 - 크기: 1 이상 1,000 이하
 - 원소의 값: 0 이상 9 이하인 정수
hand: 왼손잡이인지 오른손잡이인지를 나타내는 문자열
return: 각 번호를 누른 엄지손가락이 왼손인 지 오른손인지를 나타내는
 연속된 문자열

*/

'use strict'

function getDistance(before, now) {
    var diffrence = Math.abs(before - now);

    var d0 = [0];
    var d1 = [1, 3];
    var d2 = [2, 4, 6];
    var d3 = [5, 7, 9];
    var d4 = [8, 10];

    if (d0.includes(diffrence)) return 0;
    if (d1.includes(diffrence)) return 1;
    if (d2.includes(diffrence)) return 2;
    if (d3.includes(diffrence)) return 3;
    if (d4.includes(diffrence)) return 4;
}

function solution(numbers, hand) {
    var result = "";
    var positionL = 10;
    var positionR = 12;
    var left = [1, 4, 7];
    var right = [3, 6, 9];

    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] == 0) numbers[i] = 11;
        if (left.includes(numbers[i])) {
            result += "L";
            positionL = numbers[i];
        } else if (right.includes(numbers[i])) {
            result += "R";
            positionR = numbers[i];
        } else {
            if (getDistance(positionL, numbers[i]) < getDistance(positionR, numbers[i])) {
                result += "L";
                positionL = numbers[i];
            } else if (getDistance(positionL, numbers[i]) > getDistance(positionR, numbers[i])) {
                result += "R";
                positionR = numbers[i];
            } else {
                if (hand == "left") {
                    result += "L";
                    positionL = numbers[i];
                } else {
                    result += "R";
                    positionR = numbers[i];
                }
            }
        }
    }
    return result;
}

var ex1 = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
var ex2 = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2];
var ex3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var e1 = "right";
var e2 = "left"

console.log(solution(ex1, e1));
console.log(solution(ex2, e2));
console.log(solution(ex3, e1));
