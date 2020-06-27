var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString();
var a = parseInt(input);

if (a%4==0 && a%100!==0 || a%400==0) {
    console.log(1);
} else {
    console.log(0);
}