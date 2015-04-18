'use strict';

var artistapp = angular.module("artistapp", []);

artistapp.controller ("controller",
	function controller($scope){
		$scope.artists = {'Name': 'Giacomo Balla',
		                  'occupation': 'sculptor'}
	}
	)