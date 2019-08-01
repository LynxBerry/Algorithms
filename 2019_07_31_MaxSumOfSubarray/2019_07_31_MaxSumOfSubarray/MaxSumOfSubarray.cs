using System;
using System.Collections.Generic;
using System.Text;

namespace _2019_07_31_MaxSumOfSubarray
{
    class MaxSumOfSubarray
    {
        public static int CaculateMaxSumOfSubarray(int[] array)
        {
            if (array == null || array.Length < 1)
                throw new Exception("invalid parameters.");

            int curSumMax = array[0];
            int globalSumMax = curSumMax;

            for (int i = 1; i < array.Length; i++)
            {
                if (curSumMax <= 0)
                    curSumMax = array[i];
                else
                    curSumMax += array[i];


                if (curSumMax > globalSumMax)
                    globalSumMax = curSumMax;
            }

            return globalSumMax;

        }

        // Only get the first answer. not all of them.
        public static Tuple<int, int> GetSubarrayOfMaxSum(int[] array)
        {
            if (array == null || array.Length < 1)
                throw new Exception("Invalid Parameters.");

            int curSumMax = array[0];
            int globalSumMax = curSumMax;
            int leftPointerToCurSubArray = 0;
            int globalLeftPointer = 0;
            int globalRightPointer = 0;

            for (int rightPointerToCurSubArray = 1; rightPointerToCurSubArray < array.Length; rightPointerToCurSubArray++)
            {
                if (curSumMax <= 0)
                {
                    curSumMax = array[rightPointerToCurSubArray];
                    leftPointerToCurSubArray = rightPointerToCurSubArray; // Since the curSumMax becomes array[rightPointerToCurSubArray], need to reset leftPointerToCurSubArray
                }
                else
                    curSumMax += array[rightPointerToCurSubArray];

                if (curSumMax > globalSumMax)
                {
                    globalSumMax = curSumMax;
                    globalLeftPointer = leftPointerToCurSubArray;
                    globalRightPointer = rightPointerToCurSubArray;

                }
                    
            }

            return new Tuple<int, int>(globalLeftPointer, globalRightPointer);

        }
    }
}
