'use strict';

describe('Controller: AutocompleteCtrl', function () {

  // load the controller's module
  beforeEach(module('angularNodeApp'));

  var AutocompleteCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AutocompleteCtrl = $controller('AutocompleteCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('prueba ej 4', function () {
    var noun= "abaca"
    expect(AutocompleteCtrl.getSuggestions(noun).length).toBe(2);
  });
});
