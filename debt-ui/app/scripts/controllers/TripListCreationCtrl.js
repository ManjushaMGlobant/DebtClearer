'use strict'
angular.module('DebtClearer')
  .controller('TripListCreationCtrl', function ($scope,$rootScope,$http) {

  	$scope.message = "Hello ctrl";

  	$scope.Trip = {
  		Name : "",
  		Description : "",
  		Members : [],
  		Remainder : ""
  	};

  	$scope.addMember = function(){
  		$scope.Trip.Members.push($scope.member);
  		$scope.member = "";
  		console.log('members ' + $scope.Trip.Members);
  	}

  	$scope.addTrip = function(){
  		$http({
 						 method: 'POST',
  						url: 'http://demo1468896.mockable.io/income',
  						data: $scope.Trip
					}).then(function successCallback(response) {
 						console.log('success');
 						}, function errorCallback(response) {
  						console.log("error");
  					});
  		$scope.Trip = {
	  		Name : "",
	  		Description : "",
	  		Members : [],
	  		Remainder : ""
	  	};

	  	$scope.showForm = false;

	  	alert('Trip created');

  	}

});
