namespace _2019_08_22_PowerBase
{
    class PowerBase
    {
        public static double Power(double baseNum, int exponent)
        {
            if (baseNum == 0) // How to compare Double numbers
            {
                if (exponent <= 0)
                    throw new System.Exception("Invalid Params: Base is 0 and Exponent <=0 ");
                return 0; // Case: base is 0 and exponent > 0
            }

            // The follow is unnecessary because this case has been taken care in PowerHelper
            // if (exponent == 0)
            //     return 1;
            
            if (exponent >= 0)
                return PowerHelper(baseNum, exponent);
            else
                return 1 / PowerHelper(baseNum, -exponent);


        }

        private static double PowerHelper(double baseNum, int nonNegtiveExponent)
        {
            if (nonNegtiveExponent == 0)
                return 1;

            double result = PowerHelper(baseNum, nonNegtiveExponent >> 1);
            result *= result; // result = result * result;

            // check whether exponent is odd or even
            if ((nonNegtiveExponent & 1) == 1) // odd                
                result *= baseNum;

            return result;

        }
    }
    
}