(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{1132:function(Y,E,t){"use strict";t.r(E);var u=t(249),I=t(87),j=t(577),D=t(587),O=t(585),A=t(575),v=t(247),L=t(598),d=t(592),R=t(27),Z=t(21),T=t(268),B=function(){var _=this,e=_._self._c;return e(O.a,[e(L.a,{attrs:{align:"center","align-content":"center",justify:"center"}},[e(d.a,{directives:[{name:"show",rawName:"v-show",value:_.loading,expression:"loading"}],attrs:{type:"table"}}),_._v(" "),e(D.a,{directives:[{name:"show",rawName:"v-show",value:!_.loading,expression:"!loading"}],attrs:{cols:"12",md:_.mdWidth}},[e(u.a,[e(I.b,[e("div",{staticClass:"pl-4 pt-2"},[e(j.a,{staticClass:"ma-2",attrs:{link:"",color:"primary",label:"",small:""},on:{click:function(x){return _.$router.push({path:"/app/reports/list"})}}},[e(v.a,{attrs:{left:""}},[_._v(" mdi-arrow-left")]),_._v(`
              All Reports
            `)],1),_._v(" "),e("div",{staticClass:"text-center"},[e("p",{staticClass:"font-weight-medium text-h5 mt-n4"},[_._v(`
                `+_._s(_.$t(_.$route.query.name))+`
              `)]),_._v(" "),e("p",{staticClass:"font-weight-medium mt-n4"},[_._v(`
                Period: `+_._s(_.period)+`
              `)])]),_._v(" "),e(A.a)],1),_._v(" "),e("LazyMainToolbar",{attrs:{"document-status":_.documentStatus,"search-status":_.searchStatus,"item-search":_.itemSearch,"search-item":_.searchItem,search:_.search,title:"Chart of Accounts","show-filter":""},on:{emitData:_.emitData,getDataFromApi:_.getDataFromApi}}),_._v(" "),e(D.a,{staticClass:"mt-1",attrs:{cols:"12"}},[_._t("content")],2)],1)],1)],1)],1)],1)},P=[],b=t(10),K=t(4),W={name:"ListReport",props:{mdWidth:{type:String,default:"6"},period:{type:String,default:""}},data:function(){return{totalData:0,loading:!0,allData:[],documentStatus:[],itemSearch:[],searchStatus:"",searchItem:"",search:"",form:{},date_from:null,date_to:null,url:"/api/report",title:"Reports"}},head:function(){return{title:this.$route.query.name}},activated:function(){this.getDataFromApi()},mounted:function(){this.getDataFromApi()},methods:{editItem:function(_){this.$auth.$storage.setState("basePath",this.$route.path),this.$router.push({path:this.$formatter.mappingAction(_.transaction_type),query:{document:_.id}})},emitData:function(_){this.documentStatus=_.documentStatus,this.itemSearch=_.itemSearch,this.searchStatus=_.searchStatus,this.searchItem=_.searchItem,this.search=_.search,this.filters=_.filters,this.date_from=_.dateFrom,this.date_to=_.dateTo,this.getDataFromApi()},getDataFromApi:function(){var _=this;this.loading=!0;var e=this;this.$axios.get(this.url,{params:{options:e.options,searchItem:e.searchItem,documentStatus:e.documentStatus,searchStatus:e.searchStatus,search:e.search,start_date:e.date_from,end_date:e.date_to,report_type:e.$route.query.name}}).then(function(r){_.loading=!1,_.allData=r.data.data,_.$emit("getData",{data:_.allData,startDate:r.data.start_date,endDate:r.data.end_date,width:r.data.width}),_.totalData=r.data.total,_.itemSearch=r.data.filter,_.form=Object.assign({},r.data.data),_.defaultItem=Object.assign({},r.data.form)}).catch(function(r){_.loading=!1,_.$swal({type:"error",title:"Error",text:r.response.data.message})})}}},f=W,U=t(50),M=Object(U.a)(f,B,P,!1,null,null,null),w=E.default=M.exports},598:function(Y,E,t){"use strict";var u=t(7),I=t.n(u),j=t(10),D=t.n(j),O=t(12),A=t.n(O),v=t(13),L=t.n(v),d=t(2),R=t(4),Z=t.n(R),T=t(34),B=t.n(T),P=t(51),b=t.n(P),K=t(28),W=t.n(K),f=t(8),U=t.n(f),M=t(21),w=t.n(M),l=t(64),_=t.n(l),e=t(269),r=t.n(e),x=t(33),gt=t.n(x),k=t(270),Ct=t.n(k),q=t(271),pt=t.n(q),tt=t(272),yt=t.n(tt),_t=t(273),It=t.n(_t),st=t(274),At=t.n(st),et=t(275),Lt=t.n(et),at=t(276),Rt=t.n(at),nt=t(277),Tt=t.n(nt),ot=t(278),Bt=t.n(ot),rt=t(279),Kt=t.n(rt),lt=t(280),Wt=t.n(lt),dt=t(281),Ut=t.n(dt),ct=t(282),xt=t.n(ct),it=t(35),St=t.n(it),mt=t(9),Vt=t.n(mt),Et=t(283),$t=t.n(Et),ut=t(3),jt=t(77),Dt=t(1);function S(o,a){var n=Object.keys(o);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(o);a&&(s=s.filter(function(i){return Object.getOwnPropertyDescriptor(o,i).enumerable})),n.push.apply(n,s)}return n}function h(o){for(var a=1;a<arguments.length;a++){var n=arguments[a]!=null?arguments[a]:{};a%2?S(Object(n),!0).forEach(function(s){Object(d.a)(o,s,n[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(n)):S(Object(n)).forEach(function(s){Object.defineProperty(o,s,Object.getOwnPropertyDescriptor(n,s))})}return o}var Ot=["sm","md","lg","xl"],g=["start","end","center"];function C(o,a){return Ot.reduce(function(n,s){return n[o+Object(Dt.I)(s)]=a(),n},{})}var V=function(a){return[].concat(g,["baseline","stretch"]).includes(a)},$=C("align",function(){return{type:String,default:null,validator:V}}),F=function(a){return[].concat(g,["space-between","space-around"]).includes(a)},G=C("justify",function(){return{type:String,default:null,validator:F}}),N=function(a){return[].concat(g,["space-between","space-around","stretch"]).includes(a)},z=C("alignContent",function(){return{type:String,default:null,validator:N}}),J={align:Object.keys($),justify:Object.keys(G),alignContent:Object.keys(z)},vt={align:"align",justify:"justify",alignContent:"align-content"};function Pt(o,a,n){var s=vt[o];if(n!=null){if(a){var i=a.replace(o,"");s+="-".concat(i)}return s+="-".concat(n),s.toLowerCase()}}var H=new Map;E.a=ut.default.extend({name:"v-row",functional:!0,props:h(h(h({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:V}},$),{},{justify:{type:String,default:null,validator:F}},G),{},{alignContent:{type:String,default:null,validator:N}},z),render:function(a,n){var s=n.props,i=n.data,ft=n.children,p="";for(var Mt in s)p+=String(s[Mt]);var c=H.get(p);return c||function(){var m;c=[];var y;for(y in J)J[y].forEach(function(Q){var ht=s[Q],X=Pt(y,Q,ht);X&&c.push(X)});c.push((m={"no-gutters":s.noGutters,"row--dense":s.dense},Object(d.a)(m,"align-".concat(s.align),s.align),Object(d.a)(m,"justify-".concat(s.justify),s.justify),Object(d.a)(m,"align-content-".concat(s.alignContent),s.alignContent),m)),H.set(p,c)}(),a(s.tag,Object(jt.a)(i,{staticClass:"row",class:c}),ft)}})}}]);
