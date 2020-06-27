// var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().split('\n');

var input = [
    "3 ",
    "happy ",
    "new ",
    "year"
];

function isGroupWord(check) {
    for (var j = 0; j < check.length; j++) {
        if (isGroupWord(check)) answer += 1;
        var set = new Set;
        var result = true;
        if (set.has(check[j])) {
            if (check[j] !== check[j - 1]) {
                result = false;
            }
        } else {
            set.add(check[j]);
        }
    }
    return result;
}
    console.log(isGroupWord(input[1]));

    var answer = 0;
    for (var i = 1; i <= parseInt(input[0]); i++) { // i=1, 2, 3
        var word = input[i].trim();
        if (isGroupWord(word)) {
            answer += 1;
        }
    }
    console.log(answer);
