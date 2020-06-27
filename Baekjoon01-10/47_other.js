

const n = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
const STR = n.shift();
const obj = {};

for(const ele of STR){
  if(Object.keys(obj).includes(ele.toUpperCase())){
    obj[ele.toUpperCase()] += 1;
  }
  else{
    obj[ele.toUpperCase()] = 1;
  }
}

const values = Object.values(obj);
const keys = Object.keys(obj);

let num = 0;
let key = "";

for(let i=0; i<values.length; i++){
  if(num < values[i]){
    num = values[i];
    key = keys[i];
  }
  else if(num === values[i]){
    key = "?";
  }

}

console.log(key);

  // unujee1207

  const readline = require('readline');
  const rl = readline.createInterface(process.stdin, process.stdout);
  
  const arr = new Array(26).fill(0);
  rl.on('line', line => {
      line.toUpperCase().split('').forEach(el => {
          arr[(el.charCodeAt() - 65)]++;
      })
      const max = arr.slice().sort((b, a) => a - b)[0];
      if (arr.slice().sort((b, a) => a - b).filter(el => el >= max).length > 1) {
          console.log("?");
      } else {
          console.log(String.fromCharCode(arr.findIndex(el => el == max) + 65));
      }
      rl.close();
  })

// 	oyhoyhk

var inp = require('fs').readFileSync('/dev/stdin').toString()

var len = inp.length
inp = inp.toUpperCase()
var max = -1
var maxAlpha = -1
var alpha = []

for(var i=0; i<26; i++)
    alpha[i] = 0

for(var i=0; i<len; i++)
    alpha[inp.charCodeAt(i)-65]++

for(var i=0; i<26; i++)
    if(alpha[i] > max){
        max = alpha[i]
        maxAlpha = i
    }

for(var i=0; i<26; i++)
    if(max == alpha[i] && maxAlpha != i)
        maxAlpha = -1

if(maxAlpha == -1)
    console.log('?')
else
    console.log(String.fromCharCode(maxAlpha+65))


// uhug123

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().toLowerCase();
const charMap = {};

for (let char of input) {
  if (charMap[char]) {
    charMap[char] = charMap[char] + 1;
  } else {
    charMap[char] = 1;
  }
}

const maxCharNum = Math.max.apply(null, Object.values(charMap));

let counter = 0;
let maxChar = '';
for (let key in charMap) {
  if (charMap[key] === maxCharNum) {
    counter++;
    maxChar = key;
  }
}

if (counter > 1) {
  console.log('?');
} else {
  console.log(maxChar.toUpperCase());
}

// dpsc615

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const charMap = {};
for (let char of input.toLowerCase()) {
  charMap[char] = charMap[char] ? charMap[char] + 1 : 1;
}

let max = Math.max.apply(null, Object.values(charMap));
let maxChar = '';
let counter = 0;
for (let char in charMap) {
  if (charMap[char] === max) {
    maxChar = char;
    counter++;
  }
  if (counter > 1) {
    console.log('?');
    return;
  }
}

console.log(maxChar.toUpperCase());

// dpsc615


var s = require('fs').readFileSync('/dev/stdin').toString().trim();
var arr = new Array(26).fill(0);
for (var i = 0; i < s.length; ++i) {
    var c = s.charCodeAt(i);
    if (65 <= c && c <= 90) {
        c -= 65;
    } else if (97 <= c && c <= 122) {
        c -= 97;
    }
    arr[c]++;
}
var mx = 0, ans;
for (var i = 0; i < 26; ++i) {
    if (mx < arr[i]) {
        mx = arr[i];
        ans = String.fromCharCode(65 + i);
    } else if (mx == arr[i]) {
        ans = "?";
    }
}
console.log(ans);

// groupg


const inputs = require('fs').readFileSync('/dev/stdin').toString();
const list = new Array(26).fill(0);
for (let i = 0, length = inputs.length; i < length; i++) {
  const index = inputs[i].toLowerCase().charCodeAt() - 97;
  list[index]++;
}
let max = 0;
let maxCount = 0;
let maxIndex = -1;
for (let i = 0; i < 26; i++) {
  if (list[i] > max) {
    if (maxCount !== 0) maxCount = 0;
    max = list[i];
    maxIndex = i;
    maxCount++;
  } else if (list[i] === max) {
    maxCount++;
  }
}
console.log(maxCount > 1 ? '?' : 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[maxIndex]);

// hdkdevelop

var fs = require('fs');
var input = fs.readFileSync('/dev/stdin').toString().toUpperCase();
var arr = new Array(26).fill(0);

for (let i = 0; i < input.length; i++) {
    arr[input.charCodeAt(i) - 65]++;
}

var result = '?'
var count = 0;
for (let i = 0; i < arr.length; i++) {
    if(arr[i] > count) {
        result = String.fromCharCode(i + 65);
        count = arr[i];
    }else if(arr[i] == count) {
        result = '?';
    }
}
console.log(result);

// 	brad903

const str= require('fs').readFileSync('/dev/stdin').toString(); 
let arr = (new Array(26)).fill(0); 

for( let i = 0 ; i < str.length ; i++){
	let char = str.charCodeAt(i); 
	if(char > 90 ) char -= 97; 
	else char -= 65; 
	arr[char]++; 
}
let max = 0,index=0, prev = max ;
  

for( let i = 0 ; i< arr.length ; i++){
	if(max <= arr[i]) {
		prev =max ; 
		max = arr[i] ; 
		index = i ;
	}
} 
max===prev ? console.log('?') : console.log( String.fromCharCode(index+65)) 

// tlagksshl4