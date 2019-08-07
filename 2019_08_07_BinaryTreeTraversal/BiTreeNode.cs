using System;
using System.Collections.Generic;

namespace _2019_08_07_BinaryTreeTraversal
{
    class BiTreeNode
    {
        public int Value {
            get;
            set;
        }

        public BiTreeNode Left {
            get;
            set;        
        }

        public BiTreeNode Right {
            get;
            set;
        }

        public BiTreeNode(int value)
        {
            this.Value = value;
            this.Left = null;
            this.Right = null;
        }

        public static void PreOrderTraverse(BiTreeNode root)
        {
            if (root == null)
                return;
            Console.Write($"{root.Value} ");
            PreOrderTraverse(root.Left);
            PreOrderTraverse(root.Right);

        }

        public static void PreOrderTraverseNoRecursive(BiTreeNode root)
        {
            if (root == null)
                return;
            Stack<BiTreeNode> stack = new Stack<BiTreeNode>();
            stack.Push(root); // We need something to start with.

            while (stack.Count > 0)
            {
                BiTreeNode node = stack.Pop();

                if (node.Right != null)
                    stack.Push(node.Right);
                if (node.Left != null)
                    stack.Push(node.Left);
                
                Console.Write($"{node.Value} ");

            }

        }

        public static void InOrderTraverseNoRecursive(BiTreeNode root)
        {
            if (root == null)
                return;

            Stack<BiTreeNode> stack = new Stack<BiTreeNode>(); // for path tracing
            
            while (true)
            {
                if (root == null && stack.Count == 0)
                    break;
                while (root != null)
                {
                    stack.Push(root); // pushing for later coming back. L [V R]
                    root = root.Left; // go all the way to the left.
                }

                if (stack.Count > 0)
                {
                    root = stack.Pop();
                    Console.Write($"{root.Value} ");
                    root = root.Right;
                }

            }
            

        }

        public static void PostOrderTraverseNoRecursive(BiTreeNode root)
        {
            if (root == null)
                return;
            
            Stack<BiTreeNode> stack = new Stack<BiTreeNode>(); // for tracking path
            Stack<int> result = new Stack<int>(); // for saving result

            stack.Push(root); // something to start with

            while(stack.Count > 0)
            {
                root = stack.Pop();

                if (root.Left != null)
                    stack.Push(root.Left);

                if (root.Right != null)
                    stack.Push(root.Right);
                
                result.Push(root.Value);
            }

            while(result.Count > 0)
            {
                int x = result.Pop();
                Console.Write($"{x} ");
            }


        }


    }



}