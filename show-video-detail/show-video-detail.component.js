'use strict';

angular.
  module('showVideoDetail').component('showVideoDetail', {
    templateUrl: 'show-video-detail/show-video-detail.template.html',
    controller: ['$routeParams',
		function ShowVideoDetailController($routeParams) {
			this.videoid = $routeParams.videoid;
		}
      ];

    }

  })  .filter('videoUrl', videoUrl);

      videoUrl.$inject = ['$sce'];

      function videoUrl($sce) {
        return function(videoid) {
          if (!videoid) return;
          return $sce.trustAsResourceUrl('http://www.youtube.com/embed/' + videoid);
        }
      }


;