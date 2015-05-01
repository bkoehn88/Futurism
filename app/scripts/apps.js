//Module is declared. 
var futuristApp = angular.module('futuristApp', ['ngRoute', 'ui.bootstrap']);

/* Three values are declared. Each of these values are updated with user-selected values when function setSelected is called. 
These are then placed back into the scope when the route changes to the galleryimgs view, 
and ng-repeat is used to populate the gallery with the data contained within these values */

futuristApp.value('selectedName', '');
futuristApp.value('selectedImages', '');
futuristApp.value('selectedText', '');

	// routes
	futuristApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/home', {
				templateUrl : 'partials/home.html',
				controller  : 'galleryController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'partials/about.html',
				controller  : 'galleryController'
			})

			// route for the gallery page
			.when('/gallery', {
				templateUrl : 'partials/gallery.html',
				controller  : 'galleryController'
			})
			.when('/galleryimgs', {
			templateUrl : 'partials/galleryimgs.html',
			controller  : 'galleryController'
			})
			.otherwise ({
				redirectTo: '/home'
			});
			
			
	
	});

	// create the controller and inject Angular's $scope, and $http for AJAX
	futuristApp.controller('galleryController', ['$scope', '$http', function($scope, $http){
		/*Declaring variables to keep track of which artist has been selected by the user. These take in the values
		declared earlier, which have been set by function setSelected. These are used to populate the galleryimgs view. */
		$scope.selectedName = futuristApp.selectedName;
		$scope.selectedImages = futuristApp.selectedImages;
		$scope.selectedText = futuristApp.selectedText;

		//consuming galler.json, which contains lists of artist names, biographical information, and images.
        $http.get('scripts/galler.json').success(function(data){
            $scope.artists = data;
        });

        //this function, setSelected, is called in an ng-click event. It stores the name, images, and text of the artist selected by the user.
        $scope.setSelected = function(artistName, artistImages, artistText){
        	futuristApp.selectedName = artistName;
        	futuristApp.selectedImages = artistImages;
        	futuristApp.selectedText = artistText;
        }
    }]);



    
    
    