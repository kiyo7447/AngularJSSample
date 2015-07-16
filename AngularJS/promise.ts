
module promise {

	export interface IPromiseController extends ng.IScope {
		date: number;
		getDate(): number;

		resolve: string;
		reject: string;
		notify: string;

		name2: string;
		run(): void;
		_aync(n: string): ng.IPromise<{}>;
	}

	export class PromiseController {
		constructor(private $scope: IPromiseController, $q:ng.IQService, $timeout:ng.ITimeoutService, $http:ng.IHttpService) {
			$scope.date = 123;

			$scope.getDate = () => {
				return 567;
			}

			$scope.run = () => {
				console.log("run()1");
				var promise = $scope._aync($scope.name2);
				console.log("run()2");
				promise.then(
					//成功
					(msg:string) => {
						console.log("成功:" + msg);
						$scope.resolve = msg;
						$scope.reject = "";
						//$scope.notify = "";
					},
					//失敗
					(msg) => {
						console.log("失敗:" + msg);
						$scope.resolve = "";
						$scope.reject = msg;
						//$scope.notify = "";
					},
					//通知
					(msg) => {
						console.log("通知:" + msg);
						$scope.resolve = "";
						$scope.reject = "";
						$scope.notify = msg;
					});
				console.log("run()3");
			}

			$scope._aync = (n: string) => {
				console.log("_aync()1");
				var deferred: ng.IDeferred<{}> = $q.defer();

				//ここでは通知ができません。
				deferred.notify("AsyncNoti1");	//これは意味が無い行となる
				$timeout(() => {
					console.log("_aync()2");
					deferred.notify("AsyncNoti2");
					console.log("_aync()3");
					if (this._check(n)) {
						deferred.resolve("Hello, " + n);
					}
					else {
						deferred.reject("NG, " + n);
					}
					console.log("_aync()4");
				}, 3000);
				console.log("_aync()5");
				return deferred.promise;
			}


		}
		private _check(n: string): boolean {
			if (n === undefined || n === null) return false;
			return n.length < 10;
		}
		private async(n: string): ng.IPromise<void> {

			//error $qが見つからない
			//var deferred:ng.IPromise = $q;
			
			return null;
		}

	}
}
/*
run()	1
_aync()	1
_aync()	5
run()	2
run()	3
_aync()	2
_aync()	3
_aync()	4
通知:AsyncNoti2		←これらが後で通知される
成功:Hello, aaa		←〃
 */

angular.module("app", []).controller("simpleController", function ($scope) {
	// Initialize the model variables
	$scope.firstName = "John";
	$scope.lastName = "Doe";

	// Define utility functions
	$scope.getFullName = function () {
		return $scope.firstName + " " + $scope.lastName;
	};

	$scope.customers = [{ name: "abe", city: "Yoshida" }, { name: "kiyo", city: "Koshin" }];
}).controller("promiseController", ["$scope", "$q", "$timeout", "$http", promise.PromiseController]);


