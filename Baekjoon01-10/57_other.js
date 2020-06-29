const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (input) => {
    //2 1 5 //4
    let numArr = input.split(' ').map(Number);
    const a=numArr[0];
    const b=numArr[1];
    const c=numArr[2];

    let result=Math.ceil((c-b)/(a-b));
    console.log(result);
    rl.close();
});

// mmbaby