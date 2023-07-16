"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[44081],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var d=a.createContext({}),p=function(e){var t=a.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,d=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(r),c=n,g=m["".concat(d,".").concat(c)]||m[c]||s[c]||l;return r?a.createElement(g,o(o({ref:t},u),{},{components:r})):a.createElement(g,o({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[m]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},89125:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>f,contentTitle:()=>b,default:()=>h,frontMatter:()=>g,metadata:()=>k,toc:()=>N});var a=r(3905),n=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))d.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&u(e,r,t[r]);return e},s=(e,t)=>l(e,o(t)),c=(e,t)=>{var r={};for(var a in e)d.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&p.call(e,a)&&(r[a]=e[a]);return r};const g={title:"$guildLeaderboard",description:"$guildLeaderboard will return a leaderboard of a guild variable.",id:"guildLeaderboard"},b=void 0,k={unversionedId:"functions/variables-related/guildLeaderboard",id:"version-6.4.0/functions/variables-related/guildLeaderboard",title:"$guildLeaderboard",description:"$guildLeaderboard will return a leaderboard of a guild variable.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/variables-related/guildLeaderBoard.md",sourceDirName:"functions/variables-related",slug:"/functions/variables-related/guildLeaderboard",permalink:"/es/docs/functions/variables-related/guildLeaderboard",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"16 jul 2023",frontMatter:{title:"$guildLeaderboard",description:"$guildLeaderboard will return a leaderboard of a guild variable.",id:"guildLeaderboard"},sidebar:"docs",previous:{title:"$guildCooldown",permalink:"/es/docs/functions/variables-related/guildCooldown"},next:{title:"$rawLeaderboard",permalink:"/es/docs/functions/variables-related/rawLeaderboard"}},f={},N=[{value:"Modo de uso",id:"modo-de-uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],v={toc:N},y="wrapper";function h(e){var t=e,{components:r}=t,n=c(t,["components"]);return(0,a.kt)(y,s(m(m({},v),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"$guildLeaderboard")," will return a leaderboard of a guild variable."),(0,a.kt)("h2",m({},{id:"modo-de-uso"}),"Modo de uso"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-php"}),"$guildLeaderboard[variable;type?;custom?;list?;page?;table?]\n")),(0,a.kt)("h2",m({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Campo"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Descripci\xf3n"),(0,a.kt)("th",m({parentName:"tr"},{align:"center"}),"Requerido"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"variable"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Variable name."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"s\xed")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"type"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"In which order it will be returned ",(0,a.kt)("br",null)," 1. ",(0,a.kt)("strong",{parentName:"td"},"asc")," (ascending / default) ",(0,a.kt)("br",null)," 2. ",(0,a.kt)("strong",{parentName:"td"},"dsc")," (descendiendo)"),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"falso")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"custom?"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Formatting."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"list?"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"n\xfamero"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"How many to list."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"page?"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"n\xfamero"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Which page to list."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"no")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"table?"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Variable table."),(0,a.kt)("td",m({parentName:"tr"},{align:"center"}),"no")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Opciones"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Returns"),(0,a.kt)("th",m({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"{top}")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"n\xfamero"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Returns the user position of the guild.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"{name}")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"cadena"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Returns the user name.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"{id}")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"entero"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Returns the guild ID.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"{value}")),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"number, integer"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Returns the variable value.")))),(0,a.kt)("h2",m({},{id:"ejemplos"}),"Ejemplo(s)"),(0,a.kt)("p",null,'This will returns a leaderboard of the "Example" variable:'),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n    name: "guildLeaderboard",\n    code: `\n    $guildLeaderboard[Example;asc;{top} - {name} - {value};10;1;main]\n    `\n});\n')))}h.isMDXComponent=!0}}]);