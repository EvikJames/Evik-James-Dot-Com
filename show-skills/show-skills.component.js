'use strict';
// extend the module - define the component
angular.module('showSkills').component('showSkills', {

  templateUrl: 'show-skills/show-skills.template.html',

  controller: ['$http', '$routeParams',

    function ShowSkillsController($http, $routeParams) {

      var self = this;

      $http.get('show-skills/show-skills.json').then(function(response) {

        self.techskills = response.data;

        console.log(self.techskills);

          /*

        for (var i = 0; i < self.skills.length; i++) {

          // var experienceid = self.experiences[i]["experienceid"];

          if (skill == $routeParams.experienceid) {
            self.experience = response.data[i];
            break;
          }

        }
          */

      });

    }

  ]

});