"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[645],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>s});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var u=n.createContext({}),d=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=d(r),g=l,s=p["".concat(u,".").concat(g)]||p[g]||f[g]||a;return r?n.createElement(s,i(i({ref:t},c),{},{components:r})):n.createElement(s,i({ref:t},c))}));function s(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=r.length,i=new Array(a);i[0]=g;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:l,i[1]=o;for(var d=2;d<a;d++)i[d]=r[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},87216:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>k,contentTitle:()=>m,default:()=>N,frontMatter:()=>s,metadata:()=>v,toc:()=>y});var n=r(3905),l=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&c(e,r,t[r]);if(o)for(var r of o(t))d.call(t,r)&&c(e,r,t[r]);return e},f=(e,t)=>a(e,i(t)),g=(e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&d.call(e,n)&&(r[n]=e[n]);return r};const s={title:"$guildVerificationLevel",description:"$guildVerificationLevel will return the guild's verification level.",id:"guildVerificationLevel"},m=void 0,v={unversionedId:"functions/guild-related/guildVerificationLevel",id:"version-6.4.0/functions/guild-related/guildVerificationLevel",title:"$guildVerificationLevel",description:"$guildVerificationLevel will return the guild's verification level.",source:"@site/i18n/ar/docusaurus-plugin-content-docs/version-6.4.0/functions/guild-related/guildVerificationLevel.md",sourceDirName:"functions/guild-related",slug:"/functions/guild-related/guildVerificationLevel",permalink:"/ar/docs/functions/guild-related/guildVerificationLevel",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"\u0661\u0666 \u064a\u0648\u0644\u064a\u0648 \u0662\u0660\u0662\u0663",frontMatter:{title:"$guildVerificationLevel",description:"$guildVerificationLevel will return the guild's verification level.",id:"guildVerificationLevel"},sidebar:"docs",previous:{title:"$guildSystemChannelID",permalink:"/ar/docs/functions/guild-related/guildSystemChannelID"},next:{title:"$guildHighestRole",permalink:"/ar/docs/functions/guild-related/guildHighestRole"}},k={},y=[{value:"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645",id:"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645",level:2},{value:"\u0627\u0644\u0628\u0627\u0631\u0627\u0645\u062a\u0631\u0627\u062a",id:"\u0627\u0644\u0628\u0627\u0631\u0627\u0645\u062a\u0631\u0627\u062a",level:2},{value:"\u0645\u062b\u0627\u0644",id:"\u0645\u062b\u0627\u0644",level:2}],b={toc:y},h="wrapper";function N(e){var t=e,{components:r}=t,l=g(t,["components"]);return(0,n.kt)(h,f(p(p({},b),l),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$guildVerificationLevel")," will return the guild's verification level."),(0,n.kt)("h2",p({},{id:"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645"}),"\u0627\u0644\u0627\u0633\u062a\u062e\u062f\u0627\u0645"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$guildVerificationLevel[guildID?]\n")),(0,n.kt)("h2",p({},{id:"\u0627\u0644\u0628\u0627\u0631\u0627\u0645\u062a\u0631\u0627\u062a"}),"\u0627\u0644\u0628\u0627\u0631\u0627\u0645\u062a\u0631\u0627\u062a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"Field"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"\u0627\u0644\u0646\u0648\u0639"),(0,n.kt)("th",p({parentName:"tr"},{align:null}),"\u0627\u0644\u062f\u064a\u0633\u0643\u0628\u0631\u0628\u0634\u064a\u0646"),(0,n.kt)("th",p({parentName:"tr"},{align:"center"}),"\u0645\u0637\u0644\u0648\u0628"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"guildID?"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Integer"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"The ID of the guild."),(0,n.kt)("td",p({parentName:"tr"},{align:"center"}),"false")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",p({parentName:"tr"},{align:null}),"\u0627\u0644\u0646\u0648\u0639"),(0,n.kt)("th",p({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"0"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"None")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"1"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Low")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"2"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Medium")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"3"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"High")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",p({parentName:"tr"},{align:null}),"4"),(0,n.kt)("td",p({parentName:"tr"},{align:null}),"Highest")))),(0,n.kt)("h2",p({},{id:"\u0645\u062b\u0627\u0644"}),"\u0645\u062b\u0627\u0644"),(0,n.kt)("p",null,"This will return the guild's verification Level:"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'guildVerificationLevel',\n    code: `\n  $guildVerificationLevel[$guildID]\n  `\n});\n")))}N.isMDXComponent=!0}}]);