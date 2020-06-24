
let loop = 10000;
let sn = new Set();
let dn;

for (let n = 0; n <= loop; n++) {
    dn = n + (('' + n).split('').reduce((acc, v) => acc + Number(v), 0));
    sn.add(dn);
}

for (let i = 0; i <= loop; i++) {
    if (!sn.has(i)) {
        console.log(i);
    }
}

// 	leey0818

const result = new Array(10001).fill(true);

for (let i = 0; i <= 10000; i += 1) {
  const index = i
    .toString()
    .split("")
    .reduce((prev, cur) => prev + parseInt(cur), i);
  result[index] = false;
}

result.forEach((value, index) => {
  if (value && index !== 0) console.log(index);
});

// hantest


let num=[]
let k=0;

  for(let i=1;i<=10000;i++){
    let arr=i.toString().split('')
    let z=0;
    for(let j=0;j<arr.length;j++){
      z+=Number(arr[j])
    }
    num[k++]=z+i
  }
for(let i=1;i<=10000;i++){
    if(num.indexOf(i)===-1)
      console.log(i)
}

// bsybear623





var N = 10000;
var checkArr = Array(N+1).fill(true);

function func(n) {
    var s = n;
    while(n) {
        s += n%10;
        n = Math.floor(n/10);
    }
    return s + n;
}

for (var i = 1; i <= N; i++) {
    var t = func(i);
    if (t < N) {
        checkArr[t] = false;
    }
}

for (var i = 1; i < N; i++) {
    if (checkArr) console.log(i);
}