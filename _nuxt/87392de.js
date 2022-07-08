(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{1105:function(p,r,n){"use strict";n.r(r);var c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-center"},[a("v-snackbar",{attrs:{bottom:"",right:"",timeout:t.timeout},scopedSlots:t._u([{key:"action",fn:function(s){var k=s.attrs;return[a("v-btn",t._b({attrs:{color:"red",text:""},on:{click:function(h){t.snackbar=!1}}},"v-btn",k,!1),[t._v(`
        Close
      `)])]}}]),model:{value:t.snackbar,callback:function(s){t.snackbar=s},expression:"snackbar"}},[t._v(`
    `+t._s(t.text)+`

    `)])],1)},l=[],i={name:"Snackbar",data:function(){return{snackbar:!1,text:"My timeout is set to 2000.",timeout:2e3}},methods:{display:function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:8e3,a=arguments.length>1?arguments[1]:void 0;this.snackbar=!0,this.timeout=e,this.text=a}}},u=i,v=n(50),m=n(51),d=n.n(m),f=n(164),b=n(588),o=Object(v.a)(u,c,l,!1,null,null,null),g=r.default=o.exports;d()(o,{VBtn:f.a,VSnackbar:b.a})}}]);
