/// <reference path="_all.ts" />
//http://qiita.com/zoetro/items/1aefa189cb54169f2cee
var module02;
(function (module02) {
    var CustomerStd = (function () {
        function CustomerStd() {
            this.name = "";
            this.name2 = "a";
            this.city = "";
        }
        CustomerStd.prototype.getFullName = function () {
            return this.name2 + " " + this.city;
        };
        return CustomerStd;
    })();
    module02.CustomerStd = CustomerStd;
    var module02_Controller = (function () {
        function module02_Controller($scope, Customer) {
            this.$scope = $scope;
            $scope.firstName = "John2";
            $scope.lastName = "Doe2";
            $scope.getFullName = function () {
                //ng
                //return $scope.customer.getFullName();
                //ok
                return $scope.firstName + " " + $scope.lastName;
                //OK
                //return $scope.customer.name2 + $scope.customer.city;
            };
            $scope.customer = Customer;
            //$scope.customer.name2 = "name..";
            //$scope.customer.city = "city..";
        }
        return module02_Controller;
    })();
    module02.module02_Controller = module02_Controller;
})(module02 || (module02 = {}));
angular.module("main", []).value("Customer", module02.CustomerStd).controller("SimpleController", module02.module02_Controller);
//# sourceMappingURL=modle02_RegisteringValueForTypeScript.js.map