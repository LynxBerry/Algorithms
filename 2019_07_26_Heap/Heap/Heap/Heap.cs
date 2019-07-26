using System;
using System.Collections.Generic;
using System.Text;

namespace Heap
{
    class Heap
    {
        private int[] binaryTree;
        private int countOfNodes;

        private void swap(ref int a,ref int b)
	    {
            int temp = a;
            a = b;
		    b = temp;	
	    }

        public Heap(int[] binaryTree)
        {
            this.binaryTree = binaryTree;
            countOfNodes = binaryTree.Length - 1; // the 0th element doesn't count.

        }

        public void Heapify()
        {
            // Start from the leaf nodes. Sift down process
            for (int i = countOfNodes; i >= 1; i--)
            {
                int j = i;
                while (2 * j <= countOfNodes)
                {
                    int indexOfMaxChildren = ((2 * j + 1 <= countOfNodes) && (binaryTree[2 * j + 1] > binaryTree[2 * j])) ? (2 * j + 1) : (2 * j);

                    if (binaryTree[indexOfMaxChildren] > binaryTree[j])
                    {
                        swap(ref binaryTree[indexOfMaxChildren], ref binaryTree[j]);

                        j = indexOfMaxChildren;
                    }
                    else
                    {
                        break;
                    }

                }
            }


        }

        public void PrintHeap()
        {
            foreach (var n in binaryTree)
            {
                Console.Write($"{n} ");
            }

            Console.WriteLine();

        }



    }
}
