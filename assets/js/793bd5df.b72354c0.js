"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1174],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(n),m=i,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[d]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const o={title:"Security",sidebar_position:3},a="Security",s={unversionedId:"fundamentals/security",id:"fundamentals/security",title:"Security",description:"DO NOT use Nethermind wallet / signers for mainnet ETH handling!",source:"@site/docs/fundamentals/security.md",sourceDirName:"fundamentals",slug:"/fundamentals/security",permalink:"/docs/fundamentals/security",draft:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/docs/fundamentals/security.md",tags:[],version:"current",lastUpdatedAt:1693686070,formattedLastUpdatedAt:"Sep 2, 2023",sidebarPosition:3,frontMatter:{title:"Security",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Sync",permalink:"/docs/fundamentals/sync"},next:{title:"Logs",permalink:"/docs/fundamentals/logs"}},c={},l=[],p={toc:l},d="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"security"},"Security"),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"\ud83d\udce2 ",(0,i.kt)("strong",{parentName:"p"},"DO NOT")," use Nethermind wallet / signers for mainnet ETH handling!")),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"\ud83d\udce2 JSON RPC endpoint (port ",(0,i.kt)("inlineCode",{parentName:"p"},"8545"),") should ",(0,i.kt)("strong",{parentName:"p"},"NOT")," be exposed publicly (should be behind the firewall).")),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"\ud83d\udce2The private key from which the node ID is derived is stored on disk (",(0,i.kt)("strong",{parentName:"p"},"NOT")," protected by password).")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Nethermind is thoroughly tested but the more popular it will get the more likely it will be the target of client-specific attacks. Generally you should always consider running backup client nodes implemented by a different team for any critical operations.")),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"For non-mainnet signing you can use dev wallet configurations.")))}u.isMDXComponent=!0}}]);