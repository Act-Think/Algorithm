// var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

var input = ["10 5", "1 10 4 9 2 3 8 5 7 6"]
var a = input[0].split(" ");
var b = input[1].split(" ");
var n = parseInt(a[0]);
var x = parseInt(a[1]);

for (i=0; i<b.length; i++) {
    if (b[i] < x) {
        document.write(b[i]);
    }
}





