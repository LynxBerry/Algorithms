using System;

namespace _2019_08_03_MergeSort
{
    class Program
    {
        static void Main(string[] args)
        {
            // int[] testArray = new int[]{1,222,3,44,5, 21, 73};
            int[] testArray = new int[]{1};
            MergeSort.Sort(testArray);

            foreach (var x in testArray)
            {
                Console.Write($"{x} ");
            }
        }
    }
}
