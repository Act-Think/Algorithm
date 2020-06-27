var a = require('fs').readFileSync('/dev/stdin');

var a = 3;
for(i=1; i<=a; i++) {
    console.log("*".repeat(i));
}
for(i=a-1; i>=1; i--) {
    console.log("*".repeat(i));
}