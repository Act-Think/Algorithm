// var h = require('fs').readFileSync('/dev/stdin').toString();
var h = "1000";
var nh = +h; // 110
function hanNo(n) { // 110
    var count = 0;
    for (i = 1; i <= n; i++) {
        var j = i.toString();
        if (j.length <= 2) {
            count++;
        } else if (j.length === 3) {
            var a = Math.floor(i / 100);
            var b = Math.floor((i % 100) / 10);
            var c = (i % 100) % 10;
            if (a-b === b-c) {
                count++;
            }
        }
    }
    console.log(count);
}
hanNo(nh); // 110

