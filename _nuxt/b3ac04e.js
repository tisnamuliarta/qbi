(window.webpackJsonp=window.webpackJsonp||[]).push([[275,31],{598:function(P,f,t){"use strict";var u=t(7),O=t.n(u),m=t(10),g=t.n(m),v=t(12),I=t.n(v),p=t(13),L=t.n(p),D=t(2),A=t(4),V=t.n(A),T=t(34),B=t.n(T),x=t(51),j=t.n(x),n=t(28),c=t.n(n),K=t(8),R=t.n(K),X=t(21),lt=t.n(X),Y=t(64),F=t.n(Y),W=t(269),Z=t.n(W),$=t(33),b=t.n($),U=t(270),it=t.n(U),o=t(271),e=t.n(o),s=t(272),r=t.n(s),i=t(273),E=t.n(i),N=t(274),M=t.n(N),S=t(275),At=t.n(S),dt=t(276),Tt=t.n(dt),ct=t(277),Bt=t.n(ct),ut=t(278),xt=t.n(ut),mt=t(279),Kt=t.n(mt),ft=t(280),Rt=t.n(ft),vt=t(281),Wt=t.n(vt),Et=t(282),Ut=t.n(Et),Ot=t(35),St=t.n(Ot),Dt=t(9),Vt=t.n(Dt),gt=t(283),Ft=t.n(gt),jt=t(3),Pt=t(77),pt=t(1);function w(d,_){var l=Object.keys(d);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(d);_&&(a=a.filter(function(y){return Object.getOwnPropertyDescriptor(d,y).enumerable})),l.push.apply(l,a)}return l}function G(d){for(var _=1;_<arguments.length;_++){var l=arguments[_]!=null?arguments[_]:{};_%2?w(Object(l),!0).forEach(function(a){Object(D.a)(d,a,l[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(d,Object.getOwnPropertyDescriptors(l)):w(Object(l)).forEach(function(a){Object.defineProperty(d,a,Object.getOwnPropertyDescriptor(l,a))})}return d}var ht=["sm","md","lg","xl"],z=["start","end","center"];function J(d,_){return ht.reduce(function(l,a){return l[d+Object(pt.I)(a)]=_(),l},{})}var k=function(_){return[].concat(z,["baseline","stretch"]).includes(_)},q=J("align",function(){return{type:String,default:null,validator:k}}),tt=function(_){return[].concat(z,["space-between","space-around"]).includes(_)},et=J("justify",function(){return{type:String,default:null,validator:tt}}),st=function(_){return[].concat(z,["space-between","space-around","stretch"]).includes(_)},at=J("alignContent",function(){return{type:String,default:null,validator:st}}),nt={align:Object.keys(q),justify:Object.keys(et),alignContent:Object.keys(at)},Mt={align:"align",justify:"justify",alignContent:"align-content"};function yt(d,_,l){var a=Mt[d];if(l!=null){if(_){var y=_.replace(d,"");a+="-".concat(y)}return a+="-".concat(l),a.toLowerCase()}}var ot=new Map;f.a=jt.default.extend({name:"v-row",functional:!0,props:G(G(G({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:k}},q),{},{justify:{type:String,default:null,validator:tt}},et),{},{alignContent:{type:String,default:null,validator:st}},at),render:function(_,l){var a=l.props,y=l.data,Ct=l.children,H="";for(var It in a)H+=String(a[It]);var h=ot.get(H);return h||function(){var C;h=[];var Q;for(Q in nt)nt[Q].forEach(function(rt){var Lt=a[rt],_t=yt(Q,rt,Lt);_t&&h.push(_t)});h.push((C={"no-gutters":a.noGutters,"row--dense":a.dense},Object(D.a)(C,"align-".concat(a.align),a.align),Object(D.a)(C,"justify-".concat(a.justify),a.justify),Object(D.a)(C,"align-content-".concat(a.alignContent),a.alignContent),C)),ot.set(H,h)}(),_(a.tag,Object(Pt.a)(y,{staticClass:"row",class:h}),Ct)}})},599:function(P,f,t){var u=t(375),O=t(47);P.exports=function(m,g,v){return v.get&&u(v.get,g,{getter:!0}),v.set&&u(v.set,g,{setter:!0}),O.f(m,g,v)}},600:function(P,f,t){"use strict";t.r(f);var u=t(165),O=t(249),m=t(87),g=t(594),v=t(575),I=t(247),p=t(589),L=function(){var n=this,c=n._self._c;return c(g.a,{attrs:{"no-click-animation":"",persistent:"",scrollable:"",origin:n.original,"max-width":n.maxWidth,transition:"dialog-top-transition"},model:{value:n.dialog,callback:function(R){n.dialog=R},expression:"dialog"}},[c(O.a,[c(m.c,[c("span",{staticClass:"subtitle-2"},[n._v(n._s(n.dialogTitle))]),n._v(" "),c(p.a),n._v(" "),c(u.a,{attrs:{icon:"",color:"red",dark:""},on:{click:function(R){return n.closeDialog()}}},[c(I.a,[n._v("mdi-close-circle")])],1)],1),n._v(" "),c(v.a),n._v(" "),c(m.b,{staticClass:"pr-0 pl-0"},[n._t("content")],2),n._v(" "),c(v.a),n._v(" "),c(m.a,[n._t("addLine"),n._v(" "),c(p.a),n._v(" "),n._t("saveData")],2)],1)],1)},D=[],A={name:"DialogForm",props:{maxWidth:{type:String,default:"800px"},dialogTitle:{type:String,default:""},original:{type:String,default:null}},data:function(){return{dialog:!1}},methods:{addLine:function(){this.$emit("addLine")},openDialog:function(){this.dialog=!0},closeDialog:function(){this.dialog=!1,this.$emit("eventCloseDialog")},saveData:function(){this.$emit("saveData")}}},V=A,T=t(50),B=Object(T.a)(V,L,D,!1,null,null,null),x=f.default=B.exports},616:function(P,f,t){"use strict";var u=t(284),O=t.n(u),m=t(285);f.a=Object(m.a)("layout")},620:function(P,f,t){"use strict";var u=t(284),O=t.n(u),m=t(285);f.a=Object(m.a)("flex")},931:function(P,f,t){"use strict";t.r(f);var u=t(165),O=t(587),m=t(585),g=t(908),v=t(620),I=t(616),p=t(598),L=t(592),D=t(573),A=t(21),V=t(268),T=t(27),B=function(){var e=this,s=e._self._c;return s(I.a,[s(v.a,{attrs:{sm12:""}},[s("div",{staticClass:"mt-0"},[s(L.a,{directives:[{name:"show",rawName:"v-show",value:e.loading,expression:"loading"}],attrs:{type:"table"}}),e._v(" "),s(g.a,{directives:[{name:"show",rawName:"v-show",value:!e.loading,expression:"!loading"}],staticClass:"elevation-1",attrs:{"mobile-breakpoint":0,headers:e.headers,items:e.allData,"items-per-page":20,options:e.options,"server-items-length":e.totalData,loading:e.loading,dense:"","fixed-header":"","show-select":"",height:"70vh","footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(i){e.options=i}},scopedSlots:e._u([{key:"top",fn:function(){return[s("div",{staticClass:"pl-4 pt-2"},[s("span",{staticClass:"font-weight-medium text-h6"},[e._v(e._s(e.$t("Loan Type")))])]),e._v(" "),s("LazyMainToolbar",{attrs:{"document-status":e.documentStatus,"search-status":e.searchStatus,"item-search":e.itemSearch,"search-item":e.searchItem,search:e.search,filter:!1,title:"Master Permissions","show-new-data":"","new-data-text":"New Loan Type","show-back-link":"","show-batch-action":""},on:{emitData:e.emitData,newData:e.newData,getDataFromApi:e.getDataFromApi}})]},proxy:!0},{key:"item.ACTIONS",fn:function(i){var E=i.item;return[s(u.a,{staticClass:"font-weight-bold text-right",attrs:{text:"",small:"",color:"secondary"},on:{click:function(M){return e.editItem(E)}}},[e._v(`
            Edit
          `)])]}}],null,!0)})],1)]),e._v(" "),s("DialogForm",{ref:"dialogForm",attrs:{"max-width":"400px","dialog-title":e.formTitle,"button-title":"Save"},scopedSlots:e._u([{key:"content",fn:function(){return[s(m.a,[s(p.a,{attrs:{"no-gutters":""}},[s(O.a,{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[s(D.a,{attrs:{label:"Name",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.name,callback:function(E){e.$set(e.form,"name",E)},expression:"form.name"}})],1),e._v(" "),s(O.a,{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[s(D.a,{attrs:{label:"Notes",outlined:"",dense:"","hide-details":"auto"},model:{value:e.form.narration,callback:function(E){e.$set(e.form,"narration",E)},expression:"form.narration"}})],1)],1)],1)]},proxy:!0},{key:"saveData",fn:function(){return[s(u.a,{attrs:{color:"green darken-1",dark:"",small:"",loading:e.submitLoad},on:{click:function(E){return e.save()}}},[e._v(`
        Save
      `)])]},proxy:!0}])})],1)},x=[],j=t(2),n=t(8),c=t(7),K=t(10),R=t(4),X=t(12),lt=t(9),Y=t(13);function F(o,e){var s=Object.keys(o);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(o);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(o,i).enumerable})),s.push.apply(s,r)}return s}function W(o){for(var e=1;e<arguments.length;e++){var s=arguments[e]!=null?arguments[e]:{};e%2?F(Object(s),!0).forEach(function(r){Object(j.a)(o,r,s[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(s)):F(Object(s)).forEach(function(r){Object.defineProperty(o,r,Object.getOwnPropertyDescriptor(s,r))})}return o}var Z={name:"PaymentMethod",data:function(){return{totalData:0,editedIndex:-1,submitLoad:!1,statusProcessing:"insert",dialog:!1,loading:!0,insert:!0,url:"/api/payroll/loan-type",valueWhenIsEmpty:"0",moneyOptions:{suffix:"",length:11,precision:2},documentStatus:[],itemSearch:[],searchStatus:"",searchItem:"",search:"",itemAccounts:[],allData:[],form:{},defaultItem:{},options:{},headers:[{text:"Name",value:"name"},{text:"Action",value:"ACTIONS",align:"right"}]}},head:function(){return{title:"Loan Type"}},computed:{formTitle:function(){return this.editedIndex===-1?"New":"Edit"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},methods:{emitData:function(e){this.documentStatus=e.documentStatus,this.itemSearch=e.itemSearch,this.searchStatus=e.searchStatus,this.searchItem=e.searchItem,this.search=e.search,this.filters=e.filters,this.getDataFromApi()},getDataFromApi:function(){var e=this;this.loading=!0;var s=this,r={searchItem:s.searchItem,documentStatus:s.documentStatus,searchStatus:s.searchStatus,search:s.search};this.$axios.get(this.url,{params:W(W({},s.options),r)}).then(function(i){e.loading=!1,e.allData=i.data.data,e.totalData=i.data.total,e.defaultItem=Object.assign({},i.data.form)}).catch(function(i){e.loading=!1,e.$swal({type:"error",title:"Error",text:i.response.data.message})})},getAccounts:function(){var e=this;this.$axios.get("/api/financial/accounts",{params:{type:"All"}}).then(function(s){e.itemAccounts=s.data.data}).catch(function(s){e.$swal({type:"error",title:"Error",text:s.response.data.message})})},newData:function(){this.$refs.dialogForm.openDialog(),this.statusProcessing="insert",this.form=Object.assign({},this.defaultItem)},editItem:function(e){this.editedIndex=this.allData.indexOf(e),this.form=Object.assign({},e),this.statusProcessing="update",this.$refs.dialogForm.openDialog(),this.insert=!1},save:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"all",s=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null,r=this.statusProcessing;r==="insert"?this.store("post",this.url,this.form,"insert",e):r==="update"&&this.store("put",this.url+"/"+this.form.id,this.form,"update",e)},store:function(e,s,r,i){var E=this,N=arguments.length>4&&arguments[4]!==void 0?arguments[4]:"all",M=this;M.submitLoad=!0,this.$axios({method:e,url:s,data:r}).then(function(S){M.submitLoad=!1,E.$refs.dialogForm.closeDialog(),E.getDataFromApi()}).catch(function(S){M.submitLoad=!1,E.$swal({type:"error",title:"Error",text:S.response.data.message})})}}},$=Z,b=t(50),U=Object(b.a)($,B,x,!1,null,null,null),it=f.default=U.exports;installComponents(U,{DialogForm:t(600).default})}}]);
