"use strict";(self.webpackChunkgraphix=self.webpackChunkgraphix||[]).push([[865],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(r),d=i,h=u["".concat(l,".").concat(d)]||u[d]||g[d]||a;return r?n.createElement(h,o(o({ref:t},p),{},{components:r})):n.createElement(h,o({ref:t},p))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,o[1]=s;for(var c=2;c<a;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1764:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>g,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const a={sidebar_label:"Path Tracing",sidebar_position:2},o=void 0,s={unversionedId:"Path-Tracing",id:"Path-Tracing",title:"Path-Tracing",description:"Rendering equation",source:"@site/docs/Path-Tracing.md",sourceDirName:".",slug:"/Path-Tracing",permalink:"/graphix/docs/Path-Tracing",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Path Tracing",sidebar_position:2},sidebar:"defaultSidebar",previous:{title:"Introduction - Ray Tracing",permalink:"/graphix/docs/intro"},next:{title:"Metropolis Light Transport",permalink:"/graphix/docs/Metropolis-Light-Transport"}},l={},c=[{value:"Rendering equation",id:"rendering-equation",level:2},{value:"Monte Carlo methods",id:"monte-carlo-methods",level:2}],p={toc:c},u="wrapper";function g(e){let{components:t,...a}=e;return(0,i.kt)(u,(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"rendering-equation"},"Rendering equation"),(0,i.kt)("p",null,"In computer graphics, the rendering equation is an integral equation in which the equilibrium radiance leaving a point is given as the sum of emitted plus reflected radiance under a geometric optics approximation - it is based on the law of conservation of energy. The various realistic rendering techniques in computer graphics attempt to solve this equation."),(0,i.kt)("h2",{id:"monte-carlo-methods"},"Monte Carlo methods"),(0,i.kt)("p",null,"These are a set of computational algorithms relying on random sampling to get numerical results. The Monte Carlo methods find their use primarily in problems inolving probabilistic interpretation. The underlying concept is to use randomness to solve problems that might be deterministic in principle. Monte Carlo methods are mainly used in three problem classes: optimization, numerical integration, and generating draws from a probability distribution."),(0,i.kt)("h1",{id:"path-tracing"},"Path Tracing"),(0,i.kt)("p",null,"Path tracing was the first general-purpose unbiased Monte Carlo light transport algorithm used in graphics. It was introduced as an algorithm to find a numerical solution to the integral of the rendering equation.",(0,i.kt)("br",{parentName:"p"}),"\n","Path tracing incrementally generates paths of scattering events starting at the camera and ending at light sources in the scene. Repeated sampling of any given pixel eventually causes the average of the samples to converge on the correct solution of the rendering equation.  "),(0,i.kt)("p",null,"Here is an image using the Path Tracing algorithm we have implemented (10 samples per pixel):\n",(0,i.kt)("img",{alt:"alt text for screen readers",src:r(1508).Z,title:"Path Tracing with 10 Samples per pixel",width:"722",height:"738"})))}g.isMDXComponent=!0},1508:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/path_tracing_10_samples-21df51ef033087ee12950acb36e36b17.jpeg"}}]);