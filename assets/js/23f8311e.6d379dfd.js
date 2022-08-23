"use strict";(self.webpackChunk_switchboard_xyz_v2_docs=self.webpackChunk_switchboard_xyz_v2_docs||[]).push([[2011],{5318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),m=i,g=p["".concat(u,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(g,a(a({ref:t},c),{},{components:n})):r.createElement(g,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5310:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(5773),i=n(808),o=n(7378),a=n(8944),s=n(5642),u=n(1652),l=n(3772),c=n(6206),d=n(4246);const p=["className","component"];var m=n(4907);const g=function(e={}){const{defaultTheme:t,defaultClassName:n="MuiBox-root",generateClassName:m,styleFunctionSx:g=u.Z}=e,f=(0,s.ZP)("div")(g);return o.forwardRef((function(e,o){const s=(0,c.Z)(t),u=(0,l.Z)(e),{className:g,component:b="div"}=u,h=(0,i.Z)(u,p);return(0,d.jsx)(f,(0,r.Z)({as:b,ref:o,className:(0,a.Z)(g,m?m(n):n),theme:s},h))}))}({defaultTheme:(0,n(2905).Z)(),defaultClassName:"MuiBox-root",generateClassName:m.Z.generate});var f=g},4384:function(e,t,n){n.d(t,{ZP:function(){return w}});var r=n(808),i=n(5773),o=n(7378),a=n(8944),s=n(2142),u=n(3772),l=n(3892),c=n(2709),d=n(2399);var p=o.createContext(),m=n(765);function g(e){return(0,m.Z)("MuiGrid",e)}const f=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];var b=(0,n(2897).Z)("MuiGrid",["root","container","item","zeroMinWidth",...[0,1,2,3,4,5,6,7,8,9,10].map((e=>`spacing-xs-${e}`)),...["column-reverse","column","row-reverse","row"].map((e=>`direction-xs-${e}`)),...["nowrap","wrap-reverse","wrap"].map((e=>`wrap-xs-${e}`)),...f.map((e=>`grid-xs-${e}`)),...f.map((e=>`grid-sm-${e}`)),...f.map((e=>`grid-md-${e}`)),...f.map((e=>`grid-lg-${e}`)),...f.map((e=>`grid-xl-${e}`))]),h=n(4246);const x=["className","columns","columnSpacing","component","container","direction","item","lg","md","rowSpacing","sm","spacing","wrap","xl","xs","zeroMinWidth"];function y(e){const t=parseFloat(e);return`${t}${String(e).replace(String(t),"")||"px"}`}function k(e,t,n={}){if(!t||!e||e<=0)return[];if("string"==typeof e&&!Number.isNaN(Number(e))||"number"==typeof e)return[n[`spacing-xs-${String(e)}`]||`spacing-xs-${String(e)}`];const{xs:r,sm:i,md:o,lg:a,xl:s}=e;return[Number(r)>0&&(n[`spacing-xs-${String(r)}`]||`spacing-xs-${String(r)}`),Number(i)>0&&(n[`spacing-sm-${String(i)}`]||`spacing-sm-${String(i)}`),Number(o)>0&&(n[`spacing-md-${String(o)}`]||`spacing-md-${String(o)}`),Number(a)>0&&(n[`spacing-lg-${String(a)}`]||`spacing-lg-${String(a)}`),Number(s)>0&&(n[`spacing-xl-${String(s)}`]||`spacing-xl-${String(s)}`)]}const v=(0,c.ZP)("div",{name:"MuiGrid",slot:"Root",overridesResolver:(e,t)=>{const{container:n,direction:r,item:i,lg:o,md:a,sm:s,spacing:u,wrap:l,xl:c,xs:d,zeroMinWidth:p}=e.ownerState;return[t.root,n&&t.container,i&&t.item,p&&t.zeroMinWidth,...k(u,n,t),"row"!==r&&t[`direction-xs-${String(r)}`],"wrap"!==l&&t[`wrap-xs-${String(l)}`],!1!==d&&t[`grid-xs-${String(d)}`],!1!==s&&t[`grid-sm-${String(s)}`],!1!==a&&t[`grid-md-${String(a)}`],!1!==o&&t[`grid-lg-${String(o)}`],!1!==c&&t[`grid-xl-${String(c)}`]]}})((({ownerState:e})=>(0,i.Z)({boxSizing:"border-box"},e.container&&{display:"flex",flexWrap:"wrap",width:"100%"},e.item&&{margin:0},e.zeroMinWidth&&{minWidth:0},"wrap"!==e.wrap&&{flexWrap:e.wrap})),(function({theme:e,ownerState:t}){const n=(0,s.P$)({values:t.direction,breakpoints:e.breakpoints.values});return(0,s.k9)({theme:e},n,(e=>{const t={flexDirection:e};return 0===e.indexOf("column")&&(t[`& > .${b.item}`]={maxWidth:"none"}),t}))}),(function({theme:e,ownerState:t}){const{container:n,rowSpacing:r}=t;let i={};if(n&&0!==r){const t=(0,s.P$)({values:r,breakpoints:e.breakpoints.values});i=(0,s.k9)({theme:e},t,(t=>{const n=e.spacing(t);return"0px"!==n?{marginTop:`-${y(n)}`,[`& > .${b.item}`]:{paddingTop:y(n)}}:{}}))}return i}),(function({theme:e,ownerState:t}){const{container:n,columnSpacing:r}=t;let i={};if(n&&0!==r){const t=(0,s.P$)({values:r,breakpoints:e.breakpoints.values});i=(0,s.k9)({theme:e},t,(t=>{const n=e.spacing(t);return"0px"!==n?{width:`calc(100% + ${y(n)})`,marginLeft:`-${y(n)}`,[`& > .${b.item}`]:{paddingLeft:y(n)}}:{}}))}return i}),(function({theme:e,ownerState:t}){let n;return e.breakpoints.keys.reduce(((r,o)=>{let a={};if(t[o]&&(n=t[o]),!n)return r;if(!0===n)a={flexBasis:0,flexGrow:1,maxWidth:"100%"};else if("auto"===n)a={flexBasis:"auto",flexGrow:0,flexShrink:0,maxWidth:"none",width:"auto"};else{const u=(0,s.P$)({values:t.columns,breakpoints:e.breakpoints.values}),l="object"==typeof u?u[o]:u;if(null==l)return r;const c=Math.round(n/l*1e8)/1e6+"%";let d={};if(t.container&&t.item&&0!==t.columnSpacing){const n=e.spacing(t.columnSpacing);if("0px"!==n){const e=`calc(${c} + ${y(n)})`;d={flexBasis:e,maxWidth:e}}}a=(0,i.Z)({flexBasis:c,flexGrow:0,maxWidth:c},d)}return 0===e.breakpoints.values[o]?Object.assign(r,a):r[e.breakpoints.up(o)]=a,r}),{})}));var w=o.forwardRef((function(e,t){const n=(0,d.Z)({props:e,name:"MuiGrid"}),s=(0,u.Z)(n),{className:c,columns:m,columnSpacing:f,component:b="div",container:y=!1,direction:w="row",item:S=!1,lg:Z=!1,md:$=!1,rowSpacing:T,sm:O=!1,spacing:j=0,wrap:P="wrap",xl:N=!1,xs:C=!1,zeroMinWidth:M=!1}=s,D=(0,r.Z)(s,x),W=T||j,_=f||j,F=o.useContext(p),G=y?m||12:F,z=(0,i.Z)({},s,{columns:G,container:y,direction:w,item:S,lg:Z,md:$,sm:O,rowSpacing:W,columnSpacing:_,wrap:P,xl:N,xs:C,zeroMinWidth:M}),J=(e=>{const{classes:t,container:n,direction:r,item:i,lg:o,md:a,sm:s,spacing:u,wrap:c,xl:d,xs:p,zeroMinWidth:m}=e,f={root:["root",n&&"container",i&&"item",m&&"zeroMinWidth",...k(u,n),"row"!==r&&`direction-xs-${String(r)}`,"wrap"!==c&&`wrap-xs-${String(c)}`,!1!==p&&`grid-xs-${String(p)}`,!1!==s&&`grid-sm-${String(s)}`,!1!==a&&`grid-md-${String(a)}`,!1!==o&&`grid-lg-${String(o)}`,!1!==d&&`grid-xl-${String(d)}`]};return(0,l.Z)(f,g,t)})(z);return(0,h.jsx)(p.Provider,{value:G,children:(0,h.jsx)(v,(0,i.Z)({ownerState:z,className:(0,a.Z)(J.root,c),as:b,ref:t},D))})}))},6003:function(e,t,n){var r=n(5310),i=n(7378),o=n(1142),a=n(2638);t.Z=function(e){var t=(0,a.Z)().isDarkTheme,n="inherit";e.lightBg&&!t&&(n=e.lightBg),e.darkBg&&t&&(n=e.darkBg);var s={};return e.sx&&(s=Object.assign({backgroundColor:n,m:"auto",display:"flex"},s,e.sx)),i.createElement(r.Z,{component:"img",sx:s,src:(0,o.Z)(e.img)})}},5849:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return g}});var r=n(5773),i=n(808),o=(n(7378),n(5318)),a=n(6003),s=n(4384),u=n(2750),l=n(9556),c=["components"],d={sidebar_position:40,slug:"/publisher/custom-feeds",title:"Custom Feeds"},p=void 0,m={unversionedId:"feeds/publisher/custom-feeds",id:"feeds/publisher/custom-feeds",title:"Custom Feeds",description:"Feed Definition",source:"@site/docs/feeds/publisher/custom-feeds.mdx",sourceDirName:"feeds/publisher",slug:"/publisher/custom-feeds",permalink:"/publisher/custom-feeds",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40,slug:"/publisher/custom-feeds",title:"Custom Feeds"},sidebar:"tutorialSidebar",previous:{title:"Publisher Overview",permalink:"/publisher"},next:{title:"Job Directory",permalink:"/job-directory"}},g=[{value:"Feed Definition",id:"feed-definition",children:[],level:2},{value:"Custom Jobs",id:"custom-jobs",children:[],level:2},{value:"Checkout",id:"checkout",children:[],level:2}],f={toc:g};function b(e){var t=e.components,n=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"feed-definition"},"Feed Definition"),(0,o.kt)(s.ZP,{container:!0,spacing:3,mdxType:"Grid"},(0,o.kt)(s.ZP,{item:!0,md:6,mdxType:"Grid"},(0,o.kt)(u.Z,{mdxType:"Typography"},"The ",(0,o.kt)("i",null,"Custom Feed")," button lets you build a custom feed from a JSON definition:"),(0,o.kt)(a.Z,{img:"/img/publisher/Custom_Feed_Button.png",sx:{width:"70%",textAlign:"center",mx:2,display:"flex",borderRadius:3,overflow:"hidden"},mdxType:"MarkdownImage"}),(0,o.kt)("br",null),(0,o.kt)(u.Z,{mdxType:"Typography"},"You should see the ",(0,o.kt)("i",null,"Custom Feed Modal")," to the right. Give your feed a name, then for each job you require, select ",(0,o.kt)("i",null,"Add Job +"),"."),(0,o.kt)("br",null),(0,o.kt)(u.Z,{mdxType:"Typography"},"A data feed must have at least one job.")),(0,o.kt)(s.ZP,{item:!0,md:6,mdxType:"Grid"},(0,o.kt)(a.Z,{img:"/img/publisher/Custom_Feed_Modal.png",sx:{borderWidth:"thin",border:"1px solid #D3D3D3",borderRadius:3},mdxType:"MarkdownImage"}))),(0,o.kt)("h2",{id:"custom-jobs"},"Custom Jobs"),(0,o.kt)(s.ZP,{container:!0,spacing:3,mdxType:"Grid"},(0,o.kt)(s.ZP,{item:!0,md:6,mdxType:"Grid"},(0,o.kt)(a.Z,{img:"/img/publisher/Custom_Job_Modal.png",sx:{borderWidth:"thin",border:"1px solid #D3D3D3",borderRadius:3},mdxType:"MarkdownImage"})),(0,o.kt)(s.ZP,{item:!0,md:6,mdxType:"Grid"},(0,o.kt)(u.Z,{mdxType:"Typography"},"The ",(0,o.kt)("i",null,"Custom Job")," modal lets you build a custom job from a JSON definition or Public Key."),(0,o.kt)("br",null),(0,o.kt)("b",null,(0,o.kt)("u",null,"JSON Definition")),(0,o.kt)(u.Z,{mdxType:"Typography"},"You can find example job definitions at:",(0,o.kt)("ul",null,(0,o.kt)("li",null,(0,o.kt)(l.Z,{to:"/api/tasks",mdxType:"Link"},"/api/tasks")),(0,o.kt)("li",null,(0,o.kt)(l.Z,{to:"/job-directory",mdxType:"Link"},"Job Directory")),(0,o.kt)("li",null,(0,o.kt)(l.Z,{to:"https://switchboard.xyz/explorer",mdxType:"Link"},"Switchboard Explorer")))),(0,o.kt)("br",null),(0,o.kt)(u.Z,{mdxType:"Typography"},"Paste in your JSON definition, then select ",(0,o.kt)("i",null,"Test")," to simulate the job and view the result."),(0,o.kt)("br",null),(0,o.kt)("b",null,(0,o.kt)("u",null,"Public Key")),(0,o.kt)(u.Z,{mdxType:"Typography"},"You can use an existing JobAccount public key to build your data feed. This is useful if you are building multiple feeds that share job definitions."))),(0,o.kt)("p",null,"When done, select ",(0,o.kt)("em",{parentName:"p"},"Add Job")," to return to the ",(0,o.kt)("em",{parentName:"p"},"Custom Feed")," modal."),(0,o.kt)("h2",{id:"checkout"},"Checkout"),(0,o.kt)("p",null,"When you have added all of your jobs, select ",(0,o.kt)("em",{parentName:"p"},"Add Feed")," to add the custom feed to your basket."),(0,o.kt)("p",null,"Then continue to ",(0,o.kt)("a",{parentName:"p",href:"/publisher#checkout"},"checkout"),"."))}b.isMDXComponent=!0}}]);