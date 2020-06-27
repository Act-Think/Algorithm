var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString();
var a = parseInt(input);

for (var i=1; i<=a; i++) {
    for (var j=(a-i); j>0; j--) {
        console.log(" ");
    }
    for (var k=1; k<=i; k++) {
        console.log("*");
    }
    console.log("\n");
}