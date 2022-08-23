"use strict";(self.webpackChunk_switchboard_xyz_v2_docs=self.webpackChunk_switchboard_xyz_v2_docs||[]).push([[4486],{5318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),s=a,m=d["".concat(u,".").concat(s)]||d[s]||g[s]||o;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6701:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return u},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c}});var r=n(5773),a=n(808),o=(n(7378),n(5318)),l=["components"],i={},u=void 0,p={unversionedId:"idl/events/AggregatorOpenRoundEvent",id:"idl/events/AggregatorOpenRoundEvent",title:"AggregatorOpenRoundEvent",description:"OpenRound successfully called on an aggregator",source:"@site/api/idl/events/AggregatorOpenRoundEvent.md",sourceDirName:"idl/events",slug:"/idl/events/AggregatorOpenRoundEvent",permalink:"/api/idl/events/AggregatorOpenRoundEvent",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AggregatorInitEvent",permalink:"/api/idl/events/AggregatorInitEvent"},next:{title:"AggregatorValueUpdateEvent",permalink:"/api/idl/events/AggregatorValueUpdateEvent"}},c=[],g={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"OpenRound successfully called on an aggregator"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Name"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"feedPubkey"),(0,o.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,o.kt)("td",{parentName:"tr",align:null},"Public key of the aggregator requesting a new result")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"oraclePubkeys"),(0,o.kt)("td",{parentName:"tr",align:null},"publicKey[]"),(0,o.kt)("td",{parentName:"tr",align:null},"Oracles assigned to the update request")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"jobPubkeys"),(0,o.kt)("td",{parentName:"tr",align:null},"publicKey[]"),(0,o.kt)("td",{parentName:"tr",align:null},"Job accounts associated with an aggregator containing the job definitions")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"remainingFunds"),(0,o.kt)("td",{parentName:"tr",align:null},"u64"),(0,o.kt)("td",{parentName:"tr",align:null},"Remaining funds in the aggregators lease contract")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"queueAuthority"),(0,o.kt)("td",{parentName:"tr",align:null},"publicKey"),(0,o.kt)("td",{parentName:"tr",align:null},"The account delegated as the authority to for creating permissions targeted at the queue.")))))}d.isMDXComponent=!0}}]);