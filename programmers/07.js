// 문자열 내 p와 y의 개수


function solution1(s) {
    var sUp = s.toUpperCase();
    var countP = 0;
    var countY = 0;
    for (var i = 0; i < sUp.length; i++) {
        if (sUp[i] == "P") countP++;
        if (sUp[i] == "Y") countY++;
    }
return (countP == countY)
}

function solution2(s) {
    var sUp = s.toUpperCase();
    var sUpArr = [...sUp];
    var countP = 0;
    var countY = 0;
    sUpArr.forEach(element => {
        if (element == "P") countP++;
        if (element == "Y") countY++;
    });
    return (countP == countY);
}

function solution(s) {
    var sUp = s.toUpperCase();
    var sUpArr = [...sUp];
    var arrP = sUpArr.filter(x => x = "P")
    var arrY = sUpArr.filter(x => x = "Y")
    if (arrP.length == arrY.length) return true;
    return false;
}


console.log(solution2("pPoooyY"));