"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7848],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),f=o,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||i;return r?n.createElement(m,a(a({ref:t},p),{},{components:r})):n.createElement(m,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},1357:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const i={description:"Rules that should be added to your machine's firewall"},a="Firewall Configuration",c={unversionedId:"resources/firewall-configuration",id:"resources/firewall-configuration",title:"Firewall Configuration",description:"Rules that should be added to your machine's firewall",source:"@site/docs/07-resources/firewall-configuration.md",sourceDirName:"07-resources",slug:"/resources/firewall-configuration",permalink:"/docs/resources/firewall-configuration",draft:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/docs/07-resources/firewall-configuration.md",tags:[],version:"current",frontMatter:{description:"Rules that should be added to your machine's firewall"},sidebar:"tutorialSidebar",previous:{title:"FAQ",permalink:"/docs/resources/faq"},next:{title:"Deploy Nethermind with Monitoring stack",permalink:"/docs/resources/guides-and-helpers/deploy-nethermind-with-monitoring-stack"}},l={},s=[],p={toc:s},u="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"firewall-configuration"},"Firewall Configuration"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Keep ",(0,o.kt)("inlineCode",{parentName:"p"},"8545")," ","(","or ",(0,o.kt)("inlineCode",{parentName:"p"},"8000-9000"),")"," closed except for the trusted machines - this is the JSON RPC port which gives admin access to the node.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Keep TCP ",(0,o.kt)("inlineCode",{parentName:"p"},"30303")," ","(","or ",(0,o.kt)("inlineCode",{parentName:"p"},"30300-30400"),")"," open for the outside world so other nodes can connect to your node.")),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Keep UDP ",(0,o.kt)("inlineCode",{parentName:"p"},"30303")," ","(","or ",(0,o.kt)("inlineCode",{parentName:"p"},"30300-30400"),")"," open for the outside world so other nodes can discover your node.")))}d.isMDXComponent=!0}}]);