(window.webpackJsonp=window.webpackJsonp||[]).push([[56],{595:function(F,c,_){"use strict";var j=_(7),g=_.n(j),O=_(9),L=_.n(O),P=_(12),R=_.n(P),v=_(13),T=_.n(v),n=_(1),i=_(4),A=_.n(i),m=_(33),G=_.n(m),l=_(52),u=_.n(l),a=_(27),i_=_.n(a),H=_(8),D_=_.n(H),J=_(21),M_=_.n(J),$=_(65),f_=_.n($),z=_(266),C_=_.n(z),Q=_(32),p_=_.n(Q),X=_(267),g_=_.n(X),Y=_(268),L_=_.n(Y),Z=_(269),R_=_.n(Z),b=_(270),T_=_.n(b),w=_(271),A_=_.n(w),k=_(272),B_=_.n(k),q=_(273),K_=_.n(q),__=_(274),I_=_.n(__),t_=_(275),U_=_.n(t_),s_=_(276),W_=_.n(s_),e_=_(277),y_=_.n(e_),a_=_(278),x_=_.n(a_),o_=_(279),h_=_.n(o_),l_=_(35),V_=_.n(l_),n_=_(10),S_=_.n(n_),r_=_(280),N_=_.n(r_),d_=_(2),E_=_(78),c_=_(0);function B(o,s){var e=Object.keys(o);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(o);s&&(t=t.filter(function(d){return Object.getOwnPropertyDescriptor(o,d).enumerable})),e.push.apply(e,t)}return e}function D(o){for(var s=1;s<arguments.length;s++){var e=arguments[s]!=null?arguments[s]:{};s%2?B(Object(e),!0).forEach(function(t){Object(n.a)(o,t,e[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(e)):B(Object(e)).forEach(function(t){Object.defineProperty(o,t,Object.getOwnPropertyDescriptor(e,t))})}return o}var m_=["sm","md","lg","xl"],M=["start","end","center"];function f(o,s){return m_.reduce(function(e,t){return e[o+Object(c_.H)(t)]=s(),e},{})}var K=function(s){return[].concat(M,["baseline","stretch"]).includes(s)},I=f("align",function(){return{type:String,default:null,validator:K}}),U=function(s){return[].concat(M,["space-between","space-around"]).includes(s)},W=f("justify",function(){return{type:String,default:null,validator:U}}),y=function(s){return[].concat(M,["space-between","space-around","stretch"]).includes(s)},x=f("alignContent",function(){return{type:String,default:null,validator:y}}),h={align:Object.keys(I),justify:Object.keys(W),alignContent:Object.keys(x)},u_={align:"align",justify:"justify",alignContent:"align-content"};function j_(o,s,e){var t=u_[o];if(e!=null){if(s){var d=s.replace(o,"");t+="-".concat(d)}return t+="-".concat(e),t.toLowerCase()}}var V=new Map;c.a=d_.default.extend({name:"v-row",functional:!0,props:D(D(D({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:K}},I),{},{justify:{type:String,default:null,validator:U}},W),{},{alignContent:{type:String,default:null,validator:y}},x),render:function(s,e){var t=e.props,d=e.data,O_=e.children,C="";for(var P_ in t)C+=String(t[P_]);var r=V.get(C);return r||function(){var E;r=[];var p;for(p in h)h[p].forEach(function(S){var v_=t[S],N=j_(p,S,v_);N&&r.push(N)});r.push((E={"no-gutters":t.noGutters,"row--dense":t.dense},Object(n.a)(E,"align-".concat(t.align),t.align),Object(n.a)(E,"justify-".concat(t.justify),t.justify),Object(n.a)(E,"align-content-".concat(t.alignContent),t.alignContent),E)),V.set(C,r)}(),s(t.tag,Object(E_.a)(d,{staticClass:"row",class:r}),O_)}})},890:function(F,c,_){"use strict";_.r(c);var j=function(){var l=this,u=l.$createElement,a=l._self._c||u;return a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{staticClass:"pr-md-3 pl-md-3",attrs:{cols:"12",md:"6"}},[a("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Mailer",placeholder:"Product Name",outlined:"",dense:"","hide-details":"auto"}})],1),l._v(" "),a("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Host",placeholder:"Product Name",outlined:"",dense:"","hide-details":"auto"}})],1),l._v(" "),a("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Port",placeholder:"Product Name",outlined:"",dense:"","hide-details":"auto"}})],1),l._v(" "),a("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Username",placeholder:"Product Name",outlined:"",dense:"","hide-details":"auto"}})],1),l._v(" "),a("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Password",placeholder:"Product Name",outlined:"",dense:"","hide-details":"auto"}})],1),l._v(" "),a("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[a("v-select",{attrs:{items:["null","ssl","tls"],label:"Encryption",placeholder:"Product Name",outlined:"",dense:"","hide-details":"auto"}})],1),l._v(" "),a("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[a("v-text-field",{attrs:{label:"Mail From Address",placeholder:"Product Name",outlined:"",dense:"","hide-details":"auto"}})],1)],1)],1)},g=[],O={name:"EmailSetup",props:{formData:{type:Object,default:function(){return{}}}},data:function(){return{form:this.formData}},methods:{getForm:function(){return this.form},setForm:function(u){this.form=Object.assign({},u)}}},L=O,P=_(50),R=_(51),v=_.n(R),T=_(581),n=_(595),i=_(637),A=_(570),m=Object(P.a)(L,j,g,!1,null,null,null),G=c.default=m.exports;v()(m,{VCol:T.a,VRow:n.a,VSelect:i.a,VTextField:A.a})}}]);
