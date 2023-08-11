"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5251],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=a.createContext({}),d=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=d(e.components);return a.createElement(s.Provider,{value:n},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=d(t),m=i,h=p["".concat(s,".").concat(m)]||p[m]||u[m]||r;return t?a.createElement(h,o(o({ref:n},c),{},{components:t})):a.createElement(h,o({ref:n},c))}));function h(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[p]="string"==typeof e?e:i,o[1]=l;for(var d=2;d<r;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6745:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var a=t(7462),i=(t(7294),t(3905));const r={description:"Set of validators sealing blocks on private clique network"},o="How to setup a Nethermind only Clique based chain",l={unversionedId:"fundamentals/private-networks/how-to-setup-a-nethermind-only-clique-based-chain",id:"fundamentals/private-networks/how-to-setup-a-nethermind-only-clique-based-chain",title:"How to setup a Nethermind only Clique based chain",description:"Set of validators sealing blocks on private clique network",source:"@site/docs/02-fundamentals/09-private-networks/how-to-setup-a-nethermind-only-clique-based-chain.md",sourceDirName:"02-fundamentals/09-private-networks",slug:"/fundamentals/private-networks/how-to-setup-a-nethermind-only-clique-based-chain",permalink:"/docs/fundamentals/private-networks/how-to-setup-a-nethermind-only-clique-based-chain",draft:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/docs/02-fundamentals/09-private-networks/how-to-setup-a-nethermind-only-clique-based-chain.md",tags:[],version:"current",frontMatter:{description:"Set of validators sealing blocks on private clique network"},sidebar:"tutorialSidebar",previous:{title:"Private Networks",permalink:"/docs/fundamentals/private-networks/"},next:{title:"How to setup a Nethermind only Spaceneth based chain",permalink:"/docs/fundamentals/private-networks/how-to-setup-a-nethermind-only-spaceneth-based-chain"}},s={},d=[{value:"TL;DR",id:"tldr",level:3},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Manual setup",id:"manual-setup",level:3}],c={toc:d},p="wrapper";function u(e){let{components:n,...r}=e;return(0,i.kt)(p,(0,a.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"how-to-setup-a-nethermind-only-clique-based-chain"},"How to setup a Nethermind only Clique based chain"),(0,i.kt)("h3",{id:"tldr"},"TL;DR"),(0,i.kt)("p",null,"Download a script that will do all the steps described below for you. It will prompt you 2 things:"," "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Confirm installation of required packages"),(0,i.kt)("li",{parentName:"ul"},"The number of Validators you wish to run in your private network")),(0,i.kt)("p",null,"Script can be\nfound ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NethermindEth/nethermind/blob/master/scripts/private-networking/clique-validators.sh"},"here")),(0,i.kt)("p",null,"or use this command to download it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://raw.githubusercontent.com/NethermindEth/nethermind/master/scripts/private-networking/clique-validators.sh\n")),(0,i.kt)("p",null,"Finally give the script permissions and run it (script requires ",(0,i.kt)("inlineCode",{parentName:"p"},"sudo")," privileges):"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"chmod +x clique-validators.sh\n./clique-validators.sh\n")),(0,i.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Linux bash shell"),(0,i.kt)("li",{parentName:"ul"},"Docker-compose"),(0,i.kt)("li",{parentName:"ul"},"Docker"),(0,i.kt)("li",{parentName:"ul"},"jq"),(0,i.kt)("li",{parentName:"ul"},"openssl")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install -y docker-compose docker.io jq openssl\n")),(0,i.kt)("h3",{id:"manual-setup"},"Manual setup"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"All these steps are automated and written in the above ",(0,i.kt)("inlineCode",{parentName:"p"},"clique-validators.sh")," script.")),(0,i.kt)("p",null,"In this setup we will create a private network of 3 Nethermind nodes running Clique consensus algorithm."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"create separate directory where we will store all files")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir private-networking\ncd private-networking\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"create folders for each node and genesis")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir node_1 node_2 node_3 genesis\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"download chainspec file with clique engine and place it in genesis folder (we will be using goerli chainspec in this\nexample)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"wget https://raw.githubusercontent.com/NethermindEth/nethermind/09389fc28b37605acc5eaed764d3e973969fe319/src/Nethermind/Chains/goerli.json\ncp goerli.json genesis/goerli.json\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"create subfolders in each node folder")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir node_1/configs node_2/configs node_3/configs\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"create a ",(0,i.kt)("inlineCode",{parentName:"li"},"static-nodes.json")," file and place it in working directory")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cat <<EOF > static-nodes.json\n[\n\n]\nEOF\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"create ",(0,i.kt)("inlineCode",{parentName:"li"},"config.cfg")," file and place it in ",(0,i.kt)("inlineCode",{parentName:"li"},"node_1/configs")," subfolders (do this for node","_","2 and node","_","3 as well)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'cat <<EOF > node_1/configs/config.cfg\n{\n    "Init": {\n        "WebSocketsEnabled": false,\n        "StoreReceipts" : true,\n        "EnableUnsecuredDevWallet": true,\n        "IsMining": true,\n        "ChainSpecPath": "/config/genesis/goerli.json",\n        "BaseDbPath": "nethermind_db/clique",\n        "LogFileName": "clique.logs.txt",\n        "StaticNodesPath": "Data/static-nodes.json"\n    },\n    "Network": {\n        "DiscoveryPort": 30300,\n        "P2PPort": 30300,\n        "LocalIp": "10.5.0.2",\n        "ExternalIp": "10.5.0.2"\n    },\n    "JsonRpc": {\n        "Enabled": true,\n        "Host": "10.5.0.2",\n        "Port": 8545\n    },\n    "KeyStoreConfig": {\n        "TestNodeKey": "8687A55019CCA647F6C063F530D47E9A90725D62D853F4B973E589DB24CA9305"\n    }\n}\nEOF\n')),(0,i.kt)("p",null,"For each node you will need to change following items in configuration:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"TestNodeKey")," should be a 64 character length alphanumeric string. Can be generated with openssl for example (openssl\nrand -hex 32)."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"LocalIp"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"ExternalIp")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Host")," should have the same value and be incremented for each node e.g. 10.5.0.3, 10.5.0.4\nand so on and so forth.")),(0,i.kt)("p",null,"Copy docker-compose file and place it in working directory."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'version: "3.5"\nservices:\n\n  node_1:\n    image: nethermind/nethermind:1.10.17\n    command: --config config\n    container_name: node_1\n    volumes:\n      - ./genesis:/config/genesis\n      - ./node_1/configs/config.cfg:/nethermind/configs/config.cfg\n      - ./static-nodes.json:/nethermind/Data/static-nodes.json\n      - ./node_1/db/clique:/nethermind/nethermind_db/clique\n      - ./node_1/keystore:/nethermind/keystore\n    ports:\n      - 0.0.0.0:8547:8545\n    networks:\n      vpcbr:\n        ipv4_address: 10.5.0.2\n\n  node_2:\n    image: nethermind/nethermind:1.10.17\n    command: --config config\n    container_name: node_2\n    volumes:\n      - ./genesis:/config/genesis\n      - ./node_2/configs/config.cfg:/nethermind/configs/config.cfg\n      - ./static-nodes.json:/nethermind/Data/static-nodes.json\n      - ./node_2/db/clique:/nethermind/nethermind_db/clique\n      - ./node_2/keystore:/nethermind/keystore\n    ports:\n      - 0.0.0.0:8548:8545\n    networks:\n      vpcbr:\n        ipv4_address: 10.5.0.3\n\n  node_3:\n    image: nethermind/nethermind:1.10.17\n    command: --config config\n    container_name: node_3\n    volumes:\n      - ./genesis:/config/genesis\n      - ./node_3/configs/config.cfg:/nethermind/configs/config.cfg\n      - ./static-nodes.json:/nethermind/Data/static-nodes.json\n      - ./node_3/db/clique:/nethermind/nethermind_db/clique\n      - ./node_3/keystore:/nethermind/keystore\n    ports:\n      - 0.0.0.0:8549:8545\n    networks:\n      vpcbr:\n        ipv4_address: 10.5.0.4\n\nnetworks:\n  vpcbr:\n    driver: bridge\n    ipam:\n      config:\n        - subnet: 10.5.0.0/16\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"run each node separately so that we can copy ",(0,i.kt)("inlineCode",{parentName:"li"},"Enode")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Node address")," for each node, we will use them later")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose run node_1\n")),(0,i.kt)("p",null,"Stop the node when ",(0,i.kt)("inlineCode",{parentName:"p"},"Nethermind initialization")," completes ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl +C"),". Copy ",(0,i.kt)("inlineCode",{parentName:"p"},"This node")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Node address")," (without 0x\nprefixes) values to a text file. Continue with node","_","2 and node","_","3."),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"You can use ",(0,i.kt)("inlineCode",{parentName:"p"},"Nethermind.Cli")," to fetch these values from nodes by executing the following.\\\n",(0,i.kt)("inlineCode",{parentName:"p"},"Nethermind.Cli")," can be found in packages on ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NethermindEth/nethermind/releases"},"Github Releases"),"\nor ",(0,i.kt)("a",{parentName:"p",href:"http://downloads.nethermind.io/"},"Download Page"),".")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'node.switch("http://localhost:8547")\nnode.enode\nnode.address\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the file should look similar to this:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'SIGNER_1="b5bc4d9e63eb1cb16aeeb0fd08e8344283b45b0d"\nSTATIC_NODE_1="enode://2281549869465d98e90cebc45e1d6834a01465a990add7bcf07a49287e7e66b50ca27f9c70a46190cef7ad746dd5d5b6b9dfee0c9954104c8e9bd0d42758ec58@10.5.0.2:30300"\nSIGNER_2="c4e3a14d33f765faaca31672bd90d0c325bfa0cf"\nSTATIC_NODE_2="enode://37878ec16a5ed87c9c80b4648e5428f5c768eddd79483be118319c49d11c4e535dac328b5216696cefe0792b7b64adc4de3aeb377550651e982590e62e5a500e@10.5.0.3:30300"\nSIGNER_3="0076873eb11c627057834fdbdc7b391a33eb9f81"\nSTATIC_NODE_3="enode://6067f06d84c207e6233dacf1f3ef961bd7231f71d5425cbaf843cf19cfd5f7e13b024d234e4e5f6175bdb37c0bbccd14488b481b2280efb66d0631a20ae13ea3@10.5.0.4:30300"\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"copy & paste above variables into your terminal and create ",(0,i.kt)("inlineCode",{parentName:"li"},"EXTRA_VANITY")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"EXTRA_SEAL")," variables")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'EXTRA_VANITY="0x22466c6578692069732061207468696e6722202d204166726900000000000000"\nEXTRA_SEAL="0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"create ",(0,i.kt)("inlineCode",{parentName:"li"},"EXTRA_DATA")," variable accordingly\nto ",(0,i.kt)("a",{parentName:"li",href:"https://eips.ethereum.org/EIPS/eip-225"},"https://eips.ethereum.org/EIPS/eip-225"))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"EXTRA_DATA=${EXTRA_VANITY}${SIGNER_1}${SIGNER_2}${SIGNER_3}${EXTRA_SEAL}\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"in ",(0,i.kt)("inlineCode",{parentName:"li"},"goerli.json")," chainspec file, modify ",(0,i.kt)("inlineCode",{parentName:"li"},"extraData")," property in ",(0,i.kt)("inlineCode",{parentName:"li"},"genesis")," field")),(0,i.kt)("p",null,"You can do this either manually or using below command"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"cat goerli.json | jq '.genesis.extraData = '\\\"$EXTRA_DATA\\\"'' > genesis/goerli.json\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Modify the content of ",(0,i.kt)("inlineCode",{parentName:"li"},"static-nodes.json")," files by appending ",(0,i.kt)("inlineCode",{parentName:"li"},"Enodes")," to it")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'cat <<EOF > static-nodes.json\n[\n    "$STATIC_NODE_1",\n    "$STATIC_NODE_2",\n    "$STATIC_NODE_3"\n]\nEOF\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"remove databases for each node")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"sudo rm -rf node_1/db/clique node_2/db/clique node_3/db/clique\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"finally run docker-compose file")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"docker-compose up\n")),(0,i.kt)("p",null,"You should see the private network working and nodes sealing blocks in Clique consensus algorithm \ud83c\udf89"," "),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Clique validators sealing blocks in private network",src:t(2962).Z,width:"1202",height:"644"})))}u.isMDXComponent=!0},2962:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/image(8)-c167de574195bd72de2680358499de50.png"}}]);