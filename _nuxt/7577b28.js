(window.webpackJsonp=window.webpackJsonp||[]).push([[97],{599:function(p,c,i){var e=i(375),l=i(47);p.exports=function(h,r,v){return v.get&&e(v.get,r,{getter:!0}),v.set&&e(v.set,r,{setter:!0}),l.f(h,r,v)}},608:function(p,c,i){"use strict";var e=i(100),l=i(3);c.a=l.default.extend({name:"rippleable",directives:{ripple:e.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return this.ripple?(r.staticClass="v-input--selection-controls__ripple",r.directives=r.directives||[],r.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",r)):null}}})},610:function(p,c,i){var e=i(613);e.__esModule&&(e=e.default),typeof e=="string"&&(e=[[p.i,e,""]]),e.locals&&(p.exports=e.locals);var l=i(16).default,h=l("46813077",e,!0,{sourceMap:!1})},611:function(p,c,i){"use strict";i.d(c,"b",function(){return g});var e=i(4),l=i.n(e),h=i(69),r=i.n(h),v=i(10),P=i.n(v),d=i(88),f=i(608),m=i(289),C=i(5);function g(o){o.preventDefault()}c.a=Object(C.a)(d.a,f.a,m.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(!!this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return this.multiple===!0||this.multiple===null&&Array.isArray(this.internalValue)},isActive:function(){var a=this,u=this.value,s=this.internalValue;return this.isMultiple?Array.isArray(s)?s.some(function(b){return a.valueComparator(b,u)}):!1:this.trueValue===void 0||this.falseValue===void 0?u?this.valueComparator(u,s):Boolean(s):this.valueComparator(s,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return!this.isDisabled&&!this.validationState?void 0:this.validationState}},watch:{inputValue:function(a){this.lazyValue=a,this.hasColor=a}},methods:{genLabel:function(){var a=d.a.options.methods.genLabel.call(this);return a&&(a.data.on={click:g},a)},genInput:function(a,u){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:a,type:a},u),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:g},ref:"input"})},onClick:function(a){this.onChange(),this.$emit("click",a)},onChange:function(){var a=this;if(!!this.isInteractive){var u=this.value,s=this.internalValue;if(this.isMultiple){Array.isArray(s)||(s=[]);var b=s.length;s=s.filter(function(_){return!a.valueComparator(_,u)}),s.length===b&&s.push(u)}else this.trueValue!==void 0&&this.falseValue!==void 0?s=this.valueComparator(s,this.trueValue)?this.falseValue:this.trueValue:u?s=this.valueComparator(s,u)?null:u:s=!s;this.validate(!0,s),this.internalValue=s,this.hasColor=s}},onFocus:function(a){this.isFocused=!0,this.$emit("focus",a)},onBlur:function(a){this.isFocused=!1,this.$emit("blur",a)},onKeydown:function(a){}}})},613:function(p,c,i){var e=i(15),l=e(!1);l.push([p.i,'.v-input--selection-controls{margin-top:4px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-top:0;margin-bottom:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;width:24px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;position:absolute;transition:inherit;width:34px;left:-12px;top:calc(50% - 24px);margin:7px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";position:absolute;opacity:.2;left:0;right:0;top:0;transform-origin:center center;transform:scale(.2);transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{width:28px;height:28px;left:-9px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:inherit}.v-input--selection-controls.v-input--is-disabled:not(.v-input--is-readonly){pointer-events:none}.v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),p.exports=l},772:function(p,c,i){"use strict";i.r(c);var e=i(587),l=i(575),h=i(902),r=i(729),v=i(728),P=i(598),d=i(629),f=i(704),m=i(573),C=function(){var n=this,t=n._self._c;return t(P.a,{attrs:{"no-gutters":""}},[t(e.a,{staticClass:"pr-md-3 pl-md-3",attrs:{cols:"12",md:"6"}},[t(f.a,[n._v("General")]),n._v(" "),t(e.a,{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[t(l.a)],1),n._v(" "),t(e.a,{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[t(m.a,{attrs:{label:"Font Size",placeholder:"Product Name",outlined:"",dense:"","hide-details":"auto"}})],1),n._v(" "),t(e.a,{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[t(m.a,{attrs:{label:"Logo",placeholder:"Product Name",outlined:"",dense:"","hide-details":"auto"}})],1),n._v(" "),t(e.a,{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[t(m.a,{attrs:{label:"Logo Width",placeholder:"Product Name",outlined:"",dense:"","hide-details":"auto"}})],1),n._v(" "),t(f.a,[n._v("Signature")]),n._v(" "),t(e.a,{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[t(l.a)],1),n._v(" "),t(e.a,{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[t(v.a,{attrs:{dense:"",row:"",label:"Show PDF Signature on Invoice"}},[t(r.a,{attrs:{label:"Option 1",value:"radio-1"}}),n._v(" "),t(r.a,{attrs:{label:"Option 2",value:"radio-2"}})],1)],1),n._v(" "),t(e.a,{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[t(h.a,{attrs:{accept:"image/*",label:"Logo",placeholder:"Product Name",outlined:"",dense:"","hide-details":"auto"}})],1),n._v(" "),t(e.a,{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[t(m.a,{attrs:{label:"Logo Width",placeholder:"Product Name",outlined:"",dense:"","hide-details":"auto"}})],1),n._v(" "),t(e.a,{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[t(m.a,{attrs:{label:"Mail From Address",placeholder:"Product Name",outlined:"",dense:"","hide-details":"auto"}})],1)],1),n._v(" "),t(e.a,{staticClass:"pr-md-3 pl-md-3",attrs:{cols:"12",md:"6"}},[t(f.a,[n._v("Document Format")]),n._v(" "),t(e.a,{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[t(l.a)],1),n._v(" "),t(e.a,{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[t(d.a,{attrs:{items:n.paperSize,label:"Invoice",placeholder:"Product Name",outlined:"",dense:"","hide-details":"auto"}})],1),n._v(" "),t(e.a,{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[t(d.a,{attrs:{items:n.paperSize,label:"Estimate",placeholder:"Product Name",outlined:"",dense:"","hide-details":"auto"}})],1),n._v(" "),t(e.a,{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[t(d.a,{attrs:{items:n.paperSize,label:"Proposal",placeholder:"Product Name",outlined:"",dense:"","hide-details":"auto"}})],1),n._v(" "),t(e.a,{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[t(d.a,{attrs:{items:n.paperSize,label:"Payment",placeholder:"Product Name",outlined:"",dense:"","hide-details":"auto"}})],1),n._v(" "),t(e.a,{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[t(d.a,{attrs:{items:n.paperSize,label:"Credit Note",placeholder:"Product Name",outlined:"",dense:"","hide-details":"auto"}})],1),n._v(" "),t(e.a,{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[t(d.a,{attrs:{items:n.paperSize,label:"Statement",placeholder:"Product Name",outlined:"",dense:"","hide-details":"auto"}})],1),n._v(" "),t(e.a,{staticClass:"pr-1 pl-1 pb-1 pt-1 mt-1",attrs:{cols:"12"}},[t(d.a,{attrs:{items:n.paperSize,label:"Contract",placeholder:"Product Name",outlined:"",dense:"","hide-details":"auto"}})],1)],1)],1)},g=[],o={name:"EmailSetup",props:{form:{type:Object,default:function(){return{}}}},data:function(){return{paperSize:["A4 Portrait","A4 Landscape","Letter Portrait","Letter Landscape"]}},methods:{getForm:function(){return this.form},setForm:function(n){this.form=Object.assign({},n)}}},a=o,u=i(50),s=Object(u.a)(a,C,g,!1,null,null,null),b=c.default=s.exports}}]);