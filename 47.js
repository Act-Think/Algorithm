// var input = require('fs').readFileSync('/dev/stdin').toString().()trim();

var input = "baaa";
var inputUp = input.toUpperCase();
var inputUpArr = inputUp.split("");
var inputUpArrJoin = inputUpArr.join(); // M, I, S, S, I,..

if (input.length === 1) {
    console.log(inputUp);
} else {
    var az = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split(''); // ["A", "B", ..]
    var result = new Array(26); // [ , , , ..]
    for (i = 0; i < az.length; i++) {
        var re = new RegExp(az[i], 'g');
        var match = inputUpArrJoin.match(re); // input에서 각각의 알파벳과 매치되는 알파벳 전부
        match == null ? result[i] = 0 : result[i] = match.length; // 그 갯수를 result 배열에 담는다.
    }

    const resultCopy = result.slice(); // [ 0, 0, 1, 4, ..]
    var resultSorted = result.sort(); // [ 4, 4, 2, 1, 0, ..]
    if (resultSorted[resultSorted.length - 1] === resultSorted[resultSorted.length - 2]) { // 최대값이 두개라면
        console.log("?");
    } else { // 최대값이 하나라면
        var indexOfResult = resultCopy.indexOf(Math.max(...resultSorted));
        console.log(az[indexOfResult]);
    }
}