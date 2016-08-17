'use strict';

// extend the module - define the component 
angular.module('photoGallery').component('photoGallery', {

    templateUrl: 'photo-gallery/photo-gallery.template.html',

    // define the controller
    controller: ['$http', '$routeParams', 

        function PhotoGalleryController($scope, $routeParams) {

            var self = this;

            self.bigimage = "";

            self.showImage = function(themeid, i, galleryIdx) {

                var ThisImage = element(by.id('jsBigImage'+ galleryIdx));

                var BigImageSRC = "gallery/" + themeid + "_" + i + ".jpg";

                self.bigimage = BigImageSRC;

            };

            self.gallery = [
                {
                    "themeid": "cities",
                    "theme": "Cityscapes"
                },
                {
                    "themeid": "comics",
                    "theme": "Comic Heroes"
                },
                {
                    "themeid": "fight_club",
                    "theme": "Fight Club"
                },
                {
                    "themeid": "pulp_fiction",
                    "theme": "Pulp Fiction"
                },
                {
                    "themeid": "rockstar",
                    "theme": "Rock Stars"
                },
                {
                    "themeid": "space",
                    "theme": "Space"
                },
                {
                    "themeid": "Snakes",
                    "theme": "Snakes"
                },
                {
                    "themeid": "wildlife",
                    "theme": "Wildlife"
                }
            ];

        }

    ]
  
});


/*    function ShowSkillsController($http, $routeParams) {

      var self = this;

      // get the skills json
      $http.get('show-skills/show-skills.json').then(function(response) {

        self.techskills = response.data;

      });

      // show the big image
      $scope.showImage = function() {


      }




    controller: function PhotoGalleryController() {



      this.gallery = [
        {
            "themeid": "cities",
            "theme": "Cityscapes"
        },
        {
            "themeid": "comics",
            "theme": "Comic Heroes"
        },
        {
            "themeid": "fight_club",
            "theme": "Fight Club"
        },
        {
            "themeid": "pulp_fiction",
            "theme": "Pulp Fiction"
        },
        {
            "themeid": "rockstar",
            "theme": "Rock Stars"
        },
        {
            "themeid": "space",
            "theme": "Space"
        },
        {
            "themeid": "Snakes",
            "theme": "Snakes"
        },
        {
            "themeid": "wildlife",
            "theme": "Wildlife"
        }
      ];

    }

*/