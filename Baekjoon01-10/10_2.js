var a = require('fs').readFileSync('/dev/stdin');
console.log(a%4==0 && a%100!==0 || a%400==0 ? 1 : 0);
