using System;

namespace _2019_08_06_ArrayRotate
{
    class Program
    {
        static void Main(string[] args)
        {
            /*
                Circular Assignment
                [2,3,4,5]
                rotate by one step ( to the right)
                [5,2,3,4]
                rotate by one step
                [4,5,2,3]
             */

            int[] test = {2,3,4,5};
            //            0 1 2 3
            // rotate by one step
            int temp = test[3];
            test[3] = test[2];
            test[2] = test[1];
            test[1] = test[0];
            test[0] = temp;

            foreach(int x in test)
            {
                Console.Write($"{x} ");
            }



        }
    }
}
