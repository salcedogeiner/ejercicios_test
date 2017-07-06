'use strict';

describe('Controller: PrimeCtrl', function () {

  // load the controller's module
  beforeEach(module('angularNodeApp'));

  var PrimeCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PrimeCtrl = $controller('PrimeCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('prueba ej 2 ', function () {
    expect(PrimeCtrl.checkPrime(2).length).toBe([2].length);
    expect(PrimeCtrl.checkPrime(2,1).length).toBe([2].length);
    expect(PrimeCtrl.checkPrime(2,1,3).length).toBe([2,3].length);
    expect(PrimeCtrl.checkPrime(2,1,3,4,5).length).toBe([2,3,5].length);
  });
});
