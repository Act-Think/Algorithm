
var day = [2, 3, 5, 3, 6, 23, 3, 5, 6, 100];
var answer = [];
var count = 1;
var reference = day[0];
for (var j = 1; j < day.length; j++) {
    if (day[j] <= reference) {
        count++;
    } else {
        answer.push(count);
        reference = day[j];
        count = 1;
    }
    console.log(count);
}

console.log(answer);