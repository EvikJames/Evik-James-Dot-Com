'use strict';

angular.
  module('evikjamesApp').
  component('showProfile', {
    template:
    	'<div id="PageWrapper">' +
    		'<div class="SectionHead TopBorder">' +
				'Evik James' +
			'</div>' +
			'<div class="SectionContent BottomBorder">' +
				'<div class="ContentPad">' +
					'<ul>' +
						'<li ng-repeat="phone in $ctrl.phones">' +
							'<span>{{phone.name}}</span>' +
							'<p>{{phone.snippet}}</p>' +
						'</li>' +
			        '</ul>' +
				'</div>' +
			'</div>' +
		'</div>',
	controller: function ShowProfileController() {
      this.phones = [
        {
          name: 'Nexus S',
          snippet: 'Fast just got faster with Nexus S.'
        }, {
          name: 'Motorola XOOM™ with Wi-Fi',
          snippet: 'The Next, Next Generation tablet.'
        }, {
          name: 'MOTOROLA XOOM™',
          snippet: 'The Next, Next Generation tablet.'
        }
      ];
    }
  });