angular.module('angularNodeApp')
  .controller('PrimeCalculatorCtrl', function () {
    var self=this;

    self.getPrimes=function(number){
      var primes=[];
      for (var i = 2; i <= number; i++) {
        var isPrime=true;
        for (var j = 2; j < i; j++) {
          if (i % j == 0) {
            isPrime=false;
            break;
          }
        }
        if (isPrime) {
          primes.push(i)
        }
      }
      return primes
    };
  });
