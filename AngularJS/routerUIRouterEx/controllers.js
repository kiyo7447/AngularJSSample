var UIRouterEx;
(function (UIRouterEx) {
    "use strict";
    //メールのサンプルデータ
    var Product = (function () {
        function Product(id, title, description, price) {
            this.id = id;
            this.title = title;
            this.description = description;
            this.price = price;
        }
        return Product;
    })();
    var contents = [{
        id: 0,
        title: "ほげほげ",
        description: "ほげ",
        price: 100
    }, {
        id: 1,
        title: "ふごふご",
        description: "ふご",
        price: 200
    }, {
        id: 2,
        title: "ふがふが",
        description: "ふが",
        price: 300
    }];
    var ListCtrl = (function () {
        function ListCtrl($scope, $http) {
            this.$scope = $scope;
            $scope.contents = contents;
        }
        return ListCtrl;
    })();
    UIRouterEx.ListCtrl = ListCtrl;
    var DetailCtrl = (function () {
        //パラメータの順番はどちらでも動作する
        //        constructor(private $scope: IDetailScope, private $stateParams: IStateParams, $http: ng.IHttpService) {
        function DetailCtrl($scope, $http, $stateParams) {
            this.$scope = $scope;
            this.$stateParams = $stateParams;
            $scope.detail = contents[$stateParams.detail_id];
        }
        return DetailCtrl;
    })();
    UIRouterEx.DetailCtrl = DetailCtrl;
})(UIRouterEx || (UIRouterEx = {}));
//# sourceMappingURL=controllers.js.map