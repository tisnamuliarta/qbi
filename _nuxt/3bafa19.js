(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{612:function(f,o,t){"use strict";var i=t(1),d=t(33),l=t.n(d),O=t(52),j=t.n(O),v=t(286),D=t.n(v),m=t(9),h=t.n(m),P=t(4),M=t.n(P),u=t(10),I=t.n(u),E=t(59),B=t.n(E),a=t(79),V=t.n(a),T=t(8),x=t.n(T),y=t(7),$=t.n(y),L=t(12),b=t.n(L),A=t(13),G=t.n(A),K=t(5),R=t(99),U=t(118);function g(r,_){var s=Object.keys(r);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(r);_&&(e=e.filter(function(n){return Object.getOwnPropertyDescriptor(r,n).enumerable})),s.push.apply(s,e)}return s}function W(r){for(var _=1;_<arguments.length;_++){var s=arguments[_]!=null?arguments[_]:{};_%2?g(Object(s),!0).forEach(function(e){Object(i.a)(r,e,s[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(s)):g(Object(s)).forEach(function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(s,e))})}return r}o.a=Object(K.a)(R.a,Object(U.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(_){var s=Object.values(_).includes(!0);this.$emit("input",!s)},deep:!0,immediate:!0}},methods:{watchInput:function(_){var s=this,e=function(C){return C.$watch("hasError",function(p){s.$set(s.errorBag,C._uid,p)},{immediate:!0})},n={_uid:_._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=_.$watch("shouldValidate",function(c){!c||s.errorBag.hasOwnProperty(_._uid)||(n.valid=e(_))}):n.valid=e(_),n},validate:function(){return this.inputs.filter(function(_){return!_.validate(!0)}).length===0},reset:function(){this.inputs.forEach(function(_){return _.reset()}),this.resetErrorBag()},resetErrorBag:function(){var _=this;this.lazyValidation&&setTimeout(function(){_.errorBag={}},0)},resetValidation:function(){this.inputs.forEach(function(_){return _.resetValidation()}),this.resetErrorBag()},register:function(_){this.inputs.push(_),this.watchers.push(this.watchInput(_))},unregister:function(_){var s=this.inputs.find(function(n){return n._uid===_._uid});if(!!s){var e=this.watchers.find(function(n){return n._uid===s._uid});e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter(function(n){return n._uid!==s._uid}),this.inputs=this.inputs.filter(function(n){return n._uid!==s._uid}),this.$delete(this.errorBag,s._uid)}}},render:function(_){var s=this;return _("form",{staticClass:"v-form",attrs:W({novalidate:!0},this.attrs$),on:{submit:function(n){return s.$emit("submit",n)}}},this.$slots.default)}})},615:function(f,o,t){"use strict";var i=t(281),d=t.n(i),l=t(282);o.a=Object(l.a)("layout")},617:function(f,o,t){"use strict";var i=t(281),d=t.n(i),l=t(282);o.a=Object(l.a)("flex")},892:function(f,o,t){"use strict";t.r(o);var i=function(){var E=this,B=E.$createElement,a=E._self._c||B;return a("v-form",{staticClass:"pt-2"},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{staticClass:"d-flex",attrs:{md12:""}},[a("v-layout",{attrs:{wrap:""}},[a("v-flex",{staticClass:"pa-1 mb-1",attrs:{md12:""}},[a("v-text-field",{attrs:{label:"General Name",placeholder:"Product Name",outlined:"",dense:"","hide-details":"auto"}})],1)],1)],1)],1)],1)},d=[],l={name:"EmailSetup"},O=l,j=t(50),v=t(51),D=t.n(v),m=t(617),h=t(612),P=t(615),M=t(570),u=Object(j.a)(O,i,d,!1,null,null,null),I=o.default=u.exports;D()(u,{VFlex:m.a,VForm:h.a,VLayout:P.a,VTextField:M.a})}}]);