function solution(num) {
    var self = [];
    for (a = 0; a <= num/1001; a++) {
        for (b = 0; b <= (num-1001*a)/101; b++) {
            for (c = 0; c <= (num-1001*a-101*b)/11; c++) {
                for (d = 0; d <= (num-1001*a-101*b-11*c)/2; d++) {
                    self.push(1001 * a + 101 * b + 11 * c + 2 * d);
                }
            }
        }
    }
    console.log(self);
}
solution(10000);