function notSelf(n) {
    var a = ((((n % 1001) % 101) % 11))
    if ( a%2 === 1 && a<10 )  {
        var a = 1;
    } else {
        console.log(n);
    }
}
for (i = 1; i <= 10000; i++) {
    notSelf(i);
}