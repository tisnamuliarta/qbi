(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{1068:function(t,e,n){"use strict";n.r(e);n(4),n(10),n(59);var o=n(654),r=n(689),c=n(1142),l=n(775),d=n(731),f=n(911),h=n(905),w=n(1140),m=n(899);n(655);Object(r.c)(c.a),Object(l.d)(d.a),Object(l.d)(f.a),Object(l.d)(h.a),Object(l.d)(w.a),Object(l.d)(m.a);var v={name:"TableSimple",components:{HotTable:o.a},data:function(){return{settings:{licenseKey:"non-commercial-and-evaluation"},detailsRoot:"detailsRoot",colHeaders:[]}},created:function(){this.setInstance()},methods:{setInstance:function(){window.details=this},addLine:function(){var t=this.$refs.details.hotInstance.countRows();this.$refs.details.hotInstance.alter("insert_row",t+1)},updateTableSettings:function(header){this.$refs.details.hotInstance.updateSettings({colHeaders:header,currentRowClassName:"currentRow",currentColClassName:"currentCol",startRows:1,currData:{},rowHeaders:!0,filters:!0,autoColumnSize:!1,viewportRowRenderingOffset:1e3,viewportColumnRenderingOffset:100,colWidths:80,width:"100%",stretchH:"all",hiddenColumns:{copyPasteEnabled:!1,indicator:!1,columns:[0]},contextMenu:{callback:function(t,e){var n=window.details;"remove_row"===t&&(n.isInvDetailChanges=!0,n.isInvChanges=!0)}},beforeRemoveRow:function(t,e,n,source){var o=window.details,r=prompt("Are your sure want to delete this rows?"),c=[];return""===r&&(n.forEach((function(t,e){var n=o.$refs.details.hotInstance.getDataAtCell(t,0);n&&c.push(n)})),c.length>0&&o.$emit("removeData",{id:c}),!0)}})},setDataToDetails:function(data,t){this.updateTableSettings(t);var e=this;setTimeout((function(){e.$refs.details.hotInstance.loadData(data)}),300)},getAddData:function(){return this.$refs.details.hotInstance.getSourceData()}}},R=n(50),component=Object(R.a)(v,(function(){var t=this;return(0,t._self._c)("hot-table",{ref:"details",attrs:{root:t.detailsRoot,settings:t.settings}})}),[],!1,null,null,null);e.default=component.exports}}]);