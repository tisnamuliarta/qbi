(window.webpackJsonp=window.webpackJsonp||[]).push([[237],{1135:function(t,e,n){"use strict";n.r(e);var o=n(706).a,r=(n(801),n(50)),l=n(51),c=n.n(l),d=n(164),h=n(248),f=n(88),v=n(629),m=n(585),y=n(576),_=n(620),x=n(598),w=n(632),O=n(592),k=n(593),j=n(575),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;return e("v-row",{attrs:{"no-gutters":"",align:"center","align-content":"center",justify:"center"}},[e("v-col",{attrs:{cols:"12",sm:"6",md:"5",lg:"4",xl:"3","align-self":"center"}},[e("v-form",{nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.login.apply(null,arguments)}}},[e("v-card",{staticClass:"mt-3 rounded-lg",attrs:{elevation:"0",rounded:"lg",tile:""}},[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"12",md:"12"}},[e("v-card-text",{staticClass:"pb-0 mt-4"},[e("v-row",{attrs:{"no-gutters":""}},[e("v-col",{attrs:{cols:"7"}},[e("span",{staticClass:"text-h6"},[t._v("Sign In to your account")]),t._v(" "),e("br"),t._v(" "),e("span",[t._v("Enter details below")])]),t._v(" "),e("v-col",{staticClass:"text-right",attrs:{cols:"5"}},[e("img",{staticClass:"align-items-center justify-center logo",attrs:{src:t.logo,alt:"Logo"}})]),t._v(" "),e("v-col",{attrs:{cols:"12"}},[e("v-divider")],1),t._v(" "),e("v-col",{staticClass:"mb-4 mt-4",attrs:{cols:"12"}},[e("v-text-field",{attrs:{filled:"",label:"Username",required:"","hide-details":"auto"},model:{value:t.form.username,callback:function(e){t.$set(t.form,"username",e)},expression:"form.username"}})],1),t._v(" "),e("v-col",{staticClass:"mb-4",attrs:{cols:"12"}},[e("v-text-field",{attrs:{"append-icon":t.show?"mdi-eye-off":"mdi-eye",type:t.show?"text":"password",filled:"",label:"Password",required:"","hide-details":"auto"},on:{"click:append":function(e){t.show=!t.show}},model:{value:t.form.password,callback:function(e){t.$set(t.form,"password",e)},expression:"form.password"}})],1),t._v(" "),e("v-col",{staticClass:"mb-1",attrs:{cols:"12"}},[e("v-select",{attrs:{label:"Language",items:t.language,"item-text":"text","item-value":"value",filled:"","hide-details":""},model:{value:t.form.localeApp,callback:function(e){t.$set(t.form,"localeApp",e)},expression:"form.localeApp"}})],1),t._v(" "),e("v-col",{staticClass:"mb-1",attrs:{cols:"12"}},[e("v-checkbox",{attrs:{label:"Remember Me",color:"success","off-icon":"mdi-checkbox-blank-outline","on-icon":"mdi-checkbox-marked","hide-details":""},model:{value:t.form.remember,callback:function(e){t.$set(t.form,"remember",e)},expression:"form.remember"}})],1)],1)],1),t._v(" "),e("v-card-actions",[e("v-spacer"),t._v(" "),e("v-btn",{staticClass:"mr-2",attrs:{color:"primary",elevation:"0",block:"",loading:t.loading},on:{click:t.login}},[t._v("\n                  Sign In\n                ")])],1)],1)],1)],1)],1),t._v(" "),e("v-snackbar",{attrs:{bottom:"","multi-line":"",transition:"slide-y-transition"},scopedSlots:t._u([{key:"action",fn:function(n){var o=n.attrs;return[e("v-btn",t._b({attrs:{color:"pink",text:""},on:{click:function(e){t.snackbar=!1}}},"v-btn",o,!1),[t._v("\n            Close\n          ")])]}}]),model:{value:t.snackbar,callback:function(e){t.snackbar=e},expression:"snackbar"}},[t._v("\n        "+t._s(t.text)+"\n\n        ")])],1)],1)}),[],!1,null,"7c4031a3",null);e.default=component.exports;c()(component,{VBtn:d.a,VCard:h.a,VCardActions:f.a,VCardText:f.b,VCheckbox:v.a,VCol:m.a,VDivider:y.a,VForm:_.a,VRow:x.a,VSelect:w.a,VSnackbar:O.a,VSpacer:k.a,VTextField:j.a})},598:function(t,e,n){"use strict";n(7),n(9),n(12),n(13);var o=n(2),r=(n(4),n(33),n(52),n(28),n(8),n(21),n(65),n(269),n(32),n(270),n(271),n(272),n(273),n(274),n(275),n(276),n(277),n(278),n(279),n(280),n(281),n(282),n(35),n(10),n(283),n(3)),l=n(78),c=n(1);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f=["sm","md","lg","xl"],v=["start","end","center"];function m(t,e){return f.reduce((function(n,o){return n[t+Object(c.I)(o)]=e(),n}),{})}var y=function(t){return[].concat(v,["baseline","stretch"]).includes(t)},_=m("align",(function(){return{type:String,default:null,validator:y}})),x=function(t){return[].concat(v,["space-between","space-around"]).includes(t)},w=m("justify",(function(){return{type:String,default:null,validator:x}})),O=function(t){return[].concat(v,["space-between","space-around","stretch"]).includes(t)},k=m("alignContent",(function(){return{type:String,default:null,validator:O}})),j={align:Object.keys(_),justify:Object.keys(w),alignContent:Object.keys(k)},C={align:"align",justify:"justify",alignContent:"align-content"};function V(t,e,n){var o=C[t];if(null!=n){if(e){var r=e.replace(t,"");o+="-".concat(r)}return(o+="-".concat(n)).toLowerCase()}}var S=new Map;e.a=r.default.extend({name:"v-row",functional:!0,props:h(h(h({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:y}},_),{},{justify:{type:String,default:null,validator:x}},w),{},{alignContent:{type:String,default:null,validator:O}},k),render:function(t,e){var n=e.props,data=e.data,r=e.children,c="";for(var d in n)c+=String(n[d]);var h=S.get(c);return h||function(){var t,e;for(e in h=[],j)j[e].forEach((function(t){var o=n[t],r=V(e,t,o);r&&h.push(r)}));h.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(o.a)(t,"align-".concat(n.align),n.align),Object(o.a)(t,"justify-".concat(n.justify),n.justify),Object(o.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),S.set(c,h)}(),t(n.tag,Object(l.a)(data,{staticClass:"row",class:h}),r)}})},599:function(t,e,n){var o=n(375),r=n(47);t.exports=function(t,e,n){return n.get&&o(n.get,e,{getter:!0}),n.set&&o(n.set,e,{setter:!0}),r.f(t,e,n)}},608:function(t,e,n){"use strict";var o=n(100),r=n(3);e.a=r.default.extend({name:"rippleable",directives:{ripple:o.a},props:{ripple:{type:[Boolean,Object],default:!0}},methods:{genRipple:function(){var data=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return this.ripple?(data.staticClass="v-input--selection-controls__ripple",data.directives=data.directives||[],data.directives.push({name:"ripple",value:{center:!0}}),this.$createElement("div",data)):null}}})},610:function(t,e,n){var content=n(612);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("46813077",content,!0,{sourceMap:!1})},611:function(t,e,n){"use strict";n.d(e,"b",(function(){return d}));n(4),n(70),n(9);var o=n(89),r=n(608),l=n(289),c=n(5);function d(t){t.preventDefault()}e.a=Object(c.a)(o.a,r.a,l.a).extend({name:"selectable",model:{prop:"inputValue",event:"change"},props:{id:String,inputValue:null,falseValue:null,trueValue:null,multiple:{type:Boolean,default:null},label:String},data:function(){return{hasColor:this.inputValue,lazyValue:this.inputValue}},computed:{computedColor:function(){if(this.isActive)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},isMultiple:function(){return!0===this.multiple||null===this.multiple&&Array.isArray(this.internalValue)},isActive:function(){var t=this,e=this.value,input=this.internalValue;return this.isMultiple?!!Array.isArray(input)&&input.some((function(n){return t.valueComparator(n,e)})):void 0===this.trueValue||void 0===this.falseValue?e?this.valueComparator(e,input):Boolean(input):this.valueComparator(input,this.trueValue)},isDirty:function(){return this.isActive},rippleState:function(){return this.isDisabled||this.validationState?this.validationState:void 0}},watch:{inputValue:function(t){this.lazyValue=t,this.hasColor=t}},methods:{genLabel:function(){var label=o.a.options.methods.genLabel.call(this);return label?(label.data.on={click:d},label):label},genInput:function(t,e){return this.$createElement("input",{attrs:Object.assign({"aria-checked":this.isActive.toString(),disabled:this.isDisabled,id:this.computedId,role:t,type:t},e),domProps:{value:this.value,checked:this.isActive},on:{blur:this.onBlur,change:this.onChange,focus:this.onFocus,keydown:this.onKeydown,click:d},ref:"input"})},onClick:function(t){this.onChange(),this.$emit("click",t)},onChange:function(){var t=this;if(this.isInteractive){var e=this.value,input=this.internalValue;if(this.isMultiple){Array.isArray(input)||(input=[]);var n=input.length;(input=input.filter((function(n){return!t.valueComparator(n,e)}))).length===n&&input.push(e)}else input=void 0!==this.trueValue&&void 0!==this.falseValue?this.valueComparator(input,this.trueValue)?this.falseValue:this.trueValue:e?this.valueComparator(input,e)?null:e:!input;this.validate(!0,input),this.internalValue=input,this.hasColor=input}},onFocus:function(t){this.isFocused=!0,this.$emit("focus",t)},onBlur:function(t){this.isFocused=!1,this.$emit("blur",t)},onKeydown:function(t){}}})},612:function(t,e,n){var o=n(14)(!1);o.push([t.i,'.v-input--selection-controls{margin-top:4px;padding-top:4px}.v-input--selection-controls>.v-input__append-outer,.v-input--selection-controls>.v-input__prepend-outer{margin-top:0;margin-bottom:0}.v-input--selection-controls:not(.v-input--hide-details)>.v-input__slot{margin-bottom:12px}.v-input--selection-controls .v-input__slot,.v-input--selection-controls .v-radio{cursor:pointer}.v-input--selection-controls .v-input__slot>.v-label,.v-input--selection-controls .v-radio>.v-label{align-items:center;display:inline-flex;flex:1 1 auto;height:auto}.v-input--selection-controls__input{color:inherit;display:inline-flex;flex:0 0 auto;height:24px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1);transition-property:transform;width:24px;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-input--selection-controls__input .v-icon{width:100%}.v-application--is-ltr .v-input--selection-controls__input{margin-right:8px}.v-application--is-rtl .v-input--selection-controls__input{margin-left:8px}.v-input--selection-controls__input input[role=checkbox],.v-input--selection-controls__input input[role=radio],.v-input--selection-controls__input input[role=switch]{position:absolute;opacity:0;width:100%;height:100%;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-input--selection-controls__input+.v-label{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none}.v-input--selection-controls__ripple{border-radius:50%;cursor:pointer;height:34px;position:absolute;transition:inherit;width:34px;left:-12px;top:calc(50% - 24px);margin:7px}.v-input--selection-controls__ripple:before{border-radius:inherit;bottom:0;content:"";position:absolute;opacity:.2;left:0;right:0;top:0;transform-origin:center center;transform:scale(.2);transition:inherit}.v-input--selection-controls__ripple>.v-ripple__container{transform:scale(1.2)}.v-input--selection-controls.v-input--dense .v-input--selection-controls__ripple{width:28px;height:28px;left:-9px}.v-input--selection-controls.v-input--dense:not(.v-input--switch) .v-input--selection-controls__ripple{top:calc(50% - 21px)}.v-input--selection-controls.v-input{flex:0 1 auto}.v-input--selection-controls.v-input--is-focused .v-input--selection-controls__ripple:before,.v-input--selection-controls .v-radio--is-focused .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2)}.v-input--selection-controls.v-input--is-disabled:not(.v-input--indeterminate) .v-icon{color:inherit}.v-input--selection-controls.v-input--is-disabled:not(.v-input--is-readonly){pointer-events:none}.v-input--selection-controls__input:hover .v-input--selection-controls__ripple:before{background:currentColor;transform:scale(1.2);transition:none}',""]),t.exports=o},614:function(t,e,n){var content=n(615);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("93dca520",content,!0,{sourceMap:!1})},615:function(t,e,n){var o=n(14)(!1);o.push([t.i,".v-input--checkbox.v-input--indeterminate.v-input--is-disabled{opacity:.6}.v-input--checkbox.v-input--dense{margin-top:4px}",""]),t.exports=o},620:function(t,e,n){"use strict";var o=n(2),r=(n(33),n(52),n(288),n(9),n(4),n(10),n(59),n(79),n(8),n(7),n(12),n(13),n(5)),l=n(99),c=n(118);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(r.a)(l.a,Object(c.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(o){o&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:h({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}})},629:function(t,e,n){"use strict";n(8),n(7),n(9),n(12),n(10),n(13);var o=n(90),r=n(2),l=(n(4),n(70),n(614),n(610),n(45)),c=n(89),d=n(611),h=["title"];function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=d.a.extend({name:"v-checkbox",props:{indeterminate:Boolean,indeterminateIcon:{type:String,default:"$checkboxIndeterminate"},offIcon:{type:String,default:"$checkboxOff"},onIcon:{type:String,default:"$checkboxOn"}},data:function(){return{inputIndeterminate:this.indeterminate}},computed:{classes:function(){return v(v({},c.a.options.computed.classes.call(this)),{},{"v-input--selection-controls":!0,"v-input--checkbox":!0,"v-input--indeterminate":this.inputIndeterminate})},computedIcon:function(){return this.inputIndeterminate?this.indeterminateIcon:this.isActive?this.onIcon:this.offIcon},validationState:function(){if(!this.isDisabled||this.inputIndeterminate)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":null!==this.hasColor?this.computedColor:void 0}},watch:{indeterminate:function(t){var e=this;this.$nextTick((function(){return e.inputIndeterminate=t}))},inputIndeterminate:function(t){this.$emit("update:indeterminate",t)},isActive:function(){this.indeterminate&&(this.inputIndeterminate=!1)}},methods:{genCheckbox:function(){var t=this.attrs$,e=(t.title,Object(o.a)(t,h));return this.$createElement("div",{staticClass:"v-input--selection-controls__input"},[this.$createElement(l.a,this.setTextColor(this.validationState,{props:{dense:this.dense,dark:this.dark,light:this.light}}),this.computedIcon),this.genInput("checkbox",v(v({},e),{},{"aria-checked":this.inputIndeterminate?"mixed":this.isActive.toString()})),this.genRipple(this.setTextColor(this.rippleState))])},genDefaultSlot:function(){return[this.genCheckbox(),this.genLabel()]}}})},706:function(t,e,n){"use strict";(function(t){n(4);e.a={name:"AuthLogin",layout:"auth",middleware:"guest",data:function(){return{form:{username:"",password:"",remember:!1,localeApp:"en",app_name:t.env.appName},defaultForm:{username:"",password:"",remember:!1,localeApp:"en",app_name:t.env.appName},language:[{text:"English",value:"en"},{text:"Indonesia",value:"id"}],snackbar:!1,text:"",appName:t.env.appName,select:null,show:!1,loading:!1,checkbox:null,loadImage:!1,eye:!0,remember:!1,busy:!1,message:"",logo:"",bgLogin:"",error:!1,apps:[]}},head:function(){return{title:"Login"}},mounted:function(){var t=this;this.$nextTick((function(){t.$nuxt.$loading.start()})),this.getLogo()},methods:{getLogo:function(){var t=this;this.$axios.get("/api/logo").then((function(e){t.logo=e.data.default,t.bgLogin=e.data.bgLogin})).finally((function(){t.$nuxt.$loading.finish()}))},clear:function(){this.form=Object.assign({},this.defaultForm)},login:function(){var t=this;this.loading=!0,this.$auth.loginWith("local",{data:this.form}).then((function(e){t.loading=!1,t.$i18n.setLocale(t.form.localeApp)})).catch((function(e){t.loading=!1,t.snackbar=!0,t.text=e.response.data.message}))}}}}).call(this,n(301))},740:function(t,e,n){var content=n(802);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(15).default)("78072834",content,!0,{sourceMap:!1})},801:function(t,e,n){"use strict";n(740)},802:function(t,e,n){var o=n(14)(!1);o.push([t.i,".logo[data-v-7c4031a3]{width:150px;margin:0 auto;text-align:center}",""]),t.exports=o}}]);