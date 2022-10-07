"use strict";(self.__LOADABLE_LOADED_CHUNKS__=self.__LOADABLE_LOADED_CHUNKS__||[]).push([[676],{5832:(e,n,t)=>{t.r(n),t.d(n,{default:()=>B});var r=t(5043),o=t(8218),i=t(2232),a=t(5466),c=t.n(a),s=t(8270),u=t(258);function l(){if(console&&console.warn){for(var e,n=arguments.length,t=new Array(n),r=0;r<n;r++)t[r]=arguments[r];"string"==typeof t[0]&&(t[0]="react-i18next:: ".concat(t[0])),(e=console).warn.apply(e,t)}}var f={};function d(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];"string"==typeof n[0]&&f[n[0]]||("string"==typeof n[0]&&(f[n[0]]=new Date),l.apply(void 0,n))}function g(e,n,t){e.loadNamespaces(n,(function(){if(e.isInitialized)t();else{e.on("initialized",(function n(){setTimeout((function(){e.off("initialized",n)}),0),t()}))}}))}function p(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=n.languages[0],o=!!n.options&&n.options.fallbackLng,i=n.languages[n.languages.length-1];if("cimode"===r.toLowerCase())return!0;var a=function(e,t){var r=n.services.backendConnector.state["".concat(e,"|").concat(t)];return-1===r||2===r};return!(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!a(n.isLanguageChangingTo,e))&&(!!n.hasResourceBundle(r,e)||(!(n.services.backendConnector.backend&&(!n.options.resources||n.options.partialBundledLanguages))||!(!a(r,e)||o&&!a(i,e))))}function m(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if(!n.languages||!n.languages.length)return d("i18n.languages were undefined or empty",n.languages),!0;var r=void 0!==n.options.ignoreJSONStructure;return r?n.hasLoadedNamespace(e,{precheck:function(n,r){if(t.bindI18n&&t.bindI18n.indexOf("languageChanging")>-1&&n.services.backendConnector.backend&&n.isLanguageChangingTo&&!r(n.isLanguageChangingTo,e))return!1}}):p(e,n,t)}function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function v(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){(0,s.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var y=function(e,n){var t=(0,a.useRef)();return(0,a.useEffect)((function(){t.current=n?t.current:e}),[e,n]),t.current};var b=t(2649),O=t(3725),E=t(7571),w=t(2882),k=t(5147),j=t(7107),C=t(4613),N=t(4959),P=t(6276),Z=t(1139),D=t(3405),I=t(8983);function S(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function _(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?S(Object(t),!0).forEach((function(n){(0,s.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):S(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var A=Z.ZP.div.withConfig({displayName:"style__Wrapper",componentId:"sc-1khyc1q-0"})((function(e){var n=e.size,t=e.theme;return _(_({width:"100%"},(0,D.m4)(n,{maxWidth:t.appSize[I.Z.LG],margin:"0 auto"})),(0,D.dn)(n,{padding:"0 10px"}))}));const R=(0,i.Pi)((function(e){var n=e.className,t=e.children,r=(0,o.useInjection)(j.Z);return c().createElement(A,{className:n,size:r.size},t)}));var L=t(5044),x=Z.ZP.div.withConfig({displayName:"style__Wrapper",componentId:"sc-3ayw8k-0"})((function(e){e.theme;return{backgroundColor:"#F0F0F7",display:"grid",gridTemplateColumns:"1fr 1fr",height:66,border:"solid 3px ".concat("#F0F0F7"),borderRadius:8,color:"black",position:"relative"}})),z=Z.ZP.div.withConfig({displayName:"style__Value",componentId:"sc-3ayw8k-1"})((function(e){var n=e.theme;return{padding:"".concat(n.spacing.lg," ").concat((0,L.mA)("".concat(n.spacing.lg," * 2"))),position:"relative"}})),U=Z.ZP.span.withConfig({displayName:"style__SelectionIndicator",componentId:"sc-3ayw8k-2"})((function(e){return{display:"block",backgroundColor:e.theme.color.backgrounds[O.Z.PRIMARY],borderRadius:8,position:"absolute",top:0,left:0,height:"100%",zIndex:0}})),T=function(e){var n=e.className,t=(0,a.useState)(null),o=(0,r.Z)(t,2),i=o[0],s=o[1];return console.log(null==i?void 0:i.clientWidth),c().createElement(x,{className:n},c().createElement(U,{style:{width:null==i?void 0:i.clientWidth}}),c().createElement(z,{ref:s},"Крудит"),c().createElement(z,null,"Вклад"))};const F=(0,a.memo)(T);const W=t(2551).Z.createChild();const B=(0,i.Pi)((function(){var e=(0,o.useInjection)(k.Z),n=(0,o.useInjection)(j.Z),t=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.i18n,o=(0,a.useContext)(u.OO)||{},i=o.i18n,c=o.defaultNS,s=t||i||(0,u.nI)();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new u.zv),!s){d("You will need to pass in an i18next instance by using initReactI18next");var l=function(e){return Array.isArray(e)?e[e.length-1]:e},f=[l,{},!1];return f.t=l,f.i18n={},f.ready=!1,f}s.options.react&&void 0!==s.options.react.wait&&d("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");var p=v(v(v({},(0,u.JP)()),s.options.react),n),h=p.useSuspense,b=p.keyPrefix,O=e||c||s.options&&s.options.defaultNS;O="string"==typeof O?[O]:O||["translation"],s.reportNamespaces.addUsedNamespaces&&s.reportNamespaces.addUsedNamespaces(O);var E=(s.isInitialized||s.initializedStoreOnce)&&O.every((function(e){return m(e,s,p)}));function w(){return s.getFixedT(null,"fallback"===p.nsMode?O:O[0],b)}var k=(0,a.useState)(w),j=(0,r.Z)(k,2),C=j[0],N=j[1],P=O.join(),Z=y(P),D=(0,a.useRef)(!0);(0,a.useEffect)((function(){var e=p.bindI18n,n=p.bindI18nStore;function t(){D.current&&N(w)}return D.current=!0,E||h||g(s,O,(function(){D.current&&N(w)})),E&&Z&&Z!==P&&D.current&&N(w),e&&s&&s.on(e,t),n&&s&&s.store.on(n,t),function(){D.current=!1,e&&s&&e.split(" ").forEach((function(e){return s.off(e,t)})),n&&s&&n.split(" ").forEach((function(e){return s.store.off(e,t)}))}}),[s,P]);var I=(0,a.useRef)(!0);(0,a.useEffect)((function(){D.current&&!I.current&&N(w),I.current=!1}),[s,b]);var S=[C,s,E];if(S.t=C,S.i18n=s,S.ready=E,E)return S;if(!E&&!h)return S;throw new Promise((function(e){g(s,O,(function(){e()}))}))}(),i=t.t,s=(0,a.useState)(!1),l=(0,r.Z)(s,2),f=l[0],p=l[1];return c().createElement(o.Provider,{container:W,standalone:!0},c().createElement(R,null,c().createElement(b.T3,null,c().createElement(b.h4,null,c().createElement(b.TR,{src:"/assets/images/logo192.png",alt:"logo"}),c().createElement(N.Z,null,i("Изменить")," ","src/App.tsx"," ",i("и сохрани дл изменения"),"."),c().createElement(b.rU,{href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"}),c().createElement("div",null,c().createElement(C.Z,{Content:function(){return c().createElement("div",null,"asd asd asd asd xcv fgh dfghdfghrty fhg dfgh tityuityui hjk ghjk ghjkuyio")},showOnHover:!0,showArrow:!0},c().createElement(P.Z,{isLoading:f,onClick:function(){return e.set(E.Z.ru)}},"RU RU RU RU RU")),c().createElement(P.Z,{onClick:function(){return e.set(E.Z.en)}},"EN"),c().createElement(P.Z,{intent:O.Z.DANGER,onClick:function(){return p(!f)}},"Loading"),c().createElement(P.Z,{onClick:function(){return n.themeName=w.Q.DEFAULT},intent:O.Z.SECONDARY},"Default theme"),c().createElement(P.Z,{onClick:function(){return n.themeName=w.Q.DARK},intent:O.Z.SECONDARY},"Dark theme")),c().createElement(F,null)))))}))}}]);
//# sourceMappingURL=pages-home.100230ee4d5aa984160f.js.map