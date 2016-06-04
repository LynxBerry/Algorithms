//
//  main.cpp
//  Test
//
//  Created by Steven Shao on 3/26/16.
//  Copyright © 2016 Steven Shao. All rights reserved.
//
// MergeSort




#include <iostream>

void mergeArray(const int* first, int sizeFirst, const int* second, int sizeSecond, int* final, int sizeFinal)
{
    //indicator for first array
    int i = 0;

    //indicator for second array
    int j = 0;

    //indicator for 3rd array
    int k = 0;

    while ( i < sizeFirst && j < sizeSecond)
    {
        if (first[i] < second[j])
        {
            final[k] = first[i];
            i++;
        }
        else
        {
            final[k] = second[j];
            j++;
        }

        k++;

    }

    if (i == sizeFirst)
    {
        //copy remaining elements from array Second to array Final
        while ( k < sizeFinal)
        {
            final[k] = second[j];
            j++;
            k++;
        }
    }
    else
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


void mergeSort(int a[], int size)
{
    if (size > 1)
    {
        int sizeFirst = size/2;
        int sizeSecond = size - sizeFirst;

        int *first = new int[sizeFirst];
        int *second = new int[sizeSecond];

        for (int i = 0; i < sizeFirst; i++)
        {
            first[i] = a[i];
        }

        for (int j = 0; j < sizeSecond; j++)
        {
            second[j] = a[sizeFirst + j];
        }

        mergeSort(first, sizeFirst);
        mergeSort(second, sizeSecond);

        mergeArray(first, sizeFirst, second, sizeSecond, a, size);

        delete [] first;
        delete [] second;
    }

}


int main(int argc, const char * argv[]) {
    // insert code here...
    //Init an array
    int a[] = {3,45,23,11,76,85};

    mergeSort(a, 6);


    //printPostorder(BiTree);
    //std::cout << a[i];
    return 0;
}
