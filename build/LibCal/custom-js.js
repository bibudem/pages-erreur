!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};
/*!
 * visuel-bib v1.2.1
 */jQuery((function(e){"use strict";var n,t,r,o=e("#udem-primary-nav"),i=o.find("> .container > ul").first(),a=e("#udem-phone-menu");function u(){return a.is(":visible")}function c(e){var n=e.find(".udem-mega-menu-item").first();return 0===n.length&&(n=null),n}function s(e){var n;return e.length>0&&"function"==typeof(n=e.get(0)).getBoundingClientRect?n.getBoundingClientRect().width:e.width()}function f(e,n){if(u())n.css({top:-(e.offset().top-i.offset().top)+"px",left:"auto",width:"100%"}),n.children(".udem-mega-menu-inner").css({height:o.height()-20-n.children(".udem-mega-menu-header").height()+"px"});else{var t,r,a,c,f,l,d,h,v,p,m,g,y,b,_,w=n.children(".udem-mega-menu-gapfiller"),I=e.children("a").first(),S=0;t=parseFloat(n.css("margin-top"))||0,r=parseFloat(n.css("border-top-width"))||0,a=i.offset().left,c=s(i),f=e.offset().left,l=s(e),d=e.height(),h=(parseFloat(I.css("border-left-width"))||0)+(parseFloat(I.css("border-right-width"))||0),b=(y=a-f)+c-(g=e.hasClass("udem_bootstrap_mega-menu-75")?.75*c:c),S=((v=l+h)+(m=(p=parseFloat(w.css("border-left-width"))||0)+(parseFloat(w.css("border-right-width"))||0))-g)/2,_=-(S=Math.max(Math.min(S,b),y))+p,w.css({top:-t-r+"px",left:_-m-h+"px",width:v+"px"}),n.css({top:d+"px",left:S+"px",width:g})}}function l(){var n,t,r=e(this);r.hasClass("open")||(r.addClass("open"),(t=c(r))&&(i.addClass("udem-mega-menu-open"),f(r,t)),u()||(n=function(e){var n=e.find(".sub-menu").first();return 0===n.length&&(n=null),n}(r),n&&(n.removeClass("sub-menu-right"),n.toggleClass("sub-menu-right",i.offset().left+i.width()<n.offset().left+n.width()))))}function d(){var n=e(this),t=c(n);n.removeClass("open"),t&&i.removeClass("udem-mega-menu-open")}function h(n,t){var r,o,i=e(t);if(!i.is(":visible"))return!1;if(function(e,n){return e.x>=n.left&&e.x<=n.left+n.width&&e.y>=n.top&&e.y<=n.top+n.height}(n,function(e){var n=e.offset();return n.width=e.innerWidth(),n.height=e.innerHeight(),n}(i)))return!0;for(r=i.children(),o=0;o<r.length;o++)if(h(n,r[o]))return!0;return!1}a.find(".udem-phone-menu-primary").on("click",(function(){i.children().each(d)})),i.children("li[data-udem-mega-menu-href]").each((function(n,t){var r=e(t);r.find(".udem-mega-menu-header").text(r.children("a").text()).on("click",(function(){r.each(d)})),r.addClass("has-sub").children(".sub-menu").remove(),r.find('.udem-mega-menu-inner  div.row > div[class*="col-"]').each((function(n){e(this).find("div.CType-menu").has("ul").find("li:last-child a").each((function(n){e(this).addClass("last-sub-item")}))})),e(document.body).trigger("udem.addsectionclasses",[r]),r.trigger("udemMegaMenuItemLoaded")})),i.on("click","> .has-sub > a",(function(n){var t=e(this).parent(),r=c(t);(t.children(".udem-mega-menu-loaded, .sub-menu").first().length>0||r)&&(n.preventDefault(),t.hasClass("open")?i.children(".has-sub.open").each(d):(i.children(".has-sub.open").not(t).each(d),t.each(l)))})),i.on("mouseenter","> .has-sub",(function(o){if(!u()){var a=e(this),c=parseInt(a.data("udem-mega-menu-show-delay")),s=parseInt(a.data("udem-mega-menu-hide-delay"));clearTimeout(n),clearTimeout(t),a.hasClass("hover")||(a.addClass("hover"),r=setTimeout((function(){a.each(l)}),c),t=setTimeout((function(){i.children(".has-sub.open").not(a).each(d)}),s))}})),i.on("mouseleave","> .has-sub",(function(t){var o=e(this),i=parseInt(o.data("udem-mega-menu-hide-delay"));u()||h({x:t.clientX,y:t.clientY},this)||(clearTimeout(r),o.hasClass("hover")&&(o.removeClass("hover"),n=setTimeout((function(){o.each(d)}),i)))})),e(window).on("resize",(function(){i.children(".open").each((function(){var n=e(this),t=c(n);t&&f(n,t)}))}))})),jQuery((function(e){"use strict";function n(n){var t="";return n.length&&(t=e.grep((n.attr("class")||"").split(" "),(function(e,n){return 0===e.indexOf("section_frame-")})).join()),t}function t(e,n){var t=e.get(0).getBoundingClientRect(),i=n.get(0).getBoundingClientRect(),a=Math.round(100*(i.top-(t.top+t.height)))/100;0!==a&&(r(e,t.bottom),i=n.get(0).getBoundingClientRect(),o(n,i.top),e.css("paddingBottom",parseFloat(e.css("paddingBottom"))+a))}function r(e,n){var t=e.get(0).getBoundingClientRect(),o=parseFloat(e.css("marginBottom")),i=e.children().filter(":visible");o&&t.bottom+o>n&&e.css("marginBottom",0),i.length&&r(i.last(),n)}function o(e,n){var t=e.get(0).getBoundingClientRect(),r=parseFloat(e.css("marginTop")),i=e.children().filter(":visible");r&&t.top-r<n&&e.css("marginTop",0),i.length&&o(i.first(),n)}e(document.body).on("udem.addsectionclasses",(function(r,o){var i,a,u,c="first-of-section",s="last-of-section",f="udem-page-title",l="udem-js-initialized",d="section_frame-101",h=".csc-frame-default";(o=o instanceof jQuery?o:e(document.body)).find(h).addClass(l).each((function(){var t=e(this),r=t.prev(),o=t.next(),i=n(t),a=n(r),u=n(o);0!==r.length&&i===a&&r.is(h)||t.addClass(c),0!==o.length&&i===u&&o.is(h)||t.addClass(s)})),a=(i=o.find('div[class^="'+f+'"]')).next(),i.addClass(l),i.addClass(c),i.addClass(s),i.hasClass(f)&&(i.addClass(d),a.hasClass(d)?(i.removeClass(s),a.removeClass(c)):a.addClass(c)),(u=o.find("."+d+'[class*="udemportraits-mode-Portrait-annonce"]:not(.'+c+")")).prev().addClass(s),u.addClass(c),o.find("."+d+":not(."+s+"):visible").each((function(){var n=e(this);n.next().length>0&&t(n,n.next())}))})),e(document.body).trigger("udem.addsectionclasses")})),jQuery((function(e){"use strict";var n=e("#udem-phone-menu"),t=e("#udem-breadcrumb"),r=e("#udem-secondary-nav"),o=e([]);function i(){if(!n.length)return 0;var t=n.position().top,r=n.height(),o=e(document).scrollTop();return o<t?t+r-o:t+r}function a(){var n=t.position().top,r=t.height(),o=e(document).scrollTop();return o<n?n+r-o:n+r}n.length&&n.affix({offset:{top:function(){return this.top=n.position().top}}}),e('#udem-phone-menu a[href^="#"]').each((function(n,t){var r=e(t),i=e(r.attr("href"));i.length<1||(o.push(i.get(0)),r.attr("data-toggle","collapse").addClass("collapsed"),i.addClass("collapse").collapse({toggle:!1}),i.on("show.bs.collapse",(function(){e('#udem-phone-menu a[href^="#"]').each((function(n,r){r!==t&&e(r.getAttribute("href")).collapse("hide")}))})))})),o.on("show.bs.collapse",(function(n){e(this).css({top:i()+"px"}),r.removeClass("in")})),n.on("affixed.bs.affix affixed-top.bs.affix",(function(e){o.css({top:i()+"px"})})),e(document).on("scroll",(function(e){o.hasClass("collapse")&&o.hasClass("in")&&o.css({top:i()+"px"})})),e(window).on("resize",(function(){"none"===n.css("display")?o.attr("style",(function(e,n){if(n&&"function"==typeof n.replace)return n.replace(/(^|\s+|;)top\s*:[^;]+(;|$)/,"")})):o.css({top:i()+"px"})})),n.length&&t.on("affix.bs.affix",(function(t){e(this).css({top:n.height()})})).affix({offset:{top:function(){return this.top=n.position().top+n.height()}}}),r.length>0&&(r.on("show.bs.collapse",(function(n){e(this).css({top:a()+"px"})})),t.on("affixed.bs.affix affixed-top.bs.affix",(function(e){r.css({top:a()+"px"})})),e(document).on("scroll",(function(e){r.hasClass("collapse")&&r.hasClass("in")&&r.css({top:a()+"px"})})),e(window).on("resize",(function(){"none"===n.css("display")&&(r.attr("style",(function(e,n){if(n&&"function"==typeof n.replace)return n.replace(/(^|\s+|;)top\s*:[^;]+(;|$)/,"")})),r.removeClass("in").removeClass("collapse"),r.attr("aria-expanded",null))})))}));(function e(n,t,r){function o(a,u){if(!t[a]){if(!n[a]){var c=void 0;if(!u&&c)return c(a,!0);if(i)return i(a,!0);var s=new Error("Cannot find module '"+a+"'");throw s.code="MODULE_NOT_FOUND",s}var f=t[a]={exports:{}};n[a][0].call(f.exports,(function(e){return o(n[a][1][e]||e)}),f,f.exports,e,n,t,r)}return t[a].exports}for(var i=void 0,a=0;a<r.length;a++)o(r[a]);return o})({1:[function(n,t,r){(function(e){"use strict";function n(){f=!0;for(var e,n,t=l.length;t;){for(n=l,l=[],e=-1;++e<t;)n[e]();t=l.length}f=!1}function r(e){1!==l.push(e)||f||o()}var o,i=e.MutationObserver||e.WebKitMutationObserver;if(i){var a=0,u=new i(n),c=e.document.createTextNode("");u.observe(c,{characterData:!0}),o=function(){c.data=a=++a%2}}else if(e.setImmediate||void 0===e.MessageChannel)o="document"in e&&"onreadystatechange"in e.document.createElement("script")?function(){var t=e.document.createElement("script");t.onreadystatechange=function(){n(),t.onreadystatechange=null,t.parentNode.removeChild(t),t=null},e.document.documentElement.appendChild(t)}:function(){setTimeout(n,0)};else{var s=new e.MessageChannel;s.port1.onmessage=n,o=function(){s.port2.postMessage(0)}}var f,l=[];t.exports=r}).call(this,void 0!==e?e:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{}],2:[function(e,n,t){"use strict";function r(){}function o(e){if("function"!=typeof e)throw new TypeError("resolver must be a function");this.state=y,this.queue=[],this.outcome=void 0,e!==r&&c(this,e)}function i(e,n,t){this.promise=e,"function"==typeof n&&(this.onFulfilled=n,this.callFulfilled=this.otherCallFulfilled),"function"==typeof t&&(this.onRejected=t,this.callRejected=this.otherCallRejected)}function a(e,n,t){v((function(){var r;try{r=n(t)}catch(n){return p.reject(e,n)}r===e?p.reject(e,new TypeError("Cannot resolve promise with itself")):p.resolve(e,r)}))}function u(e){var n=e&&e.then;if(e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof n)return function(){n.apply(e,arguments)}}function c(e,n){function t(n){i||(i=!0,p.reject(e,n))}function r(n){i||(i=!0,p.resolve(e,n))}function o(){n(r,t)}var i=!1,a=s(o);"error"===a.status&&t(a.value)}function s(e,n){var t={};try{t.value=e(n),t.status="success"}catch(e){t.status="error",t.value=e}return t}function f(e){return e instanceof this?e:p.resolve(new this(r),e)}function l(e){var n=new this(r);return p.reject(n,e)}function d(e){function n(e,n){function r(e){a[n]=e,++u!==o||i||(i=!0,p.resolve(s,a))}t.resolve(e).then(r,(function(e){i||(i=!0,p.reject(s,e))}))}var t=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var o=e.length,i=!1;if(!o)return this.resolve([]);for(var a=new Array(o),u=0,c=-1,s=new this(r);++c<o;)n(e[c],c);return s}function h(e){function n(e){t.resolve(e).then((function(e){i||(i=!0,p.resolve(u,e))}),(function(e){i||(i=!0,p.reject(u,e))}))}var t=this;if("[object Array]"!==Object.prototype.toString.call(e))return this.reject(new TypeError("must be an array"));var o=e.length,i=!1;if(!o)return this.resolve([]);for(var a=-1,u=new this(r);++a<o;)n(e[a]);return u}var v=e(1),p={},m=["REJECTED"],g=["FULFILLED"],y=["PENDING"];n.exports=o,o.prototype.catch=function(e){return this.then(null,e)},o.prototype.then=function(e,n){if("function"!=typeof e&&this.state===g||"function"!=typeof n&&this.state===m)return this;var t=new this.constructor(r);return this.state!==y?a(t,this.state===g?e:n,this.outcome):this.queue.push(new i(t,e,n)),t},i.prototype.callFulfilled=function(e){p.resolve(this.promise,e)},i.prototype.otherCallFulfilled=function(e){a(this.promise,this.onFulfilled,e)},i.prototype.callRejected=function(e){p.reject(this.promise,e)},i.prototype.otherCallRejected=function(e){a(this.promise,this.onRejected,e)},p.resolve=function(e,n){var t=s(u,n);if("error"===t.status)return p.reject(e,t.value);var r=t.value;if(r)c(e,r);else{e.state=g,e.outcome=n;for(var o=-1,i=e.queue.length;++o<i;)e.queue[o].callFulfilled(n)}return e},p.reject=function(e,n){e.state=m,e.outcome=n;for(var t=-1,r=e.queue.length;++t<r;)e.queue[t].callRejected(n);return e},o.resolve=f,o.reject=l,o.all=d,o.race=h},{1:1}],3:[function(n,t,r){(function(e){"use strict";"function"!=typeof e.Promise&&(e.Promise=n(2))}).call(this,void 0!==e?e:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})},{2:2}],4:[function(e,n,t){"use strict";function r(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function o(){try{if("undefined"!=typeof indexedDB)return indexedDB;if("undefined"!=typeof webkitIndexedDB)return webkitIndexedDB;if("undefined"!=typeof mozIndexedDB)return mozIndexedDB;if("undefined"!=typeof OIndexedDB)return OIndexedDB;if("undefined"!=typeof msIndexedDB)return msIndexedDB}catch(e){return}}function i(){try{if(!_e)return!1;var e="undefined"!=typeof openDatabase&&/(Safari|iPhone|iPad|iPod)/.test(navigator.userAgent)&&!/Chrome/.test(navigator.userAgent)&&!/BlackBerry/.test(navigator.platform),n="function"==typeof fetch&&-1!==fetch.toString().indexOf("[native code");return(!e||n)&&"undefined"!=typeof indexedDB&&"undefined"!=typeof IDBKeyRange}catch(e){return!1}}function a(e,n){e=e||[],n=n||{};try{return new Blob(e,n)}catch(o){if("TypeError"!==o.name)throw o;for(var t=new("undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof MSBlobBuilder?MSBlobBuilder:"undefined"!=typeof MozBlobBuilder?MozBlobBuilder:WebKitBlobBuilder),r=0;r<e.length;r+=1)t.append(e[r]);return t.getBlob(n.type)}}function u(e,n){n&&e.then((function(e){n(null,e)}),(function(e){n(e)}))}function c(e,n,t){"function"==typeof n&&e.then(n),"function"==typeof t&&e.catch(t)}function s(e){return"string"!=typeof e&&(console.warn(e+" used as a key, but it is not a string."),e=String(e)),e}function f(){if(arguments.length&&"function"==typeof arguments[arguments.length-1])return arguments[arguments.length-1]}function l(e){for(var n=e.length,t=new ArrayBuffer(n),r=new Uint8Array(t),o=0;o<n;o++)r[o]=e.charCodeAt(o);return t}function d(e){return new we((function(n){var t=e.transaction(Ie,Ne),r=a([""]);t.objectStore(Ie).put(r,"key"),t.onabort=function(e){e.preventDefault(),e.stopPropagation(),n(!1)},t.oncomplete=function(){var e=navigator.userAgent.match(/Chrome\/(\d+)/),t=navigator.userAgent.match(/Edge\//);n(t||!e||parseInt(e[1],10)>=43)}})).catch((function(){return!1}))}function h(e){return"boolean"==typeof Se?we.resolve(Se):d(e).then((function(e){return Se=e}))}function v(e){var n=Ee[e.name],t={};t.promise=new we((function(e,n){t.resolve=e,t.reject=n})),n.deferredOperations.push(t),n.dbReady?n.dbReady=n.dbReady.then((function(){return t.promise})):n.dbReady=t.promise}function p(e){var n=Ee[e.name].deferredOperations.pop();if(n)return n.resolve(),n.promise}function m(e,n){var t=Ee[e.name].deferredOperations.pop();if(t)return t.reject(n),t.promise}function g(e,n){return new we((function(t,r){if(Ee[e.name]=Ee[e.name]||N(),e.db){if(!n)return t(e.db);v(e),e.db.close()}var o=[e.name];n&&o.push(e.version);var i=_e.open.apply(_e,o);n&&(i.onupgradeneeded=function(n){var t=i.result;try{t.createObjectStore(e.storeName),n.oldVersion<=1&&t.createObjectStore(Ie)}catch(t){if("ConstraintError"!==t.name)throw t;console.warn('The database "'+e.name+'" has been upgraded from version '+n.oldVersion+" to version "+n.newVersion+', but the storage "'+e.storeName+'" already exists.')}}),i.onerror=function(e){e.preventDefault(),r(i.error)},i.onsuccess=function(){t(i.result),p(e)}}))}function y(e){return g(e,!1)}function b(e){return g(e,!0)}function _(e,n){if(!e.db)return!0;var t=!e.db.objectStoreNames.contains(e.storeName),r=e.version<e.db.version,o=e.version>e.db.version;if(r&&(e.version!==n&&console.warn('The database "'+e.name+"\" can't be downgraded from version "+e.db.version+" to version "+e.version+"."),e.version=e.db.version),o||t){if(t){var i=e.db.version+1;i>e.version&&(e.version=i)}return!0}return!1}function w(e){return new we((function(n,t){var r=new FileReader;r.onerror=t,r.onloadend=function(t){var r=btoa(t.target.result||"");n({__local_forage_encoded_blob:!0,data:r,type:e.type})},r.readAsBinaryString(e)}))}function I(e){return a([l(atob(e.data))],{type:e.type})}function S(e){return e&&e.__local_forage_encoded_blob}function E(e){var n=this,t=n._initReady().then((function(){var e=Ee[n._dbInfo.name];if(e&&e.dbReady)return e.dbReady}));return c(t,e,e),t}function C(e){v(e);for(var n=Ee[e.name],t=n.forages,r=0;r<t.length;r++){var o=t[r];o._dbInfo.db&&(o._dbInfo.db.close(),o._dbInfo.db=null)}return e.db=null,y(e).then((function(n){return e.db=n,_(e)?b(e):n})).then((function(r){e.db=n.db=r;for(var o=0;o<t.length;o++)t[o]._dbInfo.db=r})).catch((function(n){throw m(e,n),n}))}function x(e,n,t,r){void 0===r&&(r=1);try{var o=e.db.transaction(e.storeName,n);t(null,o)}catch(o){if(r>0&&(!e.db||"InvalidStateError"===o.name||"NotFoundError"===o.name))return we.resolve().then((function(){if(!e.db||"NotFoundError"===o.name&&!e.db.objectStoreNames.contains(e.storeName)&&e.version<=e.db.version)return e.db&&(e.version=e.db.version+1),b(e)})).then((function(){return C(e).then((function(){x(e,n,t,r-1)}))})).catch(t);t(o)}}function N(){return{forages:[],db:null,dbReady:null,deferredOperations:[]}}function R(e){function n(){return we.resolve()}var t=this,r={db:null};if(e)for(var o in e)r[o]=e[o];var i=Ee[r.name];i||(i=N(),Ee[r.name]=i),i.forages.push(t),t._initReady||(t._initReady=t.ready,t.ready=E);for(var a=[],u=0;u<i.forages.length;u++){var c=i.forages[u];c!==t&&a.push(c._initReady().catch(n))}var s=i.forages.slice(0);return we.all(a).then((function(){return r.db=i.db,y(r)})).then((function(e){return r.db=e,_(r,t._defaultConfig.version)?b(r):e})).then((function(e){r.db=i.db=e,t._dbInfo=r;for(var n=0;n<s.length;n++){var o=s[n];o!==t&&(o._dbInfo.db=r.db,o._dbInfo.version=r.version)}}))}function j(e,n){var t=this;e=s(e);var r=new we((function(n,r){t.ready().then((function(){x(t._dbInfo,xe,(function(o,i){if(o)return r(o);try{var a=i.objectStore(t._dbInfo.storeName).get(e);a.onsuccess=function(){var e=a.result;void 0===e&&(e=null),S(e)&&(e=I(e)),n(e)},a.onerror=function(){r(a.error)}}catch(e){r(e)}}))})).catch(r)}));return u(r,n),r}function O(e,n){var t=this,r=new we((function(n,r){t.ready().then((function(){x(t._dbInfo,xe,(function(o,i){if(o)return r(o);try{var a=i.objectStore(t._dbInfo.storeName).openCursor(),u=1;a.onsuccess=function(){var t=a.result;if(t){var r=t.value;S(r)&&(r=I(r));var o=e(r,t.key,u++);void 0!==o?n(o):t.continue()}else n()},a.onerror=function(){r(a.error)}}catch(e){r(e)}}))})).catch(r)}));return u(r,n),r}function A(e,n,t){var r=this;e=s(e);var o=new we((function(t,o){var i;r.ready().then((function(){return i=r._dbInfo,"[object Blob]"===Ce.call(n)?h(i.db).then((function(e){return e?n:w(n)})):n})).then((function(n){x(r._dbInfo,Ne,(function(i,a){if(i)return o(i);try{var u=a.objectStore(r._dbInfo.storeName);null===n&&(n=void 0);var c=u.put(n,e);a.oncomplete=function(){void 0===n&&(n=null),t(n)},a.onabort=a.onerror=function(){var e=c.error?c.error:c.transaction.error;o(e)}}catch(e){o(e)}}))})).catch(o)}));return u(o,t),o}function B(e,n){var t=this;e=s(e);var r=new we((function(n,r){t.ready().then((function(){x(t._dbInfo,Ne,(function(o,i){if(o)return r(o);try{var a=i.objectStore(t._dbInfo.storeName).delete(e);i.oncomplete=function(){n()},i.onerror=function(){r(a.error)},i.onabort=function(){var e=a.error?a.error:a.transaction.error;r(e)}}catch(e){r(e)}}))})).catch(r)}));return u(r,n),r}function D(e){var n=this,t=new we((function(e,t){n.ready().then((function(){x(n._dbInfo,Ne,(function(r,o){if(r)return t(r);try{var i=o.objectStore(n._dbInfo.storeName).clear();o.oncomplete=function(){e()},o.onabort=o.onerror=function(){var e=i.error?i.error:i.transaction.error;t(e)}}catch(e){t(e)}}))})).catch(t)}));return u(t,e),t}function T(e){var n=this,t=new we((function(e,t){n.ready().then((function(){x(n._dbInfo,xe,(function(r,o){if(r)return t(r);try{var i=o.objectStore(n._dbInfo.storeName).count();i.onsuccess=function(){e(i.result)},i.onerror=function(){t(i.error)}}catch(e){t(e)}}))})).catch(t)}));return u(t,e),t}function k(e,n){var t=this,r=new we((function(n,r){e<0?n(null):t.ready().then((function(){x(t._dbInfo,xe,(function(o,i){if(o)return r(o);try{var a=i.objectStore(t._dbInfo.storeName),u=!1,c=a.openCursor();c.onsuccess=function(){var t=c.result;t?0===e||u?n(t.key):(u=!0,t.advance(e)):n(null)},c.onerror=function(){r(c.error)}}catch(e){r(e)}}))})).catch(r)}));return u(r,n),r}function F(e){var n=this,t=new we((function(e,t){n.ready().then((function(){x(n._dbInfo,xe,(function(r,o){if(r)return t(r);try{var i=o.objectStore(n._dbInfo.storeName).openCursor(),a=[];i.onsuccess=function(){var n=i.result;n?(a.push(n.key),n.continue()):e(a)},i.onerror=function(){t(i.error)}}catch(e){t(e)}}))})).catch(t)}));return u(t,e),t}function M(e,n){n=f.apply(this,arguments);var t=this.config();(e="function"!=typeof e&&e||{}).name||(e.name=e.name||t.name,e.storeName=e.storeName||t.storeName);var r,o=this;if(e.name){var i=e.name===t.name&&o._dbInfo.db?we.resolve(o._dbInfo.db):y(e).then((function(n){var t=Ee[e.name],r=t.forages;t.db=n;for(var o=0;o<r.length;o++)r[o]._dbInfo.db=n;return n}));r=e.storeName?i.then((function(n){if(n.objectStoreNames.contains(e.storeName)){var t=n.version+1;v(e);var r=Ee[e.name],o=r.forages;n.close();for(var i=0;i<o.length;i++){var a=o[i];a._dbInfo.db=null,a._dbInfo.version=t}return new we((function(n,r){var o=_e.open(e.name,t);o.onerror=function(e){o.result.close(),r(e)},o.onupgradeneeded=function(){o.result.deleteObjectStore(e.storeName)},o.onsuccess=function(){var e=o.result;e.close(),n(e)}})).then((function(e){r.db=e;for(var n=0;n<o.length;n++){var t=o[n];t._dbInfo.db=e,p(t._dbInfo)}})).catch((function(n){throw(m(e,n)||we.resolve()).catch((function(){})),n}))}})):i.then((function(n){v(e);var t=Ee[e.name],r=t.forages;n.close();for(var o=0;o<r.length;o++)r[o]._dbInfo.db=null;return new we((function(n,t){var r=_e.deleteDatabase(e.name);r.onerror=r.onblocked=function(e){var n=r.result;n&&n.close(),t(e)},r.onsuccess=function(){var e=r.result;e&&e.close(),n(e)}})).then((function(e){t.db=e;for(var n=0;n<r.length;n++)p(r[n]._dbInfo)})).catch((function(n){throw(m(e,n)||we.resolve()).catch((function(){})),n}))}))}else r=we.reject("Invalid arguments");return u(r,n),r}function L(){return"function"==typeof openDatabase}function z(e){var n,t,r,o,i,a=.75*e.length,u=e.length,c=0;"="===e[e.length-1]&&(a--,"="===e[e.length-2]&&a--);var s=new ArrayBuffer(a),f=new Uint8Array(s);for(n=0;n<u;n+=4)t=je.indexOf(e[n]),r=je.indexOf(e[n+1]),o=je.indexOf(e[n+2]),i=je.indexOf(e[n+3]),f[c++]=t<<2|r>>4,f[c++]=(15&r)<<4|o>>2,f[c++]=(3&o)<<6|63&i;return s}function P(e){var n,t=new Uint8Array(e),r="";for(n=0;n<t.length;n+=3)r+=je[t[n]>>2],r+=je[(3&t[n])<<4|t[n+1]>>4],r+=je[(15&t[n+1])<<2|t[n+2]>>6],r+=je[63&t[n+2]];return t.length%3==2?r=r.substring(0,r.length-1)+"=":t.length%3==1&&(r=r.substring(0,r.length-2)+"=="),r}function U(e,n){var t="";if(e&&(t=Xe.call(e)),e&&("[object ArrayBuffer]"===t||e.buffer&&"[object ArrayBuffer]"===Xe.call(e.buffer))){var r,o=Be;e instanceof ArrayBuffer?(r=e,o+=Te):(r=e.buffer,"[object Int8Array]"===t?o+=Fe:"[object Uint8Array]"===t?o+=Me:"[object Uint8ClampedArray]"===t?o+=Le:"[object Int16Array]"===t?o+=ze:"[object Uint16Array]"===t?o+=Ue:"[object Int32Array]"===t?o+=Pe:"[object Uint32Array]"===t?o+=We:"[object Float32Array]"===t?o+=qe:"[object Float64Array]"===t?o+=Qe:n(new Error("Failed to get type for BinaryArray"))),n(o+P(r))}else if("[object Blob]"===t){var i=new FileReader;i.onload=function(){var t=Oe+e.type+"~"+P(this.result);n(Be+ke+t)},i.readAsArrayBuffer(e)}else try{n(JSON.stringify(e))}catch(t){console.error("Couldn't convert value into a JSON string: ",e),n(null,t)}}function W(e){if(e.substring(0,De)!==Be)return JSON.parse(e);var n,t=e.substring(He),r=e.substring(De,He);if(r===ke&&Ae.test(t)){var o=t.match(Ae);n=o[1],t=t.substring(o[0].length)}var i=z(t);switch(r){case Te:return i;case ke:return a([i],{type:n});case Fe:return new Int8Array(i);case Me:return new Uint8Array(i);case Le:return new Uint8ClampedArray(i);case ze:return new Int16Array(i);case Ue:return new Uint16Array(i);case Pe:return new Int32Array(i);case We:return new Uint32Array(i);case qe:return new Float32Array(i);case Qe:return new Float64Array(i);default:throw new Error("Unkown type: "+r)}}function q(e,n,t,r){e.executeSql("CREATE TABLE IF NOT EXISTS "+n.storeName+" (id INTEGER PRIMARY KEY, key unique, value)",[],t,r)}function Q(e){var n=this,t={db:null};if(e)for(var r in e)t[r]="string"!=typeof e[r]?e[r].toString():e[r];var o=new we((function(e,r){try{t.db=openDatabase(t.name,String(t.version),t.description,t.size)}catch(e){return r(e)}t.db.transaction((function(o){q(o,t,(function(){n._dbInfo=t,e()}),(function(e,n){r(n)}))}),r)}));return t.serializer=Ke,o}function H(e,n,t,r,o,i){e.executeSql(t,r,o,(function(e,a){a.code===a.SYNTAX_ERR?e.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name = ?",[n.storeName],(function(e,u){u.rows.length?i(e,a):q(e,n,(function(){e.executeSql(t,r,o,i)}),i)}),i):i(e,a)}),i)}function X(e,n){var t=this;e=s(e);var r=new we((function(n,r){t.ready().then((function(){var o=t._dbInfo;o.db.transaction((function(t){H(t,o,"SELECT * FROM "+o.storeName+" WHERE key = ? LIMIT 1",[e],(function(e,t){var r=t.rows.length?t.rows.item(0).value:null;r&&(r=o.serializer.deserialize(r)),n(r)}),(function(e,n){r(n)}))}))})).catch(r)}));return u(r,n),r}function K(e,n){var t=this,r=new we((function(n,r){t.ready().then((function(){var o=t._dbInfo;o.db.transaction((function(t){H(t,o,"SELECT * FROM "+o.storeName,[],(function(t,r){for(var i=r.rows,a=i.length,u=0;u<a;u++){var c=i.item(u),s=c.value;if(s&&(s=o.serializer.deserialize(s)),void 0!==(s=e(s,c.key,u+1)))return void n(s)}n()}),(function(e,n){r(n)}))}))})).catch(r)}));return u(r,n),r}function G(e,n,t,r){var o=this;e=s(e);var i=new we((function(i,a){o.ready().then((function(){void 0===n&&(n=null);var u=n,c=o._dbInfo;c.serializer.serialize(n,(function(n,s){s?a(s):c.db.transaction((function(t){H(t,c,"INSERT OR REPLACE INTO "+c.storeName+" (key, value) VALUES (?, ?)",[e,n],(function(){i(u)}),(function(e,n){a(n)}))}),(function(n){if(n.code===n.QUOTA_ERR){if(r>0)return void i(G.apply(o,[e,u,t,r-1]));a(n)}}))}))})).catch(a)}));return u(i,t),i}function J(e,n,t){return G.apply(this,[e,n,t,1])}function V(e,n){var t=this;e=s(e);var r=new we((function(n,r){t.ready().then((function(){var o=t._dbInfo;o.db.transaction((function(t){H(t,o,"DELETE FROM "+o.storeName+" WHERE key = ?",[e],(function(){n()}),(function(e,n){r(n)}))}))})).catch(r)}));return u(r,n),r}function Y(e){var n=this,t=new we((function(e,t){n.ready().then((function(){var r=n._dbInfo;r.db.transaction((function(n){H(n,r,"DELETE FROM "+r.storeName,[],(function(){e()}),(function(e,n){t(n)}))}))})).catch(t)}));return u(t,e),t}function $(e){var n=this,t=new we((function(e,t){n.ready().then((function(){var r=n._dbInfo;r.db.transaction((function(n){H(n,r,"SELECT COUNT(key) as c FROM "+r.storeName,[],(function(n,t){var r=t.rows.item(0).c;e(r)}),(function(e,n){t(n)}))}))})).catch(t)}));return u(t,e),t}function Z(e,n){var t=this,r=new we((function(n,r){t.ready().then((function(){var o=t._dbInfo;o.db.transaction((function(t){H(t,o,"SELECT key FROM "+o.storeName+" WHERE id = ? LIMIT 1",[e+1],(function(e,t){var r=t.rows.length?t.rows.item(0).key:null;n(r)}),(function(e,n){r(n)}))}))})).catch(r)}));return u(r,n),r}function ee(e){var n=this,t=new we((function(e,t){n.ready().then((function(){var r=n._dbInfo;r.db.transaction((function(n){H(n,r,"SELECT key FROM "+r.storeName,[],(function(n,t){for(var r=[],o=0;o<t.rows.length;o++)r.push(t.rows.item(o).key);e(r)}),(function(e,n){t(n)}))}))})).catch(t)}));return u(t,e),t}function ne(e){return new we((function(n,t){e.transaction((function(r){r.executeSql("SELECT name FROM sqlite_master WHERE type='table' AND name <> '__WebKitDatabaseInfoTable__'",[],(function(t,r){for(var o=[],i=0;i<r.rows.length;i++)o.push(r.rows.item(i).name);n({db:e,storeNames:o})}),(function(e,n){t(n)}))}),(function(e){t(e)}))}))}function te(e,n){n=f.apply(this,arguments);var t=this.config();(e="function"!=typeof e&&e||{}).name||(e.name=e.name||t.name,e.storeName=e.storeName||t.storeName);var r,o=this;return r=e.name?new we((function(n){var r;r=e.name===t.name?o._dbInfo.db:openDatabase(e.name,"","",0),n(e.storeName?{db:r,storeNames:[e.storeName]}:ne(r))})).then((function(e){return new we((function(n,t){e.db.transaction((function(r){function o(e){return new we((function(n,t){r.executeSql("DROP TABLE IF EXISTS "+e,[],(function(){n()}),(function(e,n){t(n)}))}))}for(var i=[],a=0,u=e.storeNames.length;a<u;a++)i.push(o(e.storeNames[a]));we.all(i).then((function(){n()})).catch((function(e){t(e)}))}),(function(e){t(e)}))}))})):we.reject("Invalid arguments"),u(r,n),r}function re(){try{return"undefined"!=typeof localStorage&&"setItem"in localStorage&&!!localStorage.setItem}catch(e){return!1}}function oe(e,n){var t=e.name+"/";return e.storeName!==n.storeName&&(t+=e.storeName+"/"),t}function ie(){var e="_localforage_support_test";try{return localStorage.setItem(e,!0),localStorage.removeItem(e),!1}catch(e){return!0}}function ae(){return!ie()||localStorage.length>0}function ue(e){var n=this,t={};if(e)for(var r in e)t[r]=e[r];return t.keyPrefix=oe(e,n._defaultConfig),ae()?(n._dbInfo=t,t.serializer=Ke,we.resolve()):we.reject()}function ce(e){var n=this,t=n.ready().then((function(){for(var e=n._dbInfo.keyPrefix,t=localStorage.length-1;t>=0;t--){var r=localStorage.key(t);0===r.indexOf(e)&&localStorage.removeItem(r)}}));return u(t,e),t}function se(e,n){var t=this;e=s(e);var r=t.ready().then((function(){var n=t._dbInfo,r=localStorage.getItem(n.keyPrefix+e);return r&&(r=n.serializer.deserialize(r)),r}));return u(r,n),r}function fe(e,n){var t=this,r=t.ready().then((function(){for(var n=t._dbInfo,r=n.keyPrefix,o=r.length,i=localStorage.length,a=1,u=0;u<i;u++){var c=localStorage.key(u);if(0===c.indexOf(r)){var s=localStorage.getItem(c);if(s&&(s=n.serializer.deserialize(s)),void 0!==(s=e(s,c.substring(o),a++)))return s}}}));return u(r,n),r}function le(e,n){var t=this,r=t.ready().then((function(){var n,r=t._dbInfo;try{n=localStorage.key(e)}catch(e){n=null}return n&&(n=n.substring(r.keyPrefix.length)),n}));return u(r,n),r}function de(e){var n=this,t=n.ready().then((function(){for(var e=n._dbInfo,t=localStorage.length,r=[],o=0;o<t;o++){var i=localStorage.key(o);0===i.indexOf(e.keyPrefix)&&r.push(i.substring(e.keyPrefix.length))}return r}));return u(t,e),t}function he(e){var n=this.keys().then((function(e){return e.length}));return u(n,e),n}function ve(e,n){var t=this;e=s(e);var r=t.ready().then((function(){var n=t._dbInfo;localStorage.removeItem(n.keyPrefix+e)}));return u(r,n),r}function pe(e,n,t){var r=this;e=s(e);var o=r.ready().then((function(){void 0===n&&(n=null);var t=n;return new we((function(o,i){var a=r._dbInfo;a.serializer.serialize(n,(function(n,r){if(r)i(r);else try{localStorage.setItem(a.keyPrefix+e,n),o(t)}catch(e){"QuotaExceededError"!==e.name&&"NS_ERROR_DOM_QUOTA_REACHED"!==e.name||i(e),i(e)}}))}))}));return u(o,t),o}function me(e,n){if(n=f.apply(this,arguments),!(e="function"!=typeof e&&e||{}).name){var t=this.config();e.name=e.name||t.name,e.storeName=e.storeName||t.storeName}var r,o=this;return r=e.name?new we((function(n){n(e.storeName?oe(e,o._defaultConfig):e.name+"/")})).then((function(e){for(var n=localStorage.length-1;n>=0;n--){var t=localStorage.key(n);0===t.indexOf(e)&&localStorage.removeItem(t)}})):we.reject("Invalid arguments"),u(r,n),r}function ge(e,n){e[n]=function(){var t=arguments;return e.ready().then((function(){return e[n].apply(e,t)}))}}function ye(){for(var e=1;e<arguments.length;e++){var n=arguments[e];if(n)for(var t in n)n.hasOwnProperty(t)&&($e(n[t])?arguments[0][t]=n[t].slice():arguments[0][t]=n[t])}return arguments[0]}var be="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_e=o();"undefined"==typeof Promise&&e(3);var we=Promise,Ie="local-forage-detect-blob-support",Se=void 0,Ee={},Ce=Object.prototype.toString,xe="readonly",Ne="readwrite",Re={_driver:"asyncStorage",_initStorage:R,_support:i(),iterate:O,getItem:j,setItem:A,removeItem:B,clear:D,length:T,key:k,keys:F,dropInstance:M},je="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",Oe="~~local_forage_type~",Ae=/^~~local_forage_type~([^~]+)~/,Be="__lfsc__:",De=Be.length,Te="arbf",ke="blob",Fe="si08",Me="ui08",Le="uic8",ze="si16",Pe="si32",Ue="ur16",We="ui32",qe="fl32",Qe="fl64",He=De+Te.length,Xe=Object.prototype.toString,Ke={serialize:U,deserialize:W,stringToBuffer:z,bufferToString:P},Ge={_driver:"webSQLStorage",_initStorage:Q,_support:L(),iterate:K,getItem:X,setItem:J,removeItem:V,clear:Y,length:$,key:Z,keys:ee,dropInstance:te},Je={_driver:"localStorageWrapper",_initStorage:ue,_support:re(),iterate:fe,getItem:se,setItem:pe,removeItem:ve,clear:ce,length:he,key:le,keys:de,dropInstance:me},Ve=function(e,n){return e===n||"number"==typeof e&&"number"==typeof n&&isNaN(e)&&isNaN(n)},Ye=function(e,n){for(var t=e.length,r=0;r<t;){if(Ve(e[r],n))return!0;r++}return!1},$e=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},Ze={},en={},nn={INDEXEDDB:Re,WEBSQL:Ge,LOCALSTORAGE:Je},tn=[nn.INDEXEDDB._driver,nn.WEBSQL._driver,nn.LOCALSTORAGE._driver],rn=["dropInstance"],on=["clear","getItem","iterate","key","keys","length","removeItem","setItem"].concat(rn),an={description:"",driver:tn.slice(),name:"localforage",size:4980736,storeName:"keyvaluepairs",version:1},un=function(){function e(n){for(var t in r(this,e),nn)if(nn.hasOwnProperty(t)){var o=nn[t],i=o._driver;this[t]=i,Ze[i]||this.defineDriver(o)}this._defaultConfig=ye({},an),this._config=ye({},this._defaultConfig,n),this._driverSet=null,this._initDriver=null,this._ready=!1,this._dbInfo=null,this._wrapLibraryMethodsWithReady(),this.setDriver(this._config.driver).catch((function(){}))}return e.prototype.config=function(e){if("object"===(void 0===e?"undefined":be(e))){if(this._ready)return new Error("Can't call config() after localforage has been used.");for(var n in e){if("storeName"===n&&(e[n]=e[n].replace(/\W/g,"_")),"version"===n&&"number"!=typeof e[n])return new Error("Database version must be a number.");this._config[n]=e[n]}return!("driver"in e&&e.driver)||this.setDriver(this._config.driver)}return"string"==typeof e?this._config[e]:this._config},e.prototype.defineDriver=function(e,n,t){var r=new we((function(n,t){try{var r=e._driver,o=new Error("Custom driver not compliant; see https://mozilla.github.io/localForage/#definedriver");if(!e._driver)return void t(o);for(var i=on.concat("_initStorage"),a=0,c=i.length;a<c;a++){var s=i[a];if((!Ye(rn,s)||e[s])&&"function"!=typeof e[s])return void t(o)}!function(){for(var n=function(e){return function(){var n=new Error("Method "+e+" is not implemented by the current driver"),t=we.reject(n);return u(t,arguments[arguments.length-1]),t}},t=0,r=rn.length;t<r;t++){var o=rn[t];e[o]||(e[o]=n(o))}}();var f=function(t){Ze[r]&&console.info("Redefining LocalForage driver: "+r),Ze[r]=e,en[r]=t,n()};"_support"in e?e._support&&"function"==typeof e._support?e._support().then(f,t):f(!!e._support):f(!0)}catch(e){t(e)}}));return c(r,n,t),r},e.prototype.driver=function(){return this._driver||null},e.prototype.getDriver=function(e,n,t){var r=Ze[e]?we.resolve(Ze[e]):we.reject(new Error("Driver not found."));return c(r,n,t),r},e.prototype.getSerializer=function(e){var n=we.resolve(Ke);return c(n,e),n},e.prototype.ready=function(e){var n=this,t=n._driverSet.then((function(){return null===n._ready&&(n._ready=n._initDriver()),n._ready}));return c(t,e,e),t},e.prototype.setDriver=function(e,n,t){function r(){a._config.driver=a.driver()}function o(e){return a._extend(e),r(),a._ready=a._initStorage(a._config),a._ready}function i(e){return function(){function n(){for(;t<e.length;){var i=e[t];return t++,a._dbInfo=null,a._ready=null,a.getDriver(i).then(o).catch(n)}r();var u=new Error("No available storage method found.");return a._driverSet=we.reject(u),a._driverSet}var t=0;return n()}}var a=this;$e(e)||(e=[e]);var u=this._getSupportedDrivers(e),s=null!==this._driverSet?this._driverSet.catch((function(){return we.resolve()})):we.resolve();return this._driverSet=s.then((function(){var e=u[0];return a._dbInfo=null,a._ready=null,a.getDriver(e).then((function(e){a._driver=e._driver,r(),a._wrapLibraryMethodsWithReady(),a._initDriver=i(u)}))})).catch((function(){r();var e=new Error("No available storage method found.");return a._driverSet=we.reject(e),a._driverSet})),c(this._driverSet,n,t),this._driverSet},e.prototype.supports=function(e){return!!en[e]},e.prototype._extend=function(e){ye(this,e)},e.prototype._getSupportedDrivers=function(e){for(var n=[],t=0,r=e.length;t<r;t++){var o=e[t];this.supports(o)&&n.push(o)}return n},e.prototype._wrapLibraryMethodsWithReady=function(){for(var e=0,n=on.length;e<n;e++)ge(this,on[e])},e.prototype.createInstance=function(n){return new e(n)},e}(),cn=new un;n.exports=cn},{3:3}]},{},[4])(4),jQuery((function(e){"use strict";var n=e("#udem-alertes-placeholder").first(),t=n.data("udem-alertes-url"),r=n.data("udem-alertes-close-button"),o=n.data("udem-alertes-close-button-label");function i(t,i){var a,u,c;a=e('<div class="udem-alertes-inner1"></div>').appendTo(n),(u=e('<div class="udem-alertes-inner2"></div>').appendTo(a)).html(t),""!==u.text()?(e("body").addClass("udem-has-alertes"),1===r&&(c=e('<a href="#" class="close" aria-label="'+o+'" title="'+o+'">×</a>'),u.prepend(c),c.on("click",(function(e){e.preventDefault(),"object"==typeof i&&i.setItem(t,!0,(function(e){e&&console.log("ERROR: setItem localforage.",e)})),n.remove()})))):n.html("")}n.length<1||t&&e.get(t,(function(e,n){var t;if("success"===n&&e)if("undefined"!=typeof localforage&&1===r){t=localforage.createInstance({name:"udemboostrap-alertes"});try{t.getItem(e,(function(n,r){n?(i(e),console.log("ERROR: getItem localforage.",n)):!0!==r&&(t.clear(),i(e,t))}))}catch(n){i(e),console.log("ERROR: getItem localforage.")}}else i(e),console.log("ERROR: No localforage found.")}))}))}();