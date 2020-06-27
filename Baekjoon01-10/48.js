// var input = require('fs').readFileSync('/dev/stdin').toString();
var input = " The Curious Curious Case Case of Benjamin Button ";
var result = input.trim().split(' ');
console.log(result);
if (input == " " || input == "" || input == "\n" || input == " \n") {
 console.log(0);
} else {
    console.log(result.length);
}