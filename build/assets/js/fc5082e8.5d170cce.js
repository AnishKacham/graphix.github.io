"use strict";(self.webpackChunkgraphix=self.webpackChunkgraphix||[]).push([[787],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>u});var i=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,n=function(e,t){if(null==e)return{};var r,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=i.createContext({}),p=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(r),m=n,u=h["".concat(l,".").concat(m)]||h[m]||d[m]||a;return r?i.createElement(u,o(o({ref:t},c),{},{components:r})):i.createElement(u,o({ref:t},c))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:n,o[1]=s;for(var p=2;p<a;p++)o[p]=r[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6959:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var i=r(7462),n=(r(7294),r(3905));const a={sidebar_label:"Metropolis Light Transport",sidebar_position:3},o=void 0,s={unversionedId:"Metropolis-Light-Transport",id:"Metropolis-Light-Transport",title:"Metropolis-Light-Transport",description:"Markov Chain",source:"@site/docs/Metropolis-Light-Transport.md",sourceDirName:".",slug:"/Metropolis-Light-Transport",permalink:"/docs/Metropolis-Light-Transport",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_label:"Metropolis Light Transport",sidebar_position:3},sidebar:"defaultSidebar",previous:{title:"Path Tracing",permalink:"/docs/Path-Tracing"},next:{title:"Acknowledgements",permalink:"/docs/Acknowledgements"}},l={},p=[{value:"Markov Chain",id:"markov-chain",level:2},{value:"Markov Chain Monte Carlo - MCMC",id:"markov-chain-monte-carlo---mcmc",level:2},{value:"Metropolis-Hastings algorithm",id:"metropolis-hastings-algorithm",level:2},{value:"Our experience",id:"our-experience",level:2}],c={toc:p},h="wrapper";function d(e){let{components:t,...a}=e;return(0,n.kt)(h,(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"markov-chain"},"Markov Chain"),(0,n.kt)("p",null,"This is a stochastic model comprising of objects usually defined as a family of random variables, describing a sequence of possible events in which probability of next event depends solely on that of the current state. To avoid any process termination, it is assumed that all possible states and the nodes in transition matrix are included in definition of the process itself.\nMarkovian processes are the basis for simulation methods called ",(0,n.kt)("em",{parentName:"p"},"Markov Chain Monte Carlo")),(0,n.kt)("h2",{id:"markov-chain-monte-carlo---mcmc"},"Markov Chain Monte Carlo - MCMC"),(0,n.kt)("p",null,"These methods cover a class of algorithms for sampling from a probability distribution. A markov chain (which has the desired distribution as its equilibrium distribution) is constructed and states from the chain are recorded to get a sample of the desired distribution. The model can be improved by increasing the number of steps involved."),(0,n.kt)("h2",{id:"metropolis-hastings-algorithm"},"Metropolis-Hastings algorithm"),(0,n.kt)("p",null,"This is an MCMC method to get a sequence of random samples from a desired probability distribution, particularily useful when direct sampling is difficult. The algorithm finds its uses in approximating distitbutions and evaluating statistical integrals.\nThe algorithm can draw samples from a distribution with probability density P(x) , given a function f(x) which is ",(0,n.kt)("em",{parentName:"p"},"proportional")," to our density P. It iteratively generates a sequence of samples such that with production of more samples, the distribution matches closer to the actual desired one.\nAt each iteration, a candidate is picked for the next random value based on current state. This is either accepted or rejected with some probability threshold, with the current value being passed on for later iterations in latter case.  "),(0,n.kt)("h1",{id:"metropolis-light-transport"},"Metropolis Light Transport"),(0,n.kt)("p",null,"MLT generates a sequence of light-carrying paths through the scene, where each path is found by mutating the previous path in some manner. These path mutations are done in a way that ensures that the overall distribution of sampled paths is proportional to the contribution the paths make to the image being generated.\nMLT provides an important advantage over methods based on independent sample generation - it can explore the path space locally. This allows MLT to render challenging scenes like a dark room with light only entering from a partially open door. "),(0,n.kt)("h2",{id:"our-experience"},"Our experience"),(0,n.kt)("p",null,"We assumed that the mutations have symmetric transitions, an assumption which lowered the quality of the image.\nWe also wished to implement bidirectional mutations, which required Bidirectional Path Tracing to be implemented - something we hope to do in the near future."),(0,n.kt)("p",null,"Here is an image using the MLT algorithm we have implemented (10 mutations per pixel):",(0,n.kt)("br",{parentName:"p"}),"\n",(0,n.kt)("img",{alt:"alt text for screen readers",src:r(764).Z,title:"mlt with 10 mutations per pixel",width:"718",height:"746"})))}d.isMDXComponent=!0},764:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/mlt_10_mutations-04b20b58bca3b01f872f1e033738d04b.jpeg"}}]);