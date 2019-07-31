using System;
using System.Collections.Generic;
using System.Text;

namespace _2019_07_31_MaxSumOfSubarray
{
    class MaxSumOfSubarray
    {
        public static int caculateMaxSumOfSubarray(int[] array)
        {
            if (array == null || array.Length < 1)
                throw new Exception("invalid parameters.");

            int curSum = array[0];
            int curMax = curSum;

            for (int i = 1; i < array.Length; i++)
            {
                if (curSum <= 0)
                    curSum = array[i];
                else
                    curSum += array[i];


                if (curSum > curMax)
                    curMax = curSum;
            }

            return curMax;

        }
    }
}
