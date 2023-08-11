"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9475],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>b});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,b=d["".concat(p,".").concat(m)]||d[m]||u[m]||l;return a?n.createElement(b,o(o({ref:t},s),{},{components:a})):n.createElement(b,o({ref:t},s))}));function b(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[d]="string"==typeof e?e:r,o[1]=i;for(var c=2;c<l;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(6010);const l={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l.tabItem,o),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>x});var n=a(7462),r=a(7294),l=a(6010),o=a(2466),i=a(6550),p=a(1980),c=a(7392),s=a(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:n,default:r}}=e;return{value:t,label:a,attributes:n,default:r}}))}function u(e){const{values:t,children:a}=e;return(0,r.useMemo)((()=>{const e=t??d(a);return function(e){const t=(0,c.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:a}=e;const n=(0,i.k6)(),l=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,p._X)(l),(0,r.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function f(e){const{defaultValue:t,queryString:a=!1,groupId:n}=e,l=u(e),[o,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=a.find((e=>e.default))??a[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[p,c]=b({queryString:a,groupId:n}),[d,f]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,s.Nk)(a);return[n,(0,r.useCallback)((e=>{a&&l.set(e)}),[a,l])]}({groupId:n}),k=(()=>{const e=p??d;return m({value:e,tabValues:l})?e:null})();(0,r.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),f(e)}),[c,f,l]),tabValues:l}}var k=a(2389);const h={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function N(e){let{className:t,block:a,selectedValue:i,selectValue:p,tabValues:c}=e;const s=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),u=e=>{const t=e.currentTarget,a=s.indexOf(t),n=c[a].value;n!==i&&(d(t),p(n))},m=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const a=s.indexOf(e.currentTarget)+1;t=s[a]??s[0];break}case"ArrowLeft":{const a=s.indexOf(e.currentTarget)-1;t=s[a]??s[s.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},t)},c.map((e=>{let{value:t,label:a,attributes:o}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>s.push(e),onKeyDown:m,onClick:u},o,{className:(0,l.Z)("tabs__item",h.tabItem,o?.className,{"tabs__item--active":i===t})}),a??t)})))}function g(e){let{lazy:t,children:a,selectedValue:n}=e;const l=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=f(e);return r.createElement("div",{className:(0,l.Z)("tabs-container",h.tabList)},r.createElement(N,(0,n.Z)({},e,t)),r.createElement(g,(0,n.Z)({},e,t)))}function x(e){const t=(0,k.Z)();return r.createElement(y,(0,n.Z)({key:String(t)},e))}},9651:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>b,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=a(7462),r=(a(7294),a(3905)),l=a(4866),o=a(5162);const i={},p="txpool",c={unversionedId:"interacting-with-nethermind/json-rpc-api/txpool",id:"interacting-with-nethermind/json-rpc-api/txpool",title:"txpool",description:"txpool_content",source:"@site/docs/03-interacting-with-nethermind/02-json-rpc-api/txpool.md",sourceDirName:"03-interacting-with-nethermind/02-json-rpc-api",slug:"/interacting-with-nethermind/json-rpc-api/txpool",permalink:"/docs/interacting-with-nethermind/json-rpc-api/txpool",draft:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/docs/03-interacting-with-nethermind/02-json-rpc-api/txpool.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"trace",permalink:"/docs/interacting-with-nethermind/json-rpc-api/trace"},next:{title:"web3",permalink:"/docs/interacting-with-nethermind/json-rpc-api/web3"}},s={},d=[{value:"txpool_content",id:"txpool_content",level:2},{value:"txpool_inspect",id:"txpool_inspect",level:2},{value:"txpool_status",id:"txpool_status",level:2}],u={toc:d},m="wrapper";function b(e){let{components:t,...a}=e;return(0,r.kt)(m,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"txpool"},"txpool"),(0,r.kt)("h2",{id:"txpool_content"},"txpool_content"),(0,r.kt)("p",null,"Returns tx pool content. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Invocation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'{"method":"txpool_content","params":[]}'))))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"This method doesn't have parameters.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Returned type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"TxPoolContent object")),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"request",label:"Request",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl --data \'{"method":"txpool_content","params":[],"id":1,"jsonrpc":"2.0"}\' -H "Content-Type: application/json" -X POST localhost:8545\n'))),(0,r.kt)(o.Z,{value:"response",label:"Response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'{\n  "jsonrpc": "2.0",\n  "result": {"0x0f990ef7ec160f01af7148b74cc8a86fe46c551e":{"153":{"hash":"0x84f6f2e5d24b9a0c25bd7018adbbf4388b2c07842782f73d5ddc389906d5f2c8","nonce":"0x99","blockHash":null,"blockNumber":null,"transactionIndex":null,"from":"0x0f990ef7ec160f01af7148b74cc8a86fe46c551e","to":"0x1b4e4664de1d57b665b4bf3523cbccf007766de3","value":"0xc8","gasPrice":"0x3b9aca08","gas":"0x1c9c37f","data":"0xaeeb89600000000000000000000000000000000000000000000000000000000000000001","input":"0xaeeb89600000000000000000000000000000000000000000000000000000000000000001","type":"0x0","v":"0x2c","s":"0x20158ce3f4f9c65f8c657c0d91bbfb43632b2951f6192bca8fb3a25c26dd81d5","r":"0x2814d998f2a78dd4f37461485d88158a32ef5dcfa8c57e224b3ea77536df01b1"}}},\n  "id": 1\n}\n'))),(0,r.kt)(o.Z,{value:"objects",label:"Object",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TxPoolContent")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Pending"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Array"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Queued"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Array"))))))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.nethermind.io/nethermind/nethermind-utilities/cli/txpool#txpool-content"},"See also CLI txpool.content")),(0,r.kt)("h2",{id:"txpool_inspect"},"txpool_inspect"),(0,r.kt)("p",null,"Returns a detailed info on tx pool transactions. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Invocation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'{"method":"txpool_inspect","params":[]}'))))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"This method doesn't have parameters.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Returned type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"TxPoolInspection object")),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"request",label:"Request",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl --data \'{"method":"txpool_inspect","params":[],"id":1,"jsonrpc":"2.0"}\' -H "Content-Type: application/json" -X POST localhost:8545\n'))),(0,r.kt)(o.Z,{value:"response",label:"Response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'{\n  "jsonrpc": "2.0",\n  "result": {"0xb49928fcb10123e451cfe63aa47edcaea0f8aeea":{"20":"0xb49928fcb10123e451cfe63aa47edcaea0f8aeea: 0 wei + 6721975 \xd7 140000000000 gas","21":"0xb49928fcb10123e451cfe63aa47edcaea0f8aeea: 0 wei + 6721975 \xd7 140000000000 gas","22":"0xb49928fcb10123e451cfe63aa47edcaea0f8aeea: 0 wei + 6721975 \xd7 140000000000 gas","23":"0xb49928fcb10123e451cfe63aa47edcaea0f8aeea: 0 wei + 6700000 \xd7 140000000000 gas","24":"0xb49928fcb10123e451cfe63aa47edcaea0f8aeea: 0 wei + 6700000 \xd7 140000000000 gas","27":"0xb49928fcb10123e451cfe63aa47edcaea0f8aeea: 0 wei + 6700000 \xd7 140000000000 gas"},"0xc51db3339a7603f70b347a0b9680554f777d1f3c":{"82":"0xc51db3339a7603f70b347a0b9680554f777d1f3c: 0 wei + 4500000 \xd7 10000000000 gas"},"0x084dd4aefc6853253573fee9f5fcc23e849d164c":{"17":"0x084dd4aefc6853253573fee9f5fcc23e849d164c: 0 wei + 28472169 \xd7 1000000008 gas"}},\n  "id": 1\n}\n'))),(0,r.kt)(o.Z,{value:"objects",label:"Object",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TxPoolInspection")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Pending"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Array"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Queued"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Array"))))))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.nethermind.io/nethermind/nethermind-utilities/cli/txpool#txpool-inspect"},"See also CLI txpool.inspect")),(0,r.kt)("h2",{id:"txpool_status"},"txpool_status"),(0,r.kt)("p",null,"Returns a tx pool status. "),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Invocation"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},'{"method":"txpool_status","params":[]}'))))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"This method doesn't have parameters.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Returned type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"TxPoolStatus object")),(0,r.kt)("td",{parentName:"tr",align:"left"})))),(0,r.kt)(l.Z,{mdxType:"Tabs"},(0,r.kt)(o.Z,{value:"request",label:"Request",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl --data \'{"method":"txpool_status","params":[],"id":1,"jsonrpc":"2.0"}\' -H "Content-Type: application/json" -X POST localhost:8545\n'))),(0,r.kt)(o.Z,{value:"response",label:"Response",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'{\n  "jsonrpc": "2.0",\n  "result": {"pending":1010,"queued":14},\n  "id": 1\n}\n'))),(0,r.kt)(o.Z,{value:"objects",label:"Object",mdxType:"TabItem"},(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TxPoolStatus")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Field name"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Pending"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Quantity"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Queued"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"Quantity"))))))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.nethermind.io/nethermind/nethermind-utilities/cli/txpool#txpool-status"},"See also CLI txpool.status")))}b.isMDXComponent=!0}}]);