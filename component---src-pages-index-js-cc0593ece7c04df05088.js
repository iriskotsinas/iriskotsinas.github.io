(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var n,i=r(a("PJYZ")),s=r(a("VbXa")),o=r(a("8OQS")),l=r(a("pVnL")),d=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,n=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),n&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=p(t||a||[]);return r&&r.src},p=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),a=m(t);return g[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,E=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:n,srcSet:r,sizes:i}),a&&d.default.createElement("source",{media:n,srcSet:a,sizes:i}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function N(e,t){var a=e.srcSet,r=e.srcSetWebp,n=e.media,i=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(n?'media="'+n+'" ':"")+'srcset="'+(t?r:a)+'" '+(i?'sizes="'+i+'" ':"")+"/>"}var O=function(e,t){var a=(void 0===n&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(n.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),n);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},L=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",n=e.title?'title="'+e.title+'" ':"",i=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?N(e,!0):"")+N(e)})).join("")+"<img "+d+s+o+a+r+t+i+n+l+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,n=e.generateSources,i=e.spreadProps,s=e.ariaHidden,o=d.default.createElement(j,(0,l.default)({ref:t,src:a},i,{ariaHidden:s}));return r.length>1?d.default.createElement("picture",null,n(r),o):o})),j=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,n=e.src,i=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return d.default.createElement("img",(0,l.default)({"aria-hidden":m,sizes:a,srcSet:r,src:n},p,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))}));j.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var k=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&y&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||v&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,i.default)(a)),a.handleRef=a.handleRef.bind((0,i.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=O(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=m(t))&&(g[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,n=e.style,i=void 0===n?{}:n,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,m=e.placeholderClassName,g=e.fluid,h=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,E=e.itemProp,S=e.loading,N=e.draggable,O=g||h;if(!O)return null;var k=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,l.default)({opacity:k?1:0,transition:z?"opacity "+v+"ms":"none"},o),C="boolean"==typeof b?"lightgray":b,P={transitionDelay:v+"ms"},T=(0,l.default)({opacity:this.state.imgLoaded?0:1},z&&P,o,f),_={title:t,alt:this.state.isVisible?"":a,style:T,className:m,itemProp:E},H=this.state.isHydrated?p(O):O[0];if(g)return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:H.maxWidth?H.maxWidth+"px":null,maxHeight:H.maxHeight?H.maxHeight+"px":null},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(H.srcSet)},d.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/H.aspectRatio+"%"}}),C&&d.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:C,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&P)}),H.base64&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:_,imageVariants:O,generateSources:I}),H.tracedSVG&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:_,imageVariants:O,generateSources:x}),this.state.isVisible&&d.default.createElement("picture",null,w(O),d.default.createElement(j,{alt:a,title:t,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S,draggable:N})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,l.default)({alt:a,title:t,loading:S},H,{imageVariants:O}))}}));if(h){var W=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:H.width,height:H.height},i);return"inherit"===i.display&&delete W.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(H.srcSet)},C&&d.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:C,width:H.width,opacity:this.state.imgLoaded?0:1,height:H.height},z&&P)}),H.base64&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:H.base64,spreadProps:_,imageVariants:O,generateSources:I}),H.tracedSVG&&d.default.createElement(R,{ariaHidden:!0,ref:this.placeholderRef,src:H.tracedSVG,spreadProps:_,imageVariants:O,generateSources:x}),this.state.isVisible&&d.default.createElement("picture",null,w(O),d.default.createElement(j,{alt:a,title:t,width:H.width,height:H.height,sizes:H.sizes,src:H.src,crossOrigin:this.props.crossOrigin,srcSet:H.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:S,draggable:N})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:L((0,l.default)({alt:a,title:t,loading:S},H,{imageVariants:O}))}}))}return null},t}(d.default.Component);k.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var z=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),V=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function C(e){return function(t,a,r){var n;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((n={})[a]=e,n),t,"prop",r)}}k.propTypes={resolutions:z,sizes:V,fixed:C(c.default.oneOfType([z,c.default.arrayOf(z)])),fluid:C(c.default.oneOfType([V,c.default.arrayOf(V)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var P=k;t.default=P},RXBc:function(e,t,a){"use strict";a.r(t);var r=a("q1tI"),n=a.n(r),i=a("qhky"),s=a("7vrA"),o=a("/eHF"),l=a.n(o),d=a("oqc9"),c=a("CVNw"),u=a.n(c),f=a("lO2I"),m=function(){var e=Object(r.useState)(!1),t=e[0],a=e[1],i=Object(r.useState)(!1),o=i[0],c=i[1];return Object(r.useEffect)((function(){window.innerWidth>769?(a(!0),c(!1)):(c(!0),a(!1))}),[]),n.a.createElement("section",{id:"hero",className:"jumbotron"},n.a.createElement(s.a,null,n.a.createElement(l.a,{left:t,bottom:o,duration:500,delay:250,distance:"30px"},n.a.createElement("h1",{className:"hero-title"},n.a.createElement("span",{className:"text-color-main"},"Iris Kotsinas"),n.a.createElement("br",null),n.a.createElement("p",{className:"text-color-third"},"Final year M.Sc. student in Media Technology and Engineering")))),n.a.createElement(s.a,null,n.a.createElement("div",{className:"chevron-down-container"},n.a.createElement(d.Link,{to:"about",smooth:!0,duration:1e3},n.a.createElement(u.a,{path:f.b,size:2})))))},p=a("wx14"),g=a("zLVn"),h=a("TSYQ"),b=a.n(h),v=a("vUet"),y=["xl","lg","md","sm","xs"],E=n.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,i=e.noGutters,s=e.as,o=void 0===s?"div":s,l=Object(g.a)(e,["bsPrefix","className","noGutters","as"]),d=Object(v.a)(a,"row"),c=d+"-cols",u=[];return y.forEach((function(e){var t,a=l[e];delete l[e];var r="xs"!==e?"-"+e:"";null!=(t=null!=a&&"object"==typeof a?a.cols:a)&&u.push(""+c+r+"-"+t)})),n.a.createElement(o,Object(p.a)({ref:t},l,{className:b.a.apply(void 0,[r,d,i&&"no-gutters"].concat(u))}))}));E.displayName="Row",E.defaultProps={noGutters:!1};var w=E,S=["xl","lg","md","sm","xs"],x=n.a.forwardRef((function(e,t){var a=e.bsPrefix,r=e.className,i=e.as,s=void 0===i?"div":i,o=Object(g.a)(e,["bsPrefix","className","as"]),l=Object(v.a)(a,"col"),d=[],c=[];return S.forEach((function(e){var t,a,r,n=o[e];if(delete o[e],"object"==typeof n&&null!=n){var i=n.span;t=void 0===i||i,a=n.offset,r=n.order}else t=n;var s="xs"!==e?"-"+e:"";t&&d.push(!0===t?""+l+s:""+l+s+"-"+t),null!=r&&c.push("order"+s+"-"+r),null!=a&&c.push("offset"+s+"-"+a)})),d.length||d.push(l),n.a.createElement(s,Object(p.a)({},o,{ref:t,className:b.a.apply(void 0,[r].concat(d,c))}))}));x.displayName="Col";var I=x,N=a("bOu6"),O=a("Wbzz"),L=a("9eSz"),R=a.n(L),j=function(e){var t=e.filename,a=e.alt;return n.a.createElement(O.StaticQuery,{query:"3821511162",render:function(e){var r=e.images.edges.find((function(e){return e.node.relativePath.includes(t)}));if(!r)return null;var i=r.node.childImageSharp.fixed;return n.a.createElement(R.a,{className:"rounded shadow-lg",alt:a,fixed:i})}})},k=a("xXu1"),z=a.n(k),V=function(){var e=Object(r.useState)(!1),t=e[0],a=e[1],i=Object(r.useState)(!1),o=i[0],c=i[1];return Object(r.useEffect)((function(){window.innerWidth>769?(a(!0),c(!1)):(c(!0),a(!1))}),[]),n.a.createElement("section",{id:"about"},n.a.createElement(s.a,{className:"about-container"},n.a.createElement(N.a,{title:"About Me"}),n.a.createElement(w,{className:"about-wrapper"},n.a.createElement(I,{md:6,sm:12},n.a.createElement(l.a,{bottom:!0,duration:1e3,delay:600,distance:"30px"},n.a.createElement("div",{className:"about-wrapper__image"},n.a.createElement(j,{alt:"profile picture",filename:"IMG_0034.png"})))),n.a.createElement(I,{md:6,sm:12},n.a.createElement(l.a,{left:t,bottom:o,duration:1e3,delay:1e3,distance:"30px"},n.a.createElement("div",{className:"about-wrapper__info"},n.a.createElement("p",{className:"about-wrapper__info-text"},"My name is Iris Kotsinas and I am a 23-year old Master of Science student in Media Technology and Engineering, graduating in June 2022 from Linköping University."),n.a.createElement("p",{className:"about-wrapper__info-text"},"I am an ambitious student who likes to stay busy. I am currently a Software Developer at We Know IT, a student-run IT-consultancy firm. I have previously been active in several extracurricular activities and I also enjoy working as a laboratory assistant in various courses. I love sports, especially lacrosse, and I played in the Swedish women’s national lacrosse team at the European Championship 2019 in Netanya, Israel. I’m very interested in software and game development, and love movies, animation and coding."),n.a.createElement("p",{className:"about-wrapper__info-text"},"I have previously worked as a software engineer intern at both Axis Communications and Upsales. At Axis I got the opportunity to develop a new software for their surveillance cameras, and at Upsales I further developed their booking system Easy Booking. It was an exciting learning experience and made me more eager to pursue my interest for software development."),n.a.createElement("p",{className:"about-wrapper__info-text"},"My resume is linked below if you are interested in finding out more about me."),n.a.createElement("span",{className:"d-flex mt-3"},n.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",className:"cta-btn cta-btn--resume",href:z.a},"Resume"))))))),n.a.createElement(s.a,{className:"chevron-btn"},n.a.createElement("div",{className:"chevron-down-about"},n.a.createElement(d.Link,{to:"projectsection",smooth:!0,duration:1e3},n.a.createElement(u.a,{path:f.b,size:2})))))},C=function(){var e=Object(r.useState)(!1),t=e[0],a=e[1],i=Object(r.useState)(!1),o=i[0],d=i[1];return Object(r.useEffect)((function(){window.innerWidth>769?(a(!0),d(!1)):(d(!0),a(!1))}),[]),n.a.createElement("section",{id:"projectsection"},n.a.createElement(s.a,null,n.a.createElement(w,{className:"projects-wrapper"},n.a.createElement(l.a,{left:t,bottom:o,duration:500,delay:0,distance:"30px"},n.a.createElement("div",{className:"projects-wrapper__info"},n.a.createElement("span",{className:"d-flex mt-3"},n.a.createElement(O.Link,{to:"/work",className:"cta-btn cta-btn--resume"},"View my portfolio")))))))},P=a("lYm0"),T=a("D1C/"),_=a("nKWw");var H=function(){return n.a.createElement("div",{className:"components"},n.a.createElement(P.a,{isStartPage:!0}),n.a.createElement(m,null),n.a.createElement(V,null),n.a.createElement(C,null),n.a.createElement(T.a,null),n.a.createElement(_.a,null))},W=(a("q4sD"),a("J9yo"),a("Qngu"));t.default=function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(i.a,null,n.a.createElement("meta",{charSet:"utf-8"}),n.a.createElement("title",null,"Iris Kotsinas"),n.a.createElement("html",{lang:"en"}),n.a.createElement("meta",{name:"description",content:"Iris Portfolio"})),n.a.createElement(H,null),n.a.createElement(W.a,{showBelow:70}))}},xXu1:function(e,t,a){e.exports=a.p+"static/iris-kotsinas-cv-2021-sep-67c41df934b3e51b717cb79455033cd7.pdf"}}]);
//# sourceMappingURL=component---src-pages-index-js-cc0593ece7c04df05088.js.map