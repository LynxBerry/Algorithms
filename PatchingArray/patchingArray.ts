// Patching Array
// https://leetcode.com/problems/patching-array/
// I know the answer, but I don't know how I get to the answer and why it is correct.

// nums is a sorted positive integer array
// from right to left only.
let nums = [1, 5, 10];

// return how many patches nums need to cover range from 1 to n(inclusive).
let minPatches = function(nums: number[], n: number): number {
    let copyNums = nums.slice(0);
    let patchCount = 0;
    if (nums.length > 0) {
        for (let i = 1; i < n + 1; i++) { // ends at n.
            let sum = i;
            let pos = 0;
            for (let j = copyNums.length - 1; j >= 0 ; j--) {
                if( (sum - copyNums[j]) > 0 ) { 
                    // need to mark first large position
                    if (pos === 0) {pos = j + 1};
                    sum = sum - copyNums[j];
                } else if ((sum - copyNums[j]) === 0) {
                    sum = sum - copyNums[j];
                    break; // no need to patch.
                } else { // < 0
                    // do nothing, to try next number; skip
                }

            }
            if (sum > 0) { 
                copyNums.splice(pos, 0, i); // patch.
                patchCount++;
            }

        }
        // test
        //console.log(copyNums);
        return patchCount;

    }

    return null;

}

//test case
console.log(minPatches([1, 5, 10], 20));
console.log(minPatches([1, 2, 2], 5));
console.log(minPatches([1, 3], 6));
console.log(minPatches([1, 2, 31, 33], 2147483647));