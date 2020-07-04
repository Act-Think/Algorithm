function solution(board, moves) {
    var basket = [];
    var count = 0;
    moves.forEach(move => {
        var craneIdx = move - 1; // move-1 = 인덱스
        var column = board.map(x => x[craneIdx]); // 크레인이 위치한 열의 인형 배치
        var dollIdx = column.findIndex(x => x > 0); // 제일 위에 위치한 인형의 인덱스
        var dollNum = column[dollIdx]; // 제일 위에 위치한 인형의 종류
        if (dollIdx !== -1) { // 인형이 있다면
            basket.push(dollNum); // 인형을 바구니에 넣는다.
            board[dollIdx][craneIdx] = 0; // 바구니에 넣은 인형을 기계에서 지운다.
            if (basket.length < 1) return; // 바구니에 인형이 있는 경우만
            if (basket[basket.length - 1] == basket[basket.length - 2]) { // 같다면
                basket.pop(); // 위의 두 개를 터뜨린다.
                basket.pop();
                count += 2; // 터뜨린 인형 수 +2
            }
        }
    });
    return count;
}

var arr = [[0, 0, 0, 0, 0], [0, 0, 1, 0, 3], [0, 2, 5, 0, 1], [4, 2, 4, 4, 2], [3, 5, 1, 3, 1]];
var m = [1, 5, 3, 5, 1, 2, 1, 4]

console.log(solution(arr, m));

