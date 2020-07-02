// 가운데 글자 가져오기

function solution(s) {
    if (s.length%2 == 1) {
        var answer = s[(s.length/2)-1/2];
    } else {
        var answer = s[(s.length/2)-1]+s[s.length/2];
    }
    return answer;
}

console.log(solution("1234"));