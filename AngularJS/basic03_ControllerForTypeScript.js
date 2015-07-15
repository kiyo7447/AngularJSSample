/// <reference path="_all.ts" />
//http://qiita.com/zoetro/items/1aefa189cb54169f2cee
var basic03;
(function (basic03) {
    var Customer = (function () {
        function Customer() {
        }
        return Customer;
    })();
    basic03.Customer = Customer;
    var basic03_Controller = (function () {
        function basic03_Controller($scope) {
            this.$scope = $scope;
            $scope.firstName = "John2";
            $scope.lastName = "Doe2";
            $scope.getFullName = function () {
                return $scope.firstName + " " + $scope.lastName;
            };
            $scope.customers = [{ name: "abe2", city: "Yoshida" }, { name: "kiyo2", city: "Koshin" }];
        }
        return basic03_Controller;
    })();
    basic03.basic03_Controller = basic03_Controller;
})(basic03 || (basic03 = {}));
//https://docs.angularjs.org/tutorial/step_02
angular.module("main", []).controller("simpleController", function ($scope) {
    // Initialize the model variables
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    // Define utility functions
    $scope.getFullName = function () {
        return $scope.firstName + " " + $scope.lastName;
    };
    $scope.customers = [{ name: "abe", city: "Yoshida" }, { name: "kiyo", city: "Koshin" }];
}).controller("simpleController2", basic03.basic03_Controller);
//http://jsfiddle.net/colllin/aQHpb/
//# sourceMappingURL=basic03_ControllerForTypeScript.js.map