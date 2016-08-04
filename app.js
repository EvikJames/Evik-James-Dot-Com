// Define the `evikjamesApp` module
var evikjamesApp = angular.module('evikjamesApp', []);

// Define the `ContentController` controller on the `evikjamesApp` module
evikjamesApp.controller('ContentController', function ContentController($scope) {
  $scope.phones = [
    {
      name: 'Nexus S',
      snippet: 'Fast just got faster with Nexus S.'
    }, {
      name: 'Motorola XOOM™ with Wi-Fi',
      snippet: 'The Next, Next Generation tablet.'
    }, {
      name: 'MOTOROLA XOOM™',
      snippet: 'The Next, Next Generation tablet.'
    }
  ];
});