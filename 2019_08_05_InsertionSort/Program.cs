using System;

namespace _2019_08_05_InsertionSort
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] testArray = {22, 1, 3,4, 44, 77};
            InsertSort.Sort(testArray);

            foreach (int x in testArray)
            {
                Console.WriteLine($"{x} ");
            }
        }
    }
}
