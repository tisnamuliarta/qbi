(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{595:function($,m,_){"use strict";var j=_(7),R=_.n(j),O=_(9),J=_.n(O),p=_(12),H=_.n(p),P=_(13),A=_.n(P),l=_(1),v=_(4),B=_.n(v),D=_(33),K=_.n(D),u=_(52),Q=_.n(u),t=_(27),r=_.n(t),o=_(8),f=_.n(o),M=_(21),T=_.n(M),X=_(65),i_=_.n(X),Y=_(266),C_=_.n(Y),Z=_(32),y_=_.n(Z),b=_(267),g_=_.n(b),w=_(268),L_=_.n(w),k=_(269),R_=_.n(k),q=_(270),p_=_.n(q),__=_(271),A_=_.n(__),s_=_(272),B_=_.n(s_),t_=_(273),K_=_.n(t_),e_=_(274),T_=_.n(e_),n_=_(275),I_=_.n(n_),o_=_(276),U_=_.n(o_),a_=_(277),W_=_.n(a_),r_=_(278),h_=_.n(r_),l_=_(279),x_=_.n(l_),E_=_(35),S_=_.n(E_),c_=_(10),V_=_.n(c_),d_=_(280),N_=_.n(d_),m_=_(2),u_=_(78),j_=_(0);function I(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);e&&(s=s.filter(function(c){return Object.getOwnPropertyDescriptor(a,c).enumerable})),n.push.apply(n,s)}return n}function i(a){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?I(Object(n),!0).forEach(function(s){Object(l.a)(a,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach(function(s){Object.defineProperty(a,s,Object.getOwnPropertyDescriptor(n,s))})}return a}var O_=["sm","md","lg","xl"],C=["start","end","center"];function y(a,e){return O_.reduce(function(n,s){return n[a+Object(j_.H)(s)]=e(),n},{})}var U=function(e){return[].concat(C,["baseline","stretch"]).includes(e)},W=y("align",function(){return{type:String,default:null,validator:U}}),h=function(e){return[].concat(C,["space-between","space-around"]).includes(e)},x=y("justify",function(){return{type:String,default:null,validator:h}}),S=function(e){return[].concat(C,["space-between","space-around","stretch"]).includes(e)},V=y("alignContent",function(){return{type:String,default:null,validator:S}}),N={align:Object.keys(W),justify:Object.keys(x),alignContent:Object.keys(V)},P_={align:"align",justify:"justify",alignContent:"align-content"};function v_(a,e,n){var s=P_[a];if(n!=null){if(e){var c=e.replace(a,"");s+="-".concat(c)}return s+="-".concat(n),s.toLowerCase()}}var F=new Map;m.a=m_.default.extend({name:"v-row",functional:!0,props:i(i(i({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:U}},W),{},{justify:{type:String,default:null,validator:h}},x),{},{alignContent:{type:String,default:null,validator:S}},V),render:function(e,n){var s=n.props,c=n.data,D_=n.children,g="";for(var f_ in s)g+=String(s[f_]);var E=F.get(g);return E||function(){var d;E=[];var L;for(L in N)N[L].forEach(function(G){var M_=s[G],z=v_(L,G,M_);z&&E.push(z)});E.push((d={"no-gutters":s.noGutters,"row--dense":s.dense},Object(l.a)(d,"align-".concat(s.align),s.align),Object(l.a)(d,"justify-".concat(s.justify),s.justify),Object(l.a)(d,"align-content-".concat(s.alignContent),s.alignContent),d)),F.set(g,E)}(),e(s.tag,Object(u_.a)(c,{staticClass:"row",class:E}),D_)}})},885:function($,m,_){"use strict";_.r(m);var j=function(){var t=this,r=t.$createElement,o=t._self._c||r;return o("v-row",[o("v-col",{attrs:{cols:"12",md:"12"}},[o("LazySetupSectionExpenseFormContent",{attrs:{form:t.form}}),t._v(" "),o("hr")],1),t._v(" "),o("v-col",{attrs:{cols:"12",md:"12"}},[o("LazySetupSectionExpensePurchaseOrder",{attrs:{form:t.form}}),t._v(" "),o("hr")],1),t._v(" "),o("v-col",{attrs:{cols:"12",md:"12"}},[o("LazySetupSectionExpensesMessages",{attrs:{form:t.form}}),t._v(" "),o("hr")],1)],1)},R=[],O=_(17),J=_(4),p=_(10),H=_(215),P={name:"ExpenseSetting",props:{formData:{type:Object,default:function(){return{}}}},data:function(){return{form:this.formData,logo:"",itemCurrency:[],companyNameView:!0,companyNameEdit:!1}},mounted:function(){this.getCurrency(),this.companyNameView=!0},methods:{save:function(){this.companyNameView=!0},getCurrency:function(){var r=this;this.$axios.get("/api/financial/currency").then(function(o){r.itemCurrency=o.data.data.rows})},changeCurrency:function(){var r=this.form.company_currency_code;this.form.company_currency_symbol=r.symbol,this.form.company_currency_code=r.code},getForm:function(){var r=new FormData;return Object.entries(this.form).forEach(function(o){var f=Object(O.a)(o,2),M=f[0],T=f[1];r.append(M,T)}),r},setForm:function(r,o){this.form=Object.assign({},r),this.logo=o+"/files/logo/"+this.form.company_logo}}},A=P,l=_(50),v=_(51),B=_.n(v),D=_(581),K=_(595),u=Object(l.a)(A,j,R,!1,null,null,null),Q=m.default=u.exports;B()(u,{VCol:D.a,VRow:K.a})}}]);
