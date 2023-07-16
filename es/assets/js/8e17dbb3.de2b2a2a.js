"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[97674],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var d=r.createContext({}),u=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(d.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(n),m=o,g=s["".concat(d,".").concat(m)]||s[m]||c[m]||a;return n?r.createElement(g,l(l({ref:t},p),{},{components:n})):r.createElement(g,l({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[s]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},46019:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>w,contentTitle:()=>f,default:()=>h,frontMatter:()=>g,metadata:()=>b,toc:()=>k});var r=n(3905),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))u.call(t,n)&&p(e,n,t[n]);return e},c=(e,t)=>a(e,l(t)),m=(e,t)=>{var n={};for(var r in e)d.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n};const g={title:"$guildCooldown",description:"$guildCooldown will set a cooldown for the guild after being used.",id:"guildCooldown"},f=void 0,b={unversionedId:"functions/variables-related/guildCooldown",id:"version-6.4.0/functions/variables-related/guildCooldown",title:"$guildCooldown",description:"$guildCooldown will set a cooldown for the guild after being used.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/variables-related/guildCooldown.md",sourceDirName:"functions/variables-related",slug:"/functions/variables-related/guildCooldown",permalink:"/es/docs/functions/variables-related/guildCooldown",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"16 jul 2023",frontMatter:{title:"$guildCooldown",description:"$guildCooldown will set a cooldown for the guild after being used.",id:"guildCooldown"},sidebar:"docs",previous:{title:"$globalUserLeaderBoard",permalink:"/es/docs/functions/variables-related/globalUserLeaderBoard"},next:{title:"$guildLeaderboard",permalink:"/es/docs/functions/variables-related/guildLeaderboard"}},w={},k=[{value:"Modo de uso",id:"modo-de-uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],v={toc:k},y="wrapper";function h(e){var t=e,{components:n}=t,o=m(t,["components"]);return(0,r.kt)(y,c(s(s({},v),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$guildCooldown")," will set a guild-based cooldown."),(0,r.kt)("h2",s({},{id:"modo-de-uso"}),"Modo de uso"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$guildCooldown[time;errorMessage]\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"You are able to retrieve the remaining cooldown in the ",(0,r.kt)("inlineCode",{parentName:"li"},"$guildCooldown")," function by using ",(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"strong"},"%time%"))," or any of the following below.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"%time%"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"%year%"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"%month%"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"%week%"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"%day%"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"%hour%"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"%min%"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"%sec%"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"%ms%"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"%fullTime%"))))),(0,r.kt)("h2",s({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,r.kt)("th",s({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"tiempo"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"n\xfamero"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The duration of the cooldown."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"verdadero")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"errorMessage"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"consulta"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Error message when there's remaining time for the cooldown."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"verdadero")))),(0,r.kt)("h2",s({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,"This will set a cooldown for a command which applies to the guild only and returns the remaining cooldown:"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'guildCooldown',\n    code: `\n  hello\n  $guildCooldown[2m;Please wait %time% to execute this command again.]\n  `\n});\n")))}h.isMDXComponent=!0}}]);