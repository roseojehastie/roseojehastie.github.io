(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[137],{857:function(a,t,e){"use strict";e.d(t,"b",(function(){return o})),e.d(t,"a",(function(){return c}));var n=function(a){return a<10?"0".concat(a):"".concat(a)},o=function(a){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],e=3600,o=60,c=a,r=Math.floor(c/e);c-=e*r;var i=Math.floor(c/o);if(c-=o*i,!t&&0===r)return"".concat(i,":").concat(n(c));if(!t&&r>0)return"".concat(r,":").concat(n(i),":").concat(n(c));var s="".concat(n(i),":").concat(n(c));return r>0&&(s="".concat(n(r),":").concat(s)),s},c=function(a){var t=a,e=Math.floor(t/3600);t-=3600*e;var n=Math.floor(t/60);return t-=60*n,e>0&&0===n&&0===t?"PT".concat(e,"H"):e>0&&n>0&&0===t?"PT".concat(e,"H").concat(n,"M"):e>0&&n>0&&t>0?"PT".concat(e,"H").concat(n,"M").concat(t,"S"):n>0&&0===t?"PT".concat(n,"M"):n>0&&t>0?"PT".concat(n,"M").concat(t,"S"):"PT".concat(t,"S")}},860:function(a,t,e){"use strict";(function(a){var n=e(0),o=e.n(n),c=e(1),r=e.n(c),i=e(35),s=e(29),l=e(851),u={};u[s.a]=Object(l.a)({chunkName:"components/shared/PlayButton/styles.acorns.scss",requireAsync:function(){return e.e(229).then(e.t.bind(null,862,7))},requireSync:function a(t){var n=this.resolve(t);return e(n)},resolve:function(){return 862}}),u[s.b]=Object(l.a)({chunkName:"components/shared/PlayButton/styles.cnbc.scss",requireAsync:function(){return e.e(396).then(e.t.bind(null,863,7))},requireSync:function a(t){var n=this.resolve(t);return e(n)},resolve:function(){return 863}}),u[s.d]=Object(l.a)({chunkName:"components/shared/PlayButton/styles.makeit.scss",requireAsync:function(){return e.e(291).then(e.t.bind(null,864,7))},requireSync:function a(t){var n=this.resolve(t);return e(n)},resolve:function(){return 864}});var y=function(a){var t=a.isFeatured,e=a.buttonType,n=a.hero,c=a.brand,r=a.hoverEffect,l=a.suppressFlyout,u=a.hoverInitiated,y=a.sizeVariationOne,d=a.sizeVariationTwo,p=a.sizeVariationThree,f=a.sizeVariationFour,v=a.sizeVariationFive,b=a.featuredMediaFlag,m=a.smallVersion,h=a.styles,V=a.playButtonClassName,N=a.playButtonIconClassName,z={cnbc:"icon-play-triangle",play:"icon-play-triangle",playlist:"icon-play-triangle",lock:"icon-lock"},F=h.container;F=n?"".concat(h.hero," ").concat(F):F,F=y?"".concat(h.sizeVariationOne," ").concat(F):F,F=d?"".concat(h.sizeVariationTwo," ").concat(F):F,F=p?"".concat(h.sizeVariationThree," ").concat(F):F,F=f?"".concat(h.sizeVariationFour," ").concat(F):F,F=v?"".concat(h.sizeVariationFive," ").concat(F):F,F=m?"".concat(h.smallVersion," ").concat(F):F;var P=Object(i.a)({keyValuePairs:[[h.featured,t],[h.base,!t]]},V),T=Object(i.a)({keyValuePairs:[[h.iconHover,u]]},z[e],h.icon,N);return"playlist"===e?o.a.createElement("div",{className:F,"data-test":"PlayButton"},o.a.createElement("div",{className:P,"data-type":e},o.a.createElement("span",{className:h.flyout},"lock"===e?"log in":"watch now"),o.a.createElement("span",{className:"".concat(z[e]," ").concat(h.icon)})),o.a.createElement("div",{className:t?h.featuredPlaylist:h.playlist})):c===s.d?o.a.createElement("span",{className:u?h.playButtonHover:h.playButton,"data-test":"PlayButton"}):o.a.createElement("div",{className:"".concat(F," ").concat(u?h.iconHover:""),"data-test":"PlayButton"},o.a.createElement("div",{className:"".concat(P," ").concat(b?h.featuredMediaPlaybutton:""),"data-type":e},r&&o.a.createElement("span",{className:Object(i.a)({keyValuePairs:[[h.hover,u],[h.suppressFlyout,l]]},h.flyout)},"lock"===e?"log in":"watch now"),o.a.createElement("span",{className:T})))};y.defaultProps={styles:{},isFeatured:!1,buttonType:"play",hero:!1,hoverEffect:!0,suppressFlyout:!1,hoverInitiated:!1,brand:s.b,sizeVariationOne:!1,sizeVariationTwo:!1,sizeVariationThree:!1,sizeVariationFour:!1,sizeVariationFive:!1,featuredMediaFlag:!1,smallVersion:!1,playButtonClassName:"",playButtonIconClassName:""},y.propTypes={styles:r.a.object,isFeatured:r.a.bool,buttonType:r.a.string,hero:r.a.bool,hoverEffect:r.a.bool,suppressFlyout:r.a.bool,hoverInitiated:r.a.bool,brand:r.a.string,sizeVariationOne:r.a.bool,sizeVariationTwo:r.a.bool,sizeVariationThree:r.a.bool,sizeVariationFour:r.a.bool,sizeVariationFive:r.a.bool,featuredMediaFlag:r.a.bool,smallVersion:r.a.bool,playButtonClassName:r.a.string,playButtonIconClassName:r.a.string},t.a=Object(l.b)(u,y)}).call(this,"/")}}]);
//# sourceMappingURL=../../source-maps/components-Video-UniversalVideoPlayer-PlaceHolder-96b47a2d64284ded6e4e.js.map