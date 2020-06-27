function notSelfNumber (num) {
    if((num%11)%2 === 1 && ((num+11)%11)%2 === 1) {
        console.log(num)
    }
}

for (i=1; i<=100; i++) {
    notSelfNumber(i);
}