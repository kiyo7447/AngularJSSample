/// <reference path="_all.ts" />
 //http://qiita.com/zoetro/items/1aefa189cb54169f2cee

module basic03 {
	export class Customer {
		name: string;
		city: string;
	}

	export interface Ibasic03_Controller extends ng.IScope {
		firstName: string;
		lastName: string;

		customers: Customer[];
		//customers: Array<Customer>;
		//customers: Array<any>;

		getFullName(): string;
	}

	export class basic03_Controller {
		constructor(private $scope: Ibasic03_Controller) {
			$scope.firstName = "John2";
			$scope.lastName = "Doe2";

			$scope.getFullName = ()=> {
				return $scope.firstName + " " + $scope.lastName;
			}
			$scope.customers = [{ name: "abe2", city: "Yoshida" }, { name: "kiyo2", city: "Koshin" }];	
		}
	}
}


//https://docs.angularjs.org/tutorial/step_02
angular.module("main", []).controller("simpleController", function ($scope) {
	// Initialize the model variables
	$scope.firstName = "John";
	$scope.lastName = "Doe";

	// Define utility functions
	$scope.getFullName = function () {
		return $scope.firstName + " " + $scope.lastName;
	};

	$scope.customers = [{ name: "abe", city: "Yoshida" }, { name: "kiyo", city: "Koshin" }];
}).controller("simpleController2", basic03.basic03_Controller);


//http://jsfiddle.net/colllin/aQHpb/

