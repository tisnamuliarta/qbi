(window.webpackJsonp=window.webpackJsonp||[]).push([[102,50],{1123:function(_,r,e){"use strict";e.r(r);var s=function(){var t=this,n=t._self._c;return n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticClass:"pa-1",attrs:{cols:"12",md:"2"}},[n("span",{staticClass:"text-subtitle-1"},[t._v("Accounting")])]),t._v(" "),n("v-col",{staticClass:"pa-1",attrs:{cols:"12",md:"8"}},[t.companyNameView?n("FormSectionView",{scopedSlots:t._u([{key:"content",fn:function(){return[n("v-row",{attrs:{"no-gutters":""},on:{click:function(i){t.companyNameView=!1}}},[n("v-col",{staticClass:"pa-2 font-weight-medium",attrs:{cols:"12",md:"4"}},[t._v(`
              First month of fiscal year
            `)]),t._v(" "),n("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"8"}},[n("span",{staticClass:"text-subtitle-2",domProps:{textContent:t._s(t.form.advanced_first_month_fiscal_year)}})]),t._v(" "),n("v-col",{staticClass:"pa-2 font-weight-medium",attrs:{cols:"12",md:"4"}},[t._v(`
              First month income tax year
            `)]),t._v(" "),n("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"8"}},[n("span",{staticClass:"text-subtitle-2",domProps:{textContent:t._s(t.form.advanced_first_month_incoming_tax)}})]),t._v(" "),n("v-col",{staticClass:"pa-2 font-weight-medium",attrs:{cols:"12",md:"4"}},[t._v(`
              Accounting Method
            `)]),t._v(" "),n("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"8"}},[n("span",{staticClass:"text-subtitle-2",domProps:{textContent:t._s(t.form.advanced_accounting_method)}})]),t._v(" "),n("v-col",{staticClass:"pa-2 font-weight-medium",attrs:{cols:"12",md:"4"}},[t._v(`
              Close the books
            `)]),t._v(" "),n("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"8"}},[n("span",{staticClass:"text-subtitle-2",domProps:{textContent:t._s(t.$formatter.formatCheckBox(t.form.advanced_closed_books))}})])],1)]},proxy:!0}],null,!1,867305689)}):n("FormSectionEdit",{ref:"sectionEdit",on:{save:t.save,cancel:t.cancel},scopedSlots:t._u([{key:"content",fn:function(){return[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"5"}},[n("v-list-item",{staticClass:"pa-0",attrs:{"two-line":""}},[n("v-list-item-content",[n("v-list-item-title",[t._v("First month of fiscal year")])],1)],1)],1),t._v(" "),n("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"7"}},[n("v-select",{attrs:{label:"First month of fiscal year",items:t.itemMonth,"item-text":"text","item-value":"value",filled:"",dense:"","hide-details":"auto"},model:{value:t.formData.advanced_first_month_fiscal_year,callback:function(i){t.$set(t.formData,"advanced_first_month_fiscal_year",i)},expression:"formData.advanced_first_month_fiscal_year"}})],1),t._v(" "),n("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"5"}},[n("v-list-item",{staticClass:"pa-0",attrs:{"two-line":""}},[n("v-list-item-content",[n("v-list-item-title",[t._v("First month income tax year")])],1)],1)],1),t._v(" "),n("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"7"}},[n("v-select",{attrs:{label:"First month income tax year",items:t.itemFiscalYear,filled:"",dense:"","hide-details":"auto"},model:{value:t.formData.advanced_first_month_incoming_tax,callback:function(i){t.$set(t.formData,"advanced_first_month_incoming_tax",i)},expression:"formData.advanced_first_month_incoming_tax"}})],1),t._v(" "),n("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"5"}},[n("v-list-item",{staticClass:"pa-0",attrs:{"two-line":""}},[n("v-list-item-content",[n("v-list-item-title",[t._v("Accounting Method")])],1)],1)],1),t._v(" "),n("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"7"}},[n("v-select",{attrs:{label:"Accounting Method",items:t.itemAccountingMethod,filled:"",dense:"","hide-details":"auto"},model:{value:t.formData.advanced_accounting_method,callback:function(i){t.$set(t.formData,"advanced_accounting_method",i)},expression:"formData.advanced_accounting_method"}})],1),t._v(" "),n("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"5"}},[n("v-checkbox",{attrs:{label:"Close the books","hide-details":"auto"},model:{value:t.formData.advanced_closed_books,callback:function(i){t.$set(t.formData,"advanced_closed_books",i)},expression:"formData.advanced_closed_books"}})],1),t._v(" "),n("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"7"}},[n("span",{staticClass:"text-subtitle-2",domProps:{textContent:t._s(t.$formatter.formatCheckBox(t.formData.advanced_closed_books))}})]),t._v(" "),t.formData.advanced_closed_books?n("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"5"}},[n("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,transition:"scale-transition","offset-y":"","min-width":"290px"},scopedSlots:t._u([{key:"activator",fn:function(i){var R=i.on,V=i.attrs;return[n("v-text-field",t._g(t._b({attrs:{label:"Due Date","prepend-icon":"mdi-calendar",readonly:"","persistent-hint":"",outlined:"",dense:"","hide-details":"auto"},model:{value:t.formData.advanced_closing_date,callback:function(m){t.$set(t.formData,"advanced_closing_date",m)},expression:"formData.advanced_closing_date"}},"v-text-field",V,!1),R))]}}],null,!1,726048381),model:{value:t.menu,callback:function(i){t.menu=i},expression:"menu"}},[t._v(" "),n("v-date-picker",{attrs:{"no-title":""},on:{input:function(i){t.menu=!1}},model:{value:t.formData.advanced_closing_date,callback:function(i){t.$set(t.formData,"advanced_closing_date",i)},expression:"formData.advanced_closing_date"}})],1)],1):t._e(),t._v(" "),n("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"7"}},[n("span",{staticClass:"text-subtitle-2",domProps:{textContent:t._s(t.formData.advanced_closing_date)}})]),t._v(" "),t.formData.advanced_closing_date?n("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"8"}},[n("v-select",{attrs:{label:"Action",items:t.itemCloseBook,filled:"",dense:"","hide-details":"auto"},model:{value:t.formData.advanced_closing_action,callback:function(i){t.$set(t.formData,"advanced_closing_action",i)},expression:"formData.advanced_closing_action"}})],1):t._e(),t._v(" "),t.formData.advanced_closing_action===t.itemCloseBook[1]?n("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"8"}},[n("v-text-field",{attrs:{"append-icon":t.show?"mdi-eye-off":"mdi-eye",type:t.show?"text":"password",outlined:"",dense:"",label:"Password",required:"","hide-details":"auto"},on:{"click:append":function(i){t.show=!t.show}},model:{value:t.formData.advanced_closing_password,callback:function(i){t.$set(t.formData,"advanced_closing_password",i)},expression:"formData.advanced_closing_password"}})],1):t._e()],1)]},proxy:!0}])})],1),t._v(" "),t.companyNameView?n("v-col",{staticClass:"pa-1 text-right",attrs:{cols:"12",md:"1"}},[n("v-btn",{attrs:{icon:"",small:""},on:{click:function(f){t.companyNameView=!1}}},[n("v-icon",[t._v("mdi-pencil")])],1)],1):t._e()],1)},c=[],g={props:{form:{type:Object,default:function(){return{}}},logo:{type:String,default:""}},data:function(){return{menu:"",show:!1,formData:this.form,companyNameView:!0,itemPaymentTerm:[],itemMonth:[{text:"January",value:1},{text:"February",value:2},{text:"March",value:3},{text:"April",value:4},{text:"May",value:5},{text:"June",value:6},{text:"July",value:7},{text:"August",value:8},{text:"September",value:9},{text:"October",value:10},{text:"November",value:11},{text:"December",value:12}],itemFiscalYear:["Same as fiscal year","January"],itemAccountingMethod:["Accrual","Cash"],itemCloseBook:["Allow changes after viewing a warning","Allow changes after viewing a warning and entering password"]}},mounted:function(){this.getPaymentTerm()},methods:{getPaymentTerm:function(){var t=this;this.$axios.get("/api/financial/payment-terms").then(function(n){t.itemPaymentTerm=n.data.simple})},save:function(){this.$refs.sectionEdit.save(this.form),this.companyNameView=!0},cancel:function(){this.companyNameView=!0}}},h=g,O=e(50),b=e(51),D=e.n(b),P=e(164),y=e(635),A=e(585),C=e(907),l=e(247),a=e(165),p=e(35),o=e(577),d=e(599),u=e(631),T=e(574),j=Object(O.a)(h,s,c,!1,null,null,null),I=r.default=j.exports;D()(j,{FormSectionView:e(621).default,FormSectionEdit:e(620).default}),D()(j,{VBtn:P.a,VCheckbox:y.a,VCol:A.a,VDatePicker:C.a,VIcon:l.a,VListItem:a.a,VListItemContent:p.a,VListItemTitle:p.c,VMenu:o.a,VRow:d.a,VSelect:u.a,VTextField:T.a})},609:function(_,r,e){"use strict";var s=e(100),c=e(3);r.a=c.default.extend({name:"rippleable",directives:{ripple:s.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var h=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.ripple?(h.staticClass="v-input--selection-controls__ripple",h.directives=h.directives||[],h.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",h)):null}}})},611:function(_,r,e){var s=e(613);s.__esModule&&(s=s.default),typeof s=="string"&&(s=[[_.i,s,""]]),s.locals&&(_.exports=s.locals);var c=e(15).default,g=c("46813077",s,!0,{sourceMap:!1})},612:function(_,r,e){"use strict";e.d(r,"b",function(){return C});var s=e(4),c=e.n(s),g=e(70),h=e.n(g),O=e(9),b=e.n(O),D=e(89),P=e(609),y=e(289),A=e(5);function C(l){l.preventDefault()}r.a=Object(A.a)(D.a,P.a,y.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(!!this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return this.multiple===!0||this.multiple===null&&Array.isArray(this.internalValue)},isActive:function(){var a=this,p=this.value,o=this.internalValue;return this.isMultiple?Array.isArray(o)?o.some(function(d){return a.valueComparator(d,p)}):!1:this.trueValue===void 0||this.falseValue===void 0?p?this.valueComparator(p,o):Boolean(o):this.valueComparator(o,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return!this.isDisabled&&!this.validationState?void 0:this.validationState}},watch:{inputValue:function(a){this.lazyValue=a,this.hasColor=a}},methods:{genLabel:function(){var a=D.a.options.methods.genLabel.call(this);return a&&(a.data.on={click:C},a)},genInput:function(a,p){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:a,type:a},p),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:C},ref:"input"})},onClick:function(a){this.onChange(),this.$emit("click",a)},onChange:function(){var a=this;if(!!this.isInteractive){var p=this.value,o=this.internalValue;if(this.isMultiple){Array.isArray(o)||(o=[]);var d=o.length;o=o.filter(function(u){return!a.valueComparator(u,p)}),o.length===d&&o.push(p)}else this.trueValue!==void 0&&this.falseValue!==void 0?o=this.valueComparator(o,this.trueValue)?this.falseValue:this.trueValue:p?o=this.valueComparator(o,p)?null:p:o=!o;this.validate(!0,o),this.internalValue=o,this.hasColor=o}},onFocus:function(a){this.isFocused=!0,this.$emit("focus",a)},onBlur:function(a){this.isFocused=!1,this.$emit("blur",a)},onKeydown:function(a){}}})},613:function(_,r,e){var s=e(14),c=s(!1);c.push([_.i,'.v-input--selection-controls{margin-top:4px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-top:0;margin-bottom:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;width:24px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;position:absolute;transition:inherit;width:34px;left:-12px;top:calc(50% - 24px);margin:7px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";position:absolute;opacity:.2;left:0;right:0;top:0;transform-origin:center center;transform:scale(.2);transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{width:28px;height:28px;left:-9px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:inherit}.v-input--selection-controls.v-input--is-disabled:not(.v-input--is-readonly){pointer-events:none}.v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),_.exports=c},617:function(_,r,e){var s=e(618);s.__esModule&&(s=s.default),typeof s=="string"&&(s=[[_.i,s,""]]),s.locals&&(_.exports=s.locals);var c=e(15).default,g=c("93dca520",s,!0,{sourceMap:!1})},618:function(_,r,e){var s=e(14),c=s(!1);c.push([_.i,".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}.v-input--checkbox.v-input--dense{margin-top:4px}",""]),_.exports=c},620:function(_,r,e){"use strict";e.r(r);var s=function(){var d=this,u=d._self._c;return u("v-card",{attrs:{elevation:"0"}},[u("v-form",[d._t("content")],2),d._v(" "),u("v-card-actions",[u("v-spacer"),d._v(" "),u("v-btn",{attrs:{outlined:"",small:""},on:{click:d.cancel}},[d._v(" Cancel ")]),d._v(" "),u("v-btn",{attrs:{color:"primary",small:""},on:{click:d.processData}},[d._v(" Save ")])],1)],1)},c=[],g={data:function(){return{tabValue:"company",loadingButton:!1}},methods:{save:function(d){var u=this,T={},j="/api/settings";this.loadingButton=!0,this.$axios.post(j,d).then(function(I){u.loadingButton=!1,u.tabValue==="company"&&(u.$nuxt.$emit("getLogo"),u.$nuxt.$emit("getCompany"))}).catch(function(I){u.loadingButton=!1,u.$swal({type:"error",title:"Error",text:I.response.data.message})})},cancel:function(){this.$emit("cancel")},processData:function(){this.$emit("save")}}},h=g,O=e(50),b=e(51),D=e.n(b),P=e(164),y=e(248),A=e(88),C=e(625),l=e(593),a=Object(O.a)(h,s,c,!1,null,null,null),p=r.default=a.exports;D()(a,{VBtn:P.a,VCard:y.a,VCardActions:A.a,VForm:C.a,VSpacer:l.a})},621:function(_,r,e){"use strict";e.r(r);var s=function(){var C=this,l=C._self._c;return l("v-card",{staticStyle:{cursor:"pointer"},attrs:{elevation:"0"}},[C._t("content")],2)},c=[],g=e(50),h=e(51),O=e.n(h),b=e(248),D={},P=Object(g.a)(D,s,c,!1,null,null,null),y=r.default=P.exports;O()(P,{VCard:b.a})},635:function(_,r,e){"use strict";var s=e(8),c=e.n(s),g=e(7),h=e.n(g),O=e(9),b=e.n(O),D=e(12),P=e.n(D),y=e(10),A=e.n(y),C=e(13),l=e.n(C),a=e(90),p=e(2),o=e(4),d=e.n(o),u=e(70),T=e.n(u),j=e(617),I=e.n(j),M=e(611),t=e.n(M),n=e(45),B=e(89),f=e(612),i=["title"];function R(v,m){var E=Object.keys(v);if(Object.getOwnPropertySymbols){var x=Object.getOwnPropertySymbols(v);m&&(x=x.filter(function(L){return Object.getOwnPropertyDescriptor(v,L).enumerable})),E.push.apply(E,x)}return E}function V(v){for(var m=1;m<arguments.length;m++){var E=arguments[m]!=null?arguments[m]:{};m%2?R(Object(E),!0).forEach(function(x){Object(p.a)(v,x,E[x])}):Object.getOwnPropertyDescriptors?Object.defineProperties(v,Object.getOwnPropertyDescriptors(E)):R(Object(E)).forEach(function(x){Object.defineProperty(v,x,Object.getOwnPropertyDescriptor(E,x))})}return v}r.a=f.a.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return V(V({},B.a.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!(this.isDisabled&&!this.inputIndeterminate)){if(this.hasError&&this.shouldValidate)return"error";if(this.hasSuccess)return"success";if(this.hasColor!==null)return this.computedColor}}},watch:{indeterminate:function(m){var E=this;this.$nextTick(function(){return E.inputIndeterminate=m})},inputIndeterminate:function(m){this.$emit("update:indeterminate",m)},isActive:function(){!this.indeterminate||(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var m=this.attrs$,E=m.title,x=Object(a.a)(m,i);return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(n.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",V(V({},x),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})}}]);
