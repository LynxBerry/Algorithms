using System;

namespace _2019_08_05_SelectionSort
{
    class Program
    {
        static void Main(string[] args)
        {
            
            int pos = SelectionSort.FindMax(new int[]{1,2,33,4,5});

            Console.WriteLine($"The position of Max number is at {pos}.");


            int[] testArray = new int[] {100,2,33,4,5,12, 4, 2,1};

            SelectionSort.Sort(testArray);

            foreach (var x in testArray)
            {
                Console.Write($"{x} ");
            }

        }
    }
}
