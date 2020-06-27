// var input = require('fs').readFileSync('/dev/stdin').toString().trim();

var input = "ljes=njak";

function solution(word) {
    var wordArr = word.split('');
    var result = "";
    var count = 0;
    var exception = ["c", "d", "s", "z"];
    wordArr.forEach((element, index) => {
        if (element.match(/[a-z]/)) {
            (exception.includes(element) && (wordArr[index+1] == "=" || (element[index+1] == ""))) ? count
            ((element == "l" || element == "n") && wordArr[index+1] == "j") ||
            ((element == "d") && wordArr[index+1] == "z") ? count +=0 :
            count += 1;
        }
    }
    )
    return count;
}

console.log(solution(input));