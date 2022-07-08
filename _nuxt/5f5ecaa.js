(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{595:function($,m,_){"use strict";var j=_(7),L=_.n(j),v=_(9),J=_.n(v),T=_(12),H=_.n(T),O=_(13),R=_.n(O),l=_(1),f=_(4),B=_.n(f),P=_(33),K=_.n(P),u=_(52),Q=_.n(u),t=_(27),r=_.n(t),s=_(8),i=_.n(s),D=_(21),I=_.n(D),X=_(65),M_=_.n(X),Y=_(266),y_=_.n(Y),Z=_(32),C_=_.n(Z),b=_(267),g_=_.n(b),w=_(268),A_=_.n(w),k=_(269),L_=_.n(k),q=_(270),T_=_.n(q),__=_(271),R_=_.n(__),t_=_(272),B_=_.n(t_),s_=_(273),K_=_.n(s_),e_=_(274),I_=_.n(e_),o_=_(275),U_=_.n(o_),n_=_(276),W_=_.n(n_),a_=_(277),p_=_.n(a_),r_=_(278),h_=_.n(r_),l_=_(279),x_=_.n(l_),c_=_(35),S_=_.n(c_),d_=_(10),V_=_.n(d_),E_=_(280),N_=_.n(E_),m_=_(2),u_=_(78),j_=_(0);function U(a,o){var n=Object.keys(a);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(a);o&&(e=e.filter(function(d){return Object.getOwnPropertyDescriptor(a,d).enumerable})),n.push.apply(n,e)}return n}function M(a){for(var o=1;o<arguments.length;o++){var n=arguments[o]!=null?arguments[o]:{};o%2?U(Object(n),!0).forEach(function(e){Object(l.a)(a,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(n)):U(Object(n)).forEach(function(e){Object.defineProperty(a,e,Object.getOwnPropertyDescriptor(n,e))})}return a}var v_=["sm","md","lg","xl"],y=["start","end","center"];function C(a,o){return v_.reduce(function(n,e){return n[a+Object(j_.H)(e)]=o(),n},{})}var W=function(o){return[].concat(y,["baseline","stretch"]).includes(o)},p=C("align",function(){return{type:String,default:null,validator:W}}),h=function(o){return[].concat(y,["space-between","space-around"]).includes(o)},x=C("justify",function(){return{type:String,default:null,validator:h}}),S=function(o){return[].concat(y,["space-between","space-around","stretch"]).includes(o)},V=C("alignContent",function(){return{type:String,default:null,validator:S}}),N={align:Object.keys(p),justify:Object.keys(x),alignContent:Object.keys(V)},O_={align:"align",justify:"justify",alignContent:"align-content"};function f_(a,o,n){var e=O_[a];if(n!=null){if(o){var d=o.replace(a,"");e+="-".concat(d)}return e+="-".concat(n),e.toLowerCase()}}var z=new Map;m.a=m_.default.extend({name:"v-row",functional:!0,props:M(M(M({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:W}},p),{},{justify:{type:String,default:null,validator:h}},x),{},{alignContent:{type:String,default:null,validator:S}},V),render:function(o,n){var e=n.props,d=n.data,P_=n.children,g="";for(var i_ in e)g+=String(e[i_]);var c=z.get(g);return c||function(){var E;c=[];var A;for(A in N)N[A].forEach(function(G){var D_=e[G],F=f_(A,G,D_);F&&c.push(F)});c.push((E={"no-gutters":e.noGutters,"row--dense":e.dense},Object(l.a)(E,"align-".concat(e.align),e.align),Object(l.a)(E,"justify-".concat(e.justify),e.justify),Object(l.a)(E,"align-content-".concat(e.alignContent),e.alignContent),E)),z.set(g,c)}(),o(e.tag,Object(u_.a)(d,{staticClass:"row",class:c}),P_)}})},884:function($,m,_){"use strict";_.r(m);var j=function(){var t=this,r=t.$createElement,s=t._self._c||r;return s("v-row",[s("v-col",{attrs:{cols:"12",md:"12"}},[s("LazySetupSectionAdvanceAccounting",{attrs:{form:t.form}}),t._v(" "),s("hr")],1),t._v(" "),s("v-col",{attrs:{cols:"12",md:"12"}},[s("LazySetupSectionAdvancedChartOfAccount",{attrs:{form:t.form}}),t._v(" "),s("hr")],1),t._v(" "),s("v-col",{attrs:{cols:"12",md:"12"}},[s("LazySetupSectionAdvancedCategory",{attrs:{form:t.form}}),t._v(" "),s("hr")],1),t._v(" "),s("v-col",{attrs:{cols:"12",md:"12"}},[s("LazySetupSectionAdvancedProject",{attrs:{form:t.form}}),t._v(" "),s("hr")],1),t._v(" "),s("v-col",{attrs:{cols:"12",md:"12"}},[s("LazySetupSectionAdvancedTimeTracking",{attrs:{form:t.form}}),t._v(" "),s("hr")],1),t._v(" "),s("v-col",{attrs:{cols:"12",md:"12"}},[s("LazySetupSectionAdvancedCurrency",{attrs:{form:t.form}}),t._v(" "),s("hr")],1),t._v(" "),s("v-col",{attrs:{cols:"12",md:"12"}},[s("LazySetupSectionAdvancedOther",{attrs:{form:t.form}}),t._v(" "),s("hr")],1)],1)},L=[],v=_(17),J=_(4),T=_(10),H=_(215),O={name:"AdvanceSetting",props:{formData:{type:Object,default:function(){return{}}}},data:function(){return{form:this.formData,logo:"",itemCurrency:[],companyNameView:!0,companyNameEdit:!1}},mounted:function(){this.getCurrency(),this.companyNameView=!0},methods:{save:function(){this.companyNameView=!0},getCurrency:function(){var r=this;this.$axios.get("/api/financial/currency").then(function(s){r.itemCurrency=s.data.data.rows})},changeCurrency:function(){var r=this.form.company_currency_code;this.form.company_currency_symbol=r.symbol,this.form.company_currency_code=r.code},getForm:function(){var r=new FormData;return Object.entries(this.form).forEach(function(s){var i=Object(v.a)(s,2),D=i[0],I=i[1];r.append(D,I)}),r},setForm:function(r,s){this.form=Object.assign({},r),this.logo=s+"/files/logo/"+this.form.company_logo}}},R=O,l=_(50),f=_(51),B=_.n(f),P=_(581),K=_(595),u=Object(l.a)(R,j,L,!1,null,null,null),Q=m.default=u.exports;B()(u,{VCol:P.a,VRow:K.a})}}]);