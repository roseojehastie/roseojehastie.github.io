(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[59],{1246:function(e,r,t){"use strict";t.r(r);var n=t(0),a=t.n(n),i=t(1),s=t.n(i),u=t(59),d=t(263),o=t(29),c=t(852),l=Object(u.a)({resolved:{},chunkName:function(){return"ArticleInlineMediaPremium"},isReady:function(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!t.m[r]},importAsync:function(){return t.e(35).then(t.bind(null,1332))},requireAsync:function(e){var r=this,t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((function(e){return r.resolved[t]=!0,e}))},requireSync:function e(r){var n=this.resolve(r);return t(n)},resolve:function e(){return 1332}}),m=Object(u.a)({resolved:{},chunkName:function(){return"components-shared-Article-InlineImage"},isReady:function(e){var r=this.resolve(e);return!0===this.resolved[r]&&!!t.m[r]},importAsync:function(){return t.e(142).then(t.bind(null,924))},requireAsync:function(e){var r=this,t=this.resolve(e);return this.resolved[t]=!1,this.importAsync(e).then((function(e){return r.resolved[t]=!0,e}))},requireSync:function e(r){var n=this.resolve(r);return t(n)},resolve:function e(){return 924}}),v=o.b,h=function(e){var r=e.data,t=e.id,n=e.premium,i=e.dataCounter,s=e.template,u=e.dataId,o=e.brand,v=e.isTransporter,h=e.dataTest,p=e.dataAnalytics,f=v?o:r.brand;if(n)return a.a.createElement("div",{"data-test":h,"data-analytics":p,isPremium:!0},a.a.createElement(l,{id:t,dataId:u,brand:f,isTransporter:!0}));if(!r)return a.a.createElement(d.a,{data:{error:"ArticleInlineMedia query came back as null"},errorSource:"ArticleInlineMedia",errorProps:e});var b=r.featuredMedia;return b&&("image"===b.type&&!b.isHighTouch||"infographic"===b.type)?a.a.createElement("div",{"data-test":h,"data-analytics":p},a.a.createElement(m,{data:r,dataId:u||Object(c.d)(s,i),brand:f,isFeaturedMedia:!0})):null};h.propTypes={brand:s.a.string,isTransporter:s.a.bool,data:s.a.object.isRequired,dataCounter:s.a.number,dataId:s.a.string,id:s.a.number.isRequired,premium:s.a.bool,template:s.a.string,dataTest:s.a.string.isRequired,dataAnalytics:s.a.string.isRequired},h.defaultProps={isTransporter:!1,brand:v,dataCounter:0,premium:!1,template:"",dataId:""},r.default=h}}]);
//# sourceMappingURL=../../source-maps/components-PcmModule-ArticleInlineMedia-234b70e28a629a828905.js.map