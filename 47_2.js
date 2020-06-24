// var input = require('fs').readFileSync('/dev/stdin').toString().()trim();

var input = "z";



function countOf(arr, value) {
    count = 0;
    arr.forEach(element => {
        if (element == value) count++;                
    });
    return count;
}

function solution (input) {
    var inputUp = input.toUpperCase();
    var inputUpArr = inputUp.split("");
    var obj = {};
    inputUpArr.forEach(element => {
        if (element in obj) return;
        count = countOf(inputUpArr, element);
        obj[element] = count;        
    });
    var num = Object.values(obj)
    var maxValue = Math.max.apply(null, num);
    var onlyOnceAnswered = num.lastIndexOf(maxValue) == num.indexOf(maxValue);
    if (!onlyOnceAnswered) return "?";

    var maxKey = Object.keys(obj).reduce((a, b) => obj[a] > obj[b] ? a : b);
    return maxKey;
}

console.log(solution(input));