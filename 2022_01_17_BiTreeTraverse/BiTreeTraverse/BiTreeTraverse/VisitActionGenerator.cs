using System;
using System.Collections.Generic;
using System.Text;

namespace BiTreeTraverse
{
    class VisitActionGenerator
    {

        static public Action GenVisitNodeAction(BiTreeNode node)
        {
            return () =>
            {
                Console.WriteLine($"Visit Node: {node.Value}");
            };
        }

        static public Action GenVisitTreeActionPreOrder(BiTreeNode node, Stack<Action> stack)
        {
            return () =>
            {
                if (node.Right != null)
                    stack.Push(GenVisitTreeActionPreOrder(node.Right, stack));
                if (node.Left != null)
                    stack.Push(GenVisitTreeActionPreOrder(node.Left, stack));
                stack.Push(GenVisitNodeAction(node));

            };
        }
    }
}
