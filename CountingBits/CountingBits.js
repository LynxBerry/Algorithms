// https://leetcode.com/problems/counting-bits/
var countBits = function (num) {
    var resultArray = [0]; // init
    var count = 1;
    while (count <= num) {
        var length_1 = resultArray.length;
        for (var i = 0; i < length_1; i++) {
            resultArray.push(resultArray[i] + 1);
            count++;
            if (count > num) {
                break;
            }
        }
    }
    return resultArray;
};
console.log(countBits(5));
//# sourceMappingURL=CountingBits.js.map