"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6224],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>_});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function d(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):d(d({},t),e)),n},l=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},N=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),c=m(n),N=a,_=c["".concat(s,".").concat(N)]||c[N]||p[N]||i;return n?r.createElement(_,d(d({ref:t},l),{},{components:n})):r.createElement(_,d({ref:t},l))}));function _(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,d=new Array(i);d[0]=N;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[c]="string"==typeof e?e:a,d[1]=o;for(var m=2;m<i;m++)d[m]=n[m];return r.createElement.apply(null,d)}return r.createElement.apply(null,n)}N.displayName="MDXCreateElement"},3478:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>d,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var r=n(7462),a=(n(7294),n(3905));const i={},d="Network",o={unversionedId:"monitoring/metrics-explanation/network",id:"monitoring/metrics-explanation/network",title:"Network",description:"| Metric | Description |",source:"@site/docs/04-monitoring/metrics-explanation/network.md",sourceDirName:"04-monitoring/metrics-explanation",slug:"/monitoring/metrics-explanation/network",permalink:"/docs/monitoring/metrics-explanation/network",draft:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/docs/04-monitoring/metrics-explanation/network.md",tags:[],version:"current",lastUpdatedAt:1693686070,formattedLastUpdatedAt:"Sep 2, 2023",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Mev",permalink:"/docs/monitoring/metrics-explanation/mev"},next:{title:"Runner module",permalink:"/docs/monitoring/metrics-explanation/runner"}},s={},m=[],l={toc:m},c="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"network"},"Network"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"left"},"Metric"),(0,a.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_already_connected_disconnects"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of received disconnects due to already connected")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_breach_of_protocol_disconnects"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of received disconnects due to breach of protocol")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_client_quitting_disconnects"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of received disconnects due to client quitting")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_disconnect_requested_disconnects"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of received disconnects due to disconnect requested")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_eth62_block_bodies_received"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of eth.62 BlockBodies messages received")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_eth62_block_headers_received"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of eth.62 BlockHeaders messages received")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_eth62_get_block_bodies_received"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of eth.62 GetBlockBodies messages received")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_eth62_get_block_headers_received"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of eth.62 GetBlockHeaders messages received")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_eth62_new_block_hashes_received"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of eth.62 NewBlockHashes messages received")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_eth62_new_block_received"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of eth.62 NewBlock messages received")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_eth62_transactions_received"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of eth.62 Transactions messages received")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_eth63_get_node_data_received"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of eth.63 GetNodeData messages received")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_eth63_get_receipts_received"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of eth.63 GetReceipts messages received")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_eth63_node_data_received"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of eth.63 NodeData messages received")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_eth63_receipts_received"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of eth.63 Receipts messages received")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_eth65_get_pooled_transactions_received"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of eth.65 GetPooledTransactions messages received")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_eth65_get_pooled_transactions_requested"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of eth.65 GetPooledTransactions messages sent")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_eth65_new_pooled_transaction_hashes_received"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of eth.65 NewPooledTransactionHashes messages received")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_eth65_new_pooled_transaction_hashes_sent"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of eth.65 NewPooledTransactionHashes messages sent")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_eth65_pooled_transactions_received"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of eth.65 PooledTransactions messages received")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_eth66_block_bodies_received"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of eth.66 BlockBodies messages received")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_eth66_block_headers_received"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of eth.66 BlockHeaders messages received")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_eth66_get_block_bodies_received"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of eth.66 GetBlockBodies messages received")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_eth66_get_block_headers_received"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of eth.66 GetBlockHeaders messages received")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_eth66_get_node_data_received"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of eth.66 GetNodeData messages received")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_eth66_get_pooled_transactions_received"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of eth.66 GetPooledTransactions messages received")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_eth66_get_pooled_transactions_requested"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of eth.66 GetPooledTransactions messages sent")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_eth66_get_receipts_received"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of eth.66 GetReceipts messages received")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_eth66_node_data_received"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of eth.66 NodeData messages received")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_eth66_pooled_transactions_received"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of eth.66 PooledTransactions messages received")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_eth66_receipts_received"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of eth.66 Receipts messages received")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_eth68_new_pooled_transaction_hashes_received"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of eth.68 NewPooledTransactionHashes messages received")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_eth68_new_pooled_transaction_hashes_sent"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of eth.68 NewPooledTransactionHashes messages sent")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_handshakes"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of devp2p handshakes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_handshake_timeouts"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of devp2p handshke timeouts")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_hellos_received"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of devp2p hello messages received")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_hellos_sent"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of devp2p hello messages sent")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_incoming_connections"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of incoming connection.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_incompatible_p2_p_disconnects"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of received disconnects due to incompatible devp2p version")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_les_statuses_received"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of les status messages received")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_les_statuses_sent"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of les status messages sent")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_local_already_connected_disconnects"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of initiated disconnects due to already connected")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_local_breach_of_protocol_disconnects"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of sent disconnects due to breach of protocol")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_local_client_quitting_disconnects"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of initiated disconnects due to client quitting")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_local_disconnect_requested_disconnects"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of initiated disconnects due to disconnect requested")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_local_disconnects_total"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of local disconnects")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_local_incompatible_p2_p_disconnects"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of initiated disconnects due to incompatible devp2p")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_local_null_node_identity_disconnects"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of initiated disconnects due to missing node identity")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_local_other_disconnects"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of initiated disconnects due to other reason")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_local_receive_message_timeout_disconnects"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of initiated disconnects due to request timeout")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_local_same_as_self_disconnects"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of initiated disconnects due to connection to self")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_local_tcp_subsystem_error_disconnects"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of initiated disconnects due to TCP error")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_local_too_many_peers_disconnects"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of initiated disconnects due to breach of protocol")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_local_unexpected_identity_disconnects"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of initiated disconnects due to node identity info mismatch")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_local_useless_peer_disconnects"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of sent disconnects due to useless peer")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_null_node_identity_disconnects"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of received disconnects due to missing peer identity")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_other_disconnects"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of received disconnects due to other reasons")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_outgoing_connections"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of outgoing connection.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_peer_limit"),(0,a.kt)("td",{parentName:"tr",align:"left"},"The maximum number of peers this node allows to connect.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_receive_message_timeout_disconnects"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of received disconnects due to request timeouts")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_remote_disconnects_total"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of remote disconnects")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_same_as_self_disconnects"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of received disconnects due to connecting to self")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_snap_account_range_received"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of SNAP AccountRange messages received")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_snap_byte_codes_received"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of SNAP ByteCodes messages received")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_snap_get_account_range_received"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of SNAP GetAccountRange messages received")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_snap_get_account_range_sent"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of SNAP GetAccountRange messages sent")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_snap_get_byte_codes_received"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of SNAP GetByteCodes messages received")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_snap_get_byte_codes_sent"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of SNAP GetByteCodes messages sent")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_snap_get_storage_ranges_received"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of SNAP GetStorageRanges messages received")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_snap_get_storage_ranges_sent"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of SNAP GetStorageRanges messages sent")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_snap_get_trie_nodes_received"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of SNAP GetTrieNodes messages received")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_snap_get_trie_nodes_sent"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of SNAP GetTrieNodes messages sent")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_snap_storage_ranges_received"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of SNAP StorageRanges messages received")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_snap_trie_nodes_received"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of SNAP TrieNodes messages received")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_statuses_received"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of eth status messages received")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_statuses_sent"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of eth status messages sent")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_tcp_subsystem_error_disconnects"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of disconnects due to TCP error")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_too_many_peers_disconnects"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of received disconnects due to too many peers")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_unexpected_identity_disconnects"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of received disconnects due to peer identity information mismatch")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"left"},"nethermind_useless_peer_disconnects"),(0,a.kt)("td",{parentName:"tr",align:"left"},"Number of received disconnects due to useless peer")))))}p.isMDXComponent=!0}}]);