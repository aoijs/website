"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[56565],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=c(a),u=r,g=d["".concat(s,".").concat(u)]||d[u]||m[u]||i;return a?n.createElement(g,l(l({ref:t},p),{},{components:a})):n.createElement(g,l({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[d]="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},94854:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>f,contentTitle:()=>k,default:()=>h,frontMatter:()=>g,metadata:()=>w,toc:()=>y});var n=a(3905),r=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&p(e,a,t[a]);if(o)for(var a of o(t))c.call(t,a)&&p(e,a,t[a]);return e},m=(e,t)=>i(e,l(t)),u=(e,t)=>{var a={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&c.call(e,n)&&(a[n]=e[n]);return a};const g={title:"$awaitMessageReactions",description:"$awaitMessageReactions will reply when a user reacts with a specific emoji.",id:"awaitMessageReactions"},k=void 0,w={unversionedId:"functions/awaited-related/awaitMessageReactions",id:"version-6.4.0/functions/awaited-related/awaitMessageReactions",title:"$awaitMessageReactions",description:"$awaitMessageReactions will reply when a user reacts with a specific emoji.",source:"@site/i18n/uk/docusaurus-plugin-content-docs/version-6.4.0/functions/awaited-related/awaitMessageReactions.md",sourceDirName:"functions/awaited-related",slug:"/functions/awaited-related/awaitMessageReactions",permalink:"/uk/docs/functions/awaited-related/awaitMessageReactions",draft:!1,tags:[],version:"6.4.0",lastUpdatedBy:"Leref",lastUpdatedAt:1689482936,formattedLastUpdatedAt:"16 \u043b\u0438\u043f. 2023 \u0440.",frontMatter:{title:"$awaitMessageReactions",description:"$awaitMessageReactions will reply when a user reacts with a specific emoji.",id:"awaitMessageReactions"},sidebar:"docs",previous:{title:"$awaitData",permalink:"/uk/docs/functions/awaited-related/awaitData"},next:{title:"$awaitMessages",permalink:"/uk/docs/functions/awaited-related/awaitMessages"}},f={},y=[{value:"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f",level:2},{value:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438",level:2},{value:"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)",id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438",level:2}],N={toc:y},b="wrapper";function h(e){var t=e,{components:a}=t,r=u(t,["components"]);return(0,n.kt)(b,m(d(d({},N),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"$awaitMessageReactions")," will reply when a user reacts with a specific emoji."),(0,n.kt)("h2",d({},{id:"\u0432\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"}),"\u0412\u0438\u043a\u043e\u0440\u0438\u0441\u0442\u0430\u043d\u043d\u044f"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-php"}),"$awaitMessageReactions[channelID;messageID;userFilter;time;reactions;commands;errorMessage?;awaitData?]\n")),(0,n.kt)("h2",d({},{id:"\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"}),"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u0438"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u041f\u043e\u043b\u0435"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u0422\u0438\u043f"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"\u041e\u043f\u0438\u0441"),(0,n.kt)("th",d({parentName:"tr"},{align:"center"}),"\u041e\u0431\u043e\u0432'\u044f\u0437\u043a\u043e\u0432\u0438\u0439"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"channelID"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"integer"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Channel ID."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"messageID"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"integer"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Message ID."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"userFilter"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"To what the bot will reply ",(0,n.kt)("br",null)," 1. ",(0,n.kt)("strong",{parentName:"td"},"everyone")," ",(0,n.kt)("br",null)," 2. ",(0,n.kt)("strong",{parentName:"td"},"specific user ID")," - any user ID"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"time"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"How long the command will last / when the command expires."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"reactions"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Reactions, you can add multiple by separating them with commas ( ",(0,n.kt)("inlineCode",{parentName:"td"},",")," )"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"commands"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Commands that will be executed, you can separate multiple emojis with a comma ( ",(0,n.kt)("inlineCode",{parentName:"td"},",")," )"),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u0442\u0430\u043a")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"errorMessage?"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"Error message when command expires."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u043d\u0456")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"awaitData?"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u0440\u044f\u0434\u043e\u043a"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"\u041e\u0447\u0456\u043a\u0443\u0432\u0430\u043d\u0456 \u0414\u0430\u043d\u0456."),(0,n.kt)("td",d({parentName:"tr"},{align:"center"}),"\u043d\u0456")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Make sure you have ",(0,n.kt)("inlineCode",{parentName:"strong"},"GuildMessageReactions")," as intent in your main file.")),(0,n.kt)("h2",d({},{id:"\u043f\u0440\u0438\u043a\u043b\u0430\u0434\u0438"}),"\u041f\u0440\u0438\u043a\u043b\u0430\u0434(\u0438)"),(0,n.kt)("p",null,'This will reply to you when you react with the "\u2764\ufe0f" emoji to the bot\'s message:'),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js"}),'bot.command({\n    name: "awaitMessageReactions",\n    code: `\n  React with "\u2764\ufe0f" for a surprise! \n  $awaitMessageReactions[$channelID;$messageID;$authorID;10s;\u2764\ufe0f;awaitedcommandexample;Whoops! You didn\'t react in time..]\n  `\n});\n\nbot.awaitedCommand({\n    name: "awaitedcommandexample",\n    code: `\n  Nice, you reacted with \u2764\ufe0f.\n  `\n});\n')))}h.isMDXComponent=!0}}]);