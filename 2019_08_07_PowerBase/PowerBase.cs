namespace _2019_08_07_PowerBase
{
    class PowerBase
    {
        private static int PowerBasePositive(int baseNum, int exponent) // baseNum != 0, exponent >= 0
        {
            if (exponent == 0)
                return 1;
            int result;
            if ((exponent & 1) == 0) //even number
            {
                result = PowerBasePositive(baseNum, exponent >> 1);
                result = result * result;
            }
            else // ood number
            {
                result = PowerBasePositive(baseNum, (exponent - 1) >> 1);
                result = baseNum * result * result;
            }

            return result;

        }



        public static double Power(int baseNum, int exponent)
        {
            if (baseNum == 0 && exponent <= 0)
                throw new System.Exception("invalid params.");
            
            if (baseNum == 0)
                return 0;
            
            if (exponent == 0)
                return 1; 
            
            if (exponent > 0)
                return PowerBasePositive(baseNum, exponent);
            else
                return 1.0 / PowerBasePositive(baseNum, -1 * exponent);
        }




    }
}