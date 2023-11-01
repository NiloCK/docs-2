"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7043],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,k=c["".concat(o,".").concat(d)]||c[d]||m[d]||l;return n?a.createElement(k,s(s({ref:t},p),{},{components:n})):a.createElement(k,s({ref:t},p))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var u=2;u<l;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(7294),r=n(6010);const l={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:n,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,s),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>T});var a=n(7462),r=n(7294),l=n(6010),s=n(2466),i=n(6550),o=n(1980),u=n(7392),p=n(12);function c(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function d(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,o._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(a.location.search);t.set(l,e),a.replace({...a.location,search:t.toString()})}),[l,a])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,l=m(e),[s,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:l}))),[o,u]=k({queryString:n,groupId:a}),[c,g]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,l]=(0,p.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&l.set(e)}),[n,l])]}({groupId:a}),h=(()=>{const e=o??c;return d({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{h&&i(h)}),[h]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),g(e)}),[u,g,l]),tabValues:l}}var h=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:n,selectedValue:i,selectValue:o,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),m=e=>{const t=e.currentTarget,n=p.indexOf(t),a=u[n].value;a!==i&&(c(t),o(a))},d=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:s}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>p.push(e),onKeyDown:d,onClick:m},s,{className:(0,l.Z)("tabs__item",b.tabItem,s?.className,{"tabs__item--active":i===t})}),n??t)})))}function N(e){let{lazy:t,children:n,selectedValue:a}=e;const l=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=g(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",b.tabList)},r.createElement(f,(0,a.Z)({},e,t)),r.createElement(N,(0,a.Z)({},e,t)))}function T(e){const t=(0,h.Z)();return r.createElement(v,(0,a.Z)({key:String(t)},e))}},283:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>k,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var a=n(7462),r=(n(7294),n(3905)),l=n(4866),s=n(5162);const i={title:"clique namespace",sidebar_label:"clique",sidebar_position:1},o=void 0,u={unversionedId:"interacting/json-rpc-ns/clique",id:"interacting/json-rpc-ns/clique",title:"clique namespace",description:"clique_discard",source:"@site/docs/interacting/json-rpc-ns/clique.md",sourceDirName:"interacting/json-rpc-ns",slug:"/interacting/json-rpc-ns/clique",permalink:"/docs/interacting/json-rpc-ns/clique",draft:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/docs/interacting/json-rpc-ns/clique.md",tags:[],version:"current",lastUpdatedAt:1698874726,formattedLastUpdatedAt:"Nov 1, 2023",sidebarPosition:1,frontMatter:{title:"clique namespace",sidebar_label:"clique",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"admin",permalink:"/docs/interacting/json-rpc-ns/admin"},next:{title:"debug",permalink:"/docs/interacting/json-rpc-ns/debug"}},p={},c=[{value:"clique_discard",id:"clique_discard",level:3},{value:"clique_getBlockSigner",id:"clique_getblocksigner",level:3},{value:"clique_getSigners",id:"clique_getsigners",level:3},{value:"clique_getSignersAnnotated",id:"clique_getsignersannotated",level:3},{value:"clique_getSignersAtHash",id:"clique_getsignersathash",level:3},{value:"clique_getSignersAtHashAnnotated",id:"clique_getsignersathashannotated",level:3},{value:"clique_getSignersAtNumber",id:"clique_getsignersatnumber",level:3},{value:"clique_getSnapshot",id:"clique_getsnapshot",level:3},{value:"clique_getSnapshotAtHash",id:"clique_getsnapshotathash",level:3},{value:"clique_produceBlock",id:"clique_produceblock",level:3},{value:"clique_propose",id:"clique_propose",level:3}],m={toc:c},d="wrapper";function k(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"clique_discard"},"clique_discard"),(0,r.kt)("p",null,"This method drops a currently running proposal. The signer will not cast further votes (either for or against) the address."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"params",label:"Parameters",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"signer"),": ",(0,r.kt)("em",{parentName:"li"},"string")," (address)"))),(0,r.kt)(s.Z,{value:"request",label:"Request",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "clique_discard",\n      "params": [signer]\n    }\'\n'))),(0,r.kt)(s.Z,{value:"response",label:"Response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"result"),": ",(0,r.kt)("em",{parentName:"p"},"boolean")))),(0,r.kt)("h3",{id:"clique_getblocksigner"},"clique_getBlockSigner"),(0,r.kt)("p",null,"Retrieves the signer of the block with the given hash. Returns error of a block with the given hash does not exist."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"params",label:"Parameters",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"hash"),": ",(0,r.kt)("em",{parentName:"li"},"string")," (hash)"))),(0,r.kt)(s.Z,{value:"request",label:"Request",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "clique_getBlockSigner",\n      "params": [hash]\n    }\'\n'))),(0,r.kt)(s.Z,{value:"response",label:"Response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"result"),": ",(0,r.kt)("em",{parentName:"p"},"string")," (address)"))),(0,r.kt)("h3",{id:"clique_getsigners"},"clique_getSigners"),(0,r.kt)("p",null,"Retrieves the list of authorized signers."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"request",label:"Request",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "clique_getSigners",\n      "params": []\n    }\'\n'))),(0,r.kt)(s.Z,{value:"response",label:"Response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"result"),": array of ",(0,r.kt)("em",{parentName:"p"},"string")," (address)"))),(0,r.kt)("h3",{id:"clique_getsignersannotated"},"clique_getSignersAnnotated"),(0,r.kt)("p",null,"Retrieves the list of authorized signers but with signer names instead of addresses"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"request",label:"Request",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "clique_getSignersAnnotated",\n      "params": []\n    }\'\n'))),(0,r.kt)(s.Z,{value:"response",label:"Response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"result"),": array of ",(0,r.kt)("em",{parentName:"p"},"string")))),(0,r.kt)("h3",{id:"clique_getsignersathash"},"clique_getSignersAtHash"),(0,r.kt)("p",null,"Retrieves the list of authorized signers at the specified block by hash."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"params",label:"Parameters",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"hash"),": ",(0,r.kt)("em",{parentName:"li"},"string")," (hash)"))),(0,r.kt)(s.Z,{value:"request",label:"Request",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "clique_getSignersAtHash",\n      "params": [hash]\n    }\'\n'))),(0,r.kt)(s.Z,{value:"response",label:"Response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"result"),": array of ",(0,r.kt)("em",{parentName:"p"},"string")," (address)"))),(0,r.kt)("h3",{id:"clique_getsignersathashannotated"},"clique_getSignersAtHashAnnotated"),(0,r.kt)("p",null,"Retrieves the list of authorized signers at the specified block by hash but with signer names instead of addresses"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"params",label:"Parameters",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"hash"),": ",(0,r.kt)("em",{parentName:"li"},"string")," (hash)"))),(0,r.kt)(s.Z,{value:"request",label:"Request",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "clique_getSignersAtHashAnnotated",\n      "params": [hash]\n    }\'\n'))),(0,r.kt)(s.Z,{value:"response",label:"Response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"result"),": array of ",(0,r.kt)("em",{parentName:"p"},"string")))),(0,r.kt)("h3",{id:"clique_getsignersatnumber"},"clique_getSignersAtNumber"),(0,r.kt)("p",null,"Retrieves the list of authorized signers at the specified block by block number."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"params",label:"Parameters",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"number"),": ",(0,r.kt)("em",{parentName:"li"},"string")," (hex integer)"))),(0,r.kt)(s.Z,{value:"request",label:"Request",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "clique_getSignersAtNumber",\n      "params": [number]\n    }\'\n'))),(0,r.kt)(s.Z,{value:"response",label:"Response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"result"),": array of ",(0,r.kt)("em",{parentName:"p"},"string")," (address)"))),(0,r.kt)("h3",{id:"clique_getsnapshot"},"clique_getSnapshot"),(0,r.kt)("p",null,"Retrieves a snapshot of all clique state at a given block."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"request",label:"Request",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "clique_getSnapshot",\n      "params": []\n    }\'\n'))),(0,r.kt)(s.Z,{value:"response",label:"Response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"result"),": ",(0,r.kt)("em",{parentName:"p"},"object")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hash"),": ",(0,r.kt)("em",{parentName:"li"},"string")," (hash)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"number"),": ",(0,r.kt)("em",{parentName:"li"},"string")," (hex integer)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"signerLimit"),": ",(0,r.kt)("em",{parentName:"li"},"string")," (hex integer)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"signers"),": map of ",(0,r.kt)("em",{parentName:"li"},"string")," (hex integer)")))),(0,r.kt)("h3",{id:"clique_getsnapshotathash"},"clique_getSnapshotAtHash"),(0,r.kt)("p",null,"Retrieves the state snapshot at a given block."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"params",label:"Parameters",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"hash"),": ",(0,r.kt)("em",{parentName:"li"},"string")," (hash)"))),(0,r.kt)(s.Z,{value:"request",label:"Request",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "clique_getSnapshotAtHash",\n      "params": [hash]\n    }\'\n'))),(0,r.kt)(s.Z,{value:"response",label:"Response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"result"),": ",(0,r.kt)("em",{parentName:"p"},"object")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hash"),": ",(0,r.kt)("em",{parentName:"li"},"string")," (hash)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"number"),": ",(0,r.kt)("em",{parentName:"li"},"string")," (hex integer)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"signerLimit"),": ",(0,r.kt)("em",{parentName:"li"},"string")," (hex integer)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"signers"),": map of ",(0,r.kt)("em",{parentName:"li"},"string")," (hex integer)")))),(0,r.kt)("h3",{id:"clique_produceblock"},"clique_produceBlock"),(0,r.kt)("p",null,"Forces Clique block producer to produce a new block"),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"params",label:"Parameters",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"parentHash"),": ",(0,r.kt)("em",{parentName:"li"},"string")," (hash)"))),(0,r.kt)(s.Z,{value:"request",label:"Request",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "clique_produceBlock",\n      "params": [parentHash]\n    }\'\n'))),(0,r.kt)(s.Z,{value:"response",label:"Response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"result"),": ",(0,r.kt)("em",{parentName:"p"},"boolean")))),(0,r.kt)("h3",{id:"clique_propose"},"clique_propose"),(0,r.kt)("p",null,"Adds a new authorization proposal that the signer will attempt to push through. If the ",(0,r.kt)("inlineCode",{parentName:"p"},"vote")," parameter is true, the local signer votes for the given address to be included in the set of authorized signers. With ",(0,r.kt)("inlineCode",{parentName:"p"},"vote")," set to false, the signer is against the address."),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(s.Z,{value:"params",label:"Parameters",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"signer"),": ",(0,r.kt)("em",{parentName:"p"},"string")," (address)")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"vote"),": ",(0,r.kt)("em",{parentName:"p"},"boolean"))))),(0,r.kt)(s.Z,{value:"request",label:"Request",default:!0,mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl localhost:8545 \\\n  -X POST \\\n  -H "Content-Type: application/json" \\\n  --data \'{\n      "jsonrpc": "2.0",\n      "id": 0,\n      "method": "clique_propose",\n      "params": [signer, vote]\n    }\'\n'))),(0,r.kt)(s.Z,{value:"response",label:"Response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "jsonrpc": "2.0",\n  "id": 0,\n  "result": result\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"result"),": ",(0,r.kt)("em",{parentName:"p"},"boolean")))))}k.isMDXComponent=!0}}]);