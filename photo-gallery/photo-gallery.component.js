'use strict';

// extend the module - define the component 
angular.module('photoGallery').component('photoGallery', {

    templateUrl: 'photo-gallery/photo-gallery.template.html',

    controller: function PhotoGalleryController() {

      this.photos = [
        "cities",
        "comics",
        "fight_club",
        "pulp_fiction",
        "rockstar",
        "space",
        "snakes",
        "wildlife"
      ];

    }

});
