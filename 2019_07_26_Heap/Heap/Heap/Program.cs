using System;
using System.Collections.Generic;
using DataStructure;

namespace Test
{
    class Program
    {
        static void Main(string[] args)
        {
            List<int> tree = new List<int>(){0, 1, 2, 3, 4, 5, 6};

            Heap<int> heap = new Heap<int>(tree, Heap<int>.HeapType.Max);
            heap.PrintHeap(); // before
            heap.Heapify();
            heap.Insert(7);
            heap.Insert(18);
            // Console.WriteLine(heap.Delete());
            // heap.PrintHeap(); // after
            heap.PrintHeapInTree();
        }
    }
}
