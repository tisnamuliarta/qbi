(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{599:function(p,r,i){"use strict";var s=i(100),u=i(2);r.a=u.default.extend({name:"rippleable",directives:{ripple:s.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.ripple?(c.staticClass="v-input--selection-controls__ripple",c.directives=c.directives||[],c.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",c)):null}}})},602:function(p,r,i){var s=i(606);s.__esModule&&(s=s.default),typeof s=="string"&&(s=[[p.i,s,""]]),s.locals&&(p.exports=s.locals);var u=i(15).default,d=u("46813077",s,!0,{sourceMap:!1})},603:function(p,r,i){"use strict";i.d(r,"b",function(){return v});var s=i(4),u=i.n(s),d=i(70),c=i.n(d),_=i(9),E=i.n(_),m=i(89),g=i(599),b=i(287),C=i(5);function v(n){n.preventDefault()}r.a=Object(C.a)(m.a,g.a,b.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(!!this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return this.multiple===!0||this.multiple===null&&Array.isArray(this.internalValue)},isActive:function(){var o=this,a=this.value,l=this.internalValue;return this.isMultiple?Array.isArray(l)?l.some(function(h){return o.valueComparator(h,a)}):!1:this.trueValue===void 0||this.falseValue===void 0?a?this.valueComparator(a,l):Boolean(l):this.valueComparator(l,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return!this.isDisabled&&!this.validationState?void 0:this.validationState}},watch:{inputValue:function(o){this.lazyValue=o,this.hasColor=o}},methods:{genLabel:function(){var o=m.a.options.methods.genLabel.call(this);return o&&(o.data.on={click:v},o)},genInput:function(o,a){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:o,type:o},a),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:v},ref:"input"})},onClick:function(o){this.onChange(),this.$emit("click",o)},onChange:function(){var o=this;if(!!this.isInteractive){var a=this.value,l=this.internalValue;if(this.isMultiple){Array.isArray(l)||(l=[]);var h=l.length;l=l.filter(function(f){return!o.valueComparator(f,a)}),l.length===h&&l.push(a)}else this.trueValue!==void 0&&this.falseValue!==void 0?l=this.valueComparator(l,this.trueValue)?this.falseValue:this.trueValue:a?l=this.valueComparator(l,a)?null:a:l=!l;this.validate(!0,l),this.internalValue=l,this.hasColor=l}},onFocus:function(o){this.isFocused=!0,this.$emit("focus",o)},onBlur:function(o){this.isFocused=!1,this.$emit("blur",o)},onKeydown:function(o){}}})},606:function(p,r,i){var s=i(14),u=s(!1);u.push([p.i,'.v-input--selection-controls{margin-top:4px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-top:0;margin-bottom:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;width:24px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;position:absolute;transition:inherit;width:34px;left:-12px;top:calc(50% - 24px);margin:7px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";position:absolute;opacity:.2;left:0;right:0;top:0;transform-origin:center center;transform:scale(.2);transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{width:28px;height:28px;left:-9px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:inherit}.v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),p.exports=u},893:function(p,r,i){"use strict";i.r(r);var s=function(){var e=this,P=e.$createElement,t=e._self._c||P;return t("v-row",{attrs:{"no-gutters":""}},[t("v-col",{staticClass:"pr-md-3 pl-md-3",attrs:{cols:"12",md:"6"}},[t("v-subheader",[e._v("General")]),e._v(" "),t("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[t("v-divider")],1),e._v(" "),t("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[t("v-text-field",{attrs:{label:"Font Size",placeholder:"Product Name",outlined:"",dense:"","hide-details":"auto"}})],1),e._v(" "),t("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[t("v-text-field",{attrs:{label:"Logo",placeholder:"Product Name",outlined:"",dense:"","hide-details":"auto"}})],1),e._v(" "),t("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[t("v-text-field",{attrs:{label:"Logo Width",placeholder:"Product Name",outlined:"",dense:"","hide-details":"auto"}})],1),e._v(" "),t("v-subheader",[e._v("Signature")]),e._v(" "),t("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[t("v-divider")],1),e._v(" "),t("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[t("v-radio-group",{attrs:{dense:"",row:"",label:"Show PDF Signature on Invoice"}},[t("v-radio",{attrs:{label:"Option 1",value:"radio-1"}}),e._v(" "),t("v-radio",{attrs:{label:"Option 2",value:"radio-2"}})],1)],1),e._v(" "),t("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[t("v-file-input",{attrs:{accept:"image/*",label:"Logo",placeholder:"Product Name",outlined:"",dense:"","hide-details":"auto"}})],1),e._v(" "),t("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[t("v-text-field",{attrs:{label:"Logo Width",placeholder:"Product Name",outlined:"",dense:"","hide-details":"auto"}})],1),e._v(" "),t("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[t("v-text-field",{attrs:{label:"Mail From Address",placeholder:"Product Name",outlined:"",dense:"","hide-details":"auto"}})],1)],1),e._v(" "),t("v-col",{staticClass:"pr-md-3 pl-md-3",attrs:{cols:"12",md:"6"}},[t("v-subheader",[e._v("Document Format")]),e._v(" "),t("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[t("v-divider")],1),e._v(" "),t("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[t("v-select",{attrs:{items:e.paperSize,label:"Invoice",placeholder:"Product Name",outlined:"",dense:"","hide-details":"auto"}})],1),e._v(" "),t("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[t("v-select",{attrs:{items:e.paperSize,label:"Estimate",placeholder:"Product Name",outlined:"",dense:"","hide-details":"auto"}})],1),e._v(" "),t("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[t("v-select",{attrs:{items:e.paperSize,label:"Proposal",placeholder:"Product Name",outlined:"",dense:"","hide-details":"auto"}})],1),e._v(" "),t("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[t("v-select",{attrs:{items:e.paperSize,label:"Payment",placeholder:"Product Name",outlined:"",dense:"","hide-details":"auto"}})],1),e._v(" "),t("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[t("v-select",{attrs:{items:e.paperSize,label:"Credit Note",placeholder:"Product Name",outlined:"",dense:"","hide-details":"auto"}})],1),e._v(" "),t("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[t("v-select",{attrs:{items:e.paperSize,label:"Statement",placeholder:"Product Name",outlined:"",dense:"","hide-details":"auto"}})],1),e._v(" "),t("v-col",{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[t("v-select",{attrs:{items:e.paperSize,label:"Contract",placeholder:"Product Name",outlined:"",dense:"","hide-details":"auto"}})],1)],1)],1)},u=[],d={name:"EmailSetup",props:{form:{type:Object,default:function(){return{}}}},data:function(){return{paperSize:["A4 Portrait","A4 Landscape","Letter Portrait","Letter Landscape"]}},methods:{getForm:function(){return this.form},setForm:function(P){this.form=Object.assign({},P)}}},c=d,_=i(50),E=i(51),m=i.n(E),g=i(581),b=i(572),C=i(1012),v=i(830),n=i(831),o=i(595),a=i(637),l=i(820),h=i(570),f=Object(_.a)(c,s,u,!1,null,null,null),V=r.default=f.exports;m()(f,{VCol:g.a,VDivider:b.a,VFileInput:C.a,VRadio:v.a,VRadioGroup:n.a,VRow:o.a,VSelect:a.a,VSubheader:l.a,VTextField:h.a})}}]);
