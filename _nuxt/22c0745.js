(window.webpackJsonp=window.webpackJsonp||[]).push([[37],{642:function(g,d,s){"use strict";s.r(d);var l=function(){var e=this,t=e._self._c;return t("div",[t("dropzone",{ref:"attachment",attrs:{id:"attachment",options:e.options,"destroy-dropzone":!0},on:{"vdropzone-sending":function(n,r,a){return e.sendingParams(n,r,a)},"vdropzone-success":function(n,r){return e.reloadAttachment(n,r)},"vdropzone-error":function(n,r,a){return e.handleError(n,r,a)}}})],1)},c=[],w=s(59),p=s(660),u=s.n(p),y=s(661),h={name:"FieldUpload",components:{Dropzone:u.a},props:{formType:{type:String,default:""},formData:{type:Object,default:function(){return{}}}},data:function(){return{showLoadingAttachment:!1,form:this.formData,options:{url:window.location.protocol+"//"+window.location.hostname+"/qb-core/api/document-files",timeout:9e9,addRemoveLinks:!0,withCredentials:!0,thumbnailWidth:50,thumbnailHeight:50,acceptedFiles:"image/*, application/pdf",dictDefaultMessage:"<span class='mdi mdi-cloud-upload'></span> UPLOAD HERE",headers:{Authorization:this.$auth.$storage.getCookie("_token.local")}}}},methods:{sendingParams:function(e,t,o){var n=this.form.id!==0?this.form.id:this.form.temp_id;o.append("temp_id",n),o.append("type",this.formType)},handleError:function(e,t,o){this.$swal({type:"error",title:"Error...",text:t.message})},reloadAttachment:function(e,t){var o=this;t.errors?this.$swal({type:"error",title:"Oops...",text:t.message}):(setTimeout(function(){o.getFiles()},300),this.$swal({type:"success",title:"Success...",text:"Attachment uploaded!"}))},getFiles:function(){var e=this;this.showLoadingAttachment=!0;var t=this,o=this.form.id?this.form.id:this.form.temp_id;this.$axios.get(t.options.url,{params:{type:this.formType,temp_id:o}}).then(function(n){e.$emit("eventGetFiles",{row:n.data.rows}),t.showLoadingAttachment=!1}).catch(function(n){e.showLoadingAttachment=!1,e.$swal({type:"error",title:"Error...",text:n.response.message})})},deleteFile:function(e){var t=this,o=this;this.$swal({title:"Are you sure?",text:"The file will be permanently deleted",type:"warning",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, delete it!"}).then(function(n){n.value&&t.$axios.delete(o.options.url,{params:{id:e.id}}).then(function(r){t.$swal({type:"success",title:"Success...",text:"Attachment Deleted!"}),o.getFiles()}).catch(function(r){t.$swal({type:"error",title:"Oops...",text:r.response.data.message})})})}}},m=h,f=s(50),v=Object(f.a)(m,l,c,!1,null,null,null),x=d.default=v.exports}}]);
