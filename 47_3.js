// var input = require('fs').readFileSync('/dev/stdin').toString.()trim();

var input = "Mississipi";

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
    var maxValue = Math.max.apply(null, Object.values(obj));
    var countMax = 0;
    for (var key in obj) {
        if (obj[key] === maxValue) {
            countMax++;
            var answer = key;
        }
    }
    if (countMax > 1) return "?";
    return answer;
}

console.log(solution(input));









