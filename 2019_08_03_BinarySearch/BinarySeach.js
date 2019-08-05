
function BinarySearch(array, target) {
    var i = 0;
    var j = array.length - 1;

    while (i <= j)
    {
        var mid = (i + j) / 2;

        if (array[mid] == target)
            return mid;
        else if (array[mid] < target) // mid, target
            i = mid + 1;
        else  // mid > target,  target mid
            j = mid - 1;


    }
    return -1
}

var inputArray = [1, 3, 4, 5, 6, 7, 8];
//                ^        ^        ^
//                i       mid       j
console.log(BinarySearch(inputArray, 2))