(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{615:function(c,o,t){"use strict";var i=t(284),d=t.n(i),l=t(285);o.a=Object(l.a)("layout")},622:function(c,o,t){"use strict";var i=t(284),d=t.n(i),l=t(285);o.a=Object(l.a)("flex")},625:function(c,o,t){"use strict";var i=t(2),d=t(33),l=t.n(d),f=t(52),P=t.n(f),O=t(288),j=t.n(O),v=t(9),D=t.n(v),m=t(4),h=t.n(m),u=t(10),I=t.n(u),M=t(59),B=t.n(M),a=t(79),V=t.n(a),T=t(8),x=t.n(T),y=t(7),b=t.n(y),L=t(12),G=t.n(L),A=t(13),$=t.n(A),K=t(5),R=t(99),U=t(118);function g(r,_){var s=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);_&&(e=e.filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})),s.push.apply(s,e)}return s}function W(r){for(var _=1;_<arguments.length;_++){var s=arguments[_]!=null?arguments[_]:{};_%2?g(Object(s),!0).forEach(function(e){Object(i.a)(r,e,s[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(s)):g(Object(s)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(s,e))})}return r}o.a=Object(K.a)(R.a,Object(U.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(_){var s=Object.values(_).includes(!0);this.$emit("input",!s)},deep:!0,immediate:!0}},methods:{watchInput:function(_){var s=this,e=function(C){return C.$watch("hasError",function(p){s.$set(s.errorBag,C._uid,p)},{immediate:!0})},n={_uid:_._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=_.$watch("shouldValidate",function(E){!E||s.errorBag.hasOwnProperty(_._uid)||(n.valid=e(_))}):n.valid=e(_),n},validate:function(){return this.inputs.filter(function(_){return!_.validate(!0)}).length===0},reset:function(){this.inputs.forEach(function(_){return _.reset()}),this.resetErrorBag()},resetErrorBag:function(){var _=this;this.lazyValidation&&setTimeout(function(){_.errorBag={}},0)},resetValidation:function(){this.inputs.forEach(function(_){return _.resetValidation()}),this.resetErrorBag()},register:function(_){this.inputs.push(_),this.watchers.push(this.watchInput(_))},unregister:function(_){var s=this.inputs.find(function(n){return n._uid===_._uid});if(!!s){var e=this.watchers.find(function(n){return n._uid===s._uid});e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter(function(n){return n._uid!==s._uid}),this.inputs=this.inputs.filter(function(n){return n._uid!==s._uid}),this.$delete(this.errorBag,s._uid)}}},render:function(_){var s=this;return _("form",{staticClass:"v-form",attrs:W({novalidate:!0},this.attrs$),on:{submit:function(n){return s.$emit("submit",n)}}},this.$slots.default)}})},770:function(c,o,t){"use strict";t.r(o);var i=function(){var B=this,a=B._self._c;return a("v-form",{staticClass:"pt-2"},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{staticClass:"d-flex",attrs:{md12:""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{staticClass:"pa-1 mb-1",attrs:{md12:""}},[a("v-text-field",{attrs:{label:"General Name",placeholder:"Product Name",outlined:"",dense:"","hide-details":"auto"}})],1)],1)],1)],1)],1)},d=[],l={name:"EmailSetup"},f=l,P=t(50),O=t(51),j=t.n(O),v=t(622),D=t(625),m=t(615),h=t(574),u=Object(P.a)(f,i,d,!1,null,null,null),I=o.default=u.exports;j()(u,{VFlex:v.a,VForm:D.a,VLayout:m.a,VTextField:h.a})}}]);
