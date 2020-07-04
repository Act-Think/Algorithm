/*
* = 10
0 = 11
# = 12
*/

function getDistance(prev, now) {  
    var difference = Math.abs(prev - now);
    return [0].includes(difference) ? 0 :
           [1, 3].includes(difference) ? 1 :
           [2, 4, 6].includes(difference) ? 2 :
           [5, 7, 9].includes(difference) ? 3 : 4
}

function solution(numbers, hand) {
    var result = "";
    var left = [1, 4, 7];
    var right = [3, 6, 9]; 
    var prevL = 10;
    var prevR = 12;

    numbers.forEach(number => {
        if (number == 0) number = 11;   
        
        if (left.includes(number)) {
            result +="L";
            prevL = number;
        }
        else if (right.includes(number)) {
            result +="R";
            prevR = number;
        } 
        else {
            var which = getDistance(prevL, number) < getDistance(prevR, number) ? "left" :
                        getDistance(prevL, number) > getDistance(prevR, number) ? "right" : hand;
            if (which == "left") {
                result +="L";
                prevL = number;            
            }
            else {
                result +="R";
                prevR = number;
            }           
        }        
    });
    return result;
  }

var ex1 = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
var ex2 = [7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2];
var ex3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var e1 = "right";
var e2 = "left"

console.log(solution(ex1, e1));
console.log(solution(ex2, e2));
console.log(solution(ex3, e1));