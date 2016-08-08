angular.
  module('evikjamesApp').
    config(['$locationProvider', '$routeProvider',
      function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.
          when('/profile', {
            template: '<show-profile></show-profile>'
          }).
          when('/experience', {
            template: '<show-experience></show-experience>'
          }).
          when('/video', {
            template: '<show-video></show-video>'
          }).
          when('/video-detail/:videoid', {
            template: '<show-video-detail></show-video-detail>'
        }).
        otherwise('/profile');
      }
    ]);