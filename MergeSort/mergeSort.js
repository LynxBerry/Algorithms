/*
    Merge Sort
 */

function mergeArray(firstArray, secondArray) {
    var sizeFirst = firstArray.length;
    var sizeSecond = secondArray.length;
    var newArray = [];

    var i = 0;
    var j = 0;

    while ((i < sizeFirst) && (j < sizeSecond)) {
        if (secondArray[j] < firstArray[i]) {
            newArray.push(secondArray[j]);
            j++;
        } else {
            newArray.push(firstArray[i]);
            i++;
        }
    }

    if ( i === sizeFirst) { //copy elements of 2nd to final
        while(j < sizeSecond){
            newArray.push(secondArray[j]);
            j++;
        }
    } else {
        while(i < sizeFirst){
            newArray.push(firstArray[i]);
            i++;
        }
    }

    return newArray;

}

function mergeSort(inputArray) { // return a new sorted array
    var size = inputArray.length;
    if (size > 1) { //do something if at least has 2 elements.
        var firstArray = mergeSort(inputArray.slice(0,Math.floor(size/2)));
        var secondArray = mergeSort(inputArray.slice(Math.floor(size/2)));
        return mergeArray(firstArray, secondArray);
    }
    return inputArray.slice(); // otherwise return a copy
}

var testArray = [3, 45, 23, 11, 76, 85];

console.log(mergeSort(testArray));