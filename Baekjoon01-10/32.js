// var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
// var a = parseInt(input[0]);
// var b = parseInt(input[1]);
// var c = parseInt(input[2]);

var input = ["150", "266", "427"]
var a = input[0] * input[1] * input[2];
var b = Array.from(String(a));

for (i=0; i<10; i++) {
    var count = 0;
    for (j=0; j<b.length; j++) {
        if (i == b[j])
        count ++;
    }
    console.log(count);
}

