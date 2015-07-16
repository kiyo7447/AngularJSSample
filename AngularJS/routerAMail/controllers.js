var AMail;
(function (AMail) {
    //メールのサンプルデータ
    var Message = (function () {
        function Message(id, sender, subject, date, recipients, message) {
            this.id = id;
            this.sender = sender;
            this.subject = subject;
            this.date = date;
            this.recipients = recipients;
            this.message = message;
        }
        return Message;
    })();
    var messages = [{
        id: 0,
        sender: "japan@somecompany.com",
        subject: "ご無沙汰しております。",
        date: new Date("2013/12/7 12:32:00"),
        recipients: ["greg@somecompany.com"],
        message: "昼食をご一緒させてください。" + "今年は共同作業できそうな案件がたくさんあります。"
    }, {
        id: 1,
        sender: "maria@somecompany.com",
        subject: "私のノートPCはどこですか？",
        date: new Date("2013/12/7 8:15:12"),
        recipients: ["greg@somecompany.com"],
        message: "私の席の引き出しに返してくれたのだと思っていましたが、" + "見当たりません。"
    }, {
        id: 2,
        sender: "bill@somecompany.com",
        subject: "パイソンを探しています。",
        date: new Date("2013/12/6 20:35:02"),
        recipients: ["greg@somecompany.com"],
        message: "すみません、ペットのパイソンがかごから逃げ出していました。" + "すばしっこい方ではないので、見かけたら教えて下さい。"
    }];
    var ListController = (function () {
        function ListController($scope) {
            this.$scope = $scope;
            $scope.messages = messages;
        }
        return ListController;
    })();
    AMail.ListController = ListController;
    var DetailController = (function () {
        function DetailController($scope, $stateParams) {
            this.$scope = $scope;
            this.$stateParams = $stateParams;
            $scope.message = messages[$stateParams.id];
            $scope.test = "hoge";
        }
        return DetailController;
    })();
    AMail.DetailController = DetailController;
})(AMail || (AMail = {}));
//# sourceMappingURL=controllers.js.map