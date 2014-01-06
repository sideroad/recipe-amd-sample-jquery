!function(){var a;!function(b){if("function"==typeof bootstrap)bootstrap("promise",b);else if("object"==typeof exports)module.exports=b();else if("function"==typeof define&&define.amd)define(b);else if("undefined"!=typeof ses){if(!ses.ok())return;ses.makeQ=b}else a=b()}(function(){"use strict";function a(a){return function(){return X.apply(a,arguments)}}function b(a){return a===Object(a)}function c(a){return"[object StopIteration]"===db(a)||a instanceof T}function d(a,b){if(Q&&b.stack&&"object"==typeof a&&null!==a&&a.stack&&-1===a.stack.indexOf(fb)){for(var c=[],d=b;d;d=d.source)d.stack&&c.unshift(d.stack);c.unshift(a.stack);var f=c.join("\n"+fb+"\n");a.stack=e(f)}}function e(a){for(var b=a.split("\n"),c=[],d=0;d<b.length;++d){var e=b[d];h(e)||f(e)||!e||c.push(e)}return c.join("\n")}function f(a){return-1!==a.indexOf("(module.js:")||-1!==a.indexOf("(node.js:")}function g(a){var b=/at .+ \((.+):(\d+):(?:\d+)\)$/.exec(a);if(b)return[b[1],Number(b[2])];var c=/at ([^ ]+):(\d+):(?:\d+)$/.exec(a);if(c)return[c[1],Number(c[2])];var d=/.*@(.+):(\d+)$/.exec(a);return d?[d[1],Number(d[2])]:void 0}function h(a){var b=g(a);if(!b)return!1;var c=b[0],d=b[1];return c===S&&d>=U&&kb>=d}function i(){if(Q)try{throw new Error}catch(a){var b=a.stack.split("\n"),c=b[0].indexOf("@")>0?b[1]:b[2],d=g(c);if(!d)return;return S=d[0],d[1]}}function j(a,b,c){return function(){return"undefined"!=typeof console&&"function"==typeof console.warn&&console.warn(b+" is deprecated, use "+c+" instead.",new Error("").stack),a.apply(a,arguments)}}function k(a){return r(a)?a:s(a)?D(a):C(a)}function l(){function a(a){b=a,f.source=a,Z(c,function(b,c){W(function(){a.promiseDispatch.apply(a,c)})},void 0),c=void 0,d=void 0}var b,c=[],d=[],e=ab(l.prototype),f=ab(o.prototype);if(f.promiseDispatch=function(a,e,f){var g=Y(arguments);c?(c.push(g),"when"===e&&f[1]&&d.push(f[1])):W(function(){b.promiseDispatch.apply(b,g)})},f.valueOf=j(function(){if(c)return f;var a=q(b);return r(a)&&(b=a),a},"valueOf","inspect"),f.inspect=function(){return b?b.inspect():{state:"pending"}},k.longStackSupport&&Q)try{throw new Error}catch(g){f.stack=g.stack.substring(g.stack.indexOf("\n")+1)}return e.promise=f,e.resolve=function(c){b||a(k(c))},e.fulfill=function(c){b||a(C(c))},e.reject=function(c){b||a(B(c))},e.notify=function(a){b||Z(d,function(b,c){W(function(){c(a)})},void 0)},e}function m(a){if("function"!=typeof a)throw new TypeError("resolver must be a function.");var b=l();try{a(b.resolve,b.reject,b.notify)}catch(c){b.reject(c)}return b.promise}function n(a){return m(function(b,c){for(var d=0,e=a.length;e>d;d++)k(a[d]).then(b,c)})}function o(a,b,c){void 0===b&&(b=function(a){return B(new Error("Promise does not support operation: "+a))}),void 0===c&&(c=function(){return{state:"unknown"}});var d=ab(o.prototype);if(d.promiseDispatch=function(c,e,f){var g;try{g=a[e]?a[e].apply(d,f):b.call(d,e,f)}catch(h){g=B(h)}c&&c(g)},d.inspect=c,c){var e=c();"rejected"===e.state&&(d.exception=e.reason),d.valueOf=j(function(){var a=c();return"pending"===a.state||"rejected"===a.state?d:a.value})}return d}function p(a,b,c,d){return k(a).then(b,c,d)}function q(a){if(r(a)){var b=a.inspect();if("fulfilled"===b.state)return b.value}return a}function r(a){return b(a)&&"function"==typeof a.promiseDispatch&&"function"==typeof a.inspect}function s(a){return b(a)&&"function"==typeof a.then}function t(a){return r(a)&&"pending"===a.inspect().state}function u(a){return!r(a)||"fulfilled"===a.inspect().state}function v(a){return r(a)&&"rejected"===a.inspect().state}function w(){ib||"undefined"==typeof window||window.Touch||!window.console||console.warn("[Q] Unhandled rejection reasons (should be empty):",gb),ib=!0}function x(){for(var a=0;a<gb.length;a++){var b=gb[a];console.warn("Unhandled rejection reason:",b)}}function y(){gb.length=0,hb.length=0,ib=!1,jb||(jb=!0,"undefined"!=typeof process&&process.on&&process.on("exit",x))}function z(a,b){jb&&(hb.push(a),b&&"undefined"!=typeof b.stack?gb.push(b.stack):gb.push("(no stack) "+b),w())}function A(a){if(jb){var b=$(hb,a);-1!==b&&(hb.splice(b,1),gb.splice(b,1))}}function B(a){var b=o({when:function(b){return b&&A(this),b?b(a):this}},function(){return this},function(){return{state:"rejected",reason:a}});return z(b,a),b}function C(a){return o({when:function(){return a},get:function(b){return a[b]},set:function(b,c){a[b]=c},"delete":function(b){delete a[b]},post:function(b,c){return null===b||void 0===b?a.apply(void 0,c):a[b].apply(a,c)},apply:function(b,c){return a.apply(b,c)},keys:function(){return cb(a)}},void 0,function(){return{state:"fulfilled",value:a}})}function D(a){var b=l();return W(function(){try{a.then(b.resolve,b.reject,b.notify)}catch(c){b.reject(c)}}),b.promise}function E(a){return o({isDef:function(){}},function(b,c){return K(a,b,c)},function(){return k(a).inspect()})}function F(a,b,c){return k(a).spread(b,c)}function G(a){return function(){function b(a,b){var g;if(eb){try{g=d[a](b)}catch(h){return B(h)}return g.done?g.value:p(g.value,e,f)}try{g=d[a](b)}catch(h){return c(h)?h.value:B(h)}return p(g,e,f)}var d=a.apply(this,arguments),e=b.bind(b,"next"),f=b.bind(b,"throw");return e()}}function H(a){k.done(k.async(a)())}function I(a){throw new T(a)}function J(a){return function(){return F([this,L(arguments)],function(b,c){return a.apply(b,c)})}}function K(a,b,c){return k(a).dispatch(b,c)}function L(a){return p(a,function(a){var b=0,c=l();return Z(a,function(d,e,f){var g;r(e)&&"fulfilled"===(g=e.inspect()).state?a[f]=g.value:(++b,p(e,function(d){a[f]=d,0===--b&&c.resolve(a)},c.reject,function(a){c.notify({index:f,value:a})}))},void 0),0===b&&c.resolve(a),c.promise})}function M(a){return p(a,function(a){return a=_(a,k),p(L(_(a,function(a){return p(a,V,V)})),function(){return a})})}function N(a){return k(a).allSettled()}function O(a,b){return k(a).then(void 0,void 0,b)}function P(a,b){return k(a).nodeify(b)}var Q=!1;try{throw new Error}catch(R){Q=!!R.stack}var S,T,U=i(),V=function(){},W=function(){function a(){for(;b.next;){b=b.next;var c=b.task;b.task=void 0;var e=b.domain;e&&(b.domain=void 0,e.enter());try{c()}catch(g){if(f)throw e&&e.exit(),setTimeout(a,0),e&&e.enter(),g;setTimeout(function(){throw g},0)}e&&e.exit()}d=!1}var b={task:void 0,next:null},c=b,d=!1,e=void 0,f=!1;if(W=function(a){c=c.next={task:a,domain:f&&process.domain,next:null},d||(d=!0,e())},"undefined"!=typeof process&&process.nextTick)f=!0,e=function(){process.nextTick(a)};else if("function"==typeof setImmediate)e="undefined"!=typeof window?setImmediate.bind(window,a):function(){setImmediate(a)};else if("undefined"!=typeof MessageChannel){var g=new MessageChannel;g.port1.onmessage=function(){e=h,g.port1.onmessage=a,a()};var h=function(){g.port2.postMessage(0)};e=function(){setTimeout(a,0),h()}}else e=function(){setTimeout(a,0)};return W}(),X=Function.call,Y=a(Array.prototype.slice),Z=a(Array.prototype.reduce||function(a,b){var c=0,d=this.length;if(1===arguments.length)for(;;){if(c in this){b=this[c++];break}if(++c>=d)throw new TypeError}for(;d>c;c++)c in this&&(b=a(b,this[c],c));return b}),$=a(Array.prototype.indexOf||function(a){for(var b=0;b<this.length;b++)if(this[b]===a)return b;return-1}),_=a(Array.prototype.map||function(a,b){var c=this,d=[];return Z(c,function(e,f,g){d.push(a.call(b,f,g,c))},void 0),d}),ab=Object.create||function(a){function b(){}return b.prototype=a,new b},bb=a(Object.prototype.hasOwnProperty),cb=Object.keys||function(a){var b=[];for(var c in a)bb(a,c)&&b.push(c);return b},db=a(Object.prototype.toString);T="undefined"!=typeof ReturnValue?ReturnValue:function(a){this.value=a};var eb;try{new Function("(function* (){ yield 1; })"),eb=!0}catch(R){eb=!1}var fb="From previous event:";k.resolve=k,k.nextTick=W,k.longStackSupport=!1,k.defer=l,l.prototype.makeNodeResolver=function(){var a=this;return function(b,c){b?a.reject(b):arguments.length>2?a.resolve(Y(arguments,1)):a.resolve(c)}},k.promise=m,k.passByCopy=function(a){return a},o.prototype.passByCopy=function(){return this},k.join=function(a,b){return k(a).join(b)},o.prototype.join=function(a){return k([this,a]).spread(function(a,b){if(a===b)return a;throw new Error("Can't join: not the same: "+a+" "+b)})},k.race=n,o.prototype.race=function(){return this.then(k.race)},k.makePromise=o,o.prototype.toString=function(){return"[object Promise]"},o.prototype.then=function(a,b,c){function e(b){try{return"function"==typeof a?a(b):b}catch(c){return B(c)}}function f(a){if("function"==typeof b){d(a,h);try{return b(a)}catch(c){return B(c)}}return B(a)}function g(a){return"function"==typeof c?c(a):a}var h=this,i=l(),j=!1;return W(function(){h.promiseDispatch(function(a){j||(j=!0,i.resolve(e(a)))},"when",[function(a){j||(j=!0,i.resolve(f(a)))}])}),h.promiseDispatch(void 0,"when",[void 0,function(a){var b,c=!1;try{b=g(a)}catch(d){if(c=!0,!k.onerror)throw d;k.onerror(d)}c||i.notify(b)}]),i.promise},k.when=p,o.prototype.thenResolve=function(a){return this.then(function(){return a})},k.thenResolve=function(a,b){return k(a).thenResolve(b)},o.prototype.thenReject=function(a){return this.then(function(){throw a})},k.thenReject=function(a,b){return k(a).thenReject(b)},k.nearer=q,k.isPromise=r,k.isPromiseAlike=s,k.isPending=t,o.prototype.isPending=function(){return"pending"===this.inspect().state},k.isFulfilled=u,o.prototype.isFulfilled=function(){return"fulfilled"===this.inspect().state},k.isRejected=v,o.prototype.isRejected=function(){return"rejected"===this.inspect().state};var gb=[],hb=[],ib=!1,jb=!0;k.resetUnhandledRejections=y,k.getUnhandledReasons=function(){return gb.slice()},k.stopUnhandledRejectionTracking=function(){y(),"undefined"!=typeof process&&process.on&&process.removeListener("exit",x),jb=!1},y(),k.reject=B,k.fulfill=C,k.master=E,k.spread=F,o.prototype.spread=function(a,b){return this.all().then(function(b){return a.apply(void 0,b)},b)},k.async=G,k.spawn=H,k["return"]=I,k.promised=J,k.dispatch=K,o.prototype.dispatch=function(a,b){var c=this,d=l();return W(function(){c.promiseDispatch(d.resolve,a,b)}),d.promise},k.get=function(a,b){return k(a).dispatch("get",[b])},o.prototype.get=function(a){return this.dispatch("get",[a])},k.set=function(a,b,c){return k(a).dispatch("set",[b,c])},o.prototype.set=function(a,b){return this.dispatch("set",[a,b])},k.del=k["delete"]=function(a,b){return k(a).dispatch("delete",[b])},o.prototype.del=o.prototype["delete"]=function(a){return this.dispatch("delete",[a])},k.mapply=k.post=function(a,b,c){return k(a).dispatch("post",[b,c])},o.prototype.mapply=o.prototype.post=function(a,b){return this.dispatch("post",[a,b])},k.send=k.mcall=k.invoke=function(a,b){return k(a).dispatch("post",[b,Y(arguments,2)])},o.prototype.send=o.prototype.mcall=o.prototype.invoke=function(a){return this.dispatch("post",[a,Y(arguments,1)])},k.fapply=function(a,b){return k(a).dispatch("apply",[void 0,b])},o.prototype.fapply=function(a){return this.dispatch("apply",[void 0,a])},k["try"]=k.fcall=function(a){return k(a).dispatch("apply",[void 0,Y(arguments,1)])},o.prototype.fcall=function(){return this.dispatch("apply",[void 0,Y(arguments)])},k.fbind=function(a){var b=k(a),c=Y(arguments,1);return function(){return b.dispatch("apply",[this,c.concat(Y(arguments))])}},o.prototype.fbind=function(){var a=this,b=Y(arguments);return function(){return a.dispatch("apply",[this,b.concat(Y(arguments))])}},k.keys=function(a){return k(a).dispatch("keys",[])},o.prototype.keys=function(){return this.dispatch("keys",[])},k.all=L,o.prototype.all=function(){return L(this)},k.allResolved=j(M,"allResolved","allSettled"),o.prototype.allResolved=function(){return M(this)},k.allSettled=N,o.prototype.allSettled=function(){return this.then(function(a){return L(_(a,function(a){function b(){return a.inspect()}return a=k(a),a.then(b,b)}))})},k.fail=k["catch"]=function(a,b){return k(a).then(void 0,b)},o.prototype.fail=o.prototype["catch"]=function(a){return this.then(void 0,a)},k.progress=O,o.prototype.progress=function(a){return this.then(void 0,void 0,a)},k.fin=k["finally"]=function(a,b){return k(a)["finally"](b)},o.prototype.fin=o.prototype["finally"]=function(a){return a=k(a),this.then(function(b){return a.fcall().then(function(){return b})},function(b){return a.fcall().then(function(){throw b})})},k.done=function(a,b,c,d){return k(a).done(b,c,d)},o.prototype.done=function(a,b,c){var e=function(a){W(function(){if(d(a,f),!k.onerror)throw a;k.onerror(a)})},f=a||b||c?this.then(a,b,c):this;"object"==typeof process&&process&&process.domain&&(e=process.domain.bind(e)),f.then(void 0,e)},k.timeout=function(a,b,c){return k(a).timeout(b,c)},o.prototype.timeout=function(a,b){var c=l(),d=setTimeout(function(){c.reject(new Error(b||"Timed out after "+a+" ms"))},a);return this.then(function(a){clearTimeout(d),c.resolve(a)},function(a){clearTimeout(d),c.reject(a)},c.notify),c.promise},k.delay=function(a,b){return void 0===b&&(b=a,a=void 0),k(a).delay(b)},o.prototype.delay=function(a){return this.then(function(b){var c=l();return setTimeout(function(){c.resolve(b)},a),c.promise})},k.nfapply=function(a,b){return k(a).nfapply(b)},o.prototype.nfapply=function(a){var b=l(),c=Y(a);return c.push(b.makeNodeResolver()),this.fapply(c).fail(b.reject),b.promise},k.nfcall=function(a){var b=Y(arguments,1);return k(a).nfapply(b)},o.prototype.nfcall=function(){var a=Y(arguments),b=l();return a.push(b.makeNodeResolver()),this.fapply(a).fail(b.reject),b.promise},k.nfbind=k.denodeify=function(a){var b=Y(arguments,1);return function(){var c=b.concat(Y(arguments)),d=l();return c.push(d.makeNodeResolver()),k(a).fapply(c).fail(d.reject),d.promise}},o.prototype.nfbind=o.prototype.denodeify=function(){var a=Y(arguments);return a.unshift(this),k.denodeify.apply(void 0,a)},k.nbind=function(a,b){var c=Y(arguments,2);return function(){function d(){return a.apply(b,arguments)}var e=c.concat(Y(arguments)),f=l();return e.push(f.makeNodeResolver()),k(d).fapply(e).fail(f.reject),f.promise}},o.prototype.nbind=function(){var a=Y(arguments,0);return a.unshift(this),k.nbind.apply(void 0,a)},k.nmapply=k.npost=function(a,b,c){return k(a).npost(b,c)},o.prototype.nmapply=o.prototype.npost=function(a,b){var c=Y(b||[]),d=l();return c.push(d.makeNodeResolver()),this.dispatch("post",[a,c]).fail(d.reject),d.promise},k.nsend=k.nmcall=k.ninvoke=function(a,b){var c=Y(arguments,2),d=l();return c.push(d.makeNodeResolver()),k(a).dispatch("post",[b,c]).fail(d.reject),d.promise},o.prototype.nsend=o.prototype.nmcall=o.prototype.ninvoke=function(a){var b=Y(arguments,1),c=l();return b.push(c.makeNodeResolver()),this.dispatch("post",[a,b]).fail(c.reject),c.promise},k.nodeify=P,o.prototype.nodeify=function(a){return a?(this.then(function(b){W(function(){a(null,b)})},function(b){W(function(){a(b)})}),void 0):this};var kb=i();return k}),function(a,b){"use strict";function c(){}function d(a,b){if(a){"object"==typeof a&&(a=[].slice.call(a));for(var c=0,d=a.length;d>c;c++)b.call(a,a[c],c)}}function e(a,c){var d=Object.prototype.toString.call(c).slice(8,-1);return c!==b&&null!==c&&d===a}function f(a){return e("Function",a)}function g(a){return e("Array",a)}function h(a){var b=a.split("/"),c=b[b.length-1],d=c.indexOf("?");return-1!==d?c.substring(0,d):c}function i(a){a=a||c,a._done||(a(),a._done=1)}function j(a){var b={};if("object"==typeof a)for(var c in a)a[c]&&(b={name:c,url:a[c],charset:a[c].split("#")[1]||"utf-8"});else b={name:h(a),url:a,charset:a.split("#")[1]||"utf-8"};var d=x[b.name];return d&&d.url===b.url?d:(x[b.name]=b,b)}function k(a){a=a||x;for(var b in a)if(a.hasOwnProperty(b)&&a[b].state!==E)return!1;return!0}function l(a){a.state=C,d(a.onpreload,function(a){a.call()})}function m(a){a.state===b&&(a.state=B,a.onpreload=[],o({url:a.url,type:"cache",charset:a.charset},function(){l(a)}))}function n(a,b){return b=b||c,a.state===E?(b(),void 0):a.state===D?(A.ready(a.name,b),void 0):a.state===B?(a.onpreload.push(function(){n(a,b)}),void 0):(a.state=D,o(a,function(){a.state=E,b(),d(w[a.name],function(a){i(a)}),s&&k()&&d(w.ALL,function(a){i(a)})}),void 0)}function o(b,d){function e(b){b=b||a.event,g.onload=g.onreadystatechange=g.onerror=null,d()}function f(b){b=b||a.event,("load"===b.type||/loaded|complete/.test(g.readyState)&&(!t.documentMode||t.documentMode<9))&&(g.onload=g.onreadystatechange=g.onerror=null,d())}d=d||c;var g;/\.css[^\.]*$/.test(b.url)?(g=t.createElement("link"),g.type="text/"+(b.type||"css"),g.rel="stylesheet",g.href=b.url):(g=t.createElement("script"),g.charset=b.charset,g.type="text/"+(b.type||"javascript"),g.src=b.url),g.onload=g.onreadystatechange=f,g.onerror=e,g.async=!1,g.defer=!1;var h=t.head||t.getElementsByTagName("head")[0];h.insertBefore(g,h.lastChild)}function p(){return t.body?(s||(s=!0,d(u,function(a){i(a)})),void 0):(a.clearTimeout(A.readyTimeout),A.readyTimeout=a.setTimeout(p,50),void 0)}function q(){t.addEventListener?(t.removeEventListener("DOMContentLoaded",q,!1),p()):"complete"===t.readyState&&(t.detachEvent("onreadystatechange",q),p())}var r,s,t=a.document,u=[],v=[],w={},x={},y="async"in t.createElement("script")||"MozAppearance"in t.documentElement.style||a.opera,z=a.head_conf&&a.head_conf.head||"head",A=a[z]=a[z]||function(){A.ready.apply(null,arguments)},B=1,C=2,D=3,E=4;if(A.load=y?function(){var a=arguments,b=a[a.length-1],c={};return f(b)||(b=null),d(a,function(d,e){d!==b&&(d=j(d),c[d.name]=d,n(d,b&&e===a.length-2?function(){k(c)&&i(b)}:null))}),A}:function(){var a=arguments,b=[].slice.call(a,1),c=b[0];return r?(c?(d(b,function(a){f(a)||m(j(a))}),n(j(a[0]),f(c)?c:function(){A.load.apply(null,b)})):n(j(a[0])),A):(v.push(function(){A.load.apply(null,a)}),A)},A.js=A.load,A.test=function(a,b,d,e){var f="object"==typeof a?a:{test:a,success:b?g(b)?b:[b]:!1,failure:d?g(d)?d:[d]:!1,callback:e||c},h=!!f.test;return h&&f.success?(f.success.push(f.callback),A.load.apply(null,f.success)):!h&&f.failure?(f.failure.push(f.callback),A.load.apply(null,f.failure)):e(),A},A.ready=function(a,b){if(a===t)return s?i(b):u.push(b),A;if(f(a)&&(b=a,a="ALL"),"string"!=typeof a||!f(b))return A;var c=x[a];if(c&&c.state===E||"ALL"===a&&k()&&s)return i(b),A;var d=w[a];return d?d.push(b):d=w[a]=[b],A},A.ready(t,function(){k()&&d(w.ALL,function(a){i(a)}),A.feature&&A.feature("domloaded",!0)}),"complete"===t.readyState)p();else if(t.addEventListener)t.addEventListener("DOMContentLoaded",q,!1),a.addEventListener("load",p,!1);else{t.attachEvent("onreadystatechange",q),a.attachEvent("onload",p);var F=!1;try{F=null==a.frameElement&&t.documentElement}catch(G){}F&&F.doScroll&&!function H(){if(!s){try{F.doScroll("left")}catch(b){return a.clearTimeout(A.readyTimeout),A.readyTimeout=a.setTimeout(H,50),void 0}p()}}()}setTimeout(function(){r=!0,d(v,function(a){a()})},300)}(window),recipe=function(a,b,c){"use strict";var d="",e="",f=function(a,b){var c,d;for(c=0,d=b.length;d>c;c++)if(a===b[c])return!0;return!1},g={version:c.defer(),dependencies:c.defer()},h=function(a){var b,c,d=[];for(b=0,c=a.length;c>b;b++)f(a[b],d)||d.push(a[b]);return d},i=function(b,c){var d,e,f=(j.exports,[]),g=b.length;for(e=0;g>e;e++)"exports"===b[e]?f.push(j.exports):(d=j.exports[b[e]],f.push(d));c.apply(a,f)},j=function(d){var e,f,g,k,l,m=(d||{}).exports||{},n=(d||{}).libraries||[],o=(d||{}).scripts||[],p=(d||{}).amd||!1,q=[],r=[],s=c.defer();if(p){a.define=i;for(e in m)j.exports[e]=m[e]}return j.get.version().promise.then(function(a){j.get.dependencies(p).promise.then(function(c){for(l=0,f=n.length;f>l;l++){if(e=n[l],g=c[e],!g&&!j.exports[e])return s.reject("Ingredients not found. namespace["+n[l]+"]"),s;g&&(q=q.concat(g))}for(q=h(q.concat(o)),l=0,f=q.length;f>l;l++){if(k=q[l].split("#"),!k[0])return s.reject('Illegal URL were exists. ["'+q.join('", "')+'"]'),s;r.push(k[0]+"?_="+a+(k[1]?"#"+k[1]:""))}r.length?(r.push(function(){s.resolve(j.get.variables(n,p))}),b.js.apply(b,r)):s.resolve(j.get.variables(n,p))})}),s.promise},k={init:function(){var a=j.get.menu();if(d=a.replace(/\/[^\/]+$/,""),!a)throw"You might forget to order because of menu was not founded.";j.get.version().promise.then(function(b){j.resolve(a,b)})},resolve:function(a,c){var d=a.split("#");b.js(d[0]+"?_="+c+(d[1]?"#"+d[1]:""))},get:{recipeTag:function(){var a,b,c,d,e=document.getElementsByTagName("script");if(e)for(a=0,b=e.length;b>a;a++)if(c=e[a],d=c.src||"",/\/recipe\.js(\?.*)?$/.test(d)&&c.getAttribute("data-menu"))return c},menu:function(){var a=j.get.recipeTag()||{getAttribute:function(){}},b=a.getAttribute("data-menu"),c=(a.getAttribute("src")||"").replace(/[^\/]+$/,"")+b+".js";return b?c:""},version:function(){return j.version?g.version.resolve(j.version):b.js(d+"/recipe.version.js?_="+(new Date).getTime(),function(){g.version.resolve(j.version)}),g.version},dependencies:function(a){return j.dependencies?g.dependencies.resolve(j.dependencies):b.js(d+"/recipe."+(a?"amd.":"")+"dependencies.js?_="+j.version,function(){g.dependencies.resolve(j.dependencies)}),g.dependencies},variables:function(a,b){var c,d,e,f={},g=j.exports;if(b){for(d=0,e=a.length;e>d;d++)c=a[d],f[c]=g[c];return f}}}};for(e in k)j[e]=k[e];return j.exports=j.exports||{Q:c},j.init(),j}(this,head,a)}();