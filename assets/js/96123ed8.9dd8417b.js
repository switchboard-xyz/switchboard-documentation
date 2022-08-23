"use strict";(self.webpackChunk_switchboard_xyz_v2_docs=self.webpackChunk_switchboard_xyz_v2_docs||[]).push([[2762],{5318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,f=d["".concat(u,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3167:function(e,t,n){var r=n(7378);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},1884:function(e,t,n){n.d(t,{Z:function(){return d}});var r=n(5773),a=n(7378),o=n(4954),i=n(5880);var l=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=n(1050),s=n(8944),c="tabItem_vU9c";function p(e){var t,n,o,i=e.lazy,p=e.block,d=e.defaultValue,m=e.values,f=e.groupId,v=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,u.lx)(g,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===d?d:null!=(t=null!=d?d:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=h[0])?void 0:o.props.value;if(null!==y&&!g.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=l(),w=k.tabGroupChoices,N=k.setTabGroupChoices,O=(0,a.useState)(y),C=O[0],T=O[1],x=[],E=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var j=w[f];null!=j&&j!==C&&g.some((function(e){return e.value===j}))&&T(j)}var I=function(e){var t=e.currentTarget,n=x.indexOf(t),r=g[n].value;r!==C&&(E(t),T(r),null!=f&&N(f,r))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;n=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":p},v)},g.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return x.push(e)},onKeyDown:P,onFocus:I,onClick:I},o,{className:(0,s.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(h.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function d(e){var t=(0,o.Z)();return a.createElement(p,(0,r.Z)({key:String(t)},e))}},8619:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var r=n(5773),a=n(808),o=(n(7378),n(5318)),i=n(1884),l=n(3167),u=["components"],s={sidebar_position:80,slug:"/developers/cli",title:"CLI"},c="sbv2 CLI",p={unversionedId:"developers/cli",id:"developers/cli",title:"CLI",description:"The Switchboard V2 CLI provides an easy to use interface to setup and manage Switchboard onchain accounts.",source:"@site/docs/developers/cli.mdx",sourceDirName:"developers",slug:"/developers/cli",permalink:"/developers/cli",tags:[],version:"current",sidebarPosition:80,frontMatter:{sidebar_position:80,slug:"/developers/cli",title:"CLI"},sidebar:"tutorialSidebar",previous:{title:"Rust",permalink:"/developers/rs"},next:{title:"Switchboard DAO",permalink:"/dao"}},d=[{value:"Install",id:"install",children:[],level:2},{value:"Overview",id:"overview",children:[],level:2},{value:"Examples",id:"examples",children:[{value:"Print",id:"print",children:[],level:3},{value:"Create Aggregator",id:"create-aggregator",children:[],level:3}],level:2}],m={toc:d};function f(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"sbv2-cli"},"sbv2 CLI"),(0,o.kt)("p",null,"The Switchboard V2 CLI provides an easy to use interface to setup and manage Switchboard onchain accounts."),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("p",null,"Run the following command:"),(0,o.kt)(i.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"npm",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g @switchboard-xyz/switchboardv2-cli\n"))),(0,o.kt)(l.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add -g @switchboard-xyz/switchboardv2-cli\n")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Documentation:")," ",(0,o.kt)("a",{parentName:"p",href:"/api/switchboardv2-cli"},"/api/switchboardv2-cli")),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Keypairs")," The Switchboard V2 CLI lets you specify a keypair from an absolute or relative filesystem path as well as a Google Secret Manager secret. The following flags are common among most commands, with the exception of the print commands that require no keypairs:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--authority")," is the keypair that is or will be the authority for a given account. The authority is responsible for authorizing new permissions, changing an account, or withdrawing from a token account."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--keypair")," is required for any command that submits an onchain transaction such as creating accounts, turning the crank, or updating an account config. This keypair will default as the authority if the authority flag is not provided.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Token Amounts"),"\nAny commands that specify a token amount will be in integer format with no decimal. For instance, 1.5 wSOL would be normalized to 15000000, where wSOL has 8 decimals specified by the token mint."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Logging")," Most commands will have a ",(0,o.kt)("inlineCode",{parentName:"p"},"--silent"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"-s")," flag that will suppress console output and only output a new account public key to assist in scripting. A ",(0,o.kt)("inlineCode",{parentName:"p"},"--verbose"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"-v")," flag will do the opposite and log any debug or configuration information to help debug."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Help")," All commands can be run with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--help")," flag to print the available arguments and flags for a given command."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"print"},"Print"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# check account discriminator and print account information if found\nsbv2 print PUBLICKEY\n# print an oracle account by its public key\nsbv2 print:oracle ORACLEKEY\n# print an aggregator account and save to a JSON file\nsbv2 print:aggregator AGGREGATORKEY --outputFile outputFile.json\n")),(0,o.kt)("h3",{id:"create-aggregator"},"Create Aggregator"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# write sample json files to outputDirectory\nsbv2 print:json:samples outputDirectory\n# create aggregator from json\nsbv2 aggregator:create:json aggregator.json \\\n--keypair ../dev/switchboardxyz/payer-keypair.json \\\n--queueKey GhYg3R1V6DmJbwuc57qZeoYG6gUuvCotUF1zU3WCj98U \\\n--outputFile aggregator.schema.json\n")))}f.isMDXComponent=!0}}]);