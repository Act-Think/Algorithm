function solution(arr1, arr2) {
    var answer = new Array(arr1.length);
    for(var i=0; i<arr1.length; i++) {
        for(var j=0; j<arr1[i].length; j++) {
            arr1[i][j] += arr2[i][j];
        }
    }
return arr1;
}

var x = [[1,2],[2,3]];
var y = [[3,4],[5,6]];
console.log(solution(x, y));


function sumMatrix(A,B){
return A.map((a,i) => a.map((b, j) => b + B[i][j]));
}
