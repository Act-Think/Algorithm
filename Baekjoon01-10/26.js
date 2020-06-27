var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// var input = ["10", "65", "100", "30", "95"];
var result = 0;
for (i=0; i<5; i++) {
    if (parseInt(input[i]) < 40) {
        result += 40;
    } else {
        result += parseInt(input[i]);
    }
}
console.log(result/5);