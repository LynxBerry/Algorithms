// faster solution
var minPatches2 = function (nums, n) {
    var copyNums = nums.slice(0);
    var patchCount = 0;
    if (n > 0) {
        var i = 0;
        var sum = 0; //starting from 0;
        while (true) {
            if ((!copyNums[i]) || (sum + 1 < copyNums[i])) {
                copyNums.splice(i, 0, sum + 1);
                sum += (sum + 1);
                patchCount++;
            }
            else {
                sum += copyNums[i];
            }
            if (sum >= n) {
                break;
            }
            i++;
        }
        console.log(copyNums);
        return patchCount;
    }
    return null;
};
/*
console.log("test");
console.log(minPatches2([], 7));
console.log(minPatches2([1, 5, 10], 20));
console.log(minPatches2([1, 2, 31, 33], 2147483647));
*/
// faster faster solution
var minPatches3 = function (nums, n) {
    var patchCount = 0;
    if (n > 0) {
        var i = 0;
        var sum = 0; //starting from 0;
        while (true) {
            if ((!nums[i]) || (sum + 1 < nums[i])) {
                sum += (sum + 1);
                patchCount++;
            }
            else {
                sum += nums[i];
                i++;
            }
            if (sum >= n) {
                break;
            }
        }
        //console.log(copyNums);
        return patchCount;
    }
    return null;
};
/*
console.log("test3");
console.log(minPatches3([], 7));
console.log(minPatches3([1, 5, 10], 20));
console.log(minPatches3([1, 2, 31, 33], 2147483647));
*/
// faster faster faster solution
var minPatches4 = function (nums, n) {
    var patchCount = 0;
    if (n > 0) {
        var i = 0;
        var FirstN = 1; //the first possible FirstN should be 1.
        while (true) {
            if (!(nums[i]) || FirstN < nums[i]) {
                if (nums[i] && n >= nums[i]) {
                    var count = Math.ceil(Math.log(nums[i] / FirstN) / Math.log(2));
                    patchCount += count;
                    //Calculate next possible FirstN.
                    FirstN = FirstN * Math.pow(2, count) + nums[i];
                    /*LastN x 2 */
                    i++;
                }
                else {
                    patchCount += Math.floor(Math.log(n / FirstN) / Math.log(2)) + 1;
                    break;
                }
            }
            else {
                //Calculate next possible FirstN.
                FirstN += nums[i];
                i++;
            }
            if (FirstN >= n) {
                break;
            }
        }
        return patchCount;
    }
    return null;
};
/*
console.log("test4");
console.log(minPatches4([1, 2, 31, 33], 2147483647));
console.log(minPatches4([1, 5, 10], 20));
console.log(minPatches4([1,2,3],2147483647)); // 29
console.log(minPatches4([],8)); // 4
console.log(minPatches4([1,3],2147483647)); // 30
*/
var minPatches3_1 = function (nums, n) {
    var patchCount = 0;
    if (n > 0) {
        var i = 0;
        var sum = 0; //starting from 0;
        while (sum < n) {
            if ((!nums[i]) || (sum + 1 < nums[i])) {
                sum = ((sum << 1) >>> 0) + 1;
                patchCount++;
            }
            else {
                sum += nums[i];
                i++;
            }
        }
        //console.log(copyNums);
        return patchCount;
    }
    return null;
};
console.log("test5");
console.log(minPatches3_1([1, 2, 31, 33], 2147483647));
console.log(minPatches3_1([1, 5, 10], 20));
console.log(minPatches3_1([1, 2, 3], 2147483647)); // 29
console.log(minPatches3_1([], 8)); // 4
console.log(minPatches3_1([1, 3], 2147483647)); // 30
console.log(minPatches3_1([], 2147483647));
//# sourceMappingURL=patchingArray2.js.map