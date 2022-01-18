using System;
using System.Collections.Generic;
using System.Text;

namespace BiTreeTraverse
{
    class BiTreeNode
    {
        public BiTreeNode(int value)
        {
            this.Value = value;
            Left = null;
            Right = null;
        }
        public int Value { get; set; }
        public BiTreeNode Left { get; set; }

        public BiTreeNode Right { get; set; }
    }
}
