var futuristApp = angular.module('futuristApp', ['ngRoute']);
	// routes
	futuristApp.config(function($routeProvider) {
		$routeProvider

			// route for the home page
			.when('/home', {
				templateUrl : 'partials/home.html',
				controller  : 'mainController'
			})

			// route for the about page
			.when('/about', {
				templateUrl : 'partials/about.html',
				controller  : 'aboutController'
			})

			// route for the gallery page
			.when('/gallery', {
				templateUrl : 'partials/gallery.html',
				controller  : 'galleryController'
			})
			.otherwise ({
				redirectTo: '/home'
			});
			
			
	
	});

	// create the controller and inject Angular's $scope
	futuristApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.info = 'Welcome to futurism!';
	});

	futuristApp.controller('aboutController', function($scope) {
		$scope.info = 'About Oodles';
	});

	futuristApp.controller('galleryController', function($scope) {
		$scope.info = 'Service';
	});
    
    