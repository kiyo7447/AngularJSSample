
module Bootstrap {

	interface IMainScope extends ng.IScope {
		go(path: string): void;
		alert(msg: string): void;
	}

	export class MainCtrl {
        constructor(private $scope: IMainScope, $http: ng.IHttpService, $location:ng.ILocationService, $window:ng.IWindowService) {
			
			$scope.go = (path: string) => {
				$location.path(path);
			}

			$scope.alert = (msg: string) => {
				$window.alert(msg);
			}
        }


    }
}
 