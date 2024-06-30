"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[61],{2153:(e,t,n)=>{n.d(t,{A:()=>v});n(6540);var a=n(4164),s=n(1312),i=n(7559),l=n(8774);const r={iconEdit:"iconEdit_Z9Sw"};var d=n(4848);function c(e){let{className:t,...n}=e;return(0,d.jsx)("svg",{fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,a.A)(r.iconEdit,t),"aria-hidden":"true",...n,children:(0,d.jsx)("g",{children:(0,d.jsx)("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})})})}function o(e){let{editUrl:t}=e;return(0,d.jsxs)(l.A,{to:t,className:i.G.common.editThisPage,children:[(0,d.jsx)(c,{}),(0,d.jsx)(s.A,{id:"theme.common.editThisPage",description:"The link label to edit the current page",children:"Edit this page"})]})}var m=n(4586);function u(e){void 0===e&&(e={});const{i18n:{currentLocale:t}}=(0,m.A)(),n=function(){const{i18n:{currentLocale:e,localeConfigs:t}}=(0,m.A)();return t[e].calendar}();return new Intl.DateTimeFormat(t,{calendar:n,...e})}function h(e){let{lastUpdatedAt:t}=e;const n=new Date(t),a=u({day:"numeric",month:"short",year:"numeric",timeZone:"UTC"}).format(n);return(0,d.jsx)(s.A,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:(0,d.jsx)("b",{children:(0,d.jsx)("time",{dateTime:n.toISOString(),itemProp:"dateModified",children:a})})},children:" on {date}"})}function p(e){let{lastUpdatedBy:t}=e;return(0,d.jsx)(s.A,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:(0,d.jsx)("b",{children:t})},children:" by {user}"})}function f(e){let{lastUpdatedAt:t,lastUpdatedBy:n}=e;return(0,d.jsxs)("span",{className:i.G.common.lastUpdated,children:[(0,d.jsx)(s.A,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t?(0,d.jsx)(h,{lastUpdatedAt:t}):"",byUser:n?(0,d.jsx)(p,{lastUpdatedBy:n}):""},children:"Last updated{atDate}{byUser}"}),!1]})}const x={lastUpdated:"lastUpdated_JAkA"};function v(e){let{className:t,editUrl:n,lastUpdatedAt:s,lastUpdatedBy:i}=e;return(0,d.jsxs)("div",{className:(0,a.A)("row",t),children:[(0,d.jsx)("div",{className:"col",children:n&&(0,d.jsx)(o,{editUrl:n})}),(0,d.jsx)("div",{className:(0,a.A)("col",x.lastUpdated),children:(s||i)&&(0,d.jsx)(f,{lastUpdatedAt:s,lastUpdatedBy:i})})]})}},7973:(e,t,n)=>{n.r(t),n.d(t,{default:()=>h});n(6540);var a=n(4164),s=n(1003),i=n(7559),l=n(5476),r=n(8509),d=n(7763),c=n(996),o=n(2153);const m={mdxPageWrapper:"mdxPageWrapper_j9I6"};var u=n(4848);function h(e){const{content:t}=e,{metadata:{title:n,editUrl:h,description:p,frontMatter:f,unlisted:x,lastUpdatedBy:v,lastUpdatedAt:g},assets:j}=t,{keywords:A,wrapperClassName:b,hide_table_of_contents:N}=f,L=j.image??f.image,U=!!(h||g||v);return(0,u.jsx)(s.e3,{className:(0,a.A)(b??i.G.wrapper.mdxPages,i.G.page.mdxPage),children:(0,u.jsxs)(l.A,{children:[(0,u.jsx)(s.be,{title:n,description:p,keywords:A,image:L}),(0,u.jsx)("main",{className:"container container--fluid margin-vert--lg",children:(0,u.jsxs)("div",{className:(0,a.A)("row",m.mdxPageWrapper),children:[(0,u.jsxs)("div",{className:(0,a.A)("col",!N&&"col--8"),children:[x&&(0,u.jsx)(c.A,{}),(0,u.jsx)("article",{children:(0,u.jsx)(r.A,{children:(0,u.jsx)(t,{})})}),U&&(0,u.jsx)(o.A,{className:(0,a.A)("margin-top--sm",i.G.pages.pageFooterEditMetaRow),editUrl:h,lastUpdatedAt:g,lastUpdatedBy:v})]}),!N&&t.toc.length>0&&(0,u.jsx)("div",{className:"col col--2",children:(0,u.jsx)(d.A,{toc:t.toc,minHeadingLevel:f.toc_min_heading_level,maxHeadingLevel:f.toc_max_heading_level})})]})})]})})}},7763:(e,t,n)=>{n.d(t,{A:()=>c});n(6540);var a=n(4164),s=n(5195);const i={tableOfContents:"tableOfContents_bqdL",docItemContainer:"docItemContainer_F8PC"};var l=n(4848);const r="table-of-contents__link toc-highlight",d="table-of-contents__link--active";function c(e){let{className:t,...n}=e;return(0,l.jsx)("div",{className:(0,a.A)(i.tableOfContents,"thin-scrollbar",t),children:(0,l.jsx)(s.A,{...n,linkClassName:r,linkActiveClassName:d})})}},5195:(e,t,n)=>{n.d(t,{A:()=>f});var a=n(6540),s=n(6342);function i(e){const t=e.map((e=>({...e,parentIndex:-1,children:[]}))),n=Array(7).fill(-1);t.forEach(((e,t)=>{const a=n.slice(2,e.level);e.parentIndex=Math.max(...a),n[e.level]=t}));const a=[];return t.forEach((e=>{const{parentIndex:n,...s}=e;n>=0?t[n].children.push(s):a.push(s)})),a}function l(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:a}=e;return t.flatMap((e=>{const t=l({toc:e.children,minHeadingLevel:n,maxHeadingLevel:a});return function(e){return e.level>=n&&e.level<=a}(e)?[{...e,children:t}]:t}))}function r(e){const t=e.getBoundingClientRect();return t.top===t.bottom?r(e.parentNode):t}function d(e,t){let{anchorTopOffset:n}=t;const a=e.find((e=>r(e).top>=n));if(a){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(a))?a:e[e.indexOf(a)-1]??null}return e[e.length-1]??null}function c(){const e=(0,a.useRef)(0),{navbar:{hideOnScroll:t}}=(0,s.p)();return(0,a.useEffect)((()=>{e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}function o(e){const t=(0,a.useRef)(void 0),n=c();(0,a.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:a,linkActiveClassName:s,minHeadingLevel:i,maxHeadingLevel:l}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(a),r=function(e){let{minHeadingLevel:t,maxHeadingLevel:n}=e;const a=[];for(let s=t;s<=n;s+=1)a.push(`h${s}.anchor`);return Array.from(document.querySelectorAll(a.join()))}({minHeadingLevel:i,maxHeadingLevel:l}),c=d(r,{anchorTopOffset:n.current}),o=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,n){n?(t.current&&t.current!==e&&t.current.classList.remove(s),e.classList.add(s),t.current=e):e.classList.remove(s)}(e,e===o)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,n])}var m=n(8774),u=n(4848);function h(e){let{toc:t,className:n,linkClassName:a,isChild:s}=e;return t.length?(0,u.jsx)("ul",{className:s?void 0:n,children:t.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(m.A,{to:`#${e.id}`,className:a??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(h,{isChild:!0,toc:e.children,className:n,linkClassName:a})]},e.id)))}):null}const p=a.memo(h);function f(e){let{toc:t,className:n="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:d,minHeadingLevel:c,maxHeadingLevel:m,...h}=e;const f=(0,s.p)(),x=c??f.tableOfContents.minHeadingLevel,v=m??f.tableOfContents.maxHeadingLevel,g=function(e){let{toc:t,minHeadingLevel:n,maxHeadingLevel:s}=e;return(0,a.useMemo)((()=>l({toc:i(t),minHeadingLevel:n,maxHeadingLevel:s})),[t,n,s])}({toc:t,minHeadingLevel:x,maxHeadingLevel:v});return o((0,a.useMemo)((()=>{if(r&&d)return{linkClassName:r,linkActiveClassName:d,minHeadingLevel:x,maxHeadingLevel:v}}),[r,d,x,v])),(0,u.jsx)(p,{toc:g,className:n,linkClassName:r,...h})}},996:(e,t,n)=>{n.d(t,{A:()=>h});n(6540);var a=n(4164),s=n(1312),i=n(5260),l=n(4848);function r(){return(0,l.jsx)(s.A,{id:"theme.unlistedContent.title",description:"The unlisted content banner title",children:"Unlisted page"})}function d(){return(0,l.jsx)(s.A,{id:"theme.unlistedContent.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function c(){return(0,l.jsx)(i.A,{children:(0,l.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}var o=n(7559),m=n(7293);function u(e){let{className:t}=e;return(0,l.jsx)(m.A,{type:"caution",title:(0,l.jsx)(r,{}),className:(0,a.A)(t,o.G.common.unlistedBanner),children:(0,l.jsx)(d,{})})}function h(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(c,{}),(0,l.jsx)(u,{...e})]})}}}]);