(window.webpackJsonp=window.webpackJsonp||[]).push([[104,37],{600:function(W,E,t){"use strict";var O=t(7),m=t.n(O),y=t(10),h=t.n(y),v=t(12),A=t.n(v),p=t(13),g=t.n(p),f=t(2),C=t(4),x=t.n(C),u=t(34),l=t.n(u),n=t(51),d=t.n(n),c=t(28),a=t.n(c),e=t(8),s=t.n(e),P=t(21),L=t.n(P),B=t(64),Dt=t.n(B),X=t(270),Mt=t.n(X),Z=t(33),yt=t.n(Z),w=t(271),ht=t.n(w),b=t(272),gt=t.n(b),k=t(273),Ct=t.n(k),q=t(274),At=t.n(q),tt=t(275),Lt=t.n(tt),et=t(276),Bt=t.n(et),st=t(277),Tt=t.n(st),ot=t(278),It=t.n(ot),_t=t(279),Ut=t.n(_t),nt=t(280),Rt=t.n(nt),at=t(281),Kt=t.n(at),rt=t(282),Wt=t.n(rt),lt=t(283),xt=t.n(lt),dt=t(35),Ft=t.n(dt),it=t(9),St=t.n(it),ct=t(284),Vt=t.n(ct),mt=t(3),ut=t(77),Et=t(1);function F(i,_){var r=Object.keys(i);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(i);_&&(o=o.filter(function(D){return Object.getOwnPropertyDescriptor(i,D).enumerable})),r.push.apply(r,o)}return r}function T(i){for(var _=1;_<arguments.length;_++){var r=arguments[_]!=null?arguments[_]:{};_%2?F(Object(r),!0).forEach(function(o){Object(f.a)(i,o,r[o])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(r)):F(Object(r)).forEach(function(o){Object.defineProperty(i,o,Object.getOwnPropertyDescriptor(r,o))})}return i}var ft=["sm","md","lg","xl"],I=["start","end","center"];function U(i,_){return ft.reduce(function(r,o){return r[i+Object(Et.I)(o)]=_(),r},{})}var S=function(_){return[].concat(I,["baseline","stretch"]).includes(_)},V=U("align",function(){return{type:String,default:null,validator:S}}),z=function(_){return[].concat(I,["space-between","space-around"]).includes(_)},N=U("justify",function(){return{type:String,default:null,validator:z}}),$=function(_){return[].concat(I,["space-between","space-around","stretch"]).includes(_)},G=U("alignContent",function(){return{type:String,default:null,validator:$}}),H={align:Object.keys(V),justify:Object.keys(N),alignContent:Object.keys(G)},vt={align:"align",justify:"justify",alignContent:"align-content"};function jt(i,_,r){var o=vt[i];if(r!=null){if(_){var D=_.replace(i,"");o+="-".concat(D)}return o+="-".concat(r),o.toLowerCase()}}var J=new Map;E.a=mt.default.extend({name:"v-row",functional:!0,props:T(T(T({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:S}},V),{},{justify:{type:String,default:null,validator:z}},N),{},{alignContent:{type:String,default:null,validator:$}},G),render:function(_,r){var o=r.props,D=r.data,Ot=r.children,R="";for(var pt in o)R+=String(o[pt]);var j=J.get(R);return j||function(){var M;j=[];var K;for(K in H)H[K].forEach(function(Y){var Pt=o[Y],Q=jt(K,Y,Pt);Q&&j.push(Q)});j.push((M={"no-gutters":o.noGutters,"row--dense":o.dense},Object(f.a)(M,"align-".concat(o.align),o.align),Object(f.a)(M,"justify-".concat(o.justify),o.justify),Object(f.a)(M,"align-content-".concat(o.alignContent),o.alignContent),M)),J.set(R,j)}(),_(o.tag,Object(ut.a)(D,{staticClass:"row",class:j}),Ot)}})},643:function(W,E,t){"use strict";t.r(E);var O=function(){var l=this,n=l._self._c;return n("div",[n("dropzone",{ref:"attachment",attrs:{id:"attachment",options:l.options,"destroy-dropzone":!0},on:{"vdropzone-sending":function(c,a,e){return l.sendingParams(c,a,e)},"vdropzone-success":function(c,a){return l.reloadAttachment(c,a)},"vdropzone-error":function(c,a,e){return l.handleError(c,a,e)}}})],1)},m=[],y=t(58),h=t(658),v=t.n(h),A=t(659),p={name:"FieldUpload",components:{Dropzone:v.a},props:{formType:{type:String,default:""},formData:{type:Object,default:function(){return{}}}},data:function(){return{showLoadingAttachment:!1,form:this.formData,options:{url:window.location.protocol+"//"+window.location.hostname+"/qb-core/api/document-files",timeout:9e9,addRemoveLinks:!0,withCredentials:!0,thumbnailWidth:50,thumbnailHeight:50,acceptedFiles:"image/*, application/pdf",dictDefaultMessage:"<span class='mdi mdi-cloud-upload'></span> UPLOAD HERE",headers:{Authorization:this.$auth.$storage.getCookie("_token.local")}}}},methods:{sendingParams:function(l,n,d){var c=this.form.id!==0?this.form.id:this.form.temp_id;d.append("temp_id",c),d.append("type",this.formType)},handleError:function(l,n,d){this.$swal({type:"error",title:"Error...",text:n.message})},reloadAttachment:function(l,n){var d=this;n.errors?this.$swal({type:"error",title:"Oops...",text:n.message}):(setTimeout(function(){d.getFiles()},300),this.$swal({type:"success",title:"Success...",text:"Attachment uploaded!"}))},getFiles:function(){var l=this;this.showLoadingAttachment=!0;var n=this,d=this.form.id?this.form.id:this.form.temp_id;this.$axios.get(n.options.url,{params:{type:this.formType,temp_id:d}}).then(function(c){l.$emit("eventGetFiles",{row:c.data.rows}),n.showLoadingAttachment=!1}).catch(function(c){l.showLoadingAttachment=!1,l.$swal({type:"error",title:"Error...",text:c.response.message})})},deleteFile:function(l){var n=this,d=this;this.$swal({title:"Are you sure?",text:"The file will be permanently deleted",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(function(c){c.value&&n.$axios.delete(d.options.url,{params:{id:l.id}}).then(function(a){n.$swal({type:"success",title:"Success...",text:"Attachment Deleted!"}),d.getFiles()}).catch(function(a){n.$swal({type:"error",title:"Oops...",text:a.response.data.message})})})}}},g=p,f=t(50),C=Object(f.a)(g,O,m,!1,null,null,null),x=E.default=C.exports},760:function(W,E,t){"use strict";t.r(E);var O=t(165),m=t(589),y=t(247),h=t(209),v=t(600),A=function(){var e=this,s=e._self._c;return s(v.a,[s(m.a,{attrs:{cols:"12",md:"12"}},[s(v.a,{attrs:{"no-gutters":""}},[s(m.a,{staticClass:"pa-1",attrs:{cols:"12",md:"2"}},[s("span",{staticClass:"text-subtitle-1"},[e._v("Company Logo")])]),e._v(" "),s(m.a,{staticClass:"pa-1",attrs:{cols:"12",md:"2"}},[e.companyNameView?s(h.a,{attrs:{"max-width":"250","max-height":"150",src:e.logo}}):s("DocumentFieldUpload",{ref:"uploadField",attrs:{"form-type":"company_logo","form-data":e.form},on:{eventGetFiles:e.eventGetFiles}})],1),e._v(" "),e.companyNameView?s(m.a,{staticClass:"pa-1 text-right",attrs:{cols:"12",md:"1"}},[s(O.a,{attrs:{icon:"",small:""},on:{click:function(L){e.companyNameView=!1}}},[s(y.a,[e._v("mdi-pencil")])],1)],1):e._e()],1),e._v(" "),s("hr")],1),e._v(" "),s(m.a,{attrs:{cols:"12",md:"12"}},[s("LazySetupSectionCompanyName",{attrs:{form:e.form,logo:e.logo}}),e._v(" "),s("hr")],1),e._v(" "),s(m.a,{attrs:{cols:"12",md:"12"}},[s("LazySetupSectionCompanyInfo",{attrs:{form:e.form}}),e._v(" "),s("hr")],1),e._v(" "),s(m.a,{attrs:{cols:"12",md:"12"}},[s("LazySetupSectionCompanyAddress",{attrs:{form:e.form}}),e._v(" "),s("hr")],1),e._v(" "),s(m.a,{attrs:{cols:"12",md:"12"}},[s("LazySetupSectionCompanyBank",{attrs:{form:e.form}}),e._v(" "),s("hr")],1)],1)},p=[],g=t(17),f=t(4),C=t(9),x=t(216),u={name:"CompanySetup",props:{formData:{type:Object,default:function(){return{}}}},data:function(){return{form:this.formData,logo:"",url:"",itemCurrency:[],companyNameView:!0,companyNameEdit:!1}},mounted:function(){this.companyNameView=!0},methods:{save:function(){this.companyNameView=!0},getCurrency:function(){var e=this;this.$axios.get("/api/financial/currency").then(function(s){e.itemCurrency=s.data.data.rows})},eventGetFiles:function(e){this.form.company_logo=e.row,this.logo=this.url+"/files/logo/"+this.form.company_logo,this.companyNameView=!0},changeCurrency:function(){var e=this.form.company_currency_code;this.form.company_currency_symbol=e.symbol,this.form.company_currency_code=e.code},getForm:function(){var e=new FormData;return Object.entries(this.form).forEach(function(s){var P=Object(g.a)(s,2),L=P[0],B=P[1];e.append(L,B)}),e},setForm:function(e,s){this.form=Object.assign({},e),this.url=s,this.logo=s+"/files/logo/"+this.form.company_logo}}},l=u,n=t(50),d=Object(n.a)(l,A,p,!1,null,null,null),c=E.default=d.exports;installComponents(d,{DocumentFieldUpload:t(643).default})}}]);