(window.webpackJsonp=window.webpackJsonp||[]).push([[254],{1010:function(H,c,_){"use strict";_.r(c);var v=_(249),D=_(87),u=_(587),I=_(585),m=_(575),P=_(598),i=function(){var o=this,a=o._self._c;return a(I.a,[a(P.a,[a(u.a,{attrs:{cols:"12",lg:"10"}},[a(P.a,[a(u.a,{attrs:{cols:"12",sm:"6",lg:"6"}},[a(v.a,[a(D.b,[a("div",{staticClass:"subtitle-1"},[o._v("SALES")])]),o._v(" "),a(m.a),o._v(" "),a(D.b,[a("LazyChartLineChart",{ref:"sales"})],1)],1)],1)],1)],1)],1)],1)},K=[],l=_(24),T=_(73),U={name:"SalesOverview",head:function(){return{title:"Sales Overview"}},activated:function(){this.getDataChart(),this.$nuxt.$emit("extensionSetting",{show:!1,showBtn:!1})},mounted:function(){this.getDataChart()},created:function(){var o=this;this.$nuxt.$on("getDataFromApi",function(a){return o.getDataFromApi(a)})},methods:{getDataFromApi:function(){this.$refs.tableDocument&&this.$refs.tableDocument.getDataFromApi()},getDataChart:function(){var o=this;return Object(l.a)(regeneratorRuntime.mark(function a(){var C;return regeneratorRuntime.wrap(function(E){for(;;)switch(E.prev=E.next){case 0:return E.next=2,o.$axios.get("/api/chart",{params:{type:"line",data:"sales"}});case 2:C=E.sent,o.$refs.sales.setData(C.data),o.$nuxt.$loading.finish();case 5:case"end":return E.stop()}},a)}))()}}},M=U,W=_(50),f=Object(W.a)(M,i,K,!1,null,null,null),Q=c.default=f.exports},598:function(H,c,_){"use strict";var v=_(7),D=_.n(v),u=_(10),I=_.n(u),m=_(12),P=_.n(m),i=_(13),K=_.n(i),l=_(2),T=_(4),U=_.n(T),M=_(34),W=_.n(M),f=_(51),Q=_.n(f),r=_(28),o=_.n(r),a=_(8),C=_.n(a),y=_(21),E=_.n(y),X=_(64),f_=_.n(X),Y=_(269),C_=_.n(Y),Z=_(33),g_=_.n(Z),b=_(270),A_=_.n(b),w=_(271),L_=_.n(w),k=_(272),R_=_.n(k),q=_(273),B_=_.n(q),__=_(274),I_=_.n(__),s_=_(275),K_=_.n(s_),t_=_(276),T_=_.n(t_),e_=_(277),U_=_.n(e_),a_=_(278),W_=_.n(a_),n_=_(279),y_=_.n(n_),o_=_(280),p_=_.n(o_),r_=_(281),h_=_.n(r_),l_=_(282),x_=_.n(l_),E_=_(35),S_=_.n(E_),d_=_(9),V_=_.n(d_),j_=_(283),$_=_.n(j_),O_=_(3),c_=_(77),u_=_(1);function p(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);t&&(s=s.filter(function(j){return Object.getOwnPropertyDescriptor(n,j).enumerable})),e.push.apply(e,s)}return e}function g(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};t%2?p(Object(e),!0).forEach(function(s){Object(l.a)(n,s,e[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(e)):p(Object(e)).forEach(function(s){Object.defineProperty(n,s,Object.getOwnPropertyDescriptor(e,s))})}return n}var v_=["sm","md","lg","xl"],A=["start","end","center"];function L(n,t){return v_.reduce(function(e,s){return e[n+Object(u_.I)(s)]=t(),e},{})}var h=function(t){return[].concat(A,["baseline","stretch"]).includes(t)},x=L("align",function(){return{type:String,default:null,validator:h}}),S=function(t){return[].concat(A,["space-between","space-around"]).includes(t)},V=L("justify",function(){return{type:String,default:null,validator:S}}),$=function(t){return[].concat(A,["space-between","space-around","stretch"]).includes(t)},G=L("alignContent",function(){return{type:String,default:null,validator:$}}),F={align:Object.keys(x),justify:Object.keys(V),alignContent:Object.keys(G)},D_={align:"align",justify:"justify",alignContent:"align-content"};function m_(n,t,e){var s=D_[n];if(e!=null){if(t){var j=t.replace(n,"");s+="-".concat(j)}return s+="-".concat(e),s.toLowerCase()}}var N=new Map;c.a=O_.default.extend({name:"v-row",functional:!0,props:g(g(g({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:h}},x),{},{justify:{type:String,default:null,validator:S}},V),{},{alignContent:{type:String,default:null,validator:$}},G),render:function(t,e){var s=e.props,j=e.data,P_=e.children,R="";for(var i_ in s)R+=String(s[i_]);var d=N.get(R);return d||function(){var O;d=[];var B;for(B in F)F[B].forEach(function(z){var M_=s[z],J=m_(B,z,M_);J&&d.push(J)});d.push((O={"no-gutters":s.noGutters,"row--dense":s.dense},Object(l.a)(O,"align-".concat(s.align),s.align),Object(l.a)(O,"justify-".concat(s.justify),s.justify),Object(l.a)(O,"align-content-".concat(s.alignContent),s.alignContent),O)),N.set(R,d)}(),t(s.tag,Object(c_.a)(j,{staticClass:"row",class:d}),P_)}})}}]);
