(self.webpackChunktriplelift_gatsby_wordpress=self.webpackChunktriplelift_gatsby_wordpress||[]).push([[351],{7716:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var l in a)Object.prototype.hasOwnProperty.call(a,l)&&(e[l]=a[l])}return e},n=function(){function e(e,t){for(var a=0;a<t.length;a++){var l=t[a];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(t,a,l){return a&&e(t.prototype,a),l&&e(t,l),t}}(),r=i(a(7294));i(a(3935));function i(e){return e&&e.__esModule?e:{default:e}}var o=0,c=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.state={loaded:!1},a.id=o++,a.createForm=a.createForm.bind(a),a.findFormElement=a.findFormElement.bind(a),a}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),n(t,[{key:"createForm",value:function(){var e=this;if(window.hbspt){if(null===this.el)return;var t=l({},this.props);delete t.loading,delete t.onSubmit,delete t.onReady;var a=l({},t,{target:"#"+this.el.getAttribute("id"),onFormSubmit:function(t){var a=t.serializeArray();e.props.onSubmit(a)}});return window.hbspt.forms.create(a),!0}setTimeout(this.createForm,1)}},{key:"loadScript",value:function(){var e=this,t=document.createElement("script");t.defer=!0,t.onload=function(){e.createForm(),e.findFormElement()},t.src="//js.hsforms.net/forms/v2.js",document.head.appendChild(t)}},{key:"findFormElement",value:function(){if(null!==this.el){var e=this.el.querySelector("iframe");e?(this.setState({loaded:!0}),this.props.onReady&&this.props.onReady(e)):setTimeout(this.findFormElement,1)}}},{key:"componentDidMount",value:function(){window.hbspt||this.props.noScript?(this.createForm(),this.findFormElement()):this.loadScript()}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this;return r.default.createElement("div",null,r.default.createElement("div",{ref:function(t){return e.el=t},id:"reactHubspotForm"+this.id,style:{display:this.state.loaded?"block":"none"}}),!this.state.loaded&&this.props.loading)}}]),t}(r.default.Component);t.default=c,e.exports=t.default},5866:function(e,t,a){"use strict";a.d(t,{Z:function(){return u}});var l=a(7294),n=a(1788),r=a(5444);function i(){return(0,l.useEffect)((function(){var e=window.jQuery;e(".main-menu-item").hide(),e(".login").hide(),e(".demo-page").show()}),[]),l.createElement(l.Fragment,null,l.createElement("div",{className:"main-nav"},l.createElement("div",{className:"main-menu-item",style:{display:"none"}},l.createElement("ul",{className:"base-level"},l.createElement("li",{className:"dropdown"},l.createElement(r.Link,{className:"company dropdown__title",to:"/company",activeClassName:"active","aria-expanded":"false",controls:"companyDropdown"},l.createElement("span",null,"Company")),l.createElement("ul",{className:"dropdown__menu",id:"companyDropdown","aria-label":"submenu"},l.createElement("li",null,l.createElement("a",{href:"/company#mission"},"Mission")),l.createElement("li",null,l.createElement("a",{href:"/company#corevalues"},"Core Values")),l.createElement("li",null,l.createElement("a",{href:"/company#leadership"},"Leadership")),l.createElement("li",null,l.createElement(r.Link,{className:"company dropdown__title",to:"/company-careers",activeClassName:"active"},"Careers")))),l.createElement("li",{className:"dropdown"},l.createElement(r.Link,{className:"products dropdown__title",to:"/products",activeClassName:"active","aria-expanded":"false",controls:"productsDropdown"},l.createElement("span",null,"Products")),l.createElement("ul",{className:"dropdown__menu",id:"productsDropdown","aria-label":"submenu"},l.createElement("li",null,l.createElement("a",{href:"/products#creativegallery",controls:"creativegallerySub"},"Creative Gallery"),l.createElement("ul",{className:"dropdown__menu lv2",id:"creativegallerySub","aria-label":"submenu"},l.createElement("li",null,l.createElement("a",{href:"/products#native-cinemagraph"},"In-feed Native")),l.createElement("li",null,l.createElement("a",{href:"/products#display"},"Display")),l.createElement("li",null,l.createElement("a",{href:"/products#branded-content"},"Branded Content")),l.createElement("li",null,l.createElement("a",{href:"/products#video"},"Video")))),l.createElement("li",null,l.createElement("a",{href:"/products#innovation",controls:"innovationSub"},"Innovation"),l.createElement("ul",{className:"dropdown__menu lv2",id:"innovationSub","aria-label":"submenu"},l.createElement("li",null,l.createElement("a",{href:"/ctv"},"CTV")),l.createElement("li",null,l.createElement("a",{href:"/exchange-traded-deals"},"Exchange Traded Deals")))),l.createElement("li",null,l.createElement(r.Link,{to:"/product-offers",activeClassName:"active"},"Offers & Packages")))),l.createElement("li",{className:"dropdown"},l.createElement(r.Link,{className:"technology",to:"/technology",activeClassName:"active"},l.createElement("span",null,"Technology"))),l.createElement("li",{className:"dropdown"},l.createElement(r.Link,{className:"ideas",to:"/ideas",activeClassName:"active","aria-expanded":"false",controls:"ideasDropdown"},l.createElement("span",null,"Ideas")),l.createElement("ul",{className:"dropdown__menu",id:"ideasDropdown","aria-label":"submenu"},l.createElement("li",null,l.createElement("a",{href:"/ideas#blog"},"Blog")),l.createElement("li",null,l.createElement("a",{href:"/ideas#news"},"News")),l.createElement("li",null,l.createElement("a",{href:"https://tripleliftevents.com/home/TLSite"},"Event")),l.createElement("li",null,l.createElement("a",{href:"https://www.triplelift-ott.com/spotless"},"Podcast Series")),l.createElement("li",null,l.createElement("a",{href:"/ideas/#distinctions"},"Distinctions")))),l.createElement("li",{className:"dropdown"},l.createElement(r.Link,{className:"contact-us",to:"/contact-us",activeClassName:"active"},l.createElement("span",null,"Contact us"))))),l.createElement("div",{className:"demo-page",style:{display:"none"}},l.createElement("ul",{className:"base-level"},l.createElement("li",{className:"overview-menu"},l.createElement(r.Link,{className:"ideas",to:"/video",activeClassName:"active"},l.createElement("span",null,"Overview"))),l.createElement("li",{className:"demo-menu"},l.createElement(r.Link,{className:"ideas",to:"/video-demo",activeClassName:"active"},l.createElement("span",null,"Demo"))),l.createElement("li",null,l.createElement("a",{className:"contact-us",href:"https://triplelift.com/contact-us/"},l.createElement("span",null,"Contact us")))))),l.createElement("a",{className:"login",style:{display:"none"},href:"https://console.triplelift.com/login"},"Login"))}var o=function(e){function t(){return e.apply(this,arguments)||this}(0,n.Z)(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=window.gsap,t=window.MicroModal,a=window.jQuery;t.init({openClass:"is-open",disableScroll:!0,disableFocus:!1,awaitOpenAnimation:!1,awaitCloseAnimation:!0}),a(".js-hamburger").click((function(){a(this).toggleClass("is-active"),a(".fries").toggleClass("show"),a("body").toggleClass("modal-open"),a("body").toggleClass("menu-open")})),e.utils.toArray(".animate-video-border-outer").forEach((function(t){var a=e.timeline({scrollTrigger:{trigger:t,scrub:!0,start:"20% 80%",end:"50% 10%",toggleActions:"play reverse play reverse"}});a.from(t,{x:"-100%",duration:.2},"loadin"),a.to(t,{opacity:1,duration:.2},"loadin"),a.to(t,{opacity:0,x:"100%",duration:.4,delay:.5})})),e.utils.toArray(".animate-border-outer").forEach((function(t){var a=e.timeline({scrollTrigger:{trigger:t,start:"10%, 70%",end:"90% 10%",scrub:!0,toggleActions:"play pause play pause"}});a.from(t,{x:"-100%",duration:.2},"loadin"),a.to(t,{opacity:1,duration:.2},"loadin"),a.to(t,{opacity:0,x:"100%",duration:.4,delay:.5})})),e.utils.toArray(".vertical-texture-animation").forEach((function(t){e.timeline({scrollTrigger:{trigger:t,scrub:!0,end:"100%",toggleActions:"play reverse play reverse"}}).from(t,{backgroundPosition:"0px 200px",duration:6,stagger:1})}))},a.render=function(){return l.createElement(l.Fragment,null,l.createElement("div",{className:"fries menu-hide"},l.createElement("div",{className:"menu-on-small"},l.createElement(i,null))),l.createElement("div",{className:"sticky-header"},l.createElement("div",{className:"burger-and-fries-container",id:"navigation"},l.createElement("div",{className:"header-vapor-background"}),l.createElement("a",{className:"logo-in-navigation logo-lockup relative",href:"https://triplelift.com"},l.createElement("img",{alt:"logomark-gradient",className:"lift-icon",src:"/images/logomark-gradient.svg"}),l.createElement("img",{alt:"wordmark-white",className:"wordmark",src:"/images/wordmark-white.svg"})),l.createElement("div",{className:"burger-and-fries"},l.createElement("button",{className:"hamburger hamburger--collapse js-hamburger",type:"button"},l.createElement("span",{className:"hamburger-box"},l.createElement("span",{className:"hamburger-inner"}))),l.createElement("div",{className:"menu-on-large"},l.createElement(i,null))))))},t}(l.Component),c=a(7716),s=a.n(c);function m(e){return l.createElement(l.Fragment,null,l.createElement("footer",null,l.createElement("div",{className:"footer-inner-container"},l.createElement("div",{className:"footer-newsletter-connect-container"},l.createElement("div",{className:"newsletter-container"},l.createElement("h2",null,"Our industry moves fast."),l.createElement("p",null,"Sign up to stay up-to-date on the latest news,",l.createElement("br",null),"trends, and upcoming events."),l.createElement("div",{id:"aoemail-subscription"},l.createElement(s(),{portalId:"6743804",formId:"a070bad3-936a-43a8-b20f-c857e68ca907"}))),l.createElement("div",{className:"social-media-container"},l.createElement("h2",null,"Connect with us!"),l.createElement("ul",null,l.createElement("li",null,l.createElement("a",{href:"https://www.linkedin.com/company/triplelift/",target:"_blank",rel:"noopener noreferrer"},l.createElement("img",{alt:"linkedin",src:"/images/icons/linkedin.svg"}))),l.createElement("li",null,l.createElement("a",{href:"https://twitter.com/TripleLiftHQ",target:"_blank",rel:"noopener noreferrer"},l.createElement("img",{alt:"twitter",src:"/images/icons/twitter.svg"}))),l.createElement("li",null,l.createElement("a",{href:"https://www.facebook.com/TripleLiftHQ/",target:"_blank",rel:"noopener noreferrer"},l.createElement("img",{alt:"facebook",src:"/images/icons/facebook.svg"}))),l.createElement("li",null,l.createElement("a",{href:"https://instagram.com/triplelifthq",target:"_blank",rel:"noopener noreferrer"},l.createElement("img",{alt:"instagram",src:"/images/icons/instagram.svg"})))))),l.createElement("div",{className:"footer-menu"},l.createElement("div",null,l.createElement("h3",null,"Policies"),l.createElement("ul",null,l.createElement(l.Fragment,null,l.createElement("li",null,l.createElement("a",{href:"https://triplelift.com/privacy"},"Privacy")),l.createElement("li",null,l.createElement("a",{href:"https://triplelift.com/terms-of-use"},"Terms Of Use")),l.createElement("li",null,l.createElement("a",{href:"https://triplelift.com/creative_ad_policies"},"Creative Ad Policies")),l.createElement("li",null,l.createElement("a",{href:"https://triplelift.com/exchange-supply-policies"},"Exchange Supply Policies")),l.createElement("li",null,l.createElement("a",{href:"https://triplelift.com/user-rights-policy-and-opt-out"},"TripleLift Cookie Opt-out"))),!1)),l.createElement("div",null,l.createElement("h3",null,"Resources"),l.createElement("ul",null,l.createElement(l.Fragment,null,l.createElement("li",null,l.createElement("a",{href:"https://academy.triplelift.com/"},"Native Academy")),l.createElement("li",null,l.createElement("a",{href:"https://triplelift.com/careers"},"Careers")),l.createElement("li",null,l.createElement("a",{href:"https://triplelift.com/company"},"Company"))),!1)),l.createElement("div",null,l.createElement("h3",null,"Certifications & Affiliations"),l.createElement("ul",{className:"certs-affils"},l.createElement("li",null,l.createElement("img",{alt:"cmyk_tag_registration",src:"/images/footer-images/cmyk_tag_registration.svg"})),l.createElement("li",null,l.createElement("img",{alt:"rgb_tag_certified",src:"/images/footer-images/rgb_tag_certified.svg"})),l.createElement("li",null,l.createElement("img",{alt:"iab_uk_gold",src:"/images/footer-images/iab_uk_gold.svg"})),l.createElement("li",null,l.createElement("img",{alt:"iab_member_seal",src:"/images/footer-images/iab_member_seal.svg"})),l.createElement("li",null,l.createElement("img",{alt:"edaa_certifited_abc",src:"/images/footer-images/edaa_certifited_abc.svg"}))))),l.createElement("div",{className:"footer-small-print"},l.createElement("img",{alt:"white logo",src:"/images/logo-white.svg"}),l.createElement("span",null,"Copyright © ",(new Date).getFullYear()," All Rights Reserved TripleLift")))))}function u(e){var t=e.children;return l.createElement(l.Fragment,null,l.createElement(o,null),l.createElement("main",{className:"main",id:"main",role:"main"},t),l.createElement(m,null))}}}]);
//# sourceMappingURL=commons-cc1ad2531ff9a7e96591.js.map