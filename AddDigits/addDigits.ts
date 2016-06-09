//https://leetcode.com/problems/add-digits/



let addDigts = function(num) {

    function breakNumber(num: number): number[] {
        let nextNum = 0; 
        if ((nextNum = Math.floor(num / 10)) !== 0) {
            let array = breakNumber(nextNum);
            array.push(num % 10);
            return array;

        }

        return [num % 10];

    }



    function addNum(nums: number[]):number {
        let length = nums.length;
        let sum = 0;
        for(let i = 0; i < length; i++) {
            sum += nums[i];
        }
        if (Math.floor(sum/10) === 0) {
            return sum;
        }
        return addNum(breakNumber(sum));
    }
    return addNum(breakNumber(num));

};
console.log(addDigts(123456));