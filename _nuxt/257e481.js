(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{599:function(J,m,_){"use strict";var j=_(7),R=_.n(j),O=_(9),$=_.n(O),p=_(12),H=_.n(p),P=_(13),A=_.n(P),l=_(2),v=_(4),B=_.n(v),D=_(33),I=_.n(D),u=_(52),Q=_.n(u),r=_(28),t=_.n(r),o=_(8),f=_.n(o),M=_(21),K=_.n(M),X=_(65),i_=_.n(X),Y=_(269),C_=_.n(Y),Z=_(32),y_=_.n(Z),b=_(270),g_=_.n(b),w=_(271),L_=_.n(w),k=_(272),R_=_.n(k),q=_(273),p_=_.n(q),__=_(274),A_=_.n(__),s_=_(275),B_=_.n(s_),t_=_(276),I_=_.n(t_),e_=_(277),K_=_.n(e_),n_=_(278),T_=_.n(n_),o_=_(279),U_=_.n(o_),a_=_(280),W_=_.n(a_),r_=_(281),h_=_.n(r_),l_=_(282),x_=_.n(l_),E_=_(34),S_=_.n(E_),d_=_(10),V_=_.n(d_),c_=_(283),N_=_.n(c_),m_=_(3),u_=_(78),j_=_(1);function T(a,e){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);e&&(s=s.filter(function(d){return Object.getOwnPropertyDescriptor(a,d).enumerable})),n.push.apply(n,s)}return n}function i(a){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?T(Object(n),!0).forEach(function(s){Object(l.a)(a,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):T(Object(n)).forEach(function(s){Object.defineProperty(a,s,Object.getOwnPropertyDescriptor(n,s))})}return a}var O_=["sm","md","lg","xl"],C=["start","end","center"];function y(a,e){return O_.reduce(function(n,s){return n[a+Object(j_.I)(s)]=e(),n},{})}var U=function(e){return[].concat(C,["baseline","stretch"]).includes(e)},W=y("align",function(){return{type:String,default:null,validator:U}}),h=function(e){return[].concat(C,["space-between","space-around"]).includes(e)},x=y("justify",function(){return{type:String,default:null,validator:h}}),S=function(e){return[].concat(C,["space-between","space-around","stretch"]).includes(e)},V=y("alignContent",function(){return{type:String,default:null,validator:S}}),N={align:Object.keys(W),justify:Object.keys(x),alignContent:Object.keys(V)},P_={align:"align",justify:"justify",alignContent:"align-content"};function v_(a,e,n){var s=P_[a];if(n!=null){if(e){var d=e.replace(a,"");s+="-".concat(d)}return s+="-".concat(n),s.toLowerCase()}}var F=new Map;m.a=m_.default.extend({name:"v-row",functional:!0,props:i(i(i({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:U}},W),{},{justify:{type:String,default:null,validator:h}},x),{},{alignContent:{type:String,default:null,validator:S}},V),render:function(e,n){var s=n.props,d=n.data,D_=n.children,g="";for(var f_ in s)g+=String(s[f_]);var E=F.get(g);return E||function(){var c;E=[];var L;for(L in N)N[L].forEach(function(G){var M_=s[G],z=v_(L,G,M_);z&&E.push(z)});E.push((c={"no-gutters":s.noGutters,"row--dense":s.dense},Object(l.a)(c,"align-".concat(s.align),s.align),Object(l.a)(c,"justify-".concat(s.justify),s.justify),Object(l.a)(c,"align-content-".concat(s.alignContent),s.alignContent),c)),F.set(g,E)}(),e(s.tag,Object(u_.a)(d,{staticClass:"row",class:E}),D_)}})},760:function(J,m,_){"use strict";_.r(m);var j=function(){var t=this,o=t._self._c;return o("v-row",[o("v-col",{attrs:{cols:"12",md:"12"}},[o("LazySetupSectionExpenseFormContent",{attrs:{form:t.form}}),t._v(" "),o("hr")],1),t._v(" "),o("v-col",{attrs:{cols:"12",md:"12"}},[o("LazySetupSectionExpensePurchaseOrder",{attrs:{form:t.form}}),t._v(" "),o("hr")],1),t._v(" "),o("v-col",{attrs:{cols:"12",md:"12"}},[o("LazySetupSectionExpensesMessages",{attrs:{form:t.form}}),t._v(" "),o("hr")],1)],1)},R=[],O=_(17),$=_(4),p=_(10),H=_(216),P={name:"ExpenseSetting",props:{formData:{type:Object,default:function(){return{}}}},data:function(){return{form:this.formData,logo:"",itemCurrency:[],companyNameView:!0,companyNameEdit:!1}},mounted:function(){this.getCurrency(),this.companyNameView=!0},methods:{save:function(){this.companyNameView=!0},getCurrency:function(){var t=this;this.$axios.get("/api/financial/currency").then(function(o){t.itemCurrency=o.data.data.rows})},changeCurrency:function(){var t=this.form.company_currency_code;this.form.company_currency_symbol=t.symbol,this.form.company_currency_code=t.code},getForm:function(){var t=new FormData;return Object.entries(this.form).forEach(function(o){var f=Object(O.a)(o,2),M=f[0],K=f[1];t.append(M,K)}),t},setForm:function(t,o){this.form=Object.assign({},t),this.logo=o+"/files/logo/"+this.form.company_logo}}},A=P,l=_(50),v=_(51),B=_.n(v),D=_(585),I=_(599),u=Object(l.a)(A,j,R,!1,null,null,null),Q=m.default=u.exports;B()(u,{VCol:D.a,VRow:I.a})}}]);
