(window.webpackJsonp=window.webpackJsonp||[]).push([[112,51,52],{1139:function(p,f,t){"use strict";t.r(f);var O=t(165),E=t(587),D=t(247),j=t(166),v=t(31),M=t(598),y=t(629),h=function(){var s=this,n=s._self._c;return n(M.a,{attrs:{"no-gutters":""}},[n(E.a,{staticClass:"pa-1",attrs:{cols:"12",md:"2"}},[n("span",{staticClass:"text-subtitle-1"},[s._v("Other preferences")])]),s._v(" "),n(E.a,{staticClass:"pa-1",attrs:{cols:"12",md:"8"}},[s.companyNameView?n("FormSectionView",{scopedSlots:s._u([{key:"content",fn:function(){return[n(M.a,{attrs:{"no-gutters":""},on:{click:function(L){s.companyNameView=!1}}},[n(E.a,{staticClass:"pa-2 font-weight-medium",attrs:{cols:"12",md:"4"}},[s._v(`
            Date Format
          `)]),s._v(" "),n(E.a,{staticClass:"pa-2",attrs:{cols:"12",md:"8"}},[n("span",{staticClass:"text-subtitle-2",domProps:{textContent:s._s(s.form.advanced_date_format)}})])],1)]},proxy:!0}],null,!1,1444627479)}):n("FormSectionEdit",{ref:"sectionEdit",on:{save:s.save,cancel:s.cancel},scopedSlots:s._u([{key:"content",fn:function(){return[n(M.a,{attrs:{"no-gutters":""}},[n(E.a,{staticClass:"pa-2",attrs:{cols:"12",md:"5"}},[n(j.a,{staticClass:"pa-0",attrs:{"two-line":""}},[n(v.a,[n(v.c,[s._v("Date Format")])],1)],1)],1),s._v(" "),n(E.a,{staticClass:"pa-2",attrs:{cols:"12",md:"7"}},[n(y.a,{attrs:{label:"Date Format",items:s.itemDateFormate,filled:"",dense:"","hide-details":"auto"},model:{value:s.form.advanced_date_format,callback:function(L){s.$set(s.form,"advanced_date_format",L)},expression:"form.advanced_date_format"}})],1)],1)]},proxy:!0}])})],1),s._v(" "),s.companyNameView?n(E.a,{staticClass:"pa-1 text-right",attrs:{cols:"12",md:"1"}},[n(O.a,{attrs:{icon:"",small:""},on:{click:function(W){s.companyNameView=!1}}},[n(D.a,[s._v("mdi-pencil")])],1)],1):s._e()],1)},P=[],C={props:{form:{type:Object,default:function(){return{}}},logo:{type:String,default:""}},data:function(){return{companyNameView:!0,itemPaymentTerm:[],itemDateFormate:["Y-m-d","m/d/Y"]}},methods:{save:function(){this.$refs.sectionEdit.save(this.form),this.companyNameView=!0},cancel:function(){this.companyNameView=!0}}},K=C,I=t(50),g=Object(I.a)(K,h,P,!1,null,null,null),m=f.default=g.exports;installComponents(g,{FormSectionView:t(622).default,FormSectionEdit:t(621).default})},598:function(p,f,t){"use strict";var O=t(7),E=t.n(O),D=t(10),j=t.n(D),v=t(12),M=t.n(v),y=t(13),h=t.n(y),P=t(2),C=t(4),K=t.n(C),I=t(34),g=t.n(I),m=t(51),o=t.n(m),s=t(28),n=t.n(s),B=t(8),W=t.n(B),L=t(21),rt=t.n(L),x=t(64),lt=t.n(x),V=t(269),dt=t.n(V),S=t(33),Z=t.n(S),$=t(270),F=t.n($),N=t(271),r=t.n(N),_=t(272),a=t.n(_),d=t(273),c=t.n(d),A=t(274),G=t.n(A),z=t(275),Lt=t.n(z),it=t(276),At=t.n(it),ct=t(277),Rt=t.n(ct),ut=t(278),Kt=t.n(ut),Et=t(279),Tt=t.n(Et),mt=t(280),Ut=t.n(mt),vt=t(281),Wt=t.n(vt),ft=t(282),xt=t.n(ft),Ot=t(35),Vt=t.n(Ot),jt=t(9),St=t.n(jt),Pt=t(283),$t=t.n(Pt),Dt=t(3),Mt=t(77),Ct=t(1);function b(u,l){var i=Object.keys(u);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(u);l&&(e=e.filter(function(T){return Object.getOwnPropertyDescriptor(u,T).enumerable})),i.push.apply(i,e)}return i}function J(u){for(var l=1;l<arguments.length;l++){var i=arguments[l]!=null?arguments[l]:{};l%2?b(Object(i),!0).forEach(function(e){Object(P.a)(u,e,i[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(u,Object.getOwnPropertyDescriptors(i)):b(Object(i)).forEach(function(e){Object.defineProperty(u,e,Object.getOwnPropertyDescriptor(i,e))})}return u}var gt=["sm","md","lg","xl"],Y=["start","end","center"];function H(u,l){return gt.reduce(function(i,e){return i[u+Object(Ct.I)(e)]=l(),i},{})}var w=function(l){return[].concat(Y,["baseline","stretch"]).includes(l)},k=H("align",function(){return{type:String,default:null,validator:w}}),q=function(l){return[].concat(Y,["space-between","space-around"]).includes(l)},tt=H("justify",function(){return{type:String,default:null,validator:q}}),_t=function(l){return[].concat(Y,["space-between","space-around","stretch"]).includes(l)},st=H("alignContent",function(){return{type:String,default:null,validator:_t}}),et={align:Object.keys(k),justify:Object.keys(tt),alignContent:Object.keys(st)},Bt={align:"align",justify:"justify",alignContent:"align-content"};function yt(u,l,i){var e=Bt[u];if(i!=null){if(l){var T=l.replace(u,"");e+="-".concat(T)}return e+="-".concat(i),e.toLowerCase()}}var nt=new Map;f.a=Dt.default.extend({name:"v-row",functional:!0,props:J(J(J({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:w}},k),{},{justify:{type:String,default:null,validator:q}},tt),{},{alignContent:{type:String,default:null,validator:_t}},st),render:function(l,i){var e=i.props,T=i.data,ht=i.children,Q="";for(var pt in e)Q+=String(e[pt]);var R=nt.get(Q);return R||function(){var U;R=[];var X;for(X in et)et[X].forEach(function(at){var It=e[at],ot=yt(X,at,It);ot&&R.push(ot)});R.push((U={"no-gutters":e.noGutters,"row--dense":e.dense},Object(P.a)(U,"align-".concat(e.align),e.align),Object(P.a)(U,"justify-".concat(e.justify),e.justify),Object(P.a)(U,"align-content-".concat(e.alignContent),e.alignContent),U)),nt.set(Q,R)}(),l(e.tag,Object(Mt.a)(T,{staticClass:"row",class:R}),ht)}})},599:function(p,f,t){var O=t(376),E=t(47);p.exports=function(D,j,v){return v.get&&O(v.get,j,{getter:!0}),v.set&&O(v.set,j,{setter:!0}),E.f(D,j,v)}},621:function(p,f,t){"use strict";t.r(f);var O=t(165),E=t(249),D=t(88),j=t(624),v=t(589),M=function(){var m=this,o=m._self._c;return o(E.a,{attrs:{elevation:"0"}},[o(j.a,[m._t("content")],2),m._v(" "),o(D.a,[o(v.a),m._v(" "),o(O.a,{attrs:{outlined:"",small:""},on:{click:m.cancel}},[m._v(" Cancel ")]),m._v(" "),o(O.a,{attrs:{color:"primary",small:""},on:{click:m.processData}},[m._v(" Save ")])],1)],1)},y=[],h={data:function(){return{tabValue:"company",loadingButton:!1}},methods:{save:function(m){var o=this,s={},n="/api/settings";this.loadingButton=!0,this.$axios.post(n,m).then(function(B){o.loadingButton=!1,o.tabValue==="company"&&(o.$nuxt.$emit("getLogo"),o.$nuxt.$emit("getCompany"))}).catch(function(B){o.loadingButton=!1,o.$swal({type:"error",title:"Error",text:B.response.data.message})})},cancel:function(){this.$emit("cancel")},processData:function(){this.$emit("save")}}},P=h,C=t(50),K=Object(C.a)(P,M,y,!1,null,null,null),I=f.default=K.exports},622:function(p,f,t){"use strict";t.r(f);var O=t(249),E=function(){var P=this,C=P._self._c;return C(O.a,{staticStyle:{cursor:"pointer"},attrs:{elevation:"0"}},[P._t("content")],2)},D=[],j=t(50),v={},M=Object(j.a)(v,E,D,!1,null,null,null),y=f.default=M.exports},624:function(p,f,t){"use strict";var O=t(2),E=t(34),D=t.n(E),j=t(51),v=t.n(j),M=t(288),y=t.n(M),h=t(10),P=t.n(h),C=t(4),K=t.n(C),I=t(9),g=t.n(I),m=t(58),o=t.n(m),s=t(78),n=t.n(s),B=t(8),W=t.n(B),L=t(7),rt=t.n(L),x=t(12),lt=t.n(x),V=t(13),dt=t.n(V),S=t(5),Z=t(99),$=t(118);function F(r,_){var a=Object.keys(r);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(r);_&&(d=d.filter(function(c){return Object.getOwnPropertyDescriptor(r,c).enumerable})),a.push.apply(a,d)}return a}function N(r){for(var _=1;_<arguments.length;_++){var a=arguments[_]!=null?arguments[_]:{};_%2?F(Object(a),!0).forEach(function(d){Object(O.a)(r,d,a[d])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):F(Object(a)).forEach(function(d){Object.defineProperty(r,d,Object.getOwnPropertyDescriptor(a,d))})}return r}f.a=Object(S.a)(Z.a,Object($.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(_){var a=Object.values(_).includes(!0);this.$emit("input",!a)},deep:!0,immediate:!0}},methods:{watchInput:function(_){var a=this,d=function(G){return G.$watch("hasError",function(z){a.$set(a.errorBag,G._uid,z)},{immediate:!0})},c={_uid:_._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?c.shouldValidate=_.$watch("shouldValidate",function(A){!A||a.errorBag.hasOwnProperty(_._uid)||(c.valid=d(_))}):c.valid=d(_),c},validate:function(){return this.inputs.filter(function(_){return!_.validate(!0)}).length===0},reset:function(){this.inputs.forEach(function(_){return _.reset()}),this.resetErrorBag()},resetErrorBag:function(){var _=this;this.lazyValidation&&setTimeout(function(){_.errorBag={}},0)},resetValidation:function(){this.inputs.forEach(function(_){return _.resetValidation()}),this.resetErrorBag()},register:function(_){this.inputs.push(_),this.watchers.push(this.watchInput(_))},unregister:function(_){var a=this.inputs.find(function(c){return c._uid===_._uid});if(!!a){var d=this.watchers.find(function(c){return c._uid===a._uid});d&&(d.valid(),d.shouldValidate()),this.watchers=this.watchers.filter(function(c){return c._uid!==a._uid}),this.inputs=this.inputs.filter(function(c){return c._uid!==a._uid}),this.$delete(this.errorBag,a._uid)}}},render:function(_){var a=this;return _("form",{staticClass:"v-form",attrs:N({novalidate:!0},this.attrs$),on:{submit:function(c){return a.$emit("submit",c)}}},this.$slots.default)}})}}]);
