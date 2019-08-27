namespace _2019_08_27_CountBinaryOne
{
    class CountBinaryOne
    {
        public static int Count(int input)
        {
            int count = 0;

            while (input != 0)
            {
                input = input & (input - 1);
                count++;
            }

            return count;

        }
    }
}