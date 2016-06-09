// https://leetcode.com/problems/n-queens/

let solveNQueens = function(n) {
    function createChessBoard(n: number) {
        let chessBoard: string[][] = [];
        let newArray = new Array(n);
        for(let i = 0; i < n; i++) { newArray[i] = '_' }

        for (let i = 0; i < n; i++ ) {
            chessBoard.push(newArray.slice(0));
        }
        return chessBoard;
    }

    function markChessBoard(chess: string, x: number, y: number, chessBoard: string[][]): boolean {
        if (chessBoard[x] && (chessBoard[x].length > y))
        {
            // mark row occupied.         
            for(let col = 0; col < chessBoard[x].length; col++)
            {
                chessBoard[x][col] = '.';
            }

            // mark col occupied.
            for(let row = 0; row < chessBoard.length; row++)
            {
                chessBoard[row][y] = '.';
            }
            
            // mark diag line
            for(let row = x, col = y; row < chessBoard.length && col < chessBoard[row].length; row++, col++)
            {
                chessBoard[row][col] = '.'
            }

            //mark diag line
            for(let row = x, col = y; row < chessBoard.length && col >= 0; row++, col--)
            {
                chessBoard[row][col] = '.'
            }

            chessBoard[x][y] = chess;
            return true;
        }

        return false;
    
    }

    function deepCopy(chessBoard: string[][]): string[][] {
        let newChessboard: string[][] = [];
        for (let row = 0; row < chessBoard.length; row++ )
        {
            newChessboard.push(chessBoard[row].slice(0));
        }
        return newChessboard;
    }

    function reformat(chessBoard: string[][]):string[] {
        let newArray: string[] = [];
        for(let i = 0; i < chessBoard.length; i++) {
            newArray.push(chessBoard[i].join(''));
        }
        return newArray;

    }

    let solutions = [];

    let blankboard = createChessBoard(n);

    function NQueen(line: number, board:string[][]) {
        if (line == (n - 1)) { // when reaching the nth line.
            for(let col = 0; col < n; col++) {
                if(board[line][col] == '_') {
                    let newChessboard = deepCopy(board);// if the spot is empty
                    markChessBoard('Q', line, col, newChessboard);
                    // console.log(newChessboard);
                    solutions.push(reformat(newChessboard));
                }
            }
            return;

        } else {
            for(let col = 0; col < n; col++) {
                if(board[line][col] == '_') {
                    let newChessboard = deepCopy(board);// if the spot is empty
                    markChessBoard('Q', line, col, newChessboard);
                    NQueen(line + 1, newChessboard);
                }
            }

        }

    }

    NQueen(0,blankboard);
    return solutions;
};

console.log(solveNQueens(8));