angular.module('angularNodeApp')
  .controller('BinarySearchTreeValidatorCtrl', function($http) {
    var self = this;

    self.Node={};
    self.nodep={};

    self.checkBST = function(node) {
      if (node.left!=null && node.left.data > node.data || node.right!=null && node.right.data < node.data) {
        return false
      } else {
        if (node.left==null && node.right==null || node.left==null && node.right.data > node.data ||  node.right==null && node.left.data < node.data) {
          return true
        }

        if (node.left!=null && node.right!=null)
        return self.checkBST(node.left) && self.checkBST(node.right)

        if (node.left!=null)
        return self.checkBST(node.left)

        if (node.right!=null)
        return self.checkBST(node.right)
      }
    };

    self.nodep={
      data:5,
      left: {data:4, left:{
        data:3,
        left: {data:2, left:null, right:null},
        right: {data:6, left:null, right:null}
      }, right:null},
      right: {data:6, left:null, right:null}
    };
  });
