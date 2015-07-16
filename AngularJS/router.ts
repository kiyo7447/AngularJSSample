
module UNITE {

	//A-Mailのコアとなるサービスのモジュール
	//http://b.denkizakana.com/2014/02/angularui-router.html
	//	var aMailService: ng.IModule = angular.module("AMail", ["ngRoute"]);

	//↓update ngRoute ⇒ UI-Router
	
	var aMailService: ng.IModule = angular.module("AMail", ["ui.router"]);
//	var aMailService: ng.IModule = angular.module("AMail", ["ngLocale", "ui.router"]);


	//URLとテンプレートそしてコントローラの対応関係を指定します。
	//var emailRouteConfig = ["$routeProvider",
	//    function emailRouteConfig($routeProvider) {

//	function emailRouteConfig($stateProvider: ng.ui.IStateProvider, $urlRouterProvider:angular.ui.IUrlRouterProvider, $locationProvider: ng.ILocationProvider) {
	function emailRouteConfig($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {
		//$locationProvider.html5Mode(true);
		//これが動作している。文字を変えるとデフォルトのstateが変わるため。
		$urlRouterProvider.otherwise('/Menu');

		//
		$stateProvider.
			state("/Menu", {
			url:"^/Menu",
			templateUrl: "routerMenu/menu.html",
			//controller: AMail.ListController
		}).
			state("/AMail", {
			url:"^/AMail",
			templateUrl: "routerAMail/list.html",
			controller: AMail.ListController
		}).
		//詳細ビューではパラメータ付きのURLを指定います。
			state("/AMail/:id", {
			url:"^/AMail/:id",
			templateUrl: "routerAMail/detail.html",
			controller: AMail.DetailController
		}).
		//サーバアクセス
			state("/ServerAccess", {
			url:"^/ServerAccess",
			templateUrl: "routerServerAccess/list.html",
			controller: ServerAccess.ListController
		}).
		//UIRouterサンプル
			state("UIルーターのlist", {
			url: "^/UIRouterEx/list",
			templateUrl: "routerUIRouterEx/list.html",
			controller: UIRouterEx.ListCtrl
		}).
		//UIRouterサンプル
			state("UIルータのdetail", {
			url: "^/UIRouterEx/detail/:detail_id",
			templateUrl: "routerUIRouterEx/detail.html",
			controller: UIRouterEx.DetailCtrl
		}).
		//Inputサンプル
			state("Inputサンプル", {
			url: "^/Input",
			templateUrl: "routerInput/input.html",
			controller: Input.InputController
		}).

			//これは動作していない。外しても問題なさそうだ。どうも「$urlRouterProvider.otherwise('/Menu');」が動作している。
			//http://stackoverflow.com/questions/16793724/otherwise-on-stateprovider
			state("otherwise", {
			redirectTo: "/Menu"
		
		});
	};
	//}];

	//A-Mailサービスルートを解釈できるようにするための設定
	aMailService.config(emailRouteConfig);

	//aMailService.run(["$rootScope", "$state", "UserModel", ($rootScope:ng.IRootScopeService, $state, UserModel) => {

	//	$rootScope.$on("$stateChangeStart",(e: ng.IAngularEvent, toParams, fromState, fromParams) => {


	//		$state.go("login");
	//	})
	//}]);

	/*
	  
	//これは動作した これをヒントに他を動作させた
	aMailService.config(["$stateProvider", ($stateProvider:ng.ui.IStateProvider) => {
		$stateProvider.state("menu", { url: "^/menu", templateUrl: "Menu/menu.html" });



	}]);

	 */



	//aMailService.config(($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider, $locationProvider: ng.ILocationProvider) => { });

	/*

	//A-Mailのコアとなるサービスのモジュール
	var aServerService: ng.IModule = angular.module("ServerAccess", ["ngRoute"]);

	//URLとテンプレートそしてコントローラの対応関係を指定します。
	//var emailRouteConfig = ["$routeProvider",
	//    function emailRouteConfig($routeProvider) {

	function serverRouteConfig($routeProvider) {

		//
		$routeProvider.
		//サーバアクセス
			when("/ServerAccess", {
			templateUrl: "ServerAccess/list.html",
			controller: ServerAccess.ListController
		}).
			otherwise({
			redirectTo: "/"
		});
	};
	//}];


	//A-Mailサービスルートを解釈できるようにするための設定
	aServerService.config(serverRouteConfig);
	*/
}
 