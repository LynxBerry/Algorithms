var inputArray1 = [-1, 10, -2, 34, -15, -20, 20, 78, 12];

//all negative numbers
var inputArray2 = [-10, -10, -2, -34, -15, -20, -20, -78, -1];
// Init
// To Do: how to represent the min INT
var maxSumOfSubarray = -65535;
var maxSumOfEnding = 0; // The max sum of the right part of the array so far.
//var p = 0;
//var q = 0;
//var left = 0;

for(var j = 0; j < inputArray.length; j++){
    maxSumOfEnding = maxSumOfEnding + inputArray[j];

    

    if (maxSumOfEnding > maxSumOfSubarray){
        maxSumOfSubarray = maxSumOfEnding;
    }

    if (maxSumOfEnding < 0) {
        maxSumOfEnding = 0;
    }
}

//console.log(p);
//console.log(q);
console.log(maxSumOfSubarray);
