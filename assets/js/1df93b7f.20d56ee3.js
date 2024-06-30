"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[583],{4023:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var a=s(4848),n=s(8453);const r={},c=void 0,o={type:"mdx",permalink:"/quickstart_code",source:"@site/src/pages/quickstart_code.mdx",frontMatter:{},unlisted:!1},i={},l=[];function d(e){const t={code:"code",pre:"pre",...(0,n.R)(),...e.components};return(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-sh",children:'1\ufe0f\u20e3 Install Release-plz\n$ cargo install release-plz\n\n2\ufe0f\u20e3 Go to project\n$ cd path/to/your/project\n\n3\ufe0f\u20e3 Tell Release-plz to update Cargo.toml, Cargo.lock and CHANGELOG.md\n$ release-plz update\n\n4\ufe0f\u20e3 Review the changes and commit them\n$ git add . && git commit -m "chore: release"\n\n5\ufe0f\u20e3 Tell Release-plz to create the git tag and publish to crates.io\n$ release-plz release\n'})})}function h(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},39:(e,t,s)=>{s.r(t),s.d(t,{default:()=>A});var a=s(6540),n=s(4848);const r=[{url:"https://twitter.com/algo_luca/status/1781977925299908816",handle:"algo_luca",name:"Luca Palmieri",date:"Apr 21, 2024",content:(0,n.jsx)(n.Fragment,{children:"God bless @MarcoIeni for release-plz."}),showOnHomepage:!0,githubUsername:"LukeMathWalker"},{url:"https://fosdem.org/2024/schedule/event/fosdem-2024-2682-semver-in-the-rust-ecosystem-breakage-tooling-and-edge-cases/",handle:"PredragGruevski",name:"Predrag Gruevski",date:"Feb 3, 2024",content:(0,n.jsx)(n.Fragment,{children:"Release-plz will automatically run cargo-semver-checks as part of the release process. If you are in the market for a good release manager, you should check this one out; it's awesome."}),showOnHomepage:!0,githubUsername:"obi1kenobi"},{url:"https://github.com/rust-lang/libc/issues/3350#issuecomment-1746436699",handle:"fasterthanlime",name:"Amos Wenger",date:"Oct 4, 2023",content:(0,n.jsx)(n.Fragment,{children:"As far as I can tell, release-plz (an actual Rust executable running in CI, comes with its own GitHub Action) is best-of-class."}),showOnHomepage:!0,githubUsername:"fasterthanlime"},{url:"https://www.reddit.com/r/rust/comments/13he55f/comment/jkckcx9/?utm_source=share&utm_medium=web2x&context=3",handle:"XAMPPRocky",name:"Erin Power",date:"May 16, 2023",content:(0,n.jsx)(n.Fragment,{children:"This is a great project to contribute to, it's so incredibly valuable for other maintainers like myself to be able to automate project releases and provide a better experience for our contributors."}),showOnHomepage:!0,githubUsername:"XAMPPRocky"}];var c=s(4164),o=s(4586),i=s(5476),l=s(1107);const d={features:"features_t9lD",featureSvg:"featureSvg_GfXr"},h=[{title:"Changelog generation \ud83d\udcdd",description:(0,n.jsxs)(n.Fragment,{children:["Release-plz updates your changelogs with"," ",(0,n.jsx)("a",{href:"https://git-cliff.org",children:"git-cliff"})," using"," ",(0,n.jsx)("a",{href:"https://keepachangelog.com/en/1.0.0/",children:"Keep a changelog"})," format by default."]})},{title:"Version bump \u2934\ufe0f",description:(0,n.jsxs)(n.Fragment,{children:["Release-plz bumps the versions of your crates according to"," ",(0,n.jsx)("a",{href:"https://semver.org/",children:"Semantic Versioning"}),", based on"," ",(0,n.jsx)("a",{href:"https://www.conventionalcommits.org/",children:"Conventional Commits"})," and API breaking changes detected by"," ",(0,n.jsx)("a",{href:"https://github.com/obi1kenobi/cargo-semver-checks",children:"cargo-semver-checks"}),"."]})},{title:"Release PR \ud83e\udd16",description:(0,n.jsxs)(n.Fragment,{children:["Release-plz opens a PR with the changes to ",(0,n.jsx)("code",{children:"CHANGELOG.md"}),","," ",(0,n.jsx)("code",{children:"Cargo.toml"})," ","and ",(0,n.jsx)("code",{children:"Cargo.lock"}),". When you merge the PR, release-plz creates the tag and the release on GitHub/Gitea and publishes the crate to crates.io."]})}];function m(e){let{title:t,description:s}=e;return(0,n.jsx)("div",{className:(0,c.A)("col col--4"),children:(0,n.jsxs)("div",{className:"text--center padding-horiz--md",children:[(0,n.jsx)("h3",{children:t}),(0,n.jsx)("p",{children:s})]})})}function u(){return(0,n.jsx)("section",{className:d.features,children:(0,n.jsx)("div",{className:"container",children:(0,n.jsx)("div",{className:"row",children:h.map(((e,t)=>(0,n.jsx)(m,{...e},t)))})})})}const g={heroBanner:"heroBanner_qdFl",buttons:"buttons_AeoN",section:"section_Q9Zo",sectionAlt:"sectionAlt_Oc16",sectionInner:"sectionInner_RdI8",tweetsSection:"tweetsSection_ErMg"};var p=s(8774);const x={tweet:"tweet_SCzw",tweetMeta:"tweetMeta_OVyI"};function j(e){let{url:t,handle:s,name:a,content:r,date:o,githubUsername:i}=e;return(0,n.jsxs)("div",{className:(0,c.A)("card",x.tweet),children:[(0,n.jsx)("div",{className:"card__header",children:(0,n.jsxs)("div",{className:"avatar",children:[(0,n.jsx)("img",{alt:a,className:"avatar__photo",src:`/img/avatars/${i}.png`,width:"48",height:"48",loading:"lazy"}),(0,n.jsxs)("div",{className:(0,c.A)("avatar__intro",x.tweetMeta),children:[(0,n.jsx)("strong",{className:"avatar__name",children:a}),(0,n.jsxs)("span",{children:["@",s]})]})]})}),(0,n.jsx)("div",{className:(0,c.A)("card__body",x.tweet),children:r}),(0,n.jsx)("div",{className:"card__footer",children:(0,n.jsx)(p.A,{className:(0,c.A)(x.tweetMeta,x.tweetDate),to:t,children:o})})]})}var f=s(4023),b=s(8509);function v(){return(0,n.jsx)("header",{className:(0,c.A)("hero hero--primary",g.heroBanner),children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)("h1",{className:"hero__title",children:"RELEASE-PLZ"}),(0,n.jsx)("img",{alt:"Release-plz Logo",src:"img/robot.jpeg",style:{maxHeight:500,maxWidth:"100%"}}),(0,n.jsxs)("p",{className:"hero__subtitle",children:["Release Rust crates from ",(0,n.jsx)("b",{children:"CI"})," with a ",(0,n.jsx)("b",{children:"Release PR"})]}),(0,n.jsx)("div",{className:g.buttons,children:(0,n.jsx)(p.A,{style:{marginRight:10},className:"button button--secondary button--lg",to:"/docs",children:"Get Started\ufe0f"})})]})})}function w(){return(0,n.jsx)("div",{className:(0,c.A)(g.section,g.sectionAlt),children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)(l.A,{as:"h2",className:(0,c.A)("margin-bottom--lg","text--center"),children:"It works locally, too \ud83d\udc69\u200d\ud83d\udcbb"}),(0,n.jsx)(b.A,{children:(0,n.jsx)(f.default,{})})]})})}function A(){const{siteConfig:e}=(0,o.A)();return(0,n.jsxs)(i.A,{title:`${e.title} Rust crate`,description:"Release Rust crates from CI with a Release PR",children:[(0,n.jsx)(v,{}),(0,n.jsx)("main",{children:(0,n.jsx)(u,{})}),(0,n.jsx)(w,{}),(0,n.jsx)(N,{})]})}function N(){const e=[[],[],[]];return r.forEach(((t,s)=>e[s%3].push(t))),(0,n.jsx)("div",{className:(0,c.A)(g.section,g.sectionAlt),children:(0,n.jsxs)("div",{className:"container",children:[(0,n.jsx)(l.A,{as:"h2",className:(0,c.A)("margin-bottom--lg","text--center"),children:"Loved by many Rustaceans \ud83e\udd80"}),(0,n.jsx)("div",{className:(0,c.A)("row",g.tweetsSection),children:e.map(((e,t)=>(0,n.jsx)("div",{className:"col col--4",children:e.map((e=>(0,a.createElement)(j,{...e,key:e.url})))},t)))})]})})}}}]);