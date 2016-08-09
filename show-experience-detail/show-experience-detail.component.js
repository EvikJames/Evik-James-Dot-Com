'use strict';

angular.module('showExperienceDetail').component('showExperienceDetail', {

    templateUrl: 'show-experience-detail/show-experience-detail.template.html',

    controller: ['$http', '$routeParams',

		function ShowExperienceDetailController($http) {

	        var self = this;

	        $http.get('show-experience/show-experience.json').then(function(response) {

	        	self.experiences = response.data;

	        	for (var i = 0; i < self.experiences.length; i++) {

	        		var detailid = self.experiences[i]["detailid"];

	        		if (detailid == 'pale-moon-web') {
						console.log(detailid);
						self.experience = response.data[i];
						console.log(self.experience);
						break;

	        		}


	        	}


	        });
	    }

	]        

});


