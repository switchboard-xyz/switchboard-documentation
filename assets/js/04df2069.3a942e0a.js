"use strict";(self.webpackChunk_switchboard_xyz_v2_docs=self.webpackChunk_switchboard_xyz_v2_docs||[]).push([[7880],{5318:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7378);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(r),f=i,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||a;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2971:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var n=r(5773),i=r(808),a=(r(7378),r(5318)),o=["components"],s={},c=void 0,l={unversionedId:"switchboardv2-api/interfaces/PermissionInitParams",id:"switchboardv2-api/interfaces/PermissionInitParams",title:"PermissionInitParams",description:"@switchboard-xyz/switchboard-v2 / PermissionInitParams",source:"@site/api/switchboardv2-api/interfaces/PermissionInitParams.md",sourceDirName:"switchboardv2-api/interfaces",slug:"/switchboardv2-api/interfaces/PermissionInitParams",permalink:"/api/switchboardv2-api/interfaces/PermissionInitParams",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"OracleWithdrawParams",permalink:"/api/switchboardv2-api/interfaces/OracleWithdrawParams"},next:{title:"PermissionSetParams",permalink:"/api/switchboardv2-api/interfaces/PermissionSetParams"}},p=[{value:"Table of contents",id:"table-of-contents",children:[{value:"Properties",id:"properties",children:[],level:3}],level:2},{value:"Properties",id:"properties-1",children:[{value:"authority",id:"authority",children:[{value:"Defined in",id:"defined-in",children:[],level:4}],level:3},{value:"grantee",id:"grantee",children:[{value:"Defined in",id:"defined-in-1",children:[],level:4}],level:3},{value:"granter",id:"granter",children:[{value:"Defined in",id:"defined-in-2",children:[],level:4}],level:3}],level:2}],u={toc:p};function d(e){var t=e.components,r=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/api/switchboardv2-api"},"@switchboard-xyz/switchboard-v2")," / PermissionInitParams"),(0,a.kt)("h1",{id:"interface-permissioninitparams"},"Interface: PermissionInitParams"),(0,a.kt)("p",null,"Parameters for initializing PermissionAccount"),(0,a.kt)("h2",{id:"table-of-contents"},"Table of contents"),(0,a.kt)("h3",{id:"properties"},"Properties"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/switchboardv2-api/interfaces/PermissionInitParams#authority"},"authority")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/switchboardv2-api/interfaces/PermissionInitParams#grantee"},"grantee")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/api/switchboardv2-api/interfaces/PermissionInitParams#granter"},"granter"))),(0,a.kt)("h2",{id:"properties-1"},"Properties"),(0,a.kt)("h3",{id:"authority"},"authority"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"authority"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"PublicKey")),(0,a.kt)("p",null,"The authority that is allowed to set permissions for this account."),(0,a.kt)("h4",{id:"defined-in"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz/switchboardv2-api/blob/dad46fc4/src/sbv2.ts#L1441"},"sbv2.ts:1441")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"grantee"},"grantee"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"grantee"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"PublicKey")),(0,a.kt)("p",null,"The receiving account of a permission."),(0,a.kt)("h4",{id:"defined-in-1"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz/switchboardv2-api/blob/dad46fc4/src/sbv2.ts#L1437"},"sbv2.ts:1437")),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"granter"},"granter"),(0,a.kt)("p",null,"\u2022 ",(0,a.kt)("strong",{parentName:"p"},"granter"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"PublicKey")),(0,a.kt)("p",null,"Pubkey of the account granting the permission."),(0,a.kt)("h4",{id:"defined-in-2"},"Defined in"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/switchboard-xyz/switchboardv2-api/blob/dad46fc4/src/sbv2.ts#L1433"},"sbv2.ts:1433")))}d.isMDXComponent=!0}}]);