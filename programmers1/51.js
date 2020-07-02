// 크레인 인형뽑기 게임
/*
NxN크기 정사각형 격자
크레인을 좌우로 움직여서 멈춘 위치에서
가장 위에 있는 인형을 집어 올릴 수 있습니다

만약 같은 모양의 인형 두 개가 바구니에 연속해서 쌓이게 되면
두 인형은 터뜨려지면서 바구니에서 사라지게 됩니다.

만약 인형이 없는 곳에서 크레인을 작동시키는 경우에는
아무런 일도 일어나지 않습니다.

바구니는 모든 인형이 들어갈 수 있을 만큼 충분히 크다고 가정합니다.

board: 게임 화면의 격자의 상태가 담긴 2차원 배열
moves:  인형을 집기 위해 크레인을 작동시킨 위치가 담긴 배열
return: 크레인을 모두 작동시킨 후 터트려져 사라진 인형의 개수

ex)
board = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]]
moves = [1,5,3,5,1,2,1,4]
result = 4
*/

'use strict'

function solution(board, moves) {
    var n = board.length;
    var basket = [];
    for (var i = 0; i<moves.length; i++) {
         // i = 0~7, move[i] = 1,5,3,5,1,2,1,4
         var target = moves[i];
        for (var j = 0; j<n; j++) { // j = 0, 1, 2, 3, 4
            if(board[j][moves[i]-1] !== 0) { 
            basket.push(board[j][moves[i]-1]);
            board[j][moves[i]-1] = 0;
            break;
            }            
        }
    }



    console.log(basket);
}

var b = [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]];
var m = [1,5,3,5,1,2,1,4];

solution(b,m);