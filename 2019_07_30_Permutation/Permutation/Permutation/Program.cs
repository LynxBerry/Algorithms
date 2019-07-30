using System;

namespace DataStructure
{
    class Program
    {
        static void Main(string[] args)
        {
            Permutation.GenCombinationsOfTwoDigitsDuplicate(new int[] { 1, 1, 2, 2, 3, 3 }).ForEach(array=> {
                
                foreach (var ch in array)
                {
                    Console.Write($"{ch} ");
                }
                Console.WriteLine();

            });

        }
    }
}
