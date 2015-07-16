var Menu;
(function (Menu) {
    //メールのサンプルデータ
    var Product = (function () {
        function Product(Id, Title, Description, Price) {
            this.Id = Id;
            this.Title = Title;
            this.Description = Description;
            this.Price = Price;
        }
        return Product;
    })();
    var ListController = (function () {
        function ListController($scope, $http) {
            this.$scope = $scope;
            $scope.statusMessage = "処理中";
            $http.get("http://localhost:6243/Products").success(function (data, status, headers, config) {
                $scope.products = data;
                $scope.statusMessage = null;
            }).error(function (data, status, headers, config) {
                //alert("error status:" + status);
                $scope.errorMessage = "error status:" + status;
                $scope.statusMessage = null;
            });
        }
        return ListController;
    })();
    Menu.ListController = ListController;
})(Menu || (Menu = {}));
//# sourceMappingURL=controllers.js.map