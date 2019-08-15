using System;
using System.Collections;

namespace _2019_08_15_ArrayCircularTraverse
{
    class Program
    {
        static void Main(string[] args)
        {
            int length = 12;
            int[] array = new int[length];

            IEnumerator ie = array.GetEnumerator();

            


            for (int i = 0; i < length; i++)
            {
                array[i] = i;
            }


            const int totalSteps = 30;
            int count = totalSteps;
            while( (count--) > 0)
            {
                if (ie.MoveNext() == false)
                {
                    ie.Reset();
                    ie.MoveNext();
                }

                Console.WriteLine($"Value is {ie.Current}");

            }

            Console.WriteLine($"======Separator================");
            // Or

            for (int i = 0; i < totalSteps; i++)
            {
                Console.WriteLine($"BValue is {array[i % length]}");
            }


            Console.ReadLine();
        }
    }
}
