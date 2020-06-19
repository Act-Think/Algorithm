n=require('fs').readFileSync('/dev/stdin')-0;console.log(n*++n/2)
// dlaud5379

const n = +require('fs').readFileSync('/dev/stdin').toString();
console.log(n * (n + 1) / 2);
// skid901

var fs = require('fs'), n = parseInt(fs.readFileSync('/dev/stdin'));
console.log(n * (n + 1) / 2);
// mikaescapel

n=1+ +require('fs').readFileSync('/dev/stdin');for(s=0;n--;s+=n);console.log(s)
// 	molangdev