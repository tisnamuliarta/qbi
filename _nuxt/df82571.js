(window.webpackJsonp=window.webpackJsonp||[]).push([[317],{578:function(O,w,y){"use strict";y.r(w),y.d(w,"Workbox",function(){return R}),y.d(w,"messageSW",function(){return j});try{self["workbox:window:5.1.4"]&&_()}catch(e){}function j(e,n){return new Promise(function(r){var i=new MessageChannel;i.port1.onmessage=function(v){r(v.data)},e.postMessage(n,[i.port2])})}function k(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function L(e,n){(n==null||n>e.length)&&(n=e.length);for(var r=0,i=new Array(n);r<n;r++)i[r]=e[r];return i}function I(e,n){var r;if(typeof Symbol=="undefined"||e[Symbol.iterator]==null){if(Array.isArray(e)||(r=function(v,m){if(v){if(typeof v=="string")return L(v,m);var l=Object.prototype.toString.call(v).slice(8,-1);return l==="Object"&&v.constructor&&(l=v.constructor.name),l==="Map"||l==="Set"?Array.from(v):l==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?L(v,m):void 0}}(e))||n&&e&&typeof e.length=="number"){r&&(e=r);var i=0;return function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}return(r=e[Symbol.iterator]()).next.bind(r)}try{self["workbox:core:5.1.4"]&&_()}catch(e){}var P=function(){var e=this;this.promise=new Promise(function(n,r){e.resolve=n,e.reject=r})};function b(e,n){var r=location.href;return new URL(e,r).href===new URL(n,r).href}var d=function(e,n){this.type=e,Object.assign(this,n)};function g(e,n,r){return r?n?n(e):e:(e&&e.then||(e=Promise.resolve(e)),n?e.then(n):e)}function A(){}var R=function(e){var n,r;function i(c,u){var t,o;return u===void 0&&(u={}),(t=e.call(this)||this).t={},t.i=0,t.o=new P,t.u=new P,t.s=new P,t.v=0,t.h=new Set,t.l=function(){var s=t.m,a=s.installing;t.i>0||!b(a.scriptURL,t.g)||performance.now()>t.v+6e4?(t.p=a,s.removeEventListener("updatefound",t.l)):(t.P=a,t.h.add(a),t.o.resolve(a)),++t.i,a.addEventListener("statechange",t.S)},t.S=function(s){var a=t.m,f=s.target,p=f.state,E=f===t.p,U=E?"external":"",S={sw:f,originalEvent:s};!E&&t.j&&(S.isUpdate=!0),t.dispatchEvent(new d(U+p,S)),p==="installed"?t.A=self.setTimeout(function(){p==="installed"&&a.waiting===f&&t.dispatchEvent(new d(U+"waiting",S))},200):p==="activating"&&(clearTimeout(t.A),E||t.u.resolve(f))},t.O=function(s){var a=t.P;a===navigator.serviceWorker.controller&&(t.dispatchEvent(new d("controlling",{sw:a,originalEvent:s,isUpdate:t.j})),t.s.resolve(a))},t.U=(o=function(s){var a=s.data,f=s.source;return g(t.getSW(),function(){t.h.has(f)&&t.dispatchEvent(new d("message",{data:a,sw:f,originalEvent:s}))})},function(){for(var s=[],a=0;a<arguments.length;a++)s[a]=arguments[a];try{return Promise.resolve(o.apply(this,s))}catch(f){return Promise.reject(f)}}),t.g=c,t.t=u,navigator.serviceWorker.addEventListener("message",t.U),t}r=e,(n=i).prototype=Object.create(r.prototype),n.prototype.constructor=n,n.__proto__=r;var v,m,l,h=i.prototype;return h.register=function(c){var u=(c===void 0?{}:c).immediate,t=u!==void 0&&u;try{var o=this;return function(s,a){var f=s();return f&&f.then?f.then(a):a(f)}(function(){if(!t&&document.readyState!=="complete")return W(new Promise(function(s){return window.addEventListener("load",s)}))},function(){return o.j=Boolean(navigator.serviceWorker.controller),o.I=o.M(),g(o.R(),function(s){o.m=s,o.I&&(o.P=o.I,o.u.resolve(o.I),o.s.resolve(o.I),o.I.addEventListener("statechange",o.S,{once:!0}));var a=o.m.waiting;return a&&b(a.scriptURL,o.g)&&(o.P=a,Promise.resolve().then(function(){o.dispatchEvent(new d("waiting",{sw:a,wasWaitingBeforeRegister:!0}))}).then(function(){})),o.P&&(o.o.resolve(o.P),o.h.add(o.P)),o.m.addEventListener("updatefound",o.l),navigator.serviceWorker.addEventListener("controllerchange",o.O,{once:!0}),o.m})})}catch(s){return Promise.reject(s)}},h.update=function(){try{return this.m?W(this.m.update()):void 0}catch(c){return Promise.reject(c)}},h.getSW=function(){try{return this.P!==void 0?this.P:this.o.promise}catch(c){return Promise.reject(c)}},h.messageSW=function(c){try{return g(this.getSW(),function(u){return j(u,c)})}catch(u){return Promise.reject(u)}},h.M=function(){var c=navigator.serviceWorker.controller;return c&&b(c.scriptURL,this.g)?c:void 0},h.R=function(){try{var c=this;return function(u,t){try{var o=u()}catch(s){return t(s)}return o&&o.then?o.then(void 0,t):o}(function(){return g(navigator.serviceWorker.register(c.g,c.t),function(u){return c.v=performance.now(),u})},function(u){throw u})}catch(u){return Promise.reject(u)}},v=i,(m=[{key:"active",get:function(){return this.u.promise}},{key:"controlling",get:function(){return this.s.promise}}])&&k(v.prototype,m),l&&k(v,l),i}(function(){function e(){this.k=new Map}var n=e.prototype;return n.addEventListener=function(r,i){this.B(r).add(i)},n.removeEventListener=function(r,i){this.B(r).delete(i)},n.dispatchEvent=function(r){r.target=this;for(var i,v=I(this.B(r.type));!(i=v()).done;)(0,i.value)(r)},n.B=function(r){return this.k.has(r)||this.k.set(r,new Set),this.k.get(r)},e}());function W(e,n){if(!n)return e&&e.then?e.then(A):Promise.resolve()}}}]);
