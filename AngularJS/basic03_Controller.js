
var simpleController2 = function ($scope) {
	// Initialize the model variables
	$scope.firstName = "John2";
	$scope.lastName = "Doe2";

	// Define utility functions
	$scope.getFullName = function () {
		return $scope.firstName + " " + $scope.lastName;
	};

	$scope.customers = [{ name: "", city: "" }, { name: "", city: "" }];
};



//var basic03  = angular.module("basic03", []).controller("simpleController", simpleController);

