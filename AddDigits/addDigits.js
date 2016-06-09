//https://leetcode.com/problems/add-digits/
var addDigts = function (num) {
    function breakNumber(num) {
        var nextNum = 0;
        if ((nextNum = Math.floor(num / 10)) !== 0) {
            var array = breakNumber(nextNum);
            array.push(num % 10);
            return array;
        }
        return [num % 10];
    }
    function addNum(nums) {
        var length = nums.length;
        var sum = 0;
        for (var i = 0; i < length; i++) {
            sum += nums[i];
        }
        if (Math.floor(sum / 10) === 0) {
            return sum;
        }
        return addNum(breakNumber(sum));
    }
    return addNum(breakNumber(num));
};
console.log(addDigts(123456));
//# sourceMappingURL=addDigits.js.map