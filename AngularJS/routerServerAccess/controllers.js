//このサンプルは、変数名が規約どおりではありません。
//ただしくないのですよ。
//なぜかって？
//ASP.NET MVC 5が正しいJSONを返すための簡単な仕組みがないからです。
//JsonFormatterを使っていないから、簡単には正しい形に出来ない。
var ServerAccess;
(function (ServerAccess) {
    "use strict";
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
            //一連の処理は$qを使うべき
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
    ServerAccess.ListController = ListController;
})(ServerAccess || (ServerAccess = {}));
//# sourceMappingURL=controllers.js.map