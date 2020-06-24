var isSelfNumber = Array(10000).fill(true);
function SelfNumber (n) {
    for (i=1; i<=n; i++) { // 35
        iString = i.toString(); // "35"
        value = i; // 35
        for (var j=0; j<iString.length; j++) { // 0, 1
            value += +(iString[j]) // 3, 5
        }
        if (value <= n) {isSelfNumber[value+1] = false};
    }
    for(k=1; k<=10000; k++) {
        if(isSelfNumber[k+1]) console.log(k);
    }
}

SelfNumber(10000);
