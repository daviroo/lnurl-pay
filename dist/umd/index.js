!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.exampleTypescriptPackage=t():e.exampleTypescriptPackage=t()}(this,(function(){return e={669:(e,t,r)=>{e.exports=r(609)},448:(e,t,r)=>{"use strict";var n=r(837),o=r(26),i=r(372),s=r(327),a=r(97),u=r(109),c=r(985),f=r(61),l=r(655),d=r(263);e.exports=function(e){return new Promise((function(t,r){var p,h=e.data,m=e.headers,v=e.responseType;function y(){e.cancelToken&&e.cancelToken.unsubscribe(p),e.signal&&e.signal.removeEventListener("abort",p)}n.isFormData(h)&&delete m["Content-Type"];var b=new XMLHttpRequest;if(e.auth){var g=e.auth.username||"",w=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";m.Authorization="Basic "+btoa(g+":"+w)}var x=a(e.baseURL,e.url);function E(){if(b){var n="getAllResponseHeaders"in b?u(b.getAllResponseHeaders()):null,i={data:v&&"text"!==v&&"json"!==v?b.response:b.responseText,status:b.status,statusText:b.statusText,headers:n,config:e,request:b};o((function(e){t(e),y()}),(function(e){r(e),y()}),i),b=null}}if(b.open(e.method.toUpperCase(),s(x,e.params,e.paramsSerializer),!0),b.timeout=e.timeout,"onloadend"in b?b.onloadend=E:b.onreadystatechange=function(){b&&4===b.readyState&&(0!==b.status||b.responseURL&&0===b.responseURL.indexOf("file:"))&&setTimeout(E)},b.onabort=function(){b&&(r(f("Request aborted",e,"ECONNABORTED",b)),b=null)},b.onerror=function(){r(f("Network Error",e,null,b)),b=null},b.ontimeout=function(){var t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",n=e.transitional||l.transitional;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),r(f(t,e,n.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",b)),b=null},n.isStandardBrowserEnv()){var S=(e.withCredentials||c(x))&&e.xsrfCookieName?i.read(e.xsrfCookieName):void 0;S&&(m[e.xsrfHeaderName]=S)}"setRequestHeader"in b&&n.forEach(m,(function(e,t){void 0===h&&"content-type"===t.toLowerCase()?delete m[t]:b.setRequestHeader(t,e)})),n.isUndefined(e.withCredentials)||(b.withCredentials=!!e.withCredentials),v&&"json"!==v&&(b.responseType=e.responseType),"function"==typeof e.onDownloadProgress&&b.addEventListener("progress",e.onDownloadProgress),"function"==typeof e.onUploadProgress&&b.upload&&b.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(p=function(e){b&&(r(!e||e&&e.type?new d("canceled"):e),b.abort(),b=null)},e.cancelToken&&e.cancelToken.subscribe(p),e.signal&&(e.signal.aborted?p():e.signal.addEventListener("abort",p))),h||(h=null),b.send(h)}))}},609:(e,t,r)=>{"use strict";var n=r(837),o=r(849),i=r(321),s=r(185),a=function e(t){var r=new i(t),a=o(i.prototype.request,r);return n.extend(a,i.prototype,r),n.extend(a,r),a.create=function(r){return e(s(t,r))},a}(r(655));a.Axios=i,a.Cancel=r(263),a.CancelToken=r(972),a.isCancel=r(502),a.VERSION=r(288).version,a.all=function(e){return Promise.all(e)},a.spread=r(713),a.isAxiosError=r(268),e.exports=a,e.exports.default=a},263:e=>{"use strict";function t(e){this.message=e}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,e.exports=t},972:(e,t,r)=>{"use strict";var n=r(263);function o(e){if("function"!=typeof e)throw new TypeError("executor must be a function.");var t;this.promise=new Promise((function(e){t=e}));var r=this;this.promise.then((function(e){if(r._listeners){var t,n=r._listeners.length;for(t=0;t<n;t++)r._listeners[t](e);r._listeners=null}})),this.promise.then=function(e){var t,n=new Promise((function(e){r.subscribe(e),t=e})).then(e);return n.cancel=function(){r.unsubscribe(t)},n},e((function(e){r.reason||(r.reason=new n(e),t(r.reason))}))}o.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},o.prototype.subscribe=function(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]},o.prototype.unsubscribe=function(e){if(this._listeners){var t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}},o.source=function(){var e;return{token:new o((function(t){e=t})),cancel:e}},e.exports=o},502:e=>{"use strict";e.exports=function(e){return!(!e||!e.__CANCEL__)}},321:(e,t,r)=>{"use strict";var n=r(837),o=r(327),i=r(782),s=r(572),a=r(185),u=r(875),c=u.validators;function f(e){this.defaults=e,this.interceptors={request:new i,response:new i}}f.prototype.request=function(e){"string"==typeof e?(e=arguments[1]||{}).url=arguments[0]:e=e||{},(e=a(this.defaults,e)).method?e.method=e.method.toLowerCase():this.defaults.method?e.method=this.defaults.method.toLowerCase():e.method="get";var t=e.transitional;void 0!==t&&u.assertOptions(t,{silentJSONParsing:c.transitional(c.boolean),forcedJSONParsing:c.transitional(c.boolean),clarifyTimeoutError:c.transitional(c.boolean)},!1);var r=[],n=!0;this.interceptors.request.forEach((function(t){"function"==typeof t.runWhen&&!1===t.runWhen(e)||(n=n&&t.synchronous,r.unshift(t.fulfilled,t.rejected))}));var o,i=[];if(this.interceptors.response.forEach((function(e){i.push(e.fulfilled,e.rejected)})),!n){var f=[s,void 0];for(Array.prototype.unshift.apply(f,r),f=f.concat(i),o=Promise.resolve(e);f.length;)o=o.then(f.shift(),f.shift());return o}for(var l=e;r.length;){var d=r.shift(),p=r.shift();try{l=d(l)}catch(e){p(e);break}}try{o=s(l)}catch(e){return Promise.reject(e)}for(;i.length;)o=o.then(i.shift(),i.shift());return o},f.prototype.getUri=function(e){return e=a(this.defaults,e),o(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")},n.forEach(["delete","get","head","options"],(function(e){f.prototype[e]=function(t,r){return this.request(a(r||{},{method:e,url:t,data:(r||{}).data}))}})),n.forEach(["post","put","patch"],(function(e){f.prototype[e]=function(t,r,n){return this.request(a(n||{},{method:e,url:t,data:r}))}})),e.exports=f},782:(e,t,r)=>{"use strict";var n=r(837);function o(){this.handlers=[]}o.prototype.use=function(e,t,r){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!r&&r.synchronous,runWhen:r?r.runWhen:null}),this.handlers.length-1},o.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)},o.prototype.forEach=function(e){n.forEach(this.handlers,(function(t){null!==t&&e(t)}))},e.exports=o},97:(e,t,r)=>{"use strict";var n=r(793),o=r(303);e.exports=function(e,t){return e&&!n(t)?o(e,t):t}},61:(e,t,r)=>{"use strict";var n=r(481);e.exports=function(e,t,r,o,i){var s=new Error(e);return n(s,t,r,o,i)}},572:(e,t,r)=>{"use strict";var n=r(837),o=r(527),i=r(502),s=r(655),a=r(263);function u(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new a("canceled")}e.exports=function(e){return u(e),e.headers=e.headers||{},e.data=o.call(e,e.data,e.headers,e.transformRequest),e.headers=n.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),n.forEach(["delete","get","head","post","put","patch","common"],(function(t){delete e.headers[t]})),(e.adapter||s.adapter)(e).then((function(t){return u(e),t.data=o.call(e,t.data,t.headers,e.transformResponse),t}),(function(t){return i(t)||(u(e),t&&t.response&&(t.response.data=o.call(e,t.response.data,t.response.headers,e.transformResponse))),Promise.reject(t)}))}},481:e=>{"use strict";e.exports=function(e,t,r,n,o){return e.config=t,r&&(e.code=r),e.request=n,e.response=o,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e}},185:(e,t,r)=>{"use strict";var n=r(837);e.exports=function(e,t){t=t||{};var r={};function o(e,t){return n.isPlainObject(e)&&n.isPlainObject(t)?n.merge(e,t):n.isPlainObject(t)?n.merge({},t):n.isArray(t)?t.slice():t}function i(r){return n.isUndefined(t[r])?n.isUndefined(e[r])?void 0:o(void 0,e[r]):o(e[r],t[r])}function s(e){if(!n.isUndefined(t[e]))return o(void 0,t[e])}function a(r){return n.isUndefined(t[r])?n.isUndefined(e[r])?void 0:o(void 0,e[r]):o(void 0,t[r])}function u(r){return r in t?o(e[r],t[r]):r in e?o(void 0,e[r]):void 0}var c={url:s,method:s,data:s,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:u};return n.forEach(Object.keys(e).concat(Object.keys(t)),(function(e){var t=c[e]||i,o=t(e);n.isUndefined(o)&&t!==u||(r[e]=o)})),r}},26:(e,t,r)=>{"use strict";var n=r(61);e.exports=function(e,t,r){var o=r.config.validateStatus;r.status&&o&&!o(r.status)?t(n("Request failed with status code "+r.status,r.config,null,r.request,r)):e(r)}},527:(e,t,r)=>{"use strict";var n=r(837),o=r(655);e.exports=function(e,t,r){var i=this||o;return n.forEach(r,(function(r){e=r.call(i,e,t)})),e}},655:(e,t,r)=>{"use strict";var n=r(837),o=r(16),i=r(481),s={"Content-Type":"application/x-www-form-urlencoded"};function a(e,t){!n.isUndefined(e)&&n.isUndefined(e["Content-Type"])&&(e["Content-Type"]=t)}var u,c={transitional:{silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},adapter:(("undefined"!=typeof XMLHttpRequest||"undefined"!=typeof process&&"[object process]"===Object.prototype.toString.call(process))&&(u=r(448)),u),transformRequest:[function(e,t){return o(t,"Accept"),o(t,"Content-Type"),n.isFormData(e)||n.isArrayBuffer(e)||n.isBuffer(e)||n.isStream(e)||n.isFile(e)||n.isBlob(e)?e:n.isArrayBufferView(e)?e.buffer:n.isURLSearchParams(e)?(a(t,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):n.isObject(e)||t&&"application/json"===t["Content-Type"]?(a(t,"application/json"),function(e,t,r){if(n.isString(e))try{return(0,JSON.parse)(e),n.trim(e)}catch(e){if("SyntaxError"!==e.name)throw e}return(0,JSON.stringify)(e)}(e)):e}],transformResponse:[function(e){var t=this.transitional||c.transitional,r=t&&t.silentJSONParsing,o=t&&t.forcedJSONParsing,s=!r&&"json"===this.responseType;if(s||o&&n.isString(e)&&e.length)try{return JSON.parse(e)}catch(e){if(s){if("SyntaxError"===e.name)throw i(e,this,"E_JSON_PARSE");throw e}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};n.forEach(["delete","get","head"],(function(e){c.headers[e]={}})),n.forEach(["post","put","patch"],(function(e){c.headers[e]=n.merge(s)})),e.exports=c},288:e=>{e.exports={version:"0.24.0"}},849:e=>{"use strict";e.exports=function(e,t){return function(){for(var r=new Array(arguments.length),n=0;n<r.length;n++)r[n]=arguments[n];return e.apply(t,r)}}},327:(e,t,r)=>{"use strict";var n=r(837);function o(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}e.exports=function(e,t,r){if(!t)return e;var i;if(r)i=r(t);else if(n.isURLSearchParams(t))i=t.toString();else{var s=[];n.forEach(t,(function(e,t){null!=e&&(n.isArray(e)?t+="[]":e=[e],n.forEach(e,(function(e){n.isDate(e)?e=e.toISOString():n.isObject(e)&&(e=JSON.stringify(e)),s.push(o(t)+"="+o(e))})))})),i=s.join("&")}if(i){var a=e.indexOf("#");-1!==a&&(e=e.slice(0,a)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}},303:e=>{"use strict";e.exports=function(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}},372:(e,t,r)=>{"use strict";var n=r(837);e.exports=n.isStandardBrowserEnv()?{write:function(e,t,r,o,i,s){var a=[];a.push(e+"="+encodeURIComponent(t)),n.isNumber(r)&&a.push("expires="+new Date(r).toGMTString()),n.isString(o)&&a.push("path="+o),n.isString(i)&&a.push("domain="+i),!0===s&&a.push("secure"),document.cookie=a.join("; ")},read:function(e){var t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}}},793:e=>{"use strict";e.exports=function(e){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(e)}},268:e=>{"use strict";e.exports=function(e){return"object"==typeof e&&!0===e.isAxiosError}},985:(e,t,r)=>{"use strict";var n=r(837);e.exports=n.isStandardBrowserEnv()?function(){var e,t=/(msie|trident)/i.test(navigator.userAgent),r=document.createElement("a");function o(e){var n=e;return t&&(r.setAttribute("href",n),n=r.href),r.setAttribute("href",n),{href:r.href,protocol:r.protocol?r.protocol.replace(/:$/,""):"",host:r.host,search:r.search?r.search.replace(/^\?/,""):"",hash:r.hash?r.hash.replace(/^#/,""):"",hostname:r.hostname,port:r.port,pathname:"/"===r.pathname.charAt(0)?r.pathname:"/"+r.pathname}}return e=o(window.location.href),function(t){var r=n.isString(t)?o(t):t;return r.protocol===e.protocol&&r.host===e.host}}():function(){return!0}},16:(e,t,r)=>{"use strict";var n=r(837);e.exports=function(e,t){n.forEach(e,(function(r,n){n!==t&&n.toUpperCase()===t.toUpperCase()&&(e[t]=r,delete e[n])}))}},109:(e,t,r)=>{"use strict";var n=r(837),o=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];e.exports=function(e){var t,r,i,s={};return e?(n.forEach(e.split("\n"),(function(e){if(i=e.indexOf(":"),t=n.trim(e.substr(0,i)).toLowerCase(),r=n.trim(e.substr(i+1)),t){if(s[t]&&o.indexOf(t)>=0)return;s[t]="set-cookie"===t?(s[t]?s[t]:[]).concat([r]):s[t]?s[t]+", "+r:r}})),s):s}},713:e=>{"use strict";e.exports=function(e){return function(t){return e.apply(null,t)}}},875:(e,t,r)=>{"use strict";var n=r(288).version,o={};["object","boolean","number","function","string","symbol"].forEach((function(e,t){o[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}}));var i={};o.transitional=function(e,t,r){function o(e,t){return"[Axios v"+n+"] Transitional option '"+e+"'"+t+(r?". "+r:"")}return function(r,n,s){if(!1===e)throw new Error(o(n," has been removed"+(t?" in "+t:"")));return t&&!i[n]&&(i[n]=!0,console.warn(o(n," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(r,n,s)}},e.exports={assertOptions:function(e,t,r){if("object"!=typeof e)throw new TypeError("options must be an object");for(var n=Object.keys(e),o=n.length;o-- >0;){var i=n[o],s=t[i];if(s){var a=e[i],u=void 0===a||s(a,i,e);if(!0!==u)throw new TypeError("option "+i+" must be "+u)}else if(!0!==r)throw Error("Unknown option "+i)}},validators:o}},837:(e,t,r)=>{"use strict";var n=r(849),o=Object.prototype.toString;function i(e){return"[object Array]"===o.call(e)}function s(e){return void 0===e}function a(e){return null!==e&&"object"==typeof e}function u(e){if("[object Object]"!==o.call(e))return!1;var t=Object.getPrototypeOf(e);return null===t||t===Object.prototype}function c(e){return"[object Function]"===o.call(e)}function f(e,t){if(null!=e)if("object"!=typeof e&&(e=[e]),i(e))for(var r=0,n=e.length;r<n;r++)t.call(null,e[r],r,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.call(null,e[o],o,e)}e.exports={isArray:i,isArrayBuffer:function(e){return"[object ArrayBuffer]"===o.call(e)},isBuffer:function(e){return null!==e&&!s(e)&&null!==e.constructor&&!s(e.constructor)&&"function"==typeof e.constructor.isBuffer&&e.constructor.isBuffer(e)},isFormData:function(e){return"undefined"!=typeof FormData&&e instanceof FormData},isArrayBufferView:function(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer},isString:function(e){return"string"==typeof e},isNumber:function(e){return"number"==typeof e},isObject:a,isPlainObject:u,isUndefined:s,isDate:function(e){return"[object Date]"===o.call(e)},isFile:function(e){return"[object File]"===o.call(e)},isBlob:function(e){return"[object Blob]"===o.call(e)},isFunction:c,isStream:function(e){return a(e)&&c(e.pipe)},isURLSearchParams:function(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams},isStandardBrowserEnv:function(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product&&"NativeScript"!==navigator.product&&"NS"!==navigator.product)&&"undefined"!=typeof window&&"undefined"!=typeof document},forEach:f,merge:function e(){var t={};function r(r,n){u(t[n])&&u(r)?t[n]=e(t[n],r):u(r)?t[n]=e({},r):i(r)?t[n]=r.slice():t[n]=r}for(var n=0,o=arguments.length;n<o;n++)f(arguments[n],r);return t},extend:function(e,t,r){return f(t,(function(t,o){e[o]=r&&"function"==typeof t?n(t,r):t})),e},trim:function(e){return e.trim?e.trim():e.replace(/^\s+|\s+$/g,"")},stripBOM:function(e){return 65279===e.charCodeAt(0)&&(e=e.slice(1)),e}}},715:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.bech32m=t.bech32=void 0;const r="qpzry9x8gf2tvdw0s3jn54khce6mua7l",n={};for(let e=0;e<r.length;e++){const t=r.charAt(e);n[t]=e}function o(e){const t=e>>25;return(33554431&e)<<5^996825010&-(t>>0&1)^642813549&-(t>>1&1)^513874426&-(t>>2&1)^1027748829&-(t>>3&1)^705979059&-(t>>4&1)}function i(e){let t=1;for(let r=0;r<e.length;++r){const n=e.charCodeAt(r);if(n<33||n>126)return"Invalid prefix ("+e+")";t=o(t)^n>>5}t=o(t);for(let r=0;r<e.length;++r){const n=e.charCodeAt(r);t=o(t)^31&n}return t}function s(e,t,r,n){let o=0,i=0;const s=(1<<r)-1,a=[];for(let n=0;n<e.length;++n)for(o=o<<t|e[n],i+=t;i>=r;)i-=r,a.push(o>>i&s);if(n)i>0&&a.push(o<<r-i&s);else{if(i>=t)return"Excess padding";if(o<<r-i&s)return"Non-zero padding"}return a}function a(e){return s(e,8,5,!0)}function u(e){const t=s(e,5,8,!1);if(Array.isArray(t))return t}function c(e){const t=s(e,5,8,!1);if(Array.isArray(t))return t;throw new Error(t)}function f(e){let t;function s(e,r){if(r=r||90,e.length<8)return e+" too short";if(e.length>r)return"Exceeds length limit";const s=e.toLowerCase(),a=e.toUpperCase();if(e!==s&&e!==a)return"Mixed-case string "+e;const u=(e=s).lastIndexOf("1");if(-1===u)return"No separator character for "+e;if(0===u)return"Missing prefix for "+e;const c=e.slice(0,u),f=e.slice(u+1);if(f.length<6)return"Data too short";let l=i(c);if("string"==typeof l)return l;const d=[];for(let e=0;e<f.length;++e){const t=f.charAt(e),r=n[t];if(void 0===r)return"Unknown character "+t;l=o(l)^r,e+6>=f.length||d.push(r)}return l!==t?"Invalid checksum for "+e:{prefix:c,words:d}}return t="bech32"===e?1:734539939,{decodeUnsafe:function(e,t){const r=s(e,t);if("object"==typeof r)return r},decode:function(e,t){const r=s(e,t);if("object"==typeof r)return r;throw new Error(r)},encode:function(e,n,s){if(s=s||90,e.length+7+n.length>s)throw new TypeError("Exceeds length limit");let a=i(e=e.toLowerCase());if("string"==typeof a)throw new Error(a);let u=e+"1";for(let e=0;e<n.length;++e){const t=n[e];if(t>>5!=0)throw new Error("Non 5-bit word");a=o(a)^t,u+=r.charAt(t)}for(let e=0;e<6;++e)a=o(a);a^=t;for(let e=0;e<6;++e)u+=r.charAt(a>>5*(5-e)&31);return u},toWords:a,fromWordsUnsafe:u,fromWords:c}}t.bech32=f("bech32"),t.bech32m=f("bech32m")},432:function(e,t,r){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return o(t,e),t},s=this&&this.__exportStar||function(e,t){for(var r in e)"default"===r||Object.prototype.hasOwnProperty.call(t,r)||n(t,e,r)};Object.defineProperty(t,"__esModule",{value:!0}),t.utils=void 0,t.utils=i(r(867)),s(r(940),t),s(r(95),t)},95:function(e,t,r){"use strict";var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function s(e){try{u(n.next(e))}catch(e){i(e)}}function a(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}u((n=n.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.requestInvoice=t.requestInvoiceWithServiceParams=void 0;var i=r(867),s=r(940);t.requestInvoiceWithServiceParams=function(e){var t=e.params,r=e.tokens,s=e.comment,a=e.onionAllowed,u=void 0!==a&&a,c=e.fetchGet,f=void 0===c?i.getJson:c;return n(void 0,void 0,void 0,(function(){var e,n,a,c,l,d,p;return o(this,(function(o){switch(o.label){case 0:if(e=t.callback,n=t.commentAllowed,a=t.min,c=t.max,!(0,i.isValidAmount)({amount:r,min:a,max:c}))throw new Error("Invalid amount");if(!(0,i.isUrl)(e))throw new Error("Callback must be a valid url");if(!u&&(0,i.isOnionUrl)(e))throw new Error("Onion requests not allowed");if(l={amount:1e3*r},s&&n>0&&s.length>n)throw new Error("The comment length must be ".concat(n," characters or fewer"));return s&&(l.comment=s),[4,f({url:e,params:l})];case 1:if(d=o.sent(),!(p=d&&d.pr&&d.pr.toString()))throw new Error("Invalid pay service invoice");return[2,{params:t,invoice:p,successAction:d.successAction}]}}))}))},t.requestInvoice=function(e){var r=e.lnUrlOrAddress,a=e.tokens,u=e.comment,c=e.onionAllowed,f=void 0!==c&&c,l=e.fetchGet,d=void 0===l?i.getJson:l;return n(void 0,void 0,void 0,(function(){var e;return o(this,(function(n){switch(n.label){case 0:return[4,(0,s.requestPayServiceParams)({lnUrlOrAddress:r,onionAllowed:f,fetchGet:d})];case 1:return e=n.sent(),[2,(0,t.requestInvoiceWithServiceParams)({params:e,tokens:a,comment:u,onionAllowed:f,fetchGet:d})]}}))}))}},940:function(e,t,r){"use strict";var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function s(e){try{u(n.next(e))}catch(e){i(e)}}function a(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}u((n=n.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}};Object.defineProperty(t,"__esModule",{value:!0}),t.requestPayServiceParams=void 0;var i=r(867);t.requestPayServiceParams=function(e){var t=e.lnUrlOrAddress,r=e.onionAllowed,a=void 0!==r&&r,u=e.fetchGet,c=void 0===u?i.getJson:u;return n(void 0,void 0,void 0,(function(){var e,r,n;return o(this,(function(o){switch(o.label){case 0:if(e=(0,i.decodeUrlOrAddress)(t),!(0,i.isUrl)(e))throw new Error("Invalid lnUrlOrAddress");if(!a&&(0,i.isOnionUrl)(e))throw new Error("Onion requests not allowed");return[4,c({url:e})];case 1:if(r=o.sent(),!(n=s(r)))throw new Error("Invalid pay service params");return[2,n]}}))}))};var s=function(e){if("payRequest"!==e.tag)return null;var t=(e.callback+"").trim();if(!(0,i.isUrl)(t))return null;var r,n=(0,i.checkedToSats)(Math.ceil(Number(e.minSendable||0)/1e3)),o=(0,i.checkedToSats)(Math.floor(Number(e.maxSendable)/1e3));if(!n||!o||n>o)return null;try{r=JSON.parse(e.metadata+"")}catch(e){r=[]}for(var s="",a="",u="",c=0;c<r.length;c++){var f=r[c],l=f[0],d=f[1];switch(l){case"text/plain":a=d;break;case"text/identifier":u=d;break;case"image/png;base64":case"image/jpeg;base64":s="data:"+l+","+d}}var p=t.match(/(?:[A-Za-z0-9-]+\.)+[A-Za-z0-9]{1,3}/);return{callback:t,fixed:n===o,min:n,max:o,domain:p&&p[0]||void 0,metadata:r,identifier:u,description:a,image:s,commentAllowed:Number(e.commentAllowed)||0}}},867:function(e,t,r){"use strict";var n=this&&this.__awaiter||function(e,t,r,n){return new(r||(r=Promise))((function(o,i){function s(e){try{u(n.next(e))}catch(e){i(e)}}function a(e){try{u(n.throw(e))}catch(e){i(e)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof r?t:new r((function(e){e(t)}))).then(s,a)}u((n=n.apply(e,t||[])).next())}))},o=this&&this.__generator||function(e,t){var r,n,o,i,s={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function a(i){return function(a){return function(i){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(o=2&i[0]?n.return:i[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,i[1])).done)return o;switch(n=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,n=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!((o=(o=s.trys).length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){s=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){s.label=i[1];break}if(6===i[0]&&s.label<o[1]){s.label=o[1],o=i;break}if(o&&s.label<o[2]){s.label=o[2],s.ops.push(i);break}o[2]&&s.ops.pop(),s.trys.pop();continue}i=t.call(e,s)}catch(e){i=[6,e],n=0}finally{r=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,a])}}},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.getJson=t.isValidAmount=t.toSats=t.checkedToSats=t.isOnionUrl=t.isUrl=t.parseLightningAddress=t.isLightningAddress=t.isLnurl=t.parseLnUrl=t.decodeUrlOrAddress=void 0;var s=r(525),a=r(715),u=i(r(669)),c=/^(?:http.*[&?]lightning=|lightning:)?(lnurl[0-9]{1,}[02-9ac-hj-np-z]+)/,f=/^((?:[^<>()\[\]\\.,;:\s@"]+(?:\.[^<>()\[\]\\.,;:\s@"]+)*)|(?:".+"))@((?:\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(?:(?:[a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,l=/^(http:\/\/[^/:@]+\.onion(?::\d{1,5})?)(\/.*)?$/;t.decodeUrlOrAddress=function(e){var r=(0,t.parseLnUrl)(e);if(r){var n=a.bech32.decode(r,2e4);return Buffer.from(a.bech32.fromWords(n.words)).toString()}var o=(0,t.parseLightningAddress)(e);if(o){var i=o.username,s=o.domain,u=s.match(/\.onion$/)?"http":"https";return"".concat(u,"://").concat(s,"/.well-known/lnurlp/").concat(i)}return null},t.parseLnUrl=function(e){if(!e)return null;var t=c.exec(e.toLowerCase());return t?t[1]:null},t.isLnurl=function(e){return!!e&&c.test(e.toLowerCase())},t.isLightningAddress=function(e){return!!e&&f.test(e.toLowerCase())},t.parseLightningAddress=function(e){if(!e)return null;var t=f.exec(e.toLowerCase());return t?{username:t[1],domain:t[2]}:null},t.isUrl=function(e){if(!e)return!1;try{return!!new s.URL(e)}catch(e){return!1}},t.isOnionUrl=function(e){return(0,t.isUrl)(e)&&l.test(e.toLowerCase())},t.checkedToSats=function(e){return e&&e>=0?(0,t.toSats)(e):null},t.toSats=function(e){return e},t.isValidAmount=function(e){var t=e.amount,r=e.min,n=e.max,o=t>0&&t>=r&&t<=n;return o&&r===n?t===r:o},t.getJson=function(e){var t=e.url,r=e.params;return n(void 0,void 0,void 0,(function(){return o(this,(function(e){return[2,u.default.get(t,{params:r}).then((function(e){if("ERROR"===e.data.status)throw new Error(e.data.reason+"");return e.data}))]}))}))}},525:()=>{}},t={},function r(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n].call(i.exports,i,i.exports,r),i.exports}(432);var e,t}));