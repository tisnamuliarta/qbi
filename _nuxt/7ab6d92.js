(window.webpackJsonp=window.webpackJsonp||[]).push([[117,51,52],{1145:function(x,E,t){"use strict";t.r(E);var P=function(){var s=this,_=s._self._c;return _("v-row",{attrs:{"no-gutters":""}},[_("v-col",{staticClass:"pa-1",attrs:{cols:"12",md:"2"}},[_("span",{staticClass:"text-subtitle-1"},[s._v("Company Info")])]),s._v(" "),_("v-col",{staticClass:"pa-1",attrs:{cols:"12",md:"8"}},[s.companyNameView?_("FormSectionView",{scopedSlots:s._u([{key:"content",fn:function(){return[_("v-row",{attrs:{"no-gutters":""},on:{click:function(j){s.companyNameView=!1}}},[_("v-col",{staticClass:"pa-2 font-weight-medium",attrs:{cols:"12",md:"4"}},[s._v("Company Email")]),s._v(" "),_("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"8"}},[_("span",{staticClass:"text-subtitle-2",domProps:{textContent:s._s(s.form.company_email)}})]),s._v(" "),_("v-col",{staticClass:"pa-2 font-weight-medium",attrs:{cols:"12",md:"4"}},[s._v("Company Phone")]),s._v(" "),_("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"8"}},[_("span",{staticClass:"text-subtitle-2",domProps:{textContent:s._s(s.form.company_phone)}})]),s._v(" "),_("v-col",{staticClass:"pa-2 font-weight-medium",attrs:{cols:"12",md:"4"}},[s._v("Company Website")]),s._v(" "),_("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"8"}},[_("span",{staticClass:"text-subtitle-2",domProps:{textContent:s._s(s.form.company_website)}})])],1)]},proxy:!0}],null,!1,4010458038)}):_("FormSectionEdit",{ref:"sectionEdit",on:{save:s.save,cancel:s.cancel},scopedSlots:s._u([{key:"content",fn:function(){return[_("v-row",{attrs:{"no-gutters":""}},[_("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"5"}},[_("v-list-item",{staticClass:"pa-0",attrs:{"two-line":""}},[_("v-list-item-content",[_("v-list-item-title",[s._v("Company Email")])],1)],1)],1),s._v(" "),_("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"7"}},[_("v-text-field",{attrs:{label:"Company Email",filled:"",dense:"","hide-details":"auto"},model:{value:s.form.company_email,callback:function(j){s.$set(s.form,"company_email",j)},expression:"form.company_email"}})],1),s._v(" "),_("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"5"}},[s._v("Company Phone")]),s._v(" "),_("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"7"}},[_("v-text-field",{attrs:{label:"Company Phone",filled:"",dense:"","hide-details":"auto"},model:{value:s.form.company_phone,callback:function(j){s.$set(s.form,"company_phone",j)},expression:"form.company_phone"}})],1),s._v(" "),_("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"5"}},[s._v("Company Website")]),s._v(" "),_("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"7"}},[_("v-text-field",{attrs:{label:"Company Website",filled:"",dense:"","hide-details":"auto"},model:{value:s.form.company_website,callback:function(j){s.$set(s.form,"company_website",j)},expression:"form.company_website"}})],1)],1)]},proxy:!0}])})],1),s._v(" "),s.companyNameView?_("v-col",{staticClass:"pa-1 text-right",attrs:{cols:"12",md:"1"}},[_("v-btn",{attrs:{icon:"",small:""},on:{click:function(A){s.companyNameView=!1}}},[_("v-icon",[s._v("mdi-pencil")])],1)],1):s._e()],1)},p=[],y={props:{form:{type:Object,default:function(){return{}}},logo:{type:String,default:""}},data:function(){return{companyNameView:!0}},methods:{save:function(){this.$refs.sectionEdit.save(this.form),this.companyNameView=!0},cancel:function(){this.companyNameView=!0}}},h=y,B=t(50),g=t(51),D=t.n(g),M=t(164),v=t(585),I=t(247),L=t(165),f=t(35),R=t(599),T=t(574),O=Object(B.a)(h,P,p,!1,null,null,null),u=E.default=O.exports;D()(O,{FormSectionView:t(623).default,FormSectionEdit:t(622).default}),D()(O,{VBtn:M.a,VCol:v.a,VIcon:I.a,VListItem:L.a,VListItemContent:f.a,VListItemTitle:f.c,VRow:R.a,VTextField:T.a})},599:function(x,E,t){"use strict";var P=t(7),p=t.n(P),y=t(9),h=t.n(y),B=t(12),g=t.n(B),D=t(13),M=t.n(D),v=t(2),I=t(4),L=t.n(I),f=t(33),R=t.n(f),T=t(52),O=t.n(T),u=t(28),a=t.n(u),s=t(8),_=t.n(s),C=t(21),A=t.n(C),j=t(65),lt=t.n(j),S=t(269),it=t.n(S),$=t(32),b=t.n($),N=t(270),F=t.n(N),G=t(271),r=t.n(G),e=t(272),o=t.n(e),i=t(273),d=t.n(i),K=t(274),z=t.n(K),J=t(275),Lt=t.n(J),ct=t(276),Rt=t.n(ct),dt=t(277),Tt=t.n(dt),mt=t(278),At=t.n(mt),ut=t(279),Kt=t.n(ut),Et=t(280),Wt=t.n(Et),vt=t(281),Ut=t.n(vt),ft=t(282),Vt=t.n(ft),Ot=t(34),xt=t.n(Ot),jt=t(10),St=t.n(jt),Pt=t(283),$t=t.n(Pt),Dt=t(3),Mt=t(78),Ct=t(1);function w(m,l){var c=Object.keys(m);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(m);l&&(n=n.filter(function(U){return Object.getOwnPropertyDescriptor(m,U).enumerable})),c.push.apply(c,n)}return c}function H(m){for(var l=1;l<arguments.length;l++){var c=arguments[l]!=null?arguments[l]:{};l%2?w(Object(c),!0).forEach(function(n){Object(v.a)(m,n,c[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(m,Object.getOwnPropertyDescriptors(c)):w(Object(c)).forEach(function(n){Object.defineProperty(m,n,Object.getOwnPropertyDescriptor(c,n))})}return m}var pt=["sm","md","lg","xl"],Q=["start","end","center"];function X(m,l){return pt.reduce(function(c,n){return c[m+Object(Ct.I)(n)]=l(),c},{})}var k=function(l){return[].concat(Q,["baseline","stretch"]).includes(l)},q=X("align",function(){return{type:String,default:null,validator:k}}),tt=function(l){return[].concat(Q,["space-between","space-around"]).includes(l)},st=X("justify",function(){return{type:String,default:null,validator:tt}}),_t=function(l){return[].concat(Q,["space-between","space-around","stretch"]).includes(l)},et=X("alignContent",function(){return{type:String,default:null,validator:_t}}),nt={align:Object.keys(q),justify:Object.keys(st),alignContent:Object.keys(et)},yt={align:"align",justify:"justify",alignContent:"align-content"};function ht(m,l,c){var n=yt[m];if(c!=null){if(l){var U=l.replace(m,"");n+="-".concat(U)}return n+="-".concat(c),n.toLowerCase()}}var ot=new Map;E.a=Dt.default.extend({name:"v-row",functional:!0,props:H(H(H({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:k}},q),{},{justify:{type:String,default:null,validator:tt}},st),{},{alignContent:{type:String,default:null,validator:_t}},et),render:function(l,c){var n=c.props,U=c.data,Bt=c.children,Y="";for(var gt in n)Y+=String(n[gt]);var W=ot.get(Y);return W||function(){var V;W=[];var Z;for(Z in nt)nt[Z].forEach(function(at){var It=n[at],rt=ht(Z,at,It);rt&&W.push(rt)});W.push((V={"no-gutters":n.noGutters,"row--dense":n.dense},Object(v.a)(V,"align-".concat(n.align),n.align),Object(v.a)(V,"justify-".concat(n.justify),n.justify),Object(v.a)(V,"align-content-".concat(n.alignContent),n.alignContent),V)),ot.set(Y,W)}(),l(n.tag,Object(Mt.a)(U,{staticClass:"row",class:W}),Bt)}})},622:function(x,E,t){"use strict";t.r(E);var P=function(){var u=this,a=u._self._c;return a("v-card",{attrs:{elevation:"0"}},[a("v-form",[u._t("content")],2),u._v(" "),a("v-card-actions",[a("v-spacer"),u._v(" "),a("v-btn",{attrs:{outlined:"",small:""},on:{click:u.cancel}},[u._v(" Cancel ")]),u._v(" "),a("v-btn",{attrs:{color:"primary",small:""},on:{click:u.processData}},[u._v(" Save ")])],1)],1)},p=[],y={data:function(){return{tabValue:"company",loadingButton:!1}},methods:{save:function(u){var a=this,s={},_="/api/settings";this.loadingButton=!0,this.$axios.post(_,u).then(function(C){a.loadingButton=!1,a.tabValue==="company"&&(a.$nuxt.$emit("getLogo"),a.$nuxt.$emit("getCompany"))}).catch(function(C){a.loadingButton=!1,a.$swal({type:"error",title:"Error",text:C.response.data.message})})},cancel:function(){this.$emit("cancel")},processData:function(){this.$emit("save")}}},h=y,B=t(50),g=t(51),D=t.n(g),M=t(164),v=t(248),I=t(88),L=t(625),f=t(593),R=Object(B.a)(h,P,p,!1,null,null,null),T=E.default=R.exports;D()(R,{VBtn:M.a,VCard:v.a,VCardActions:I.a,VForm:L.a,VSpacer:f.a})},623:function(x,E,t){"use strict";t.r(E);var P=function(){var L=this,f=L._self._c;return f("v-card",{staticStyle:{cursor:"pointer"},attrs:{elevation:"0"}},[L._t("content")],2)},p=[],y=t(50),h=t(51),B=t.n(h),g=t(248),D={},M=Object(y.a)(D,P,p,!1,null,null,null),v=E.default=M.exports;B()(M,{VCard:g.a})},625:function(x,E,t){"use strict";var P=t(2),p=t(33),y=t.n(p),h=t(52),B=t.n(h),g=t(288),D=t.n(g),M=t(9),v=t.n(M),I=t(4),L=t.n(I),f=t(10),R=t.n(f),T=t(59),O=t.n(T),u=t(79),a=t.n(u),s=t(8),_=t.n(s),C=t(7),A=t.n(C),j=t(12),lt=t.n(j),S=t(13),it=t.n(S),$=t(5),b=t(99),N=t(118);function F(r,e){var o=Object.keys(r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);e&&(i=i.filter(function(d){return Object.getOwnPropertyDescriptor(r,d).enumerable})),o.push.apply(o,i)}return o}function G(r){for(var e=1;e<arguments.length;e++){var o=arguments[e]!=null?arguments[e]:{};e%2?F(Object(o),!0).forEach(function(i){Object(P.a)(r,i,o[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(o)):F(Object(o)).forEach(function(i){Object.defineProperty(r,i,Object.getOwnPropertyDescriptor(o,i))})}return r}E.a=Object($.a)(b.a,Object(N.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(e){var o=Object.values(e).includes(!0);this.$emit("input",!o)},deep:!0,immediate:!0}},methods:{watchInput:function(e){var o=this,i=function(z){return z.$watch("hasError",function(J){o.$set(o.errorBag,z._uid,J)},{immediate:!0})},d={_uid:e._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?d.shouldValidate=e.$watch("shouldValidate",function(K){!K||o.errorBag.hasOwnProperty(e._uid)||(d.valid=i(e))}):d.valid=i(e),d},validate:function(){return this.inputs.filter(function(e){return!e.validate(!0)}).length===0},reset:function(){this.inputs.forEach(function(e){return e.reset()}),this.resetErrorBag()},resetErrorBag:function(){var e=this;this.lazyValidation&&setTimeout(function(){e.errorBag={}},0)},resetValidation:function(){this.inputs.forEach(function(e){return e.resetValidation()}),this.resetErrorBag()},register:function(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister:function(e){var o=this.inputs.find(function(d){return d._uid===e._uid});if(!!o){var i=this.watchers.find(function(d){return d._uid===o._uid});i&&(i.valid(),i.shouldValidate()),this.watchers=this.watchers.filter(function(d){return d._uid!==o._uid}),this.inputs=this.inputs.filter(function(d){return d._uid!==o._uid}),this.$delete(this.errorBag,o._uid)}}},render:function(e){var o=this;return e("form",{staticClass:"v-form",attrs:G({novalidate:!0},this.attrs$),on:{submit:function(d){return o.$emit("submit",d)}}},this.$slots.default)}})}}]);