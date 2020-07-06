// 비밀지도

/*
n*n 정사각형 배열 (1 ≦ n ≦ 16)

"#" = 벽 = 1
" " = 공백 = 0
벽 + 벽 = 벽 1+1 = 2
벽 + 공백 = 벽 1+0 = 1
공백 + 공백 = 벽 0+0 = 0

정수 배열로 암호화
지도의 각 가로줄에서 벽 부분을 1,
공백 부분을 0으로 부호화했을 때 얻어지는
이진수에 해당하는 값의 배열

arr1, arr2 - 길이 n인 정수 배열
정수 배열의 각 원소 x를 이진수로 변환했을 때의 길이는 n 이하. 즉, 0 ≦ x ≦ 2n - 1
return - 원래의 비밀지도를 해독하여 '#', 공백으로 구성된 문자열 배열로 출력

i) 10진수를 2진수로 변환

*/
var n = 5;
var arrA = [9, 20, 28, 18, 11];
var arrB = [30, 1, 21, 17, 28];

// var arr2bi = arr2.map(x => x.toString(2))
// .map(x => "0".repeat(n - x.length) + x);
// console.log(arr2bi);


function solution(n, arr1, arr2) {
    var answer = [];
    var arr1bi = arr1.map(x => x.toString(2))
        .map(x => "0".repeat(n - x.length) + x);
    var arr2bi = arr2.map(x => x.toString(2))
        .map(x => "0".repeat(n - x.length) + x);

    for (var i = 0; i < n; i++) {
        var result = "";
        for (var j = 0; j < n; j++) {
            if (arr1bi[i][j] + arr2bi[i][j] == 0) {
                result += " ";
            }
            else {
                result += "#";
            }
        }
        answer.push(result);
    }
    return(answer);

}


console.log(solution(n, arrA, arrB));