(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();function c(){const n=document.getElementById("signature");document.body.style.overflow="hidden",n.addEventListener("animationend",function(){setTimeout(function(){document.querySelector(".loader").classList.add("loader--hidden")},500),document.body.style.overflow=""})}function l(n){var r=1;const i=document.querySelectorAll(".animate");i.forEach(e=>e.classList.add("hidden"));const o=new IntersectionObserver(e=>{e.forEach(t=>{var s=t.boundingClientRect.top;t.isIntersecting?s>0&&r>0?(t.target.classList.replace("hidden","show"),t.target.classList.contains("float-anim")&&d(t.target,n)):t.target.classList.replace("hidden","show"):s>0&&t.target.classList.replace("show","hidden"),r=s})},{threshold:.5});i.forEach(e=>o.observe(e))}function d(n,r){let i=document.createDocumentFragment(),o=n.innerText;for(let e=0;e<o.length;e++){let t=document.createElement("span");t.className="char",t.innerHTML=o[e]===" "?"&nbsp;":o[e],t.style.animationDelay=`${r*e}ms`,i.appendChild(t)}n.innerHTML="",n.appendChild(i)}function u(){const n=document.getElementById("preloader"),r=(o,e)=>{o.forEach(t=>{t.attributeName==="class"&&setTimeout(function(){var s=document.querySelector(".hero__intro");s.textContent.length,s.classList.remove("hidden"),s.classList.add("anim-typewriter")},750)})};new MutationObserver(r).observe(n,{attributes:!0})}const m=768,f=()=>{const n=document.querySelector(".mobile-nav"),r=document.querySelectorAll(".mobile-nav__link"),i=document.querySelector(".hamburger");let o=!1;function e(){window.screen.width>m&&(i.classList.remove("is-active"),n.classList.add("inactive"),n.classList.remove("active"),o=!1,n.style.display="none",document.body.style.overflow="auto")}function t(){i.classList.toggle("is-active"),o?(n.classList.add("inactive"),n.classList.remove("active"),n.addEventListener("animationend",s),i.removeEventListener("click",t)):(n.style.display="flex",n.classList.remove("inactive"),n.classList.add("active"),document.body.style.overflow="hidden"),o=!o}function s(){i.addEventListener("click",t),n.style.display="none",document.body.style.overflow="auto",n.removeEventListener("animationend",s)}window.addEventListener("resize",e),i.addEventListener("click",t),e(),r.forEach(a=>{a.addEventListener("click",()=>{o=!1,i.classList.remove("is-active"),n.classList.add("inactive"),n.classList.remove("active"),n.addEventListener("animationend",s)})})};function v(){document.getElementById("greet").addEventListener("animationend",function(){setTimeout(function(){document.querySelector(".scroll").classList.replace("hidden","show")},750),document.body.style.overflow=""})}f();u();c();l(5);v();
