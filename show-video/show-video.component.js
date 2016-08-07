'use strict';

angular.
  module('showVideo').component('showVideo', {
    templateUrl: 'show-video/show-video.template.html',
    controller: function ShowVideoController() {
      this.videos = [

          {
            name: 'Rush - Kid Gloves - Guitar Solo Cover - 50% speed',
            videourl: 'https://www.youtube.com/watch?v=c-8OsVuqoCg',
            videoid: 'c-8OsVuqoCg',
            thumbnail: 'http://img.youtube.com/vi/c-8OsVuqoCg/hqdefault.jpg'          
          }, 

          {
            name: 'Van Halen - Unchained - Guitar Cover',
            videourl: 'https://www.youtube.com/watch?v=Z9n0oIBz8SE',
            videoid: 'Z9n0oIBz8SE',
            thumbnail: 'http://img.youtube.com/vi/Z9n0oIBz8SE/hqdefault.jpg'          
          }, 

          {
            name: 'Extreme - More Than Words - Guitar Cover',
            videourl: 'https://www.youtube.com/watch?v=gMJcE4kWelE',
            videoid: 'gMJcE4kWelE',
            thumbnail: 'http://img.youtube.com/vi/gMJcE4kWelE/hqdefault.jpg'
          },

          {
            name: 'Sublime - Santeria - Guitar Solo Cover - 50% speed',
            videourl: 'https://www.youtube.com/watch?v=mN2uFaZ2Sgs',
            videoid: 'mN2uFaZ2Sgs',
            thumbnail: 'http://img.youtube.com/vi/mN2uFaZ2Sgs/hqdefault.jpg'
          },

          {
            name: 'Rush - La Villa Strangiato - Guitar Cover',
            videourl: 'https://www.youtube.com/watch?v=MRZPG58hTQg',
            videoid: 'MRZPG58hTQg',
            thumbnail: 'http://img.youtube.com/vi/MRZPG58hTQg/hqdefault.jpg'
          },

          {
            name: 'Eagles - One of these Nights - Guitar Solo Cover',
            videourl: 'https://www.youtube.com/watch?v=LhJgO2LYDcU',
            videoid: 'LhJgO2LYDcU',
            thumbnail: 'http://img.youtube.com/vi/LhJgO2LYDcU/hqdefault.jpg'
          }

      ];


    }

  })  .filter('trustUrl', trustUrl);

      trustUrl.$inject = ['$sce'];

      function trustUrl($sce) {
        return function(videoId) {
          if (!videoId) return;
          return $sce.trustAsResourceUrl('http://www.youtube.com/embed/' + videoId);
        }
      }


;