(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{1110:function(V,u,_){"use strict";_.r(u);var O=_(250),c=_(595),m=_(587),A=_(600),j=function(){var n=this,a=n._self._c;return a(O.a,{attrs:{outlined:""}},[a(m.a,{attrs:{fluid:""}},[a(A.a,{attrs:{"no-gutters":""}},[a(c.a,{attrs:{cols:"12",md:"3"}},[a("LazyFormListAction",{attrs:{title:"YOUR COMPANY",items:n.itemCompany},on:{openAction:n.openAction}})],1),n._v(" "),a(c.a,{attrs:{cols:"12",md:"3"}},[a("LazyFormListAction",{attrs:{title:"LISTS",items:n.itemList},on:{openAction:n.openAction}})],1),n._v(" "),a(c.a,{attrs:{cols:"12",md:"3"}},[a("LazyFormListAction",{attrs:{title:"TOOLS",items:n.itemTool},on:{openAction:n.openAction}})],1),n._v(" "),a(c.a,{attrs:{cols:"12",md:"3"}},[a("LazyFormListAction",{attrs:{title:"PROFILE",items:n.itemProfile},on:{openAction:n.openAction}})],1)],1)],1)],1)},C=[],P={name:"SettingList",data:function(){return{dialog:!1,itemCompany:[{text:"Account and Settings",route:"/app/settings",action:"setting"},{text:"Manage User",route:"/list/users",action:"page"},{text:"Chart Of Account",route:"/app/accounting/account",action:"page"}],itemList:[{text:"All List",route:"/list",action:"page"},{text:"Product and Services",route:"/app/item/list",action:"page"},{text:"Recurring Transactions",route:"/list/recurring",action:"page"},{text:"Attachments",route:"/list/attachment",action:"page"},{text:"Currencies",route:"/list/currency",action:"page"},{text:"Tags",type:"page",action:"page"}],itemProfile:[{text:"Account",route:"/users/currenct",action:"page"},{text:"Sign Out",type:"function",action:"logout"}],itemTool:[{text:"Reclassify transaction",route:"/app/accounting/reclassify",action:"page"},{text:"Import Data",route:"/tools/import",action:"page"},{text:"Export Data",route:"/tools/export",action:"page"},{text:"Reconcile",route:"/app/accounting/reconcile",action:"page"},{text:"Budgeting",route:"/app/accounting/budgeting",action:"page"},{text:"Audit Log",route:"/tools/audit",action:"page"},{text:"Backup Company",route:"/tools/audit",action:"page"}]}},methods:{openDialog:function(){this.dialog=!0},openAction:function(n){this.$emit("openAction",{item:n.item}),this.dialog=!1}}},L=P,r=_(50),D=Object(r.a)(L,j,C,!1,null,null,null),F=u.default=D.exports},600:function(V,u,_){"use strict";var O=_(7),c=_.n(O),m=_(10),A=_.n(m),j=_(12),C=_.n(j),P=_(13),L=_.n(P),r=_(2),D=_(4),F=_.n(D),i=_(34),n=_.n(i),a=_(51),P_=_.n(a),G=_(28),D_=_.n(G),N=_(8),M_=_.n(N),z=_(21),v_=_.n(z),J=_(64),f_=_.n(J),Y=_(271),g_=_.n(Y),$=_(33),p_=_.n($),H=_(272),A_=_.n(H),Q=_(273),C_=_.n(Q),X=_(274),L_=_.n(X),Z=_(275),y_=_.n(Z),b=_(276),R_=_.n(b),w=_(277),T_=_.n(w),k=_(278),I_=_.n(k),q=_(279),B_=_.n(q),__=_(280),K_=_.n(__),t_=_(281),U_=_.n(t_),e_=_(282),W_=_.n(e_),s_=_(283),x_=_.n(s_),o_=_(284),h_=_.n(o_),n_=_(35),S_=_.n(n_),a_=_(9),V_=_.n(a_),r_=_(285),F_=_.n(r_),l_=_(3),c_=_(77),i_=_(1);function y(o,e){var s=Object.keys(o);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(o);e&&(t=t.filter(function(E){return Object.getOwnPropertyDescriptor(o,E).enumerable})),s.push.apply(s,t)}return s}function M(o){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{};e%2?y(Object(s),!0).forEach(function(t){Object(r.a)(o,t,s[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(s)):y(Object(s)).forEach(function(t){Object.defineProperty(o,t,Object.getOwnPropertyDescriptor(s,t))})}return o}var E_=["sm","md","lg","xl"],v=["start","end","center"];function f(o,e){return E_.reduce(function(s,t){return s[o+Object(i_.I)(t)]=e(),s},{})}var R=function(e){return[].concat(v,["baseline","stretch"]).includes(e)},T=f("align",function(){return{type:String,default:null,validator:R}}),I=function(e){return[].concat(v,["space-between","space-around"]).includes(e)},B=f("justify",function(){return{type:String,default:null,validator:I}}),K=function(e){return[].concat(v,["space-between","space-around","stretch"]).includes(e)},U=f("alignContent",function(){return{type:String,default:null,validator:K}}),W={align:Object.keys(T),justify:Object.keys(B),alignContent:Object.keys(U)},d_={align:"align",justify:"justify",alignContent:"align-content"};function u_(o,e,s){var t=d_[o];if(s!=null){if(e){var E=e.replace(o,"");t+="-".concat(E)}return t+="-".concat(s),t.toLowerCase()}}var x=new Map;u.a=l_.default.extend({name:"v-row",functional:!0,props:M(M(M({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:R}},T),{},{justify:{type:String,default:null,validator:I}},B),{},{alignContent:{type:String,default:null,validator:K}},U),render:function(e,s){var t=s.props,E=s.data,O_=s.children,g="";for(var m_ in t)g+=String(t[m_]);var l=x.get(g);return l||function(){var d;l=[];var p;for(p in W)W[p].forEach(function(h){var j_=t[h],S=u_(p,h,j_);S&&l.push(S)});l.push((d={"no-gutters":t.noGutters,"row--dense":t.dense},Object(r.a)(d,"align-".concat(t.align),t.align),Object(r.a)(d,"justify-".concat(t.justify),t.justify),Object(r.a)(d,"align-content-".concat(t.alignContent),t.alignContent),d)),x.set(g,l)}(),e(t.tag,Object(c_.a)(E,{staticClass:"row",class:l}),O_)}})}}]);