"use strict";(self.webpackChunkAoiEngine=self.webpackChunkAoiEngine||[]).push([[93089,27918,48610],{55061:(e,t,a)=>{a.d(t,{Z:()=>g});var r=a(67294),n=a(86010),i=a(51933),l=a(77886),o=Object.defineProperty,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&u(e,a,t[a]);if(s)for(var a of s(t))m.call(t,a)&&u(e,a,t[a]);return e},p=(e,t)=>{var a={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&m.call(e,r)&&(a[r]=e[r]);return a};function g(e){const t=e,{sidebar:a,toc:o,children:s}=t,c=p(t,["sidebar","toc","children"]),m=a&&a.items.length>0;return r.createElement(i.Z,d({},c),r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement(l.Z,{sidebar:a}),r.createElement("main",{className:(0,n.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},s),o&&r.createElement("div",{className:"col col--2"},o))))}},74363:(e,t,a)=>{a.r(t),a.d(t,{default:()=>y});var r=a(67294),n=a(86010),i=a(24305),l=a(17766),o=a(55116),s=a(55061),c=a(83028),m=a(68190),u=a(83260),d=Object.defineProperty,p=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,b=Object.prototype.propertyIsEnumerable,f=(e,t,a)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,v=(e,t)=>{for(var a in t||(t={}))g.call(t,a)&&f(e,a,t[a]);if(p)for(var a of p(t))b.call(t,a)&&f(e,a,t[a]);return e};function h(e){const{metadata:t}=e,{siteConfig:{title:a}}=(0,i.Z)(),{blogDescription:n,blogTitle:o,permalink:s}=t,c="/"===s?a:o;return r.createElement(r.Fragment,null,r.createElement(l.d,{title:c,description:n}),r.createElement(m.Z,{tag:"blog_posts_list"}))}function E(e){const{metadata:t,items:a,sidebar:n}=e;return r.createElement(s.Z,{sidebar:n},r.createElement(u.Z,{items:a}),r.createElement(c.Z,{metadata:t}))}function y(e){return r.createElement(l.FG,{className:(0,n.Z)(o.k.wrapper.blogPages,o.k.page.blogListPage)},r.createElement(h,v({},e)),r.createElement(E,v({},e)))}},83028:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(14699),i=a(2902);function l(e){const{metadata:t}=e,{previousPage:a,nextPage:l}=t;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,n.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&r.createElement(i.Z,{permalink:a,title:r.createElement(n.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),l&&r.createElement(i.Z,{permalink:l,title:r.createElement(n.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},47569:(e,t,a)=>{a.d(t,{Z:()=>R});var r=a(67294),n=a(86010),i=a(36081),l=a(10433);function o({children:e,className:t}){var a;const{frontMatter:n,assets:o}=(0,i.C)(),{withBaseUrl:s}=(0,l.C)(),c=null!=(a=o.image)?a:n.image;return r.createElement("article",{className:t,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},c&&r.createElement("meta",{itemProp:"image",content:s(c,{absolute:!0})}),e)}var s=a(11128);const c={title:"title_f1Hy"};function m({className:e}){const{metadata:t,isBlogPostPage:a}=(0,i.C)(),{permalink:l,title:o}=t,m=a?"h1":"h2";return r.createElement(m,{className:(0,n.Z)(c.title,e),itemProp:"headline"},a?o:r.createElement(s.Z,{itemProp:"url",to:l},o))}var u=a(48365),d=a(42060);const p={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};var g=Object.defineProperty,b=Object.defineProperties,f=Object.getOwnPropertyDescriptors,v=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable,y=(e,t,a)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,k=(e,t)=>{for(var a in t||(t={}))h.call(t,a)&&y(e,a,t[a]);if(v)for(var a of v(t))E.call(t,a)&&y(e,a,t[a]);return e},w=(e,t)=>b(e,f(t));function _({className:e}){const{metadata:{authors:t},assets:a}=(0,i.C)();if(0===t.length)return null;const l=t.every((({name:e})=>!e));return r.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",l?p.imageOnlyAuthorRow:"row",e)},t.map(((e,t)=>{var i;return r.createElement("div",{className:(0,n.Z)(!l&&"col col--6",l?p.imageOnlyAuthorCol:p.authorCol),key:t},r.createElement(d.Z,{author:w(k({},e),{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}function Z(){return r.createElement("header",null,r.createElement(m,null),r.createElement(u.Z,null),r.createElement(_,null))}var N=a(22380),O=a(90925);function C({children:e,className:t}){const{isBlogPostPage:a}=(0,i.C)();return r.createElement("div",{id:a?N.blogPostContainerID:void 0,className:(0,n.Z)("markdown",t),itemProp:"articleBody"},r.createElement(O.Z,null,e))}var x=a(41040),I=a(78741),P=a(14699),S=Object.defineProperty,j=Object.getOwnPropertySymbols,L=Object.prototype.hasOwnProperty,T=Object.prototype.propertyIsEnumerable,D=(e,t,a)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,F=(e,t)=>{for(var a in t||(t={}))L.call(t,a)&&D(e,a,t[a]);if(j)for(var a of j(t))T.call(t,a)&&D(e,a,t[a]);return e},U=(e,t)=>{var a={};for(var r in e)L.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&j)for(var r of j(e))t.indexOf(r)<0&&T.call(e,r)&&(a[r]=e[r]);return a};function A(){return r.createElement("b",null,r.createElement(P.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function B(e){const t=e,{blogPostTitle:a}=t,n=U(t,["blogPostTitle"]);return r.createElement(s.Z,F({"aria-label":(0,P.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:a})},n),r.createElement(A,null))}const M={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_mRVl"};function z(){const{metadata:e,isBlogPostPage:t}=(0,i.C)(),{tags:a,title:l,editUrl:o,hasTruncateMarker:s}=e,c=!t&&s,m=a.length>0;return m||c||o?r.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",t&&M.blogPostFooterDetailsFull)},m&&r.createElement("div",{className:(0,n.Z)("col",{"col--9":c})},r.createElement(I.Z,{tags:a})),t&&o&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(x.Z,{editUrl:o})),c&&r.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":m})},r.createElement(B,{blogPostTitle:l,to:e.permalink}))):null}function R({children:e,className:t}){const a=function(){const{isBlogPostPage:e}=(0,i.C)();return e?void 0:"margin-bottom--xl"}();return r.createElement(o,{className:(0,n.Z)(a,t)},r.createElement(Z,null),r.createElement(C,null,e),r.createElement(z,null))}},2902:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(86010),i=a(11128);function l(e){const{permalink:t,title:a,subLabel:l,isNext:o}=e;return r.createElement(i.Z,{className:(0,n.Z)("pagination-nav__link",o?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},l&&r.createElement("div",{className:"pagination-nav__sublabel"},l),r.createElement("div",{className:"pagination-nav__label"},a))}},36081:(e,t,a)=>{a.d(t,{C:()=>o,n:()=>l});var r=a(67294),n=a(3211);const i=r.createContext(null);function l({children:e,content:t,isBlogPostPage:a=!1}){const n=function({content:e,isBlogPostPage:t}){return(0,r.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,toc:e.toc,isBlogPostPage:t})),[e,t])}({content:t,isBlogPostPage:a});return r.createElement(i.Provider,{value:n},e)}function o(){const e=(0,r.useContext)(i);if(null===e)throw new n.i6("BlogPostProvider");return e}},41599:(e,t,a)=>{a.d(t,{c:()=>c});var r=a(67294),n=a(24305);const i=["zero","one","two","few","many","other"];function l(e){return i.filter((t=>e.includes(t)))}const o={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function s(){const{i18n:{currentLocale:e}}=(0,n.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),o}}),[e])}function c(){const e=s();return{selectMessage:(t,a)=>function(e,t,a){const r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const n=a.select(t),i=a.pluralForms.indexOf(n);return r[Math.min(i,r.length-1)]}(a,t,e)}}},17119:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(67294),n=a(30143);const i=()=>r.createElement(n.ZP,{acceptOnScroll:!0,acceptOnScrollPercentage:10,buttonStyle:{backgroundColor:"var(--ifm-color-primary)",color:"#fff",padding:"10px 20px",border:"none",textAlign:"center",borderRadius:"6px",cursor:"pointer"}},"This website uses cookies to enhance the user experience.")},99231:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),n=a(99861),i=a(13875),l=a(55692);function o(){const{colorMode:e}=(0,l.I)(),[t,a]=(0,r.useState)(!1);(0,r.useEffect)((()=>{o()||a(!0)}),[]);const o=()=>{try{const e="test";return localStorage.testKey=e,!0}catch(e){return!1}};return r.createElement("div",null,t&&r.createElement("div",{className:i.Z["cookies-banner"]},r.createElement("p",null,"You need to allow cookies to comment on Wikis!")),r.createElement(n.Z,{repo:"aoijs/website",repoId:"MDEwOlJlcG9zaXRvcnkzNjM3OTEyMzY=",category:"General",categoryId:"DIC_kwDOFa8DhM4CXVEw",mapping:"pathname",term:"aoi.js comment section",strict:"0",reactionsEnabled:"1",emitMetadata:"1",inputPosition:"top",theme:e,lang:"en",crossorigin:"anonymous",async:!0}))}},42060:(e,t,a)=>{a.d(t,{Z:()=>g});var r=a(67294),n=a(86010),i=a(11128);const l={tag:"tag_U0uN",booster:"booster_MDO7",staff:"staff_nctV",mod:"mod_BJV7",creator:"creator_hdXK",contributor:"contributor_Fooe"};var o=Object.defineProperty,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&u(e,a,t[a]);if(s)for(var a of s(t))m.call(t,a)&&u(e,a,t[a]);return e};function p(e){return e.href?r.createElement(i.Z,d({},e)):r.createElement(r.Fragment,null,e.children)}function g({author:e,className:t}){const{name:a,title:i,url:o,imageURL:s,email:c}=e,m=o||c&&`mailto:${c}`||void 0,u=a.toLowerCase(),d=["@leref"].map((e=>e.toLowerCase())).includes(u),g=["@dodogames","@supremesupreme","@faf4a","@usersatoshi"].map((e=>e.toLowerCase())).includes(u),b=["@dodogames","@supremesupreme","@faf4a","@usersatoshi","@ahoemi","@snowytealatte","@wansie","@jollyjolli","@manu_1025"].map((e=>e.toLowerCase())).includes(u),f=["@faf4a","@dodogames"].map((e=>e.toLowerCase())).includes(u),v=["@.kuray.","@Alien Abd","@Zeke \u2661","@artemcurious","@creitingameplays","@eduard.irm","@kzzzakz","@leref","@neussdev","@valentineu0","@wansie"].map((e=>e.toLowerCase())).includes(u);return r.createElement("div",{className:(0,n.Z)("avatar margin-bottom--sm",t)},s&&r.createElement(p,{href:m,className:"avatar__photo-link"},r.createElement("img",{className:"avatar__photo",src:s,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(p,{href:m,itemProp:"url"},r.createElement("span",{itemProp:"name"},a)),f&&r.createElement("span",{className:(0,n.Z)(l.tag,l.contributor)},"Contributor"),v&&r.createElement("span",{className:(0,n.Z)(l.tag,l.booster)},"Server Booster"),b&&r.createElement("span",{className:(0,n.Z)(l.tag,l.staff)},"Staff"),g&&r.createElement("span",{className:(0,n.Z)(l.tag,l.mod)},"Moderator"),d&&r.createElement("span",{className:(0,n.Z)(l.tag,l.creator)},"Creator")),i&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},i)))}},48365:(e,t,a)=>{a.d(t,{Z:()=>u});var r=a(67294),n=a(86010),i=a(14699),l=a(41599),o=a(36081);const s={container:"container_iJTo"};function c({readingTime:e}){const t=function(){const{selectMessage:e}=(0,l.c)();return t=>{const a=Math.ceil(t);return e(a,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return r.createElement(r.Fragment,null,t(e))}function m(){return r.createElement(r.Fragment,null," \xb7 ")}function u({className:e}){const{metadata:t}=(0,o.C)(),{date:a,formattedDate:i,readingTime:l}=t;return r.createElement("div",{className:(0,n.Z)(s.container,"margin-vert--md",e)},void 0!==l&&r.createElement(r.Fragment,null,r.createElement(m,null),r.createElement(c,{readingTime:l})))}},59227:(e,t,a)=>{a.d(t,{Z:()=>g});var r=a(67294),n=a(36081),i=a(47569),l=a(99231),o=a(35710),s=Object.defineProperty,c=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))m.call(t,a)&&d(e,a,t[a]);if(c)for(var a of c(t))u.call(t,a)&&d(e,a,t[a]);return e};function g(e){const{metadata:t,isBlogPostPage:a}=(0,n.C)(),{frontMatter:s,slug:c,title:m}=((0,o.Z)(),t),{enableComments:u}=s;return r.createElement(r.Fragment,null,r.createElement(i.Z,p({},e)),u&&a&&r.createElement(l.Z,null))}},83260:(e,t,a)=>{a.d(t,{Z:()=>l});var r=a(67294),n=a(36081),i=a(59227);function l({items:e,component:t=i.Z}){return r.createElement(r.Fragment,null,e.map((({content:e})=>r.createElement(n.n,{key:e.metadata.permalink,content:e},r.createElement(t,null,r.createElement(e,null))))))}},77886:(e,t,a)=>{a.d(t,{Z:()=>w});var r=a(67294),n=a(13044),i=a(86010),l=a(11128),o=a(14699);const s={sidebar:"sidebar_brwN",sidebarItemTitle:"sidebarItemTitle_r4Q1",sidebarItemList:"sidebarItemList_QwSx",sidebarItem:"sidebarItem_lnhn",sidebarItemLink:"sidebarItemLink_yNGZ",sidebarItemLinkActive:"sidebarItemLinkActive_oSRm",newItem:"newItem_b9o7",newTag:"newTag_fGI0",activeButton:"activeButton_HxF9",searchContainer:"searchContainer_GE6j",searchInput:"searchInput_nz1m",mobileSearchContainer:"mobileSearchContainer_i5LO",mobileSearchInput:"mobileSearchInput_ULu5",searchIcon:"searchIcon_X7sx",searchClose:"searchClose_K_EJ"};function c({sidebar:e}){const t=["/wikis/submit","/wikis/guidelines","/wikis/tags","es/wikis/submit","es/wikis/guidelines","es/wikis/tags","fr/wikis/submit","fr/wikis/guidelines","fr/wikis/tags","ar/wikis/submit","ar/wikis/guidelines","ar/wikis/tags","ru/wikis/submit","ru/wikis/guidelines","ru/wikis/tags","uk/wikis/submit","uk/wikis/guidelines","uk/wikis/tags","tr/wikis/submit","tr/wikis/guidelines","tr/wikis/tags","de/wikis/submit","de/wikis/guidelines","de/wikis/tags"],[a,n]=(0,r.useState)(!1),[c,m]=(0,r.useState)("");(0,r.useEffect)((()=>{const e=u("sortingState");e&&n(JSON.parse(e))}),[]),(0,r.useEffect)((()=>{p()&&d("sortingState",JSON.stringify(a))}),[a]);const u=e=>p()?localStorage.getItem(e):null,d=(e,t)=>{p()&&localStorage.setItem(e,t)},p=()=>{try{const e="test";return localStorage.testKey=e,!0}catch(e){return!1}},g=e.items.filter((e=>!t.includes(e.permalink))).filter((e=>e.title.toLowerCase().includes(c.toLowerCase()))).sort(((e,t)=>{if(a)return e.title.localeCompare(t.title)}));return r.createElement("aside",{className:"col col--3"},r.createElement("nav",{className:(0,i.Z)(s.sidebar,"thin-scrollbar"),"aria-label":(0,o.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,i.Z)(s.sidebarItemTitle,"margin-bottom--md")},r.createElement("span",null,"Introduction")),r.createElement("ul",{className:(0,i.Z)(s.sidebarItemList,"clean-list")},r.createElement("li",{key:"/wikis/guidelines",className:s.sidebarItem},r.createElement(l.Z,{isNavLink:!0,to:"/wikis/guidelines",className:s.sidebarItemLink,activeClassName:s.sidebarItemLinkActive},"Wiki Guidelines")),r.createElement("li",{key:"/wikis/submit",className:s.sidebarItem},r.createElement(l.Z,{isNavLink:!0,to:"/wikis/submit",className:s.sidebarItemLink,activeClassName:s.sidebarItemLinkActive},"Submit Wiki")),r.createElement("li",{key:"/wikis/tags",className:s.sidebarItem},r.createElement(l.Z,{isNavLink:!0,to:"/wikis/tags",className:s.sidebarItemLink,activeClassName:s.sidebarItemLinkActive},"Tags"))),r.createElement("div",{className:(0,i.Z)(s.sidebarItemTitle,"margin-bottom--md")},"Wikis",r.createElement("button",{className:(0,i.Z)(s.activeButton,{[s.activeButton]:a}),onClick:()=>{n((e=>!e))}},a?"A-Z":"Newest First")),r.createElement("div",{className:s.searchContainer},r.createElement("input",{type:"text",className:s.searchInput,placeholder:"Search Wikis...",value:c,onChange:e=>{m(e.target.value)}})),r.createElement("ul",{className:(0,i.Z)(s.sidebarItemList,"clean-list")},g.map(((e,t)=>{return r.createElement("li",{key:e.permalink,className:s.sidebarItem},r.createElement(l.Z,{isNavLink:!0,to:e.permalink,className:s.sidebarItemLink,activeClassName:s.sidebarItemLinkActive},(a=e.title).charAt(0).toUpperCase()+a.slice(1)));var a})))))}var m=a(56981),u=Object.defineProperty,d=Object.defineProperties,p=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,b=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,v=(e,t,a)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,h=(e,t)=>{for(var a in t||(t={}))b.call(t,a)&&v(e,a,t[a]);if(g)for(var a of g(t))f.call(t,a)&&v(e,a,t[a]);return e},E=(e,t)=>d(e,p(t));function y({sidebar:e,onSearch:t}){const[a,n]=(0,r.useState)(""),i=["/wikis/submit","/wikis/guidelines","/wikis/tags","es/wikis/submit","es/wikis/guidelines","es/wikis/tags","fr/wikis/submit","fr/wikis/guidelines","fr/wikis/tags","ar/wikis/submit","ar/wikis/guidelines","ar/wikis/tags","ru/wikis/submit","ru/wikis/guidelines","ru/wikis/tags","uk/wikis/submit","uk/wikis/guidelines","uk/wikis/tags","tr/wikis/submit","tr/wikis/guidelines","tr/wikis/tags","de/wikis/submit","de/wikis/guidelines","de/wikis/tags"],o=null==e?void 0:e.items.filter((e=>!i.includes(e.permalink))).sort(((e,t)=>e.title.localeCompare(t.title))),[c,m]=(0,r.useState)(o);return r.createElement("ul",{className:"menu__list"},r.createElement("div",{className:"menu__title"},"Introduction"),r.createElement("li",{key:"/wikis/guidelines",className:"menu__list-item"},r.createElement(l.Z,{isNavLink:!0,to:"/wikis/guidelines",className:"menu__link",activeClassName:"menu__link--active"},"Wiki Guidelines")),r.createElement("li",{key:"/wikis/submit",className:"menu__list-item"},r.createElement(l.Z,{isNavLink:!0,to:"/wikis/submit",className:"menu__link",activeClassName:"menu__link--active"},"Submit Wiki")),r.createElement("li",{key:"/wikis/tags",className:"menu__list-item"},r.createElement(l.Z,{isNavLink:!0,to:"/wikis/tags",className:"menu__link",activeClassName:"menu__link--active"},"Tags")),r.createElement("div",{className:"menu__title",style:{marginTop:"25px",marginBottom:"15px"}},"Wikis"),r.createElement("div",{className:s.searchContainer},r.createElement("input",{type:"text",className:s.searchInput,placeholder:"Search Wikis...",value:a,onChange:e=>{const t=e.target.value.toLowerCase(),a=o.filter((e=>e.title.toLowerCase().includes(t)));m(a),n(t)}})),c.map((e=>{return r.createElement("li",{key:e.permalink,className:"menu__list-item"},r.createElement(l.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},(t=e.title).charAt(0).toUpperCase()+t.slice(1)));var t})))}function k({sidebar:e,onSearch:t}){const a=["/wikis/submit","/wikis/guidelines","/wikis/tags"],n=null==e?void 0:e.items.filter((e=>!a.includes(e.permalink))).sort(((e,t)=>e.title.localeCompare(t.title)));return r.createElement(m.Zo,{component:y,props:{sidebar:E(h({},e),{items:n.map((e=>{return E(h({},e),{title:(t=e.title,t.charAt(0).toUpperCase()+t.slice(1))});var t}))})}})}function w({sidebar:e}){const t=(0,n.i)();return(null==e?void 0:e.items.length)?"mobile"===t?r.createElement(k,{sidebar:e}):r.createElement(c,{sidebar:e}):null}},6758:(e,t,a)=>{a.d(t,{Z:()=>q});var r=a(63997),n=a(67294);const i=({children:e,color:t,radius:a,padding:r})=>n.createElement("span",{style:{backgroundColor:t,borderRadius:a||"2px",color:"#fff",padding:r||"0.2rem"}},e);var l=a(54023),o=a(49247),s=a(17119),c=a(99231),m=a(17891),u=a(86010),d=a(25365),p=Object.defineProperty,g=Object.defineProperties,b=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,v=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,E=(e,t,a)=>t in e?p(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,y=(e,t)=>{for(var a in t||(t={}))v.call(t,a)&&E(e,a,t[a]);if(f)for(var a of f(t))h.call(t,a)&&E(e,a,t[a]);return e},k=(e,t)=>g(e,b(t));const w=({name:e,id:t,value:a,onChange:r,type:i,error:l,charCount:o})=>{const s={width:"100%",padding:"8px",borderRadius:"4px",backgroundColor:"rgba(0, 0, 0, 0.1)",border:"1px solid "+(l?"red":"#3f51b5"),transition:"background-color 0.3s, color 0.3s",fontFamily:"var(--ifm-font-family-base)",fontSize:"14px",fontColor:"white",position:"relative",outline:"none",boxShadow:"2px 3px 3px rgba(0, 0, 0, 0.1)"},c=e=>{r(e)};let m=null;switch(i){case"textarea-description":m=n.createElement("div",null,n.createElement("textarea",{name:e,id:t,value:a,onChange:c,style:k(y({},s),{minHeight:"155px",resize:"none"}),required:!0}),n.createElement("div",{style:{fontSize:"12px",color:o>=500?"red":"#3f51b5"}},void 0===o?"0":o,"/",500));break;case"textarea-code":m=n.createElement("textarea",{name:e,id:t,value:a,onChange:c,style:k(y({},s),{minHeight:"155px",resize:"none"}),required:!0});break;case"number":const i=t=>{const{value:a}=t.target,n=a.replace(/[^0-9]/g,"");n.length>20||r({target:{name:e,value:n}})};m=n.createElement("div",{style:{position:"relative"}},n.createElement("input",{type:"text",name:e,id:t,value:a,onChange:i,style:s,inputMode:"numeric",pattern:"[0-9]*",required:!0}));break;case"small":m=n.createElement("input",{type:"text",name:e,id:t,value:a,onChange:c,style:k(y({},s),{width:"50%",fontSize:"12px"}),required:!0});break;default:m=n.createElement("div",null,n.createElement("input",{type:"text",name:e,id:t,value:a,onChange:c,style:k(y({},s),{resize:"none"}),required:!0}),n.createElement("div",{style:{fontSize:"12px",color:o>=50?"red":"#3f51b5",marginTop:"5px"}},void 0===o?"0":o,"/",50))}return n.createElement("div",null,m)};var _=a(99578),Z=a(11128),N=a(42060),O=Object.defineProperty,C=Object.defineProperties,x=Object.getOwnPropertyDescriptors,I=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,S=Object.prototype.propertyIsEnumerable,j=(e,t,a)=>t in e?O(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,L=(e,t)=>{for(var a in t||(t={}))P.call(t,a)&&j(e,a,t[a]);if(I)for(var a of I(t))S.call(t,a)&&j(e,a,t[a]);return e},T=(e,t)=>C(e,x(t));const D=()=>{const[e,t]=(0,n.useState)(0),[a,r]=(0,n.useState)(0),[i,l]=(0,n.useState)({title:"",discordUID:"",description:"",code:"",tags:[],isUIDValid:!0}),[o,s]=(0,n.useState)({title:!1,discordUID:!1,description:!1,code:!1,tags:!1}),{title:c,description:m,discordUID:p,code:g,tags:b,isUIDValid:f}=i,[v,h]=(0,n.useState)({avatar:`https://cdn.discordapp.com/embed/avatars/${Math.floor(5*Math.random())}.png`,username:"Guest User",id:""}),E=async e=>{const{name:a,value:r}=e.target;let n=r;if("title"===a)n=r.replace(/[^a-zA-Z0-9 ]/g,""),t((e=>T(L({},e),{title:r.length}))),n.length>49&&(n=n.substring(0,50));else if("description"===a)t((e=>T(L({},e),{description:r.length}))),r.length>=500&&(n=r.substring(0,499));else if("discordUID"===a&&(l((e=>T(L({},e),{isUIDValid:!0}))),r.length>=17)){const{avatar:e,username:t,bot:a,id:n}=await y(r);void 0!==a&&l((e=>T(L({},e),{isUIDValid:!1}))),h((a=>T(L({},a),{avatar:e,username:t,id:"- "+n})))}l((e=>T(L({},e),{[a]:n})))},y=async e=>{const t=Math.floor(5*Math.random());try{const a=await fetch(`https://someapi.frenchwomen.repl.co/uinfo/${e}`),r=await a.json();return r&&r.avatar?{bot:r.bot,avatar:r.avatar,username:r.username,id:r.id}:{bot:void 0,avatar:`https://cdn.discordapp.com/embed/avatars/${t}.png`,username:"Guest User",id:"Invalid User"}}catch(a){return{bot:void 0,avatar:`https://cdn.discordapp.com/embed/avatars/${t}.png`,username:"Guest User",id:"Invalid User"}}},k=async e=>{e.preventDefault();const t=Date.now();if(t-a<15e3)return void alert("Don't spam the submit button!");r(t);const n={title:!1,discordUID:!1,description:!1,code:!1};["title","discordUID","description","code"].forEach((e=>{""===i[e].trim()&&(n[e]=!0)})),0===i.tags.length&&(n.tags=!0);const{avatar:l,username:o,bot:u}=await y(p);if("Guest User"===o&&(n.discordUID=!0),void 0!==u&&(n.discordUID=!0),s(n),Object.values(n).some((e=>!0===e)))return;const d=Math.random().toString(36).substring(7),f=`${p}/${d}.md`,v=`---\ntitle: "${c}"\ndescription: "${m}"\nauthors:\n  name: "@${o}"\n  title: Member - ${p}\n  userid: "${p}"\n  url: https://discord.com/users/${p}\n  image_url: https://raw.githubusercontent.com/Faf4a/website/main/assets/images/avatars/${p}.png\ntags: ${JSON.stringify(b)}\nhide_table_of_contents: true\nenableComments: true\npagination_prev: null\npagination_next: null\n---\n\n${g}`;try{async function E(e){try{(await fetch(`https://someapi.frenchwomen.repl.co/avatars/${e}`)).ok||await alert("Something went wrong while handling your request. (Try resubmitting later again, or notify aoi.js staff about this if it occurs again)")}catch(t){return void await alert("Something went wrong while handling your request. (Failed to upload your avatar, you can savely ignore this error)")}}if(!(await fetch(atob("aHR0cHM6Ly9zb21lYXBpLmZyZW5jaHdvbWVuLnJlcGwuY28vZ2l0aHVi"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({commitMessage:`New Wiki created by: ${o}`,content:v,fileName:f})})).ok)return void await alert("Something went wrong while handling your request.");await E(p),alert("Successfully submitted your wiki for review, check back later!"),window.location.reload()}catch(h){return}};return n.createElement("form",{onSubmit:k},n.createElement("br",null),n.createElement("br",null),n.createElement("h3",null,"Title of Wiki",n.createElement("small",{style:{fontSize:"12px",color:"gray"}}," ","(A short and fitting title for your Wiki)")),n.createElement(w,{name:"title",id:"title",value:c,onChange:E,type:"text",placeholder:"Title",required:!0,pattern:"[a-zA-Z0-9]*",error:o.title,charCount:void 0===e.title?"0":e.title}),n.createElement("br",null),n.createElement("h3",null,"Description",n.createElement("small",{style:{fontSize:"12px",color:"gray"}}," ","(A short description about the purpose of your Wiki, will NOT be displayed to the user on the website)")),n.createElement(w,{name:"description",id:"description",value:m,onChange:E,type:"textarea-description",placeholder:"Description",required:!0,error:o.description,charCount:void 0===e.description?"0":e.description}),n.createElement("br",null),n.createElement("h3",null,"Discord User ID",n.createElement("small",{style:{fontSize:"12px",color:"gray"}}," ","(Your Discord User ID, so you get the full credit of YOUR work)")),n.createElement(w,{name:"discordUID",id:"discordUID",value:p,onChange:E,type:"number",placeholder:"Discord UID",required:!0,error:!f||o.discordUID}),!f&&n.createElement("p",{style:{color:"red"}},"Invalid user"),n.createElement("br",null),n.createElement("h3",null,"Content of Wiki",n.createElement("small",{style:{fontSize:"12px",color:"gray"}}," ","(The content of your Wiki, including how it works, what it does and more)")),n.createElement(w,{name:"code",id:"code",value:g,onChange:E,type:"textarea-code",placeholder:"Code",required:!0,error:o.code}),n.createElement("h5",{style:{marginBottom:"0.5rem"}},n.createElement("span",{style:{verticalAlign:"middle"}},"Preview",n.createElement("small",{style:{fontSize:"8px",color:"gray",verticalAlign:"middle"}}," ","(How your Wiki will look on the website)"))),n.createElement("div",{style:{width:"100%",padding:"8px",borderRadius:"4px",border:"1px solid #3f51b5",backgroundColor:"rgba(0, 0, 0, 0.1)",transition:"background-color 0.3s, color 0.3s",fontFamily:"var(--ifm-font-family-base)",fontSize:"14px",fontColor:"white",position:"relative",outline:"none",boxShadow:"2px 3px 3px rgba(0, 0, 0, 0.1)"}},n.createElement("div",{style:{overflow:"hidden"}},n.createElement("div",{style:{background:"transparent",borderRadius:"4px",padding:"12px"}},n.createElement(N.Z,{author:{name:`@${v.username}`,title:`Member ${v.id}`,url:`https://discord.com/users/${p}`,imageURL:`${v.avatar}`}}),n.createElement("br",null),!g&&n.createElement("div",{className:_.Z.placeholderText},"Some text of your awesome Wiki!",n.createElement("br",null),n.createElement("br",null),"Did you know that you can use markdown to make your Wiki look even better? ",n.createElement("br",null)," ",n.createElement("br",null),n.createElement("div",{style:{fontSize:"18px",color:"gray",border:"1px solid #3f51b5",borderRadius:"3px",margin:"4px",padding:"10px"}},"![Alt Text](Image Link) for images! ",n.createElement("br",null),"## For Headers! ",n.createElement("br",null),"- For Lists! ",n.createElement("br",null))),n.createElement(d.D,null,g)))),n.createElement("br",null),n.createElement("h3",null,"Tags",n.createElement("small",{style:{fontSize:"12px",color:"gray"}}," ","(Select Tags that fit your Wiki)")),n.createElement("div",{className:_.Z.tagContainer},["aoi.music","aoi.js","aoi.panel","aoi.dashboard","v6","v7","Other"].map((e=>n.createElement("span",{key:e,className:(0,u.Z)(_.Z.tag,{[_.Z.active]:b.includes(e)}),onClick:()=>(e=>{const t=[...b];t.includes(e)?t.splice(t.indexOf(e),1):t.push(e),l((e=>T(L({},e),{tags:t})))})(e)},e)))),o.tags&&n.createElement("p",{style:{color:"red",marginTop:"10px",fontFamily:"var(--ifm-font-family-base)"}},"At least one tag is required"),n.createElement("div",{className:_.Z.buttons,style:{width:"100%",display:"flex",justifyContent:"flex-end",marginTop:"15px"}},n.createElement(Z.Z,{className:(0,u.Z)("button button--outline button--secondary"),onClick:k,style:{width:"100%"}},"Submit")))},F=({children:e})=>{const[t,a]=(0,n.useState)(!1),r={display:"inline-block",padding:"0px 3px",fontWeight:"500",marginTop:"-5px",backgroundColor:t?"#4d5291":"#3b406e",cursor:t?"pointer":"default",color:"#c9cdfb",borderRadius:"3px",transition:"background-color 0.15s ease"};return n.createElement("div",{style:r,onMouseEnter:()=>a(!0),onMouseLeave:()=>a(!1)},e)};var U=a(13875);const A=({color:e,text:t})=>n.createElement("span",{className:U.Z.tag},n.createElement("span",{className:U.Z.tagCircle,style:{"--tag-color":e}}),t),B=()=>{const[e,t]=(0,n.useState)([]),[a,r]=(0,n.useState)([]);(0,n.useEffect)((()=>{i()}),[]);const i=async()=>{r([{title:"Item 1",description:"Description L1<br />Description L2<br />Description L3<br />Description L4<br />Description L5<br />Description L6",tags:[{color:"#FF0000",text:"v7"},{color:"#00FF00",text:"v6"},{color:"#0000FF",text:"Tag 3"}],path:"/path/"},{title:"Item 2",description:"Description L1\n        Description L2\n        Description L3",tags:[{color:"#FF0000",text:"v7"},{color:"#00FF00",text:"v6"},{color:"#0000FF",text:"Tag 3"}],path:"/path/"}])},l=a=>{e.includes(a)?t(e.filter((e=>e!==a))):t([...e,a])},o=0===e.length?a:a.filter((t=>e.some((e=>t.tags.includes(e)))));return n.createElement("div",null,n.createElement("ul",{className:(0,u.Z)("pills",U.Z.pills)},n.createElement("li",{className:(0,u.Z)("pills__item",{"pills__item--active":0===e.length}),onClick:()=>{t([])}},"All"),n.createElement("li",{className:(0,u.Z)("pills__item",{"pills__item--active":e.includes("v7")}),onClick:()=>l("v7")},"v6"),n.createElement("li",{className:(0,u.Z)("pills__item",{"pills__item--active":e.includes("v6")}),onClick:()=>l("v6")},"v7"),n.createElement("li",{className:(0,u.Z)("pills__item",{"pills__item--active":e.includes("other")}),onClick:()=>l("other")},"Other")),n.createElement("div",{className:(0,u.Z)("card-demo",U.Z.cardDemo)},o.map(((e,t)=>n.createElement("div",{className:(0,u.Z)("card","card-wrapper",U.Z.cardWrapper),key:t},n.createElement("div",{className:(0,u.Z)("card__header","my-card-header",U.Z.cardHeader)},n.createElement("h3",null,e.title)),n.createElement("div",{className:(0,u.Z)("card__body","my-card-body",U.Z.cardBody)},n.createElement("p",{dangerouslySetInnerHTML:{__html:e.description}})),n.createElement("div",{className:U.Z.tagContainer},e.tags.map(((e,t)=>n.createElement(A,{key:t,color:e.color,text:e.text})))),n.createElement("div",{className:(0,u.Z)("card__footer","my-card-footer",U.Z.cardFooter)},n.createElement(Z.Z,{className:(0,u.Z)("button","button--secondary","button--block"),to:e.path},"Go to Wiki")))))))};var M=Object.defineProperty,z=Object.defineProperties,R=Object.getOwnPropertyDescriptors,$=Object.getOwnPropertySymbols,W=Object.prototype.hasOwnProperty,G=Object.prototype.propertyIsEnumerable,H=(e,t,a)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;const q=(V=((e,t)=>{for(var a in t||(t={}))W.call(t,a)&&H(e,a,t[a]);if($)for(var a of $(t))G.call(t,a)&&H(e,a,t[a]);return e})({},r.Z),J={Highlight:i,GiscusComponent:c.Z,InputField:w,SubmitForm:D,Cookies:s.Z,Tabs:l.Z,Slash:F,Showcase:B,Tooltip:m.u,TabItem:o.Z},z(V,R(J)));var V,J},13875:(e,t,a)=>{a.d(t,{Z:()=>r});const r={"cookies-banner":"cookies-banner_YsRc",container:"container_H2za",avatar:"avatar_qL_g",content:"content_j2XQ",tagContainer:"tagContainer_hVSL",tag:"tag_Utpt",tagCircle:"tagCircle_gDjY"}},99578:(e,t,a)=>{a.d(t,{Z:()=>r});const r={heroBanner:"heroBanner_UJJx",buttons:"buttons_pzbO",features:"features_keug",featureImage:"featureImage_yA8i",tagContainer:"tagContainer_k__v",tag:"tag_jTZG","color-transition":"color-transition_yOxN",placeholderText:"placeholderText_M9S7",active:"active_Iznl",creditContainer:"creditContainer_Kilv",creditItem:"creditItem_GDO6",header:"header_A16n",avatar:"avatar_dBEG",details:"details_kkgo",name:"name_ZL2v",title:"title_VwV3",packageStats:"packageStats_z9Yh",packageStatsBox:"packageStatsBox_t9e4","fade-in":"fade-in_LOUq",packageStatsTitle:"packageStatsTitle_D_OO",statsContainer:"statsContainer_VzT5","slide-in":"slide-in_KFry",stat:"stat_ezPZ",animatedTitle:"animatedTitle_WRAR",animatedText:"animatedText_jRHx",roundedButtons:"roundedButtons_ik7t",roundedButton:"roundedButton_mWzP",githubButton:"githubButton_Bgng"}}}]);