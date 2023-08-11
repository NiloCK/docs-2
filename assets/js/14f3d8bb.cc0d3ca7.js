"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9090],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=i,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9329:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=n(7462),i=(n(7294),n(3905));const o={description:"Guide for Nethermind.Cli project which is useful for managing your node"},a="CLI",l={unversionedId:"nethermind-utilities/cli/README",id:"nethermind-utilities/cli/README",title:"CLI",description:"Guide for Nethermind.Cli project which is useful for managing your node",source:"@site/docs/06-nethermind-utilities/cli/README.md",sourceDirName:"06-nethermind-utilities/cli",slug:"/nethermind-utilities/cli/",permalink:"/docs/nethermind-utilities/cli/",draft:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/docs/06-nethermind-utilities/cli/README.md",tags:[],version:"current",frontMatter:{description:"Guide for Nethermind.Cli project which is useful for managing your node"},sidebar:"tutorialSidebar",previous:{title:"Nethermind Utilities",permalink:"/docs/category/nethermind-utilities"},next:{title:"admin",permalink:"/docs/nethermind-utilities/cli/admin"}},c={},s=[],u={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"cli"},"CLI"),(0,i.kt)("p",null,"After launching ",(0,i.kt)("inlineCode",{parentName:"p"},"./Nethermind.Launcher")," you have two options - ",(0,i.kt)("inlineCode",{parentName:"p"},"Ethereum Node")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"CLI"),"."),(0,i.kt)("p",null,"If you launch the Node in one process and then launch the CLI in another process you will see available commands inside\nthe CLI."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"You have to ensure that the ",(0,i.kt)("inlineCode",{parentName:"p"},"JsonRpc.Enabled")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"true")," either by enabling it when Launcher asks about it or by\nmanually editing the relevant config file or by passing ",(0,i.kt)("inlineCode",{parentName:"p"},"--JsonRpc.Enabled true")," parameter after the Launcher command")),(0,i.kt)("p",null,"CLI will display available options ","(","functions and properties",")"," when started."),(0,i.kt)("p",null,"CLI will allow you to query the most basic info about the node quickly."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"You can execute javascript arithmetics"),(0,i.kt)("li",{parentName:"ol"},"You can issue JSON RPC requests to the node"),(0,i.kt)("li",{parentName:"ol"},"You can combine the former two"),(0,i.kt)("li",{parentName:"ol"},"You can create and call functions"),(0,i.kt)("li",{parentName:"ol"},"You can retrieve node objects"),(0,i.kt)("li",{parentName:"ol"},"And work with node object properties"),(0,i.kt)("li",{parentName:"ol"},"You can also load javascript files from disk by calling ",(0,i.kt)("inlineCode",{parentName:"li"},'load("filepath.js")')),(0,i.kt)("li",{parentName:"ol"},"You can navigate to previous commands by using arrow keys"),(0,i.kt)("li",{parentName:"ol"},"You can auto-complete basic command with tab")),(0,i.kt)("p",null,"For more advanced operations with the node use ",(0,i.kt)("a",{parentName:"p",href:"https://nethermind.readthedocs.io/en/latest/web3.html"},"Web3")," or ether.js\nlibs or Truffle, Metamask, etc."),(0,i.kt)("p",null,"Below you will find the available list of CLI operations and you can find more information about each call in JSON RPC\nsection."),(0,i.kt)("p",null,'{% page-ref page="../../ethereum-client/json-rpc/" %}'))}d.isMDXComponent=!0}}]);