function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},o={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in o){var n=o[e];delete o[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,n){o[e]=n},n.parcelRequired7c6=r);var l=r("7Y9D8");const u=document.querySelector(".form"),i=document.querySelector('[name="delay"]'),d=document.querySelector('[name="step"]'),a=document.querySelector('[name="amount"]');let c=0,f=0,s=0,m=0;function p(e,n){const t=Math.random()>.3;return new Promise(((o,r)=>{setTimeout((()=>{t?o(`✅ Fulfilled promise ${e} in ${n}ms`):r(`❌ Rejected promise ${e} in ${n}ms`)}),n)}))}u.addEventListener("submit",(function(n){n.preventDefault(),f=a.value,s=d.value,m=i.value,console.log(" --\x3e",f,s,m);for(let n=0;n<f;n++)c=s*n+m,p(n+1,c).then((n=>e(l).Notify.success(n))).catch((n=>e(l).Notify.failure(n)))}));
//# sourceMappingURL=03-promises.bc49c0b1.js.map