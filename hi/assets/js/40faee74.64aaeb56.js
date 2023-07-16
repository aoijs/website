"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[75695],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>b});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(t),f=a,b=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return t?n.createElement(b,i(i({ref:r},u),{},{components:t})):n.createElement(b,i({ref:r},u))}));function b(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},59438:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>y,contentTitle:()=>m,default:()=>k,frontMatter:()=>b,metadata:()=>v,toc:()=>g});var n=t(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))s.call(r,t)&&u(e,t,r[t]);if(l)for(var t of l(r))c.call(r,t)&&u(e,t,r[t]);return e},d=(e,r)=>o(e,i(r)),f=(e,r)=>{var t={};for(var n in e)s.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&l)for(var n of l(e))r.indexOf(n)<0&&c.call(e,n)&&(t[n]=e[n]);return t};const b={title:"$userLeaderboard",description:"Generates a user leader board for the given variable value"},m=void 0,v={unversionedId:"functions/userleaderboard",id:"version-5.5.5/functions/userleaderboard",title:"$userLeaderboard",description:"Generates a user leader board for the given variable value",source:"@site/versioned_docs/version-5.5.5/functions/userleaderboard.md",sourceDirName:"functions",slug:"/functions/userleaderboard",permalink:"/hi/docs/5.5.5/functions/userleaderboard",draft:!1,tags:[],version:"5.5.5",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"16 \u091c\u0941\u0932\u0970 2023",frontMatter:{title:"$userLeaderboard",description:"Generates a user leader board for the given variable value"},sidebar:"docs",previous:{title:"$userID",permalink:"/hi/docs/5.5.5/functions/userid"},next:{title:"$messageID",permalink:"/hi/docs/5.5.5/functions/usermessageid"}},y={},g=[],O={toc:g},h="wrapper";function k(e){var r=e,{components:t}=r,a=f(r,["components"]);return(0,n.kt)(h,d(p(p({},O),a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This function generates a leaderboard for a variable with a numerical value"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-php"}),"$userLeaderboard[variable;asc/desc (optional);{top} - {username}: {value};list (optional)]\n")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"asc - The values will be from greatest to least (top to bottom)")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"desc - The values will be from least to greatest (bottom to top)")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"{top} - Their leaderboard position (1/2/3/etc)")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"{username} - The users username")),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"{value} - The users value of the given var")),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-javascript"}),'bot.command({\nname: "leaderboard",\ncode: `$userLeaderboard[money;asc;{top} - {username} - {value}]`\n})\n')))}k.isMDXComponent=!0}}]);