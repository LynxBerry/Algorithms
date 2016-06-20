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
        console.log(copyNums);
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
    let patchCount = 0;
    if (n > 0) {
        let i = 0;
        let sum = 0; //starting from 0;
        while(true) {
            if ( (!nums[i]) || (sum + 1 < nums[i])) { // if next element not exist or sum + 1 < next element
                sum += (sum + 1);
                patchCount++;
            } else { // next element exist && sum + 1 >= next element
                sum += nums[i];
                i++;
            }
            if (sum >= n) { break; }

        }
        //console.log(copyNums);
        return patchCount;

    }
    return null;

    
}
/*
console.log("test3");
console.log(minPatches3([], 7));
console.log(minPatches3([1, 5, 10], 20));
console.log(minPatches3([1, 2, 31, 33], 2147483647));
*/


// faster faster faster solution
let minPatches4 = function(nums: number[], n: number): number {
    let patchCount = 0;
    if (n > 0) {
        let i = 0;
        let FirstN = 1; //the first possible FirstN should be 1.
        while(true) {
            if(!(nums[i]) || FirstN < nums[i]) {
                if ( nums[i] && n >= nums[i]) {
                    let count = Math.ceil(Math.log(nums[i]/FirstN)/Math.log(2));
                    patchCount += count;
                    //Calculate next possible FirstN.
                    FirstN = FirstN * Math.pow(2, count) + nums[i]
                             /*LastN x 2 */
                    i++;
                } else { // n < nums[i] or nums[i] not exists; no need to calcuate next FirstN.
                    patchCount += Math.floor(Math.log(n/FirstN)/Math.log(2)) + 1;
                    break;

                }

            } else { // nums[i] exits and FirstN >= nums[i]
                //Calculate next possible FirstN.
                FirstN += nums[i];
                i++;
            }

            if(FirstN >= n) {break;}
      
        }

        

        return patchCount;

    }
    return null;

    
}

/*
console.log("test4");
console.log(minPatches4([1, 2, 31, 33], 2147483647));
console.log(minPatches4([1, 5, 10], 20));
console.log(minPatches4([1,2,3],2147483647)); // 29
console.log(minPatches4([],8)); // 4
console.log(minPatches4([1,3],2147483647)); // 30
*/


let minPatches3_1 = function(nums: number[], n: number): number {
    let patchCount = 0;
    if (n > 0) {
        let i = 0;
        let sum = 0; //starting from 0;
        while(sum < n) {
            if ( (!nums[i]) || (sum + 1 < nums[i])) { // if next element not exist or sum + 1 < next element
                sum = ((sum << 1) >>> 0) + 1;
                patchCount++;
            } else { // next element exist && sum + 1 >= next element
                sum += nums[i];
                i++;
            }
            //if (sum >= n) { break; }

        }
        //console.log(copyNums);
        return patchCount;

    }
    return null;

    
}


console.log("test5");
console.log(minPatches3_1([1, 2, 31, 33], 2147483647));
console.log(minPatches3_1([1, 5, 10], 20));
console.log(minPatches3_1([1,2,3],2147483647)); // 29
console.log(minPatches3_1([],8)); // 4
console.log(minPatches3_1([1,3],2147483647)); // 30
console.log(minPatches3_1([],2147483647));