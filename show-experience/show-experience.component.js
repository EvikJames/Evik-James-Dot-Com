'use strict';

angular.module('showExperience').component('showExperience', {

  templateUrl: 'show-experience/show-experience.template.html',

  controller: ['$http',

    function ShowExperienceController($http) {

      var self = this;

      $http.get('show-experience/show-experience.json').then(function(response) {
          self.experiences = response.data;
      });

    }
  
  ]

});