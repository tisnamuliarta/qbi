(window.webpackJsonp=window.webpackJsonp||[]).push([[70],{595:function($,m,_){"use strict";var j=_(7),A=_.n(j),O=_(9),J=_.n(O),B=_(12),H=_.n(B),P=_(13),R=_.n(P),l=_(1),v=_(4),I=_.n(v),f=_(33),K=_.n(f),u=_(52),Q=_.n(u),s=_(27),r=_.n(s),e=_(8),D=_.n(e),M=_(21),T=_.n(M),X=_(65),i_=_.n(X),Y=_(266),y_=_.n(Y),Z=_(32),C_=_.n(Z),b=_(267),g_=_.n(b),w=_(268),L_=_.n(w),k=_(269),A_=_.n(k),q=_(270),B_=_.n(q),__=_(271),R_=_.n(__),t_=_(272),I_=_.n(t_),s_=_(273),K_=_.n(s_),e_=_(274),T_=_.n(e_),o_=_(275),p_=_.n(o_),n_=_(276),U_=_.n(n_),a_=_(277),W_=_.n(a_),r_=_(278),h_=_.n(r_),l_=_(279),x_=_.n(l_),E_=_(35),S_=_.n(E_),c_=_(10),V_=_.n(c_),d_=_(280),N_=_.n(d_),m_=_(2),u_=_(78),j_=_(0);function p(a,o){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);o&&(t=t.filter(function(c){return Object.getOwnPropertyDescriptor(a,c).enumerable})),n.push.apply(n,t)}return n}function i(a){for(var o=1;o<arguments.length;o++){var n=arguments[o]!=null?arguments[o]:{};o%2?p(Object(n),!0).forEach(function(t){Object(l.a)(a,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach(function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(n,t))})}return a}var O_=["sm","md","lg","xl"],y=["start","end","center"];function C(a,o){return O_.reduce(function(n,t){return n[a+Object(j_.H)(t)]=o(),n},{})}var U=function(o){return[].concat(y,["baseline","stretch"]).includes(o)},W=C("align",function(){return{type:String,default:null,validator:U}}),h=function(o){return[].concat(y,["space-between","space-around"]).includes(o)},x=C("justify",function(){return{type:String,default:null,validator:h}}),S=function(o){return[].concat(y,["space-between","space-around","stretch"]).includes(o)},V=C("alignContent",function(){return{type:String,default:null,validator:S}}),N={align:Object.keys(W),justify:Object.keys(x),alignContent:Object.keys(V)},P_={align:"align",justify:"justify",alignContent:"align-content"};function v_(a,o,n){var t=P_[a];if(n!=null){if(o){var c=o.replace(a,"");t+="-".concat(c)}return t+="-".concat(n),t.toLowerCase()}}var G=new Map;m.a=m_.default.extend({name:"v-row",functional:!0,props:i(i(i({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:U}},W),{},{justify:{type:String,default:null,validator:h}},x),{},{alignContent:{type:String,default:null,validator:S}},V),render:function(o,n){var t=n.props,c=n.data,f_=n.children,g="";for(var D_ in t)g+=String(t[D_]);var E=G.get(g);return E||function(){var d;E=[];var L;for(L in N)N[L].forEach(function(F){var M_=t[F],z=v_(L,F,M_);z&&E.push(z)});E.push((d={"no-gutters":t.noGutters,"row--dense":t.dense},Object(l.a)(d,"align-".concat(t.align),t.align),Object(l.a)(d,"justify-".concat(t.justify),t.justify),Object(l.a)(d,"align-content-".concat(t.alignContent),t.alignContent),d)),G.set(g,E)}(),o(t.tag,Object(u_.a)(c,{staticClass:"row",class:E}),f_)}})},886:function($,m,_){"use strict";_.r(m);var j=function(){var s=this,r=s.$createElement,e=s._self._c||r;return e("v-row",[e("v-col",{attrs:{cols:"12",md:"12"}},[e("LazySetupSectionCompanyName",{attrs:{form:s.form,logo:s.logo}}),s._v(" "),e("hr")],1),s._v(" "),e("v-col",{attrs:{cols:"12",md:"12"}},[e("LazySetupSectionCompanyInfo",{attrs:{form:s.form}}),s._v(" "),e("hr")],1),s._v(" "),e("v-col",{attrs:{cols:"12",md:"12"}},[e("LazySetupSectionCompanyAddress",{attrs:{form:s.form}}),s._v(" "),e("hr")],1),s._v(" "),e("v-col",{attrs:{cols:"12",md:"12"}},[e("LazySetupSectionCompanyBank",{attrs:{form:s.form}}),s._v(" "),e("hr")],1)],1)},A=[],O=_(17),J=_(4),B=_(10),H=_(215),P={name:"PaymentSetting",props:{formData:{type:Object,default:function(){return{}}}},data:function(){return{form:this.formData,logo:"",itemCurrency:[],companyNameView:!0,companyNameEdit:!1}},mounted:function(){this.getCurrency(),this.companyNameView=!0},methods:{save:function(){this.companyNameView=!0},getCurrency:function(){var r=this;this.$axios.get("/api/financial/currency").then(function(e){r.itemCurrency=e.data.data.rows})},changeCurrency:function(){var r=this.form.company_currency_code;this.form.company_currency_symbol=r.symbol,this.form.company_currency_code=r.code},getForm:function(){var r=new FormData;return Object.entries(this.form).forEach(function(e){var D=Object(O.a)(e,2),M=D[0],T=D[1];r.append(M,T)}),r},setForm:function(r,e){this.form=Object.assign({},r),this.logo=e+"/files/logo/"+this.form.company_logo}}},R=P,l=_(50),v=_(51),I=_.n(v),f=_(581),K=_(595),u=Object(l.a)(R,j,A,!1,null,null,null),Q=m.default=u.exports;I()(u,{VCol:f.a,VRow:K.a})}}]);