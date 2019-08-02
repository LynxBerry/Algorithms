using System;
using System.Collections.Generic;
using System.Text;

namespace _2019_08_02_PrintToLargestNdigits
{
    class PrintToLargestNdigits
    {

        public static void Print(int numOfDigits)
        {
            // To Do: edge cases;

            PrintCore(new List<int> { }, numOfDigits );


        }

        private static void PrintCore(List<int> res, int numOfRestDigits)
        {
            if (numOfRestDigits == 0)
            {
                PrintResult(res);
                return;
            }
                

            for (int n = 0; n < 10; n++)
            {
                List<int> newRes = new List<int>(res); // Any Potential to save space? Good way to clone a List?
                newRes.Add(n);
                PrintCore(newRes, numOfRestDigits - 1);

            }

        }

        private static void PrintResult(List<int> res)
        {
            // skip zeros
            int i;
            for (i = 0; i < res.Count && res[i] == 0; i++)
            {
               
            }

            for (int j = i; j < res.Count; j++)
            {
                Console.Write($"{res[j]}");
            }

            //res.ForEach(ch=> { Console.Write($"{ch}"); });
            Console.WriteLine();

        }
    }
}
