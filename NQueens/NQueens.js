// https://leetcode.com/problems/n-queens/
var solveNQueens = function (n) {
    function createChessBoard(n) {
        var chessBoard = [];
        var newArray = new Array(n);
        for (var i = 0; i < n; i++) {
            newArray[i] = '_';
        }
        for (var i = 0; i < n; i++) {
            chessBoard.push(newArray.slice(0));
        }
        return chessBoard;
    }
    function markChessBoard(chess, x, y, chessBoard) {
        if (chessBoard[x] && (chessBoard[x].length > y)) {
            // mark row occupied.         
            for (var col = 0; col < chessBoard[x].length; col++) {
                chessBoard[x][col] = '.';
            }
            // mark col occupied.
            for (var row = 0; row < chessBoard.length; row++) {
                chessBoard[row][y] = '.';
            }
            // mark diag line
            for (var row = x, col = y; row < chessBoard.length && col < chessBoard[row].length; row++, col++) {
                chessBoard[row][col] = '.';
            }
            //mark diag line
            for (var row = x, col = y; row < chessBoard.length && col >= 0; row++, col--) {
                chessBoard[row][col] = '.';
            }
            chessBoard[x][y] = chess;
            return true;
        }
        return false;
    }
    function deepCopy(chessBoard) {
        var newChessboard = [];
        for (var row = 0; row < chessBoard.length; row++) {
            newChessboard.push(chessBoard[row].slice(0));
        }
        return newChessboard;
    }
    function reformat(chessBoard) {
        var newArray = [];
        for (var i = 0; i < chessBoard.length; i++) {
            newArray.push(chessBoard[i].join(''));
        }
        return newArray;
    }
    var solutions = [];
    var blankboard = createChessBoard(n);
    function NQueen(line, board) {
        if (line == (n - 1)) {
            for (var col = 0; col < n; col++) {
                if (board[line][col] == '_') {
                    var newChessboard = deepCopy(board); // if the spot is empty
                    markChessBoard('Q', line, col, newChessboard);
                    // console.log(newChessboard);
                    solutions.push(reformat(newChessboard));
                }
            }
            return;
        }
        else {
            for (var col = 0; col < n; col++) {
                if (board[line][col] == '_') {
                    var newChessboard = deepCopy(board); // if the spot is empty
                    markChessBoard('Q', line, col, newChessboard);
                    NQueen(line + 1, newChessboard);
                }
            }
        }
    }
    NQueen(0, blankboard);
    return solutions;
};
console.log(solveNQueens(8));
for (var i = 0; i < 10; i++) {
    console.log("%d Queen: %d", i + 1, solveNQueens(i + 1).length);
}
console.log("The end.");
//# sourceMappingURL=NQueens.js.map