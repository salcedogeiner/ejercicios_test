'use strict';

describe('Controller: BinarySearchTreeValidatorCtrl', function () {

  // load the controller's module
  beforeEach(module('angularNodeApp'));

  var BinarySearchTreeValidatorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BinarySearchTreeValidatorCtrl = $controller('BinarySearchTreeValidatorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('none', function () {
    var node = {
      data:5,
      left: {data:4, left:{
        data:3,
        left: {data:2, left:null, right:null},
        right: {data:6, left:null, right:null}
      }, right:null},
      right: {data:6, left:null, right:null}
    };
    expect(BinarySearchTreeValidatorCtrl.checkBST(node)).toBe(true);
  });
});
