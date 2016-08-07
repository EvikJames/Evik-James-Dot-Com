'use strict';

angular.
  module('showExperience').
    component('showExperience', {
    templateUrl: 'show-experience/show-experience.template.html',

    controller: function ShowExperienceController() {
      this.experiences = [

        /* NEW BAY MEDIA */
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
        },

        /* JR WATKINS */
        {
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
        }, 

        /* STATE OF MINNESOTA - DEPARTMENT OF HEALTH */
        {
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
        },

        /* PALE MOON WEB SERVICES */
        {
          company: 'Pale Moon Web Services - Minneapolis, MN',
          title: 'Senior Web Developer - Webmaster',
          daterange: 'January 2006 - December 2010',
          keytech: [
            'ColdFusion',
            'JavaScript',
            'Postgrest 8'
          ],
          duties: [
            'Hand-coded small and large web sites in HTML, DHTML, CSS, and CFML using UltraEdit 16 and ColdFusion 9.',
            'Made extensive use of client-side JavaScript for complex form validation.',
            'Connected many web sites to Microsoft Access 2000 or SQL Server databases.',
            'Normalized databases for maximum efficiency dependent on server resources and expected traffic.',
            'Collected data through online forms and populated databases.',
            'Used CFMail to confirm opt-in programs, send thank-you\'s, and distribute reports.',
            'Develop SEO strategies using Google AdWords and Webmaster Tools, along with creating dynamic XML sitemaps.',
            'Edit images and incorporate clip art using Adobe PhotoShop 7.',
            'Create image galleries using Adobe Flash CS5.'
          ]  
        },


        /* CAPISTAR */
        {
          company: 'Capistar Franchise Holdings - Eden Prairie, MN',
          title: 'Senior Web Developer - Webmaster',
          daterange: 'March 2000 - January 2006',
          keytech: [
            'ColdFusion',
            'JavaScript',
            'Postgrest 8'
          ],
          duties: [
            'Designed and hand-coded several public web sites using ColdFusion 4/5 to collect new customer information (leads) and populate Microsoft Access and SQL Server 2000 databases.',
            'Developed intranet for local executive staff to create and manage intranet accounts for 120 remote consultants, allowing the local executive staff to distribute leads to the consultants and report on lead generation trends.',
            'Implemented numerous applications for third-party vendors to distribute leads to us via RSS, XML, email, automatically parsing leads and populating the database.',
            'Created an application to specify multiple consultant lead preferences and used the data to automatically allocate incoming lead to the most appropriate consultant, fully respective of monthly lead count.',
            'Created an application to automatically pull data from database and create PDF for a consultant\'s biography and image and to distribute as an email to lead in real time.',
            'Developed an extranet for business relations to upload logos and manage their own information.',
            'I partnered with the marketing department to assist in search engine optimization strategies.'
          ]  
        },

        /* ABRA AUTO BODY AND GLASS */
        {
          company: 'ABRA Auto Body & Glass - Brooklyn Center, MN',
          title: 'Telecom Analyst - Intranet Developer',
          daterange: 'January 1999 - March 2000',
          keytech: [
            'ColdFusion',
            'JavaScript',
            'Postgrest 8'
          ],
          duties: [
            'Monitored all landline and cell phone operations of entire enterprise, 90 locations in 7 states.',
            'Implemented a web-based solution to track phone lines, services, and costs powered by ColdFusion 3 and Microsoft Access.',
            'Integrated AT&T\'s Route-It! toll-free call routing software to create toll-free traffic management system within our network.',
            'Helped research possible VoIP telephone system solution for entire enterprise.',
            'Advised executive staff on new call center configuration scope, phone system, and traffic management possibilities.'
          ]  
        },

        /* FINGERHUT */
        {
          company: 'Fingerhut Companies - Plymouth, MN',
          title: 'Senior Network Traffic Analyst / Intranet Developer',
          daterange: 'June 1996 - December 1998',
          keytech: [
            'AT&T Route-It!',
            'Microsoft Access',
            'ColdFusion 4'
          ],
          duties: [
            'Monitored all landline and cell phone operations of entire enterprise, 90 locations in 7 states.',
            'Implemented a web-based solution to track phone lines, services, and costs powered by ColdFusion 3 and Microsoft Access.',
            'Integrated AT&T\'s Route-It! toll-free call routing software to create toll-free traffic management system within our network.',
            'Helped research possible VoIP telephone system solution for entire enterprise.',
            'Advised executive staff on new call center configuration scope, phone system, and traffic management possibilities.'
          ]  
        },

      ];

    }
  });
