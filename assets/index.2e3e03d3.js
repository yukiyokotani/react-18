import{j as d,r as i,R as m,a as S}from"./vendor.447fac28.js";const w=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const a of n.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function s(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerpolicy&&(n.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?n.credentials="include":t.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function l(t){if(t.ep)return;t.ep=!0;const n=s(t);fetch(t.href,n)}};w();const e=d.exports.jsx,c=d.exports.jsxs,b=d.exports.Fragment,g=()=>e("div",{children:e("p",{children:e("a",{href:"https://github.com/yukiyokotani/react-18",children:"Source Code (GitHub)"})})});let u=!0;function k(o){if(i.exports.useEffect(()=>()=>{u=!0},[]),u===!0)throw new Promise(r=>{setTimeout(()=>{u=!1,r()},o)});return new Date().toLocaleTimeString()}const y=()=>{const o=k(3e3);return e("div",{children:c("p",{children:["Awaked at ",o," \u{1F929}"]})})},C=()=>{const[o,r]=i.exports.useState(!1),[s,l]=i.exports.useState(null);return c(b,{children:[e("h2",{children:"Suspense"}),e("p",{children:"Fall asleep in an instant and take three seconds to wake up. \u{1F6CC}"}),e("p",{children:s?`Wake up at ${s==null?void 0:s.toLocaleTimeString()} \u{1F92C}`:"Now sleeping...\u{1F634}"}),e(i.exports.Suspense,{fallback:e("p",{children:"Awaking...\u{1F971}"}),children:o?e(y,{}):null}),c("div",{className:"button-container",children:[e("button",{type:"button",disabled:o,onClick:()=>{l(new Date),r(!0)},children:"Wake Up"}),e("button",{type:"button",disabled:!o,onClick:()=>{l(null),r(!1)},children:"Put to Sleep"})]})]})};function p(o){const r=performance.now();for(;performance.now()-r<o;);}const x=({isShown:o})=>e("div",{children:e("p",{children:o?`SlowRenderComponent has been rendered at ${new Date().toLocaleTimeString()}`:"Not rendered yet."})}),R=()=>{const[o,r]=i.exports.useState(!1),[s,l]=i.exports.useTransition(),[t,n]=i.exports.useState(null),a=i.exports.useCallback(()=>{n(new Date),l(()=>{r(()=>(p(3e3),!0))})},[n,l,r]),h=i.exports.useCallback(()=>{n(new Date),r(()=>(p(3e3),!0))},[n,r]),f=()=>{n(null),r(!1)};return c("div",{children:[e("h2",{children:"Transition"}),e("p",{children:"Comparison of slow rendering with and without transition"}),e("p",{children:"After pressing Render, it takes 3 seconds to render."}),s?e("div",{children:e("p",{children:"Rendering..."})}):e(x,{isShown:o}),c("div",{className:"button-container",children:[e("button",{type:"button",disabled:t!==null,onClick:a,children:"Render w/ Transition"}),e("button",{disabled:t!==null,type:"button",onClick:h,children:"Render w/o Transition"}),e("span",{children:t?e("span",{children:`Clicked at ${t==null?void 0:t.toLocaleTimeString()}`}):null})]}),e("div",{children:e("button",{type:"button",disabled:t===null,onClick:f,children:"Reset"})})]})},v=()=>c("div",{children:[e("h1",{children:"React 18 Demo App"}),e(C,{}),e(R,{}),e(g,{})]}),T=document.getElementById("root"),D=m.createRoot(T);D.render(e(S.StrictMode,{children:e(v,{})}));
