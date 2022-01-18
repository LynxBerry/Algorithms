using System;
using System.Collections.Generic;

namespace BiTreeTraverse
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Hello World!");

            /*
             *      12
             *   10    15
             *  8  11
             * 
             * 
             */

            BiTreeNode root = new BiTreeNode(12);
            root.Left = new BiTreeNode(10);
            root.Right = new BiTreeNode(15);
            root.Left.Left = new BiTreeNode(8);
            root.Left.Right = new BiTreeNode(11);

            Console.WriteLine("Pre-Order:");
            PreOrderTraverse(root);
            //12 -> 10 -> 8 -> 11 -> 15

            Console.WriteLine("In-Order:");
            InOrderTraverse(root);
            //8 -> 10 -> 11 -> 12 -> 15

            Console.WriteLine("Post-Order:");
            PostOrderTraverse(root);
            //8 -> 11 -> 10 -> 15 -> 12

            Console.ReadLine();


        }

        // Pre-Order Traverse
        // Root -> Left -> Right
        static void PreOrderTraverse(BiTreeNode biTree)
        {
            if (biTree == null)
            {
                throw new Exception("Error: Input Tree cannot be null.");
            }

            var stack = new Stack<BiTreeNode>();
            var currentNode = biTree;


            while (currentNode != null)
            {
                Console.WriteLine($"Visiting Node: {currentNode.Value}");

                if (currentNode.Right != null)
                    stack.Push(currentNode.Right);

                currentNode = currentNode.Left;

                if (currentNode == null) // cannot go further
                {
                    if (stack.Count != 0)
                        currentNode = stack.Pop();

                }

            }
        }

        // In-Order Traverse
        // Left -> Root -> Right
        static void InOrderTraverse(BiTreeNode biTree)
        {
            if (biTree == null)
            {
                throw new Exception("Error: Input Tree cannot be null.");
            }

            var stack = new Stack<BiTreeNode>();
            var currentNode = biTree;

            while (currentNode != null)
            {
                stack.Push(currentNode);
                currentNode = currentNode.Left;

                if (currentNode == null) // cannot go further
                {
                    while (stack.Count != 0)
                    {
                        currentNode = stack.Pop();
                        Console.WriteLine($"Visiting Node: {currentNode.Value}");
                        currentNode = currentNode.Right;

                        if (currentNode != null)
                        {
                            break;
                        }

                    }
                }
           
            }


        }

            // Post-Order Traverse
        static void PostOrderTraverse(BiTreeNode biTree)
        {
            if (biTree == null)
            {
                throw new Exception("Error: Input Tree cannot be null.");
            }

            var stack = new Stack<BiTreeNode>();
            var currentNode = biTree;

            while (currentNode != null)
            {
                stack.Push(currentNode);
                currentNode = currentNode.Left;
                if (currentNode == null) // cannot go further
                {
                    BiTreeNode childNode = currentNode;
                    while (stack.Count != 0)
                    {
                        //var nextNode = stack.Peek();
                        //if (childNode == nextNode.Left) // childNode is left child of nextNode
                        //{
                        //    currentNode = nextNode.Right;
                        //    if (currentNode == null)
                        //    {
                        //        Console.WriteLine($"Visiting Node: {nextNode.Value}");
                        //        childNode = nextNode;
                        //        stack.Pop();
                        //    }
                        //    else
                        //    {
                        //        break;
                        //    }

                        //}
                        //else if (childNode == nextNode.Right) // childNode is Right child of nextNode
                        //{
                        //    Console.WriteLine($"Visiting Node: {nextNode.Value}");
                        //    childNode = nextNode;
                        //    stack.Pop();

                        //}

                        var nextNode = stack.Peek();
                        if (nextNode.Right == null || nextNode.Right == childNode)
                        {
                            // visit nextNode
                            Console.WriteLine($"Visiting Node: {nextNode.Value}");
                            childNode = nextNode;
                            stack.Pop();
                        }
                        else if (nextNode.Left == childNode)
                        {
                            currentNode = nextNode.Right;
                            break;
                        }
                    }
                }

                // if currentNode == null, it means no successor found.


            }

        }


        
        
    }
}
