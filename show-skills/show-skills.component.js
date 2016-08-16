'use strict';

// extend the module - define the component
angular.module('showSkills').component('showSkills', {

  // define the template
  templateUrl: 'show-skills/show-skills.template.html',

  // define the controller
  controller: ['$http', '$routeParams',

    function ShowSkillsController($http, $routeParams) {

      var self = this;

      // get the skills json
      $http.get('show-skills/show-skills.json').then(function(response) {

        self.techskills = response.data;

      });

    }

  ]

});