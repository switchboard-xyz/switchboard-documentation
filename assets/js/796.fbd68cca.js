"use strict";(self.webpackChunk_switchboard_xyz_v2_docs=self.webpackChunk_switchboard_xyz_v2_docs||[]).push([[796],{3892:function(t,n,o){function e(t,n,o){const e={};return Object.keys(t).forEach((r=>{e[r]=t[r].reduce(((t,e)=>(e&&(o&&o[e]&&t.push(o[e]),t.push(n(e))),t)),[]).join(" ")})),e}o.d(n,{Z:function(){return e}})},765:function(t,n,o){o.d(n,{Z:function(){return c}});var e=o(4907);const r={active:"Mui-active",checked:"Mui-checked",completed:"Mui-completed",disabled:"Mui-disabled",error:"Mui-error",expanded:"Mui-expanded",focused:"Mui-focused",focusVisible:"Mui-focusVisible",required:"Mui-required",selected:"Mui-selected"};function c(t,n){return r[n]||`${e.Z.generate(t)}-${n}`}},2897:function(t,n,o){o.d(n,{Z:function(){return r}});var e=o(765);function r(t,n){const o={};return n.forEach((n=>{o[n]=(0,e.Z)(t,n)})),o}},9523:function(t,n,o){o.d(n,{Z:function(){return z}});var e=o(5773),r=o(808),c=o(7378),i=o(8944),l=o(3892),a=o(1640),u=o(2399),s=o(2709),m=o(765);function d(t){return(0,m.Z)("MuiSvgIcon",t)}(0,o(2897).Z)("MuiSvgIcon",["root","colorPrimary","colorSecondary","colorAction","colorError","colorDisabled","fontSizeInherit","fontSizeSmall","fontSizeMedium","fontSizeLarge"]);var f=o(4246);const h=["children","className","color","component","fontSize","htmlColor","inheritViewBox","titleAccess","viewBox"],p=(0,s.ZP)("svg",{name:"MuiSvgIcon",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:o}=t;return[n.root,"inherit"!==o.color&&n[`color${(0,a.Z)(o.color)}`],n[`fontSize${(0,a.Z)(o.fontSize)}`]]}})((({theme:t,ownerState:n})=>{var o,e,r,c,i,l,a,u,s,m,d,f,h,p,v,z,g;return{userSelect:"none",width:"1em",height:"1em",display:"inline-block",fill:"currentColor",flexShrink:0,transition:null==(o=t.transitions)||null==(e=o.create)?void 0:e.call(o,"fill",{duration:null==(r=t.transitions)||null==(c=r.duration)?void 0:c.shorter}),fontSize:{inherit:"inherit",small:(null==(i=t.typography)||null==(l=i.pxToRem)?void 0:l.call(i,20))||"1.25rem",medium:(null==(a=t.typography)||null==(u=a.pxToRem)?void 0:u.call(a,24))||"1.5rem",large:(null==(s=t.typography)||null==(m=s.pxToRem)?void 0:m.call(s,35))||"2.1875"}[n.fontSize],color:null!=(d=null==(f=t.palette)||null==(h=f[n.color])?void 0:h.main)?d:{action:null==(p=t.palette)||null==(v=p.action)?void 0:v.active,disabled:null==(z=t.palette)||null==(g=z.action)?void 0:g.disabled,inherit:void 0}[n.color]}})),v=c.forwardRef((function(t,n){const o=(0,u.Z)({props:t,name:"MuiSvgIcon"}),{children:c,className:s,color:m="inherit",component:v="svg",fontSize:z="medium",htmlColor:g,inheritViewBox:Z=!1,titleAccess:w,viewBox:M="0 0 24 24"}=o,S=(0,r.Z)(o,h),x=(0,e.Z)({},o,{color:m,component:v,fontSize:z,instanceFontSize:t.fontSize,inheritViewBox:Z,viewBox:M}),y={};Z||(y.viewBox=M);const b=(t=>{const{color:n,fontSize:o,classes:e}=t,r={root:["root","inherit"!==n&&`color${(0,a.Z)(n)}`,`fontSize${(0,a.Z)(o)}`]};return(0,l.Z)(r,d,e)})(x);return(0,f.jsxs)(p,(0,e.Z)({as:v,className:(0,i.Z)(b.root,s),ownerState:x,focusable:"false",color:g,"aria-hidden":!w||void 0,role:w?"img":void 0,ref:n},y,S,{children:[c,w?(0,f.jsx)("title",{children:w}):null]}))}));v.muiName="SvgIcon";var z=v},3126:function(t,n,o){const e=(0,o(2905).Z)();n.Z=e},2709:function(t,n,o){o.d(n,{FO:function(){return c}});var e=o(8551),r=o(3126);const c=t=>(0,e.x9)(t)&&"classes"!==t,i=(0,e.ZP)({defaultTheme:r.Z,rootShouldForwardProp:c});n.ZP=i},2399:function(t,n,o){o.d(n,{Z:function(){return i}});var e=o(9267),r=o(6206);var c=o(3126);function i({props:t,name:n}){return function({props:t,name:n,defaultTheme:o}){const c=(0,r.Z)(o);return(0,e.Z)({theme:c,name:n,props:t})}({props:t,name:n,defaultTheme:c.Z})}},1640:function(t,n,o){var e=o(9490);n.Z=e.Z},8551:function(t,n,o){o.d(n,{ZP:function(){return g},x9:function(){return v}});var e=o(5773),r=o(808),c=o(5642),i=o(7011),l=o(9490);const a=["variant"];function u(t){return 0===t.length}function s(t){const{variant:n}=t,o=(0,r.Z)(t,a);let e=n||"";return Object.keys(o).sort().forEach((n=>{e+="color"===n?u(e)?t[n]:(0,l.Z)(t[n]):`${u(e)?n:(0,l.Z)(n)}${(0,l.Z)(t[n].toString())}`})),e}var m=o(1652);const d=["name","slot","skipVariantsResolver","skipSx","overridesResolver"],f=["theme"],h=["theme"];function p(t){return 0===Object.keys(t).length}function v(t){return"ownerState"!==t&&"theme"!==t&&"sx"!==t&&"as"!==t}const z=(0,i.Z)();function g(t={}){const{defaultTheme:n=z,rootShouldForwardProp:o=v,slotShouldForwardProp:i=v,styleFunctionSx:l=m.Z}=t;return(t,a={})=>{const{name:u,slot:m,skipVariantsResolver:z,skipSx:g,overridesResolver:Z}=a,w=(0,r.Z)(a,d),M=void 0!==z?z:m&&"Root"!==m||!1,S=g||!1;let x=v;"Root"===m?x=o:m&&(x=i);const y=(0,c.ZP)(t,(0,e.Z)({shouldForwardProp:x,label:undefined},w)),b=(t,...o)=>{const c=o?o.map((t=>"function"==typeof t&&t.__emotion_real!==t?o=>{let{theme:c}=o,i=(0,r.Z)(o,f);return t((0,e.Z)({theme:p(c)?n:c},i))}:t)):[];let i=t;u&&Z&&c.push((t=>{const o=p(t.theme)?n:t.theme,e=((t,n)=>n.components&&n.components[t]&&n.components[t].styleOverrides?n.components[t].styleOverrides:null)(u,o);if(e){const n={};return Object.entries(e).forEach((([o,e])=>{n[o]="function"==typeof e?e(t):e})),Z(t,n)}return null})),u&&!M&&c.push((t=>{const o=p(t.theme)?n:t.theme;return((t,n,o,e)=>{var r,c;const{ownerState:i={}}=t,l=[],a=null==o||null==(r=o.components)||null==(c=r[e])?void 0:c.variants;return a&&a.forEach((o=>{let e=!0;Object.keys(o.props).forEach((n=>{i[n]!==o.props[n]&&t[n]!==o.props[n]&&(e=!1)})),e&&l.push(n[s(o.props)])})),l})(t,((t,n)=>{let o=[];n&&n.components&&n.components[t]&&n.components[t].variants&&(o=n.components[t].variants);const e={};return o.forEach((t=>{const n=s(t.props);e[n]=t.style})),e})(u,o),o,u)})),S||c.push((t=>{const o=p(t.theme)?n:t.theme;return l((0,e.Z)({},t,{theme:o}))}));const a=c.length-o.length;if(Array.isArray(t)&&a>0){const n=new Array(a).fill("");i=[...t,...n],i.raw=[...t.raw,...n]}else"function"==typeof t&&t.__emotion_real!==t&&(i=o=>{let{theme:c}=o,i=(0,r.Z)(o,h);return t((0,e.Z)({theme:p(c)?n:c},i))});return y(i,...c)};return y.withConfig&&(b.withConfig=y.withConfig),b}}},9267:function(t,n,o){o.d(n,{Z:function(){return r}});var e=o(1923);function r(t){const{theme:n,name:o,props:r}=t;return n&&n.components&&n.components[o]&&n.components[o].defaultProps?(0,e.Z)(n.components[o].defaultProps,r):r}},1923:function(t,n,o){o.d(n,{Z:function(){return r}});var e=o(5773);function r(t,n){const o=(0,e.Z)({},n);return Object.keys(t).forEach((n=>{void 0===o[n]&&(o[n]=t[n])})),o}},2032:function(t,n,o){o.d(n,{X8f:function(){return r}});var e=o(5668);function r(t){return(0,e.w_)({tag:"svg",attr:{version:"1",viewBox:"0 0 48 48",enableBackground:"new 0 0 48 48"},child:[{tag:"path",attr:{fill:"#90A4AE",d:"M40,35v5H8v-5H4v5c0,2.2,1.8,4,4,4h32c2.2,0,4-1.8,4-4v-5H40z"}},{tag:"g",attr:{fill:"#1565C0"},child:[{tag:"polygon",attr:{points:"24,23.4 17,15 31,15"}},{tag:"rect",attr:{x:"22",y:"4",width:"4",height:"14"}},{tag:"path",attr:{d:"M31.5,26.9L30.8,28l3.5,1.9l0.6-1.2c1.6-3,2.6-4.7,3.5-5.2C39.3,23,41,23,44,23v-4 C36.3,19,35.6,19.4,31.5,26.9z"}},{tag:"polygon",attr:{points:"38.4,31 29.4,35 28,25"}},{tag:"path",attr:{d:"M16.5,26.9l0.6,1.2L13.6,30L13,28.8c-1.6-3-2.6-4.7-3.5-5.2C8.7,23,7,23,4,23v-4 C11.7,19,12.4,19.4,16.5,26.9z"}},{tag:"polygon",attr:{points:"20,25 18.6,35 9.6,31"}}]}]})(t)}},6688:function(t,n,o){o.d(n,{AZq:function(){return c},b1x:function(){return r}});var e=o(5668);function r(t){return(0,e.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M259.9 22.6c-8.4 13.1-16.5 26.3-20.5 39.2 5.3 4.32 10 8.63 14 13.4 5.9-3.56 12.1-6.61 17.7-9.1-.6-14.5-5.6-28.6-11.2-43.5zm-48.8 42.6c-.6 5.7 0 12.9 2.2 19.8 9.6 4.87 17.2 10.27 24.7 16.6 2.6-3.2 4.1-7.3 2.4-13.3-7.8-10.13-18.3-17.9-29.3-23.1zM45.6 70.8c1.2 15.6 2.8 30.9 7.3 43.6 6.93 0 12.96 1.1 19.2 2.3 2.21-6.2 5.6-12.4 8.6-17.9-9.2-11.3-21.6-19.5-35.1-28zm305 .5c-10.2 11.9-20 23.9-25.8 36 4.6 5.1 8.8 9.7 12 15.2 6.3-2.6 12.8-4.8 18.7-6.5 1.5-14.5-1.4-29.2-4.9-44.7zm-53.3 6.6c-12.8 2.1-24 5.79-35 13.3-3.4 5.4-3 9.8-1.3 13.7 9-3.8 19.3-7.28 28.2-8.5 4.3-5.9 6.9-12.9 8.1-18.5zm-176 1.4c1.3 15.6 2.7 30.9 7.3 43.6 6.8.3 13.2.9 19.3 2.3 2.5-6.4 5.5-12.6 8.6-18-9.2-11.2-21.7-19.5-35.2-27.9zM468.8 85c-13.2 8.5-26 17.1-35.1 27.1 2.9 6.2 5.6 11.9 7.1 18 7-.8 13.8-1.1 19.9-.9 5.6-13.4 7-28.3 8.1-44.2zM104.6 96.8c-8.21 7.1-13.83 19.1-15.6 27.1.1 2.4.7 4.3 1.4 5.9 6.22-3.3 13.4-5.2 19.3-6-2.6-8.9-4.1-18-5.1-27zm79.9 4c-10.2 10-17.3 23.1-19.8 31.6.5 6.6 3.5 9.9 7.1 12 4.9-8.6 11-17.5 17.4-24-.2-7.2-2.2-14.4-4.7-19.6zm21.4 1c-.3 2.7-.2 5 .3 7.5 7.1 5.9 12.9 14.3 15.4 21.7 3.7 2.6 7.3 5.3 10.5 8 3-3.2 4.9-7.5 3.1-14.1-7.9-10.1-18.4-17.7-29.3-23.1zm200.7 1.6c-2.8 4.9-5.4 11.7-6.2 18.9 6.6 8.5 11.6 16.4 15.5 25.4 3.6-1.8 6.6-4.8 7.7-10.9-1.1-6.5-4.1-13.2-7-18.6-2.9-5.5-6.6-10.8-10-14.8zm-114.5 11.1c-13.7 2.9-26.1 6.8-34.9 13.3-2.6 4.9-3.4 10.8-.9 15.1 8.5-3.6 18.1-6.7 26.4-8.2 4.4-5.9 7.9-13.5 9.4-20.2zm18.2 3.7c-1 5.2-3 10.3-5.5 15.3 4.9 4.3 9.3 8.5 13.2 13.1 3-2.8 5-6.7 4.3-12.8-2.7-5.3-7.7-11.2-12-15.6zm56.8 14c-8.1 1.1-15.9 3.8-23.5 7.3-4.2 5-4.5 9.5-3.4 13.6 5.5-1.7 11-2.6 16.2-3.6 2.3-2.3 4.6-3.9 7.3-5.9.8-3.9 1.9-7.8 3.4-11.4zm-334.8 2c3 4.8 7.8 10.3 13.7 14.5 10.58-2 19.99-2.1 29.8-1.7.1-4-1.1-8.2-6.1-12-11.37-3.1-25.19-3.3-37.4-.8zm170.2-1.1c-9 8.9-16.6 21.4-19.9 31.8 1 5.5 3.9 10.6 8.4 12.5 4.7-7.9 10.3-16.3 16.1-22.4-.2-7.6-1.8-15.6-4.6-21.9zm184.1 1.4c-3.5 7.3-5.8 14.1-6.4 20.9 6.3 8 10.6 15.5 14.6 23.9 5.4-3.3 7.9-6.9 8.8-11.4-2.9-12.6-9.1-24-17-33.4zm-278.5 8.2c2.9 4.8 7.7 10.3 13.6 14.5 10.6-1.8 20-2.5 29.8-1.7.2-4.1-1.2-8.3-6.1-12.1-11.4-3-25-3.3-37.3-.7zm332.9 6.8c-5.3 3.8-5.5 6.6-5.7 10.8 2.7 0 5.6.2 8.4.4 7.1.7 14.2 1.7 20.8 3.6 6.4-3.6 11.8-8.8 15.2-13.4-9.7-3-27.8-5.3-38.7-1.4zm-154 3.1c-12.5 2.3-26 6.2-35 13.5-5 8.2-1.1 15.9 4 20 6.8.3 15.9-5.5 22.6-14.6 4.4-6 7.2-13.1 8.4-18.9zm17.6 6c-1.3 5.3-3.5 10.5-6.3 15.5 3.1 2.9 6.1 5.8 8.7 8.8 3.4-2.9 5.9-6.8 5.1-13.6-1.9-3.7-4.7-7.4-7.5-10.7zm-254.3 8c3.1 5 8.1 10.7 14.3 14.9l.9.6c10.08-1.8 18.95-2 28.2-1.6.4-4.4-.6-9-6-13.2-11.43-3-25.15-3.2-37.4-.7zm171.1 0c-10.1 6.6-17.7 26.1-19.8 31.7 1.2 9.3 7.2 13.5 15.3 13.7 11.5-12.3 10.9-31.2 4.5-45.4zm-4.5 45.4l-.1.1c.1 0 .1-.1.1-.1zM366 167.1c-2.9 5.1-5.6 12.1-6.3 19.6-1.2 11.3 1.7 21.7 7 26 8.7-1.1 14.5-3.2 16.3-12.2-1.1-6.4-4.1-13.1-7-18.6-2.9-5.5-6.6-10.8-10-14.8zm-21.5 3.4c-3.6.7-9.8 4-11.1 4.6-3.1 4.6-4.9 10.3-2.9 14.9 3.9-1 7.4-2 11-2.6.5-5.8 1.6-12 3-16.9zM126 175.1c4.6 6.5 9.8 11.6 15.3 15.5 9.7-1.5 20-1.9 28.2-1.7.3-4.3-.7-9-6.1-13.2-11.4-3-25.1-3.1-37.4-.6zm296.5 4.4c-5.4 4-7.2 8.2-7.2 13.4 9.2.3 19.2 1.5 27.3 3.6 6.5-3.8 12.9-9 17.1-14.5-10.6-5-27.8-4.9-37.2-2.5zm-134.9 9.2c-3.7 4-7.8 7.5-12.4 10.2 1.9 8.1 7.4 20.9 14.4 24.1-1-.4 3.7-.2 7.1-3 11.6-12.9 1.4-20.8-9.1-31.3zM69.2 200.1c3.1 5 8.1 10.7 14.3 14.9 9.5 6.3 19.9 8.7 26.3 6.1-1 .4 2.4-2.7 2.8-7.1.4-4.4-.7-9-6.1-13.2-11.37-3-25.07-3.2-37.3-.7zm173.9-.7c-.3 1.5-.6 2.9-1 4.4l1.1 137.1c6-.1 12-.2 18-.1l-1-127.9c-1-2.9-1.8-5.9-2.4-8.8-5.4.2-11.2-1.8-14.7-4.7zm99.7 6.2c-6.7.9-15.9 4.6-19.8 6.7-6.3 8.3-3.6 15.2 1.1 20.5 10-.5 20.1-6.3 25.3-12.3-3.2-4.4-5.3-9.6-6.6-14.9zm-197.9 3c3.1 5 8.1 10.7 14.3 14.9 9.4 6.3 20 8.7 26.3 6.1 3.2-8.3 4-14.5-3.2-20.3-11.4-3-25.2-3.2-37.4-.7zm249.8 16.1c0 4.4 3.1 7.8 2.1 7.3 6.1 3.1 16.8 1.7 26.8-3.9 6.5-3.6 12-8.8 15.5-13.5-14.4-3.2-43.6-9.5-44.4 10.1zm-264.8-5.1c-.6 3.5-1.7 6.8-3.5 9.7 20.3 36.9 37.7 77.7 51.6 117.6 5.8-1 11.9-1.8 18.2-2.6-11.8-34.7-26.4-70.1-43.3-103.5-8.8-5.6-17.9-13.4-23-21.2zm75.7 9.1c-.8 4-2.3 7.8-4.7 10.9 8.5 33.8 15 68.2 19.5 102.4 6-.5 12-.8 18.1-1-4.8-36.8-11.9-74-21.3-110.5-3.9.4-7.8-.4-11.6-1.8zM377 230c-4.2 1.2-8.4 1.7-12.5 1-19.9 35.2-38 74.2-51 113.8 6.3 1 12.4 2.1 18.2 3.4 12.4-37.4 29.5-74.6 48.5-108.2-1.7-3-2.7-6.4-3.2-10zm-72.5 6.6c-3.8 2.5-8 4.2-12.2 4.5-8.3 32.2-15.6 66-21.3 100 6.1.2 12.2.5 18.1 1 5.5-33 12.7-66.1 20.7-97.5-2.2-2.2-3.9-5-5.3-8zM169.9 366.9c-.4 11.7 4.7 24.4 16.5 36.2 48-9.1 97.8-10 145.1 3.2 12.5-10 17-21.1 17.8-34.6-56.8-15.2-121.5-16.3-179.4-4.8zm84.4 47.3c-9 0-18 .5-27 1.3 1.1 20.1 1.5 40 1.3 59.2-2.4-17.8-6.2-37.4-11.2-58.2-6 .7-12 1.5-18 2.5 5.6 22.5 9.7 43.6 12 62.1l17.2-2.1c-.1 2.8-.1 5.6-.2 8.4l18 .4c.2-7 .3-14.1.3-21.2l12.7-.2c-.1 7.8.1 15.5.4 23l18-.8c-1-23-.2-47.7 2-73.4-8.5-.7-17-1-25.5-1zm42.1 2.9c-3 21.6-3.9 42.9-2.1 63.3l18-1.6c-1.6-18.5-.8-38.2 2-58.4-5.9-1.3-11.9-2.4-17.9-3.3z"}}]})(t)}function c(t){return(0,e.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M255.55 22.36c-30.93 0-56 25.07-56 56 0 30.927 25.07 56 56 56 30.927 0 56-25.073 56-56 0-30.93-25.073-56-56-56zM105.067 144.47c-3.047.028-6.012.55-8.748 1.536-7.296 2.627-12.95 7.77-17.562 13.617-3.63 4.602-6.523 9.754-9.012 14.992-6.79-6.374-14.215-15.785-21.8-30.117l-15.91 8.418c10.115 19.112 20.597 31.962 31.292 40.066-.405 1.802-.907 3.66-1.164 5.364-2.005 13.302 2.913 24.966 9.637 34.736 5.34 7.757 11.825 14.87 18.132 22.367-7.497 15.76-11.35 32.49-11.368 49.366.07 28.777 11.283 56.823 32.082 80.243l3.655-13.117 17.34 4.832-25.13 90.18c20.857 6.423 41.04 6.52 61.62-1.072l18.727-66.73 17.33 4.865-8.892 31.69c17.887 4.99 36.674 7.578 55.607 7.657 12.386-.065 24.727-1.204 36.81-3.396l-8.942-39.63 17.558-3.963 14.996 66.473c24.936 11.267 48.496 10.575 72.764 1.222l-25.115-78.986 17.152-5.455 4.97 15.636c21.796-38.09 68.757-29.083 91.825-40.08 11.686-3.894 5.42-69.874 4.916-73.04-.38-2.39-29.734-3.818-40.16-2.248-5.975.9-16.344-12.078-27.39-27.597-5.387-10.488-12.357-20.405-20.753-29.527-3.988-5.276-2.735-3.092-6.533-6.474.715 6.697 2.12 12.306 4.152 16.23l-15.986 8.277c-7.378-14.252-7.98-32.853-5.662-52.858 1.583-13.67 4.81-27.957 9.03-41.733-11.81 6.755-22.626 17.48-32.02 30.586-13.665 19.064-24.126 42.55-30.647 62.644l-17.12-5.556c2.777-8.56 6.2-17.655 10.255-26.835-14.467-6.574-35.467-9.76-57.426-8.826-23.852 1.01-48.83 6.716-68.043 16.2l-7.97-16.143c22.13-10.923 49.122-16.934 75.25-18.043 3.267-.138 6.52-.203 9.747-.19 20.69.086 40.372 3.378 56.274 10.78 2.234-4.232 4.608-8.425 7.125-12.537-21.74-7.8-45.253-11.897-69.058-12.03-63.206.056-121.303 27.923-151.383 72.614-4.954-5.81-9.525-11.11-12.89-16-5.26-7.64-7.608-13.682-6.695-21.126 10.458 3.152 20.632 2.07 28.694-1.87 10.316-5.044 17.423-13.85 20.473-23.39 1.526-4.77 2.056-9.862.813-14.928-1.243-5.065-4.63-10.034-9.598-12.953-4.862-2.856-10.17-4.187-15.25-4.142zm.328 17.805c.328-.014.66-.005 1 .03 1.362.138 2.86.687 4.803 1.828.864.508.986.713 1.234 1.722.247 1.01.248 2.895-.475 5.157-1.447 4.523-5.713 10-11.235 12.7-4.346 2.125-9.372 2.917-15.66.847 2.174-5.033 4.823-9.984 7.824-13.787 3.257-4.13 6.74-6.828 9.528-7.832 1.045-.375 1.995-.623 2.978-.665zm278.153 98.647c8.835 0 16 7.163 16 16 0 8.836-7.165 16-16 16-8.838 0-16-7.164-16-16 0-8.837 7.162-16 16-16z"}}]})(t)}},5936:function(t,n,o){o.d(n,{GW7:function(){return r}});var e=o(5668);function r(t){return(0,e.w_)({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M448 183.8v-123A44.66 44.66 0 00403.29 16H280.36a30.62 30.62 0 00-21.51 8.89L13.09 270.58a44.86 44.86 0 000 63.34l117 117a44.84 44.84 0 0063.33 0l245.69-245.61A30.6 30.6 0 00448 183.8zM352 144a32 32 0 1132-32 32 32 0 01-32 32z"}},{tag:"path",attr:{d:"M496 64a16 16 0 00-16 16v127.37L218.69 468.69a16 16 0 1022.62 22.62l262-262A29.84 29.84 0 00512 208V80a16 16 0 00-16-16z"}}]})(t)}},4566:function(t,n,o){o.d(n,{o2E:function(){return r},uKV:function(){return c}});var e=o(5668);function r(t){return(0,e.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm3.3 14.71L11 12.41V7h2v4.59l3.71 3.71-1.42 1.41z"}}]})(t)}function c(t){return(0,e.w_)({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM5.23 7.75C6.1 8.62 6.7 9.74 6.91 11H4.07a8.12 8.12 0 011.16-3.25zM4.07 13h2.84a5.972 5.972 0 01-1.68 3.25A8.12 8.12 0 014.07 13zM11 19.93c-1.73-.22-3.29-1-4.49-2.14A7.952 7.952 0 008.93 13H11v6.93zM11 11H8.93A7.99 7.99 0 006.5 6.2 8.035 8.035 0 0111 4.07V11zm8.93 0h-2.84c.21-1.26.81-2.38 1.68-3.25.6.97 1.01 2.07 1.16 3.25zM13 4.07c1.73.22 3.29.99 4.5 2.13a7.99 7.99 0 00-2.43 4.8H13V4.07zm0 15.86V13h2.07a8.006 8.006 0 002.42 4.79A7.988 7.988 0 0113 19.93zm5.77-3.68A6.004 6.004 0 0117.09 13h2.84a8.12 8.12 0 01-1.16 3.25z"}}]})(t)}}}]);