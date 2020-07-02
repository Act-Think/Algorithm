// 완주하지 못한 선수

'use strict'

function solution(participant, completion) {
    var answer = [];
    for (var i = 0; i < participant.length; i++) {
        if (!completion.includes(participant[i])) 
        answer.push(participant[i]);
    }
    return answer[0];
}

var a = 
var b = 