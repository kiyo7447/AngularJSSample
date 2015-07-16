/// <reference path="../router.ts" />
/// <reference path="../_all.ts" />

module login {

	export interface ILoginScope extends ng.IScope {
		date: number;
		getDate(): number;

		login(): void;
	}

	export class LoginController {
		constructor(private $scope: ILoginScope, $state:ng.ui.IStateService, userService) {
			$scope.date = 123;
			$scope.getDate = () => {
				return new Date().toIntDate();
			}

			$scope.login = () => {
				if (userService.login()) {
					$state.go("/home");
				} else {

				}
			}

		}
	}
}



