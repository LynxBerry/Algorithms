'use strict'
/*
    Demostrate how to write recursive code so that compiler is able to optimize.
    use --harmony
 */

var n = 10000000; // sum from 1 to n.

function sumN(totalSumSoFar, n) { //Recursive function
    if (n === 0) {
        return totalSumSoFar;
    }

    return sumN(totalSumSoFar + n, n - 1) // Since there is no context needed to be saved, can be optimized as Tail Recursion Optimization.

}

console.log(sumN(0,n));