(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{1104:function(V,d,t){"use strict";t.r(d);var c=function(){var n=this,a=n._self._c;return a("v-container",{attrs:{fluid:""}},[a("v-row",{attrs:{"no-gutters":""}},[a("v-col",{attrs:{cols:"12",md:"3"}},[a("LazyFormListAction",{attrs:{title:"SALES",items:n.itemSales},on:{openAction:n.openAction}})],1),n._v(" "),a("v-col",{attrs:{cols:"12",md:"3"}},[a("LazyFormListAction",{attrs:{title:"PURCHASING",items:n.itemPurchase},on:{openAction:n.openAction}})],1),n._v(" "),a("v-col",{attrs:{cols:"12",md:"3"}},[a("LazyFormListAction",{attrs:{title:"EMPLOYEE",items:n.itemEmployee},on:{openAction:n.openAction}})],1),n._v(" "),a("v-col",{attrs:{cols:"12",md:"3"}},[a("LazyFormListAction",{attrs:{title:"OTHER",items:n.itemOther},on:{openAction:n.openAction}})],1)],1)],1)},C=[],u={name:"NewForm",data:function(){return{dialog:!1,itemSales:[{text:this.$t("Sales Order"),type:"SO",route:"/app/form/sales/order"},{text:this.$t("Sales Delivery"),type:"SD",route:"/app/form/sales/delivery"},{text:this.$t("A/R Invoice"),type:"SI",route:"/app/form/sales/invoice"},{text:this.$t("Incoming Payment"),type:"SP",route:"/app/form/sales/payment"},{text:this.$t("A/R Credit Memo"),type:"ARCM",route:"/app/form/sales/creditmemo"},{text:this.$t("Sales Return"),type:"SR",route:"/app/form/sales/return"},{text:this.$t("Cash Sale"),type:"CS",route:"/app/form/sales/cash"}],itemPurchase:[{text:this.$t("Purchase Order"),type:"PO",route:"/app/form/purchase/order"},{text:this.$t("Goods Receipt PO"),type:"GRPO",route:"/app/form/purchase/receipt"},{text:this.$t("A/P Invoice"),type:"PI",route:"/app/form/purchase/invoice"},{text:this.$t("Outgoing Payment"),type:"PP",route:"/app/form/purchase/payment"},{text:this.$t("A/P Credit Memo"),type:"APCM",route:"/app/form/purchase/creditmemo"},{text:this.$t("Goods Return"),type:"GR",route:"/app/form/purchase/return"},{text:this.$t("Cash Purchase"),type:"CP",route:"/app/form/purchase/cash"}],itemEmployee:[{text:this.$t("Single time activity"),type:"",route:"/app/form/employee/timeactivity"},{text:this.$t("Weekly timesheet"),type:"",route:"/app/form/employee/timesheet"}],itemOther:[{text:this.$t("Tasks"),type:"TASK",route:"/app/form/project/task"},{text:this.$t("Bank Deposit"),type:"DEPOSIT",route:"/app/form/accounting/deposit"},{text:this.$t("Transfer"),type:"TRANSFER",route:"/app/form/accounting/transfer"},{text:this.$t("Journal Entry"),type:"JE",route:"/app/form/accounting/journal"},{text:this.$t("Goods Receipt"),type:"GR",route:"/app/form/inventory/receipt"},{text:this.$t("Goods Issue"),type:"GI",route:"/app/form/inventory/issue"}]}},methods:{openDialog:function(){this.dialog=!0},openAction:function(n){this.$auth.$storage.setState("basePath",this.$route.path),this.$emit("openAction",{item:n.item}),this.dialog=!1}}},A=u,O=t(50),R=t(51),P=t.n(R),L=t(585),r=t(586),j=t(599),p=Object(O.a)(A,c,C,!1,null,null,null),g=d.default=p.exports;P()(p,{VCol:L.a,VContainer:r.a,VRow:j.a})},599:function(V,d,t){"use strict";var c=t(7),C=t.n(c),u=t(9),A=t.n(u),O=t(12),R=t.n(O),P=t(13),L=t.n(P),r=t(2),j=t(4),p=t.n(j),g=t(33),m=t.n(g),n=t(52),a=t.n(n),N=t(28),pt=t.n(N),F=t(8),vt=t.n(F),z=t(21),Dt=t.n(z),J=t(65),Mt=t.n(J),H=t(269),ft=t.n(H),Y=t(32),yt=t.n(Y),Q=t(270),Ct=t.n(Q),X=t(271),At=t.n(X),Z=t(272),Rt=t.n(Z),b=t(273),Lt=t.n(b),w=t(274),gt=t.n(w),k=t(275),It=t.n(k),q=t(276),ht=t.n(q),tt=t(277),Tt=t.n(tt),_t=t(278),Bt=t.n(_t),et=t(279),Kt=t.n(et),st=t(280),Ut=t.n(st),ot=t(281),Wt=t.n(ot),nt=t(282),xt=t.n(nt),at=t(34),St=t.n(at),rt=t(10),$t=t.n(rt),lt=t(283),Gt=t.n(lt),Et=t(3),it=t(78),dt=t(1);function I(o,e){var s=Object.keys(o);if(Object.getOwnPropertySymbols){var _=Object.getOwnPropertySymbols(o);e&&(_=_.filter(function(E){return Object.getOwnPropertyDescriptor(o,E).enumerable})),s.push.apply(s,_)}return s}function v(o){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{};e%2?I(Object(s),!0).forEach(function(_){Object(r.a)(o,_,s[_])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(s)):I(Object(s)).forEach(function(_){Object.defineProperty(o,_,Object.getOwnPropertyDescriptor(s,_))})}return o}var mt=["sm","md","lg","xl"],D=["start","end","center"];function M(o,e){return mt.reduce(function(s,_){return s[o+Object(dt.I)(_)]=e(),s},{})}var h=function(e){return[].concat(D,["baseline","stretch"]).includes(e)},T=M("align",function(){return{type:String,default:null,validator:h}}),B=function(e){return[].concat(D,["space-between","space-around"]).includes(e)},K=M("justify",function(){return{type:String,default:null,validator:B}}),U=function(e){return[].concat(D,["space-between","space-around","stretch"]).includes(e)},W=M("alignContent",function(){return{type:String,default:null,validator:U}}),x={align:Object.keys(T),justify:Object.keys(K),alignContent:Object.keys(W)},ct={align:"align",justify:"justify",alignContent:"align-content"};function ut(o,e,s){var _=ct[o];if(s!=null){if(e){var E=e.replace(o,"");_+="-".concat(E)}return _+="-".concat(s),_.toLowerCase()}}var S=new Map;d.a=Et.default.extend({name:"v-row",functional:!0,props:v(v(v({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:h}},T),{},{justify:{type:String,default:null,validator:B}},K),{},{alignContent:{type:String,default:null,validator:U}},W),render:function(e,s){var _=s.props,E=s.data,Ot=s.children,f="";for(var Pt in _)f+=String(_[Pt]);var l=S.get(f);return l||function(){var i;l=[];var y;for(y in x)x[y].forEach(function($){var jt=_[$],G=ut(y,$,jt);G&&l.push(G)});l.push((i={"no-gutters":_.noGutters,"row--dense":_.dense},Object(r.a)(i,"align-".concat(_.align),_.align),Object(r.a)(i,"justify-".concat(_.justify),_.justify),Object(r.a)(i,"align-content-".concat(_.alignContent),_.alignContent),i)),S.set(f,l)}(),e(_.tag,Object(it.a)(E,{staticClass:"row",class:l}),Ot)}})}}]);