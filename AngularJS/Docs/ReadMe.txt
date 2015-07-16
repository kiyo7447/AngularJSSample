
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



Routerについては、ngRouterとuiRouterがある。AngularJS1.4では、ngRouteを使うか、ui-Routerを使うかが悩み


画面遷移時の値の受け渡しが明確化されていない。
		http://dev.classmethod.jp/client-side/javascript/ngscreentransitionsample/
		
画面遷移時に処理を入れて、内容によっては、遷移をキャンセルしたい。


画面表示にログインして無ければログイン画面を表示したい。
	ui-routerで作成はしてみたが実際のログイン処理は、非同期なのでpromiseを使用した処理に変更しなければならない。






