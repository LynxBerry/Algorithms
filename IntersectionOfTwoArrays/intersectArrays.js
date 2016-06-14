// https://leetcode.com/problems/intersection-of-two-arrays/
var intersection = function (nums1, nums2) {
    var hash = {};
    var arrayIntersect = [];
    var lengthNums1 = nums1.length;
    var lengthNums2 = nums2.length;
    for (var i = 0; i < lengthNums1; i++) {
        hash[nums1[i]] = 1; // cannot use 0 because 0 and undefined are the same.
    }
    //console.log(hash);
    for (var i = 0; i < lengthNums2; i++) {
        if (hash[nums2[i]] && (hash[nums2[i]] === 1)) {
            arrayIntersect.push(nums2[i]);
            hash[nums2[i]]++;
        }
    }
    return arrayIntersect;
};
console.log(intersection([1, 2, 2, 1], [2, 2]));
//# sourceMappingURL=intersectArrays.js.map