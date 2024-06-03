(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,t,r){(window._next_P=window._next_P||[]).push(["/",function(){return r(6413)}])},948:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{noSSR:function(){return s},default:function(){return n}});let a=r(8754),o=(r(7294),a._(r(3900)));function i(e){return{default:(null==e?void 0:e.default)||e}}function s(e,t){return delete t.webpack,delete t.modules,e(t)}function n(e,t){let r=o.default,a={loading:e=>{let{error:t,isLoading:r,pastDelay:a}=e;return null}};e instanceof Promise?a.loader=()=>e:"function"==typeof e?a.loader=e:"object"==typeof e&&(a={...a,...e}),a={...a,...t};let n=a.loader;return(a.loadableGenerated&&(a={...a,...a.loadableGenerated},delete a.loadableGenerated),"boolean"!=typeof a.ssr||a.ssr)?r({...a,loader:()=>null!=n?n().then(i):Promise.resolve(i(()=>null))}):(delete a.webpack,delete a.modules,s(r,a))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2804:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"LoadableContext",{enumerable:!0,get:function(){return i}});let a=r(8754),o=a._(r(7294)),i=o.default.createContext(null)},3900:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return f}});let a=r(8754),o=a._(r(7294)),i=r(2804),s=[],n=[],l=!1;function d(e){let t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then(e=>(r.loading=!1,r.loaded=e,e)).catch(e=>{throw r.loading=!1,r.error=e,e}),r}class u{promise(){return this._res.promise}retry(){this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};let{_res:e,_opts:t}=this;e.loading&&("number"==typeof t.delay&&(0===t.delay?this._state.pastDelay=!0:this._delay=setTimeout(()=>{this._update({pastDelay:!0})},t.delay)),"number"==typeof t.timeout&&(this._timeout=setTimeout(()=>{this._update({timedOut:!0})},t.timeout))),this._res.promise.then(()=>{this._update({}),this._clearTimeouts()}).catch(e=>{this._update({}),this._clearTimeouts()}),this._update({})}_update(e){this._state={...this._state,error:this._res.error,loaded:this._res.loaded,loading:this._res.loading,...e},this._callbacks.forEach(e=>e())}_clearTimeouts(){clearTimeout(this._delay),clearTimeout(this._timeout)}getCurrentValue(){return this._state}subscribe(e){return this._callbacks.add(e),()=>{this._callbacks.delete(e)}}constructor(e,t){this._loadFn=e,this._opts=t,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}}function c(e){return function(e,t){let r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null},t),a=null;function s(){if(!a){let t=new u(e,r);a={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return a.promise()}if(!l){let e=r.webpack?r.webpack():r.modules;e&&n.push(t=>{for(let r of e)if(t.includes(r))return s()})}function d(e,t){!function(){s();let e=o.default.useContext(i.LoadableContext);e&&Array.isArray(r.modules)&&r.modules.forEach(t=>{e(t)})}();let n=o.default.useSyncExternalStore(a.subscribe,a.getCurrentValue,a.getCurrentValue);return o.default.useImperativeHandle(t,()=>({retry:a.retry}),[]),o.default.useMemo(()=>{var t;return n.loading||n.error?o.default.createElement(r.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:a.retry}):n.loaded?o.default.createElement((t=n.loaded)&&t.default?t.default:t,e):null},[e,n])}return d.preload=()=>s(),d.displayName="LoadableComponent",o.default.forwardRef(d)}(d,e)}function p(e,t){let r=[];for(;e.length;){let a=e.pop();r.push(a(t))}return Promise.all(r).then(()=>{if(e.length)return p(e,t)})}c.preloadAll=()=>new Promise((e,t)=>{p(s).then(e,t)}),c.preloadReady=e=>(void 0===e&&(e=[]),new Promise(t=>{let r=()=>(l=!0,t());p(n,e).then(r,r)})),window._next_PRELOADREADY=c.preloadReady;let f=c},6413:function(e,t,r){"use strict";let a,o;r.r(t),r.d(t,{default:function(){return ew},metadata:function(){return e_}});var i,s=r(5893),n=r(4076),l=r.n(n),d=r(7294);let u={data:""},c=e=>"object"==typeof window?((e?e.querySelector("#_goober"):window._goober)||Object.assign((e||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:e||u,p=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,f=/\/\*[^]*?\*\/|  +/g,m=/\n+/g,h=(e,t)=>{let r="",a="",o="";for(let i in e){let s=e[i];"@"==i[0]?"i"==i[1]?r=i+" "+s+";":a+="f"==i[1]?h(s,i):i+"{"+h(s,"k"==i[1]?"":t)+"}":"object"==typeof s?a+=h(s,t?t.replace(/([^,])+/g,e=>i.replace(/(^:.*)|([^,])+/g,t=>/&/.test(t)?t.replace(/&/g,e):e?e+" "+t:t)):i):null!=s&&(i=/^--/.test(i)?i:i.replace(/[A-Z]/g,"-$&").toLowerCase(),o+=h.p?h.p(i,s):i+":"+s+";")}return r+(t&&o?t+"{"+o+"}":o)+a},b={},y=e=>{if("object"==typeof e){let t="";for(let r in e)t+=r+y(e[r]);return t}return e},g=(e,t,r,a,o)=>{var i;let s=y(e),n=b[s]||(b[s]=(e=>{let t=0,r=11;for(;t<e.length;)r=101*r+e.charCodeAt(t++)>>>0;return"go"+r})(s));if(!b[n]){let t=s!==e?e:(e=>{let t,r,a=[{}];for(;t=p.exec(e.replace(f,""));)t[4]?a.shift():t[3]?(r=t[3].replace(m," ").trim(),a.unshift(a[0][r]=a[0][r]||{})):a[0][t[1]]=t[2].replace(m," ").trim();return a[0]})(e);b[n]=h(o?{["@keyframes "+n]:t}:t,r?"":"."+n)}let l=r&&b.g?b.g:null;return r&&(b.g=b[n]),i=b[n],l?t.data=t.data.replace(l,i):-1===t.data.indexOf(i)&&(t.data=a?i+t.data:t.data+i),n},x=(e,t,r)=>e.reduce((e,a,o)=>{let i=t[o];if(i&&i.call){let e=i(r),t=e&&e.props&&e.props.className||/^go/.test(e)&&e;i=t?"."+t:e&&"object"==typeof e?e.props?"":h(e,""):!1===e?"":e}return e+a+(null==i?"":i)},"");function _(e){let t=this||{},r=e.call?e(t.p):e;return g(r.unshift?r.raw?x(r,[].slice.call(arguments,1),t.p):r.reduce((e,r)=>Object.assign(e,r&&r.call?r(t.p):r),{}):r,c(t.target),t.g,t.o,t.k)}_.bind({g:1});let v,w,j,E=_.bind({k:1});function k(e,t){let r=this||{};return function(){let a=arguments;function o(i,s){let n=Object.assign({},i),l=n.className||o.className;r.p=Object.assign({theme:w&&w()},n),r.o=/ *go\d+/.test(l),n.className=_.apply(r,a)+(l?" "+l:""),t&&(n.ref=s);let d=e;return e[0]&&(d=n.as||e,delete n.as),j&&d[0]&&j(n),v(d,n)}return t?t(o):o}}var P=e=>"function"==typeof e,O=(e,t)=>P(e)?e(t):e,N=(a=0,()=>(++a).toString()),C=()=>{if(void 0===o&&"u">typeof window){let e=matchMedia("(prefers-reduced-motion: reduce)");o=!e||e.matches}return o},$=new Map,T=e=>{if($.has(e))return;let t=setTimeout(()=>{$.delete(e),z({type:4,toastId:e})},1e3);$.set(e,t)},D=e=>{let t=$.get(e);t&&clearTimeout(t)},A=(e,t)=>{switch(t.type){case 0:return{...e,toasts:[t.toast,...e.toasts].slice(0,20)};case 1:return t.toast.id&&D(t.toast.id),{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case 2:let{toast:r}=t;return e.toasts.find(e=>e.id===r.id)?A(e,{type:1,toast:r}):A(e,{type:0,toast:r});case 3:let{toastId:a}=t;return a?T(a):e.toasts.forEach(e=>{T(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===a||void 0===a?{...e,visible:!1}:e)};case 4:return void 0===t.toastId?{...e,toasts:[]}:{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)};case 5:return{...e,pausedAt:t.time};case 6:let o=t.time-(e.pausedAt||0);return{...e,pausedAt:void 0,toasts:e.toasts.map(e=>({...e,pauseDuration:e.pauseDuration+o}))}}},S=[],M={toasts:[],pausedAt:void 0},z=e=>{M=A(M,e),S.forEach(e=>{e(M)})},F={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},I=(e={})=>{let[t,r]=(0,d.useState)(M);(0,d.useEffect)(()=>(S.push(r),()=>{let e=S.indexOf(r);e>-1&&S.splice(e,1)}),[t]);let a=t.toasts.map(t=>{var r,a;return{...e,...e[t.type],...t,duration:t.duration||(null==(r=e[t.type])?void 0:r.duration)||(null==e?void 0:e.duration)||F[t.type],style:{...e.style,...null==(a=e[t.type])?void 0:a.style,...t.style}}});return{...t,toasts:a}},L=(e,t="blank",r)=>({createdAt:Date.now(),visible:!0,type:t,ariaProps:{role:"status","aria-live":"polite"},message:e,pauseDuration:0,...r,id:(null==r?void 0:r.id)||N()}),R=e=>(t,r)=>{let a=L(t,e,r);return z({type:2,toast:a}),a.id},H=(e,t)=>R("blank")(e,t);H.error=R("error"),H.success=R("success"),H.loading=R("loading"),H.custom=R("custom"),H.dismiss=e=>{z({type:3,toastId:e})},H.remove=e=>z({type:4,toastId:e}),H.promise=(e,t,r)=>{let a=H.loading(t.loading,{...r,...null==r?void 0:r.loading});return e.then(e=>(H.success(O(t.success,e),{id:a,...r,...null==r?void 0:r.success}),e)).catch(e=>{H.error(O(t.error,e),{id:a,...r,...null==r?void 0:r.error})}),e};var V=(e,t)=>{z({type:1,toast:{id:e,height:t}})},G=()=>{z({type:5,time:Date.now()})},X=e=>{let{toasts:t,pausedAt:r}=I(e);(0,d.useEffect)(()=>{if(r)return;let e=Date.now(),a=t.map(t=>{if(t.duration===1/0)return;let r=(t.duration||0)+t.pauseDuration-(e-t.createdAt);if(r<0){t.visible&&H.dismiss(t.id);return}return setTimeout(()=>H.dismiss(t.id),r)});return()=>{a.forEach(e=>e&&clearTimeout(e))}},[t,r]);let a=(0,d.useCallback)(()=>{r&&z({type:6,time:Date.now()})},[r]),o=(0,d.useCallback)((e,r)=>{let{reverseOrder:a=!1,gutter:o=8,defaultPosition:i}=r||{},s=t.filter(t=>(t.position||i)===(e.position||i)&&t.height),n=s.findIndex(t=>t.id===e.id),l=s.filter((e,t)=>t<n&&e.visible).length;return s.filter(e=>e.visible).slice(...a?[l+1]:[0,l]).reduce((e,t)=>e+(t.height||0)+o,0)},[t]);return{toasts:t,handlers:{updateHeight:V,startPause:G,endPause:a,calculateOffset:o}}},U=k("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${E`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${E`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${e=>e.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${E`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Y=k("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${e=>e.secondary||"#e0e0e0"};
  border-right-color: ${e=>e.primary||"#616161"};
  animation: ${E`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`} 1s linear infinite;
`,q=k("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${e=>e.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${E`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${E`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${e=>e.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,B=k("div")`
  position: absolute;
`,Z=k("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,J=k("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${E`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,K=({toast:e})=>{let{icon:t,type:r,iconTheme:a}=e;return void 0!==t?"string"==typeof t?d.createElement(J,null,t):t:"blank"===r?null:d.createElement(Z,null,d.createElement(Y,{...a}),"loading"!==r&&d.createElement(B,null,"error"===r?d.createElement(U,{...a}):d.createElement(q,{...a})))},Q=e=>`
0% {transform: translate3d(0,${-200*e}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,W=e=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*e}%,-1px) scale(.6); opacity:0;}
`,ee=k("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,et=k("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,er=(e,t)=>{let r=e.includes("top")?1:-1,[a,o]=C()?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[Q(r),W(r)];return{animation:t?`${E(a)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${E(o)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},ea=d.memo(({toast:e,position:t,style:r,children:a})=>{let o=e.height?er(e.position||t||"top-center",e.visible):{opacity:0},i=d.createElement(K,{toast:e}),s=d.createElement(et,{...e.ariaProps},O(e.message,e));return d.createElement(ee,{className:e.className,style:{...o,...r,...e.style}},"function"==typeof a?a({icon:i,message:s}):d.createElement(d.Fragment,null,i,s))});i=d.createElement,h.p=void 0,v=i,w=void 0,j=void 0;var eo=({id:e,className:t,style:r,onHeightUpdate:a,children:o})=>{let i=d.useCallback(t=>{if(t){let r=()=>{a(e,t.getBoundingClientRect().height)};r(),new MutationObserver(r).observe(t,{subtree:!0,childList:!0,characterData:!0})}},[e,a]);return d.createElement("div",{ref:i,className:t,style:r},o)},ei=(e,t)=>{let r=e.includes("top"),a=e.includes("center")?{justifyContent:"center"}:e.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:C()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${t*(r?1:-1)}px)`,...r?{top:0}:{bottom:0},...a}},es=_`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,en=({reverseOrder:e,position:t="top-center",toastOptions:r,gutter:a,children:o,containerStyle:i,containerClassName:s})=>{let{toasts:n,handlers:l}=X(r);return d.createElement("div",{style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:s,onMouseEnter:l.startPause,onMouseLeave:l.endPause},n.map(r=>{let i=r.position||t,s=ei(i,l.calculateOffset(r,{reverseOrder:e,gutter:a,defaultPosition:t}));return d.createElement(eo,{id:r.id,key:r.id,onHeightUpdate:l.updateHeight,className:r.visible?es:"",style:s},"custom"===r.type?O(r.message,r):o?o(r):d.createElement(ea,{toast:r,position:i}))}))};r(78);var el=r(5152),ed=r.n(el);let eu=ed()(()=>Promise.all([r.e(146),r.e(603)]).then(r.bind(r,8603))),ec=ed()(()=>Promise.all([r.e(955),r.e(616)]).then(r.bind(r,5495))),ep=ed()(()=>Promise.all([r.e(146),r.e(675),r.e(700)]).then(r.bind(r,8700))),ef=ed()(()=>Promise.all([r.e(955),r.e(445),r.e(13),r.e(146),r.e(99),r.e(34)]).then(r.bind(r,7034))),em=ed()(()=>Promise.all([r.e(955),r.e(146),r.e(871),r.e(675),r.e(943)]).then(r.bind(r,7943))),eh=ed()(()=>Promise.all([r.e(955),r.e(146),r.e(871),r.e(421)]).then(r.bind(r,9421))),eb=ed()(()=>Promise.all([r.e(955),r.e(146),r.e(768)]).then(r.bind(r,7599))),ey=ed()(()=>r.e(649).then(r.bind(r,9649))),eg=ed()(()=>r.e(978).then(r.bind(r,4978))),ex=ed()(()=>r.e(825).then(r.bind(r,8825))),e_={title:"Simon Andrews | Full Stack Engineer",description:"Software engineer."},ev=ed()(()=>Promise.all([r.e(223),r.e(157)]).then(r.bind(r,157)),{loadableGenerated:{webpack:()=>[157]},ssr:!1});function ew(){return(0,s.jsx)("div",{className:"".concat(l().className," bg-gray-50 text-gray-950 relative dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90 !scroll-smooth"),children:(0,s.jsx)(ex,{children:(0,s.jsxs)(ey,{children:[(0,s.jsx)(eb,{}),(0,s.jsxs)("div",{className:"flex flex-col items-center",children:[(0,s.jsx)(ef,{}),(0,s.jsx)(eh,{}),(0,s.jsx)(ec,{}),(0,s.jsx)(ep,{}),(0,s.jsx)(em,{}),(0,s.jsx)(eu,{})]}),(0,s.jsx)(en,{position:"top-right"}),(0,s.jsx)(eg,{}),(0,s.jsx)(ev,{})]})})})}},78:function(){},4076:function(e){e.exports={style:{fontFamily:"'__Nunito_4541b9', '__Nunito_Fallback_4541b9'",fontStyle:"normal"},className:"__className_4541b9"}},5152:function(e,t,r){e.exports=r(948)}},function(e){e.O(0,[774,161,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);