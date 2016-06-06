function maxNumber(input) {
    var max;
    var length;
    if (input && input.length > 0) {
        max = input[0];
        length = input.length;
        for (var i = 0; i < length; i++) {
            max = max > input[i] ? max : input[i];
        }
    }
    return max; // If the input array is null or empty, return max equals undefined.
}
//Test cases.
console.log(maxNumber([1, 2, 3, 4, 5, 6, 7, 8, 8]));
console.log(maxNumber([1, 2, 3, 4, 5, 6, 7, 88, 8]));
//# sourceMappingURL=maxNumber.js.map