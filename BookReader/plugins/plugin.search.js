(self.webpackChunk_internetarchive_bookreader=self.webpackChunk_internetarchive_bookreader||[]).push([[73],{8011:function(e,t,r){"use strict";r(5666),r(4916),r(4765),r(9826),r(1539),r(1249),r(5306),r(2222),r(6992),r(3948),r(9601),r(9720),r(4678),r(8674),r(8783),r(1637),r(7042),r(8309),r(1038),r(2526),r(1817),r(2165);var n=r(5685),a=r(9860),i=(r(4603),r(9714),r(4747),r(1058),r(3609));function s(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var o,c=function(){function e(t){var r=t.br,n=t.searchCancelledCallback,a=void 0===n?function(){}:n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.br=r,this.matcher=new RegExp("{{{([^]+?)}}}","g"),this.matches=[],this.cacheDOMElements(),this.bindEvents(),this.cancelSearch=a}var t,r;return t=e,(r=[{key:"cacheDOMElements",value:function(){this.dom={},this.dom.toolbarSearch=this.buildToolbarSearch()}},{key:"setQuery",value:function(e){this.br.$('[name="query"]').val(e)}},{key:"emptyMatches",value:function(){this.matches=[]}},{key:"removeResultPins",value:function(){this.br.$(".BRnavpos .BRsearch").remove()}},{key:"clearSearchFieldAndResults",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.br.removeSearchResults(),this.removeResultPins(),this.emptyMatches(),this.setQuery(""),this.teardownSearchNavigation(),e&&this.br.trigger("SearchResultsCleared")}},{key:"toggleSidebar",value:function(){this.br.trigger("ToggleSearchMenu")}},{key:"renderSearchNavigation",value:function(){var e="BRsearch-navigation";i(".BRnav").before('\n      <div class="'.concat(e,'">\n        <button class="toggle-sidebar">\n          <h4>\n            <span class="icon icon-search"></span> Results\n          </h4>\n        </button>\n        <div class="pagination">\n          <button class="prev" title="Previous result"><span class="icon icon-chevron hflip"></span></button>\n          <span data-id="resultsCount">').concat(this.resultsPosition(),'</span>\n          <button class="next" title="Next result"><span class="icon icon-chevron"></button>\n        </div>\n        <button class="clear" title="Clear search results">\n          <span class="icon icon-close"></span>\n        </button>\n      </div>\n    ')),this.dom.searchNavigation=i(".".concat(e))}},{key:"resultsPosition",value:function(){var e="".concat(this.matches.length," result").concat(1===this.matches.length?"":"s");return~this.currentMatchIndex&&(e="".concat(this.currentMatchIndex+1," / ").concat(this.matches.length)),e}},{key:"bindSearchNavigationEvents",value:function(){if(this.dom.searchNavigation){var e="searchNavigation";this.dom.searchNavigation.on("click.".concat(e),".clear",this.clearSearchFieldAndResults.bind(this)).on("click.".concat(e),".prev",this.showPrevResult.bind(this)).on("click.".concat(e),".next",this.showNextResult.bind(this)).on("click.".concat(e),".toggle-sidebar",this.toggleSidebar.bind(this)).on("click.".concat(e),!1)}}},{key:"showPrevResult",value:function(){0!==this.currentMatchIndex&&(this.br.mode===this.br.constModeThumb&&this.br.switchMode(this.br.constMode1up),~this.currentMatchIndex||(this.currentMatchIndex=this.getClosestMatchIndex((function(e,t,r){return t[0]>r}))+1),this.br.$(".BRnavline .BRsearch").eq(--this.currentMatchIndex).click(),this.updateResultsPosition(),this.updateSearchNavigationButtons())}},{key:"showNextResult",value:function(){this.currentMatchIndex+1!==this.matches.length&&(this.br.mode===this.br.constModeThumb&&this.br.switchMode(this.br.constMode1up),~this.currentMatchIndex||(this.currentMatchIndex=this.getClosestMatchIndex((function(e,t,r){return e[e.length-1]>r}))-1),this.br.$(".BRnavline .BRsearch").eq(++this.currentMatchIndex).click(),this.updateResultsPosition(),this.updateSearchNavigationButtons())}},{key:"getClosestMatchIndex",value:function(e){var t=function t(r,n){if(1===r.length)return r[0];var a=r.slice(0,r.length/2),i=r.slice(r.length/2);return t(e(a,i,n)?a:i,n)}(this.matches.map((function(e){return e.par[0].page})),this.br.currentIndex()+1);return this.matches.indexOf(this.matches.find((function(e){return e.par[0].page===t})))}},{key:"updateResultsPosition",value:function(){this.dom.searchNavigation&&this.dom.searchNavigation.find("[data-id=resultsCount]").text(this.resultsPosition())}},{key:"updateSearchNavigationButtons",value:function(){this.dom.searchNavigation&&(this.dom.searchNavigation.find(".prev").attr("disabled",!this.currentMatchIndex),this.dom.searchNavigation.find(".next").attr("disabled",this.currentMatchIndex+1===this.matches.length))}},{key:"teardownSearchNavigation",value:function(){this.dom.searchNavigation||(this.dom.searchNavigation=i(".BRsearch-navigation")),this.dom.searchNavigation.length&&(this.dom.searchNavigation.off(".searchNavigation").remove(),this.dom.searchNavigation=null,this.br.resize())}},{key:"setCurrentMatchIndex",value:function(){var e;this.br.mode!==this.br.constModeThumb?(e=this.br.mode===this.br.constMode2up?this.find2upMatchingSearchResult():this.find1upMatchingSearchResult(),this.currentMatchIndex=this.matches.indexOf(e)):this.currentMatchIndex=-1}},{key:"find1upMatchingSearchResult",value:function(){var e=this;return this.matches.find((function(t){return e.br.currentIndex()===t.par[0].page-1}))}},{key:"find2upMatchingSearchResult",value:function(){var e=this;return this.matches.find((function(t){return e.br._isIndexDisplayed(t.par[0].page-1)}))}},{key:"updateSearchNavigation",value:function(){this.matches.length&&(this.setCurrentMatchIndex(),this.updateResultsPosition(),this.updateSearchNavigationButtons())}},{key:"togglePinsFor",value:function(e){var t=e?"visible":"hidden";this.br.refs.$BRfooter.find(".BRsearch").css({visibility:t})}},{key:"buildToolbarSearch",value:function(){var e=document.createElement("span");return e.classList.add("BRtoolbarSection","BRtoolbarSectionSearch"),e.innerHTML='\n      <form class="BRbooksearch desktop">\n        <input type="search" name="query" class="BRsearchInput" value="" placeholder="Search inside"/>\n        <button type="submit" class="BRsearchSubmit">\n          <img src="/wp-content/themes/slam/dependencies/manuscript/BookReader/images/icon_search_button.svg" />\n        </button>\n      </form>\n    ',e}},{key:"renderPins",value:function(e){var t=this;e.forEach((function(e){var r=e.text,a=t.br.book.leafNumToIndex(e.par[0].page),s=t.br.constructor.util.cssPercentage(a,t.br.book.getNumLeafs()-1),o=(0,n.escapeHTML)(r).replace(t.matcher,"<b>$1</b>"),c="";r.length>100&&(c=r.replace(/^(.{100}[^\s]*).*/,"$1"),c=(0,n.escapeHTML)(c).replace(t.matcher,"<b>$1</b>")+"..."),i("<div>").addClass("BRsearch").css({left:s}).attr("title","Search result").append('\n          <div class="BRquery">\n            <div>'.concat(c||o,"</div>\n            <div>Page ").concat(e.displayPageNumber,"</div>\n          </div>\n        ")).appendTo(t.br.$(".BRnavline")).on("mouseenter",(function(e){var t=e.currentTarget,r=t.querySelector(".BRquery"),n=r.getBoundingClientRect(),a=t.getBoundingClientRect(),s=2*parseInt(getComputedStyle(r).paddingLeft);n.x-s<0&&r.style.setProperty("transform","translateX(-".concat(a.left-s,"px)")),i(".BRsearch,.BRchapter").removeClass("front"),i(e.target).addClass("front")})).on("mouseleave",(function(e){return i(e.target).removeClass("front")})).on("click",(function(){t.br._searchPluginGoToResult(e.matchIndex)}))}))}},{key:"toggleSearchPending",value:function(e){var t=this;e?this.br.showProgressPopup("Search results will appear below...",(function(){return t.progressPopupClosed()})):this.br.removeProgressPopup()}},{key:"progressPopupClosed",value:function(){this.toggleSearchPending(),this.cancelSearch()}},{key:"renderErrorModal",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t="".concat(e?"":"The text may still be processing. ","Please try again.");this.renderModalMessage("\n      Sorry, there was an error with your search.\n      <br />\n      ".concat(t,"\n    ")),this.delayModalRemovalFor(4e3)}},{key:"renderBookNotIndexedModal",value:function(){this.renderModalMessage("\n      <p>\n         This book hasn't been indexed for searching yet.\n         We've just started indexing it, so search should be available soon.\n         <br />\n         Please try again later. Thanks!\n      </p>\n    "),this.delayModalRemovalFor(5e3)}},{key:"renderResultsEmptyModal",value:function(){this.renderModalMessage("No matches were found."),this.delayModalRemovalFor(2e3)}},{key:"renderModalMessage",value:function(e){var t=document.createElement("div");t.classList.add("BRprogresspopup","search_modal"),t.innerHTML=e,document.querySelector(this.br.el).append(t)}},{key:"delayModalRemovalFor",value:function(e){setTimeout(this.br.removeProgressPopup.bind(this.br),e)}},{key:"submitHandler",value:function(e){e.preventDefault();var t=e.target.querySelector('[name="query"]').value;return!!t.length&&(this.br.search(t),this.emptyMatches(),this.toggleSearchPending(!0),!1)}},{key:"handleSearchCallback",value:function(e,t){var r=this,n=t.results,a=t.options;this.matches=n.matches,this.setCurrentMatchIndex(),this.teardownSearchNavigation(),this.renderSearchNavigation(),this.bindSearchNavigationEvents(),this.renderPins(n.matches),this.toggleSearchPending(!1),a.goToFirstResult?i(document).one("BookReader:pageChanged",(function(){r.br.resize()})):this.br.resize()}},{key:"handleNavToggledCallback",value:function(e){var t=this.br.navigationIsVisible();this.togglePinsFor(t)}},{key:"handleSearchStarted",value:function(){this.emptyMatches(),this.br.removeSearchHilites(),this.removeResultPins(),this.toggleSearchPending(!0),this.teardownSearchNavigation(),this.setQuery(this.br.searchTerm)}},{key:"handleSearchCallbackError",value:function(){var e,t,r,n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.toggleSearchPending(!1);var a=null==n||null===(e=n.detail)||void 0===e||null===(t=e.props)||void 0===t||null===(r=t.results)||void 0===r?void 0:r.indexed;this.renderErrorModal(a)}},{key:"handleSearchCallbackBookNotIndexed",value:function(){this.toggleSearchPending(!1),this.renderBookNotIndexedModal()}},{key:"handleSearchCallbackEmpty",value:function(){this.toggleSearchPending(!1),this.renderResultsEmptyModal()}},{key:"bindEvents",value:function(){var e="BookReader:";window.addEventListener("".concat(e,"SearchCallbackError"),this.handleSearchCallbackError.bind(this)),i(document).on("".concat(e,"SearchCallback"),this.handleSearchCallback.bind(this)).on("".concat(e,"navToggled"),this.handleNavToggledCallback.bind(this)).on("".concat(e,"SearchStarted"),this.handleSearchStarted.bind(this)).on("".concat(e,"SearchCallbackBookNotIndexed"),this.handleSearchCallbackBookNotIndexed.bind(this)).on("".concat(e,"SearchCallbackEmpty"),this.handleSearchCallbackEmpty.bind(this)).on("".concat(e,"pageChanged"),this.updateSearchNavigation.bind(this)),this.dom.toolbarSearch.querySelector("form").addEventListener("submit",this.submitHandler.bind(this))}}])&&s(t.prototype,r),Object.defineProperty(t,"prototype",{writable:!1}),e}(),h=r(3609),l=r(3609);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,a,i=[],s=!0,o=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(i.push(n.value),!t||i.length!==t);s=!0);}catch(e){o=!0,a=e}finally{try{s||null==r.return||r.return()}finally{if(o)throw a}}return i}}(e,t)||v(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=v(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,o=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return s=e.done,e},e:function(e){o=!0,i=e},f:function(){try{s||null==r.return||r.return()}finally{if(o)throw i}}}}function v(e,t){if(e){if("string"==typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?g(e,t):void 0}}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function f(e,t,r,n,a,i,s){try{var o=e[i](s),c=o.value}catch(e){return void r(e)}o.done?t(c):Promise.resolve(c).then(n,a)}function p(e){return function(){var t=this,r=arguments;return new Promise((function(n,a){var i=e.apply(t,r);function s(e){f(i,n,a,s,o,"next",e)}function o(e){f(i,n,a,s,o,"throw",e)}s(void 0)}))}}h.extend(BookReader.defaultOptions,{server:"ia600609.us.archive.org",bookId:"",subPrefix:"",bookPath:"",enableSearch:!0,searchInsideUrl:"/fulltext/inside.php",initialSearchTerm:null}),BookReader.prototype.setup=(o=BookReader.prototype.setup,function(e){o.call(this,e),this.searchTerm="",this.searchResults=null,this.searchInsideUrl=e.searchInsideUrl,this.enableSearch=e.enableSearch,this.bookId=e.bookId,this.server=e.server,this.subPrefix=e.subPrefix,this.bookPath=e.bookPath,this.searchXHR=null,this._cancelSearch.bind(this),this.cancelSearchRequest.bind(this),this._searchBoxesByIndex={},this.searchView=void 0}),BookReader.prototype.init=function(e){return function(){var t=this;e.call(this),this.searchView=new c({br:this,searchCancelledCallback:function(){t._cancelSearch(),t.trigger("SearchCanceled",{term:t.searchTerm,instance:t})}}),this.options.enableSearch&&this.options.initialSearchTerm&&this.search(this.options.initialSearchTerm,{goToFirstResult:this.options.goToFirstResult,suppressFragmentChange:!1})}}(BookReader.prototype.init),BookReader.prototype.buildToolbarElement=function(e){return function(){var t=e.call(this);if(this.enableSearch)return this.searchView.dom.toolbarSearch&&t.find(".BRtoolbarSectionInfo").after(this.searchView.dom.toolbarSearch),t}}(BookReader.prototype.buildToolbarElement),BookReader.prototype._createPageContainer=function(e){return function(t){var r=e.call(this,t);if(this.enableSearch&&r.page&&t in this._searchBoxesByIndex){var n=r.page.index,i=this._searchBoxesByIndex[n];(0,a.Tm)("searchHiliteLayer",i,r.page,r.$container[0],i.map((function(e){return"match-index-".concat(e.matchIndex)})))}return r}}(BookReader.prototype._createPageContainer),BookReader.prototype.search=p(regeneratorRuntime.mark((function e(){var t,r,n,a,i,s,o,c,u,d,v,g,f=this,p=arguments;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=p.length>0&&void 0!==p[0]?p[0]:"",r=p.length>1&&void 0!==p[1]?p[1]:{},n={goToFirstResult:!1,disablePopup:!1,suppressFragmentChange:!1,error:null,success:null},a=h.extend({},n,r),this.suppressFragmentChange=a.suppressFragmentChange,this.searchCancelled=!1,this.searchTerm=t.replace(/\//g," "),a.suppressFragmentChange||this.trigger(BookReader.eventNames.fragmentChange),i=this.server.replace(/:.+/,""),s="https://".concat(i).concat(this.searchInsideUrl,"?"),o=this.bookPath,c="/".concat(this.subPrefix),this.bookPath.length-this.bookPath.lastIndexOf(c)==c.length&&(o=this.bookPath.substr(0,this.bookPath.length-c.length)),u={item_id:this.bookId,doc:this.subPrefix,path:o,q:t},d=l.param(u).replace(/%2F/g,"/"),v="".concat(s).concat(d),g=function(e){if(!f.searchCancelled){var t=e.error||!e.matches.length,r="function"==typeof a.error,n="function"==typeof a.success;t?r?a.error.call(f,e,a):f.BRSearchCallbackError(e,a):n?a.success.call(f,e,a):f.BRSearchCallback(e,a)}},this.trigger("SearchStarted",{term:this.searchTerm,instance:this}),e.t0=g,e.next=21,l.ajax({url:v,dataType:"jsonp",cache:!0,beforeSend:function(e){f.searchXHR=e}});case 21:e.t1=e.sent,(0,e.t0)(e.t1);case 23:case"end":return e.stop()}}),e,this)}))),BookReader.prototype._cancelSearch=function(){var e;null===(e=this.searchXHR)||void 0===e||e.abort(),this.searchView.clearSearchFieldAndResults(!1),this.searchTerm="",this.searchXHR=null,this.searchCancelled=!0,this.searchResults=[]},BookReader.prototype.cancelSearchRequest=function(){this.searchCancelled=!0,null!==this.searchXHR&&(this._cancelSearch(),this.searchView.toggleSearchPending(),this.trigger("SearchCanceled",{term:this.searchTerm,instance:this}))},BookReader.prototype.BRSearchCallback=function(e,t){var r=this;!function(e,t){var n,a,i=d(e.matches.entries());try{for(i.s();!(n=i.n()).done;){var s=u(n.value,2),o=s[0],c=s[1];c.matchIndex=o,c.displayPageNumber=(a=c.par[0].page,r.book.getPageNum(r.book.leafNumToIndex(a)));var h,l=d(c.par);try{for(l.s();!(h=l.n()).done;){var v,g=d(h.value.boxes);try{for(g.s();!(v=g.n()).done;)v.value.matchIndex=o}catch(e){g.e(e)}finally{g.f()}}}catch(e){l.e(e)}finally{l.f()}}}catch(e){i.e(e)}finally{i.f()}}(e),this.searchResults=e||[],this.updateSearchHilites(),this.removeProgressPopup(),t.goToFirstResult&&this._searchPluginGoToResult(0),this.trigger("SearchCallback",{results:e,options:t,instance:this})},BookReader.prototype.BRSearchCallbackError=function(e){this._BRSearchCallbackError(e)},BookReader.prototype._BRSearchCallbackError=function(e){this.searchResults=e;var t={term:this.searchTerm,instance:this};if(e.error){var r=Object.assign({},t,{results:e});this.trigger("SearchCallbackError",r)}else if(0==e.matches.length){if(!1===e.indexed)return void this.trigger("SearchCallbackBookNotIndexed",t);this.trigger("SearchCallbackEmpty",t)}},BookReader.prototype.updateSearchHilites=function(){var e,t=(null===(e=this.searchResults)||void 0===e?void 0:e.matches)||[],r={};this.removeSearchHilites();var n,i=d(t);try{for(i.s();!(n=i.n()).done;){var s,o=d(n.value.par[0].boxes);try{for(o.s();!(s=o.n()).done;){var c=s.value,h=this.book.leafNumToIndex(c.page);(r[h]||(r[h]=[])).push(c)}}catch(e){o.e(e)}finally{o.f()}}}catch(e){i.e(e)}finally{i.f()}for(var l=0,v=Object.entries(r);l<v.length;l++){var g,f=u(v[l],2),p=f[0],b=f[1],m=parseFloat(p),y=this.book.getPage(m),k=d(this.getActivePageContainerElementsForIndex(m));try{for(k.s();!(g=k.n()).done;){var S=g.value;(0,a.Tm)("searchHiliteLayer",b,y,S,b.map((function(e){return"match-index-".concat(e.matchIndex)})))}}catch(e){k.e(e)}finally{k.f()}}this._searchBoxesByIndex=r},BookReader.prototype.removeSearchHilites=function(){l(this.getActivePageContainerElements()).find(".searchHiliteLayer").remove()},BookReader.prototype._searchPluginGoToResult=function(){var e=p(regeneratorRuntime.mark((function e(t){var r,a,i,s,o,c,h,u,v,g,f,p;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=null===(r=this.searchResults)||void 0===r?void 0:r.matches[t],i=this.book,s=i.leafNumToIndex(a.par[0].page),o=i.getPage(s),c=Math.abs(this.currentIndex()-s)<3,h=!1,o.isViewable){e.next=13;break}return e.next=9,fetch("/services/bookreader/request_page?"+new URLSearchParams({id:this.options.bookId,subprefix:this.options.subPrefix,leafNum:o.leafNum})).then((function(e){return e.json()}));case 9:u=e.sent,v=d(u.value);try{for(v.s();!(g=v.n()).done;)f=g.value,i.getPage(i.leafNumToIndex(f)).makeViewable()}catch(e){v.e(e)}finally{v.f()}u.value.length||(i.getPage(s).makeViewable(),h=!0);case 13:return this._isIndexDisplayed(s)||(this.suppressFragmentChange=!1,this.jumpToIndex(s)),h&&i.getPage(s).makeViewable(!1),e.next=17,(0,n.poll)((function(){return l("rect.match-index-".concat(a.matchIndex))}),{until:function(e){return e.length>0}});case 17:if(!(p=e.sent).length){e.next=24;break}return p.css("animation","none"),p[0].scrollIntoView({block:this.constMode1up==this.mode||this.isFullscreenActive?"center":"nearest",inline:"center",behavior:c?"smooth":"auto"}),e.next=23,new Promise((function(e){return setTimeout(e,100)}));case 23:p.removeAttr("style");case 24:case"end":return e.stop()}}),e,this)})));return function(t){return e.apply(this,arguments)}}(),BookReader.prototype.removeSearchResults=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.removeSearchHilites(),this.searchTerm=null,this.searchResults=null,e||this.trigger(BookReader.eventNames.fragmentChange)},BookReader.prototype.searchHighlightVisible=function(){var e=this,t=this.searchResults,r=[];if(null==t)return!1;if(this.constMode2up==this.mode)r=[this.twoPage.currentIndexL,this.twoPage.currentIndexR];else{if(this.constMode1up!=this.mode)return!1;r=[this.currentIndex()]}return t.matches.some((function(t){return t.par[0].boxes.some((function(t){var n=e.book.leafNumToIndex(t.page);if(h.inArray(n,r)>=0)return!0}))})),!1}},2814:function(e,t,r){var n=r(7854),a=r(7293),i=r(1702),s=r(1340),o=r(3111).trim,c=r(1361),h=i("".charAt),l=n.parseFloat,u=n.Symbol,d=u&&u.iterator,v=1/l(c+"-0")!=-1/0||d&&!a((function(){l(Object(d))}));e.exports=v?function(e){var t=o(s(e)),r=l(t);return 0===r&&"-"==h(t,0)?-0:r}:l},9720:function(e,t,r){var n=r(2109),a=r(4699).entries;n({target:"Object",stat:!0},{entries:function(e){return a(e)}})},4678:function(e,t,r){var n=r(2109),a=r(2814);n({global:!0,forced:parseFloat!=a},{parseFloat:a})}},function(e){e(e.s=8011)}]);
//# sourceMappingURL=plugin.search.js.map