/*! modernizr 3.11.2 (Custom Build) | MIT *
 * https://modernizr.com/download/?-cssanimations-csscolumns-customelements-flexbox-history-picture-pointerevents-postmessage-sizes-srcset-webgl-websockets-webworkers-addtest-domprefixes-hasevent-mq-prefixedcssvalue-prefixes-setclasses-testallprops-testprop-teststyles !*/
!function(e,t,n,r){function o(e,t){return typeof e===t}function i(e){var t=C.className,n=y._config.classPrefix||"";if(b&&(t=t.baseVal),y._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}y._config.enableClasses&&(e.length>0&&(t+=" "+n+e.join(" "+n)),b?C.className.baseVal=t:C.className=t)}function s(e,t){if("object"==typeof e)for(var n in e)_(e,n)&&s(n,e[n]);else{var r=(e=e.toLowerCase()).split("."),o=y[r[0]];if(2===r.length&&(o=o[r[1]]),void 0!==o)return y;t="function"==typeof t?t():t,1===r.length?y[r[0]]=t:(!y[r[0]]||y[r[0]]instanceof Boolean||(y[r[0]]=new Boolean(y[r[0]])),y[r[0]][r[1]]=t),i([(t&&!1!==t?"":"no-")+r.join("-")]),y._trigger(e,t)}return y}function a(){return"function"!=typeof n.createElement?n.createElement(arguments[0]):b?n.createElementNS.call(n,"http://www.w3.org/2000/svg",arguments[0]):n.createElement.apply(n,arguments)}function l(e,t,r,o){var i,s,l,u,f="modernizr",d=a("div"),c=function(){var e=n.body;return e||((e=a(b?"svg":"body")).fake=!0),e}();if(parseInt(r,10))for(;r--;)(l=a("div")).id=o?o[r]:f+(r+1),d.appendChild(l);return(i=a("style")).type="text/css",i.id="s"+f,(c.fake?c:d).appendChild(i),c.appendChild(d),i.styleSheet?i.styleSheet.cssText=e:i.appendChild(n.createTextNode(e)),d.id=f,c.fake&&(c.style.background="",c.style.overflow="hidden",u=C.style.overflow,C.style.overflow="hidden",C.appendChild(c)),s=t(d,e),c.fake?(c.parentNode.removeChild(c),C.style.overflow=u,C.offsetHeight):d.parentNode.removeChild(d),!!s}function u(e,n,r){var o;if("getComputedStyle"in t){o=getComputedStyle.call(t,e,n);var i=t.console;if(null!==o)r&&(o=o.getPropertyValue(r));else if(i){i[i.error?"error":"log"].call(i,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else o=!n&&e.currentStyle&&e.currentStyle[r];return o}function f(e,t){return!!~(""+e).indexOf(t)}function d(e){return e.replace(/([A-Z])/g,(function(e,t){return"-"+t.toLowerCase()})).replace(/^ms-/,"-ms-")}function c(e){return e.replace(/([a-z])-([a-z])/g,(function(e,t,n){return t+n.toUpperCase()})).replace(/^-/,"")}function p(e,n,i,s){function p(){m&&(delete N.style,delete N.modElem)}if(s=!o(s,"undefined")&&s,!o(i,"undefined")){var A=function(e,n){var o=e.length;if("CSS"in t&&"supports"in t.CSS){for(;o--;)if(t.CSS.supports(d(e[o]),n))return!0;return!1}if("CSSSupportsRule"in t){for(var i=[];o--;)i.push("("+d(e[o])+":"+n+")");return l("@supports ("+(i=i.join(" or "))+") { #modernizr { position: absolute; } }",(function(e){return"absolute"===u(e,null,"position")}))}return r}(e,i);if(!o(A,"undefined"))return A}for(var m,h,g,v,y,w=["modernizr","tspan","samp"];!N.style&&w.length;)m=!0,N.modElem=a(w.shift()),N.style=N.modElem.style;for(g=e.length,h=0;h<g;h++)if(v=e[h],y=N.style[v],f(v,"-")&&(v=c(v)),N.style[v]!==r){if(s||o(i,"undefined"))return p(),"pfx"!==n||v;try{N.style[v]=i}catch(e){}if(N.style[v]!==y)return p(),"pfx"!==n||v}return p(),!1}function A(e,t){return function(){return e.apply(t,arguments)}}function m(e,t,n,r,i){var s=e.charAt(0).toUpperCase()+e.slice(1),a=(e+" "+z.join(s+" ")+s).split(" ");return o(t,"string")||o(t,"undefined")?p(a,t,r,i):function(e,t,n){var r;for(var i in e)if(e[i]in t)return!1===n?e[i]:o(r=t[e[i]],"function")?A(r,n||t):r;return!1}(a=(e+" "+x.join(s+" ")+s).split(" "),t,n)}function h(e,t,n){return m(e,r,r,t,n)}var g=[],v={_version:"3.11.2",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout((function(){t(n[e])}),0)},addTest:function(e,t,n){g.push({name:e,fn:t,options:n})},addAsyncTest:function(e){g.push({name:null,fn:e})}},y=function(){};y.prototype=v,y=new y;var w=[],C=n.documentElement,b="svg"===C.nodeName.toLowerCase(),S="Moz O ms Webkit",x=v._config.usePrefixes?S.toLowerCase().split(" "):[];v._domPrefixes=x;var _,T,P=v._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];v._prefixes=P,_=o(T={}.hasOwnProperty,"undefined")||o(T.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return T.call(e,t)},v._l={},v.on=function(e,t){this._l[e]||(this._l[e]=[]),this._l[e].push(t),y.hasOwnProperty(e)&&setTimeout((function(){y._trigger(e,y[e])}),0)},v._trigger=function(e,t){if(this._l[e]){var n=this._l[e];setTimeout((function(){var e;for(e=0;e<n.length;e++)(0,n[e])(t)}),0),delete this._l[e]}},y._q.push((function(){v.addTest=s}));var B,k=(B=!("onblur"in C),function(e,t){var n;return!!e&&(t&&"string"!=typeof t||(t=a(t||"div")),!(n=(e="on"+e)in t)&&B&&(t.setAttribute||(t=a("div")),t.setAttribute(e,""),n="function"==typeof t[e],t[e]!==r&&(t[e]=r),t.removeAttribute(e)),n)});v.hasEvent=k;var E,O=(E=t.matchMedia||t.msMatchMedia)?function(e){var t=E(e);return t&&t.matches||!1}:function(e){var t=!1;return l("@media "+e+" { #modernizr { position: absolute; } }",(function(e){t="absolute"===u(e,null,"position")})),t};v.mq=O;v.prefixedCSSValue=function(e,t){var n=!1,r=a("div").style;if(e in r){var o=x.length;for(r[e]=t,n=r[e];o--&&!n;)r[e]="-"+x[o]+"-"+t,n=r[e]}return""===n&&(n=!1),n};var z=v._config.usePrefixes?S.split(" "):[];v._cssomPrefixes=z;var L={elem:a("modernizr")};y._q.push((function(){delete L.elem}));var N={style:L.elem.style};y._q.unshift((function(){delete N.style})),v.testAllProps=m,v.testAllProps=h,v.testProp=function(e,t,n){return p([e],r,t,n)},v.testStyles=l,y.addTest("customelements","customElements"in t),y.addTest("history",(function(){var e=navigator.userAgent;return!!e&&(-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone")||"file:"===location.protocol)&&t.history&&"pushState"in t.history}));var R=[""].concat(x);v._domPrefixesAll=R,y.addTest("pointerevents",(function(){for(var e=0,t=R.length;e<t;e++)if(k(R[e]+"pointerdown"))return!0;return!1}));var j=!0;try{t.postMessage({toString:function(){j=!1}},"*")}catch(e){}y.addTest("postmessage",new Boolean("postMessage"in t)),y.addTest("postmessage.structuredclones",j),y.addTest("webgl",(function(){return"WebGLRenderingContext"in t}));var M=!1;try{M="WebSocket"in t&&2===t.WebSocket.CLOSING}catch(e){}y.addTest("websockets",M),y.addTest("cssanimations",h("animationName","a",!0)),function(){y.addTest("csscolumns",(function(){var e=!1,t=h("columnCount");try{(e=!!t)&&(e=new Boolean(e))}catch(e){}return e}));for(var e,t,n=["Width","Span","Fill","Gap","Rule","RuleColor","RuleStyle","RuleWidth","BreakBefore","BreakAfter","BreakInside"],r=0;r<n.length;r++)e=n[r].toLowerCase(),t=h("column"+n[r]),"breakbefore"!==e&&"breakafter"!==e&&"breakinside"!==e||(t=t||h(n[r])),y.addTest("csscolumns."+e,t)}(),y.addTest("flexbox",h("flexBasis","1px",!0)),y.addTest("picture","HTMLPictureElement"in t),y.addAsyncTest((function(){var e,t,n=a("img"),r="sizes"in n;!r&&"srcset"in n?("data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==",e="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",t=function(){s("sizes",2===n.width)},n.onload=t,n.onerror=t,n.setAttribute("sizes","9px"),n.srcset=e+" 1w,data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw== 8w",n.src=e):s("sizes",r)})),y.addTest("srcset","srcset"in a("img")),y.addTest("webworkers","Worker"in t),function(){var e,t,n,r,i,s;for(var a in g)if(g.hasOwnProperty(a)){if(e=[],(t=g[a]).name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(r=o(t.fn,"function")?t.fn():t.fn,i=0;i<e.length;i++)1===(s=e[i].split(".")).length?y[s[0]]=r:(y[s[0]]&&(!y[s[0]]||y[s[0]]instanceof Boolean)||(y[s[0]]=new Boolean(y[s[0]])),y[s[0]][s[1]]=r),w.push((r?"":"no-")+s.join("-"))}}(),i(w),delete v.addTest,delete v.addAsyncTest;for(var W=0;W<y._q.length;W++)y._q[W]();e.Modernizr=y}(window,window,document);
//# sourceMappingURL=index.b59505ec.js.map
