(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"/2d1":function(e,t,n){},QfWi:function(e,t,n){"use strict";n.r(t);n("8cZI"),n("lmye"),n("JBxO"),n("FdtR"),n("/2d1");var l=n("j0rg"),a=n.n(l),s=n("dIfx"),i=(n("UOjr"),n("/I5d")),o=n.n(i),r={input:document.getElementById("input"),resultSection:document.getElementById("result-of-search"),searchForm:document.getElementById("search-form"),searchButton:document.getElementById("search-btn"),galleryParent:document.getElementById("gallery"),lightbox:document.querySelector(".lightbox"),lightboxImage:document.querySelector(".lightbox__image"),lightboxOverlay:document.querySelector(".lightbox__content"),toTopButton:document.getElementById("to-top-btn"),spinner:document.querySelector(".spinner-modal"),lastPageinfo:document.querySelector(".last-page-info")},c={proxyUrl:"https://cors-anywhere.herokuapp.com/",searchValue:"",baseUrl:"https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=",API_KEY:"12685146-fdd2799488131e47273c0b199",numberOfPage:1,perPage:30},u=function(e,t){r.spinner.classList.add("multi-spinner-visible"),r.lastPageinfo.classList.remove("last-page-info--visible");var n=""+e;return fetch(c.proxyUrl+c.baseUrl+n+"&page="+t+"&per_page="+c.perPage+"&key="+c.API_KEY).then((function(e){if(e.status&&r.spinner.classList.remove("multi-spinner-visible"),200==e.status)return e.json()}))};function d(e){console.log(e.hits),function(e,t){t.insertAdjacentHTML("beforeend",e)}(e.hits.map((function(e){return a()(e)})).join(""),r.galleryParent)}var m={openLightbox:function(e){var t=e.target.dataset.source;e.target!==r.galleryParent&&(r.lightbox.classList.add("is-open"),r.lightboxImage.setAttribute("src",t),window.addEventListener("keydown",m.handleKeyPress))},closeLightbox:function(){r.lightbox.classList.remove("is-open"),r.lightboxImage.setAttribute("src"," "),window.removeEventListener("keydown",m.handleKeyPress)},handleOverlayClick:function(e){e.target===e.currentTarget&&m.closeLightbox()},handleKeyPress:function(e){"Escape"===e.code&&m.closeLightbox()}};new o.a(r.galleryParent,{path:function(){return c.proxyUrl+c.baseUrl+"&per_page=18&key="+c.API_KEY+"&q="+c.searchValue+"&page="+this.pageIndex},history:!1,responseType:"text",scrollThreshold:1200}).on("load",(function(e){var t=JSON.parse(e),n=r.lastPageinfo.classList.contains("last-page-info--visible");t.hits.length<1&&!n&&r.lastPageinfo.classList.add("last-page-info--visible"),d(t)})),window.addEventListener("scroll",(function(){window.pageYOffset<document.documentElement.clientHeight?r.toTopButton.classList.remove("btn-up-visible"):r.toTopButton.classList.add("btn-up-visible")})),r.toTopButton.addEventListener("click",(function(){window.scrollTo({top:100,left:100,behavior:"smooth"})})),r.searchButton.addEventListener("click",(function(e){e.preventDefault();var t=r.input.value;t!==c.searchValue?(r.galleryParent.innerHTML="",u(t,c.numberOfPage).then((function(e){var t=e.hits.length;t<c.perPage&&r.lastPageinfo.classList.add("last-page-info--visible"),t<1?s.a.alert({text:"Ничего не найдено по Вашему запросу.",delay:1e3}):d(e)}))):""===t&&s.a.info({text:"Укажите, что нужно найти пожалуйста.",delay:1e3}),c.searchValue=t})),r.galleryParent.addEventListener("click",m.openLightbox),r.lightboxOverlay.addEventListener("click",m.handleOverlayClick),r.spinner.addEventListener("click",(function(){r.spinner.classList.remove("multi-spinner-visible")}))},j0rg:function(e,t,n){var l=n("mp5j");e.exports=(l.default||l).template({compiler:[8,">= 4.3.0"],main:function(e,t,n,l,a){var s,i=null!=t?t:e.nullContext||{},o=e.hooks.helperMissing,r="function",c=e.escapeExpression;return'<li>\r\n    <div class="result-container">\r\n        <img src='+c(typeof(s=null!=(s=n.webformatURL||(null!=t?t.webformatURL:t))?s:o)===r?s.call(i,{name:"webformatURL",hash:{},data:a,loc:{start:{line:3,column:17},end:{line:3,column:33}}}):s)+' class="result-image" alt="" data-source='+c(typeof(s=null!=(s=n.largeImageURL||(null!=t?t.largeImageURL:t))?s:o)===r?s.call(i,{name:"largeImageURL",hash:{},data:a,loc:{start:{line:3,column:74},end:{line:3,column:91}}}):s)+' />\r\n\r\n        <div class="stats">\r\n            <p class="stats-item">\r\n                <i class="material-icons">thumb_up</i>\r\n                '+c(typeof(s=null!=(s=n.likes||(null!=t?t.likes:t))?s:o)===r?s.call(i,{name:"likes",hash:{},data:a,loc:{start:{line:8,column:16},end:{line:8,column:25}}}):s)+'\r\n            </p>\r\n            <p class="stats-item">\r\n                <i class="material-icons">visibility</i>\r\n                '+c(typeof(s=null!=(s=n.views||(null!=t?t.views:t))?s:o)===r?s.call(i,{name:"views",hash:{},data:a,loc:{start:{line:12,column:16},end:{line:12,column:25}}}):s)+'\r\n            </p>\r\n            <p class="stats-item">\r\n                <i class="material-icons">comment</i>\r\n                '+c(typeof(s=null!=(s=n.comments||(null!=t?t.comments:t))?s:o)===r?s.call(i,{name:"comments",hash:{},data:a,loc:{start:{line:16,column:16},end:{line:16,column:28}}}):s)+'\r\n            </p>\r\n            <p class="stats-item">\r\n                <i class="material-icons">cloud_download</i>\r\n                '+c(typeof(s=null!=(s=n.downloads||(null!=t?t.downloads:t))?s:o)===r?s.call(i,{name:"downloads",hash:{},data:a,loc:{start:{line:20,column:16},end:{line:20,column:29}}}):s)+"\r\n            </p>\r\n        </div>\r\n    </div>\r\n</li>"},useData:!0})}},[["QfWi",1,2]]]);
//# sourceMappingURL=main.5502273fe3370854d0b5.js.map