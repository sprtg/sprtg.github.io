webpackJsonp([0xd2a57dc1d883],{63:function(e,t){"use strict";function n(e,t,n){var o=r.map(function(n){if(n.plugin[e]){var o=n.plugin[e](t,n.options);return o}});return o=o.filter(function(e){return"undefined"!=typeof e}),o.length>0?o:n?[n]:[]}function o(e,t,n){return r.reduce(function(n,o){return o.plugin[e]?n.then(function(){return o.plugin[e](t,o.options)}):n},Promise.resolve())}t.__esModule=!0,t.apiRunner=n,t.apiRunnerAsync=o;var r=[]},171:function(e,t,n){"use strict";var o;t.components={"component---src-pages-counter-js":n(273),"component---src-pages-index-js":n(274),"component---src-pages-page-2-js":n(275)},t.json=(o={"layout-index.json":n(85),"counter.json":n(276)},o["layout-index.json"]=n(85),o["index.json"]=n(277),o["layout-index.json"]=n(85),o["page-2.json"]=n(278),o),t.layouts={"layout---index":n(272)}},172:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function u(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},c=n(4),s=o(c),l=n(7),f=o(l),p=n(110),d=o(p),h=n(46),g=o(h),m=n(63),v=function(e){var t=e.children;return s.default.createElement("div",null,t())},y=function(e){function t(n){r(this,t);var o=a(this,e.call(this)),u=n.location;return d.default.getPage(u.pathname)||(u=i({},u,{pathname:"/404.html"})),o.state={location:u,pageResources:d.default.getResourcesForPathname(u.pathname)},o}return u(t,e),t.prototype.componentWillReceiveProps=function(e){var t=this;if(this.state.location.pathname!==e.location.pathname){var n=d.default.getResourcesForPathname(e.location.pathname);if(n)this.setState({location:e.location,pageResources:n});else{var o=e.location;d.default.getPage(o.pathname)||(o=i({},o,{pathname:"/404.html"})),d.default.getResourcesForPathname(o.pathname,function(e){t.setState({location:o,pageResources:e})})}}},t.prototype.componentDidMount=function(){var e=this;g.default.on("onPostLoadPageResources",function(t){d.default.getPage(e.state.location.pathname)&&t.page.path===d.default.getPage(e.state.location.pathname).path&&e.setState({pageResources:t.pageResources})})},t.prototype.shouldComponentUpdate=function(e,t){return!t.pageResources||(!(this.state.pageResources||!t.pageResources)||(this.state.pageResources.component!==t.pageResources.component||(this.state.pageResources.json!==t.pageResources.json||!(this.state.location.key===t.location.key||!t.pageResources.page||!t.pageResources.page.matchPath&&!t.pageResources.page.path))))},t.prototype.render=function(){var e=(0,m.apiRunner)("replaceComponentRenderer",{props:i({},this.props,{pageResources:this.state.pageResources}),loader:p.publicLoader}),t=e[0];return this.props.page?this.state.pageResources?t||(0,c.createElement)(this.state.pageResources.component,i({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?t||(0,c.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:v,i({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},t}(s.default.Component);y.propTypes={page:f.default.bool,layout:f.default.bool,location:f.default.object},t.default=y,e.exports=t.default},46:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(290),a=o(r),u=(0,a.default)();e.exports=u},173:function(e,t,n){"use strict";var o=n(62),r={};e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(n){var a=decodeURIComponent(n),u=a.slice(t.length);if(u.split("#").length>1&&(u=u.split("#").slice(0,-1).join("")),u.split("?").length>1&&(u=u.split("?").slice(0,-1).join("")),r[u])return r[u];var i=void 0;return e.some(function(e){if(e.matchPath){if((0,o.matchPath)(u,{path:e.path})||(0,o.matchPath)(u,{path:e.matchPath}))return i=e,r[u]=e,!0}else{if((0,o.matchPath)(u,{path:e.path,exact:!0}))return i=e,r[u]=e,!0;if((0,o.matchPath)(u,{path:e.path+"index.html"}))return i=e,r[u]=e,!0}return!1}),i}}},174:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(86),a=o(r),u=n(63),i=(0,u.apiRunner)("replaceHistory"),c=i[0],s=c||(0,a.default)();e.exports=s},276:function(e,t,n){n(20),e.exports=function(e){return n.e(62788297955441,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(285)})})}},277:function(e,t,n){n(20),e.exports=function(e){return n.e(0x81b8806e4260,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(286)})})}},85:function(e,t,n){n(20),e.exports=function(e){return n.e(60335399758886,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(89)})})}},278:function(e,t,n){n(20),e.exports=function(e){return n.e(0x7b71d9db271c,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(287)})})}},272:function(e,t,n){n(20),e.exports=function(e){return n.e(0x67ef26645b2a,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(175)})})}},110:function(e,t,n){(function(e){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.publicLoader=void 0;var r=n(4),a=(o(r),n(173)),u=o(a),i=n(46),c=o(i),s=void 0,l={},f={},p={},d={},h={},g=[],m=[],v={},y=[],R={},P=function(e){return e&&e.default||e},w=void 0,_=!0,b=[],x={},j={},E=5;w=n(176)({getNextQueuedResources:function(){return y.slice(-1)[0]},createResourceDownload:function(e){N(e,function(){y=y.filter(function(t){return t!==e}),w.onResourcedFinished(e)})}}),c.default.on("onPreLoadPageResources",function(e){w.onPreLoadPageResources(e)}),c.default.on("onPostLoadPageResources",function(e){w.onPostLoadPageResources(e)});var O=function(e,t){return R[e]>R[t]?1:R[e]<R[t]?-1:0},C=function(e,t){return v[e]>v[t]?1:v[e]<v[t]?-1:0},N=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(d[t])e.nextTick(function(){n(null,d[t])});else{var o=void 0;o="component---"===t.slice(0,12)?f.components[t]:"layout---"===t.slice(0,9)?f.layouts[t]:f.json[t],o(function(e,o){d[t]=o,b.push({resource:t,succeeded:!e}),j[t]||(j[t]=e),b=b.slice(-E),n(e,o)})}},k=function(t,n){h[t]?e.nextTick(function(){n(null,h[t])}):j[t]?e.nextTick(function(){n(j[t])}):N(t,function(e,o){if(e)n(e);else{var r=P(o());h[t]=r,n(e,r)}})},T=function(){var e=navigator.onLine;if("boolean"==typeof e)return e;var t=b.find(function(e){return e.succeeded});return!!t},L=function(e,t){console.log(t),x[e]||(x[e]=t),T()&&window.location.pathname.replace(/\/$/g,"")!==e.replace(/\/$/g,"")&&(window.location.pathname=e)},S=1,A={empty:function(){m=[],v={},R={},y=[],g=[]},addPagesArray:function(e){g=e;var t="";t="",s=(0,u.default)(e,t)},addDevRequires:function(e){l=e},addProdRequires:function(e){f=e},dequeue:function(e){return m.pop()},enqueue:function(e){if(!g.some(function(t){return t.path===e}))return!1;var t=1/S;S+=1,v[e]?v[e]+=1:v[e]=1,A.has(e)||m.unshift(e),m.sort(C);var n=s(e);return n.jsonName&&(R[n.jsonName]?R[n.jsonName]+=1+t:R[n.jsonName]=1+t,y.indexOf(n.jsonName)!==-1||d[n.jsonName]||y.unshift(n.jsonName)),n.componentChunkName&&(R[n.componentChunkName]?R[n.componentChunkName]+=1+t:R[n.componentChunkName]=1+t,y.indexOf(n.componentChunkName)!==-1||d[n.jsonName]||y.unshift(n.componentChunkName)),y.sort(O),w.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:y,resourcesCount:R}},getPages:function(){return{pathArray:m,pathCount:v}},getPage:function(e){return s(e)},has:function(e){return m.some(function(t){return t===e})},getResourcesForPathname:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};_&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(s(t)||navigator.serviceWorker.getRegistrations().then(function(e){if(e.length){for(var t=e,n=Array.isArray(t),o=0,t=n?t:t[Symbol.iterator]();;){var r;if(n){if(o>=t.length)break;r=t[o++]}else{if(o=t.next(),o.done)break;r=o.value}var a=r;a.unregister()}window.location.reload()}})),_=!1;if(x[t])return L(t,'Previously detected load failure for "'+t+'"'),n();var o=s(t);if(!o)return L(t,"A page wasn't found for \""+t+'"'),n();if(t=o.path,p[t])return e.nextTick(function(){n(p[t]),c.default.emit("onPostLoadPageResources",{page:o,pageResources:p[t]})}),p[t];c.default.emit("onPreLoadPageResources",{path:t});var r=void 0,a=void 0,u=void 0,i=function(){if(r&&a&&(!o.layoutComponentChunkName||u)){p[t]={component:r,json:a,layout:u,page:o};var e={component:r,json:a,layout:u,page:o};n(e),c.default.emit("onPostLoadPageResources",{page:o,pageResources:e})}};return k(o.componentChunkName,function(e,t){e&&L(o.path,"Loading the component for "+o.path+" failed"),r=t,i()}),k(o.jsonName,function(e,t){e&&L(o.path,"Loading the JSON for "+o.path+" failed"),a=t,i()}),void(o.layoutComponentChunkName&&k(o.layout,function(e,t){e&&L(o.path,"Loading the Layout for "+o.path+" failed"),u=t,i()}))},peek:function(e){return m.slice(-1)[0]},length:function(){return m.length},indexOf:function(e){return m.length-m.indexOf(e)-1}};t.publicLoader={getResourcesForPathname:A.getResourcesForPathname};t.default=A}).call(t,n(90))},288:function(e,t){e.exports=[{componentChunkName:"component---src-pages-counter-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"counter.json",path:"/counter/"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-page-2-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"page-2.json",path:"/page-2/"}]},176:function(e,t){"use strict";e.exports=function(e){var t=e.getNextQueuedResources,n=e.createResourceDownload,o=[],r=[],a=function(){var e=t();e&&(r.push(e),n(e))},u=function(e){switch(e.type){case"RESOURCE_FINISHED":r=r.filter(function(t){return t!==e.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(e.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(t){return t!==e.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&a()},0)};return{onResourcedFinished:function(e){u({type:"RESOURCE_FINISHED",payload:e})},onPreLoadPageResources:function(e){u({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:e})},onPostLoadPageResources:function(e){u({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:e})},onNewResourcesAdded:function(){u({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},a=n(63),u=n(4),i=o(u),c=n(141),s=o(c),l=n(62),f=n(282),p=n(258),d=o(p),h=n(174),g=o(h),m=n(46),v=o(m),y=n(288),R=o(y),P=n(289),w=o(P),_=n(172),b=o(_),x=n(171),j=o(x),E=n(110),O=o(E);n(251),window.___emitter=v.default,O.default.addPagesArray(R.default),O.default.addProdRequires(j.default),window.asyncRequires=j.default,window.___loader=O.default,window.matchPath=l.matchPath;var C=w.default.reduce(function(e,t){return e[t.fromPath]=t,e},{}),N=function(e){var t=C[e];return null!=t&&(g.default.replace(t.toPath),!0)};N(window.location.pathname),(0,a.apiRunnerAsync)("onClientEntry").then(function(){function e(e){window.___history||(window.___history=e,e.listen(function(e,t){N(e.pathname)||(0,a.apiRunner)("onRouteUpdate",{location:e,action:t})}))}function t(e,t){var n=t.location.pathname,o=(0,a.apiRunner)("shouldUpdateScroll",{prevRouterProps:e,pathname:n});if(o.length>0)return o[0];if(e){var r=e.location.pathname;if(r===n)return!1}return!0}(0,a.apiRunner)("registerServiceWorker").length>0&&n(177);var o=function(e){function t(n){n.page.path===O.default.getPage(e).path&&(v.default.off("onPostLoadPageResources",t),clearTimeout(o),window.___history.push(e))}var n=C[e];if(n&&(e=n.toPath),window.location.pathname!==e){var o=setTimeout(function(){v.default.off("onPostLoadPageResources",t),v.default.emit("onDelayedLoadPageResources",{pathname:e}),window.___history.push(e)},1e3);O.default.getResourcesForPathname(e)?(clearTimeout(o),window.___history.push(e)):v.default.on("onPostLoadPageResources",t)}};window.___navigateTo=o,(0,a.apiRunner)("onRouteUpdate",{location:g.default.location,action:g.default.action});var c=(0,a.apiRunner)("replaceRouterComponent",{history:g.default})[0],p=function(e){var t=e.children;return i.default.createElement(l.Router,{history:g.default},t)},h=(0,l.withRouter)(b.default);O.default.getResourcesForPathname(window.location.pathname,function(){var n=function(){return(0,u.createElement)(c?c:p,null,(0,u.createElement)(f.ScrollContext,{shouldUpdateScroll:t},(0,u.createElement)(h,{layout:!0,children:function(t){return(0,u.createElement)(l.Route,{render:function(n){e(n.history);var o=t?t:n;return O.default.getPage(o.location.pathname)?(0,u.createElement)(b.default,r({page:!0},o)):(0,u.createElement)(b.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,a.apiRunner)("wrapRootComponent",{Root:n},n)[0];(0,d.default)(function(){return s.default.render(i.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,a.apiRunner)("onInitialClientRender")})})})})},289:function(e,t){e.exports=[]},177:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}var r=n(46),a=o(r),u="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(u+"sw.js").then(function(e){e.addEventListener("updatefound",function(){var t=e.installing;console.log("installingWorker",t),t.addEventListener("statechange",function(){switch(t.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),a.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(e){console.error("Error during service worker registration:",e)})},258:function(e,t,n){!function(t,n){e.exports=n()}("domready",function(){var e,t=[],n=document,o=n.documentElement.doScroll,r="DOMContentLoaded",a=(o?/^loaded|^c/:/^loaded|^i|^c/).test(n.readyState);return a||n.addEventListener(r,e=function(){for(n.removeEventListener(r,e),a=1;e=t.shift();)e()}),function(e){a?setTimeout(e,0):t.push(e)}})},20:function(e,t,n){"use strict";function o(){function e(e){var t=o.lastChild;return"SCRIPT"!==t.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",t)):void(t.onload=t.onerror=function(){t.onload=t.onerror=null,setTimeout(e,0)})}var t,o=document.querySelector("head"),r=n.e,a=n.s;n.e=function(o,u){var i=!1,c=!0,s=function(e){u&&(u(n,e),u=null)};return!a&&t&&t[o]?void s(!0):(r(o,function(){i||(i=!0,c?setTimeout(function(){s()}):s())}),void(i||(c=!1,e(function(){i||(i=!0,a?a[o]=void 0:(t||(t={}),t[o]=!0),s(!0))}))))}}o()},88:function(e,t){"use strict";var n={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,mixins:!0,propTypes:!0,type:!0},o={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r=Object.defineProperty,a=Object.getOwnPropertyNames,u=Object.getOwnPropertySymbols,i=Object.getOwnPropertyDescriptor,c=Object.getPrototypeOf,s=c&&c(Object);e.exports=function e(t,l,f){if("string"!=typeof l){if(s){var p=c(l);p&&p!==s&&e(t,p,f)}var d=a(l);u&&(d=d.concat(u(l)));for(var h=0;h<d.length;++h){var g=d[h];if(!(n[g]||o[g]||f&&f[g])){var m=i(l,g);try{r(t,g,m)}catch(e){}}}return t}return t}},290:function(e,t){function n(e){return e=e||Object.create(null),{on:function(t,n){(e[t]||(e[t]=[])).push(n)},off:function(t,n){e[t]&&e[t].splice(e[t].indexOf(n)>>>0,1)},emit:function(t,n){(e[t]||[]).slice().map(function(e){e(n)}),(e["*"]||[]).slice().map(function(e){e(t,n)})}}}e.exports=n},90:function(e,t){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(e){if(l===setTimeout)return setTimeout(e,0);if((l===n||!l)&&setTimeout)return l=setTimeout,setTimeout(e,0);try{return l(e,0)}catch(t){try{return l.call(null,e,0)}catch(t){return l.call(this,e,0)}}}function a(e){if(f===clearTimeout)return clearTimeout(e);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(e);try{return f(e)}catch(t){try{return f.call(null,e)}catch(t){return f.call(this,e)}}}function u(){g&&d&&(g=!1,d.length?h=d.concat(h):m=-1,h.length&&i())}function i(){if(!g){var e=r(u);g=!0;for(var t=h.length;t;){for(d=h,h=[];++m<t;)d&&d[m].run();m=-1,t=h.length}d=null,g=!1,a(e)}}function c(e,t){this.fun=e,this.array=t}function s(){}var l,f,p=e.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:n}catch(e){l=n}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(e){f=o}}();var d,h=[],g=!1,m=-1;p.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];h.push(new c(e,t)),1!==h.length||g||r(i)},c.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=s,p.addListener=s,p.once=s,p.off=s,p.removeListener=s,p.removeAllListeners=s,p.emit=s,p.prependListener=s,p.prependOnceListener=s,p.listeners=function(e){return[]},p.binding=function(e){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(e){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},273:function(e,t,n){n(20),e.exports=function(e){return n.e(96596616492619,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(180)})})}},274:function(e,t,n){n(20),e.exports=function(e){return n.e(35783957827783,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(181)})})}},275:function(e,t,n){n(20),e.exports=function(e){return n.e(0xc6c285f8fd10,function(t,o){o?(console.log("bundle loading error",o),e(!0)):e(null,function(){return n(182)})})}}});
//# sourceMappingURL=app-4f7e900a31077098cafb.js.map