using System;

namespace _2019_08_22_PrintMatrixClockWise
{
    class Program
    {
        static void Main(string[] args)
        {
            int[][] matrix = new int[][]{
                new int[]{1, 2, 3, 4},
                new int[]{5, 6, 7, 8},
                new int[]{9, 10, 11, 12},
                new int[]{13, 14, 15, 16}
            };

            PrintMatrixClockWise.PrintMatrix(matrix);

        }
    }
}
