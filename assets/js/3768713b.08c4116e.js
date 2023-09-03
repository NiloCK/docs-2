"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2275],{3905:(t,e,a)=>{a.d(e,{Zo:()=>c,kt:()=>s});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function d(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),p=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):d(d({},e),t)),a},c=function(t){var e=p(t.components);return n.createElement(o.Provider,{value:e},t.children)},f="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},b=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),f=p(a),b=r,s=f["".concat(o,".").concat(b)]||f[b]||m[b]||l;return a?n.createElement(s,d(d({ref:e},c),{},{components:a})):n.createElement(s,d({ref:e},c))}));function s(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,d=new Array(l);d[0]=b;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[f]="string"==typeof t?t:r,d[1]=i;for(var p=2;p<l;p++)d[p]=a[p];return n.createElement.apply(null,d)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},5162:(t,e,a)=>{a.d(e,{Z:()=>d});var n=a(7294),r=a(6010);const l={tabItem:"tabItem_Ymn6"};function d(t){let{children:e,hidden:a,className:d}=t;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,d),hidden:a},e)}},4866:(t,e,a)=>{a.d(e,{Z:()=>v});var n=a(7462),r=a(7294),l=a(6010),d=a(2466),i=a(6550),o=a(1980),p=a(7392),c=a(12);function f(t){return function(t){return r.Children.map(t,(t=>{if(!t||(0,r.isValidElement)(t)&&function(t){const{props:e}=t;return!!e&&"object"==typeof e&&"value"in e}(t))return t;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof t.type?t.type:t.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(t).map((t=>{let{props:{value:e,label:a,attributes:n,default:r}}=t;return{value:e,label:a,attributes:n,default:r}}))}function m(t){const{values:e,children:a}=t;return(0,r.useMemo)((()=>{const t=e??f(a);return function(t){const e=(0,p.l)(t,((t,e)=>t.value===e.value));if(e.length>0)throw new Error(`Docusaurus error: Duplicate values "${e.map((t=>t.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(t),t}),[e,a])}function b(t){let{value:e,tabValues:a}=t;return a.some((t=>t.value===e))}function s(t){let{queryString:e=!1,groupId:a}=t;const n=(0,i.k6)(),l=function(t){let{queryString:e=!1,groupId:a}=t;if("string"==typeof e)return e;if(!1===e)return null;if(!0===e&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:e,groupId:a});return[(0,o._X)(l),(0,r.useCallback)((t=>{if(!l)return;const e=new URLSearchParams(n.location.search);e.set(l,t),n.replace({...n.location,search:e.toString()})}),[l,n])]}function k(t){const{defaultValue:e,queryString:a=!1,groupId:n}=t,l=m(t),[d,i]=(0,r.useState)((()=>function(t){let{defaultValue:e,tabValues:a}=t;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(e){if(!b({value:e,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${e}" but none of its children has the corresponding value. Available values are: ${a.map((t=>t.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return e}const n=a.find((t=>t.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:e,tabValues:l}))),[o,p]=s({queryString:a,groupId:n}),[f,k]=function(t){let{groupId:e}=t;const a=function(t){return t?`docusaurus.tab.${t}`:null}(e),[n,l]=(0,c.Nk)(a);return[n,(0,r.useCallback)((t=>{a&&l.set(t)}),[a,l])]}({groupId:n}),u=(()=>{const t=o??f;return b({value:t,tabValues:l})?t:null})();(0,r.useLayoutEffect)((()=>{u&&i(u)}),[u]);return{selectedValue:d,selectValue:(0,r.useCallback)((t=>{if(!b({value:t,tabValues:l}))throw new Error(`Can't select invalid tab value=${t}`);i(t),p(t),k(t)}),[p,k,l]),tabValues:l}}var u=a(2389);const N={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(t){let{className:e,block:a,selectedValue:i,selectValue:o,tabValues:p}=t;const c=[],{blockElementScrollPositionUntilNextRender:f}=(0,d.o5)(),m=t=>{const e=t.currentTarget,a=c.indexOf(e),n=p[a].value;n!==i&&(f(e),o(n))},b=t=>{let e=null;switch(t.key){case"Enter":m(t);break;case"ArrowRight":{const a=c.indexOf(t.currentTarget)+1;e=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(t.currentTarget)-1;e=c[a]??c[c.length-1];break}}e?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},e)},p.map((t=>{let{value:e,label:a,attributes:d}=t;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===e?0:-1,"aria-selected":i===e,key:e,ref:t=>c.push(t),onKeyDown:b,onClick:m},d,{className:(0,l.Z)("tabs__item",N.tabItem,d?.className,{"tabs__item--active":i===e})}),a??e)})))}function y(t){let{lazy:e,children:a,selectedValue:n}=t;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(e){const t=l.find((t=>t.props.value===n));return t?(0,r.cloneElement)(t,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((t,e)=>(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==n}))))}function h(t){const e=k(t);return r.createElement("div",{className:(0,l.Z)("tabs-container",N.tabList)},r.createElement(g,(0,n.Z)({},t,e)),r.createElement(y,(0,n.Z)({},t,e)))}function v(t){const e=(0,u.Z)();return r.createElement(h,(0,n.Z)({key:String(e)},t))}},8642:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>s,frontMatter:()=>i,metadata:()=>p,toc:()=>f});var n=a(7462),r=(a(7294),a(3905)),l=a(4866),d=a(5162);const i={},o="proof",p={unversionedId:"utilities/cli/proof",id:"utilities/cli/proof",title:"proof",description:"proof.getTransactionByHash",source:"@site/docs/utilities/cli/proof.md",sourceDirName:"utilities/cli",slug:"/utilities/cli/proof",permalink:"/docs/utilities/cli/proof",draft:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/docs/utilities/cli/proof.md",tags:[],version:"current",lastUpdatedAt:1693763410,formattedLastUpdatedAt:"Sep 3, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"personal",permalink:"/docs/utilities/cli/personal"},next:{title:"system",permalink:"/docs/utilities/cli/system"}},c={},f=[{value:"proof.getTransactionByHash",id:"proofgettransactionbyhash",level:2},{value:"proof.getTransactionReceipt",id:"proofgettransactionreceipt",level:2}],m={toc:f},b="wrapper";function s(t){let{components:e,...a}=t;return(0,r.kt)(b,(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"proof"},"proof"),(0,r.kt)("h2",{id:"proofgettransactionbyhash"},"proof.getTransactionByHash"),(0,r.kt)("p",null,"This function returns the same result as ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_getTransactionReceipt")," and also a tx proof, receipt proof and serialized\nblock headers."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Invocation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"proof.getTransactionByHash(txHash, includeHeader)"))))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"txHash"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Hash")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"includeHeader"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Returned type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"TransactionWithProof object")),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(d.Z,{value:"request",label:"Request",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"proof.getTransactionByHash(txHash, includeHeader)\n"))),(0,r.kt)(d.Z,{value:"response",label:"Response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'"transaction": { "hash": "0xb62594c08de66c683fbffe44792a1ccc0f9b80e43071048ed03c18a71fd3c19a","nonce": "0x630","blockHash": "0x42d72739c2b2659916d7b42a49661fdec317e780af1395c2c15aa89b4c42e220","blockNumber": "0x88f194","transactionIndex": "0x24","from": "0x78ca86e8133ef9368b4537879cf2f38fddbb636b","to": "0x1dfd95eb75a7486945d366a0bc0b937f0aaa526f","value": "0x0","gasPrice": "0x3b9aca00","gas": "0xc9e2","data": "0xa9059cbb000000000000000000000000e3ac1cc1453e70f80ff58f3bb56b0532238ae24a00000000000000000000000000000000000000000000003635c9adc5dea00000","input": "0xa9059cbb000000000000000000000000e3ac1cc1453e70f80ff58f3bb56b0532238ae24a00000000000000000000000000000000000000000000003635c9adc5dea00000","type": "0x0","v": "0x2b","s": "0x33a9425e84bf310d372a9f531b237baebccfdd2b426e817cc9553355a9165342","r": "0xe14a066de4787a4c0192f5a2285fd835a85baa3a4f63b1e8a2d8d7f6e04425ca" },"txProof": [ "0xf891a0311d3b27b7612bf40c2c5d623c62c2afe30a47f486700074e4c4d7cf603c90c8a0cd64d350a95e9286a580a75ae11fe58801992f9ac65ace8a0b853d16f87b09b0a0ae9d609ff06d19bb911d7ad05cfdd6c80a9f1fddccbdb76a78594536122345ce8080808080a09773b23452983c0ed65aebb64522af322967c62be34414e16b32b7e4bdaecdb68080808080808080","0xf8b1a0715f91aae7675a1c8469685d18bc94241d275c82a3b52df6c4fab064fcba3017a0e77ac7615c08eaafccc876956f3dad1892f08c1f1128e2cdf9064664381a540fa06f2d934e5f7995657144ad66b8b5cdce6b6c141422f95d44eb91ca6765d4f819a0b265c005bad056db029945b3d68a631b624a77703733fa9b2042c0f211f8ef4ea0bb97f719cc5f6082fe5bab8588dc564a843a6b40c5494982ded868f19eef07b6808080808080808080808080","0xf8af20b8acf8aa820630843b9aca0082c9e2941dfd95eb75a7486945d366a0bc0b937f0aaa526f80b844a9059cbb000000000000000000000000e3ac1cc1453e70f80ff58f3bb56b0532238ae24a00000000000000000000000000000000000000000000003635c9adc5dea000002ba0e14a066de4787a4c0192f5a2285fd835a85baa3a4f63b1e8a2d8d7f6e04425caa033a9425e84bf310d372a9f531b237baebccfdd2b426e817cc9553355a9165342" ]\n'))),(0,r.kt)(d.Z,{value:"objects",label:"Object",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TransactionWithProof")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Transaction"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"TransactionForRpc object"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TxProof"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Data"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"BlockHeader"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Data"))))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TransactionForRpc")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Hash"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Hash"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Nonce"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Quantity"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"BlockHash"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Hash"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"BlockNumber"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Quantity"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TransactionIndex"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Quantity"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"From"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Address"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"To"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Address"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Value"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Quantity"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"GasPrice"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Quantity"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"MaxPriorityFeePerGas"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Quantity"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"MaxFeePerGas"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Quantity"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Gas"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Quantity"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Data"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Data"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Input"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Data"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ChainId"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Quantity"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"TxType object"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"AccessList"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"AccessListItemForRpc[] object"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"MaxFeePerDataGas"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Quantity"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"BlobVersionedHashes"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Data"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"V"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Quantity"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"S"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Quantity"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"R"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Quantity"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"YParity"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Quantity"))))))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/proof#proof_gettransactionbyhash"},"See also JSON RPC proof_getTransactionByHash")),(0,r.kt)("h2",{id:"proofgettransactionreceipt"},"proof.getTransactionReceipt"),(0,r.kt)("p",null,"This function should return the same result as ",(0,r.kt)("inlineCode",{parentName:"p"},"eth_call")," and also proofs of all used accounts and their storages and\nserialized block headers."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Invocation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"proof.getTransactionReceipt(txHash, includeHeader)"))))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"txHash"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Hash")),(0,r.kt)("td",{parentName:"tr",align:"left"})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"includeHeader"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Boolean")),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Returned type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ReceiptWithProof object")),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(d.Z,{value:"request",label:"Request",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"proof.getTransactionReceipt(txHash, includeHeader)\n"))),(0,r.kt)(d.Z,{value:"response",label:"Response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'{ "receipt": { "transactionHash": "0xfff473e0d10e9dcc18bb4585fb2ba17f682949996f5dfda41c20c425a53b4e71","transactionIndex": "0x0","blockHash": "0x539822db4041dac07f02819b1337f5f9d7291a996f80d9c05ada334c7a97264c","blockNumber": "0x1","cumulativeGasUsed": "0x0","gasUsed": "0x0","to": null,"contractAddress": null,"logs": [ ],"logsBloom": "0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000","status": "0x0","type": "0x0" },"txProof": [ "0xf851a073ff16e6f3a3ca20ba99ad5bacc973e800ba7ec7092266fcd2520703613e3d9580808080808080a0a70de17dcf5a91c1b986463b4e8419665333b2a66e66f7127baae3d4d58d052d8080808080808080","0xf86530b862f86080018252089400000000000000000000000000000000000000000181801ca0b4e030f395ed357d206b58d9a0ded408589a9e26f1a5b41010772cd0d84b8d16a04d9797a972bc308ea635f22455881c41c7c9fb946c93db6f99d2bd529675af13" ],"receiptProof": [ "0xf851a08e4cd3def722e9727e505d3798454165d832e1aabd5c56e5d0e4e9f0796a783280808080808080a05380738598f169c9e407a0f61558e53ea59a4c5e643aabc57679c7c0a3b761428080808080808080","0xf9012f30b9012bf90128a056e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421825208b9010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000c0" ],"blockHeader": "0xf901f9a0b3157bcccab04639f6393042690a6c9862deebe88c781f911e8dfd265531e9ffa01dcc4de8dec75d7aab85b567b6ccd41ad312451b948a7413f0a142fd40d49347940000000000000000000000000000000000000000a056e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421a0541c8844bd420f79a5f7f8db723e2106160d350043de7cf76d78ea13ed0ff6c9a0e1b1585a222beceb3887dc6701802facccf186c2d0f6aa69e26ae0c431fc2b5db9010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000830f424001833d090080830f424183010203a02ba5557a4c62a513c7e56d1bf13373e0da6bec016755483e91589fe1c6d212e28800000000000003e8" }\n'))),(0,r.kt)(d.Z,{value:"objects",label:"Object",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ReceiptWithProof")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Receipt"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"ReceiptForRpc object"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TxProof"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Data"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ReceiptProof"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Data"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"BlockHeader"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Data"))))),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ReceiptForRpc")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TransactionHash"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Hash"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TransactionIndex"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Quantity"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"BlockHash"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Hash"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"BlockNumber"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Quantity"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CumulativeGasUsed"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Quantity"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"GasUsed"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Quantity"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"DataGasUsed"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Quantity"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"DataGasPrice"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Quantity"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"EffectiveGasPrice"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Quantity"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"From"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Address"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"To"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Address"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"ContractAddress"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Address"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Logs"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"LogEntryForRpc[] object"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"LogsBloom"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Bloom Object"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Root"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Hash"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Status"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Quantity"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Error"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"String"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"TxType object"))))))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.nethermind.io/nethermind/ethereum-client/json-rpc/proof#proof_gettransactionreceipt"},"See also JSON RPC proof_getTransactionReceipt")))}s.isMDXComponent=!0}}]);