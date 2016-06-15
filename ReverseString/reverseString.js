// reverse String
var reverseString = function (s) {
    var newString = "";
    for (var i = s.length - 1; i >= 0; i--) {
        newString = newString.concat(s[i]);
    }
    return newString;
};
//test case
console.log(reverseString("abcdefghijk"));
//# sourceMappingURL=reverseString.js.map