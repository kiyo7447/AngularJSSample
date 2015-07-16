module UIRouterEx {
	"use strict";
	//メールのサンプルデータ
	class Product {

		constructor(id: number, title: string, description: string, price: number) {
			this.id = id;
			this.title = title;
			this.description = description;
			this.price = price;
		}

		id: number;
		title: string;
		description: string;
		price: number;
	}

	var contents: Product[] = [{
		id: 0, title: "ほげほげ", description: "ほげ", price: 100
		}, {
			id: 1, title: "ふごふご", description: "ふご", price: 200
		}, {
			id: 2, title: "ふがふが", description: "ふが", price: 300
		}];

    interface IListScope extends ng.IScope {
        contents: Product[];
		errorMessage: string;
		statusMessage: string;
    }

	export class ListCtrl {
        constructor(private $scope: IListScope, $http: ng.IHttpService) {
			$scope.contents = contents;
        }
    }

	interface IDetailScope extends ng.IScope {
		detail: Product;
	}

	interface IStateParams extends angular.ui.IStateParamsService {
		//ここの名前は、UIRouterに記載されている「:detail_id」と一致
		detail_id: number;
	}

	export class DetailCtrl {
		//パラメータの順番はどちらでも動作する
//        constructor(private $scope: IDetailScope, private $stateParams: IStateParams, $http: ng.IHttpService) {
		constructor(private $scope: IDetailScope, $http: ng.IHttpService, private $stateParams: IStateParams) {
			$scope.detail = contents[$stateParams.detail_id];
        }
    }
}

 