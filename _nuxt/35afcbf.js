(window.webpackJsonp=window.webpackJsonp||[]).push([[103,49,50],{1124:function(f,u,t){"use strict";t.r(u);var o=function(){var e=this,s=e._self._c;return s("v-row",{attrs:{"no-gutters":""}},[s("v-col",{staticClass:"pa-1",attrs:{cols:"12",md:"2"}},[s("span",{staticClass:"text-subtitle-1"},[e._v("Categories")])]),e._v(" "),s("v-col",{staticClass:"pa-1",attrs:{cols:"12",md:"8"}},[e.companyNameView?s("FormSectionView",{scopedSlots:e._u([{key:"content",fn:function(){return[s("v-row",{attrs:{"no-gutters":""},on:{click:function(A){e.companyNameView=!1}}},[s("v-col",{staticClass:"pa-2 font-weight-medium",attrs:{cols:"12",md:"4"}},[e._v(`
              Track Classes
            `)]),e._v(" "),s("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"8"}},[s("span",{staticClass:"text-subtitle-2",domProps:{textContent:e._s(e.$formatter.formatCheckBox(e.form.advance_track_classes))}})]),e._v(" "),s("v-col",{staticClass:"pa-2 font-weight-medium",attrs:{cols:"12",md:"4"}},[e._v(`
              Track Locations
            `)]),e._v(" "),s("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"8"}},[s("span",{staticClass:"text-subtitle-2",domProps:{textContent:e._s(e.$formatter.formatCheckBox(e.form.advance_track_locations))}})])],1)]},proxy:!0}],null,!1,1493299644)}):s("FormSectionEdit",{ref:"sectionEdit",on:{save:e.save,cancel:e.cancel},scopedSlots:e._u([{key:"content",fn:function(){return[s("v-row",{attrs:{"no-gutters":""}},[s("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"5"}},[s("v-checkbox",{attrs:{label:"Track Classes","hide-details":"auto"},model:{value:e.form.advance_track_classes,callback:function(A){e.$set(e.form,"advance_track_classes",A)},expression:"form.advance_track_classes"}})],1),e._v(" "),s("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"7"}},[s("span",{staticClass:"text-subtitle-2",domProps:{textContent:e._s(e.$formatter.formatCheckBox(e.form.advance_track_classes))}})]),e._v(" "),s("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"5"}},[s("v-checkbox",{attrs:{label:"Track Locations","hide-details":"auto"},model:{value:e.form.advance_track_locations,callback:function(A){e.$set(e.form,"advance_track_locations",A)},expression:"form.advance_track_locations"}})],1),e._v(" "),s("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"7"}},[s("span",{staticClass:"text-subtitle-2",domProps:{textContent:e._s(e.$formatter.formatCheckBox(e.form.advance_track_locations))}})])],1)]},proxy:!0}])})],1),e._v(" "),e.companyNameView?s("v-col",{staticClass:"pa-1 text-right",attrs:{cols:"12",md:"1"}},[s("v-btn",{attrs:{icon:"",small:""},on:{click:function(T){e.companyNameView=!1}}},[s("v-icon",[e._v("mdi-pencil")])],1)],1):e._e()],1)},d=[],M={props:{form:{type:Object,default:function(){return{}}},logo:{type:String,default:""}},data:function(){return{companyNameView:!0,itemPaymentTerm:[],itemDeliveryMethod:["Print Later","Send Later","None"]}},methods:{save:function(){this.$refs.sectionEdit.save(this.form),this.companyNameView=!0},cancel:function(){this.companyNameView=!0}}},D=M,y=t(50),R=t(51),C=t.n(R),B=t(164),g=t(635),L=t(585),I=t(247),l=t(599),a=Object(y.a)(D,o,d,!1,null,null,null),m=u.default=a.exports;C()(a,{FormSectionView:t(621).default,FormSectionEdit:t(620).default}),C()(a,{VBtn:B.a,VCheckbox:g.a,VCol:L.a,VIcon:I.a,VRow:l.a})},599:function(f,u,t){"use strict";var o=t(7),d=t.n(o),M=t(9),D=t.n(M),y=t(12),R=t.n(y),C=t(13),B=t.n(C),g=t(2),L=t(4),I=t.n(L),l=t(33),a=t.n(l),m=t(52),_=t.n(m),e=t(28),s=t.n(e),K=t(8),T=t.n(K),A=t(21),z=t.n(A),N=t(65),G=t.n(N),V=t(269),J=t.n(V),S=t(32),b=t.n(S),W=t(270),v=t.n(W),h=t(271),r=t.n(h),n=t(272),c=t.n(n),p=t(273),j=t.n(p),U=t(274),X=t.n(U),H=t(275),At=t.n(H),ct=t(276),Lt=t.n(ct),ut=t(277),Rt=t.n(ut),dt=t(278),Tt=t.n(dt),vt=t(279),Kt=t.n(vt),Et=t(280),Wt=t.n(Et),ft=t(281),Ut=t.n(ft),mt=t(282),xt=t.n(mt),pt=t(34),Vt=t.n(pt),Ot=t(10),St=t.n(Ot),ht=t(283),bt=t.n(ht),jt=t(3),Pt=t(78),Dt=t(1);function q(P,E){var O=Object.keys(P);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(P);E&&(i=i.filter(function($){return Object.getOwnPropertyDescriptor(P,$).enumerable})),O.push.apply(O,i)}return O}function Q(P){for(var E=1;E<arguments.length;E++){var O=arguments[E]!=null?arguments[E]:{};E%2?q(Object(O),!0).forEach(function(i){Object(g.a)(P,i,O[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(P,Object.getOwnPropertyDescriptors(O)):q(Object(O)).forEach(function(i){Object.defineProperty(P,i,Object.getOwnPropertyDescriptor(O,i))})}return P}var Mt=["sm","md","lg","xl"],Y=["start","end","center"];function Z(P,E){return Mt.reduce(function(O,i){return O[P+Object(Dt.I)(i)]=E(),O},{})}var tt=function(E){return[].concat(Y,["baseline","stretch"]).includes(E)},et=Z("align",function(){return{type:String,default:null,validator:tt}}),st=function(E){return[].concat(Y,["space-between","space-around"]).includes(E)},nt=Z("justify",function(){return{type:String,default:null,validator:st}}),ot=function(E){return[].concat(Y,["space-between","space-around","stretch"]).includes(E)},_t=Z("alignContent",function(){return{type:String,default:null,validator:ot}}),rt={align:Object.keys(et),justify:Object.keys(nt),alignContent:Object.keys(_t)},Ct={align:"align",justify:"justify",alignContent:"align-content"};function gt(P,E,O){var i=Ct[P];if(O!=null){if(E){var $=E.replace(P,"");i+="-".concat($)}return i+="-".concat(O),i.toLowerCase()}}var at=new Map;u.a=jt.default.extend({name:"v-row",functional:!0,props:Q(Q(Q({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:tt}},et),{},{justify:{type:String,default:null,validator:st}},nt),{},{alignContent:{type:String,default:null,validator:ot}},_t),render:function(E,O){var i=O.props,$=O.data,It=O.children,w="";for(var yt in i)w+=String(i[yt]);var x=at.get(w);return x||function(){var F;x=[];var k;for(k in rt)rt[k].forEach(function(it){var Bt=i[it],lt=gt(k,it,Bt);lt&&x.push(lt)});x.push((F={"no-gutters":i.noGutters,"row--dense":i.dense},Object(g.a)(F,"align-".concat(i.align),i.align),Object(g.a)(F,"justify-".concat(i.justify),i.justify),Object(g.a)(F,"align-content-".concat(i.alignContent),i.alignContent),F)),at.set(w,x)}(),E(i.tag,Object(Pt.a)($,{staticClass:"row",class:x}),It)}})},609:function(f,u,t){"use strict";var o=t(100),d=t(3);u.a=d.default.extend({name:"rippleable",directives:{ripple:o.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var D=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.ripple?(D.staticClass="v-input--selection-controls__ripple",D.directives=D.directives||[],D.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",D)):null}}})},611:function(f,u,t){var o=t(613);o.__esModule&&(o=o.default),typeof o=="string"&&(o=[[f.i,o,""]]),o.locals&&(f.exports=o.locals);var d=t(15).default,M=d("46813077",o,!0,{sourceMap:!1})},612:function(f,u,t){"use strict";t.d(u,"b",function(){return I});var o=t(4),d=t.n(o),M=t(70),D=t.n(M),y=t(9),R=t.n(y),C=t(89),B=t(609),g=t(289),L=t(5);function I(l){l.preventDefault()}u.a=Object(L.a)(C.a,B.a,g.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(!!this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return this.multiple===!0||this.multiple===null&&Array.isArray(this.internalValue)},isActive:function(){var a=this,m=this.value,_=this.internalValue;return this.isMultiple?Array.isArray(_)?_.some(function(e){return a.valueComparator(e,m)}):!1:this.trueValue===void 0||this.falseValue===void 0?m?this.valueComparator(m,_):Boolean(_):this.valueComparator(_,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return!this.isDisabled&&!this.validationState?void 0:this.validationState}},watch:{inputValue:function(a){this.lazyValue=a,this.hasColor=a}},methods:{genLabel:function(){var a=C.a.options.methods.genLabel.call(this);return a&&(a.data.on={click:I},a)},genInput:function(a,m){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:a,type:a},m),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:I},ref:"input"})},onClick:function(a){this.onChange(),this.$emit("click",a)},onChange:function(){var a=this;if(!!this.isInteractive){var m=this.value,_=this.internalValue;if(this.isMultiple){Array.isArray(_)||(_=[]);var e=_.length;_=_.filter(function(s){return!a.valueComparator(s,m)}),_.length===e&&_.push(m)}else this.trueValue!==void 0&&this.falseValue!==void 0?_=this.valueComparator(_,this.trueValue)?this.falseValue:this.trueValue:m?_=this.valueComparator(_,m)?null:m:_=!_;this.validate(!0,_),this.internalValue=_,this.hasColor=_}},onFocus:function(a){this.isFocused=!0,this.$emit("focus",a)},onBlur:function(a){this.isFocused=!1,this.$emit("blur",a)},onKeydown:function(a){}}})},613:function(f,u,t){var o=t(14),d=o(!1);d.push([f.i,'.v-input--selection-controls{margin-top:4px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-top:0;margin-bottom:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;width:24px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;position:absolute;transition:inherit;width:34px;left:-12px;top:calc(50% - 24px);margin:7px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";position:absolute;opacity:.2;left:0;right:0;top:0;transform-origin:center center;transform:scale(.2);transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{width:28px;height:28px;left:-9px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:inherit}.v-input--selection-controls.v-input--is-disabled:not(.v-input--is-readonly){pointer-events:none}.v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),f.exports=d},617:function(f,u,t){var o=t(618);o.__esModule&&(o=o.default),typeof o=="string"&&(o=[[f.i,o,""]]),o.locals&&(f.exports=o.locals);var d=t(15).default,M=d("93dca520",o,!0,{sourceMap:!1})},618:function(f,u,t){var o=t(14),d=o(!1);d.push([f.i,".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}.v-input--checkbox.v-input--dense{margin-top:4px}",""]),f.exports=d},620:function(f,u,t){"use strict";t.r(u);var o=function(){var e=this,s=e._self._c;return s("v-card",{attrs:{elevation:"0"}},[s("v-form",[e._t("content")],2),e._v(" "),s("v-card-actions",[s("v-spacer"),e._v(" "),s("v-btn",{attrs:{outlined:"",small:""},on:{click:e.cancel}},[e._v(" Cancel ")]),e._v(" "),s("v-btn",{attrs:{color:"primary",small:""},on:{click:e.processData}},[e._v(" Save ")])],1)],1)},d=[],M={data:function(){return{tabValue:"company",loadingButton:!1}},methods:{save:function(e){var s=this,K={},T="/api/settings";this.loadingButton=!0,this.$axios.post(T,e).then(function(A){s.loadingButton=!1,s.tabValue==="company"&&(s.$nuxt.$emit("getLogo"),s.$nuxt.$emit("getCompany"))}).catch(function(A){s.loadingButton=!1,s.$swal({type:"error",title:"Error",text:A.response.data.message})})},cancel:function(){this.$emit("cancel")},processData:function(){this.$emit("save")}}},D=M,y=t(50),R=t(51),C=t.n(R),B=t(164),g=t(248),L=t(88),I=t(625),l=t(593),a=Object(y.a)(D,o,d,!1,null,null,null),m=u.default=a.exports;C()(a,{VBtn:B.a,VCard:g.a,VCardActions:L.a,VForm:I.a,VSpacer:l.a})},621:function(f,u,t){"use strict";t.r(u);var o=function(){var I=this,l=I._self._c;return l("v-card",{staticStyle:{cursor:"pointer"},attrs:{elevation:"0"}},[I._t("content")],2)},d=[],M=t(50),D=t(51),y=t.n(D),R=t(248),C={},B=Object(M.a)(C,o,d,!1,null,null,null),g=u.default=B.exports;y()(B,{VCard:R.a})},625:function(f,u,t){"use strict";var o=t(2),d=t(33),M=t.n(d),D=t(52),y=t.n(D),R=t(288),C=t.n(R),B=t(9),g=t.n(B),L=t(4),I=t.n(L),l=t(10),a=t.n(l),m=t(59),_=t.n(m),e=t(79),s=t.n(e),K=t(8),T=t.n(K),A=t(7),z=t.n(A),N=t(12),G=t.n(N),V=t(13),J=t.n(V),S=t(5),b=t(99),W=t(118);function v(r,n){var c=Object.keys(r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(r);n&&(p=p.filter(function(j){return Object.getOwnPropertyDescriptor(r,j).enumerable})),c.push.apply(c,p)}return c}function h(r){for(var n=1;n<arguments.length;n++){var c=arguments[n]!=null?arguments[n]:{};n%2?v(Object(c),!0).forEach(function(p){Object(o.a)(r,p,c[p])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(c)):v(Object(c)).forEach(function(p){Object.defineProperty(r,p,Object.getOwnPropertyDescriptor(c,p))})}return r}u.a=Object(S.a)(b.a,Object(W.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(n){var c=Object.values(n).includes(!0);this.$emit("input",!c)},deep:!0,immediate:!0}},methods:{watchInput:function(n){var c=this,p=function(X){return X.$watch("hasError",function(H){c.$set(c.errorBag,X._uid,H)},{immediate:!0})},j={_uid:n._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?j.shouldValidate=n.$watch("shouldValidate",function(U){!U||c.errorBag.hasOwnProperty(n._uid)||(j.valid=p(n))}):j.valid=p(n),j},validate:function(){return this.inputs.filter(function(n){return!n.validate(!0)}).length===0},reset:function(){this.inputs.forEach(function(n){return n.reset()}),this.resetErrorBag()},resetErrorBag:function(){var n=this;this.lazyValidation&&setTimeout(function(){n.errorBag={}},0)},resetValidation:function(){this.inputs.forEach(function(n){return n.resetValidation()}),this.resetErrorBag()},register:function(n){this.inputs.push(n),this.watchers.push(this.watchInput(n))},unregister:function(n){var c=this.inputs.find(function(j){return j._uid===n._uid});if(!!c){var p=this.watchers.find(function(j){return j._uid===c._uid});p&&(p.valid(),p.shouldValidate()),this.watchers=this.watchers.filter(function(j){return j._uid!==c._uid}),this.inputs=this.inputs.filter(function(j){return j._uid!==c._uid}),this.$delete(this.errorBag,c._uid)}}},render:function(n){var c=this;return n("form",{staticClass:"v-form",attrs:h({novalidate:!0},this.attrs$),on:{submit:function(j){return c.$emit("submit",j)}}},this.$slots.default)}})},635:function(f,u,t){"use strict";var o=t(8),d=t.n(o),M=t(7),D=t.n(M),y=t(9),R=t.n(y),C=t(12),B=t.n(C),g=t(10),L=t.n(g),I=t(13),l=t.n(I),a=t(90),m=t(2),_=t(4),e=t.n(_),s=t(70),K=t.n(s),T=t(617),A=t.n(T),z=t(611),N=t.n(z),G=t(45),V=t(89),J=t(612),S=["title"];function b(v,h){var r=Object.keys(v);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(v);h&&(n=n.filter(function(c){return Object.getOwnPropertyDescriptor(v,c).enumerable})),r.push.apply(r,n)}return r}function W(v){for(var h=1;h<arguments.length;h++){var r=arguments[h]!=null?arguments[h]:{};h%2?b(Object(r),!0).forEach(function(n){Object(m.a)(v,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(v,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach(function(n){Object.defineProperty(v,n,Object.getOwnPropertyDescriptor(r,n))})}return v}u.a=J.a.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return W(W({},V.a.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!(this.isDisabled&&!this.inputIndeterminate)){if(this.hasError&&this.shouldValidate)return"error";if(this.hasSuccess)return"success";if(this.hasColor!==null)return this.computedColor}}},watch:{indeterminate:function(h){var r=this;this.$nextTick(function(){return r.inputIndeterminate=h})},inputIndeterminate:function(h){this.$emit("update:indeterminate",h)},isActive:function(){!this.indeterminate||(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var h=this.attrs$,r=h.title,n=Object(a.a)(h,S);return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(G.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",W(W({},n),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})}}]);
