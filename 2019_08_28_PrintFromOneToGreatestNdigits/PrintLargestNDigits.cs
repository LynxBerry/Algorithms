// 题目：输入数字n，按顺序打印出从1最大的n位十进制数。比如输入3，则打印出1、2、3一直到最大的3位数即999
using System;

namespace _2019_08_28_PrintFromOneToGreatestNdigits
{
    class PrintGreatestNdigits
    {
        public static void Print(int numOfDigits)
        {
            if (numOfDigits > 0)
            {
                int[] res = new int[numOfDigits];
                PrintHelper(res, numOfDigits);

            }

        }

        private static void PrintHelper(int[] result, int numOfRemainDigits)
        {
            if (numOfRemainDigits == 0)
            {
                PrintNum(result);
                return;
            }
                
            int pos = result.Length - numOfRemainDigits;

            for (int i = 0; i <= 9; i++)
            {
                result[pos] = i;
                PrintHelper(result, numOfRemainDigits - 1);
            }


        }

        private static void PrintNum(int[] result)
        {
            if (result.Length > 0)
            {
                int i = 0;
                // while (result[i] == 0) // skip the beginning 0
                // {
                //     i++;
                // }

                for (i = 0; i < result.Length && result[i] == 0; i++);


                for (int j = i; j < result.Length; j++)
                {
                    Console.Write($"{result[j]}");
                }

                Console.WriteLine("");
            }
        }
    }
}