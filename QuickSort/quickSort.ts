// Quick Sort
// need more time to digest this algorithm.

function quickSort(array: number[]):void {
    function quickSortInner(array: number[], l: number, r: number): void {
        if(l >= r)
        {
            return; //no need to sort.
        }

        let pivot = array[l];
        let i = l + 1;
        let j = r;

    
        while (true) {
            while (array[i] < pivot) { //scan from left to right
                i++;
            }
            
            while (array[j] > pivot) { // scan from right to left
                j--;
            }

            if (i < j)
            {
                //swap array[i] and array[j]
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
                i++; j--;
            }
            else // i >= j
            {
                array[l] = array[j];
                array[j] = pivot;
                break;
                
                
            }

        }

        quickSortInner(array, l, j - 1);
        quickSortInner(array, j + 1, r);

    }
    if (array && array.length > 0) {
            array.push(array[0]); // set sentinel 
            quickSortInner(array, 0, array.length - 2);
            array.pop();
    }


}


let array = [56,4,123,4,2, 56, 87, 23, 56, 33, 68, 245, 4, 77];

console.log("Before: %s", array);
quickSort(array);
console.log("After: %s",array);