// Reverse a given list. Do not use extra storage
var list = [3, 4, 5, 6, 8];
function reverseList(array) {
    var length = array.length;
    var halflength = Math.floor(length / 2);
    var temp;
    for (var i = 0; i < halflength; i++) {
        temp = array[i];
        array[i] = array[length - 1 - i];
        array[length - 1 - i] = temp;
    }
}
reverseList(list);
console.log("The list is %s", list);
//# sourceMappingURL=ReverseList.js.map