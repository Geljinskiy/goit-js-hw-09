const e=document.querySelector("[data-start]"),t=document.querySelector("[data-stop]"),r=document.querySelector("body");t.setAttribute("disabled",""),e.addEventListener("click",(()=>{e.hasAttribute("disabled")||(e.setAttribute("disabled",""),t.removeAttribute("disabled"),timerColorChange=setInterval((()=>{r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3))})),t.addEventListener("click",(()=>{t.setAttribute("disabled",""),e.removeAttribute("disabled"),clearInterval(timerColorChange)}));document.querySelector(".full-size").style.height=window.innerHeight;
//# sourceMappingURL=01-color-switcher.f7def9d0.js.map
