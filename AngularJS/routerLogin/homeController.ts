module login {

	export interface IHomeScope extends ng.IScope {
		date: number;

		getDate(): number;
		logout():void ;
	}

	export class HomeController {
		constructor(private $scope: IHomeScope, $state: ng.ui.IStateService, userService) {
			$scope.date = 123;

			$scope.getDate = () => {
				return new Date().toIntDate();
			}

			$scope.logout = () => {
				userService.logout();
				$state.go("/login");
				
			}
		}
	}
}



