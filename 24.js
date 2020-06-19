// var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();

var input = "26";
var a = input
var result = 0;
var i = 0;
while (input !== result) {
    var x = result.toString();
    var a = x.split(""); // a[0] = "2", a[1] = "6"
    var b = parseInt(a[0]) + parseInt(a[1]); // b = 8
    var c = b.toString(); // c = "8"
    c.split(""); // c[0] = "8"
    if (b < 10) {
        var result = (parseInt(a[1]) * 10) + parseInt(c[0]);
    } else {
        var result = (parseInt(a[1]) * 10) + parseInt(c[1]);
    }
    i++;
    }

console.log(i);

// var input = "42";
// var i = 0;
// var a = input.split(""); // a[0] = "2", a[1] = "6"
// var b = parseInt(a[0]) + parseInt(a[1]); // b = 8
// var c = b.toString(); // c = "8"
// c.split(""); // c[0] = "8"
// if (b < 10) {
//     var result = (parseInt(a[1]) * 10) + parseInt(c[0]);
// } else {
//     var result = (parseInt(a[1]) * 10) + parseInt(c[1]);
// }
// console.log(input);
// console.log(result);

