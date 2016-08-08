/*app.filter('htmlsafe', ['$sce', function($sce) {
  return function(message) {
    return $sce.trustAsHtml(message);
  };
}]);
*/

angular.module('core').filter('youtubeurl', ['$sce', function($sce) {
	return function(videoid) {
		return $sce.trustAsResourceUrl('http://www.youtube.com/embed/' + videoid);
	}

}]);


	/*


angular.module('evikjamesApp').filter('videoUrl', videoUrl);

videoUrl.$inject = ['$sce'];

function videoUrl() {

	return function(videoid) {
		return $sce.trustAsResourceUrl('http://www.youtube.com/embed/' + videoid);
	};

}

	return function(videoid) {

		videoUrl.$inject = ['$sce'];

		if (!videoid) return;
			return $sce.trustAsResourceUrl('http://www.youtube.com/embed/' + videoid);
		}

	}
	*/	


	// 

