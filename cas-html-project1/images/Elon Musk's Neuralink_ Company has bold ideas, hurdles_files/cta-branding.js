!function(){try{var t="1.0.50",e="cta-branding",a=31,r=104,n=10,o=22,i={},s=0,l=Math.random()<.05,d=null,f=document.createElement("canvas");if("cta-test"===e){var u={};try{for(var c=window.location.href.split("?")[1].split("&"),m=0;m<c.length;m++){var v=c[m],b=v.split("=")[0],_=v.split("=")[1];u[b]=_}}catch(t){console.error("*** had issues while reading url parameters")}}function g(t){return t.offsetHeight+h(t,"margin-top",0)+h(t,"margin-bottom",0)}function p(t){var e=0;if(["border-bottom-width","border-top-width","padding-bottom","padding-top"].forEach(function(a){e+=h(t,a)||0}),t.hasChildNodes())for(var a=t.childNodes,r=0;r<a.length;r++){var n=a[r];if(!n.classList.contains("video-cta-href")){var o=g(n);e+=o}}return e}function h(t,e,a){var r=window.getComputedStyle(t);if(!r[e])return a||null;var n=parseInt(r[e]);return isNaN(n)?r[e]:n}i.globalConfig={},i.hooks={"item-renderer":function(a,r,o){if(!d){var f,c=a.rbox;c.formatsData=c.formatsData||{},a.formatsData=a.formatsData||{},a.formatsData.sendAbTestEvent=function(a,r,n){"cta-test"===e&&console.log("cta-test",a,r,n);if(!l)return;var o={itemId:this.formatsData.itemId,rating:this.formatsData.rating,price:this.formatsData.price,text:this.formatsData.actionText,type:null!=r?r:"event",description:n,module:e,version:t,event:a,cardIndexOnPage:this.formatsData.cardIndex,index:this.formatsData.index,placement:this.formatsData.placement};window.TRCImpl.sendAbTestEvent("CTA",JSON.stringify(o)),window.TRCImpl.sendAbTestEvent(e,a)}.bind(a),a.formatsData.cardIndex=s++,a.formatsData.index=r.itemIndex,a.formatsData.placement=c.placement,a.formatsData.itemId=(r["item-id"]||r.id||"").slice(0,40);try{var m=r["cta-text"],v=r.fpr||r["cta-price"],b=r["stars-rating"];if(null==d){var _=w("disable-cta-on-custom-module",o);a.formatsData.sendAbTestEvent(_?"disable_custom":"enable_custom");var g=window.TRCImpl&&window.TRCImpl.global&&window.TRCImpl.global["disable-cta-on-custom-module"];if(a.formatsData.sendAbTestEvent(g?"disable_global":"enable_global"),g||_)return void(d=!0);d=!1}if("cta-test"===e){var D=Math.random(),x="true"===u["cta-rating"],T="true"===u["cta-always"];if("false"===u["cta-always"])return;var A=2+(x?1:0);x&&D>2/A||v||b?(m=m||"Download Today Today",b=parseFloat(b)||5*Math.random(),v=v||"4$"):(D>1/A||T)&&(m=decodeURIComponent(u["cta-text"])||m||"Learn More")}if(!m)return;if(a.formatsData.sendAbTestEvent("has_cta_text"),!function(t,e,a){if(!e.isSyndicated||e["is-in-network"])return t.formatsData.sendAbTestEvent("filtered_non_sc"),!1;if(a.options&&a.options.trcResponse&&a.options.trcResponse.nup)return t.formatsData.sendAbTestEvent("filtered_next_up"),!1;var r=!window.TRCImpl||!window.TRCImpl.global||function(t,e){if(null==t)return e;return t}(window.TRCImpl.global["enable-cta-with-description"],!0);if(e.description&&!r)return t.formatsData.sendAbTestEvent("filterd_item_with_description"),!1;var o=t.detail_order;if(o&&o.length&&"branding"===o[0])return t.formatsData.sendAbTestEvent("filterd_item_branding_before_title"),!1;if(!t.link)return t.formatsData.sendAbTestEvent("filtered_no_title"),!1;var i=t.querySelector(".video-label-box");if(!i)return t.formatsData.sendAbTestEvent("filtered_no_video_label_box"),!1;var s=i.querySelector(".branding");if(!s)return t.formatsData.sendAbTestEvent("filtered_no_branding"),!1;var l=h(s,"position");if(l&&"absolute"===l)return t.formatsData.sendAbTestEvent("filtered_branding_absolute_position_item_renderer"),!1;var d=s.querySelector(".branding-inner");if(d){var f=h(d,"position");if(f&&"absolute"===f)return t.formatsData.sendAbTestEvent("filtered_branding_inner_absolute_position"),!1}var u=s.querySelector("div.logoDiv");if(u){var c=h(u,"position");if(c&&"absolute"===c)return t.formatsData.sendAbTestEvent("filtered_branding_logo_div_inner_absolute_position"),!1}var m=t.getBoundingClientRect().width;if(m>0&&m<170)return t.formatsData.sendAbTestEvent("filtered_below_min_width"),!1;if(t.rbox.mode_name&&t.rbox.mode_name.indexOf("hero")>-1)return t.formatsData.sendAbTestEvent("filtered_item_in_hero_widget"),!1;if(t.rbox.container.querySelector(".story-widget"))return t.formatsData.sendAbTestEvent("filterd_item_in_reco_reel_story_widget"),!1;if(t.classList.contains("tbl-next-up-widget-item"))return t.formatsData.sendAbTestEvent("filterd_item_next_up"),!1;if(t.querySelector(".added-icon-svg"))return t.formatsData.sendAbTestEvent("filterd_item_branding_has_icon"),!1;var v=h(i,"height");if(v){var b=p(i);if(v+n<b)return t.formatsData.sendAbTestEvent("filtered_videoLabelBox_smaller_than_children"),!1}return!0}(a,r,o))return;if(a.formatsData.style={borderColor:w("border-color",o,!0),color:w("title-color",o,!0),fontSize:w("cta-font-size",o,!0)},a.formatsData.isInheritTitleColor=w("inherit-title-color",o,!0),a.formatsData.shouldRenderAsCTA=!0,a.formatsData.actionText=m.slice(0,15),a.formatsData.price=v,b&&(a.formatsData.rating=(f=b,Math.round(2*f)/2)),a.formatsData.isAppInstall=function(t){if(!t.formatsData.rating&&!t.formatsData.price)return!1;return!0}(a),a.formatsData.isAppInstall?a.formatsData.sendAbTestEvent("cta_app_render_candidate"):a.formatsData.sendAbTestEvent("cta_render_candidate"),c.formatsData.isInit)return;c.formatsData.isInit=!0,c.formatsData.hasCTAItem=!0,c.formatsData.isStream=function(t){return"autowidget-template-stream"===t.trc.getProperty(t.mode_name,"widget-creator-layout",t.propertiesOverride)}(c),c.formatsData.shouldAdjustAllItemsHeight=!c.formatsData.isStream&&!function(t){var e=t.getEffectiveResponsiveRule();if(e&&1===e.cells)return!0;return!1}(c)}catch(t){throw a.formatsData.sendAbTestEvent(t.message,"error",t.stack.split("\n",2)[1].trim()),t}}function w(t,e,a){var r=e&&e.globalTrcResponseJSON&&e.globalTrcResponseJSON.dcga&&e.globalTrcResponseJSON.dcga.pubConfigOverride,n=r&&r[t];return n&&a&&(i.globalConfig[t]=n),n||i.globalConfig[t]}},"list-suffix":function(t,e){if(!d){var i=e.boxes,s=!1,l=0;i.forEach(function(t){try{var a=t.rbox.formatsData;if(!a||!a.hasCTAItem)return;if(!t.formatsData.shouldRenderAsCTA&&!a.shouldAdjustAllItemsHeight)return;var o=t.querySelector(".video-label-box");if(!o)return void t.formatsData.sendAbTestEvent("filtered_no_videoLabelBox_list_suffix");if(t.rbox.container.querySelector(".story-widget"))return void t.formatsData.sendAbTestEvent("filterd_item_in_reco_reel_story_widget_list_suffix");var i=o.querySelector(".branding");if(i&&t.formatsData.shouldRenderAsCTA&&t.formatsData.isAppInstall&&function(t,e,a){t.formatsData.sendAbTestEvent("renderedAppInstall");var r=function(t){var e=document.createElement("span");if(e.classList.add("video-branding-flex-cta-rating"),t.formatsData.price){var a=document.createElement("span");a.innerText=t.formatsData.price,a.classList.add("video-branding-flex-cta-price-wrapper"),e.appendChild(a)}if(t.formatsData.price&&t.formatsData.rating){var r=document.createElement("span");r.classList.add("video-branding-flex-cta-oval-wrapper");var n='<svg class="cta-rating-oval"  width="3px" height="3px" viewBox="0 0 3 3" version="1.1" xmlns="http://www.w3.org/2000/svg">    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">        <g transform="translate(-172.000000, -485.000000)" fill="#666666" fill-rule="nonzero">            <circle cx="173.5" cy="486.5" r="1.5"></circle>        </g>    </g></svg>';r.insertAdjacentHTML("beforeend",n),e.appendChild(r)}if(t.formatsData.rating){for(var o=t.formatsData.cardIndex,i=document.createElement("span"),s=0;s<5;s++){var l=Math.min(Math.max(t.formatsData.rating-s,0),1),d=m(o,s,l);i.insertAdjacentHTML("beforeend",d)}i.classList.add("video-branding-flex-cta-stars-wrapper"),e.appendChild(i)}return e}(t);e.insertBefore(r,a)}(t,o,i),a.shouldAdjustAllItemsHeight&&(l=Math.max(l,v(t,o,i))),!i)return void t.formatsData.sendAbTestEvent("filtered_no_branding_list_suffix");var d=h(o,"height"),f=h(o,"max-height");if(l>f)return void t.formatsData.sendAbTestEvent("filtered_videoLabelBox_smaller_than_max_height_list_suffix");if(d){var g=p(o);if(d+n<g)return void t.formatsData.sendAbTestEvent("filtered_videoLabelBox_smaller_than_children_list_suffix")}if(t.formatsData.shouldRenderAsCTA){var D=h(i,"position");if(D&&"absolute"===D)return void t.formatsData.sendAbTestEvent("filtered_branding_absolute_position_list_suffix");var x=i.querySelector("div.logoDiv");if(x){var T=h(x,"position");if(T&&"absolute"===T)return void t.formatsData.sendAbTestEvent("filtered_branding_logo_div_inner_absolute_position_list_suffix")}var A=function(t,e){return h(function(t,e){if(t.rbox.formatsData.isStream)return e.querySelector(".video-label")||e;return e}(t,e),"width")-r}(t,o)||0;if(function(t,e){var a=h(t,"font-weight"),r=e.formatsData.style.fontSize||h(t,"font-size"),n=h(t,"font-family"),o=u(t,":before",e),i=u(t,":after",e),s=c(e,e.video_data["branding-text"],a,r,n)||0;return o+s+i}(i,t)>=A)return void t.formatsData.sendAbTestEvent("filtered_large_branding_width_list_suffix");if((function(t){var e=t.querySelector(".branding-inner"),a=t.querySelector(".branding-separator"),r=t.querySelector(".logoDiv"),n=e&&TRC.dom.getOuterWidth(e)||0,o=a&&TRC.dom.getOuterWidth(a)||0,i=r&&TRC.dom.getOuterWidth(r)||0;return n+o+i}(i)||0)>=A)return void t.formatsData.sendAbTestEvent("filtered_large_branding_parts_width_list_suffix");s=!0,function(t,e,a){t.formatsData.sendAbTestEvent("rendered");var r=function(t,e){var a=document.createElement("a"),r=function(t,e){var a=document.createElement("Button");return a.type="button",a.classList.add("video-cta-button","video-cta-style"),a.innerText=t.formatsData.actionText,_(e,a,"color"),_(e,a,"font-family"),a}(t,e);return a.classList.add("video-cta-href"),a.target="_blank",a.href=function(t){var e,a=t.link,r=t.rbox;if(r.shiftRedirOnclick)e=a.logger_url;else{var n=r.attachHeatMapDataToLink(a.logger_url,null);e=n}return e+="&cta=true"}(t),a.ctaButton=r,function(t,e){if(Object.keys(t.formatsData.style).forEach(function(a){t.formatsData.style[a]&&(e.style[a]=t.formatsData.style[a])}),t.formatsData.isInheritTitleColor){var a=t.querySelector(".video-title"),r=h(a,"color");r.indexOf("rgb(0, 0, 0)")<0&&(_(a,e,"color"),window.TRCImpl.sendAbTestEvent("CTA_Title_Not_Black",t.formatsData.itemId))}}(t,r),a.appendChild(r),a}(t,a);(function(t,e,a,r){var n=function(t){var e=b(t);return!e||!t.link||t.link===e}(e)?e.link:b(e);n&&n.classList.add("video-cta-style"),!e.rbox.isFeedCard&&n&&n.classList.add("non-feed-cta-item"),a&&a.classList.add("video-label-box-cta"),a&&!TRC.Browser.ie&&a.classList.add("video-label-box-cta-non-ie");var o=a.querySelectorAll(".video-label");if(o)for(var i=0;i<o.length;i++){var s=o[i];s.classList.add("video-label-flex-cta-item")}r&&function(t,e,a){if(e.classList.add("video-branding-flex-cta-item"),t.rbox.formatsData.isStream){var r=h(e,"margin-top");r?a.style.marginTop=r+1+"px":e.classList.add("video-branding-flex-cta-item-no-stream")}else e.classList.add("video-branding-flex-cta-item-no-stream");e.style.order=1}(e,r,t),a.appendChild(t)})(r,t,e,a),function(t,e){e.onclick=function(){t.formatsData.sendAbTestEvent("cta_button_clicked")}}(t,r.ctaButton)}(t,o,i),o.classList.contains("video-label-box-cta")&&function(t,e){if(t.fixResponsiveBoxTitleAndDesc(e),window.TRC.dom.on(window,"resize",function(){t.fixResponsiveBoxTitleAndDesc(e)}),e.video_data){var a=t.getDetailSpansFromLabelsBoxes("branding",e);a.length&&setTimeout(function(){for(var r=0;r<a.length;r++)t.fixBoxOverflow(a[r],e.video_data["branding-text"],!0,!0)},0)}}(e,t)}}catch(e){throw t.formatsData.sendAbTestEvent(e.message,"error",e.stack.split("\n",2)[1].trim()),e}}),s&&i.forEach(function(t){!function(t,e){var a=t.querySelector(".video-label-box");if(t.rbox.formatsData.shouldAdjustAllItemsHeight){if(e<=0)return;return void(a.style.height=e+"px")}var r=a.querySelector(".branding"),n=v(t,a,r);if(n<=0)return;a.style.height=n+"px";var o=h(a,"max-height",0);o>0&&o<n&&(a.style.maxHeight=n+"px")}(t,l)})}function u(t,e,a){var r=0,n=window.getComputedStyle(t,e,a);return n&&"none"!==n.content&&(a.formatsData.sendAbTestEvent("has_pseudo_el"),r=function(t,e){var a=parseInt(t.width),r=t.content;isNaN(a)&&r.length>0&&(a=c(e,r,t.fontWeight,t.fontSize,t.fontFamily),e.formatsData.sendAbTestEvent("has_text_pseudo_el"));return a}(n,a)),r}function c(t,e,a,r,n){try{if(null==e||""===e)return null;if(null==r&&(null==n||""===n))return null;if(null==f)return t.formatsData.sendAbTestEvent("measureText_no_canvas"),null;var o=f.getContext("2d");if(null==o)return t.formatsData.sendAbTestEvent("measureText_no_canvas_context"),null;var i=[];if(null!=a&&i.push(a.toString()),null!=r&&i.push(parseInt(r)+"px"),null!=n&&i.push(n),0===i.length)return t.formatsData.sendAbTestEvent("measureText_no_font_parts"),null;var s=i.join(" ");if(null==s||""===s)return t.formatsData.sendAbTestEvent("measureText_empty_font_value"),null;o.font=s;var l=o.measureText(e);return null==l?(t.formatsData.sendAbTestEvent("measureText_no_metrics"),null):l.width}catch(e){return t.formatsData.sendAbTestEvent("filtered_error_measure_text_list_suffix"),null}}function m(t,e,a){return'<svg class="cta-rating-star" height="9px" version="1.1" viewBox="0 0 9 9" width="9px" xmlns="http://www.w3.org/2000/svg">    <g fill="none" fill-rule="evenodd" stroke="none" stroke-width="1">        <linearGradient id="lg'+e+"-"+t+'" x1="0" x2="1" y1="0.5" y2="0.5">            <stop offset="0" stop-color="#737373" stop-opacity="1"/>            <stop offset="'+a+'" stop-color="#737373" stop-opacity="1"/>            <stop offset="'+a+'" stop-color="#737373" stop-opacity="0.5"/>            <stop offset="1" stop-color="#737373" stop-opacity="0.5"/>        </linearGradient>        <g fill="url(#lg'+e+"-"+t+')" fill-rule="nonzero" transform="translate(-21.000000, -19.000000)">            <polygon points="25.5 26.4626165 22.7188471 28 23.25 24.7437694 21 22.4376941 24.1094235 21.9626165 25.5 19 26.8905765 21.9626165 30 22.4376941 27.75 24.7437694 28.2811529 28"></polygon>        </g>    </g></svg>'}function v(t,e,r){var n=p(e);if((!n||0===n)&&(n=h(e,"height"))<=0)return 0;if(!t.formatsData.shouldRenderAsCTA||!r)return t.rbox.formatsData.shouldAdjustAllItemsHeight?n:0;var i=t.formatsData.isAppInstall?o:0,s=g(r),l=n+i-s+Math.max(a,s);return l<=n?t.rbox.formatsData.shouldAdjustAllItemsHeight?n:0:l}function b(t){return t.querySelector(".item-label-href")}function _(t,e,a){if(e&&t){var r=h(t,a);r&&(e.style[a]=r)}}}},window.TRC.customHooks[e]=i}catch(t){window.__trcError("Error in CTA module: "+t.message)}}();