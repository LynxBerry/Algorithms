using System;
using System.Collections.Generic;
using System.Text;

namespace BiTreeTraverse
{
    static class VisitActionItemGenerator
    {

        public static Tuple<string, BiTreeNode> GenVisitNodeAction(BiTreeNode node)
        {
            return new Tuple<string, BiTreeNode>("VisitNode", node);
        }

        public static Tuple<string, BiTreeNode> GenVisitTreeAction(BiTreeNode node)
        {
            return new Tuple<string, BiTreeNode>("VisitTree", node);
        }


    }
}
