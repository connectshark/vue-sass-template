import{r as e,c as t,a as r,t as o,b as n,F as s,o as i,d as l,e as a,f as c,g as d}from"./vendor.31d5586f.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const u={setup:()=>({title:"Hello"})},m={class:"text-4xl"};u.render=function(l,a,c,d,u,f){const p=e("router-view");return i(),t(s,null,[r("h1",m,o(d.title),1),n(p)],64)};const f=l({state:{},mutations:{},actions:{}}),p={},h=c({history:a(),routes:[{path:"/",name:"home",component:()=>{return e=()=>import("./home.7d328f1e.js"),(t=["assets/home.7d328f1e.js","assets/vendor.31d5586f.js"])&&0!==t.length?Promise.all(t.map((e=>{if((e=`/vite-template/${e}`)in p)return;p[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":"modulepreload",t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((e,t)=>{o.addEventListener("load",e),o.addEventListener("error",t)})):void 0}))).then((()=>e())):e();var e,t}}]});d(u).use(h).use(f).mount("#app");
