using System;
using System.Collections.Generic;
using System.Text;

namespace DataStructure
{
    class Heap<T> where T : IComparable<T>
    {
        private List<T> heap;

        private void Swap(int i, int j)
	    {
            T temp = heap[i];
            heap[i] = heap[j];
		    heap[j] = temp;	
	    }

        public Heap()
        {
            heap = new List<T>(){default(T)};
        }

        public Heap(List<T> biTreeAsArrayExcludingZerothElement)
        {
            if (biTreeAsArrayExcludingZerothElement.Count == 0)
            {
                throw new Exception("Require at least one dummy head in the beginning.");
            }
            this.heap = biTreeAsArrayExcludingZerothElement;

        }

        /* Process to build a heap */
        public void Heapify()
        {
            int countHeapNodes = heap.Count - 1;
            // Iterate through each Parent nodes, starting from the last Parent node. 
            for (int lastParent = countHeapNodes / 2; lastParent >= 1; lastParent--)
            {
                SiftDownNode(lastParent, countHeapNodes); // Sift down against each last Parent;                
            }


        }

        public void Sort()
        {
            Heapify();
            SoftDeleteOneByOne();
        }

        private void SiftDownNode(int parent, int countHeapNodes)
        {
                int leftChild = 2 * parent;
                int rightChild = 2 * parent + 1;

                // Sift down process. From parent to children, to children's children.
                while (leftChild <= countHeapNodes) // It still has children, at least left child.
                {
                    int maxChild = leftChild;
                    if ((rightChild <= countHeapNodes) && // It has right child also.
                        (heap[rightChild].CompareTo(heap[leftChild]) > 0)) // And the value of right child is strictly greater than the value of left child.
                        maxChild = rightChild;

                    if (heap[maxChild].CompareTo(heap[parent]) > 0) // Swap if there's a child larger than Parent.
                    {
                        Swap(maxChild, parent);

                        parent = maxChild;
                        leftChild = 2 * parent;
                        rightChild = 2 * parent + 1;
                    }
                    else // already heapified.
                    {
                        break;
                    }

                }

        }

        public void Insert(T element)
        {
            heap.Add(element);
            int insertedChild = heap.Count - 1;
            int parent = insertedChild / 2;
            int child = insertedChild;
            while (parent >= 1)
            {
                if (heap[child].CompareTo(heap[parent]) <= 0) // already is heap
                    break;
                
                Swap(child, parent);
                child = parent;
                parent = parent / 2;
                
            }

        }

        private void SoftDeleteOneByOne()
        {
            int countHeapNodes = heap.Count - 1;

            while (countHeapNodes > 1)
            {
                int lastNode = countHeapNodes;
                Swap(1, lastNode);

                SiftDownNode(1, countHeapNodes - 1);

                countHeapNodes--;

            }
        }

        public T Delete()
        {
            if (IsEmpty())
                throw new Exception("Cannot delete from empty heap.");
            T topNode = heap[1];
            int lastNode = heap.Count - 1;
            Swap(1, lastNode);
            heap.RemoveAt(lastNode);

            int countHeapNodes = heap.Count - 1;
            SiftDownNode(1, countHeapNodes);

            return topNode;

        }

        public bool IsEmpty()
        {
            return heap.Count - 1 <= 0;
        }

        public void PrintHeap()
        {
            IEnumerator<T> e = heap.GetEnumerator();
            e.MoveNext(); // skip the first one.
            while (e.MoveNext())
            {
                Console.Write($"{e.Current} ");
            }

            Console.WriteLine();

        }

        public void PrintHeapInTree()
        {
            int i = 1;
            while (i < heap.Count)
            {
                for (int j = i; j < i * 2 && j < heap.Count; j++)
                    Console.Write($"{heap[j]} ");
                Console.WriteLine();
                i = i * 2;
            }
        
        }



    }
}
