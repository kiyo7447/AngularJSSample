module AMail {

	//メールのサンプルデータ
	class Message {

		constructor(id: number, sender: string, subject: string, date: Date, recipients: string[], message: string) {
			this.id = id;
			this.sender = sender;
			this.subject = subject;
			this.date = date;
			this.recipients = recipients;
			this.message = message;
		}

		id: number;
		sender: string;
		subject: string;
		date: Date;
		recipients: string[];
		message: string;
	}

	var messages: Message[] = [{
		id: 0, sender: "japan@somecompany.com", subject: "ご無沙汰しております。",
		date: new Date("2013/12/7 12:32:00"), recipients: ["greg@somecompany.com"],
		message: "昼食をご一緒させてください。"
		+ "今年は共同作業できそうな案件がたくさんあります。"
	}, {
			id: 1, sender: "maria@somecompany.com", subject: "私のノートPCはどこですか？",
			date: new Date("2013/12/7 8:15:12"), recipients: ["greg@somecompany.com"],
			message: "私の席の引き出しに返してくれたのだと思っていましたが、"
			+ "見当たりません。"

		}, {
			id: 2, sender: "bill@somecompany.com", subject: "パイソンを探しています。",
			date: new Date("2013/12/6 20:35:02"), recipients: ["greg@somecompany.com"],
			message: "すみません、ペットのパイソンがかごから逃げ出していました。"
			+ "すばしっこい方ではないので、見かけたら教えて下さい。"
		}];


	/*
	var messages = {
			id: 0, sender: "japan@somecompany.com", subject: "ご無沙汰しております。",
			date: "2013/12/7 12:32:00", recipients: ["greg@somecompany.com"],
			message: "昼食をご一緒させてください。"
			+ "今年は共同作業できそうな案件がたくさんあります。"
		}, {
			id: 1, sender: "maria@somecompany.com", subject: "私のノートPCはどこですか？",
			date: "2013/12/7 8:15:12", recipients: ["greg@somecompany.com"],
			message: "私の席の引き出しに返してくれたのだと思っていましたが、"
			+ "見当たりません。"
		}, {
			id: 2, sender: "bill@somecompany.com", subject: "パイソンを探しています。",
			date: "2013/12/6 20:35:02", recipients: ["greg@somecompany.com"],
			message: "すみません、ペットのパイソンがかごから逃げ出していました。"
			+ "すばしっこい方ではないので、見かけたら教えて下さい。"
		}];
	*/

	//リストのテンプレートからメッセージにアクセスできるようにします。
	/*
	function ListController($scope) {
		$scope.messages = messages
	}
	*/


    interface IListScope extends ng.IScope {
        messages: Message[];
    }

	export class ListController {
        constructor(private $scope: IListScope) {
            $scope.messages = messages;
        }
    }
	//URLを解析してメッセージIDを取り出して、該当メッセージのオブジェクトを取得します。
	/*
	function DetailController($scope, $stateParams) {
	
		$scope.message = messages[$stateParams.id];
	
	}
	*/

	interface IDetailScope extends ng.IScope {
		message: Message;
		test: string;
	}

	interface ISateParams extends angular.ui.IStateParamsService {
		id: number;
	}

	export class DetailController {
		constructor(private $scope: IDetailScope, private $stateParams:ISateParams) {
			$scope.message = messages[$stateParams.id];
			$scope.test = "hoge";

			
		}
	}

}
