namespace _2019_08_05_ConvertBiTreeToLinkedList
{
    class BiTreeNode
    {
        public int Value
        {
            get;set;
        }

        public BiTreeNode Left
        {
            get;set;
        }

        public BiTreeNode Right
        {
            get; set;
        }

        public BiTreeNode(int value)
        {
            this.Value = value;
            Left = null;
            Right = null;
        }
    

    }
}