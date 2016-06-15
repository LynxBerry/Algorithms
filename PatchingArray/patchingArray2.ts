// faster solution

let minPatches2 = function(nums: number[], n: number): number {
    let copyNums = nums.slice(0);
    let patchCount = 0;
    if (n > 0) {
        let i = 0;
        let sum = 0; //starting from 0;
        while(true) {
            if ( (!copyNums[i]) || (sum + 1 < copyNums[i])) { // if next element not exist or sum + 1 < next element
                copyNums.splice(i, 0, sum + 1);
                sum += (sum + 1);
                patchCount++;
            } else { // next element exist && sum + 1 >= next element
                sum += copyNums[i];
            }
            if (sum >= n) { break; }
            i++;
        }
        //console.log(copyNums);
        return patchCount;

    }
    return null;

    
}
/*
console.log("test");
console.log(minPatches2([], 7));
console.log(minPatches2([1, 5, 10], 20));
console.log(minPatches2([1, 2, 31, 33], 2147483647));
*/

// faster faster solution
let minPatches3 = function(nums: number[], n: number): number {
    let copyNums = nums.slice(0);
    let patchCount = 0;
    if (n > 0) {
        let i = 0;
        let sum = 0; //starting from 0;
        while(true) {
            if ( (!copyNums[i]) || (sum + 1 < copyNums[i])) { // if next element not exist or sum + 1 < next element
                //copyNums.splice(i, 0, sum + 1);
                sum += (sum + 1);
                patchCount++;
            } else { // next element exist && sum + 1 >= next element
                sum += copyNums[i];
                i++;
            }
            if (sum >= n) { break; }

        }
        //console.log(copyNums);
        return patchCount;

    }
    return null;

    
}
console.log("test2");
console.log(minPatches3([], 7));
console.log(minPatches3([1, 5, 10], 20));
console.log(minPatches3([1, 2, 31, 33], 2147483647));