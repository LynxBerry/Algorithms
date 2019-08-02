using System;

/*
 * 题目：输入数字n，按顺序打印出从1最大的n位十进制数。比如输入3，则打印出1、2、3一直到最大的3位数即999。
 * 
 */


namespace _2019_08_02_PrintToLargestNdigits
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.ForegroundColor = ConsoleColor.Green;
            PrintToLargestNdigits.Print(100);
            Console.ReadLine();
        }
    }
}
