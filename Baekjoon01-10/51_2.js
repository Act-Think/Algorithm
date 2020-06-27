// var input = require('fs').readFileSync('/dev/stdin').toString().trim();

var input = "c=c=";

function solution(word) {
    var wordArr = word.split('');
    var count = 0;
    wordArr.forEach((element, index) => {
        if (element.match(/[a-z]/)) {
            (index !== wordArr.length) && (
            ((element == "l" || element == "n") && wordArr[index+1] == "j") ||
            (element == "d" && wordArr[index+1] == "z")) ? count += 0 :
            count += 1;
            }
        }    
    )
    return count;
}
console.log(solution(input));