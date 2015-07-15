/// <reference path="_all.ts" />
//http://qiita.com/zoetro/items/1aefa189cb54169f2cee
var basic03;
(function (basic03) {
    var C03basic_Controller = (function () {
        function C03basic_Controller($scope) {
            this.$scope = $scope;
            $scope.firstName = "John";
            $scope.lastName = "Doe";
            $scope.getFullName = function () {
                return $scope.firstName + " " + $scope.lastName;
            };
        }
        return C03basic_Controller;
    })();
    basic03.C03basic_Controller = C03basic_Controller;
})(basic03 || (basic03 = {}));
var C03basic_Controller = (function () {
    function C03basic_Controller($scope) {
        this.$scope = $scope;
        $scope.firstName = "John";
        $scope.lastName = "Doe";
        $scope.getFullName = function () {
            return $scope.firstName + " " + $scope.lastName;
        };
    }
    return C03basic_Controller;
})();
//# sourceMappingURL=03basic_ControllerForTypeScript.js.map