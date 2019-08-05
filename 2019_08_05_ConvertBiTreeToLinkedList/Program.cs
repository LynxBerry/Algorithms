using System;

/*
剑指offer
面试题27：二叉搜索树与双向链表题目：输入一棵二叉搜索树，将该二叉搜索树转换成一个排序的双向链表。要求不能创建任何新的结点，只能调整树中结点指针的指向。

 */ 

namespace _2019_08_05_ConvertBiTreeToLinkedList
{
    class Program
    {
        static void Main(string[] args)
        {
            
            BiTreeNode root = new BiTreeNode(10);
            root.Left = new BiTreeNode(8);
            root.Left.Left = new BiTreeNode(4);
            root.Left.Right = new BiTreeNode(9);

            root.Right = new BiTreeNode(12);
            root.Right.Left = new BiTreeNode(11);
            root.Right.Right = new BiTreeNode(16);
            root.Right.Right.Right = new BiTreeNode(18);

            BiTreeNode tail = ConvertBiTreeToLinkedList.Convert(root);

            while (tail != null)
            {

                Console.Write($"{tail.Value} ");
                tail = tail.Left;

            }

            Console.WriteLine();
        }
    }
}
