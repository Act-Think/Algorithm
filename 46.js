// var input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

var input = [
    "2",
    "3 ABC",
    "5 /HTP"
]

for (i = 1; i <= input[0]; i++) { // input[0]이 string으로 자동 변환
    var a = input[i].split(' '); // i=1일 때 , a = ["3", "ABC"]
    var n = a[0];
    var str = a[1];
    var result = ""
    for (j = 0; j < a[1].length; j++) {
        result += str[j].repeat(n);
    }
    console.log(result);
}
