(window.webpackJsonp=window.webpackJsonp||[]).push([[116,49,50],{1137:function(m,u,t){"use strict";t.r(u);var o=function(){var e=this,s=e._self._c;return s("v-row",{attrs:{"no-gutters":""}},[s("v-col",{staticClass:"pa-1",attrs:{cols:"12",md:"2"}},[s("span",{staticClass:"text-subtitle-1"},[e._v("Sales Form Content")])]),e._v(" "),s("v-col",{staticClass:"pa-1",attrs:{cols:"12",md:"8"}},[e.companyNameView?s("FormSectionView",{scopedSlots:e._u([{key:"content",fn:function(){return[s("v-row",{attrs:{"no-gutters":""},on:{click:function(M){e.companyNameView=!1}}},[s("v-col",{staticClass:"pa-2 font-weight-medium",attrs:{cols:"12",md:"4"}},[e._v(`
              Preferred invoice terms
            `)]),e._v(" "),s("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"8"}},[s("span",{staticClass:"text-subtitle-2",domProps:{textContent:e._s(e.form.sales_prefer_inv_term)}})]),e._v(" "),s("v-col",{staticClass:"pa-2 font-weight-medium",attrs:{cols:"12",md:"4"}},[e._v(`
              Preferred delivery method
            `)]),e._v(" "),s("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"8"}},[s("span",{staticClass:"text-subtitle-2",domProps:{textContent:e._s(e.form.sales_prefer_delivery_method)}})]),e._v(" "),s("v-col",{staticClass:"pa-2 font-weight-medium",attrs:{cols:"12",md:"4"}},[e._v(`
              Shipping
            `)]),e._v(" "),s("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"8"}},[s("span",{staticClass:"text-subtitle-2",domProps:{textContent:e._s(e.$formatter.formatCheckBox(e.form.sales_use_shipping))}})]),e._v(" "),s("v-col",{staticClass:"pa-2 font-weight-medium",attrs:{cols:"12",md:"4"}},[e._v(`
              Service Date
            `)]),e._v(" "),s("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"8"}},[s("span",{staticClass:"text-subtitle-2",domProps:{textContent:e._s(e.$formatter.formatCheckBox(e.form.sales_service_date))}})]),e._v(" "),s("v-col",{staticClass:"pa-2 font-weight-medium",attrs:{cols:"12",md:"4"}},[e._v(`
              Discount
            `)]),e._v(" "),s("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"8"}},[s("span",{staticClass:"text-subtitle-2",domProps:{textContent:e._s(e.$formatter.formatCheckBox(e.form.sales_discount))}})]),e._v(" "),s("v-col",{staticClass:"pa-2 font-weight-medium",attrs:{cols:"12",md:"4"}},[e._v(`
              Deposit
            `)]),e._v(" "),s("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"8"}},[s("span",{staticClass:"text-subtitle-2",domProps:{textContent:e._s(e.$formatter.formatCheckBox(e.form.sales_deposit))}})]),e._v(" "),s("v-col",{staticClass:"pa-2 font-weight-medium",attrs:{cols:"12",md:"4"}},[e._v(`
              Tips (Gratuity)
            `)]),e._v(" "),s("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"8"}},[s("span",{staticClass:"text-subtitle-2",domProps:{textContent:e._s(e.$formatter.formatCheckBox(e.form.sales_tips))}})])],1)]},proxy:!0}],null,!1,3875474853)}):s("FormSectionEdit",{ref:"sectionEdit",on:{save:e.save,cancel:e.cancel},scopedSlots:e._u([{key:"content",fn:function(){return[s("v-row",{attrs:{"no-gutters":""}},[s("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"5"}},[s("v-list-item",{staticClass:"pa-0",attrs:{"two-line":""}},[s("v-list-item-content",[s("v-list-item-title",[e._v("Preferred invoice terms")])],1)],1)],1),e._v(" "),s("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"7"}},[s("v-select",{attrs:{label:"Preferred invoice terms",items:e.itemPaymentTerm,filled:"",dense:"","hide-details":"auto"},model:{value:e.form.sales_prefer_inv_term,callback:function(M){e.$set(e.form,"sales_prefer_inv_term",M)},expression:"form.sales_prefer_inv_term"}})],1),e._v(" "),s("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"5"}},[s("v-list-item",{staticClass:"pa-0",attrs:{"two-line":""}},[s("v-list-item-content",[s("v-list-item-title",[e._v("Preferred delivery method")])],1)],1)],1),e._v(" "),s("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"7"}},[s("v-select",{attrs:{label:"Preferred delivery method",items:e.itemDeliveryMethod,filled:"",dense:"","hide-details":"auto"},model:{value:e.form.sales_prefer_delivery_method,callback:function(M){e.$set(e.form,"sales_prefer_delivery_method",M)},expression:"form.sales_prefer_delivery_method"}})],1),e._v(" "),s("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"5"}},[s("v-checkbox",{attrs:{label:"Shipping","hide-details":"auto"},model:{value:e.form.sales_use_shipping,callback:function(M){e.$set(e.form,"sales_use_shipping",M)},expression:"form.sales_use_shipping"}})],1),e._v(" "),s("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"7"}},[s("span",{staticClass:"text-subtitle-2",domProps:{textContent:e._s(e.$formatter.formatCheckBox(e.form.sales_use_shipping))}})]),e._v(" "),s("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"5"}},[s("v-checkbox",{attrs:{label:"Service Date","hide-details":"auto"},model:{value:e.form.sales_service_date,callback:function(M){e.$set(e.form,"sales_service_date",M)},expression:"form.sales_service_date"}})],1),e._v(" "),s("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"7"}},[s("span",{staticClass:"text-subtitle-2",domProps:{textContent:e._s(e.$formatter.formatCheckBox(e.form.sales_service_date))}})]),e._v(" "),s("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"5"}},[s("v-checkbox",{attrs:{label:"Discount","hide-details":"auto"},model:{value:e.form.sales_discount,callback:function(M){e.$set(e.form,"sales_discount",M)},expression:"form.sales_discount"}})],1),e._v(" "),s("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"7"}},[s("span",{staticClass:"text-subtitle-2",domProps:{textContent:e._s(e.$formatter.formatCheckBox(e.form.sales_discount))}})]),e._v(" "),s("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"5"}},[s("v-checkbox",{attrs:{label:"Deposit","hide-details":"auto"},model:{value:e.form.sales_deposit,callback:function(M){e.$set(e.form,"sales_deposit",M)},expression:"form.sales_deposit"}})],1),e._v(" "),s("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"7"}},[s("span",{staticClass:"text-subtitle-2",domProps:{textContent:e._s(e.$formatter.formatCheckBox(e.form.sales_deposit))}})]),e._v(" "),s("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"5"}},[s("v-checkbox",{attrs:{label:"Tips (Gratuity)","hide-details":"auto"},model:{value:e.form.sales_tips,callback:function(M){e.$set(e.form,"sales_tips",M)},expression:"form.sales_tips"}})],1),e._v(" "),s("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"7"}},[s("span",{staticClass:"text-subtitle-2",domProps:{textContent:e._s(e.$formatter.formatCheckBox(e.form.sales_tips))}})])],1)]},proxy:!0}])})],1),e._v(" "),e.companyNameView?s("v-col",{staticClass:"pa-1 text-right",attrs:{cols:"12",md:"1"}},[s("v-btn",{attrs:{icon:"",small:""},on:{click:function(L){e.companyNameView=!1}}},[s("v-icon",[e._v("mdi-pencil")])],1)],1):e._e()],1)},d=[],g={props:{form:{type:Object,default:function(){return{}}},logo:{type:String,default:""}},data:function(){return{companyNameView:!0,itemPaymentTerm:[],itemDeliveryMethod:["Print Later","Send Later","None"]}},mounted:function(){this.getPaymentTerm()},methods:{getPaymentTerm:function(){var e=this;this.$axios.get("/api/financial/payment-terms").then(function(s){e.itemPaymentTerm=s.data.data.simple})},save:function(){this.$refs.sectionEdit.save(this.form),this.companyNameView=!0},cancel:function(){this.companyNameView=!0}}},p=g,D=t(50),W=t(51),B=t.n(W),T=t(164),x=t(635),K=t(585),A=t(247),l=t(165),_=t(35),E=t(599),a=t(631),v=Object(D.a)(p,o,d,!1,null,null,null),h=u.default=v.exports;B()(v,{FormSectionView:t(621).default,FormSectionEdit:t(620).default}),B()(v,{VBtn:T.a,VCheckbox:x.a,VCol:K.a,VIcon:A.a,VListItem:l.a,VListItemContent:_.a,VListItemTitle:_.c,VRow:E.a,VSelect:a.a})},599:function(m,u,t){"use strict";var o=t(7),d=t.n(o),g=t(9),p=t.n(g),D=t(12),W=t.n(D),B=t(13),T=t.n(B),x=t(2),K=t(4),A=t.n(K),l=t(33),_=t.n(l),E=t(52),a=t.n(E),v=t(28),h=t.n(v),R=t(8),e=t.n(R),s=t(21),V=t.n(s),L=t(65),M=t.n(L),$=t(269),J=t.n($),F=t(32),N=t.n(F),U=t(270),f=t.n(U),C=t(271),r=t.n(C),n=t(272),c=t.n(n),P=t(273),y=t.n(P),b=t(274),X=t.n(b),H=t(275),xt=t.n(H),ct=t(276),At=t.n(ct),ut=t(277),Lt=t.n(ut),dt=t(278),Tt=t.n(dt),vt=t(279),Rt=t.n(vt),mt=t(280),Kt=t.n(mt),ft=t(281),Wt=t.n(ft),pt=t(282),Ut=t.n(pt),Et=t(34),Vt=t.n(Et),ht=t(10),bt=t.n(ht),Ot=t(283),St=t.n(Ot),Pt=t(3),jt=t(78),Dt=t(1);function q(I,O){var j=Object.keys(I);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(I);O&&(i=i.filter(function(z){return Object.getOwnPropertyDescriptor(I,z).enumerable})),j.push.apply(j,i)}return j}function Q(I){for(var O=1;O<arguments.length;O++){var j=arguments[O]!=null?arguments[O]:{};O%2?q(Object(j),!0).forEach(function(i){Object(x.a)(I,i,j[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(I,Object.getOwnPropertyDescriptors(j)):q(Object(j)).forEach(function(i){Object.defineProperty(I,i,Object.getOwnPropertyDescriptor(j,i))})}return I}var Mt=["sm","md","lg","xl"],Y=["start","end","center"];function Z(I,O){return Mt.reduce(function(j,i){return j[I+Object(Dt.I)(i)]=O(),j},{})}var tt=function(O){return[].concat(Y,["baseline","stretch"]).includes(O)},et=Z("align",function(){return{type:String,default:null,validator:tt}}),st=function(O){return[].concat(Y,["space-between","space-around"]).includes(O)},nt=Z("justify",function(){return{type:String,default:null,validator:st}}),ot=function(O){return[].concat(Y,["space-between","space-around","stretch"]).includes(O)},at=Z("alignContent",function(){return{type:String,default:null,validator:ot}}),rt={align:Object.keys(et),justify:Object.keys(nt),alignContent:Object.keys(at)},Ct={align:"align",justify:"justify",alignContent:"align-content"};function gt(I,O,j){var i=Ct[I];if(j!=null){if(O){var z=O.replace(I,"");i+="-".concat(z)}return i+="-".concat(j),i.toLowerCase()}}var _t=new Map;u.a=Pt.default.extend({name:"v-row",functional:!0,props:Q(Q(Q({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:tt}},et),{},{justify:{type:String,default:null,validator:st}},nt),{},{alignContent:{type:String,default:null,validator:ot}},at),render:function(O,j){var i=j.props,z=j.data,yt=j.children,w="";for(var It in i)w+=String(i[It]);var S=_t.get(w);return S||function(){var G;S=[];var k;for(k in rt)rt[k].forEach(function(it){var Bt=i[it],lt=gt(k,it,Bt);lt&&S.push(lt)});S.push((G={"no-gutters":i.noGutters,"row--dense":i.dense},Object(x.a)(G,"align-".concat(i.align),i.align),Object(x.a)(G,"justify-".concat(i.justify),i.justify),Object(x.a)(G,"align-content-".concat(i.alignContent),i.alignContent),G)),_t.set(w,S)}(),O(i.tag,Object(jt.a)(z,{staticClass:"row",class:S}),yt)}})},600:function(m,u,t){var o=t(375),d=t(47);m.exports=function(g,p,D){return D.get&&o(D.get,p,{getter:!0}),D.set&&o(D.set,p,{setter:!0}),d.f(g,p,D)}},609:function(m,u,t){"use strict";var o=t(100),d=t(3);u.a=d.default.extend({name:"rippleable",directives:{ripple:o.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var p=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.ripple?(p.staticClass="v-input--selection-controls__ripple",p.directives=p.directives||[],p.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",p)):null}}})},611:function(m,u,t){var o=t(613);o.__esModule&&(o=o.default),typeof o=="string"&&(o=[[m.i,o,""]]),o.locals&&(m.exports=o.locals);var d=t(15).default,g=d("46813077",o,!0,{sourceMap:!1})},612:function(m,u,t){"use strict";t.d(u,"b",function(){return A});var o=t(4),d=t.n(o),g=t(70),p=t.n(g),D=t(9),W=t.n(D),B=t(89),T=t(609),x=t(289),K=t(5);function A(l){l.preventDefault()}u.a=Object(K.a)(B.a,T.a,x.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(!!this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return this.multiple===!0||this.multiple===null&&Array.isArray(this.internalValue)},isActive:function(){var _=this,E=this.value,a=this.internalValue;return this.isMultiple?Array.isArray(a)?a.some(function(v){return _.valueComparator(v,E)}):!1:this.trueValue===void 0||this.falseValue===void 0?E?this.valueComparator(E,a):Boolean(a):this.valueComparator(a,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return!this.isDisabled&&!this.validationState?void 0:this.validationState}},watch:{inputValue:function(_){this.lazyValue=_,this.hasColor=_}},methods:{genLabel:function(){var _=B.a.options.methods.genLabel.call(this);return _&&(_.data.on={click:A},_)},genInput:function(_,E){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:_,type:_},E),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:A},ref:"input"})},onClick:function(_){this.onChange(),this.$emit("click",_)},onChange:function(){var _=this;if(!!this.isInteractive){var E=this.value,a=this.internalValue;if(this.isMultiple){Array.isArray(a)||(a=[]);var v=a.length;a=a.filter(function(h){return!_.valueComparator(h,E)}),a.length===v&&a.push(E)}else this.trueValue!==void 0&&this.falseValue!==void 0?a=this.valueComparator(a,this.trueValue)?this.falseValue:this.trueValue:E?a=this.valueComparator(a,E)?null:E:a=!a;this.validate(!0,a),this.internalValue=a,this.hasColor=a}},onFocus:function(_){this.isFocused=!0,this.$emit("focus",_)},onBlur:function(_){this.isFocused=!1,this.$emit("blur",_)},onKeydown:function(_){}}})},613:function(m,u,t){var o=t(14),d=o(!1);d.push([m.i,'.v-input--selection-controls{margin-top:4px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-top:0;margin-bottom:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;width:24px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;position:absolute;transition:inherit;width:34px;left:-12px;top:calc(50% - 24px);margin:7px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";position:absolute;opacity:.2;left:0;right:0;top:0;transform-origin:center center;transform:scale(.2);transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{width:28px;height:28px;left:-9px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:inherit}.v-input--selection-controls.v-input--is-disabled:not(.v-input--is-readonly){pointer-events:none}.v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),m.exports=d},617:function(m,u,t){var o=t(618);o.__esModule&&(o=o.default),typeof o=="string"&&(o=[[m.i,o,""]]),o.locals&&(m.exports=o.locals);var d=t(15).default,g=d("93dca520",o,!0,{sourceMap:!1})},618:function(m,u,t){var o=t(14),d=o(!1);d.push([m.i,".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}.v-input--checkbox.v-input--dense{margin-top:4px}",""]),m.exports=d},620:function(m,u,t){"use strict";t.r(u);var o=function(){var v=this,h=v._self._c;return h("v-card",{attrs:{elevation:"0"}},[h("v-form",[v._t("content")],2),v._v(" "),h("v-card-actions",[h("v-spacer"),v._v(" "),h("v-btn",{attrs:{outlined:"",small:""},on:{click:v.cancel}},[v._v(" Cancel ")]),v._v(" "),h("v-btn",{attrs:{color:"primary",small:""},on:{click:v.processData}},[v._v(" Save ")])],1)],1)},d=[],g={data:function(){return{tabValue:"company",loadingButton:!1}},methods:{save:function(v){var h=this,R={},e="/api/settings";this.loadingButton=!0,this.$axios.post(e,v).then(function(s){h.loadingButton=!1,h.tabValue==="company"&&(h.$nuxt.$emit("getLogo"),h.$nuxt.$emit("getCompany"))}).catch(function(s){h.loadingButton=!1,h.$swal({type:"error",title:"Error",text:s.response.data.message})})},cancel:function(){this.$emit("cancel")},processData:function(){this.$emit("save")}}},p=g,D=t(50),W=t(51),B=t.n(W),T=t(164),x=t(248),K=t(88),A=t(625),l=t(593),_=Object(D.a)(p,o,d,!1,null,null,null),E=u.default=_.exports;B()(_,{VBtn:T.a,VCard:x.a,VCardActions:K.a,VForm:A.a,VSpacer:l.a})},621:function(m,u,t){"use strict";t.r(u);var o=function(){var A=this,l=A._self._c;return l("v-card",{staticStyle:{cursor:"pointer"},attrs:{elevation:"0"}},[A._t("content")],2)},d=[],g=t(50),p=t(51),D=t.n(p),W=t(248),B={},T=Object(g.a)(B,o,d,!1,null,null,null),x=u.default=T.exports;D()(T,{VCard:W.a})},625:function(m,u,t){"use strict";var o=t(2),d=t(33),g=t.n(d),p=t(52),D=t.n(p),W=t(288),B=t.n(W),T=t(9),x=t.n(T),K=t(4),A=t.n(K),l=t(10),_=t.n(l),E=t(59),a=t.n(E),v=t(79),h=t.n(v),R=t(8),e=t.n(R),s=t(7),V=t.n(s),L=t(12),M=t.n(L),$=t(13),J=t.n($),F=t(5),N=t(99),U=t(118);function f(r,n){var c=Object.keys(r);if(Object.getOwnPropertySymbols){var P=Object.getOwnPropertySymbols(r);n&&(P=P.filter(function(y){return Object.getOwnPropertyDescriptor(r,y).enumerable})),c.push.apply(c,P)}return c}function C(r){for(var n=1;n<arguments.length;n++){var c=arguments[n]!=null?arguments[n]:{};n%2?f(Object(c),!0).forEach(function(P){Object(o.a)(r,P,c[P])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(c)):f(Object(c)).forEach(function(P){Object.defineProperty(r,P,Object.getOwnPropertyDescriptor(c,P))})}return r}u.a=Object(F.a)(N.a,Object(U.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(n){var c=Object.values(n).includes(!0);this.$emit("input",!c)},deep:!0,immediate:!0}},methods:{watchInput:function(n){var c=this,P=function(X){return X.$watch("hasError",function(H){c.$set(c.errorBag,X._uid,H)},{immediate:!0})},y={_uid:n._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?y.shouldValidate=n.$watch("shouldValidate",function(b){!b||c.errorBag.hasOwnProperty(n._uid)||(y.valid=P(n))}):y.valid=P(n),y},validate:function(){return this.inputs.filter(function(n){return!n.validate(!0)}).length===0},reset:function(){this.inputs.forEach(function(n){return n.reset()}),this.resetErrorBag()},resetErrorBag:function(){var n=this;this.lazyValidation&&setTimeout(function(){n.errorBag={}},0)},resetValidation:function(){this.inputs.forEach(function(n){return n.resetValidation()}),this.resetErrorBag()},register:function(n){this.inputs.push(n),this.watchers.push(this.watchInput(n))},unregister:function(n){var c=this.inputs.find(function(y){return y._uid===n._uid});if(!!c){var P=this.watchers.find(function(y){return y._uid===c._uid});P&&(P.valid(),P.shouldValidate()),this.watchers=this.watchers.filter(function(y){return y._uid!==c._uid}),this.inputs=this.inputs.filter(function(y){return y._uid!==c._uid}),this.$delete(this.errorBag,c._uid)}}},render:function(n){var c=this;return n("form",{staticClass:"v-form",attrs:C({novalidate:!0},this.attrs$),on:{submit:function(y){return c.$emit("submit",y)}}},this.$slots.default)}})},635:function(m,u,t){"use strict";var o=t(8),d=t.n(o),g=t(7),p=t.n(g),D=t(9),W=t.n(D),B=t(12),T=t.n(B),x=t(10),K=t.n(x),A=t(13),l=t.n(A),_=t(90),E=t(2),a=t(4),v=t.n(a),h=t(70),R=t.n(h),e=t(617),s=t.n(e),V=t(611),L=t.n(V),M=t(45),$=t(89),J=t(612),F=["title"];function N(f,C){var r=Object.keys(f);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(f);C&&(n=n.filter(function(c){return Object.getOwnPropertyDescriptor(f,c).enumerable})),r.push.apply(r,n)}return r}function U(f){for(var C=1;C<arguments.length;C++){var r=arguments[C]!=null?arguments[C]:{};C%2?N(Object(r),!0).forEach(function(n){Object(E.a)(f,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(f,Object.getOwnPropertyDescriptors(r)):N(Object(r)).forEach(function(n){Object.defineProperty(f,n,Object.getOwnPropertyDescriptor(r,n))})}return f}u.a=J.a.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return U(U({},$.a.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!(this.isDisabled&&!this.inputIndeterminate)){if(this.hasError&&this.shouldValidate)return"error";if(this.hasSuccess)return"success";if(this.hasColor!==null)return this.computedColor}}},watch:{indeterminate:function(C){var r=this;this.$nextTick(function(){return r.inputIndeterminate=C})},inputIndeterminate:function(C){this.$emit("update:indeterminate",C)},isActive:function(){!this.indeterminate||(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var C=this.attrs$,r=C.title,n=Object(_.a)(C,F);return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(M.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",U(U({},n),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})}}]);
