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
        var sum = 0; //starting from 0; still needs sum.
        while (true) {
            if (!nums[i]) {
                if (sum !== 0) {
                    patchCount += Math.ceil(Math.log(n / sum) / Math.log(2));
                    break;
                }
                patchCount += Math.floor(Math.log(n) / Math.log(2)) + 1;
                break;
            }
            else if (n <= nums[i]) {
                if (sum === 0) {
                    patchCount += Math.ceil(Math.log(n) / Math.log(2));
                }
                else {
                    patchCount += Math.ceil(Math.log(n / sum) / Math.log(2));
                }
                break;
            }
            else if (nums[i] < n) {
                if (sum <= nums[i]) {
                    var count = 0;
                    if (sum === 0) {
                        count = Math.ceil(Math.log(nums[i]) / Math.log(2));
                        patchCount += count;
                    }
                    else {
                        count = Math.ceil(Math.log(nums[i] / sum) / Math.log(2));
                        patchCount += count;
                    }
                    sum = sum * Math.pow(2, count) + nums[i] + 1;
                }
                else {
                    sum += nums[i] + 1;
                }
                i++;
            }
        }
        //console.log(copyNums);
        return patchCount;
    }
    return null;
};
console.log("test4");
//console.log(minPatches4([1, 2, 31, 33], 2147483647));
//console.log(minPatches4([1, 5, 10], 20));
console.log(minPatches4([1, 2, 3], 2147483647)); // 29
//# sourceMappingURL=patchingArray2.js.map