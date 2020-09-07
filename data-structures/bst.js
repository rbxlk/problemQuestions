class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    var newNode = new Node(data);
    if (this.root === null) this.root = newNode;
    else this.insertNode(this.root, newNode);
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  getRootNode() {
    return this.root;
  }

  leaves(node) {
    if (node !== null) {
      if (node.left === null && node.right === null) {
        console.log(node.data);
      }
      if (node.left) {
        this.leaves(node.left);
      }
      if (node.right) {
        this.leaves(node.right);
      }
    }
  }
    
  preorder(node) 
  { 
      if(node !== null) 
      { 
          console.log(node.data); 
          this.preorder(node.left); 
          this.preorder(node.right); 
      } 
  } 
}

// Check

var BST = new BinarySearchTree();

BST.insert(15); 
BST.insert(25); 
BST.insert(10); 
BST.insert(7); 
BST.insert(22); 
BST.insert(17); 
BST.insert(13); 
BST.insert(5); 
BST.insert(9); 
BST.insert(27); 

var root = BST.getRootNode();
BST.leaves(root);
