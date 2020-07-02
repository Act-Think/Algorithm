// 이상한 문자 만들기
'use strict'

function solution(s) {
    var answer = ""
    var sUp = s.toUpperCase();
    var arr = sUp.split(/\b/);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].length >= 2) {
            var arrWord = arr[i].split('');
            for (var j = 1; j < arr[i].length; j += 2) {
                arrWord[j] = arrWord[j].toLowerCase();
            }
            var arrResult = arrWord.join('');
        } else {
            arrResult = arr[i];
        }
        answer += arrResult;
    }
    return answer;
}

console.log(solution("abdsfs     cdsfsdf dfsdf"));



function toWeirdCase(s){
    return s.toUpperCase().replace(/(\w)(\w)/g, function(a){return a[0].toUpperCase()+a[1].toLowerCase();})
  
  }