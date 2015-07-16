
AngularJS1.2.2では動作するアプリが、1.3.0や1.4.3では動作しなかった


プロパティ名nameは予約後なので動作しない。

Valueを使ってベースモデルのインジェクションを実施したが、ファンクションが連携しなかった。
⇒原因は不明


ng-repeatで改行を外したいが外し方は不明


下記の２行が結果が異なることに驚いた。
			console.log("cookies data:" + $cookies.getAll());
			console.log($cookies.getAll());


http://whiskers.nukos.kitchen/2015/04/21/angularjs-storage.html
のサイトをみてCookieが4KB、localStorageが5MB、sessionStorageが5MBということに驚いた

Bodyタグにng-keyPressを設定してもグローバルでキーイベントを取得することができなかった


validationが完成しなかった。。。


キーイベント

	通常のキーは、

	onKeyDown
	↓
	onKeyDown
	↓
	onKeyPress
	↓
	onKeyUp

	と発生する

	ただし、CtrlとAltは、

	onKeyDown
	↓
	onKeyDown
	↓
	onKeyUp


	$httpを使ったがjsonがエラー404で取得できなかった。物理ファイルで匿名ユーザの参照権限を付与する必要がある。



	Routerについては、ngRouterとuiRouterがある。ｆ