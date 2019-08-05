namespace _2019_08_05_InsertionSort
{
    class InsertSort
    {
        public static void Sort(int[] array)
        {
            for (int i = 1; i < array.Length; i++)
            {
                int posToInsert = FindInsertionPoint(array, i - 1, array[i]);
                int temp = array[i];
                for (int j = i; j > posToInsert; j--)
                {
                    array[j] = array[j - 1];
                }

                array[posToInsert] = temp;
            }
        }

        public static int FindInsertionPoint(int[] array, int end, int key)
        {
            int i = 0;
            int j = end; // [i, j]
            while (i <= j)
            {
                int mid = (i + j) / 2;
                if (array[mid] > key ) // key, mid
                    j = mid - 1;
                else // mid, key
                    i = mid + 1;
            }

            return i;

        }
    }
}