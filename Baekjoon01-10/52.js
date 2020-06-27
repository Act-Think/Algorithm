// var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split('\n');

var input1 = [
    "3 ",
    "happy ",
    "new ",
    "year"
];

var input2 = [
    "4 ",
    "aba",
    "abab",
    "abcabc",
    "a"
]




function solution(arr) {
    var answer = 0;
    for (var i = 1; i <= parseInt(arr[0]); i++) {
        var set = new Set;
        var word = arr[i].trim();
        for (var j = 0; j < word.length; j++)
            var result = true;
        if (set.has(word[j])) {
            if (word[j] !== word[j - 1]) {
                result = false;
            }
        } else {
            set.add(word[j]);
        }
        if (result) answer += 1;
    }
    return answer;
}



console.log(solution(input));