(this.webpackJsonpbacktowork=this.webpackJsonpbacktowork||[]).push([[0],{142:function(e,t,a){e.exports=a(156)},148:function(e,t,a){},156:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(54),o=a.n(r),c=(a(147),a(148),a(29)),s=a(10),m=a(169),i=a(128),d=a(157),u=a(174),h=a(59);function p(e){var t=e.history;return l.a.createElement(u.a,{style:{position:"absolute",top:"20%",width:"60%",background:"transparent",boxShadow:"none",borderWidth:"0"}},l.a.createElement(u.a.Header,null,"Welcome message ....."),l.a.createElement("p",null,"We updated our privacy policy here to better service our customers. We recommend reviewing the changes."),l.a.createElement(d.a,{onClick:function(){return t.push("/rtwform")},size:"large",primary:!0,color:"blue"},"return to work",l.a.createElement(h.a,{name:"right arrow"})))}var E=a(173),g=a(102),f=a.n(g);function y(){return l.a.createElement(E.a,{color:"#dcdcdc",fluid:!0,widths:6,fixed:"bottom",position:"absolute",borderless:!0,style:{boxShadow:"none",borderWidth:"0"}},l.a.createElement(E.a.Item,null,f()(Date()).format("YYYY")," \xa9 Randstad"),l.a.createElement(E.a.Item,null,"Terms"),l.a.createElement(E.a.Item,null,"Privacy"),l.a.createElement(E.a.Item,null,"Contact"))}var b=a(36),v={lightGreyFont:{color:"#C0C0C0"},greyFont:{color:"#808080"},borderless:{boxShadow:"none",borderWidth:"0"},backgroudless:{border:"none",background:"none"},buttonText:{color:"#abb8c3",fontSize:"1em"},buttonTextSelected:{fontSize:"0.9em",color:"#abb8c3"},figcaption:{position:"absolute",top:90,left:0,width:"100%",height:"100%",fontSize:"1.3em"},segment:{boxShadow:"none",borderWidth:"0"},redText:{color:"red"}};function w(){return l.a.createElement(E.a,{color:"blue",inverted:!0,fluid:!0,widths:3,fixed:"top",position:"absolute",borderless:!0,style:{boxShadow:"none",borderWidth:"0"}},l.a.createElement(E.a.Item,{as:b.c,exact:!0,to:"/"},l.a.createElement(i.a,{size:"small",src:"rt-logo-white.png",alt:"rt-logo-white"})),l.a.createElement(E.a.Item,{style:v.lightGreyFont},l.a.createElement("h5",{className:"lightGreyFont"}," ",function(){switch(window.location.pathname){case"/thankyou":return"Thank you";case"/summary":return"Summary";default:return"Return to work"}}())),l.a.createElement(E.a.Item,null),l.a.createElement(y,null))}function C(e){var t=e.history;return l.a.createElement("div",{style:{background:"#fff"}},l.a.createElement(i.a,{style:{backgroundSize:"cover"},responsive:"true",src:"businessoffice.png"}),l.a.createElement(d.a,{size:"small",disabled:!0,basic:!0},l.a.createElement(i.a,{size:"small",src:"rt-logo-dark.png",alt:"rt-logo-dark",style:{position:"absolute",top:"1%",left:"1%"}})),l.a.createElement(m.a,null,l.a.createElement(p,{history:t})),l.a.createElement(y,null))}var k=l.a.createContext({personalInfo:{fname:"",lname:"",email:"",cell:"",date:""},products:[{id:1,name:"Governance Committe",img:"governance.png",selected:!1},{id:2,name:"System of Record/Dashboard",img:"dashboard.png",selected:!1},{id:3,name:"Workforce Scheduling",img:"scheduling.png",selected:!1},{id:4,name:"Custom Playbook for COVID Testing Workflow",img:"playbook.png",selected:!1},{id:5,name:"COVID Testing",img:"testing.png",selected:!1},{id:6,name:"Diagnosis",img:"diagnosis.png",selected:!1},{id:7,name:"Contact Tracing",img:"tracing.png",selected:!1},{id:8,name:"Quarantine Management",img:"quarentine.png",selected:!1}],currentCart:{},prodError:null}),O=a(18);function j(e,t){switch(t.type){case"handleToggle":var a=e.products.map((function(e){return e.id===t.payload.id?Object(O.a)(Object(O.a)({},t.payload),{},{selected:!t.payload.selected}):e}));return Object(O.a)(Object(O.a)({},e),{},{products:a});case"infoChange":return Object(O.a)(Object(O.a)({},e),{},{personalInfo:t.payload});case"prodError":return Object(O.a)(Object(O.a)({},e),{},{prodError:t.payload});default:return e}}var x=a(176),S=a(170),I=a(177);function T(){var e=Object(n.useContext)(k),t=e.state,a=e.dispatch;return l.a.createElement(l.a.Fragment,null,l.a.createElement(x.a,{style:v.borderless,clearing:!0},l.a.createElement(u.a,{style:v.borderless},l.a.createElement("h4",{style:v.lightGreyFont},"About you"),l.a.createElement(S.a,null),l.a.createElement(I.a,null,l.a.createElement(I.a.Row,null,l.a.createElement(I.a.Column,{width:4},"First name"),l.a.createElement(I.a.Column,{width:12},l.a.createElement("h5",{style:v.greyFont},t.personalInfo.fname))),l.a.createElement(I.a.Row,null,l.a.createElement(I.a.Column,{width:4},"Last name"),l.a.createElement(I.a.Column,{width:12},l.a.createElement("h5",{style:v.greyFont},t.personalInfo.lname))),l.a.createElement(I.a.Row,null,l.a.createElement(I.a.Column,{width:4},"Email"),l.a.createElement(I.a.Column,{width:12},l.a.createElement("h5",{style:v.greyFont},t.personalInfo.email))),l.a.createElement(I.a.Row,null,l.a.createElement(I.a.Column,{width:4},"Cell phone"),l.a.createElement(I.a.Column,{width:12},l.a.createElement("h5",{style:v.greyFont},t.personalInfo.cell))),l.a.createElement(I.a.Row,null,l.a.createElement(I.a.Column,{width:4},"Date"),l.a.createElement(I.a.Column,{width:12},l.a.createElement("h5",{style:v.greyFont}," ",t.personalInfo.date&&f()(t.personalInfo.date).format("MM-DD-YYYY")))))),l.a.createElement(x.a,{style:v.borderless,clearing:!0},l.a.createElement(d.a,{size:"tiny",color:"blue",as:b.b,to:"/thankyou",floated:"right",disabled:0===t.products.filter((function(e){return!0===e.selected})).length},"Submit"),l.a.createElement(d.a,{basic:!0,size:"tiny",as:b.b,to:"/rtwform",floated:"right"},"<< Back")),0===t.products.filter((function(e){return!0===e.selected})).length&&l.a.createElement("h5",{style:v.redText},"Please select offering(s)"),t.products.filter((function(e){return!0===e.selected})).length>0&&l.a.createElement("h5",{style:v.greyFont},"Review your selections"," "),l.a.createElement(S.a,null),l.a.createElement(I.a,{size:"small"},t.products.map((function(e){return e.selected&&l.a.createElement(I.a.Row,{key:e.id},l.a.createElement(I.a.Column,{width:4},l.a.createElement(i.a,{responsive:"true",src:"assets/"+e.img,circular:!0,alt:"my image",width:"40",height:"40"})),l.a.createElement(I.a.Column,{width:10},l.a.createElement("h4",{style:v.greyFont},e.name||" ")),l.a.createElement(I.a.Column,{width:2},l.a.createElement(d.a,{onClick:function(){return function(e){a({type:"handleToggle",payload:e})}(e)},icon:"remove",color:"red",size:"tiny"})))})))))}var F=a(172),N=a(171),R=a(104),z=function(e,t){var a=Object(n.useReducer)(j,[]),l=Object(c.a)(a,2),r=(l[0],l[1],Object(n.useContext)(k)),o=r.state,s=r.dispatch,m=o.personalInfo,i=Object(n.useState)({}),d=Object(c.a)(i,2),u=d[0],h=d[1],p=Object(n.useState)(!1),E=Object(c.a)(p,2),g=E[0],f=E[1];Object(n.useEffect)((function(){0===Object.keys(u).length&&g&&e()}),[u]);return{handleChange:function(e){e.persist();var t=Object(O.a)(Object(O.a)({},o.personalInfo),{},Object(R.a)({},e.target.name,e.target.value));s({type:"infoChange",payload:t})},handleSubmit:function(e){return e&&e.preventDefault(),h(t(m)),f(!0),g},handleClear:function(e){e.persist(),h("")},values:m,errors:u}};function W(e){var t={};return e.email?/\S+@\S+\.\S+/.test(e.email)||(t.email="email address is invalid"):t.email="email address is required",e.fname?e.fname.length<2&&(t.fname="first name must be 2 or more characters"):t.fname="first name is required",e.lname?e.lname.length<2&&(t.fname="last name must be 2 or more characters"):t.lname="last name is required",e.cell&!/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/.test(e.cell)&&(t.cell="phone number is invalid"),e.date||(t.date="return date is required"),t}function q(e){var t=e.handleToggle,a=e.product,r=e.styles,o=Object(n.useState)(a.selected),s=Object(c.a)(o,2),m=(s[0],s[1],Object(n.useReducer)(j,[])),u=Object(c.a)(m,2),h=(u[0],u[1],Object(n.useContext)(k));h.state,h.dispatch;return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{style:{backgroundColor:(a.selected,"rgba(0, 0, 0, 0)")},onClick:function(){return t(a)}},l.a.createElement(i.a,{responsive:"true",src:"assets/"+a.img,circular:!0,alt:"my image",width:"155",height:"155",style:{borderStyle:a.selected?"solid":"none",borderColor:a.selected?"#abb8c3":"teal",opacity:a.selected?"0.5":"1"}}),a.selected&&l.a.createElement("span",{style:r.figcaption},"SELECTED"),l.a.createElement("p",{info:"true",style:r.buttonTextSelected},a.name)))}function D(){var e=Object(n.useContext)(k),t=e.state,a=e.dispatch,r=(t.personalInfo,Object(n.useState)(!1)),o=Object(c.a)(r,2);o[0],o[1];function m(e){a({type:"handleToggle",payload:e})}var i=Object(s.e)(),h=z((function(){if(y>0){t.prodError;a({type:"prodError",payload:null})}else a({type:"prodError",payload:"Select an offering"});y&&i.push("/summary")}),W),p=h.values,E=h.errors,g=h.handleChange,f=h.handleSubmit,y=t.products.filter((function(e){return!0===e.selected})).length;return l.a.createElement(l.a.Fragment,null,l.a.createElement(F.a,{onSubmit:f,noValidate:!0},l.a.createElement(u.a,{size:"large",style:v.segment},l.a.createElement("h5",{style:v.greyFont},"Fill out the form below !"),l.a.createElement(I.a,{relaxed:"very",stackable:!0},l.a.createElement(I.a.Row,null,l.a.createElement(I.a.Column,{width:4}),l.a.createElement(I.a.Column,{width:10},l.a.createElement(F.a.Group,{widths:"equal"},l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement(N.a,{placeholder:"first name",className:"input ".concat(E.fname&&"is-danger"),name:"fname",onChange:g,value:p.fname||"",required:!0})),E.fname&&l.a.createElement("p",{style:v.redText},E.fname)),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement(N.a,{placeholder:"last name",className:"input ".concat(E.lname&&"is-danger"),name:"lname",onChange:g,value:p.lname||"",required:!0})),E.lname&&l.a.createElement("p",{style:v.redText},E.lname))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement(N.a,{placeholder:"jondoe@email.com",autoComplete:"off",className:"input ".concat(E.email&&"is-danger"),type:"email",name:"email",onChange:g,value:p.email||"",required:!0}),E.email&&l.a.createElement("p",{style:v.redText},E.email," a@yahoo.com"))),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement(N.a,{placeholder:"cell number",className:"input ".concat(E.cell&&"is-danger"),name:"cell",onChange:g,value:p.cell||""})),E.cell&&l.a.createElement("p",{style:v.redText},E.cell)),l.a.createElement("div",{className:"field"},l.a.createElement("div",{className:"control"},l.a.createElement(N.a,{label:"Return date",placeholder:"mm/dd/yyyy",type:"date",className:"input ".concat(E.date&&"is-danger"),name:"date",onChange:g,value:p.date||"",required:!0})),E.date&&l.a.createElement("p",{style:v.redText},E.date)),l.a.createElement(d.a,{basic:!0,size:"small",onClick:function(){var e=Object(O.a)(Object(O.a)({},t.personalInfo),{},{fname:"",lname:"",email:"",cell:"",date:""});a({type:"infoChange",payload:e})}},"Cancel"),l.a.createElement(d.a,{primary:!0,type:"submit",size:"small"},">> Next"),t.prodError&&l.a.createElement("p",{style:v.redText},"Please select offering(s)")))))),l.a.createElement("h4",{style:v.greyFont},"Select all Offerings you would like in your solution"),l.a.createElement(x.a,{style:v.boderless},l.a.createElement(I.a,{columns:4},l.a.createElement(I.a.Row,{align:"center"},t.products.map((function(e){return l.a.createElement(I.a.Column,{style:{borderWidth:0,background:"none",minWidth:220,maxWidth:250,minHeight:250,align:"center"},key:e.id},l.a.createElement(q,{handleToggle:m,key:e.id,product:e,styles:v,align:"center"}))}))),l.a.createElement(S.a,null))))}function Y(){var e=Object(n.useContext)(k),t=e.state;e.dispatch;return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.a,null,l.a.createElement(u.a.Header,null,"Thank you!  ",l.a.createElement("span",{style:{color:"grey"}}," "+t.personalInfo.fname+" "+t.personalInfo.lname+" "," ")," for submitting.")),l.a.createElement(u.a,{info:!0},l.a.createElement(u.a.Header,null,"message ..."),l.a.createElement("p",null,"message.... message.... message....")))}var G=function(){var e=Object(n.useContext)(k),t=Object(n.useReducer)(j,e),a=Object(c.a)(t,2),r=a[0],o=a[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(k.Provider,{value:{state:r,dispatch:o}},l.a.createElement(s.a,{exact:!0,path:"/",component:C}),l.a.createElement(s.a,{path:"/(.+)",render:function(){return l.a.createElement(m.a,{className:"main"},l.a.createElement(w,null),l.a.createElement(s.a,{exact:!0,path:"/rtwform",component:D}),l.a.createElement(s.a,{exact:!0,path:"/summary",component:T}),l.a.createElement(s.a,{exact:!0,path:"/thankyou",component:Y}),l.a.createElement(y,null))}})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var P=document.getElementById("root");o.a.render(l.a.createElement(b.a,null,l.a.createElement(G,null)),P),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[142,1,2]]]);
//# sourceMappingURL=main.45cbded5.chunk.js.map