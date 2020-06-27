var word = "es="
var wordArr = [...word];
var exception1 = ["c", "s", "z"];
var exception2 = ["c", "d"];
if (wordArr[2] == "=") {
    if (exception1.includes(wordArr[1])) {
        console.log(true);
    } else {
        console.log(false);
    }
}