// 쇠막대기

'use strict'

function solution(arrangement) {
    var replace = arrangement.replace(/\(\)/g, "R");
    var count = 0;
    var countIron = 0;
    var sum = 0;
    for (var i = 0; i < replace.length; i++) {
        if (replace[i] == `(`) {
            count++;
        } else if (replace[i] == `)`) {
            count++;
        } else if (replace[i] == "R") {
            sum += count;
        }
        return sum;
    }
    

}
console.log(solution("()(((()())(())()))(())")); // 17

