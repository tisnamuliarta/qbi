(window.webpackJsonp=window.webpackJsonp||[]).push([[255],{1013:function(X,j,_){"use strict";_.r(j);var v=_(250),m=_(595),u=_(587),T=_(248),i=_(166),D=_(31),P=_(143),M=_(600),l=function(){var o=this,e=o._self._c;return e(u.a,[e(M.a,[e(m.a,{attrs:{cols:"12",lg:"8"}},[e(M.a,[e(m.a,{attrs:{cols:"12",sm:"6",lg:"4",md:"4"}},[e(v.a,{staticClass:"mx-auto",attrs:{outlined:""}},[e(i.a,{attrs:{"three-line":""}},[e(D.b,[e("div",{staticClass:"text-overline mb-4"},[o._v("Open Invoice")]),o._v(" "),e(D.d,{staticClass:"text-h5 mb-1"},[e("span",{staticClass:"text-right font-weight-bold text-h4"},[o._v(`
                  `+o._s(o.$formatter.formatPrice(1e8))+`
                `)])])],1),o._v(" "),e(P.a,[e(T.a,{attrs:{"x-large":""}},[o._v("mdi-sale")])],1)],1)],1)],1)],1)],1)],1)],1)},f=[],U=_(24),W=_(73),y={name:"SalesOverview",head:function(){return{title:"Sales Overview"}},activated:function(){this.getDataChart(),this.$nuxt.$emit("extensionSetting",{show:!1,showBtn:!1})},mounted:function(){this.getDataChart()},created:function(){var o=this;this.$nuxt.$on("getDataFromApi",function(e){return o.getDataFromApi(e)})},methods:{getDataFromApi:function(){this.$refs.tableDocument&&this.$refs.tableDocument.getDataFromApi()},getDataChart:function(){var o=this;return Object(U.a)(regeneratorRuntime.mark(function e(){var I;return regeneratorRuntime.wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,o.$axios.get("/api/chart",{params:{type:"line",data:"sales"}});case 2:I=E.sent,o.$refs.sales.setData(I.data),o.$nuxt.$loading.finish();case 5:case"end":return E.stop()}},e)}))()}}},C=y,p=_(50),g=Object(p.a)(C,l,f,!1,null,null,null),Y=j.default=g.exports},600:function(X,j,_){"use strict";var v=_(7),m=_.n(v),u=_(10),T=_.n(u),i=_(12),D=_.n(i),P=_(13),M=_.n(P),l=_(2),f=_(4),U=_.n(f),W=_(34),y=_.n(W),C=_(51),p=_.n(C),g=_(28),Y=_.n(g),r=_(8),o=_.n(r),e=_(21),I=_.n(e),h=_(64),E=_.n(h),Z=_(271),C_=_.n(Z),b=_(33),g_=_.n(b),w=_(272),I_=_.n(w),k=_(273),L_=_.n(k),q=_(274),A_=_.n(q),__=_(275),R_=_.n(__),t_=_(276),B_=_.n(t_),s_=_(277),K_=_.n(s_),e_=_(278),T_=_.n(e_),a_=_(279),U_=_.n(a_),n_=_(280),W_=_.n(n_),o_=_(281),y_=_.n(o_),r_=_(282),p_=_.n(r_),l_=_(283),h_=_.n(l_),E_=_(284),x_=_.n(E_),d_=_(35),V_=_.n(d_),c_=_(9),S_=_.n(c_),O_=_(285),$_=_.n(O_),j_=_(3),v_=_(77),m_=_(1);function x(n,s){var a=Object.keys(n);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(n);s&&(t=t.filter(function(c){return Object.getOwnPropertyDescriptor(n,c).enumerable})),a.push.apply(a,t)}return a}function L(n){for(var s=1;s<arguments.length;s++){var a=arguments[s]!=null?arguments[s]:{};s%2?x(Object(a),!0).forEach(function(t){Object(l.a)(n,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(a)):x(Object(a)).forEach(function(t){Object.defineProperty(n,t,Object.getOwnPropertyDescriptor(a,t))})}return n}var u_=["sm","md","lg","xl"],A=["start","end","center"];function R(n,s){return u_.reduce(function(a,t){return a[n+Object(m_.I)(t)]=s(),a},{})}var V=function(s){return[].concat(A,["baseline","stretch"]).includes(s)},S=R("align",function(){return{type:String,default:null,validator:V}}),$=function(s){return[].concat(A,["space-between","space-around"]).includes(s)},G=R("justify",function(){return{type:String,default:null,validator:$}}),F=function(s){return[].concat(A,["space-between","space-around","stretch"]).includes(s)},N=R("alignContent",function(){return{type:String,default:null,validator:F}}),J={align:Object.keys(S),justify:Object.keys(G),alignContent:Object.keys(N)},i_={align:"align",justify:"justify",alignContent:"align-content"};function D_(n,s,a){var t=i_[n];if(a!=null){if(s){var c=s.replace(n,"");t+="-".concat(c)}return t+="-".concat(a),t.toLowerCase()}}var z=new Map;j.a=j_.default.extend({name:"v-row",functional:!0,props:L(L(L({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:V}},S),{},{justify:{type:String,default:null,validator:$}},G),{},{alignContent:{type:String,default:null,validator:F}},N),render:function(s,a){var t=a.props,c=a.data,P_=a.children,B="";for(var M_ in t)B+=String(t[M_]);var d=z.get(B);return d||function(){var O;d=[];var K;for(K in J)J[K].forEach(function(H){var f_=t[H],Q=D_(K,H,f_);Q&&d.push(Q)});d.push((O={"no-gutters":t.noGutters,"row--dense":t.dense},Object(l.a)(O,"align-".concat(t.align),t.align),Object(l.a)(O,"justify-".concat(t.justify),t.justify),Object(l.a)(O,"align-content-".concat(t.alignContent),t.alignContent),O)),z.set(B,d)}(),s(t.tag,Object(v_.a)(c,{staticClass:"row",class:d}),P_)}})}}]);
