// https://leetcode.com/problems/intersection-of-two-arrays/

let intersection = function (nums1: number[], nums2: number[]) {
    let hash:any = {};
    let arrayIntersect = [];
    let lengthNums1 = nums1.length;
    let lengthNums2 = nums2.length;
    for (let i = 0; i < lengthNums1; i++) {
        hash[nums1[i]] = 1; // cannot use 0 because 0 and undefined are the same.
    }
    //console.log(hash);

    for (let i =0; i < lengthNums2; i++) {
        if (hash[nums2[i]] && (hash[nums2[i]] === 1)) { //for first time occurence.
            arrayIntersect.push(nums2[i]);
            hash[nums2[i]]++;
        }
    }

    return arrayIntersect;

};


console.log(intersection([1,2,2,1], [2,2]));

// https://leetcode.com/problems/intersection-of-two-arrays-ii/
// version 2 - allow duplicates
let intersect = function(nums1: number[], nums2: number[]):number[] {
    let hash:any = {};
    let arrayIntersect = [];
    let lengthNums1 = nums1.length;
    let lengthNums2 = nums2.length;
    for (let i = 0; i < lengthNums1; i++) {
        hash[nums1[i]] = (!hash[nums1[i]])? 1 : (hash[nums1[i]] + 1) ; // cannot use 0 because 0 and undefined are the same.
    }
    //console.log(hash);

    for (let i =0; i < lengthNums2; i++) {
        if (hash[nums2[i]] && (hash[nums2[i]] > 0)) { //for first time occurence.
            arrayIntersect.push(nums2[i]);
            hash[nums2[i]]--;
        }
    }

    return arrayIntersect;

};

console.log(intersect([1,2,2,1,2,2], [2,2,2]));

