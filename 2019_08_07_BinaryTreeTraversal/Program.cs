using System;

namespace _2019_08_07_BinaryTreeTraversal
{
    class Program
    {
        static void Main(string[] args)
        {
            /*
                        5
                 3            4
            2        11    7
            
            
            
            
            
             */
            BiTreeNode root = new BiTreeNode(5);
            root.Left = new BiTreeNode(3);
            root.Right = new BiTreeNode(4);
            root.Left.Left = new BiTreeNode(2);
            root.Left.Right = new BiTreeNode(11);
            root.Right.Left = new BiTreeNode(7);

            Console.WriteLine("Pre Order Traverse Recursive");
            BiTreeNode.PreOrderTraverse(root);
            Console.WriteLine();

            Console.WriteLine("Pre Order Traverse No Recursive");
            BiTreeNode.PreOrderTraverseNoRecursive(root);
            Console.WriteLine();

            Console.WriteLine("In Order Traverse No Recursive");
            BiTreeNode.InOrderTraverseNoRecursive(root);
            Console.WriteLine();

            Console.WriteLine("Post Order Traverse No Recursive");
            BiTreeNode.PostOrderTraverseNoRecursive(root);
            Console.WriteLine();




        }
    }
}
