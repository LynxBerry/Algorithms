using System;

namespace _2019_08_22_PrintMatrixClockWise
{
    class PrintMatrixClockWise
    {
        private static int upperBound;
        private static int lowerBound;
        private static int leftBound;
        private static int rightBound;

        private static void SetBounds(int upper, int lower, int left, int right)
        {
            upperBound = upper;
            lowerBound = lower;
            leftBound = left;
            rightBound = right;
        }


        public static void PrintMatrix(int[][] matrix)
        {
            SetBounds(-1, matrix.Length, -1, matrix.Length);
            var result = PrintLine(matrix, 0, 0, 0);

            while (result.HasValue)
            {
                result = PrintLine(matrix, result.Value.nextX, result.Value.nextY, result.Value.nextDirection);

            }
        }

        public static (int nextX, int nextY, int nextDirection)? PrintLine(int[][] matrix, int x, int y, int direction) // leftToRight: 0; upperToBottom: 1; rightToLeft: 2; bottomToTop: 3
        {
            if ((matrix.Length & 1) == 1) // odd
            {
                if (x == matrix.Length / 2 && y == matrix.Length / 2)
                    Console.Write($"{matrix[x][y]} ");
                    return null;
                

            }
            else if (x == matrix.Length / 2 && y == ((matrix.Length / 2) - 1) )
            {
                Console.Write($"{matrix[x][y]} ");
                return null;
            }
            // Boundary condition we need
            if (direction == 0)
            {
                upperBound = x;
                for (int i = y; i < rightBound; i++)
                {
                    Console.Write($"{matrix[x][i]} ");
                }
                return (x + 1, rightBound - 1, 1);
            }
            else if (direction == 1)
            {
                rightBound = y;
                for (int i = x; i < lowerBound; i++)
                {
                    Console.Write($"{matrix[i][y]} ");
                }

                return (lowerBound - 1, y - 1, 2);
            }
            else if (direction == 2)
            {
                lowerBound = x;
                for (int i = y; i > leftBound; i--)
                {
                    Console.Write($"{matrix[x][i]} ");
                }

                return (x - 1, leftBound + 1, 3);
            }
            else // if (direction == 3)
            {
                leftBound = y;
                for (int i = x; i > upperBound; i--)
                {
                    Console.Write($"{matrix[i][y]} ");
                }

                return (upperBound + 1, y + 1, 0);
            }
        }


    }
}