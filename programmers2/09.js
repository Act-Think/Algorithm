var s = "apple";
var r = "pp"
var s = s.replace(r, "0");

console.log([s]);



function solution(s) {
    if (s.length == 1) return 1;
    if (s.length == 2) return 2;
    var result = [];    
    for (var i = 1; i<=s.length/2; i++) { // i개 단위로 자른다.
        var length = s.length;
        for (var j = 0; j<=s.length/i; j +=i) { // j번째 위치부터 잘라서 비교한다.            
            var compare =  s.slice(j, j+i); // 비교 대상
            if (compare !== "0".repeat(i)) {
            for (var k = j+i; k<s.length; k++) {
                if (compare == s.slice(k, k+i)) {
                    s = s.replace(compare, "0".repeat(i));
                    length -= i-1;
                }
            }
        }
    }    
    result.push(length);
   }
    return result;
}