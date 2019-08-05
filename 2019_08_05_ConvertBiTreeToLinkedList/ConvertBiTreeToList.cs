namespace _2019_08_05_ConvertBiTreeToLinkedList
{
    class ConvertBiTreeToLinkedList
    {
        public static BiTreeNode Convert(BiTreeNode biTreeNode)
        {

            BiTreeNode tail = null;
            ConvertCore(biTreeNode, ref tail);

            return tail;


        }


        private static void ConvertCore(BiTreeNode tree, ref BiTreeNode lastNode) // When pass in, lastNode is the lastNode of current list. When pass out, lastNode is the last node of the list converted from the tree.
        {
            if (tree == null) // it is just for the first time call.
                return;

            if (tree.Left != null)
                ConvertCore(tree.Left, ref lastNode);
            
            tree.Left = lastNode;
            if (lastNode != null) 
                lastNode.Right = tree;

            lastNode = tree;

            if (tree.Right != null)
                ConvertCore(tree.Right, ref lastNode);

        }




    }
}