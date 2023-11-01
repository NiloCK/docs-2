"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8039],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),p=s,m=d["".concat(l,".").concat(p)]||d[p]||h[p]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var o=n.length,a=new Array(o);a[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[d]="string"==typeof e?e:s,a[1]=i;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>a});var r=n(7294),s=n(6010);const o={tabItem:"tabItem_Ymn6"};function a(e){let{children:t,hidden:n,className:a}=e;return r.createElement("div",{role:"tabpanel",className:(0,s.Z)(o.tabItem,a),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>v});var r=n(7462),s=n(7294),o=n(6010),a=n(2466),i=n(6550),l=n(1980),u=n(7392),c=n(12);function d(e){return function(e){return s.Children.map(e,(e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}function h(e){const{values:t,children:n}=e;return(0,s.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,s.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=h(e),[a,i]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[l,u]=m({queryString:n,groupId:r}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,s.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),b=(()=>{const e=l??d;return p({value:e,tabValues:o})?e:null})();(0,s.useLayoutEffect)((()=>{b&&i(b)}),[b]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var b=n(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:n,selectedValue:i,selectValue:l,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.o5)(),h=e=>{const t=e.currentTarget,n=c.indexOf(t),r=u[n].value;r!==i&&(d(t),l(r))},p=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:a}=e;return s.createElement("li",(0,r.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>c.push(e),onKeyDown:p,onClick:h},a,{className:(0,o.Z)("tabs__item",k.tabItem,a?.className,{"tabs__item--active":i===t})}),n??t)})))}function g(e){let{lazy:t,children:n,selectedValue:r}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return s.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function w(e){const t=f(e);return s.createElement("div",{className:(0,o.Z)("tabs-container",k.tabList)},s.createElement(y,(0,r.Z)({},e,t)),s.createElement(g,(0,r.Z)({},e,t)))}function v(e){const t=(0,b.Z)();return s.createElement(w,(0,r.Z)({key:String(t)},e))}},105:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var r=n(7462),s=(n(7294),n(3905)),o=n(4866),a=n(5162);const i={title:"Known issues",sidebar_position:3},l=void 0,u={unversionedId:"resources/known-issues",id:"resources/known-issues",title:"Known issues",description:"File descriptor limits",source:"@site/docs/resources/known-issues.md",sourceDirName:"resources",slug:"/resources/known-issues",permalink:"/docs/resources/known-issues",draft:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/docs/resources/known-issues.md",tags:[],version:"current",lastUpdatedAt:1698874726,formattedLastUpdatedAt:"Nov 1, 2023",sidebarPosition:3,frontMatter:{title:"Known issues",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Firewall Configuration",permalink:"/docs/resources/firewall-configuration"}},c={},d=[{value:"File descriptor limits",id:"file-descriptor-limits",level:2},{value:"RocksDB checksum issue",id:"rocksdb-checksum-issue",level:2},{value:"Database LOCK files not removed by RocksDB",id:"database-lock-files-not-removed-by-rocksdb",level:2},{value:"Leaking Socket Descriptors",id:"leaking-socket-descriptors",level:2},{value:"RocksDB on macOS",id:"rocksdb-on-macos",level:2},{value:"Skipping consensus issues blocks",id:"skipping-consensus-issues-blocks",level:2},{value:"Main issues reported so far when using Nethermind for Eth2 (30.11.2020)",id:"main-issues-reported-so-far-when-using-nethermind-for-eth2-30112020",level:2}],h={toc:d},p="wrapper";function m(e){let{components:t,...n}=e;return(0,s.kt)(p,(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"file-descriptor-limits"},"File descriptor limits"),(0,s.kt)("p",null,'In some cases, file descriptor limits may cause issues like "Too many open files". To solve that, see the instructions for your platform below.'),(0,s.kt)(o.Z,{groupId:"os",mdxType:"Tabs"},(0,s.kt)(a.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,s.kt)("p",null,"To increase the limits for the user running Nethermind (e.g., ",(0,s.kt)("inlineCode",{parentName:"p"},"nethermind"),"), run:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'sudo echo "nethermind soft nofile 100000" > /etc/security/limits.d/nethermind.conf\nsudo echo "nethermind hard nofile 100000" >> /etc/security/limits.d/nethermind.conf\n'))),(0,s.kt)(a.Z,{value:"macos",label:"macOS",mdxType:"TabItem"},(0,s.kt)("p",null,"To increase the limits, run:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},"ulimit -n 10000\n")),(0,s.kt)("p",null,"If you run into issues with the above command, see the ",(0,s.kt)("a",{parentName:"p",href:"https://developer.apple.com/forums/thread/735798?answerId=762679022#762679022"},"workaround"),"."),(0,s.kt)("p",null,"Note that the changes above are temporary and will be reset after the system reboot. To make them permanent, you can add them to your ",(0,s.kt)("inlineCode",{parentName:"p"},"~/.bashrc")," or ",(0,s.kt)("inlineCode",{parentName:"p"},"~/.bash_profile")," shell configuration file."))),(0,s.kt)("h2",{id:"rocksdb-checksum-issue"},"RocksDB checksum issue"),(0,s.kt)("p",null,"Sometimes RocksDB may fail with an exception similar to the one below:"),(0,s.kt)("p",null,"2020-11-29 12:02:01.1968|BlockchainProcessor encountered an exception. RocksDbSharp.RocksDbException: Corruption: block\nchecksum mismatch: expected 2087346143, got 2983326672 in C:\\Nethermind\\nethermind","_","db/mainnet\\state/037463.sst offset\n33439089 size 16319"),(0,s.kt)("p",null,"On XFS file system under very high memory pressure, this tend to happen. Turning on the\nflag ",(0,s.kt)("inlineCode",{parentName:"p"},"--Db.UseDirectIoForFlushAndCompactions true"),"will help, although it might reduce performance."),(0,s.kt)("p",null,"On most cases however, this is due to RAM module issue. Please run ",(0,s.kt)("a",{parentName:"p",href:"https://www.memtest86.com/"},"memtest86")," to check your\nmemory module."," "),(0,s.kt)("h2",{id:"database-lock-files-not-removed-by-rocksdb"},"Database LOCK files not removed by RocksDB"),(0,s.kt)("p",null,"If the node complains about the LOCK files it may mean one of the two things:"),(0,s.kt)("p",null,"(1) another Nethermind process is running and using the same DB"),(0,s.kt)("p",null,"(2) previous process did not close the DB properly"),(0,s.kt)("p",null,"When (2) happens you can run"),(0,s.kt)("p",null,(0,s.kt)("inlineCode",{parentName:"p"},"find . -type f -name 'LOCK' -delete")),(0,s.kt)("p",null,"in the database folder."),(0,s.kt)("h2",{id:"leaking-socket-descriptors"},"Leaking Socket Descriptors"),(0,s.kt)("p",null,"On Linux our networking library is not closing socket descriptors properly. This results in the number of open files for\nthe process growing indefinitely. Limits for the number of open files per process are different for root and other\nusers. For root the limits are usually very high and the socket descriptors would probably not cause much trouble. Many\nof the cloud operators are launching VMs with root user access by default. If Nethermind process is frequently killed by\nOS then you may need to change the configuration for the maximum number of open files."),(0,s.kt)("h2",{id:"rocksdb-on-macos"},"RocksDB on macOS"),(0,s.kt)("p",null,"RocksDB library does not always load properly on macOS. One (hacky) workaround is to install the latest version of\nRocksDB by running brew install rocksdb."),(0,s.kt)("h2",{id:"skipping-consensus-issues-blocks"},"Skipping consensus issues blocks"),(0,s.kt)("p",null,"We do our best in Nethermind not to have consensus issues with other clients. But historically consensus issues had\nhappened. In that case we start working on a hotfix immediately and release it within hours time. If you need your node\nto be operational ASAP and can\u2019t wait for hotfix you do have an option to achieve that. Nethermind node allows you to\nfast sync to recent blocks and state. When node does fast sync it can skip over processing problematic blocks. In order\nto be able to fast sync we need SyncConfig.FastSync to be set to \u2018true\u2019. You also need to set\nSyncConfig.FastSyncCatchUpHeightDelta to a value lower than how far your node is behind the chain.\nSyncConfig.FastSyncCatchUpHeightDelta is the minimum difference between current chain height and chain head block number\nwhen node can switch from full sync (block processing) to fast sync. By default it is set to 1024. Please note that we\ndon\u2019t recommend setting this value to less than 32 in normal circumstances. After setting those values and restarting\nnode, the node will download block headers, bodies (if SyncConfig.DownloadBodiesInFastSync is \u2018true\u2019), receipts (if\nSyncConfig.DownloadReceiptsInFastSync is \u2018true\u2019) and current state. After that it will resume processing from new head\nblock. Please note that the historical state for skipped blocks might not be available. This can cause some JSON RPC\ncalls on the historical state not to work - same situation as if these blocks state was pruned."),(0,s.kt)("p",null,"For example if current chain head block number is 10,000,100 and node couldn\u2019t process block 10,000,000 due to consensus\nissue, if you set FastSync:true and FastSyncCatchUpHeightDelta:100 (or as low as 32) and node should switch to fast\nsync, catch up with current chain head and switch back to full sync."),(0,s.kt)("p",null,"The time that it will take to fast sync to current chain head can take even up to 2 hours depending how many blocks and\nhow much new state there is to be downloaded."),(0,s.kt)("h1",{id:"eth2-issues"},"ETH2 issues"),(0,s.kt)("h2",{id:"main-issues-reported-so-far-when-using-nethermind-for-eth2-30112020"},"Main issues reported so far when using Nethermind for Eth2 (30.11.2020)"),(0,s.kt)("admonition",{type:"caution"},(0,s.kt)("ul",{parentName:"admonition"},(0,s.kt)("li",{parentName:"ul"},"users who synced before version ",(0,s.kt)("strong",{parentName:"li"},"1.9.41")," and were not aware that old configs were ",(0,s.kt)("strong",{parentName:"li"},"not")," supporting Eth2 by default\nhad to resync with ",(0,s.kt)("strong",{parentName:"li"},"1.9.41")," (and they are reporting successful setups now)"," "),(0,s.kt)("li",{parentName:"ul"},"users who synced with ",(0,s.kt)("inlineCode",{parentName:"li"},"AncientReceiptsBarrier")," (limiting disk space) cannot use ",(0,s.kt)("strong",{parentName:"li"},"Teku")," and ",(0,s.kt)("strong",{parentName:"li"},"have to switch")," to *\n*Prysm",(0,s.kt)("strong",{parentName:"li"}," or "),"Lighthouse**"),(0,s.kt)("li",{parentName:"ul"},"two users reported that their fully synced nodes on Windows 10 Pro failed after a few blocks (please let us know if\nyou have seen a similar issue)"),(0,s.kt)("li",{parentName:"ul"},"(fixed in 1.9.45) users are reporting issues on a hard shutdown of VMs / machines with Nethermind running - some\ndatabase corruptions occur often ",(0,s.kt)("strong",{parentName:"li"},"requiring a resync")),(0,s.kt)("li",{parentName:"ul"},"users had trouble to sync node on a ZFS file system but this has been ",(0,s.kt)("strong",{parentName:"li"},"resolved after removing ZFS")),(0,s.kt)("li",{parentName:"ul"},"users reported an issue where RocksDB was displaying a ",(0,s.kt)("inlineCode",{parentName:"li"},"checksum mismatch")," error in the logs -> ",(0,s.kt)("strong",{parentName:"li"},"restarting a VM (not\nNethermind, but the machine) helped")),(0,s.kt)("li",{parentName:"ul"},"if you tried to launch Lighthouse with the old Nethermind (pre ",(0,s.kt)("strong",{parentName:"li"},"1.9.41"),") which failed and then resynced Nethermind\nand you are still getting errors then ",(0,s.kt)("strong",{parentName:"li"},"wiping the Lighthouse DB and starting again will solve it."),"\n:::"))))}m.isMDXComponent=!0}}]);