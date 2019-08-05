using System;

namespace _2019_08_05_BubbleSort
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] testArray = {7,2,3,1,5,13,1};
            BubbleSort.Sort(testArray);
            foreach(var x in testArray)
            {
                Console.Write($"{x} ");
            }
        }
    }
}
