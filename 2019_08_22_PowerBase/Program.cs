using System;

namespace _2019_08_22_PowerBase
{
    class Program
    {
        static void Main(string[] args)
        {
            double result = PowerBase.Power(2, 0);      // + 0
            double result2 = PowerBase.Power(2, 5);     // + +
            double result3 = PowerBase.Power(2, -2);    // + -
            // double result4 = PowerBase.Power(0, 0);  // 0 0
            double result5 = PowerBase.Power(0, 3);     // 0 +
            // double result6 = PowerBase.Power(0, -3); // 0 -
            double result7 = PowerBase.Power(-3, 0);    // - 0
            double result8 = PowerBase.Power(-3, 3);    // - +
            double result9 = PowerBase.Power(-3, -3);     // - -


            Console.WriteLine("");
        }
    }
}
