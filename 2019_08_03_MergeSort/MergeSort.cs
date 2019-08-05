namespace _2019_08_03_MergeSort
{
    class MergeSort
    {
        public static void Sort(int[] array)
        {
            if (array.Length <= 1)
                return;

            // Split the array
            int lengthFirstArray = array.Length / 2;
            int lengthSecondArray = array.Length - lengthFirstArray;

            int[] firstArray = new int[lengthFirstArray];
            int[] secondArray = new int[lengthSecondArray];

            for (int i = 0; i < lengthFirstArray; i++)
            {
                firstArray[i] = array[i];
            }

            for (int i = 0; i < lengthSecondArray; i++ )
            {
                secondArray[i] = array[i + lengthFirstArray];
            }

            Sort(firstArray);
            Sort(secondArray);

            MergeArray(firstArray, secondArray, array);





        }

        public static void MergeArray(int[] firstArray, int[] secondArray, int[] mergedArray)
        {

            int i = 0;
            int j = 0;
            int k = 0;

            while (i < firstArray.Length && j < secondArray.Length)
            {
                if (firstArray[i] < secondArray[j])
                {
                    mergedArray[k] = firstArray[i];
                    i++;
                }
                else
                {
                    mergedArray[k] = secondArray[j];
                    j++;
                }
                k++;

            }

            while (i < firstArray.Length)
            {
                mergedArray[k++] = firstArray[i++];
            }

            while (j < secondArray.Length )
            {
                mergedArray[k++] = secondArray[j++];
            }



        }

    }
}