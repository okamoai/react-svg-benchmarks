(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,s,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(4186)}])},1551:function(e,s,n){"use strict";function r(e,s){(null==s||s>e.length)&&(s=e.length);for(var n=0,r=new Array(s);n<s;n++)r[n]=e[n];return r}function t(e,s){return function(e){if(Array.isArray(e))return e}(e)||function(e,s){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,t,d=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(d.push(r.value),!s||d.length!==s);i=!0);}catch(c){l=!0,t=c}finally{try{i||null==n.return||n.return()}finally{if(l)throw t}}return d}}(e,s)||function(e,s){if(!e)return;if("string"===typeof e)return r(e,s);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,s)}(e,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(s,"__esModule",{value:!0}),s.default=void 0;var d,i=(d=n(7294))&&d.__esModule?d:{default:d},l=n(1003),c=n(880),h=n(9246);function j(e,s){if(null==e)return{};var n,r,t=function(e,s){if(null==e)return{};var n,r,t={},d=Object.keys(e);for(r=0;r<d.length;r++)n=d[r],s.indexOf(n)>=0||(t[n]=e[n]);return t}(e,s);if(Object.getOwnPropertySymbols){var d=Object.getOwnPropertySymbols(e);for(r=0;r<d.length;r++)n=d[r],s.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var x={};function a(e,s,n,r){if(e&&l.isLocalURL(s)){e.prefetch(s,n,r).catch((function(e){0}));var t=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;x[s+"%"+n+(t?"%"+t:"")]=!0}}var o=i.default.forwardRef((function(e,s){var n,r=e.legacyBehavior,d=void 0===r?!0!==Boolean(!1):r,o=e.href,m=e.as,u=e.children,f=e.prefetch,p=e.passHref,g=e.replace,S=e.shallow,y=e.scroll,b=e.locale,v=e.onClick,I=e.onMouseEnter,k=j(e,["href","as","children","prefetch","passHref","replace","shallow","scroll","locale","onClick","onMouseEnter"]);n=u,d&&"string"===typeof n&&(n=i.default.createElement("a",null,n));var B,C=!1!==f,N=c.useRouter(),M=i.default.useMemo((function(){var e=t(l.resolveHref(N,o,!0),2),s=e[0],n=e[1];return{href:s,as:m?l.resolveHref(N,m):n||s}}),[N,o,m]),w=M.href,O=M.as,_=i.default.useRef(w),E=i.default.useRef(O);d&&(B=i.default.Children.only(n));var G=d?B&&"object"===typeof B&&B.ref:s,L=t(h.useIntersection({rootMargin:"200px"}),3),T=L[0],P=L[1],V=L[2],A=i.default.useCallback((function(e){E.current===O&&_.current===w||(V(),E.current=O,_.current=w),T(e),G&&("function"===typeof G?G(e):"object"===typeof G&&(G.current=e))}),[O,G,w,V,T]);i.default.useEffect((function(){var e=P&&C&&l.isLocalURL(w),s="undefined"!==typeof b?b:N&&N.locale,n=x[w+"%"+O+(s?"%"+s:"")];e&&!n&&a(N,w,O,{locale:s})}),[O,w,P,b,C,N]);var R={ref:A,onClick:function(e){d||"function"!==typeof v||v(e),d&&B.props&&"function"===typeof B.props.onClick&&B.props.onClick(e),e.defaultPrevented||function(e,s,n,r,t,d,i,c){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var s=e.currentTarget.target;return s&&"_self"!==s||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&l.isLocalURL(n))&&(e.preventDefault(),s[t?"replace":"push"](n,r,{shallow:d,locale:c,scroll:i}))}(e,N,w,O,g,S,y,b)},onMouseEnter:function(e){d||"function"!==typeof I||I(e),d&&B.props&&"function"===typeof B.props.onMouseEnter&&B.props.onMouseEnter(e),l.isLocalURL(w)&&a(N,w,O,{priority:!0})}};if(!d||p||"a"===B.type&&!("href"in B.props)){var H="undefined"!==typeof b?b:N&&N.locale,U=N&&N.isLocaleDomain&&l.getDomainLocale(O,H,N&&N.locales,N&&N.domainLocales);R.href=U||l.addBasePath(l.addLocale(O,H,N&&N.defaultLocale))}return d?i.default.cloneElement(B,R):i.default.createElement("a",Object.assign({},k,R),n)}));s.default=o,("function"===typeof s.default||"object"===typeof s.default&&null!==s.default)&&(Object.assign(s.default,s),e.exports=s.default)},9246:function(e,s,n){"use strict";function r(e,s){(null==s||s>e.length)&&(s=e.length);for(var n=0,r=new Array(s);n<s;n++)r[n]=e[n];return r}function t(e,s){return function(e){if(Array.isArray(e))return e}(e)||function(e,s){var n=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,t,d=[],i=!0,l=!1;try{for(n=n.call(e);!(i=(r=n.next()).done)&&(d.push(r.value),!s||d.length!==s);i=!0);}catch(c){l=!0,t=c}finally{try{i||null==n.return||n.return()}finally{if(l)throw t}}return d}}(e,s)||function(e,s){if(!e)return;if("string"===typeof e)return r(e,s);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,s)}(e,s)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(s,"__esModule",{value:!0}),s.useIntersection=function(e){var s=e.rootRef,n=e.rootMargin,r=e.disabled||!l,j=d.useRef(),x=t(d.useState(!1),2),a=x[0],o=x[1],m=t(d.useState(s?s.current:null),2),u=m[0],f=m[1],p=d.useCallback((function(e){j.current&&(j.current(),j.current=void 0),r||a||e&&e.tagName&&(j.current=function(e,s,n){var r=function(e){var s,n={root:e.root||null,margin:e.rootMargin||""},r=h.find((function(e){return e.root===n.root&&e.margin===n.margin}));r?s=c.get(r):(s=c.get(n),h.push(n));if(s)return s;var t=new Map,d=new IntersectionObserver((function(e){e.forEach((function(e){var s=t.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;s&&n&&s(n)}))}),e);return c.set(n,s={id:n,observer:d,elements:t}),s}(n),t=r.id,d=r.observer,i=r.elements;return i.set(e,s),d.observe(e),function(){if(i.delete(e),d.unobserve(e),0===i.size){d.disconnect(),c.delete(t);var s=h.findIndex((function(e){return e.root===t.root&&e.margin===t.margin}));s>-1&&h.splice(s,1)}}}(e,(function(e){return e&&o(e)}),{root:u,rootMargin:n}))}),[r,u,n,a]),g=d.useCallback((function(){o(!1)}),[]);return d.useEffect((function(){if(!l&&!a){var e=i.requestIdleCallback((function(){return o(!0)}));return function(){return i.cancelIdleCallback(e)}}}),[a]),d.useEffect((function(){s&&f(s.current)}),[s]),[p,a,g]};var d=n(7294),i=n(4686),l="undefined"!==typeof IntersectionObserver;var c=new Map,h=[];("function"===typeof s.default||"object"===typeof s.default&&null!==s.default)&&(Object.assign(s.default,s),e.exports=s.default)},4186:function(e,s,n){"use strict";n.r(s);var r=n(5893),t=n(1664),d=n.n(t),i=n(9008),l=n.n(i),c=n(4848),h=n.n(c);s.default=function(){return(0,r.jsxs)("main",{children:[(0,r.jsx)(l(),{children:(0,r.jsx)("title",{children:"Next.js x SVG Icon benchmarks"})}),(0,r.jsx)("h1",{children:"Next.js x SVG Icon benchmarks"}),(0,r.jsx)("h2",{children:"Static SVG Icon (render 250 items)"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(d(),{href:"/static/inline-svg/",children:(0,r.jsx)("a",{children:"Inline SVG"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(d(),{href:"/static/svg-sprite/",children:(0,r.jsx)("a",{children:"SVG Sprite"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(d(),{href:"/static/img/",children:(0,r.jsx)("a",{children:"Img"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(d(),{href:"/static/img-base64/",children:(0,r.jsx)("a",{children:"Img Base64"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(d(),{href:"/static/css-base64/",children:(0,r.jsx)("a",{children:"CSS Base64"})})})]}),(0,r.jsxs)("table",{className:h().table,children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{}),(0,r.jsx)("td",{children:"Inline SVG"}),(0,r.jsx)("td",{children:"SVG Sprite"}),(0,r.jsx)("td",{children:"Img"}),(0,r.jsx)("td",{children:"Img Base64"}),(0,r.jsx)("td",{children:"CSS Base64"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"HTML size (external file size)"}),(0,r.jsx)("td",{children:"297 kB"}),(0,r.jsx)("td",{children:"29 kB"}),(0,r.jsxs)("td",{children:["20.9 kB",(0,r.jsx)("br",{}),"(IMG 3 kB)"]}),(0,r.jsx)("td",{children:"410 kB"}),(0,r.jsxs)("td",{children:["21.3 kB",(0,r.jsx)("br",{}),"(CSS 2 kB)"]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"DOM elements"}),(0,r.jsx)("td",{children:"3,256"}),(0,r.jsx)("td",{children:"521"}),(0,r.jsx)("td",{children:"256"}),(0,r.jsx)("td",{children:"256"}),(0,r.jsx)("td",{children:"256"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"First Contentful Paint"}),(0,r.jsx)("td",{children:"2.1 s"}),(0,r.jsx)("td",{children:"0.8 s"}),(0,r.jsx)("td",{children:"0.8 s"}),(0,r.jsx)("td",{children:"2.6 s"}),(0,r.jsx)("td",{children:"0.9 s"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Speed Index"}),(0,r.jsx)("td",{children:"2.3 s"}),(0,r.jsx)("td",{children:"0.9 s"}),(0,r.jsx)("td",{children:"0.8 s"}),(0,r.jsx)("td",{children:"2.6 s"}),(0,r.jsx)("td",{children:"0.9 s"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Time to Interactive"}),(0,r.jsx)("td",{children:"4.6 s"}),(0,r.jsx)("td",{children:"3.1 s"}),(0,r.jsx)("td",{children:"2.5 s"}),(0,r.jsx)("td",{children:"3.9 s"}),(0,r.jsx)("td",{children:"2.1 s"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Total Blocking Time"}),(0,r.jsx)("td",{children:"247 ms"}),(0,r.jsx)("td",{children:"100 ms"}),(0,r.jsx)("td",{children:"27 ms"}),(0,r.jsx)("td",{children:"13 ms"}),(0,r.jsx)("td",{children:"10 ms"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"main thread work"}),(0,r.jsx)("td",{children:"0.9 s"}),(0,r.jsx)("td",{children:"0.8 s"}),(0,r.jsx)("td",{children:"0.4 s"}),(0,r.jsx)("td",{children:"0.4 s"}),(0,r.jsx)("td",{children:"0.3 s"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:h().indent,children:"Script Parsing & Compilation"}),(0,r.jsx)("td",{children:"14 ms"}),(0,r.jsx)("td",{children:"15 ms"}),(0,r.jsx)("td",{children:"12 ms"}),(0,r.jsx)("td",{children:"14 ms"}),(0,r.jsx)("td",{children:"12 ms"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:h().indent,children:"Script Evaluation"}),(0,r.jsx)("td",{children:"272 ms"}),(0,r.jsx)("td",{children:"217 ms"}),(0,r.jsx)("td",{children:"159 ms"}),(0,r.jsx)("td",{children:"186 ms"}),(0,r.jsx)("td",{children:"120 ms"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:h().indent,children:"Parse HTML & CSS"}),(0,r.jsx)("td",{children:"117 ms"}),(0,r.jsx)("td",{children:"31 ms"}),(0,r.jsx)("td",{children:"77 ms"}),(0,r.jsx)("td",{children:"51 ms"}),(0,r.jsx)("td",{children:"10 ms"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:h().indent,children:"Style & Layout"}),(0,r.jsx)("td",{children:"152 ms"}),(0,r.jsx)("td",{children:"230 ms"}),(0,r.jsx)("td",{children:"27 ms"}),(0,r.jsx)("td",{children:"29 ms"}),(0,r.jsx)("td",{children:"41 ms"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:h().indent,children:"Rendering"}),(0,r.jsx)("td",{children:"73 ms"}),(0,r.jsx)("td",{children:"85 ms"}),(0,r.jsx)("td",{children:"35 ms"}),(0,r.jsx)("td",{children:"39 ms"}),(0,r.jsx)("td",{children:"28 ms"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:h().indent,children:"Garbage Collection"}),(0,r.jsx)("td",{children:"14 ms"}),(0,r.jsx)("td",{children:"15 ms"}),(0,r.jsx)("td",{children:"-"}),(0,r.jsx)("td",{children:"-"}),(0,r.jsx)("td",{children:"-"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:h().indent,children:"Other"}),(0,r.jsx)("td",{children:"205 ms"}),(0,r.jsx)("td",{children:"208 ms"}),(0,r.jsx)("td",{children:"143 ms"}),(0,r.jsx)("td",{children:"106 ms"}),(0,r.jsx)("td",{children:"90 ms"})]})]})]}),(0,r.jsx)("h2",{children:"CSS Animation SVG Icon (render 250 items)"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(d(),{href:"/animate-css/inline-svg/",children:(0,r.jsx)("a",{children:"Inline SVG"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(d(),{href:"/animate-css/svg-sprite/",children:(0,r.jsx)("a",{children:"SVG Sprite"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(d(),{href:"/animate-css/img/",children:(0,r.jsx)("a",{children:"Img"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(d(),{href:"/animate-css/img-base64/",children:(0,r.jsx)("a",{children:"Img Base64"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(d(),{href:"/animate-css/css-base64/",children:(0,r.jsx)("a",{children:"CSS Base64"})})})]}),(0,r.jsxs)("table",{className:h().table,children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{}),(0,r.jsx)("td",{children:"Inline SVG"}),(0,r.jsx)("td",{children:"SVG Sprite *"}),(0,r.jsx)("td",{children:"Img"}),(0,r.jsx)("td",{children:"Img Base64"}),(0,r.jsx)("td",{children:"CSS Base64"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"HTML size"}),(0,r.jsx)("td",{children:"457 kB"}),(0,r.jsx)("td",{children:"32 kB"}),(0,r.jsxs)("td",{children:["22.1 kB",(0,r.jsx)("br",{}),"(IMG 3.6 kB)"]}),(0,r.jsx)("td",{children:"624 kB"}),(0,r.jsxs)("td",{children:["21.3 kB",(0,r.jsx)("br",{}),"(CSS 2.9 kB)"]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"DOM elements"}),(0,r.jsx)("td",{children:"3,506"}),(0,r.jsx)("td",{children:"533"}),(0,r.jsx)("td",{children:"256"}),(0,r.jsx)("td",{children:"256"}),(0,r.jsx)("td",{children:"256"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"First Contentful Paint"}),(0,r.jsx)("td",{children:"2.9 s"}),(0,r.jsx)("td",{children:"0.9 s"}),(0,r.jsx)("td",{children:"0.8 s"}),(0,r.jsx)("td",{children:"3.7 s"}),(0,r.jsx)("td",{children:"0.9 s"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Speed Index"}),(0,r.jsx)("td",{children:"9.1 s"}),(0,r.jsx)("td",{children:"5 s"}),(0,r.jsx)("td",{children:"0.8 s"}),(0,r.jsx)("td",{children:"3.7 s"}),(0,r.jsx)("td",{children:"0.9 s"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Time to Interactive"}),(0,r.jsx)("td",{children:"36.4 s"}),(0,r.jsx)("td",{children:"161.8 s"}),(0,r.jsx)("td",{children:"2.2 s"}),(0,r.jsx)("td",{children:"5 s"}),(0,r.jsx)("td",{children:"2.8 s"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Total Blocking Time"}),(0,r.jsx)("td",{children:"28,393 ms"}),(0,r.jsx)("td",{children:"129,960 ms"}),(0,r.jsx)("td",{children:"27 ms"}),(0,r.jsx)("td",{children:"30 ms"}),(0,r.jsx)("td",{children:"30 ms"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"main thread work"}),(0,r.jsx)("td",{children:"47.8 s"}),(0,r.jsx)("td",{children:"162.4 s"}),(0,r.jsx)("td",{children:"1.2 s"}),(0,r.jsx)("td",{children:"1.6 s"}),(0,r.jsx)("td",{children:"1.2 s"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:h().indent,children:"Script Parsing & Compilation"}),(0,r.jsx)("td",{children:"15 ms"}),(0,r.jsx)("td",{children:"14 ms"}),(0,r.jsx)("td",{children:"12 ms"}),(0,r.jsx)("td",{children:"13 ms"}),(0,r.jsx)("td",{children:"15 ms"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:h().indent,children:"Script Evaluation"}),(0,r.jsx)("td",{children:"2,753 ms"}),(0,r.jsx)("td",{children:"638 ms"}),(0,r.jsx)("td",{children:"174 ms"}),(0,r.jsx)("td",{children:"204 ms"}),(0,r.jsx)("td",{children:"142 ms"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:h().indent,children:"Parse HTML & CSS"}),(0,r.jsx)("td",{children:"114 ms"}),(0,r.jsx)("td",{children:"38 ms"}),(0,r.jsx)("td",{children:"82 ms"}),(0,r.jsx)("td",{children:"62 ms"}),(0,r.jsx)("td",{children:"13 ms"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:h().indent,children:"Style & Layout"}),(0,r.jsx)("td",{children:"13,388 ms"}),(0,r.jsx)("td",{children:"90,283 ms"}),(0,r.jsx)("td",{children:"91 ms"}),(0,r.jsx)("td",{children:"102 ms"}),(0,r.jsx)("td",{children:"109 ms"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:h().indent,children:"Rendering"}),(0,r.jsx)("td",{children:"4,928 ms"}),(0,r.jsx)("td",{children:"22,454 ms"}),(0,r.jsx)("td",{children:"681 ms"}),(0,r.jsx)("td",{children:"993 ms"}),(0,r.jsx)("td",{children:"732 ms"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:h().indent,children:"Garbage Collection"}),(0,r.jsx)("td",{children:"103 ms"}),(0,r.jsx)("td",{children:"59 ms"}),(0,r.jsx)("td",{children:"-"}),(0,r.jsx)("td",{children:"-"}),(0,r.jsx)("td",{children:"-"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:h().indent,children:"Other"}),(0,r.jsx)("td",{children:"26,446 ms"}),(0,r.jsx)("td",{children:"48,920 ms"}),(0,r.jsx)("td",{children:"220 ms"}),(0,r.jsx)("td",{children:"206 ms"}),(0,r.jsx)("td",{children:"175 ms"})]})]})]}),(0,r.jsx)("p",{children:"* Issues affecting this run of Lighthouse: The page loaded too slowly to finish within the time limit"}),(0,r.jsx)("h2",{children:"SMIL Animation SVG Icon (render 250 items)"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{children:(0,r.jsx)(d(),{href:"/animate-smil/inline-svg/",children:(0,r.jsx)("a",{children:"Inline SVG"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(d(),{href:"/animate-smil/svg-sprite/",children:(0,r.jsx)("a",{children:"SVG Sprite"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(d(),{href:"/animate-smil/img/",children:(0,r.jsx)("a",{children:"Img"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(d(),{href:"/animate-smil/img-base64/",children:(0,r.jsx)("a",{children:"Img Base64"})})}),(0,r.jsx)("li",{children:(0,r.jsx)(d(),{href:"/animate-smil/css-base64/",children:(0,r.jsx)("a",{children:"CSS Base64"})})})]}),(0,r.jsxs)("table",{className:h().table,children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{}),(0,r.jsx)("td",{children:"Inline SVG"}),(0,r.jsx)("td",{children:"SVG Sprite"}),(0,r.jsx)("td",{children:"Img"}),(0,r.jsx)("td",{children:"Img Base64"}),(0,r.jsx)("td",{children:"CSS Base64"})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"HTML size"}),(0,r.jsx)("td",{children:"620 kB"}),(0,r.jsx)("td",{children:"32 kB"}),(0,r.jsxs)("td",{children:["22.4 kB",(0,r.jsx)("br",{}),"(IMG 4.4 kB)"]}),(0,r.jsx)("td",{children:"861 kB"}),(0,r.jsxs)("td",{children:["21.3 kB",(0,r.jsx)("br",{}),"(CSS 3.8 kB)"]})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"DOM elements"}),(0,r.jsx)("td",{children:"6,256"}),(0,r.jsx)("td",{children:"560"}),(0,r.jsx)("td",{children:"256"}),(0,r.jsx)("td",{children:"256"}),(0,r.jsx)("td",{children:"256"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"First Contentful Paint"}),(0,r.jsx)("td",{children:"3.6 s"}),(0,r.jsx)("td",{children:"0.8 s"}),(0,r.jsx)("td",{children:"0.8 s"}),(0,r.jsx)("td",{children:"4.9 s"}),(0,r.jsx)("td",{children:"0.9 s"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Speed Index"}),(0,r.jsx)("td",{children:"3.7 s"}),(0,r.jsx)("td",{children:"1.4 s"}),(0,r.jsx)("td",{children:"0.8 s"}),(0,r.jsx)("td",{children:"4.9 s"}),(0,r.jsx)("td",{children:"0.9 s"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Time to Interactive"}),(0,r.jsx)("td",{children:"13.1 s"}),(0,r.jsx)("td",{children:"9.1 s"}),(0,r.jsx)("td",{children:"2.2 s"}),(0,r.jsx)("td",{children:"6.2 s"}),(0,r.jsx)("td",{children:"2.2 s"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"Total Blocking Time"}),(0,r.jsx)("td",{children:"6,017 ms"}),(0,r.jsx)("td",{children:"3,833 ms"}),(0,r.jsx)("td",{children:"20 ms"}),(0,r.jsx)("td",{children:"20 ms"}),(0,r.jsx)("td",{children:"10 ms"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:"main thread work"}),(0,r.jsx)("td",{children:"10.2 s"}),(0,r.jsx)("td",{children:"9.7 s"}),(0,r.jsx)("td",{children:"2.7 s"}),(0,r.jsx)("td",{children:"4.1 s"}),(0,r.jsx)("td",{children:"2.7 s"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:h().indent,children:"Script Parsing & Compilation"}),(0,r.jsx)("td",{children:"12 ms"}),(0,r.jsx)("td",{children:"14 ms"}),(0,r.jsx)("td",{children:"11 ms"}),(0,r.jsx)("td",{children:"13 ms"}),(0,r.jsx)("td",{children:"14 ms"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:h().indent,children:"Script Evaluation"}),(0,r.jsx)("td",{children:"336 ms"}),(0,r.jsx)("td",{children:"195 ms"}),(0,r.jsx)("td",{children:"168 ms"}),(0,r.jsx)("td",{children:"206 ms"}),(0,r.jsx)("td",{children:"133 ms"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:h().indent,children:"Parse HTML & CSS"}),(0,r.jsx)("td",{children:"189 ms"}),(0,r.jsx)("td",{children:"24 ms"}),(0,r.jsx)("td",{children:"82 ms"}),(0,r.jsx)("td",{children:"66 ms"}),(0,r.jsx)("td",{children:"12 ms"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:h().indent,children:"Style & Layout"}),(0,r.jsx)("td",{children:"3,280 ms"}),(0,r.jsx)("td",{children:"5,158 ms"}),(0,r.jsx)("td",{children:"73 ms"}),(0,r.jsx)("td",{children:"73 ms"}),(0,r.jsx)("td",{children:"105 ms"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:h().indent,children:"Rendering"}),(0,r.jsx)("td",{children:"788 ms"}),(0,r.jsx)("td",{children:"1,352 ms"}),(0,r.jsx)("td",{children:"2,089 ms"}),(0,r.jsx)("td",{children:"3,490 ms"}),(0,r.jsx)("td",{children:"2,136 ms"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:h().indent,children:"Garbage Collection"}),(0,r.jsx)("td",{children:"13 ms"}),(0,r.jsx)("td",{children:"11 ms"}),(0,r.jsx)("td",{children:"-"}),(0,r.jsx)("td",{children:"-"}),(0,r.jsx)("td",{children:"-"})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:h().indent,children:"Other"}),(0,r.jsx)("td",{children:"5,549 ms"}),(0,r.jsx)("td",{children:"2,973 ms"}),(0,r.jsx)("td",{children:"319 ms"}),(0,r.jsx)("td",{children:"311 ms"}),(0,r.jsx)("td",{children:"288 ms"})]})]})]})]})}},4848:function(e){e.exports={table:"index_table__6dWwS",indent:"index_indent___duMG"}},9008:function(e,s,n){e.exports=n(3121)},1664:function(e,s,n){e.exports=n(1551)}},function(e){e.O(0,[774,888,179],(function(){return s=8312,e(e.s=s);var s}));var s=e.O();_N_E=s}]);