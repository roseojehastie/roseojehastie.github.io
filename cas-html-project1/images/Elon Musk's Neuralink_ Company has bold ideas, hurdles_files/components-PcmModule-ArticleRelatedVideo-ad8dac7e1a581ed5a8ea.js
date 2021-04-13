(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[60,147],{1037:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"WildcardEmbed",(function(){return E}));var a=n(0),r=n.n(a),i=n(1),s=n.n(i),o=n(220),c=n(35),l=n(263),d=n(492),u=n(29),m=n(851),f=n(1128),p=n(894),b=n(125),v=n(1129),y=n(1201),h={};h[u.a]=Object(m.a)({chunkName:"components/shared/Article/WildcardEmbed/styles.acorns.scss",requireAsync:function(){return n.e(225).then(n.t.bind(null,1066,7))},requireSync:function e(t){var a=this.resolve(t);return n(a)},resolve:function(){return 1066}}),h[u.b]=Object(m.a)({chunkName:"components/shared/Article/WildcardEmbed/styles.cnbc.scss",requireAsync:function(){return n.e(389).then(n.t.bind(null,1067,7))},requireSync:function e(t){var a=this.resolve(t);return n(a)},resolve:function(){return 1067}}),h[u.d]=Object(m.a)({chunkName:"components/shared/Article/WildcardEmbed/styles.makeit.scss",requireAsync:function(){return n.e(286).then(n.t.bind(null,1068,7))},requireSync:function e(t){var a=this.resolve(t);return n(a)},resolve:function(){return 1068}});var E=function(e){var t=e.data,n=e.isRelatedVideo,i=e.executeWildcardScripts,s=e.styles;if(t.loading)return r.a.createElement("div",null);var o=t.wildcard&&t.wildcard.promoText;if(t.error){var u=o?t:{error:"Wildcard query came back as null"};return r.a.createElement(l.a,{data:u,errorSource:"WildcardEmbed",errorProps:e})}var m=function(){var e=Object(a.useRef)(null);return Object(a.useEffect)((function(){i(e.current)}),[]),r.a.createElement("div",{className:s.wildcard,ref:e,"data-test":"WildCardEmbed"},r.a.createElement("div",{dangerouslySetInnerHTML:{__html:o},className:Object(c.a)({keyValuePairs:[[s.wrapper,!n],[s.isRelatedVideo,n]]})}))},f=Object(v.a)(o),y=f.hasScript,h=f.hasIframe;if(y||h){var E=Object(p.a)([b.b.STORAGE,b.b.TARGETED_ADS,b.b.CONTENT_SELECTION_AND_MEASUREMENT,b.b.SOCIAL_MEDIA],m);return r.a.createElement(d.a,null,r.a.createElement(E,null))}return r.a.createElement(m,null)};E.propTypes={data:s.a.object.isRequired,isRelatedVideo:s.a.bool,executeWildcardScripts:s.a.func,styles:s.a.object.isRequired},E.defaultProps={isRelatedVideo:!1,executeWildcardScripts:y.a,styles:{}};var O=function(e,t){return e.id===t.id};t.default=Object(o.b)(f.a,{options:function(e){return{variables:{id:e.id,clientComponent:"Article/WildcardEmbed",clientProps:e}}}})(Object(m.b)(h,Object(a.memo)(E,O)))}.call(this,"/")},1128:function(e,t,n){"use strict";var a=n(33),r=n.n(a),i=n(34);function s(){var e=r()(["\n  query wildcard($id: Int!) {\n    wildcard(id: $id) {\n      promoText\n    }\n  }\n"]);return s=function(){return e},e}var o=n.n(i)()(s());t.a=o},1129:function(e,t,n){"use strict";var a=/<script[\s\S]*?>[\s\S]*?<\/script>/i,r=/<iframe[\s\S]*?>[\s\S]*?<\/iframe>/i;t.a=function(e){return{hasScript:a.test(e),hasIframe:r.test(e)}}},1201:function(e,t,n){"use strict";var a=function(e){if(e.src&&e.src.endsWith("//platform.instagram.com/en_US/embeds.js")){var t=e.onload;e.onload=function(){"function"==typeof t&&t(),"undefined"!=typeof window&&window.instgrm&&window.instgrm.Embeds.process()}}};function r(e){e.reduce((function(e,t){return e.then((function(){return e=t,new Promise((function(t){for(var n=document.createElement("script"),r=0;r<e.attributes.length;r+=1){var i=e.attributes[r];i.nodeName.includes("data-")?n.setAttribute(i.nodeName,i.nodeValue):n[i.nodeName]=i.nodeValue}if(n.innerHTML=e.innerHTML,n.src)return n.onload=t,n.onerror=t,a(n),void document.body.append(n);document.body.append(n),t()}));var e}))}),Promise.resolve())}t.a=function(e){var t=[];e.querySelectorAll("script").forEach((function(e){t.push(e),e.remove()})),r(t)}},1247:function(e,t,n){"use strict";n.r(t),n.d(t,"ArticleRelatedVideo",(function(){return f}));var a=n(0),r=n.n(a),i=n(1),s=n.n(i),o=n(263),c=n(29),l=n(852),d=n(1635),u=n(1637),m=c.d,f=function(e){var t=e.data,n=e.dataCounter,a=e.brand,i=e.template,s=e.dataTest,c=e.dataAnalytics;if(!t)return r.a.createElement(o.a,{data:{error:"Article query came back as null"},errorSource:"ArticleRelatedVideo",errorProps:e});var m=Object(l.e)(i,"ArticleRelatedVideo",n);return null!==t.relatedVideo&&null!==t.relatedVideo.type&&"cnbcvideo"===t.relatedVideo.type?r.a.createElement(d.a,{key:0,id:t.relatedVideo.id,dataId:m,brand:a,dataTest:s,dataAnalytics:c}):null!==t.relatedVideo&&null!==t.relatedVideo.type&&"wildcard"===t.relatedVideo.type?r.a.createElement(u.a,{key:0,id:t.relatedVideo.id,dataId:m,brand:a,dataTest:s,dataAnalytics:c}):null};f.propTypes={brand:s.a.string,data:s.a.object.isRequired,dataCounter:s.a.number,template:s.a.string,dataTest:s.a.string.isRequired,dataAnalytics:s.a.string.isRequired},f.defaultProps={brand:m,dataCounter:0,template:""},t.default=f},1635:function(e,t,n){"use strict";(function(e){var a=n(0),r=n.n(a),i=n(59),s=n(1),o=n.n(s),c=n(220),l=n(263),d=n(1636),u=n(29),m=n(851),f=Object(i.a)({resolved:{},chunkName:function(){return"components-Video-UniversalVideoPlayer-PlaceHolder"},isReady:function(e){var t=this.resolve(e);return!0===this.resolved[t]&&!!n.m[t]},importAsync:function(){return Promise.all([n.e(9),n.e(137)]).then(n.bind(null,872))},requireAsync:function(e){var t=this,n=this.resolve(e);return this.resolved[n]=!1,this.importAsync(e).then((function(e){return t.resolved[n]=!0,e}))},requireSync:function e(t){var a=this.resolve(t);return n(a)},resolve:function e(){return 872}}),p=u.d,b={};b[u.a]=Object(m.a)({chunkName:"components/PcmModule/ArticleRelatedVideo/RelatedVideo/styles.acorns.scss",requireAsync:function(){return n.e(196).then(n.t.bind(null,1333,7))},requireSync:function e(t){var a=this.resolve(t);return n(a)},resolve:function(){return 1333}}),b[u.d]=Object(m.a)({chunkName:"components/PcmModule/ArticleRelatedVideo/RelatedVideo/styles.makeit.scss",requireAsync:function(){return n.e(249).then(n.t.bind(null,1334,7))},requireSync:function e(t){var a=this.resolve(t);return n(a)},resolve:function(){return 1334}});var v=function(e){var t=e.data,n=e.dataId,a=e.id,i=e.brand,s=e.styles,o=e.dataTest,c=e.dataAnalytics,d=t.video,u=t.loading,m=t.error;return u?r.a.createElement("div",null):!d||m?r.a.createElement(l.a,{data:t,errorSource:"RelatedVideo",errorProps:e}):r.a.createElement("div",{className:s.container,id:"RelatedVideo-".concat(a),"data-test":o,"data-analytics":c},r.a.createElement("div",{className:s.relatedVideoHeader},"Related Video"),r.a.createElement(f,{videoData:d,dataId:n,isRelatedVideo:!0,inlineVideoComponent:!0,cardType:"featured-rectangle-media",brand:i,idOfVideoInPlayer:a}))};v.propTypes={brand:o.a.string,data:o.a.object.isRequired,dataId:o.a.oneOfType([o.a.string,o.a.number]),id:o.a.oneOfType([o.a.string,o.a.number]).isRequired,styles:o.a.object.isRequired,dataTest:o.a.string.isRequired,dataAnalytics:o.a.string.isRequired},v.defaultProps={brand:p,dataId:0},t.a=Object(c.b)(d.a,{options:function(e){return{variables:{id:e.id,clientComponent:"RelatedVideo",clientProps:e}}}})(Object(m.b)(b,v))}).call(this,"/")},1636:function(e,t,n){"use strict";var a=n(33),r=n.n(a),i=n(34),s=n.n(i),o=n(17);function c(){var e=r()(["\n  query video($id: Int) {\n    video(id: $id) {\n      brand\n      ","\n    }\n  }\n"]);return c=function(){return e},e}var l=s()(c(),o.a);t.a=l},1637:function(e,t,n){"use strict";(function(e){var a=n(0),r=n.n(a),i=n(1),s=n.n(i),o=n(1037),c=n(29),l=n(851),d=c.d,u={};u[c.a]=Object(l.a)({chunkName:"components/PcmModule/ArticleRelatedVideo/RelatedWildcard/styles.acorns.scss",requireAsync:function(){return n.e(197).then(n.t.bind(null,1335,7))},requireSync:function e(t){var a=this.resolve(t);return n(a)},resolve:function(){return 1335}}),u[c.d]=Object(l.a)({chunkName:"components/PcmModule/ArticleRelatedVideo/RelatedWildcard/styles.makeit.scss",requireAsync:function(){return n.e(250).then(n.t.bind(null,1336,7))},requireSync:function e(t){var a=this.resolve(t);return n(a)},resolve:function(){return 1336}});var m=function(e){var t=e.id,n=e.dataId,a=e.brand,i=e.styles,s=e.dataTest,c=e.dataAnalytics;return r.a.createElement("div",{className:i.container,id:"RelatedVideo-".concat(t),"data-test":s,"data-analytics":c},r.a.createElement("div",{className:i.relatedVideoHeader},"Related Video"),r.a.createElement("div",{className:i.subContainer},r.a.createElement("div",{className:i.relatedVideoBackgroundPattern}),r.a.createElement("div",{className:i.wrapper},r.a.createElement(o.default,{key:0,id:t,dataId:n,isRelatedVideo:!0,brand:a}))))};m.propTypes={brand:s.a.string,id:s.a.oneOfType([s.a.string,s.a.number]).isRequired,dataId:s.a.oneOfType([s.a.string,s.a.number]),styles:s.a.object.isRequired,dataTest:s.a.string.isRequired,dataAnalytics:s.a.string.isRequired},m.defaultProps={brand:d,dataId:0},t.a=Object(l.b)(u,m)}).call(this,"/")},894:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(125),s=n(1),o=n.n(s),c=n(870),l=n(35),d=n(938),u=n.n(d),m=function(e){var t=e.style,n=e.className;return r.a.createElement("div",{style:t,className:Object(l.a)(n,u.a.container)},r.a.createElement(c.a,{showSpinner:!0}))};m.propTypes={style:o.a.object.isRequired,className:o.a.string},m.defaultProps={className:null};var f=m,p=n(124),b=n(939),v=n.n(b),y=function(e){var t=e.styles,n=e.onShowOneTrustInfoDisplay;return r.a.createElement("div",{className:t.innerCopy},r.a.createElement("p",null,"This content is blocked because you are not allowing cookies."),r.a.createElement("p",null,"To view this content, click on"," ",r.a.createElement("span",{className:Object(l.a)(t.link,"ot-sdk-show-settings"),onClick:n,role:"button",tabIndex:0},"Manage Cookie Preferences")," ","here or at the bottom of the page to allow all cookies."))};y.propTypes={styles:o.a.object.isRequired,onShowOneTrustInfoDisplay:o.a.func.isRequired};var h=y,E=n(46),O=function(e){var t=e.styles;return r.a.createElement("div",{className:t.innerCopy},r.a.createElement("p",null,"To continue viewing this content,"),r.a.createElement("p",null,r.a.createElement(E.b,{to:i.a,className:t.onetrustSettingsDeepLink},"update your app settings"," "),"to allow all cookies."))};O.propTypes={styles:o.a.object.isRequired};var T=O,R=function(e){var t=e.style,n=e.onShowOneTrustInfoDisplay,a=e.className,i=e.isMobileWebview;return r.a.createElement("div",{style:t,className:Object(l.a)(v.a.container,a)},i&&r.a.createElement(T,{styles:v.a}),!i&&r.a.createElement(h,{styles:v.a,onShowOneTrustInfoDisplay:n}))};R.propTypes={style:o.a.object.isRequired,onShowOneTrustInfoDisplay:o.a.func.isRequired,className:o.a.string,isMobileWebview:o.a.bool},R.defaultProps={className:null,isMobileWebview:!1};var A=Object(p.a)(R),N=n(940),S=n.n(N);t.a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{useOneTrustContext:i.f};Object(i.g)(e);var s=function(s){var o=(0,a.useOneTrustContext)(),c=o.isClientSide,l=o.loadingState,d=o.userBlockedCategories,u=o.onShowOneTrustInfoDisplay;return o.enableOneTrust?l!==i.c.LOADING&&c?(l===i.c.ERROR&&console.warn("There was an error blocking this embed with OneTrust. TODO: Notify someone!"),d&&d.some((function(t){return e.includes(t)}))?r.a.createElement(A,{className:S.a.placeholderDimensions,style:n,onShowOneTrustInfoDisplay:u}):r.a.createElement(t,s)):r.a.createElement(f,{className:S.a.placeholderDimensions,style:n}):r.a.createElement(t,s)};return s}},938:function(e,t,n){e.exports={container:"OneTrustLoadingPlaceholder-container"}},939:function(e,t,n){e.exports={electricblue:"#1ff1c8",orange:"#f87121",container:"OneTrustBlockedPlaceholder-container",innerCopy:"OneTrustBlockedPlaceholder-innerCopy",link:"OneTrustBlockedPlaceholder-link",onetrustSettingsDeepLink:"OneTrustBlockedPlaceholder-onetrustSettingsDeepLink"}},940:function(e,t,n){e.exports={placeholderDimensions:"withOneTrustPlaceholder-placeholderDimensions"}}}]);
//# sourceMappingURL=../../source-maps/components-PcmModule-ArticleRelatedVideo-ad8dac7e1a581ed5a8ea.js.map