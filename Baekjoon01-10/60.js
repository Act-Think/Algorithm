/*
이전 작동시기에 k광년을 이동하였을 때는
k-1 , k 혹은 k+1 광년만을 다시 이동할 수 있다.

ex) 이 장치를 처음 작동시킬 경우 -1 , 0 , 1 광년을 이론상 이동할 수 있으나
 사실상 음수 혹은 0 거리만큼의 이동은 의미가 없으므로
  1 광년을 이동할 수 있으며,
  그 다음에는 0 , 1 , 2 광년을 이동할 수 있는 것이다.
  ( 여기서 다시 2광년을 이동한다면 다음 시기엔 1, 2, 3 광년을 이동할 수 있다. )

x지점에서 y지점을 향해 최소한의 작동 횟수로 이동하려 한다.
y지점에 도착하기 바로 직전의 이동거리는 반드시 1광년으로 한다.

김우현을 위해 x지점부터 정확히 y지점으로 이동하는데 필요한 공간 이동 장치 작동 횟수의 최솟값을 구하는 프로그램을 작성하라.

1, 2, 3, 4, 5, 4, 3, 2, 1 -> 최대값 5 = m, 횟수 n = 2m-1, 합 = n^2

1, 2, 3, 4, 5, 5, 4, 3, 2, 1 -> 최대값 5 = m, 횟수 n = 2m, 합 = n^2+n



*/

// var input = require('fs').readFileSync('/dev/stdin').toString();
var input = "3\n0 3\n1 5\n45 50"

var inputN = input.split('\n');
var t = parseInt(inputN[0]);

for (var i=1; i<=t; i++) {
    inputNArr = inputN[i].split(' ');
    var x = inputNArr[0];
    var y = inputNArr[1];
    var distance = y-x;

    var sum = 0;
    var m = 1;
    while(true) {
        sum = m**2;
        if (sum>=distance) {
            console.log(2*m-1);
            break;
        }
        sum = m**2+m;
        if (sum>=distance) {
            console.log(2*m);
            break;
        }  
        m+=1;
    }
}

