var inputArray = [-1, 10, -2, 34, -15, -20, 20, 78, 12];

// Init
var maxSumOfSubarray = inputArray[0];
var maxSumOfEnding = inputArray[0]; // The max sum of the right part of the array so far.
var p = 0;
var q = 0;
var left = 0;

for(var j = 0; j < inputArray.length - 1; j++){
    if (inputArray[j+1] >= (inputArray[j+1] + maxSumOfEnding)) {
        $left = j + 1;
        maxSumOfEnding = inputArray[j+1];
    } else {
        maxSumOfEnding += inputArray[j+1];
    }

    if (maxSumOfEnding >= maxSumOfSubarray){
        p = $left;
        q= j + 1;
        maxSumOfSubarray = maxSumOfEnding;
    }
}

console.log(p);
console.log(q);
console.log(maxSumOfSubarray);
