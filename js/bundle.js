parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"RgKn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.CountUp=void 0;var t=function(){return(t=Object.assign||function(t){for(var i,a=1,s=arguments.length;a<s;a++)for(var n in i=arguments[a])Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n]);return t}).apply(this,arguments)},i=function(){function i(i,a,s){var n=this;this.target=i,this.endVal=a,this.options=s,this.version="2.0.4",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:""},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.count=function(t){n.startTime||(n.startTime=t);var i=t-n.startTime;n.remaining=n.duration-i,n.useEasing?n.countDown?n.frameVal=n.startVal-n.easingFn(i,0,n.startVal-n.endVal,n.duration):n.frameVal=n.easingFn(i,n.startVal,n.endVal-n.startVal,n.duration):n.countDown?n.frameVal=n.startVal-(n.startVal-n.endVal)*(i/n.duration):n.frameVal=n.startVal+(n.endVal-n.startVal)*(i/n.duration),n.countDown?n.frameVal=n.frameVal<n.endVal?n.endVal:n.frameVal:n.frameVal=n.frameVal>n.endVal?n.endVal:n.frameVal,n.frameVal=Math.round(n.frameVal*n.decimalMult)/n.decimalMult,n.printValue(n.frameVal),i<n.duration?n.rAF=requestAnimationFrame(n.count):null!==n.finalEndVal?n.update(n.finalEndVal):n.callback&&n.callback()},this.formatNumber=function(t){var i,a,s,e,r,o=t<0?"-":"";if(i=Math.abs(t).toFixed(n.options.decimalPlaces),s=(a=(i+="").split("."))[0],e=a.length>1?n.options.decimal+a[1]:"",n.options.useGrouping){r="";for(var l=0,h=s.length;l<h;++l)0!==l&&l%3==0&&(r=n.options.separator+r),r=s[h-l-1]+r;s=r}return n.options.numerals&&n.options.numerals.length&&(s=s.replace(/[0-9]/g,function(t){return n.options.numerals[+t]}),e=e.replace(/[0-9]/g,function(t){return n.options.numerals[+t]})),o+n.options.prefix+s+e+n.options.suffix},this.easeOutExpo=function(t,i,a,s){return a*(1-Math.pow(2,-10*t/s))*1024/1023+i},this.options=t({},this.defaults,s),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(a),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.decimalMult=Math.pow(10,this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,""===this.options.separator&&(this.options.useGrouping=!1),this.el="string"==typeof i?document.getElementById(i):i,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined"}return i.prototype.determineDirectionAndSmartEasing=function(){var t=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>t;var i=t-this.startVal;if(Math.abs(i)>this.options.smartEasingThreshold){this.finalEndVal=t;var a=this.countDown?1:-1;this.endVal=t+a*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=t,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},i.prototype.start=function(t){this.error||(this.callback=t,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},i.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},i.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},i.prototype.update=function(t){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(t),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},i.prototype.printValue=function(t){var i=this.formattingFn(t);"INPUT"===this.el.tagName?this.el.value=i:"text"===this.el.tagName||"tspan"===this.el.tagName?this.el.textContent=i:this.el.innerHTML=i},i.prototype.ensureNumber=function(t){return"number"==typeof t&&!isNaN(t)},i.prototype.validateValue=function(t){var i=Number(t);return this.ensureNumber(i)?i:(this.error="[CountUp] invalid start or end value: "+t,null)},i.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},i}();exports.CountUp=i;
},{}],"JyuG":[function(require,module,exports) {
window.addEventListener("load",()=>{const t=document.querySelector(".content"),e=document.querySelector("#canvas");var l=e.getContext("2d");e.height=t.clientHeight,e.width=t.clientWidth,l.beginPath(),l.filter="blur(20px)",l.arc(t.clientWidth-150,85,20,0,2*Math.PI),l.fillStyle="orange",l.fill(),l.beginPath(),l.filter="blur(20px)",l.arc(520,50,20,0,2*Math.PI),l.fillStyle="orange",l.fill(),l.beginPath(),l.filter="blur(8px)",l.arc(140,260,10,0,2*Math.PI),l.fillStyle="orange",l.fill(),l.beginPath(),l.filter="blur(20px)",l.arc(80,t.clientHeight-100,20,0,2*Math.PI),l.fillStyle="orange",l.fill(),l.beginPath(),l.filter="blur(8px)",l.arc(t.clientWidth-450,t.clientHeight-130,10,0,2*Math.PI),l.fillStyle="orange",l.fill()});
},{}],"Focm":[function(require,module,exports) {
"use strict";var e=require("countup.js"),r=o(require("./js/canvas"));function o(e){return e&&e.__esModule?e:{default:e}}async function t(){try{const r=await fetch("https://covid19.mathdro.id/api"),o=await r.json();return[o.confirmed.value,o.recovered.value,o.deaths.value]}catch(e){console.log(e)}}function n(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")}let c,a,u;t().then(r=>{c=r[0],a=r[1],u=r[2];const o=new e.CountUp(document.querySelector(".cassesLabel"),c),t=new e.CountUp(document.querySelector(".deathsLabel"),u),n=new e.CountUp(document.querySelector(".recoveredLabel"),a);o.error||t.error||n.error?(console.error(o.error),console.error(t.error),console.error(n.error)):(o.start(),t.start(),n.start())});
},{"countup.js":"RgKn","./js/canvas":"JyuG"}]},{},["Focm"], null)
//# sourceMappingURL=/bundle.js.map