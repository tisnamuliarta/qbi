(window.webpackJsonp=window.webpackJsonp||[]).push([[291,31],{598:function(P,v,t){"use strict";var u=t(7),O=t.n(u),m=t(10),g=t.n(m),f=t(12),I=t.n(f),h=t(13),L=t.n(h),D=t(2),A=t(4),V=t.n(A),T=t(34),W=t.n(T),B=t(51),j=t.n(B),n=t(28),c=t.n(n),x=t(8),K=t.n(x),X=t(21),lt=t.n(X),Y=t(64),F=t.n(Y),R=t(269),Z=t.n(R),$=t(33),b=t.n($),U=t(270),it=t.n(U),o=t(271),s=t.n(o),e=t(272),r=t.n(e),i=t(273),E=t.n(i),N=t(274),p=t.n(N),S=t(275),At=t.n(S),dt=t(276),Tt=t.n(dt),ct=t(277),Wt=t.n(ct),ut=t(278),Bt=t.n(ut),mt=t(279),xt=t.n(mt),vt=t(280),Kt=t.n(vt),ft=t(281),Rt=t.n(ft),Et=t(282),Ut=t.n(Et),Ot=t(35),St=t.n(Ot),Dt=t(9),Vt=t.n(Dt),gt=t(283),Ft=t.n(gt),jt=t(3),Pt=t(77),ht=t(1);function w(d,_){var l=Object.keys(d);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(d);_&&(a=a.filter(function(y){return Object.getOwnPropertyDescriptor(d,y).enumerable})),l.push.apply(l,a)}return l}function G(d){for(var _=1;_<arguments.length;_++){var l=arguments[_]!=null?arguments[_]:{};_%2?w(Object(l),!0).forEach(function(a){Object(D.a)(d,a,l[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(d,Object.getOwnPropertyDescriptors(l)):w(Object(l)).forEach(function(a){Object.defineProperty(d,a,Object.getOwnPropertyDescriptor(l,a))})}return d}var Mt=["sm","md","lg","xl"],z=["start","end","center"];function J(d,_){return Mt.reduce(function(l,a){return l[d+Object(ht.I)(a)]=_(),l},{})}var k=function(_){return[].concat(z,["baseline","stretch"]).includes(_)},q=J("align",function(){return{type:String,default:null,validator:k}}),tt=function(_){return[].concat(z,["space-between","space-around"]).includes(_)},st=J("justify",function(){return{type:String,default:null,validator:tt}}),et=function(_){return[].concat(z,["space-between","space-around","stretch"]).includes(_)},at=J("alignContent",function(){return{type:String,default:null,validator:et}}),nt={align:Object.keys(q),justify:Object.keys(st),alignContent:Object.keys(at)},pt={align:"align",justify:"justify",alignContent:"align-content"};function yt(d,_,l){var a=pt[d];if(l!=null){if(_){var y=_.replace(d,"");a+="-".concat(y)}return a+="-".concat(l),a.toLowerCase()}}var ot=new Map;v.a=jt.default.extend({name:"v-row",functional:!0,props:G(G(G({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:k}},q),{},{justify:{type:String,default:null,validator:tt}},st),{},{alignContent:{type:String,default:null,validator:et}},at),render:function(_,l){var a=l.props,y=l.data,Ct=l.children,H="";for(var It in a)H+=String(a[It]);var M=ot.get(H);return M||function(){var C;M=[];var Q;for(Q in nt)nt[Q].forEach(function(rt){var Lt=a[rt],_t=yt(Q,rt,Lt);_t&&M.push(_t)});M.push((C={"no-gutters":a.noGutters,"row--dense":a.dense},Object(D.a)(C,"align-".concat(a.align),a.align),Object(D.a)(C,"justify-".concat(a.justify),a.justify),Object(D.a)(C,"align-content-".concat(a.alignContent),a.alignContent),C)),ot.set(H,M)}(),_(a.tag,Object(Pt.a)(y,{staticClass:"row",class:M}),Ct)}})},599:function(P,v,t){var u=t(375),O=t(47);P.exports=function(m,g,f){return f.get&&u(f.get,g,{getter:!0}),f.set&&u(f.set,g,{setter:!0}),O.f(m,g,f)}},600:function(P,v,t){"use strict";t.r(v);var u=t(165),O=t(249),m=t(87),g=t(594),f=t(575),I=t(247),h=t(589),L=function(){var n=this,c=n._self._c;return c(g.a,{attrs:{"no-click-animation":"",persistent:"",scrollable:"",origin:n.original,"max-width":n.maxWidth,transition:"dialog-top-transition"},model:{value:n.dialog,callback:function(K){n.dialog=K},expression:"dialog"}},[c(O.a,[c(m.c,[c("span",{staticClass:"subtitle-2"},[n._v(n._s(n.dialogTitle))]),n._v(" "),c(h.a),n._v(" "),c(u.a,{attrs:{icon:"",color:"red",dark:""},on:{click:function(K){return n.closeDialog()}}},[c(I.a,[n._v("mdi-close-circle")])],1)],1),n._v(" "),c(f.a),n._v(" "),c(m.b,{staticClass:"pr-0 pl-0"},[n._t("content")],2),n._v(" "),c(f.a),n._v(" "),c(m.a,[n._t("addLine"),n._v(" "),c(h.a),n._v(" "),n._t("saveData")],2)],1)],1)},D=[],A={name:"DialogForm",props:{maxWidth:{type:String,default:"800px"},dialogTitle:{type:String,default:""},original:{type:String,default:null}},data:function(){return{dialog:!1}},methods:{addLine:function(){this.$emit("addLine")},openDialog:function(){this.dialog=!0},closeDialog:function(){this.dialog=!1,this.$emit("eventCloseDialog")},saveData:function(){this.$emit("saveData")}}},V=A,T=t(50),W=Object(T.a)(V,L,D,!1,null,null,null),B=v.default=W.exports},616:function(P,v,t){"use strict";var u=t(284),O=t.n(u),m=t(285);v.a=Object(m.a)("layout")},620:function(P,v,t){"use strict";var u=t(284),O=t.n(u),m=t(285);v.a=Object(m.a)("flex")},945:function(P,v,t){"use strict";t.r(v);var u=t(165),O=t(587),m=t(585),g=t(908),f=t(620),I=t(616),h=t(598),L=t(592),D=t(573),A=t(21),V=t(268),T=t(27),W=function(){var s=this,e=s._self._c;return e(I.a,[e(f.a,{attrs:{sm12:""}},[e("div",{staticClass:"mt-0"},[e(L.a,{directives:[{name:"show",rawName:"v-show",value:s.loading,expression:"loading"}],attrs:{type:"table"}}),s._v(" "),e(g.a,{directives:[{name:"show",rawName:"v-show",value:!s.loading,expression:"!loading"}],staticClass:"elevation-1",attrs:{"mobile-breakpoint":0,headers:s.headers,items:s.allData,"items-per-page":20,options:s.options,"server-items-length":s.totalData,loading:s.loading,dense:"","fixed-header":"","show-select":"",height:"70vh","footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(i){s.options=i}},scopedSlots:s._u([{key:"top",fn:function(){return[e("div",{staticClass:"pl-4 pt-2"},[e("span",{staticClass:"font-weight-medium text-h6"},[s._v("Work Locations")])]),s._v(" "),e("LazyMainToolbar",{attrs:{"document-status":s.documentStatus,"search-status":s.searchStatus,"item-search":s.itemSearch,"search-item":s.searchItem,search:s.search,filter:!1,title:"Master Permissions","show-new-data":"","new-data-text":"New Work Location","show-back-link":"","show-batch-action":""},on:{emitData:s.emitData,newData:s.newData,getDataFromApi:s.getDataFromApi}})]},proxy:!0},{key:"item.ACTIONS",fn:function(i){var E=i.item;return[e(u.a,{staticClass:"font-weight-bold text-right",attrs:{text:"",small:"",color:"secondary"},on:{click:function(p){return s.editItem(E)}}},[s._v(`
            Edit
          `)])]}}],null,!0)})],1)]),s._v(" "),e("DialogForm",{ref:"dialogForm",attrs:{"max-width":"400px","dialog-title":s.formTitle,"button-title":"Save"},scopedSlots:s._u([{key:"content",fn:function(){return[e(m.a,[e(h.a,{attrs:{"no-gutters":""}},[e(O.a,{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[e(D.a,{attrs:{label:"Name",outlined:"",dense:"","hide-details":"auto"},model:{value:s.form.name,callback:function(E){s.$set(s.form,"name",E)},expression:"form.name"}})],1),s._v(" "),e(O.a,{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[e(D.a,{attrs:{label:"Notes",outlined:"",dense:"","hide-details":"auto"},model:{value:s.form.notes,callback:function(E){s.$set(s.form,"notes",E)},expression:"form.notes"}})],1)],1)],1)]},proxy:!0},{key:"saveData",fn:function(){return[e(u.a,{attrs:{color:"green darken-1",dark:"",small:"",loading:s.submitLoad},on:{click:function(E){return s.save()}}},[s._v(`
        Save
      `)])]},proxy:!0}])})],1)},B=[],j=t(2),n=t(8),c=t(7),x=t(10),K=t(4),X=t(12),lt=t(9),Y=t(13);function F(o,s){var e=Object.keys(o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);s&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(o,i).enumerable})),e.push.apply(e,r)}return e}function R(o){for(var s=1;s<arguments.length;s++){var e=arguments[s]!=null?arguments[s]:{};s%2?F(Object(e),!0).forEach(function(r){Object(j.a)(o,r,e[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(e)):F(Object(e)).forEach(function(r){Object.defineProperty(o,r,Object.getOwnPropertyDescriptor(e,r))})}return o}var Z={name:"PaymentMethod",data:function(){return{totalData:0,editedIndex:-1,submitLoad:!1,statusProcessing:"insert",dialog:!1,loading:!0,insert:!0,url:"/api/payroll/work-locations",valueWhenIsEmpty:"0",moneyOptions:{suffix:"",length:11,precision:2},documentStatus:[],itemSearch:[],searchStatus:"",searchItem:"",search:"",itemAccounts:[],allData:[],form:{},defaultItem:{},options:{},headers:[{text:"Name",value:"name"},{text:"Action",value:"ACTIONS",align:"right"}]}},head:function(){return{title:"Work Locations"}},computed:{formTitle:function(){return this.editedIndex===-1?"New":"Edit"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},methods:{emitData:function(s){this.documentStatus=s.documentStatus,this.itemSearch=s.itemSearch,this.searchStatus=s.searchStatus,this.searchItem=s.searchItem,this.search=s.search,this.filters=s.filters,this.getDataFromApi()},getDataFromApi:function(){var s=this;this.loading=!0;var e=this,r={searchItem:e.searchItem,documentStatus:e.documentStatus,searchStatus:e.searchStatus,search:e.search};this.$axios.get(this.url,{params:R(R({},e.options),r)}).then(function(i){s.loading=!1,s.allData=i.data.data,s.totalData=i.data.total,s.defaultItem=Object.assign({},i.data.form)}).catch(function(i){s.loading=!1,s.$swal({type:"error",title:"Error",text:i.response.data.message})})},getAccounts:function(){var s=this;this.$axios.get("/api/financial/accounts",{params:{type:"All"}}).then(function(e){s.itemAccounts=e.data.data}).catch(function(e){s.$swal({type:"error",title:"Error",text:e.response.data.message})})},newData:function(){this.$refs.dialogForm.openDialog(),this.statusProcessing="insert",this.form=Object.assign({},this.defaultItem)},editItem:function(s){this.editedIndex=this.allData.indexOf(s),this.form=Object.assign({},s),this.statusProcessing="update",this.$refs.dialogForm.openDialog(),this.insert=!1},save:function(){var s=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"all",e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,r=this.statusProcessing;r==="insert"?this.store("post",this.url,this.form,"insert",s):r==="update"&&this.store("put",this.url+"/"+this.form.id,this.form,"update",s)},store:function(s,e,r,i){var E=this,N=arguments.length>4&&arguments[4]!==void 0?arguments[4]:"all",p=this;p.submitLoad=!0,this.$axios({method:s,url:e,data:r}).then(function(S){p.submitLoad=!1,E.$refs.dialogForm.closeDialog(),E.getDataFromApi()}).catch(function(S){p.submitLoad=!1,E.$swal({type:"error",title:"Error",text:S.response.data.message})})}}},$=Z,b=t(50),U=Object(b.a)($,W,B,!1,null,null,null),it=v.default=U.exports;installComponents(U,{DialogForm:t(600).default})}}]);
