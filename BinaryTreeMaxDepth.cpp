#include <iostream>
#include <string>
using std::string;

//maxDepth()

//Given a binary tree, compute its "maxDepth" --the number of nodes along the longest path from the root node down to the farthest leaf node.
//The maxDepth of the empty tree is 0, the maxDepth of the tree on the first page is 3.

struct node {
	int data;
	struct node* left;
	struct node* right;
};

struct node* NewNode(int data) {
	struct node* node = new (struct node);    // "new" is like "malloc"
	node->data = data;
	node->left = NULL;
	node->right = NULL;

	return node;
}

//recursive method to count maxDepth
int maxDepth(struct node* node)
{
	if (node == NULL)
	{
		return 0;
	}

/*
	if (node->left == NULL && node->right == NULL)
	{
		return 1;
	}
*/
	int leftHeight = maxDepth(node->left);
	int rightHeight = maxDepth(node->right);
	return ((leftHeight > rightHeight) ? leftHeight : rightHeight) + 1;

}



int main()
{
	//Initialize BiTree
	struct node* BiTree = NewNode(2);
	BiTree->left = NewNode(3);
	BiTree->right = NewNode(4);
	BiTree->left->left = NewNode(1);
	BiTree->left->left->left = NewNode(10);
	BiTree->left->right = NewNode(5);
	BiTree->right->left = NewNode(7);

	std::cout << maxDepth(BiTree);

	return 0;
}
