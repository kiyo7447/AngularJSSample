module login {

	export interface ILogoutScope extends ng.IScope {
		date: number;

		getDate(): number;
	}

	export class LogoutController {
		constructor(private $scope: ILogoutScope) {
			$scope.date = 123;

			$scope.getDate = () => {
				return new Date().toIntDate();
			}
		}
	}
}



