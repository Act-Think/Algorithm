var n = 10;

i = 35;
iString = i.toString();
value = i
for (var j=0; j<iString.length; j++) { // 0, 1
    value += +(iString[j]) // 3, 5
}

if (value <= n) console.log("?");

console.log(value);

var value = 4

var isSelfNumber = Array(n).fill(true);
isSelfNumber[value+1] = false;

console.log(isSelfNumber);

