using System;
using System.Collections.Generic;
using System.Text;

namespace DataStructure
{
    class Permutation
    {
        /* Combinations 2 out of N. Doesn't consider duplicate case. */
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


        /* Combinations 2 out of N. Consider duplicate case. */
        public static List<int[]> GenCombinationsOfTwoDigitsDuplicate(int[] array)
        {
            if (array.Length < 2)
            {
                throw new Exception("Invalid Parameter: The length of array cannot be less than 2.");
            }

            /* keep the following code just for reference */
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

            /* keep the following code just for reference */
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



            HashSet<int> trackingDuplicateFor1stDigit = new HashSet<int> { }; // tracking duplicate for each series of loops
            for (int firstDigit = 0; firstDigit < array.Length - 1 /* first Digit cannot reach the last position*/; firstDigit++)
            {
                if (trackingDuplicateFor1stDigit.Contains(array[firstDigit])) // exits already
                    continue;
                else
                    trackingDuplicateFor1stDigit.Add(array[firstDigit]);

                HashSet<int> trackingDuplicateFor2ndDigit = new HashSet<int> { }; // tracking duplicate for each series of loops
                for (int secondDigit = firstDigit + 1; secondDigit < array.Length; secondDigit++)
                {
                    if (trackingDuplicateFor2ndDigit.Contains(array[secondDigit]))
                        continue;
                    else
                        trackingDuplicateFor2ndDigit.Add(array[secondDigit]);

                    answer.Add(new int[] { array[firstDigit], array[secondDigit] });
                }
            }

            return answer;

        }



        public static List<List<int>> GenCombinationsRecursive(int[] array, int numOutOfN)
        {
            if (array.Length < numOutOfN)
                throw new Exception("Invalid Parameter: The length of array cannot be less than the number of the elements to generate.");

            List<List<int>> answer = new List<List<int>> { };

            GenCombinationsCore(array, 0, numOutOfN, new List<int> { }, answer);

            return answer;
        }


        private static void GenCombinationsCore(int[] array, int startOfRest, int numOutOfN, List<int> curResult, List<List<int>> answer)
        {
            if (numOutOfN > (array.Length - startOfRest)) // What we need to select is beyond what is available.
            {
                return;
            }

            if (numOutOfN == 0)
            {
                answer.Add(curResult);
                return;
            }
                

            int x = array[startOfRest];
            //  collections have x
            List<int> withX = new List<int>(curResult); // shallow copy. Copy only if you want to modify.
            withX.Add(x);
            GenCombinationsCore(array, startOfRest + 1, numOutOfN - 1, withX, answer);

            // collections have no x
            List<int> withNoX = curResult; // no need copy if nothing is added.
            GenCombinationsCore(array, startOfRest + 1, numOutOfN, withNoX, answer);


        }
    }
}
