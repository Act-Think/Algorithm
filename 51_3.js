var input = "a-";

function solution(word) {
    var wordArr = word.split('');
    var count = 0;
    for (i=0; i<wordArr.length; i++) {
        if(wordArr[i].match(/[a-z]/)) {
            ((i !== wordArr.length) &&
            ((wordArr[i] == "l" || wordArr[i] == "n") && wordArr[i+1] == "j") ||
            (wordArr[i] == "d" && wordArr[i+1] == "z")) ? count += 0 :
            



            count += 1;
        }    
    }
    return count;
}
console.log(solution(input));