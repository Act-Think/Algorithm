
// var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split('\n');

var input1 = [
    "3 ",
    "happy ",
    "new ",
    "year"
];

var input = [
    "4 ",
    "aba",
    "abab",
    "abcabc",
    "a"
]

function isGroupWord(word) {
    var wordTrim = word.trim();
    var result = true;
    var set = new Set();
    for (var i = 0; i < wordTrim.length; i++) {
        if (!set.has(wordTrim[i])) {
            set.add(wordTrim[i]);
        } else {
            if (wordTrim[i] !== wordTrim[i - 1]) {
                result = false;
            }
        }
    }
    if (word == " ") { result = false; }
    return (result);
}

var answer = 0;
for (var j = 1; j <= parseInt(input[0]); j++) {
    if (isGroupWord(input[j])) {
        answer += 1;
    }

}
console.log(answer);


