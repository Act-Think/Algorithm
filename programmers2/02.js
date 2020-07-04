// 멀쩡한 사각형

/*
가로 W (1억 이하의 자연수)
세로 H (1억 이하의 자연수)
1*1 격자칸

대각선 꼭지점 2개를 잇는 방향으로 잘라 놓았습니다.
→ 현재 직사각형 종이는 크기가 같은 직각삼각형 2개로 나누어진 상태

return: 사용할 수 있는 정사각형의 개수
*/
'use strict'

function solution(w, h) {
    var answer = w * h - (w + h - gcd(w, h));
    return answer;
}

console.log(solution(8, 12));


function gcd(a, b) { return b ? gcd(b, a % b) : Math.abs(a); }
function lcm(a, b) { return (a * b) / gcd(a, b); }
function gcdlcm(a, b) {
    return [gcd(a, b), lcm(a, b)];
}

function gcdlcm(a, b) {
    var r;
    for (var ab = a * b; r = a % b; a = b, b = r) { }
    return [b, ab / b];
}

function gcdlcm(a, b) {
    var gcd = calc_gcd(a, b);
    var lcm = (a * b) / gcd;

    return [gcd, lcm];
}

function calc_gcd(a, b) {
    if (b == 0) return a;
    return a > b ? calc_gcd(b, a % b) : calc_gcd(a, b % a);
}