// var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
// var a = parseInt(input);

var a = 5;

for (var i=1; i<=a; i++) {
    for (var j=1; j<=i; j++) {
        console.log("*");
    }
    console.log("\n");
}