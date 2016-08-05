'use strict';

angular.
  module('showExperience').
    component('showExperience', {
    templateUrl: 'show-experience/show-experience.template.html',

    controller: function ShowExperienceController() {
      this.experiences = [
        {
          company: 'NewBay Media - AV-iQ',
          title: 'Senior Web Developer ~ Minneapolis, MN',
          daterange: 'January 2012 - Current',
          keytech: [
            'ColdFusion',
            'JavaScript',
            'SQL Server'
          ],
          duties: [
            'Used HTML5 and CSS3 to create pixel perfect and responsive rendering of a third party web design.',
            'Used ColdFusion, SQL Server, and JavaScript to architect web site with 500,000 daily visits in multiple languages.',
            'Used JavaScript and JSON to build a product comparison tool that handles up to 475,000 audio video products.',
            'Used JavaScript, Ajax, and JSON to build a search engine that quickly compares user input to manufacturers, categories, keywords, and model numbers.',
            'Used JavaScript and jQuery extensively to build modal windows, contact forms, form validation, image galleries, and document uploaders.',
            'Used JavaScript and Ajax to build a complete registration and login process.',
            'Used Selenium IDE to test registration and login systems.',
            'Integrated Power Reviews into web site, enabling visitors to rate and review items.',
            'Used XML to send product reviews to Power Reviews.',
            'Used XML/SOAP/XPath to build an application to consume feeds and update multiple databases.',
            'Built an automated QR Code Generator using the Google Chart API.',
            'Performed weekly code reviews with other web developers and designers.',
            'Mentored coworkers in ColdFusion, JavaScript, and OOP design patterns and best practices.',
            'Used AngularJS to develop show directory web app.',
            'Used Git for source code control. Fluency in Git Gui, Git Bash, as well as command line.',
            'Used Grunt to automate the minimization of 30+ JavaScript files into a single file.',
            'Used Google Analytics to monitor web site tool usage and make informed changes.',
            'Helped migrate development team to use scrum.'
          ]
        }, {
          company: 'J.R.Watkins',
          title: 'Senior Web Developer ~ Winona, MN',
          daterange: 'September 2011 - January 2012',
          keytech: [
            'ColdFusion',
            'JavaScript',
            'SQL Server'
          ],
          duties: [
            'Lead a team of three developers to create a call center application to enable 30+ full time agents to fully access and manipulate all customer data, including placing product orders, processing credit cards, setting environment defaults, and running reports.',
            'Built a proprietary ColdFusion / jQuery framework completely in CFSCRIPT that would enable the team of programmers to continue develop features using new standards.',
            'Trained three developers to use ColdFusion and jQuery extensively to access records quickly using Ajax techniques to access SQL Server databases with 2m+ customers and 25k+ products.',
            'Used Ajax method call to serialize and deserialize SOAP package to validate and GeoCode addresses in real time.',
            'Wrote extensive form validation using jQuery.',
            'Wrote dozens of user defined functions to create form elements programmatically to minimize duplicate coding effort and increase productivity.',
            'Ensured web site scalability by using OOP best practices, moving all database interaction into relevant CFCs.'
          ]
        }, {
          company: 'State of MN Department of Health',
          title: 'Senior Web Developer ~ Saint Paul, MN',
          daterange: 'January 2011 - July 2011',
          keytech: [
            'ColdFusion',
            'JavaScript',
            'Postgrest 8'
          ],
          duties: [
            'Solely responsible for designing and coding a web site to enable 120+ Minnesota hospitals to apply for Trauma Center Designation.',
            'Hand-coded CFSCRIPT using CFBuilder to create a multiple security level site using ColdFusion 9 and jQuery, connecting to a Postres 8.4 database.',
            'Used jQuery extensively for form validation as well as showing and hiding relevant information and options.',
            'Used Ajax calls to save form data and retrieve data without leaving current page, creating a smooth user experience.'
          ]  
        }
      ];

    }
  });
