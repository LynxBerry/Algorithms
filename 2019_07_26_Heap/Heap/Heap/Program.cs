using System;

namespace Heap
{
    class Program
    {
        static void Main(string[] args)
        {
            int[] tree = { 0, 1, 2, 3, 4, 5, 6};

            Heap heap = new Heap(tree);
            heap.PrintHeap(); // before
            heap.Heapify();
            heap.PrintHeap(); // after
        }
    }
}
