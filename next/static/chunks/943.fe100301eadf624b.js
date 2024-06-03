"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[943,649],{7943:function(e,t,n){let i,o;n.r(t),n.d(t,{default:function(){return Y}});var r=n(5893),a=n(7294),s=n(2850),l=n(1959),c=n(5675),d=n.n(c),g=n(3234),u=n(6681),f=n(5487),m=n(6405),h=n(7367);let p=new WeakMap;function A({target:e,contentRect:t,borderBoxSize:n}){var i;null===(i=p.get(e))||void 0===i||i.forEach(i=>{i({target:e,contentSize:t,get size(){return function(e,t){if(t){let{inlineSize:e,blockSize:n}=t[0];return{width:e,height:n}}return e instanceof SVGElement&&"getBBox"in e?e.getBBox():{width:e.offsetWidth,height:e.offsetHeight}}(e,n)}})})}function v(e){e.forEach(A)}let y=new Set;var b=n(3967),x=n(3038);let w=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),E=()=>({time:0,x:w(),y:w()}),S={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function k(e,t,n,i){let o=n[t],{length:r,position:a}=S[t],s=o.current,l=n.time;o.current=e["scroll"+a],o.scrollLength=e["scroll"+r]-e["client"+r],o.offset.length=0,o.offset[0]=0,o.offset[1]=o.scrollLength,o.progress=(0,b.Y)(0,o.scrollLength,o.current);let c=i-l;o.velocity=c>50?0:(0,x.R)(o.current-s,c)}let j={Enter:[[0,1],[1,1]],Exit:[[0,0],[1,0]],Any:[[1,0],[0,1]],All:[[0,0],[1,1]]},L={start:0,center:.5,end:1};function C(e,t,n=0){let i=0;if(void 0!==L[e]&&(e=L[e]),"string"==typeof e){let t=parseFloat(e);e.endsWith("px")?i=t:e.endsWith("%")?e=t/100:e.endsWith("vw")?i=t/100*document.documentElement.clientWidth:e.endsWith("vh")?i=t/100*document.documentElement.clientHeight:e=t}return"number"==typeof e&&(i=t*e),n+i}let D=[0,0];var R=n(4606),W=n(533);let P={x:0,y:0},N=new WeakMap,B=new WeakMap,z=new WeakMap,U=e=>e===document.documentElement?window:e;var O=n(8868);function J(e,t){(0,f.K)(!!(!t||t.current),`You have defined a ${e} options but the provided ref is not yet hydrated, probably because it's defined higher up the tree. Try calling useScroll() in the same component as the ref, or setting its \`layoutEffect: false\` option.`)}let M=()=>({scrollX:(0,g.B)(0),scrollY:(0,g.B)(0),scrollXProgress:(0,g.B)(0),scrollYProgress:(0,g.B)(0)}),T=e=>"object"==typeof e&&e.mix,H=e=>T(e)?e.mix:void 0;var I=n(6014);function q(e,t,n,i){let o="function"==typeof t?t:function(...e){let t=!Array.isArray(e[0]),n=t?0:-1,i=e[0+n],o=e[1+n],r=e[2+n],a=e[3+n],s=(0,R.s)(o,r,{mixer:H(r[0]),...a});return t?s(i):s}(t,n,i);return Array.isArray(e)?G(e,o):G([e],([e])=>o(e))}function G(e,t){let n=(0,u.h)(()=>[]);return function(e,t){let n=function(e){let t=(0,u.h)(()=>(0,g.B)(e)),{isStatic:n}=(0,a.useContext)(I._);if(n){let[,n]=(0,a.useState)(e);(0,a.useEffect)(()=>t.on("change",n),[])}return t}(t()),i=()=>n.set(t());return i(),(0,O.L)(()=>{let t=()=>m.Wi.update(i,!1,!0),n=e.map(e=>e.on("change",t));return()=>{n.forEach(e=>e()),(0,m.Pn)(i)}}),n}(e,()=>{n.length=0;let i=e.length;for(let t=0;t<i;t++)n[t]=e[t].get();return t(n)})}var V=n(4146),K=n(1954);function Q(e){let{title:t,description:n,tags:s,icons:l,imageUrl:c,githubLink:g,demoLink:A,urlLink:b}=e,x=(0,a.useRef)(null),{scrollYProgress:w}=function({container:e,target:t,layoutEffect:n=!0,...r}={}){let s=(0,u.h)(M),l=n?O.L:a.useEffect;return l(()=>(J("target",t),J("container",e),function(e,{container:t=document.documentElement,...n}={}){let r=z.get(t);r||(r=new Set,z.set(t,r));let a=E(),s=function(e,t,n,i={}){return{measure:()=>(function(e,t=e,n){if(n.x.targetOffset=0,n.y.targetOffset=0,t!==e){let i=t;for(;i&&i!==e;)n.x.targetOffset+=i.offsetLeft,n.y.targetOffset+=i.offsetTop,i=i.offsetParent}n.x.targetLength=t===e?t.scrollWidth:t.clientWidth,n.y.targetLength=t===e?t.scrollHeight:t.clientHeight,n.x.containerLength=e.clientWidth,n.y.containerLength=e.clientHeight})(e,i.target,n),update:t=>{k(e,"x",n,t),k(e,"y",n,t),n.time=t,(i.offset||i.target)&&function(e,t,n){let{offset:i=j.All}=n,{target:o=e,axis:r="y"}=n,a="y"===r?"height":"width",s=o!==e?function(e,t){let n={x:0,y:0},i=e;for(;i&&i!==t;)if(i instanceof HTMLElement)n.x+=i.offsetLeft,n.y+=i.offsetTop,i=i.offsetParent;else if(i instanceof SVGGraphicsElement&&"getBBox"in i){let{top:e,left:t}=i.getBBox();for(n.x+=t,n.y+=e;i&&"svg"!==i.tagName;)i=i.parentNode}return n}(o,e):P,l=o===e?{width:e.scrollWidth,height:e.scrollHeight}:{width:o.clientWidth,height:o.clientHeight},c={width:e.clientWidth,height:e.clientHeight};t[r].offset.length=0;let d=!t[r].interpolate,g=i.length;for(let e=0;e<g;e++){let n=function(e,t,n,i){let o=Array.isArray(e)?e:D,r=0;return"number"==typeof e?o=[e,e]:"string"==typeof e&&(o=(e=e.trim()).includes(" ")?e.split(" "):[e,L[e]?e:"0"]),C(o[0],n,i)-C(o[1],t)}(i[e],c[a],l[a],s[r]);d||n===t[r].interpolatorOffsets[e]||(d=!0),t[r].offset[e]=n}d&&(t[r].interpolate=(0,R.s)(t[r].offset,(0,W.Y)(i)),t[r].interpolatorOffsets=[...t[r].offset]),t[r].progress=t[r].interpolate(t[r].current)}(e,n,i)},notify:()=>t(n)}}(t,e,a,n);if(r.add(s),!N.has(t)){let e=()=>{for(let e of r)e.measure()},n=()=>{for(let e of r)e.update(h.frameData.timestamp)},a=()=>{for(let e of r)e.notify()},s=()=>{m.Wi.read(e,!1,!0),m.Wi.update(n,!1,!0),m.Wi.update(a,!1,!0)};N.set(t,s);let l=U(t);window.addEventListener("resize",s,{passive:!0}),t!==document.documentElement&&B.set(t,"function"==typeof t?(y.add(t),o||(o=()=>{let e={width:window.innerWidth,height:window.innerHeight},t={target:window,size:e,contentSize:e};y.forEach(e=>e(t))},window.addEventListener("resize",o)),()=>{y.delete(t),!y.size&&o&&(o=void 0)}):function(e,t){i||"undefined"==typeof ResizeObserver||(i=new ResizeObserver(v));let n=function(e,t,n){var i;if("string"==typeof e){let o=document;t&&((0,f.k)(!!t.current,"Scope provided, but no element detected."),o=t.current),n?(null!==(i=n[e])&&void 0!==i||(n[e]=o.querySelectorAll(e)),e=n[e]):e=o.querySelectorAll(e)}else e instanceof Element&&(e=[e]);return Array.from(e||[])}(e);return n.forEach(e=>{let n=p.get(e);n||(n=new Set,p.set(e,n)),n.add(t),null==i||i.observe(e)}),()=>{n.forEach(e=>{let n=p.get(e);null==n||n.delete(t),(null==n?void 0:n.size)||null==i||i.unobserve(e)})}}(t,s)),l.addEventListener("scroll",s,{passive:!0})}let l=N.get(t);return m.Wi.read(l,!1,!0),()=>{var e;(0,m.Pn)(l);let n=z.get(t);if(!n||(n.delete(s),n.size))return;let i=N.get(t);N.delete(t),i&&(U(t).removeEventListener("scroll",i),null===(e=B.get(t))||void 0===e||e(),window.removeEventListener("resize",i))}}(({x:e,y:t})=>{s.scrollX.set(e.current),s.scrollXProgress.set(e.progress),s.scrollY.set(t.current),s.scrollYProgress.set(t.progress)},{...r,container:(null==e?void 0:e.current)||void 0,target:(null==t?void 0:t.current)||void 0})),[]),s}({target:x,offset:["0 1","1.33 1"]}),S=q(w,[0,1],[.8,1]),T=q(w,[0,1],[.6,1]);return(0,r.jsx)(V.E.div,{ref:x,style:{scale:S,opacity:T},className:"group mb-3 sm:mb-8 last:mb-0",children:(0,r.jsxs)("section",{className:"bg-gray-100 max-w-[58rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative lg:min-h-[21rem] hover:bg-gray-200 transition dark:text-white dark:bg-white/10 dark:hover:bg-white/20",children:[(0,r.jsxs)("div",{className:"pt-4 pb-7 px-5 md:pl-10 md:pr-2 md:pt-10 lg:max-w-[50%] flex flex-col h-full",children:[(0,r.jsx)("h3",{className:"text-2xl font-semibold mb-4",children:t}),(0,r.jsxs)("ul",{className:"flex flex-wrap gap-2 mb-3 sm:mt-auto",children:[(0,r.jsxs)("p",{className:"font-bold text-gray-500 dark:text-white/70",children:["Made with:"," "]}),l.map((e,t)=>(0,r.jsx)(K.JO,{icon:e,className:"mr-3 text-2xl"},t))]}),(0,r.jsx)("p",{className:"mt-2 leading-relaxed text-gray-700 dark:text-white/70 mb-3",children:n}),(0,r.jsx)("div",{className:"flex"})]}),(0,r.jsx)(d(),{src:c,alt:"Project I worked on",quality:95,className:"absolute hidden lg:block top-[60px] -right-10 w-[28.25rem] rounded-t-lg shadow-2xl scale-[1.0]   transition    lg:scale-[1.1]   group-hover:-translate-x-3   group-hover:translate-y-3   group-hover:-rotate-2   "})]})})}var F=n(8099);function Y(){let{ref:e}=(0,F.r)("Projects",.1);return(0,r.jsxs)("section",{ref:e,id:"projects",className:"scroll-mt-28 mb-28",children:[(0,r.jsx)(s.Z,{children:"Top projects"}),(0,r.jsx)("div",{children:l.nD.map((e,t)=>(0,r.jsx)(a.Fragment,{children:(0,r.jsx)(Q,{...e})},t))})]})}},2850:function(e,t,n){n.d(t,{Z:function(){return o}});var i=n(5893);function o(e){let{children:t}=e;return(0,i.jsx)("h2",{className:"text-5xl font-medium capitalize mb-8 text-center mt-16",children:t})}n(7294)},9649:function(e,t,n){n.r(t),n.d(t,{ActiveSectionContext:function(){return r},default:function(){return a},useActiveSectionContext:function(){return s}});var i=n(5893),o=n(7294);let r=(0,o.createContext)(null);function a(e){let{children:t}=e,[n,a]=(0,o.useState)("Home"),[s,l]=(0,o.useState)(0);return(0,i.jsx)(r.Provider,{value:{activeSection:n,setActiveSection:a,timeOfLastClick:s,setTimeOfLastClick:l},children:t})}function s(){let e=(0,o.useContext)(r);if(null===e)throw Error("useActiveSectionContext must be used within an ActiveSectionContextProvider");return e}},1959:function(e,t,n){n.d(t,{$c:function(){return a},Ok:function(){return r},nD:function(){return s},MG:function(){return l},ZU:function(){return c}});var i=n(7294),o=n(471);let r=[{name:"Home",hash:"#home"},{name:"Skills",hash:"#skills"},{name:"Experience",hash:"#experience"},{name:"Education",hash:"#education"},{name:"Projects",hash:"#projects"},{name:"Contact",hash:"#contact"}],a=[{title:"Full Stack Engineer",location:"Apiko - remote",description:" * Lead the development of an e-commerce platform using Angular 17, NgRx, and Angular CLI, facilitating seamless online transactions and user experiences * Contributed to the development of model- driven and template-driven forms in Angular 14 / 17 * Led the development of Healthcare using Next.js, leveraging its SSR capabilities for improved performance and SEO * Built robust e-commerce backend services with Spring Boot, leveraging core Java technologies including concurrency, JPA, Hibernate and multithreading * Designed highly available and scalable architectures of microservice using AWS Auto Scaling, Amazon Aurora, and Amazon DynamoDB * Utilized Jest, Cypress, and React Testing Library to conduct extensive tests, enabling early bug detection and fostering agile development practices",icon:i.createElement(o.zQU),date:"Jun 2021 - Apr 2024"},{title:"Full Stack Developer",location:"KMD - remote",description:" * Refactored a legacy AngularJS codebase to Angular 14, optimizing performance and implementing modern best practices and technologies * Developed user interface using the Angular 14 framework, leveraging core concepts such as Ng Modules, services, dependency injection, and decorators *  Leveraged React and Tailwind CSS to craft dynamic, visually appealing user interfaces for interactive ads and landing pages * Utilized Spring Boot to leverage DynamoDB and Amazon API Gateway, delivering data for frontend through seamlessly integrated REST APIs * Developed detailed test suite for functional and integration testing, utilizing JUnit, and Selenium",icon:i.createElement(o.zQU),date:"Mar 2019 - May 2021"},{title:"Front End Developer",location:"KMD - On-site",description:" * Developed single-page applications utilizing the Covalent, leveraging Angular 4, RxJS, and key technologies such as Karma, Jasmine, D3, NGX, and SCSS * Updated skills with Mobile Web Automation Framework Angular JS in Jasmine, Protractor using this testing the AJAX components * Built and enhanced features across multiple React-based web applications using TypeScript, Next.js, Material UI, and GraphQL with Apollo Client * Developed projects in the applications in front end technologies Angular 4/8 * Defined content models, data structures, and API endpoints for seamless integration between the CMS and React frontend * Engaged in full-cycle agile SDLC utilizing Jira and Confluence for seamless collaboration and project management",icon:i.createElement(o.zQU),date:"Aug 2016 - Feb 2019"}],s=[{title:"Noo.ma ( Ecommerce  )",description:"noo.ma is an online store offering contemporary furniture, produced locally in Poland. They feature over 150 original designs and boast a high customer satisfaction rating. The site offers a range of products including storage solutions, tables, seating, beds, accessories, and textiles. Free shipping is available on orders over €100. The platform also supports professionals through a B2B service, providing special pricing, dedicated account management, and customized delivery options. Payment methods include major credit cards, PayPal, and Klarna.",tags:["JavaScript","React","Express.js","AWS"],icons:["vscode-icons:file-type-angular","logos:javascript","logos:spring-icon","logos:java","devicon:postgresql-wordmark","logos:aws"],imageUrl:{src:"/next/static/media/ecommerce.37159995.png",height:897,width:1802,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAb0lEQVR42gFkAJv/AOjo5+jo5+3t7enq6urq6uvr6+3s7Obl5QCloZqro5XRy7/AtKq9tKu2rqi6raa5s64AYFVLd3VxwListJ2Ln4+BgnBjgG5gelxDANjX1d3d3e/t7O3p5+nn5uDe3OTi4dnV00vkR1LrRqOOAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4},githubLink:"https://github.com/ben04rogers/cab432-assignment-2",demoLink:"https://www.youtube.com/watch?v=uhyC0M4WIl4"},{title:"Esky  ( Booking )",description:"eSky Group is a leading online travel agency established in 2004. It operates in multiple countries, providing comprehensive travel services to customers worldwide. The company focuses on leveraging technology to simplify travel planning and booking, offering competitive prices and a wide range of travel options.",tags:["PHP","Laravel","JavaScript","Tailwind","MySQL"],icons:["logos:nextjs-icon","logos:javascript","devicon:tailwindcss","vscode-icons:file-type-node","logos:mysql"],imageUrl:{src:"/next/static/media/booking.58c3e504.png",height:894,width:1301,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAIAAAD38zoCAAAAiElEQVR42gF9AIL/ANfb3dDOzsfL08DFzcXDw8jKzNPU0+Dh4gCPmplsWURyeYdve49nbHVhXFBEKgCVlZIAlKGvbWlzgXt8pJJ0nolxdXWUanJ/qq+1AJOftgBOkWV5oJl9PH9RAB+C7KGjwNvRxwC4ubuanKGam5+QjI19gYSUqtvXq6bfxq+xnEZ++KaTwgAAAABJRU5ErkJggg==",blurWidth:8,blurHeight:5},urlLink:"https://clownfish-app-48u2r.ondigitalocean.app/"},{title:"Lokalebasen ( Real Estate )",description:"Lokalebasen.dk is based in Copenhagen, Denmark, and operates as a comprehensive platform for commercial property rentals across Denmark and other international markets through its MatchOffice network. They offer a variety of commercial spaces including offices, warehouses, retail, and parking spaces.",tags:["Java","MariaDB","Swing"],icons:["logos:django-icon","logos:bootstrap","skill-icons:jquery","logos:mysql"],imageUrl:{src:"/next/static/media/estate.16427531.png",height:924,width:1284,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAoUlEQVR42gGWAGn/AOrt8t7h8dTV19fY3N3e3vf49/r6+vz8/ADCyNaImbhWbIZYc5NEWWbn5+T7+vv9/f0AsbS0gYR9l46EjZCOWV9j5ebm+/3//f7/AJ6jnIyDeqeZjZuRhpePi+3n5P/28P359wDz9PXz9PTw8vP09fX7/Pz78ur86dv+9vEA8fHw+Pj4/f38/f39/////v///P///v//FkR2nP3udQEAAAAASUVORK5CYII=",blurWidth:8,blurHeight:6}},{title:"CARGOFUL",description:"Cargoful is a technology company based in Nova Milanese, Italy, specializing in AI- powered software for optimizing transportation operations.Their solutions enhance efficiency, sustainability, and user experience in supply chain management.Cargoful focuses on innovation, providing tools for better decision - making and operational control while offering comprehensive customer support, consulting, and continuous improvement services.",tags:["JavaScript","React","Bootstrap"],icons:["logos:react","logos:javascript","devicon:materialui"],imageUrl:{src:"/next/static/media/animation.04c2351a.png",height:906,width:1878,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAbElEQVR42mOIsrfKD/QOsjPjEteRlDZSNg+xC8pxDslgCPNxL8tJbSwrKCoqS82pMfHI0LYJYZDQZbC0cY1JyXdyDwxyt/fx9DcyczMxNtWUtmZQ0rfWMPfkULARVrLTVZXR11BQM3a0sosAADsAGMWCiqkcAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:4}}],l="https://gmail.com",c=[{name:"JavaScript",icon:"skill-icons:javascript"},{name:"Angular",icon:"vscode-icons:file-type-angular"},{name:"React",icon:"logos:react"},{name:"Vue",icon:"devicon:vuejs"},{name:"Java",icon:"logos:java"},{name:"Spring Boot",icon:"logos:spring-icon"},{name:"Python",icon:"logos:python"},{name:"Django",icon:"logos:django-icon"},{name:"Node.js",icon:"vscode-icons:file-type-node"},{name:"express",icon:"skill-icons:expressjs-light"},{name:"Nest",icon:"vscode-icons:file-type-nest-middleware-ts"},{name:"MySQL",icon:"logos:mysql"},{name:"MongoDB",icon:"vscode-icons:file-type-mongo"},{name:"Git",icon:"logos:git-icon"},{name:"AWS",icon:"skill-icons:aws-light"},{name:"Docker",icon:"logos:docker-icon"}]},8099:function(e,t,n){n.d(t,{r:function(){return a}});var i=n(9649),o=n(7294),r=n(2708);function a(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:.75,{ref:n,inView:a}=(0,r.YD)({threshold:t}),{setActiveSection:s,timeOfLastClick:l}=(0,i.useActiveSectionContext)();return(0,o.useEffect)(()=>{a&&Date.now()-l>1e3&&s(e)},[a,s,l,e]),{ref:n}}}}]);