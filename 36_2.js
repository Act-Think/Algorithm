var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

input = [
"5",
"5 50 50 70 80 100",
"7 100 95 90 80 70 60 50",
"3 70 90 80",
"3 70 90 81",
"9 100 99 98 97 96 95 94 93 91"]

for(i=1; i<=input[0]; i++) {
    var score = input[i].split(' ').map(Number);
    var n = score.shift();
    var sum = score.reduce((a,b) => a+b);
    var average = sum/n;
    var high = (score.filter(function (x) {
        return x>average;
    })).length;
    console.log((high/n*100).toFixed(3)+"%");
}
