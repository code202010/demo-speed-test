"use strict";(self["webpackChunkdemo_speed_test"]=self["webpackChunkdemo_speed_test"]||[]).push([[168],{3168:function(e,t,n){n.r(t),n.d(t,{startTapClick:function(){return s}});var o=n(6587);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const s=e=>{let t,n,s,v=10*-u,f=0;const p=e.getBoolean("animated",!0)&&e.getBoolean("rippleEffect",!0),m=new WeakMap,h=e=>{v=(0,o.u)(e),b(e)},L=e=>{v=(0,o.u)(e),g(e)},w=e=>{const t=(0,o.u)(e)-u;v<t&&b(e)},E=e=>{const t=(0,o.u)(e)-u;v<t&&g(e)},k=e=>{g(e)},T=()=>{clearTimeout(s),s=void 0,t&&(q(!1),t=void 0)},b=e=>{t||R(i(e),e)},g=e=>{R(void 0,e)},R=(e,n)=>{if(e&&e===t)return;clearTimeout(s),s=void 0;const{x:i,y:c}=(0,o.q)(n);if(t){if(m.has(t))throw new Error("internal error");t.classList.contains(r)||C(t,i,c),q(!0)}if(e){const t=m.get(e);t&&(clearTimeout(t),m.delete(e));const n=a(e)?0:d;e.classList.remove(r),s=setTimeout((()=>{C(e,i,c),s=void 0}),n)}t=e},C=(e,t,o)=>{f=Date.now(),e.classList.add(r);const s=p&&c(e);s&&s.addRipple&&(_(),n=s.addRipple(t,o))},_=()=>{void 0!==n&&(n.then((e=>e())),n=void 0)},q=e=>{_();const n=t;if(!n)return;const o=l-Date.now()+f;if(e&&o>0&&!a(n)){const e=setTimeout((()=>{n.classList.remove(r),m.delete(n)}),l);m.set(n,e)}else n.classList.remove(r)},y=document;y.addEventListener("ionGestureCaptured",T),y.addEventListener("touchstart",h,!0),y.addEventListener("touchcancel",L,!0),y.addEventListener("touchend",L,!0),y.addEventListener("pointercancel",T,!0),y.addEventListener("mousedown",w,!0),y.addEventListener("mouseup",E,!0),y.addEventListener("contextmenu",k,!0)},i=e=>{if(!e.composedPath)return e.target.closest(".ion-activatable");{const t=e.composedPath();for(let e=0;e<t.length-2;e++){const n=t[e];if(!(n instanceof ShadowRoot)&&n.classList.contains("ion-activatable"))return n}}},a=e=>e.classList.contains("ion-activatable-instant"),c=e=>{if(e.shadowRoot){const t=e.shadowRoot.querySelector("ion-ripple-effect");if(t)return t}return e.querySelector("ion-ripple-effect")},r="ion-activated",d=200,l=200,u=2500}}]);