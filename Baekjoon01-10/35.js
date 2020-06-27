// var fs = require('fs');
// var input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

var input = [
"5",
"OOXXOXXOOO",
"OOXXOOXXOO",
"OXOXOXOXOXOXOX",
"OOOOOOOOOO",
"OOOOXOOOOXOOOOX"
];

for (j=1; j<=input[0]; j++) {
    var b = Array.from(input[j]);
    var sum = 0;
    var count = 0;
    for (i=0; i<b.length; i++) {
        if (b[i] == "O") {
            count++;
        } else {
            count = 0
        }
        sum += count;
    }
    console.log(sum);
}



