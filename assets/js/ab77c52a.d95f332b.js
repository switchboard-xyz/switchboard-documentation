"use strict";(self.webpackChunk_switchboard_xyz_v2_docs=self.webpackChunk_switchboard_xyz_v2_docs||[]).push([[4469],{5318:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return h}});var a=r(7378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(r),h=n,f=u["".concat(s,".").concat(h)]||u[h]||p[h]||i;return r?a.createElement(f,o(o({ref:t},d),{},{components:r})):a.createElement(f,o({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},755:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return d}});var a=r(5773),n=r(808),i=(r(7378),r(5318)),o=["components"],l={},s=void 0,c={unversionedId:"switchboardv2-api/interfaces/LeaseWithdrawParams",id:"switchboardv2-api/interfaces/LeaseWithdrawParams",title:"LeaseWithdrawParams",description:"@switchboard-xyz/switchboard-v2 / LeaseWithdrawParams",source:"@site/api/switchboardv2-api/interfaces/LeaseWithdrawParams.md",sourceDirName:"switchboardv2-api/interfaces",slug:"/switchboardv2-api/interfaces/LeaseWithdrawParams",permalink:"/api/switchboardv2-api/interfaces/LeaseWithdrawParams",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"LeaseInitParams",permalink:"/api/switchboardv2-api/interfaces/LeaseInitParams"},next:{title:"OracleInitParams",permalink:"/api/switchboardv2-api/interfaces/OracleInitParams"}},d=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Properties",id:"properties",children:[],level:3}],level:2},{value:"Properties",id:"properties-1",children:[{value:"amount",id:"amount",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"withdrawAuthority",id:"withdrawauthority",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"withdrawWallet",id:"withdrawwallet",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3}],level:2}],p={toc:d};function u(e){var t=e.components,r=(0,n.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/api/switchboardv2-api"},"@switchboard-xyz/switchboard-v2")," / LeaseWithdrawParams"),(0,i.kt)("h1",{id:"interface-leasewithdrawparams"},"Interface: LeaseWithdrawParams"),(0,i.kt)("p",null,"Parameters for withdrawing from a LeaseAccount"),(0,i.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,i.kt)("h3",{id:"properties"},"Properties"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/switchboardv2-api/interfaces/LeaseWithdrawParams#amount"},"amount")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/switchboardv2-api/interfaces/LeaseWithdrawParams#withdrawauthority"},"withdrawAuthority")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/api/switchboardv2-api/interfaces/LeaseWithdrawParams#withdrawwallet"},"withdrawWallet"))),(0,i.kt)("h2",{id:"properties-1"},"Properties"),(0,i.kt)("h3",{id:"amount"},"amount"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"amount"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"BN")),(0,i.kt)("p",null,"Token amount to withdraw from the lease escrow"),(0,i.kt)("h4",{id:"defined-in"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz/switchboardv2-api/blob/dad46fc4/src/sbv2.ts#L1934"},"sbv2.ts:1934")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"withdrawauthority"},"withdrawAuthority"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"withdrawAuthority"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"Keypair")),(0,i.kt)("p",null,"The withdraw authority of the lease"),(0,i.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz/switchboardv2-api/blob/dad46fc4/src/sbv2.ts#L1942"},"sbv2.ts:1942")),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"withdrawwallet"},"withdrawWallet"),(0,i.kt)("p",null,"\u2022 ",(0,i.kt)("strong",{parentName:"p"},"withdrawWallet"),": ",(0,i.kt)("inlineCode",{parentName:"p"},"PublicKey")),(0,i.kt)("p",null,"The wallet to withdraw to."),(0,i.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz/switchboardv2-api/blob/dad46fc4/src/sbv2.ts#L1938"},"sbv2.ts:1938")))}u.isMDXComponent=!0}}]);