/*
사탕가게에 설탕을 N kg 배달
3kg 봉지와 5kg 봉지 -> 최소 갯수

풀이: N을 5로 나눴을 때, 몫이 a이고
 i) 나머지가 0
  -> 5kg a개
  -> 총 a개
 ii) 나머지가 1 -> 1봉지 빼서 1+5 = 6 = 3*2
  -> 5kg a-1개, 3kg 2개
  -> 총 a+1개
 iii) 나머지가 2 -> 2봉지 빼서 2+10 = 12 = 3*4
  -> 5kg a-2개, 3kg 4개
  -> 총 a+2개
 iv) 나머지가 3
  -> 5kg a개, 3kg 1개
  -> 총 a+1개
 v) 나머지가 4 -> 1봉지 빼서 4+5 = 9 = 3*3
  -> 5kg a-1개, 3kg 3개
  -> 총 a+2개

* 정확하게 만들 수 없는 경우 (3 ≤ N ≤ 5000)
3 -> O
4 -> X
5로 나눴을 때의 몫이
 i) 1이면
  -> 나머지가 2만 아니면 된다.
  -> 즉, 7은 안 된다.
 ii) 2 이상이면
  -> 다 된다.
 ∴ 4, 7만 안 된다.
*/

// var n = require('fs').readFileSync('/dev/stdin').toString().map(Number);
var n = 11;
var a = Math.floor(n/5);
if (n == 4 || n == 7) {
    console.log(-1);
} else if (n%5 == 0) {
    console.log(a);
} else if (n%5 == 1 || n%5 == 3) {
    console.log(a+1);
} else {
    console.log(a+2);
}
