(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{1124:function(N,d,t){"use strict";t.r(d);var c=function(){var o=this,E=o.$createElement,a=o._self._c||E;return a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",md:"3"}},[a("LazyFormListAction",{attrs:{title:"SALES",items:o.itemSales},on:{openAction:o.openAction}})],1),o._v(" "),a("v-col",{attrs:{cols:"12",md:"3"}},[a("LazyFormListAction",{attrs:{title:"PURCHASING",items:o.itemPurchase},on:{openAction:o.openAction}})],1),o._v(" "),a("v-col",{attrs:{cols:"12",md:"3"}},[a("LazyFormListAction",{attrs:{title:"EMPLOYEE",items:o.itemEmployee},on:{openAction:o.openAction}})],1),o._v(" "),a("v-col",{attrs:{cols:"12",md:"3"}},[a("LazyFormListAction",{attrs:{title:"OTHER",items:o.itemOther},on:{openAction:o.openAction}})],1)],1)],1)},A=[],u={name:"NewForm",data:function(){return{dialog:!1,itemSales:[{text:this.$t("Sales Quotations"),type:"SQ",route:"/app/form/sales/quote"},{text:this.$t("Sales Order"),type:"SO",route:"/app/form/sales/order"},{text:this.$t("Sales Delivery"),type:"SD",route:"/app/form/sales/delivery"},{text:this.$t("A/R Invoice"),type:"SI",route:"/app/form/sales/invoice"},{text:this.$t("Incoming Payment"),type:"SP",route:"/app/form/sales/payment"},{text:this.$t("A/R Credit Memo"),type:"ARCM",route:"/app/form/sales/creditmemo"},{text:this.$t("Sales Return"),type:"SR",route:"/app/form/sales/return"}],itemPurchase:[{text:this.$t("Purchase Quotations"),type:"PQ",route:"/app/form/purchase/quote"},{text:this.$t("Purchase Order"),type:"PO",route:"/app/form/purchase/order"},{text:this.$t("Goods Receipt PO"),type:"GRPO",route:"/app/form/purchase/receipt"},{text:this.$t("A/P Invoice"),type:"PI",route:"/app/form/purchase/invoice"},{text:this.$t("Outgoing Payment"),type:"PP",route:"/app/form/purchase/payment"},{text:this.$t("A/P Credit Memo"),type:"APCM",route:"/app/form/purchase/creditmemo"},{text:this.$t("Goods Return"),type:"GR",route:"/app/form/purchase/return"}],itemEmployee:[{text:this.$t("Single time activity"),type:"",route:"/app/form/employee/timeactivity"},{text:this.$t("Weekly timesheet"),type:"",route:"/app/form/employee/timesheet"}],itemOther:[{text:this.$t("Tasks"),type:"TASK",route:"/app/form/project/task"},{text:this.$t("Bank Deposit"),type:"DEPOSIT",route:"/app/form/accounting/deposit"},{text:this.$t("Transfer"),type:"TRANSFER",route:"/app/form/accounting/transfer"},{text:this.$t("Journal Entry"),type:"JE",route:"/app/form/accounting/journal"},{text:this.$t("Statement"),type:"STATEMENT",route:"/app/form/accounting/statements"},{text:this.$t("Inventory Qty Adjustment"),type:"INVADJ",route:"/app/invtoryqtyadjustment"},{text:this.$t("Expenses"),type:"EXPENSE",route:"/app/form/purchase/expense"}]}},methods:{openDialog:function(){this.dialog=!0},openAction:function(E){this.$emit("openAction",{item:E.item}),this.dialog=!1}}},C=u,O=t(50),R=t(51),P=t.n(R),L=t(581),r=t(582),j=t(595),p=Object(O.a)(C,c,A,!1,null,null,null),g=d.default=p.exports;P()(p,{VCol:L.a,VContainer:r.a,VRow:j.a})},595:function(N,d,t){"use strict";var c=t(7),A=t.n(c),u=t(9),C=t.n(u),O=t(12),R=t.n(O),P=t(13),L=t.n(P),r=t(1),j=t(4),p=t.n(j),g=t(33),o=t.n(g),E=t(52),a=t.n(E),G=t(27),pt=t.n(G),F=t(8),vt=t.n(F),z=t(21),Dt=t.n(z),J=t(65),Mt=t.n(J),Q=t(266),ft=t.n(Q),H=t(32),yt=t.n(H),X=t(267),At=t.n(X),Y=t(268),Ct=t.n(Y),Z=t(269),Rt=t.n(Z),b=t(270),Lt=t.n(b),w=t(271),gt=t.n(w),k=t(272),It=t.n(k),q=t(273),Tt=t.n(q),tt=t(274),Bt=t.n(tt),_t=t(275),Kt=t.n(_t),et=t(276),ht=t.n(et),st=t(277),Ut=t.n(st),ot=t(278),Wt=t.n(ot),nt=t(279),xt=t.n(nt),at=t(35),St=t.n(at),rt=t(10),$t=t.n(rt),lt=t(280),Vt=t.n(lt),Et=t(2),it=t(78),mt=t(0);function I(n,e){var s=Object.keys(n);if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(n);e&&(_=_.filter(function(i){return Object.getOwnPropertyDescriptor(n,i).enumerable})),s.push.apply(s,_)}return s}function v(n){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{};e%2?I(Object(s),!0).forEach(function(_){Object(r.a)(n,_,s[_])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(s)):I(Object(s)).forEach(function(_){Object.defineProperty(n,_,Object.getOwnPropertyDescriptor(s,_))})}return n}var dt=["sm","md","lg","xl"],D=["start","end","center"];function M(n,e){return dt.reduce(function(s,_){return s[n+Object(mt.H)(_)]=e(),s},{})}var T=function(e){return[].concat(D,["baseline","stretch"]).includes(e)},B=M("align",function(){return{type:String,default:null,validator:T}}),K=function(e){return[].concat(D,["space-between","space-around"]).includes(e)},h=M("justify",function(){return{type:String,default:null,validator:K}}),U=function(e){return[].concat(D,["space-between","space-around","stretch"]).includes(e)},W=M("alignContent",function(){return{type:String,default:null,validator:U}}),x={align:Object.keys(B),justify:Object.keys(h),alignContent:Object.keys(W)},ct={align:"align",justify:"justify",alignContent:"align-content"};function ut(n,e,s){var _=ct[n];if(s!=null){if(e){var i=e.replace(n,"");_+="-".concat(i)}return _+="-".concat(s),_.toLowerCase()}}var S=new Map;d.a=Et.default.extend({name:"v-row",functional:!0,props:v(v(v({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:T}},B),{},{justify:{type:String,default:null,validator:K}},h),{},{alignContent:{type:String,default:null,validator:U}},W),render:function(e,s){var _=s.props,i=s.data,Ot=s.children,f="";for(var Pt in _)f+=String(_[Pt]);var l=S.get(f);return l||function(){var m;l=[];var y;for(y in x)x[y].forEach(function($){var jt=_[$],V=ut(y,$,jt);V&&l.push(V)});l.push((m={"no-gutters":_.noGutters,"row--dense":_.dense},Object(r.a)(m,"align-".concat(_.align),_.align),Object(r.a)(m,"justify-".concat(_.justify),_.justify),Object(r.a)(m,"align-content-".concat(_.alignContent),_.alignContent),m)),S.set(f,l)}(),e(_.tag,Object(it.a)(i,{staticClass:"row",class:l}),Ot)}})}}]);