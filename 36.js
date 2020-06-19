var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

// input = [
//     "5",
//     "5 50 50 70 80 100",
// "7 100 95 90 80 70 60 50",
// "3 70 90 80",
// "3 70 90 81",
// "9 100 99 98 97 96 95 94 93 91"]

for (j = 1; j <= input[0]; j++) {
    var c = input[j].split(" ");
    var sum = 0;
    for (i = 1; i < c.length; i++) {
        sum += parseInt(c[i]);
    }
    var average = sum / c[0];

    var count = 0;
    for (i = 1; i < c.length; i++) {
        if (c[i] > average) {
            count++;
        }
    }
    var percent = (count / c[0] * 100).toFixed(3)
    console.log(percent + "%");
}