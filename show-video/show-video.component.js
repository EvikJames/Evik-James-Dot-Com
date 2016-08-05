'use strict';

angular.
  module('showVideo').
    component('showVideo', {
    templateUrl: 'show-video/show-video.template.html',
    controller: function ShowVideoController() {
      this.videos = [
        {
          name: 'My Video Nexus S',
          snippet: 'Fast just got faster with Nexus S.'
        }, {
          name: 'My Video Motorola XOOM™ with Wi-Fi',
          snippet: 'The Next, Next Generation tablet.'
        }, {
          name: 'My Video MOTOROLA XOOM™',
          snippet: 'The Next, Next Generation tablet.'
        }
      ];
    }
  });