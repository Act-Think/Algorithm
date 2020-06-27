const fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');

const text = input[0];

const alpha = ["ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"];

let time = 0;

for(let i = 0; i < text.length; i++) {
  for(let j = 0; j < alpha.length; j++) {
    if(alpha[j].indexOf(text[i]) !== -1) {
      time += (j + 3);
    }
  }
}
console.log(time)

// 	kepy1106


var fs= require('fs').readFileSync('/dev/stdin').toString().trim();
var obj = { 
	
	A:3, 
	B:3,
	C:3,
	
	D:4,
	E:4,
	F:4, 
	
	G:5,
	H:5, 
	I:5, 
	
	J:6,
	K:6, 
	L:6, 
	
	M:7,
	N:7, 
	O:7, 
	
	P:8,
	Q:8,
	R:8,
	S:8, 
	
	T:9,
	U:9, 
	V:9, 
	
	W:10,
	X:10,
	Y:10,
	Z:10, 
} ;
var anwser = 0;

for(let i = 0 ; i < fs.length ; i++){ 
	anwser += Number(obj[fs[i]]); 
}
console.log(anwser);

// tlagksshl4

const n = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const T = n.shift();

let num = 0;

for(const ele of T){
  const code = ele.charCodeAt(0);
  if(code>=65 && code<=67){num += 3}
  else if(code>=68 && code<=70){num += 4}
  else if(code>=71 && code<=73){num += 5}
  else if(code>=74 && code<=76){num += 6}
  else if(code>=77 && code<=79){num += 7}
  else if(code>=80 && code<=83){num += 8}
  else if(code>=84 && code<=86){num += 9}
  else if(code>=87 && code<=90){num += 10}
}

console.log(num);

// unujee1207

const rl = require("readline").createInterface(process.stdin);

const sec = [0,2,3,4,5,6,7,8,9,10];

rl.on("line", line => {
  line = line.split('');
  let sum = 0;
  for(let i = 0; i < line.length; i++) {
    if(line[i] == 'Z') {
      sum += 10;
    } else if(line[i].charCodeAt() >= 83) {
      sum += sec[parseInt((line[i].charCodeAt() - 63) / 3)] + 1;
    } else {
      sum += sec[parseInt((line[i].charCodeAt() - 62) / 3)] + 1;
    }
  }
  console.log(sum);
});

// hyukjinkang











