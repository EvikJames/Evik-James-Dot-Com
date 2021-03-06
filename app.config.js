// configure the app
angular.module('evikjamesApp').config(['$locationProvider', '$routeProvider',
  
  function config($locationProvider, $routeProvider) {

    $locationProvider.hashPrefix('!');

    $routeProvider.
        when('/profile', {
          template: '<show-profile></show-profile>'
        }).
        when('/skills', {
          template: '<show-skills></show-skills>'
        }).
        when('/experience', {
          template: '<show-experience></show-experience>'
        }).
        when('/experience-detail/:experienceid', {
          template: '<show-experience-detail></show-experience-detail>'
        }).
        when('/photos', {
          template: '<photo-gallery></photo-gallery>'
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