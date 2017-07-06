'use strict';

describe('Controller: PrimeCalculatorCtrl', function () {

  // load the controller's module
  beforeEach(module('angularNodeApp'));

  var PrimeCalculatorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PrimeCalculatorCtrl = $controller('PrimeCalculatorCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('Prueba ejercicio 1', function () {
    var numero = 390;
    var respuesta_esperada= [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47,
                53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109,
                113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179,
                181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241,
                251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313,
                317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389]
    expect(PrimeCalculatorCtrl.getPrimes(numero).length).toBe(respuesta_esperada.length);
  });
});
