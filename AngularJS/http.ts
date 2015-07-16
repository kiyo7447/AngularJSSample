
module http {

	export interface IHttpController extends ng.IScope {
		//error の原因が不明
		date: number;
		getDate(): number;

		status: string;
		data: string;
		get(): void;
	}

	export class HttpController {
		constructor(private $scope: IHttpController, $http: ng.IHttpService) {
			$scope.date = 123;
			$scope.getDate = () => {
				return new Date().toIntDate();
			}

			$scope.status = "";
			$scope.data = "";

			$scope.get = () => {
				var uri = "http.js";
				$http({
					method: "GET",
					url: uri
				}).success((data, status, headers, config) => {
					console.log("http success.");
					$scope.status =status.toString();
					$scope.data = <string>data;
				}).error((data, status, headers, config) => {
					console.log("http error.");
					$scope.status = status.toString();
					$scope.data = <string>data;
				});
			}
		}
	}
}

angular.module("app", []).controller("simpleController", function ($scope) {
	// Initialize the model variables
	$scope.firstName = "John";
	$scope.lastName = "Doe";

	// Define utility functions
	$scope.getFullName = function () {
		return $scope.firstName + " " + $scope.lastName;
	};

	$scope.customers = [{ name: "abe", city: "Yoshida" }, { name: "kiyo", city: "Koshin" }];
}).controller("httpController", ["$scope", "$http", http.HttpController]);


 