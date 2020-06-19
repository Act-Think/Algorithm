// var a = +(require('fs').readFileSync('/dev/stdin'));
a = 5;
var sp = " ";
var st = "*";
for (i=1; i<=a; i++) {
    console.log(sp.repeat(a-i)+st.repeat(i));
}