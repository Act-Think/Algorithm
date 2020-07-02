// 시저 암호
'use strict'

function solution(s, n) {
    var answer = ""
    for (var i = 0; i < s.length; i++) {
        var code = 0;
        if (s.charCodeAt(i) >= 65 && s.charCodeAt(i) <= 90) {
            var code = s.charCodeAt(i) + n;
            if (code > 90) code -= 26;
        } else if (s.charCodeAt(i) >= 97 && s.charCodeAt(i) <= 122) {
            var code = s.charCodeAt(i) + n;
            if (code > 122) code -= 26;
        } else {
            var code = s.charCodeAt(i);
        }
        answer = answer.concat(String.fromCharCode(code));
    }
    return answer;
}


var ex = "a B z"
console.log(solution(ex, 4));

function caesar(s, n) {
    var result = "";
  var car = ""

  for (var i=0; i<s.length;i++)
  {        
    if ( s[i] == ' ' )
      result += ' '
    else 
        result += String.fromCharCode( (s.charCodeAt(i)>90)?
      (s.charCodeAt(i)+n-97)%26+97 : (s.charCodeAt(i)+n-65)%26+65 )     
  }

    return result;
}