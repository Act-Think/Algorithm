process.stdin.resume();
process.stdin.setEncoding('utf8');

// your code goes here
const fs= require('fs').readFileSync('/dev/stdin').toString().split(' ');

let price = +fs[2] , variable = +fs[1] , fixed = +fs[0]; 
if(variable>=price) console.log(-1);
else{
	console.log(Math.floor(fixed/(price-variable))+1);	
}

// tlagksshl4