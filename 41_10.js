var notSelfNumber = new Set();
for (i = 1; i <= 10000; i++) { // 35
    iString = i.toString(); // "35"
    value = i; // 35
    for (var j = 0; j < iString.length; j++) { // 0, 1
        value += +(iString[j]) // 3, 5
    }
    notSelfNumber.add(value);
}
for (k = 1; k <= 10000; k++) {
    if (!notSelfNumber.has(k)) console.log(k);
}

