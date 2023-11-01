"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2128],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),p=u(n),c=r,h=p["".concat(s,".").concat(c)]||p[c]||m[c]||i;return n?a.createElement(h,l(l({ref:t},d),{},{components:n})):a.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[p]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(6010);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(i.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(7462),r=n(7294),i=n(6010),l=n(2466),o=n(6550),s=n(1980),u=n(7392),d=n(12);function p(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}function m(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??p(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function c(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const a=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(i),(0,r.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(a.location.search);t.set(i,e),a.replace({...a.location,search:t.toString()})}),[i,a])]}function k(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,i=m(e),[l,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!c({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:i}))),[s,u]=h({queryString:n,groupId:a}),[p,k]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,i]=(0,d.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:a}),f=(()=>{const e=s??p;return c({value:e,tabValues:i})?e:null})();(0,r.useLayoutEffect)((()=>{f&&o(f)}),[f]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!c({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),k(e)}),[u,k,i]),tabValues:i}}var f=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:o,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:p}=(0,l.o5)(),m=e=>{const t=e.currentTarget,n=d.indexOf(t),a=u[n].value;a!==o&&(p(t),s(a))},c=e=>{let t=null;switch(e.key){case"Enter":m(e);break;case"ArrowRight":{const n=d.indexOf(e.currentTarget)+1;t=d[n]??d[0];break}case"ArrowLeft":{const n=d.indexOf(e.currentTarget)-1;t=d[n]??d[d.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>d.push(e),onKeyDown:c,onClick:m},l,{className:(0,i.Z)("tabs__item",g.tabItem,l?.className,{"tabs__item--active":o===t})}),n??t)})))}function N(e){let{lazy:t,children:n,selectedValue:a}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function y(e){const t=k(e);return r.createElement("div",{className:(0,i.Z)("tabs-container",g.tabList)},r.createElement(b,(0,a.Z)({},e,t)),r.createElement(N,(0,a.Z)({},e,t)))}function v(e){const t=(0,f.Z)();return r.createElement(y,(0,a.Z)({key:String(t)},e))}},6538:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>u,toc:()=>p});var a=n(7462),r=(n(7294),n(3905)),i=n(4866),l=n(5162);const o={title:"Installing Nethermind",sidebar_position:2},s=void 0,u={unversionedId:"get-started/installing-nethermind",id:"get-started/installing-nethermind",title:"Installing Nethermind",description:"Nethermind can be installed in several ways:",source:"@site/docs/get-started/installing-nethermind.md",sourceDirName:"get-started",slug:"/get-started/installing-nethermind",permalink:"/docs/get-started/installing-nethermind",draft:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/docs/get-started/installing-nethermind.md",tags:[],version:"current",lastUpdatedAt:1698874726,formattedLastUpdatedAt:"Nov 1, 2023",sidebarPosition:2,frontMatter:{title:"Installing Nethermind",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"System requirements",permalink:"/docs/get-started/system-requirements"},next:{title:"Consensus clients",permalink:"/docs/get-started/consensus-clients"}},d={},p=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Ubuntu and Debian-based distros",id:"ubuntu-and-debian-based-distros",level:4},{value:"CentOS, Fedora, and RHEL-like distros",id:"centos-fedora-and-rhel-like-distros",level:4},{value:"Package managers",id:"package-managers",level:2},{value:"Standalone downloads",id:"standalone-downloads",level:2},{value:"Confuguring as a Linux service",id:"confuguring-as-a-linux-service",level:3},{value:"Docker container",id:"docker-container",level:2},{value:"Running Nethermind",id:"running",level:2},{value:"Supported networks",id:"supported-networks",level:3}],m={toc:p},c="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Nethermind can be installed in several ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#package-managers"},"Via a package manager")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#standalone-downloads"},"As a standalone download")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#docker-container"},"As a Docker container")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/docs/developers/building-from-source"},"By building from source code"))),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Does not apply to Docker distributions.")),(0,r.kt)("p",null,"Before installing Nethermind, your specific platform might need the following prerequisites."),(0,r.kt)(i.Z,{groupId:"os",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,r.kt)("p",null,"On Linux systems, Snappy is a required dependency. Below are the installation instructions for the supported distros."),(0,r.kt)("h4",{id:"ubuntu-and-debian-based-distros"},"Ubuntu and Debian-based distros"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install libsnappy-dev\n")),(0,r.kt)("h4",{id:"centos-fedora-and-rhel-like-distros"},"CentOS, Fedora, and RHEL-like distros"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo dnf install snappy\n")),(0,r.kt)("p",null,"On RHEL-like systems, Nethermind also requires the following symlink to bzip2:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'sudo ln -s `find /usr/lib64/ -type f -name "libbz2.so.1*"` /usr/lib64/libbz2.so.1.0\n'))),(0,r.kt)(l.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,r.kt)("p",null,"Although the modern versions of Windows are bundled with a recent version of ",(0,r.kt)("a",{parentName:"p",href:"https://aka.ms/vcredist"},"Microsoft Visual C++ Redistributable"),", in some cases, it may need an update:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"winget install Microsoft.VCRedist.2015+.x64\n"))),(0,r.kt)(l.Z,{value:"macos",label:"macOS",mdxType:"TabItem"},"None")),(0,r.kt)("h2",{id:"package-managers"},"Package managers"),(0,r.kt)("p",null,"Package managers are the easiest and fastest way of installing Nethermind."),(0,r.kt)(i.Z,{groupId:"os",mdxType:"Tabs"},(0,r.kt)(l.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,r.kt)("p",null,"On Ubuntu and other Linux distros supporting PPA, Nethermind can be installed via Launchpad PPA."),(0,r.kt)("p",null,"First, add the Nethermind repository:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo add-apt-repository ppa:nethermindeth/nethermind\n")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If the command is not found, run:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install software-properties-common\n"))),(0,r.kt)("p",null,"Then, install Nethermind as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get update\nsudo apt-get install nethermind\n"))),(0,r.kt)(l.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,r.kt)("p",null,"On Windows, Nethermind can be installed via Windows Package Manager as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-powershell"},"winget install nethermind\n"))),(0,r.kt)(l.Z,{value:"macos",label:"macOS",mdxType:"TabItem"},(0,r.kt)("p",null,"On macOS, Nethermind can be installed via Homebrew."),(0,r.kt)("p",null,"First, add the Nethermind repository:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"brew tap nethermindeth/nethermind\n")),(0,r.kt)("p",null,"Then, install Nethermind as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"brew install nethermind\n")))),(0,r.kt)("p",null,"For further instructions, see ",(0,r.kt)("a",{parentName:"p",href:"#running"},"Running Nethermind"),"."),(0,r.kt)("h2",{id:"standalone-downloads"},"Standalone downloads"),(0,r.kt)("p",null,"Standalone downloads give users more flexibility by allowing them to install a specific version of Nethermind, choose the installation location, and prevent automatic updates."),(0,r.kt)("p",null,"Standalone downloads are available on ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/NethermindEth/nethermind/releases"},"GitHub Releases")," and at ",(0,r.kt)("a",{parentName:"p",href:"https://downloads.nethermind.io"},"downloads.nethermind.io")," as ZIP archives for x64 and AArch64 (ARM64) CPU architectures for Linux, Windows, and macOS."),(0,r.kt)("h3",{id:"confuguring-as-a-linux-service"},"Confuguring as a Linux service"),(0,r.kt)("p",null,"To install Nethermind as a Linux service, see the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/NethermindEth/nethermind/blob/master/scripts/nethermind.service"},"nethermind.service")," unit file as an example.\nAs it's configured to run Nethermind as the specific user and group and looks for the executable in a predefined location, the following steps need to be fulfilled:"),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Any of these steps can be omitted by replacing them with corresponding changes in the unit file.\nFor instance, if you want to run Nethermind as a different user, change the ",(0,r.kt)("inlineCode",{parentName:"p"},"User")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Group")," options in the unit file.")),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Create a new user and group:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash"}," # Create a new user and group\n sudo useradd -m -s /bin/bash nethermind\n \n # Increase the maximum number of open files\n sudo bash -c 'echo \"nethermind soft nofile 100000\" > /etc/security/limits.d/nethermind.conf'\n sudo bash -c 'echo \"nethermind hard nofile 100000\" >> /etc/security/limits.d/nethermind.conf'\n \n # Switch to the nethermind user\n sudo su -l nethermind\n \n # Create required directories\n # Note that the home directory (~) is now /home/nethermind\n mkdir ~/build\n mkdir ~/data\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"#standalone-downloads"},"Download Nethermind")," and extract the package contents to the ",(0,r.kt)("inlineCode",{parentName:"p"},"~/build")," directory.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Configure options in the ",(0,r.kt)("inlineCode",{parentName:"p"},"~/.env")," file:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-bash",metastring:'title="~/.env"',title:'"~/.env"'},'# Required\nNETHERMIND_CONFIG="mainnet"\n\n# Optional\nNETHERMIND_HEALTHCHECKSCONFIG_ENABLED="true" \n')))),(0,r.kt)("p",null,"Now, let's set up the Linux service:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"# Download the unit file\ncurl -L https://raw.githubusercontent.com/NethermindEth/nethermind/master/scripts/nethermind.service -o nethermind.service\n\n# Move the unit file to the systemd directory\nsudo mv nethermind.service /etc/systemd/system\n\n# Reload the systemd daemon\nsudo systemctl daemon-reload\n\n# Start the service\nsudo systemctl start nethermind\n\n# Optionally, enable the service to start on boot\nsudo systemctl enable nethermind\n")),(0,r.kt)("p",null,"To ensure the service is up and running, check its status as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo systemctl status nethermind\n")),(0,r.kt)("p",null,"To monitor the Nethermind output, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"journalctl -u nethermind -f\n")),(0,r.kt)("p",null,"For further instructions, see ",(0,r.kt)("a",{parentName:"p",href:"#running"},"Running Nethermind"),"."),(0,r.kt)("h2",{id:"docker-container"},"Docker container"),(0,r.kt)("p",null,"The Docker images of Nethermind are available on ",(0,r.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/nethermind/nethermind"},"Docker Hub"),"."),(0,r.kt)("p",null,"This registry provides production versions of Nethermind with two types of tags:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nethermind/nethermind:latest")," is the latest version of Nethermind (the default tag)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"nethermind/nethermind:<version>")," is the specific version of Nethermind where ",(0,r.kt)("inlineCode",{parentName:"li"},"<version>")," is the actual version of Nethermind.")),(0,r.kt)("p",null,"To download the image from the registry, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker pull nethermind/nethermind\n")),(0,r.kt)("p",null,"Starting a node is achieved by:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it nethermind/nethermind\n")),(0,r.kt)("p",null,"The following ports are exposed by default:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"8545"),": TCP, for the JSON-RPC interface"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"8551"),": TCP, for the consensus client JSON-RPC interface"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"30303"),": TCP and UDP, for P2P networking")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"It's highly recommended to mount data volumes as the Nethermind's data directories to ensure the synced data is preserved between the container restarts.")),(0,r.kt)("p",null,"The following volume mount points are available by default:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/nethermind/nethermind_db"),": used to store the database"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/nethermind/logs"),": used to store the logs"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/nethermind/keystore"),": used to store the keys")),(0,r.kt)("p",null,"To mount separate volumes for each directory listed above, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it \\\n  --mount type=bind,source=path/to/db,target=/nethermind/nethermind_db \\\n  --mount type=bind,source=path/to/logs,target=/nethermind/logs \\\n  --mount type=bind,source=path/to/keystore,target=/nethermind/keystore \\\n  nethermind/nethermind\n")),(0,r.kt)("p",null,"Alternatively, a single volume can be specified as the Nethermind data directory as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -it \\\n  --mount type=bind,source=path/to/data_dir,target=/nethermind/data_dir \\\n  nethermind/nethermind -dd /nethermind/data_dir\n")),(0,r.kt)("p",null,"Note that any Nethermind-specific configuration option can be specified at the end. For instance, the ",(0,r.kt)("inlineCode",{parentName:"p"},"-dd")," option in this case. For further instructions, see ",(0,r.kt)("a",{parentName:"p",href:"#running"},"Running Nethermind"),"."),(0,r.kt)("p",null,"To build the Docker image yourself, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/developers/building-from-source#bulding-docker-image"},"Building Docker image"),"."),(0,r.kt)("h2",{id:"running"},"Running Nethermind"),(0,r.kt)("admonition",{title:"Important",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"A ",(0,r.kt)("a",{parentName:"p",href:"/docs/get-started/consensus-clients"},"consensus client")," of your choice must be running before you start Nethermind.")),(0,r.kt)("p",null,"Nethermind is mainly controlled by command line options (aka arguments or flags)."),(0,r.kt)("p",null,"The full list of options can be displayed by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nethermind -h\n")),(0,r.kt)("p",null,"For instance, to launch the client with the default configuration for the Mainnet and custom data directory, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"nethermind -c mainnet -dd path/to/data/dir\n")),(0,r.kt)("p",null,"For detailed info about the available configuration options, see ",(0,r.kt)("a",{parentName:"p",href:"/docs/fundamentals/configuration"},"Configuration"),"."),(0,r.kt)("h3",{id:"supported-networks"},"Supported networks"),(0,r.kt)("p",null,"To run Nethermind on a specific network, use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/fundamentals/configuration#basic-options"},(0,r.kt)("inlineCode",{parentName:"a"},"-c, --config"))," command line option. Currently, the following networks are supported out of the box:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Chiado")," (testnet)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Energy Web")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Exosama")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Goerli")," (testnet)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Gnosis")," "),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Holesky")," (testnet)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Mainnet")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Sepolia")," (testnet)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Volta")," (testnet)")))}h.isMDXComponent=!0}}]);