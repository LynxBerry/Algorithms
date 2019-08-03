using System;


namespace Permutation
{
    class Program
    {

        // Try to use Heap's algorithm
        static void GenPerms(int[] array, int nSize)
        {
            if (nSize == 1)
            {
                foreach(var x in array)
                {
                    Console.Write(x);

                }
                Console.Write('\n');
                return;
            }
            // fix the last element
            GenPerms(array, nSize - 1);

            for (int i = 0; i < nSize - 1; i++) // i <= [0, nSize - 1)
            {
                if ((nSize & 1) == 0) // even case 
                    // swap i with the last element
                    swap(array, i, nSize - 1);
                else // odd case
                    // always swap 0 with last element
                    swap(array, 0, nSize - 1);
                // Then do the permutation
                GenPerms(array, nSize - 1);

            }


        }

        // some natural methods
        // array and [l, array.size() - 1] is the left and right boundary of the array
        static void GetPermsV2(int[] array, int l)
        {
            if (l == array.Length - 1)
                PrintOut(array);
            for (int i = l; i < array.Length; i++)
            {
                swap(array, l, i); // plant each i in the first position
                GetPermsV2(array, l + 1); // get perms for the rest
                swap(array, l, i); // swap back;
            }
        }

        static void PrintOut(int[] array)
        {
            foreach (int x in array)
            {
                Console.Write(x);
            }
            Console.Write("\n");

        }

        static void swap(int[] array, int i, int j)
        {
            int temp = array[j];
            array[j] = array[i];
            array[i] = temp;
        }

        static void Main(string[] args)
        {
            //GenPerms(new int[]{1, 2, 3}, 3);
            GetPermsV2(new []{0, 1, 2, 3, 4, 5, 6, 7, 8, 9}, 0);
        }
    }
}
