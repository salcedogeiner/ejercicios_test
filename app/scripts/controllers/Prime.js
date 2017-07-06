angular.module('angularNodeApp')
  .controller('PrimeCtrl', function () {
    var self=this;

    self.checkPrime=function(numbers){
      var primes=[];
      for (var i = 0; i < arguments.length; i++) {
        var isPrime=true;
        for (var j = 2; j < arguments[i]; j++) {
          if (arguments[i] % j == 0) {
            isPrime=false;
            break;
          }
        }
        if (isPrime && arguments[i]!=1) {
          primes.push(arguments[i]);
        }
      }
      return primes;
    };
  });
