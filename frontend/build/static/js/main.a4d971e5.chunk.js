(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{24:function(e,t,c){},32:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),r=c(8),i=c.n(r),s=(c(22),c(5)),l=c.n(s),o=(c(24),c(4)),d=c(7),j=c.n(d),b=c(11),u="UPLOAD_IMAGE",O="CLEAR_IMAGE",p="SET_LOADING",h="UPLOAD_ERROR",m=c(1),x=Object(o.b)(null,{clearImage:function(){return function(){var e=Object(b.a)(j.a.mark((function e(t){return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t({type:O});case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})((function(e){var t=e.image,c=e.clearImage;return Object(m.jsxs)("div",{children:[Object(m.jsxs)("h5",{children:[Object(m.jsx)("i",{className:"material-icons x-med green-text accent-3 ",children:"check_circle"}),Object(m.jsx)("p",{children:"Uploaded successfully"})]}),Object(m.jsx)("div",{className:"card-image upload",children:Object(m.jsx)("img",{className:"responsive-image",src:t.data.url,alt:"User's upload"})}),Object(m.jsxs)("div",{children:[Object(m.jsx)("input",{type:"text",value:t.data.url,readOnly:!0}),Object(m.jsx)("button",{className:"waves-effect waves-light btn",onClick:function(){navigator.clipboard.writeText(t.data.url),l.a.toast({html:"Copied Link!"})},children:"Copy Link"})]}),Object(m.jsx)("div",{className:"padding-sm",children:Object(m.jsx)("a",{className:"cyan-text lighten-5",href:"/",onClick:function(){c()},children:Object(m.jsxs)("span",{children:[Object(m.jsx)("i",{className:"material-icons tiny",children:"arrow_back"})," Upload again"]})})})]})})),g=c(16),f=c(3),v=c(17),y={flex:1,display:"flex",flexDirection:"column",alignItems:"center",padding:"4em",borderWidth:2,borderRadius:2,borderColor:"#eeeeee",borderStyle:"dashed",backgroundColor:"#F6F8FB",color:"#bdbdbd",outline:"none",transition:"border .24s ease-in-out"},N={borderColor:"#2196f3"},w={borderColor:"#00e676"},k={borderColor:"#ff1744"},C=function(e){var t=e.setFile,c=Object(n.useCallback)((function(e){t(e[0])}),[t]),a=Object(v.a)({onDrop:c,accept:"image/*",maxFiles:1}),r=a.getRootProps,i=a.getInputProps,s=a.isDragActive,l=a.isDragAccept,o=a.isDragReject,d=Object(n.useMemo)((function(){return Object(f.a)(Object(f.a)(Object(f.a)(Object(f.a)({},y),s?N:{}),l?w:{}),o?k:{})}),[s,o,l]);return Object(m.jsxs)("div",Object(f.a)(Object(f.a)({},r({style:d})),{},{children:[Object(m.jsx)("input",Object(f.a)({},i())),Object(m.jsxs)("div",{children:[Object(m.jsx)("h6",{children:"Drop the files here ..."}),Object(m.jsx)("i",{className:"material-icons medium",children:"photo"})]})]}))},D=Object(o.b)(null,{uploadImage:function(e){return function(){var t=Object(b.a)(j.a.mark((function t(c){var n,a;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,c({type:p}),t.next=4,fetch("/image",{method:"POST",body:e});case 4:return n=t.sent,t.next=7,n.json();case 7:a=t.sent,c({type:u,payload:a}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),c({type:h,payload:t.t0.response.data});case 14:case 15:case"end":return t.stop()}}),t,null,[[0,11]])})));return function(e){return t.apply(this,arguments)}}()}})((function(e){var t=e.uploadImage,c=Object(n.useState)(null),a=Object(g.a)(c,2),r=a[0],i=a[1],s=Object(n.useRef)(null);Object(n.useEffect)((function(){r&&o()}));var o=function(){if(r){var e=new FormData;e.append("image",r),t(e),i(null)}else l.a.toast({html:"Please choose a file first"})};return Object(m.jsxs)("div",{className:"center-align",children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("h5",{children:Object(m.jsx)("p",{className:"grey-text darken-4",children:"Upload your image"})}),Object(m.jsx)("p",{className:"padding-med grey-text lighten-3",children:"File should be jpeg, png..."})]}),Object(m.jsx)("div",{className:"grey darken-1",children:Object(m.jsx)(C,{setFile:i})}),Object(m.jsx)("div",{className:"grey-text lighten-5 upload",children:"Or"}),Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{className:"waves-effect blue lighten-1 btn upload-btn z-depth-2",onClick:function(e){s.current.click()},children:"Upload a file"}),Object(m.jsx)("input",{type:"file",onChange:function(e){i(e.target.files[0])},onClick:function(e){i(null)},accept:"image/*",ref:s,style:{display:"none"}})]})]})})),F=function(){return Object(m.jsxs)(n.Fragment,{children:[Object(m.jsx)("h5",{children:"Uploading..."}),Object(m.jsx)("div",{className:"progress loader",children:Object(m.jsx)("div",{className:"indeterminate blue"})})]})},I=Object(o.b)((function(e){return{image:e.image}}))((function(e){var t=e.image,c=t.image;return t.loading?Object(m.jsx)("div",{className:"valign-wrapper",children:Object(m.jsx)("div",{className:"row center",children:Object(m.jsx)(F,{})})}):Object(m.jsx)("div",{className:"valign-wrapper",children:Object(m.jsx)("div",{className:"row center",children:Object(m.jsx)("div",{className:"card white z-depth-3 main-card",children:Object(m.jsx)("div",{className:"card-content",children:null===c?Object(m.jsx)(D,{}):Object(m.jsx)(n.Fragment,{children:Object(m.jsx)(x,{image:c})})})})})})})),R=function(){return Object(m.jsx)("footer",{children:Object(m.jsx)("div",{className:"footer-copyright",children:Object(m.jsx)("div",{className:"container",children:Object(m.jsx)("div",{className:"row center",children:"Copyright \xa9 2021 tommypnguyen. All Rights Reserved"})})})})},A=c(6),E=c(14),U=c(15),L={image:null,loading:!1,error:null},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(f.a)(Object(f.a)({},e),{},{loading:!0});case u:return Object(f.a)(Object(f.a)({},e),{},{image:t.payload,loading:!1});case O:return Object(f.a)(Object(f.a)({},e),{},{image:null});case h:return console.error(t.payload),Object(f.a)(Object(f.a)({},e),{},{error:t.payload});default:return e}},S=Object(A.combineReducers)({image:P}),_=[U.a],M=Object(A.createStore)(S,{},Object(E.composeWithDevTools)(A.applyMiddleware.apply(void 0,_))),T=function(){return Object(n.useEffect)((function(){l.a.AutoInit()})),Object(m.jsx)(o.a,{store:M,children:Object(m.jsx)(n.Fragment,{children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsx)(I,{}),Object(m.jsx)(R,{})]})})})};i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(T,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.a4d971e5.chunk.js.map