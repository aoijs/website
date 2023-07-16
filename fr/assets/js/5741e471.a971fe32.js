"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[15014],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),p=s(n),f=a,u=p["".concat(c,".").concat(f)]||p[f]||d[f]||l;return n?r.createElement(u,o(o({ref:t},m),{},{components:n})):r.createElement(u,o({ref:t},m))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},29580:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>b,default:()=>h,frontMatter:()=>u,metadata:()=>y,toc:()=>g});var r=n(3905),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&m(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&m(e,n,t[n]);return e},d=(e,t)=>l(e,o(t)),f=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const u={title:"$blacklistOnlyCommands",description:"Blacklisting the command"},b=void 0,y={unversionedId:"functions/blacklistonlycommands",id:"version-5.5.5/functions/blacklistonlycommands",title:"$blacklistOnlyCommands",description:"Blacklisting the command",source:"@site/versioned_docs/version-5.5.5/functions/blacklistonlycommands.md",sourceDirName:"functions",slug:"/functions/blacklistonlycommands",permalink:"/fr/docs/5.5.5/functions/blacklistonlycommands",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"16 juil. 2023",frontMatter:{title:"$blacklistOnlyCommands",description:"Blacklisting the command"},sidebar:"docs",previous:{title:"$blacklistError",permalink:"/fr/docs/5.5.5/functions/blacklisterror"},next:{title:"$boostingSince",permalink:"/fr/docs/5.5.5/functions/boostingsince"}},k={},g=[{value:"Usage",id:"usage",level:3},{value:"Fields",id:"fields",level:3},{value:"Example",id:"example",level:2}],v={toc:g},O="wrapper";function h(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(O,d(p(p({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This function will blacklist the given commands."),(0,r.kt)("h3",p({},{id:"usage"}),"Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$blacklistOnlyCommands[command name;command name;....]\n")),(0,r.kt)("h3",p({},{id:"fields"}),"Fields"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",p({parentName:"tr"},{align:"left"}),"Field"),(0,r.kt)("th",p({parentName:"tr"},{align:"left"}),"Description"),(0,r.kt)("th",p({parentName:"tr"},{align:"left"}),"Type"),(0,r.kt)("th",p({parentName:"tr"},{align:"left"}),"Required"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",p({parentName:"tr"},{align:"left"}),"command name"),(0,r.kt)("td",p({parentName:"tr"},{align:"left"}),"command name that will be in blacklist."),(0,r.kt)("td",p({parentName:"tr"},{align:"left"}),"string"),(0,r.kt)("td",p({parentName:"tr"},{align:"left"}),"yes")))),(0,r.kt)("h2",p({},{id:"example"}),"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\n  name: "blacklist-command",\n  code: `\n  Blacklisted "hello-cmd" command !\n  \n  $blacklistOnlyCommands[hello-cmd]\n  `\n});\n')))}h.isMDXComponent=!0}}]);