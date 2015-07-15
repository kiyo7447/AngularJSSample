/// <reference path="_all.ts" />
 //http://qiita.com/zoetro/items/1aefa189cb54169f2cee

module module02 {
	export class CustomerStd {
		name: string = "";
		name2: string = "a";
		city: string = "";

		getFullName(): string {
			return this.name2 + " " + this.city;
		}

		//constructor($scope) {
		//	$scope.name = ".";
		//	$scope.name2 = "..";
		//	$scope.city = "...";
		//	$scope.getFullName = () => {
		//		return $scope.name2 + " " + $scope.city;
		//	};

		//}
	}

	export interface Ibasic03_Controller extends ng.IScope {
		firstName: string;
		lastName: string;

		getFullName(): string;

		customer: any;
	}

	export class module02_Controller {
		constructor(private $scope: Ibasic03_Controller, Customer) {
			$scope.firstName = "John2";
			$scope.lastName = "Doe2";

			$scope.getFullName = ()=> {
				//ng
				//return $scope.customer.getFullName();
				//ok
				return $scope.firstName + " " + $scope.lastName;

				//OK
				//return $scope.customer.name2 + $scope.customer.city;
			}

			$scope.customer = Customer;
			//$scope.customer.name2 = "name..";
			//$scope.customer.city = "city..";
		}
	}
}


angular.module("main", [])
	.value("Customer", module02.CustomerStd)
	.controller("SimpleController", module02.module02_Controller);


