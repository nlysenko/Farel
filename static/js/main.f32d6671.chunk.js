(this.webpackJsonpfarel=this.webpackJsonpfarel||[]).push([[0],{42:function(e){e.exports=JSON.parse('{"header":{"act":"What are we doing?","using":"Using","works":"How it works?","blog":"Blog","contacts":"Contacts"}}')},43:function(e){e.exports=JSON.parse('{"header":{"act":"\u0427\u0442\u043e \u043c\u044b \u0434\u0435\u043b\u0430\u0435\u043c?","using":"\u0418\u0441\u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u043d\u0438\u0435","works":"\u041a\u0430\u043a \u044d\u0442\u043e \u0440\u0430\u0431\u043e\u0442\u0430\u0435\u0442?","blog":"\u0411\u043b\u043e\u0433","contacts":"\u041a\u043e\u043d\u0442\u0430\u043a\u0442\u044b"}}')},68:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(6),i=n.n(a),c=n(12),l=n(18),s="APPLY_THEME",b={name:"Dark",mainColor:"rgb(63, 63, 63)",mainTextColor:"rgb(255, 255, 255)",togglerLangBgColor:"rgb(0, 175, 206)",activeLinkBrColor:"rgb(0, 175, 206)",togglerBgColor:"rgb(255, 191, 0)",togglerActiveBgColor:"rgb(255, 207, 64)",menuBgColor:"rgb(255, 220, 115)",brRadius:0},d={name:"Light",mainColor:"rgb(236, 245, 253)",mainTextColor:"rgb(54, 54, 54)",togglerLangBgColor:"rgb(82, 159, 50)",activeLinkBrColor:"rgb(82, 159, 50)",togglerBgColor:"rgb(211, 207, 197)",togglerActiveBgColor:"rgb(222, 222, 222)",menuBgColor:"rgb(236, 232, 226)",brRadius:5},u={theme:b},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case s:return Object.assign({},{theme:t.payload});default:return e}},h=Object(l.b)(g,window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),m=n(3),j=n(9),x=n.p+"static/media/logo-farel.585339c8.webp",f=n(1),O=Object(m.b)({wrapper:{flexGrow:1},logo:{display:"block",width:75,height:56,cursor:"pointer"},farel:{width:"100%"}}),v=function(){var e=O();return Object(f.jsx)("div",{className:e.wrapper,children:Object(f.jsx)("i",{className:e.logo,onClick:function(){j.animateScroll.scrollToTop()},children:Object(f.jsx)("img",{className:e.farel,src:x,alt:"farel"})})})},p=n(71),C=Object(m.b)({navbar:{flexGrow:5,"@media (max-width: 790px)":{display:"none"}},navbarList:{display:"flex",justifyContent:"space-between"},navItem:{height:25},navLink:{fontSize:15,paddingBottom:5,color:function(e){return e.theme.mainTextColor},transition:"0.5s","&:hover":{cursor:"pointer"}},active:{borderBottom:["1px","solid"],borderColor:function(e){return e.theme.activeLinkBrColor}}}),k=function(){var e=Object(p.a)().t,t=Object(m.c)(),n=C({theme:t});return Object(f.jsx)("nav",{className:n.navbar,children:Object(f.jsxs)("ul",{className:n.navbarList,children:[Object(f.jsx)("li",{className:n.navItem,children:Object(f.jsx)(j.Link,{className:n.navLink,activeClass:n.active,spy:!0,smooth:!0,offset:-70,duration:500,to:"top",children:e("header.act")})}),Object(f.jsx)("li",{className:n.navItem,children:Object(f.jsx)(j.Link,{className:n.navLink,activeClass:n.active,spy:!0,smooth:!0,offset:-70,duration:500,to:"using",children:e("header.using")})}),Object(f.jsx)("li",{className:n.navItem,children:Object(f.jsx)(j.Link,{className:n.navLink,activeClass:n.active,spy:!0,smooth:!0,offset:-70,duration:500,to:"#",children:e("header.works")})}),Object(f.jsx)("li",{className:n.navItem,children:Object(f.jsx)(j.Link,{className:n.navLink,activeClass:n.active,spy:!0,smooth:!0,offset:-70,duration:500,to:"#",children:e("header.blog")})}),Object(f.jsx)("li",{className:n.navItem,children:Object(f.jsx)(j.Link,{className:n.navLink,activeClass:n.active,spy:!0,smooth:!0,offset:-70,duration:500,to:"#",children:e("header.contacts")})})]})})},N=n(21),w=n(20),y=n(8),L=n(70),B=n(39),S=n.n(B),E=function(e,t){var n=function(n){e.current&&!e.current.contains(n.target)&&t()};Object(o.useEffect)((function(){return document.addEventListener("click",n),function(){document.removeEventListener("click",n)}}))},I="60px",T="20px",A="30px",R="60px",_="350ms",z={top:"5px",width:I,maxHeight:T,color:"transparent"},D={top:A,width:R,maxHeight:"60px",color:"black"},G=Object(m.b)({container:{position:"relative"},toggler:{position:"relative",zIndex:"2",width:I,height:T,backgroundColor:function(e){return e.theme.togglerBgColor},border:"none",borderRadius:function(e){return e.theme.brRadius},outline:"none",cursor:"pointer",transition:"background-color 350ms"},togglerActive:{backgroundColor:function(e){return e.theme.togglerActiveBgColor}},menu:{position:"absolute",top:A,zIndex:"1",boxSizing:"border-box",width:R,overflow:"hidden",backgroundColor:function(e){return e.theme.menuBgColor},borderRadius:function(e){return e.theme.brRadius}},list:{padding:"0",listStyleType:"none"},listItem:{textAlign:"center",cursor:"pointer",padding:3,"&:hover":{backgroundColor:function(e){return e.theme.togglerActiveBgColor}}},listItemActive:{fontWeight:"bold"},balloonEnter:Object(y.a)(Object(y.a)({},z),{},{backgroundColor:function(e){return e.theme.togglerBgColor}}),balloonEnterActive:Object(y.a)(Object(y.a)({},D),{},{backgroundColor:function(e){return e.theme.menuBgColor},transition:"all ".concat(_)}),balloonExit:Object(y.a)(Object(y.a)({},D),{},{backgroundColor:function(e){return e.theme.menuBgColor}}),balloonExitActive:Object(y.a)(Object(y.a)({},z),{},{backgroundColor:function(e){return e.theme.togglerBgColor},transition:"all ".concat(_)})}),W={toggleTheme:function(e){return{type:s,payload:e}}},H=Object(c.b)((function(e){return{currentThemeName:e.theme.name}}),W)((function(e){var t=e.toggleTheme,n=e.currentThemeName,r=Object(o.useState)(!1),a=Object(N.a)(r,2),i=a[0],c=a[1],l=function(){c(!i)},s=function(e){n!==e.name&&(t(e),l()),l()},u=Object(o.useRef)();E(u,(function(){i&&c(!1)}));var g=Object(m.c)(),h=Object(o.useRef)(null),j=G({theme:g});return Object(f.jsxs)("div",{className:j.container,children:[Object(f.jsx)("button",{className:S()(j.toggler,Object(w.a)({},j.togglerActive,i)),ref:u,onClick:l,children:"Theme"}),Object(f.jsx)(L.a,{in:i,timeout:350,unmountOnExit:!0,nodeRef:h,classNames:{enter:j.balloonEnter,enterActive:j.balloonEnterActive,exit:j.balloonExit,exitActive:j.balloonExitActive},children:function(e){return Object(f.jsx)("div",{className:j.menu,ref:h,children:Object(f.jsxs)("ul",{className:j.list,children:[Object(f.jsx)("li",{className:"".concat(j.listItem," ").concat("Dark"===n?j.listItemActive:""),onClick:function(){return s(b)},children:"Dark"}),Object(f.jsx)("li",{className:"".concat(j.listItem," ").concat("Light"===n?j.listItemActive:""),onClick:function(){return s(d)},children:"Light"})]})})}})]})})),J=Object(m.b)({submenu:{display:"flex",justifyContent:"flex-end",flexGrow:1},radioGroup:{display:"flex"},lang:{width:25,height:25,display:"flex",justifyContent:"center",alignItems:"center",cursor:"pointer",marginLeft:14,borderRadius:function(e){return e.theme.brRadius}},active:{backgroundColor:function(e){return e.theme.togglerLangBgColor},transition:".5s"},hiden:{display:"none"},name:{fontSize:15,color:function(e){return e.theme.mainTextColor},transition:".5s"},title:{fontSize:12},themeSwitcher:{marginLeft:14},themeSwitcherInner:{display:"flex",flexDirection:"column"}}),U=function(e){var t=Object(p.a)().i18n,n=Object(m.c)(),r=Object(o.useState)(t.language),a=Object(N.a)(r,2),i=a[0],c=a[1],l=function(e){var n=e.target.value;t.changeLanguage(n),c(n)},s=J({theme:n});return Object(f.jsxs)("div",{className:s.submenu,children:[Object(f.jsxs)("div",{className:s.radioGroup,children:[Object(f.jsxs)("label",{className:"".concat(s.lang," ").concat("en"===i?s.active:""),htmlFor:"en",children:[Object(f.jsx)("span",{className:s.name,children:"EN"}),Object(f.jsx)("input",{className:s.hiden,type:"radio",name:"lang",id:"en",value:"en",checked:"en"===i,onChange:l})]}),Object(f.jsxs)("label",{className:"".concat(s.lang," ").concat("ru"===i?s.active:""),htmlFor:"ru",children:[Object(f.jsx)("span",{className:s.name,children:"RU"}),Object(f.jsx)("input",{className:s.hiden,type:"radio",name:"lang",id:"ru",value:"ru",checked:"ru"===i,onChange:l})]})]}),Object(f.jsx)("div",{className:s.themeSwitcher,children:Object(f.jsx)(H,{})})]})},X={colorBlack:"rgb(0,0,0)",colorWhite:"rgb(255, 255, 255)",mainColor:"rgb(63, 63, 63)",lightGrayColor:"rgb(154, 228, 220)",togglerLangBgColor:"rgb(0, 175, 206)",sectionHeaderColor:"rgb(54, 54, 54)",infoTextColor:"rgb(108, 108, 108)",cornerBgColor:"rgb(114, 114, 114)"},F=X.colorWhite,V=X.lightGrayColor,M=Object(m.b)({icon:{display:"none",width:30,height:25,cursor:"pointer",transition:"0.5s","&:hover>span":{background:V},"@media (max-width: 790px)":{display:"flex",flexDirection:"column"}},active:{transform:"rotate(90deg)",transition:"0.5s"},line:{display:"block",width:"100%",height:5,background:F,borderRadius:3,"&:nth-child(2)":{margin:[5,0]}}}),P=function(){var e=M();return Object(f.jsxs)("i",{className:e.icon,children:[Object(f.jsx)("span",{className:e.line}),Object(f.jsx)("span",{className:e.line}),Object(f.jsx)("span",{className:e.line})]})},q=Object(m.b)({header:{position:"fixed",top:0,left:0,right:0,zIndex:100,height:60,backgroundColor:function(e){return e.theme.mainColor},transition:"0.5s"},container:{maxWidth:930,height:"100%",display:"flex",alignItems:"center",padding:[0,15],margin:[0,"auto"]}}),Y=function(e){var t=Object(m.c)(),n=q({theme:t});return Object(f.jsx)("header",{className:n.header,children:Object(f.jsxs)("div",{className:n.container,children:[Object(f.jsx)(v,{}),Object(f.jsx)(k,{}),Object(f.jsx)(U,{}),Object(f.jsx)(P,{})]})})},K=Object(m.b)({container:{maxWidth:930,padding:[0,15],margin:[0,"auto"]}}),Q=function(){var e=K();return Object(f.jsx)("section",{className:e.topSection,id:"top",children:Object(f.jsx)("div",{className:e.container})})},Z=(Object(m.b)({usingSection:{height:2e3}}),Object(m.b)({main:{paddingTop:60}})),$=function(){var e=Z();return Object(f.jsx)("main",{className:e.main,children:Object(f.jsx)(Q,{})})},ee=X.colorBalck,te=X.colorWhite,ne=Object(m.b)({"@global":{"*":{margin:0,padding:0,boxSizing:"inherit"},html:{boxSizing:"border-box","-webkit-font-smoothing":"antialiased","-moz-osx-font-smoothing":"grayscale"},a:{color:te,textDecoration:"none"},body:{color:ee,background:te,fontSize:16,fontFamily:"OpenSans-Light"},ul:{listStyle:"none"},input:{font:"inherit"}}}),oe=Object(c.b)((function(e){return{theme:e.theme}}))((function(e){var t=e.theme;return ne(),Object(f.jsx)(m.a,{theme:t,children:Object(f.jsxs)("div",{children:[Object(f.jsx)(Y,{}),Object(f.jsx)($,{})]})})})),re=n(30),ae=n(40),ie=n(44),ce=n(15),le={en:{translation:n(42)},ru:{translation:n(43)}};re.a.use(ae.a).use(ie.a).use(ce.e).init({fallbackLng:window.navigator?window.navigator.language||window.navigator.systemLanguage||window.navigator.userLanguage:"en",debug:!0,resources:le,detection:{order:["queryString","cookie"],cache:["cookie"]},interpolation:{escapeValue:!1}});re.a;i.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(o.Suspense,{fallback:Object(f.jsx)("div",{children:"Loading..."}),children:Object(f.jsx)(c.a,{store:h,children:Object(f.jsx)(oe,{})})})}),document.getElementById("root"))}},[[68,1,2]]]);
//# sourceMappingURL=main.f32d6671.chunk.js.map