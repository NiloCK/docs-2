"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8979],{3905:(t,e,r)=>{r.d(e,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var c=n.createContext({}),s=function(t){var e=n.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},p=function(t){var e=s(t.components);return n.createElement(c.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=s(r),f=a,d=u["".concat(c,".").concat(f)]||u[f]||m[f]||o;return r?n.createElement(d,i(i({ref:e},p),{},{components:r})):n.createElement(d,i({ref:e},p))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[u]="string"==typeof t?t:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7803:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(7462),a=(r(7294),r(3905));const o={},i="Aura",l={unversionedId:"fundamentals/configuration/aura",id:"fundamentals/configuration/aura",title:"Aura",description:"| Property                                             | Env Variable                                                               | Description                                                                                                                                                                                                                                                                | Default |",source:"@site/docs/02-fundamentals/04-configuration/aura.md",sourceDirName:"02-fundamentals/04-configuration",slug:"/fundamentals/configuration/aura",permalink:"/docs/docs/fundamentals/configuration/aura",draft:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/docs/02-fundamentals/04-configuration/aura.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"AccountAbstraction",permalink:"/docs/docs/fundamentals/configuration/accountabstraction"},next:{title:"AuRaMerge",permalink:"/docs/docs/fundamentals/configuration/auramerge"}},c={},s=[],p={toc:s},u="wrapper";function m(t){let{components:e,...r}=t;return(0,a.kt)(u,(0,n.Z)({},p,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"aura"},"Aura"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Env Variable"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"AllowAuRaPrivateChains"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_AURACONFIG_ALLOWAURAPRIVATECHAINS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"If 'true' then you can run Nethermind only private chains. Do not use with existing Parity AuRa chains."),(0,a.kt)("td",{parentName:"tr",align:"left"},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"ForceSealing"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_AURACONFIG_FORCESEALING"),(0,a.kt)("td",{parentName:"tr",align:"left"},"If 'true' then Nethermind if mining will seal empty blocks."),(0,a.kt)("td",{parentName:"tr",align:"left"},"true")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"Minimum2MlnGasPerBlockWhenUsingBlockGasLimitContract"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_AURACONFIG_MINIMUM2MLNGASPERBLOCKWHENUSINGBLOCKGASLIMITCONTRACT"),(0,a.kt)("td",{parentName:"tr",align:"left"},"If 'true' then when using BlockGasLimitContractTransitions if the contract returns less than 2mln gas, then 2 mln gas is used."),(0,a.kt)("td",{parentName:"tr",align:"left"},"false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"TxPriorityConfigFilePath"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_AURACONFIG_TXPRIORITYCONFIGFILEPATH"),(0,a.kt)("td",{parentName:"tr",align:"left"},"If set then transaction priority rules are used when selecting transactions from transaction pool. This has higher priority then on chain contract rules. See more at contract details ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/poanetwork/posdao-contracts/blob/master/contracts/TxPriority.sol"},"https://github.com/poanetwork/posdao-contracts/blob/master/contracts/TxPriority.sol")),(0,a.kt)("td",{parentName:"tr",align:"left"},"null")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"TxPriorityContractAddress"),(0,a.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_AURACONFIG_TXPRIORITYCONTRACTADDRESS"),(0,a.kt)("td",{parentName:"tr",align:"left"},"If set then transaction priority contract is used when selecting transactions from transaction pool. See more at ",(0,a.kt)("a",{parentName:"td",href:"https://github.com/poanetwork/posdao-contracts/blob/master/contracts/TxPriority.sol"},"https://github.com/poanetwork/posdao-contracts/blob/master/contracts/TxPriority.sol")),(0,a.kt)("td",{parentName:"tr",align:"left"},"null")))))}m.isMDXComponent=!0}}]);