// var h = require('fs').readFileSync('/dev/stdin').toString();
var h = "1000";
function hanNo(n) {
    var count = 0;
    for (i = 1; i <= n; i++) {
        var j = i.toString();
        if (j.length <= 2) {
            count++;
        } else if (j[0] - j[1] === j[1] - j[2]) {
            count++;
        }
    }
    console.log(count);
}
hanNo(+h);