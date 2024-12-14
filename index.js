import{i as m,S as d}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function l(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=l(e);fetch(e.href,t)}})();const f="47639623-264b1095d84da06504953512f";async function h(s){const l=`https://pixabay.com/api/?${new URLSearchParams({key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}).toString()}`;try{const r=await fetch(l);if(!r.ok)throw new Error(`HTTP error! status: ${r.status}`);const e=await r.json();if(!e.hits||e.hits.length===0)throw m.error({title:"Error",message:"No images found for the query.",position:"topRight"}),new Error("No images found for the query.");return e}catch(r){throw console.error("Error fetching images:",r.message),r}}let c;function g(s){const o=s.map(({tags:l,webformatURL:r,largeImageURL:e,likes:t,views:a,comments:i,downloads:n})=>`
      <li class="gallery-card">
        <a class="gallery-link" href="${e}">
            <img class="gallery-img" src="${r}" alt="${l}" />
            <div class="values-container">
                <ul class="labels">
                    <li>Likes</li>
                    <li>${t}</li>
                </ul>
                <ul class="labels">
                    <li>Views</li>
                    <li>${a}</li>
                </ul>
                <ul class="labels">
                    <li>Comments</li>
                    <li>${i}</li>
                </ul>
                <ul class="labels">
                    <li>Downloads</li>
                    <li>${n}</li>
                </ul>
            </div>
        </a>
      </li>`).join("");y(o)}function y(s){const o=document.querySelector("ul.images-div");o.innerHTML=s,c?c.refresh():c=new d(".images-div a",{captionsData:"alt",captionDelay:250})}const p=document.querySelector("button[type=submit]"),w=document.querySelector(".images-div"),u=document.querySelector(".loaderClass");p.addEventListener("click",L);function L(s){s.preventDefault();let o=document.querySelector('input[name="search"]'),l=document.querySelector(".not-found-img"),r=o.value.trim();if(r<=0){m.show({title:"❌",message:"Sorry, there are no images matching your search query. Please try again!",color:"ef4040"});return}u.style.display="flex",h(r).then(e=>{if(e.total===0){w.innerHTML="",l.innerHTML=`Results for query <span>${r}</span> not found!`,m.show({title:"❌",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#ef4040",messageColor:"white"});return}l.innerHTML="",g(e.hits);const t=document.querySelectorAll(".gallery-img"),a=Array.from(t).map(i=>new Promise(n=>{i.onload=n,i.onerror=n}));Promise.all(a).then(()=>{console.log(a)}).catch(i=>{u.innerHTML="",console.error(i)})}).catch(console.error).finally(()=>{u.style.display="none"}),o.value=""}
//# sourceMappingURL=index.js.map
