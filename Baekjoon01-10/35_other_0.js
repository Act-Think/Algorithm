// 8958

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
for (let i = 1; i <= Number(input[0]); i++){
    let straight = 0;
    let score = 0;
    input[i].split('').map(value => {
        if (value === "O") straight++
        else straight = 0
        score += straight
    })
    console.log(score)

// lucialee