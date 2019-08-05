namespace _2019_08_05_BubbleSort
{
    class BubbleSort
    {
        public static void Sort(int[] array)
        {
            for (int i = 1; i < array.Length; i++) // select (Length - 1) max numbers
            {
                for (int j = 0; j < array.Length - i; j++)
                {
                    if (array[j] > array[j + 1])
                    {
                        // swap
                        int temp = array[j];
                        array[j] = array[j + 1];
                        array[j + 1] = temp;

                    }
                }
            }

        }
    }
}