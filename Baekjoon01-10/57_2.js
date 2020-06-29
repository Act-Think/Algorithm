// var input = require('fs').readFileSync('/dev/stdin').toString();
var input = "11 8 110";
var inputArr = input.split(' ');

var a = parseInt(inputArr[0]);
var b = parseInt(inputArr[1]);
var v = parseInt(inputArr[2]);

var day = Math.ceil((v-a)/(a-b))+1;

console.log(day);