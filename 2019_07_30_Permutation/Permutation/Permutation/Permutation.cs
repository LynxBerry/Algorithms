using System;
using System.Collections.Generic;
using System.Text;

namespace DataStructure
{
    class Permutation
    {

        public static List<int[]> GenCombinationsOfTwoDigits(int[] array)
        {
            if (array.Length < 2)
            {
                throw new Exception("Invalid Parameter: The length of array cannot be less than 2.");
            }

            List<int[]> answer = new List<int[]> { };

            for (int firstDigit = 0; firstDigit < array.Length - 1 /* first Digit cannot reach the last position*/; firstDigit++)
            {
                for (int secondDigit = firstDigit + 1; secondDigit < array.Length; secondDigit++)
                {
                    answer.Add(new int[] {array[firstDigit], array[secondDigit] });
                }
            }

            return answer;
        }

        public static List<int[]> GenCombinationsOfTwoDigitsDuplicate(int[] array)
        {
            if (array.Length < 2)
            {
                throw new Exception("Invalid Parameter: The length of array cannot be less than 2.");
            }

            //Dictionary<int, int> trackingTimes = new Dictionary<int, int> { };
            //foreach(var ch in array)
            //{
            //    if (trackingTimes.ContainsKey(ch))
            //    {
            //        trackingTimes[ch]++;
            //    }
            //    else
            //    {
            //        trackingTimes[ch] = 1;
            //    }
            //}


            List<int[]> answer = new List<int[]> { };

            //foreach(var keyFirst in trackingTimes.Keys)
            //{
            //    trackingTimes[keyFirst]--;
            //    foreach(var keySecond in trackingTimes.Keys)
            //    {
            //        if (trackingTimes[keySecond] > 0)
            //        {
            //            answer.Add(new int[] { keyFirst, keySecond });
            //        }
            //    }
            //    trackingTimes[keyFirst] = 0;
            //}

            //foreach(var keyFirst in trackingTimes.Keys)
            //{
            //    trackingTimes[keyFirst]--;
            //    foreach(var keySecond in trackingTimes.Keys)
            //    {
            //        if (trackingTimes[keySecond] > 0)
            //        {
            //            trackingTimes[keySecond]--;
            //            foreach(var keyThird in trackingTimes.Keys)
            //            {
            //                if (trackingTimes[keyThird] > 0)
            //                {
            //                    answer.Add(new int[] { keyFirst, keySecond, keyThird });
            //                }

            //            }

            //            trackingTimes[keySecond] = 0;
            //        }

            //    } // how to restore after this loop

            //    trackingTimes[keyFirst] = 0;
            //}



            HashSet<int> trackingDuplicate = new HashSet<int> { };
            for (int firstDigit = 0; firstDigit < array.Length - 1 /* first Digit cannot reach the last position*/; firstDigit++)
            {
                if (trackingDuplicate.Contains(array[firstDigit])) // exits already
                    continue;
                else
                    trackingDuplicate.Add(array[firstDigit]);

                HashSet<int> trackingDuplicateInternal = new HashSet<int> { };
                for (int secondDigit = firstDigit + 1; secondDigit < array.Length; secondDigit++)
                {
                    if (trackingDuplicateInternal.Contains(array[secondDigit]))
                        continue;
                    else
                        trackingDuplicateInternal.Add(array[secondDigit]);

                    answer.Add(new int[] { array[firstDigit], array[secondDigit] });
                }
            }

            return answer;

        }
    }
}
