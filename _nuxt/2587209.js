(window.webpackJsonp=window.webpackJsonp||[]).push([[140],{598:function(p,O,t){"use strict";var c=t(7),h=t.n(c),j=t(10),m=t.n(j),i=t(12),U=t.n(i),g=t(13),W=t.n(g),E=t(2),S=t(4),tt=t.n(S),I=t(34),V=t.n(I),$=t(51),et=t.n($),A=t(28),F=t.n(A),y=t(8),G=t.n(y),N=t(21),l=t.n(N),e=t(64),s=t.n(e),r=t(269),f=t.n(r),d=t(33),D=t.n(d),u=t(270),T=t.n(u),C=t(271),pt=t.n(C),st=t(272),It=t.n(st),at=t(273),At=t.n(at),_t=t(274),yt=t.n(_t),nt=t(275),Tt=t.n(nt),ot=t(276),Lt=t.n(ot),rt=t(277),Bt=t.n(rt),lt=t(278),xt=t.n(lt),it=t(279),Rt=t.n(it),ct=t(280),Kt=t.n(ct),dt=t(281),Ut=t.n(dt),ut=t(282),Wt=t.n(ut),mt=t(35),St=t.n(mt),Et=t(9),Vt=t.n(Et),ft=t(283),$t=t.n(ft),vt=t(3),Ot=t(77),jt=t(1);function z(o,_){var n=Object.keys(o);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(o);_&&(a=a.filter(function(P){return Object.getOwnPropertyDescriptor(o,P).enumerable})),n.push.apply(n,a)}return n}function L(o){for(var _=1;_<arguments.length;_++){var n=arguments[_]!=null?arguments[_]:{};_%2?z(Object(n),!0).forEach(function(a){Object(E.a)(o,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach(function(a){Object.defineProperty(o,a,Object.getOwnPropertyDescriptor(n,a))})}return o}var Dt=["sm","md","lg","xl"],B=["start","end","center"];function x(o,_){return Dt.reduce(function(n,a){return n[o+Object(jt.I)(a)]=_(),n},{})}var J=function(_){return[].concat(B,["baseline","stretch"]).includes(_)},Y=x("align",function(){return{type:String,default:null,validator:J}}),H=function(_){return[].concat(B,["space-between","space-around"]).includes(_)},Q=x("justify",function(){return{type:String,default:null,validator:H}}),X=function(_){return[].concat(B,["space-between","space-around","stretch"]).includes(_)},Z=x("alignContent",function(){return{type:String,default:null,validator:X}}),b={align:Object.keys(Y),justify:Object.keys(Q),alignContent:Object.keys(Z)},Pt={align:"align",justify:"justify",alignContent:"align-content"};function Mt(o,_,n){var a=Pt[o];if(n!=null){if(_){var P=_.replace(o,"");a+="-".concat(P)}return a+="-".concat(n),a.toLowerCase()}}var w=new Map;O.a=vt.default.extend({name:"v-row",functional:!0,props:L(L(L({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:J}},Y),{},{justify:{type:String,default:null,validator:H}},Q),{},{alignContent:{type:String,default:null,validator:X}},Z),render:function(_,n){var a=n.props,P=n.data,ht=n.children,R="";for(var gt in a)R+=String(a[gt]);var v=w.get(R);return v||function(){var M;v=[];var K;for(K in b)b[K].forEach(function(k){var Ct=a[k],q=Mt(K,k,Ct);q&&v.push(q)});v.push((M={"no-gutters":a.noGutters,"row--dense":a.dense},Object(E.a)(M,"align-".concat(a.align),a.align),Object(E.a)(M,"justify-".concat(a.justify),a.justify),Object(E.a)(M,"align-content-".concat(a.alignContent),a.alignContent),M)),w.set(R,v)}(),_(a.tag,Object(Ot.a)(P,{staticClass:"row",class:v}),ht)}})},599:function(p,O,t){var c=t(375),h=t(47);p.exports=function(j,m,i){return i.get&&c(i.get,m,{getter:!0}),i.set&&c(i.set,m,{setter:!0}),h.f(j,m,i)}},958:function(p,O,t){"use strict";t.r(O);var c=t(165),h=t(587),j=t(908),m=t(247),i=t(248),U=t(166),g=t(31),W=t(576),E=t(598),S=t(21),tt=t(268),I=function(){var e=this,s=e._self._c;return s(E.a,[s(h.a,{staticClass:"mt-0",attrs:{cols:"12"}},[s(j.a,{staticClass:"elevation-1",attrs:{"mobile-breakpoint":0,headers:e.headers,items:e.allData,"items-per-page":20,options:e.options,"server-items-length":e.totalData,loading:e.loading,"hide-default-footer":"","show-select":"","fixed-header":"",height:"76vh",dense:"","footer-props":{"items-per-page-options":[20,50,100,-1]}},on:{"update:options":function(f){e.options=f}},scopedSlots:e._u([{key:"top",fn:function(){return[s("div",{staticClass:"pl-4 pt-2"},[s("span",{staticClass:"font-weight-medium text-h6"},[e._v("Reconcile")])]),e._v(" "),s("LazyMainToolbar",{attrs:{"document-status":e.documentStatus,"search-status":e.searchStatus,"item-search":e.itemSearch,"search-item":e.searchItem,search:e.search,title:"Chart of Accounts","show-batch-action":""},on:{emitData:e.emitData,newData:e.newData}})]},proxy:!0},{key:"item.id",fn:function(f){var d=f.item;return[s(c.a,{staticClass:"font-weight-bold text-right",attrs:{color:"secondary",text:"",small:""},on:{click:function(u){return e.actions(e.itemAction,d)}}},[e._v(`
          `+e._s(e.itemText)+`
        `)]),e._v(" "),s(W.a,{attrs:{transition:"slide-y-transition",bottom:""},scopedSlots:e._u([{key:"activator",fn:function(u){var T=u.on,C=u.attrs;return[s(c.a,e._g(e._b({attrs:{color:"black",dark:"",icon:""}},"v-btn",C,!1),T),[s(m.a,[e._v("mdi-menu-down")])],1)]}}],null,!0)},[e._v(" "),s(i.a,e._l(e.items,function(D,u){return s(U.a,{key:u,on:{click:function(C){return e.actions(D.action,d)}}},[s(g.a,[s(g.c,[e._v(e._s(D.text))])],1)],1)}),1)],1)]}}],null,!0)}),e._v(" "),s("LazyAccountingFormAccount",{ref:"forms",attrs:{"form-data":e.form,"form-title":e.formTitle,"button-title":e.buttonTitle,url:e.url},on:{getDataFromApi:e.getDataFromApi}})],1)],1)},V=[],$=t(10),et=t(4),A={name:"ReconcileList",data:function(){return{totalData:0,editedIndex:-1,loading:!0,allData:[],documentStatus:[],itemSearch:[],searchStatus:"",searchItem:"",search:"",form:{},defaultItem:{},options:{},items:[{text:"Edit",action:"edit"},{text:"Delete",action:"delete"}],itemText:"",itemAction:"",url:"/api/financial/reconcile",headers:[{text:"Account Code",value:"code",cellClass:"disable-wrap"},{text:"Account Name",value:"name",cellClass:"disable-wrap"},{text:"Account Type",value:"account_type",cellClass:"disable-wrap"},{text:"Category",value:"category.name",cellClass:"disable-wrap"},{text:"Currency",value:"currency.currency_code",cellClass:"disable-wrap",sortable:!1,filterable:!1},{text:"Actions",value:"id",align:"right",cellClass:"disable-wrap",sortable:!1,filterable:!1}],title:"Chart Of Accounts"}},head:function(){return{title:this.title}},computed:{formTitle:function(){return this.editedIndex===-1?"New Account":"Edit Account"},buttonTitle:function(){return this.editedIndex===-1?"Save":"Update"}},watch:{options:{handler:function(){this.getDataFromApi()},deep:!0}},activated:function(){this.$nuxt.$emit("extensionSetting",{show:!1,showBtn:!1})},methods:{newData:function(){this.editedIndex=-1,this.$refs.forms.newData(this.form)},actions:function(e,s){e==="edit"?this.editItem(s):this.deleteItem(s)},editItem:function(e){this.editedIndex=this.allData.indexOf(e),this.$refs.forms.editItem(e,this.form)},deleteItem:function(e){var s=this,r=this;this.$swal({title:"Are you sure?",text:"The data will be permanently deleted",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(function(f){f.value&&s.$axios.delete(r.url+"/"+e.id).then(function(d){s.$swal({type:"success",title:"Success...",text:"Row Deleted!"}),s.getDataFromApi()}).catch(function(d){s.$swal({type:"error",title:"Oops...",text:d.response.data.message})})})},emitData:function(e){this.documentStatus=e.documentStatus,this.itemSearch=e.itemSearch,this.searchStatus=e.searchStatus,this.searchItem=e.searchItem,this.search=e.search,this.filters=e.filters,this.getDataFromApi()},getDataFromApi:function(){var e=this;this.loading=!0;var s=this;this.$axios.get(this.url,{params:{options:s.options,searchItem:s.searchItem,documentStatus:s.documentStatus,searchStatus:s.searchStatus,search:s.search}}).then(function(r){e.loading=!1,e.allData=r.data.data.rows,e.totalData=r.data.data.total,e.itemSearch=r.data.filter,e.form=Object.assign({},r.data.data.form),e.defaultItem=Object.assign({},r.data.data.form)}).catch(function(r){e.loading=!1,e.$swal({type:"error",title:"Error",text:r.response.data.message})})}}},F=A,y=t(50),G=Object(y.a)(F,I,V,!1,null,null,null),N=O.default=G.exports}}]);
