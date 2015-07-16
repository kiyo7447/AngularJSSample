


//基底クラスの拡張を無理やり実施
//Cool!
interface Date {
	toIntDate(): number;
}
class DateCommon {
	toIntDate(): number {
		var t: Date = <Date>this;
		return parseInt(t.getFullYear() + ("0" + (t.getMonth() + 1)).slice(-2) + ("0" + t.getDate()).slice(-2), 10);
		//return 123;
	}
}

_.extend(Date.prototype, DateCommon.prototype);
var d: Date = new Date();
console.log(d.toIntDate());





module inheritance {

	export interface IInheritanceController extends ng.IScope {
		date: number;

		getDate(): number;
	}

	export class InheritanceController {
		constructor(private $scope: IInheritanceController) {
			$scope.date = 123;

			$scope.getDate= ()=> {
				return new Date().toIntDate();
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
}).controller("inheritanceController", inheritance.InheritanceController);


