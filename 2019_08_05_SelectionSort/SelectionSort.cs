namespace _2019_08_05_SelectionSort
{
    class SelectionSort
    {

        public static int FindMax(int[] array) // return the position of Max number
        {
            if (array == null || array.Length < 1)
                return -1; // invalid input.

            // To DO: edge cases
            int max = array[0];
            int maxPos = 0;

            for (int i = 0; i < array.Length; i++)
            {
                if (array[i] > max)
                {
                    max = array[i];
                    maxPos = i;
                }
            }

            return maxPos;

        }


        public static void Sort(int[] array) // To Do: Double check with book.
        {
            if (array == null || array.Length < 1)
                return; // do nothing.

            for (int i = 1; i < array.Length; i++) // need to find out max number in each round. (length - 1) rounds
            {
                int max = array[0];
                int maxPos = 0;
                for (int j = 1; j <= array.Length - i; j++)
                {
                    if (array[j] > max)
                    {
                        max = array[j];
                        maxPos = j;
                    }

                }

                // swap
                int temp = array[array.Length -i];
                array[array.Length -i] = array[maxPos];
                array[maxPos] = temp;

            }
        }

    }

}
