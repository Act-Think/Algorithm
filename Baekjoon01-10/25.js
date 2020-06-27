var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString();

// var input = "1";
var start = parseInt(input);
var i = 0;
while (input !== end) {
    var end = (10*(start%10) + (((start%10) + Math.floor(start/10)))%10);
    start = end
    i++;
    // if(input == end) {
    //     break;
    // }
}
console.log(i);





