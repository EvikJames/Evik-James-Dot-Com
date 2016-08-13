// extend the module - define the filter  - inject the sce service
angular.module('core').filter('stars', ['$sce', function($sce) {

	return function(StarsToShow) {

		var StartNum = 1,
			MaxChecks = 5,
			BlackStarString = "&#9733;",
			WhiteStarString = "&#9734;",
			ResultString = "";

		// loop through five times
		for (i = StartNum; i <= MaxChecks; i++) {
	
			// add a black star 
			if (i <= StarsToShow) {
				ResultString = ResultString + BlackStarString;
			// add a white star	
			} else {
				ResultString = ResultString + WhiteStarString;
			}

		}

		// bind to html
		ResultString = $sce.trustAsHtml(ResultString);	

		return ResultString;


	};

}]);