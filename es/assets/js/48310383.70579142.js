"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[39754],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>f});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),d=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=d(e.components);return r.createElement(i.Provider,{value:n},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=d(t),m=a,f=s["".concat(i,".").concat(m)]||s[m]||u[m]||o;return t?r.createElement(f,l(l({ref:n},p),{},{components:t})):r.createElement(f,l({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,l=new Array(o);l[0]=m;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c[s]="string"==typeof e?e:a,l[1]=c;for(var d=2;d<o;d++)l[d]=t[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},13573:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>y,contentTitle:()=>v,default:()=>O,frontMatter:()=>f,metadata:()=>N,toc:()=>b});var r=t(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,s=(e,n)=>{for(var t in n||(n={}))i.call(n,t)&&p(e,t,n[t]);if(c)for(var t of c(n))d.call(n,t)&&p(e,t,n[t]);return e},u=(e,n)=>o(e,l(n)),m=(e,n)=>{var t={};for(var r in e)i.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&c)for(var r of c(e))n.indexOf(r)<0&&d.call(e,r)&&(t[r]=e[r]);return t};const f={title:"$channelNSFW",description:"$channelNSFW devolver\xe1 true o false dependiendo de si el canal dado est\xe1 marcado como NSFW o no.",id:"channelNSFW"},v=void 0,N={unversionedId:"functions/info-related/channelNSFW",id:"version-6.4.0/functions/info-related/channelNSFW",title:"$channelNSFW",description:"$channelNSFW devolver\xe1 true o false dependiendo de si el canal dado est\xe1 marcado como NSFW o no.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-6.4.0/functions/info-related/channelNSFW.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/channelNSFW",permalink:"/es/docs/functions/info-related/channelNSFW",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1690430257,formattedLastUpdatedAt:"27 jul 2023",frontMatter:{title:"$channelNSFW",description:"$channelNSFW devolver\xe1 true o false dependiendo de si el canal dado est\xe1 marcado como NSFW o no.",id:"channelNSFW"},sidebar:"docs",previous:{title:"$channelID",permalink:"/es/docs/functions/info-related/channelID"},next:{title:"$channelName",permalink:"/es/docs/functions/info-related/channelName"}},y={},b=[{value:"Uso",id:"uso",level:2},{value:"Par\xe1metros",id:"par\xe1metros",level:2},{value:"Ejemplo(s)",id:"ejemplos",level:2}],h={toc:b},g="wrapper";function O(e){var n=e,{components:t}=n,a=m(n,["components"]);return(0,r.kt)(g,u(s(s({},h),a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$channelNSFW")," devolver\xe1 true o false dependiendo de si el canal dado est\xe1 marcado como NSFW o no."),(0,r.kt)("h2",s({},{id:"uso"}),"Uso"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-php"}),"$channelNSFW[canalID?]\n")),(0,r.kt)("h2",s({},{id:"par\xe1metros"}),"Par\xe1metros"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Campo"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,r.kt)("th",s({parentName:"tr"},{align:"center"}),"Requerido"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"canalID?"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"integer"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"ID del canal que quieres comprobar si est\xe1 marcado como NSFW o no."),(0,r.kt)("td",s({parentName:"tr"},{align:"center"}),"no")))),(0,r.kt)("h2",s({},{id:"ejemplos"}),"Ejemplo(s)"),(0,r.kt)("p",null,"Esto devolver\xe1 ",(0,r.kt)("inlineCode",{parentName:"p"},"true")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"false")," dependiendo de si el canal donde ejecutas el comando est\xe1 marcado como NSFW o no:"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'channelNSFW',\n    code: `\n  $channelNSFW[$channelID]\n  `\n});\n")))}O.isMDXComponent=!0}}]);