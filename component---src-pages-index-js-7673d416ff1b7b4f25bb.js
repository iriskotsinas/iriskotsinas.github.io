(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),o=r(a("8OQS")),l=r(a("pVnL")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(y&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=p(t||a||[]);return r&&r.src},p=function(e){if(y&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),g=function(e){var t=u(e),a=m(t);return h[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,y="undefined"!=typeof window,v=y&&window.IntersectionObserver,E=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function N(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},L=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?N(e,!0):"")+N(e)})).join("")+"<img "+d+s+o+a+r+t+n+i+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,o=d.default.createElement(j,(0,l.default)({ref:t,src:a},n,{ariaHidden:s}));return r.length>1?d.default.createElement("picture",null,i(r),o):o})),j=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,l.default)({"aria-hidden":m,sizes:a,srcSet:r,src:i},p,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));j.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var k=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=y&&g(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||y&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:y}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:g(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=g(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=m(t))&&(h[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,h=e.fluid,g=e.fixed,b=e.backgroundColor,y=e.durationFadeIn,v=e.Tag,E=e.itemProp,S=e.loading,N=e.draggable,O=h||g;if(!O)return null;var k=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,l.default)({opacity:k?1:0,transition:z?"opacity "+y+"ms":"none"},o),T="boolean"==typeof b?"lightgray":b,_={transitionDelay:y+"ms"},C=(0,l.default)({opacity:this.state.imgLoaded?0:1},z&&_,o,f),P={title:t,alt:this.state.isVisible?"":a,style:C,className:m,itemProp:E},H=this.state.isHydrated?p(O):O[0];if(h)return d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:H.maxWidth?H.maxWidth+"px":null,maxHeight:H.maxHeight?H.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(H.srcSet)},d.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/H.aspectRatio+"%"}}),T&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:T,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&_)}),H.base64&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:P,imageVariants:O,generateSources:I}),H.tracedSVG&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:P,imageVariants:O,generateSources:x}),this.state.isVisible&&d.default.createElement("picture",null,w(O),d.default.createElement(j,{alt:a,title:t,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S,draggable:N})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,l.default)({alt:a,title:t,loading:S},H,{imageVariants:O}))}}));if(g){var W=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:H.width,height:H.height},n);return"inherit"===n.display&&delete W.display,d.default.createElement(v,{className:(r||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(H.srcSet)},T&&d.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:T,width:H.width,opacity:this.state.imgLoaded?0:1,height:H.height},z&&_)}),H.base64&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:P,imageVariants:O,generateSources:I}),H.tracedSVG&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:P,imageVariants:O,generateSources:x}),this.state.isVisible&&d.default.createElement("picture",null,w(O),d.default.createElement(j,{alt:a,title:t,width:H.width,height:H.height,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S,draggable:N})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,l.default)({alt:a,title:t,loading:S},H,{imageVariants:O}))}}))}return null},t}(d.default.Component);k.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var z=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),V=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function T(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}k.propTypes={resolutions:z,sizes:V,fixed:T(c.default.oneOfType([z,c.default.arrayOf(z)])),fluid:T(c.default.oneOfType([V,c.default.arrayOf(V)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var _=k;t.default=_},RXBc:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),i=a.n(r),n=a("qhky"),s=a("7vrA"),o=a("/eHF"),l=a.n(o),d=a("oqc9"),c=a("CVNw"),u=a.n(c),f=a("lO2I"),m=function(){var e=Object(r.useState)(!1),t=e[0],a=e[1],n=Object(r.useState)(!1),o=n[0],c=n[1];return Object(r.useEffect)((function(){window.innerWidth>769?(a(!0),c(!1)):(c(!0),a(!1))}),[]),i.a.createElement("section",{id:"hero",className:"jumbotron"},i.a.createElement(s.a,null,i.a.createElement(l.a,{left:t,bottom:o,duration:500,delay:250,distance:"30px"},i.a.createElement("h1",{className:"hero-title"},i.a.createElement("span",{className:"text-color-main"},"Iris Kotsinas"),i.a.createElement("br",null),i.a.createElement("p",{className:"text-color-third"},"Final year M.Sc. student in Media Technology and Engineering")))),i.a.createElement(s.a,null,i.a.createElement("div",{className:"chevron-down-container"},i.a.createElement(d.Link,{to:"about",smooth:!0,duration:1e3},i.a.createElement(u.a,{path:f.b,size:2})))))},p=a("wx14"),h=a("zLVn"),g=a("TSYQ"),b=a.n(g),y=a("vUet"),v=["bsPrefix","className","noGutters","as"],E=["xl","lg","md","sm","xs"],w=i.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,n=e.noGutters,s=e.as,o=void 0===s?"div":s,l=Object(h.a)(e,v),d=Object(y.a)(a,"row"),c=d+"-cols",u=[];return E.forEach((function(e){var t,a=l[e];delete l[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&u.push(""+c+r+"-"+t)})),i.a.createElement(o,Object(p.a)({ref:t},l,{className:b.a.apply(void 0,[r,d,n&&"no-gutters"].concat(u))}))}));w.displayName="Row",w.defaultProps={noGutters:!1};var S=w,x=["bsPrefix","className","as"],I=["xl","lg","md","sm","xs"],N=i.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,n=e.as,s=void 0===n?"div":n,o=Object(h.a)(e,x),l=Object(y.a)(a,"col"),d=[],c=[];return I.forEach((function(e){var t,a,r,i=o[e];if(delete o[e],"object"==typeof i&&null!=i){var n=i.span;t=void 0===n||n,a=i.offset,r=i.order}else t=i;var s="xs"!==e?"-"+e:"";t&&d.push(!0===t?""+l+s:""+l+s+"-"+t),null!=r&&c.push("order"+s+"-"+r),null!=a&&c.push("offset"+s+"-"+a)})),d.length||d.push(l),i.a.createElement(s,Object(p.a)({},o,{ref:t,className:b.a.apply(void 0,[r].concat(d,c))}))}));N.displayName="Col";var O=N,L=a("bOu6"),R=a("Wbzz"),j=a("9eSz"),k=a.n(j),z=function(e){var t=e.filename,a=e.alt;return i.a.createElement(R.StaticQuery,{query:"3821511162",render:function(e){var r=e.images.edges.find((function(e){return e.node.relativePath.includes(t)}));if(console.log(r),!r)return null;var n=r.node.childImageSharp.fixed;return i.a.createElement(k.a,{className:"rounded shadow-lg",alt:a,fixed:n})}})},V=a("y2lX"),T=a.n(V),_=function(){var e=Object(r.useState)(!1),t=e[0],a=e[1],n=Object(r.useState)(!1),o=n[0],c=n[1];return Object(r.useEffect)((function(){window.innerWidth>769?(a(!0),c(!1)):(c(!0),a(!1))}),[]),i.a.createElement("section",{id:"about"},i.a.createElement(s.a,{className:"about-container"},i.a.createElement(L.a,{title:"About Me"}),i.a.createElement(S,{className:"about-wrapper"},i.a.createElement(O,{md:5,sm:12},i.a.createElement(l.a,{bottom:!0,duration:1e3,delay:600,distance:"30px"},i.a.createElement("div",{className:"about-wrapper__image"},i.a.createElement(z,{alt:"profile picture",filename:"IMG_0034.png"})))),i.a.createElement(O,{md:7,sm:12},i.a.createElement(l.a,{left:t,bottom:o,duration:1e3,delay:1e3,distance:"30px"},i.a.createElement("div",{className:"about-wrapper__info"},i.a.createElement("p",{className:"about-wrapper__info-text"},"My name is Iris Kotsinas and I am a 24-year old Master of Science student in Media Technology and Engineering, graduating in June 2022 from Linköping University."),i.a.createElement("p",{className:"about-wrapper__info-text"},"I am an ambitious student who likes to stay busy. I am currently a Software Developer at We Know IT, a student-run IT-consultancy firm. I have previously been active in several extracurricular activities and I also enjoy working as a laboratory assistant in various courses. Staying active is important to me, and I am a proud player for the Swedish national lacrosse team."),i.a.createElement("p",{className:"about-wrapper__info-text"},"I have previously worked as a software engineer intern at both Axis Communications and Upsales. At Axis I got the opportunity to develop a new software for their surveillance cameras, and at Upsales I further developed their booking system Easy Booking. They both were exciting learning experiences which have given me valuable insights into different working methods. I am currently doing my master thesis at DICE in the gameplay team, working on a simulation of fire propagation in real-time."),i.a.createElement("p",{className:"about-wrapper__info-text"},"I have always loved films and games because of the visual storytelling. The possibility to work in the film or game industry was one of my main motivations for applying to Media Technology. I therefore strive to apply and develop my skills within computer graphics, and I am always open for new opportunities and challenges, especially within the VFX-, visualization or game industry."),i.a.createElement("p",{className:"about-wrapper__info-text"},"My resume is linked below if you are interested in finding out more about me."),i.a.createElement("span",{className:"d-flex mt-3"},i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn cta-btn--resume",href:T.a},"Resume"))))))),i.a.createElement(s.a,{className:"chevron-btn"},i.a.createElement("div",{className:"chevron-down-about"},i.a.createElement(d.Link,{to:"projectsection",smooth:!0,duration:1e3},i.a.createElement(u.a,{path:f.b,size:2})))))},C=function(){var e=Object(r.useState)(!1),t=e[0],a=e[1],n=Object(r.useState)(!1),o=n[0],d=n[1];return Object(r.useEffect)((function(){window.innerWidth>769?(a(!0),d(!1)):(d(!0),a(!1))}),[]),i.a.createElement("section",{id:"projectsection"},i.a.createElement(s.a,null,i.a.createElement(S,{className:"projects-wrapper"},i.a.createElement(l.a,{left:t,bottom:o,duration:500,delay:0,distance:"30px"},i.a.createElement("div",{className:"projects-wrapper__info"},i.a.createElement("span",{className:"d-flex mt-3"},i.a.createElement(R.Link,{to:"/portfolio",className:"cta-btn cta-btn--resume"},"View my portfolio")))))))},P=a("lYm0"),H=a("D1C/"),W=a("nKWw");var M=function(){return i.a.createElement("div",{className:"components"},i.a.createElement(P.a,{isStartPage:!0}),i.a.createElement(m,null),i.a.createElement(_,null),i.a.createElement(C,null),i.a.createElement(H.a,null),i.a.createElement(W.a,null))},q=(a("q4sD"),a("J9yo"),a("Qngu"));t.default=function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(n.a,null,i.a.createElement("meta",{charSet:"utf-8"}),i.a.createElement("title",null,"Iris Kotsinas"),i.a.createElement("html",{lang:"en"}),i.a.createElement("meta",{name:"description",content:"Iris Portfolio"})),i.a.createElement(M,null),i.a.createElement(q.a,{showBelow:70}))}},y2lX:function(e,t,a){e.exports=a.p+"static/iris-kotsinas-cv-2022-mars-cc54959b562d101adb0f3696e4bf2722.pdf"}}]);
//# sourceMappingURL=component---src-pages-index-js-7673d416ff1b7b4f25bb.js.map