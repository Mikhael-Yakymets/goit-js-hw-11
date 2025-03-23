import{a as c,S as f,i as n}from"./assets/vendor-DMjJPMAs.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function r(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}})();const m="49361857-acd351382a63090e65700df5d",h="https://pixabay.com/api/";c.defaults.baseURL=h;async function y(s){const a={q:s,image_type:"photo",orientation:"horizontal",safesearch:!0},{data:{total:i,totalHits:r,hits:t}}=await c(`?key=${m}`,{params:{...a}});return{hits:t,totalHits:r}}const l=document.querySelector(".js-gallary"),u=document.querySelector(".loader");let g=new f(".js-gallary a",{captionsData:"alt",captionDelay:250});function b(s=[]){l.innerHTML="";const a=s.map(({webformatURL:i,largeImageURL:r,tags:t,likes:e,views:o,comments:d,downloads:p})=>`<li class="gallery-item">
            <a
              href="${r}"
            >
              <img
                src="${i}"
                alt="${t}"
              />
            </a>
            <div class="gallery-item-attributes">
              <div class="attribute">
                <p class="attribute-title">Likes</p>
                <p class="attribute-value">${e}</p>
              </div>
              <div class="attribute">
                <p class="attribute-title">Views</p>
                <p class="attribute-value">${o}</p>
              </div>
              <div class="attribute">
                <p class="attribute-title">Comments</p>
                <p class="attribute-value">${d}</p>
              </div>
              <div class="attribute">
                <p class="attribute-title">Downloads</p>
                <p class="attribute-value">${p}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>`).join("");l.insertAdjacentHTML("beforeend",a),g.refresh()}function v(){u.classList.remove("hidden")}function L(){u.classList.add("hidden")}const S={form:document.querySelector(".js-search-form")},{form:$}=S;$.addEventListener("submit",w);async function w(s){s.preventDefault();const a=s.currentTarget,{searchText:i}=a.elements;v();try{const{hits:r,totalHits:t}=await y(i.value);if(!r||r.length===0){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topCenter"});return}b(r)}catch(r){n.error({title:"Error",message:`Error fetching images: ${r}`,position:"topCenter"})}finally{L()}i.value=""}
//# sourceMappingURL=index.js.map
