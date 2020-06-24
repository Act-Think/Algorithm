// var input = require('fs').readFileSync('/dev/stdin').toString();

var input = "baekjoon";
var az = 'abcdefghijklmnopqrstuvwxyz'.split('');
var result = az.map(x => input.indexOf(x));
var answer = result.join(' ');
console.log(answer);