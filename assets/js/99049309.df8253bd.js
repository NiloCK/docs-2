"use strict";(self.webpackChunknethermind_docs=self.webpackChunknethermind_docs||[]).push([[4834],{961:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>d,toc:()=>h});var s=t(5893),r=t(1151),i=t(4866),a=t(5162);const l={title:"Installing Nethermind",sidebar_position:2},o=void 0,d={id:"get-started/installing-nethermind",title:"Installing Nethermind",description:"Nethermind can be installed in several ways:",source:"@site/versioned_docs/version-v1.25.0/get-started/installing-nethermind.md",sourceDirName:"get-started",slug:"/get-started/installing-nethermind",permalink:"/get-started/installing-nethermind",draft:!1,unlisted:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/versioned_docs/version-v1.25.0/get-started/installing-nethermind.md",tags:[],version:"v1.25.0",lastUpdatedAt:1706293321,formattedLastUpdatedAt:"Jan 26, 2024",sidebarPosition:2,frontMatter:{title:"Installing Nethermind",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"System requirements",permalink:"/get-started/system-requirements"},next:{title:"Consensus clients",permalink:"/get-started/consensus-clients"}},c={},h=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Ubuntu and Debian-based distros",id:"ubuntu-and-debian-based-distros",level:4},{value:"CentOS, Fedora, and RHEL-like distros",id:"centos-fedora-and-rhel-like-distros",level:4},{value:"Package managers",id:"package-managers",level:2},{value:"Standalone downloads",id:"standalone-downloads",level:2},{value:"Confuguring as a Linux service",id:"confuguring-as-a-linux-service",level:3},{value:"Docker container",id:"docker-container",level:2},{value:"Running Nethermind",id:"running",level:2},{value:"Supported networks",id:"supported-networks",level:3}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Nethermind can be installed in several ways:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#package-managers",children:"Via a package manager"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#standalone-downloads",children:"As a standalone download"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"#docker-container",children:"As a Docker container"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/developers/building-from-source",children:"By building from source code"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsx)(n.p,{children:"Does not apply to Docker distributions."})}),"\n",(0,s.jsx)(n.p,{children:"Before installing Nethermind, your specific platform might need the following prerequisites."}),"\n",(0,s.jsxs)(i.Z,{groupId:"os",children:[(0,s.jsxs)(a.Z,{value:"linux",label:"Linux",children:[(0,s.jsx)(n.p,{children:"On Linux systems, Snappy is a required dependency. Below are the installation instructions for the supported distros."}),(0,s.jsx)(n.h4,{id:"ubuntu-and-debian-based-distros",children:"Ubuntu and Debian-based distros"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install libsnappy-dev\n"})}),(0,s.jsx)(n.h4,{id:"centos-fedora-and-rhel-like-distros",children:"CentOS, Fedora, and RHEL-like distros"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo dnf install snappy\n"})}),(0,s.jsx)(n.p,{children:"On RHEL-like systems, Nethermind also requires the following symlink to bzip2:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'sudo ln -s `find /usr/lib64/ -type f -name "libbz2.so.1*"` /usr/lib64/libbz2.so.1.0\n'})})]}),(0,s.jsxs)(a.Z,{value:"windows",label:"Windows",children:[(0,s.jsxs)(n.p,{children:["Although the modern versions of Windows are bundled with a recent version of ",(0,s.jsx)(n.a,{href:"https://aka.ms/vcredist",children:"Microsoft Visual C++ Redistributable"}),", in some cases, it may need an update:"]}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"winget install Microsoft.VCRedist.2015+.x64\n"})})]}),(0,s.jsx)(a.Z,{value:"macos",label:"macOS",children:"None"})]}),"\n",(0,s.jsx)(n.h2,{id:"package-managers",children:"Package managers"}),"\n",(0,s.jsx)(n.p,{children:"Package managers are the easiest and fastest way of installing Nethermind."}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["If you're using a package manager, it's highly recommended to set the ",(0,s.jsx)(n.code,{children:"-dd, --datadir"})," flag to specify the data directory. Otherwise, Nethermind will use the default data directory where the package is installed, which may not be preserved on further updates or uninstall."]})}),"\n",(0,s.jsxs)(i.Z,{groupId:"os",children:[(0,s.jsxs)(a.Z,{value:"linux",label:"Linux",children:[(0,s.jsx)(n.p,{children:"On Ubuntu and other Linux distros supporting PPA, Nethermind can be installed via Launchpad PPA."}),(0,s.jsx)(n.p,{children:"First, add the Nethermind repository:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo add-apt-repository ppa:nethermindeth/nethermind\n"})}),(0,s.jsxs)(n.admonition,{type:"note",children:[(0,s.jsx)(n.p,{children:"If the command is not found, run:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo apt-get install software-properties-common\n"})})]}),(0,s.jsx)(n.p,{children:"Then, install Nethermind as follows:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo apt-get update\nsudo apt-get install nethermind\n"})})]}),(0,s.jsxs)(a.Z,{value:"windows",label:"Windows",children:[(0,s.jsx)(n.p,{children:"On Windows, Nethermind can be installed via Windows Package Manager as follows:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-powershell",children:"winget install nethermind\n"})})]}),(0,s.jsxs)(a.Z,{value:"macos",label:"macOS",children:[(0,s.jsx)(n.p,{children:"On macOS, Nethermind can be installed via Homebrew."}),(0,s.jsx)(n.p,{children:"First, add the Nethermind repository:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"brew tap nethermindeth/nethermind\n"})}),(0,s.jsx)(n.p,{children:"Then, install Nethermind as follows:"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-sh",children:"brew install nethermind\n"})})]})]}),"\n",(0,s.jsxs)(n.p,{children:["For further instructions, see ",(0,s.jsx)(n.a,{href:"#running",children:"Running Nethermind"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"standalone-downloads",children:"Standalone downloads"}),"\n",(0,s.jsx)(n.p,{children:"Standalone downloads give users more flexibility by allowing them to install a specific version of Nethermind, choose the installation location, and prevent automatic updates."}),"\n",(0,s.jsxs)(n.p,{children:["Standalone downloads are available on ",(0,s.jsx)(n.a,{href:"https://github.com/NethermindEth/nethermind/releases",children:"GitHub Releases"})," and at ",(0,s.jsx)(n.a,{href:"https://downloads.nethermind.io",children:"downloads.nethermind.io"})," as ZIP archives for x64 and AArch64 (ARM64) CPU architectures for Linux, Windows, and macOS."]}),"\n",(0,s.jsx)(n.h3,{id:"confuguring-as-a-linux-service",children:"Confuguring as a Linux service"}),"\n",(0,s.jsxs)(n.p,{children:["To install Nethermind as a Linux service, see the ",(0,s.jsx)(n.a,{href:"https://github.com/NethermindEth/nethermind/blob/master/scripts/nethermind.service",children:"nethermind.service"})," unit file as an example.\nAs it's configured to run Nethermind as the specific user and group and looks for the executable in a predefined location, the following steps need to be fulfilled:"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Any of these steps can be omitted by replacing them with corresponding changes in the unit file.\nFor instance, if you want to run Nethermind as a different user, change the ",(0,s.jsx)(n.code,{children:"User"})," and ",(0,s.jsx)(n.code,{children:"Group"})," options in the unit file."]})}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Create a new user and group:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:" # Create a new user and group\n sudo useradd -m -s /bin/bash nethermind\n \n # Increase the maximum number of open files\n sudo bash -c 'echo \"nethermind soft nofile 100000\" > /etc/security/limits.d/nethermind.conf'\n sudo bash -c 'echo \"nethermind hard nofile 100000\" >> /etc/security/limits.d/nethermind.conf'\n \n # Switch to the nethermind user\n sudo su -l nethermind\n \n # Create required directories\n # Note that the home directory (~) is now /home/nethermind\n mkdir ~/build\n mkdir ~/data\n"})}),"\n",(0,s.jsxs)(n.ol,{start:"2",children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"#standalone-downloads",children:"Download Nethermind"})," and extract the package contents to the ",(0,s.jsx)(n.code,{children:"~/build"})," directory."]}),"\n",(0,s.jsxs)(n.li,{children:["Configure options in the ",(0,s.jsx)(n.code,{children:"~/.env"})," file:"]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",metastring:'title="~/.env"',children:'# Required\nNETHERMIND_CONFIG="mainnet"\n\n# Optional\nNETHERMIND_HEALTHCHECKSCONFIG_ENABLED="true" \n'})}),"\n",(0,s.jsx)(n.p,{children:"Now, let's set up the Linux service:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"# Download the unit file\ncurl -L https://raw.githubusercontent.com/NethermindEth/nethermind/master/scripts/nethermind.service -o nethermind.service\n\n# Move the unit file to the systemd directory\nsudo mv nethermind.service /etc/systemd/system\n\n# Reload the systemd daemon\nsudo systemctl daemon-reload\n\n# Start the service\nsudo systemctl start nethermind\n\n# Optionally, enable the service to start on boot\nsudo systemctl enable nethermind\n"})}),"\n",(0,s.jsx)(n.p,{children:"To ensure the service is up and running, check its status as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"sudo systemctl status nethermind\n"})}),"\n",(0,s.jsx)(n.p,{children:"To monitor the Nethermind output, run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"journalctl -u nethermind -f\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For further instructions, see ",(0,s.jsx)(n.a,{href:"#running",children:"Running Nethermind"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"docker-container",children:"Docker container"}),"\n",(0,s.jsxs)(n.p,{children:["The Docker images of Nethermind are available on ",(0,s.jsx)(n.a,{href:"https://hub.docker.com/r/nethermind/nethermind",children:"Docker Hub"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"This registry provides production versions of Nethermind with two types of tags:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"nethermind/nethermind:latest"})," is the latest version of Nethermind (the default tag)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"nethermind/nethermind:<version>"})," is the specific version of Nethermind where ",(0,s.jsx)(n.code,{children:"<version>"})," is the actual version of Nethermind."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"To download the image from the registry, run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker pull nethermind/nethermind\n"})}),"\n",(0,s.jsx)(n.p,{children:"Starting a node is achieved by:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker run -it nethermind/nethermind\n"})}),"\n",(0,s.jsx)(n.p,{children:"The following ports are exposed by default:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"8545"}),": TCP, for the JSON-RPC interface"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"8551"}),": TCP, for the consensus client JSON-RPC interface"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"30303"}),": TCP and UDP, for P2P networking"]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsx)(n.p,{children:"It's highly recommended to mount data volumes as the Nethermind's data directories to ensure the synced data is preserved between the container restarts."})}),"\n",(0,s.jsx)(n.p,{children:"The following volume mount points are available by default:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"/nethermind/nethermind_db"}),": used to store the database"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"/nethermind/logs"}),": used to store the logs"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"/nethermind/keystore"}),": used to store the keys"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"To mount separate volumes for each directory listed above, run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker run -it \\\n  --mount type=bind,source=path/to/db,target=/nethermind/nethermind_db \\\n  --mount type=bind,source=path/to/logs,target=/nethermind/logs \\\n  --mount type=bind,source=path/to/keystore,target=/nethermind/keystore \\\n  nethermind/nethermind\n"})}),"\n",(0,s.jsx)(n.p,{children:"Alternatively, a single volume can be specified as the Nethermind data directory as follows:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker run -it \\\n  --mount type=bind,source=path/to/data_dir,target=/nethermind/data_dir \\\n  nethermind/nethermind -dd /nethermind/data_dir\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Note that any Nethermind-specific configuration option can be specified at the end. For instance, the ",(0,s.jsx)(n.code,{children:"-dd"})," option in this case. For further instructions, see ",(0,s.jsx)(n.a,{href:"#running",children:"Running Nethermind"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["To build the Docker image yourself, see ",(0,s.jsx)(n.a,{href:"/developers/building-from-source#bulding-docker-image",children:"Building Docker image"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"running",children:"Running Nethermind"}),"\n",(0,s.jsx)(n.admonition,{title:"Important",type:"warning",children:(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["A ",(0,s.jsx)(n.a,{href:"/get-started/consensus-clients",children:"consensus client"})," of your choice must be running before you start Nethermind."]}),"\n",(0,s.jsxs)(n.li,{children:["Please check out the ",(0,s.jsx)(n.a,{href:"/fundamentals/security",children:"security considerations"})," before using Nethermind for critical operations."]}),"\n"]})}),"\n",(0,s.jsx)(n.p,{children:"Nethermind is mainly controlled by command line options (aka arguments or flags)."}),"\n",(0,s.jsx)(n.p,{children:"The full list of options can be displayed by running:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"nethermind -h\n"})}),"\n",(0,s.jsx)(n.p,{children:"For instance, to launch the client with the default configuration for the Mainnet and custom data directory, run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"nethermind -c mainnet -dd path/to/data/dir\n"})}),"\n",(0,s.jsxs)(n.p,{children:["For detailed info about the available configuration options, see ",(0,s.jsx)(n.a,{href:"/fundamentals/configuration",children:"Configuration"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"supported-networks",children:"Supported networks"}),"\n",(0,s.jsxs)(n.p,{children:["To run Nethermind on a specific network, use the ",(0,s.jsx)(n.a,{href:"/fundamentals/configuration#basic-options",children:(0,s.jsx)(n.code,{children:"-c, --config"})})," command line option. Currently, the following networks are supported out of the box:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Ethereum"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://ethereum.org/en/developers/docs/networks/#ethereum-mainnet",children:"Mainnet"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://ethereum.org/en/developers/docs/networks/#goerli",children:"Goerli"})," (testnet)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://github.com/eth-clients/holesky",children:"Holesky"})," (testnet)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://ethereum.org/en/developers/docs/networks/#sepolia",children:"Sepolia"})," (testnet)"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Base"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.base.org/network-information/#base-mainnet",children:"Base Mainnet"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.base.org/network-information/#base-testnet-goerli",children:"Base Goerli"})," (testnet)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.base.org/network-information/#base-testnet-sepolia",children:"Base Sepolia"})," (testnet)"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Energy Web Chain"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://energy-web-foundation.gitbook.io/energy-web/ew-dos-technology-components-2023/trust-layer-energy-web-chain",children:"Energy Web"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://energy-web-foundation.gitbook.io/energy-web/ew-dos-technology-components-2023/trust-layer-energy-web-chain/ewc-guides-and-tutorials/testnet-and-mainnet#developing-on-volta-test-network",children:"Volta"})," (testnet)"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Gnosis Chain"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://docs.gnosischain.com/about/networks/mainnet",children:"Gnosis"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://docs.gnosischain.com/about/networks/chiado",children:"Chiado"})," (testnet)"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Optimism"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://community.optimism.io/docs/useful-tools/networks/#op-mainnet",children:"OP Mainnet"})}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://community.optimism.io/docs/useful-tools/networks/#op-goerli",children:"OP Goerli"})," (testnet)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://community.optimism.io/docs/useful-tools/networks/#op-sepolia",children:"OP Sepolia"})," (testnet)"]}),"\n"]}),"\n"]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>a});t(7294);var s=t(512);const r={tabItem:"tabItem_Ymn6"};var i=t(5893);function a(e){let{children:n,hidden:t,className:a}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,s.Z)(r.tabItem,a),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>w});var s=t(7294),r=t(512),i=t(2466),a=t(6550),l=t(469),o=t(1980),d=t(7392),c=t(12);function h(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function u(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return h(e).map((e=>{let{props:{value:n,label:t,attributes:s,default:r}}=e;return{value:n,label:t,attributes:s,default:r}}))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,a.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,o._X)(i),(0,s.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(r.location.search);n.set(i,e),r.replace({...r.location,search:n.toString()})}),[i,r])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,i=u(e),[a,o]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:n,tabValues:i}))),[d,h]=p({queryString:t,groupId:r}),[x,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,i]=(0,c.Nk)(t);return[r,(0,s.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:r}),f=(()=>{const e=d??x;return m({value:e,tabValues:i})?e:null})();(0,l.Z)((()=>{f&&o(f)}),[f]);return{selectedValue:a,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),h(e),g(e)}),[h,g,i]),tabValues:i}}var g=t(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=t(5893);function b(e){let{className:n,block:t,selectedValue:s,selectValue:a,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),c=e=>{const n=e.currentTarget,t=o.indexOf(n),r=l[t].value;r!==s&&(d(n),a(r))},h=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;n=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;n=o[t]??o[o.length-1];break}}n?.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:l.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,j.jsx)("li",{role:"tab",tabIndex:s===n?0:-1,"aria-selected":s===n,ref:e=>o.push(e),onKeyDown:h,onClick:c,...i,className:(0,r.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":s===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===r));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=x(e);return(0,j.jsxs)("div",{className:(0,r.Z)("tabs-container",f.tabList),children:[(0,j.jsx)(b,{...e,...n}),(0,j.jsx)(v,{...e,...n})]})}function w(e){const n=(0,g.Z)();return(0,j.jsx)(y,{...e,children:h(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>a});var s=t(7294);const r={},i=s.createContext(r);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);