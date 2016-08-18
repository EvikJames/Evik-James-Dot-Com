'use strict';

// extend the module - define the component 
angular.module('photoGallery').component('photoGallery', {

    templateUrl: 'photo-gallery/photo-gallery.template.html',

    // define the controller
    controller: ['$http', '$routeParams', 

        function PhotoGalleryController($scope, $routeParams) {

            var self = this;

            self.results = [];
            self.bigimage = [];

            self.displayContent = function(firstIdx, secondIdx) {

                self.results = [];
                self.results[firstIdx] = "lkasdf asdfasd fasdfasdf asdfj";

                console.log(firstIdx);
                console.log(secondIdx);

            };

            self.showImage = function(themeid, firstIdx, secondIdx) {

                var BigImageSRC = "gallery/" + themeid + "_" + secondIdx + ".jpg";

                self.bigimage = [];
                self.bigimage[firstIdx] = BigImageSRC;

                // self.bigimage = BigImageSRC;

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