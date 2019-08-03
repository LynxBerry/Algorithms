/*
    C++ version implementation for Merge Sort
    C++ 11
    Created in Xcode
    -Steven Shao
 
 
 */



#include <iostream>

/*
 Purpose: Merge the two given arrays into one sorted array
 Param List:
    first: first array (const)
    sizeFirst: length of first array
    second: second array (const)
    sizeSecond: length of second array
    final: finally resulted array
    sizeFinal: length of final array
 */

void mergeArray(const int*  first, int sizeFirst, const int* second, int sizeSecond, int* final, int sizeFinal)
{
    //indicator for first array
    int i = 0;
    
    //indicator for second array
    int j = 0;
    
    //indicator for 3rd array
    int k = 0;
    
    //Take element from array first and second and put it into final.
    while ( i < sizeFirst && j < sizeSecond)
    {
        if (second[j] < first[i])
        {
            final[k] = second[j];
            j++;
        }
        else
        {
            final[k] = first[i];
            i++;
        }
        
        k++;
        
    }
    
    if (i == sizeFirst) // no elements remain in the first array.
    {
        //copy remaining elements from array Second to array Final
        while ( k < sizeFinal)
        {
            final[k] = second[j];
            j++;
            k++;
        }
    }
    else // no elements remain in the second array.
    {
        //copy remaining elements from array First to array Final
        while (k < sizeFinal)
        {
            final[k] = first[i];
            i++;
            k++;
        }
    }
    
    
}

/* Merge Sort Recursive Function
   Param List:
   array: input array for merge sort. It will be modified on the fly.
   size: length of array
*/
void mergeSort(int array[], int size)
{
    //at least two. otherwise do nothing.
    if (size > 1)
    {
        //divide the array into two.
        int sizeFirst = size/2;
        int sizeSecond = size - sizeFirst;
    
        //allocate storage for divided arrays.
        int *first = new int[sizeFirst];
        int *second = new int[sizeSecond];
    
        for (int i = 0; i < sizeFirst; i++)
        {
            first[i] = array[i];
        }
    
        for (int j = 0; j < sizeSecond; j++)
        {
            second[j] = array[sizeFirst + j];
        }
    
        mergeSort(first, sizeFirst);
        mergeSort(second, sizeSecond);
    
        mergeArray(first, sizeFirst, second, sizeSecond, array, size);
    
        //free the storage, because first and second are useless now.
        delete [] first;
        delete [] second;
    }
    
}


int main(int argc, const char * argv[]) {
    // insert code here...
    //Init an array
    int a[] = {3,45,23,11,76,85};
    
    mergeSort(a, 6);
  

    return 0;
}


