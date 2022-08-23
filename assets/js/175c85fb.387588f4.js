"use strict";(self.webpackChunk_switchboard_xyz_v2_docs=self.webpackChunk_switchboard_xyz_v2_docs||[]).push([[5112],{5318:function(t,e,l){l.d(e,{Zo:function(){return k},kt:function(){return b}});var n=l(7378);function r(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function u(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function o(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?u(Object(l),!0).forEach((function(e){r(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):u(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function a(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},u=Object.keys(t);for(n=0;n<u.length;n++)l=u[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(t);for(n=0;n<u.length;n++)l=u[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}var i=n.createContext({}),c=function(t){var e=n.useContext(i),l=e;return t&&(l="function"==typeof t?t(e):o(o({},e),t)),l},k=function(t){var e=c(t.components);return n.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var l=t.components,r=t.mdxType,u=t.originalType,i=t.parentName,k=a(t,["components","mdxType","originalType","parentName"]),p=c(l),b=r,d=p["".concat(i,".").concat(b)]||p[b]||s[b]||u;return l?n.createElement(d,o(o({ref:e},k),{},{components:l})):n.createElement(d,o({ref:e},k))}));function b(t,e){var l=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var u=l.length,o=new Array(u);o[0]=p;var a={};for(var i in e)hasOwnProperty.call(e,i)&&(a[i]=e[i]);a.originalType=t,a.mdxType="string"==typeof t?t:r,o[1]=a;for(var c=2;c<u;c++)o[c]=l[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}p.displayName="MDXCreateElement"},5441:function(t,e,l){l.r(e),l.d(e,{contentTitle:function(){return i},default:function(){return p},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return k}});var n=l(5773),r=l(808),u=(l(7378),l(5318)),o=["components"],a={sidebar_position:10,slug:"/oracle/gcp/env"},i="Environment",c={unversionedId:"oracle/gcp/environment",id:"oracle/gcp/environment",title:"Environment",description:"You will need to collect the following environment variables to inject into the helm charts before deploying to Google Cloud Project. If you chose to use the automated deployment, an env file will be populated with most of these variables populated.",source:"@site/docs/oracle/gcp/environment.mdx",sourceDirName:"oracle/gcp",slug:"/oracle/gcp/env",permalink:"/oracle/gcp/env",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,slug:"/oracle/gcp/env"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/oracle/gcp"},next:{title:"Automated Setup",permalink:"/oracle/gcp/automated-setup"}},k=[],s={toc:k};function p(t){var e=t.components,l=(0,r.Z)(t,o);return(0,u.kt)("wrapper",(0,n.Z)({},s,l,{components:e,mdxType:"MDXLayout"}),(0,u.kt)("h1",{id:"environment"},"Environment"),(0,u.kt)("p",null,"You will need to collect the following environment variables to inject into the helm charts before deploying to Google Cloud Project. If you chose to use the automated deployment, an env file will be populated with most of these variables populated."),(0,u.kt)("table",null,(0,u.kt)("thead",null,(0,u.kt)("tr",null,(0,u.kt)("th",null,"Env Variable"),(0,u.kt)("th",null,"Definition"))),(0,u.kt)("tbody",null,(0,u.kt)("tr",null,(0,u.kt)("td",null,"CLUSTER"),(0,u.kt)("td",null,(0,u.kt)("b",null,(0,u.kt)("u",null,"Required")),(0,u.kt)("br",null),(0,u.kt)("b",null,"Type")," - String (devnet / mainnet-beta)",(0,u.kt)("br",null),(0,u.kt)("b",null,"Description")," - Solana cluster you will be running an oracle on (mainnet-beta/devnet)")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"RPC_URL"),(0,u.kt)("td",null,(0,u.kt)("b",null,(0,u.kt)("u",null,"Required")),(0,u.kt)("br",null),(0,u.kt)("b",null,"Type")," - URL",(0,u.kt)("br",null),(0,u.kt)("b",null,"Description")," - Solana RPC URL that must be capable of supporting websockets. The default RPC pools should be avoided at all cost as you will quickly hit the rate limits and risk being slashed")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"WS_URL"),(0,u.kt)("td",null,(0,u.kt)("b",null,(0,u.kt)("u",null,"Optional")),(0,u.kt)("br",null),(0,u.kt)("b",null,"Type")," - URL",(0,u.kt)("br",null),(0,u.kt)("b",null,"Default")," - RPC_URL",(0,u.kt)("br",null),(0,u.kt)("b",null,"Description")," - Websocket URL to connect to a Solana RPC server. If not provided, oracle will fallback to RPC_URL")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"BACKUP_MAINNET_RPC"),(0,u.kt)("td",null,(0,u.kt)("b",null,(0,u.kt)("u",null,"Optional")),(0,u.kt)("br",null),(0,u.kt)("b",null,"Type")," - URL",(0,u.kt)("br",null),(0,u.kt)("b",null,"Default")," - https://api.mainnet-beta.solana.com",(0,u.kt)("br",null),(0,u.kt)("b",null,"Description")," - Backup RPC URL in case of network congestion")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"ORACLE_KEY"),(0,u.kt)("td",null,(0,u.kt)("b",null,(0,u.kt)("u",null,"Required")),(0,u.kt)("br",null),(0,u.kt)("b",null,"Type")," - Public Key",(0,u.kt)("br",null),(0,u.kt)("b",null,"Description")," - Public key of the oracle account that has been granted permissions to use an oracle queue ",(0,u.kt)("br",null),(0,u.kt)("a",{href:"../../oracle/account#create-oracle"},"Oracle Account #Create Oracle"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,"HEARTBEAT_INTERVAL"),(0,u.kt)("td",null,(0,u.kt)("b",null,(0,u.kt)("u",null,"Optional")),(0,u.kt)("br",null),(0,u.kt)("b",null,"Type")," - Number (seconds)",(0,u.kt)("br",null),(0,u.kt)("b",null,"Default")," - 15",(0,u.kt)("br",null),(0,u.kt)("b",null,"Description")," - Seconds between oracle heartbeats. Queues have different oracle heartbeat requirements. Recommended value is 15")),(0,u.kt)("tr",null,(0,u.kt)("td",null,"SERVICE_ACCOUNT_BASE64"),(0,u.kt)("td",null,(0,u.kt)("b",null,(0,u.kt)("u",null,"Required")),(0,u.kt)("br",null),(0,u.kt)("b",null,"Type")," - Base64 encoded JSON file",(0,u.kt)("br",null),(0,u.kt)("b",null,"Description")," - Base64 encoded JSON file containing the private key for your service account that has access to your google secret keypair and config bucket",(0,u.kt)("br",null),(0,u.kt)("a",{href:"../../oracle/gcp/manual-setup#service-account"},"GCP Manual Setup #ServiceAccount"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,"GOOGLE_PAYER_SECRET_PATH"),(0,u.kt)("td",null,(0,u.kt)("b",null,(0,u.kt)("u",null,"Required")),(0,u.kt)("br",null),(0,u.kt)("b",null,"Type")," - GCP Resource Path",(0,u.kt)("br",null),(0,u.kt)("b",null,"Description")," - Google cloud resource to manage your keypair securely.",(0,u.kt)("br",null),(0,u.kt)("a",{href:"../../oracle/gcp/manual-setup#oracle-payer-secret"},"GCP Manual Setup #OraclePayerSecret"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,"GCP_CONFIG_BUCKET"),(0,u.kt)("td",null,(0,u.kt)("b",null,(0,u.kt)("u",null,"Optional")),(0,u.kt)("br",null),(0,u.kt)("b",null,"Type")," - GCP Resource Path",(0,u.kt)("br",null),(0,u.kt)("b",null,"Default")," - oracle-configs:configs.json",(0,u.kt)("br",null),(0,u.kt)("b",null,"Description")," - Contains API keys for private API endpoints",(0,u.kt)("br",null),(0,u.kt)("a",{href:"../../oracle/gcp/manual-setup#storage-bucket"},"GCP Manual Setup #StorageBucket"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,"EXTERNAL_IP"),(0,u.kt)("td",null,(0,u.kt)("b",null,(0,u.kt)("u",null,"Required")),(0,u.kt)("br",null),(0,u.kt)("b",null,"Type")," - IPv4 Address",(0,u.kt)("br",null),(0,u.kt)("b",null,"Description")," - IP Address where your grafana instance will be hosted to view metrics and oracle operating status",(0,u.kt)("br",null),(0,u.kt)("a",{href:"../../oracle/gcp/manual-setup#external-ip"},"GCP Manual Setup #ExternalIP"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,"GRAFANA_HOSTNAME"),(0,u.kt)("td",null,(0,u.kt)("b",null,(0,u.kt)("u",null,"Required")),(0,u.kt)("br",null),(0,u.kt)("b",null,"Type")," - Fully Qualified Domain Name",(0,u.kt)("br",null),(0,u.kt)("b",null,"Description")," - Hostname where your grafana instance will point to",(0,u.kt)("br",null),(0,u.kt)("a",{href:"../../oracle/gcp/grafana#domain-name"},"Grafana #DomainName"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,"GRAFANA_PASSWORD"),(0,u.kt)("td",null,(0,u.kt)("b",null,(0,u.kt)("u",null,"Optional")),(0,u.kt)("br",null),(0,u.kt)("b",null,"Type")," - String / Password",(0,u.kt)("br",null),(0,u.kt)("b",null,"Default")," - SbCongraph50!",(0,u.kt)("br",null),(0,u.kt)("b",null,"Description")," - Password to admin account that allows access to your grafana instance. You can set this to whatever value you want.",(0,u.kt)("br",null))),(0,u.kt)("tr",null,(0,u.kt)("td",null,"GRAFANA_TLS_CRT"),(0,u.kt)("td",null,(0,u.kt)("b",null,(0,u.kt)("u",null,"Required")),(0,u.kt)("br",null),(0,u.kt)("b",null,"Type")," - Base64 encoded CRT file",(0,u.kt)("br",null),(0,u.kt)("b",null,"Description")," - Base64 encoded string of your TLS certificate to secure your grafana instance",(0,u.kt)("br",null),(0,u.kt)("a",{href:"../../oracle/gcp/grafana#tls-certificate"},"Grafana #TLS Certificate"))),(0,u.kt)("tr",null,(0,u.kt)("td",null,"GRAFANA_TLS_KEY"),(0,u.kt)("td",null,(0,u.kt)("b",null,(0,u.kt)("u",null,"Required")),(0,u.kt)("br",null),(0,u.kt)("b",null,"Type")," - Base64 encoded private key file",(0,u.kt)("br",null),(0,u.kt)("b",null,"Description")," - Base64 encoded string of the private key used to create your TLS certificate",(0,u.kt)("br",null),(0,u.kt)("a",{href:"../../oracle/gcp/grafana#tls-certificate"},"Grafana #TLS Certificate"))))))}p.isMDXComponent=!0}}]);