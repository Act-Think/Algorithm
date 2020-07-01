function solution(strings, n) {
    strings.sort(function(a,b){
        if(a[n] === b[n]){
            return (a > b) - (a < b);
        }else{
            return (a[n] > b[n]) - (a[n] < b[n]);
        }
    })
    return strings;
}

console.log(solution(["sun", "bed", "car"], 1));
console.log(solution(["abce", "abcd", "cdx"], 3));