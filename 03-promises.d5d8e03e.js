!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var i={id:e,exports:{}};return n[e]=i,t.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t);var i=t("h6c0i"),r={timeout:3e3,useIcon:!1},u=document.querySelector(".form");function a(e,n){var o=Math.random()>.3;return new Promise(o?function(o){setTimeout((function(){o({position:e,delay:n})}),n)}:function(o,t){setTimeout((function(){t({position:e,delay:n})}),n)})}u.addEventListener("submit",(function(e){e.preventDefault();for(var n=Number(u.delay.value),o=1;o<=Number(u.amount.value);o++)a(o,n).then((function(e){var n=e.position,o=e.delay;i.Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"),r)})).catch((function(e){var n=e.position,o=e.delay;i.Notify.failure("❌ Rejected promise ".concat(n," in ").concat(o,"ms"),r)})),n+=Number(u.step.value)}))}();
//# sourceMappingURL=03-promises.d5d8e03e.js.map
