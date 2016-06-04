#include <iostream>
#include <string>
using std::string;

// Count the number of nodes in one binary tree
//
// This problem demonstrates simple binary tree traversal.Given a binary tree, count the number of nodes in the tree.
// int size(struct node* node) {


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

//recursive method to tranverse the BiTree to count the number
int size(struct node* node)
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
	return (size(node->left) + size(node->right) + 1);

}



int main()
{
	//Initialize BiTree
	struct node* BiTree = NewNode(2);
	BiTree->left = NewNode(3);
	BiTree->right = NewNode(4);
	BiTree->left->left = NewNode(1);
	BiTree->left->right = NewNode(5);
	BiTree->right->left = NewNode(7);

	std::cout << size(BiTree);

	return 0;
}
