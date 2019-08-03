'use strict';

/* 
    Problem:
        Given an array, find the subarray which has the maximum sum of its elements.
*/

/* 
    To DO:
        Javascript Array Operation
        Function for output        
*/

function getSubarrayOfMaxSum(inputArray){
    /* 
        To DO: validate the input
              a. It has to be array of number.
              b. It cannot be empty array.
    */

    var p = 0; // pointer to the start of the subarray.
    var q = 0; // pointer to the end of the subarray.


    // The code is going to step from left to the right. 
    // So init the sumOfSubarray with the first element of the given array.
    var sumOfSubarray = inputArray[0]; 

    // identify the subarrary within (0..j+1) based on the existing subarray from within (0..j)
    for(var j = 0; j < inputArray.length - 1; j++){ // j is going to the right one step a time.

        var sumOfRightArray = 0; // Accumlate the sum from position j+1(right most) to the left gradually.
        var leftBound = p; // The left bound shall not exceed the start point of existing subarrary, otherwise meaningless.
        var rightBound = q; // Right bound. Will modify q in the following loop. Save q to rightBound so.
        var sumMax = sumOfSubarray; //Current max sum value.
        for(var k = j + 1; k >= leftBound; k--){ // for each j+1, going to the left for detection.
            if (k == rightBound){
                sumOfRightArray += sumOfSubarray; // If it crosses the boundary of existing subarray, add sumOfSubarray as whole.
                k = leftBound; // jump to position leftBound.
            }else{
                sumOfRightArray += inputArray[k]; // gradually accumlate the value from j+1 to the left.
            }

            if(sumOfRightArray >= sumMax){ // whether the sum from j+1 till current position is larger than sumOfSubarray
                // Update the pointers of Subarray & sumOfSubarray if so.
                q = j + 1;
                p = k;
                sumMax = sumOfRightArray;

            }
        }
        sumOfSubarray = sumMax;

    }

    return {p:p, q:q};
    

}

var testArray1 = [1000, -2, 34, -15, -34, 20, 78, 12];
var testArray2 = [1000, -2, 34, -15, -34, 20, 7, 12];
var testArray3 = [1000, -2, 34, -15, -34, 20, 7, 22];


console.log(getSubarrayOfMaxSum(testArray1));
console.log(getSubarrayOfMaxSum(testArray2));
console.log(getSubarrayOfMaxSum(testArray3));

