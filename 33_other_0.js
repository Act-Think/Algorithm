// 3052

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split("\n");
let remainders = []
input.map(value => {
    remainders.push(parseInt(value) % 42)
})
console.log(new Set(remainders).size)

// 	lucialee

a=(require('fs').readFileSync('/dev/stdin','utf8')+'').match(/[^\r\n]+/g),r=[];a.forEach(i=>r.push(i%42));console.log([...new Set(r)].length)

// choijunseo

var a = {};
require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').forEach(function(e) {
  a[parseInt(e) % 42] = true;
});
console.log(Object.keys(a).length);


// 	sapphire