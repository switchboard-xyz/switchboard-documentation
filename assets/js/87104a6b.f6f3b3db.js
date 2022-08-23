"use strict";(self.webpackChunk_switchboard_xyz_v2_docs=self.webpackChunk_switchboard_xyz_v2_docs||[]).push([[7991],{5318:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var n=r(7378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=l(r),d=a,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||o;return r?n.createElement(h,u(u({ref:t},s),{},{components:r})):n.createElement(h,u({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,u[1]=i;for(var l=2;l<o;l++)u[l]=r[l];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},979:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return p},default:function(){return k},frontMatter:function(){return s},metadata:function(){return m},toc:function(){return d}});var n=r(5773),a=r(808),o=(r(7378),r(5318)),u=["components"],i={toc:[{value:"<code>sbv2 queue:add:crank QUEUEKEY</code>",id:"sbv2-queueaddcrank-queuekey",children:[],level:2},{value:"<code>sbv2 queue:create</code>",id:"sbv2-queuecreate",children:[],level:2},{value:"<code>sbv2 queue:permit:aggregator AGGREGATORKEY</code>",id:"sbv2-queuepermitaggregator-aggregatorkey",children:[],level:2},{value:"<code>sbv2 queue:permit:oracle ORACLEKEY</code>",id:"sbv2-queuepermitoracle-oraclekey",children:[],level:2}]};function c(e){var t=e.components,r=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,n.Z)({},i,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"interact with a switchboard oracle queue account"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#sbv2-queueaddcrank-queuekey"},(0,o.kt)("inlineCode",{parentName:"a"},"sbv2 queue:add:crank QUEUEKEY"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#sbv2-queuecreate"},(0,o.kt)("inlineCode",{parentName:"a"},"sbv2 queue:create"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#sbv2-queuepermitaggregator-aggregatorkey"},(0,o.kt)("inlineCode",{parentName:"a"},"sbv2 queue:permit:aggregator AGGREGATORKEY"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#sbv2-queuepermitoracle-oraclekey"},(0,o.kt)("inlineCode",{parentName:"a"},"sbv2 queue:permit:oracle ORACLEKEY")))),(0,o.kt)("h2",{id:"sbv2-queueaddcrank-queuekey"},(0,o.kt)("inlineCode",{parentName:"h2"},"sbv2 queue:add:crank QUEUEKEY")),(0,o.kt)("p",null,"add a crank to an existing oracle queue"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"USAGE\n  $ sbv2 queue:add:crank QUEUEKEY\n\nARGUMENTS\n  QUEUEKEY  public key of the oracle queue to create a crank on\n\nOPTIONS\n  -h, --help             show CLI help\n\n  -k, --keypair=keypair  keypair that will pay for onchain transactions. defaults to new account authority if no\n                         alternate authority provided\n\n  -n, --name=name        name of the crank for easier identification\n\n  -r, --maxRows=maxRows  maximum number of rows a crank can support\n\n  -s, --silent           suppress cli prompts\n\n  -u, --rpcUrl=rpcUrl    alternate RPC url\n\n  -v, --verbose          log everything\n\n  --mainnetBeta          WARNING: use mainnet-beta solana cluster\n\nEXAMPLE\n  $ sbv2 queue:add:crank 5aYuxRdcB9GpWrEXVMBQp2R5uf94uoBiFdMEBwcmHuU4 -k ../authority-keypair.json -n crank-1\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"See code: ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/switchboard-xyz/switchboardv2-cli/blob/v0.1.4/src/commands/queue/add/crank.ts"},"src/commands/queue/add/crank.ts"))),(0,o.kt)("h2",{id:"sbv2-queuecreate"},(0,o.kt)("inlineCode",{parentName:"h2"},"sbv2 queue:create")),(0,o.kt)("p",null,"create an oracle queue"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"USAGE\n  $ sbv2 queue:create\n\nOPTIONS\n  -a, --authority=authority    keypair to delegate authority to for creating permissions targeted at the queue\n  -c, --numCranks=numCranks    number of cranks to add to the queue\n  -f, --outputFile=outputFile  output queue schema to a json file\n  -h, --help                   show CLI help\n\n  -k, --keypair=keypair        keypair that will pay for onchain transactions. defaults to new account authority if no\n                               alternate authority provided\n\n  -n, --name=name              name of the queue for easier identification\n\n  -o, --numOracles=numOracles  number of oracles to add to the queue\n\n  -r, --reward=reward          oracle rewards for successfully responding to an update request\n\n  -s, --silent                 suppress cli prompts\n\n  -u, --rpcUrl=rpcUrl          alternate RPC url\n\n  -v, --verbose                log everything\n\n  --force                      overwrite output file if existing\n\n  --mainnetBeta                WARNING: use mainnet-beta solana cluster\n\n  --minStake=minStake          minimum stake required by an oracle to join the queue\n\nEXAMPLES\n  $ sbv2 queue:create --keypair ../authority-keypair.json --name queue-1\n  $ sbv2 queue:create --keypair ../payer-keypair.json --name queue-1 --authority ../authority-keypair.json\n  $ sbv2 queue:create --keypair ../authority-keypair.json --name queue-1 --numCranks 1 --numOracles 1 --outputFile \n  new-queue.json\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"See code: ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/switchboard-xyz/switchboardv2-cli/blob/v0.1.4/src/commands/queue/create.ts"},"src/commands/queue/create.ts"))),(0,o.kt)("h2",{id:"sbv2-queuepermitaggregator-aggregatorkey"},(0,o.kt)("inlineCode",{parentName:"h2"},"sbv2 queue:permit:aggregator AGGREGATORKEY")),(0,o.kt)("p",null,"permit an aggregator to use an oracle queue's resources"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"USAGE\n  $ sbv2 queue:permit:aggregator AGGREGATORKEY\n\nARGUMENTS\n  AGGREGATORKEY  public key of the aggregator account to authorize oracle queue usage\n\nOPTIONS\n  -a, --authority=authority  alternate keypair that is the authority for oracle queue\n  -h, --help                 show CLI help\n\n  -k, --keypair=keypair      keypair that will pay for onchain transactions. defaults to new account authority if no\n                             alternate authority provided\n\n  -s, --silent               suppress cli prompts\n\n  -u, --rpcUrl=rpcUrl        alternate RPC url\n\n  -v, --verbose              log everything\n\n  --mainnetBeta              WARNING: use mainnet-beta solana cluster\n\nEXAMPLE\n  $ sbv2 queue:permit:aggregator 9CmLriMhykZ8xAoNTSHjHbk6SkuMhie1NCZn9P6LCuZ4 --keypair ../queue-authority.json\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"See code: ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/switchboard-xyz/switchboardv2-cli/blob/v0.1.4/src/commands/queue/permit/aggregator.ts"},"src/commands/queue/permit/aggregator.ts"))),(0,o.kt)("h2",{id:"sbv2-queuepermitoracle-oraclekey"},(0,o.kt)("inlineCode",{parentName:"h2"},"sbv2 queue:permit:oracle ORACLEKEY")),(0,o.kt)("p",null,"permit an oracle to heartbeat on a queue"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"USAGE\n  $ sbv2 queue:permit:oracle ORACLEKEY\n\nARGUMENTS\n  ORACLEKEY  public key of the oracle account to authorize oracle queue usage\n\nOPTIONS\n  -a, --authority=authority  alternate keypair that is the authority for oracle queue\n  -h, --help                 show CLI help\n\n  -k, --keypair=keypair      keypair that will pay for onchain transactions. defaults to new account authority if no\n                             alternate authority provided\n\n  -s, --silent               suppress cli prompts\n\n  -u, --rpcUrl=rpcUrl        alternate RPC url\n\n  -v, --verbose              log everything\n\n  --mainnetBeta              WARNING: use mainnet-beta solana cluster\n\nEXAMPLE\n  $ sbv2 queue:permit:oracle 9CmLriMhykZ8xAoNTSHjHbk6SkuMhie1NCZn9P6LCuZ4 --keypair ../queue-authority.json\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"See code: ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/switchboard-xyz/switchboardv2-cli/blob/v0.1.4/src/commands/queue/permit/oracle.ts"},"src/commands/queue/permit/oracle.ts"))))}c.isMDXComponent=!0;var l=["components"],s={sidebar_position:50,title:"sbv2 queue"},p=void 0,m={unversionedId:"switchboardv2-cli/queue",id:"switchboardv2-cli/queue",title:"sbv2 queue",description:"",source:"@site/api/switchboardv2-cli/queue.mdx",sourceDirName:"switchboardv2-cli",slug:"/switchboardv2-cli/queue",permalink:"/api/switchboardv2-cli/queue",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50,title:"sbv2 queue"},sidebar:"tutorialSidebar",previous:{title:"sbv2 oracle",permalink:"/api/switchboardv2-cli/oracle"},next:{title:"sbv2 json",permalink:"/api/switchboardv2-cli/json"}},d=[],h={toc:d};function k(e){var t=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},h,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(c,{mdxType:"Sbv2Queue"}))}k.isMDXComponent=!0}}]);