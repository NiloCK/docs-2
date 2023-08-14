"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[579],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>m});var n=a(7294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),s=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=s(t.components);return n.createElement(d.Provider,{value:e},t.children)},c="mdxType",f={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},N=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),c=s(a),N=r,m=c["".concat(d,".").concat(N)]||c[N]||f[N]||l;return a?n.createElement(m,i(i({ref:e},p),{},{components:a})):n.createElement(m,i({ref:e},p))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=N;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o[c]="string"==typeof t?t:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}N.displayName="MDXCreateElement"},1986:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>f,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const l={},i="HealthChecks",o={unversionedId:"fundamentals/configuration/healthchecks",id:"fundamentals/configuration/healthchecks",title:"HealthChecks",description:"| Property                         | Env Variable                                                   | Description                                                                                     | Default                                                                                                                                                                                                                                                                                           |",source:"@site/docs/02-fundamentals/04-configuration/healthchecks.md",sourceDirName:"02-fundamentals/04-configuration",slug:"/fundamentals/configuration/healthchecks",permalink:"/docs/docs/fundamentals/configuration/healthchecks",draft:!1,editUrl:"https://github.com/NethermindEth/docs/tree/main/docs/docs/02-fundamentals/04-configuration/healthchecks.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EthStats",permalink:"/docs/docs/fundamentals/configuration/ethstats"},next:{title:"Hive",permalink:"/docs/docs/fundamentals/configuration/hive"}},d={},s=[],p={toc:s},c="wrapper";function f(t){let{components:e,...a}=t;return(0,r.kt)(c,(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"healthchecks"},"HealthChecks"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Property"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Env Variable"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Enabled"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_HEALTHCHECKSCONFIG_ENABLED"),(0,r.kt)("td",{parentName:"tr",align:"left"},"If 'true' then Health Check endpoints is enabled at /health"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"LowStorageCheckAwaitOnStartup"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_HEALTHCHECKSCONFIG_LOWSTORAGECHECKAWAITONSTARTUP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Free disk space check on startup will pause node initalization until enough space is available."),(0,r.kt)("td",{parentName:"tr",align:"left"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"LowStorageSpaceShutdownThreshold"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_HEALTHCHECKSCONFIG_LOWSTORAGESPACESHUTDOWNTHRESHOLD"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Percentage of available disk space below which node will shutdown. Zero to disable."),(0,r.kt)("td",{parentName:"tr",align:"left"},"1")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"LowStorageSpaceWarningThreshold"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_HEALTHCHECKSCONFIG_LOWSTORAGESPACEWARNINGTHRESHOLD"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Percentage of available disk space below which a warning will be displayed. Zero to disable."),(0,r.kt)("td",{parentName:"tr",align:"left"},"5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"MaxIntervalClRequestTime"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_HEALTHCHECKSCONFIG_MAXINTERVALCLREQUESTTIME"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Max request interval in which we assume that CL works in a healthy way"),(0,r.kt)("td",{parentName:"tr",align:"left"},"300")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"MaxIntervalWithoutProcessedBlock"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_HEALTHCHECKSCONFIG_MAXINTERVALWITHOUTPROCESSEDBLOCK"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Max interval in seconds in which we assume that node processing blocks in a healthy way"),(0,r.kt)("td",{parentName:"tr",align:"left"},"null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"MaxIntervalWithoutProducedBlock"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_HEALTHCHECKSCONFIG_MAXINTERVALWITHOUTPRODUCEDBLOCK"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Max interval in seconds in which we assume that node producing blocks in a healthy way"),(0,r.kt)("td",{parentName:"tr",align:"left"},"null")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"PollingInterval"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_HEALTHCHECKSCONFIG_POLLINGINTERVAL"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Configures the UI to poll for healthchecks updates (in seconds)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Slug"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_HEALTHCHECKSCONFIG_SLUG"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The URL slug on which Healthchecks service will be exposed"),(0,r.kt)("td",{parentName:"tr",align:"left"},"/health")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"UIEnabled"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_HEALTHCHECKSCONFIG_UIENABLED"),(0,r.kt)("td",{parentName:"tr",align:"left"},"If 'true' then HealthChecks UI will be avaiable at /healthchecks-ui"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"WebhooksEnabled"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_HEALTHCHECKSCONFIG_WEBHOOKSENABLED"),(0,r.kt)("td",{parentName:"tr",align:"left"},"If 'true' then Webhooks can be configured"),(0,r.kt)("td",{parentName:"tr",align:"left"},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"WebhooksPayload"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_HEALTHCHECKSCONFIG_WEBHOOKSPAYLOAD"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Payload is the json payload that will be send on Failure and must be escaped."),(0,r.kt)("td",{parentName:"tr",align:"left"},'{"attachments":[{"color":"#FFCC00","pretext":"Health Check Status \u26a0\ufe0f","fields":[{"title":"Details","value":"More details available at ',(0,r.kt)("inlineCode",{parentName:"td"},"/healthchecks-ui"),'","short":false},{"title":"Description","value":"[',"[DESCRIPTIONS]",']","short":false}]}]}')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"WebhooksRestorePayload"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_HEALTHCHECKSCONFIG_WEBHOOKSRESTOREPAYLOAD"),(0,r.kt)("td",{parentName:"tr",align:"left"},"RestorePayload is the json payload that will be send on Recovery and must be escaped."),(0,r.kt)("td",{parentName:"tr",align:"left"},'{"attachments":[{"color":"#36a64f","pretext":"Health Check Status \ud83d\udc4d","fields":[{"title":"Details","value":"',(0,r.kt)("inlineCode",{parentName:"td"},"More details available at /healthchecks-ui"),'","short":false},{"title":"description","value":"The HealthCheck ',(0,r.kt)("inlineCode",{parentName:"td"},"[[LIVENESS]]"),' is recovered. All is up and running","short":false}]}]}')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"WebhooksUri"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NETHERMIND_HEALTHCHECKSCONFIG_WEBHOOKSURI"),(0,r.kt)("td",{parentName:"tr",align:"left"},"The Webhooks endpoint e.g. Slack WebHooks"),(0,r.kt)("td",{parentName:"tr",align:"left"},"null")))))}f.isMDXComponent=!0}}]);