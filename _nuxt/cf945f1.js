(window.webpackJsonp=window.webpackJsonp||[]).push([[100],{599:function(J,m,_){"use strict";var j=_(7),A=_.n(j),O=_(9),$=_.n(O),B=_(12),H=_.n(B),P=_(13),I=_.n(P),l=_(2),v=_(4),R=_.n(v),f=_(33),K=_.n(f),u=_(52),Q=_.n(u),r=_(28),s=_.n(r),e=_(8),D=_.n(e),M=_(21),T=_.n(M),X=_(65),i_=_.n(X),Y=_(269),y_=_.n(Y),Z=_(32),C_=_.n(Z),b=_(270),g_=_.n(b),w=_(271),L_=_.n(w),k=_(272),A_=_.n(k),q=_(273),B_=_.n(q),__=_(274),I_=_.n(__),t_=_(275),R_=_.n(t_),s_=_(276),K_=_.n(s_),e_=_(277),T_=_.n(e_),o_=_(278),p_=_.n(o_),n_=_(279),U_=_.n(n_),a_=_(280),W_=_.n(a_),r_=_(281),h_=_.n(r_),l_=_(282),x_=_.n(l_),E_=_(34),S_=_.n(E_),d_=_(10),V_=_.n(d_),c_=_(283),N_=_.n(c_),m_=_(3),u_=_(78),j_=_(1);function p(a,o){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(a);o&&(t=t.filter(function(d){return Object.getOwnPropertyDescriptor(a,d).enumerable})),n.push.apply(n,t)}return n}function i(a){for(var o=1;o<arguments.length;o++){var n=arguments[o]!=null?arguments[o]:{};o%2?p(Object(n),!0).forEach(function(t){Object(l.a)(a,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach(function(t){Object.defineProperty(a,t,Object.getOwnPropertyDescriptor(n,t))})}return a}var O_=["sm","md","lg","xl"],y=["start","end","center"];function C(a,o){return O_.reduce(function(n,t){return n[a+Object(j_.I)(t)]=o(),n},{})}var U=function(o){return[].concat(y,["baseline","stretch"]).includes(o)},W=C("align",function(){return{type:String,default:null,validator:U}}),h=function(o){return[].concat(y,["space-between","space-around"]).includes(o)},x=C("justify",function(){return{type:String,default:null,validator:h}}),S=function(o){return[].concat(y,["space-between","space-around","stretch"]).includes(o)},V=C("alignContent",function(){return{type:String,default:null,validator:S}}),N={align:Object.keys(W),justify:Object.keys(x),alignContent:Object.keys(V)},P_={align:"align",justify:"justify",alignContent:"align-content"};function v_(a,o,n){var t=P_[a];if(n!=null){if(o){var d=o.replace(a,"");t+="-".concat(d)}return t+="-".concat(n),t.toLowerCase()}}var G=new Map;m.a=m_.default.extend({name:"v-row",functional:!0,props:i(i(i({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:U}},W),{},{justify:{type:String,default:null,validator:h}},x),{},{alignContent:{type:String,default:null,validator:S}},V),render:function(o,n){var t=n.props,d=n.data,f_=n.children,g="";for(var D_ in t)g+=String(t[D_]);var E=G.get(g);return E||function(){var c;E=[];var L;for(L in N)N[L].forEach(function(F){var M_=t[F],z=v_(L,F,M_);z&&E.push(z)});E.push((c={"no-gutters":t.noGutters,"row--dense":t.dense},Object(l.a)(c,"align-".concat(t.align),t.align),Object(l.a)(c,"justify-".concat(t.justify),t.justify),Object(l.a)(c,"align-content-".concat(t.alignContent),t.alignContent),c)),G.set(g,E)}(),o(t.tag,Object(u_.a)(d,{staticClass:"row",class:E}),f_)}})},761:function(J,m,_){"use strict";_.r(m);var j=function(){var s=this,e=s._self._c;return e("v-row",[e("v-col",{attrs:{cols:"12",md:"12"}},[e("LazySetupSectionCompanyName",{attrs:{form:s.form,logo:s.logo}}),s._v(" "),e("hr")],1),s._v(" "),e("v-col",{attrs:{cols:"12",md:"12"}},[e("LazySetupSectionCompanyInfo",{attrs:{form:s.form}}),s._v(" "),e("hr")],1),s._v(" "),e("v-col",{attrs:{cols:"12",md:"12"}},[e("LazySetupSectionCompanyAddress",{attrs:{form:s.form}}),s._v(" "),e("hr")],1),s._v(" "),e("v-col",{attrs:{cols:"12",md:"12"}},[e("LazySetupSectionCompanyBank",{attrs:{form:s.form}}),s._v(" "),e("hr")],1)],1)},A=[],O=_(17),$=_(4),B=_(10),H=_(216),P={name:"PaymentSetting",props:{formData:{type:Object,default:function(){return{}}}},data:function(){return{form:this.formData,logo:"",itemCurrency:[],companyNameView:!0,companyNameEdit:!1}},mounted:function(){this.getCurrency(),this.companyNameView=!0},methods:{save:function(){this.companyNameView=!0},getCurrency:function(){var s=this;this.$axios.get("/api/financial/currency").then(function(e){s.itemCurrency=e.data.data.rows})},changeCurrency:function(){var s=this.form.company_currency_code;this.form.company_currency_symbol=s.symbol,this.form.company_currency_code=s.code},getForm:function(){var s=new FormData;return Object.entries(this.form).forEach(function(e){var D=Object(O.a)(e,2),M=D[0],T=D[1];s.append(M,T)}),s},setForm:function(s,e){this.form=Object.assign({},s),this.logo=e+"/files/logo/"+this.form.company_logo}}},I=P,l=_(50),v=_(51),R=_.n(v),f=_(585),K=_(599),u=Object(l.a)(I,j,A,!1,null,null,null),Q=m.default=u.exports;R()(u,{VCol:f.a,VRow:K.a})}}]);
