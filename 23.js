var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

var i = 0;
while (i < input.length) {
    var a = input[i].split(" ");
    console.log(parseInt(a[0])+parseInt(a[1]));
    i++;
}