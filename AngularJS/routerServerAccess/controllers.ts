

//このサンプルは、変数名が規約どおりではありません。
//ただしくないのですよ。
//なぜかって？
//ASP.NET MVC 5が正しいJSONを返すための簡単な仕組みがないからです。
//JsonFormatterを使っていないから、簡単には正しい形に出来ない。


module ServerAccess {
	"use strict";

	//メールのサンプルデータ
	class Product {

		constructor(Id: number, Title: string, Description: string, Price: number) {
			this.Id = Id;
			this.Title = Title;
			this.Description = Description;
			this.Price = Price;
		}

		Id: number;
		Title: string;
		Description: string;
		Price: number;
	}


    interface IListScope extends ng.IScope {
        products: Product[];
		errorMessage: string;
		statusMessage: string;
    }

	export class ListController {
        constructor(private $scope: IListScope, $http: ng.IHttpService) {
			$scope.statusMessage = "処理中";
			//一連の処理は$qを使うべき
			$http.get("http://localhost:6243/Products")
				.success(function (data: Product[], status, headers, config) {
				$scope.products = data;
				$scope.statusMessage = null;
			})
				.error(function (data, status, headers, config) {
				//alert("error status:" + status);
					$scope.errorMessage = "error status:" + status;
					$scope.statusMessage = null;
			});
        }
    }
}
