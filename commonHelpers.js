import{S as n,i}from"./assets/vendor-8c59ed88.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&e(a)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();const c=new n(".gallery a");function u(){const l=document.querySelector(".gallery");l.innerHTML=""}function m(l){const s=document.querySelector(".gallery"),o=l.map(e=>`
        <li class="item">
            <a href="${e.largeImageURL}">
                <img src="${e.webformatURL}" alt="${e.tags}" class="image"/>
            </a>
            <ul class="stats-list">
                <li class="stats-list-item">
            <h3>Likes</h3>
            <p>${e.likes}</p>
                </li>
                <li class="stats-list-item">
            <h3>Views</h3>
            <p>${e.views}</p>
                </li>
                <li class="stats-list-item">
            <h3>Comments</h3>
            <p>${e.comments}</p>
                </li>
                <li class="stats-list-item">
            <h3>Downloads</h3>
            <p>${e.downloads}</p>
                </li>
            </ul>    
        </li>
        `).join("");s.innerHTML=o,c.refresh()}function f(){document.querySelector(".loader").style.display="block"}function h(){document.querySelector(".loader").style.display="none"}const d="43277181-ebb9172f58fa43bc64ca23581";function y(l){const o=`https://pixabay.com/api/?${new URLSearchParams({key:d,q:l,image_type:"photo",orientation:"horizontal",safesearch:!0})}`;return fetch(o).then(e=>{if(!e.ok)throw new Error("Failed to fetch images");return e.json()}).then(e=>e.hits).catch(e=>{throw new Error("Failed to fetch images")})}const p=document.querySelector(".search-form"),g=document.querySelector(".search-input");p.addEventListener("submit",L);function L(l){l.preventDefault();const s=g.value.trim();if(!s){i.error({title:"Error",message:"Please enter a search query"});return}f(),u(),y(s).then(o=>{o.length===0?i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}):m(o)}).catch(o=>{i.error({title:"Error",message:"Failed to fetch images. Please try again later!"})}).finally(()=>{h()})}
//# sourceMappingURL=commonHelpers.js.map
