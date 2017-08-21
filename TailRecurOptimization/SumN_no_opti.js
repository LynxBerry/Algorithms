/*
    sum from 1 to n. No tail recursion optimization.
 */


function sumN(n){
    if (n === 1){
        return 1;
    }
    return n + sumN(n-1);
}

console.log(sumN(10000000)); //RangeError: Maximum call stack size exceeded