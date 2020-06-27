n=require('fs').readFileSync('dev/stdin').toString().trim().split` `
H=+n[0]
M=+n[1]
console.log(M>44?H:H>0?H-1:23,M+(M>44?-45:15))


i=(require('fs').readFileSync("/dev/stdin")+'').split(' ');d=new Date();d.setHours(i[0]);d.setMinutes(i[1]);d.setMinutes(d.getMinutes()-45);console.log(d.getHours(),d.getMinutes())