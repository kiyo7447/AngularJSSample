/// <reference path="scripts/typings/underscore/underscore.d.ts" />
class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.element.appendChild(this.span);
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    }

    stop() {
        clearTimeout(this.timerToken);
    }

}

window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    greeter.start();
};



//基底クラスの拡張を無理やり実施
class DateCommon {
	toIntDate(): number {
		var t:any = this;
		return parseInt(t.getFullYear() + ("0" + (t.getMonth() + 1)).slice(-2) + ("0" + t.getDate()).slice(-2), 10);
		//return 123;
	}
}

_.extend(Date.prototype, DateCommon.prototype);

var d: any = new Date();

console.log(d.toIntDate());





