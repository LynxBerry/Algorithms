//
//  main.cpp
//  Test
//
//  Created by Steven Shao on 3/26/16.
//  Copyright © 2016 Steven Shao. All rights reserved.
//
// printPostorder()
// printInorder()
// int hasPathSum(struct node* node, int sum)

#include <iostream>

struct node {
    int data;
    struct node* left;
    struct node* right;
};

// helper function
struct node* NewNode(int data) {
    struct node* node = new (struct node);    // "new" is like "malloc"
    node->data = data;
    node->left = NULL;
    node->right = NULL;

    return node;
}


void printInorder(struct node* node) {
    if (node) {
        /* this part is not needed actually
        if (node->left == NULL)
        {
            std::cout << node->data << std::endl;
            printInorder(node->right);
            return;
        }

        */

        printInorder(node->left);
        std::cout << node->data << std::endl;
        printInorder(node->right);
    }
    // if node == null, do nothing

}

void printPostorder(struct node* node)
{
    if (node)
    {
        printPostorder(node->left);
        printPostorder(node->right);
        std::cout << node->data << std::endl;

    }
    //if node == null, do nothing

}

int hasPathSum(struct node* node, int sum)
{
    if (node)
    {

        return (hasPathSum(node->left, sum - node->data) || hasPathSum(node->right, sum - node->data));

    }

    if (sum == 0)
    {
        return 1;
    }
    else
    {
        return 0;
    }
}

int main(int argc, const char * argv[]) {
    // insert code here...
    //Initialize BiTree
    struct node* BiTree = NewNode(2);
    BiTree->left = NewNode(3);
    BiTree->right = NewNode(4);
    BiTree->left->left = NewNode(1);
    BiTree->left->left->left = NewNode(10);
    BiTree->left->right = NewNode(5);
    BiTree->right->left = NewNode(7);

    //printInorder(BiTree);
    //printPostorder(BiTree);
    std::cout << hasPathSum(BiTree, 12);
    return 0;
}
