var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

var m = parseInt(input[0]);
var n = parseInt(input[1]);
var sum = 0;
var min = 10001;

for (var i = m; i <= n; i++) {
    if (isPrime(i)) {
        sum += i;
        if (i < min) {
            min = i;
        }
    }
}
if (sum > 0) {
    console.log(sum);
    console.log(min);
} else {
    console.log(-1);
}

function isPrime(n) {
    if (n <= 1) return false;
    for (var i = 2; i <= n - 1; i++) {
        if (n % i == 0) return false;
    }
    return true;
}

// minkyung1


var fs = require('fs');
var inputlist = fs.readFileSync('/dev/stdin').toString().split('\n');

test()

function test() {

    let m = inputlist[0];
    let n = inputlist[1];

    let sum = 0;
    let min = 0;
    let check = false;

    for (let i = Number(m); i <= Number(n); i++) {
        if (numCheck(i)) {
            if (check == false) min = i
            check = true;
            sum += i;
        }
    }
    if (check == false) {
        console.log(-1);
    } else {
        console.log(sum);
        console.log(min);
    }
}

function numCheck(element) {
    if (element < 2) return false;
    if (element === 2) return true;
    for (let i = 2; i <= Math.sqrt(element); i++) {
        if (element % i == 0) return false;
    }
    return true;
}


// 	lss3070










var fs = require('fs');
var input;

if (process.platform === 'win32') {
    input = fs.readFileSync('input.txt', 'utf8').toString().trim().split('\n');
}
else {
    input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
}

var m = Number(input.shift());
var n = Number(input.shift());

function isPrime(x) {
    if (x < 2) return false;
    for (var i = 2; i * i <= x; i++) {
        if (x % i == 0) return false;
    }
    return true;
}

var sum = 0;
var mn = 20000;
for (var i = m; i <= n; i++) {
    if (!isPrime(i)) continue;
    if (mn > i) mn = i;
    sum += i;
}

if (mn == 20000)
    console.log(-1);
else
    console.log(String(sum) + '\n' + String(mn));

// sbjwin