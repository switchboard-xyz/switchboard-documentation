"use strict";(self.webpackChunk_switchboard_xyz_v2_docs=self.webpackChunk_switchboard_xyz_v2_docs||[]).push([[4572],{5318:function(e,r,n){n.d(r,{Zo:function(){return p},kt:function(){return b}});var t=n(7378);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function c(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function i(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=t.createContext({}),u=function(e){var r=t.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):c(c({},r),e)),n},p=function(e){var r=u(e.components);return t.createElement(l.Provider,{value:r},e.children)},s={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),b=a,v=d["".concat(l,".").concat(b)]||d[b]||s[b]||o;return n?t.createElement(v,c(c({ref:r},p),{},{components:n})):t.createElement(v,c({ref:r},p))}));function b(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=d;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return t.createElement.apply(null,c)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1950:function(e,r,n){n.r(r),n.d(r,{contentTitle:function(){return s},default:function(){return f},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return b}});var t=n(5773),a=n(808),o=(n(7378),n(5318)),c=["components"],i={toc:[{value:"<code>sbv2 crank:turn CRANKKEY</code>",id:"sbv2-crankturn-crankkey",children:[],level:2}]};function l(e){var r=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,t.Z)({},i,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"interact with a switchboard crank account"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#sbv2-crankturn-crankkey"},(0,o.kt)("inlineCode",{parentName:"a"},"sbv2 crank:turn CRANKKEY")))),(0,o.kt)("h2",{id:"sbv2-crankturn-crankkey"},(0,o.kt)("inlineCode",{parentName:"h2"},"sbv2 crank:turn CRANKKEY")),(0,o.kt)("p",null,"turn the crank and get rewarded if aggregator updates available"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"USAGE\n  $ sbv2 crank:turn CRANKKEY\n\nARGUMENTS\n  CRANKKEY  public key of the crank to turn\n\nOPTIONS\n  -h, --help             show CLI help\n\n  -k, --keypair=keypair  keypair that will pay for onchain transactions. defaults to new account authority if no\n                         alternate authority provided\n\n  -s, --silent           suppress cli prompts\n\n  -u, --rpcUrl=rpcUrl    alternate RPC url\n\n  -v, --verbose          log everything\n\n  --mainnetBeta          WARNING: use mainnet-beta solana cluster\n\nEXAMPLE\n  $ sbv2 crank:turn 85L2cFUvXaeGQ4HrzP8RJEVCL7WvRrXM2msvEmQ82AVr --keypair ../payer-keypair.json\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"See code: ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/switchboard-xyz/switchboardv2-cli/blob/v0.1.4/src/commands/crank/turn.ts"},"src/commands/crank/turn.ts"))))}l.isMDXComponent=!0;var u=["components"],p={sidebar_position:30,title:"sbv2 crank"},s=void 0,d={unversionedId:"switchboardv2-cli/crank",id:"switchboardv2-cli/crank",title:"sbv2 crank",description:"",source:"@site/api/switchboardv2-cli/crank.mdx",sourceDirName:"switchboardv2-cli",slug:"/switchboardv2-cli/crank",permalink:"/api/switchboardv2-cli/crank",tags:[],version:"current",sidebarPosition:30,frontMatter:{sidebar_position:30,title:"sbv2 crank"},sidebar:"tutorialSidebar",previous:{title:"sbv2 aggregator:lease",permalink:"/api/switchboardv2-cli/lease"},next:{title:"sbv2 oracle",permalink:"/api/switchboardv2-cli/oracle"}},b=[],v={toc:b};function f(e){var r=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,t.Z)({},v,n,{components:r,mdxType:"MDXLayout"}),(0,o.kt)(l,{mdxType:"Sbv2Crank"}))}f.isMDXComponent=!0}}]);