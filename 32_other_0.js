const input = require('fs').readFileSync('/dev/stdin').toString().split("\n");
const multiple = (parseInt(input[0]) * parseInt(input[1]) * parseInt(input[2])).toString().split('').sort()

let num = 0
for (num; num < 10; num++){
    let sameNum = 0;
    multiple.map(value => {
        if (parseInt(value) === num) sameNum++
    })
    console.log(sameNum)

// lucialee

const fs = require("fs")

const input = fs
  .readFileSync("/dev/stdin")
  .toString()
  .split('\n')
  .map(x=>parseInt(x))

const [a, b, c] = input
const sum = (a*b*c).toString()
const arr = new Array(10).fill(0)
for (const c of sum) {
    arr[parseInt(c)] +=1
}
arr.map(x=>console.log(x))

// lemonlime


let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let multiply = 1;
for (let i = 0 ; i < 3; i++) {
  multiply *= Number(input[i]);
}
let multiStr = String(multiply);

let countNum = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
for (let i = 0 ; i < 10; i++) {
  countNum[Number(multiStr[i])] += 1;
}

countNum.forEach(function(cur) {
  console.log(cur);
});

// exploit017


const fs = require("fs");
const input = fs.readFileSync('/dev/stdin').toString().match(/[^\r\n]+/g);
const a = parseInt(input[0]);
const b = parseInt(input[1]);
const c = parseInt(input[2]);

const result = a * b * c;

let map = {};
result
    .toString()
    .split("")
    .forEach(v => {
    map[v] = map[v] ? map[v] + 1 : 1;
});

for (let i = 0; i <= 9; i++) {
    console.log(map[i] || 0);
}

// 	qus1225





