"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[48059],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},68305:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>g,default:()=>O,frontMatter:()=>f,metadata:()=>y,toc:()=>k});var r=n(3905),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&p(e,n,t[n]);return e},d=(e,t)=>o(e,l(t)),m=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const f={title:"$categoryChannels",description:"$categoryChannels renvoie tous les salons d'une cat\xe9gorie donn\xe9e.",id:"categoryChannels"},g=void 0,y={unversionedId:"functions/info-related/categoryChannels",id:"version-6.4.0/functions/info-related/categoryChannels",title:"$categoryChannels",description:"$categoryChannels renvoie tous les salons d'une cat\xe9gorie donn\xe9e.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-6.4.0/functions/info-related/categoryChannels.md",sourceDirName:"functions/info-related",slug:"/functions/info-related/categoryChannels",permalink:"/fr/docs/functions/info-related/categoryChannels",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Fafa",lastUpdatedAt:1691131617,formattedLastUpdatedAt:"4 ao\xfbt 2023",frontMatter:{title:"$categoryChannels",description:"$categoryChannels renvoie tous les salons d'une cat\xe9gorie donn\xe9e.",id:"categoryChannels"},sidebar:"docs",previous:{title:"$botCount",permalink:"/fr/docs/functions/info-related/botCount"},next:{title:"$channelCategoryID",permalink:"/fr/docs/functions/info-related/channelCategoryID"}},b={},k=[{value:"Utilisation",id:"utilisation",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:2},{value:"Exemple(s)",id:"exemples",level:2}],v={toc:k},h="wrapper";function O(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(h,d(u(u({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$categoryChannels")," renverra tous les salons d'une cat\xe9gorie donn\xe9e."),(0,r.kt)("h2",u({},{id:"utilisation"}),"Utilisation"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-php"}),"$categoryChannels[IDcat\xe9gorie;option?;s\xe9p?]\n")),(0,r.kt)("h2",u({},{id:"param\xe8tres"}),"Param\xe8tres"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Champ"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Type"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Description"),(0,r.kt)("th",u({parentName:"tr"},{align:"center"}),"Obligatoire"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"IDcat\xe9gorie"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"entier"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"L'ID de la cat\xe9gorie."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"vrai")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"option ?"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"L'option dans laquelle le bot retournera les salons. ",(0,r.kt)("br",null)," 1. ",(0,r.kt)("strong",{parentName:"td"},"names")," - retourne les noms des salons (par d\xe9faut)  ",(0,r.kt)("br",null)," 2. ",(0,r.kt)("strong",{parentName:"td"},"ids")," - retourne les IDs des salons"),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"Faux")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"sept?"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"cha\xeene de caract\xe8res"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"Le s\xe9parateur pour s\xe9parer les salons retourn\xe9s."),(0,r.kt)("td",u({parentName:"tr"},{align:"center"}),"Faux")))),(0,r.kt)("h2",u({},{id:"exemples"}),"Exemple(s)"),(0,r.kt)("p",null,"Cela retournera tous les salons de la cat\xe9gorie du salon o\xf9 vous ex\xe9cutez la commande :"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-javascript"}),"bot.command({\n    name: 'categoryChannels',\n    code: `\n  $categoryChannels[$channelCategoryID;names;, ]\n  `\n});\n")))}O.isMDXComponent=!0}}]);