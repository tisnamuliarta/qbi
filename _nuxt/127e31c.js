(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{910:function(x,d,t){"use strict";t.r(d);var r=function(){var e=this,o=e._self._c;return o("hot-table",{ref:"details",attrs:{root:e.detailsRoot,settings:e.settings}})},i=[],E=t(58),c=t(653),n=t(689),l=t(1165),u=t(894),h=t(1159),m=t(1162),v=t(891),p=t(1166),f=t(893),T="autocomplete",g={CELL_TYPE:T,editor:v.a,renderer:p.a,validator:f.a},s=t(777),y=t(895),R=t(912),j=t(1167),O=t(1163),C=t(1164),w=t(897),N=t(655);Object(n.c)(l.a),Object(n.c)(u.a),Object(n.c)(h.a),Object(n.c)(m.a),Object(n.c)(g),Object(s.d)(y.a),Object(s.d)(R.a),Object(s.d)(j.a),Object(s.d)(O.a),Object(s.d)(C.a),Object(s.d)(w.a);var L={name:"PermissionList",components:{HotTable:c.a},data:function(){return{settings:{licenseKey:"non-commercial-and-evaluation"},detailsRoot:"detailsRoot"}},created:function(){this.setInstance()},methods:{setInstance:function(){window.details=this},addLine:function(){var e=this.$refs.details.hotInstance.countRows();this.$refs.details.hotInstance.alter("insert_row",e+1)},updateTableSettings:function(){var e=this;this.$refs.details.hotInstance.updateSettings({colHeaders:["Permission","Index","Store","Edits","Erase"],currentRowClassName:"currentRow",currentColClassName:"currentCol",startRows:0,currData:{},rowHeaders:!0,manualColumnResize:!0,viewportRowRenderingOffset:1e3,viewportColumnRenderingOffset:100,colWidths:80,dropdownMenu:!0,persistentState:!0,width:"100%",height:"auto",stretchH:"all",columns:[{type:"autocomplete",data:"permission",width:150,strict:!1,filter:!0,height:26,wordWrap:!1,source:function(Y,b){var P=e.$auth.$storage.getState("permission_list");b(P)}},{data:"index",width:50,type:"checkbox",checkedTemplate:"Y",uncheckedTemplate:"N"},{data:"store",width:50,type:"checkbox",checkedTemplate:"Y",uncheckedTemplate:"N"},{data:"edits",width:50,type:"checkbox",checkedTemplate:"Y",uncheckedTemplate:"N"},{data:"erase",width:50,type:"checkbox",checkedTemplate:"Y",uncheckedTemplate:"N"}]})},setDataToDetails:function(e){this.updateTableSettings();var o=this;setTimeout(function(){o.$refs.details.hotInstance.loadData(e)},300)},getAddData:function(){return this.$refs.details.hotInstance.getSourceData()}}},D=L,I=t(50),S=Object(I.a)(D,r,i,!1,null,null,null),$=d.default=S.exports}}]);
