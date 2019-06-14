/*
    There is a matrix(n * n). Number is stored in ascending order of its value for each row and each column.
    Given a number, try to find if this number is in this matrix.
*/


var m = [[2, 3, 4, 5, 6],
         [3, 4, 5, 6, 7],
         [4, 5, 6, 7, 8],
         [5, 6, 7, 8, 9],
         [6, 7, 8, 9, 10]]



// Thinking:
// Starting from the right upper corner - t location at (i, j)
// If the given number x > t, exclude the row where t reisdes. (i++, j)
// If the given number x < t, exclude the column where t resides. (i, j--)
// If the given number x == t, return true. Found.
// If i > (length of matrix - 1), return false. Or If j < 0, return false.



function findNumberInMatrix(matrix, x) {
    var length = matrix.length;
    var i = 0;
    var j = length - 1;
    var flag = false;
    while ( i < length && j >= 0) {
        if (x > matrix[i][j]) {
            i++;
        } else if (x < matrix[i][j]) {
            j--;
        } else if ( x === matrix[i][j] )
        flag = true;
    }

    return flag;

}






