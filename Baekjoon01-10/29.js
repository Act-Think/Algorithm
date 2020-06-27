// var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString();
// var a = parseInt(input);

var a = 4;
for (i=1; i<=a; i++) {
    for (j=1; j<=i; j++) {
        console.log("*")
    }
    console.log("\n")
}
for (k=(a-1); k>=1; k--) {
    for (l=1; l<=k; l++) {
        console.log("*")
    }
    console.log("\n")
}