const num = +require('fs').readFileSync('/dev/stdin').toString(); 

let level = 1 ; 
let sum = 1 ; 

if(num===1){

console.log(level);     
}else{

while( sum < num ){ // sum < 13
    sum += 6*(level-1); // 1+6*0 = 1, 1+6*1 = 7, 7+6*2 = 19
    level++ // 2, 3, 4
}
console.log(level-1);    
}

// 	tlagksshl4

const fs = require("fs");
let input = parseInt(fs.readFileSync("/dev/stdin").toString());
var i = 0,
  cnt = 1;
while (true) {
  if (input <= 1) {
    break;
  }
  i = i + 6; // 6, 12
  input -= i; // 13-6 = 7, 7-12 = -5
  cnt++; // 2, 3
}
console.log(cnt);

// com_hello

let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

let num = Number(input); // 13

let count = 1;
let sum = 1;
let a = 6;
while(num > sum) {
    count += 1; // 2, 3
    sum += a; // 7, 19
    a += 6; // 12, 18
}

console.log(count);

// skqoaudgh
















