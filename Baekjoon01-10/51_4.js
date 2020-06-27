var input = "c=c=";

function solution(word) {
    var wordArr = word.split('');
    var count = 0;
    var exception1 = ["c", "s", "z"];
    var exception2 = ["c", "d"];
    for (i = 0; i < wordArr.length; i++) {
        if (wordArr[i].match(/[a-z]/) && i !== wordArr.length) {
            if (((wordArr[i] == "l" || wordArr[i] == "n") && wordArr[i + 1] == "j") ||
                (wordArr[i] == "d" && wordArr[i + 1] == "z")) {
                count += 0;
            } else {
                count += 1;
            }
        } else if (wordArr[i] == "=" && i !== 0) {
            if (exception1.includes(wordArr[i-1])) {
                count += 0
            } else {
                count -= 1;
            }
        } else if (wordArr[i] == "-" && i !== 0) {
            if (exception2.includes(wordArr[i-1])) {
                count += 0
            } else {
                count -= 1;
            }
        }
    }
    return count;
}
console.log(solution(input));