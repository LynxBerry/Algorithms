using System;
using System.Collections.Generic;


namespace _2019_08_15_LastNumberInCircle
{
    class LastNumberInCircle
    {
        public static int GetLastNumberInCircle(int numOfItems, int nthNum)
        {
            if (numOfItems < 1 || nthNum < 1)
                throw new System.Exception("invalid Params!");

            LinkedList<int> listInCircle = new LinkedList<int>();

            // init
            for (int i = 0; i < numOfItems; i++)
            {
                listInCircle.AddLast(i);
            }

            LinkedListNode<int> current = listInCircle.First;

            while (listInCircle.Count > 1)
            {

                for (int i = 1; i < nthNum; i++)
                {
                    Console.WriteLine($"{i}th : {current.Value }");
                    current = current.Next ?? listInCircle.First;
                    

                }
                LinkedListNode<int> next = current.Next ?? listInCircle.First;

                Console.WriteLine($"{nthNum}th : {current.Value} : Delete");
                listInCircle.Remove(current);

                current = next;                
                
                
            }

            return listInCircle.First.Value;

        }
    }
}