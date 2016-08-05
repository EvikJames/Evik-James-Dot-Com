angular.
  module('evikjamesApp').
    config(['$locationProvider', '$routeProvider',
      function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.
          when('/profile', {
            template: '<show-profile></show-profile>'
          }).
          when('/video', {
            template: '<show-video></show-video>'
        }).
        otherwise('/profile');
      }
    ]);