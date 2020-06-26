const n = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let T = n.shift();

const arr = [/lj/g, /c=/g, /c-/g, /dz=/g, /d-/g, /nj/g, /s=/g, /z=/g];

arr.forEach(element => T = T.replace(element, "1"));

console.log(T.length);

// unujee1207

const n = require('fs').readFileSync('dev/stdin').toString().trim().split('\n');
let T = n.shift();

T = T.replace(/lj/g, "1")
T = T.replace(/c=/g, "1")
T = T.replace(/c-/g, "1")
T = T.replace(/dz=/g, "1")
T = T.replace(/d-/g, "1")
T = T.replace(/nj/g, "1")
T = T.replace(/s=/g, "1")
T = T.replace(/z=/g, "1")

console.log(T.length);

// unujee1207








