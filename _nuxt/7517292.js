(window.webpackJsonp=window.webpackJsonp||[]).push([[88,38,39],{1155:function(p,u,t){"use strict";t.r(u);var o=function(){var e=this,U=e.$createElement,_=e._self._c||U;return _("v-row",{attrs:{"no-gutters":""}},[_("v-col",{staticClass:"pa-1",attrs:{cols:"12",md:"2"}},[_("span",{staticClass:"text-subtitle-1"},[e._v("Online Delivery")])]),e._v(" "),_("v-col",{staticClass:"pa-1",attrs:{cols:"12",md:"8"}},[e.companyNameView?_("FormSectionView",{scopedSlots:e._u([{key:"content",fn:function(){return[_("v-row",{attrs:{"no-gutters":""},on:{click:function(K){e.companyNameView=!1}}},[_("v-col",{staticClass:"pa-2 font-weight-medium",attrs:{cols:"12",md:"4"}},[e._v(`
            Email Option for sales form
          `)]),e._v(" "),_("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"8"}},[_("span",{staticClass:"text-subtitle-2",domProps:{textContent:e._s(e.form.sales_email_details)}})]),e._v(" "),_("v-col",{staticClass:"pa-2 font-weight-medium",attrs:{cols:"12",md:"4"}},[e._v(`
            PDF Attachment
          `)]),e._v(" "),_("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"8"}},[_("span",{staticClass:"text-subtitle-2",domProps:{textContent:e._s(e.$formatter.formatCheckBox(e.form.sales_email_attachment))}})])],1)]},proxy:!0}],null,!1,2429920413)}):_("FormSectionEdit",{ref:"sectionEdit",on:{save:e.save,cancel:e.cancel},scopedSlots:e._u([{key:"content",fn:function(){return[_("v-row",{attrs:{"no-gutters":""}},[_("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"5"}},[_("v-list-item",{staticClass:"pa-0",attrs:{"two-line":""}},[_("v-list-item-content",[_("v-list-item-title",[e._v("Email Option for sales form")])],1)],1)],1),e._v(" "),_("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"7"}},[_("v-select",{attrs:{label:"Email Option for sales form",items:e.itemDeliveryMethod,filled:"",dense:"","hide-details":"auto"},model:{value:e.form.sales_email_details,callback:function(K){e.$set(e.form,"sales_email_details",K)},expression:"form.sales_email_details"}})],1),e._v(" "),_("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"5"}},[_("v-checkbox",{attrs:{label:"PDF Attachment","hide-details":"auto"},model:{value:e.form.sales_email_attachment,callback:function(K){e.$set(e.form,"sales_email_attachment",K)},expression:"form.sales_email_attachment"}})],1),e._v(" "),_("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"7"}},[_("span",{staticClass:"text-subtitle-2",domProps:{textContent:e._s(e.$formatter.formatCheckBox(e.form.sales_email_attachment))}})])],1)]},proxy:!0}])})],1),e._v(" "),e.companyNameView?_("v-col",{staticClass:"pa-1 text-right",attrs:{cols:"12",md:"1"}},[_("v-btn",{attrs:{icon:"",small:""},on:{click:function(K){e.companyNameView=!1}}},[_("v-icon",[e._v("mdi-pencil")])],1)],1):e._e()],1)},d=[],g={props:{form:{type:Object,default:function(){return{}}},logo:{type:String,default:""}},data:function(){return{companyNameView:!0,itemPaymentTerm:[],itemDeliveryMethod:["Show short summary in email","Show full details in email"]}},methods:{save:function(){this.$refs.sectionEdit.save(this.form),this.companyNameView=!0},cancel:function(){this.companyNameView=!0}}},M=g,L=t(50),T=t(51),I=t.n(T),R=t(164),y=t(623),B=t(581),A=t(246),l=t(165),a=t(34),m=t(595),n=t(637),C=Object(L.a)(M,o,d,!1,null,null,null),E=u.default=C.exports;I()(C,{FormSectionView:t(611).default,FormSectionEdit:t(610).default}),I()(C,{VBtn:R.a,VCheckbox:y.a,VCol:B.a,VIcon:A.a,VListItem:l.a,VListItemContent:a.b,VListItemTitle:a.d,VRow:m.a,VSelect:n.a})},595:function(p,u,t){"use strict";var o=t(7),d=t.n(o),g=t(9),M=t.n(g),L=t(12),T=t.n(L),I=t(13),R=t.n(I),y=t(1),B=t(4),A=t.n(B),l=t(33),a=t.n(l),m=t(52),n=t.n(m),C=t(27),E=t.n(C),e=t(8),U=t.n(e),_=t(21),K=t.n(_),z=t(65),G=t.n(z),S=t(266),J=t.n(S),b=t(32),$=t.n(b),W=t(267),v=t.n(W),j=t(268),r=t.n(j),s=t(269),c=t.n(s),O=t(270),P=t.n(O),x=t(271),X=t.n(x),H=t(272),At=t.n(H),ct=t(273),Lt=t.n(ct),ut=t(274),Rt=t.n(ut),dt=t(275),Tt=t.n(dt),vt=t(276),Kt=t.n(vt),mt=t(277),Wt=t.n(mt),Et=t(278),Ut=t.n(Et),ft=t(279),xt=t.n(ft),pt=t(35),Vt=t.n(pt),Ot=t(10),St=t.n(Ot),ht=t(280),bt=t.n(ht),jt=t(2),Pt=t(78),Dt=t(0);function q(D,f){var h=Object.keys(D);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(D);f&&(i=i.filter(function(F){return Object.getOwnPropertyDescriptor(D,F).enumerable})),h.push.apply(h,i)}return h}function Q(D){for(var f=1;f<arguments.length;f++){var h=arguments[f]!=null?arguments[f]:{};f%2?q(Object(h),!0).forEach(function(i){Object(y.a)(D,i,h[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(D,Object.getOwnPropertyDescriptors(h)):q(Object(h)).forEach(function(i){Object.defineProperty(D,i,Object.getOwnPropertyDescriptor(h,i))})}return D}var Mt=["sm","md","lg","xl"],Y=["start","end","center"];function Z(D,f){return Mt.reduce(function(h,i){return h[D+Object(Dt.H)(i)]=f(),h},{})}var tt=function(f){return[].concat(Y,["baseline","stretch"]).includes(f)},et=Z("align",function(){return{type:String,default:null,validator:tt}}),st=function(f){return[].concat(Y,["space-between","space-around"]).includes(f)},nt=Z("justify",function(){return{type:String,default:null,validator:st}}),ot=function(f){return[].concat(Y,["space-between","space-around","stretch"]).includes(f)},_t=Z("alignContent",function(){return{type:String,default:null,validator:ot}}),rt={align:Object.keys(et),justify:Object.keys(nt),alignContent:Object.keys(_t)},Ct={align:"align",justify:"justify",alignContent:"align-content"};function gt(D,f,h){var i=Ct[D];if(h!=null){if(f){var F=f.replace(D,"");i+="-".concat(F)}return i+="-".concat(h),i.toLowerCase()}}var at=new Map;u.a=jt.default.extend({name:"v-row",functional:!0,props:Q(Q(Q({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:tt}},et),{},{justify:{type:String,default:null,validator:st}},nt),{},{alignContent:{type:String,default:null,validator:ot}},_t),render:function(f,h){var i=h.props,F=h.data,It=h.children,w="";for(var yt in i)w+=String(i[yt]);var V=at.get(w);return V||function(){var N;V=[];var k;for(k in rt)rt[k].forEach(function(it){var Bt=i[it],lt=gt(k,it,Bt);lt&&V.push(lt)});V.push((N={"no-gutters":i.noGutters,"row--dense":i.dense},Object(y.a)(N,"align-".concat(i.align),i.align),Object(y.a)(N,"justify-".concat(i.justify),i.justify),Object(y.a)(N,"align-content-".concat(i.alignContent),i.alignContent),N)),at.set(w,V)}(),f(i.tag,Object(Pt.a)(F,{staticClass:"row",class:V}),It)}})},599:function(p,u,t){"use strict";var o=t(100),d=t(2);u.a=d.default.extend({name:"rippleable",directives:{ripple:o.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var M=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.ripple?(M.staticClass="v-input--selection-controls__ripple",M.directives=M.directives||[],M.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",M)):null}}})},602:function(p,u,t){var o=t(606);o.__esModule&&(o=o.default),typeof o=="string"&&(o=[[p.i,o,""]]),o.locals&&(p.exports=o.locals);var d=t(15).default,g=d("46813077",o,!0,{sourceMap:!1})},603:function(p,u,t){"use strict";t.d(u,"b",function(){return A});var o=t(4),d=t.n(o),g=t(70),M=t.n(g),L=t(9),T=t.n(L),I=t(89),R=t(599),y=t(287),B=t(5);function A(l){l.preventDefault()}u.a=Object(B.a)(I.a,R.a,y.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(!!this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return this.multiple===!0||this.multiple===null&&Array.isArray(this.internalValue)},isActive:function(){var a=this,m=this.value,n=this.internalValue;return this.isMultiple?Array.isArray(n)?n.some(function(C){return a.valueComparator(C,m)}):!1:this.trueValue===void 0||this.falseValue===void 0?m?this.valueComparator(m,n):Boolean(n):this.valueComparator(n,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return!this.isDisabled&&!this.validationState?void 0:this.validationState}},watch:{inputValue:function(a){this.lazyValue=a,this.hasColor=a}},methods:{genLabel:function(){var a=I.a.options.methods.genLabel.call(this);return a&&(a.data.on={click:A},a)},genInput:function(a,m){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:a,type:a},m),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:A},ref:"input"})},onClick:function(a){this.onChange(),this.$emit("click",a)},onChange:function(){var a=this;if(!!this.isInteractive){var m=this.value,n=this.internalValue;if(this.isMultiple){Array.isArray(n)||(n=[]);var C=n.length;n=n.filter(function(E){return!a.valueComparator(E,m)}),n.length===C&&n.push(m)}else this.trueValue!==void 0&&this.falseValue!==void 0?n=this.valueComparator(n,this.trueValue)?this.falseValue:this.trueValue:m?n=this.valueComparator(n,m)?null:m:n=!n;this.validate(!0,n),this.internalValue=n,this.hasColor=n}},onFocus:function(a){this.isFocused=!0,this.$emit("focus",a)},onBlur:function(a){this.isFocused=!1,this.$emit("blur",a)},onKeydown:function(a){}}})},606:function(p,u,t){var o=t(14),d=o(!1);d.push([p.i,'.v-input--selection-controls{margin-top:4px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-top:0;margin-bottom:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;width:24px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;position:absolute;transition:inherit;width:34px;left:-12px;top:calc(50% - 24px);margin:7px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";position:absolute;opacity:.2;left:0;right:0;top:0;transform-origin:center center;transform:scale(.2);transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{width:28px;height:28px;left:-9px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:inherit}.v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),p.exports=d},608:function(p,u,t){var o=t(609);o.__esModule&&(o=o.default),typeof o=="string"&&(o=[[p.i,o,""]]),o.locals&&(p.exports=o.locals);var d=t(15).default,g=d("93dca520",o,!0,{sourceMap:!1})},609:function(p,u,t){var o=t(14),d=o(!1);d.push([p.i,".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}.v-input--checkbox.v-input--dense{margin-top:4px}",""]),p.exports=d},610:function(p,u,t){"use strict";t.r(u);var o=function(){var n=this,C=n.$createElement,E=n._self._c||C;return E("v-card",{attrs:{elevation:"0"}},[E("v-form",[n._t("content")],2),n._v(" "),E("v-card-actions",[E("v-spacer"),n._v(" "),E("v-btn",{attrs:{outlined:"",small:""},on:{click:n.cancel}},[n._v(" Cancel ")]),n._v(" "),E("v-btn",{attrs:{color:"primary",small:""},on:{click:n.processData}},[n._v(" Save ")])],1)],1)},d=[],g={data:function(){return{tabValue:"company",loadingButton:!1}},methods:{save:function(C){var E=this,e={},U="/api/settings";this.loadingButton=!0,this.$axios.post(U,C).then(function(_){E.loadingButton=!1,E.tabValue==="company"&&(E.$nuxt.$emit("getLogo"),E.$nuxt.$emit("getCompany"))}).catch(function(_){E.loadingButton=!1,E.$swal({type:"error",title:"Error",text:_.response.data.message})})},cancel:function(){this.$emit("cancel")},processData:function(){this.$emit("save")}}},M=g,L=t(50),T=t(51),I=t.n(T),R=t(164),y=t(247),B=t(88),A=t(612),l=t(589),a=Object(L.a)(M,o,d,!1,null,null,null),m=u.default=a.exports;I()(a,{VBtn:R.a,VCard:y.a,VCardActions:B.a,VForm:A.a,VSpacer:l.a})},611:function(p,u,t){"use strict";t.r(u);var o=function(){var B=this,A=B.$createElement,l=B._self._c||A;return l("v-card",{staticStyle:{cursor:"pointer"},attrs:{elevation:"0"}},[B._t("content")],2)},d=[],g=t(50),M=t(51),L=t.n(M),T=t(247),I={},R=Object(g.a)(I,o,d,!1,null,null,null),y=u.default=R.exports;L()(R,{VCard:T.a})},612:function(p,u,t){"use strict";var o=t(1),d=t(33),g=t.n(d),M=t(52),L=t.n(M),T=t(286),I=t.n(T),R=t(9),y=t.n(R),B=t(4),A=t.n(B),l=t(10),a=t.n(l),m=t(59),n=t.n(m),C=t(79),E=t.n(C),e=t(8),U=t.n(e),_=t(7),K=t.n(_),z=t(12),G=t.n(z),S=t(13),J=t.n(S),b=t(5),$=t(99),W=t(118);function v(r,s){var c=Object.keys(r);if(Object.getOwnPropertySymbols){var O=Object.getOwnPropertySymbols(r);s&&(O=O.filter(function(P){return Object.getOwnPropertyDescriptor(r,P).enumerable})),c.push.apply(c,O)}return c}function j(r){for(var s=1;s<arguments.length;s++){var c=arguments[s]!=null?arguments[s]:{};s%2?v(Object(c),!0).forEach(function(O){Object(o.a)(r,O,c[O])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(c)):v(Object(c)).forEach(function(O){Object.defineProperty(r,O,Object.getOwnPropertyDescriptor(c,O))})}return r}u.a=Object(b.a)($.a,Object(W.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(s){var c=Object.values(s).includes(!0);this.$emit("input",!c)},deep:!0,immediate:!0}},methods:{watchInput:function(s){var c=this,O=function(X){return X.$watch("hasError",function(H){c.$set(c.errorBag,X._uid,H)},{immediate:!0})},P={_uid:s._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?P.shouldValidate=s.$watch("shouldValidate",function(x){!x||c.errorBag.hasOwnProperty(s._uid)||(P.valid=O(s))}):P.valid=O(s),P},validate:function(){return this.inputs.filter(function(s){return!s.validate(!0)}).length===0},reset:function(){this.inputs.forEach(function(s){return s.reset()}),this.resetErrorBag()},resetErrorBag:function(){var s=this;this.lazyValidation&&setTimeout(function(){s.errorBag={}},0)},resetValidation:function(){this.inputs.forEach(function(s){return s.resetValidation()}),this.resetErrorBag()},register:function(s){this.inputs.push(s),this.watchers.push(this.watchInput(s))},unregister:function(s){var c=this.inputs.find(function(P){return P._uid===s._uid});if(!!c){var O=this.watchers.find(function(P){return P._uid===c._uid});O&&(O.valid(),O.shouldValidate()),this.watchers=this.watchers.filter(function(P){return P._uid!==c._uid}),this.inputs=this.inputs.filter(function(P){return P._uid!==c._uid}),this.$delete(this.errorBag,c._uid)}}},render:function(s){var c=this;return s("form",{staticClass:"v-form",attrs:j({novalidate:!0},this.attrs$),on:{submit:function(P){return c.$emit("submit",P)}}},this.$slots.default)}})},623:function(p,u,t){"use strict";var o=t(8),d=t.n(o),g=t(7),M=t.n(g),L=t(9),T=t.n(L),I=t(12),R=t.n(I),y=t(10),B=t.n(y),A=t(13),l=t.n(A),a=t(90),m=t(1),n=t(4),C=t.n(n),E=t(70),e=t.n(E),U=t(608),_=t.n(U),K=t(602),z=t.n(K),G=t(45),S=t(89),J=t(603),b=["title"];function $(v,j){var r=Object.keys(v);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(v);j&&(s=s.filter(function(c){return Object.getOwnPropertyDescriptor(v,c).enumerable})),r.push.apply(r,s)}return r}function W(v){for(var j=1;j<arguments.length;j++){var r=arguments[j]!=null?arguments[j]:{};j%2?$(Object(r),!0).forEach(function(s){Object(m.a)(v,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(v,Object.getOwnPropertyDescriptors(r)):$(Object(r)).forEach(function(s){Object.defineProperty(v,s,Object.getOwnPropertyDescriptor(r,s))})}return v}u.a=J.a.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return W(W({},S.a.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!(this.isDisabled&&!this.inputIndeterminate)){if(this.hasError&&this.shouldValidate)return"error";if(this.hasSuccess)return"success";if(this.hasColor!==null)return this.computedColor}}},watch:{indeterminate:function(j){var r=this;this.$nextTick(function(){return r.inputIndeterminate=j})},inputIndeterminate:function(j){this.$emit("update:indeterminate",j)},isActive:function(){!this.indeterminate||(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var j=this.attrs$,r=j.title,s=Object(a.a)(j,b);return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(G.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",W(W({},s),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})}}]);
