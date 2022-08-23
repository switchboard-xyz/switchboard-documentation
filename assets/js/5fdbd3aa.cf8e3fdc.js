"use strict";(self.webpackChunk_switchboard_xyz_v2_docs=self.webpackChunk_switchboard_xyz_v2_docs||[]).push([[3732],{5318:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=o,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3372:function(e,t,r){r.r(t),r.d(t,{contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return u},toc:function(){return s}});var n=r(5773),o=r(808),a=(r(7378),r(5318)),i=["components"],l={sidebar_position:1,slug:"/oracle/gcp"},c="Overview",u={unversionedId:"oracle/gcp/overview",id:"oracle/gcp/overview",title:"Overview",description:"Before deploying the application, you must first provision a kubernetes cluster with the relevant credentials. There are no exotic requirements for this cluster and to date, it has be able to run on an auto pilot GKE cluster without issue.",source:"@site/docs/oracle/gcp/overview.mdx",sourceDirName:"oracle/gcp",slug:"/oracle/gcp",permalink:"/oracle/gcp",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/oracle/gcp"},sidebar:"tutorialSidebar",previous:{title:"Docker",permalink:"/oracle/docker"},next:{title:"Environment",permalink:"/oracle/gcp/env"}},s=[{value:"Requirements",id:"requirements",children:[{value:"Switchboard Helm Charts",id:"switchboard-helm-charts",children:[],level:3},{value:"gcloud SDK",id:"gcloud-sdk",children:[],level:3},{value:"Grafana Domain Name",id:"grafana-domain-name",children:[],level:3}],level:2}],p={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"Before deploying the application, you must first provision a kubernetes cluster with the relevant credentials. There are no exotic requirements for this cluster and to date, it has be able to run on an auto pilot GKE cluster without issue."),(0,a.kt)("p",null,"A Switchboard oracle can be run on any cloud provider who offers kubernetes services but this guide will currently be focused on Google Cloud. Feel free to contribute to our documentation if you are running an oracle on another provider. Here's some extra reading to learn more about kubernetes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/learn/what-is-kubernetes"},"What is Kubernetes?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/kubernetes-engine/docs/quickstart"},"Kubernetes Engine Quickstart"))),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("h3",{id:"switchboard-helm-charts"},"Switchboard Helm Charts"),(0,a.kt)("p",null,"The repo below contains the kubernetes manifest to streamline the deployment. Clone the repo below to get started:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/switchboard-xyz/helm-manifests.git switchboard-helm-charts\ncd switchboard-helm-charts\n")),(0,a.kt)("h3",{id:"gcloud-sdk"},"gcloud SDK"),(0,a.kt)("p",null,"You will need to install the google cloud SDK and have a Google Cloud Platform account"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://cloud.google.com/sdk/docs/install"},"Install gcloud SDK")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://console.cloud.google.com/freetrial/signup/tos"},"Google Cloud Platform Registration"))),(0,a.kt)("p",null,"Verify it installed correctly with the following command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"gcloud --version\n")),(0,a.kt)("h3",{id:"grafana-domain-name"},"Grafana Domain Name"),(0,a.kt)("p",null,"You will need a domain name to point your grafana instance at to monitor your oracle's metrics. During setup, you will create an external IP, which you will need to add to your domains DNS records. Finally we will provision a TLS certificate for your domain for enhanced security."))}d.isMDXComponent=!0}}]);