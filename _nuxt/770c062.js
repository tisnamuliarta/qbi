(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{1068:function(g,e,n){"use strict";n.r(e);var c=function(){var t=this,a=t._self._c;return a("div",{staticClass:"text-center"},[a("v-snackbar",{attrs:{bottom:"",right:"",timeout:t.timeout},scopedSlots:t._u([{key:"action",fn:function(s){var p=s.attrs;return[a("v-btn",t._b({attrs:{color:"red",text:""},on:{click:function(S){t.snackbar=!1}}},"v-btn",p,!1),[t._v(`
          Close
        `)])]}}]),model:{value:t.snackbar,callback:function(s){t.snackbar=s},expression:"snackbar"}},[t._v(`
      `+t._s(t.text)+`

      `)])],1)},l=[],i={name:"Snackbar",data:function(){return{snackbar:!1,text:"My timeout is set to 2000.",timeout:2e3}},methods:{display:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:8e3,a=arguments.length>1?arguments[1]:void 0;this.snackbar=!0,this.timeout=t,this.text=a}}},u=i,v=n(50),m=n(51),d=n.n(m),f=n(164),b=n(592),r=Object(v.a)(u,c,l,!1,null,null,null),h=e.default=r.exports;d()(r,{VBtn:f.a,VSnackbar:b.a})}}]);
