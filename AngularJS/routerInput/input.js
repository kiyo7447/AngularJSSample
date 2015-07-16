var Input;
(function (Input) {
    var InputController = (function () {
        function InputController($scope) {
            this.$scope = $scope;
            $scope.text = "ok";
        }
        return InputController;
    })();
    Input.InputController = InputController;
})(Input || (Input = {}));
//# sourceMappingURL=input.js.map