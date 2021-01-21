var app=function(){"use strict";function t(){}const e=t=>t;function n(t,e){for(const n in e)t[n]=e[n];return t}function o(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(o)}function i(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(e,...n){if(null==e)return t;const o=e.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}function u(t,e,n){t.$$.on_destroy.push(c(e,n))}const l="undefined"!=typeof window;let f=l?()=>window.performance.now():()=>Date.now(),p=l?t=>requestAnimationFrame(t):t;const d=new Set;function h(t){d.forEach((e=>{e.c(t)||(d.delete(e),e.f())})),0!==d.size&&p(h)}function g(t){let e;return 0===d.size&&p(h),{promise:new Promise((n=>{d.add(e={c:t,f:n})})),abort(){d.delete(e)}}}function m(t,e){t.appendChild(e)}function $(t,e,n){t.insertBefore(e,n||null)}function y(t){t.parentNode.removeChild(t)}function v(t){return document.createElement(t)}function b(t){return document.createTextNode(t)}function w(){return b(" ")}function x(){return b("")}function _(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function k(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function C(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function A(t,e,n){t.classList[n?"add":"remove"](e)}function E(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}const M=new Set;let S,D=0;function O(t,e,n,o,r,s,i,a=0){const c=16.666/o;let u="{\n";for(let t=0;t<=1;t+=c){const o=e+(n-e)*s(t);u+=100*t+`%{${i(o,1-o)}}\n`}const l=u+`100% {${i(n,1-n)}}\n}`,f=`__svelte_${function(t){let e=5381,n=t.length;for(;n--;)e=(e<<5)-e^t.charCodeAt(n);return e>>>0}(l)}_${a}`,p=t.ownerDocument;M.add(p);const d=p.__svelte_stylesheet||(p.__svelte_stylesheet=p.head.appendChild(v("style")).sheet),h=p.__svelte_rules||(p.__svelte_rules={});h[f]||(h[f]=!0,d.insertRule(`@keyframes ${f} ${l}`,d.cssRules.length));const g=t.style.animation||"";return t.style.animation=`${g?`${g}, `:""}${f} ${o}ms linear ${r}ms 1 both`,D+=1,f}function j(t,e){const n=(t.style.animation||"").split(", "),o=n.filter(e?t=>t.indexOf(e)<0:t=>-1===t.indexOf("__svelte")),r=n.length-o.length;r&&(t.style.animation=o.join(", "),D-=r,D||p((()=>{D||(M.forEach((t=>{const e=t.__svelte_stylesheet;let n=e.cssRules.length;for(;n--;)e.deleteRule(n);t.__svelte_rules={}})),M.clear())})))}function B(t){const e=getComputedStyle(t);if("absolute"!==e.position&&"fixed"!==e.position){const{width:n,height:o}=e,r=t.getBoundingClientRect();t.style.position="absolute",t.style.width=n,t.style.height=o,function(t,e){const n=t.getBoundingClientRect();if(e.left!==n.left||e.top!==n.top){const o=getComputedStyle(t),r="none"===o.transform?"":o.transform;t.style.transform=`${r} translate(${e.left-n.left}px, ${e.top-n.top}px)`}}(t,r)}}function T(t){S=t}function P(){if(!S)throw new Error("Function called outside component initialization");return S}function R(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach((t=>t(e)))}const I=[],F=[],G=[],N=[],q=Promise.resolve();let L=!1;function U(){L||(L=!0,q.then(J))}function z(t){G.push(t)}let Y=!1;const H=new Set;function J(){if(!Y){Y=!0;do{for(let t=0;t<I.length;t+=1){const e=I[t];T(e),W(e.$$)}for(T(null),I.length=0;F.length;)F.pop()();for(let t=0;t<G.length;t+=1){const e=G[t];H.has(e)||(H.add(e),e())}G.length=0}while(I.length);for(;N.length;)N.pop()();L=!1,Y=!1,H.clear()}}function W(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(z)}}let K;function X(t,e,n){t.dispatchEvent(E(`${e?"intro":"outro"}${n}`))}const Q=new Set;let V;function Z(){V={r:0,c:[],p:V}}function tt(){V.r||s(V.c),V=V.p}function et(t,e){t&&t.i&&(Q.delete(t),t.i(e))}function nt(t,e,n,o){if(t&&t.o){if(Q.has(t))return;Q.add(t),V.c.push((()=>{Q.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}}const ot={duration:0};function rt(n,o,r,a){let c=o(n,r),u=a?0:1,l=null,p=null,d=null;function h(){d&&j(n,d)}function m(t,e){const n=t.b-u;return e*=Math.abs(n),{a:u,b:t.b,d:n,duration:e,start:t.start,end:t.start+e,group:t.group}}function $(o){const{delay:r=0,duration:i=300,easing:a=e,tick:$=t,css:y}=c||ot,v={start:f()+r,b:o};o||(v.group=V,V.r+=1),l||p?p=v:(y&&(h(),d=O(n,u,o,i,r,a,y)),o&&$(0,1),l=m(v,i),z((()=>X(n,o,"start"))),g((t=>{if(p&&t>p.start&&(l=m(p,i),p=null,X(n,l.b,"start"),y&&(h(),d=O(n,u,l.b,l.duration,0,a,c.css))),l)if(t>=l.end)$(u=l.b,1-u),X(n,l.b,"end"),p||(l.b?h():--l.group.r||s(l.group.c)),l=null;else if(t>=l.start){const e=t-l.start;u=l.a+l.d*a(e/l.duration),$(u,1-u)}return!(!l&&!p)})))}return{run(t){i(c)?(K||(K=Promise.resolve(),K.then((()=>{K=null}))),K).then((()=>{c=c(),$(t)})):$(t)},end(){h(),l=p=null}}}function st(t,e){t.f(),function(t,e){nt(t,1,1,(()=>{e.delete(t.key)}))}(t,e)}function it(t,e){const n={},o={},r={$$scope:1};let s=t.length;for(;s--;){const i=t[s],a=e[s];if(a){for(const t in i)t in a||(o[t]=1);for(const t in a)r[t]||(n[t]=a[t],r[t]=1);t[s]=a}else for(const t in i)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}function at(t){return"object"==typeof t&&null!==t?t:{}}function ct(t){t&&t.c()}function ut(t,e,n){const{fragment:r,on_mount:a,on_destroy:c,after_update:u}=t.$$;r&&r.m(e,n),z((()=>{const e=a.map(o).filter(i);c?c.push(...e):s(e),t.$$.on_mount=[]})),u.forEach(z)}function lt(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ft(e,n,o,i,a,c,u=[-1]){const l=S;T(e);const f=n.props||{},p=e.$$={fragment:null,ctx:null,props:c,update:t,not_equal:a,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(l?l.$$.context:[]),callbacks:r(),dirty:u,skip_bound:!1};let d=!1;if(p.ctx=o?o(e,f,((t,n,...o)=>{const r=o.length?o[0]:n;return p.ctx&&a(p.ctx[t],p.ctx[t]=r)&&(!p.skip_bound&&p.bound[t]&&p.bound[t](r),d&&function(t,e){-1===t.$$.dirty[0]&&(I.push(t),U(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n})):[],p.update(),d=!0,s(p.before_update),p.fragment=!!i&&i(p.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);p.fragment&&p.fragment.l(t),t.forEach(y)}else p.fragment&&p.fragment.c();n.intro&&et(e.$$.fragment),ut(e,n.target,n.anchor),J()}T(l)}class pt{$destroy(){lt(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const dt=[];function ht(t,e){return{subscribe:gt(t,e).subscribe}}function gt(e,n=t){let o;const r=[];function s(t){if(a(e,t)&&(e=t,o)){const t=!dt.length;for(let t=0;t<r.length;t+=1){const n=r[t];n[1](),dt.push(n,e)}if(t){for(let t=0;t<dt.length;t+=2)dt[t][0](dt[t+1]);dt.length=0}}}return{set:s,update:function(t){s(t(e))},subscribe:function(i,a=t){const c=[i,a];return r.push(c),1===r.length&&(o=n(s)||t),i(e),()=>{const t=r.indexOf(c);-1!==t&&r.splice(t,1),0===r.length&&(o(),o=null)}}}}function mt(e,n,o){const r=!Array.isArray(e),a=r?[e]:e,u=n.length<2;return ht(o,(e=>{let o=!1;const l=[];let f=0,p=t;const d=()=>{if(f)return;p();const o=n(r?l[0]:l,e);u?e(o):p=i(o)?o:t},h=a.map(((t,e)=>c(t,(t=>{l[e]=t,f&=~(1<<e),o&&d()}),(()=>{f|=1<<e}))));return o=!0,d(),function(){s(h),p()}}))}function $t(t){let e,o,r;const s=[t[2]];var i=t[0];function a(t){let e={};for(let t=0;t<s.length;t+=1)e=n(e,s[t]);return{props:e}}return i&&(e=new i(a()),e.$on("routeEvent",t[7])),{c(){e&&ct(e.$$.fragment),o=x()},m(t,n){e&&ut(e,t,n),$(t,o,n),r=!0},p(t,n){const r=4&n?it(s,[at(t[2])]):{};if(i!==(i=t[0])){if(e){Z();const t=e;nt(t.$$.fragment,1,0,(()=>{lt(t,1)})),tt()}i?(e=new i(a()),e.$on("routeEvent",t[7]),ct(e.$$.fragment),et(e.$$.fragment,1),ut(e,o.parentNode,o)):e=null}else i&&e.$set(r)},i(t){r||(e&&et(e.$$.fragment,t),r=!0)},o(t){e&&nt(e.$$.fragment,t),r=!1},d(t){t&&y(o),e&&lt(e,t)}}}function yt(t){let e,o,r;const s=[{params:t[1]},t[2]];var i=t[0];function a(t){let e={};for(let t=0;t<s.length;t+=1)e=n(e,s[t]);return{props:e}}return i&&(e=new i(a()),e.$on("routeEvent",t[6])),{c(){e&&ct(e.$$.fragment),o=x()},m(t,n){e&&ut(e,t,n),$(t,o,n),r=!0},p(t,n){const r=6&n?it(s,[2&n&&{params:t[1]},4&n&&at(t[2])]):{};if(i!==(i=t[0])){if(e){Z();const t=e;nt(t.$$.fragment,1,0,(()=>{lt(t,1)})),tt()}i?(e=new i(a()),e.$on("routeEvent",t[6]),ct(e.$$.fragment),et(e.$$.fragment,1),ut(e,o.parentNode,o)):e=null}else i&&e.$set(r)},i(t){r||(e&&et(e.$$.fragment,t),r=!0)},o(t){e&&nt(e.$$.fragment,t),r=!1},d(t){t&&y(o),e&&lt(e,t)}}}function vt(t){let e,n,o,r;const s=[yt,$t],i=[];function a(t,e){return t[1]?0:1}return e=a(t),n=i[e]=s[e](t),{c(){n.c(),o=x()},m(t,n){i[e].m(t,n),$(t,o,n),r=!0},p(t,[r]){let c=e;e=a(t),e===c?i[e].p(t,r):(Z(),nt(i[c],1,1,(()=>{i[c]=null})),tt(),n=i[e],n?n.p(t,r):(n=i[e]=s[e](t),n.c()),et(n,1),n.m(o.parentNode,o))},i(t){r||(et(n),r=!0)},o(t){nt(n),r=!1},d(t){i[e].d(t),t&&y(o)}}}function bt(){const t=window.location.href.indexOf("#/");let e=t>-1?window.location.href.substr(t+1):"/";const n=e.indexOf("?");let o="";return n>-1&&(o=e.substr(n+1),e=e.substr(0,n)),{location:e,querystring:o}}const wt=ht(null,(function(t){t(bt());const e=()=>{t(bt())};return window.addEventListener("hashchange",e,!1),function(){window.removeEventListener("hashchange",e,!1)}})),xt=mt(wt,(t=>t.location));mt(wt,(t=>t.querystring));function _t(t,e,n){let{routes:o={}}=e,{prefix:r=""}=e,{restoreScrollState:s=!1}=e;class i{constructor(t,e){if(!e||"function"!=typeof e&&("object"!=typeof e||!0!==e._sveltesparouter))throw Error("Invalid component object");if(!t||"string"==typeof t&&(t.length<1||"/"!=t.charAt(0)&&"*"!=t.charAt(0))||"object"==typeof t&&!(t instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:n,keys:o}=function(t,e){if(t instanceof RegExp)return{keys:!1,pattern:t};var n,o,r,s,i=[],a="",c=t.split("/");for(c[0]||c.shift();r=c.shift();)"*"===(n=r[0])?(i.push("wild"),a+="/(.*)"):":"===n?(o=r.indexOf("?",1),s=r.indexOf(".",1),i.push(r.substring(1,~o?o:~s?s:r.length)),a+=~o&&!~s?"(?:/([^/]+?))?":"/([^/]+?)",~s&&(a+=(~o?"?":"")+"\\"+r.substring(s))):a+="/"+r;return{keys:i,pattern:new RegExp("^"+a+(e?"(?=$|/)":"/?$"),"i")}}(t);this.path=t,"object"==typeof e&&!0===e._sveltesparouter?(this.component=e.component,this.conditions=e.conditions||[],this.userData=e.userData,this.props=e.props||{}):(this.component=()=>Promise.resolve(e),this.conditions=[],this.props={}),this._pattern=n,this._keys=o}match(t){if(r)if("string"==typeof r){if(!t.startsWith(r))return null;t=t.substr(r.length)||"/"}else if(r instanceof RegExp){const e=t.match(r);if(!e||!e[0])return null;t=t.substr(e[0].length)||"/"}const e=this._pattern.exec(t);if(null===e)return null;if(!1===this._keys)return e;const n={};let o=0;for(;o<this._keys.length;){try{n[this._keys[o]]=decodeURIComponent(e[o+1]||"")||null}catch(t){n[this._keys[o]]=null}o++}return n}async checkConditions(t){for(let e=0;e<this.conditions.length;e++)if(!await this.conditions[e](t))return!1;return!0}}const a=[];o instanceof Map?o.forEach(((t,e)=>{a.push(new i(e,t))})):Object.keys(o).forEach((t=>{a.push(new i(t,o[t]))}));let c=null,u=null,l={};const f=function(){const t=P();return(e,n)=>{const o=t.$$.callbacks[e];if(o){const r=E(e,n);o.slice().forEach((e=>{e.call(t,r)}))}}}();async function p(t,e){await(U(),q),f(t,e)}let d=null;var h;s&&(window.addEventListener("popstate",(t=>{d=t.state&&t.state.scrollY?t.state:null})),h=()=>{d?window.scrollTo(d.scrollX,d.scrollY):window.scrollTo(0,0)},P().$$.after_update.push(h));let g=null,m=null;return wt.subscribe((async t=>{g=t;let e=0;for(;e<a.length;){const o=a[e].match(t.location);if(!o){e++;continue}const r={route:a[e].path,location:t.location,querystring:t.querystring,userData:a[e].userData};if(!await a[e].checkConditions(r))return n(0,c=null),m=null,void p("conditionsFailed",r);p("routeLoading",Object.assign({},r));const s=a[e].component;if(m!=s){s.loading?(n(0,c=s.loading),m=s,n(1,u=s.loadingParams),n(2,l={}),p("routeLoaded",Object.assign({},r,{component:c,name:c.name}))):(n(0,c=null),m=null);const e=await s();if(t!=g)return;n(0,c=e&&e.default||e),m=s}return o&&"object"==typeof o&&Object.keys(o).length?n(1,u=o):n(1,u=null),n(2,l=a[e].props),void p("routeLoaded",Object.assign({},r,{component:c,name:c.name}))}n(0,c=null),m=null})),t.$$set=t=>{"routes"in t&&n(3,o=t.routes),"prefix"in t&&n(4,r=t.prefix),"restoreScrollState"in t&&n(5,s=t.restoreScrollState)},t.$$.update=()=>{32&t.$$.dirty&&(history.scrollRestoration=s?"manual":"auto")},[c,u,l,o,r,s,function(e){R(t,e)},function(e){R(t,e)}]}class kt extends pt{constructor(t){super(),ft(this,t,_t,vt,a,{routes:3,prefix:4,restoreScrollState:5})}}const Ct=1e3,At=1e6,Et=1e9,Mt=1e12;function St(t,e){return t||(t=0),t<0?"-"+St(-1*t,e):t>=1e15?t.toExponential(e).replace("+",""):t>=Mt?(t/Mt).toFixed(e)+"T":t>=Et?(t/Et).toFixed(e)+"B":t>=At?(t/At).toFixed(e)+"M":t>=Ct?(t/Ct).toFixed(e)+"K":t.toFixed(e)}function Dt(t){return t||(t=0),t<0?"-"+Dt(-1*t):St(t,t<Ct?0:2)}var Ot,jt=(function(t){var e=function(){var t=String.fromCharCode,e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",n="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+-$",o={};function r(t,e){if(!o[t]){o[t]={};for(var n=0;n<t.length;n++)o[t][t.charAt(n)]=n}return o[t][e]}var s={compressToBase64:function(t){if(null==t)return"";var n=s._compress(t,6,(function(t){return e.charAt(t)}));switch(n.length%4){default:case 0:return n;case 1:return n+"===";case 2:return n+"==";case 3:return n+"="}},decompressFromBase64:function(t){return null==t?"":""==t?null:s._decompress(t.length,32,(function(n){return r(e,t.charAt(n))}))},compressToUTF16:function(e){return null==e?"":s._compress(e,15,(function(e){return t(e+32)}))+" "},decompressFromUTF16:function(t){return null==t?"":""==t?null:s._decompress(t.length,16384,(function(e){return t.charCodeAt(e)-32}))},compressToUint8Array:function(t){for(var e=s.compress(t),n=new Uint8Array(2*e.length),o=0,r=e.length;o<r;o++){var i=e.charCodeAt(o);n[2*o]=i>>>8,n[2*o+1]=i%256}return n},decompressFromUint8Array:function(e){if(null==e)return s.decompress(e);for(var n=new Array(e.length/2),o=0,r=n.length;o<r;o++)n[o]=256*e[2*o]+e[2*o+1];var i=[];return n.forEach((function(e){i.push(t(e))})),s.decompress(i.join(""))},compressToEncodedURIComponent:function(t){return null==t?"":s._compress(t,6,(function(t){return n.charAt(t)}))},decompressFromEncodedURIComponent:function(t){return null==t?"":""==t?null:(t=t.replace(/ /g,"+"),s._decompress(t.length,32,(function(e){return r(n,t.charAt(e))})))},compress:function(e){return s._compress(e,16,(function(e){return t(e)}))},_compress:function(t,e,n){if(null==t)return"";var o,r,s,i={},a={},c="",u="",l="",f=2,p=3,d=2,h=[],g=0,m=0;for(s=0;s<t.length;s+=1)if(c=t.charAt(s),Object.prototype.hasOwnProperty.call(i,c)||(i[c]=p++,a[c]=!0),u=l+c,Object.prototype.hasOwnProperty.call(i,u))l=u;else{if(Object.prototype.hasOwnProperty.call(a,l)){if(l.charCodeAt(0)<256){for(o=0;o<d;o++)g<<=1,m==e-1?(m=0,h.push(n(g)),g=0):m++;for(r=l.charCodeAt(0),o=0;o<8;o++)g=g<<1|1&r,m==e-1?(m=0,h.push(n(g)),g=0):m++,r>>=1}else{for(r=1,o=0;o<d;o++)g=g<<1|r,m==e-1?(m=0,h.push(n(g)),g=0):m++,r=0;for(r=l.charCodeAt(0),o=0;o<16;o++)g=g<<1|1&r,m==e-1?(m=0,h.push(n(g)),g=0):m++,r>>=1}0==--f&&(f=Math.pow(2,d),d++),delete a[l]}else for(r=i[l],o=0;o<d;o++)g=g<<1|1&r,m==e-1?(m=0,h.push(n(g)),g=0):m++,r>>=1;0==--f&&(f=Math.pow(2,d),d++),i[u]=p++,l=String(c)}if(""!==l){if(Object.prototype.hasOwnProperty.call(a,l)){if(l.charCodeAt(0)<256){for(o=0;o<d;o++)g<<=1,m==e-1?(m=0,h.push(n(g)),g=0):m++;for(r=l.charCodeAt(0),o=0;o<8;o++)g=g<<1|1&r,m==e-1?(m=0,h.push(n(g)),g=0):m++,r>>=1}else{for(r=1,o=0;o<d;o++)g=g<<1|r,m==e-1?(m=0,h.push(n(g)),g=0):m++,r=0;for(r=l.charCodeAt(0),o=0;o<16;o++)g=g<<1|1&r,m==e-1?(m=0,h.push(n(g)),g=0):m++,r>>=1}0==--f&&(f=Math.pow(2,d),d++),delete a[l]}else for(r=i[l],o=0;o<d;o++)g=g<<1|1&r,m==e-1?(m=0,h.push(n(g)),g=0):m++,r>>=1;0==--f&&(f=Math.pow(2,d),d++)}for(r=2,o=0;o<d;o++)g=g<<1|1&r,m==e-1?(m=0,h.push(n(g)),g=0):m++,r>>=1;for(;;){if(g<<=1,m==e-1){h.push(n(g));break}m++}return h.join("")},decompress:function(t){return null==t?"":""==t?null:s._decompress(t.length,32768,(function(e){return t.charCodeAt(e)}))},_decompress:function(e,n,o){var r,s,i,a,c,u,l,f=[],p=4,d=4,h=3,g="",m=[],$={val:o(0),position:n,index:1};for(r=0;r<3;r+=1)f[r]=r;for(i=0,c=Math.pow(2,2),u=1;u!=c;)a=$.val&$.position,$.position>>=1,0==$.position&&($.position=n,$.val=o($.index++)),i|=(a>0?1:0)*u,u<<=1;switch(i){case 0:for(i=0,c=Math.pow(2,8),u=1;u!=c;)a=$.val&$.position,$.position>>=1,0==$.position&&($.position=n,$.val=o($.index++)),i|=(a>0?1:0)*u,u<<=1;l=t(i);break;case 1:for(i=0,c=Math.pow(2,16),u=1;u!=c;)a=$.val&$.position,$.position>>=1,0==$.position&&($.position=n,$.val=o($.index++)),i|=(a>0?1:0)*u,u<<=1;l=t(i);break;case 2:return""}for(f[3]=l,s=l,m.push(l);;){if($.index>e)return"";for(i=0,c=Math.pow(2,h),u=1;u!=c;)a=$.val&$.position,$.position>>=1,0==$.position&&($.position=n,$.val=o($.index++)),i|=(a>0?1:0)*u,u<<=1;switch(l=i){case 0:for(i=0,c=Math.pow(2,8),u=1;u!=c;)a=$.val&$.position,$.position>>=1,0==$.position&&($.position=n,$.val=o($.index++)),i|=(a>0?1:0)*u,u<<=1;f[d++]=t(i),l=d-1,p--;break;case 1:for(i=0,c=Math.pow(2,16),u=1;u!=c;)a=$.val&$.position,$.position>>=1,0==$.position&&($.position=n,$.val=o($.index++)),i|=(a>0?1:0)*u,u<<=1;f[d++]=t(i),l=d-1,p--;break;case 2:return m.join("")}if(0==p&&(p=Math.pow(2,h),h++),f[l])g=f[l];else{if(l!==d)return null;g=s+s.charAt(0)}m.push(g),f[d++]=s+g.charAt(0),s=g,0==--p&&(p=Math.pow(2,h),h++)}}};return s}();null!=t&&(t.exports=e)}(Ot={exports:{}},Ot.exports),Ot.exports);const Bt="sveltedata";function Tt(){try{if(localStorage.getItem(Bt)){let t=JSON.parse(jt.decompress(localStorage.getItem(Bt)));return console.log("SaveData loaded:"),console.log(t),function(t){let e=new Rt;Object.getOwnPropertyNames(e).forEach((n=>{void 0===t[n]&&(console.log(`${n} was undefined, adding it to saveData`),t[n]=e[n])}))}(t),t}return new Rt}catch(t){console.error(t)}}function Pt(t){if(t){t.lastSaved=Date.now();try{localStorage.setItem(Bt,jt.compress(JSON.stringify(t)))}catch(t){console.error(t)}}}class Rt{constructor(){this.money=0,this.upgradesBought=[],this.upgradesGenerated=[],this.lastSaved=0}}class It{constructor(){this.saveData=Tt()}addMoney(t){isNaN(t)||(this.saveData.money+=t)}spendMoney(t){return!isNaN(t)&&this.saveData.money>=t&&(this.saveData.money-=t,!0)}}const Ft=gt(new It);function Gt(){Ft.update((t=>t))}let Nt;Ft.subscribe((t=>Nt=t));let qt;function Lt(t=1){Nt.addMoney(1*t),Gt()}function Ut(e){let n,o,r;return{c(){n=v("button"),n.textContent=`💵 Click me for $${St(1,2)} 💵`,k(n,"class","svelte-1mudqws")},m(t,s){$(t,n,s),o||(r=_(n,"click",e[0]),o=!0)},p:t,i:t,o:t,d(t){t&&y(n),o=!1,r()}}}function zt(t){return[function(){Lt()}]}class Yt extends pt{constructor(t){super(),ft(this,t,zt,Ut,a,{})}}Ft.subscribe((t=>qt=t));class Ht extends class{constructor(t,e,n,o,r){this.id=t,this.name=e,this.description=n,this.basePrice=o,this.multiplier=r}getBoughtCount(){return qt.saveData.upgradesBought[this.id]||0}getGeneratedCount(){return qt.saveData.upgradesGenerated[this.id]||0}getTotalCount(){return this.getBoughtCount()+this.getGeneratedCount()}getPrice(){return this.basePrice*Math.pow(this.multiplier,this.getBoughtCount())}purchase(){return!!qt.spendMoney(this.getPrice())&&(qt.saveData.upgradesBought[this.id]=this.getBoughtCount()+1,Gt(),Pt(qt.saveData),!0)}}{constructor(t,e,n,o,r,s,i){super(t,e,n,o,r),this.generated=0,this.generatesId=s,this.generateTime=i}update(t){let e=this.getTotalCount();if(e>0){let n=e/this.generateTime;this.generated+=n*t,this.generated>1&&(this.generatesId?qt.saveData.upgradesGenerated[this.generatesId]=(qt.saveData.upgradesGenerated[this.generatesId]||0)+Math.floor(this.generated):Lt(Math.floor(this.generated)),this.generated-=Math.floor(this.generated),Gt())}}}const Jt=[new Ht(1,"Auto Clicker","Automatically clicks the button every 10 seconds",10,1.1,null,10),new Ht(2,"Auto Clicker Buyer","Automatically buys an auto clicker every 10 seconds",200,1.2,1,10),new Ht(3,"Auto Clicker Buyer Buyer","Automatically buys an auto clicker buyer every 10 seconds",5e3,1.3,2,10),new Ht(4,"Auto Clicker Buyer Buyer Buyer","Automatically buys an auto clicker buyer buyer every 10 seconds",5e4,1.4,3,10)];function Wt(e){let n,o,r,s,i,a,c,u,l,f,p,d,h,g,x,A,E,M=e[0].name+"",S=Dt(e[0].getTotalCount())+"",D=St(e[0].getPrice(),2)+"",O=e[0].description+"";return{c(){n=v("div"),o=v("strong"),r=b(M),s=w(),i=v("span"),a=b("owned: "),c=v("strong"),u=b(S),l=w(),f=v("button"),p=b("Buy for $"),d=b(D),h=w(),g=v("p"),x=b(O),k(f,"class","svelte-xvpbc9"),k(g,"class","svelte-xvpbc9"),k(n,"class","svelte-xvpbc9")},m(t,y){$(t,n,y),m(n,o),m(o,r),m(n,s),m(n,i),m(i,a),m(i,c),m(c,u),m(n,l),m(n,f),m(f,p),m(f,d),m(n,h),m(n,g),m(g,x),A||(E=_(f,"click",e[1]),A=!0)},p(t,[e]){1&e&&M!==(M=t[0].name+"")&&C(r,M),1&e&&S!==(S=Dt(t[0].getTotalCount())+"")&&C(u,S),1&e&&D!==(D=St(t[0].getPrice(),2)+"")&&C(d,D),1&e&&O!==(O=t[0].description+"")&&C(x,O)},i:t,o:t,d(t){t&&y(n),A=!1,E()}}}function Kt(t,e,n){let o;u(t,Ft,(t=>n(2,o=t)));let{generator:r}=e;return t.$$set=t=>{"generator"in t&&n(0,r=t.generator)},t.$$.update=()=>{5&t.$$.dirty&&(n(0,r),n(2,o))},[r,function(){r.purchase(),n(0,r),n(2,o)},o]}(()=>{let t=[];Jt.forEach((e=>{t[e.id]&&alert(`Generator id: ${e.id} has been used more than once. All upgrade ids must be unique!`),t[e.id]=!0}))})();class Xt extends pt{constructor(t){super(),ft(this,t,Kt,Wt,a,{generator:0})}}function Qt(t,e,n){const o=t.slice();return o[0]=e[n],o}function Vt(e){let n,o;return n=new Xt({props:{generator:e[0]}}),{c(){ct(n.$$.fragment)},m(t,e){ut(n,t,e),o=!0},p:t,i(t){o||(et(n.$$.fragment,t),o=!0)},o(t){nt(n.$$.fragment,t),o=!1},d(t){lt(n,t)}}}function Zt(t){let e,n,o,r,s=Jt,i=[];for(let e=0;e<s.length;e+=1)i[e]=Vt(Qt(t,s,e));const a=t=>nt(i[t],1,1,(()=>{i[t]=null}));return{c(){e=v("div"),n=v("h2"),n.textContent="Generators",o=w();for(let t=0;t<i.length;t+=1)i[t].c()},m(t,s){$(t,e,s),m(e,n),m(e,o);for(let t=0;t<i.length;t+=1)i[t].m(e,null);r=!0},p(t,[n]){if(0&n){let o;for(s=Jt,o=0;o<s.length;o+=1){const r=Qt(t,s,o);i[o]?(i[o].p(r,n),et(i[o],1)):(i[o]=Vt(r),i[o].c(),et(i[o],1),i[o].m(e,null))}for(Z(),o=s.length;o<i.length;o+=1)a(o);tt()}},i(t){if(!r){for(let t=0;t<s.length;t+=1)et(i[t]);r=!0}},o(t){i=i.filter(Boolean);for(let t=0;t<i.length;t+=1)nt(i[t]);r=!1},d(t){t&&y(e),function(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}(i,t)}}}class te extends pt{constructor(t){super(),ft(this,t,null,Zt,a,{})}}function ee(t){let e,n,o,r,s,i,a,c,u,l,f,p,d,h=St(t[0].saveData.money,2)+"";return u=new Yt({}),p=new te({}),{c(){e=v("h1"),e.textContent="Svelte Incremental Game Template",n=w(),o=v("p"),r=b("The current amount of money is\r\n    "),s=v("strong"),i=b("$"),a=b(h),c=w(),ct(u.$$.fragment),l=w(),f=v("div"),ct(p.$$.fragment),k(f,"class","svelte-1psbx1w")},m(t,h){$(t,e,h),$(t,n,h),$(t,o,h),m(o,r),m(o,s),m(s,i),m(s,a),$(t,c,h),ut(u,t,h),$(t,l,h),$(t,f,h),ut(p,f,null),d=!0},p(t,[e]){(!d||1&e)&&h!==(h=St(t[0].saveData.money,2)+"")&&C(a,h)},i(t){d||(et(u.$$.fragment,t),et(p.$$.fragment,t),d=!0)},o(t){nt(u.$$.fragment,t),nt(p.$$.fragment,t),d=!1},d(t){t&&y(e),t&&y(n),t&&y(o),t&&y(c),lt(u,t),t&&y(l),t&&y(f),lt(p)}}}function ne(t,e,n){let o;return u(t,Ft,(t=>n(0,o=t))),[o]}class oe extends pt{constructor(t){super(),ft(this,t,ne,ee,a,{})}}const re=gt([]);let se,ie=0;class ae{constructor(t){this.message=t,this.id=ie++}}function ce(t){let e=new ae(t);re.update((t=>[...t,e])),setTimeout((()=>{re.update((t=>t.filter((t=>t.id!=e.id))))}),4e3)}function ue(e){let n,o,r,i,a,c,u;return{c(){n=v("h1"),n.textContent="Options",o=w(),r=v("button"),r.textContent="Save Game",i=w(),a=v("button"),a.textContent="Reset Save Game"},m(t,s){$(t,n,s),$(t,o,s),$(t,r,s),$(t,i,s),$(t,a,s),c||(u=[_(r,"click",e[0]),_(a,"click",e[1])],c=!0)},p:t,i:t,o:t,d(t){t&&y(n),t&&y(o),t&&y(r),t&&y(i),t&&y(a),c=!1,s(u)}}}function le(t,e,n){let o;u(t,Ft,(t=>n(2,o=t)));return[function(){Pt(o.saveData),ce("Game has been saved")},function(){confirm("Are you sure you want to reset your game?")&&(localStorage.removeItem(Bt),Ft.update((t=>new It)),ce("Save Data has been wiped"))}]}class fe extends pt{constructor(t){super(),ft(this,t,le,ue,a,{})}}function pe(e){let n;return{c(){n=v("h1"),n.textContent="This is your 404 error page if a bad url is entered"},m(t,e){$(t,n,e)},p:t,i:t,o:t,d(t){t&&y(n)}}}class de extends pt{constructor(t){super(),ft(this,t,null,pe,a,{})}}function he(t){const e=t-1;return e*e*e+1}function ge(t){return-.5*(Math.cos(Math.PI*t)-1)}function me(t,e,n){const o=getComputedStyle(t),r="none"===o.transform?"":o.transform,s=e.from.width/t.clientWidth,a=e.from.height/t.clientHeight,c=(e.from.left-e.to.left)/s,u=(e.from.top-e.to.top)/a,l=Math.sqrt(c*c+u*u),{delay:f=0,duration:p=(t=>120*Math.sqrt(t)),easing:d=he}=n;return{delay:f,duration:i(p)?p(l):p,easing:d,css:(t,e)=>`transform: ${r} translate(${e*c}px, ${e*u}px);`}}function $e(t,{delay:e=0,duration:n=400,easing:o=he,x:r=0,y:s=0,opacity:i=0}){const a=getComputedStyle(t),c=+a.opacity,u="none"===a.transform?"":a.transform,l=c*(1-i);return{delay:e,duration:n,easing:o,css:(t,e)=>`\n\t\t\ttransform: ${u} translate(${(1-t)*r}px, ${(1-t)*s}px);\n\t\t\topacity: ${c-l*e}`}}function ye(t){let e,n,o,r,s=t[0].message+"";return{c(){e=v("span"),n=b(s),k(e,"class","svelte-18inq3e")},m(t,o){$(t,e,o),m(e,n),r=!0},p(e,[o]){t=e,(!r||1&o)&&s!==(s=t[0].message+"")&&C(n,s)},i(t){r||(t&&z((()=>{o||(o=rt(e,$e,{x:200,duration:500,easing:ge},!0)),o.run(1)})),r=!0)},o(t){t&&(o||(o=rt(e,$e,{x:200,duration:500,easing:ge},!1)),o.run(0)),r=!1},d(t){t&&y(e),t&&o&&o.end()}}}function ve(t,e,n){let{message:o}=e;return t.$$set=t=>{"message"in t&&n(0,o=t.message)},[o]}class be extends pt{constructor(t){super(),ft(this,t,ve,ye,a,{message:0})}}function we(t,e,n){const o=t.slice();return o[1]=e[n],o}function xe(n,o){let r,s,i,a,c,u=t;return s=new be({props:{message:o[1]}}),{key:n,first:null,c(){r=v("span"),ct(s.$$.fragment),i=w(),k(r,"class","svelte-6g7811"),this.first=r},m(t,e){$(t,r,e),ut(s,r,null),m(r,i),c=!0},p(t,e){o=t;const n={};1&e&&(n.message=o[1]),s.$set(n)},r(){a=r.getBoundingClientRect()},f(){B(r),u()},a(){u(),u=function(n,o,r,s){if(!o)return t;const i=n.getBoundingClientRect();if(o.left===i.left&&o.right===i.right&&o.top===i.top&&o.bottom===i.bottom)return t;const{delay:a=0,duration:c=300,easing:u=e,start:l=f()+a,end:p=l+c,tick:d=t,css:h}=r(n,{from:o,to:i},s);let m,$=!0,y=!1;function v(){h&&j(n,m),$=!1}return g((t=>{if(!y&&t>=l&&(y=!0),y&&t>=p&&(d(1,0),v()),!$)return!1;if(y){const e=0+1*u((t-l)/c);d(e,1-e)}return!0})),h&&(m=O(n,0,1,c,a,u,h)),a||(y=!0),d(0,1),v}(r,a,me,{})},i(t){c||(et(s.$$.fragment,t),c=!0)},o(t){nt(s.$$.fragment,t),c=!1},d(t){t&&y(r),lt(s)}}}function _e(t){let e,n,o=[],r=new Map,s=t[0];const i=t=>t[1].id;for(let e=0;e<s.length;e+=1){let n=we(t,s,e),a=i(n);r.set(a,o[e]=xe(a,n))}return{c(){e=v("div");for(let t=0;t<o.length;t+=1)o[t].c();k(e,"class","svelte-6g7811")},m(t,r){$(t,e,r);for(let t=0;t<o.length;t+=1)o[t].m(e,null);n=!0},p(t,[n]){if(1&n){s=t[0],Z();for(let t=0;t<o.length;t+=1)o[t].r();o=function(t,e,n,o,r,s,i,a,c,u,l,f){let p=t.length,d=s.length,h=p;const g={};for(;h--;)g[t[h].key]=h;const m=[],$=new Map,y=new Map;for(h=d;h--;){const t=f(r,s,h),a=n(t);let c=i.get(a);c?o&&c.p(t,e):(c=u(a,t),c.c()),$.set(a,m[h]=c),a in g&&y.set(a,Math.abs(h-g[a]))}const v=new Set,b=new Set;function w(t){et(t,1),t.m(a,l),i.set(t.key,t),l=t.first,d--}for(;p&&d;){const e=m[d-1],n=t[p-1],o=e.key,r=n.key;e===n?(l=e.first,p--,d--):$.has(r)?!i.has(o)||v.has(o)?w(e):b.has(r)?p--:y.get(o)>y.get(r)?(b.add(o),w(e)):(v.add(r),p--):(c(n,i),p--)}for(;p--;){const e=t[p];$.has(e.key)||c(e,i)}for(;d;)w(m[d-1]);return m}(o,n,i,1,t,s,r,e,st,xe,null,we);for(let t=0;t<o.length;t+=1)o[t].a();tt()}},i(t){if(!n){for(let t=0;t<s.length;t+=1)et(o[t]);n=!0}},o(t){for(let t=0;t<o.length;t+=1)nt(o[t]);n=!1},d(t){t&&y(e);for(let t=0;t<o.length;t+=1)o[t].d()}}}function ke(t,e,n){let o;return u(t,re,(t=>n(0,o=t))),[o]}class Ce extends pt{constructor(t){super(),ft(this,t,ke,_e,a,{})}}function Ae(t){let e,n,o,r,s,i,a,c,u,l,f,p;return u=new Ce({}),f=new kt({props:{routes:t[1]}}),{c(){e=v("div"),n=v("ul"),o=v("li"),r=v("a"),r.textContent="🏠 Home",s=w(),i=v("li"),a=v("a"),a.textContent="⚙️ Options",c=w(),ct(u.$$.fragment),l=w(),ct(f.$$.fragment),k(r,"href","#/"),k(r,"class","svelte-fikout"),A(r,"active","/"==t[0]),k(o,"class","svelte-fikout"),k(a,"href","#/options"),k(a,"class","svelte-fikout"),A(a,"active","/options"==t[0]),k(i,"class","svelte-fikout"),k(n,"class","svelte-fikout"),k(e,"class","svelte-fikout")},m(t,d){$(t,e,d),m(e,n),m(n,o),m(o,r),m(n,s),m(n,i),m(i,a),m(e,c),ut(u,e,null),m(e,l),ut(f,e,null),p=!0},p(t,[e]){1&e&&A(r,"active","/"==t[0]),1&e&&A(a,"active","/options"==t[0])},i(t){p||(et(u.$$.fragment,t),et(f.$$.fragment,t),p=!0)},o(t){nt(u.$$.fragment,t),nt(f.$$.fragment,t),p=!1},d(t){t&&y(e),lt(u),lt(f)}}}function Ee(t,e,n){let o;u(t,xt,(t=>n(0,o=t)));return[o,{"/":oe,"/options":fe,"*":de}]}Ft.subscribe((t=>se=t));let Me=Date.now(),Se=Date.now(),De=0;function Oe(){let t=Date.now();t-Se>6e4&&(Se=t,Pt(se.saveData),ce("Game auto-saved")),De=Math.max(Math.min((t-Me)/1e3,1),0),Me=t,je(De)}function je(t){Jt.forEach((e=>e.update(t)))}const Be=new class extends pt{constructor(t){super(),ft(this,t,Ee,Ae,a,{})}}({target:document.body});return console.log("calculating offline progess"),function(){let t=se.saveData.money,e=Date.now(),n=Math.max((e-se.saveData.lastSaved)/1e3,0);console.log(`Offline for ${n} seconds`),je(n),ce(`You have earned $${Dt(se.saveData.money-t)} while offline!`)}(),console.log("starting the game loop"),setInterval(Oe,200),Be}();
//# sourceMappingURL=bundle.js.map
