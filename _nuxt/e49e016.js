(window.webpackJsonp=window.webpackJsonp||[]).push([[132],{1078:function($,i,t){"use strict";t.r(i);var u=function(){var e=this,s=e._self._c;return s("hot-table",{ref:"details",attrs:{root:e.detailsRoot,settings:e.settings}})},v=[],A=t(4),H=t(9),x=t(58),f=t(653),m=t(689),h=t(1163),n=t(777),g=t(686),p=t(912),w=t(906),R=t(1161),b=t(900),z=t(655);Object(m.c)(h.a),Object(n.d)(g.a),Object(n.d)(p.a),Object(n.d)(w.a),Object(n.d)(R.a),Object(n.d)(b.a);var D={name:"TableSimple",components:{HotTable:f.a},data:function(){return{settings:{licenseKey:"non-commercial-and-evaluation"},detailsRoot:"detailsRoot",colHeaders:[]}},created:function(){this.setInstance()},methods:{setInstance:function(){window.details=this},addLine:function(){var e=this.$refs.details.hotInstance.countRows();this.$refs.details.hotInstance.alter("insert_row",e+1)},updateTableSettings:function(e){this.$refs.details.hotInstance.updateSettings({colHeaders:e,currentRowClassName:"currentRow",currentColClassName:"currentCol",startRows:1,currData:{},rowHeaders:!0,filters:!0,autoColumnSize:!1,viewportRowRenderingOffset:1e3,viewportColumnRenderingOffset:100,colWidths:80,width:"100%",stretchH:"all",hiddenColumns:{copyPasteEnabled:!1,indicator:!1,columns:[0]},contextMenu:{callback:function(l,S){var d,j,o=window.details;l==="remove_row"&&(o.isInvDetailChanges=!0,o.isInvChanges=!0)}},beforeRemoveRow:function(l,S,d,j){var o=window.details,y=prompt("Are your sure want to delete this rows?"),r=[];return y===""?(d.forEach(function(O,E){var c=o.$refs.details.hotInstance.getDataAtCell(O,0);c&&r.push(c)}),r.length>0&&o.$emit("removeData",{id:r}),!0):!1}})},setDataToDetails:function(e,s){this.updateTableSettings(s);var l=this;setTimeout(function(){l.$refs.details.hotInstance.loadData(e)},300)},getAddData:function(){return this.$refs.details.hotInstance.getSourceData()}}},C=D,T=t(50),I=Object(T.a)(C,u,v,!1,null,null,null),N=i.default=I.exports}}]);
