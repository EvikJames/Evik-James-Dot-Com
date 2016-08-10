'use strict';

angular.module('showExperienceDetail').component('showExperienceDetail', {

    templateUrl: 'show-experience-detail/show-experience-detail.template.html',

    controller: ['$http', '$routeParams',

		function ShowExperienceDetailController($http, $routeParams) {

			var self = this;

	        $http.get('show-experience/show-experience.json').then(function(response) {

	        	self.experiences = response.data;

	        	for (var i = 0; i < self.experiences.length; i++) {

	        		var experienceid = self.experiences[i]["experienceid"];

	        		if (experienceid == $routeParams.experienceid) {
					
						self.experience = response.data[i];
						// console.log(self.experience);
						break;

	        		}

	        	}

	        });
	    }

	]        

});


