'use strict';

// extend the module - define the component
angular.module('showVideo').component('showVideo', {

    templateUrl: 'show-video/show-video.template.html',

    controller: function ShowVideoController() {

      this.videos = [

          {
            title: 'Rush - Kid Gloves - Guitar Solo Cover - 50% speed',
            videoid: 'c-8OsVuqoCg'
          }, 

          {
            title: 'Van Halen - Unchained - Guitar Cover',
            videoid: 'Z9n0oIBz8SE'
          }, 

          {
            title: 'Extreme - More Than Words - Guitar Cover',
            videoid: 'gMJcE4kWelE'
          },

          {
            title: 'Sublime - Santeria - Guitar Solo Cover - 50% speed',
            videoid: 'mN2uFaZ2Sgs'
          },

          {
            title: 'Rush - La Villa Strangiato - Guitar Cover',
            videoid: 'MRZPG58hTQg'
          },

          {
            title: 'Eagles - One of these Nights - Guitar Solo Cover',
            videoid: 'LhJgO2LYDcU'
          }

    ];

  }

});

