(window.webpackJsonp=window.webpackJsonp||[]).push([[211],{598:function(G,u,_){"use strict";var E=_(7),l=_.n(E),r=_(10),L=_.n(r),m=_(12),R=_.n(m),i=_(13),g=_.n(i),d=_(2),P=_(4),A=_.n(P),U=_(34),O=_.n(U),a=_(51),s=_.n(a),$=_(28),P_=_.n($),F=_(8),D_=_.n(F),H=_(21),M_=_.n(H),N=_(64),f_=_.n(N),J=_(269),C_=_.n(J),Q=_(33),T_=_.n(Q),X=_(270),L_=_.n(X),Y=_(271),R_=_.n(Y),Z=_(272),g_=_.n(Z),b=_(273),A_=_.n(b),w=_(274),U_=_.n(w),k=_(275),B_=_.n(k),q=_(276),I_=_.n(q),__=_(277),K_=_.n(__),s_=_(278),y_=_.n(s_),t_=_(279),W_=_.n(t_),a_=_(280),p_=_.n(a_),e_=_(281),x_=_.n(e_),n_=_(282),h_=_.n(n_),o_=_(35),S_=_.n(o_),l_=_(9),V_=_.n(l_),r_=_(283),z_=_.n(r_),E_=_(3),d_=_(77),c_=_(1);function B(o,e){var n=Object.keys(o);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(o);e&&(t=t.filter(function(v){return Object.getOwnPropertyDescriptor(o,v).enumerable})),n.push.apply(n,t)}return n}function D(o){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?B(Object(n),!0).forEach(function(t){Object(d.a)(o,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(n)):B(Object(n)).forEach(function(t){Object.defineProperty(o,t,Object.getOwnPropertyDescriptor(n,t))})}return o}var O_=["sm","md","lg","xl"],M=["start","end","center"];function f(o,e){return O_.reduce(function(n,t){return n[o+Object(c_.I)(t)]=e(),n},{})}var I=function(e){return[].concat(M,["baseline","stretch"]).includes(e)},K=f("align",function(){return{type:String,default:null,validator:I}}),y=function(e){return[].concat(M,["space-between","space-around"]).includes(e)},W=f("justify",function(){return{type:String,default:null,validator:y}}),p=function(e){return[].concat(M,["space-between","space-around","stretch"]).includes(e)},x=f("alignContent",function(){return{type:String,default:null,validator:p}}),h={align:Object.keys(K),justify:Object.keys(W),alignContent:Object.keys(x)},v_={align:"align",justify:"justify",alignContent:"align-content"};function j_(o,e,n){var t=v_[o];if(n!=null){if(e){var v=e.replace(o,"");t+="-".concat(v)}return t+="-".concat(n),t.toLowerCase()}}var S=new Map;u.a=E_.default.extend({name:"v-row",functional:!0,props:D(D(D({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:I}},K),{},{justify:{type:String,default:null,validator:y}},W),{},{alignContent:{type:String,default:null,validator:p}},x),render:function(e,n){var t=n.props,v=n.data,u_=n.children,C="";for(var m_ in t)C+=String(t[m_]);var c=S.get(C);return c||function(){var j;c=[];var T;for(T in h)h[T].forEach(function(V){var i_=t[V],z=j_(T,V,i_);z&&c.push(z)});c.push((j={"no-gutters":t.noGutters,"row--dense":t.dense},Object(d.a)(j,"align-".concat(t.align),t.align),Object(d.a)(j,"justify-".concat(t.justify),t.justify),Object(d.a)(j,"align-content-".concat(t.alignContent),t.alignContent),j)),S.set(C,c)}(),e(t.tag,Object(d_.a)(v,{staticClass:"row",class:c}),u_)}})},997:function(G,u,_){"use strict";_.r(u);var E=_(249),l=_(88),r=_(587),L=_(585),m=_(598),R=function(){var a=this,s=a._self._c;return s(L.a,[s(m.a,[s(r.a,{attrs:{cols:"12",lg:"10"}},[s(m.a,[s(r.a,{attrs:{cols:"12",md:"6",xl:"4"}},[s(E.a,{staticClass:"mx-auto"},[s(l.b,[s("div",{staticClass:"subtitle-1"},[a._v("SHORTCUTS")])]),a._v(" "),s(l.b,[s("LazyChartBarChart")],1)],1)],1),a._v(" "),s(r.a,{attrs:{cols:"12",md:"6",xl:"4"}},[s(E.a,{staticClass:"mx-auto"},[s(l.b,[s("div",{staticClass:"subtitle-1"},[a._v("SHORTCUTS")])]),a._v(" "),s(l.b,[s("LazyChartBarChart")],1)],1)],1),a._v(" "),s(r.a,{attrs:{cols:"12",md:"6",xl:"4"}},[s(E.a,{staticClass:"mx-auto"},[s(l.b,[s("div",{staticClass:"subtitle-1"},[a._v("SHORTCUTS")])]),a._v(" "),s(l.b,[s("LazyChartLineChart")],1)],1)],1),a._v(" "),s(r.a,{attrs:{cols:"12",md:"6",xl:"4"}},[s(E.a,{staticClass:"mx-auto"},[s(l.b,[s("div",{staticClass:"subtitle-1"},[a._v("SHORTCUTS")])]),a._v(" "),s(l.b,[s("LazyChartLineChart")],1)],1)],1),a._v(" "),s(r.a,{attrs:{cols:"12",md:"6",xl:"4"}},[s(E.a,{staticClass:"mx-auto"},[s(l.b,[s("div",{staticClass:"subtitle-1"},[a._v("SHORTCUTS")])]),a._v(" "),s(l.b,[s("LazyChartPieChart")],1)],1)],1),a._v(" "),s(r.a,{attrs:{cols:"12",md:"6",xl:"4"}},[s(E.a,{staticClass:"mx-auto"},[s(l.b,[s("div",{staticClass:"subtitle-1"},[a._v("SHORTCUTS")])]),a._v(" "),s(l.b,[s("LazyChartDoughnutChart")],1)],1)],1)],1)],1)],1)],1)},i=[],g={name:"SalesOverview",head:function(){return{title:"Sales Overview"}},activated:function(){this.$nuxt.$emit("extensionSetting",{show:!1,showBtn:!1})},created:function(){var a=this;this.$nuxt.$on("getDataFromApi",function(s){return a.getDataFromApi(s)})},methods:{getDataFromApi:function(){this.$refs.tableDocument&&this.$refs.tableDocument.getDataFromApi()}}},d=g,P=_(50),A=Object(P.a)(d,R,i,!1,null,null,null),U=u.default=A.exports}}]);
