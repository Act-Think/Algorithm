// var input = require('fs').readFileSync('/dev/stdin').toString().trim();
//trim() 안 붙이면 틀림

var input = "c=c=";

function solution(word) {
    var wordArr = word.split('');
    var count = 0;
    var result = [];
    var exception1 = ["c", "s", "z"];
    var exception2 = ["c", "d"];
    for (i = 0; i < wordArr.length; i++) {
        if (wordArr[i] == "d") {
            if (wordArr[i + 1] == "z" && wordArr[i + 2] == "=") {
                wordArr.splice(i + 1, 2);
            } else if (wordArr[i + 1] == "-") {
                wordArr.splice(i + 1, 1);
            }
        }
        if (wordArr[i] == "c" || wordArr[i] == "s" || wordArr[i] == "z") {
            if (wordArr[i + 1] == "=") {
                wordArr.splice(i + 1, 1);
            }
        }
        if (wordArr[i] == "c" || wordArr[i] == "d") {
            if (wordArr[i + 1] == "-") {
                wordArr.splice(i + 1, 1);
            }
        }
        if (wordArr[i] == "l" || wordArr[i] == "n") {
            if (wordArr[i + 1] == "j") {
                wordArr.splice(i + 1, 1);
            }
        }

    }
    return wordArr.length;
}
console.log(solution(input));