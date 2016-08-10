'use strict';

// extend the module - define the component
angular.module('showProfile').component('showProfile', {
  templateUrl: 'show-profile/show-profile.template.html',
  controller: function ShowProfileController() {
     this.thingsthatiam = [
        {
          trait: 'A human'
        },
        {
          trait: 'A man'
        },
        {
          trait: 'A son'
        },
        {
          trait: 'A brother'
        },
        {
          trait: 'A husband'
        },
        {
          trait: 'A friend to many'
        },
        {
          trait: 'A cancer survivor'
        },
        {
          trait: 'A web developer'
        },
        {
          trait: 'A guitarist'
        },
        {
          trait: 'A bicyclist'
        },
        {
          trait: 'A movie buff'
        },
        {
          trait: 'An animal caregiver'
        },
    ];
  }
});