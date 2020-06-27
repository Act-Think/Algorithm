    var s = [];    
    for (a = 0; a < 10; a++) {
        for (b = 0; b < 10 ; b++) {
            for (c = 0; c < 10 ; c++) {
                for (d = 0; d < 10; d++) {
                    s.push(1001*a+101*b+11*c+2*d)
                }
            }
        }
    }
    var self = new Set(s);

    var h = Array.from(Array(10001), (d, i) => i) 
    var x = new Set(h);
    var r = x.delete(s.valueOf());
    console.log(x);