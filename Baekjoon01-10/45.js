// var input = require('fs').readFileSync('/dev/stdin').toString();

var input = "baekjoon";
var az = 'abcdefghijklmnopqrstuvwxyz'.split('');
var result = ""

for (i=0; i<26; i++) {
    if (input.includes(az[i])) {
        result += (input.indexOf(az[i])+" ");
    } else {
        result += -1 + " ";
    }
}
console.log(result);

match 사용해서 다시 하기!