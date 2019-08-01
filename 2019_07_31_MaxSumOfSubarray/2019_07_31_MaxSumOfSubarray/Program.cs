using System;

namespace _2019_07_31_MaxSumOfSubarray
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine(MaxSumOfSubarray.CaculateMaxSumOfSubarray(new int[] { 1, 2, 3,-7,6}));

            int[] testArray = { 1, 2, 3, -1, 6 };
            var pointers = MaxSumOfSubarray.GetSubarrayOfMaxSum(testArray);
            for (int i = pointers.Item1; i <= pointers.Item2; i++)
            {
                Console.Write($"{testArray[i]} ");
            }

        }
    }
}
