(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{1127:function(X,P,n){"use strict";n.r(P);var z=function(){var t=this,e=t._self._c;return e("div",{staticClass:"scroll-container-min",attrs:{id:"parentContainer"}},[e("hot-table",{ref:"details",attrs:{root:t.detailsRoot,settings:t.settings}})],1)},F=[],G=n(24),S=n(17),Z=n(73),k=n(4),q=n(9),tt=n(7),et=n(46),ot=n(27),nt=n(58),at=n(216),j=n(653),m=n(689),A=n(1165),D=n(894),M=n(1159),I=n(1162),$=n(710),_=n(670),g=n(777),x=n(895),E=n(912),L=n(1167),B=n(1163),K=n(1164),U=n(897),O=n(686),T=n(655);Object(m.c)(A.a),Object(m.c)(D.a),Object(m.c)(M.a),Object(m.c)(I.a),Object($.c)(_.a),Object(g.d)(x.a),Object(g.d)(E.a),Object(g.d)(L.a),Object(g.d)(B.a),Object(g.d)(K.a),Object(g.d)(U.a),Object(g.d)(O.a);var b=function(t,e){e.row===-1&&t.target.nodeName==="TD"&&(t.stopImmediatePropagation(),t.stopPropagation(),this.deselectCell())},H={name:"TableDetailProduction",components:{HotTable:j.a},data:function(){return{commissionRate:1,plannedQty:1,settings:{licenseKey:"non-commercial-and-evaluation",currentRowClassName:"currentRow",currentColClassName:"currentCol",startRows:1,rowHeaders:!0,manualColumnResize:!0,rowHeights:28,viewportRowRenderingOffset:1e3,viewportColumnRenderingOffset:100,colWidths:80,persistentState:!0,width:"100%",height:"auto",stretchH:"all",hiddenColumns:{copyPasteEnabled:!1,indicator:!1,columns:[0,1]},beforeOnCellMouseDown:b},detailsRoot:"detailsRoot",colHeaders:[],form:{}}},created:function(){this.setInstance()},methods:{setInstance:function(){window.detailPayCheck=this},removeRow:function(t){this.$refs.details.hotInstance.alter("remove_row",t)},addLine:function(){var t=this.$refs.details.hotInstance.countRows();this.$refs.details.hotInstance.alter("insert_row",t+1,5)},updateTableSettings:function(t,e){this.$refs.details.hotInstance.updateSettings({colHeaders:e,columns:t,licenseKey:"non-commercial-and-evaluation",height:"auto",beforeRefreshDimensions:function(){return!1},beforeOnCellMouseDown:b,afterRemoveRow:function(c,i,l,u){var h=window.detailPayCheck;h.calculateTotal()},beforeRemoveRow:function(c,i,l,u){var h=window.detailPayCheck,d=[];l.forEach(function(p,R){var v=h.$refs.details.hotInstance.getDataAtCell(p,0);v&&d.push(v)});var y=h.$refs.details.hotInstance.countRows();return y===1&&h.$emit("calcTotal",{subTotal:0,amount:0,discountAmount:0,taxDetail:[]}),d.length>0&&h.$emit("removeData",{id:d}),!0},afterChange:function(c,i){var l=window.detailPayCheck;if(c){var u=0,h,d=[];if(c.forEach(function(rt){var w=Object(S.a)(rt,4),it=w[0],J=w[1],N=w[2],Y=w[3];if(u=J,u!=="payroll_id"||u!=="employee_name"||u!=="employee_id"||u!=="salary"||u!=="sub_total"){var lt=0,ct=[it,J,N,Y,lt];N!==Y&&(h=c[0][0],d.push(ct))}}),u!=="payroll_id"||u!=="employee_name"||u!=="employee_id"||u!=="salary"||u!=="sub_total"){for(var y=[],p=0,R=!1,v=0,C=d.length;v<C;v++){var V=d[v][0];V!=="10"&&(R=!0,h===V?p=p+1:(h=V,p=0),p===1&&y.push(d[v]))}if(R)for(var Q=0,st=y.length;Q<st;Q++)l.calculateTotal()}}},beforeRender:function(c){var i=window.detailPayCheck;i.$nuxt.$loading.start()},afterRender:function(c){var i=window.detailPayCheck;i.$nuxt.$loading.finish()},afterLoadData:function(c,i,l){}})},selectItems:function(t){var e=t.row,r=t.selected,c=this;this.$refs.details.hotInstance.batch(function(){r.forEach(function(i,l){var u=i.description?i.description:i.name;c.$refs.details.hotInstance.setDataAtRowProp([[e,"item_code",i.code],[e,"item_id",i.id],[e,"unit",i.unit],[e,"whs_code",i.whs_code],[e,"narration",u],[e,"base_qty",1]]),e++})})},selectAccount:function(t){var e=t.row,r=t.selected;this.$refs.details.hotInstance.setDataAtRowProp(e,"account_id",r[0].id),this.$refs.details.hotInstance.setDataAtRowProp(e,"account_code",r[0].code)},setDataToDetails:function(t,e,r,c){var i=this,l=this;this.form=e,this.$refs.details.hotInstance.batch(function(){i.updateTableSettings(r,c);var u=e.line_items.length>0?e.line_items:t;l.$refs.details.hotInstance.loadData(u),i.$nuxt.$loading.finish()})},setCommission:function(t){var e=this;this.commissionRate=t;var r=this.$refs.details.hotInstance.countRows();if(r>0){for(var c=function(u){e.$refs.details.hotInstance.batch(function(){var h=e.$refs.details.hotInstance.getDataAtRowProp(u,"employee_name");t.forEach(function(d,y){h===d.employee_name&&e.$refs.details.hotInstance.setDataAtRowProp(u,"Komisi",d.amount)})})},i=0;i<r;i++)c(i);setTimeout(function(){e.calculateTotal()},500)}},setQty:function(t){var e=this;this.$refs.details.hotInstance.batch(function(){e.plannedQty=t,e.calculateTotal()})},calculateTotal:function(){var t=this,e=this.$refs.details.hotInstance.countRows(),r=0;if(e>0)for(var c=function(u){t.$refs.details.hotInstance.batch(function(){for(var h=0,d=t.$refs.details.hotInstance.getSourceDataAtRow(u),y=0,p=Object.entries(d);y<p.length;y++){var R=Object(S.a)(p[y],1),v=R[0];if(v!=="payroll_id"&&v!=="employee_id"&&v!=="employee_name"&&v!=="payment_method"&&v!=="pay_type_id"&&v!=="sub_total"){var C=t.$refs.details.hotInstance.getDataAtRowProp(u,v);r=r+parseFloat(C),h=h+parseFloat(C)}}t.$refs.details.hotInstance.setDataAtRowProp(u,"sub_total",h)})},i=0;i<e;i++)c(i);this.$emit("calcTotal",{subTotal:r})},getTaxRate:function(t){var e=this;return Object(G.a)(regeneratorRuntime.mark(function r(){var c;return regeneratorRuntime.wrap(function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,e.$axios.get("/api/financial/taxes/0",{params:{name:t}});case 2:return c=l.sent,l.abrupt("return",c.data.data.rows);case 4:case"end":return l.stop()}},r)}))()},getDataAtRowPro:function(t,e){return this.$refs.details.hotInstance.getDataAtRowProp(t,e)},countRows:function(){return this.$refs.details.hotInstance.countRows()},checkIfEmptyRow:function(t){return this.$refs.details.hotInstance.isEmptyRow(t)},getAddData:function(t){return this.$refs.details.hotInstance.getSourceData()}}},W=H,s=n(50),a=Object(s.a)(W,z,F,!1,null,null,null),f=P.default=a.exports},670:function(X,P,n){"use strict";n.d(P,"a",function(){return W});var z=n(606),F=n(604),G=n(4),S=n(111),Z=n(625),k=n(12),q=n(7),tt=n(46),et=n(52),ot=n(212),nt=n(33),at=n(35),j=n(871),m=n(605),A=n(601);function D(s){return D=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},D(s)}function M(s,a){if(!(s instanceof a))throw new TypeError("Cannot call a class as a function")}function I(s,a){for(var f=0;f<a.length;f++){var o=a[f];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(s,o.key,o)}}function $(s,a,f){return a&&I(s.prototype,a),f&&I(s,f),Object.defineProperty(s,"prototype",{writable:!1}),s}function _(){return typeof Reflect!="undefined"&&Reflect.get?_=Reflect.get.bind():_=function(a,f,o){var t=g(a,f);if(!!t){var e=Object.getOwnPropertyDescriptor(t,f);return e.get?e.get.call(arguments.length<3?a:o):e.value}},_.apply(this,arguments)}function g(s,a){for(;!Object.prototype.hasOwnProperty.call(s,a)&&(s=O(s),s!==null););return s}function x(s,a){if(typeof a!="function"&&a!==null)throw new TypeError("Super expression must either be null or a function");s.prototype=Object.create(a&&a.prototype,{constructor:{value:s,writable:!0,configurable:!0}}),Object.defineProperty(s,"prototype",{writable:!1}),a&&E(s,a)}function E(s,a){return E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,t){return o.__proto__=t,o},E(s,a)}function L(s){var a=U();return function(){var o=O(s),t;if(a){var e=O(this).constructor;t=Reflect.construct(o,arguments,e)}else t=o.apply(this,arguments);return B(this,t)}}function B(s,a){if(a&&(D(a)==="object"||typeof a=="function"))return a;if(a!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return K(s)}function K(s){if(s===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return s}function U(){if(typeof Reflect=="undefined"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(s){return!1}}function O(s){return O=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(f){return f.__proto__||Object.getPrototypeOf(f)},O(s)}var T="ht_editor_visible",b="selectEditor",H="select",W=function(s){x(f,s);var a=L(f);function f(){return M(this,f),a.apply(this,arguments)}return $(f,[{key:"init",value:function(){this.select=this.hot.rootDocument.createElement("SELECT"),Object(m.a)(this.select,"htSelectEditor"),this.select.style.display="none",this.hot.rootElement.appendChild(this.select),this.registerHooks()}},{key:"getValue",value:function(){return this.select.value}},{key:"setValue",value:function(t){this.select.value=t}},{key:"open",value:function(){this._opened=!0,this.refreshDimensions(),this.select.style.display="";var t=this.hot.getShortcutManager();t.setActiveContextName("editor"),this.registerShortcuts()}},{key:"close",value:function(){this._opened=!1,this.select.style.display="none",Object(m.v)(this.select,T)&&Object(m.K)(this.select,T),this.unregisterShortcuts(),this.clearHooks()}},{key:"focus",value:function(){this.select.focus()}},{key:"registerHooks",value:function(){var t=this;this.addHook("afterScrollHorizontally",function(){return t.refreshDimensions()}),this.addHook("afterScrollVertically",function(){return t.refreshDimensions()}),this.addHook("afterColumnResize",function(){return t.refreshDimensions()}),this.addHook("afterRowResize",function(){return t.refreshDimensions()})}},{key:"prepare",value:function(t,e,r,c,i,l){var u=this;_(O(f.prototype),"prepare",this).call(this,t,e,r,c,i,l);var h=this.cellProperties.selectOptions,d;typeof h=="function"?d=this.prepareOptions(h(this.row,this.col,this.prop)):d=this.prepareOptions(h),Object(m.e)(this.select),Object(A.o)(d,function(y,p){var R=u.hot.rootDocument.createElement("OPTION");R.value=p,Object(m.f)(R,y),u.select.appendChild(R)})}},{key:"prepareOptions",value:function(t){var e={};if(Array.isArray(t))for(var r=0,c=t.length;r<c;r++)e[t[r]]=t[r];else D(t)==="object"&&(e=t);return e}},{key:"refreshValue",value:function(){var t=this.hot.getSourceDataAtCell(this.row,this.prop);this.originalValue=t,this.setValue(t),this.refreshDimensions()}},{key:"refreshDimensions",value:function(){if(this.state===j.b.EDITING){if(this.TD=this.getEditedCell(),!this.TD){this.close();return}var t=this.getEditedCellRect(),e=t.top,r=t.start,c=t.width,i=t.height,l=this.select.style;l.height="".concat(i,"px"),l.width="".concat(c,"px"),l.top="".concat(e,"px"),l[this.hot.isRtl()?"right":"left"]="".concat(r,"px"),l.margin="0px",Object(m.a)(this.select,T)}}},{key:"registerShortcuts",value:function(){var t=this,e=this.hot.getShortcutManager(),r=e.getContext("editor"),c={group:b};this.isInFullEditMode()!==!1&&r.addShortcuts([{keys:[["ArrowUp"]],callback:function(){var l=t.select.selectedIndex-1;l>=0&&(t.select[l].selected=!0)}},{keys:[["ArrowDown"]],callback:function(){var l=t.select.selectedIndex+1;l<=t.select.length-1&&(t.select[l].selected=!0)}}],c)}},{key:"unregisterShortcuts",value:function(){var t=this.hot.getShortcutManager(),e=t.getContext("editor");e.removeShortcutsByGroup(b)}}],[{key:"EDITOR_TYPE",get:function(){return H}}]),f}(j.a)}}]);
