// 1	10872	팩토리얼

// var input = require('fs').readFileSync('/dev/stdin').toString();
var input = "5";
var n = parseInt(input);

function factorial (num) {
    if (num == 0) return 1;
    var answer = 1;
    for (i=1; i<=num; i++) {
        answer *= i;
    }
    return answer;
}

console.log(factorial(n));

