function notSelfNumber (num) {
    if(num<10 && num%2 === 1) {
        console.log(num)
    }
    if((num>=20 && ((((num%1001)%101)%11) === 9) || num>=108 && (((num%1001)%101) === 7) || num>=1006 && (num%1001 === 5)))  {
        console.log(num)
    }
}

for (i=1; i<=10000; i++) {
    notSelfNumber(i);
}