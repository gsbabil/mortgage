!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=18)}({18:function(e,t,n){"use strict";n.r(t);var r=n(8),o=n.n(r),a=n(6),u=n.n(a),i=n(7),l=n.n(i),c=n(5);function f(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return s(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,void 0):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,u=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return u=e.done,e},e:function(e){i=!0,a=e},f:function(){try{u||null==n.return||n.return()}finally{if(i)throw a}}}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var m=navigator.language||navigator.userLanguage,d=document.createElement("div"),p=document.createElement("table"),__=wp.i18n.__,y=function(){function e(t){u()(this,e),this.amount=parseFloat(t.querySelector('[name="amount"]').value),this.rate=parseFloat(t.querySelector('[name="rate"]').value/100),this.currency=document.createElement("small"),this.currency="<small>"+t.dataset.currency+"</small>"}return l()(e,[{key:"payment",value:function(e){return-1*Object(c.b)(this.rate/12,12*e,this.amount)}},{key:"generateTableHead",value:function(e,t){var n,r=e.createTHead().insertRow(),o=f(t);try{for(o.s();!(n=o.n()).done;){var a=n.value,u=document.createElement("th"),i=document.createTextNode(a);u.appendChild(i),r.appendChild(u)}}catch(e){o.e(e)}finally{o.f()}}},{key:"generateTable",value:function(e,t){var n,r=f(t);try{for(r.s();!(n=r.n()).done;){var o=n.value,a=e.insertRow();for(var u in o)a.insertCell().innerHTML=o[u]}}catch(e){r.e(e)}finally{r.f()}}},{key:"response",value:function(e){var t=this;"wp-block-columns"===e.parentNode.parentNode.className&&(e=e.parentNode.parentNode);var n=[__("Duration","mortgage"),__("Monthly payment","mortgage"),__("Interests","mortgage"),__("Total","mortgage")],r=[];[10,15,20,25,30].forEach((function(e){r.push(o()({years:e+__(" Years","mortgage"),recurring:t.formatNumber(t.payment(e)),interests:t.formatNumber(12*t.payment(e)*e-t.amount),total:t.formatNumber(12*t.payment(e)*e)},"interests",t.formatNumber(12*t.payment(e)*e-t.amount)))})),p.innerHTML="",this.generateTableHead(p,n),this.generateTable(p,r),d.className="wp-block-mortgage-table",d.appendChild(p),e.after(d)}},{key:"formatNumber",value:function(e){return this.currency+e.toLocaleString(m,{minimumFractionDigits:2,maximumFractionDigits:2})}}]),e}();document.addEventListener("submit",(function(e){var t=e.target;t.className.indexOf("wp-block-mortgage-form")<0||(e.preventDefault(),e.stopPropagation(),t.reportValidity()&&new y(t).response(t))}),!0)},5:function(e,t,n){"use strict";var r;function o(e,t,n,o,a){void 0===o&&(o=0),void 0===a&&(a=r.End);var u=0===e,i=Math.pow(1+e,t),l=a===r.Begin?1:0,c=u?1:e;return-(o+n*i)/(u?t:(1+c*l)*(i-1)/c)}function a(e,t,n,a,u,i){if(void 0===u&&(u=0),void 0===i&&(i=r.End),t<1)return Number.NaN;if(i===r.Begin&&1===t)return 0;var l=function(e,t,n,o,a){return function(e,t,n,o,a){if(void 0===a&&(a=r.End),0===e)return-(o+n*t);var u=Math.pow(1+e,t);return-o*u-n*(1+e*(a===r.Begin?1:0))/e*(u-1)}(e,t-1,n,o,a)}(e,t,o(e,n,a,u,i),a,i)*e;return i===r.Begin&&t>1&&(l/=1+e),l}n.d(t,"a",(function(){return a})),n.d(t,"b",(function(){return o})),function(e){e.Begin="begin",e.End="end"}(r||(r={}))},6:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.default=e.exports,e.exports.__esModule=!0},7:function(e,t){function n(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}e.exports=function(e,t,r){return t&&n(e.prototype,t),r&&n(e,r),e},e.exports.default=e.exports,e.exports.__esModule=!0},8:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0}});