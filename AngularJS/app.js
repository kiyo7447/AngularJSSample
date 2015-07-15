/// <reference path="scripts/typings/underscore/underscore.d.ts" />
var Greeter = (function () {
    function Greeter(element) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () { return _this.span.innerHTML = new Date().toUTCString(); }, 500);
    };
    Greeter.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return Greeter;
})();
window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
};
//基底クラスの拡張を無理やり実施
var DateCommon = (function () {
    function DateCommon() {
    }
    DateCommon.prototype.toIntDate = function () {
        var t = this;
        return parseInt(t.getFullYear() + ("0" + (t.getMonth() + 1)).slice(-2) + ("0" + t.getDate()).slice(-2), 10);
        //return 123;
    };
    return DateCommon;
})();
_.extend(Date.prototype, DateCommon.prototype);
var d = new Date();
console.log(d.toIntDate());
//# sourceMappingURL=app.js.map