!function(){var t=document.querySelector("[data-start]"),e=document.querySelector("[data-stop]"),d=0;console.log(" --\x3e",e),e.setAttribute("disabled",!0),t.addEventListener("click",(function(t){t.preventDefault(),t.target.setAttribute("disabled","disabled"),e.removeAttribute("disabled","disabled"),d=setInterval((function(){document.body.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16))}),1e3)})),e.addEventListener("click",(function(e){clearInterval(d),t.removeAttribute("disabled","disabled"),e.target.setAttribute("disabled","disabled")}))}();
//# sourceMappingURL=01-color-switcher.b049b1dc.js.map