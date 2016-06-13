// https://leetcode.com/problems/count-numbers-with-unique-digits/
// Given a non-negative integer n, count all numbers with unique digits, x, where 0 ≤ x < 10^n
// solution: https://leetcode.com/discuss/107981/backtracking-solution
function CountNumbersWithUniqueDigits(n) {
    if (n > 10) {
        return CountNumbersWithUniqueDigits(10);
    }
    var count = 0;
    var bitMask = new Array(10);
    var maxNumber = Math.pow(10, n);
    for (var i = 0; i < 10; i++) {
        bitMask[i] = false;
    }
    count++; //for number 0
    for (var i = 1; i < 10; i++) {
        bitMask[i] = true;
        count += countInner(i, bitMask, maxNumber);
        bitMask[i] = false; //reset bitMask for i to un-used.
    }
    return count;
    function countInner(cur, bitMask, maxNumber) {
        var count = 0;
        if (cur < maxNumber) {
            count++;
        }
        else {
            return 0;
        }
        for (var i = 0; i < 10; i++) {
            if (!bitMask[i]) {
                bitMask[i] = true;
                count += countInner(cur * 10 + i, bitMask, maxNumber);
                bitMask[i] = false;
            }
        }
        return count;
    }
}
for (var i = 0; i <= 10; i++) {
    console.log(i, ":", CountNumbersWithUniqueDigits(i));
}
//# sourceMappingURL=CountNumbersWithUniqueDigits.js.map