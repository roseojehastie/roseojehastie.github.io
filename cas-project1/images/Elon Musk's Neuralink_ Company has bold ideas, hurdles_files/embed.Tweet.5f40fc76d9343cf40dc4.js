(window.webpackJsonp=window.webpackJsonp||[]).push([[7,9],{10:function(e,t,n){"use strict";n.d(t,"a",(function(){return v})),n.d(t,"b",(function(){return g})),n.d(t,"c",(function(){return T})),n.d(t,"e",(function(){return _})),n.d(t,"f",(function(){return w})),n.d(t,"h",(function(){return b})),n.d(t,"j",(function(){return k})),n.d(t,"d",(function(){return y})),n.d(t,"g",(function(){return O})),n.d(t,"i",(function(){return p}));var r=n(111),i=n.n(r),a=n(732),o=n(19),s=n(16),c=n(2),u=n.n(c),f=n(92),d=n.n(f),l=function(e){return!0},h=function(e){return e},m=function(e,t){return e[t]},p=function(e,t){return t.reduce((function(t,n){var r,i=n.key,a=d()(n,["key"]),o=a.accessor,s=void 0===o?m:o,c=a.required,f=void 0!==c&&c,p=a.validate,j=void 0===p?l:p,v=a.transform,E=void 0===v?h:v,g=a.fallback,T=s(e,i);if(void 0!==T&&j(T)){var _,w=E(T);if(void 0!==w)return u()({},t,((_={})[i]=w,_))}if(void 0!==g)return u()({},t,((r={})[i]=g,r));if(f)throw new Error(i+" is a required parameter");return t}),{})},j=/^[a-zA-Z0-9-]+$/,v=/^\d+$/,E=function(e){return e.replace(/[^a-zA-Z0-9-_:/?=@.]/g,"")},g={key:"dnt",validate:function(e){return["true","false"].includes(e)},transform:function(e){return"true"===e},fallback:!1},T={key:"embedId",validate:function(e){return j.test(e)},fallback:"embed-0"},_={key:"lang",validate:function(e){return o.a.isSupportedLocale(e)},fallback:"en"},w={key:"pageData",accessor:function(e){return p(e,[{key:"origin",validate:function(e){return"string"==typeof e},transform:E,fallback:""},{key:"frame",validate:function(e){return"string"==typeof e},transform:E,fallback:""},{key:"partner",validate:function(e){return"string"==typeof e},transform:E,fallback:""},{key:"siteScreenName",validate:function(e){return"string"==typeof e},transform:E,fallback:""},{key:"siteUserId",validate:function(e){return"string"==typeof e},transform:E,fallback:""},{key:"creatorScreenName",validate:function(e){return"string"==typeof e},transform:E,fallback:""},{key:"creatorUserId",validate:function(e){return"string"==typeof e},transform:E,fallback:""}])}},b={key:"theme",validate:function(e){return[s.e.ThemePaletteNames.light,s.e.ThemePaletteNames.dark].includes(e)},fallback:s.e.ThemePaletteNames.light,transform:function(e){return e===s.e.ThemePaletteNames.dark?s.e.ThemePaletteNames.darker:e}},k={key:"widgetsVersion",accessor:function(e){return e.widgetsVersion},validate:function(e){return"string"==typeof e&&/^([a-zA-Z0-9])+:([0-9])+$/.test(e)},fallback:void 0},y={key:"features",transform:function(e){try{var t=window.atob(e);return JSON.parse(t)}catch(e){return{}}},fallback:{}},O={key:"sessionId",fallback:i()(Object(a.a)()).toString()}},114:function(e,t,n){"use strict";n.d(t,"c",(function(){return g.f})),n.d(t,"d",(function(){return g.g})),n.d(t,"b",(function(){return g.d})),n.d(t,"a",(function(){return g.a}));var r=n(2),i=n.n(r),a=n(1),o=n.n(a),s=n(48),c=n(96),u=n(173),f=n.n(u),d=n(81),l=function(e){function t(t){var n;n=e.call(this)||this;var r=t.category,i=t.clientName,a=t.transport;if(!r)throw new Error("required category is missing");if(n.category=r,!i)throw new Error("required clientName is missing");if(n.clientName=i,"function"!=typeof a)throw new Error("Invalid transport: "+a);return n._transport=a,n}f()(t,e);var n=t.prototype;return n.createEventObject=function(e,t,n){return i()({_category_:t,triggered_on:Date.now(),event_namespace:e},n)},n._handleError=function(e){try{this.emit("error",e)}catch(e){}throw e},n.log=function(e,t){var n=this.createEventObject(i()({client:this.clientName},e),this.category,t);this.emit("log",n),this._log(n)},n._log=function(e){var t=this;e&&this._transport(e).catch((function(e){return t._handleError(e)})).catch((function(){}))},t}(n.n(d).a),h=function(e){var t=new l(e);return t.on("log",(function(e){Object(s.a)("[scribe] LOG "+Object(c.b)(e.event_namespace),e)})),t.on("error",(function(e){Object(s.a)("[scribe] ERROR",e)})),t},m=n(49),p=n.n(m),j=n(84),v=function(e){var t={l:JSON.stringify(e)},n=e.dnt?{dnt:1}:{},r=j.a.isBucketed()?j.a.getSessionId():{};return i()({},t,n,r)},E=function(){return function(e){return t=v(e),n="https://syndication.twitter.com/i/jot?"+p.a.stringify(t),new Promise((function(e,t){var r=document.createElement("img");r.addEventListener("load",(function(){return e(r)})),r.addEventListener("error",t),r.src=n}));var t,n}},g=n(62),T=function(){function e(){o()(this,"_data",{context:g.c}),this._scribeClient=h({clientName:g.b,category:"tfw_client_event",transport:E()})}var t=e.prototype;return t.initialize=function(e){this._page=e.page,this._data=i()({},this._data,e.data)},t.scribe=function(e,t,n){this._scribeClient.log(i()({page:this._page,action:e},t),i()({},this._data,n))},e}();n(230),t.e=new T},121:function(e,t,n){var r={"./ar.js":[285,0,14],"./bn.js":[286,0,15],"./cs.js":[287,0,16],"./da.js":[288,0,17],"./de.js":[289,0,18],"./el.js":[290,0,19],"./en.js":[291,0,20],"./es.js":[292,0,21],"./fa.js":[293,0,22],"./fi.js":[294,0,23],"./fil.js":[295,0,24],"./fr.js":[296,0,25],"./he.js":[297,0,26],"./hi.js":[298,0,27],"./hu.js":[299,0,28],"./id.js":[300,0,29],"./it.js":[301,0,30],"./ja.js":[302,0,31],"./ko.js":[303,0,32],"./ms.js":[304,0,33],"./nb.js":[305,0,34],"./nl.js":[306,0,35],"./pl.js":[307,0,36],"./pt.js":[308,0,37],"./ro.js":[309,0,38],"./ru.js":[310,0,39],"./sv.js":[311,0,40],"./th.js":[312,0,41],"./tr.js":[313,0,42],"./uk.js":[314,0,43],"./vi.js":[315,0,44],"./zh-Hant.js":[316,0,45],"./zh.js":[317,0,46]};function i(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],i=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n.t(i,7)}))}i.keys=function(){return Object.keys(r)},i.id=121,e.exports=i},19:function(e,t,n){"use strict";var r=n(123),i=n(29),a=n.n(i),o=n(25),s="en",c={ar:!0,fa:!0,he:!0},u=function(e){return Boolean(c[e])},f=function(e){return a.a.locales.indexOf(e)>-1};t.a={isLocaleRTL:u,isSupportedLocale:f,setLocale:function(e){return s=f(e)?e:"en",r.a.setLocale(a.a.getCldrLocale(s)).then((function(){o.default.setPreferredLanguageRTL(u(s)),document&&document.documentElement&&document.documentElement.setAttribute("lang",s)}))},getLocale:function(){return s}}},192:function(e,t){},193:function(e,t){},195:function(e,t){},196:function(e,t){},199:function(e,t){},200:function(e,t){},201:function(e,t){},202:function(e,t){},204:function(e,t){},206:function(e,t,n){var r={"./ar-x-fm.js":[234,0,52],"./ar-xx.js":[235,0,53],"./ar.js":[236,0,51],"./bg.js":[237,0,54],"./bn.js":[238,0,55],"./ca.js":[239,0,56],"./cs.js":[240,0,57],"./da.js":[241,0,58],"./de.js":[242,0,59],"./el.js":[243,0,60],"./en-GB.js":[244,0,61],"./en-ss.js":[245,0,63],"./en-xx.js":[246,0,64],"./en.js":[247,0,62],"./es.js":[248,0,65],"./eu.js":[249,0,66],"./fa.js":[250,0,67],"./fi.js":[251,0,68],"./fil.js":[252,0,69],"./fr.js":[253,0,70],"./ga.js":[254,0,71],"./gl.js":[255,0,72],"./gu.js":[256,0,73],"./he.js":[257,0,74],"./hi.js":[258,0,75],"./hr.js":[259,0,76],"./hu.js":[260,0,77],"./id.js":[261,0,78],"./it.js":[262,0,79],"./ja.js":[263,0,80],"./kn.js":[264,0,81],"./ko.js":[265,0,82],"./mr.js":[266,0,83],"./ms.js":[267,0,84],"./nb.js":[268,0,85],"./nl.js":[269,0,86],"./pl.js":[270,0,87],"./pt.js":[271,0,88],"./ro.js":[272,0,89],"./ru.js":[273,0,90],"./sk.js":[274,0,91],"./sr.js":[275,0,92],"./sv.js":[276,0,93],"./ta.js":[277,0,94],"./th.js":[278,0,95],"./tr.js":[279,0,96],"./uk.js":[280,0,97],"./ur.js":[281,0,98],"./vi.js":[282,0,99],"./zh-Hant.js":[283,0,100],"./zh.js":[284,0,101]};function i(e){if(!n.o(r,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=r[e],i=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n.t(i,7)}))}i.keys=function(){return Object.keys(r)},i.id=206,e.exports=i},230:function(e,t,n){"use strict";Object.freeze({FCP:"FCP",FID:"FID",LCP:"LCP"})},29:function(e,t){var n={ms:"msa",nb:"no",zh:"zh-cn","zh-Hant":"zh-tw"},r={msa:"ms",no:"nb","zh-cn":"zh","zh-tw":"zh-Hant"};e.exports={locales:["en","ar","bn","cs","da","de","el","es","fa","fi","fil","fr","he","hi","hu","id","it","ja","ko","msa","nl","no","pl","pt","ro","ru","sv","th","tr","uk","vi","zh-cn","zh-tw"],getCldrLocale:function(e){return r[e]||e},getTwitterLocale:function(e){return n[e]||e}}},369:function(e,t,n){"use strict";n.r(t);var r,i,a,o,s=n(94),c=n(66),u=n(44),f=n(82),d=n(10),l=n(85),h=n(84),m=n(96),p=n(83),j=n(114),v=n(98),E=new s.a(new c.a({dispatcher:u.b})),g=new s.a(new c.a({dispatcher:u.b,host:"https://syndication.twitter.com"})),T=(i=f.a.parseQueryString(location.search),a=[{key:"id",validate:function(e){return d.a.test(e)},required:!0},{key:"hideThread",accessor:function(e){return e.hideThread},validate:function(e){return["true","false"].includes(e)},transform:function(e){return"true"===e},fallback:!1},{key:"hideMedia",accessor:function(e){return e.hideCard},validate:function(e){return["true","false"].includes(e)},transform:function(e){return"true"===e},fallback:!1},d.b,d.c,d.d,d.e,d.f,d.g,d.h,d.j],Object(d.i)(i,a)),_=T.dnt,w=T.embedId,b=T.features,k=T.hideMedia,y=T.hideThread,O=T.id,I=T.lang,N=T.pageData,L=T.sessionId,P=T.theme,S=T.widgetsVersion;h.a.initialize(g,b,L),j.e.initialize({page:j.c.TWEET,data:{client_version:S,dnt:_,widget_id:w,widget_origin:N.origin,widget_frame:N.frame,widget_partner:N.partner,widget_site_screen_name:N.siteScreenName,widget_site_user_id:N.siteUserId,widget_creator_screen_name:N.creatorScreenName,widget_creator_user_id:N.creatorUserId,widget_iframe_version:"5fe8eff:1618352504577",item_ids:[O],item_details:(r={},r[O]={item_type:m.a.TWEET},r)}}),v.c.initialize({embedId:w,data:{tweet_id:O}}),v.c.send({key:v.b.INITIALIZED,details:{iframe_version:"5fe8eff:1618352504577"}}),Promise.all([(o=[],window.IntersectionObserver||o.push(n.e(102).then(n.t.bind(null,1565,7))),Promise.all(o))]).then((function(){return Object(l.a)(p.a,{lang:I,theme:P},{api:E,hideMedia:k,hideThread:y,id:O,pageData:N})}))},48:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e,t){0}},57:function(e,t,n){"use strict";var r=n(19),i=n(29),a=n.n(i);t.a=function(){var e=r.a.getLocale(),t=a.a.getCldrLocale(e);return n(121)("./"+t+".js")}},62:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"f",(function(){return i})),n.d(t,"g",(function(){return a})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return s})),n.d(t,"c",(function(){return c})),n.d(t,"e",(function(){return u}));var r="tfw",i=Object.freeze({TWEET:"tweet",DDG:"ddg"}),a=Object.freeze({FAKE:"tfw_experiment_1234",MAIN:"main",PARENT:"parent",QUOTE:"quote",PARENT_QUOTE:"parent-quote",HOLDBACK_EXPERIMENT:"tfw_team_holdback_11929"}),o=Object.freeze({AUTHOR:"author",CARD:"card",LIKE_ACTION:"like-action",LOGO:"logo",NEWS_ACTION:"news-action",PERFORMANCE:"performance",PHOTO:"photo",PLACE:"place",PRIVACY_NOTICE:"privacy-notice",PUBLIC_INTEREST_NOTICE:"public-interest-notice",SHARE_ACTION:"share-action",SOFT_INTERVENTION_PIVOT:"soft-intervention-pivot",TIMESTAMP:"timestamp",TWEET_REPLY_CONTEXT:"tweet-reply-context",TWEET_TEXT_CASHTAG:"tweet-text-cashtag",TWEET_TEXT_HASHTAG:"tweet-text-hashtag",TWEET_TEXT_MEDIA:"tweet-text-media",TWEET_TEXT_MENTION:"tweet-text-mention",TWEET_TEXT_QUOTE:"tweet-text-quote",TWEET_TEXT_URL:"tweet-text-url",VIDEO:"video",WHITESPACE:"whitespace"}),s=(Object.freeze({}),Object.freeze({CLICK_EXTERNAL:"click-external",CLICK_INTERACTIVE:"click-interactive",CLICK_TWITTER:"click-twitter",EXPERIMENT:"experiment",IMPRESSION:"impression",RESULTS:"results",NO_RESULTS:"no-results",SEEN:"seen"})),c="horizon",u={client:r,page:i.TWEET}},66:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(2),i=n.n(r),a=n(44),o=function(e){var t=e.headers,n=t&&t["content-type"];return"string"==typeof n&&n.indexOf("application/json")>=0&&e.body?JSON.parse(e.body):null},s={host:"https://cdn.syndication.twimg.com"},c=function(){function e(e){this.client=new a.a(i()({},s,e))}var t=e.prototype;return t.dispatch=function(e){return this.client.dispatch(e).then(o)},t.get=function(e,t,n){return this.dispatch({path:"/"+e,method:"GET",params:t,headers:n||{}})},e}()},82:function(e,t,n){"use strict";n(48);var r=n(49),i=n.n(r),a=/(?:^|(?:https?:)?\/\/(?:www\.)?twitter\.com(?::\d+)?\/(?:#!\/)?[\w_]+\/status(?:es)?\/)(\d+)/i,o=["twitter.com","mobile.twitter.com"];t.a={isStatusUrl:function(e){return"string"==typeof e&&a.test(e)},isTwitterDotComLink:function(e){try{var t=new URL(e).host;return o.indexOf(t)>-1}catch(e){return!1}},parseQueryString:function(e){void 0===e&&(e="");try{return i.a.parse(e.replace(/^\?/,""))}catch(e){if(e instanceof URIError)return{};throw e}}}},83:function(e,t,n){"use strict";var r=n(180),i=n(57),a=Object(r.a)({loader:function(){return Object(i.a)().then((function(){return Promise.all([n.e(4),n.e(3),n.e(50),n.e(13)]).then(n.bind(null,318))}))},renderPlaceholder:function(){return null}});t.a=a},84:function(e,t,n){"use strict";var r=n(1),i=n.n(r),a=(n(94),function(){function e(){var e=this;i()(this,"store",{features:{}}),i()(this,"get",(function(){return e.store})),i()(this,"getFeatures",(function(){return e.store.features})),i()(this,"getSessionId",(function(){return e.session_id})),i()(this,"isBucketed",(function(){var t=e.getFeatures();return Object.keys(t).some((function(e){return null!==t[e].version}))}))}var t=e.prototype;return t.initialize=function(e,t,n){this.api=e,this.store.features=t,this.session_id={session_id:n}},t.getExperimentData=function(e){var t=this.getFeatures();return t[e]?{experiment_key:e,bucket:t[e].bucket,version:t[e].version}:void 0},e}());t.a=new a},85:function(e,t,n){"use strict";n(0);var r=n(75),i=n(19),a=n(4);n(83);t.a=function(e,t,n){var o=t.lang,s=t.theme;i.a.setLocale(o),a.a.setTheme(s),r.a.registerComponent("App",(function(){return e}));var c=document.getElementById("app")||document.getElementsByTagName("div")[0];return new Promise((function(e,t){r.a.runApplication("App",{callback:e,rootTag:c,initialProps:n})}))}},94:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var r=function(e){this.Tweet=function(e){return{fetch:function(t,n){return e.get("tweet",t,n).then((function(e){return e&&e.id_str?Promise.resolve(e):Promise.reject(new Error("could not parse api response"))}))}}}(e),this.Settings=function(e){return{fetch:function(t,n){return e.get("settings",t,n).then((function(e){return e&&e.features?Promise.resolve(e):Promise.reject(new Error("could not parse api response"))}))}}}(e)}},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return i}));var r=Object.freeze({TWEET:0}),i=function(e){var t=e.client,n=void 0===t?"":t,r=e.page,i=void 0===r?"":r,a=e.section,o=void 0===a?"":a,s=e.component,c=void 0===s?"":s,u=e.element,f=void 0===u?"":u,d=e.action;return n+":"+i+":"+o+":"+c+":"+f+":"+(void 0===d?"":d)}},98:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return s}));var r=n(2),i=n.n(r),a=n(48),o=Object.freeze({CLICK:"click",INITIALIZED:"initialized",LIKE:"like",NO_RESULTS:"no_results",RENDERED:"rendered",RESIZE:"resize",RESULTS:"results",TRIGGER:"trigger"}),s=Object.freeze({INTENT:"intent"}),c=function(){function e(){}var t=e.prototype;return t.initialize=function(e){var t=e.embedId,n=e.data;this._embedId=t,this._data=n||{}},t.send=function(e){var t,n=e.key,r=e.details,o=window.parent;if(o&&o.postMessage){var s="twttr.private."+n,c={jsonrpc:"2.0",method:s,id:this._embedId,params:[i()({},r,{data:this._data})]};Object(a.a)("[rpc] MESSAGE "+s,r),o.postMessage(((t={})["twttr.embed"]=c,t),"*")}},e}();t.c=new c}},[[369,2,1]]]);