(this.webpackJsonphomepage=this.webpackJsonphomepage||[]).push([[0],{142:function(e,t,a){e.exports=a(156)},148:function(e,t,a){},156:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(54),o=a.n(r),c=(a(147),a(148),a(29)),m=a(10),s=a(169),i=a(128),u=a(157),d=a(174),p=a(59);function h(e){var t=e.history;return l.a.createElement(d.a,{style:{position:"absolute",top:"20%",width:"60%",background:"transparent",boxShadow:"none",borderWidth:"0"}},l.a.createElement(d.a.Header,null,"Welcome message ....."),l.a.createElement("p",null,"We updated our privacy policy here to better service our customers. We recommend reviewing the changes."),l.a.createElement(u.a,{onClick:function(){return t.push("/rtwform")},size:"large",primary:!0,color:"blue"},"return to work",l.a.createElement(p.a,{name:"right arrow"})))}var E="https://raw.githubusercontent.com/kc2040/backtowork/main/public/",g=a(173),f=a(102),b=a.n(f);function y(){return l.a.createElement(g.a,{color:"#dcdcdc",fluid:!0,widths:6,fixed:"bottom",position:"absolute",borderless:!0,style:{boxShadow:"none",borderWidth:"0"}},l.a.createElement(g.a.Item,null,b()(Date()).format("YYYY")," \xa9 Randstad"),l.a.createElement(g.a.Item,null,"Terms"),l.a.createElement(g.a.Item,null,"Privacy"),l.a.createElement(g.a.Item,null,"Contact"))}function w(){var e=E,t=Object(m.e)();return l.a.createElement("div",{style:{background:"#fff"}},l.a.createElement(i.a,{style:{backgroundSize:"cover"},responsive:"true",src:e+"businessoffice.png"}),l.a.createElement(u.a,{size:"small",disabled:!0,basic:!0},l.a.createElement(i.a,{size:"small",src:e+"rt-logo-dark.png",alt:"rt-logo-dark",style:{position:"absolute",top:"1%",left:"1%"}})),l.a.createElement(s.a,null,l.a.createElement(h,{history:t})),l.a.createElement(y,null))}var v=a(30),C={lightGreyFont:{color:"#C0C0C0"},greyFont:{color:"#808080"},borderless:{boxShadow:"none",borderWidth:"0"},backgroudless:{border:"none",background:"none"},buttonText:{color:"#abb8c3",fontSize:"1em"},buttonTextSelected:{fontSize:"0.9em",color:"#abb8c3"},figcaption:{position:"absolute",top:65,left:0,width:"100%",height:"100%",fontSize:"1.1em"},segment:{boxShadow:"none",borderWidth:"0"},redText:{color:"red"}};function k(){return l.a.createElement(g.a,{color:"blue",inverted:!0,fluid:!0,widths:3,fixed:"top",position:"absolute",borderless:!0,style:{boxShadow:"none",borderWidth:"0"}},l.a.createElement(g.a.Item,{as:v.c,exact:!0,to:"/"},l.a.createElement(i.a,{size:"small",src:"https://raw.githubusercontent.com/kc2040/backtowork/main/public/rt-logo-white.png",alt:"rt-logo-white"})),l.a.createElement(g.a.Item,{style:C.lightGreyFont},l.a.createElement("h5",{className:"lightGreyFont"}," ",function(){switch(window.location.pathname){case"/thankyou":return"Thank you";case"/summary":return"Summary";default:return"Return to work"}}())),l.a.createElement(g.a.Item,null),l.a.createElement(y,null))}var O=l.a.createContext({personalInfo:{fname:"",lname:"",email:"",cell:"",date:""},products:[{id:1,name:"Governance Committe",img:"governance.png",selected:!1},{id:2,name:"System of Record/Dashboard",img:"dashboard.png",selected:!1},{id:3,name:"Workforce Scheduling",img:"scheduling.png",selected:!1},{id:4,name:"Custom Playbook for COVID Testing Workflow",img:"playbook.png",selected:!1},{id:5,name:"COVID Testing",img:"testing.png",selected:!1},{id:6,name:"Diagnosis",img:"diagnosis.png",selected:!1},{id:7,name:"Contact Tracing",img:"tracing.png",selected:!1},{id:8,name:"Quarantine Management",img:"quarentine.png",selected:!1}],currentCart:{},prodError:null}),j=a(18);function x(e,t){switch(t.type){case"handleToggle":var a=e.products.map((function(e){return e.id===t.payload.id?Object(j.a)(Object(j.a)({},t.payload),{},{selected:!t.payload.selected}):e}));return Object(j.a)(Object(j.a)({},e),{},{products:a});case"infoChange":return Object(j.a)(Object(j.a)({},e),{},{personalInfo:t.payload});case"prodError":return Object(j.a)(Object(j.a)({},e),{},{prodError:t.payload});default:return e}}var S=a(176),I=a(170),T=a(177);function F(){var e=Object(n.useContext)(O),t=e.state,a=e.dispatch;return l.a.createElement(l.a.Fragment,null,l.a.createElement(k,null),l.a.createElement(S.a,{style:C.borderless,clearing:!0},l.a.createElement(d.a,{info:!0,style:C.borderless},l.a.createElement(d.a.Header,null,"Summary of your selections")),l.a.createElement(d.a,{style:C.borderless},l.a.createElement("h4",{style:C.lightGreyFont},"About you"),l.a.createElement(I.a,null),l.a.createElement(T.a,null,l.a.createElement(T.a.Row,null,l.a.createElement(T.a.Column,{width:4},"First name"),l.a.createElement(T.a.Column,{width:12},l.a.createElement("h5",{style:C.greyFont},t.personalInfo.fname))),l.a.createElement(T.a.Row,null,l.a.createElement(T.a.Column,{width:4},"Last name"),l.a.createElement(T.a.Column,{width:12},l.a.createElement("h5",{style:C.greyFont},t.personalInfo.lname))),l.a.createElement(T.a.Row,null,l.a.createElement(T.a.Column,{width:4},"Email"),l.a.createElement(T.a.Column,{width:12},l.a.createElement("h5",{style:C.greyFont},t.personalInfo.email))),l.a.createElement(T.a.Row,null,l.a.createElement(T.a.Column,{width:4},"Cell phone"),l.a.createElement(T.a.Column,{width:12},l.a.createElement("h5",{style:C.greyFont},t.personalInfo.cell))),l.a.createElement(T.a.Row,null,l.a.createElement(T.a.Column,{width:4},"Date"),l.a.createElement(T.a.Column,{width:12},l.a.createElement("h5",{style:C.greyFont}," ",t.personalInfo.date&&b()(t.personalInfo.date).format("MM-DD-YYYY")))))),l.a.createElement(S.a,{style:C.borderless,clearing:!0},l.a.createElement(u.a,{size:"tiny",color:"blue",as:v.b,to:"/thankyou",floated:"right",disabled:0===t.products.filter((function(e){return!0===e.selected})).length},"Submit"),l.a.createElement(u.a,{basic:!0,size:"tiny",as:v.b,to:"/rtwform",floated:"right"},"<< Back")),0===t.products.filter((function(e){return!0===e.selected})).length&&l.a.createElement("h5",{style:C.redText},"Please select offering(s)"),t.products.filter((function(e){return!0===e.selected})).length>0&&l.a.createElement("h5",{style:C.greyFont},"Review your selections"," "),l.a.createElement(I.a,null),l.a.createElement(T.a,{size:"small"},t.products.map((function(e){return e.selected&&l.a.createElement(T.a.Row,{key:e.id},l.a.createElement(T.a.Column,{width:4},l.a.createElement(i.a,{responsive:"true",src:"https://raw.githubusercontent.com/kc2040/backtowork/main/public/assets/"+e.img,circular:!0,alt:"my image",width:"40",height:"40"})),l.a.createElement(T.a.Column,{width:10},l.a.createElement("h4",{style:C.greyFont},e.name||" ")),l.a.createElement(T.a.Column,{width:2},l.a.createElement(u.a,{onClick:function(){return function(e){a({type:"handleToggle",payload:e})}(e)},icon:"remove",color:"red",size:"tiny"})))})))),l.a.createElement(y,null))}var N=a(172),R=a(171),z=a(104),W=function(e,t){var a=Object(n.useReducer)(x,[]),l=Object(c.a)(a,2),r=(l[0],l[1],Object(n.useContext)(O)),o=r.state,m=r.dispatch,s=o.personalInfo,i=Object(n.useState)({}),u=Object(c.a)(i,2),d=u[0],p=u[1],h=Object(n.useState)(!1),E=Object(c.a)(h,2),g=E[0],f=E[1];Object(n.useEffect)((function(){0===Object.keys(d).length&&g&&e()}),[d]);return{handleChange:function(e){e.persist();var t=Object(j.a)(Object(j.a)({},o.personalInfo),{},Object(z.a)({},e.target.name,e.target.value));m({type:"infoChange",payload:t})},handleSubmit:function(e){return e&&e.preventDefault(),p(t(s)),f(!0),g},handleClear:function(e){e.persist(),p("")},values:s,errors:d}};function q(e){var t={};return e.email?/\S+@\S+\.\S+/.test(e.email)||(t.email="email address is invalid"):t.email="email address is required",e.fname?e.fname.length<2&&(t.fname="first name must be 2 or more characters"):t.fname="first name is required",e.lname?e.lname.length<2&&(t.fname="last name must be 2 or more characters"):t.lname="last name is required",e.cell&!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(e.cell)&&(t.cell="phone number is invalid"),e.date||(t.date="return date is required"),t}function D(e){var t=e.handleToggle,a=e.product,r=e.styles,o=Object(n.useState)(a.selected),m=Object(c.a)(o,2),s=(m[0],m[1],Object(n.useReducer)(x,[])),d=Object(c.a)(s,2),p=(d[0],d[1],Object(n.useContext)(O));p.state,p.dispatch;return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,{style:{backgroundColor:(a.selected,"rgba(0, 0, 0, 0)")},onClick:function(){return t(a)}},l.a.createElement(i.a,{responsive:"true",src:"https://raw.githubusercontent.com/kc2040/backtowork/main/public/assets/"+a.img,circular:!0,alt:"my image",width:"115",height:"115",style:{borderStyle:a.selected?"solid":"none",borderColor:a.selected?"#abb8c3":"teal",opacity:a.selected?"0.5":"1"}}),a.selected&&l.a.createElement("span",{style:r.figcaption},"SELECTED"),l.a.createElement("p",{info:"true",style:r.buttonTextSelected},a.name)))}function Y(){var e=Object(n.useContext)(O),t=e.state,a=e.dispatch,r=(t.personalInfo,Object(n.useState)(!1)),o=Object(c.a)(r,2);o[0],o[1];function s(e){a({type:"handleToggle",payload:e})}var i=Object(m.e)(),p=W((function(){if(b>0){t.prodError;a({type:"prodError",payload:null})}else a({type:"prodError",payload:"Select an offering"});b&&i.push("/summary")}),q),h=p.values,E=p.errors,g=p.handleChange,f=p.handleSubmit,b=t.products.filter((function(e){return!0===e.selected})).length;return l.a.createElement(l.a.Fragment,null,l.a.createElement(k,null),l.a.createElement(N.a,{onSubmit:f,noValidate:!0},l.a.createElement(d.a,{size:"large",style:C.segment},l.a.createElement("h5",{style:C.greyFont},"Fill out the form below !"),l.a.createElement(T.a,{relaxed:"very",stackable:!0},l.a.createElement(T.a.Row,null,l.a.createElement(T.a.Column,{width:4}),l.a.createElement(T.a.Column,{width:10},l.a.createElement(N.a.Group,{widths:"equal"},l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement(R.a,{placeholder:"first name",className:"input ".concat(E.fname&&"is-danger"),name:"fname",onChange:g,value:h.fname||"",required:!0})),E.fname&&l.a.createElement("p",{style:C.redText},E.fname)),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement(R.a,{placeholder:"last name",className:"input ".concat(E.lname&&"is-danger"),name:"lname",onChange:g,value:h.lname||"",required:!0})),E.lname&&l.a.createElement("p",{style:C.redText},E.lname))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement(R.a,{placeholder:"jondoe@email.com",autoComplete:"off",className:"input ".concat(E.email&&"is-danger"),type:"email",name:"email",onChange:g,value:h.email||"",required:!0}),E.email&&l.a.createElement("p",{style:C.redText},E.email," a@yahoo.com"))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement(R.a,{placeholder:"cell number",className:"input ".concat(E.cell&&"is-danger"),name:"cell",onChange:g,value:h.cell||""})),E.cell&&l.a.createElement("p",{style:C.redText},E.cell)),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement(R.a,{label:"Return date",placeholder:"mm/dd/yyyy",type:"date",className:"input ".concat(E.date&&"is-danger"),name:"date",onChange:g,value:h.date||"",required:!0})),E.date&&l.a.createElement("p",{style:C.redText},E.date)),l.a.createElement(u.a,{basic:!0,size:"small",onClick:function(){var e=Object(j.a)(Object(j.a)({},t.personalInfo),{},{fname:"",lname:"",email:"",cell:"",date:""});a({type:"infoChange",payload:e})}},"Cancel"),l.a.createElement(u.a,{primary:!0,type:"submit",size:"small"},">> Next"),t.prodError&&l.a.createElement("p",{style:C.redText},"Please select offering(s)")))))),l.a.createElement("h4",{style:C.greyFont},"Select all Offerings you would like in your solution"),l.a.createElement(S.a,{style:C.boderless},l.a.createElement(T.a,{columns:4},l.a.createElement(T.a.Row,{align:"center"},t.products.map((function(e){return l.a.createElement(T.a.Column,{style:{borderWidth:0,background:"none",minWidth:180,maxWidth:220,minHeight:220,align:"center"},key:e.id},l.a.createElement(D,{handleToggle:s,key:e.id,product:e,styles:C,align:"center"}))}))),l.a.createElement(I.a,null))),l.a.createElement(y,null))}function G(){var e=Object(n.useContext)(O),t=e.state;e.dispatch;return l.a.createElement(l.a.Fragment,null,l.a.createElement(k,null),l.a.createElement(d.a,null,l.a.createElement(d.a.Header,null,"Thank you!  ",l.a.createElement("span",{style:{color:"grey"}}," "+t.personalInfo.fname+" "+t.personalInfo.lname+" "," ")," for submitting.")),l.a.createElement(d.a,{info:!0},l.a.createElement(d.a.Header,null,"message ..."),l.a.createElement("p",null,"message.... message.... message....")),l.a.createElement(y,null))}var H=function(){var e=Object(n.useContext)(O),t=Object(n.useReducer)(x,e),a=Object(c.a)(t,2),r=a[0],o=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(O.Provider,{value:{state:r,dispatch:o}},l.a.createElement(m.a,{exact:!0,path:"/",component:w}),l.a.createElement(m.a,{path:"/(.+)",render:function(){return l.a.createElement(s.a,{className:"main"},l.a.createElement(m.a,{exact:!0,path:"/",component:w}),l.a.createElement(m.a,{exact:!0,path:"/rtwform",component:Y}),l.a.createElement(m.a,{exact:!0,path:"/summary",component:F}),l.a.createElement(m.a,{exact:!0,path:"/thankyou",component:G}))}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=document.getElementById("root");o.a.render(l.a.createElement(v.a,null,l.a.createElement(H,null)),P),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[142,1,2]]]);
//# sourceMappingURL=main.1ff3db1a.chunk.js.map