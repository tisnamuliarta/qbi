(window.webpackJsonp=window.webpackJsonp||[]).push([[107,47,48],{1126:function(t,e,n){"use strict";n.r(e);var r={props:{form:{type:Object,default:function(){return{}}},logo:{type:String,default:""}},data:function(){return{companyNameView:!0,itemPaymentTerm:[],itemDeliveryMethod:["Print Later","Send Later","None"]}},mounted:function(){this.getPaymentTerm()},methods:{getPaymentTerm:function(){var t=this;this.$axios.get("/api/financial/payment-terms").then((function(e){t.itemPaymentTerm=e.data.data.simple}))},save:function(){this.$refs.sectionEdit.save(this.form),this.companyNameView=!0},cancel:function(){this.companyNameView=!0}}},o=n(50),c=n(51),l=n.n(c),d=n(164),h=n(629),f=n(585),v=n(247),m=n(598),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{staticClass:"pa-1",attrs:{cols:"12",md:"2"}},[e("span",{staticClass:"text-subtitle-1"},[t._v("Bill and expenses")])]),t._v(" "),e("v-col",{staticClass:"pa-1",attrs:{cols:"12",md:"8"}},[t.companyNameView?e("FormSectionView",{scopedSlots:t._u([{key:"content",fn:function(){return[e("v-row",{attrs:{"no-gutters":""},on:{click:function(e){t.companyNameView=!1}}},[e("v-col",{staticClass:"pa-2 font-weight-medium",attrs:{cols:"12",md:"4"}},[t._v("\n              Use purchase orders\n            ")]),t._v(" "),e("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"8"}},[e("span",{staticClass:"text-subtitle-2",domProps:{textContent:t._s(t.$formatter.formatCheckBox(t.form.expenses_purcase_order))}})])],1)]},proxy:!0}],null,!1,3888975721)}):e("FormSectionEdit",{ref:"sectionEdit",on:{save:t.save,cancel:t.cancel},scopedSlots:t._u([{key:"content",fn:function(){return[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"5"}},[e("v-checkbox",{attrs:{label:"Use purchase orders","hide-details":"auto"},model:{value:t.form.expenses_purcase_order,callback:function(e){t.$set(t.form,"expenses_purcase_order",e)},expression:"form.expenses_purcase_order"}})],1),t._v(" "),e("v-col",{staticClass:"pa-2",attrs:{cols:"12",md:"7"}},[e("span",{staticClass:"text-subtitle-2",domProps:{textContent:t._s(t.$formatter.formatCheckBox(t.form.expenses_purcase_order))}})])],1)]},proxy:!0}])})],1),t._v(" "),t.companyNameView?e("v-col",{staticClass:"pa-1 text-right",attrs:{cols:"12",md:"1"}},[e("v-btn",{attrs:{icon:"",small:""},on:{click:function(e){t.companyNameView=!1}}},[e("v-icon",[t._v("mdi-pencil")])],1)],1):t._e()],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{FormSectionView:n(619).default,FormSectionEdit:n(618).default}),l()(component,{VBtn:d.a,VCheckbox:h.a,VCol:f.a,VIcon:v.a,VRow:m.a})},598:function(t,e,n){"use strict";n(7),n(9),n(12),n(13);var r=n(2),o=(n(4),n(33),n(52),n(28),n(8),n(21),n(65),n(269),n(32),n(270),n(271),n(272),n(273),n(274),n(275),n(276),n(277),n(278),n(279),n(280),n(281),n(282),n(35),n(10),n(283),n(3)),c=n(78),l=n(1);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=["sm","md","lg","xl"],v=["start","end","center"];function m(t,e){return f.reduce((function(n,r){return n[t+Object(l.I)(r)]=e(),n}),{})}var y=function(t){return[].concat(v,["baseline","stretch"]).includes(t)},_=m("align",(function(){return{type:String,default:null,validator:y}})),O=function(t){return[].concat(v,["space-between","space-around"]).includes(t)},x=m("justify",(function(){return{type:String,default:null,validator:O}})),w=function(t){return[].concat(v,["space-between","space-around","stretch"]).includes(t)},j=m("alignContent",(function(){return{type:String,default:null,validator:w}})),C={align:Object.keys(_),justify:Object.keys(x),alignContent:Object.keys(j)},V={align:"align",justify:"justify",alignContent:"align-content"};function k(t,e,n){var r=V[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var S=new Map;e.a=o.default.extend({name:"v-row",functional:!0,props:h(h(h({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:y}},_),{},{justify:{type:String,default:null,validator:O}},x),{},{alignContent:{type:String,default:null,validator:w}},j),render:function(t,e){var n=e.props,data=e.data,o=e.children,l="";for(var d in n)l+=String(n[d]);var h=S.get(l);return h||function(){var t,e;for(e in h=[],C)C[e].forEach((function(t){var r=n[t],o=k(e,t,r);o&&h.push(o)}));h.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(r.a)(t,"align-".concat(n.align),n.align),Object(r.a)(t,"justify-".concat(n.justify),n.justify),Object(r.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),S.set(l,h)}(),t(n.tag,Object(c.a)(data,{staticClass:"row",class:h}),o)}})},608:function(t,e,n){"use strict";var r=n(100),o=n(3);e.a=o.default.extend({name:"rippleable",directives:{ripple:r.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}})},610:function(t,e,n){var content=n(612);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("46813077",content,!0,{sourceMap:!1})},611:function(t,e,n){"use strict";n.d(e,"b",(function(){return d}));n(4),n(70),n(9);var r=n(89),o=n(608),c=n(289),l=n(5);function d(t){t.preventDefault()}e.a=Object(l.a)(r.a,o.a,c.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var label=r.a.options.methods.genLabel.call(this);return label?(label.data.on={click:d},label):label},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:d},ref:"input"})},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var n=input.length;(input=input.filter((function(n){return!t.valueComparator(n,e)}))).length===n&&input.push(e)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(input,e)?null:e:!input;this.validate(!0,input),this.internalValue=input,this.hasColor=input}},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown:function(t){}}})},612:function(t,e,n){var r=n(14)(!1);r.push([t.i,'.v-input--selection-controls{margin-top:4px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-top:0;margin-bottom:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;width:24px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;position:absolute;transition:inherit;width:34px;left:-12px;top:calc(50% - 24px);margin:7px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";position:absolute;opacity:.2;left:0;right:0;top:0;transform-origin:center center;transform:scale(.2);transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{width:28px;height:28px;left:-9px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:inherit}.v-input--selection-controls.v-input--is-disabled:not(.v-input--is-readonly){pointer-events:none}.v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),t.exports=r},614:function(t,e,n){var content=n(615);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("93dca520",content,!0,{sourceMap:!1})},615:function(t,e,n){var r=n(14)(!1);r.push([t.i,".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}.v-input--checkbox.v-input--dense{margin-top:4px}",""]),t.exports=r},618:function(t,e,n){"use strict";n.r(e);var r={data:function(){return{tabValue:"company",loadingButton:!1}},methods:{save:function(form){var t=this;this.loadingButton=!0,this.$axios.post("/api/settings",form).then((function(e){t.loadingButton=!1,"company"===t.tabValue&&(t.$nuxt.$emit("getLogo"),t.$nuxt.$emit("getCompany"))})).catch((function(e){t.loadingButton=!1,t.$swal({type:"error",title:"Error",text:e.response.data.message})}))},cancel:function(){this.$emit("cancel")},processData:function(){this.$emit("save")}}},o=n(50),c=n(51),l=n.n(c),d=n(164),h=n(248),f=n(88),v=n(620),m=n(593),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;return e("v-card",{attrs:{elevation:"0"}},[e("v-form",[t._t("content")],2),t._v(" "),e("v-card-actions",[e("v-spacer"),t._v(" "),e("v-btn",{attrs:{outlined:"",small:""},on:{click:t.cancel}},[t._v(" Cancel ")]),t._v(" "),e("v-btn",{attrs:{color:"primary",small:""},on:{click:t.processData}},[t._v(" Save ")])],1)],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VCard:h.a,VCardActions:f.a,VForm:v.a,VSpacer:m.a})},619:function(t,e,n){"use strict";n.r(e);var r=n(50),o=n(51),c=n.n(o),l=n(248),component=Object(r.a)({},(function(){return(0,this._self._c)("v-card",{staticStyle:{cursor:"pointer"},attrs:{elevation:"0"}},[this._t("content")],2)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCard:l.a})},620:function(t,e,n){"use strict";var r=n(2),o=(n(33),n(52),n(288),n(9),n(4),n(10),n(59),n(79),n(8),n(7),n(12),n(13),n(5)),c=n(99),l=n(118);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(o.a)(c.a,Object(l.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:h({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},629:function(t,e,n){"use strict";n(8),n(7),n(9),n(12),n(10),n(13);var r=n(90),o=n(2),c=(n(4),n(70),n(614),n(610),n(45)),l=n(89),d=n(611),h=["title"];function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=d.a.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return v(v({},l.a.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var t=this.attrs$,e=(t.title,Object(r.a)(t,h));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(c.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",v(v({},e),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})}}]);