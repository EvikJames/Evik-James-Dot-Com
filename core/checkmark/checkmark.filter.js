// extend the module - define the filter 
angular.module('core').filter('checkmark', ['$sce', function($sce) {

	return function(input) {

		var StartNum = 1,
			MaxChecks = 5,
			CheckString = "<strong>&#10003;</strong>",
			ResultString = "";

		for (i = StartNum; i <= MaxChecks; i++) {
	
			ResultString = 	ResultString + CheckString;

		}

		return $sce.trustAsHtml(ResultString);

	};

}]);

