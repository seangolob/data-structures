'use strict';


//BST constructor
function BST(){
  this.root = null;
}

//node constructor
BST.prototype.Node = function(element){
  this.value = element;
  this.left = null;
  this.right = null;
};
//insert node
BST.prototype.insert = function(element){
  var newNode = new this.Node(element);

  if(this.root === null){
    this.root = newNode;
  } else {
    var currNode = this.root;
    while (true) {
      if(newNode.value < currNode){
        if(currNode.left){
          currNode = currNode.left;
        } else {
          currNode.left = newNode;
           break;
        }
      } else {
        if(currNode.right){
          currNode = currNode.right;
        } else {
          currNode.right = newNode;
          break;
        }
      }
    }
  }
};
