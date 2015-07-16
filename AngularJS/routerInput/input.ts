
module Input {


    interface IInputScope extends ng.IScope {
        text: string;
    }

	export class InputController {
        constructor(private $scope: IInputScope) {
			$scope.text = "ok";
        }
    }
}
 