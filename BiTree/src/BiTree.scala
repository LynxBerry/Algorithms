/**
  * Created by stevenshao on 21/03/2017.
  */
abstract class BiTree[+A] { // It is a type.
  def traverseTreeInOrder(action:(A)=>Unit): Unit = {
    def traverse(tree: BiTree[A]):Unit = tree match {
      case BiTree.EmptyBiTree => //do nothing
      case n: BiTree.BiTreeNode[A] => {
        traverse(n.left)
        action(n.data)
        traverse(n.right)
      }
    }
    traverse(this)

  }

}


object BiTree { //Companion Object
  private case class BiTreeNode[A](left:BiTree[A], right:BiTree[A], data:A) extends BiTree[A]
  private object EmptyBiTree extends BiTree[Nothing]
  //non empty tree
  def apply[A](left: BiTree[A], right: BiTree[A], data: A): BiTree[A] = BiTreeNode[A](left, right, data)
  //empty tree
  def apply[A](): BiTree[A] = EmptyBiTree

}