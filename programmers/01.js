// 2016년

function solution(a, b) {
    var month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    if (a == 1) {
        var day = b - 1
    } else {
        var monthSlice = month.slice(0, a - 1);
        var day = monthSlice.reduce((a, b) => a + b) + (b - 1);
    }
    var dayReminder = day % 7;
    var dayName = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
    var answer = dayName[dayReminder];
    return answer;
}

console.log(solution(5, 24));

// var month = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
// var monthSlice = month.slice(0, 0);
// var day = monthSlice.reduce((a, b) => a + b);
// console.log(monthSlice);
// console.log(day);
