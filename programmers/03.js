// 같은 숫자는 싫어

function solution(arr) {
    var answer = [];
    for(var i=0; i<arr.length; i++) {
        if(answer[answer.length-1] 
            !== arr[i]) answer.push(arr[i]);
    }    
    return answer;
}

console.log(solution([4,4,4,3,3]));


function solution2(arr) {
    var answer = [];
    arr.forEach(element => {
        if(answer[answer.length-1] 
            !== element) answer.push(element);
    }
    )
    return answer;
}

console.log(solution2([4,4,4,3,3,2, 4]));