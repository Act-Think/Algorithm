/*
선착순 배정
호텔 정문으로부터 걸어서 최단거리 선호
정문은 1층 엘리베이터 바로 앞에 있다.
엘리베이터는 가장 왼쪽에
걷는 거리가 같을 때는 아래층의 방 선호
총 H층, 각 층마다 W개의 방 (1 ≤ H, W ≤ 99) = H X W 형태의 호텔

101, 201, 301, 401, 501,..
102, 202, 302, 402, 502,..

(1 ≤ H, W ≤ 99, 1 ≤ N ≤ H × W)
*/

// var input = require('fs').readFileSync('/dev/stdin').toString();
var input = "2 \n6 12 6 \n30 50 72"


var inputN = input.split('\n');
var t = parseInt(inputN[0]);

for (i=1; i<=t; i++) {
    var inputNSpace = inputN[i].split(' ');
    var h = parseInt(inputNSpace[0]);
    var w = parseInt(inputNSpace[1]);
    var n = parseInt(inputNSpace[2]);

    var hAnsString = (n%h).toString();
    if (hAnsString == 0) hAnsString = h;
    var wAnsString = (Math.ceil(n/h)).toString();
    if (wAnsString.length == 1) {
        var Ans = `${hAnsString}0${wAnsString}`;
    } else {
        var Ans = `${hAnsString}${wAnsString}`;
    }
    console.log(Ans);
}



