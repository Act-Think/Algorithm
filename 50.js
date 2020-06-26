// var input = require('fs').readFileSync('/dev/stdin').toString().trim();

var input = "UNUCIC";
function solution (word) {
    var time = 0;
    for (i=0; i<word.length; i++){
        (word[i] == "A" || word[i] == "B" || word[i] == "C") ? time += 3:
        (word[i] == "D" || word[i] == "E" || word[i] == "F") ? time += 4:
        (word[i] == "G" || word[i] == "H" || word[i] == "I") ? time += 5:
        (word[i] == "J" || word[i] == "K" || word[i] == "L") ? time += 6:
        (word[i] == "M" || word[i] == "N" || word[i] == "O") ? time += 7:
        (word[i] == "P" || word[i] == "Q" || word[i] == "R" || word[i] == "S") ? time += 8:
        (word[i] == "T" || word[i] == "U" || word[i] == "V") ? time += 9:
        time += 10
    }
    return time;
}
console.log(solution(input));