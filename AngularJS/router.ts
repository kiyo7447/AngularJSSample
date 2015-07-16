
module UNITE {

	//A-Mailのコアとなるサービスのモジュール
	//http://b.denkizakana.com/2014/02/angularui-router.html
	//	var aMailService: ng.IModule = angular.module("AMail", ["ngRoute"]);

	//↓update ngRoute ⇒ UI-Router
	
	var routerTestService: ng.IModule = angular.module("AMail", ["ngLocale", "ui.router"]);
	//	var aMailService: ng.IModule = angular.module("AMail", ["ui.router"]);


	//URLとテンプレートそしてコントローラの対応関係を指定します。
	//var emailRouteConfig = ["$routeProvider",
	//    function emailRouteConfig($routeProvider) {

	function emailRouteConfig($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider, $locationProvider: ng.ILocationProvider) {
		//	function emailRouteConfig($stateProvider: ng.ui.IStateProvider, $urlRouterProvider: angular.ui.IUrlRouterProvider) {
		//$locationProvider.html5Mode(true);
		//これが動作している。文字を変えるとデフォルトのstateが変わるため。
		$urlRouterProvider.otherwise('/Menu');

		//
		$stateProvider.
			state("/Menu", {
			url: "^/Menu",
			templateUrl: "routerMenu/menu.html",
			//controller: AMail.ListController
			//↓この定義があるとログインしていないと表示できない。
			//isLoginRequired:ture,
		}).
			state("/AMail", {
			url: "^/AMail",
			templateUrl: "routerAMail/list.html",
			controller: AMail.ListController
		}).
		//詳細ビューではパラメータ付きのURLを指定います。
			state("/AMail/:id", {
			url: "^/AMail/:id",
			templateUrl: "routerAMail/detail.html",
			controller: AMail.DetailController
		}).
		//サーバアクセス
			state("/ServerAccess", {
			url: "^/ServerAccess",
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
		//Bootstrapサンプル
			state("Bootstrapのサンプル", {
			url: "^/Bootstrap",
			templateUrl: "routerBootstrap/bootstrap.html",
			controller: Bootstrap.MainCtrl
		}).
			state("BMail/list", {
			url: "^/BMail",
			templateUrl: "routerBootstrapMail/list.html",
			controller: BMail.ListController
		}).
		//詳細ビューではパラメータ付きのURLを指定います。
			state("BMail/detail", {
			url: "^/BMail/:id",
			templateUrl: "routerBootstrapMail/detail.html",
			controller: BMail.DetailController
		}).

		//
			state("/home", {
			url: "^/home",
			templateUrl: "routerLogin/home.html",
			controller: login.HomeController,
			isLoginRequired: true
		}).
		//
			state("/login", {
			url: "^/login",
			templateUrl: "routerLogin/login.html",
			controller: login.LoginController
		}).
		//
			state("/logout", {
			url: "^/logout",
			controller: login.LogoutController
		}).

		//これは動作していない。外しても問題なさそうだ。どうも「$urlRouterProvider.otherwise('/Menu');」が動作している。
		//http://stackoverflow.com/questions/16793724/otherwise-on-stateprovider
			state("otherwise", {
			redirectTo: "/Menu"

		});
	};
	//}];

	//A-Mailサービスルートを解釈できるようにするための設定
	routerTestService.config(emailRouteConfig);



	//骨格の参考
	//http://qiita.com/ooharabucyou/items/65f52646d721da5b2032
	//↓
	//認証を非同期にしなければならない。
	//http://liginc.co.jp/web/js/other-js/160349
	class UserService {
		private _isLogin: boolean = false;

		isLoggedIn(): boolean {
			return this._isLogin;
		}

		login(): boolean {
			this._isLogin = true;
			return this._isLogin;
		}

		logout(): void {
			this._isLogin = false;
		}
	}

	routerTestService.service("userService", UserService);

	routerTestService.run(["$rootScope", "$state", "userService", ($rootScope: ng.IRootScopeService, $state, userService: UserService) => {

		$rootScope.$on("$stateChangeStart",(e: ng.IAngularEvent, toState, toParams, fromState, fromParams) => {
			if (toState.isLoginRequired) {
				if (!userService.isLoggedIn()) {
					$state.go("/login");

					//この一行がないとログイン画面へ遷移しません。
					e.preventDefault();
				}

			}
		})
	}]);
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
 