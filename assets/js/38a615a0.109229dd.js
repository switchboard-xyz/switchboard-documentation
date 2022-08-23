"use strict";(self.webpackChunk_switchboard_xyz_v2_docs=self.webpackChunk_switchboard_xyz_v2_docs||[]).push([[2419],{5318:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var r=a(7378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),s=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(a),h=n,m=d["".concat(i,".").concat(h)]||d[h]||u[h]||o;return a?r.createElement(m,c(c({ref:t},p),{},{components:a})):r.createElement(m,c({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var s=2;s<o;s++)c[s]=a[s];return r.createElement.apply(null,c)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2082:function(e,t,a){a.r(t),a.d(t,{contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return h}});var r=a(5773),n=a(808),o=(a(7378),a(5318)),c=["components"],l={toc:[{value:"<code>sbv2 oracle:balance ORACLEKEY</code>",id:"sbv2-oraclebalance-oraclekey",children:[],level:2},{value:"<code>sbv2 oracle:create QUEUEKEY</code>",id:"sbv2-oraclecreate-queuekey",children:[],level:2},{value:"<code>sbv2 oracle:deposit ORACLEKEY AMOUNT</code>",id:"sbv2-oracledeposit-oraclekey-amount",children:[],level:2},{value:"<code>sbv2 oracle:withdraw ORACLEKEY AMOUNT</code>",id:"sbv2-oraclewithdraw-oraclekey-amount",children:[],level:2}]};function i(e){var t=e.components,a=(0,n.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"interact with a switchboard oracle account"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#sbv2-oraclebalance-oraclekey"},(0,o.kt)("inlineCode",{parentName:"a"},"sbv2 oracle:balance ORACLEKEY"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#sbv2-oraclecreate-queuekey"},(0,o.kt)("inlineCode",{parentName:"a"},"sbv2 oracle:create QUEUEKEY"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#sbv2-oracledeposit-oraclekey-amount"},(0,o.kt)("inlineCode",{parentName:"a"},"sbv2 oracle:deposit ORACLEKEY AMOUNT"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#sbv2-oraclewithdraw-oraclekey-amount"},(0,o.kt)("inlineCode",{parentName:"a"},"sbv2 oracle:withdraw ORACLEKEY AMOUNT")))),(0,o.kt)("h2",{id:"sbv2-oraclebalance-oraclekey"},(0,o.kt)("inlineCode",{parentName:"h2"},"sbv2 oracle:balance ORACLEKEY")),(0,o.kt)("p",null,"check an oracles token balance"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"USAGE\n  $ sbv2 oracle:balance ORACLEKEY\n\nARGUMENTS\n  ORACLEKEY  public key of the oracle to check token balance\n\nOPTIONS\n  -h, --help             show CLI help\n\n  -k, --keypair=keypair  keypair that will pay for onchain transactions. defaults to new account authority if no\n                         alternate authority provided\n\n  -s, --silent           suppress cli prompts\n\n  -u, --rpcUrl=rpcUrl    alternate RPC url\n\n  -v, --verbose          log everything\n\n  --mainnetBeta          WARNING: use mainnet-beta solana cluster\n\nEXAMPLE\n  $ sbv2 oracle:balance 9CmLriMhykZ8xAoNTSHjHbk6SkuMhie1NCZn9P6LCuZ4\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"See code: ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/switchboard-xyz/switchboardv2-cli/blob/v0.1.4/src/commands/oracle/balance.ts"},"src/commands/oracle/balance.ts"))),(0,o.kt)("h2",{id:"sbv2-oraclecreate-queuekey"},(0,o.kt)("inlineCode",{parentName:"h2"},"sbv2 oracle:create QUEUEKEY")),(0,o.kt)("p",null,"create a new oracle account for a given queue"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"USAGE\n  $ sbv2 oracle:create QUEUEKEY\n\nARGUMENTS\n  QUEUEKEY  public key of the oracle queue to join\n\nOPTIONS\n  -a, --authority=authority  keypair to delegate authority to for managing the oracle account\n  -h, --help                 show CLI help\n\n  -k, --keypair=keypair      keypair that will pay for onchain transactions. defaults to new account authority if no\n                             alternate authority provided\n\n  -n, --name=name            name of the oracle for easier identification\n\n  -s, --silent               suppress cli prompts\n\n  -u, --rpcUrl=rpcUrl        alternate RPC url\n\n  -v, --verbose              log everything\n\n  --mainnetBeta              WARNING: use mainnet-beta solana cluster\n\nEXAMPLES\n  $ sbv2 oracle:create GhYg3R1V6DmJbwuc57qZeoYG6gUuvCotUF1zU3WCj98U --keypair ../payer-and-authority-keypair.json\n  $ sbv2 oracle:create GhYg3R1V6DmJbwuc57qZeoYG6gUuvCotUF1zU3WCj98U --name=oracle-1  --keypair \n  ../payer-and-authority-keypair.json\n  $ sbv2 oracle:create GhYg3R1V6DmJbwuc57qZeoYG6gUuvCotUF1zU3WCj98U --keypair ../payer-keypair.json --authority \n  ../oracle-keypair.json\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"See code: ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/switchboard-xyz/switchboardv2-cli/blob/v0.1.4/src/commands/oracle/create.ts"},"src/commands/oracle/create.ts"))),(0,o.kt)("h2",{id:"sbv2-oracledeposit-oraclekey-amount"},(0,o.kt)("inlineCode",{parentName:"h2"},"sbv2 oracle:deposit ORACLEKEY AMOUNT")),(0,o.kt)("p",null,"deposit tokens into an oracle's token wallet"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"USAGE\n  $ sbv2 oracle:deposit ORACLEKEY AMOUNT\n\nARGUMENTS\n  ORACLEKEY  public key of the oracle to deposit funds into\n  AMOUNT     amount to deposit into oracle's token wallet\n\nOPTIONS\n  -h, --help             show CLI help\n\n  -k, --keypair=keypair  keypair that will pay for onchain transactions. defaults to new account authority if no\n                         alternate authority provided\n\n  -s, --silent           suppress cli prompts\n\n  -u, --rpcUrl=rpcUrl    alternate RPC url\n\n  -v, --verbose          log everything\n\n  --mainnetBeta          WARNING: use mainnet-beta solana cluster\n\nEXAMPLE\n  $ sbv2 oracle:deposit 6kPsQoufdugtHLjM4fH7Z2fNv7jLt5pgvwKHt5JvRhQ6 2500 --keypair ../payer-keypair.json\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"See code: ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/switchboard-xyz/switchboardv2-cli/blob/v0.1.4/src/commands/oracle/deposit.ts"},"src/commands/oracle/deposit.ts"))),(0,o.kt)("h2",{id:"sbv2-oraclewithdraw-oraclekey-amount"},(0,o.kt)("inlineCode",{parentName:"h2"},"sbv2 oracle:withdraw ORACLEKEY AMOUNT")),(0,o.kt)("p",null,"withdraw tokens from an oracle's token wallet"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"USAGE\n  $ sbv2 oracle:withdraw ORACLEKEY AMOUNT\n\nARGUMENTS\n  ORACLEKEY  public key of the oracle to withdraw from\n  AMOUNT     amount to withdraw from oracle's token wallet\n\nOPTIONS\n  -a, --authority=authority              keypair delegated as the authority for managing the oracle account\n  -f, --force                            skip minStake balance check. your oracle may be removed from the queue\n  -h, --help                             show CLI help\n\n  -k, --keypair=keypair                  keypair that will pay for onchain transactions. defaults to new account\n                                         authority if no alternate authority provided\n\n  -s, --silent                           suppress cli prompts\n\n  -u, --rpcUrl=rpcUrl                    alternate RPC url\n\n  -v, --verbose                          log everything\n\n  -w, --withdrawAccount=withdrawAccount  optional solana pubkey or keypair filesystem path to withdraw funds to. default\n                                         destination is oracle authority's token wallet\n\n  --mainnetBeta                          WARNING: use mainnet-beta solana cluster\n\nEXAMPLES\n  $ sbv2 oracle:withdraw 6kPsQoufdugtHLjM4fH7Z2fNv7jLt5pgvwKHt5JvRhQ6 2500 --keypair ../oracle-keypair.json\n  $ sbv2 oracle:withdraw 6kPsQoufdugtHLjM4fH7Z2fNv7jLt5pgvwKHt5JvRhQ6 2500 --keypair ../payer-keypair.json --authority \n  ../oracle-keypair.json -w ByJs8E29jxvqf2KFLwfyiE2gUh5fivaS7aShcRMAsnzg\n")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"See code: ",(0,o.kt)("a",{parentName:"em",href:"https://github.com/switchboard-xyz/switchboardv2-cli/blob/v0.1.4/src/commands/oracle/withdraw.ts"},"src/commands/oracle/withdraw.ts"))))}i.isMDXComponent=!0;var s=["components"],p={sidebar_position:40,title:"sbv2 oracle"},u=void 0,d={unversionedId:"switchboardv2-cli/oracle",id:"switchboardv2-cli/oracle",title:"sbv2 oracle",description:"",source:"@site/api/switchboardv2-cli/oracle.mdx",sourceDirName:"switchboardv2-cli",slug:"/switchboardv2-cli/oracle",permalink:"/api/switchboardv2-cli/oracle",tags:[],version:"current",sidebarPosition:40,frontMatter:{sidebar_position:40,title:"sbv2 oracle"},sidebar:"tutorialSidebar",previous:{title:"sbv2 crank",permalink:"/api/switchboardv2-cli/crank"},next:{title:"sbv2 queue",permalink:"/api/switchboardv2-cli/queue"}},h=[],m={toc:h};function b(e){var t=e.components,a=(0,n.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i,{mdxType:"Sbv2Oracle"}))}b.isMDXComponent=!0}}]);