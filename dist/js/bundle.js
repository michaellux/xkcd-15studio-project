!function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=0)}([function(t,e,r){r(3),t.exports=r(2)},function(t,e,r){var n=function(t){"use strict";var e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",c=n.toStringTag||"@@toStringTag";function a(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{a({},"")}catch(t){a=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof f?e:f,i=Object.create(o.prototype),c=new L(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return S()}for(r.method=o,r.arg=i;;){var c=r.delegate;if(c){var a=x(c,r);if(a){if(a===s)continue;return a}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=l(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,c),i}function l(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var s={};function f(){}function h(){}function p(){}var d={};d[o]=function(){return this};var v=Object.getPrototypeOf,y=v&&v(v(E([])));y&&y!==e&&r.call(y,o)&&(d=y);var m=p.prototype=f.prototype=Object.create(d);function g(t){["next","throw","return"].forEach((function(e){a(t,e,(function(t){return this._invoke(e,t)}))}))}function _(t,e){var n;this._invoke=function(o,i){function c(){return new e((function(n,c){!function n(o,i,c,a){var u=l(t[o],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&r.call(f,"__await")?e.resolve(f.__await).then((function(t){n("next",t,c,a)}),(function(t){n("throw",t,c,a)})):e.resolve(f).then((function(t){s.value=t,c(s)}),(function(t){return n("throw",t,c,a)}))}a(u.arg)}(o,i,n,c)}))}return n=n?n.then(c,c):c()}}function x(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,x(t,e),"throw"===e.method))return s;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=l(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,s;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,s):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,s)}function w(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function b(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function L(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(w,this),this.reset(!0)}function E(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:S}}function S(){return{value:void 0,done:!0}}return h.prototype=m.constructor=p,p.constructor=h,h.displayName=a(p,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===h||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,a(t,c,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},g(_.prototype),_.prototype[i]=function(){return this},t.AsyncIterator=_,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var c=new _(u(e,r,n,o),i);return t.isGeneratorFunction(r)?c:c.next().then((function(t){return t.done?t.value:c.next()}))},g(m),a(m,c,"Generator"),m[o]=function(){return this},m.toString=function(){return"[object Generator]"},t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=E,L.prototype={constructor:L,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(b),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return c.type="throw",c.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],c=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var a=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(a&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(a){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var c=i?i.completion:{};return c.type=t,c.arg=e,i?(this.method="next",this.next=i.finallyLoc,s):this.complete(c)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),s},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),b(r),s}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;b(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:E(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},t}(t.exports);try{regeneratorRuntime=n}catch(t){Function("r","regeneratorRuntime = r")(n)}},function(t,e,r){},function(t,e,r){"use strict";r.r(e);r(1);function n(t,e,r,n,o,i,c){try{var a=t[i](c),u=a.value}catch(t){return void r(t)}a.done?e(u):Promise.resolve(u).then(n,o)}var o=function(){var t,e=(t=regeneratorRuntime.mark((function t(){var e,r,n,o,i,c=arguments;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=c.length>0&&void 0!==c[0]?c[0]:"",r="https://cors-anywhere.herokuapp.com/",n="https://xkcd.com/".concat(e,"/info.0.json"),t.next=5,fetch(r+n);case 5:if(o=t.sent,i=null,!o.ok){t.next=13;break}return t.next=10,o.json();case 10:i=t.sent,t.next=14;break;case 13:console.log("err ".concat(o.status));case 14:return t.abrupt("return",i);case 15:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(o,i){var c=t.apply(e,r);function a(t){n(c,o,i,a,u,"next",t)}function u(t){n(c,o,i,a,u,"throw",t)}a(void 0)}))});return function(){return e.apply(this,arguments)}}(),i=function(t,e,r){return{title:t.title,transcript:t.transcript,currentSlideUrl:t.img,current:t.num,prev:t.num-1,next:t.num+1,date:new Date(t.year,t.month-1,t.day),last:r?t.num:e.last}};var c=function(t){var e=document.querySelector(".comicsitem__content"),r=document.createElement("img");r.setAttribute("src",t.currentSlideUrl),r.setAttribute("class","ui__comicsItemImage");var n,o,i=document.createElement("p");i.setAttribute("class","ui__comicsItemTranscript"),i.innerHTML=(n=t.transcript,(o=document.createElement("textarea")).innerText=n,o.innerHTML),e.innerHTML="",e.append(r,i),document.querySelector(".ui__title").textContent=t.title,document.querySelector(".header__date").textContent=function(t){var e=t.getDate();e<10&&(e="0".concat(e));var r=t.getMonth()+1;r<10&&(r="0".concat(r));var n=t.getFullYear()%100;return n<10&&(n="0".concat(n)),"".concat(e,".").concat(r,".").concat(n)}(t.date)},a=function(t){document.querySelector(".ui__prev").addEventListener("click",(function(){o(t.prev).then((function(e){return i(e,t)})).then((function(e){c(t=e)}))})),document.querySelector(".ui__next").addEventListener("click",(function(){o(t.next).then((function(e){return i(e,t)})).then((function(e){c(t=e)}))})),document.querySelector(".ui__first").addEventListener("click",(function(){o(1).then((function(e){return i(e,t)})).then((function(e){c(t=e)}))})),document.querySelector(".ui__last").addEventListener("click",(function(){o(t.last).then((function(e){return i(e,t)})).then((function(e){c(t=e)}))})),document.querySelector(".ui__random").addEventListener("click",(function(){var e,r;o((e=1,r=t.last+1,e=Math.ceil(e),r=Math.floor(r),Math.floor(Math.random()*(r-e))+e)).then((function(e){return i(e,t)})).then((function(e){c(t=e)}))}))},u={_title:null,get title(){return this._title},set title(t){this._title=t},_transcript:null,get transcript(){return this._transcript},set transcript(t){this._transcript=t},_currentSlideUrl:null,get currentSlideUrl(){return this._currentSlideUrl},set currentSlideUrl(t){this._currentSlideUrl=t},_current:null,get current(){return this._current},set current(t){this._current=t},_next:null,get next(){return this._next},set next(t){this._next=t},_prev:null,get prev(){return this._prev},set prev(t){this._prev=t},_last:null,get last(){return this._last},set last(t){this._last=t},_date:null,get date(){return this._date},set date(t){this._date=t}};o().then((function(t){return i(t,u,!0)})).then((function(t){c(u=t),a(u)}))}]);
//# sourceMappingURL=bundle.js.map