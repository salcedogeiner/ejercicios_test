angular.module('angularNodeApp')
  .controller('AutocompleteCtrl', function($http) {
    var self = this;

    self.nouns = [
      "abaca",
      "abacas",
      "abacus",
      "abampere",
      "abamperes",
      "abandon",
      "abandons",
      "abasement",
      "abasements"
    ];

    self.getSuggestions = function(query) {
      var suggestions =[];
      for (var i = 0; i < self.nouns.length; i++) {
        if (self.nouns[i].indexOf(query)>=0) {
          suggestions.push(self.nouns[i]);
        }
      }
      return suggestions;
    };
  });
