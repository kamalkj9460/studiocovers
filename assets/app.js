/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});

/*!
  Zoom 1.7.21
  license: MIT
  http://www.jacklmoore.com/zoom
*/
!function(d){var e={url:!1,callback:!1,target:!1,duration:120,on:"mouseover",touch:!0,onZoomIn:!1,onZoomOut:!1,magnify:1};d.zoom=function(o,t,e,n){var i,u,c,a,r,m,l,s=d(o),f=s.css("position"),h=d(t);return o.style.position=/(absolute|fixed)/.test(f)?f:"relative",o.style.overflow="hidden",e.style.width=e.style.height="",d(e).addClass("zoomImg").css({position:"absolute",top:0,left:0,opacity:0,width:e.width*n,height:e.height*n,border:"none",maxWidth:"none",maxHeight:"none"}).appendTo(o),{init:function(){u=s.outerWidth(),i=s.outerHeight(),c=t===o?(a=u,i):(a=h.outerWidth(),h.outerHeight()),r=(e.width-u)/a,m=(e.height-i)/c,l=h.offset()},move:function(o){var t=o.pageX-l.left,n=o.pageY-l.top;n=Math.max(Math.min(n,c),0),t=Math.max(Math.min(t,a),0),e.style.left=t*-r+"px",e.style.top=n*-m+"px"}}},d.fn.zoom=function(n){return this.each(function(){var i=d.extend({},e,n||{}),u=i.target&&d(i.target)[0]||this,o=this,c=d(o),a=document.createElement("img"),r=d(a),m="mousemove.zoom",l=!1,s=!1;if(!i.url){var t=o.querySelector("img");if(t&&(i.url=t.getAttribute("data-src")||t.currentSrc||t.src),!i.url)return}c.one("zoom.destroy",function(o,t){c.off(".zoom"),u.style.position=o,u.style.overflow=t,a.onload=null,r.remove()}.bind(this,u.style.position,u.style.overflow)),a.onload=function(){var t=d.zoom(u,o,a,i.magnify);function n(o){t.init(),t.move(o),r.stop().fadeTo(d.support.opacity?i.duration:0,1,!!d.isFunction(i.onZoomIn)&&i.onZoomIn.call(a))}function e(){r.stop().fadeTo(i.duration,0,!!d.isFunction(i.onZoomOut)&&i.onZoomOut.call(a))}"grab"===i.on?c.on("mousedown.zoom",function(o){1===o.which&&(d(document).one("mouseup.zoom",function(){e(),d(document).off(m,t.move)}),n(o),d(document).on(m,t.move),o.preventDefault())}):"click"===i.on?c.on("click.zoom",function(o){return l?void 0:(l=!0,n(o),d(document).on(m,t.move),d(document).one("click.zoom",function(){e(),l=!1,d(document).off(m,t.move)}),!1)}):"toggle"===i.on?c.on("click.zoom",function(o){l?e():n(o),l=!l}):"mouseover"===i.on&&(t.init(),c.on("mouseenter.zoom",n).on("mouseleave.zoom",e).on(m,t.move)),i.touch&&("click"!==i.on&&c.on("touchstart.zoom",function(o){o.preventDefault(),s?(s=!1,e()):(s=!0,n(o.originalEvent.touches[0]||o.originalEvent.changedTouches[0]))}),c.on("touchmove.zoom",function(o){l&&o.preventDefault(),t.move(o.originalEvent.touches[0]||o.originalEvent.changedTouches[0])}),"click"!==i.on&&c.on("touchend.zoom",function(o){o.preventDefault(),s&&(s=!1,e())})),d.isFunction(i.callback)&&i.callback.call(a)},a.src=i.url})},d.fn.zoom.defaults=e}(window.jQuery);

/*============================================================================
  Global - header
==============================================================================*/

var header = {
  init: function(){
    //remove duplicate header on update
    if ($('.mobile-header').length > 1) {
      var nav_menu = $("#nav").data("mmenu");
      nav_menu.close();
      $('.mobile-header:last, #nav:last').remove();
    }
    if ($('.header').length > 1){
      $('.header.mm-slideout').remove();
    }

    //offscreen check for dropdown menu
    $('.sub-menu').on('mouseenter', function(){

      if($(this).find('.submenu_list').is(':off-right')) {
        $(this).find('.dropdown').addClass('dropdown-left');
      }
    });

    //Promo banner
    if ($('.promo_banner').length){

      var promo_banner = Cookies.get('promo_banner');

      if (promo_banner != 'dismiss') {
        $('body').addClass('promo_banner--true');

        $('.promo_banner .icon-close, .promo_banner_mobile .icon-close').on('click', function(){
          $('.promo_banner--true').attr('style', '');
          $('body').removeClass('promo_banner--true');
          Cookies.set('promo_banner', 'dismiss', { path: '/' }, { expires: 30 });
          banner.init();
          header.setPadding();
        });
      }
    }

    header.setPadding();

    $('#nav').mmenu({
      searchfield : {
        add: $('#header').data('search-enabled'),
        search: false,
        placeholder: Shopify.translation.search
      },
      navbars: [
        {
         "position": "top",
         "content": [
            "searchfield"
         ]
        },
        {
          "position": "top"
        },
        {
          "position": "bottom",
          "content": [
            $(".js-social-icons").html()
          ]
        }
      ],
      "extensions": [
        "theme-white"
      ],
      offCanvas: { pageSelector: "#content_wrapper" }
    },
    {
      clone: false,
      searchfield: {
        "form": {
          "action": "/search"
        },
        "input": {
          "name": "q"
        }
      }
    });

    

    if ($('.mobile-header:hidden') && $('.default-header').hasClass('behind-menu--true')){
      $('.default-header').parent('.header-section').addClass('header--content-behind');
    }

    var $header = $(".header");

    // Add tabindex to announcement bar close button if sticky header is disabled
    if ($(window).width() > 798) {
      if ($header.find('.promo_banner').hasClass('show-promo--true')) {
        $header.find('.icon-close').attr('tabindex', 0);
      }
    }

    if ($('.default-header').hasClass('mm-fixed-top')) {
      $(window).on("scroll", function() {
        if(!$('html').hasClass('mm-opened')) {
          if($header.hasClass('behind-menu--true') && $('.banner-section.wide_display--true').length && $('.transparent-header--true').length) {
            $header.toggleClass('header_bar', $(window).scrollTop() > 0);
          }

          if ($header.hasClass('behind-menu--true') && $('.draggable-banner--true').children().first().find('.wide_display--true').length && $('.transparent-header--true').length) {
            $header.toggleClass('header_bar', $(window).scrollTop() > 0);
          }

        }
      });

     //offset scroll position
    if ($('.default-header').hasClass('mm-fixed-top')) {
     	$('#menu li a[href^="#"], .banner-section__caption a[href^="#"]').on('click', function(e) {
		    e.preventDefault()
		    var anchorLink = $(this).attr('href');
		    var headerHeight = $('.header').outerHeight();
		    $('html, body').animate({
		           scrollTop: $(anchorLink).offset().top - headerHeight
		    }, 2000);
		  });
    }
  };

    // If header has class of 'mm-fixed-top' (sticky header enabled), add tabindex to it for greater accessibility
    if ($(window).width() > 798) {
      var $defaultHeader = $('.default-header');
      $defaultHeader.attr('tabindex', 1);
      // Look for interactive child elements and add tabindex
      $defaultHeader.find('a, button').attr('tabindex', 1);
      // Add tabindex to announcement bar close button
      if ($defaultHeader.find('.promo_banner').hasClass('show-promo--true')) {
        $defaultHeader.find('.icon-close').attr('tabindex', 1);
      }
    }

    $('#cart').mmenu({
      navbar: {
        add: false
      },
      offCanvas: { position: 'right', pageSelector: "#content_wrapper" },
      "extensions": [
        "theme-white"
      ]
    });
    $('.icon-cart, .icon-menu').on("click", function(e) {
      $('#search').hide();
    });

    $(".icon-search").on('click', function(e) { $(this).parent('form').submit(); });

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && $(window).width() >= 798) {
      $(document).on('click', '.menu li.sub-menu > a', function(e) {
        var $dropdownUrl = $(this).attr('href');
        if ($(this).hasClass('click-active')) {
          window.location.href = $dropdownUrl
				  $('.mobile_hidden ul li a').removeClass('click-active');
	      } else {
	        $('.mobile_hidden ul li a').removeClass('click-active');
          $(this).addClass('click-active');
	      }
        e.preventDefault();
        return false;
      });
    }

    $('body').on('mouseover', '.sub-menu', function() {
      $(this).attr('aria-expanded', true);
      $('.disclosure__toggle').removeClass('is-clicked');
      $('.disclosure__toggle').attr('aria-expanded', false);
    });
    $('body').on('mouseout', '.sub-menu', function() {
     $(this).attr('aria-expanded', false);
    });

    banner.init();
  },
  setPadding: function() {
    //Setting dynamic padding to mobile layout relative to promo banner height
    var mobileBannerHeight = $('.promo_banner_mobile').innerHeight();
    var mobileBannerPadding = mobileBannerHeight + 25 + 'px';
    var mobileBanner = $('.promo_banner_mobile');
    if ($(window).width() <= 798) {
      if (mobileBanner.is(':visible')) {
        var mobileBannerParent = $(mobileBanner).parents('.header-section');
        $(mobileBannerParent).css('padding-top', mobileBannerPadding);

     } else {
        $('.header-section').css('padding-top', '25px');
      }
    } else {
        $('.header-section').css('padding-top', '0px');
    }
  },
  unload: function($target){
  	$('a[href^="#"]').off('click');
  }
}

/*============================================================================
  FAQ
==============================================================================*/
var faqAccordion = {
  init: function(){
    var flg = 0;
    var $faqHeading = $('.faqAccordion > dt > button');
    $('.faqAccordion > dd').attr('aria-hidden',true);
    $faqHeading.attr('aria-expanded',false);
    $faqHeading.on('click activate',function(){
      if( flg ) return false;
      flg = 1;
      var state = $(this).attr('aria-expanded') === 'false' ? true : false;
      $(this).attr('aria-expanded',state);
      $(this).parent().next().slideToggle(function(){
        flg = 0;
      });
        $(this).parent().next().attr('aria-hidden',!state);
      return false;
    });
    $faqHeading.on('keydown',function(event){
      var keyCode = event.keyCode || e.which;
      if (keyCode === 13){
        $(this).trigger('activate');
      }
    });
  }
}

/*============================================================================
  All pages - banners
==============================================================================*/

var banner = {
  init: function(){

    if ($(window).width() >= 798) {

      if ($('[data-secondary-logo]').length) {
        $('.header .logo').addClass('secondary-logo--true');
        var totalHeaderHeight = $('.header').outerHeight();
      } else {
        $('.header .logo').addClass('secondary-logo--false');
        var totalHeaderHeight = $('.header').outerHeight();
      }
    }

    // Add space for header so banner images display directly below
    if ($('.behind-menu--false').length && $('.banner-section.wide_display--true').length) {
      $('.shadow-header').css('height', totalHeaderHeight);
      if ($(window).width() < 798) {
        $('.shopify-section.banner-option').addClass('main_content_area');
      }
    }

    //Pages without banner images display the default header style
    if ($('.banner-section.wide_display--true').length == 0 && $('.draggable-banner--true').length == 0) {
      $('.header').addClass('header_bar');
    }

    //Page.details and index templates - possible for wide-display banner to be top section
    if ($('.behind-menu--false').length && $('.draggable-banner--true').children().first().find('.wide_display--true').length) {
      $('.shadow-header').css('height', totalHeaderHeight);
      if ($(window).width() < 798) {
        $('.draggable-banner--true').children().first().addClass('main_content_area');
      }
    } else if ($('.draggable-banner--true').children().first().find('.wide_display--true').length == 0) {
      $('.draggable-banner--true').children().first().addClass('main_content_area');
      $('.draggable-banner--true').parents('body').find('.header').addClass('header_bar');
      if ($(window).width() < 798) {
        $('.draggable-banner--true').parents('body').find('.header').addClass('header_bar');
        $('.shopify-section.banner-option').addClass('main_content_area');
        $('.draggable-banner--true').children().first().addClass('main_content_area');
      }
    } else {
    	if ($(window).width() < 798) {
    		$('.draggable-banner--true').children().first().addClass('main_content_area');
    	}
    }
  },
  unload: function($target){
    if ($('.banner-section.wide_display--true').length == 0 && $('.draggable-banner--true').length == 0) {
      $('.header').removeClass('header_bar');
    }

    $('.banner-section').attr('style', '');
    $('.shadow-header').attr('style', '');
    $('.draggable-banner--true').children().removeClass('main_content_area');
    $('.shopify-section.banner-option').removeClass('main_content_area');
  }
}

/*============================================================================
  Home page - slideshow
==============================================================================*/

var slideshow = {
  init: function(){
    $('.slideshow').each(function (index, value){

      var $homepageSlider = $(this);

      var settings = {
        slideshowSpeed: $homepageSlider.data('slideshow-speed')*1000 ? $homepageSlider.data('slideshow-speed')*1000 : 10*1000,
        adaptiveHeight: $homepageSlider.data('adaptive-height') ? $homepageSlider.data('adaptive-height') : true
      }

      // Initiate the slideshow with Flickity if not already setup
      if (!$homepageSlider.hasClass('flickity-enabled')) {
        var arrowShow = $homepageSlider.find('.slideshow__gallery-cell').length === 1 ? false : true;
        $homepageSlider.flickity({
          adaptiveHeight: settings.adaptiveHeight,
          wrapAround: true,
          cellAlign: 'left',
          imagesLoaded: true,
          prevNextButtons: arrowShow,
          draggable: false,
          pageDots: arrowShow,
          autoPlay: settings.slideshowSpeed,
        });

        // Ensures Flickity is not collapsed when loaded
        $homepageSlider.on( 'settle.flickity', function() {
          $homepageSlider.flickity('resize');
        });

        $( window ).on( 'load', function() {
          $homepageSlider.flickity('resize');
        });
      }
    });
  },
  unload: function($target){
    var $slider = $target.find('.homepage-slideshow');
    $slider.flickity('destroy');
  }
}

/*============================================================================
  Home page - video
==============================================================================*/

var video = {
  init: function(){

    // Set up plyr for newly embedded video
    var featuredVideos = $('[data-video-element]').get();

    var featuredVideoPlayers = Plyr.setup(featuredVideos, {
      controls: controls,
      fullscreen: {
        enabled: true,
        fallback: true,
        iosNative: true
      },
      storage: {
        enabled: false
      }
    });

    // Adds plyr video id to video wrapper
    $.each(featuredVideoPlayers, function(index, player) {
      var id = player.id;
      var $video;

      if (player.isHTML5) {
        $video = $(player.elements.wrapper).find('video');
        $video.attr('data-plyr-video-id', id);
      }

      // When a video is playing, pause any other instances
      player.on('play', function(event) {
        var instance = event.detail.plyr;
        $.each(featuredVideoPlayers, function(index, player) {
          if (instance.id != player.id) {
            player.pause();
          }
        })
      })
    })

    $('[data-video-element]').each(function(index, video) {

      // Variables
      var $video = $(video);
      var $section = $video.parents('.shopify-section').attr('id', id);
      var $videoElement = $section.find($video);
      var $videoWrapper = $videoElement.parents('.video-wrapper');
      var $playButton = $videoWrapper.find('[data-play-button]');
      var $videoText = $videoWrapper.find('[data-video-text]');
      var $videoTextContainer = $videoWrapper.find('[data-video-text-container]');
      var $image = $videoWrapper.find('.video-wrapper__image');
      var $posterImage = $videoWrapper.data('poster-image-uploaded');
      var aspectRatio = $videoWrapper.data('aspect-ratio');
      var id = $videoWrapper.data('video-src');
      var isAutoplay = $videoWrapper.data('autoplay');
      var isLoopingEnabled = $videoWrapper.data('autoloop');
      var isMuted = $videoWrapper.data('mute-video');

      $.each(featuredVideoPlayers, function(index, player) {
        var videoID;
        var playerID;

        if (player.isYouTube || player.isVimeo) {
          var videoID = $videoWrapper.attr('id');
          var playerID = $(player.elements.original).attr('id');
        } else if (player.isHTML5) {
          var videoID = $videoWrapper.find('[data-plyr-video-id]').data('plyr-video-id');
          var playerID = player.id;
          $videoElement = $section.find('.plyr--video');
        }

        if (playerID == videoID) {

          // Reset play button icon
          $videoWrapper.removeClass('play-button-icon--visible');

          // Autoplay
          if (isAutoplay) {
            // If on desktop or player is YouTube/Vimeo
            if ($(window).width() > 768 || player.isYouTube || player.isVimeo) {

              player.autoplay = true;

              // Hide image
              $image.hide();

              // Show video
              $videoElement.show();

              // If display text over video unchecked
              if ($videoTextContainer.hasClass('display-text-over-video--false')) {
                $videoText.hide();
              } else {
                $videoText.show();
              }

              // Keep play button hidden
              $playButton.hide();

              // HTML5 Mobile Video
            } else if ($(window).width() < 768 && player.isHTML5) {

              // Hide image
              $image.hide();

              // Show video
              $videoElement.show();

              // Display button so that video can be played
              $playButton.show();

              player.on('play', function() {
                // Show video
                $videoElement.show();

                // Hide play button
                $playButton.hide();
              })
            }
          } else { // If Autoplay disabled
            // If poster image, show image wrapper otherwise hide it
            if ($posterImage) {
              $image.show();
              $videoElement.hide();
            } else {
              $image.hide();
              $videoElement.show();
            }
          }

          // Clicking image will play video
          $image.on('click', function() {
            // Hide image
            $(this).hide();

            // Show video
            $videoElement.show();

            player.play();
          })

          // Muted
          if (isMuted) {
            player.muted = true;
          }

          // Aspect Ratio
          if (aspectRatio) {
            player.ratio = aspectRatio;
          }

          // Looping
          if (isLoopingEnabled) {
            player.loop = true;
          }

          // Show Video Controls
          // - video controls get hidden using a css class: '.video-controls-enabled--false'

          // If button exists, hide text and poster
          if ($playButton) {
            $playButton.on('click', function() {

              // Hide image
              $image.hide();

              // Show video
              $videoElement.show();

              // If display text over video unchecked
              if ($videoTextContainer.hasClass('display-text-over-video--false')) {
                $videoText.hide();
              } else {
                $videoText.show();
              }

              // Play video
              player.play();
            })
          }

          player.on('play', function() {

            // Hide image
            $image.hide();

            // Reset play button icon
            $videoWrapper.removeClass('play-button-icon--visible');

            // Show video
            $videoElement.show();

            // If display text over video unchecked
            if ($videoTextContainer.hasClass('display-text-over-video--false')) {
              $videoText.hide();
            } else {
              $videoText.show();
            }

            // Hide play button
            if ($playButton) {
              $playButton.hide();
            }
          })

          // If video is paused, play button icon or button must be shown
          // If button text is filled out, use play button
          // If button text is not filled out, use play button icon
          player.on('pause', function() {
            if ($playButton.length > 0) {
              $playButton.show();
              $videoWrapper.removeClass('play-button-icon--visible');
            } else {
              $videoWrapper.addClass('play-button-icon--visible');
            }
          })

          // If page loads with video paused and no button showing, show icon
          if (!player.playing && $playButton.is(':hidden') || $playButton.length == 0) {
            $videoWrapper.addClass('play-button-icon--visible');
          }

          return false;
        }
      })
    })
  }
}

/*============================================================================
  Product
==============================================================================*/

var product = {
  init: function(){

    var $notify_form = $('.notify_form .contact-form');

    this.updateWidthBasedOnSidebar();

    // Find product galleries on page but exclude those in the quickshop (quickshop logic handled in fancybox event)
    var $productGalleries = $('.product-gallery:not([data-quickshop-gallery] .product-gallery)');

    // For each product gallery, create an object and add it to an array of galleries
    var galleriesArray = [];
    globalPlayersArray = [];

    if ($productGalleries.length > 0) {
      $.each($productGalleries, function(index, gallery) {
        var $productSection = $(gallery).closest('.product_section');
        galleriesArray.push({
          element: $(gallery),
          productSection: $productSection,
          thumbnailsEnabled: $productSection.data('thumbnails-enabled'),
          thumbnailsSliderEnabled: $productSection.data('thumbnails-slider-enabled'),
          thumbnailsPosition: $productSection.data('thumbnails-position'),
          thumbnailsArrows: $productSection.data('gallery-arrows-enabled'),
          slideshowAnimation: $productSection.data('slideshow-animation'),
          slideShowSpeed: $productSection.data('slideshow-speed'),
          activateZoom: $productSection.data('activate-zoom'),
          productMediaSupported: $productSection.data('product-media-supported'),
          loopingEnabled: $(gallery).find('.product-gallery__main').data('video-looping-enabled'),
          sectionID: $productSection.parents('.shopify-section').attr('id')
        })
      })
    }

    if (galleriesArray.length > 0) {
      // For each galleryObject, enable a Flickity slider
      $.each(galleriesArray, function(index, galleryObject) {
        product.enableSlider(galleryObject);

        // If product media is supported for the gallery, then also launch product media and Plyr
        if (galleryObject.productMediaSupported) {

          // Find videos within gallery section
          var videos;
          videos = $(galleryObject.element).find('[data-html5-video] video, [data-youtube-video]').get();

          product.loadPlyr(galleryObject, videos);
          product.launchProductMedia(galleryObject);

          // Go through each gallery, on video play, check instance ID against other player IDs
          var instance;
          $.each(galleryObject.videoPlayers, function(index, player) {
           player.on('play', function(event) {
             instance = event.detail.plyr;

             // Ensures only one video is playing at a time
             $.each(globalPlayersArray, function(index, player) {
               if (instance.id != player.id) {
                 player.pause();
               }
             })
           })
          })
        }

        //Hover to zoom
        if (galleryObject.activateZoom){
          document.addEventListener('lazybeforeunveil', utils.enableZoom);
        }
      })
    }

    this.loadProductRecommendations();

    $('.product_form.product_form_options.init').each(function() {
      new Shopify.OptionSelectors($(this).data("select-id"), { product: $(this).data("product"), onVariantSelected: selectCallback, enableHistoryState: $(this).data("enable-state") });
    });

    $notify_form.each(function() {
      var $nf = $(this);
      $nf.on("submit", function (e) {
        if($('input[name="challenge"]', $nf).val() !== "true") {
          $.ajax({
            type: $nf.attr('method'),
            url: $nf.attr('action'),
            data: $nf.serialize(),
            success: function (data) {
              $nf.fadeOut("slow", function(){
                $nf.prev('.message').html(Shopify.translation.product_notify_form_success);
              });
            },
            error: function(data) {
              $('input[name="challenge"]', $nf).val('true');
              $nf.submit();
            }
          });
          e.preventDefault();
        }
      });
    });

    

  },
  enableSlider: function(galleryObject) {

    var $el = galleryObject.element.find('.product-gallery__main');
    var $thumbnailProductGallery = galleryObject.element.find('.product-gallery__thumbnails');
    var $slides = $el.find('.product-gallery__image');
    var $thumbnails = $thumbnailProductGallery.find('.product-gallery__thumbnail');
    var arrowShape = 'M95.04 46 21.68 46 48.18 22.8 42.91 16.78 4.96 50 42.91 83.22 48.18 77.2 21.68 54 95.04 54 95.04 46z';

    // Initialize Flickity for product gallery

    $el.flickity({
      wrapAround: true,
      adaptiveHeight: true,
      dragThreshold: 10,
      imagesLoaded: true,
      pageDots: false,
      prevNextButtons: $el.data('media-count') > 1 ? true : false,
      autoPlay: galleryObject.slideShowSpeed * 1000,
      fade: galleryObject.slideShowAnimation === 'fade' ? true : false,
      watchCSS: false,
      arrowShape: arrowShape
    })

    $el.on('change.flickity', function() {
      $slides.each(function(index, slide){

        // Variables to be used
        var $slide = $(slide);
        var mediaType = $slide.data('media-type');

        // Check whether slide is active slide (featured image shown) or inactive slide (slide hidden)
        if ($slide.hasClass('is-selected')) {
          // Switch statement to go through different media types (video, model)
          switch(mediaType) {
            case 'model':
             /* On slide change, if active slide contains 3d model
              * If on desktop, on hover, unbind flickity, after hover bind flickity
              * On model play event, unbind flickity to ensure model can be interacted with
              * On model pause event, bind flickity so that slide can be swiped
              * Pause all model slides when hidden
              */

              if ($(window).width() > 768) {
                // On mouseenter event, unbind flickity
                $slide.on('mouseenter', function() {
                  $el.flickity('unbindDrag');
                });

                // On mouseleave event, bind flickity
                $slide.on('mouseleave', function() {
                  $el.flickity('bindDrag');
                });
              }

              // Listen for model pause/play events
              $slide.find('model-viewer').on('shopify_model_viewer_ui_toggle_play', function() {
                $el.flickity('unbindDrag');
              })

              $slide.find('model-viewer').on('shopify_model_viewer_ui_toggle_pause', function(){
                $el.flickity('bindDrag');
              })
              break;
          }
        } else {
          // Below logic deals with the hidden slides when a flickity change is triggered
          // Switch statement to go through different media types (video, model)
          switch(mediaType) {
            case 'model':
              // Pause models when hidden
              if (galleryObject.models.length > 0) {
                $.each(galleryObject.models, function(index, model) {
                  model.pause();
                })
              }
              break;
            case 'video':

              // Variables
              var $htmlVideo = $slide.find('[data-html5-video]');
              var videoID = $htmlVideo.find('video').data('plyr-video-id');

              // Pause all html5 videos for slides that are hidden
              if ($htmlVideo.length) {
                $.each(galleryObject.videoPlayers, function(index, player) {
                  if (player.id == videoID) {
                    player.pause();
                  }
                })
              }
              break;
            case 'external_video':

              // Variables
              var $iframeVideo = $slide.find('iframe');
              var iframeID = $iframeVideo.attr('id');

              // Pause all youtube videos for slides that are hidden
              if ($iframeVideo.length) {
                $.each(galleryObject.videoPlayers, function(index, player) {
                  if (player.media.id == iframeID) {
                    player.pause();
                  }
                })
              }
              break;
          }
        }
      })
    })

    // Ensures Flickity is not collapsed when loaded
    $el.on( 'settle.flickity', function() {
      $el.flickity('resize');
    });

    $( window ).on( 'load', function() {
      $el.flickity('resize');
    });

    // Checks for 3D Models and takes care of binding/unbinding slider
    $slides.each(function(index, slide) {

      // Variables to be used
      var $slide = $(slide);
      var mediaType = $slide.data('media-type');

      // Check whether slide is active slide (featured image shown)
      if ($slide.hasClass('is-selected')) {

        if (mediaType == 'model') {
          // If slide has 3D model, unbind flickity on hover on desktop
          // This allows you to click anywhere to trigger model ui

          if ($(window).width() > 768) {
            // On mouseenter event, unbind flickity
            $slide.on('mouseenter', function() {
              $el.flickity('unbindDrag');
            });

            // On mouseleave event, bind flickity
            $slide.on('mouseleave', function() {
              $el.flickity('bindDrag');
            });
          }
        }

        // Detect keyboard 'ENTER' key on slides
        $slide.keypress(function(event) {
          if(event.which == 13) {

            $slide.find('model-viewer, .product-gallery__link, .plyr').focus();

            $el.on('settle.flickity', function(event, index) {
              // Run video autoplay logic if featured media is a video
              if (mediaType == 'video' || mediaType == 'external_video') {
                checkForVideos();
              }

              // Autoplay model if featured media is a model
              if (mediaType == 'model') {
                // If model container has class is-selected then play the model
                autoplayModel();
              }

              // Unbind settle event
              $el.off('settle.flickity');

            })
          }
        })
      }
    })

    var $sliderArrows = $el.find('.flickity-prev-next-button');

    if (($sliderArrows || $thumbnails) && ($(window).width() > 798)) {
      $sliderArrows.on('click', function() {

        // Find out media type of featured media slide
        var mediaType = $el.find('.product-gallery__image.is-selected').data('media-type');

        $el.on('settle.flickity', function(event, index) {
          // Run video autoplay logic if featured media is a video
          if (mediaType == 'video' || mediaType == 'external_video') {
            checkForVideos();
          }

          // Autoplay model if featured media is a model
          if (mediaType == 'model') {
            // If model container has class is-selected then play the model
            autoplayModel();
          }

          // Unbind settle event
          $el.off('settle.flickity');
        })

      })

      // Detect keyboard 'ENTER' key on slider arrows
      $sliderArrows.on('keypress', function(event) {

        if(event.which == 13) {
          $el.focus();
          $el.attr('tabindex', 0);
          $el.find('.product-gallery__image').attr('tabindex', 0);
        }

      })

      $thumbnails.on('click', function() {

        // Change slide
        var index = $(event.currentTarget).index();
        $el.flickity('select', index);

        // Find out media type of featured media slide
        var mediaType = $el.find('.product-gallery__image.is-selected').data('media-type');

        $el.on('settle.flickity', function(event, index) {
          // Run video autoplay logic if featured media is a video
          if (mediaType == 'video' || mediaType == 'external_video') {
            checkForVideos();
          }

          // Autoplay model if featured media is a model
          if (mediaType == 'model') {
            // If model container has class is-selected then play the model
            autoplayModel();
          }

          // Unbind settle event
          $el.off('settle.flickity');
        })

      })

      // Added functionality for keyboard 'enter' key
      $thumbnails.keypress(function(event) {
        var index = $(event.currentTarget).index();

        if(event.which == 13) {

          // Change slide
          $el.flickity('select', index);

          // Find selected slide
          var $selectedSlide = $el.find('.product-gallery__image.is-selected');

          // Find out media type of featured media slide
          var mediaType = $selectedSlide.data('media-type');

          // Bring focus to media inside selected slide once slide has finished animation
          $el.on( 'settle.flickity', function( event, index ) {
            $selectedSlide.find('[data-youtube-video]').attr('tabindex', '0');
            $selectedSlide.find('model-viewer, .plyr, .product-gallery__link').focus();

            // Run video autoplay logic if featured media is a video
            if (mediaType == 'video' || mediaType == 'external_video') {
              checkForVideos();
            }

            // Autoplay model if featured media is a model
            if (mediaType == 'model') {
              // If model container has class is-selected then play the model
              autoplayModel();
            }

            // Unbind settle event
            $el.off('settle.flickity');
          });
        }
      })
    }

    function autoplayModel() {
      $.each(galleryObject.models, function(index, model) {
        var $slide = $(model.container).parents('.product-gallery__image');
        if ($slide.hasClass('is-selected')) {
          model.play();
        }
      })
    }

    function checkForVideos() {
      $slides.each(function(index, slide) {
        // Variables
        var $slide = $(slide);
        var mediaType = $slide.data('media-type');
        var videoID = $slide.find('video').data('plyr-video-id');
        var $iframeVideo = $slide.find('iframe');
        var iframeID = $iframeVideo.attr('id');
        if ($slide.hasClass('is-selected')) {
          if (mediaType == 'video') {
            videoID = $slide.find('video').data('plyr-video-id');
            if (videoID) {
              autoplayVideo(videoID, $slide);
            }
          } else if (mediaType == 'external_video') {
            if (iframeID) {
              autoplayYoutubeVideo(iframeID, $slide);
            }
          }
        }
      })
    }

    function autoplayVideo(videoID, $slide) {
      // Compare id to player object and only play that video
      $.each(galleryObject.videoPlayers, function(index, player){

        if (player.id == videoID) {
          player.play();

          // On fullscreen exit, focus on the thumbnail nav
          player.on('exitfullscreen', function(event){
            var $thumbnailProductGallery = $slide.closest('.product-gallery').find('.product-gallery__thumbnails');
            if ($thumbnailProductGallery.hasClass('vertical-slider-enabled')) {
              $thumbnailProductGallery.attr('tabindex', '0').focus();
            } else {
              $thumbnailProductGallery.focus();
            }
          })
        }
      })
    }

    function autoplayYoutubeVideo(iframeID, $slide) {
      // compare id to player object and only play that video
      $.each(galleryObject.videoPlayers, function(index, player){

        if (player.playing) {
          player.pause();
        }

        if (player.media.id == iframeID) {
          player.play();

          // On fullscreen exit, focus on the thumbnail nav
          player.on('exitfullscreen', function(event){
            var $thumbnailProductGallery = $slide.closest('.product-gallery').find('.product-gallery__thumbnails');
            if ($thumbnailProductGallery.hasClass('vertical-slider-enabled')) {
              $thumbnailProductGallery.attr('tabindex', '0').focus();
            } else {
              $thumbnailProductGallery.focus();
            }
          })
        }
      })
    }

    // Thumbnail gallery logic begins (thumbnail gallery appears right below main product slider)
    if (galleryObject.thumbnailsEnabled == true) {
      if (galleryObject.thumbnailsSliderEnabled == true && $slides.length > 1) {

        // If desktop determine which slider we build
        if ($(window).width() > 798) {
          // If thumbnail position is left/right then vertical slider gets enabled
          if (galleryObject.thumbnailsPosition == 'left-thumbnails' || galleryObject.thumbnailsPosition == 'right-thumbnails') {
            $thumbnailProductGallery.css('max-height', $el.closest('.product-gallery').outerHeight());
            $thumbnailProductGallery.addClass('vertical-slider-enabled');
            $thumbnails.on('click', function(event) {
              var index = $(event.currentTarget).index();
              $el.flickity('select',index );
            });

            var navCellHeight = $thumbnails.height();
            var navHeight = $thumbnailProductGallery.height();

            $el.on('select.flickity', function() {
              // Set selected nav cell
              var flkty = $el.data('flickity');
              $thumbnailProductGallery.find('.is-nav-selected').removeClass('is-nav-selected');
              var $selected = $thumbnails.eq(flkty.selectedIndex).addClass('is-nav-selected');

              // Scroll nav
              var scrollY = $selected.position().top + $thumbnailProductGallery.scrollTop() - ( navHeight + navCellHeight ) / 2;
              $thumbnailProductGallery.animate({
                scrollTop: scrollY
              });
            });
          } else {
            $thumbnailProductGallery.flickity({
              cellAlign: 'center',
              contain: true,
              groupCells: '80%',
              imagesLoaded: true,
              pageDots: false,
              prevNextButtons: $thumbnails.length > 5 ? galleryObject.thumbnailsArrows : false,
              asNavFor: $el[0],
              arrowShape: arrowShape
            });

            // Ensures Flickity is not collapsed when loaded
            $thumbnailProductGallery.on( 'settle.flickity', function() {
              $thumbnailProductGallery.flickity('resize');
            });

            $( window ).on('load', function() {
              $thumbnailProductGallery.flickity('resize');
            });

            // Once thumbnail is focused, move carousel to that cell
            $.each($thumbnails, function(index, thumbnail) {
              var $thumbnail = $(thumbnail);
              if ($thumbnail.hasClass('is-selected')) {
                $thumbnail.on('focus', function() {
                  $thumbnailProductGallery.flickity('selectCell', index);
                })
              }
            })
          }
        } else {
          // If not on desktop, create standard thumbnail slider
          $thumbnailProductGallery.flickity({
            cellAlign: 'center',
            contain: true,
            groupCells: '80%',
            imagesLoaded: true,
            pageDots: false,
            prevNextButtons: $thumbnails.length > 5 ? galleryObject.thumbnailsArrows : false,
            asNavFor: $el[0],
            arrowShape: arrowShape
          });
        }
      } else {
        // If thumbnail slider is disabled, ensure thumbnails can still navigate product images
        $thumbnailProductGallery.find('.product-gallery__thumbnail').on('click', function(){
          var index = $(this).index();
          $el.flickity('selectCell', index);
        });
      }
    }
  },
  launchProductMedia: function(galleryObject) {

    // function to check if browser is IE
    var isIE11 = !!navigator.userAgent.match(/Trident.*rv\:11\./);

    // Ensure product media libraries are present
    if (!isIE11) {
      window.Shopify.loadFeatures([
        {
          name: 'shopify-xr',
          version: '1.0',
        },
        {
          name: 'model-viewer-ui',
          version: '1.0',
        }
      ], onAllFeaturesLoaded);
    }

    /* Enable looping for videos based off their section setting
     * Find videos within this section
     * Set looping
     */

    $.each(galleryObject.videoPlayers, function(index, player) {
      var $wrapper = $(player.elements.wrapper);

      if (galleryObject.sectionID != null) {
        var $section = $wrapper.parents('.shopify-section').attr('id', galleryObject.sectionID);
        var loopingEnabled = $section.find(galleryObject.element).find('.product-gallery__main').data('video-looping-enabled');
      } else {
        var loopingEnabled = galleryObject.element.find('.product-gallery__main').data('video-looping-enabled');
      }

      player.loop = loopingEnabled;
    })

    // 3D Model Setup
    var config = {
      // Default control list
      controls: [
        'zoom-in',
        'zoom-out',
        'fullscreen',
      ],
      focusOnPlay: false
    };

    function onAllFeaturesLoaded() {
      // If product media enabled look for model-viewer tags and setup
      galleryObject.models = [];
      var $models = $($('model-viewer', galleryObject.element));
      $models.each(function(index, model) {
        model = new Shopify.ModelViewerUI(model, config);
        galleryObject.models.push(model);
      })
    }
  },
  enableVideoOnHover: function($thumbnail) {
    var $html5Video = $thumbnail.find('[data-html5-video]');
    var $youtubeVideo = $thumbnail.find('[data-youtube-video]');
    var videoID;

    if ($html5Video.length > 0) {
      videoID = $html5Video.find('[data-plyr-video-id]').data('plyr-video-id');
    } else if ($youtubeVideo.length > 0) {
      videoID = $youtubeVideo.find('iframe').attr('id');
    }

    if (videoID) {
      $.each(secondaryMediaPlayers, function(index, player) {

        if (player.id == videoID || player.media.id == videoID) {
          player.toggleControls(false);
          player.muted = true;
          player.play();
        }
      })
    }
  },
  disableVideoOnHover: function($thumbnail) {
    var $html5Video = $thumbnail.find('[data-html5-video]');
    var $youtubeVideo = $thumbnail.find('[data-youtube-video]');
    var videoID;

    if ($html5Video.length > 0) {
      videoID = $html5Video.find('[data-plyr-video-id]').data('plyr-video-id');
    } else if ($youtubeVideo.length > 0) {
      videoID = $youtubeVideo.find('iframe').attr('id');
    }

    if (videoID) {
      $.each(secondaryMediaPlayers, function(index, player) {

        if (player.id == videoID || player.media.id == videoID) {
          if (player.playing) {
            player.pause();
          }
        }
      })
    }
  },
  loadPlyr: function(galleryObject, videos, showSecondaryMedia) {
    // Initializes Plyr library for HTML5 and YouTube videos in Product Gallery
    utils.launchVideoPlayer(Plyr, galleryObject, videos, showSecondaryMedia);

    if (galleryObject) {
      // Adds plyr video id to video wrapper
      $.each(galleryObject.videoPlayers, function(index, player) {
        var source = player.provider;
        var id = player.id;
        var $video;

        if (source == 'html5') {
          $video = $(player.elements.wrapper).find('video');
          $video.attr('data-plyr-video-id', id);
        }
      })
    }
  },
  updateWidthBasedOnSidebar: function() {
    // Sidebar check
    var $responsiveElements = $('[data-sidebar-width]');

    if ($('.sidebar:not(.featured-collection__sidebar)').length > 0) {
      $responsiveElements.each(function(){
        $(this).removeClass($(this).data('initial-width'));
        $(this).removeClass('no-sidebar-width');
        $(this).addClass($(this).data('sidebar-width'));
        $(this).addClass('sidebar-width');
      });
    } else {
      $responsiveElements.each(function () {
        $(this).removeClass($(this).data('sidebar-width'));
        $(this).removeClass('sidebar-width');
        $(this).addClass($(this).data('initial-width'));
        $(this).addClass('no-sidebar-width');
      });
    }
  },
  loadProductRecommendations: function() {

    // Look for an element with class 'product-recommendations'
    var $productRecommendationsContainer = $('.product-recommendations');

    if ($productRecommendationsContainer.length === 0) {
      return false;
    }

    /* NE compatibility
      * In NE, we will have a dynamic section ID that will need to be grabbed from the DOM like the other variables
      * var sectionID = $productRecommendationsContainer.data('section-id');
      Ends NE compatibility */

    // Selectors
    var productID = $productRecommendationsContainer.data('product-id');
    var limit = $productRecommendationsContainer.data('limit');
    var recommendationsURL = $productRecommendationsContainer.data('recommendations-url');

    /* NE compatibility
      * In NE, this request url will need to be updated to reflect the dynamic section ID, 'section_id=' + sectionID
      Ends NE compatibility */
    // Build request URL
    var requestUrl = recommendationsURL + "?section_id=product-recommendations&limit=" + limit + "&product_id=" + productID;

    $.ajax({
      type: 'GET',
      url: requestUrl,
      success: function(data) {

        var $recommendedProductsElement = $(data).find('.product-recommendations').html();

        // Insert product list into the product recommendations container
        $productRecommendationsContainer.html($recommendedProductsElement);

        // Initialize shopify payment buttons
        if (Shopify.PaymentButton) {
          Shopify.PaymentButton.init();
        }

        collection.unload($('.recommended-products-section'));
        collection.init();
        product.updateWidthBasedOnSidebar();
      }
    });
  },
  unload: function($target){
    // Destroy Flickity slider
    var $gallerySlider = $target.find('.product-gallery__main');
    var $thumbnailSlider = $target.find('.product-gallery__thumbnails');

    $gallerySlider.flickity('destroy');
    $thumbnailSlider.flickity('destroy');

    $('body').off('click', '.js-change-quantity');
  }
}


/*============================================================================
  Collection
==============================================================================*/

var collection = {
  init: function(){

    


    if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
      $(".quick_shop").remove();
    } else {
      var modal_width = '860px';
      if($(window).width() >= 1200 || $('html').hasClass('ie')) {
        modal_width = '1080px'
      }
      $(".quick_shop").fancybox({

        width: modal_width,
        height: 'auto',
        autoSize: false,
        padding: [20, 20, 20, 20],
        afterShow: function(e) {
          var selector = $('.fancybox-opened').find('.selector-wrapper select');
          selector.trigger('change');
        },
        beforeShow: function(e) {
          // Add alt to fancybox image
          var imageAlt = $(this.element).data('alt');
          $('.fancybox-image').attr('alt', imageAlt);

          // Global variables
          var $gallery = $('.' + $(this.element).data('gallery'));

          var galleryObject = {
            element: $gallery,
            thumbnailsEnabled: $gallery.parents('.product_section').data('thumbnails-enabled'),
            thumbnailsSliderEnabled: $gallery.parents('.product_section').data('thumbnails-slider-enabled'),
            thumbnailsPosition: $gallery.parents('.product_section').data('thumbnails-position'),
            thumbnailsArrows: $gallery.parents('.product_section').data('gallery-arrows-enabled'),
            slideshowAnimation: $gallery.parents('.product_section').data('slideshow-animation'),
            slideShowSpeed: $gallery.parents('.product_section').data('slideshow-speed'),
            activateZoom: $gallery.parents('.product_section').data('activate-zoom'),
            productMediaSupported: $gallery.parents('.product_section').data('product-media-supported'),
            loopingEnabled: $gallery.data('video-looping-enabled'),
            sectionID: null
          }

          product.enableSlider(galleryObject);

          if (galleryObject.productMediaSupported) {

            // Find videos within gallery section
            var thumbnailVideos;
            thumbnailVideos = $(galleryObject.element).find('[data-html5-video] video, [data-youtube-video]').get();

            product.loadPlyr(galleryObject, thumbnailVideos);
            product.launchProductMedia(galleryObject);
          }

          // Hover to Zoom
          if (galleryObject.activateZoom){
            document.addEventListener('lazybeforeunveil', utils.enableZoom);
          }
        },
        afterClose: function() {
          var $gallery = $('.' + $(this.element).data('gallery'))

          // Find videos in gallery
          // Find IDs and match against player
          // If videos are playing, pause them
          var $videosInGallery = $gallery.find('.product-gallery__image[data-media-type="video"], .product-gallery__image[data-media-type="external_video"]');
          $videosInGallery.each(function(index, video) {
            var $iframeVideo = $(video).find('iframe');
            var iframeID = $iframeVideo.attr('id');
            var $html5Video = $(video).find('[data-html5-video]');
            var videoID = $html5Video.find('video').data('plyr-video-id');

            // Pause all html5 videos
            if ($html5Video.length) {
              $.each(globalPlayersArray, function(index, player) {
                if (player.id == videoID) {
                  if (player.playing) {
                    player.pause();
                  }
                }
              })
            }

            // Pause all youtube videos
            if ($iframeVideo.length) {
              $.each(globalPlayersArray, function(index, player) {
                if (player.media.id == iframeID) {
                  if (player.playing) {
                    player.pause();
                  }
                }
              })
            }
          });
        }
      });
    }

    $('#sort-by').val($('#sort-by').data('default-sort'));

    $('body')
      .on('change', '#tag_filter, #sort-by', function() {
        var sortValue = $('#sort-by').val();
        var filterValue = $('#tag_filter').val();

        Shopify.queryParams.sort_by = sortValue;
        sortUrl = $.param(Shopify.queryParams);

        if (sortValue && filterValue){
          window.location = filterValue + '?sort_by=' + sortValue;
        } else if (sortValue && !filterValue) {
          window.location = '?' + sortUrl;
        } else if (!sortValue && filterValue){
          window.location = filterValue;
        }
    });

    
  },
  showSecondaryMedia: function(){
    // Will be enabled on non-touch devices and screen sizes larger than 1024px
    if (!/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) && $(window).width() > 1024) {

      // Load Plyr for videos as secondary media
      var secondaryMediaVideos;
      secondaryMediaVideos = $('.thumbnail').find('[data-html5-video] video, [data-youtube-video]').get();

      // Check for data-plyr-loaded attribute
      var plyrLoaded = $('.recommended-products-section').find('.products').data('plyr-loaded') || $('.featured-collection-section').find('.products').data('plyr-loaded');
      if (!plyrLoaded) {
        product.loadPlyr(galleryObject = null, secondaryMediaVideos, showSecondaryMedia = true);
      }

      $('.has-secondary-media-swap').off().on('mouseenter', function() {
        $(this).find('.image-element__wrap img').toggleClass('secondary-media-hidden');
        $(this).find('[data-html5-video]').toggleClass('secondary-media-hidden');
        $(this).find('.external-video__container').toggleClass('secondary-media-hidden');
        product.enableVideoOnHover($(this));
      });

      $('.has-secondary-media-swap').on('mouseleave', function() {
        $(this).find('.image-element__wrap img').toggleClass('secondary-media-hidden');
        $(this).find('[data-html5-video]').toggleClass('secondary-media-hidden');
        $(this).find('.external-video__container').toggleClass('secondary-media-hidden');
        product.disableVideoOnHover($(this));
      });
    }
  },
  unload: function($target){
    $target.find('.thumbnail').off('mouseenter mouseleave');
    $('body').off('change', '#tag_filter, #sort-by');
    $target.find('.quick_shop').off('click.fb');
  }
}

/*============================================================================
  Map
==============================================================================*/

var map = {
  init: function(){
    if ($(".map-section .map, .contact-template-section .map, .page-details-section .map, .product-details-section .map").hasClass('js-api-map')) {
      var mapsToLoad = [];

      //Create map settings array
      $('.map').each(function(i, obj) {
        mapsToLoad.push(this);
        mapsToLoad[i].sectionid = $(this).data('id');
        mapsToLoad[i].address = $(this).data('address');
        mapsToLoad[i].directions = $(this).data('directions-address');
        mapsToLoad[i].zoom = $(this).data('zoom');
        mapsToLoad[i].mapstyle = $(this).data('style');
        mapsToLoad[i].showpin = $(this).data('pin');
        mapsToLoad[i].apikey = $(this).data('api-key');
      });

      $.each(mapsToLoad, function(i, instance) {

        //Enable caching to avoid duplicate google maps files
        $.ajaxSetup({ cache: true });

        //Load maps script and find location coordinates
        $.getScript('https://maps.googleapis.com/maps/api/js?key=' + mapsToLoad[i].apikey).then(function() {
          map.findLocation(mapsToLoad[i]);
          $.ajaxSetup({ cache: false });
        });
      });
    }
  },

  findLocation:function(mapArray) {
    var geoLat;
    var geoLng;
    var geocoder = new google.maps.Geocoder();

    //Find and set coordinates
    geocoder.geocode( { 'address': mapArray.address }, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {

        geoLat = results[0].geometry.location.lat();
        geoLng = results[0].geometry.location.lng();

        //Create map
        map.initMap(geoLat, geoLng, mapArray);

      }
    });
  },

  initMap:function(lat,lng, mapArray) {

    var location = {lat: lat, lng: lng};
    var styleJson = [];

    //Set style JSON
    if( mapArray.mapstyle == 'aubergine') {
      styleJson = [{"elementType":"geometry","stylers":[{"color":"#1d2c4d"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#8ec3b9"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#1a3646"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"color":"#4b6878"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#64779e"}]},{"featureType":"administrative.province","elementType":"geometry.stroke","stylers":[{"color":"#4b6878"}]},{"featureType":"landscape.man_made","elementType":"geometry.stroke","stylers":[{"color":"#334e87"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#023e58"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#283d6a"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#6f9ba5"}]},{"featureType":"poi","elementType":"labels.text.stroke","stylers":[{"color":"#1d2c4d"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#023e58"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#3C7680"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#304a7d"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#98a5be"}]},{"featureType":"road","elementType":"labels.text.stroke","stylers":[{"color":"#1d2c4d"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#2c6675"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#255763"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#b0d5ce"}]},{"featureType":"road.highway","elementType":"labels.text.stroke","stylers":[{"color":"#023e58"}]},{"featureType":"transit","elementType":"labels.text.fill","stylers":[{"color":"#98a5be"}]},{"featureType":"transit","elementType":"labels.text.stroke","stylers":[{"color":"#1d2c4d"}]},{"featureType":"transit.line","elementType":"geometry.fill","stylers":[{"color":"#283d6a"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#3a4762"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#0e1626"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#4e6d70"}]}];
    } else if(mapArray.mapstyle == 'retro') {
      styleJson = [{"elementType":"geometry","stylers":[{"color":"#ebe3cd"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#523735"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f1e6"}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#c9b2a6"}]},{"featureType":"administrative.land_parcel","elementType":"geometry.stroke","stylers":[{"color":"#dcd2be"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#ae9e90"}]},{"featureType":"landscape.natural","elementType":"geometry","stylers":[{"color":"#dfd2ae"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#dfd2ae"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#93817c"}]},{"featureType":"poi.park","elementType":"geometry.fill","stylers":[{"color":"#a5b076"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#447530"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#f5f1e6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#fdfcf8"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#f8c967"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#e9bc62"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry","stylers":[{"color":"#e98d58"}]},{"featureType":"road.highway.controlled_access","elementType":"geometry.stroke","stylers":[{"color":"#db8555"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#806b63"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#dfd2ae"}]},{"featureType":"transit.line","elementType":"labels.text.fill","stylers":[{"color":"#8f7d77"}]},{"featureType":"transit.line","elementType":"labels.text.stroke","stylers":[{"color":"#ebe3cd"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#dfd2ae"}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#b9d3c2"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#92998d"}]}];
    } else if(mapArray.mapstyle == 'silver') {
      styleJson = [{"elementType":"geometry","stylers":[{"color":"#f5f5f5"}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#f5f5f5"}]},{"featureType":"administrative.land_parcel","elementType":"labels.text.fill","stylers":[{"color":"#bdbdbd"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#ffffff"}]},{"featureType":"road.arterial","elementType":"labels.text.fill","stylers":[{"color":"#757575"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#dadada"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#616161"}]},{"featureType":"road.local","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"color":"#e5e5e5"}]},{"featureType":"transit.station","elementType":"geometry","stylers":[{"color":"#eeeeee"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#c9c9c9"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#9e9e9e"}]}];
    } else if(mapArray.mapstyle == 'night') {
      styleJson =  [{"elementType":"geometry","stylers":[{"color":"#242f3e"}]},{"elementType":"labels.text.fill","stylers":[{"color":"#746855"}]},{"elementType":"labels.text.stroke","stylers":[{"color":"#242f3e"}]},{"featureType":"administrative.locality","elementType":"labels.text.fill","stylers":[{"color":"#d59563"}]},{"featureType":"poi","elementType":"labels.text.fill","stylers":[{"color":"#d59563"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#263c3f"}]},{"featureType":"poi.park","elementType":"labels.text.fill","stylers":[{"color":"#6b9a76"}]},{"featureType":"road","elementType":"geometry","stylers":[{"color":"#38414e"}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"color":"#212a37"}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"color":"#9ca5b3"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#746855"}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#1f2835"}]},{"featureType":"road.highway","elementType":"labels.text.fill","stylers":[{"color":"#f3d19c"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#2f3948"}]},{"featureType":"transit.station","elementType":"labels.text.fill","stylers":[{"color":"#d59563"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#17263c"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"color":"#515c6d"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"color":"#17263c"}]}];
    } else {
      styleJson = [];
    }

    //Create google maps link
    $('.js-map-link').attr('href', 'https://www.google.com/maps/place/' + mapArray.directions + '/@' + lat + ',' + lng );

    //Set map options
    var mapOptions = {
      zoom: mapArray.zoom,
      center: location,
      styles: styleJson,
      disableDefaultUI: false
    };

    //Create map
    var map = new google.maps.Map(document.getElementById(mapArray.sectionid), mapOptions);

    //Show pin
    if(mapArray.showpin == true) {
      var marker = new google.maps.Marker({
        position: location,
        map: map
      });
    }
  }
}

/*============================================================================
  Product form
==============================================================================*/

var productFormListeners = {
  init: function(){
    $(document).on("click", ".minus", function(e) {
      var quantity = parseInt($(this).next("input").val());
      quantity -= 1;
      $(this).next("input").val(quantity);
      if (quantity == 0) {
        $(this).closest('li a.cart__item').slideUp();
        var itemToRemove = $(this).next().data('id');
        $('.item--' + itemToRemove).remove();
        setTimeout(ajaxSubmitCart, 500);
      } else {
        $(this).next("input").trigger('change');
      }

      e.stopPropagation();
      e.preventDefault();
      return false;
    });

    $(document).on("click", ".plus", function(e) {
      var quantity = parseInt($(this).prev("input").val());
      quantity += 1;
      $(this).prev("input").val(quantity).trigger('change');

      e.stopPropagation();
      e.preventDefault();
      return false;
    });

    $(document).on("change", "#cart_form input[type='number']", function() {
      $("#cart_form").submit();
    }).delay(200);

    if ($('.tos_agree').length) {
      $('body').on('click', 'input[type="submit"]', function() {
        if($(this).parents('form').find('.tos_agree').length) {
          if ($(this).parents('form').find('.tos_agree').is(':checked')) {
            $(this).submit();
          } else {
            alert(Shopify.translation.agree_to_terms_warning);
            return false;
          }
        } else {
          $(this).submit();
        }
      });
    }
  },
  unload: function(){

  }
}

/*============================================================================
  Cart
==============================================================================*/

var ajaxCart = {
  init: function(){
    $(document).on('click', '.ajax-submit', function(e) {
      e.preventDefault();
      var $addToCartForm = $(this).closest('form');
      var $addToCartBtn = $addToCartForm.find('.add_to_cart');

      var cartURL = $('[data-cart-url]').data('cart-url');

      $.ajax({
        url: cartURL + '.js',
        dataType: 'json',
        cache: false,
        type: 'post',
        data: $addToCartForm.serialize(),
        beforeSend: function() {
          $addToCartBtn.attr('disabled', 'disabled').addClass('disabled');
          $addToCartBtn.find('span').removeClass("zoomIn").addClass('animated zoomOut');
        },
        success: function(itemData) {
          $addToCartBtn.find('span').text(Shopify.translation.product_add_to_cart_success).removeClass('zoomOut').addClass('fadeIn');

          window.setTimeout(function(){
            $addToCartBtn.removeAttr('disabled').removeClass('disabled');
            $addToCartBtn.find('span').addClass("fadeOut").text($addToCartBtn.data('label')).removeClass('fadeIn').removeClass("fadeOut").addClass('zoomIn');
          }, 1000);

          $.ajax({
            url: '/cart.js',
            dataType: "json",
            cache: false,
            success: function(cart) {
              refreshCart(cart);
              window.setTimeout(function(){ $.fancybox.close(); $('.cart-button').click(); }, 500);
            }
          });
        },
        error: function(XMLHttpRequest) {
          var response = eval('(' + XMLHttpRequest.responseText + ')');
          response = response.description;
          $('.warning').remove();

          var warning = '<p class="warning animated bounceIn">' + response.replace('All 1 ', 'All ') + '</p>';
          $addToCartForm.after(warning);
          $addToCartBtn.removeAttr('disabled').removeClass('disabled');
          $addToCartBtn.find('span').text(Shopify.translation.product_add_to_cart).removeClass('zoomOut').addClass('zoomIn');
        }
      });

      return false;
    });
  },
  unload: function(){

  }
}

/*============================================================================
  Utilities
==============================================================================*/

var plyrUtils = {
  playButtonIcon:'<button type="button" class="plyr__control plyr__control--overlaid" aria-label="Play, {title}" data-plyr="play"><svg class="play-icon-button-control" width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="60" height="60" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M23 20V40L39 29.4248L23 20Z" fill="#323232"/></svg><span class="plyr__sr-only">Play</span></button>',
  playButton: '<button type="button" class="plyr__controls__item plyr__control" aria-label="Play, {title}" data-plyr="play"><svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-pause"></use></svg><svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-play"></use></svg><span class="label--pressed plyr__tooltip" role="tooltip">Pause</span><span class="label--not-pressed plyr__tooltip" role="tooltip">Play</span></button>',
  muteButton: '<button type="button" class="plyr__controls__item plyr__control" aria-label="Mute" data-plyr="mute"><svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-muted"></use></svg><svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-volume"></use></svg><span class="label--pressed plyr__tooltip" role="tooltip">Unmute</span><span class="label--not-pressed plyr__tooltip" role="tooltip">Mute</span></button>',
  progressInput: '<div class="plyr__controls__item plyr__progress__container"><div class="plyr__progress"><input data-plyr="seek" type="range" min="0" max="100" step="0.01" value="0" aria-label="Seek"><progress class="plyr__progress__buffer" min="0" max="100" value="0">% buffered</progress><span role="tooltip" class="plyr__tooltip">00:00</span></div></div>',
  volume: '<div class="plyr__controls__item plyr__volume"><input data-plyr="volume" type="range" min="0" max="1" step="0.05" value="1" autocomplete="off" aria-label="Volume"></div>',
  fullscreen: '<button type="button" class="plyr__controls__item plyr__control" data-plyr="fullscreen"><svg class="icon--pressed" role="presentation"><use xlink:href="#plyr-exit-fullscreen"></use></svg><svg class="icon--not-pressed" role="presentation"><use xlink:href="#plyr-enter-fullscreen"></use></svg><span class="label--pressed plyr__tooltip" role="tooltip">Exit fullscreen</span><span class="label--not-pressed plyr__tooltip" role="tooltip">Enter fullscreen</span></button>'
}

var controls = plyrUtils.playButtonIcon + '<div class="plyr__controls">' + plyrUtils.playButton + plyrUtils.progressInput + plyrUtils.muteButton + plyrUtils.volume + plyrUtils.fullscreen + '</div';

var globalPlayersArray = [];
var secondaryMediaPlayers;

var utils = {
	initializeTabs: function(){
		var tabs = $('ul.tabs');
		tabs.each(function(i) {
		  var tab = $(this).find('> li > a');
		  tab.on('click',function(e) {
		    var contentLocation = $(this).attr('href');
		    if(contentLocation.charAt(0)=="#") {
		      e.preventDefault();
		      tab.removeClass('active');
		      $(this).addClass('active');
		      $(this).parents('ul.tabs').next().find(contentLocation).show().css({'display': 'block'}).addClass('active').siblings().hide().removeClass('active');
		    }
		  });
		});
	},
	initializeAccordions: function(){
    var allPanels = $('.accordion > dd');

    for(i = 0; i < allPanels.length; i++) {
      $(allPanels[i]).css('height', $(allPanels[i]).outerHeight());
    }

    allPanels.hide();

		$('.accordion > dt > a').on('click',function(){
		 if(!$(this).parent().next().is(":visible")) {
		    allPanels.slideUp();
			$(this).parent().next().slideDown();
		    $('.accordion small.right').html('&#9668;');
		    $(this).find('small.right').html('&#9660;');
		  }
		  return false;
		});
		$($('.accordion dd')[0]).show();
  },
  initializeProductLightbox: function() {
    // Trigger Fancybox on Flickity product gallery images
    $('.product-gallery__main .product-gallery__image .fancybox').fancybox({
      padding: 0,
      wrapCSS: 'gallery',
      // When number of media is greater than 1, show arrows
      arrows: $('.fancybox').parents('.product-gallery__main').data('media-count') > 1 ? true : false,
      beforeShow: function() {
        // Add alt to fancybox image
        var imageAlt = $(this.element).data('alt');
        $('.fancybox-image').attr('alt', imageAlt);
      }
    });
  },
  launchVideoPlayer: function(Plyr, galleryObject, videos, showSecondaryMedia) {
    if (galleryObject != null) {
      galleryObject.videoPlayers = Plyr.setup(videos, {
        controls: controls,
        fullscreen: {
          enabled: true,
          fallback: true,
          iosNative: true
        },
        storage: {
          enabled: false
        }
      });
      // Going through galleries array and pushing players into master array
      $.each(galleryObject.videoPlayers, function(index, player) {
        globalPlayersArray.push(player);
      });
    } else if (showSecondaryMedia == true) {
      // Collection page/Recommended Products secondary media
      secondaryMediaPlayers = Plyr.setup(videos, {
        controls: controls,
        fullscreen: {
          enabled: true,
          fallback: true,
          iosNative: true
        },
        storage: {
          enabled: false
        }
      })

      // Add data-attribute 'plyr-loaded="true"' to videos container
      if ($('.recommended-products-section').length > 0) {
        $('.recommended-products-section').find('.products').attr('data-plyr-loaded', true);
      }

      if ($('.featured-collection-section').length > 0) {
        $('.featured-collection-section').find('.products').attr('data-plyr-loaded', true);
      }

      $.each(secondaryMediaPlayers, function(index, player) {
        globalPlayersArray.push(player);
      })
      // Adds plyr video id to video wrapper
      $.each(globalPlayersArray, function(index, player) {
        var source = player.provider;
        var id = player.id;
        var $video;
        if (source == 'html5') {
          $video = $(player.elements.wrapper).find('video');
          $video.attr('data-plyr-video-id', id);
        }
      })
      return secondaryMediaPlayers;
    }
  },
  enableDisclosure: function() {
    var $disclosure = $('[data-disclosure]');
    var $toggle = $('[data-disclosure-toggle]');
    var $disclosureWrap = $('.disclosure__list-wrap');

    //Check if current opened menu is offscreen
    function checkOffScreen($openedToggle) {
      if($openedToggle.siblings('.disclosure__list-wrap').is(':off-right')) {
        $openedToggle.siblings('.disclosure__list-wrap').addClass('disclosure--left');
      }
    }

    function closeDisclosures(ignoreTarget, currentTarget) {
      if(ignoreTarget === true) {
        $toggle.not(currentTarget).removeClass('is-clicked');
        $toggle.not(currentTarget).attr('aria-expanded', 'false');
      } else {
        $toggle.removeClass('is-clicked');
        $toggle.attr('aria-expanded', 'false');
      }

      $disclosureWrap.removeClass('disclosure--left');
    }

    //Close menus on ESC
    $('body').on('keyup', function(e) {
      if(e.which == '27') {
        closeDisclosures();
      }
    });

    //Close menus on hoverout
    $disclosure.on('mouseleave', function(e) {
      $('.header').css('height', 'initial');
      closeDisclosures();
    });

    //On click event for toggling options
    $toggle.on('mouseenter focus', function(e) {
      //Close all other menus
      closeDisclosures(true, this)

      var $target = $(e.currentTarget);
      $($target).attr('aria-expanded', 'true').addClass('is-clicked');
      checkOffScreen($target);
    });

    //when tabbing through, close dropdown when tabbing out of dropdown
    $disclosureWrap.find('.disclosure__button').on('focusout', function(e) {
      //Close all other menus
      if(!$(e.relatedTarget).hasClass('disclosure__button') || $(e.relatedTarget).hasClass('disclosure__toggle')) {
        closeDisclosures();
      }
    });

    //Mobile toggle logic
    $toggle.on('touchstart', function(e) {
      if ($(window).width() < 798 || !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        var $target = $(e.currentTarget);
        closeDisclosures(true, this);

        if(!$target.hasClass('is-clicked')) {
          $target.attr('aria-expanded', 'true').addClass('is-clicked');
        } else {
          $target.attr('aria-expanded', 'false').removeClass('is-clicked');
        }
      }
    })
  },
  enableZoom: function(){
    var $image = $(event.target);
    var zoomSrc = $image.data('zoom-src');
    if (zoomSrc) {
      $image.wrap('<span class="zoom-container"></span>')
      .css('display', 'block')
      .parent()
      .zoom({
        url: zoomSrc,
        touch: false,
        magnify: 1 
      });
    }
  },
  unload: function($target){
    $('ul.tabs > li > a').off('click');
    $('.accordion > dt > a').off('click');
    $('[data-disclosure]').off();
    $('[data-disclosure-toggle]').off();
    $('.disclosure__list-wrap').off();
  }
}

var toggleSidebarBlocks = function($toggle){
  if($toggle.next('ul').is(':visible')) {
    $toggle.next('ul').slideUp();
    $toggle.children('span').html('+');
    $toggle.attr('aria-expanded', false);
  } else {
    $toggle.next('ul').slideDown();
    $toggle.children('span').html('-');
    $toggle.attr('aria-expanded', true);
  }
}

var toggleSidebarMenus = function($toggle){
  var $menu = $toggle.parent('li');
  var $toggleIcon = $menu.children('.menu-toggle');

  $menu.toggleClass('submenu--active');

  var iconType = $menu.hasClass('submenu--active') ? '-' : '+';
  $toggleIcon.html(iconType);

  $menu.children('ul').slideToggle();
  $toggleIcon.attr('aria-expanded', $toggleIcon.attr('aria-expanded') == 'true' ? 'false' : 'true');

}

var sliderBlock = {
  select: function(blockId, $parentSection){
    var $blocks = $parentSection.find('.slideshow__gallery-cell');
    var blockIdsArray = $blocks.map(function() {
      return String($(this).data('block-id'));
    });

    var $slider = $parentSection.find('[data-slider-id]');
    var flkty = $slider.data('flickity');

    $slider.flickity('pausePlayer');

    for(var i = 0; i < blockIdsArray.length; i++){
      if(blockIdsArray[i] === blockId){
        var currentSlide = i;
        if (currentSlide !== flkty.selectedIndex){
          $slider.flickity( 'select', parseInt(currentSlide), false, true);
        }
      }
    }
  },
  deselect: function($parentSection){
    var $slider = $parentSection.find('[data-slider-id]');
    if($slider) {
      $slider.flickity('unpausePlayer');
    }
  }
}

//Document ready
$(function() {
  utils.enableDisclosure();

  window.lazySizesConfig = window.lazySizesConfig || {};

  lazySizesConfig.expand = 300;
  lazySizesConfig.loadHidden = false;

  //Load sections
  slideshow.init();
  header.init();
  map.init();
  product.init();
  product.updateWidthBasedOnSidebar();
  faqAccordion.init();
  collection.init();
  productFormListeners.init();
  video.init();
  banner.init();

  if (Currency.native_multi_currency && Currency.shipping_calculator) {
    currencyConverter.init();
  }

  // Initialize Responsive Videos
  enableResponsiveVideoWrapper();

  //Sidebar toggle
  $(document).on('click', '.menu-toggle, .parent-link--false', function(e) {
    toggleSidebarMenus($(this));
  });

  var sidebarTouched = false;
  $(document).on('touchstart', '.toggle', function(e) {
    if ($(window).width() <= 798 || $(this).parents('.sidebar').hasClass('toggle-all--true')) {
      var $toggle = $(this);
      toggleSidebarBlocks($toggle);
      sidebarTouched = true;
      e.preventDefault();
      return false;
    }
  });
  $(document).on('click', '.toggle', function(e) {
    if ($(window).width() <= 798 || $(this).parents('.sidebar').hasClass('toggle-all--true')) {
      var $toggle = $(this);
      if (!sidebarTouched) {
        toggleSidebarBlocks($toggle);
        e.preventDefault();
        return false;
      }
    }
  });

  if($('.header-section .logo-below').length > 0) {
    $('#content .index-sections').removeClass('adjust-header');
  } else {
    $('#content .index-sections').addClass('adjust-header');
  }

  // Load accordions
  utils.initializeAccordions();

  // Load tabs
  utils.initializeTabs();

  // Load product lightbox
  utils.initializeProductLightbox();

  $("body").on("click", '.continue', function() {

    var cart = $("#cart").data( "mmenu" );
    cart.close();

    var nav = $("#nav").data( "mmenu" );
    nav.close();

  });

  $("body").on("click", '#search-toggle, .search-close', function(e) {
    $('.search-close').css('padding-top', $('.header').height() + 100 + 'px')
    if($('#search').is(":visible") && $(window).scrollTop() == 0) {
      $(".index .header").removeClass('header_bar');
      $('.index .header .logo img').attr('src', $('.logo img').data('src-home'));
    } else {
      $(".index .header").addClass('header_bar');
      $('.index .header .logo img').attr('src', $('.logo img').data('src'));
    }

    $('#search').fadeToggle('fast').find('input').focus();
    e.stopPropagation();
    e.preventDefault();
  });

  $(".search-submit").on('click', function(e) { $(this).parent('form').submit(); });
  $('.lightbox').fancybox();

  if ($(window).width() >= 959) {
    var modal_width = '860px';

    if($(window).width() >= 1200 || $('html').hasClass('ie')) {
      modal_width = '1100px'
    }
  }

  

  $('#tag_filter').change(function() { window.location = $('#tag_filter option:selected').val(); });

  Shopify.queryParams = {};
  if (location.search.length) {
    for (var aKeyValue, i = 0, aCouples = location.search.substr(1).split('&'); i < aCouples.length; i++) {
      aKeyValue = aCouples[i].split('=');
      if (aKeyValue.length > 1) {
        Shopify.queryParams[decodeURIComponent(aKeyValue[0])] = decodeURIComponent(aKeyValue[1]);
      }
    }
  }

  // Backwards compatibility with flexslider
  $('.cc-slideshow, .flexslider').find('li').unwrap();
  $('.cc-slideshow, .flexslider').flickity({
    pageDots: false,
    autoPlay: 6000,
    imagesLoaded: true,
    wrapAround: true,
    lazyLoad: 2,
    adaptiveHeight: true
  });

  var arrowShape = '<svg class="flickity-button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.46 24.09"><title>flickity-arrow</title><polygon points="1.41 24.09 0 22.68 10.63 12.05 0 1.41 1.41 0 13.46 12.05 1.41 24.09"/></svg>'

  $('.flexslider').find('.flickity-prev-next-button.next .flickity-button-icon').replaceWith(arrowShape);
  $('.flexslider').find('.flickity-prev-next-button.previous').addClass('arrow-is-inverse').find('.flickity-button-icon').replaceWith(arrowShape);

  

  //Swatches linked with selected options
  if ($('.js-product_section').length){
    var $productForms = $('.js-product_section').find('.product_form');

    //Loop through each product and set the initial option value state
    $productForms.each(function(){
      var JSONData = $(this).data('product');
      var productID = $(this).data('product-id');
      var productSection = '.product-' + productID + ' .js-product_section';
      var swatchOptions = $(this).find('.swatch_options .swatch');
      if (swatchOptions.length > 1){
        Shopify.linkOptionSelectors(JSONData, productSection);
      }
    });
  }

  //Add click event when there is more than one product on the page (eg. Collection in Detail)
  if ($('.js-product_section').length > 1){
    $('body').on('click', '.swatch-element', function(){
      var swatchValue = $(this).data('value').toString();

      $(this)
        .siblings('input[value="'+ swatchValue.replace(/\"/g,'\\"') +'"]')
        .prop("checked", true)
        .trigger("change");

      var JSONData = $(this).parents('.product_form').data('product');
      var productID = $(this).parents('.product_form').data('product-id');
      var productSection = '.product-' + productID + ' .js-product_section';
      var swatchOptions = $(this).parents('.product_form').find('.swatch_options .swatch');
      if (swatchOptions.length > 1){
        Shopify.linkOptionSelectors(JSONData, productSection);
      }
    })
  }

  $('.maps').on('click', function () {
    $('.maps iframe').css("pointer-events", "auto");
  });

  $('body').on("change", "#cart input.quantity", function() {
    ajaxUpdateCart($(this).data('line-id'), $(this).val(), $(this).parents('#cart'));
  });

  $('body').on("change", "#cart #cart-note", function() {
    ajaxSubmitCart();
  });

  
    ajaxCart.init();
  

});

/*============================================================================
  Responsive media
==============================================================================*/

function enableResponsiveVideoWrapper() {
  // Wraps YouTube and Vimeo iframes in Plyr wrapper
  // Does not target iframes already embedded in Plyr wrapper (video sections and product galleries)
  $('iframe[src*="youtube.com"]:not(.plyr__video-wrapper iframe[src*="youtube.com"])').wrap('<div class="plyr__video-embed"></div>');
  $('iframe[src*="vimeo.com"]:not(.plyr__video-wrapper iframe[src*="vimeo.com"])').wrap('<div class="plyr__video-embed"></div>');
}

/*============================================================================
  Start of cart-related functionality
==============================================================================*/
function ajaxSubmitCart() {
  $cart = $("#cart");
  $.ajax({
    url: '/cart/update.js',
    dataType: 'json',
    cache: false,
    type: 'post',
    data: $cart.serialize(),
    success: function (data) {
      refreshCart(data);
    }
  });
}

function ajaxUpdateCart(lineID, quantity, parent) {
  $.ajax({
    url: '/cart/change.js',
    dataType: 'json',
    cache: false,
    type: 'post',
    data: { quantity: quantity, line: lineID },
    success: function (data) {
      refreshCart(data);

      var lineIDIndex = lineID - 1;
      var $input = parent.find("input[data-line-id='" + lineID + "']");

      //check to see if there are correct amount of products in array
      if (typeof data.items[lineIDIndex] === "undefined"){
        var updated_quantity = 0;
      } else {
        var updated_quantity = data.items[lineIDIndex].quantity;
      }

      if(quantity > 0 && quantity != updated_quantity) {
        if (updated_quantity == 1) {
          items_left_text = Shopify.translation.items_left_count_one;
        } else {
          items_left_text = Shopify.translation.items_left_count_other;
        }

        $('.cart__warning').remove();

        var warning = '<div class="cart__warning animated bounceIn">' + updated_quantity + ' ' + items_left_text + '</div>';

        $input.parents('.cart__item').find(".cart__info").append(warning);

        $input.val(updated_quantity);
      }
    }
  });
}

function refreshCart(cart) {
  $cartBtn = $(".icon-cart");
  if ($cartBtn) {
    var $cartCount = $cartBtn.find('.cart_count');
    var $mobileCartCount = $('.mobile-header .icon-cart span');
    var value = $cartCount.text() || '0';
    var cart_items_html = "";
    var $cart = $("#cart ul");

    if($cartCount && $cartCount.length && $($mobileCartCount).is(":hidden")) {
      $cartCount.text(value.replace(/[0-9]+/,cart.item_count));
    } else if($($mobileCartCount).is(":visible")) {
      $mobileCartCount.text(value.replace(/[0-9]+/,cart.item_count));
    } else {
      $cartBtn.prepend('<div class="cart_count">' + cart.item_count + '</div>');
    }

    $cart.find('li:not(:first)').remove();

    if (cart.item_count == 0) {
      $cart.append('<li class="mm-label empty_cart"><a href="' + Shopify.routes.cart_url + '">' + Shopify.translation.empty_cart + '</a></li>');
      $cartCount.remove();
    } else {
      $.each(cart.items, function(index, item) {

        var itemDiscounts = item.discounts;
        var discountMessage = "";

        for (i=0; i < itemDiscounts.length; i++) {
          var amount = Shopify.formatMoney(itemDiscounts[i].amount, $('body').data('money-format'));
          var title = itemDiscounts[i].title;
          discountMessage = '<span class="notification-discount"><strong>' + Shopify.translation.cart_discount + ':</strong> ' + title + ' (-<span class="money">' + amount + '</span>)</span>';
        }

        if(item.price > item.final_price) {
          var itemPrice = '<span class="money">' + Shopify.formatMoney(item.final_price, $('body').data('money-format')) + '</span>' + ' <span class="money was-price">' + Shopify.formatMoney(item.price, $('body').data('money-format')) + '</span>';
          var linePrice = '<span class="money">' + Shopify.formatMoney(item.final_line_price, $('body').data('money-format')) + '</span>' + ' <span class="money was-price">' + Shopify.formatMoney(item.original_line_price, $('body').data('money-format')) + '</span>';
        } else {
          var itemPrice = '<span class="money">' + Shopify.formatMoney(item.final_price, $('body').data('money-format')) + '</span>';
          var linePrice = '<span class="money">' + Shopify.formatMoney(item.final_line_price, $('body').data('money-format')) + '</span>';
        }

        var line_id = index + 1;

        cart_items_html += '<li>' + '<a class="cart__item" href="'+ Shopify.routes.cart_url +'">' ;

        if (item.image) {
          cart_items_html += '<div class="cart__image">' + '<img src="' + item.image.replace(/(\.[^.]*)$/, "_medium$1").replace('http:', '') + '" alt="' + htmlEncode(item.title) + '" />' + '</div>';
        }

        cart_items_html += '<div class="cart__info">' + '<div class="cart__description">' + '<div class="cart__text">' + item.title;

        if(item.properties) {
          $.each(item.properties, function(title, value) {
            if (value) {
              cart_items_html += '<div class="line-item">' + title +': ' + value + '</div>';
            }
          });
        }

        if (item.price > item.final_price) {
          cart_items_html += '<div class="price">' + itemPrice + discountMessage + '</div>';
        } else {
          cart_items_html += '<div class="price">' + itemPrice + '</div>';
        }

        cart_items_html += '<div class="price"><strong>' + Shopify.translation.cart_total + ': </strong>' + linePrice + '</div>' + '</div>' + '</div>' + '<div class="cart__quantity">' + '<p class="mm-counter quantity_selector">' + '<span class="minus">-</span>' + '<input type="number" min="0" class="updates quantity" name="updates[]" id="updates_' + item.id + '" data-id="' + item.id + '" value="' + item.quantity + '"  data-line-id="' + line_id +'" readonly />' + '<span class="plus">+</span>' + '</p>' + '</div>' + '</div>' + '</a>' + '</li>';
      });

      var cartDiscounts = cart.cart_level_discount_applications;
      var cartDiscountMessage = "";

      for (i=0; i < cartDiscounts.length; i++) {
        var amount = Shopify.formatMoney(cartDiscounts[i].total_allocated_amount, $('body').data('money-format'));
        var title = cartDiscounts[i].title;
        cartDiscountMessage = '<p class="mm-counter price">' + title + ' (-<span class="money">' + amount + '</span>)</p>';
      }

      if (cart.cart_level_discount_applications.length > 0) {
        cart_items_html += '<li class="mm-label">' + '<a href="' + Shopify.routes.cart_url + '">' + '<strong>' + Shopify.translation.cart_discount + '</strong>' + '</a>' + cartDiscountMessage + '</li>'
      }

      cart_items_html += '<li class="cart__subtotal">' + '<a href="' + Shopify.routes.cart_url + '" class="cart__subtotal-text">' + Shopify.translation.subtotal + '</a>' + '<span class="money cart__subtotal-price">' + Shopify.formatMoney(cart.total_price, $('body').data('money-format')) + '</span>' + '</li>' + '<li class="cart__note">';

      $('#cart_form .subtotal_amount .money').empty().append(Shopify.formatMoney(cart.total_price, $cart.data('money-format')));

      
        var cart_note = cart.note ? cart.note : '';
        cart_items_html += '<textarea id="cart-note" name="note" rows="3" placeholder=' + Shopify.translation.cart_notes + '>' + cart_note + '</textarea>';
      

      

      cart_items_html += '<li class="cart__actions mm-subtitle--actions">' + '<input type="submit" class="action_button" value=' + Shopify.translation.checkout + ' />' + '<a href="' + Shopify.routes.cart_url + '" class="action_button action_button--edit">' + Shopify.translation.edit_cart + '</a>' + '</li>';

      $cart.append(cart_items_html);

    // update on cart page
    $("#cart_form .quantity").each(function() {
      $(this).change(function () {
        var thisLineID = $(this).data("line-id");
        var lineToMatch = $('#cart .cart__item .quantity[data-line-id="' + thisLineID + '"]').val();
        $(this).val(lineToMatch);
      }).change();
    });

    }
  }
}

/*============================================================================
  Product variants and inventory logic
==============================================================================*/
selectCallback = function(variant, selector) {
  var $product = $('.product-' + selector.product.id);
  var $notify_form = $('.notify-form-' + selector.product.id);
  var $productForm = $('.product_form', $product);
  var variantInventory = $productForm.data('variant-inventory');

  var $notifyFormInputs = $('.notify_form__inputs', $product);

  var notifyEmail = Shopify.translation.product_notify_form_email;
  var notifyEmailValue = Shopify.translation.contact_field_email;
  var notifySend = Shopify.translation.product_notify_form_send;
  var notifyMessage = $notifyFormInputs.data('notify-message');

  if (variant && variant.title ) {
    notifyMessage = notifyMessage + ' - ' + variant.title.replace(/"/g,'\&quot;');
  }

  if ($notifyFormInputs.hasClass('customer--true')) {
    var notifyCustomerEmail = "";
    var notifyEmailInput = '<input type="hidden" class="notify_email" name="contact[email]" id="contact[email]" value="' + notifyCustomerEmail + '" />'
  } else {
    var notifyEmailInput = '<input required type="email" class="notify_email" name="contact[email]" id="contact[email]" placeholder="' + notifyEmail + '" value="' + notifyEmailValue + '" />';
  }
  var notifyFormHTML = notifyEmailInput + '<input type="hidden" name="challenge" value="false" /><input type="hidden" name="contact[body]" class="notify_form_message" value="' +  notifyMessage + '" /><input class="action_button" type="submit" value="' + notifySend + '" style="margin-bottom:0px" />';

  if (variant && variant.featured_image && $product.is(":visible")) {
    var $sliders = $('.product-gallery__main', $product);
    $sliders.each(function() {
      var $slider = $(this);
      var $sliderInstance = Flickity.data(this);
      if ($slider.is(":visible") && $sliderInstance != undefined ) {
        var index = $('[data-image-id="' + variant.featured_image.id + '"]').data('index');
        $sliderInstance.select( index, false, true );
      }
    });
  }

  if (variant) {
    if (variantInventory) {
      variantInventory.forEach(function(v){
        if (v.id === variant.id) {
          variant.inventory_quantity = v.inventory_quantity;
          variant.inventory_management = v.inventory_management;
          variant.inventory_policy = v.inventory_policy;
        }
      });
    }

    $('.sku', $product).text(variant.sku);

    
  }

  if (variant && variant.available == true) {

    if(variant.price < variant.compare_at_price){
      var dataCurrency = $('body').data('active-currency');
      $('.was-price', $product).html('<span class="money" data-currency-'+ dataCurrency +'="' + Shopify.formatMoney(variant.compare_at_price, $('body').data('money-format')) + '">' + Shopify.formatMoney(variant.compare_at_price, $('body').data('money-format')) + '</span>');
      $('.current-price', $product).parent().addClass('sale');
    } else {
      $('.was-price', $product).html('')
      $('.current-price', $product).parent().removeClass('sale');
    }

    if (variant.inventory_management && variant.inventory_quantity > 0) {
      
      
        if(variant.inventory_policy == "deny") {
          $('.quantity', $product).attr('max', variant.inventory_quantity);
        }
      
    } else {
      $('.items_left', $product).text('');
      $('.quantity', $product).removeAttr('max');
    }

    // Empty sold out text
    $('.sold-out-text', $product).text('');

    // Show price, otherwise, show free price text
    if (variant.price > 0) {
      var dataCurrency = $('body').data('active-currency');
      $('.current-price', $product).html('<span class="money" data-currency-'+ dataCurrency +'="' + Shopify.formatMoney(variant.price, $('body').data('money-format')) + '">' + Shopify.formatMoney(variant.price, $('body').data('money-format')) + '</span>');
    } else {
      $('.current-price', $product).html("0");
    }

    // Remove the "product__price-container--sold-out" class and updated the add to cart text
    $('.product__price').show();
    $('.product__price-container', $product).removeClass('product__price-container--sold-out').show();
    $('.add_to_cart', $product).removeClass('disabled').removeAttr('disabled').find('span').text($('.add_to_cart', $product).data('label'));

    // Hide the back in stock notification form
    $notify_form.hide();

    // Show the quantity field
  	$('.purchase-details__quantity', $product).show();

    // Remove disable from action buttons
    $('.atc-btn-container', $product).removeClass('disabled');

  } else {
    var message = variant ? Shopify.translation.product_sold_out : Shopify.translation.product_unavailable;

    // Hide the quantity field
  	$('.purchase-details__quantity', $product).hide();

    // Show the price and change the add to cart and sold out text
    $('.product__price-container', $product).addClass('product__price-container--sold-out').show();
    $('.add_to_cart', $product).find('span').text(message);
    $('.items_left', $product).text('');
    $('.quantity', $product).removeAttr('max');
    $('.sold-out-text', $product).text(' - ' + message);

    // Disable the add to cart button and Shopify payment button when a variant is sold out
    $('.atc-btn-container', $product).addClass('disabled');

    //Hide the back in stock notification form
    $notify_form.hide();
    $notifyFormInputs.empty();

    if (variant && !variant.available) {
      var message = variant ? Shopify.translation.product_sold_out : Shopify.translation.product_unavailable;

      // Show the variant price, otherwise, show the free price text
      if (variant.price > 0) {
        var dataCurrency = $('body').data('active-currency');
        $('.current-price', $product).html('<span class="money" data-currency-'+ dataCurrency +'="' + Shopify.formatMoney(variant.price, $('body').data('money-format')) + '">' + Shopify.formatMoney(variant.price, $('body').data('money-format')) + '</span>');
      } else {
        $('.current-price', $product).html("0");
      }

      // When a variant is sold out but on sale
      if(variant.price < variant.compare_at_price) {
        var dataCurrency = $('body').data('active-currency');
        $('.was-price', $product).html('<span class="money" data-currency-'+ dataCurrency +'="' + Shopify.formatMoney(variant.compare_at_price, $('body').data('money-format')) + '">' + Shopify.formatMoney(variant.compare_at_price, $('body').data('money-format')) + '</span>');
      } else {
        $('.was-price', $product).html('');
      }

      // Show the back in stock notification form
      $notify_form.fadeIn();
      $notifyFormInputs.empty();
      $notifyFormInputs.append(notifyFormHTML);

      // Show the price and change the add to cart and sold out text
      $('.product__price').show();
      $('.product__price-container--sold-out').show();
      $('.sold-out-text', $product).text( ' - ' + message);
      $('.add_to_cart', $product).find('span').text(message);
    } else {
      // When a variant is specifically unavailable

      // Change the add to cart and sold out text to "Unavailable"
      $('.add_to_cart', $product).find('span').text(Shopify.translation.product_unavailable);
      $('.sold-out-text', $product).text(Shopify.translation.product_unavailable);

      // Hide the product price
      $('.product__price').hide();

      // Hide the price and back in stock notification form
      $notify_form.hide();
    }
  }

  $productForm.removeClass("init");
};

function htmlEncode(value){
  if (value) {
    return $('<div/>').text(value).html();
  } else {
    return '';
  }
}

/* Vendors */

/*!
 * Flickity PACKAGED v2.2.1
 * Touch, responsive, flickable carousels
 *
 * Licensed GPLv3 for open source use
 * or Flickity Commercial License for commercial use
 *
 * https://flickity.metafizzy.co
 * Copyright 2015-2019 Metafizzy
 */

 !function(e,i){"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("jquery")):e.jQueryBridget=i(e,e.jQuery)}(window,function(t,e){"use strict";var i=Array.prototype.slice,n=t.console,d=void 0===n?function(){}:function(t){n.error(t)};function s(h,s,c){(c=c||e||t.jQuery)&&(s.prototype.option||(s.prototype.option=function(t){c.isPlainObject(t)&&(this.options=c.extend(!0,this.options,t))}),c.fn[h]=function(t){return"string"==typeof t?function(t,o,r){var a,l="$()."+h+'("'+o+'")';return t.each(function(t,e){var i=c.data(e,h);if(i){var n=i[o];if(n&&"_"!=o.charAt(0)){var s=n.apply(i,r);a=void 0===a?s:a}else d(l+" is not a valid method")}else d(h+" not initialized. Cannot call methods, i.e. "+l)}),void 0!==a?a:t}(this,t,i.call(arguments,1)):(function(t,n){t.each(function(t,e){var i=c.data(e,h);i?(i.option(n),i._init()):(i=new s(e,n),c.data(e,h,i))})}(this,t),this)},o(c))}function o(t){!t||t&&t.bridget||(t.bridget=s)}return o(e||t.jQuery),s}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}("undefined"!=typeof window?window:this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{};return(i[t]=i[t]||{})[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){i=i.slice(0),e=e||[];for(var n=this._onceEvents&&this._onceEvents[t],s=0;s<i.length;s++){var o=i[s];n&&n[o]&&(this.off(t,o),delete n[o]),o.apply(this,e)}return this}},e.allOff=function(){delete this._events,delete this._onceEvents},t}),function(t,e){"function"==typeof define&&define.amd?define("get-size/get-size",e):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function m(t){var e=parseFloat(t);return-1==t.indexOf("%")&&!isNaN(e)&&e}var i="undefined"==typeof console?function(){}:function(t){console.error(t)},y=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],b=y.length;function E(t){var e=getComputedStyle(t);return e||i("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"),e}var S,C=!1;function x(t){if(function(){if(!C){C=!0;var t=document.createElement("div");t.style.width="200px",t.style.padding="1px 2px 3px 4px",t.style.borderStyle="solid",t.style.borderWidth="1px 2px 3px 4px",t.style.boxSizing="border-box";var e=document.body||document.documentElement;e.appendChild(t);var i=E(t);S=200==Math.round(m(i.width)),x.isBoxSizeOuter=S,e.removeChild(t)}}(),"string"==typeof t&&(t=document.querySelector(t)),t&&"object"==typeof t&&t.nodeType){var e=E(t);if("none"==e.display)return function(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;e<b;e++){t[y[e]]=0}return t}();var i={};i.width=t.offsetWidth,i.height=t.offsetHeight;for(var n=i.isBorderBox="border-box"==e.boxSizing,s=0;s<b;s++){var o=y[s],r=e[o],a=parseFloat(r);i[o]=isNaN(a)?0:a}var l=i.paddingLeft+i.paddingRight,h=i.paddingTop+i.paddingBottom,c=i.marginLeft+i.marginRight,d=i.marginTop+i.marginBottom,u=i.borderLeftWidth+i.borderRightWidth,f=i.borderTopWidth+i.borderBottomWidth,p=n&&S,g=m(e.width);!1!==g&&(i.width=g+(p?0:l+u));var v=m(e.height);return!1!==v&&(i.height=v+(p?0:h+f)),i.innerWidth=i.width-(l+u),i.innerHeight=i.height-(h+f),i.outerWidth=i.width+c,i.outerHeight=i.height+d,i}}return x}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var i=function(){var t=window.Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i]+"MatchesSelector";if(t[n])return n}}();return function(t,e){return t[i](e)}}),function(e,i){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("desandro-matches-selector")):e.fizzyUIUtils=i(e,e.matchesSelector)}(window,function(h,o){var c={extend:function(t,e){for(var i in e)t[i]=e[i];return t},modulo:function(t,e){return(t%e+e)%e}},e=Array.prototype.slice;c.makeArray=function(t){return Array.isArray(t)?t:null==t?[]:"object"==typeof t&&"number"==typeof t.length?e.call(t):[t]},c.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},c.getParent=function(t,e){for(;t.parentNode&&t!=document.body;)if(t=t.parentNode,o(t,e))return t},c.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},c.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},c.filterFindElements=function(t,n){t=c.makeArray(t);var s=[];return t.forEach(function(t){if(t instanceof HTMLElement)if(n){o(t,n)&&s.push(t);for(var e=t.querySelectorAll(n),i=0;i<e.length;i++)s.push(e[i])}else s.push(t)}),s},c.debounceMethod=function(t,e,n){n=n||100;var s=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];clearTimeout(t);var e=arguments,i=this;this[o]=setTimeout(function(){s.apply(i,e),delete i[o]},n)}},c.docReady=function(t){var e=document.readyState;"complete"==e||"interactive"==e?setTimeout(t):document.addEventListener("DOMContentLoaded",t)},c.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var d=h.console;return c.htmlInit=function(a,l){c.docReady(function(){var t=c.toDashed(l),s="data-"+t,e=document.querySelectorAll("["+s+"]"),i=document.querySelectorAll(".js-"+t),n=c.makeArray(e).concat(c.makeArray(i)),o=s+"-options",r=h.jQuery;n.forEach(function(e){var t,i=e.getAttribute(s)||e.getAttribute(o);try{t=i&&JSON.parse(i)}catch(t){return void(d&&d.error("Error parsing "+s+" on "+e.className+": "+t))}var n=new a(e,t);r&&r.data(e,l,n)})})},c}),function(e,i){"function"==typeof define&&define.amd?define("flickity/js/cell",["get-size/get-size"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("get-size")):(e.Flickity=e.Flickity||{},e.Flickity.Cell=i(e,e.getSize))}(window,function(t,e){function i(t,e){this.element=t,this.parent=e,this.create()}var n=i.prototype;return n.create=function(){this.element.style.position="absolute",this.element.setAttribute("aria-hidden","true"),this.x=0,this.shift=0},n.destroy=function(){this.unselect(),this.element.style.position="";var t=this.parent.originSide;this.element.style[t]=""},n.getSize=function(){this.size=e(this.element)},n.setPosition=function(t){this.x=t,this.updateTarget(),this.renderPosition(t)},n.updateTarget=n.setDefaultTarget=function(){var t="left"==this.parent.originSide?"marginLeft":"marginRight";this.target=this.x+this.size[t]+this.size.width*this.parent.cellAlign},n.renderPosition=function(t){var e=this.parent.originSide;this.element.style[e]=this.parent.getPositionValue(t)},n.select=function(){this.element.classList.add("is-selected"),this.element.removeAttribute("aria-hidden")},n.unselect=function(){this.element.classList.remove("is-selected"),this.element.setAttribute("aria-hidden","true")},n.wrapShift=function(t){this.shift=t,this.renderPosition(this.x+this.parent.slideableWidth*t)},n.remove=function(){this.element.parentNode.removeChild(this.element)},i}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/slide",e):"object"==typeof module&&module.exports?module.exports=e():(t.Flickity=t.Flickity||{},t.Flickity.Slide=e())}(window,function(){"use strict";function t(t){this.parent=t,this.isOriginLeft="left"==t.originSide,this.cells=[],this.outerWidth=0,this.height=0}var e=t.prototype;return e.addCell=function(t){if(this.cells.push(t),this.outerWidth+=t.size.outerWidth,this.height=Math.max(t.size.outerHeight,this.height),1==this.cells.length){this.x=t.x;var e=this.isOriginLeft?"marginLeft":"marginRight";this.firstMargin=t.size[e]}},e.updateTarget=function(){var t=this.isOriginLeft?"marginRight":"marginLeft",e=this.getLastCell(),i=e?e.size[t]:0,n=this.outerWidth-(this.firstMargin+i);this.target=this.x+this.firstMargin+n*this.parent.cellAlign},e.getLastCell=function(){return this.cells[this.cells.length-1]},e.select=function(){this.cells.forEach(function(t){t.select()})},e.unselect=function(){this.cells.forEach(function(t){t.unselect()})},e.getCellElements=function(){return this.cells.map(function(t){return t.element})},t}),function(e,i){"function"==typeof define&&define.amd?define("flickity/js/animate",["fizzy-ui-utils/utils"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("fizzy-ui-utils")):(e.Flickity=e.Flickity||{},e.Flickity.animatePrototype=i(e,e.fizzyUIUtils))}(window,function(t,e){var i={startAnimation:function(){this.isAnimating||(this.isAnimating=!0,this.restingFrames=0,this.animate())},animate:function(){this.applyDragForce(),this.applySelectedAttraction();var t=this.x;if(this.integratePhysics(),this.positionSlider(),this.settle(t),this.isAnimating){var e=this;requestAnimationFrame(function(){e.animate()})}},positionSlider:function(){var t=this.x;this.options.wrapAround&&1<this.cells.length&&(t=e.modulo(t,this.slideableWidth),t-=this.slideableWidth,this.shiftWrapCells(t)),this.setTranslateX(t,this.isAnimating),this.dispatchScrollEvent()},setTranslateX:function(t,e){t+=this.cursorPosition,t=this.options.rightToLeft?-t:t;var i=this.getPositionValue(t);this.slider.style.transform=e?"translate3d("+i+",0,0)":"translateX("+i+")"},dispatchScrollEvent:function(){var t=this.slides[0];if(t){var e=-this.x-t.target,i=e/this.slidesWidth;this.dispatchEvent("scroll",null,[i,e])}},positionSliderAtSelected:function(){this.cells.length&&(this.x=-this.selectedSlide.target,this.velocity=0,this.positionSlider())},getPositionValue:function(t){return this.options.percentPosition?.01*Math.round(t/this.size.innerWidth*1e4)+"%":Math.round(t)+"px"},settle:function(t){this.isPointerDown||Math.round(100*this.x)!=Math.round(100*t)||this.restingFrames++,2<this.restingFrames&&(this.isAnimating=!1,delete this.isFreeScrolling,this.positionSlider(),this.dispatchEvent("settle",null,[this.selectedIndex]))},shiftWrapCells:function(t){var e=this.cursorPosition+t;this._shiftCells(this.beforeShiftCells,e,-1);var i=this.size.innerWidth-(t+this.slideableWidth+this.cursorPosition);this._shiftCells(this.afterShiftCells,i,1)},_shiftCells:function(t,e,i){for(var n=0;n<t.length;n++){var s=t[n],o=0<e?i:0;s.wrapShift(o),e-=s.size.outerWidth}},_unshiftCells:function(t){if(t&&t.length)for(var e=0;e<t.length;e++)t[e].wrapShift(0)},integratePhysics:function(){this.x+=this.velocity,this.velocity*=this.getFrictionFactor()},applyForce:function(t){this.velocity+=t},getFrictionFactor:function(){return 1-this.options[this.isFreeScrolling?"freeScrollFriction":"friction"]},getRestingPosition:function(){return this.x+this.velocity/(1-this.getFrictionFactor())},applyDragForce:function(){if(this.isDraggable&&this.isPointerDown){var t=this.dragX-this.x-this.velocity;this.applyForce(t)}},applySelectedAttraction:function(){if(!(this.isDraggable&&this.isPointerDown)&&!this.isFreeScrolling&&this.slides.length){var t=(-1*this.selectedSlide.target-this.x)*this.options.selectedAttraction;this.applyForce(t)}}};return i}),function(r,a){if("function"==typeof define&&define.amd)define("flickity/js/flickity",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./cell","./slide","./animate"],function(t,e,i,n,s,o){return a(r,t,e,i,n,s,o)});else if("object"==typeof module&&module.exports)module.exports=a(r,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./cell"),require("./slide"),require("./animate"));else{var t=r.Flickity;r.Flickity=a(r,r.EvEmitter,r.getSize,r.fizzyUIUtils,t.Cell,t.Slide,t.animatePrototype)}}(window,function(n,t,e,a,i,r,s){var l=n.jQuery,o=n.getComputedStyle,h=n.console;function c(t,e){for(t=a.makeArray(t);t.length;)e.appendChild(t.shift())}var d=0,u={};function f(t,e){var i=a.getQueryElement(t);if(i){if(this.element=i,this.element.flickityGUID){var n=u[this.element.flickityGUID];return n.option(e),n}l&&(this.$element=l(this.element)),this.options=a.extend({},this.constructor.defaults),this.option(e),this._create()}else h&&h.error("Bad element for Flickity: "+(i||t))}f.defaults={accessibility:!0,cellAlign:"center",freeScrollFriction:.075,friction:.28,namespaceJQueryEvents:!0,percentPosition:!0,resize:!0,selectedAttraction:.025,setGallerySize:!0},f.createMethods=[];var p=f.prototype;a.extend(p,t.prototype),p._create=function(){var t=this.guid=++d;for(var e in this.element.flickityGUID=t,(u[t]=this).selectedIndex=0,this.restingFrames=0,this.x=0,this.velocity=0,this.originSide=this.options.rightToLeft?"right":"left",this.viewport=document.createElement("div"),this.viewport.className="flickity-viewport",this._createSlider(),(this.options.resize||this.options.watchCSS)&&n.addEventListener("resize",this),this.options.on){var i=this.options.on[e];this.on(e,i)}f.createMethods.forEach(function(t){this[t]()},this),this.options.watchCSS?this.watchCSS():this.activate()},p.option=function(t){a.extend(this.options,t)},p.activate=function(){this.isActive||(this.isActive=!0,this.element.classList.add("flickity-enabled"),this.options.rightToLeft&&this.element.classList.add("flickity-rtl"),this.getSize(),c(this._filterFindCellElements(this.element.children),this.slider),this.viewport.appendChild(this.slider),this.element.appendChild(this.viewport),this.reloadCells(),this.options.accessibility&&(this.element.tabIndex=0,this.element.addEventListener("keydown",this)),this.emitEvent("activate"),this.selectInitialIndex(),this.isInitActivated=!0,this.dispatchEvent("ready"))},p._createSlider=function(){var t=document.createElement("div");t.className="flickity-slider",t.style[this.originSide]=0,this.slider=t},p._filterFindCellElements=function(t){return a.filterFindElements(t,this.options.cellSelector)},p.reloadCells=function(){this.cells=this._makeCells(this.slider.children),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize()},p._makeCells=function(t){return this._filterFindCellElements(t).map(function(t){return new i(t,this)},this)},p.getLastCell=function(){return this.cells[this.cells.length-1]},p.getLastSlide=function(){return this.slides[this.slides.length-1]},p.positionCells=function(){this._sizeCells(this.cells),this._positionCells(0)},p._positionCells=function(t){t=t||0,this.maxCellHeight=t&&this.maxCellHeight||0;var e=0;if(0<t){var i=this.cells[t-1];e=i.x+i.size.outerWidth}for(var n=this.cells.length,s=t;s<n;s++){var o=this.cells[s];o.setPosition(e),e+=o.size.outerWidth,this.maxCellHeight=Math.max(o.size.outerHeight,this.maxCellHeight)}this.slideableWidth=e,this.updateSlides(),this._containSlides(),this.slidesWidth=n?this.getLastSlide().target-this.slides[0].target:0},p._sizeCells=function(t){t.forEach(function(t){t.getSize()})},p.updateSlides=function(){if(this.slides=[],this.cells.length){var n=new r(this);this.slides.push(n);var s="left"==this.originSide?"marginRight":"marginLeft",o=this._getCanCellFit();this.cells.forEach(function(t,e){if(n.cells.length){var i=n.outerWidth-n.firstMargin+(t.size.outerWidth-t.size[s]);o.call(this,e,i)||(n.updateTarget(),n=new r(this),this.slides.push(n)),n.addCell(t)}else n.addCell(t)},this),n.updateTarget(),this.updateSelectedSlide()}},p._getCanCellFit=function(){var t=this.options.groupCells;if(!t)return function(){return!1};if("number"==typeof t){var e=parseInt(t,10);return function(t){return t%e!=0}}var i="string"==typeof t&&t.match(/^(\d+)%$/),n=i?parseInt(i[1],10)/100:1;return function(t,e){return e<=(this.size.innerWidth+1)*n}},p._init=p.reposition=function(){this.positionCells(),this.positionSliderAtSelected()},p.getSize=function(){this.size=e(this.element),this.setCellAlign(),this.cursorPosition=this.size.innerWidth*this.cellAlign};var g={center:{left:.5,right:.5},left:{left:0,right:1},right:{right:0,left:1}};return p.setCellAlign=function(){var t=g[this.options.cellAlign];this.cellAlign=t?t[this.originSide]:this.options.cellAlign},p.setGallerySize=function(){if(this.options.setGallerySize){var t=this.options.adaptiveHeight&&this.selectedSlide?this.selectedSlide.height:this.maxCellHeight;this.viewport.style.height=t+"px"}},p._getWrapShiftCells=function(){if(this.options.wrapAround){this._unshiftCells(this.beforeShiftCells),this._unshiftCells(this.afterShiftCells);var t=this.cursorPosition,e=this.cells.length-1;this.beforeShiftCells=this._getGapCells(t,e,-1),t=this.size.innerWidth-this.cursorPosition,this.afterShiftCells=this._getGapCells(t,0,1)}},p._getGapCells=function(t,e,i){for(var n=[];0<t;){var s=this.cells[e];if(!s)break;n.push(s),e+=i,t-=s.size.outerWidth}return n},p._containSlides=function(){if(this.options.contain&&!this.options.wrapAround&&this.cells.length){var t=this.options.rightToLeft,e=t?"marginRight":"marginLeft",i=t?"marginLeft":"marginRight",n=this.slideableWidth-this.getLastCell().size[i],s=n<this.size.innerWidth,o=this.cursorPosition+this.cells[0].size[e],r=n-this.size.innerWidth*(1-this.cellAlign);this.slides.forEach(function(t){s?t.target=n*this.cellAlign:(t.target=Math.max(t.target,o),t.target=Math.min(t.target,r))},this)}},p.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),l&&this.$element){var s=t+=this.options.namespaceJQueryEvents?".flickity":"";if(e){var o=l.Event(e);o.type=t,s=o}this.$element.trigger(s,i)}},p.select=function(t,e,i){if(this.isActive&&(t=parseInt(t,10),this._wrapSelect(t),(this.options.wrapAround||e)&&(t=a.modulo(t,this.slides.length)),this.slides[t])){var n=this.selectedIndex;this.selectedIndex=t,this.updateSelectedSlide(),i?this.positionSliderAtSelected():this.startAnimation(),this.options.adaptiveHeight&&this.setGallerySize(),this.dispatchEvent("select",null,[t]),t!=n&&this.dispatchEvent("change",null,[t]),this.dispatchEvent("cellSelect")}},p._wrapSelect=function(t){var e=this.slides.length;if(!(this.options.wrapAround&&1<e))return t;var i=a.modulo(t,e),n=Math.abs(i-this.selectedIndex),s=Math.abs(i+e-this.selectedIndex),o=Math.abs(i-e-this.selectedIndex);!this.isDragSelect&&s<n?t+=e:!this.isDragSelect&&o<n&&(t-=e),t<0?this.x-=this.slideableWidth:e<=t&&(this.x+=this.slideableWidth)},p.previous=function(t,e){this.select(this.selectedIndex-1,t,e)},p.next=function(t,e){this.select(this.selectedIndex+1,t,e)},p.updateSelectedSlide=function(){var t=this.slides[this.selectedIndex];t&&(this.unselectSelectedSlide(),(this.selectedSlide=t).select(),this.selectedCells=t.cells,this.selectedElements=t.getCellElements(),this.selectedCell=t.cells[0],this.selectedElement=this.selectedElements[0])},p.unselectSelectedSlide=function(){this.selectedSlide&&this.selectedSlide.unselect()},p.selectInitialIndex=function(){var t=this.options.initialIndex;if(this.isInitActivated)this.select(this.selectedIndex,!1,!0);else{if(t&&"string"==typeof t)if(this.queryCell(t))return void this.selectCell(t,!1,!0);var e=0;t&&this.slides[t]&&(e=t),this.select(e,!1,!0)}},p.selectCell=function(t,e,i){var n=this.queryCell(t);if(n){var s=this.getCellSlideIndex(n);this.select(s,e,i)}},p.getCellSlideIndex=function(t){for(var e=0;e<this.slides.length;e++){if(-1!=this.slides[e].cells.indexOf(t))return e}},p.getCell=function(t){for(var e=0;e<this.cells.length;e++){var i=this.cells[e];if(i.element==t)return i}},p.getCells=function(t){t=a.makeArray(t);var i=[];return t.forEach(function(t){var e=this.getCell(t);e&&i.push(e)},this),i},p.getCellElements=function(){return this.cells.map(function(t){return t.element})},p.getParentCell=function(t){var e=this.getCell(t);return e||(t=a.getParent(t,".flickity-slider > *"),this.getCell(t))},p.getAdjacentCellElements=function(t,e){if(!t)return this.selectedSlide.getCellElements();e=void 0===e?this.selectedIndex:e;var i=this.slides.length;if(i<=1+2*t)return this.getCellElements();for(var n=[],s=e-t;s<=e+t;s++){var o=this.options.wrapAround?a.modulo(s,i):s,r=this.slides[o];r&&(n=n.concat(r.getCellElements()))}return n},p.queryCell=function(t){if("number"==typeof t)return this.cells[t];if("string"==typeof t){if(t.match(/^[#\.]?[\d\/]/))return;t=this.element.querySelector(t)}return this.getCell(t)},p.uiChange=function(){this.emitEvent("uiChange")},p.childUIPointerDown=function(t){"touchstart"!=t.type&&t.preventDefault(),this.focus()},p.onresize=function(){this.watchCSS(),this.resize()},a.debounceMethod(f,"onresize",150),p.resize=function(){if(this.isActive){this.getSize(),this.options.wrapAround&&(this.x=a.modulo(this.x,this.slideableWidth)),this.positionCells(),this._getWrapShiftCells(),this.setGallerySize(),this.emitEvent("resize");var t=this.selectedElements&&this.selectedElements[0];this.selectCell(t,!1,!0)}},p.watchCSS=function(){this.options.watchCSS&&(-1!=o(this.element,":after").content.indexOf("flickity")?this.activate():this.deactivate())},p.onkeydown=function(t){var e=document.activeElement&&document.activeElement!=this.element;if(this.options.accessibility&&!e){var i=f.keyboardHandlers[t.keyCode];i&&i.call(this)}},f.keyboardHandlers={37:function(){var t=this.options.rightToLeft?"next":"previous";this.uiChange(),this[t]()},39:function(){var t=this.options.rightToLeft?"previous":"next";this.uiChange(),this[t]()}},p.focus=function(){var t=n.pageYOffset;this.element.focus({preventScroll:!0}),n.pageYOffset!=t&&n.scrollTo(n.pageXOffset,t)},p.deactivate=function(){this.isActive&&(this.element.classList.remove("flickity-enabled"),this.element.classList.remove("flickity-rtl"),this.unselectSelectedSlide(),this.cells.forEach(function(t){t.destroy()}),this.element.removeChild(this.viewport),c(this.slider.children,this.element),this.options.accessibility&&(this.element.removeAttribute("tabIndex"),this.element.removeEventListener("keydown",this)),this.isActive=!1,this.emitEvent("deactivate"))},p.destroy=function(){this.deactivate(),n.removeEventListener("resize",this),this.allOff(),this.emitEvent("destroy"),l&&this.$element&&l.removeData(this.element,"flickity"),delete this.element.flickityGUID,delete u[this.guid]},a.extend(p,s),f.data=function(t){var e=(t=a.getQueryElement(t))&&t.flickityGUID;return e&&u[e]},a.htmlInit(f,"flickity"),l&&l.bridget&&l.bridget("flickity",f),f.setJQuery=function(t){l=t},f.Cell=i,f.Slide=r,f}),function(e,i){"function"==typeof define&&define.amd?define("unipointer/unipointer",["ev-emitter/ev-emitter"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("ev-emitter")):e.Unipointer=i(e,e.EvEmitter)}(window,function(s,t){function e(){}var i=e.prototype=Object.create(t.prototype);i.bindStartEvent=function(t){this._bindStartEvent(t,!0)},i.unbindStartEvent=function(t){this._bindStartEvent(t,!1)},i._bindStartEvent=function(t,e){var i=(e=void 0===e||e)?"addEventListener":"removeEventListener",n="mousedown";s.PointerEvent?n="pointerdown":"ontouchstart"in s&&(n="touchstart"),t[i](n,this)},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.getTouch=function(t){for(var e=0;e<t.length;e++){var i=t[e];if(i.identifier==this.pointerIdentifier)return i}},i.onmousedown=function(t){var e=t.button;e&&0!==e&&1!==e||this._pointerDown(t,t)},i.ontouchstart=function(t){this._pointerDown(t,t.changedTouches[0])},i.onpointerdown=function(t){this._pointerDown(t,t)},i._pointerDown=function(t,e){t.button||this.isPointerDown||(this.isPointerDown=!0,this.pointerIdentifier=void 0!==e.pointerId?e.pointerId:e.identifier,this.pointerDown(t,e))},i.pointerDown=function(t,e){this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e])};var n={mousedown:["mousemove","mouseup"],touchstart:["touchmove","touchend","touchcancel"],pointerdown:["pointermove","pointerup","pointercancel"]};return i._bindPostStartEvents=function(t){if(t){var e=n[t.type];e.forEach(function(t){s.addEventListener(t,this)},this),this._boundPointerEvents=e}},i._unbindPostStartEvents=function(){this._boundPointerEvents&&(this._boundPointerEvents.forEach(function(t){s.removeEventListener(t,this)},this),delete this._boundPointerEvents)},i.onmousemove=function(t){this._pointerMove(t,t)},i.onpointermove=function(t){t.pointerId==this.pointerIdentifier&&this._pointerMove(t,t)},i.ontouchmove=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerMove(t,e)},i._pointerMove=function(t,e){this.pointerMove(t,e)},i.pointerMove=function(t,e){this.emitEvent("pointerMove",[t,e])},i.onmouseup=function(t){this._pointerUp(t,t)},i.onpointerup=function(t){t.pointerId==this.pointerIdentifier&&this._pointerUp(t,t)},i.ontouchend=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerUp(t,e)},i._pointerUp=function(t,e){this._pointerDone(),this.pointerUp(t,e)},i.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e])},i._pointerDone=function(){this._pointerReset(),this._unbindPostStartEvents(),this.pointerDone()},i._pointerReset=function(){this.isPointerDown=!1,delete this.pointerIdentifier},i.pointerDone=function(){},i.onpointercancel=function(t){t.pointerId==this.pointerIdentifier&&this._pointerCancel(t,t)},i.ontouchcancel=function(t){var e=this.getTouch(t.changedTouches);e&&this._pointerCancel(t,e)},i._pointerCancel=function(t,e){this._pointerDone(),this.pointerCancel(t,e)},i.pointerCancel=function(t,e){this.emitEvent("pointerCancel",[t,e])},e.getPointerPoint=function(t){return{x:t.pageX,y:t.pageY}},e}),function(e,i){"function"==typeof define&&define.amd?define("unidragger/unidragger",["unipointer/unipointer"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("unipointer")):e.Unidragger=i(e,e.Unipointer)}(window,function(o,t){function e(){}var i=e.prototype=Object.create(t.prototype);i.bindHandles=function(){this._bindHandles(!0)},i.unbindHandles=function(){this._bindHandles(!1)},i._bindHandles=function(t){for(var e=(t=void 0===t||t)?"addEventListener":"removeEventListener",i=t?this._touchActionValue:"",n=0;n<this.handles.length;n++){var s=this.handles[n];this._bindStartEvent(s,t),s[e]("click",this),o.PointerEvent&&(s.style.touchAction=i)}},i._touchActionValue="none",i.pointerDown=function(t,e){this.okayPointerDown(t)&&(this.pointerDownPointer=e,t.preventDefault(),this.pointerDownBlur(),this._bindPostStartEvents(t),this.emitEvent("pointerDown",[t,e]))};var s={TEXTAREA:!0,INPUT:!0,SELECT:!0,OPTION:!0},r={radio:!0,checkbox:!0,button:!0,submit:!0,image:!0,file:!0};return i.okayPointerDown=function(t){var e=s[t.target.nodeName],i=r[t.target.type],n=!e||i;return n||this._pointerReset(),n},i.pointerDownBlur=function(){var t=document.activeElement;t&&t.blur&&t!=document.body&&t.blur()},i.pointerMove=function(t,e){var i=this._dragPointerMove(t,e);this.emitEvent("pointerMove",[t,e,i]),this._dragMove(t,e,i)},i._dragPointerMove=function(t,e){var i={x:e.pageX-this.pointerDownPointer.pageX,y:e.pageY-this.pointerDownPointer.pageY};return!this.isDragging&&this.hasDragStarted(i)&&this._dragStart(t,e),i},i.hasDragStarted=function(t){return 3<Math.abs(t.x)||3<Math.abs(t.y)},i.pointerUp=function(t,e){this.emitEvent("pointerUp",[t,e]),this._dragPointerUp(t,e)},i._dragPointerUp=function(t,e){this.isDragging?this._dragEnd(t,e):this._staticClick(t,e)},i._dragStart=function(t,e){this.isDragging=!0,this.isPreventingClicks=!0,this.dragStart(t,e)},i.dragStart=function(t,e){this.emitEvent("dragStart",[t,e])},i._dragMove=function(t,e,i){this.isDragging&&this.dragMove(t,e,i)},i.dragMove=function(t,e,i){t.preventDefault(),this.emitEvent("dragMove",[t,e,i])},i._dragEnd=function(t,e){this.isDragging=!1,setTimeout(function(){delete this.isPreventingClicks}.bind(this)),this.dragEnd(t,e)},i.dragEnd=function(t,e){this.emitEvent("dragEnd",[t,e])},i.onclick=function(t){this.isPreventingClicks&&t.preventDefault()},i._staticClick=function(t,e){this.isIgnoringMouseUp&&"mouseup"==t.type||(this.staticClick(t,e),"mouseup"!=t.type&&(this.isIgnoringMouseUp=!0,setTimeout(function(){delete this.isIgnoringMouseUp}.bind(this),400)))},i.staticClick=function(t,e){this.emitEvent("staticClick",[t,e])},e.getPointerPoint=t.getPointerPoint,e}),function(n,s){"function"==typeof define&&define.amd?define("flickity/js/drag",["./flickity","unidragger/unidragger","fizzy-ui-utils/utils"],function(t,e,i){return s(n,t,e,i)}):"object"==typeof module&&module.exports?module.exports=s(n,require("./flickity"),require("unidragger"),require("fizzy-ui-utils")):n.Flickity=s(n,n.Flickity,n.Unidragger,n.fizzyUIUtils)}(window,function(i,t,e,a){a.extend(t.defaults,{draggable:">1",dragThreshold:3}),t.createMethods.push("_createDrag");var n=t.prototype;a.extend(n,e.prototype),n._touchActionValue="pan-y";var s="createTouch"in document,o=!1;n._createDrag=function(){this.on("activate",this.onActivateDrag),this.on("uiChange",this._uiChangeDrag),this.on("deactivate",this.onDeactivateDrag),this.on("cellChange",this.updateDraggable),s&&!o&&(i.addEventListener("touchmove",function(){}),o=!0)},n.onActivateDrag=function(){this.handles=[this.viewport],this.bindHandles(),this.updateDraggable()},n.onDeactivateDrag=function(){this.unbindHandles(),this.element.classList.remove("is-draggable")},n.updateDraggable=function(){">1"==this.options.draggable?this.isDraggable=1<this.slides.length:this.isDraggable=this.options.draggable,this.isDraggable?this.element.classList.add("is-draggable"):this.element.classList.remove("is-draggable")},n.bindDrag=function(){this.options.draggable=!0,this.updateDraggable()},n.unbindDrag=function(){this.options.draggable=!1,this.updateDraggable()},n._uiChangeDrag=function(){delete this.isFreeScrolling},n.pointerDown=function(t,e){this.isDraggable?this.okayPointerDown(t)&&(this._pointerDownPreventDefault(t),this.pointerDownFocus(t),document.activeElement!=this.element&&this.pointerDownBlur(),this.dragX=this.x,this.viewport.classList.add("is-pointer-down"),this.pointerDownScroll=l(),i.addEventListener("scroll",this),this._pointerDownDefault(t,e)):this._pointerDownDefault(t,e)},n._pointerDownDefault=function(t,e){this.pointerDownPointer={pageX:e.pageX,pageY:e.pageY},this._bindPostStartEvents(t),this.dispatchEvent("pointerDown",t,[e])};var r={INPUT:!0,TEXTAREA:!0,SELECT:!0};function l(){return{x:i.pageXOffset,y:i.pageYOffset}}return n.pointerDownFocus=function(t){r[t.target.nodeName]||this.focus()},n._pointerDownPreventDefault=function(t){var e="touchstart"==t.type,i="touch"==t.pointerType,n=r[t.target.nodeName];e||i||n||t.preventDefault()},n.hasDragStarted=function(t){return Math.abs(t.x)>this.options.dragThreshold},n.pointerUp=function(t,e){delete this.isTouchScrolling,this.viewport.classList.remove("is-pointer-down"),this.dispatchEvent("pointerUp",t,[e]),this._dragPointerUp(t,e)},n.pointerDone=function(){i.removeEventListener("scroll",this),delete this.pointerDownScroll},n.dragStart=function(t,e){this.isDraggable&&(this.dragStartPosition=this.x,this.startAnimation(),i.removeEventListener("scroll",this),this.dispatchEvent("dragStart",t,[e]))},n.pointerMove=function(t,e){var i=this._dragPointerMove(t,e);this.dispatchEvent("pointerMove",t,[e,i]),this._dragMove(t,e,i)},n.dragMove=function(t,e,i){if(this.isDraggable){t.preventDefault(),this.previousDragX=this.dragX;var n=this.options.rightToLeft?-1:1;this.options.wrapAround&&(i.x=i.x%this.slideableWidth);var s=this.dragStartPosition+i.x*n;if(!this.options.wrapAround&&this.slides.length){var o=Math.max(-this.slides[0].target,this.dragStartPosition);s=o<s?.5*(s+o):s;var r=Math.min(-this.getLastSlide().target,this.dragStartPosition);s=s<r?.5*(s+r):s}this.dragX=s,this.dragMoveTime=new Date,this.dispatchEvent("dragMove",t,[e,i])}},n.dragEnd=function(t,e){if(this.isDraggable){this.options.freeScroll&&(this.isFreeScrolling=!0);var i=this.dragEndRestingSelect();if(this.options.freeScroll&&!this.options.wrapAround){var n=this.getRestingPosition();this.isFreeScrolling=-n>this.slides[0].target&&-n<this.getLastSlide().target}else this.options.freeScroll||i!=this.selectedIndex||(i+=this.dragEndBoostSelect());delete this.previousDragX,this.isDragSelect=this.options.wrapAround,this.select(i),delete this.isDragSelect,this.dispatchEvent("dragEnd",t,[e])}},n.dragEndRestingSelect=function(){var t=this.getRestingPosition(),e=Math.abs(this.getSlideDistance(-t,this.selectedIndex)),i=this._getClosestResting(t,e,1),n=this._getClosestResting(t,e,-1);return i.distance<n.distance?i.index:n.index},n._getClosestResting=function(t,e,i){for(var n=this.selectedIndex,s=1/0,o=this.options.contain&&!this.options.wrapAround?function(t,e){return t<=e}:function(t,e){return t<e};o(e,s)&&(n+=i,s=e,null!==(e=this.getSlideDistance(-t,n)));)e=Math.abs(e);return{distance:s,index:n-i}},n.getSlideDistance=function(t,e){var i=this.slides.length,n=this.options.wrapAround&&1<i,s=n?a.modulo(e,i):e,o=this.slides[s];if(!o)return null;var r=n?this.slideableWidth*Math.floor(e/i):0;return t-(o.target+r)},n.dragEndBoostSelect=function(){if(void 0===this.previousDragX||!this.dragMoveTime||100<new Date-this.dragMoveTime)return 0;var t=this.getSlideDistance(-this.dragX,this.selectedIndex),e=this.previousDragX-this.dragX;return 0<t&&0<e?1:t<0&&e<0?-1:0},n.staticClick=function(t,e){var i=this.getParentCell(t.target),n=i&&i.element,s=i&&this.cells.indexOf(i);this.dispatchEvent("staticClick",t,[e,n,s])},n.onscroll=function(){var t=l(),e=this.pointerDownScroll.x-t.x,i=this.pointerDownScroll.y-t.y;(3<Math.abs(e)||3<Math.abs(i))&&this._pointerDone()},t}),function(n,s){"function"==typeof define&&define.amd?define("flickity/js/prev-next-button",["./flickity","unipointer/unipointer","fizzy-ui-utils/utils"],function(t,e,i){return s(n,t,e,i)}):"object"==typeof module&&module.exports?module.exports=s(n,require("./flickity"),require("unipointer"),require("fizzy-ui-utils")):s(n,n.Flickity,n.Unipointer,n.fizzyUIUtils)}(window,function(t,e,i,n){"use strict";var s="http://www.w3.org/2000/svg";function o(t,e){this.direction=t,this.parent=e,this._create()}(o.prototype=Object.create(i.prototype))._create=function(){this.isEnabled=!0,this.isPrevious=-1==this.direction;var t=this.parent.options.rightToLeft?1:-1;this.isLeft=this.direction==t;var e=this.element=document.createElement("button");e.className="flickity-button flickity-prev-next-button",e.className+=this.isPrevious?" previous":" next",e.setAttribute("type","button"),this.disable(),e.setAttribute("aria-label",this.isPrevious?"Previous":"Next");var i=this.createSVG();e.appendChild(i),this.parent.on("select",this.update.bind(this)),this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))},o.prototype.activate=function(){this.bindStartEvent(this.element),this.element.addEventListener("click",this),this.parent.element.appendChild(this.element)},o.prototype.deactivate=function(){this.parent.element.removeChild(this.element),this.unbindStartEvent(this.element),this.element.removeEventListener("click",this)},o.prototype.createSVG=function(){var t=document.createElementNS(s,"svg");t.setAttribute("class","flickity-button-icon"),t.setAttribute("viewBox","0 0 100 100");var e=document.createElementNS(s,"path"),i=function(t){return"string"!=typeof t?"M "+t.x0+",50 L "+t.x1+","+(t.y1+50)+" L "+t.x2+","+(t.y2+50)+" L "+t.x3+",50  L "+t.x2+","+(50-t.y2)+" L "+t.x1+","+(50-t.y1)+" Z":t}(this.parent.options.arrowShape);return e.setAttribute("d",i),e.setAttribute("class","arrow"),this.isLeft||e.setAttribute("transform","translate(100, 100) rotate(180) "),t.appendChild(e),t},o.prototype.handleEvent=n.handleEvent,o.prototype.onclick=function(){if(this.isEnabled){this.parent.uiChange();var t=this.isPrevious?"previous":"next";this.parent[t]()}},o.prototype.enable=function(){this.isEnabled||(this.element.disabled=!1,this.isEnabled=!0)},o.prototype.disable=function(){this.isEnabled&&(this.element.disabled=!0,this.isEnabled=!1)},o.prototype.update=function(){var t=this.parent.slides;if(this.parent.options.wrapAround&&1<t.length)this.enable();else{var e=t.length?t.length-1:0,i=this.isPrevious?0:e;this[this.parent.selectedIndex==i?"disable":"enable"]()}},o.prototype.destroy=function(){this.deactivate(),this.allOff()},n.extend(e.defaults,{prevNextButtons:!0,arrowShape:{x0:10,x1:60,y1:50,x2:70,y2:40,x3:30}}),e.createMethods.push("_createPrevNextButtons");var r=e.prototype;return r._createPrevNextButtons=function(){this.options.prevNextButtons&&(this.prevButton=new o(-1,this),this.nextButton=new o(1,this),this.on("activate",this.activatePrevNextButtons))},r.activatePrevNextButtons=function(){this.prevButton.activate(),this.nextButton.activate(),this.on("deactivate",this.deactivatePrevNextButtons)},r.deactivatePrevNextButtons=function(){this.prevButton.deactivate(),this.nextButton.deactivate(),this.off("deactivate",this.deactivatePrevNextButtons)},e.PrevNextButton=o,e}),function(n,s){"function"==typeof define&&define.amd?define("flickity/js/page-dots",["./flickity","unipointer/unipointer","fizzy-ui-utils/utils"],function(t,e,i){return s(n,t,e,i)}):"object"==typeof module&&module.exports?module.exports=s(n,require("./flickity"),require("unipointer"),require("fizzy-ui-utils")):s(n,n.Flickity,n.Unipointer,n.fizzyUIUtils)}(window,function(t,e,i,n){function s(t){this.parent=t,this._create()}(s.prototype=Object.create(i.prototype))._create=function(){this.holder=document.createElement("ol"),this.holder.className="flickity-page-dots",this.dots=[],this.handleClick=this.onClick.bind(this),this.on("pointerDown",this.parent.childUIPointerDown.bind(this.parent))},s.prototype.activate=function(){this.setDots(),this.holder.addEventListener("click",this.handleClick),this.bindStartEvent(this.holder),this.parent.element.appendChild(this.holder)},s.prototype.deactivate=function(){this.holder.removeEventListener("click",this.handleClick),this.unbindStartEvent(this.holder),this.parent.element.removeChild(this.holder)},s.prototype.setDots=function(){var t=this.parent.slides.length-this.dots.length;0<t?this.addDots(t):t<0&&this.removeDots(-t)},s.prototype.addDots=function(t){for(var e=document.createDocumentFragment(),i=[],n=this.dots.length,s=n+t,o=n;o<s;o++){var r=document.createElement("li");r.className="dot",r.setAttribute("aria-label","Page dot "+(o+1)),e.appendChild(r),i.push(r)}this.holder.appendChild(e),this.dots=this.dots.concat(i)},s.prototype.removeDots=function(t){this.dots.splice(this.dots.length-t,t).forEach(function(t){this.holder.removeChild(t)},this)},s.prototype.updateSelected=function(){this.selectedDot&&(this.selectedDot.className="dot",this.selectedDot.removeAttribute("aria-current")),this.dots.length&&(this.selectedDot=this.dots[this.parent.selectedIndex],this.selectedDot.className="dot is-selected",this.selectedDot.setAttribute("aria-current","step"))},s.prototype.onTap=s.prototype.onClick=function(t){var e=t.target;if("LI"==e.nodeName){this.parent.uiChange();var i=this.dots.indexOf(e);this.parent.select(i)}},s.prototype.destroy=function(){this.deactivate(),this.allOff()},e.PageDots=s,n.extend(e.defaults,{pageDots:!0}),e.createMethods.push("_createPageDots");var o=e.prototype;return o._createPageDots=function(){this.options.pageDots&&(this.pageDots=new s(this),this.on("activate",this.activatePageDots),this.on("select",this.updateSelectedPageDots),this.on("cellChange",this.updatePageDots),this.on("resize",this.updatePageDots),this.on("deactivate",this.deactivatePageDots))},o.activatePageDots=function(){this.pageDots.activate()},o.updateSelectedPageDots=function(){this.pageDots.updateSelected()},o.updatePageDots=function(){this.pageDots.setDots()},o.deactivatePageDots=function(){this.pageDots.deactivate()},e.PageDots=s,e}),function(t,n){"function"==typeof define&&define.amd?define("flickity/js/player",["ev-emitter/ev-emitter","fizzy-ui-utils/utils","./flickity"],function(t,e,i){return n(t,e,i)}):"object"==typeof module&&module.exports?module.exports=n(require("ev-emitter"),require("fizzy-ui-utils"),require("./flickity")):n(t.EvEmitter,t.fizzyUIUtils,t.Flickity)}(window,function(t,e,i){function n(t){this.parent=t,this.state="stopped",this.onVisibilityChange=this.visibilityChange.bind(this),this.onVisibilityPlay=this.visibilityPlay.bind(this)}(n.prototype=Object.create(t.prototype)).play=function(){"playing"!=this.state&&(document.hidden?document.addEventListener("visibilitychange",this.onVisibilityPlay):(this.state="playing",document.addEventListener("visibilitychange",this.onVisibilityChange),this.tick()))},n.prototype.tick=function(){if("playing"==this.state){var t=this.parent.options.autoPlay;t="number"==typeof t?t:3e3;var e=this;this.clear(),this.timeout=setTimeout(function(){e.parent.next(!0),e.tick()},t)}},n.prototype.stop=function(){this.state="stopped",this.clear(),document.removeEventListener("visibilitychange",this.onVisibilityChange)},n.prototype.clear=function(){clearTimeout(this.timeout)},n.prototype.pause=function(){"playing"==this.state&&(this.state="paused",this.clear())},n.prototype.unpause=function(){"paused"==this.state&&this.play()},n.prototype.visibilityChange=function(){this[document.hidden?"pause":"unpause"]()},n.prototype.visibilityPlay=function(){this.play(),document.removeEventListener("visibilitychange",this.onVisibilityPlay)},e.extend(i.defaults,{pauseAutoPlayOnHover:!0}),i.createMethods.push("_createPlayer");var s=i.prototype;return s._createPlayer=function(){this.player=new n(this),this.on("activate",this.activatePlayer),this.on("uiChange",this.stopPlayer),this.on("pointerDown",this.stopPlayer),this.on("deactivate",this.deactivatePlayer)},s.activatePlayer=function(){this.options.autoPlay&&(this.player.play(),this.element.addEventListener("mouseenter",this))},s.playPlayer=function(){this.player.play()},s.stopPlayer=function(){this.player.stop()},s.pausePlayer=function(){this.player.pause()},s.unpausePlayer=function(){this.player.unpause()},s.deactivatePlayer=function(){this.player.stop(),this.element.removeEventListener("mouseenter",this)},s.onmouseenter=function(){this.options.pauseAutoPlayOnHover&&(this.player.pause(),this.element.addEventListener("mouseleave",this))},s.onmouseleave=function(){this.player.unpause(),this.element.removeEventListener("mouseleave",this)},i.Player=n,i}),function(i,n){"function"==typeof define&&define.amd?define("flickity/js/add-remove-cell",["./flickity","fizzy-ui-utils/utils"],function(t,e){return n(i,t,e)}):"object"==typeof module&&module.exports?module.exports=n(i,require("./flickity"),require("fizzy-ui-utils")):n(i,i.Flickity,i.fizzyUIUtils)}(window,function(t,e,n){var i=e.prototype;return i.insert=function(t,e){var i=this._makeCells(t);if(i&&i.length){var n=this.cells.length;e=void 0===e?n:e;var s=function(t){var e=document.createDocumentFragment();return t.forEach(function(t){e.appendChild(t.element)}),e}(i),o=e==n;if(o)this.slider.appendChild(s);else{var r=this.cells[e].element;this.slider.insertBefore(s,r)}if(0===e)this.cells=i.concat(this.cells);else if(o)this.cells=this.cells.concat(i);else{var a=this.cells.splice(e,n-e);this.cells=this.cells.concat(i).concat(a)}this._sizeCells(i),this.cellChange(e,!0)}},i.append=function(t){this.insert(t,this.cells.length)},i.prepend=function(t){this.insert(t,0)},i.remove=function(t){var e=this.getCells(t);if(e&&e.length){var i=this.cells.length-1;e.forEach(function(t){t.remove();var e=this.cells.indexOf(t);i=Math.min(e,i),n.removeFrom(this.cells,t)},this),this.cellChange(i,!0)}},i.cellSizeChange=function(t){var e=this.getCell(t);if(e){e.getSize();var i=this.cells.indexOf(e);this.cellChange(i)}},i.cellChange=function(t,e){var i=this.selectedElement;this._positionCells(t),this._getWrapShiftCells(),this.setGallerySize();var n=this.getCell(i);n&&(this.selectedIndex=this.getCellSlideIndex(n)),this.selectedIndex=Math.min(this.slides.length-1,this.selectedIndex),this.emitEvent("cellChange",[t]),this.select(this.selectedIndex),e&&this.positionSliderAtSelected()},e}),function(i,n){"function"==typeof define&&define.amd?define("flickity/js/lazyload",["./flickity","fizzy-ui-utils/utils"],function(t,e){return n(i,t,e)}):"object"==typeof module&&module.exports?module.exports=n(i,require("./flickity"),require("fizzy-ui-utils")):n(i,i.Flickity,i.fizzyUIUtils)}(window,function(t,e,o){"use strict";e.createMethods.push("_createLazyload");var i=e.prototype;function s(t,e){this.img=t,this.flickity=e,this.load()}return i._createLazyload=function(){this.on("select",this.lazyLoad)},i.lazyLoad=function(){var t=this.options.lazyLoad;if(t){var e="number"==typeof t?t:0,i=this.getAdjacentCellElements(e),n=[];i.forEach(function(t){var e=function(t){if("IMG"==t.nodeName){var e=t.getAttribute("data-flickity-lazyload"),i=t.getAttribute("data-flickity-lazyload-src"),n=t.getAttribute("data-flickity-lazyload-srcset");if(e||i||n)return[t]}var s=t.querySelectorAll("img[data-flickity-lazyload], img[data-flickity-lazyload-src], img[data-flickity-lazyload-srcset]");return o.makeArray(s)}(t);n=n.concat(e)}),n.forEach(function(t){new s(t,this)},this)}},s.prototype.handleEvent=o.handleEvent,s.prototype.load=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this);var t=this.img.getAttribute("data-flickity-lazyload")||this.img.getAttribute("data-flickity-lazyload-src"),e=this.img.getAttribute("data-flickity-lazyload-srcset");this.img.src=t,e&&this.img.setAttribute("srcset",e),this.img.removeAttribute("data-flickity-lazyload"),this.img.removeAttribute("data-flickity-lazyload-src"),this.img.removeAttribute("data-flickity-lazyload-srcset")},s.prototype.onload=function(t){this.complete(t,"flickity-lazyloaded")},s.prototype.onerror=function(t){this.complete(t,"flickity-lazyerror")},s.prototype.complete=function(t,e){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this);var i=this.flickity.getParentCell(this.img),n=i&&i.element;this.flickity.cellSizeChange(n),this.img.classList.add(e),this.flickity.dispatchEvent("lazyLoad",t,n)},e.LazyLoader=s,e}),function(t,e){"function"==typeof define&&define.amd?define("flickity/js/index",["./flickity","./drag","./prev-next-button","./page-dots","./player","./add-remove-cell","./lazyload"],e):"object"==typeof module&&module.exports&&(module.exports=e(require("./flickity"),require("./drag"),require("./prev-next-button"),require("./page-dots"),require("./player"),require("./add-remove-cell"),require("./lazyload")))}(window,function(t){return t}),function(t,e){"function"==typeof define&&define.amd?define("flickity-as-nav-for/as-nav-for",["flickity/js/index","fizzy-ui-utils/utils"],e):"object"==typeof module&&module.exports?module.exports=e(require("flickity"),require("fizzy-ui-utils")):t.Flickity=e(t.Flickity,t.fizzyUIUtils)}(window,function(n,s){n.createMethods.push("_createAsNavFor");var t=n.prototype;return t._createAsNavFor=function(){this.on("activate",this.activateAsNavFor),this.on("deactivate",this.deactivateAsNavFor),this.on("destroy",this.destroyAsNavFor);var t=this.options.asNavFor;if(t){var e=this;setTimeout(function(){e.setNavCompanion(t)})}},t.setNavCompanion=function(t){t=s.getQueryElement(t);var e=n.data(t);if(e&&e!=this){this.navCompanion=e;var i=this;this.onNavCompanionSelect=function(){i.navCompanionSelect()},e.on("select",this.onNavCompanionSelect),this.on("staticClick",this.onNavStaticClick),this.navCompanionSelect(!0)}},t.navCompanionSelect=function(t){var e=this.navCompanion&&this.navCompanion.selectedCells;if(e){var i=e[0],n=this.navCompanion.cells.indexOf(i),s=n+e.length-1,o=Math.floor(function(t,e,i){return(e-t)*i+t}(n,s,this.navCompanion.cellAlign));if(this.selectCell(o,!1,t),this.removeNavSelectedElements(),!(o>=this.cells.length)){var r=this.cells.slice(n,1+s);this.navSelectedElements=r.map(function(t){return t.element}),this.changeNavSelectedClass("add")}}},t.changeNavSelectedClass=function(e){this.navSelectedElements.forEach(function(t){t.classList[e]("is-nav-selected")})},t.activateAsNavFor=function(){this.navCompanionSelect(!0)},t.removeNavSelectedElements=function(){this.navSelectedElements&&(this.changeNavSelectedClass("remove"),delete this.navSelectedElements)},t.onNavStaticClick=function(t,e,i,n){"number"==typeof n&&this.navCompanion.selectCell(n)},t.deactivateAsNavFor=function(){this.removeNavSelectedElements()},t.destroyAsNavFor=function(){this.navCompanion&&(this.navCompanion.off("select",this.onNavCompanionSelect),this.off("staticClick",this.onNavStaticClick),delete this.navCompanion)},n}),function(e,i){"use strict";"function"==typeof define&&define.amd?define("imagesloaded/imagesloaded",["ev-emitter/ev-emitter"],function(t){return i(e,t)}):"object"==typeof module&&module.exports?module.exports=i(e,require("ev-emitter")):e.imagesLoaded=i(e,e.EvEmitter)}("undefined"!=typeof window?window:this,function(e,t){var s=e.jQuery,o=e.console;function r(t,e){for(var i in e)t[i]=e[i];return t}var a=Array.prototype.slice;function l(t,e,i){if(!(this instanceof l))return new l(t,e,i);var n=t;"string"==typeof t&&(n=document.querySelectorAll(t)),n?(this.elements=function(t){return Array.isArray(t)?t:"object"==typeof t&&"number"==typeof t.length?a.call(t):[t]}(n),this.options=r({},this.options),"function"==typeof e?i=e:r(this.options,e),i&&this.on("always",i),this.getImages(),s&&(this.jqDeferred=new s.Deferred),setTimeout(this.check.bind(this))):o.error("Bad element for imagesLoaded "+(n||t))}(l.prototype=Object.create(t.prototype)).options={},l.prototype.getImages=function(){this.images=[],this.elements.forEach(this.addElementImages,this)},l.prototype.addElementImages=function(t){"IMG"==t.nodeName&&this.addImage(t),!0===this.options.background&&this.addElementBackgroundImages(t);var e=t.nodeType;if(e&&h[e]){for(var i=t.querySelectorAll("img"),n=0;n<i.length;n++){var s=i[n];this.addImage(s)}if("string"==typeof this.options.background){var o=t.querySelectorAll(this.options.background);for(n=0;n<o.length;n++){var r=o[n];this.addElementBackgroundImages(r)}}}};var h={1:!0,9:!0,11:!0};function i(t){this.img=t}function n(t,e){this.url=t,this.element=e,this.img=new Image}return l.prototype.addElementBackgroundImages=function(t){var e=getComputedStyle(t);if(e)for(var i=/url\((['"])?(.*?)\1\)/gi,n=i.exec(e.backgroundImage);null!==n;){var s=n&&n[2];s&&this.addBackground(s,t),n=i.exec(e.backgroundImage)}},l.prototype.addImage=function(t){var e=new i(t);this.images.push(e)},l.prototype.addBackground=function(t,e){var i=new n(t,e);this.images.push(i)},l.prototype.check=function(){var n=this;function e(t,e,i){setTimeout(function(){n.progress(t,e,i)})}this.progressedCount=0,this.hasAnyBroken=!1,this.images.length?this.images.forEach(function(t){t.once("progress",e),t.check()}):this.complete()},l.prototype.progress=function(t,e,i){this.progressedCount++,this.hasAnyBroken=this.hasAnyBroken||!t.isLoaded,this.emitEvent("progress",[this,t,e]),this.jqDeferred&&this.jqDeferred.notify&&this.jqDeferred.notify(this,t),this.progressedCount==this.images.length&&this.complete(),this.options.debug&&o&&o.log("progress: "+i,t,e)},l.prototype.complete=function(){var t=this.hasAnyBroken?"fail":"done";if(this.isComplete=!0,this.emitEvent(t,[this]),this.emitEvent("always",[this]),this.jqDeferred){var e=this.hasAnyBroken?"reject":"resolve";this.jqDeferred[e](this)}},(i.prototype=Object.create(t.prototype)).check=function(){this.getIsImageComplete()?this.confirm(0!==this.img.naturalWidth,"naturalWidth"):(this.proxyImage=new Image,this.proxyImage.addEventListener("load",this),this.proxyImage.addEventListener("error",this),this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.proxyImage.src=this.img.src)},i.prototype.getIsImageComplete=function(){return this.img.complete&&this.img.naturalWidth},i.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.img,e])},i.prototype.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.prototype.onload=function(){this.confirm(!0,"onload"),this.unbindEvents()},i.prototype.onerror=function(){this.confirm(!1,"onerror"),this.unbindEvents()},i.prototype.unbindEvents=function(){this.proxyImage.removeEventListener("load",this),this.proxyImage.removeEventListener("error",this),this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},(n.prototype=Object.create(i.prototype)).check=function(){this.img.addEventListener("load",this),this.img.addEventListener("error",this),this.img.src=this.url,this.getIsImageComplete()&&(this.confirm(0!==this.img.naturalWidth,"naturalWidth"),this.unbindEvents())},n.prototype.unbindEvents=function(){this.img.removeEventListener("load",this),this.img.removeEventListener("error",this)},n.prototype.confirm=function(t,e){this.isLoaded=t,this.emitEvent("progress",[this,this.element,e])},l.makeJQueryPlugin=function(t){(t=t||e.jQuery)&&((s=t).fn.imagesLoaded=function(t,e){return new l(this,t,e).jqDeferred.promise(s(this))})},l.makeJQueryPlugin(),l}),function(i,n){"function"==typeof define&&define.amd?define(["flickity/js/index","imagesloaded/imagesloaded"],function(t,e){return n(i,t,e)}):"object"==typeof module&&module.exports?module.exports=n(i,require("flickity"),require("imagesloaded")):i.Flickity=n(i,i.Flickity,i.imagesLoaded)}(window,function(t,e,i){"use strict";e.createMethods.push("_createImagesLoaded");var n=e.prototype;return n._createImagesLoaded=function(){this.on("activate",this.imagesLoaded)},n.imagesLoaded=function(){if(this.options.imagesLoaded){var n=this;i(this.slider).on("progress",function(t,e){var i=n.getParentCell(e.img);n.cellSizeChange(i&&i.element),n.options.freeScroll||n.positionSliderAtSelected()})}},e});

 /**
 * Flickity fade v1.0.0
 * Fade between Flickity slides
 */

 !function(e,t){"function"==typeof define&&define.amd?define(["flickity/js/index","fizzy-ui-utils/utils"],t):"object"==typeof module&&module.exports?module.exports=t(require("flickity"),require("fizzy-ui-utils")):t(e.Flickity,e.fizzyUIUtils)}(this,function(e,t){var i=e.Slide,s=i.prototype.updateTarget;i.prototype.updateTarget=function(){if(s.apply(this,arguments),this.parent.options.fade){var e=this.target-this.x,t=this.cells[0].x;this.cells.forEach(function(i){var s=i.x-t-e;i.renderPosition(s)})}},i.prototype.setOpacity=function(e){this.cells.forEach(function(t){t.element.style.opacity=e})};var a=e.prototype;e.createMethods.push("_createFade"),a._createFade=function(){this.fadeIndex=this.selectedIndex,this.prevSelectedIndex=this.selectedIndex,this.on("select",this.onSelectFade),this.on("dragEnd",this.onDragEndFade),this.on("settle",this.onSettleFade),this.on("activate",this.onActivateFade),this.on("deactivate",this.onDeactivateFade)};var n=a.updateSlides;a.updateSlides=function(){n.apply(this,arguments),this.options.fade&&this.slides.forEach(function(e,t){var i=t==this.selectedIndex?1:0;e.setOpacity(i)},this)},a.onSelectFade=function(){this.fadeIndex=Math.min(this.prevSelectedIndex,this.slides.length-1),this.prevSelectedIndex=this.selectedIndex},a.onSettleFade=function(){(delete this.didDragEnd,this.options.fade)&&(this.selectedSlide.setOpacity(1),this.slides[this.fadeIndex]&&this.fadeIndex!=this.selectedIndex&&this.slides[this.fadeIndex].setOpacity(0))},a.onDragEndFade=function(){this.didDragEnd=!0},a.onActivateFade=function(){this.options.fade&&this.element.classList.add("is-fade")},a.onDeactivateFade=function(){this.options.fade&&(this.element.classList.remove("is-fade"),this.slides.forEach(function(e){e.setOpacity("")}))};var d=a.positionSlider;a.positionSlider=function(){this.options.fade?(this.fadeSlides(),this.dispatchScrollEvent()):d.apply(this,arguments)};var h=a.positionSliderAtSelected;a.positionSliderAtSelected=function(){this.options.fade&&this.setTranslateX(0),h.apply(this,arguments)},a.fadeSlides=function(){if(!(this.slides.length<2)){var e=this.getFadeIndexes(),t=this.slides[e.a],i=this.slides[e.b],s=this.wrapDifference(t.target,i.target),a=this.wrapDifference(t.target,-this.x);a/=s,t.setOpacity(1-a),i.setOpacity(a);var n=e.a;this.isDragging&&(n=a>.5?e.a:e.b),null!=this.fadeHideIndex&&this.fadeHideIndex!=n&&this.fadeHideIndex!=e.a&&this.fadeHideIndex!=e.b&&this.slides[this.fadeHideIndex].setOpacity(0),this.fadeHideIndex=n}},a.getFadeIndexes=function(){return this.isDragging||this.didDragEnd?this.options.wrapAround?this.getFadeDragWrapIndexes():this.getFadeDragLimitIndexes():{a:this.fadeIndex,b:this.selectedIndex}},a.getFadeDragWrapIndexes=function(){var e=this.slides.map(function(e,t){return this.getSlideDistance(-this.x,t)},this),i=e.map(function(e){return Math.abs(e)}),s=Math.min.apply(Math,i),a=i.indexOf(s),n=e[a],d=this.slides.length,h=n>=0?1:-1;return{a:a,b:t.modulo(a+h,d)}},a.getFadeDragLimitIndexes=function(){for(var e=0,t=0;t<this.slides.length-1;t++){var i=this.slides[t];if(-this.x<i.target)break;e=t}return{a:e,b:e+1}},a.wrapDifference=function(e,t){var i=t-e;if(!this.options.wrapAround)return i;var s=i+this.slideableWidth,a=i-this.slideableWidth;return Math.abs(s)<Math.abs(i)&&(i=s),Math.abs(a)<Math.abs(i)&&(i=a),i};var o=a._getWrapShiftCells;a._getWrapShiftCells=function(){this.options.fade||o.apply(this,arguments)};var r=a.shiftWrapCells;return a.shiftWrapCells=function(){this.options.fade||r.apply(this,arguments)},e});

 //Plyr
"object"==typeof navigator&&function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define("Plyr",t):(e=e||self).Plyr=t()}(this,(function(){"use strict";!function(){if("undefined"!=typeof window)try{var e=new window.CustomEvent("test",{cancelable:!0});if(e.preventDefault(),!0!==e.defaultPrevented)throw new Error("Could not prevent default")}catch(e){var t=function(e,t){var n,i;return(t=t||{}).bubbles=!!t.bubbles,t.cancelable=!!t.cancelable,(n=document.createEvent("CustomEvent")).initCustomEvent(e,t.bubbles,t.cancelable,t.detail),i=n.preventDefault,n.preventDefault=function(){i.call(this);try{Object.defineProperty(this,"defaultPrevented",{get:function(){return!0}})}catch(e){this.defaultPrevented=!0}},n};t.prototype=window.Event.prototype,window.CustomEvent=t}}();var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function t(e,t){return e(t={exports:{}},t.exports),t.exports}var n=function(e){return e&&e.Math==Math&&e},i=n("object"==typeof globalThis&&globalThis)||n("object"==typeof window&&window)||n("object"==typeof self&&self)||n("object"==typeof e&&e)||Function("return this")(),r=function(e){try{return!!e()}catch(e){return!0}},a=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]})),o={}.propertyIsEnumerable,s=Object.getOwnPropertyDescriptor,l={f:s&&!o.call({1:2},1)?function(e){var t=s(this,e);return!!t&&t.enumerable}:o},c=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},u={}.toString,h=function(e){return u.call(e).slice(8,-1)},f="".split,d=r((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==h(e)?f.call(e,""):Object(e)}:Object,p=function(e){if(null==e)throw TypeError("Can't call method on "+e);return e},m=function(e){return d(p(e))},g=function(e){return"object"==typeof e?null!==e:"function"==typeof e},v=function(e,t){if(!g(e))return e;var n,i;if(t&&"function"==typeof(n=e.toString)&&!g(i=n.call(e)))return i;if("function"==typeof(n=e.valueOf)&&!g(i=n.call(e)))return i;if(!t&&"function"==typeof(n=e.toString)&&!g(i=n.call(e)))return i;throw TypeError("Can't convert object to primitive value")},y={}.hasOwnProperty,b=function(e,t){return y.call(e,t)},w=i.document,k=g(w)&&g(w.createElement),T=function(e){return k?w.createElement(e):{}},S=!a&&!r((function(){return 7!=Object.defineProperty(T("div"),"a",{get:function(){return 7}}).a})),E=Object.getOwnPropertyDescriptor,A={f:a?E:function(e,t){if(e=m(e),t=v(t,!0),S)try{return E(e,t)}catch(e){}if(b(e,t))return c(!l.f.call(e,t),e[t])}},x=function(e){if(!g(e))throw TypeError(String(e)+" is not an object");return e},C=Object.defineProperty,P={f:a?C:function(e,t,n){if(x(e),t=v(t,!0),x(n),S)try{return C(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},I=a?function(e,t,n){return P.f(e,t,c(1,n))}:function(e,t,n){return e[t]=n,e},O=function(e,t){try{I(i,e,t)}catch(n){i[e]=t}return t},L=i["__core-js_shared__"]||O("__core-js_shared__",{}),j=Function.toString;"function"!=typeof L.inspectSource&&(L.inspectSource=function(e){return j.call(e)});var M,N,R,_=L.inspectSource,U=i.WeakMap,F="function"==typeof U&&/native code/.test(_(U)),D=t((function(e){(e.exports=function(e,t){return L[e]||(L[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.6.4",mode:"global",copyright:"© 2020 Denis Pushkarev (zloirock.ru)"})})),q=0,H=Math.random(),B=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++q+H).toString(36)},V=D("keys"),z=function(e){return V[e]||(V[e]=B(e))},W={},K=i.WeakMap;if(F){var $=new K,Y=$.get,G=$.has,X=$.set;M=function(e,t){return X.call($,e,t),t},N=function(e){return Y.call($,e)||{}},R=function(e){return G.call($,e)}}else{var Q=z("state");W[Q]=!0,M=function(e,t){return I(e,Q,t),t},N=function(e){return b(e,Q)?e[Q]:{}},R=function(e){return b(e,Q)}}var J,Z={set:M,get:N,has:R,enforce:function(e){return R(e)?N(e):M(e,{})},getterFor:function(e){return function(t){var n;if(!g(t)||(n=N(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},ee=t((function(e){var t=Z.get,n=Z.enforce,r=String(String).split("String");(e.exports=function(e,t,a,o){var s=!!o&&!!o.unsafe,l=!!o&&!!o.enumerable,c=!!o&&!!o.noTargetGet;"function"==typeof a&&("string"!=typeof t||b(a,"name")||I(a,"name",t),n(a).source=r.join("string"==typeof t?t:"")),e!==i?(s?!c&&e[t]&&(l=!0):delete e[t],l?e[t]=a:I(e,t,a)):l?e[t]=a:O(t,a)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||_(this)}))})),te=i,ne=function(e){return"function"==typeof e?e:void 0},ie=function(e,t){return arguments.length<2?ne(te[e])||ne(i[e]):te[e]&&te[e][t]||i[e]&&i[e][t]},re=Math.ceil,ae=Math.floor,oe=function(e){return isNaN(e=+e)?0:(e>0?ae:re)(e)},se=Math.min,le=function(e){return e>0?se(oe(e),9007199254740991):0},ce=Math.max,ue=Math.min,he=function(e,t){var n=oe(e);return n<0?ce(n+t,0):ue(n,t)},fe=function(e){return function(t,n,i){var r,a=m(t),o=le(a.length),s=he(i,o);if(e&&n!=n){for(;o>s;)if((r=a[s++])!=r)return!0}else for(;o>s;s++)if((e||s in a)&&a[s]===n)return e||s||0;return!e&&-1}},de={includes:fe(!0),indexOf:fe(!1)},pe=de.indexOf,me=function(e,t){var n,i=m(e),r=0,a=[];for(n in i)!b(W,n)&&b(i,n)&&a.push(n);for(;t.length>r;)b(i,n=t[r++])&&(~pe(a,n)||a.push(n));return a},ge=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],ve=ge.concat("length","prototype"),ye={f:Object.getOwnPropertyNames||function(e){return me(e,ve)}},be={f:Object.getOwnPropertySymbols},we=ie("Reflect","ownKeys")||function(e){var t=ye.f(x(e)),n=be.f;return n?t.concat(n(e)):t},ke=function(e,t){for(var n=we(t),i=P.f,r=A.f,a=0;a<n.length;a++){var o=n[a];b(e,o)||i(e,o,r(t,o))}},Te=/#|\.prototype\./,Se=function(e,t){var n=Ae[Ee(e)];return n==Ce||n!=xe&&("function"==typeof t?r(t):!!t)},Ee=Se.normalize=function(e){return String(e).replace(Te,".").toLowerCase()},Ae=Se.data={},xe=Se.NATIVE="N",Ce=Se.POLYFILL="P",Pe=Se,Ie=A.f,Oe=function(e,t){var n,r,a,o,s,l=e.target,c=e.global,u=e.stat;if(n=c?i:u?i[l]||O(l,{}):(i[l]||{}).prototype)for(r in t){if(o=t[r],a=e.noTargetGet?(s=Ie(n,r))&&s.value:n[r],!Pe(c?r:l+(u?".":"#")+r,e.forced)&&void 0!==a){if(typeof o==typeof a)continue;ke(o,a)}(e.sham||a&&a.sham)&&I(o,"sham",!0),ee(n,r,o,e)}},Le=!!Object.getOwnPropertySymbols&&!r((function(){return!String(Symbol())})),je=Le&&!Symbol.sham&&"symbol"==typeof Symbol.iterator,Me=Array.isArray||function(e){return"Array"==h(e)},Ne=function(e){return Object(p(e))},Re=Object.keys||function(e){return me(e,ge)},_e=a?Object.defineProperties:function(e,t){x(e);for(var n,i=Re(t),r=i.length,a=0;r>a;)P.f(e,n=i[a++],t[n]);return e},Ue=ie("document","documentElement"),Fe=z("IE_PROTO"),De=function(){},qe=function(e){return"<script>"+e+"<\/script>"},He=function(){try{J=document.domain&&new ActiveXObject("htmlfile")}catch(e){}var e,t;He=J?function(e){e.write(qe("")),e.close();var t=e.parentWindow.Object;return e=null,t}(J):((t=T("iframe")).style.display="none",Ue.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write(qe("document.F=Object")),e.close(),e.F);for(var n=ge.length;n--;)delete He.prototype[ge[n]];return He()};W[Fe]=!0;var Be=Object.create||function(e,t){var n;return null!==e?(De.prototype=x(e),n=new De,De.prototype=null,n[Fe]=e):n=He(),void 0===t?n:_e(n,t)},Ve=ye.f,ze={}.toString,We="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],Ke={f:function(e){return We&&"[object Window]"==ze.call(e)?function(e){try{return Ve(e)}catch(e){return We.slice()}}(e):Ve(m(e))}},$e=D("wks"),Ye=i.Symbol,Ge=je?Ye:Ye&&Ye.withoutSetter||B,Xe=function(e){return b($e,e)||(Le&&b(Ye,e)?$e[e]=Ye[e]:$e[e]=Ge("Symbol."+e)),$e[e]},Qe={f:Xe},Je=P.f,Ze=function(e){var t=te.Symbol||(te.Symbol={});b(t,e)||Je(t,e,{value:Qe.f(e)})},et=P.f,tt=Xe("toStringTag"),nt=function(e,t,n){e&&!b(e=n?e:e.prototype,tt)&&et(e,tt,{configurable:!0,value:t})},it=function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function");return e},rt=function(e,t,n){if(it(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,i){return e.call(t,n,i)};case 3:return function(n,i,r){return e.call(t,n,i,r)}}return function(){return e.apply(t,arguments)}},at=Xe("species"),ot=function(e,t){var n;return Me(e)&&("function"!=typeof(n=e.constructor)||n!==Array&&!Me(n.prototype)?g(n)&&null===(n=n[at])&&(n=void 0):n=void 0),new(void 0===n?Array:n)(0===t?0:t)},st=[].push,lt=function(e){var t=1==e,n=2==e,i=3==e,r=4==e,a=6==e,o=5==e||a;return function(s,l,c,u){for(var h,f,p=Ne(s),m=d(p),g=rt(l,c,3),v=le(m.length),y=0,b=u||ot,w=t?b(s,v):n?b(s,0):void 0;v>y;y++)if((o||y in m)&&(f=g(h=m[y],y,p),e))if(t)w[y]=f;else if(f)switch(e){case 3:return!0;case 5:return h;case 6:return y;case 2:st.call(w,h)}else if(r)return!1;return a?-1:i||r?r:w}},ct={forEach:lt(0),map:lt(1),filter:lt(2),some:lt(3),every:lt(4),find:lt(5),findIndex:lt(6)},ut=ct.forEach,ht=z("hidden"),ft=Xe("toPrimitive"),dt=Z.set,pt=Z.getterFor("Symbol"),mt=Object.prototype,gt=i.Symbol,vt=ie("JSON","stringify"),yt=A.f,bt=P.f,wt=Ke.f,kt=l.f,Tt=D("symbols"),St=D("op-symbols"),Et=D("string-to-symbol-registry"),At=D("symbol-to-string-registry"),xt=D("wks"),Ct=i.QObject,Pt=!Ct||!Ct.prototype||!Ct.prototype.findChild,It=a&&r((function(){return 7!=Be(bt({},"a",{get:function(){return bt(this,"a",{value:7}).a}})).a}))?function(e,t,n){var i=yt(mt,t);i&&delete mt[t],bt(e,t,n),i&&e!==mt&&bt(mt,t,i)}:bt,Ot=function(e,t){var n=Tt[e]=Be(gt.prototype);return dt(n,{type:"Symbol",tag:e,description:t}),a||(n.description=t),n},Lt=je?function(e){return"symbol"==typeof e}:function(e){return Object(e)instanceof gt},jt=function(e,t,n){e===mt&&jt(St,t,n),x(e);var i=v(t,!0);return x(n),b(Tt,i)?(n.enumerable?(b(e,ht)&&e[ht][i]&&(e[ht][i]=!1),n=Be(n,{enumerable:c(0,!1)})):(b(e,ht)||bt(e,ht,c(1,{})),e[ht][i]=!0),It(e,i,n)):bt(e,i,n)},Mt=function(e,t){x(e);var n=m(t),i=Re(n).concat(Ut(n));return ut(i,(function(t){a&&!Nt.call(n,t)||jt(e,t,n[t])})),e},Nt=function(e){var t=v(e,!0),n=kt.call(this,t);return!(this===mt&&b(Tt,t)&&!b(St,t))&&(!(n||!b(this,t)||!b(Tt,t)||b(this,ht)&&this[ht][t])||n)},Rt=function(e,t){var n=m(e),i=v(t,!0);if(n!==mt||!b(Tt,i)||b(St,i)){var r=yt(n,i);return!r||!b(Tt,i)||b(n,ht)&&n[ht][i]||(r.enumerable=!0),r}},_t=function(e){var t=wt(m(e)),n=[];return ut(t,(function(e){b(Tt,e)||b(W,e)||n.push(e)})),n},Ut=function(e){var t=e===mt,n=wt(t?St:m(e)),i=[];return ut(n,(function(e){!b(Tt,e)||t&&!b(mt,e)||i.push(Tt[e])})),i};if(Le||(ee((gt=function(){if(this instanceof gt)throw TypeError("Symbol is not a constructor");var e=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,t=B(e),n=function(e){this===mt&&n.call(St,e),b(this,ht)&&b(this[ht],t)&&(this[ht][t]=!1),It(this,t,c(1,e))};return a&&Pt&&It(mt,t,{configurable:!0,set:n}),Ot(t,e)}).prototype,"toString",(function(){return pt(this).tag})),ee(gt,"withoutSetter",(function(e){return Ot(B(e),e)})),l.f=Nt,P.f=jt,A.f=Rt,ye.f=Ke.f=_t,be.f=Ut,Qe.f=function(e){return Ot(Xe(e),e)},a&&(bt(gt.prototype,"description",{configurable:!0,get:function(){return pt(this).description}}),ee(mt,"propertyIsEnumerable",Nt,{unsafe:!0}))),Oe({global:!0,wrap:!0,forced:!Le,sham:!Le},{Symbol:gt}),ut(Re(xt),(function(e){Ze(e)})),Oe({target:"Symbol",stat:!0,forced:!Le},{for:function(e){var t=String(e);if(b(Et,t))return Et[t];var n=gt(t);return Et[t]=n,At[n]=t,n},keyFor:function(e){if(!Lt(e))throw TypeError(e+" is not a symbol");if(b(At,e))return At[e]},useSetter:function(){Pt=!0},useSimple:function(){Pt=!1}}),Oe({target:"Object",stat:!0,forced:!Le,sham:!a},{create:function(e,t){return void 0===t?Be(e):Mt(Be(e),t)},defineProperty:jt,defineProperties:Mt,getOwnPropertyDescriptor:Rt}),Oe({target:"Object",stat:!0,forced:!Le},{getOwnPropertyNames:_t,getOwnPropertySymbols:Ut}),Oe({target:"Object",stat:!0,forced:r((function(){be.f(1)}))},{getOwnPropertySymbols:function(e){return be.f(Ne(e))}}),vt){var Ft=!Le||r((function(){var e=gt();return"[null]"!=vt([e])||"{}"!=vt({a:e})||"{}"!=vt(Object(e))}));Oe({target:"JSON",stat:!0,forced:Ft},{stringify:function(e,t,n){for(var i,r=[e],a=1;arguments.length>a;)r.push(arguments[a++]);if(i=t,(g(t)||void 0!==e)&&!Lt(e))return Me(t)||(t=function(e,t){if("function"==typeof i&&(t=i.call(this,e,t)),!Lt(t))return t}),r[1]=t,vt.apply(null,r)}})}gt.prototype[ft]||I(gt.prototype,ft,gt.prototype.valueOf),nt(gt,"Symbol"),W[ht]=!0;var Dt=P.f,qt=i.Symbol;if(a&&"function"==typeof qt&&(!("description"in qt.prototype)||void 0!==qt().description)){var Ht={},Bt=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),t=this instanceof Bt?new qt(e):void 0===e?qt():qt(e);return""===e&&(Ht[t]=!0),t};ke(Bt,qt);var Vt=Bt.prototype=qt.prototype;Vt.constructor=Bt;var zt=Vt.toString,Wt="Symbol(test)"==String(qt("test")),Kt=/^Symbol\((.*)\)[^)]+$/;Dt(Vt,"description",{configurable:!0,get:function(){var e=g(this)?this.valueOf():this,t=zt.call(e);if(b(Ht,e))return"";var n=Wt?t.slice(7,-1):t.replace(Kt,"$1");return""===n?void 0:n}}),Oe({global:!0,forced:!0},{Symbol:Bt})}Ze("iterator");var $t=function(e,t){var n=[][e];return!!n&&r((function(){n.call(null,t||function(){throw 1},1)}))},Yt=Object.defineProperty,Gt={},Xt=function(e){throw e},Qt=function(e,t){if(b(Gt,e))return Gt[e];t||(t={});var n=[][e],i=!!b(t,"ACCESSORS")&&t.ACCESSORS,o=b(t,0)?t[0]:Xt,s=b(t,1)?t[1]:void 0;return Gt[e]=!!n&&!r((function(){if(i&&!a)return!0;var e={length:-1};i?Yt(e,1,{enumerable:!0,get:Xt}):e[1]=1,n.call(e,o,s)}))},Jt=ct.forEach,Zt=$t("forEach"),en=Qt("forEach"),tn=Zt&&en?[].forEach:function(e){return Jt(this,e,arguments.length>1?arguments[1]:void 0)};Oe({target:"Array",proto:!0,forced:[].forEach!=tn},{forEach:tn});var nn=de.indexOf,rn=[].indexOf,an=!!rn&&1/[1].indexOf(1,-0)<0,on=$t("indexOf"),sn=Qt("indexOf",{ACCESSORS:!0,1:0});Oe({target:"Array",proto:!0,forced:an||!on||!sn},{indexOf:function(e){return an?rn.apply(this,arguments)||0:nn(this,e,arguments.length>1?arguments[1]:void 0)}});var ln=Xe("unscopables"),cn=Array.prototype;null==cn[ln]&&P.f(cn,ln,{configurable:!0,value:Be(null)});var un,hn,fn,dn=function(e){cn[ln][e]=!0},pn={},mn=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype})),gn=z("IE_PROTO"),vn=Object.prototype,yn=mn?Object.getPrototypeOf:function(e){return e=Ne(e),b(e,gn)?e[gn]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?vn:null},bn=Xe("iterator"),wn=!1;[].keys&&("next"in(fn=[].keys())?(hn=yn(yn(fn)))!==Object.prototype&&(un=hn):wn=!0),null==un&&(un={}),b(un,bn)||I(un,bn,(function(){return this}));var kn={IteratorPrototype:un,BUGGY_SAFARI_ITERATORS:wn},Tn=kn.IteratorPrototype,Sn=function(){return this},En=function(e,t,n){var i=t+" Iterator";return e.prototype=Be(Tn,{next:c(1,n)}),nt(e,i,!1),pn[i]=Sn,e},An=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{(e=Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set).call(n,[]),t=n instanceof Array}catch(e){}return function(n,i){return x(n),function(e){if(!g(e)&&null!==e)throw TypeError("Can't set "+String(e)+" as a prototype")}(i),t?e.call(n,i):n.__proto__=i,n}}():void 0),xn=kn.IteratorPrototype,Cn=kn.BUGGY_SAFARI_ITERATORS,Pn=Xe("iterator"),In=function(){return this},On=function(e,t,n,i,r,a,o){En(n,t,i);var s,l,c,u=function(e){if(e===r&&m)return m;if(!Cn&&e in d)return d[e];switch(e){case"keys":case"values":case"entries":return function(){return new n(this,e)}}return function(){return new n(this)}},h=t+" Iterator",f=!1,d=e.prototype,p=d[Pn]||d["@@iterator"]||r&&d[r],m=!Cn&&p||u(r),g="Array"==t&&d.entries||p;if(g&&(s=yn(g.call(new e)),xn!==Object.prototype&&s.next&&(yn(s)!==xn&&(An?An(s,xn):"function"!=typeof s[Pn]&&I(s,Pn,In)),nt(s,h,!0))),"values"==r&&p&&"values"!==p.name&&(f=!0,m=function(){return p.call(this)}),d[Pn]!==m&&I(d,Pn,m),pn[t]=m,r)if(l={values:u("values"),keys:a?m:u("keys"),entries:u("entries")},o)for(c in l)!Cn&&!f&&c in d||ee(d,c,l[c]);else Oe({target:t,proto:!0,forced:Cn||f},l);return l},Ln=Z.set,jn=Z.getterFor("Array Iterator"),Mn=On(Array,"Array",(function(e,t){Ln(this,{type:"Array Iterator",target:m(e),index:0,kind:t})}),(function(){var e=jn(this),t=e.target,n=e.kind,i=e.index++;return!t||i>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:i,done:!1}:"values"==n?{value:t[i],done:!1}:{value:[i,t[i]],done:!1}}),"values");pn.Arguments=pn.Array,dn("keys"),dn("values"),dn("entries");var Nn=[].join,Rn=d!=Object,_n=$t("join",",");Oe({target:"Array",proto:!0,forced:Rn||!_n},{join:function(e){return Nn.call(m(this),void 0===e?",":e)}});var Un,Fn,Dn=function(e,t,n){var i=v(t);i in e?P.f(e,i,c(0,n)):e[i]=n},qn=ie("navigator","userAgent")||"",Hn=i.process,Bn=Hn&&Hn.versions,Vn=Bn&&Bn.v8;Vn?Fn=(Un=Vn.split("."))[0]+Un[1]:qn&&(!(Un=qn.match(/Edge\/(\d+)/))||Un[1]>=74)&&(Un=qn.match(/Chrome\/(\d+)/))&&(Fn=Un[1]);var zn=Fn&&+Fn,Wn=Xe("species"),Kn=function(e){return zn>=51||!r((function(){var t=[];return(t.constructor={})[Wn]=function(){return{foo:1}},1!==t[e](Boolean).foo}))},$n=Kn("slice"),Yn=Qt("slice",{ACCESSORS:!0,0:0,1:2}),Gn=Xe("species"),Xn=[].slice,Qn=Math.max;Oe({target:"Array",proto:!0,forced:!$n||!Yn},{slice:function(e,t){var n,i,r,a=m(this),o=le(a.length),s=he(e,o),l=he(void 0===t?o:t,o);if(Me(a)&&("function"!=typeof(n=a.constructor)||n!==Array&&!Me(n.prototype)?g(n)&&null===(n=n[Gn])&&(n=void 0):n=void 0,n===Array||void 0===n))return Xn.call(a,s,l);for(i=new(void 0===n?Array:n)(Qn(l-s,0)),r=0;s<l;s++,r++)s in a&&Dn(i,r,a[s]);return i.length=r,i}});var Jn={};Jn[Xe("toStringTag")]="z";var Zn="[object z]"===String(Jn),ei=Xe("toStringTag"),ti="Arguments"==h(function(){return arguments}()),ni=Zn?h:function(e){var t,n,i;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=function(e,t){try{return e[t]}catch(e){}}(t=Object(e),ei))?n:ti?h(t):"Object"==(i=h(t))&&"function"==typeof t.callee?"Arguments":i},ii=Zn?{}.toString:function(){return"[object "+ni(this)+"]"};Zn||ee(Object.prototype,"toString",ii,{unsafe:!0});var ri=function(){var e=x(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t};function ai(e,t){return RegExp(e,t)}var oi={UNSUPPORTED_Y:r((function(){var e=ai("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),BROKEN_CARET:r((function(){var e=ai("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},si=RegExp.prototype.exec,li=String.prototype.replace,ci=si,ui=function(){var e=/a/,t=/b*/g;return si.call(e,"a"),si.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),hi=oi.UNSUPPORTED_Y||oi.BROKEN_CARET,fi=void 0!==/()??/.exec("")[1];(ui||fi||hi)&&(ci=function(e){var t,n,i,r,a=this,o=hi&&a.sticky,s=ri.call(a),l=a.source,c=0,u=e;return o&&(-1===(s=s.replace("y","")).indexOf("g")&&(s+="g"),u=String(e).slice(a.lastIndex),a.lastIndex>0&&(!a.multiline||a.multiline&&"\n"!==e[a.lastIndex-1])&&(l="(?: "+l+")",u=" "+u,c++),n=new RegExp("^(?:"+l+")",s)),fi&&(n=new RegExp("^"+l+"$(?!\\s)",s)),ui&&(t=a.lastIndex),i=si.call(o?n:a,u),o?i?(i.input=i.input.slice(c),i[0]=i[0].slice(c),i.index=a.lastIndex,a.lastIndex+=i[0].length):a.lastIndex=0:ui&&i&&(a.lastIndex=a.global?i.index+i[0].length:t),fi&&i&&i.length>1&&li.call(i[0],n,(function(){for(r=1;r<arguments.length-2;r++)void 0===arguments[r]&&(i[r]=void 0)})),i});var di=ci;Oe({target:"RegExp",proto:!0,forced:/./.exec!==di},{exec:di});var pi=RegExp.prototype,mi=pi.toString,gi=r((function(){return"/a/b"!=mi.call({source:"a",flags:"b"})})),vi="toString"!=mi.name;(gi||vi)&&ee(RegExp.prototype,"toString",(function(){var e=x(this),t=String(e.source),n=e.flags;return"/"+t+"/"+String(void 0===n&&e instanceof RegExp&&!("flags"in pi)?ri.call(e):n)}),{unsafe:!0});var yi=function(e){return function(t,n){var i,r,a=String(p(t)),o=oe(n),s=a.length;return o<0||o>=s?e?"":void 0:(i=a.charCodeAt(o))<55296||i>56319||o+1===s||(r=a.charCodeAt(o+1))<56320||r>57343?e?a.charAt(o):i:e?a.slice(o,o+2):r-56320+(i-55296<<10)+65536}},bi={codeAt:yi(!1),charAt:yi(!0)},wi=bi.charAt,ki=Z.set,Ti=Z.getterFor("String Iterator");On(String,"String",(function(e){ki(this,{type:"String Iterator",string:String(e),index:0})}),(function(){var e,t=Ti(this),n=t.string,i=t.index;return i>=n.length?{value:void 0,done:!0}:(e=wi(n,i),t.index+=e.length,{value:e,done:!1})}));var Si=Xe("species"),Ei=!r((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),Ai="$0"==="a".replace(/./,"$0"),xi=Xe("replace"),Ci=!!/./[xi]&&""===/./[xi]("a","$0"),Pi=!r((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]})),Ii=function(e,t,n,i){var a=Xe(e),o=!r((function(){var t={};return t[a]=function(){return 7},7!=""[e](t)})),s=o&&!r((function(){var t=!1,n=/a/;return"split"===e&&((n={}).constructor={},n.constructor[Si]=function(){return n},n.flags="",n[a]=/./[a]),n.exec=function(){return t=!0,null},n[a](""),!t}));if(!o||!s||"replace"===e&&(!Ei||!Ai||Ci)||"split"===e&&!Pi){var l=/./[a],c=n(a,""[e],(function(e,t,n,i,r){return t.exec===di?o&&!r?{done:!0,value:l.call(t,n,i)}:{done:!0,value:e.call(n,t,i)}:{done:!1}}),{REPLACE_KEEPS_$0:Ai,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:Ci}),u=c[0],h=c[1];ee(String.prototype,e,u),ee(RegExp.prototype,a,2==t?function(e,t){return h.call(e,this,t)}:function(e){return h.call(e,this)})}i&&I(RegExp.prototype[a],"sham",!0)},Oi=bi.charAt,Li=function(e,t,n){return t+(n?Oi(e,t).length:1)},ji=function(e,t){var n=e.exec;if("function"==typeof n){var i=n.call(e,t);if("object"!=typeof i)throw TypeError("RegExp exec method returned something other than an Object or null");return i}if("RegExp"!==h(e))throw TypeError("RegExp#exec called on incompatible receiver");return di.call(e,t)},Mi=Math.max,Ni=Math.min,Ri=Math.floor,_i=/\$([$&'`]|\d\d?|<[^>]*>)/g,Ui=/\$([$&'`]|\d\d?)/g;Ii("replace",2,(function(e,t,n,i){var r=i.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,a=i.REPLACE_KEEPS_$0,o=r?"$":"$0";return[function(n,i){var r=p(this),a=null==n?void 0:n[e];return void 0!==a?a.call(n,r,i):t.call(String(r),n,i)},function(e,i){if(!r&&a||"string"==typeof i&&-1===i.indexOf(o)){var l=n(t,e,this,i);if(l.done)return l.value}var c=x(e),u=String(this),h="function"==typeof i;h||(i=String(i));var f=c.global;if(f){var d=c.unicode;c.lastIndex=0}for(var p=[];;){var m=ji(c,u);if(null===m)break;if(p.push(m),!f)break;""===String(m[0])&&(c.lastIndex=Li(u,le(c.lastIndex),d))}for(var g,v="",y=0,b=0;b<p.length;b++){m=p[b];for(var w=String(m[0]),k=Mi(Ni(oe(m.index),u.length),0),T=[],S=1;S<m.length;S++)T.push(void 0===(g=m[S])?g:String(g));var E=m.groups;if(h){var A=[w].concat(T,k,u);void 0!==E&&A.push(E);var C=String(i.apply(void 0,A))}else C=s(w,u,k,T,E,i);k>=y&&(v+=u.slice(y,k)+C,y=k+w.length)}return v+u.slice(y)}];function s(e,n,i,r,a,o){var s=i+e.length,l=r.length,c=Ui;return void 0!==a&&(a=Ne(a),c=_i),t.call(o,c,(function(t,o){var c;switch(o.charAt(0)){case"$":return"$";case"&":return e;case"`":return n.slice(0,i);case"'":return n.slice(s);case"<":c=a[o.slice(1,-1)];break;default:var u=+o;if(0===u)return t;if(u>l){var h=Ri(u/10);return 0===h?t:h<=l?void 0===r[h-1]?o.charAt(1):r[h-1]+o.charAt(1):t}c=r[u-1]}return void 0===c?"":c}))}}));var Fi=Object.is||function(e,t){return e===t?0!==e||1/e==1/t:e!=e&&t!=t};Ii("search",1,(function(e,t,n){return[function(t){var n=p(this),i=null==t?void 0:t[e];return void 0!==i?i.call(t,n):new RegExp(t)[e](String(n))},function(e){var i=n(t,e,this);if(i.done)return i.value;var r=x(e),a=String(this),o=r.lastIndex;Fi(o,0)||(r.lastIndex=0);var s=ji(r,a);return Fi(r.lastIndex,o)||(r.lastIndex=o),null===s?-1:s.index}]}));var Di=Xe("match"),qi=function(e){var t;return g(e)&&(void 0!==(t=e[Di])?!!t:"RegExp"==h(e))},Hi=Xe("species"),Bi=function(e,t){var n,i=x(e).constructor;return void 0===i||null==(n=x(i)[Hi])?t:it(n)},Vi=[].push,zi=Math.min,Wi=!r((function(){return!RegExp(4294967295,"y")}));Ii("split",2,(function(e,t,n){var i;return i="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,n){var i=String(p(this)),r=void 0===n?4294967295:n>>>0;if(0===r)return[];if(void 0===e)return[i];if(!qi(e))return t.call(i,e,r);for(var a,o,s,l=[],c=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),u=0,h=new RegExp(e.source,c+"g");(a=di.call(h,i))&&!((o=h.lastIndex)>u&&(l.push(i.slice(u,a.index)),a.length>1&&a.index<i.length&&Vi.apply(l,a.slice(1)),s=a[0].length,u=o,l.length>=r));)h.lastIndex===a.index&&h.lastIndex++;return u===i.length?!s&&h.test("")||l.push(""):l.push(i.slice(u)),l.length>r?l.slice(0,r):l}:"0".split(void 0,0).length?function(e,n){return void 0===e&&0===n?[]:t.call(this,e,n)}:t,[function(t,n){var r=p(this),a=null==t?void 0:t[e];return void 0!==a?a.call(t,r,n):i.call(String(r),t,n)},function(e,r){var a=n(i,e,this,r,i!==t);if(a.done)return a.value;var o=x(e),s=String(this),l=Bi(o,RegExp),c=o.unicode,u=(o.ignoreCase?"i":"")+(o.multiline?"m":"")+(o.unicode?"u":"")+(Wi?"y":"g"),h=new l(Wi?o:"^(?:"+o.source+")",u),f=void 0===r?4294967295:r>>>0;if(0===f)return[];if(0===s.length)return null===ji(h,s)?[s]:[];for(var d=0,p=0,m=[];p<s.length;){h.lastIndex=Wi?p:0;var g,v=ji(h,Wi?s:s.slice(p));if(null===v||(g=zi(le(h.lastIndex+(Wi?0:p)),s.length))===d)p=Li(s,p,c);else{if(m.push(s.slice(d,p)),m.length===f)return m;for(var y=1;y<=v.length-1;y++)if(m.push(v[y]),m.length===f)return m;p=d=g}}return m.push(s.slice(d)),m}]}),!Wi);var Ki={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0};for(var $i in Ki){var Yi=i[$i],Gi=Yi&&Yi.prototype;if(Gi&&Gi.forEach!==tn)try{I(Gi,"forEach",tn)}catch(e){Gi.forEach=tn}}var Xi=Xe("iterator"),Qi=Xe("toStringTag"),Ji=Mn.values;for(var Zi in Ki){var er=i[Zi],tr=er&&er.prototype;if(tr){if(tr[Xi]!==Ji)try{I(tr,Xi,Ji)}catch(e){tr[Xi]=Ji}if(tr[Qi]||I(tr,Qi,Zi),Ki[Zi])for(var nr in Mn)if(tr[nr]!==Mn[nr])try{I(tr,nr,Mn[nr])}catch(e){tr[nr]=Mn[nr]}}}var ir=Xe("iterator"),rr=!r((function(){var e=new URL("b?a=1&b=2&c=3","http://a"),t=e.searchParams,n="";return e.pathname="c%20d",t.forEach((function(e,i){t.delete("b"),n+=i+e})),!t.sort||"http://a/c%20d?a=1&c=3"!==e.href||"3"!==t.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!t[ir]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==n||"x"!==new URL("http://x",void 0).host})),ar=function(e,t,n){if(!(e instanceof t))throw TypeError("Incorrect "+(n?n+" ":"")+"invocation");return e},or=Object.assign,sr=Object.defineProperty,lr=!or||r((function(){if(a&&1!==or({b:1},or(sr({},"a",{enumerable:!0,get:function(){sr(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol();return e[n]=7,"abcdefghijklmnopqrst".split("").forEach((function(e){t[e]=e})),7!=or({},e)[n]||"abcdefghijklmnopqrst"!=Re(or({},t)).join("")}))?function(e,t){for(var n=Ne(e),i=arguments.length,r=1,o=be.f,s=l.f;i>r;)for(var c,u=d(arguments[r++]),h=o?Re(u).concat(o(u)):Re(u),f=h.length,p=0;f>p;)c=h[p++],a&&!s.call(u,c)||(n[c]=u[c]);return n}:or,cr=function(e,t,n,i){try{return i?t(x(n)[0],n[1]):t(n)}catch(t){var r=e.return;throw void 0!==r&&x(r.call(e)),t}},ur=Xe("iterator"),hr=Array.prototype,fr=function(e){return void 0!==e&&(pn.Array===e||hr[ur]===e)},dr=Xe("iterator"),pr=function(e){if(null!=e)return e[dr]||e["@@iterator"]||pn[ni(e)]},mr=function(e){var t,n,i,r,a,o,s=Ne(e),l="function"==typeof this?this:Array,c=arguments.length,u=c>1?arguments[1]:void 0,h=void 0!==u,f=pr(s),d=0;if(h&&(u=rt(u,c>2?arguments[2]:void 0,2)),null==f||l==Array&&fr(f))for(n=new l(t=le(s.length));t>d;d++)o=h?u(s[d],d):s[d],Dn(n,d,o);else for(a=(r=f.call(s)).next,n=new l;!(i=a.call(r)).done;d++)o=h?cr(r,u,[i.value,d],!0):i.value,Dn(n,d,o);return n.length=d,n},gr=/[^\0-\u007E]/,vr=/[.\u3002\uFF0E\uFF61]/g,yr="Overflow: input needs wider integers to process",br=Math.floor,wr=String.fromCharCode,kr=function(e){return e+22+75*(e<26)},Tr=function(e,t,n){var i=0;for(e=n?br(e/700):e>>1,e+=br(e/t);e>455;i+=36)e=br(e/35);return br(i+36*e/(e+38))},Sr=function(e){var t,n,i=[],r=(e=function(e){for(var t=[],n=0,i=e.length;n<i;){var r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<i){var a=e.charCodeAt(n++);56320==(64512&a)?t.push(((1023&r)<<10)+(1023&a)+65536):(t.push(r),n--)}else t.push(r)}return t}(e)).length,a=128,o=0,s=72;for(t=0;t<e.length;t++)(n=e[t])<128&&i.push(wr(n));var l=i.length,c=l;for(l&&i.push("-");c<r;){var u=2147483647;for(t=0;t<e.length;t++)(n=e[t])>=a&&n<u&&(u=n);var h=c+1;if(u-a>br((2147483647-o)/h))throw RangeError(yr);for(o+=(u-a)*h,a=u,t=0;t<e.length;t++){if((n=e[t])<a&&++o>2147483647)throw RangeError(yr);if(n==a){for(var f=o,d=36;;d+=36){var p=d<=s?1:d>=s+26?26:d-s;if(f<p)break;var m=f-p,g=36-p;i.push(wr(kr(p+m%g))),f=br(m/g)}i.push(wr(kr(f))),s=Tr(o,h,c==l),o=0,++c}}++o,++a}return i.join("")},Er=function(e,t,n){for(var i in t)ee(e,i,t[i],n);return e},Ar=function(e){var t=pr(e);if("function"!=typeof t)throw TypeError(String(e)+" is not iterable");return x(t.call(e))},xr=ie("fetch"),Cr=ie("Headers"),Pr=Xe("iterator"),Ir=Z.set,Or=Z.getterFor("URLSearchParams"),Lr=Z.getterFor("URLSearchParamsIterator"),jr=/\+/g,Mr=Array(4),Nr=function(e){return Mr[e-1]||(Mr[e-1]=RegExp("((?:%[\\da-f]{2}){"+e+"})","gi"))},Rr=function(e){try{return decodeURIComponent(e)}catch(t){return e}},_r=function(e){var t=e.replace(jr," "),n=4;try{return decodeURIComponent(t)}catch(e){for(;n;)t=t.replace(Nr(n--),Rr);return t}},Ur=/[!'()~]|%20/g,Fr={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},Dr=function(e){return Fr[e]},qr=function(e){return encodeURIComponent(e).replace(Ur,Dr)},Hr=function(e,t){if(t)for(var n,i,r=t.split("&"),a=0;a<r.length;)(n=r[a++]).length&&(i=n.split("="),e.push({key:_r(i.shift()),value:_r(i.join("="))}))},Br=function(e){this.entries.length=0,Hr(this.entries,e)},Vr=function(e,t){if(e<t)throw TypeError("Not enough arguments")},zr=En((function(e,t){Ir(this,{type:"URLSearchParamsIterator",iterator:Ar(Or(e).entries),kind:t})}),"Iterator",(function(){var e=Lr(this),t=e.kind,n=e.iterator.next(),i=n.value;return n.done||(n.value="keys"===t?i.key:"values"===t?i.value:[i.key,i.value]),n})),Wr=function(){ar(this,Wr,"URLSearchParams");var e,t,n,i,r,a,o,s,l,c=arguments.length>0?arguments[0]:void 0,u=this,h=[];if(Ir(u,{type:"URLSearchParams",entries:h,updateURL:function(){},updateSearchParams:Br}),void 0!==c)if(g(c))if("function"==typeof(e=pr(c)))for(n=(t=e.call(c)).next;!(i=n.call(t)).done;){if((o=(a=(r=Ar(x(i.value))).next).call(r)).done||(s=a.call(r)).done||!a.call(r).done)throw TypeError("Expected sequence with length 2");h.push({key:o.value+"",value:s.value+""})}else for(l in c)b(c,l)&&h.push({key:l,value:c[l]+""});else Hr(h,"string"==typeof c?"?"===c.charAt(0)?c.slice(1):c:c+"")},Kr=Wr.prototype;Er(Kr,{append:function(e,t){Vr(arguments.length,2);var n=Or(this);n.entries.push({key:e+"",value:t+""}),n.updateURL()},delete:function(e){Vr(arguments.length,1);for(var t=Or(this),n=t.entries,i=e+"",r=0;r<n.length;)n[r].key===i?n.splice(r,1):r++;t.updateURL()},get:function(e){Vr(arguments.length,1);for(var t=Or(this).entries,n=e+"",i=0;i<t.length;i++)if(t[i].key===n)return t[i].value;return null},getAll:function(e){Vr(arguments.length,1);for(var t=Or(this).entries,n=e+"",i=[],r=0;r<t.length;r++)t[r].key===n&&i.push(t[r].value);return i},has:function(e){Vr(arguments.length,1);for(var t=Or(this).entries,n=e+"",i=0;i<t.length;)if(t[i++].key===n)return!0;return!1},set:function(e,t){Vr(arguments.length,1);for(var n,i=Or(this),r=i.entries,a=!1,o=e+"",s=t+"",l=0;l<r.length;l++)(n=r[l]).key===o&&(a?r.splice(l--,1):(a=!0,n.value=s));a||r.push({key:o,value:s}),i.updateURL()},sort:function(){var e,t,n,i=Or(this),r=i.entries,a=r.slice();for(r.length=0,n=0;n<a.length;n++){for(e=a[n],t=0;t<n;t++)if(r[t].key>e.key){r.splice(t,0,e);break}t===n&&r.push(e)}i.updateURL()},forEach:function(e){for(var t,n=Or(this).entries,i=rt(e,arguments.length>1?arguments[1]:void 0,3),r=0;r<n.length;)i((t=n[r++]).value,t.key,this)},keys:function(){return new zr(this,"keys")},values:function(){return new zr(this,"values")},entries:function(){return new zr(this,"entries")}},{enumerable:!0}),ee(Kr,Pr,Kr.entries),ee(Kr,"toString",(function(){for(var e,t=Or(this).entries,n=[],i=0;i<t.length;)e=t[i++],n.push(qr(e.key)+"="+qr(e.value));return n.join("&")}),{enumerable:!0}),nt(Wr,"URLSearchParams"),Oe({global:!0,forced:!rr},{URLSearchParams:Wr}),rr||"function"!=typeof xr||"function"!=typeof Cr||Oe({global:!0,enumerable:!0,forced:!0},{fetch:function(e){var t,n,i,r=[e];return arguments.length>1&&(t=arguments[1],g(t)&&(n=t.body,"URLSearchParams"===ni(n)&&((i=t.headers?new Cr(t.headers):new Cr).has("content-type")||i.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"),t=Be(t,{body:c(0,String(n)),headers:c(0,i)}))),r.push(t)),xr.apply(this,r)}});var $r,Yr={URLSearchParams:Wr,getState:Or},Gr=bi.codeAt,Xr=i.URL,Qr=Yr.URLSearchParams,Jr=Yr.getState,Zr=Z.set,ea=Z.getterFor("URL"),ta=Math.floor,na=Math.pow,ia=/[A-Za-z]/,ra=/[\d+\-.A-Za-z]/,aa=/\d/,oa=/^(0x|0X)/,sa=/^[0-7]+$/,la=/^\d+$/,ca=/^[\dA-Fa-f]+$/,ua=/[\u0000\u0009\u000A\u000D #%/:?@[\\]]/,ha=/[\u0000\u0009\u000A\u000D #/:?@[\\]]/,fa=/^[\u0000-\u001F ]+|[\u0000-\u001F ]+$/g,da=/[\u0009\u000A\u000D]/g,pa=function(e,t){var n,i,r;if("["==t.charAt(0)){if("]"!=t.charAt(t.length-1))return"Invalid host";if(!(n=ga(t.slice(1,-1))))return"Invalid host";e.host=n}else if(Ea(e)){if(t=function(e){var t,n,i=[],r=e.toLowerCase().replace(vr,".").split(".");for(t=0;t<r.length;t++)n=r[t],i.push(gr.test(n)?"xn--"+Sr(n):n);return i.join(".")}(t),ua.test(t))return"Invalid host";if(null===(n=ma(t)))return"Invalid host";e.host=n}else{if(ha.test(t))return"Invalid host";for(n="",i=mr(t),r=0;r<i.length;r++)n+=Ta(i[r],ya);e.host=n}},ma=function(e){var t,n,i,r,a,o,s,l=e.split(".");if(l.length&&""==l[l.length-1]&&l.pop(),(t=l.length)>4)return e;for(n=[],i=0;i<t;i++){if(""==(r=l[i]))return e;if(a=10,r.length>1&&"0"==r.charAt(0)&&(a=oa.test(r)?16:8,r=r.slice(8==a?1:2)),""===r)o=0;else{if(!(10==a?la:8==a?sa:ca).test(r))return e;o=parseInt(r,a)}n.push(o)}for(i=0;i<t;i++)if(o=n[i],i==t-1){if(o>=na(256,5-t))return null}else if(o>255)return null;for(s=n.pop(),i=0;i<n.length;i++)s+=n[i]*na(256,3-i);return s},ga=function(e){var t,n,i,r,a,o,s,l=[0,0,0,0,0,0,0,0],c=0,u=null,h=0,f=function(){return e.charAt(h)};if(":"==f()){if(":"!=e.charAt(1))return;h+=2,u=++c}for(;f();){if(8==c)return;if(":"!=f()){for(t=n=0;n<4&&ca.test(f());)t=16*t+parseInt(f(),16),h++,n++;if("."==f()){if(0==n)return;if(h-=n,c>6)return;for(i=0;f();){if(r=null,i>0){if(!("."==f()&&i<4))return;h++}if(!aa.test(f()))return;for(;aa.test(f());){if(a=parseInt(f(),10),null===r)r=a;else{if(0==r)return;r=10*r+a}if(r>255)return;h++}l[c]=256*l[c]+r,2!=++i&&4!=i||c++}if(4!=i)return;break}if(":"==f()){if(h++,!f())return}else if(f())return;l[c++]=t}else{if(null!==u)return;h++,u=++c}}if(null!==u)for(o=c-u,c=7;0!=c&&o>0;)s=l[c],l[c--]=l[u+o-1],l[u+--o]=s;else if(8!=c)return;return l},va=function(e){var t,n,i,r;if("number"==typeof e){for(t=[],n=0;n<4;n++)t.unshift(e%256),e=ta(e/256);return t.join(".")}if("object"==typeof e){for(t="",i=function(e){for(var t=null,n=1,i=null,r=0,a=0;a<8;a++)0!==e[a]?(r>n&&(t=i,n=r),i=null,r=0):(null===i&&(i=a),++r);return r>n&&(t=i,n=r),t}(e),n=0;n<8;n++)r&&0===e[n]||(r&&(r=!1),i===n?(t+=n?":":"::",r=!0):(t+=e[n].toString(16),n<7&&(t+=":")));return"["+t+"]"}return e},ya={},ba=lr({},ya,{" ":1,'"':1,"<":1,">":1,"`":1}),wa=lr({},ba,{"#":1,"?":1,"{":1,"}":1}),ka=lr({},wa,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),Ta=function(e,t){var n=Gr(e,0);return n>32&&n<127&&!b(t,e)?e:encodeURIComponent(e)},Sa={ftp:21,file:null,http:80,https:443,ws:80,wss:443},Ea=function(e){return b(Sa,e.scheme)},Aa=function(e){return""!=e.username||""!=e.password},xa=function(e){return!e.host||e.cannotBeABaseURL||"file"==e.scheme},Ca=function(e,t){var n;return 2==e.length&&ia.test(e.charAt(0))&&(":"==(n=e.charAt(1))||!t&&"|"==n)},Pa=function(e){var t;return e.length>1&&Ca(e.slice(0,2))&&(2==e.length||"/"===(t=e.charAt(2))||"\\"===t||"?"===t||"#"===t)},Ia=function(e){var t=e.path,n=t.length;!n||"file"==e.scheme&&1==n&&Ca(t[0],!0)||t.pop()},Oa=function(e){return"."===e||"%2e"===e.toLowerCase()},La={},ja={},Ma={},Na={},Ra={},_a={},Ua={},Fa={},Da={},qa={},Ha={},Ba={},Va={},za={},Wa={},Ka={},$a={},Ya={},Ga={},Xa={},Qa={},Ja=function(e,t,n,i){var r,a,o,s,l,c=n||La,u=0,h="",f=!1,d=!1,p=!1;for(n||(e.scheme="",e.username="",e.password="",e.host=null,e.port=null,e.path=[],e.query=null,e.fragment=null,e.cannotBeABaseURL=!1,t=t.replace(fa,"")),t=t.replace(da,""),r=mr(t);u<=r.length;){switch(a=r[u],c){case La:if(!a||!ia.test(a)){if(n)return"Invalid scheme";c=Ma;continue}h+=a.toLowerCase(),c=ja;break;case ja:if(a&&(ra.test(a)||"+"==a||"-"==a||"."==a))h+=a.toLowerCase();else{if(":"!=a){if(n)return"Invalid scheme";h="",c=Ma,u=0;continue}if(n&&(Ea(e)!=b(Sa,h)||"file"==h&&(Aa(e)||null!==e.port)||"file"==e.scheme&&!e.host))return;if(e.scheme=h,n)return void(Ea(e)&&Sa[e.scheme]==e.port&&(e.port=null));h="","file"==e.scheme?c=za:Ea(e)&&i&&i.scheme==e.scheme?c=Na:Ea(e)?c=Fa:"/"==r[u+1]?(c=Ra,u++):(e.cannotBeABaseURL=!0,e.path.push(""),c=Ga)}break;case Ma:if(!i||i.cannotBeABaseURL&&"#"!=a)return"Invalid scheme";if(i.cannotBeABaseURL&&"#"==a){e.scheme=i.scheme,e.path=i.path.slice(),e.query=i.query,e.fragment="",e.cannotBeABaseURL=!0,c=Qa;break}c="file"==i.scheme?za:_a;continue;case Na:if("/"!=a||"/"!=r[u+1]){c=_a;continue}c=Da,u++;break;case Ra:if("/"==a){c=qa;break}c=Ya;continue;case _a:if(e.scheme=i.scheme,a==$r)e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,e.path=i.path.slice(),e.query=i.query;else if("/"==a||"\\"==a&&Ea(e))c=Ua;else if("?"==a)e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,e.path=i.path.slice(),e.query="",c=Xa;else{if("#"!=a){e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,e.path=i.path.slice(),e.path.pop(),c=Ya;continue}e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,e.path=i.path.slice(),e.query=i.query,e.fragment="",c=Qa}break;case Ua:if(!Ea(e)||"/"!=a&&"\\"!=a){if("/"!=a){e.username=i.username,e.password=i.password,e.host=i.host,e.port=i.port,c=Ya;continue}c=qa}else c=Da;break;case Fa:if(c=Da,"/"!=a||"/"!=h.charAt(u+1))continue;u++;break;case Da:if("/"!=a&&"\\"!=a){c=qa;continue}break;case qa:if("@"==a){f&&(h="%40"+h),f=!0,o=mr(h);for(var m=0;m<o.length;m++){var g=o[m];if(":"!=g||p){var v=Ta(g,ka);p?e.password+=v:e.username+=v}else p=!0}h=""}else if(a==$r||"/"==a||"?"==a||"#"==a||"\\"==a&&Ea(e)){if(f&&""==h)return"Invalid authority";u-=mr(h).length+1,h="",c=Ha}else h+=a;break;case Ha:case Ba:if(n&&"file"==e.scheme){c=Ka;continue}if(":"!=a||d){if(a==$r||"/"==a||"?"==a||"#"==a||"\\"==a&&Ea(e)){if(Ea(e)&&""==h)return"Invalid host";if(n&&""==h&&(Aa(e)||null!==e.port))return;if(s=pa(e,h))return s;if(h="",c=$a,n)return;continue}"["==a?d=!0:"]"==a&&(d=!1),h+=a}else{if(""==h)return"Invalid host";if(s=pa(e,h))return s;if(h="",c=Va,n==Ba)return}break;case Va:if(!aa.test(a)){if(a==$r||"/"==a||"?"==a||"#"==a||"\\"==a&&Ea(e)||n){if(""!=h){var y=parseInt(h,10);if(y>65535)return"Invalid port";e.port=Ea(e)&&y===Sa[e.scheme]?null:y,h=""}if(n)return;c=$a;continue}return"Invalid port"}h+=a;break;case za:if(e.scheme="file","/"==a||"\\"==a)c=Wa;else{if(!i||"file"!=i.scheme){c=Ya;continue}if(a==$r)e.host=i.host,e.path=i.path.slice(),e.query=i.query;else if("?"==a)e.host=i.host,e.path=i.path.slice(),e.query="",c=Xa;else{if("#"!=a){Pa(r.slice(u).join(""))||(e.host=i.host,e.path=i.path.slice(),Ia(e)),c=Ya;continue}e.host=i.host,e.path=i.path.slice(),e.query=i.query,e.fragment="",c=Qa}}break;case Wa:if("/"==a||"\\"==a){c=Ka;break}i&&"file"==i.scheme&&!Pa(r.slice(u).join(""))&&(Ca(i.path[0],!0)?e.path.push(i.path[0]):e.host=i.host),c=Ya;continue;case Ka:if(a==$r||"/"==a||"\\"==a||"?"==a||"#"==a){if(!n&&Ca(h))c=Ya;else if(""==h){if(e.host="",n)return;c=$a}else{if(s=pa(e,h))return s;if("localhost"==e.host&&(e.host=""),n)return;h="",c=$a}continue}h+=a;break;case $a:if(Ea(e)){if(c=Ya,"/"!=a&&"\\"!=a)continue}else if(n||"?"!=a)if(n||"#"!=a){if(a!=$r&&(c=Ya,"/"!=a))continue}else e.fragment="",c=Qa;else e.query="",c=Xa;break;case Ya:if(a==$r||"/"==a||"\\"==a&&Ea(e)||!n&&("?"==a||"#"==a)){if(".."===(l=(l=h).toLowerCase())||"%2e."===l||".%2e"===l||"%2e%2e"===l?(Ia(e),"/"==a||"\\"==a&&Ea(e)||e.path.push("")):Oa(h)?"/"==a||"\\"==a&&Ea(e)||e.path.push(""):("file"==e.scheme&&!e.path.length&&Ca(h)&&(e.host&&(e.host=""),h=h.charAt(0)+":"),e.path.push(h)),h="","file"==e.scheme&&(a==$r||"?"==a||"#"==a))for(;e.path.length>1&&""===e.path[0];)e.path.shift();"?"==a?(e.query="",c=Xa):"#"==a&&(e.fragment="",c=Qa)}else h+=Ta(a,wa);break;case Ga:"?"==a?(e.query="",c=Xa):"#"==a?(e.fragment="",c=Qa):a!=$r&&(e.path[0]+=Ta(a,ya));break;case Xa:n||"#"!=a?a!=$r&&("'"==a&&Ea(e)?e.query+="%27":e.query+="#"==a?"%23":Ta(a,ya)):(e.fragment="",c=Qa);break;case Qa:a!=$r&&(e.fragment+=Ta(a,ba))}u++}},Za=function(e){var t,n,i=ar(this,Za,"URL"),r=arguments.length>1?arguments[1]:void 0,o=String(e),s=Zr(i,{type:"URL"});if(void 0!==r)if(r instanceof Za)t=ea(r);else if(n=Ja(t={},String(r)))throw TypeError(n);if(n=Ja(s,o,null,t))throw TypeError(n);var l=s.searchParams=new Qr,c=Jr(l);c.updateSearchParams(s.query),c.updateURL=function(){s.query=String(l)||null},a||(i.href=to.call(i),i.origin=no.call(i),i.protocol=io.call(i),i.username=ro.call(i),i.password=ao.call(i),i.host=oo.call(i),i.hostname=so.call(i),i.port=lo.call(i),i.pathname=co.call(i),i.search=uo.call(i),i.searchParams=ho.call(i),i.hash=fo.call(i))},eo=Za.prototype,to=function(){var e=ea(this),t=e.scheme,n=e.username,i=e.password,r=e.host,a=e.port,o=e.path,s=e.query,l=e.fragment,c=t+":";return null!==r?(c+="//",Aa(e)&&(c+=n+(i?":"+i:"")+"@"),c+=va(r),null!==a&&(c+=":"+a)):"file"==t&&(c+="//"),c+=e.cannotBeABaseURL?o[0]:o.length?"/"+o.join("/"):"",null!==s&&(c+="?"+s),null!==l&&(c+="#"+l),c},no=function(){var e=ea(this),t=e.scheme,n=e.port;if("blob"==t)try{return new URL(t.path[0]).origin}catch(e){return"null"}return"file"!=t&&Ea(e)?t+"://"+va(e.host)+(null!==n?":"+n:""):"null"},io=function(){return ea(this).scheme+":"},ro=function(){return ea(this).username},ao=function(){return ea(this).password},oo=function(){var e=ea(this),t=e.host,n=e.port;return null===t?"":null===n?va(t):va(t)+":"+n},so=function(){var e=ea(this).host;return null===e?"":va(e)},lo=function(){var e=ea(this).port;return null===e?"":String(e)},co=function(){var e=ea(this),t=e.path;return e.cannotBeABaseURL?t[0]:t.length?"/"+t.join("/"):""},uo=function(){var e=ea(this).query;return e?"?"+e:""},ho=function(){return ea(this).searchParams},fo=function(){var e=ea(this).fragment;return e?"#"+e:""},po=function(e,t){return{get:e,set:t,configurable:!0,enumerable:!0}};if(a&&_e(eo,{href:po(to,(function(e){var t=ea(this),n=String(e),i=Ja(t,n);if(i)throw TypeError(i);Jr(t.searchParams).updateSearchParams(t.query)})),origin:po(no),protocol:po(io,(function(e){var t=ea(this);Ja(t,String(e)+":",La)})),username:po(ro,(function(e){var t=ea(this),n=mr(String(e));if(!xa(t)){t.username="";for(var i=0;i<n.length;i++)t.username+=Ta(n[i],ka)}})),password:po(ao,(function(e){var t=ea(this),n=mr(String(e));if(!xa(t)){t.password="";for(var i=0;i<n.length;i++)t.password+=Ta(n[i],ka)}})),host:po(oo,(function(e){var t=ea(this);t.cannotBeABaseURL||Ja(t,String(e),Ha)})),hostname:po(so,(function(e){var t=ea(this);t.cannotBeABaseURL||Ja(t,String(e),Ba)})),port:po(lo,(function(e){var t=ea(this);xa(t)||(""==(e=String(e))?t.port=null:Ja(t,e,Va))})),pathname:po(co,(function(e){var t=ea(this);t.cannotBeABaseURL||(t.path=[],Ja(t,e+"",$a))})),search:po(uo,(function(e){var t=ea(this);""==(e=String(e))?t.query=null:("?"==e.charAt(0)&&(e=e.slice(1)),t.query="",Ja(t,e,Xa)),Jr(t.searchParams).updateSearchParams(t.query)})),searchParams:po(ho),hash:po(fo,(function(e){var t=ea(this);""!=(e=String(e))?("#"==e.charAt(0)&&(e=e.slice(1)),t.fragment="",Ja(t,e,Qa)):t.fragment=null}))}),ee(eo,"toJSON",(function(){return to.call(this)}),{enumerable:!0}),ee(eo,"toString",(function(){return to.call(this)}),{enumerable:!0}),Xr){var mo=Xr.createObjectURL,go=Xr.revokeObjectURL;mo&&ee(Za,"createObjectURL",(function(e){return mo.apply(Xr,arguments)})),go&&ee(Za,"revokeObjectURL",(function(e){return go.apply(Xr,arguments)}))}function vo(e){return(vo="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function yo(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function bo(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function wo(e,t,n){return t&&bo(e.prototype,t),n&&bo(e,n),e}function ko(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function To(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function So(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?To(Object(n),!0).forEach((function(t){ko(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):To(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function Eo(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if(!(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e)))return;var n=[],i=!0,r=!1,a=void 0;try{for(var o,s=e[Symbol.iterator]();!(i=(o=s.next()).done)&&(n.push(o.value),!t||n.length!==t);i=!0);}catch(e){r=!0,a=e}finally{try{i||null==s.return||s.return()}finally{if(r)throw a}}return n}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function Ao(e){return function(e){if(Array.isArray(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}nt(Za,"URL"),Oe({global:!0,forced:!rr,sham:!a},{URL:Za}),function(e){var t=function(){try{return!!Symbol.iterator}catch(e){return!1}}(),n=function(e){var n={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return t&&(n[Symbol.iterator]=function(){return n}),n},i=function(e){return encodeURIComponent(e).replace(/%20/g,"+")},r=function(e){return decodeURIComponent(String(e).replace(/\+/g," "))};(function(){try{var t=e.URLSearchParams;return"a=1"===new t("?a=1").toString()&&"function"==typeof t.prototype.set}catch(e){return!1}})()||function(){var r=function e(t){Object.defineProperty(this,"_entries",{writable:!0,value:{}});var n=vo(t);if("undefined"===n);else if("string"===n)""!==t&&this._fromString(t);else if(t instanceof e){var i=this;t.forEach((function(e,t){i.append(t,e)}))}else{if(null===t||"object"!==n)throw new TypeError("Unsupported input's type for URLSearchParams");if("[object Array]"===Object.prototype.toString.call(t))for(var r=0;r<t.length;r++){var a=t[r];if("[object Array]"!==Object.prototype.toString.call(a)&&2===a.length)throw new TypeError("Expected [string, any] as entry at index "+r+" of URLSearchParams's input");this.append(a[0],a[1])}else for(var o in t)t.hasOwnProperty(o)&&this.append(o,t[o])}},a=r.prototype;a.append=function(e,t){e in this._entries?this._entries[e].push(String(t)):this._entries[e]=[String(t)]},a.delete=function(e){delete this._entries[e]},a.get=function(e){return e in this._entries?this._entries[e][0]:null},a.getAll=function(e){return e in this._entries?this._entries[e].slice(0):[]},a.has=function(e){return e in this._entries},a.set=function(e,t){this._entries[e]=[String(t)]},a.forEach=function(e,t){var n;for(var i in this._entries)if(this._entries.hasOwnProperty(i)){n=this._entries[i];for(var r=0;r<n.length;r++)e.call(t,n[r],i,this)}},a.keys=function(){var e=[];return this.forEach((function(t,n){e.push(n)})),n(e)},a.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),n(e)},a.entries=function(){var e=[];return this.forEach((function(t,n){e.push([n,t])})),n(e)},t&&(a[Symbol.iterator]=a.entries),a.toString=function(){var e=[];return this.forEach((function(t,n){e.push(i(n)+"="+i(t))})),e.join("&")},e.URLSearchParams=r}();var a=e.URLSearchParams.prototype;"function"!=typeof a.sort&&(a.sort=function(){var e=this,t=[];this.forEach((function(n,i){t.push([i,n]),e._entries||e.delete(i)})),t.sort((function(e,t){return e[0]<t[0]?-1:e[0]>t[0]?1:0})),e._entries&&(e._entries={});for(var n=0;n<t.length;n++)this.append(t[n][0],t[n][1])}),"function"!=typeof a._fromString&&Object.defineProperty(a,"_fromString",{enumerable:!1,configurable:!1,writable:!1,value:function(e){if(this._entries)this._entries={};else{var t=[];this.forEach((function(e,n){t.push(n)}));for(var n=0;n<t.length;n++)this.delete(t[n])}var i,a=(e=e.replace(/^\?/,"")).split("&");for(n=0;n<a.length;n++)i=a[n].split("="),this.append(r(i[0]),i.length>1?r(i[1]):"")}})}(void 0!==e?e:"undefined"!=typeof window?window:"undefined"!=typeof self?self:e),function(e){if(function(){try{var t=new e.URL("b","http://a");return t.pathname="c d","http://a/c%20d"===t.href&&t.searchParams}catch(e){return!1}}()||function(){var t=e.URL,n=function(t,n){"string"!=typeof t&&(t=String(t));var i,r=document;if(n&&(void 0===e.location||n!==e.location.href)){(i=(r=document.implementation.createHTMLDocument("")).createElement("base")).href=n,r.head.appendChild(i);try{if(0!==i.href.indexOf(n))throw new Error(i.href)}catch(e){throw new Error("URL unable to set base "+n+" due to "+e)}}var a=r.createElement("a");if(a.href=t,i&&(r.body.appendChild(a),a.href=a.href),":"===a.protocol||!/:/.test(a.href))throw new TypeError("Invalid URL");Object.defineProperty(this,"_anchorElement",{value:a});var o=new e.URLSearchParams(this.search),s=!0,l=!0,c=this;["append","delete","set"].forEach((function(e){var t=o[e];o[e]=function(){t.apply(o,arguments),s&&(l=!1,c.search=o.toString(),l=!0)}})),Object.defineProperty(this,"searchParams",{value:o,enumerable:!0});var u=void 0;Object.defineProperty(this,"_updateSearchParams",{enumerable:!1,configurable:!1,writable:!1,value:function(){this.search!==u&&(u=this.search,l&&(s=!1,this.searchParams._fromString(this.search),s=!0))}})},i=n.prototype;["hash","host","hostname","port","protocol"].forEach((function(e){!function(e){Object.defineProperty(i,e,{get:function(){return this._anchorElement[e]},set:function(t){this._anchorElement[e]=t},enumerable:!0})}(e)})),Object.defineProperty(i,"search",{get:function(){return this._anchorElement.search},set:function(e){this._anchorElement.search=e,this._updateSearchParams()},enumerable:!0}),Object.defineProperties(i,{toString:{get:function(){var e=this;return function(){return e.href}}},href:{get:function(){return this._anchorElement.href.replace(/\?$/,"")},set:function(e){this._anchorElement.href=e,this._updateSearchParams()},enumerable:!0},pathname:{get:function(){return this._anchorElement.pathname.replace(/(^\/?)/,"/")},set:function(e){this._anchorElement.pathname=e},enumerable:!0},origin:{get:function(){var e={"http:":80,"https:":443,"ftp:":21}[this._anchorElement.protocol],t=this._anchorElement.port!=e&&""!==this._anchorElement.port;return this._anchorElement.protocol+"//"+this._anchorElement.hostname+(t?":"+this._anchorElement.port:"")},enumerable:!0},password:{get:function(){return""},set:function(e){},enumerable:!0},username:{get:function(){return""},set:function(e){},enumerable:!0}}),n.createObjectURL=function(e){return t.createObjectURL.apply(t,arguments)},n.revokeObjectURL=function(e){return t.revokeObjectURL.apply(t,arguments)},e.URL=n}(),void 0!==e.location&&!("origin"in e.location)){var t=function(){return e.location.protocol+"//"+e.location.hostname+(e.location.port?":"+e.location.port:"")};try{Object.defineProperty(e.location,"origin",{get:t,enumerable:!0})}catch(n){setInterval((function(){e.location.origin=t()}),100)}}}(void 0!==e?e:"undefined"!=typeof window?window:"undefined"!=typeof self?self:e);var xo=Xe("isConcatSpreadable"),Co=zn>=51||!r((function(){var e=[];return e[xo]=!1,e.concat()[0]!==e})),Po=Kn("concat"),Io=function(e){if(!g(e))return!1;var t=e[xo];return void 0!==t?!!t:Me(e)};Oe({target:"Array",proto:!0,forced:!Co||!Po},{concat:function(e){var t,n,i,r,a,o=Ne(this),s=ot(o,0),l=0;for(t=-1,i=arguments.length;t<i;t++)if(a=-1===t?o:arguments[t],Io(a)){if(l+(r=le(a.length))>9007199254740991)throw TypeError("Maximum allowed index exceeded");for(n=0;n<r;n++,l++)n in a&&Dn(s,l,a[n])}else{if(l>=9007199254740991)throw TypeError("Maximum allowed index exceeded");Dn(s,l++,a)}return s.length=l,s}});var Oo=ct.filter,Lo=Kn("filter"),jo=Qt("filter");Oe({target:"Array",proto:!0,forced:!Lo||!jo},{filter:function(e){return Oo(this,e,arguments.length>1?arguments[1]:void 0)}});var Mo=ct.find,No=!0,Ro=Qt("find");"find"in[]&&Array(1).find((function(){No=!1})),Oe({target:"Array",proto:!0,forced:No||!Ro},{find:function(e){return Mo(this,e,arguments.length>1?arguments[1]:void 0)}}),dn("find");var _o=Xe("iterator"),Uo=!1;try{var Fo=0,Do={next:function(){return{done:!!Fo++}},return:function(){Uo=!0}};Do[_o]=function(){return this},Array.from(Do,(function(){throw 2}))}catch(e){}var qo=function(e,t){if(!t&&!Uo)return!1;var n=!1;try{var i={};i[_o]=function(){return{next:function(){return{done:n=!0}}}},e(i)}catch(e){}return n},Ho=!qo((function(e){Array.from(e)}));Oe({target:"Array",stat:!0,forced:Ho},{from:mr});var Bo=de.includes,Vo=Qt("indexOf",{ACCESSORS:!0,1:0});Oe({target:"Array",proto:!0,forced:!Vo},{includes:function(e){return Bo(this,e,arguments.length>1?arguments[1]:void 0)}}),dn("includes");var zo=ct.map,Wo=Kn("map"),Ko=Qt("map");Oe({target:"Array",proto:!0,forced:!Wo||!Ko},{map:function(e){return zo(this,e,arguments.length>1?arguments[1]:void 0)}});var $o=function(e,t,n){var i,r;return An&&"function"==typeof(i=t.constructor)&&i!==n&&g(r=i.prototype)&&r!==n.prototype&&An(e,r),e},Yo="\t\n\v\f\r                　\u2028\u2029\ufeff",Go="["+Yo+"]",Xo=RegExp("^"+Go+Go+"*"),Qo=RegExp(Go+Go+"*$"),Jo=function(e){return function(t){var n=String(p(t));return 1&e&&(n=n.replace(Xo,"")),2&e&&(n=n.replace(Qo,"")),n}},Zo={start:Jo(1),end:Jo(2),trim:Jo(3)},es=ye.f,ts=A.f,ns=P.f,is=Zo.trim,rs=i.Number,as=rs.prototype,os="Number"==h(Be(as)),ss=function(e){var t,n,i,r,a,o,s,l,c=v(e,!1);if("string"==typeof c&&c.length>2)if(43===(t=(c=is(c)).charCodeAt(0))||45===t){if(88===(n=c.charCodeAt(2))||120===n)return NaN}else if(48===t){switch(c.charCodeAt(1)){case 66:case 98:i=2,r=49;break;case 79:case 111:i=8,r=55;break;default:return+c}for(o=(a=c.slice(2)).length,s=0;s<o;s++)if((l=a.charCodeAt(s))<48||l>r)return NaN;return parseInt(a,i)}return+c};if(Pe("Number",!rs(" 0o1")||!rs("0b1")||rs("+0x1"))){for(var ls,cs=function(e){var t=arguments.length<1?0:e,n=this;return n instanceof cs&&(os?r((function(){as.valueOf.call(n)})):"Number"!=h(n))?$o(new rs(ss(t)),n,cs):ss(t)},us=a?es(rs):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),hs=0;us.length>hs;hs++)b(rs,ls=us[hs])&&!b(cs,ls)&&ns(cs,ls,ts(rs,ls));cs.prototype=as,as.constructor=cs,ee(i,"Number",cs)}var fs=r((function(){Re(1)}));Oe({target:"Object",stat:!0,forced:fs},{keys:function(e){return Re(Ne(e))}});var ds=function(e){if(qi(e))throw TypeError("The method doesn't accept regular expressions");return e},ps=Xe("match"),ms=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[ps]=!1,"/./"[e](t)}catch(e){}}return!1};Oe({target:"String",proto:!0,forced:!ms("includes")},{includes:function(e){return!!~String(p(this)).indexOf(ds(e),arguments.length>1?arguments[1]:void 0)}});var gs=!r((function(){return Object.isExtensible(Object.preventExtensions({}))})),vs=t((function(e){var t=P.f,n=B("meta"),i=0,r=Object.isExtensible||function(){return!0},a=function(e){t(e,n,{value:{objectID:"O"+ ++i,weakData:{}}})},o=e.exports={REQUIRED:!1,fastKey:function(e,t){if(!g(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!b(e,n)){if(!r(e))return"F";if(!t)return"E";a(e)}return e[n].objectID},getWeakData:function(e,t){if(!b(e,n)){if(!r(e))return!0;if(!t)return!1;a(e)}return e[n].weakData},onFreeze:function(e){return gs&&o.REQUIRED&&r(e)&&!b(e,n)&&a(e),e}};W[n]=!0})),ys=(vs.REQUIRED,vs.fastKey,vs.getWeakData,vs.onFreeze,t((function(e){var t=function(e,t){this.stopped=e,this.result=t};(e.exports=function(e,n,i,r,a){var o,s,l,c,u,h,f,d=rt(n,i,r?2:1);if(a)o=e;else{if("function"!=typeof(s=pr(e)))throw TypeError("Target is not iterable");if(fr(s)){for(l=0,c=le(e.length);c>l;l++)if((u=r?d(x(f=e[l])[0],f[1]):d(e[l]))&&u instanceof t)return u;return new t(!1)}o=s.call(e)}for(h=o.next;!(f=h.call(o)).done;)if("object"==typeof(u=cr(o,d,f.value,r))&&u&&u instanceof t)return u;return new t(!1)}).stop=function(e){return new t(!0,e)}}))),bs=vs.getWeakData,ws=Z.set,ks=Z.getterFor,Ts=ct.find,Ss=ct.findIndex,Es=0,As=function(e){return e.frozen||(e.frozen=new xs)},xs=function(){this.entries=[]},Cs=function(e,t){return Ts(e.entries,(function(e){return e[0]===t}))};xs.prototype={get:function(e){var t=Cs(this,e);if(t)return t[1]},has:function(e){return!!Cs(this,e)},set:function(e,t){var n=Cs(this,e);n?n[1]=t:this.entries.push([e,t])},delete:function(e){var t=Ss(this.entries,(function(t){return t[0]===e}));return~t&&this.entries.splice(t,1),!!~t}};var Ps={getConstructor:function(e,t,n,i){var r=e((function(e,a){ar(e,r,t),ws(e,{type:t,id:Es++,frozen:void 0}),null!=a&&ys(a,e[i],e,n)})),a=ks(t),o=function(e,t,n){var i=a(e),r=bs(x(t),!0);return!0===r?As(i).set(t,n):r[i.id]=n,e};return Er(r.prototype,{delete:function(e){var t=a(this);if(!g(e))return!1;var n=bs(e);return!0===n?As(t).delete(e):n&&b(n,t.id)&&delete n[t.id]},has:function(e){var t=a(this);if(!g(e))return!1;var n=bs(e);return!0===n?As(t).has(e):n&&b(n,t.id)}}),Er(r.prototype,n?{get:function(e){var t=a(this);if(g(e)){var n=bs(e);return!0===n?As(t).get(e):n?n[t.id]:void 0}},set:function(e,t){return o(this,e,t)}}:{add:function(e){return o(this,e,!0)}}),r}},Is=(t((function(e){var t,n=Z.enforce,a=!i.ActiveXObject&&"ActiveXObject"in i,o=Object.isExtensible,s=function(e){return function(){return e(this,arguments.length?arguments[0]:void 0)}},l=e.exports=function(e,t,n){var a=-1!==e.indexOf("Map"),o=-1!==e.indexOf("Weak"),s=a?"set":"add",l=i[e],c=l&&l.prototype,u=l,h={},f=function(e){var t=c[e];ee(c,e,"add"==e?function(e){return t.call(this,0===e?0:e),this}:"delete"==e?function(e){return!(o&&!g(e))&&t.call(this,0===e?0:e)}:"get"==e?function(e){return o&&!g(e)?void 0:t.call(this,0===e?0:e)}:"has"==e?function(e){return!(o&&!g(e))&&t.call(this,0===e?0:e)}:function(e,n){return t.call(this,0===e?0:e,n),this})};if(Pe(e,"function"!=typeof l||!(o||c.forEach&&!r((function(){(new l).entries().next()})))))u=n.getConstructor(t,e,a,s),vs.REQUIRED=!0;else if(Pe(e,!0)){var d=new u,p=d[s](o?{}:-0,1)!=d,m=r((function(){d.has(1)})),v=qo((function(e){new l(e)})),y=!o&&r((function(){for(var e=new l,t=5;t--;)e[s](t,t);return!e.has(-0)}));v||((u=t((function(t,n){ar(t,u,e);var i=$o(new l,t,u);return null!=n&&ys(n,i[s],i,a),i}))).prototype=c,c.constructor=u),(m||y)&&(f("delete"),f("has"),a&&f("get")),(y||p)&&f(s),o&&c.clear&&delete c.clear}return h[e]=u,Oe({global:!0,forced:u!=l},h),nt(u,e),o||n.setStrong(u,e,a),u}("WeakMap",s,Ps);if(F&&a){t=Ps.getConstructor(s,"WeakMap",!0),vs.REQUIRED=!0;var c=l.prototype,u=c.delete,h=c.has,f=c.get,d=c.set;Er(c,{delete:function(e){if(g(e)&&!o(e)){var i=n(this);return i.frozen||(i.frozen=new t),u.call(this,e)||i.frozen.delete(e)}return u.call(this,e)},has:function(e){if(g(e)&&!o(e)){var i=n(this);return i.frozen||(i.frozen=new t),h.call(this,e)||i.frozen.has(e)}return h.call(this,e)},get:function(e){if(g(e)&&!o(e)){var i=n(this);return i.frozen||(i.frozen=new t),h.call(this,e)?f.call(this,e):i.frozen.get(e)}return f.call(this,e)},set:function(e,i){if(g(e)&&!o(e)){var r=n(this);r.frozen||(r.frozen=new t),h.call(this,e)?d.call(this,e,i):r.frozen.set(e,i)}else d.call(this,e,i);return this}})}})),ct.every),Os=$t("every"),Ls=Qt("every");Oe({target:"Array",proto:!0,forced:!Os||!Ls},{every:function(e){return Is(this,e,arguments.length>1?arguments[1]:void 0)}}),Oe({target:"Object",stat:!0,forced:Object.assign!==lr},{assign:lr});var js=Zo.trim;Oe({target:"String",proto:!0,forced:function(e){return r((function(){return!!Yo[e]()||"​᠎"!="​᠎"[e]()||Yo[e].name!==e}))}("trim")},{trim:function(){return js(this)}});var Ms=ct.some,Ns=$t("some"),Rs=Qt("some");Oe({target:"Array",proto:!0,forced:!Ns||!Rs},{some:function(e){return Ms(this,e,arguments.length>1?arguments[1]:void 0)}});var _s="".repeat||function(e){var t=String(p(this)),n="",i=oe(e);if(i<0||i==1/0)throw RangeError("Wrong number of repetitions");for(;i>0;(i>>>=1)&&(t+=t))1&i&&(n+=t);return n},Us=1..toFixed,Fs=Math.floor,Ds=function(e,t,n){return 0===t?n:t%2==1?Ds(e,t-1,n*e):Ds(e*e,t/2,n)},qs=Us&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!r((function(){Us.call({})}));Oe({target:"Number",proto:!0,forced:qs},{toFixed:function(e){var t,n,i,r,a=function(e){if("number"!=typeof e&&"Number"!=h(e))throw TypeError("Incorrect invocation");return+e}(this),o=oe(e),s=[0,0,0,0,0,0],l="",c="0",u=function(e,t){for(var n=-1,i=t;++n<6;)i+=e*s[n],s[n]=i%1e7,i=Fs(i/1e7)},f=function(e){for(var t=6,n=0;--t>=0;)n+=s[t],s[t]=Fs(n/e),n=n%e*1e7},d=function(){for(var e=6,t="";--e>=0;)if(""!==t||0===e||0!==s[e]){var n=String(s[e]);t=""===t?n:t+_s.call("0",7-n.length)+n}return t};if(o<0||o>20)throw RangeError("Incorrect fraction digits");if(a!=a)return"NaN";if(a<=-1e21||a>=1e21)return String(a);if(a<0&&(l="-",a=-a),a>1e-21)if(n=(t=function(e){for(var t=0,n=e;n>=4096;)t+=12,n/=4096;for(;n>=2;)t+=1,n/=2;return t}(a*Ds(2,69,1))-69)<0?a*Ds(2,-t,1):a/Ds(2,t,1),n*=4503599627370496,(t=52-t)>0){for(u(0,n),i=o;i>=7;)u(1e7,0),i-=7;for(u(Ds(10,i,1),0),i=t-1;i>=23;)f(1<<23),i-=23;f(1<<i),u(1,1),f(2),c=d()}else u(0,n),u(1<<-t,0),c=d()+_s.call("0",o);return c=o>0?l+((r=c.length)<=o?"0."+_s.call("0",o-r)+c:c.slice(0,r-o)+"."+c.slice(r-o)):l+c}});var Hs=l.f,Bs=function(e){return function(t){for(var n,i=m(t),r=Re(i),o=r.length,s=0,l=[];o>s;)n=r[s++],a&&!Hs.call(i,n)||l.push(e?[n,i[n]]:i[n]);return l}},Vs={entries:Bs(!0),values:Bs(!1)},zs=Vs.entries;Oe({target:"Object",stat:!0},{entries:function(e){return zs(e)}});var Ws=Vs.values;Oe({target:"Object",stat:!0},{values:function(e){return Ws(e)}});var Ks={addCSS:!0,thumbWidth:15,watch:!0};function $s(e,t){return function(){return Array.from(document.querySelectorAll(t)).includes(this)}.call(e,t)}Oe({target:"Number",stat:!0},{isNaN:function(e){return e!=e}});var Ys=function(e){return null!=e?e.constructor:null},Gs=function(e,t){return Boolean(e&&t&&e instanceof t)},Xs=function(e){return null==e},Qs=function(e){return Ys(e)===Object},Js=function(e){return Ys(e)===String},Zs=function(e){return Array.isArray(e)},el=function(e){return Gs(e,NodeList)},tl=Js,nl=Zs,il=el,rl=function(e){return Gs(e,Element)},al=function(e){return Gs(e,Event)},ol=function(e){return Xs(e)||(Js(e)||Zs(e)||el(e))&&!e.length||Qs(e)&&!Object.keys(e).length};function sl(e,t){if(t<1){var n=function(e){var t="".concat(e).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);return t?Math.max(0,(t[1]?t[1].length:0)-(t[2]?+t[2]:0)):0}(t);return parseFloat(e.toFixed(n))}return Math.round(e/t)*t}Ii("match",1,(function(e,t,n){return[function(t){var n=p(this),i=null==t?void 0:t[e];return void 0!==i?i.call(t,n):new RegExp(t)[e](String(n))},function(e){var i=n(t,e,this);if(i.done)return i.value;var r=x(e),a=String(this);if(!r.global)return ji(r,a);var o=r.unicode;r.lastIndex=0;for(var s,l=[],c=0;null!==(s=ji(r,a));){var u=String(s[0]);l[c]=u,""===u&&(r.lastIndex=Li(a,le(r.lastIndex),o)),c++}return 0===c?null:l}]}));var ll,cl,ul,hl=function(){function e(t,n){yo(this,e),rl(t)?this.element=t:tl(t)&&(this.element=document.querySelector(t)),rl(this.element)&&ol(this.element.rangeTouch)&&(this.config=Object.assign({},Ks,n),this.init())}return wo(e,[{key:"init",value:function(){e.enabled&&(this.config.addCSS&&(this.element.style.userSelect="none",this.element.style.webKitUserSelect="none",this.element.style.touchAction="manipulation"),this.listeners(!0),this.element.rangeTouch=this)}},{key:"destroy",value:function(){e.enabled&&(this.listeners(!1),this.element.rangeTouch=null)}},{key:"listeners",value:function(e){var t=this,n=e?"addEventListener":"removeEventListener";["touchstart","touchmove","touchend"].forEach((function(e){t.element[n](e,(function(e){return t.set(e)}),!1)}))}},{key:"get",value:function(t){if(!e.enabled||!al(t))return null;var n,i=t.target,r=t.changedTouches[0],a=parseFloat(i.getAttribute("min"))||0,o=parseFloat(i.getAttribute("max"))||100,s=parseFloat(i.getAttribute("step"))||1,l=o-a,c=i.getBoundingClientRect(),u=100/c.width*(this.config.thumbWidth/2)/100;return(n=100/c.width*(r.clientX-c.left))<0?n=0:n>100&&(n=100),n<50?n-=(100-2*n)*u:n>50&&(n+=2*(n-50)*u),a+sl(l*(n/100),s)}},{key:"set",value:function(t){e.enabled&&al(t)&&!t.target.disabled&&(t.preventDefault(),t.target.value=this.get(t),function(e,t){if(e&&t){var n=new Event(t);e.dispatchEvent(n)}}(t.target,"touchend"===t.type?"change":"input"))}}],[{key:"setup",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=null;if(ol(t)||tl(t)?i=Array.from(document.querySelectorAll(tl(t)?t:'input[type="range"]')):rl(t)?i=[t]:il(t)?i=Array.from(t):nl(t)&&(i=t.filter(rl)),ol(i))return null;var r=Object.assign({},Ks,n);if(tl(t)&&r.watch){var a=new MutationObserver((function(n){Array.from(n).forEach((function(n){Array.from(n.addedNodes).forEach((function(n){if(rl(n)&&$s(n,t))new e(n,r)}))}))}));a.observe(document.body,{childList:!0,subtree:!0})}return i.map((function(t){return new e(t,n)}))}},{key:"enabled",get:function(){return"ontouchstart"in document.documentElement}}]),e}(),fl=i.Promise,dl=Xe("species"),pl=function(e){var t=ie(e),n=P.f;a&&t&&!t[dl]&&n(t,dl,{configurable:!0,get:function(){return this}})},ml=/(iphone|ipod|ipad).*applewebkit/i.test(qn),gl=i.location,vl=i.setImmediate,yl=i.clearImmediate,bl=i.process,wl=i.MessageChannel,kl=i.Dispatch,Tl=0,Sl={},El=function(e){if(Sl.hasOwnProperty(e)){var t=Sl[e];delete Sl[e],t()}},Al=function(e){return function(){El(e)}},xl=function(e){El(e.data)},Cl=function(e){i.postMessage(e+"",gl.protocol+"//"+gl.host)};vl&&yl||(vl=function(e){for(var t=[],n=1;arguments.length>n;)t.push(arguments[n++]);return Sl[++Tl]=function(){("function"==typeof e?e:Function(e)).apply(void 0,t)},ll(Tl),Tl},yl=function(e){delete Sl[e]},"process"==h(bl)?ll=function(e){bl.nextTick(Al(e))}:kl&&kl.now?ll=function(e){kl.now(Al(e))}:wl&&!ml?(ul=(cl=new wl).port2,cl.port1.onmessage=xl,ll=rt(ul.postMessage,ul,1)):!i.addEventListener||"function"!=typeof postMessage||i.importScripts||r(Cl)?ll="onreadystatechange"in T("script")?function(e){Ue.appendChild(T("script")).onreadystatechange=function(){Ue.removeChild(this),El(e)}}:function(e){setTimeout(Al(e),0)}:(ll=Cl,i.addEventListener("message",xl,!1)));var Pl,Il,Ol,Ll,jl,Ml,Nl,Rl,_l={set:vl,clear:yl},Ul=A.f,Fl=_l.set,Dl=i.MutationObserver||i.WebKitMutationObserver,ql=i.process,Hl=i.Promise,Bl="process"==h(ql),Vl=Ul(i,"queueMicrotask"),zl=Vl&&Vl.value;zl||(Pl=function(){var e,t;for(Bl&&(e=ql.domain)&&e.exit();Il;){t=Il.fn,Il=Il.next;try{t()}catch(e){throw Il?Ll():Ol=void 0,e}}Ol=void 0,e&&e.enter()},Bl?Ll=function(){ql.nextTick(Pl)}:Dl&&!ml?(jl=!0,Ml=document.createTextNode(""),new Dl(Pl).observe(Ml,{characterData:!0}),Ll=function(){Ml.data=jl=!jl}):Hl&&Hl.resolve?(Nl=Hl.resolve(void 0),Rl=Nl.then,Ll=function(){Rl.call(Nl,Pl)}):Ll=function(){Fl.call(i,Pl)});var Wl,Kl,$l,Yl,Gl=zl||function(e){var t={fn:e,next:void 0};Ol&&(Ol.next=t),Il||(Il=t,Ll()),Ol=t},Xl=function(e){var t,n;this.promise=new e((function(e,i){if(void 0!==t||void 0!==n)throw TypeError("Bad Promise constructor");t=e,n=i})),this.resolve=it(t),this.reject=it(n)},Ql={f:function(e){return new Xl(e)}},Jl=function(e,t){if(x(e),g(t)&&t.constructor===e)return t;var n=Ql.f(e);return(0,n.resolve)(t),n.promise},Zl=function(e){try{return{error:!1,value:e()}}catch(e){return{error:!0,value:e}}},ec=_l.set,tc=Xe("species"),nc="Promise",ic=Z.get,rc=Z.set,ac=Z.getterFor(nc),oc=fl,sc=i.TypeError,lc=i.document,cc=i.process,uc=ie("fetch"),hc=Ql.f,fc=hc,dc="process"==h(cc),pc=!!(lc&&lc.createEvent&&i.dispatchEvent),mc=Pe(nc,(function(){if(!(_(oc)!==String(oc))){if(66===zn)return!0;if(!dc&&"function"!=typeof PromiseRejectionEvent)return!0}if(zn>=51&&/native code/.test(oc))return!1;var e=oc.resolve(1),t=function(e){e((function(){}),(function(){}))};return(e.constructor={})[tc]=t,!(e.then((function(){}))instanceof t)})),gc=mc||!qo((function(e){oc.all(e).catch((function(){}))})),vc=function(e){var t;return!(!g(e)||"function"!=typeof(t=e.then))&&t},yc=function(e,t,n){if(!t.notified){t.notified=!0;var i=t.reactions;Gl((function(){for(var r=t.value,a=1==t.state,o=0;i.length>o;){var s,l,c,u=i[o++],h=a?u.ok:u.fail,f=u.resolve,d=u.reject,p=u.domain;try{h?(a||(2===t.rejection&&Tc(e,t),t.rejection=1),!0===h?s=r:(p&&p.enter(),s=h(r),p&&(p.exit(),c=!0)),s===u.promise?d(sc("Promise-chain cycle")):(l=vc(s))?l.call(s,f,d):f(s)):d(r)}catch(e){p&&!c&&p.exit(),d(e)}}t.reactions=[],t.notified=!1,n&&!t.rejection&&wc(e,t)}))}},bc=function(e,t,n){var r,a;pc?((r=lc.createEvent("Event")).promise=t,r.reason=n,r.initEvent(e,!1,!0),i.dispatchEvent(r)):r={promise:t,reason:n},(a=i["on"+e])?a(r):"unhandledrejection"===e&&function(e,t){var n=i.console;n&&n.error&&(1===arguments.length?n.error(e):n.error(e,t))}("Unhandled promise rejection",n)},wc=function(e,t){ec.call(i,(function(){var n,i=t.value;if(kc(t)&&(n=Zl((function(){dc?cc.emit("unhandledRejection",i,e):bc("unhandledrejection",e,i)})),t.rejection=dc||kc(t)?2:1,n.error))throw n.value}))},kc=function(e){return 1!==e.rejection&&!e.parent},Tc=function(e,t){ec.call(i,(function(){dc?cc.emit("rejectionHandled",e):bc("rejectionhandled",e,t.value)}))},Sc=function(e,t,n,i){return function(r){e(t,n,r,i)}},Ec=function(e,t,n,i){t.done||(t.done=!0,i&&(t=i),t.value=n,t.state=2,yc(e,t,!0))},Ac=function(e,t,n,i){if(!t.done){t.done=!0,i&&(t=i);try{if(e===n)throw sc("Promise can't be resolved itself");var r=vc(n);r?Gl((function(){var i={done:!1};try{r.call(n,Sc(Ac,e,i,t),Sc(Ec,e,i,t))}catch(n){Ec(e,i,n,t)}})):(t.value=n,t.state=1,yc(e,t,!1))}catch(n){Ec(e,{done:!1},n,t)}}};mc&&(oc=function(e){ar(this,oc,nc),it(e),Wl.call(this);var t=ic(this);try{e(Sc(Ac,this,t),Sc(Ec,this,t))}catch(e){Ec(this,t,e)}},(Wl=function(e){rc(this,{type:nc,done:!1,notified:!1,parent:!1,reactions:[],rejection:!1,state:0,value:void 0})}).prototype=Er(oc.prototype,{then:function(e,t){var n=ac(this),i=hc(Bi(this,oc));return i.ok="function"!=typeof e||e,i.fail="function"==typeof t&&t,i.domain=dc?cc.domain:void 0,n.parent=!0,n.reactions.push(i),0!=n.state&&yc(this,n,!1),i.promise},catch:function(e){return this.then(void 0,e)}}),Kl=function(){var e=new Wl,t=ic(e);this.promise=e,this.resolve=Sc(Ac,e,t),this.reject=Sc(Ec,e,t)},Ql.f=hc=function(e){return e===oc||e===$l?new Kl(e):fc(e)},"function"==typeof fl&&(Yl=fl.prototype.then,ee(fl.prototype,"then",(function(e,t){var n=this;return new oc((function(e,t){Yl.call(n,e,t)})).then(e,t)}),{unsafe:!0}),"function"==typeof uc&&Oe({global:!0,enumerable:!0,forced:!0},{fetch:function(e){return Jl(oc,uc.apply(i,arguments))}}))),Oe({global:!0,wrap:!0,forced:mc},{Promise:oc}),nt(oc,nc,!1),pl(nc),$l=ie(nc),Oe({target:nc,stat:!0,forced:mc},{reject:function(e){var t=hc(this);return t.reject.call(void 0,e),t.promise}}),Oe({target:nc,stat:!0,forced:mc},{resolve:function(e){return Jl(this,e)}}),Oe({target:nc,stat:!0,forced:gc},{all:function(e){var t=this,n=hc(t),i=n.resolve,r=n.reject,a=Zl((function(){var n=it(t.resolve),a=[],o=0,s=1;ys(e,(function(e){var l=o++,c=!1;a.push(void 0),s++,n.call(t,e).then((function(e){c||(c=!0,a[l]=e,--s||i(a))}),r)})),--s||i(a)}));return a.error&&r(a.value),n.promise},race:function(e){var t=this,n=hc(t),i=n.reject,r=Zl((function(){var r=it(t.resolve);ys(e,(function(e){r.call(t,e).then(n.resolve,i)}))}));return r.error&&i(r.value),n.promise}});var xc,Cc=A.f,Pc="".startsWith,Ic=Math.min,Oc=ms("startsWith"),Lc=!(Oc||(xc=Cc(String.prototype,"startsWith"),!xc||xc.writable));Oe({target:"String",proto:!0,forced:!Lc&&!Oc},{startsWith:function(e){var t=String(p(this));ds(e);var n=le(Ic(arguments.length>1?arguments[1]:void 0,t.length)),i=String(e);return Pc?Pc.call(t,i,n):t.slice(n,n+i.length)===i}});var jc,Mc,Nc,Rc=function(e){return null!=e?e.constructor:null},_c=function(e,t){return Boolean(e&&t&&e instanceof t)},Uc=function(e){return null==e},Fc=function(e){return Rc(e)===Object},Dc=function(e){return Rc(e)===String},qc=function(e){return Array.isArray(e)},Hc=function(e){return _c(e,NodeList)},Bc=function(e){return Uc(e)||(Dc(e)||qc(e)||Hc(e))&&!e.length||Fc(e)&&!Object.keys(e).length},Vc=Uc,zc=Fc,Wc=function(e){return Rc(e)===Number&&!Number.isNaN(e)},Kc=Dc,$c=function(e){return Rc(e)===Boolean},Yc=function(e){return Rc(e)===Function},Gc=qc,Xc=Hc,Qc=function(e){return _c(e,Element)},Jc=function(e){return _c(e,Event)},Zc=function(e){return _c(e,KeyboardEvent)},eu=function(e){return _c(e,TextTrack)||!Uc(e)&&Dc(e.kind)},tu=function(e){if(_c(e,window.URL))return!0;if(!Dc(e))return!1;var t=e;e.startsWith("http://")&&e.startsWith("https://")||(t="http://".concat(e));try{return!Bc(new URL(t).hostname)}catch(e){return!1}},nu=Bc,iu=(jc=document.createElement("span"),Mc={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},Nc=Object.keys(Mc).find((function(e){return void 0!==jc.style[e]})),!!Kc(Nc)&&Mc[Nc]);function ru(e,t){setTimeout((function(){try{e.hidden=!0,e.offsetHeight,e.hidden=!1}catch(e){}}),t)}var au={isIE:
/* @cc_on!@ */
!!document.documentMode,isEdge:window.navigator.userAgent.includes("Edge"),isWebkit:"WebkitAppearance"in document.documentElement.style&&!/Edge/.test(navigator.userAgent),isIPhone:/(iPhone|iPod)/gi.test(navigator.platform),isIos:/(iPad|iPhone|iPod)/gi.test(navigator.platform)},ou=function(e){return function(t,n,i,r){it(n);var a=Ne(t),o=d(a),s=le(a.length),l=e?s-1:0,c=e?-1:1;if(i<2)for(;;){if(l in o){r=o[l],l+=c;break}if(l+=c,e?l<0:s<=l)throw TypeError("Reduce of empty array with no initial value")}for(;e?l>=0:s>l;l+=c)l in o&&(r=n(r,o[l],l,a));return r}},su={left:ou(!1),right:ou(!0)}.left,lu=$t("reduce"),cu=Qt("reduce",{1:0});function uu(e,t){return t.split(".").reduce((function(e,t){return e&&e[t]}),e)}function hu(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];if(!n.length)return e;var r=n.shift();return zc(r)?(Object.keys(r).forEach((function(t){zc(r[t])?(Object.keys(e).includes(t)||Object.assign(e,ko({},t,{})),hu(e[t],r[t])):Object.assign(e,ko({},t,r[t]))})),hu.apply(void 0,[e].concat(n))):e}function fu(e,t){var n=e.length?e:[e];Array.from(n).reverse().forEach((function(e,n){var i=n>0?t.cloneNode(!0):t,r=e.parentNode,a=e.nextSibling;i.appendChild(e),a?r.insertBefore(i,a):r.appendChild(i)}))}function du(e,t){Qc(e)&&!nu(t)&&Object.entries(t).filter((function(e){var t=Eo(e,2)[1];return!Vc(t)})).forEach((function(t){var n=Eo(t,2),i=n[0],r=n[1];return e.setAttribute(i,r)}))}function pu(e,t,n){var i=document.createElement(e);return zc(t)&&du(i,t),Kc(n)&&(i.innerText=n),i}function mu(e,t,n,i){Qc(t)&&t.appendChild(pu(e,n,i))}function gu(e){Xc(e)||Gc(e)?Array.from(e).forEach(gu):Qc(e)&&Qc(e.parentNode)&&e.parentNode.removeChild(e)}function vu(e){if(Qc(e))for(var t=e.childNodes.length;t>0;)e.removeChild(e.lastChild),t-=1}function yu(e,t){return Qc(t)&&Qc(t.parentNode)&&Qc(e)?(t.parentNode.replaceChild(e,t),e):null}function bu(e,t){if(!Kc(e)||nu(e))return{};var n={},i=hu({},t);return e.split(",").forEach((function(e){var t=e.trim(),r=t.replace(".",""),a=t.replace(/[[\]]/g,"").split("="),o=Eo(a,1)[0],s=a.length>1?a[1].replace(/["']/g,""):"";switch(t.charAt(0)){case".":Kc(i.class)?n.class="".concat(i.class," ").concat(r):n.class=r;break;case"#":n.id=t.replace("#","");break;case"[":n[o]=s}})),hu(i,n)}function wu(e,t){if(Qc(e)){var n=t;$c(n)||(n=!e.hidden),e.hidden=n}}function ku(e,t,n){if(Xc(e))return Array.from(e).map((function(e){return ku(e,t,n)}));if(Qc(e)){var i="toggle";return void 0!==n&&(i=n?"add":"remove"),e.classList[i](t),e.classList.contains(t)}return!1}function Tu(e,t){return Qc(e)&&e.classList.contains(t)}function Su(e,t){return function(){return Array.from(document.querySelectorAll(t)).includes(this)}.call(e,t)}function Eu(e){return this.elements.container.querySelectorAll(e)}function Au(e){return this.elements.container.querySelector(e)}function xu(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];Qc(e)&&(e.focus({preventScroll:!0}),t&&ku(e,this.config.classNames.tabFocus))}Oe({target:"Array",proto:!0,forced:!lu||!cu},{reduce:function(e){return su(this,e,arguments.length,arguments.length>1?arguments[1]:void 0)}});var Cu,Pu={"audio/ogg":"vorbis","audio/wav":"1","video/webm":"vp8, vorbis","video/mp4":"avc1.42E01E, mp4a.40.2","video/ogg":"theora"},Iu={audio:"canPlayType"in document.createElement("audio"),video:"canPlayType"in document.createElement("video"),check:function(e,t,n){var i=au.isIPhone&&n&&Iu.playsinline,r=Iu[e]||"html5"!==t;return{api:r,ui:r&&Iu.rangeInput&&("video"!==e||!au.isIPhone||i)}},pip:!(au.isIPhone||!Yc(pu("video").webkitSetPresentationMode)&&(!document.pictureInPictureEnabled||pu("video").disablePictureInPicture)),airplay:Yc(window.WebKitPlaybackTargetAvailabilityEvent),playsinline:"playsInline"in document.createElement("video"),mime:function(e){if(nu(e))return!1;var t=Eo(e.split("/"),1)[0],n=e;if(!this.isHTML5||t!==this.type)return!1;Object.keys(Pu).includes(n)&&(n+='; codecs="'.concat(Pu[e],'"'));try{return Boolean(n&&this.media.canPlayType(n).replace(/no/,""))}catch(e){return!1}},textTracks:"textTracks"in document.createElement("video"),rangeInput:(Cu=document.createElement("input"),Cu.type="range","range"===Cu.type),touch:"ontouchstart"in document.documentElement,transitions:!1!==iu,reducedMotion:"matchMedia"in window&&window.matchMedia("(prefers-reduced-motion)").matches},Ou=function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){return e=!0,null}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(e){}return e}();function Lu(e,t,n){var i=this,r=arguments.length>3&&void 0!==arguments[3]&&arguments[3],a=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],o=arguments.length>5&&void 0!==arguments[5]&&arguments[5];if(e&&"addEventListener"in e&&!nu(t)&&Yc(n)){var s=t.split(" "),l=o;Ou&&(l={passive:a,capture:o}),s.forEach((function(t){i&&i.eventListeners&&r&&i.eventListeners.push({element:e,type:t,callback:n,options:l}),e[r?"addEventListener":"removeEventListener"](t,n,l)}))}}function ju(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];Lu.call(this,e,t,n,!0,i,r)}function Mu(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];Lu.call(this,e,t,n,!1,i,r)}function Nu(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2?arguments[2]:void 0,r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=arguments.length>4&&void 0!==arguments[4]&&arguments[4],o=function o(){Mu(e,n,o,r,a);for(var s=arguments.length,l=new Array(s),c=0;c<s;c++)l[c]=arguments[c];i.apply(t,l)};Lu.call(this,e,n,o,!0,r,a)}function Ru(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};if(Qc(e)&&!nu(t)){var r=new CustomEvent(t,{bubbles:n,detail:So({},i,{plyr:this})});e.dispatchEvent(r)}}function _u(){this&&this.eventListeners&&(this.eventListeners.forEach((function(e){var t=e.element,n=e.type,i=e.callback,r=e.options;t.removeEventListener(n,i,r)})),this.eventListeners=[])}function Uu(){var e=this;return new Promise((function(t){return e.ready?setTimeout(t,0):ju.call(e,e.elements.container,"ready",t)})).then((function(){}))}function Fu(e){return!!(Gc(e)||Kc(e)&&e.includes(":"))&&(Gc(e)?e:e.split(":")).map(Number).every(Wc)}function Du(e){if(!Gc(e)||!e.every(Wc))return null;var t=Eo(e,2),n=t[0],i=t[1],r=function e(t,n){return 0===n?t:e(n,t%n)}(n,i);return[n/r,i/r]}function qu(e){var t=function(e){return Fu(e)?e.split(":").map(Number):null},n=t(e);if(null===n&&(n=t(this.config.ratio)),null===n&&!nu(this.embed)&&Gc(this.embed.ratio)&&(n=this.embed.ratio),null===n&&this.isHTML5){var i=this.media;n=Du([i.videoWidth,i.videoHeight])}return n}function Hu(e){if(!this.isVideo)return{};var t=this.elements.wrapper,n=qu.call(this,e),i=Eo(Gc(n)?n:[0,0],2),r=100/i[0]*i[1];if(t.style.paddingBottom="".concat(r,"%"),this.isVimeo&&this.supported.ui){var a=(240-r)/4.8;this.media.style.transform="translateY(-".concat(a,"%)")}else this.isHTML5&&t.classList.toggle(this.config.classNames.videoFixedRatio,null!==n);return{padding:r,ratio:n}}var Bu={getSources:function(){var e=this;return this.isHTML5?Array.from(this.media.querySelectorAll("source")).filter((function(t){var n=t.getAttribute("type");return!!nu(n)||Iu.mime.call(e,n)})):[]},getQualityOptions:function(){return this.config.quality.forced?this.config.quality.options:Bu.getSources.call(this).map((function(e){return Number(e.getAttribute("size"))})).filter(Boolean)},setup:function(){if(this.isHTML5){var e=this;e.options.speed=e.config.speed.options,nu(this.config.ratio)||Hu.call(e),Object.defineProperty(e.media,"quality",{get:function(){var t=Bu.getSources.call(e).find((function(t){return t.getAttribute("src")===e.source}));return t&&Number(t.getAttribute("size"))},set:function(t){if(e.quality!==t){if(e.config.quality.forced&&Yc(e.config.quality.onChange))e.config.quality.onChange(t);else{var n=Bu.getSources.call(e).find((function(e){return Number(e.getAttribute("size"))===t}));if(!n)return;var i=e.media,r=i.currentTime,a=i.paused,o=i.preload,s=i.readyState,l=i.playbackRate;e.media.src=n.getAttribute("src"),("none"!==o||s)&&(e.once("loadedmetadata",(function(){e.speed=l,e.currentTime=r,a||e.play()})),e.media.load())}Ru.call(e,e.media,"qualitychange",!1,{quality:t})}}})}},cancelRequests:function(){this.isHTML5&&(gu(Bu.getSources.call(this)),this.media.setAttribute("src",this.config.blankVideo),this.media.load(),this.debug.log("Cancelled network requests"))}};function Vu(e){return Gc(e)?e.filter((function(t,n){return e.indexOf(t)===n})):e}var zu=P.f,Wu=ye.f,Ku=Z.set,$u=Xe("match"),Yu=i.RegExp,Gu=Yu.prototype,Xu=/a/g,Qu=/a/g,Ju=new Yu(Xu)!==Xu,Zu=oi.UNSUPPORTED_Y;if(a&&Pe("RegExp",!Ju||Zu||r((function(){return Qu[$u]=!1,Yu(Xu)!=Xu||Yu(Qu)==Qu||"/a/i"!=Yu(Xu,"i")})))){for(var eh=function(e,t){var n,i=this instanceof eh,r=qi(e),a=void 0===t;if(!i&&r&&e.constructor===eh&&a)return e;Ju?r&&!a&&(e=e.source):e instanceof eh&&(a&&(t=ri.call(e)),e=e.source),Zu&&(n=!!t&&t.indexOf("y")>-1)&&(t=t.replace(/y/g,""));var o=$o(Ju?new Yu(e,t):Yu(e,t),i?this:Gu,eh);return Zu&&n&&Ku(o,{sticky:n}),o},th=function(e){e in eh||zu(eh,e,{configurable:!0,get:function(){return Yu[e]},set:function(t){Yu[e]=t}})},nh=Wu(Yu),ih=0;nh.length>ih;)th(nh[ih++]);Gu.constructor=eh,eh.prototype=Gu,ee(i,"RegExp",eh)}function rh(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),i=1;i<t;i++)n[i-1]=arguments[i];return nu(e)?e:e.toString().replace(/{(\d+)}/g,(function(e,t){return n[t].toString()}))}function ah(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";return e.replace(new RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g,"\\$1"),"g"),n.toString())}function oh(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.toString().replace(/\w\S*/g,(function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()}))}function sh(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.toString();return t=ah(t,"-"," "),t=ah(t,"_"," "),ah(t=oh(t)," ","")}function lh(e){var t=document.createElement("div");return t.appendChild(e),t.innerHTML}pl("RegExp");var ch={pip:"PIP",airplay:"AirPlay",html5:"HTML5",vimeo:"Vimeo",youtube:"YouTube"},uh=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(nu(e)||nu(t))return"";var n=uu(t.i18n,e);if(nu(n))return Object.keys(ch).includes(e)?ch[e]:"";var i={"{seektime}":t.seekTime,"{title}":t.title};return Object.entries(i).forEach((function(e){var t=Eo(e,2),i=t[0],r=t[1];n=ah(n,i,r)})),n},hh=function(){function e(t){yo(this,e),this.enabled=t.config.storage.enabled,this.key=t.config.storage.key}return wo(e,[{key:"get",value:function(t){if(!e.supported||!this.enabled)return null;var n=window.localStorage.getItem(this.key);if(nu(n))return null;var i=JSON.parse(n);return Kc(t)&&t.length?i[t]:i}},{key:"set",value:function(t){if(e.supported&&this.enabled&&zc(t)){var n=this.get();nu(n)&&(n={}),hu(n,t),window.localStorage.setItem(this.key,JSON.stringify(n))}}}],[{key:"supported",get:function(){try{if(!("localStorage"in window))return!1;return window.localStorage.setItem("___test","___test"),window.localStorage.removeItem("___test"),!0}catch(e){return!1}}}]),e}();function fh(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"text";return new Promise((function(n,i){try{var r=new XMLHttpRequest;if(!("withCredentials"in r))return;r.addEventListener("load",(function(){if("text"===t)try{n(JSON.parse(r.responseText))}catch(e){n(r.responseText)}else n(r.response)})),r.addEventListener("error",(function(){throw new Error(r.status)})),r.open("GET",e,!0),r.responseType=t,r.send()}catch(e){i(e)}}))}function dh(e,t){if(Kc(e)){var n=Kc(t),i=function(){return null!==document.getElementById(t)},r=function(e,t){e.innerHTML=t,n&&i()||document.body.insertAdjacentElement("afterbegin",e)};if(!n||!i()){var a=hh.supported,o=document.createElement("div");if(o.setAttribute("hidden",""),n&&o.setAttribute("id",t),a){var s=window.localStorage.getItem("".concat("cache","-").concat(t));if(null!==s){var l=JSON.parse(s);r(o,l.content)}}fh(e).then((function(e){nu(e)||(a&&window.localStorage.setItem("".concat("cache","-").concat(t),JSON.stringify({content:e})),r(o,e))})).catch((function(){}))}}}var ph=Math.ceil,mh=Math.floor;Oe({target:"Math",stat:!0},{trunc:function(e){return(e>0?mh:ph)(e)}});var gh=function(e){return Math.trunc(e/60/60%60,10)},vh=function(e){return Math.trunc(e/60%60,10)},yh=function(e){return Math.trunc(e%60,10)};function bh(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(!Wc(e))return bh(void 0,t,n);var i=function(e){return"0".concat(e).slice(-2)},r=gh(e),a=vh(e),o=yh(e);return r=t||r>0?"".concat(r,":"):"","".concat(n&&e>0?"-":"").concat(r).concat(i(a),":").concat(i(o))}var wh={getIconUrl:function(){var e=new URL(this.config.iconUrl,window.location).host!==window.location.host||au.isIE&&!window.svg4everybody;return{url:this.config.iconUrl,cors:e}},findElements:function(){try{return this.elements.controls=Au.call(this,this.config.selectors.controls.wrapper),this.elements.buttons={play:Eu.call(this,this.config.selectors.buttons.play),pause:Au.call(this,this.config.selectors.buttons.pause),restart:Au.call(this,this.config.selectors.buttons.restart),rewind:Au.call(this,this.config.selectors.buttons.rewind),fastForward:Au.call(this,this.config.selectors.buttons.fastForward),mute:Au.call(this,this.config.selectors.buttons.mute),pip:Au.call(this,this.config.selectors.buttons.pip),airplay:Au.call(this,this.config.selectors.buttons.airplay),settings:Au.call(this,this.config.selectors.buttons.settings),captions:Au.call(this,this.config.selectors.buttons.captions),fullscreen:Au.call(this,this.config.selectors.buttons.fullscreen)},this.elements.progress=Au.call(this,this.config.selectors.progress),this.elements.inputs={seek:Au.call(this,this.config.selectors.inputs.seek),volume:Au.call(this,this.config.selectors.inputs.volume)},this.elements.display={buffer:Au.call(this,this.config.selectors.display.buffer),currentTime:Au.call(this,this.config.selectors.display.currentTime),duration:Au.call(this,this.config.selectors.display.duration)},Qc(this.elements.progress)&&(this.elements.display.seekTooltip=this.elements.progress.querySelector(".".concat(this.config.classNames.tooltip))),!0}catch(e){return this.debug.warn("It looks like there is a problem with your custom controls HTML",e),this.toggleNativeControls(!0),!1}},createIcon:function(e,t){var n=wh.getIconUrl.call(this),i="".concat(n.cors?"":n.url,"#").concat(this.config.iconPrefix),r=document.createElementNS("http://www.w3.org/2000/svg","svg");du(r,hu(t,{role:"presentation",focusable:"false"}));var a=document.createElementNS("http://www.w3.org/2000/svg","use"),o="".concat(i,"-").concat(e);return"href"in a&&a.setAttributeNS("http://www.w3.org/1999/xlink","href",o),a.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o),r.appendChild(a),r},createLabel:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=uh(e,this.config),i=So({},t,{class:[t.class,this.config.classNames.hidden].filter(Boolean).join(" ")});return pu("span",i,n)},createBadge:function(e){if(nu(e))return null;var t=pu("span",{class:this.config.classNames.menu.value});return t.appendChild(pu("span",{class:this.config.classNames.menu.badge},e)),t},createButton:function(e,t){var n=this,i=hu({},t),r=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.toString();return(t=sh(t)).charAt(0).toLowerCase()+t.slice(1)}(e),a={element:"button",toggle:!1,label:null,icon:null,labelPressed:null,iconPressed:null};switch(["element","icon","label"].forEach((function(e){Object.keys(i).includes(e)&&(a[e]=i[e],delete i[e])})),"button"!==a.element||Object.keys(i).includes("type")||(i.type="button"),Object.keys(i).includes("class")?i.class.split(" ").some((function(e){return e===n.config.classNames.control}))||hu(i,{class:"".concat(i.class," ").concat(this.config.classNames.control)}):i.class=this.config.classNames.control,e){case"play":a.toggle=!0,a.label="play",a.labelPressed="pause",a.icon="play",a.iconPressed="pause";break;case"mute":a.toggle=!0,a.label="mute",a.labelPressed="unmute",a.icon="volume",a.iconPressed="muted";break;case"captions":a.toggle=!0,a.label="enableCaptions",a.labelPressed="disableCaptions",a.icon="captions-off",a.iconPressed="captions-on";break;case"fullscreen":a.toggle=!0,a.label="enterFullscreen",a.labelPressed="exitFullscreen",a.icon="enter-fullscreen",a.iconPressed="exit-fullscreen";break;case"play-large":i.class+=" ".concat(this.config.classNames.control,"--overlaid"),r="play",a.label="play",a.icon="play";break;default:nu(a.label)&&(a.label=r),nu(a.icon)&&(a.icon=e)}var o=pu(a.element);return a.toggle?(o.appendChild(wh.createIcon.call(this,a.iconPressed,{class:"icon--pressed"})),o.appendChild(wh.createIcon.call(this,a.icon,{class:"icon--not-pressed"})),o.appendChild(wh.createLabel.call(this,a.labelPressed,{class:"label--pressed"})),o.appendChild(wh.createLabel.call(this,a.label,{class:"label--not-pressed"}))):(o.appendChild(wh.createIcon.call(this,a.icon)),o.appendChild(wh.createLabel.call(this,a.label))),hu(i,bu(this.config.selectors.buttons[r],i)),du(o,i),"play"===r?(Gc(this.elements.buttons[r])||(this.elements.buttons[r]=[]),this.elements.buttons[r].push(o)):this.elements.buttons[r]=o,o},createRange:function(e,t){var n=pu("input",hu(bu(this.config.selectors.inputs[e]),{type:"range",min:0,max:100,step:.01,value:0,autocomplete:"off",role:"slider","aria-label":uh(e,this.config),"aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":0},t));return this.elements.inputs[e]=n,wh.updateRangeFill.call(this,n),hl.setup(n),n},createProgress:function(e,t){var n=pu("progress",hu(bu(this.config.selectors.display[e]),{min:0,max:100,value:0,role:"progressbar","aria-hidden":!0},t));if("volume"!==e){n.appendChild(pu("span",null,"0"));var i={played:"played",buffer:"buffered"}[e],r=i?uh(i,this.config):"";n.innerText="% ".concat(r.toLowerCase())}return this.elements.display[e]=n,n},createTime:function(e,t){var n=bu(this.config.selectors.display[e],t),i=pu("div",hu(n,{class:"".concat(n.class?n.class:""," ").concat(this.config.classNames.display.time," ").trim(),"aria-label":uh(e,this.config)}),"00:00");return this.elements.display[e]=i,i},bindMenuItemShortcuts:function(e,t){var n=this;ju.call(this,e,"keydown keyup",(function(i){if([32,38,39,40].includes(i.which)&&(i.preventDefault(),i.stopPropagation(),"keydown"!==i.type)){var r,a=Su(e,'[role="menuitemradio"]');if(!a&&[32,39].includes(i.which))wh.showMenuPanel.call(n,t,!0);else 32!==i.which&&(40===i.which||a&&39===i.which?(r=e.nextElementSibling,Qc(r)||(r=e.parentNode.firstElementChild)):(r=e.previousElementSibling,Qc(r)||(r=e.parentNode.lastElementChild)),xu.call(n,r,!0))}}),!1),ju.call(this,e,"keyup",(function(e){13===e.which&&wh.focusFirstMenuItem.call(n,null,!0)}))},createMenuItem:function(e){var t=this,n=e.value,i=e.list,r=e.type,a=e.title,o=e.badge,s=void 0===o?null:o,l=e.checked,c=void 0!==l&&l,u=bu(this.config.selectors.inputs[r]),h=pu("button",hu(u,{type:"button",role:"menuitemradio",class:"".concat(this.config.classNames.control," ").concat(u.class?u.class:"").trim(),"aria-checked":c,value:n})),f=pu("span");f.innerHTML=a,Qc(s)&&f.appendChild(s),h.appendChild(f),Object.defineProperty(h,"checked",{enumerable:!0,get:function(){return"true"===h.getAttribute("aria-checked")},set:function(e){e&&Array.from(h.parentNode.children).filter((function(e){return Su(e,'[role="menuitemradio"]')})).forEach((function(e){return e.setAttribute("aria-checked","false")})),h.setAttribute("aria-checked",e?"true":"false")}}),this.listeners.bind(h,"click keyup",(function(e){if(!Zc(e)||32===e.which){switch(e.preventDefault(),e.stopPropagation(),h.checked=!0,r){case"language":t.currentTrack=Number(n);break;case"quality":t.quality=n;break;case"speed":t.speed=parseFloat(n)}wh.showMenuPanel.call(t,"home",Zc(e))}}),r,!1),wh.bindMenuItemShortcuts.call(this,h,r),i.appendChild(h)},formatTime:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!Wc(e))return e;var n=gh(this.duration)>0;return bh(e,n,t)},updateTimeDisplay:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];Qc(e)&&Wc(t)&&(e.innerText=wh.formatTime(t,n))},updateVolume:function(){this.supported.ui&&(Qc(this.elements.inputs.volume)&&wh.setRange.call(this,this.elements.inputs.volume,this.muted?0:this.volume),Qc(this.elements.buttons.mute)&&(this.elements.buttons.mute.pressed=this.muted||0===this.volume))},setRange:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;Qc(e)&&(e.value=t,wh.updateRangeFill.call(this,e))},updateProgress:function(e){var t=this;if(this.supported.ui&&Jc(e)){var n=0;if(e)switch(e.type){case"timeupdate":case"seeking":case"seeked":n=function(e,t){return 0===e||0===t||Number.isNaN(e)||Number.isNaN(t)?0:(e/t*100).toFixed(2)}(this.currentTime,this.duration),"timeupdate"===e.type&&wh.setRange.call(this,this.elements.inputs.seek,n);break;case"playing":case"progress":!function(e,n){var i=Wc(n)?n:0,r=Qc(e)?e:t.elements.display.buffer;if(Qc(r)){r.value=i;var a=r.getElementsByTagName("span")[0];Qc(a)&&(a.childNodes[0].nodeValue=i)}}(this.elements.display.buffer,100*this.buffered)}}},updateRangeFill:function(e){var t=Jc(e)?e.target:e;if(Qc(t)&&"range"===t.getAttribute("type")){if(Su(t,this.config.selectors.inputs.seek)){t.setAttribute("aria-valuenow",this.currentTime);var n=wh.formatTime(this.currentTime),i=wh.formatTime(this.duration),r=uh("seekLabel",this.config);t.setAttribute("aria-valuetext",r.replace("{currentTime}",n).replace("{duration}",i))}else if(Su(t,this.config.selectors.inputs.volume)){var a=100*t.value;t.setAttribute("aria-valuenow",a),t.setAttribute("aria-valuetext","".concat(a.toFixed(1),"%"))}else t.setAttribute("aria-valuenow",t.value);au.isWebkit&&t.style.setProperty("--value","".concat(t.value/t.max*100,"%"))}},updateSeekTooltip:function(e){var t=this;if(this.config.tooltips.seek&&Qc(this.elements.inputs.seek)&&Qc(this.elements.display.seekTooltip)&&0!==this.duration){var n="".concat(this.config.classNames.tooltip,"--visible"),i=function(e){return ku(t.elements.display.seekTooltip,n,e)};if(this.touch)i(!1);else{var r=0,a=this.elements.progress.getBoundingClientRect();if(Jc(e))r=100/a.width*(e.pageX-a.left);else{if(!Tu(this.elements.display.seekTooltip,n))return;r=parseFloat(this.elements.display.seekTooltip.style.left,10)}r<0?r=0:r>100&&(r=100),wh.updateTimeDisplay.call(this,this.elements.display.seekTooltip,this.duration/100*r),this.elements.display.seekTooltip.style.left="".concat(r,"%"),Jc(e)&&["mouseenter","mouseleave"].includes(e.type)&&i("mouseenter"===e.type)}}},timeUpdate:function(e){var t=!Qc(this.elements.display.duration)&&this.config.invertTime;wh.updateTimeDisplay.call(this,this.elements.display.currentTime,t?this.duration-this.currentTime:this.currentTime,t),e&&"timeupdate"===e.type&&this.media.seeking||wh.updateProgress.call(this,e)},durationUpdate:function(){if(this.supported.ui&&(this.config.invertTime||!this.currentTime)){if(this.duration>=Math.pow(2,32))return wu(this.elements.display.currentTime,!0),void wu(this.elements.progress,!0);Qc(this.elements.inputs.seek)&&this.elements.inputs.seek.setAttribute("aria-valuemax",this.duration);var e=Qc(this.elements.display.duration);!e&&this.config.displayDuration&&this.paused&&wh.updateTimeDisplay.call(this,this.elements.display.currentTime,this.duration),e&&wh.updateTimeDisplay.call(this,this.elements.display.duration,this.duration),wh.updateSeekTooltip.call(this)}},toggleMenuButton:function(e,t){wu(this.elements.settings.buttons[e],!t)},updateSetting:function(e,t,n){var i=this.elements.settings.panels[e],r=null,a=t;if("captions"===e)r=this.currentTrack;else{if(r=nu(n)?this[e]:n,nu(r)&&(r=this.config[e].default),!nu(this.options[e])&&!this.options[e].includes(r))return void this.debug.warn("Unsupported value of '".concat(r,"' for ").concat(e));if(!this.config[e].options.includes(r))return void this.debug.warn("Disabled value of '".concat(r,"' for ").concat(e))}if(Qc(a)||(a=i&&i.querySelector('[role="menu"]')),Qc(a)){this.elements.settings.buttons[e].querySelector(".".concat(this.config.classNames.menu.value)).innerHTML=wh.getLabel.call(this,e,r);var o=a&&a.querySelector('[value="'.concat(r,'"]'));Qc(o)&&(o.checked=!0)}},getLabel:function(e,t){switch(e){case"speed":return 1===t?uh("normal",this.config):"".concat(t,"&times;");case"quality":if(Wc(t)){var n=uh("qualityLabel.".concat(t),this.config);return n.length?n:"".concat(t,"p")}return oh(t);case"captions":return Sh.getLabel.call(this);default:return null}},setQualityMenu:function(e){var t=this;if(Qc(this.elements.settings.panels.quality)){var n=this.elements.settings.panels.quality.querySelector('[role="menu"]');Gc(e)&&(this.options.quality=Vu(e).filter((function(e){return t.config.quality.options.includes(e)})));var i=!nu(this.options.quality)&&this.options.quality.length>1;if(wh.toggleMenuButton.call(this,"quality",i),vu(n),wh.checkMenu.call(this),i){var r=function(e){var n=uh("qualityBadge.".concat(e),t.config);return n.length?wh.createBadge.call(t,n):null};this.options.quality.sort((function(e,n){var i=t.config.quality.options;return i.indexOf(e)>i.indexOf(n)?1:-1})).forEach((function(e){wh.createMenuItem.call(t,{value:e,list:n,type:"quality",title:wh.getLabel.call(t,"quality",e),badge:r(e)})})),wh.updateSetting.call(this,"quality",n)}}},setCaptionsMenu:function(){var e=this;if(Qc(this.elements.settings.panels.captions)){var t=this.elements.settings.panels.captions.querySelector('[role="menu"]'),n=Sh.getTracks.call(this),i=Boolean(n.length);if(wh.toggleMenuButton.call(this,"captions",i),vu(t),wh.checkMenu.call(this),i){var r=n.map((function(n,i){return{value:i,checked:e.captions.toggled&&e.currentTrack===i,title:Sh.getLabel.call(e,n),badge:n.language&&wh.createBadge.call(e,n.language.toUpperCase()),list:t,type:"language"}}));r.unshift({value:-1,checked:!this.captions.toggled,title:uh("disabled",this.config),list:t,type:"language"}),r.forEach(wh.createMenuItem.bind(this)),wh.updateSetting.call(this,"captions",t)}}},setSpeedMenu:function(){var e=this;if(Qc(this.elements.settings.panels.speed)){var t=this.elements.settings.panels.speed.querySelector('[role="menu"]');this.options.speed=this.options.speed.filter((function(t){return t>=e.minimumSpeed&&t<=e.maximumSpeed}));var n=!nu(this.options.speed)&&this.options.speed.length>1;wh.toggleMenuButton.call(this,"speed",n),vu(t),wh.checkMenu.call(this),n&&(this.options.speed.forEach((function(n){wh.createMenuItem.call(e,{value:n,list:t,type:"speed",title:wh.getLabel.call(e,"speed",n)})})),wh.updateSetting.call(this,"speed",t))}},checkMenu:function(){var e=this.elements.settings.buttons,t=!nu(e)&&Object.values(e).some((function(e){return!e.hidden}));wu(this.elements.settings.menu,!t)},focusFirstMenuItem:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(!this.elements.settings.popup.hidden){var n=e;Qc(n)||(n=Object.values(this.elements.settings.panels).find((function(e){return!e.hidden})));var i=n.querySelector('[role^="menuitem"]');xu.call(this,i,t)}},toggleMenu:function(e){var t=this.elements.settings.popup,n=this.elements.buttons.settings;if(Qc(t)&&Qc(n)){var i=t.hidden,r=i;if($c(e))r=e;else if(Zc(e)&&27===e.which)r=!1;else if(Jc(e)){var a=Yc(e.composedPath)?e.composedPath()[0]:e.target,o=t.contains(a);if(o||!o&&e.target!==n&&r)return}n.setAttribute("aria-expanded",r),wu(t,!r),ku(this.elements.container,this.config.classNames.menu.open,r),r&&Zc(e)?wh.focusFirstMenuItem.call(this,null,!0):r||i||xu.call(this,n,Zc(e))}},getMenuSize:function(e){var t=e.cloneNode(!0);t.style.position="absolute",t.style.opacity=0,t.removeAttribute("hidden"),e.parentNode.appendChild(t);var n=t.scrollWidth,i=t.scrollHeight;return gu(t),{width:n,height:i}},showMenuPanel:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],i=this.elements.container.querySelector("#plyr-settings-".concat(this.id,"-").concat(t));if(Qc(i)){var r=i.parentNode,a=Array.from(r.children).find((function(e){return!e.hidden}));if(Iu.transitions&&!Iu.reducedMotion){r.style.width="".concat(a.scrollWidth,"px"),r.style.height="".concat(a.scrollHeight,"px");var o=wh.getMenuSize.call(this,i),s=function t(n){n.target===r&&["width","height"].includes(n.propertyName)&&(r.style.width="",r.style.height="",Mu.call(e,r,iu,t))};ju.call(this,r,iu,s),r.style.width="".concat(o.width,"px"),r.style.height="".concat(o.height,"px")}wu(a,!0),wu(i,!1),wh.focusFirstMenuItem.call(this,i,n)}},setDownloadUrl:function(){var e=this.elements.buttons.download;Qc(e)&&e.setAttribute("href",this.download)},create:function(e){var t=this,n=wh.bindMenuItemShortcuts,i=wh.createButton,r=wh.createProgress,a=wh.createRange,o=wh.createTime,s=wh.setQualityMenu,l=wh.setSpeedMenu,c=wh.showMenuPanel;this.elements.controls=null,this.config.controls.includes("play-large")&&this.elements.container.appendChild(i.call(this,"play-large"));var u=pu("div",bu(this.config.selectors.controls.wrapper));this.elements.controls=u;var h={class:"plyr__controls__item"};return Vu(this.config.controls).forEach((function(s){if("restart"===s&&u.appendChild(i.call(t,"restart",h)),"rewind"===s&&u.appendChild(i.call(t,"rewind",h)),"play"===s&&u.appendChild(i.call(t,"play",h)),"fast-forward"===s&&u.appendChild(i.call(t,"fast-forward",h)),"progress"===s){var l=pu("div",{class:"".concat(h.class," plyr__progress__container")}),f=pu("div",bu(t.config.selectors.progress));if(f.appendChild(a.call(t,"seek",{id:"plyr-seek-".concat(e.id)})),f.appendChild(r.call(t,"buffer")),t.config.tooltips.seek){var d=pu("span",{class:t.config.classNames.tooltip},"00:00");f.appendChild(d),t.elements.display.seekTooltip=d}t.elements.progress=f,l.appendChild(t.elements.progress),u.appendChild(l)}if("current-time"===s&&u.appendChild(o.call(t,"currentTime",h)),"duration"===s&&u.appendChild(o.call(t,"duration",h)),"mute"===s||"volume"===s){var p=t.elements.volume;if(Qc(p)&&u.contains(p)||(p=pu("div",hu({},h,{class:"".concat(h.class," plyr__volume").trim()})),t.elements.volume=p,u.appendChild(p)),"mute"===s&&p.appendChild(i.call(t,"mute")),"volume"===s&&!au.isIos){var m={max:1,step:.05,value:t.config.volume};p.appendChild(a.call(t,"volume",hu(m,{id:"plyr-volume-".concat(e.id)})))}}if("captions"===s&&u.appendChild(i.call(t,"captions",h)),"settings"===s&&!nu(t.config.settings)){var g=pu("div",hu({},h,{class:"".concat(h.class," plyr__menu").trim(),hidden:""}));g.appendChild(i.call(t,"settings",{"aria-haspopup":!0,"aria-controls":"plyr-settings-".concat(e.id),"aria-expanded":!1}));var v=pu("div",{class:"plyr__menu__container",id:"plyr-settings-".concat(e.id),hidden:""}),y=pu("div"),b=pu("div",{id:"plyr-settings-".concat(e.id,"-home")}),w=pu("div",{role:"menu"});b.appendChild(w),y.appendChild(b),t.elements.settings.panels.home=b,t.config.settings.forEach((function(i){var r=pu("button",hu(bu(t.config.selectors.buttons.settings),{type:"button",class:"".concat(t.config.classNames.control," ").concat(t.config.classNames.control,"--forward"),role:"menuitem","aria-haspopup":!0,hidden:""}));n.call(t,r,i),ju.call(t,r,"click",(function(){c.call(t,i,!1)}));var a=pu("span",null,uh(i,t.config)),o=pu("span",{class:t.config.classNames.menu.value});o.innerHTML=e[i],a.appendChild(o),r.appendChild(a),w.appendChild(r);var s=pu("div",{id:"plyr-settings-".concat(e.id,"-").concat(i),hidden:""}),l=pu("button",{type:"button",class:"".concat(t.config.classNames.control," ").concat(t.config.classNames.control,"--back")});l.appendChild(pu("span",{"aria-hidden":!0},uh(i,t.config))),l.appendChild(pu("span",{class:t.config.classNames.hidden},uh("menuBack",t.config))),ju.call(t,s,"keydown",(function(e){37===e.which&&(e.preventDefault(),e.stopPropagation(),c.call(t,"home",!0))}),!1),ju.call(t,l,"click",(function(){c.call(t,"home",!1)})),s.appendChild(l),s.appendChild(pu("div",{role:"menu"})),y.appendChild(s),t.elements.settings.buttons[i]=r,t.elements.settings.panels[i]=s})),v.appendChild(y),g.appendChild(v),u.appendChild(g),t.elements.settings.popup=v,t.elements.settings.menu=g}if("pip"===s&&Iu.pip&&u.appendChild(i.call(t,"pip",h)),"airplay"===s&&Iu.airplay&&u.appendChild(i.call(t,"airplay",h)),"download"===s){var k=hu({},h,{element:"a",href:t.download,target:"_blank"});t.isHTML5&&(k.download="");var T=t.config.urls.download;!tu(T)&&t.isEmbed&&hu(k,{icon:"logo-".concat(t.provider),label:t.provider}),u.appendChild(i.call(t,"download",k))}"fullscreen"===s&&u.appendChild(i.call(t,"fullscreen",h))})),this.isHTML5&&s.call(this,Bu.getQualityOptions.call(this)),l.call(this),u},inject:function(){var e=this;if(this.config.loadSprite){var t=wh.getIconUrl.call(this);t.cors&&dh(t.url,"sprite-plyr")}this.id=Math.floor(1e4*Math.random());var n=null;this.elements.controls=null;var i={id:this.id,seektime:this.config.seekTime,title:this.config.title},r=!0;Yc(this.config.controls)&&(this.config.controls=this.config.controls.call(this,i)),this.config.controls||(this.config.controls=[]),Qc(this.config.controls)||Kc(this.config.controls)?n=this.config.controls:(n=wh.create.call(this,{id:this.id,seektime:this.config.seekTime,speed:this.speed,quality:this.quality,captions:Sh.getLabel.call(this)}),r=!1);var a,o=function(e){var t=e;return Object.entries(i).forEach((function(e){var n=Eo(e,2),i=n[0],r=n[1];t=ah(t,"{".concat(i,"}"),r)})),t};if(r&&(Kc(this.config.controls)?n=o(n):Qc(n)&&(n.innerHTML=o(n.innerHTML))),Kc(this.config.selectors.controls.container)&&(a=document.querySelector(this.config.selectors.controls.container)),Qc(a)||(a=this.elements.container),a[Qc(n)?"insertAdjacentElement":"insertAdjacentHTML"]("afterbegin",n),Qc(this.elements.controls)||wh.findElements.call(this),!nu(this.elements.buttons)){var s=function(t){var n=e.config.classNames.controlPressed;Object.defineProperty(t,"pressed",{enumerable:!0,get:function(){return Tu(t,n)},set:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];ku(t,n,e)}})};Object.values(this.elements.buttons).filter(Boolean).forEach((function(e){Gc(e)||Xc(e)?Array.from(e).filter(Boolean).forEach(s):s(e)}))}if(au.isEdge&&ru(a),this.config.tooltips.controls){var l=this.config,c=l.classNames,u=l.selectors,h="".concat(u.controls.wrapper," ").concat(u.labels," .").concat(c.hidden),f=Eu.call(this,h);Array.from(f).forEach((function(t){ku(t,e.config.classNames.hidden,!1),ku(t,e.config.classNames.tooltip,!0)}))}}};function kh(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=e;if(t){var i=document.createElement("a");i.href=n,n=i.href}try{return new URL(n)}catch(e){return null}}function Th(e){var t=new URLSearchParams;return zc(e)&&Object.entries(e).forEach((function(e){var n=Eo(e,2),i=n[0],r=n[1];t.set(i,r)})),t}var Sh={setup:function(){if(this.supported.ui)if(!this.isVideo||this.isYouTube||this.isHTML5&&!Iu.textTracks)Gc(this.config.controls)&&this.config.controls.includes("settings")&&this.config.settings.includes("captions")&&wh.setCaptionsMenu.call(this);else{if(Qc(this.elements.captions)||(this.elements.captions=pu("div",bu(this.config.selectors.captions)),function(e,t){Qc(e)&&Qc(t)&&t.parentNode.insertBefore(e,t.nextSibling)}(this.elements.captions,this.elements.wrapper)),au.isIE&&window.URL){var e=this.media.querySelectorAll("track");Array.from(e).forEach((function(e){var t=e.getAttribute("src"),n=kh(t);null!==n&&n.hostname!==window.location.href.hostname&&["http:","https:"].includes(n.protocol)&&fh(t,"blob").then((function(t){e.setAttribute("src",window.URL.createObjectURL(t))})).catch((function(){gu(e)}))}))}var t=Vu((navigator.languages||[navigator.language||navigator.userLanguage||"en"]).map((function(e){return e.split("-")[0]}))),n=(this.storage.get("language")||this.config.captions.language||"auto").toLowerCase();if("auto"===n)n=Eo(t,1)[0];var i=this.storage.get("captions");if($c(i)||(i=this.config.captions.active),Object.assign(this.captions,{toggled:!1,active:i,language:n,languages:t}),this.isHTML5){var r=this.config.captions.update?"addtrack removetrack":"removetrack";ju.call(this,this.media.textTracks,r,Sh.update.bind(this))}setTimeout(Sh.update.bind(this),0)}},update:function(){var e=this,t=Sh.getTracks.call(this,!0),n=this.captions,i=n.active,r=n.language,a=n.meta,o=n.currentTrackNode,s=Boolean(t.find((function(e){return e.language===r})));this.isHTML5&&this.isVideo&&t.filter((function(e){return!a.get(e)})).forEach((function(t){e.debug.log("Track added",t),a.set(t,{default:"showing"===t.mode}),t.mode="hidden",ju.call(e,t,"cuechange",(function(){return Sh.updateCues.call(e)}))})),(s&&this.language!==r||!t.includes(o))&&(Sh.setLanguage.call(this,r),Sh.toggle.call(this,i&&s)),ku(this.elements.container,this.config.classNames.captions.enabled,!nu(t)),(this.config.controls||[]).includes("settings")&&this.config.settings.includes("captions")&&wh.setCaptionsMenu.call(this)},toggle:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(this.supported.ui){var n=this.captions.toggled,i=this.config.classNames.captions.active,r=Vc(e)?!n:e;if(r!==n){if(t||(this.captions.active=r,this.storage.set({captions:r})),!this.language&&r&&!t){var a=Sh.getTracks.call(this),o=Sh.findTrack.call(this,[this.captions.language].concat(Ao(this.captions.languages)),!0);return this.captions.language=o.language,void Sh.set.call(this,a.indexOf(o))}this.elements.buttons.captions&&(this.elements.buttons.captions.pressed=r),ku(this.elements.container,i,r),this.captions.toggled=r,wh.updateSetting.call(this,"captions"),Ru.call(this,this.media,r?"captionsenabled":"captionsdisabled")}}},set:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=Sh.getTracks.call(this);if(-1!==e)if(Wc(e))if(e in n){if(this.captions.currentTrack!==e){this.captions.currentTrack=e;var i=n[e],r=i||{},a=r.language;this.captions.currentTrackNode=i,wh.updateSetting.call(this,"captions"),t||(this.captions.language=a,this.storage.set({language:a})),this.isVimeo&&this.embed.enableTextTrack(a),Ru.call(this,this.media,"languagechange")}Sh.toggle.call(this,!0,t),this.isHTML5&&this.isVideo&&Sh.updateCues.call(this)}else this.debug.warn("Track not found",e);else this.debug.warn("Invalid caption argument",e);else Sh.toggle.call(this,!1,t)},setLanguage:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];if(Kc(e)){var n=e.toLowerCase();this.captions.language=n;var i=Sh.getTracks.call(this),r=Sh.findTrack.call(this,[n]);Sh.set.call(this,i.indexOf(r),t)}else this.debug.warn("Invalid language argument",e)},getTracks:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],n=Array.from((this.media||{}).textTracks||[]);return n.filter((function(n){return!e.isHTML5||t||e.captions.meta.has(n)})).filter((function(e){return["captions","subtitles"].includes(e.kind)}))},findTrack:function(e){var t,n=this,i=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=Sh.getTracks.call(this),a=function(e){return Number((n.captions.meta.get(e)||{}).default)},o=Array.from(r).sort((function(e,t){return a(t)-a(e)}));return e.every((function(e){return!(t=o.find((function(t){return t.language===e})))})),t||(i?o[0]:void 0)},getCurrentTrack:function(){return Sh.getTracks.call(this)[this.currentTrack]},getLabel:function(e){var t=e;return!eu(t)&&Iu.textTracks&&this.captions.toggled&&(t=Sh.getCurrentTrack.call(this)),eu(t)?nu(t.label)?nu(t.language)?uh("enabled",this.config):e.language.toUpperCase():t.label:uh("disabled",this.config)},updateCues:function(e){if(this.supported.ui)if(Qc(this.elements.captions))if(Vc(e)||Array.isArray(e)){var t=e;if(!t){var n=Sh.getCurrentTrack.call(this);t=Array.from((n||{}).activeCues||[]).map((function(e){return e.getCueAsHTML()})).map(lh)}var i=t.map((function(e){return e.trim()})).join("\n");if(i!==this.elements.captions.innerHTML){vu(this.elements.captions);var r=pu("span",bu(this.config.selectors.caption));r.innerHTML=i,this.elements.captions.appendChild(r),Ru.call(this,this.media,"cuechange")}}else this.debug.warn("updateCues: Invalid input",e);else this.debug.warn("No captions element to render to")}},Eh={enabled:!0,title:"",debug:!1,autoplay:!1,autopause:!0,playsinline:!0,seekTime:10,volume:1,muted:!1,duration:null,displayDuration:!0,invertTime:!0,toggleInvert:!0,ratio:null,clickToPlay:!0,hideControls:!0,resetOnEnd:!1,disableContextMenu:!0,loadSprite:!0,iconPrefix:"plyr",iconUrl:"https://cdn.plyr.io/3.5.10/plyr.svg",blankVideo:"https://cdn.plyr.io/static/blank.mp4",quality:{default:576,options:[4320,2880,2160,1440,1080,720,576,480,360,240],forced:!1,onChange:null},loop:{active:!1},speed:{selected:1,options:[.5,.75,1,1.25,1.5,1.75,2,4]},keyboard:{focused:!0,global:!1},tooltips:{controls:!1,seek:!0},captions:{active:!1,language:"auto",update:!1},fullscreen:{enabled:!0,fallback:!0,iosNative:!1},storage:{enabled:!0,key:"plyr"},controls:["play-large","play","progress","current-time","mute","volume","captions","settings","pip","airplay","fullscreen"],settings:["captions","quality","speed"],i18n:{restart:"Restart",rewind:"Rewind {seektime}s",play:"Play",pause:"Pause",fastForward:"Forward {seektime}s",seek:"Seek",seekLabel:"{currentTime} of {duration}",played:"Played",buffered:"Buffered",currentTime:"Current time",duration:"Duration",volume:"Volume",mute:"Mute",unmute:"Unmute",enableCaptions:"Enable captions",disableCaptions:"Disable captions",download:"Download",enterFullscreen:"Enter fullscreen",exitFullscreen:"Exit fullscreen",frameTitle:"Player for {title}",captions:"Captions",settings:"Settings",pip:"PIP",menuBack:"Go back to previous menu",speed:"Speed",normal:"Normal",quality:"Quality",loop:"Loop",start:"Start",end:"End",all:"All",reset:"Reset",disabled:"Disabled",enabled:"Enabled",advertisement:"Ad",qualityBadge:{2160:"4K",1440:"HD",1080:"HD",720:"HD",576:"SD",480:"SD"}},urls:{download:null,vimeo:{sdk:"https://player.vimeo.com/api/player.js",iframe:"https://player.vimeo.com/video/{0}?{1}",api:"https://vimeo.com/api/v2/video/{0}.json"},youtube:{sdk:"https://www.youtube.com/iframe_api",api:"https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"},googleIMA:{sdk:"https://imasdk.googleapis.com/js/sdkloader/ima3.js"}},listeners:{seek:null,play:null,pause:null,restart:null,rewind:null,fastForward:null,mute:null,volume:null,captions:null,download:null,fullscreen:null,pip:null,airplay:null,speed:null,quality:null,loop:null,language:null},events:["ended","progress","stalled","playing","waiting","canplay","canplaythrough","loadstart","loadeddata","loadedmetadata","timeupdate","volumechange","play","pause","error","seeking","seeked","emptied","ratechange","cuechange","download","enterfullscreen","exitfullscreen","captionsenabled","captionsdisabled","languagechange","controlshidden","controlsshown","ready","statechange","qualitychange","adsloaded","adscontentpause","adscontentresume","adstarted","adsmidpoint","adscomplete","adsallcomplete","adsimpression","adsclick"],selectors:{editable:"input, textarea, select, [contenteditable]",container:".plyr",controls:{container:null,wrapper:".plyr__controls"},labels:"[data-plyr]",buttons:{play:'[data-plyr="play"]',pause:'[data-plyr="pause"]',restart:'[data-plyr="restart"]',rewind:'[data-plyr="rewind"]',fastForward:'[data-plyr="fast-forward"]',mute:'[data-plyr="mute"]',captions:'[data-plyr="captions"]',download:'[data-plyr="download"]',fullscreen:'[data-plyr="fullscreen"]',pip:'[data-plyr="pip"]',airplay:'[data-plyr="airplay"]',settings:'[data-plyr="settings"]',loop:'[data-plyr="loop"]'},inputs:{seek:'[data-plyr="seek"]',volume:'[data-plyr="volume"]',speed:'[data-plyr="speed"]',language:'[data-plyr="language"]',quality:'[data-plyr="quality"]'},display:{currentTime:".plyr__time--current",duration:".plyr__time--duration",buffer:".plyr__progress__buffer",loop:".plyr__progress__loop",volume:".plyr__volume--display"},progress:".plyr__progress",captions:".plyr__captions",caption:".plyr__caption"},classNames:{type:"plyr--{0}",provider:"plyr--{0}",video:"plyr__video-wrapper",embed:"plyr__video-embed",videoFixedRatio:"plyr__video-wrapper--fixed-ratio",embedContainer:"plyr__video-embed__container",poster:"plyr__poster",posterEnabled:"plyr__poster-enabled",ads:"plyr__ads",control:"plyr__control",controlPressed:"plyr__control--pressed",playing:"plyr--playing",paused:"plyr--paused",stopped:"plyr--stopped",loading:"plyr--loading",hover:"plyr--hover",tooltip:"plyr__tooltip",cues:"plyr__cues",hidden:"plyr__sr-only",hideControls:"plyr--hide-controls",isIos:"plyr--is-ios",isTouch:"plyr--is-touch",uiSupported:"plyr--full-ui",noTransition:"plyr--no-transition",display:{time:"plyr__time"},menu:{value:"plyr__menu__value",badge:"plyr__badge",open:"plyr--menu-open"},captions:{enabled:"plyr--captions-enabled",active:"plyr--captions-active"},fullscreen:{enabled:"plyr--fullscreen-enabled",fallback:"plyr--fullscreen-fallback"},pip:{supported:"plyr--pip-supported",active:"plyr--pip-active"},airplay:{supported:"plyr--airplay-supported",active:"plyr--airplay-active"},tabFocus:"plyr__tab-focus",previewThumbnails:{thumbContainer:"plyr__preview-thumb",thumbContainerShown:"plyr__preview-thumb--is-shown",imageContainer:"plyr__preview-thumb__image-container",timeContainer:"plyr__preview-thumb__time-container",scrubbingContainer:"plyr__preview-scrubbing",scrubbingContainerShown:"plyr__preview-scrubbing--is-shown"}},attributes:{embed:{provider:"data-plyr-provider",id:"data-plyr-embed-id"}},ads:{enabled:!1,publisherId:"",tagUrl:""},previewThumbnails:{enabled:!1,src:""},vimeo:{byline:!1,portrait:!1,title:!1,speed:!0,transparent:!1,sidedock:!1,controls:!1,referrerPolicy:null},youtube:{noCookie:!1,rel:0,showinfo:0,iv_load_policy:3,modestbranding:1}},Ah="picture-in-picture",xh="inline",Ch={html5:"html5",youtube:"youtube",vimeo:"vimeo"},Ph="audio",Ih="video";var Oh=function(){},Lh=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];yo(this,e),this.enabled=window.console&&t,this.enabled&&this.log("Debugging enabled")}return wo(e,[{key:"log",get:function(){return this.enabled?Function.prototype.bind.call(console.log,console):Oh}},{key:"warn",get:function(){return this.enabled?Function.prototype.bind.call(console.warn,console):Oh}},{key:"error",get:function(){return this.enabled?Function.prototype.bind.call(console.error,console):Oh}}]),e}(),jh=function(){function e(t){var n=this;yo(this,e),this.player=t,this.prefix=e.prefix,this.property=e.property,this.scrollPosition={x:0,y:0},this.forceFallback="force"===t.config.fullscreen.fallback,ju.call(this.player,document,"ms"===this.prefix?"MSFullscreenChange":"".concat(this.prefix,"fullscreenchange"),(function(){n.onChange()})),ju.call(this.player,this.player.elements.container,"dblclick",(function(e){Qc(n.player.elements.controls)&&n.player.elements.controls.contains(e.target)||n.toggle()})),ju.call(this,this.player.elements.container,"keydown",(function(e){return n.trapFocus(e)})),this.update()}return wo(e,[{key:"onChange",value:function(){if(this.enabled){var e=this.player.elements.buttons.fullscreen;Qc(e)&&(e.pressed=this.active),Ru.call(this.player,this.target,this.active?"enterfullscreen":"exitfullscreen",!0)}}},{key:"toggleFallback",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(e?this.scrollPosition={x:window.scrollX||0,y:window.scrollY||0}:window.scrollTo(this.scrollPosition.x,this.scrollPosition.y),document.body.style.overflow=e?"hidden":"",ku(this.target,this.player.config.classNames.fullscreen.fallback,e),au.isIos){var t=document.head.querySelector('meta[name="viewport"]'),n="viewport-fit=cover";t||(t=document.createElement("meta")).setAttribute("name","viewport");var i=Kc(t.content)&&t.content.includes(n);e?(this.cleanupViewport=!i,i||(t.content+=",".concat(n))):this.cleanupViewport&&(t.content=t.content.split(",").filter((function(e){return e.trim()!==n})).join(","))}this.onChange()}},{key:"trapFocus",value:function(e){if(!au.isIos&&this.active&&"Tab"===e.key&&9===e.keyCode){var t=document.activeElement,n=Eu.call(this.player,"a[href], button:not(:disabled), input:not(:disabled), [tabindex]"),i=Eo(n,1)[0],r=n[n.length-1];t!==r||e.shiftKey?t===i&&e.shiftKey&&(r.focus(),e.preventDefault()):(i.focus(),e.preventDefault())}}},{key:"update",value:function(){var t;this.enabled?(t=this.forceFallback?"Fallback (forced)":e.native?"Native":"Fallback",this.player.debug.log("".concat(t," fullscreen enabled"))):this.player.debug.log("Fullscreen not supported and fallback disabled");ku(this.player.elements.container,this.player.config.classNames.fullscreen.enabled,this.enabled)}},{key:"enter",value:function(){this.enabled&&(au.isIos&&this.player.config.fullscreen.iosNative?this.target.webkitEnterFullscreen():!e.native||this.forceFallback?this.toggleFallback(!0):this.prefix?nu(this.prefix)||this.target["".concat(this.prefix,"Request").concat(this.property)]():this.target.requestFullscreen({navigationUI:"hide"}))}},{key:"exit",value:function(){if(this.enabled)if(au.isIos&&this.player.config.fullscreen.iosNative)this.target.webkitExitFullscreen(),this.player.play();else if(!e.native||this.forceFallback)this.toggleFallback(!1);else if(this.prefix){if(!nu(this.prefix)){var t="moz"===this.prefix?"Cancel":"Exit";document["".concat(this.prefix).concat(t).concat(this.property)]()}}else(document.cancelFullScreen||document.exitFullscreen).call(document)}},{key:"toggle",value:function(){this.active?this.exit():this.enter()}},{key:"usingNative",get:function(){return e.native&&!this.forceFallback}},{key:"enabled",get:function(){return(e.native||this.player.config.fullscreen.fallback)&&this.player.config.fullscreen.enabled&&this.player.supported.ui&&this.player.isVideo}},{key:"active",get:function(){return!!this.enabled&&(!e.native||this.forceFallback?Tu(this.target,this.player.config.classNames.fullscreen.fallback):(this.prefix?document["".concat(this.prefix).concat(this.property,"Element")]:document.fullscreenElement)===this.target)}},{key:"target",get:function(){return au.isIos&&this.player.config.fullscreen.iosNative?this.player.media:this.player.elements.container}}],[{key:"native",get:function(){return!!(document.fullscreenEnabled||document.webkitFullscreenEnabled||document.mozFullScreenEnabled||document.msFullscreenEnabled)}},{key:"prefix",get:function(){if(Yc(document.exitFullscreen))return"";var e="";return["webkit","moz","ms"].some((function(t){return!(!Yc(document["".concat(t,"ExitFullscreen")])&&!Yc(document["".concat(t,"CancelFullScreen")]))&&(e=t,!0)})),e}},{key:"property",get:function(){return"moz"===this.prefix?"FullScreen":"Fullscreen"}}]),e}(),Mh=Math.sign||function(e){return 0==(e=+e)||e!=e?e:e<0?-1:1};function Nh(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return new Promise((function(n,i){var r=new Image,a=function(){delete r.onload,delete r.onerror,(r.naturalWidth>=t?n:i)(r)};Object.assign(r,{onload:a,onerror:a,src:e})}))}Oe({target:"Math",stat:!0},{sign:Mh});var Rh={addStyleHook:function(){ku(this.elements.container,this.config.selectors.container.replace(".",""),!0),ku(this.elements.container,this.config.classNames.uiSupported,this.supported.ui)},toggleNativeControls:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];e&&this.isHTML5?this.media.setAttribute("controls",""):this.media.removeAttribute("controls")},build:function(){var e=this;if(this.listeners.media(),!this.supported.ui)return this.debug.warn("Basic support only for ".concat(this.provider," ").concat(this.type)),void Rh.toggleNativeControls.call(this,!0);Qc(this.elements.controls)||(wh.inject.call(this),this.listeners.controls()),Rh.toggleNativeControls.call(this),this.isHTML5&&Sh.setup.call(this),this.volume=null,this.muted=null,this.loop=null,this.quality=null,this.speed=null,wh.updateVolume.call(this),wh.timeUpdate.call(this),Rh.checkPlaying.call(this),ku(this.elements.container,this.config.classNames.pip.supported,Iu.pip&&this.isHTML5&&this.isVideo),ku(this.elements.container,this.config.classNames.airplay.supported,Iu.airplay&&this.isHTML5),ku(this.elements.container,this.config.classNames.isIos,au.isIos),ku(this.elements.container,this.config.classNames.isTouch,this.touch),this.ready=!0,setTimeout((function(){Ru.call(e,e.media,"ready")}),0),Rh.setTitle.call(this),this.poster&&Rh.setPoster.call(this,this.poster,!1).catch((function(){})),this.config.duration&&wh.durationUpdate.call(this)},setTitle:function(){var e=uh("play",this.config);if(Kc(this.config.title)&&!nu(this.config.title)&&(e+=", ".concat(this.config.title)),Array.from(this.elements.buttons.play||[]).forEach((function(t){t.setAttribute("aria-label",e)})),this.isEmbed){var t=Au.call(this,"iframe");if(!Qc(t))return;var n=nu(this.config.title)?"video":this.config.title,i=uh("frameTitle",this.config);t.setAttribute("title",i.replace("{title}",n))}},togglePoster:function(e){ku(this.elements.container,this.config.classNames.posterEnabled,e)},setPoster:function(e){var t=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return n&&this.poster?Promise.reject(new Error("Poster already set")):(this.media.setAttribute("poster",e),this.isHTML5?Promise.resolve(e):Uu.call(this).then((function(){return Nh(e)})).catch((function(n){throw e===t.poster&&Rh.togglePoster.call(t,!1),n})).then((function(){if(e!==t.poster)throw new Error("setPoster cancelled by later call to setPoster")})).then((function(){return Object.assign(t.elements.poster.style,{backgroundImage:"url('".concat(e,"')"),backgroundSize:""}),Rh.togglePoster.call(t,!0),e})))},checkPlaying:function(e){var t=this;ku(this.elements.container,this.config.classNames.playing,this.playing),ku(this.elements.container,this.config.classNames.paused,this.paused),ku(this.elements.container,this.config.classNames.stopped,this.stopped),Array.from(this.elements.buttons.play||[]).forEach((function(e){Object.assign(e,{pressed:t.playing}),e.setAttribute("aria-label",uh(t.playing?"pause":"play",t.config))})),Jc(e)&&"timeupdate"===e.type||Rh.toggleControls.call(this)},checkLoading:function(e){var t=this;this.loading=["stalled","waiting"].includes(e.type),clearTimeout(this.timers.loading),this.timers.loading=setTimeout((function(){ku(t.elements.container,t.config.classNames.loading,t.loading),Rh.toggleControls.call(t)}),this.loading?250:0)},toggleControls:function(e){var t=this.elements.controls;if(t&&this.config.hideControls){var n=this.touch&&this.lastSeekTime+2e3>Date.now();this.toggleControls(Boolean(e||this.loading||this.paused||t.pressed||t.hover||n))}}},_h=function(){function e(t){yo(this,e),this.player=t,this.lastKey=null,this.focusTimer=null,this.lastKeyDown=null,this.handleKey=this.handleKey.bind(this),this.toggleMenu=this.toggleMenu.bind(this),this.setTabFocus=this.setTabFocus.bind(this),this.firstTouch=this.firstTouch.bind(this)}return wo(e,[{key:"handleKey",value:function(e){var t=this.player,n=t.elements,i=e.keyCode?e.keyCode:e.which,r="keydown"===e.type,a=r&&i===this.lastKey;if(!(e.altKey||e.ctrlKey||e.metaKey||e.shiftKey)&&Wc(i)){if(r){var o=document.activeElement;if(Qc(o)){var s=t.config.selectors.editable;if(o!==n.inputs.seek&&Su(o,s))return;if(32===e.which&&Su(o,'button, [role^="menuitem"]'))return}switch([32,37,38,39,40,48,49,50,51,52,53,54,56,57,67,70,73,75,76,77,79].includes(i)&&(e.preventDefault(),e.stopPropagation()),i){case 48:case 49:case 50:case 51:case 52:case 53:case 54:case 55:case 56:case 57:a||(t.currentTime=t.duration/10*(i-48));break;case 32:case 75:a||t.togglePlay();break;case 38:t.increaseVolume(.1);break;case 40:t.decreaseVolume(.1);break;case 77:a||(t.muted=!t.muted);break;case 39:t.forward();break;case 37:t.rewind();break;case 70:t.fullscreen.toggle();break;case 67:a||t.toggleCaptions();break;case 76:t.loop=!t.loop}27===i&&!t.fullscreen.usingNative&&t.fullscreen.active&&t.fullscreen.toggle(),this.lastKey=i}else this.lastKey=null}}},{key:"toggleMenu",value:function(e){wh.toggleMenu.call(this.player,e)}},{key:"firstTouch",value:function(){var e=this.player,t=e.elements;e.touch=!0,ku(t.container,e.config.classNames.isTouch,!0)}},{key:"setTabFocus",value:function(e){var t=this.player,n=t.elements;if(clearTimeout(this.focusTimer),"keydown"!==e.type||9===e.which){"keydown"===e.type&&(this.lastKeyDown=e.timeStamp);var i,r=e.timeStamp-this.lastKeyDown<=20;if("focus"!==e.type||r)i=t.config.classNames.tabFocus,ku(Eu.call(t,".".concat(i)),i,!1),this.focusTimer=setTimeout((function(){var e=document.activeElement;n.container.contains(e)&&ku(document.activeElement,t.config.classNames.tabFocus,!0)}),10)}}},{key:"global",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=this.player;t.config.keyboard.global&&Lu.call(t,window,"keydown keyup",this.handleKey,e,!1),Lu.call(t,document.body,"click",this.toggleMenu,e),Nu.call(t,document.body,"touchstart",this.firstTouch),Lu.call(t,document.body,"keydown focus blur",this.setTabFocus,e,!1,!0)}},{key:"container",value:function(){var e=this.player,t=e.config,n=e.elements,i=e.timers;!t.keyboard.global&&t.keyboard.focused&&ju.call(e,n.container,"keydown keyup",this.handleKey,!1),ju.call(e,n.container,"mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen",(function(t){var r=n.controls;r&&"enterfullscreen"===t.type&&(r.pressed=!1,r.hover=!1);var a=0;["touchstart","touchmove","mousemove"].includes(t.type)&&(Rh.toggleControls.call(e,!0),a=e.touch?3e3:2e3),clearTimeout(i.controls),i.controls=setTimeout((function(){return Rh.toggleControls.call(e,!1)}),a)}));var r=function(t){if(!t)return Hu.call(e);var i=n.container.getBoundingClientRect(),r=i.width,a=i.height;return Hu.call(e,"".concat(r,":").concat(a))},a=function(){clearTimeout(i.resized),i.resized=setTimeout(r,50)};ju.call(e,n.container,"enterfullscreen exitfullscreen",(function(t){var i=e.fullscreen,o=i.target,s=i.usingNative;if(o===n.container&&(e.isEmbed||!nu(e.config.ratio))){var l="enterfullscreen"===t.type,c=r(l);c.padding;!function(t,n,i){if(e.isVimeo){var r=e.elements.wrapper.firstChild,a=Eo(t,2)[1],o=Eo(qu.call(e),2),s=o[0],l=o[1];r.style.maxWidth=i?"".concat(a/l*s,"px"):null,r.style.margin=i?"0 auto":null}}(c.ratio,0,l),s||(l?ju.call(e,window,"resize",a):Mu.call(e,window,"resize",a))}}))}},{key:"media",value:function(){var e=this,t=this.player,n=t.elements;if(ju.call(t,t.media,"timeupdate seeking seeked",(function(e){return wh.timeUpdate.call(t,e)})),ju.call(t,t.media,"durationchange loadeddata loadedmetadata",(function(e){return wh.durationUpdate.call(t,e)})),ju.call(t,t.media,"ended",(function(){t.isHTML5&&t.isVideo&&t.config.resetOnEnd&&(t.restart(),t.pause())})),ju.call(t,t.media,"progress playing seeking seeked",(function(e){return wh.updateProgress.call(t,e)})),ju.call(t,t.media,"volumechange",(function(e){return wh.updateVolume.call(t,e)})),ju.call(t,t.media,"playing play pause ended emptied timeupdate",(function(e){return Rh.checkPlaying.call(t,e)})),ju.call(t,t.media,"waiting canplay seeked playing",(function(e){return Rh.checkLoading.call(t,e)})),t.supported.ui&&t.config.clickToPlay&&!t.isAudio){var i=Au.call(t,".".concat(t.config.classNames.video));if(!Qc(i))return;ju.call(t,n.container,"click",(function(r){([n.container,i].includes(r.target)||i.contains(r.target))&&(t.touch&&t.config.hideControls||(t.ended?(e.proxy(r,t.restart,"restart"),e.proxy(r,t.play,"play")):e.proxy(r,t.togglePlay,"play")))}))}t.supported.ui&&t.config.disableContextMenu&&ju.call(t,n.wrapper,"contextmenu",(function(e){e.preventDefault()}),!1),ju.call(t,t.media,"volumechange",(function(){t.storage.set({volume:t.volume,muted:t.muted})})),ju.call(t,t.media,"ratechange",(function(){wh.updateSetting.call(t,"speed"),t.storage.set({speed:t.speed})})),ju.call(t,t.media,"qualitychange",(function(e){wh.updateSetting.call(t,"quality",null,e.detail.quality)})),ju.call(t,t.media,"ready qualitychange",(function(){wh.setDownloadUrl.call(t)}));var r=t.config.events.concat(["keyup","keydown"]).join(" ");ju.call(t,t.media,r,(function(e){var i=e.detail,r=void 0===i?{}:i;"error"===e.type&&(r=t.media.error),Ru.call(t,n.container,e.type,!0,r)}))}},{key:"proxy",value:function(e,t,n){var i=this.player,r=i.config.listeners[n],a=!0;Yc(r)&&(a=r.call(i,e)),!1!==a&&Yc(t)&&t.call(i,e)}},{key:"bind",value:function(e,t,n,i){var r=this,a=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],o=this.player,s=o.config.listeners[i],l=Yc(s);ju.call(o,e,t,(function(e){return r.proxy(e,n,i)}),a&&!l)}},{key:"controls",value:function(){var e=this,t=this.player,n=t.elements,i=au.isIE?"change":"input";if(n.buttons.play&&Array.from(n.buttons.play).forEach((function(n){e.bind(n,"click",t.togglePlay,"play")})),this.bind(n.buttons.restart,"click",t.restart,"restart"),this.bind(n.buttons.rewind,"click",t.rewind,"rewind"),this.bind(n.buttons.fastForward,"click",t.forward,"fastForward"),this.bind(n.buttons.mute,"click",(function(){t.muted=!t.muted}),"mute"),this.bind(n.buttons.captions,"click",(function(){return t.toggleCaptions()})),this.bind(n.buttons.download,"click",(function(){Ru.call(t,t.media,"download")}),"download"),this.bind(n.buttons.fullscreen,"click",(function(){t.fullscreen.toggle()}),"fullscreen"),this.bind(n.buttons.pip,"click",(function(){t.pip="toggle"}),"pip"),this.bind(n.buttons.airplay,"click",t.airplay,"airplay"),this.bind(n.buttons.settings,"click",(function(e){e.stopPropagation(),e.preventDefault(),wh.toggleMenu.call(t,e)}),null,!1),this.bind(n.buttons.settings,"keyup",(function(e){var n=e.which;[13,32].includes(n)&&(13!==n?(e.preventDefault(),e.stopPropagation(),wh.toggleMenu.call(t,e)):wh.focusFirstMenuItem.call(t,null,!0))}),null,!1),this.bind(n.settings.menu,"keydown",(function(e){27===e.which&&wh.toggleMenu.call(t,e)})),this.bind(n.inputs.seek,"mousedown mousemove",(function(e){var t=n.progress.getBoundingClientRect(),i=100/t.width*(e.pageX-t.left);e.currentTarget.setAttribute("seek-value",i)})),this.bind(n.inputs.seek,"mousedown mouseup keydown keyup touchstart touchend",(function(e){var n=e.currentTarget,i=e.keyCode?e.keyCode:e.which;if(!Zc(e)||39===i||37===i){t.lastSeekTime=Date.now();var r=n.hasAttribute("play-on-seeked"),a=["mouseup","touchend","keyup"].includes(e.type);r&&a?(n.removeAttribute("play-on-seeked"),t.play()):!a&&t.playing&&(n.setAttribute("play-on-seeked",""),t.pause())}})),au.isIos){var r=Eu.call(t,'input[type="range"]');Array.from(r).forEach((function(t){return e.bind(t,i,(function(e){return ru(e.target)}))}))}this.bind(n.inputs.seek,i,(function(e){var n=e.currentTarget,i=n.getAttribute("seek-value");nu(i)&&(i=n.value),n.removeAttribute("seek-value"),t.currentTime=i/n.max*t.duration}),"seek"),this.bind(n.progress,"mouseenter mouseleave mousemove",(function(e){return wh.updateSeekTooltip.call(t,e)})),this.bind(n.progress,"mousemove touchmove",(function(e){var n=t.previewThumbnails;n&&n.loaded&&n.startMove(e)})),this.bind(n.progress,"mouseleave touchend click",(function(){var e=t.previewThumbnails;e&&e.loaded&&e.endMove(!1,!0)})),this.bind(n.progress,"mousedown touchstart",(function(e){var n=t.previewThumbnails;n&&n.loaded&&n.startScrubbing(e)})),this.bind(n.progress,"mouseup touchend",(function(e){var n=t.previewThumbnails;n&&n.loaded&&n.endScrubbing(e)})),au.isWebkit&&Array.from(Eu.call(t,'input[type="range"]')).forEach((function(n){e.bind(n,"input",(function(e){return wh.updateRangeFill.call(t,e.target)}))})),t.config.toggleInvert&&!Qc(n.display.duration)&&this.bind(n.display.currentTime,"click",(function(){0!==t.currentTime&&(t.config.invertTime=!t.config.invertTime,wh.timeUpdate.call(t))})),this.bind(n.inputs.volume,i,(function(e){t.volume=e.target.value}),"volume"),this.bind(n.controls,"mouseenter mouseleave",(function(e){n.controls.hover=!t.touch&&"mouseenter"===e.type})),this.bind(n.controls,"mousedown mouseup touchstart touchend touchcancel",(function(e){n.controls.pressed=["mousedown","touchstart"].includes(e.type)})),this.bind(n.controls,"focusin",(function(){var i=t.config,r=t.timers;ku(n.controls,i.classNames.noTransition,!0),Rh.toggleControls.call(t,!0),setTimeout((function(){ku(n.controls,i.classNames.noTransition,!1)}),0);var a=e.touch?3e3:4e3;clearTimeout(r.controls),r.controls=setTimeout((function(){return Rh.toggleControls.call(t,!1)}),a)})),this.bind(n.inputs.volume,"wheel",(function(e){var n=e.webkitDirectionInvertedFromDevice,i=Eo([e.deltaX,-e.deltaY].map((function(e){return n?-e:e})),2),r=i[0],a=i[1],o=Math.sign(Math.abs(r)>Math.abs(a)?r:a);t.increaseVolume(o/50);var s=t.media.volume;(1===o&&s<1||-1===o&&s>0)&&e.preventDefault()}),"volume",!1)}}]),e}(),Uh=Kn("splice"),Fh=Qt("splice",{ACCESSORS:!0,0:0,1:2}),Dh=Math.max,qh=Math.min;Oe({target:"Array",proto:!0,forced:!Uh||!Fh},{splice:function(e,t){var n,i,r,a,o,s,l=Ne(this),c=le(l.length),u=he(e,c),h=arguments.length;if(0===h?n=i=0:1===h?(n=0,i=c-u):(n=h-2,i=qh(Dh(oe(t),0),c-u)),c+n-i>9007199254740991)throw TypeError("Maximum allowed length exceeded");for(r=ot(l,i),a=0;a<i;a++)(o=u+a)in l&&Dn(r,a,l[o]);if(r.length=i,n<i){for(a=u;a<c-i;a++)s=a+n,(o=a+i)in l?l[s]=l[o]:delete l[s];for(a=c;a>c-i+n;a--)delete l[a-1]}else if(n>i)for(a=c-i;a>u;a--)s=a+n-1,(o=a+i-1)in l?l[s]=l[o]:delete l[s];for(a=0;a<n;a++)l[a+u]=arguments[a+2];return l.length=c-i+n,r}});var Hh=t((function(e,t){e.exports=function(){var e=function(){},t={},n={},i={};function r(e,t){if(e){var r=i[e];if(n[e]=t,r)for(;r.length;)r[0](e,t),r.splice(0,1)}}function a(t,n){t.call&&(t={success:t}),n.length?(t.error||e)(n):(t.success||e)(t)}function o(t,n,i,r){var a,s,l=document,c=i.async,u=(i.numRetries||0)+1,h=i.before||e,f=t.replace(/[\?|#].*$/,""),d=t.replace(/^(css|img)!/,"");r=r||0,/(^css!|\.css$)/.test(f)?((s=l.createElement("link")).rel="stylesheet",s.href=d,(a="hideFocus"in s)&&s.relList&&(a=0,s.rel="preload",s.as="style")):/(^img!|\.(png|gif|jpg|svg|webp)$)/.test(f)?(s=l.createElement("img")).src=d:((s=l.createElement("script")).src=t,s.async=void 0===c||c),s.onload=s.onerror=s.onbeforeload=function(e){var l=e.type[0];if(a)try{s.sheet.cssText.length||(l="e")}catch(e){18!=e.code&&(l="e")}if("e"==l){if((r+=1)<u)return o(t,n,i,r)}else if("preload"==s.rel&&"style"==s.as)return s.rel="stylesheet";n(t,l,e.defaultPrevented)},!1!==h(t,s)&&l.head.appendChild(s)}function s(e,n,i){var s,l;if(n&&n.trim&&(s=n),l=(s?i:n)||{},s){if(s in t)throw"LoadJS";t[s]=!0}function c(t,n){!function(e,t,n){var i,r,a=(e=e.push?e:[e]).length,s=a,l=[];for(i=function(e,n,i){if("e"==n&&l.push(e),"b"==n){if(!i)return;l.push(e)}--a||t(l)},r=0;r<s;r++)o(e[r],i,n)}(e,(function(e){a(l,e),t&&a({success:t,error:n},e),r(s,e)}),l)}if(l.returnPromise)return new Promise(c);c()}return s.ready=function(e,t){return function(e,t){e=e.push?e:[e];var r,a,o,s=[],l=e.length,c=l;for(r=function(e,n){n.length&&s.push(e),--c||t(s)};l--;)a=e[l],(o=n[a])?r(a,o):(i[a]=i[a]||[]).push(r)}(e,(function(e){a(t,e)})),s},s.done=function(e){r(e,[])},s.reset=function(){t={},n={},i={}},s.isDefined=function(e){return e in t},s}()}));function Bh(e){return new Promise((function(t,n){Hh(e,{success:t,error:n})}))}function Vh(e){e&&!this.embed.hasPlayed&&(this.embed.hasPlayed=!0),this.media.paused===e&&(this.media.paused=!e,Ru.call(this,this.media,e?"play":"pause"))}var zh={setup:function(){var e=this;ku(e.elements.wrapper,e.config.classNames.embed,!0),e.options.speed=e.config.speed.options,Hu.call(e),zc(window.Vimeo)?zh.ready.call(e):Bh(e.config.urls.vimeo.sdk).then((function(){zh.ready.call(e)})).catch((function(t){e.debug.warn("Vimeo SDK (player.js) failed to load",t)}))},ready:function(){var e=this,t=this,n=t.config.vimeo,i=Th(hu({},{loop:t.config.loop.active,autoplay:t.autoplay,muted:t.muted,gesture:"media",playsinline:!this.config.fullscreen.iosNative},n)),r=t.media.getAttribute("src");nu(r)&&(r=t.media.getAttribute(t.config.attributes.embed.id));var a,o=nu(a=r)?null:Wc(Number(a))?a:a.match(/^.*(vimeo.com\/|video\/)(\d+).*/)?RegExp.$2:a,s=pu("iframe"),l=rh(t.config.urls.vimeo.iframe,o,i);s.setAttribute("src",l),s.setAttribute("allowfullscreen",""),s.setAttribute("allowtransparency",""),s.setAttribute("allow","autoplay"),nu(n.referrerPolicy)||s.setAttribute("referrerPolicy",n.referrerPolicy);var c=pu("div",{poster:t.poster,class:t.config.classNames.embedContainer});c.appendChild(s),t.media=yu(c,t.media),fh(rh(t.config.urls.vimeo.api,o),"json").then((function(e){if(!nu(e)){var n=new URL(e[0].thumbnail_large);n.pathname="".concat(n.pathname.split("_")[0],".jpg"),Rh.setPoster.call(t,n.href).catch((function(){}))}})),t.embed=new window.Vimeo.Player(s,{autopause:t.config.autopause,muted:t.muted}),t.media.paused=!0,t.media.currentTime=0,t.supported.ui&&t.embed.disableTextTrack(),t.media.play=function(){return Vh.call(t,!0),t.embed.play()},t.media.pause=function(){return Vh.call(t,!1),t.embed.pause()},t.media.stop=function(){t.pause(),t.currentTime=0};var u=t.media.currentTime;Object.defineProperty(t.media,"currentTime",{get:function(){return u},set:function(e){var n=t.embed,i=t.media,r=t.paused,a=t.volume,o=r&&!n.hasPlayed;i.seeking=!0,Ru.call(t,i,"seeking"),Promise.resolve(o&&n.setVolume(0)).then((function(){return n.setCurrentTime(e)})).then((function(){return o&&n.pause()})).then((function(){return o&&n.setVolume(a)})).catch((function(){}))}});var h=t.config.speed.selected;Object.defineProperty(t.media,"playbackRate",{get:function(){return h},set:function(e){t.embed.setPlaybackRate(e).then((function(){h=e,Ru.call(t,t.media,"ratechange")}))}});var f=t.config.volume;Object.defineProperty(t.media,"volume",{get:function(){return f},set:function(e){t.embed.setVolume(e).then((function(){f=e,Ru.call(t,t.media,"volumechange")}))}});var d=t.config.muted;Object.defineProperty(t.media,"muted",{get:function(){return d},set:function(e){var n=!!$c(e)&&e;t.embed.setVolume(n?0:t.config.volume).then((function(){d=n,Ru.call(t,t.media,"volumechange")}))}});var p,m=t.config.loop;Object.defineProperty(t.media,"loop",{get:function(){return m},set:function(e){var n=$c(e)?e:t.config.loop.active;t.embed.setLoop(n).then((function(){m=n}))}}),t.embed.getVideoUrl().then((function(e){p=e,wh.setDownloadUrl.call(t)})).catch((function(t){e.debug.warn(t)})),Object.defineProperty(t.media,"currentSrc",{get:function(){return p}}),Object.defineProperty(t.media,"ended",{get:function(){return t.currentTime===t.duration}}),Promise.all([t.embed.getVideoWidth(),t.embed.getVideoHeight()]).then((function(n){var i=Eo(n,2),r=i[0],a=i[1];t.embed.ratio=[r,a],Hu.call(e)})),t.embed.setAutopause(t.config.autopause).then((function(e){t.config.autopause=e})),t.embed.getVideoTitle().then((function(n){t.config.title=n,Rh.setTitle.call(e)})),t.embed.getCurrentTime().then((function(e){u=e,Ru.call(t,t.media,"timeupdate")})),t.embed.getDuration().then((function(e){t.media.duration=e,Ru.call(t,t.media,"durationchange")})),t.embed.getTextTracks().then((function(e){t.media.textTracks=e,Sh.setup.call(t)})),t.embed.on("cuechange",(function(e){var n=e.cues,i=(void 0===n?[]:n).map((function(e){return function(e){var t=document.createDocumentFragment(),n=document.createElement("div");return t.appendChild(n),n.innerHTML=e,t.firstChild.innerText}(e.text)}));Sh.updateCues.call(t,i)})),t.embed.on("loaded",(function(){(t.embed.getPaused().then((function(e){Vh.call(t,!e),e||Ru.call(t,t.media,"playing")})),Qc(t.embed.element)&&t.supported.ui)&&t.embed.element.setAttribute("tabindex",-1)})),t.embed.on("bufferstart",(function(){Ru.call(t,t.media,"waiting")})),t.embed.on("bufferend",(function(){Ru.call(t,t.media,"playing")})),t.embed.on("play",(function(){Vh.call(t,!0),Ru.call(t,t.media,"playing")})),t.embed.on("pause",(function(){Vh.call(t,!1)})),t.embed.on("timeupdate",(function(e){t.media.seeking=!1,u=e.seconds,Ru.call(t,t.media,"timeupdate")})),t.embed.on("progress",(function(e){t.media.buffered=e.percent,Ru.call(t,t.media,"progress"),1===parseInt(e.percent,10)&&Ru.call(t,t.media,"canplaythrough"),t.embed.getDuration().then((function(e){e!==t.media.duration&&(t.media.duration=e,Ru.call(t,t.media,"durationchange"))}))})),t.embed.on("seeked",(function(){t.media.seeking=!1,Ru.call(t,t.media,"seeked")})),t.embed.on("ended",(function(){t.media.paused=!0,Ru.call(t,t.media,"ended")})),t.embed.on("error",(function(e){t.media.error=e,Ru.call(t,t.media,"error")})),setTimeout((function(){return Rh.build.call(t)}),0)}};function Wh(e){e&&!this.embed.hasPlayed&&(this.embed.hasPlayed=!0),this.media.paused===e&&(this.media.paused=!e,Ru.call(this,this.media,e?"play":"pause"))}function Kh(e){return e.noCookie?"https://www.youtube-nocookie.com":"http:"===window.location.protocol?"http://www.youtube.com":void 0}var $h={setup:function(){var e=this;if(ku(this.elements.wrapper,this.config.classNames.embed,!0),zc(window.YT)&&Yc(window.YT.Player))$h.ready.call(this);else{var t=window.onYouTubeIframeAPIReady;window.onYouTubeIframeAPIReady=function(){Yc(t)&&t(),$h.ready.call(e)},Bh(this.config.urls.youtube.sdk).catch((function(t){e.debug.warn("YouTube API failed to load",t)}))}},getTitle:function(e){var t=this;fh(rh(this.config.urls.youtube.api,e)).then((function(e){if(zc(e)){var n=e.title,i=e.height,r=e.width;t.config.title=n,Rh.setTitle.call(t),t.embed.ratio=[r,i]}Hu.call(t)})).catch((function(){Hu.call(t)}))},ready:function(){var e=this,t=e.media&&e.media.getAttribute("id");if(nu(t)||!t.startsWith("youtube-")){var n=e.media.getAttribute("src");nu(n)&&(n=e.media.getAttribute(this.config.attributes.embed.id));var i,r,a=nu(i=n)?null:i.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/)?RegExp.$2:i,o=(r=e.provider,"".concat(r,"-").concat(Math.floor(1e4*Math.random()))),s=pu("div",{id:o,poster:e.poster});e.media=yu(s,e.media);var l=function(e){return"https://i.ytimg.com/vi/".concat(a,"/").concat(e,"default.jpg")};Nh(l("maxres"),121).catch((function(){return Nh(l("sd"),121)})).catch((function(){return Nh(l("hq"))})).then((function(t){return Rh.setPoster.call(e,t.src)})).then((function(t){t.includes("maxres")||(e.elements.poster.style.backgroundSize="cover")})).catch((function(){}));var c=e.config.youtube;e.embed=new window.YT.Player(o,{videoId:a,host:Kh(c),playerVars:hu({},{autoplay:e.config.autoplay?1:0,hl:e.config.hl,controls:e.supported.ui?0:1,disablekb:1,playsinline:e.config.fullscreen.iosNative?0:1,cc_load_policy:e.captions.active?1:0,cc_lang_pref:e.config.captions.language,widget_referrer:window?window.location.href:null},c),events:{onError:function(t){if(!e.media.error){var n=t.data,i={2:"The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",5:"The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",100:"The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",101:"The owner of the requested video does not allow it to be played in embedded players.",150:"The owner of the requested video does not allow it to be played in embedded players."}[n]||"An unknown error occured";e.media.error={code:n,message:i},Ru.call(e,e.media,"error")}},onPlaybackRateChange:function(t){var n=t.target;e.media.playbackRate=n.getPlaybackRate(),Ru.call(e,e.media,"ratechange")},onReady:function(t){if(!Yc(e.media.play)){var n=t.target;$h.getTitle.call(e,a),e.media.play=function(){Wh.call(e,!0),n.playVideo()},e.media.pause=function(){Wh.call(e,!1),n.pauseVideo()},e.media.stop=function(){n.stopVideo()},e.media.duration=n.getDuration(),e.media.paused=!0,e.media.currentTime=0,Object.defineProperty(e.media,"currentTime",{get:function(){return Number(n.getCurrentTime())},set:function(t){e.paused&&!e.embed.hasPlayed&&e.embed.mute(),e.media.seeking=!0,Ru.call(e,e.media,"seeking"),n.seekTo(t)}}),Object.defineProperty(e.media,"playbackRate",{get:function(){return n.getPlaybackRate()},set:function(e){n.setPlaybackRate(e)}});var i=e.config.volume;Object.defineProperty(e.media,"volume",{get:function(){return i},set:function(t){i=t,n.setVolume(100*i),Ru.call(e,e.media,"volumechange")}});var r=e.config.muted;Object.defineProperty(e.media,"muted",{get:function(){return r},set:function(t){var i=$c(t)?t:r;r=i,n[i?"mute":"unMute"](),Ru.call(e,e.media,"volumechange")}}),Object.defineProperty(e.media,"currentSrc",{get:function(){return n.getVideoUrl()}}),Object.defineProperty(e.media,"ended",{get:function(){return e.currentTime===e.duration}});var o=n.getAvailablePlaybackRates();e.options.speed=o.filter((function(t){return e.config.speed.options.includes(t)})),e.supported.ui&&e.media.setAttribute("tabindex",-1),Ru.call(e,e.media,"timeupdate"),Ru.call(e,e.media,"durationchange"),clearInterval(e.timers.buffering),e.timers.buffering=setInterval((function(){e.media.buffered=n.getVideoLoadedFraction(),(null===e.media.lastBuffered||e.media.lastBuffered<e.media.buffered)&&Ru.call(e,e.media,"progress"),e.media.lastBuffered=e.media.buffered,1===e.media.buffered&&(clearInterval(e.timers.buffering),Ru.call(e,e.media,"canplaythrough"))}),200),setTimeout((function(){return Rh.build.call(e)}),50)}},onStateChange:function(t){var n=t.target;switch(clearInterval(e.timers.playing),e.media.seeking&&[1,2].includes(t.data)&&(e.media.seeking=!1,Ru.call(e,e.media,"seeked")),t.data){case-1:Ru.call(e,e.media,"timeupdate"),e.media.buffered=n.getVideoLoadedFraction(),Ru.call(e,e.media,"progress");break;case 0:Wh.call(e,!1),e.media.loop?(n.stopVideo(),n.playVideo()):Ru.call(e,e.media,"ended");break;case 1:e.config.autoplay||!e.media.paused||e.embed.hasPlayed?(Wh.call(e,!0),Ru.call(e,e.media,"playing"),e.timers.playing=setInterval((function(){Ru.call(e,e.media,"timeupdate")}),50),e.media.duration!==n.getDuration()&&(e.media.duration=n.getDuration(),Ru.call(e,e.media,"durationchange"))):e.media.pause();break;case 2:e.muted||e.embed.unMute(),Wh.call(e,!1);break;case 3:Ru.call(e,e.media,"waiting")}Ru.call(e,e.elements.container,"statechange",!1,{code:t.data})}}})}}},Yh={setup:function(){this.media?(ku(this.elements.container,this.config.classNames.type.replace("{0}",this.type),!0),ku(this.elements.container,this.config.classNames.provider.replace("{0}",this.provider),!0),this.isEmbed&&ku(this.elements.container,this.config.classNames.type.replace("{0}","video"),!0),this.isVideo&&(this.elements.wrapper=pu("div",{class:this.config.classNames.video}),fu(this.media,this.elements.wrapper),this.isEmbed&&(this.elements.poster=pu("div",{class:this.config.classNames.poster}),this.elements.wrapper.appendChild(this.elements.poster))),this.isHTML5?Bu.setup.call(this):this.isYouTube?$h.setup.call(this):this.isVimeo&&zh.setup.call(this)):this.debug.warn("No media element found!")}},Gh=function(){function e(t){var n=this;yo(this,e),this.player=t,this.config=t.config.ads,this.playing=!1,this.initialized=!1,this.elements={container:null,displayContainer:null},this.manager=null,this.loader=null,this.cuePoints=null,this.events={},this.safetyTimer=null,this.countdownTimer=null,this.managerPromise=new Promise((function(e,t){n.on("loaded",e),n.on("error",t)})),this.load()}return wo(e,[{key:"load",value:function(){var e=this;this.enabled&&(zc(window.google)&&zc(window.google.ima)?this.ready():Bh(this.player.config.urls.googleIMA.sdk).then((function(){e.ready()})).catch((function(){e.trigger("error",new Error("Google IMA SDK failed to load"))})))}},{key:"ready",value:function(){var e,t=this;this.enabled||((e=this).manager&&e.manager.destroy(),e.elements.displayContainer&&e.elements.displayContainer.destroy(),e.elements.container.remove()),this.startSafetyTimer(12e3,"ready()"),this.managerPromise.then((function(){t.clearSafetyTimer("onAdsManagerLoaded()")})),this.listeners(),this.setupIMA()}},{key:"setupIMA",value:function(){this.elements.container=pu("div",{class:this.player.config.classNames.ads}),this.player.elements.container.appendChild(this.elements.container),google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED),google.ima.settings.setLocale(this.player.config.ads.language),google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline),this.elements.displayContainer=new google.ima.AdDisplayContainer(this.elements.container,this.player.media),this.requestAds()}},{key:"requestAds",value:function(){var e=this,t=this.player.elements.container;try{this.loader=new google.ima.AdsLoader(this.elements.displayContainer),this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED,(function(t){return e.onAdsManagerLoaded(t)}),!1),this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,(function(t){return e.onAdError(t)}),!1);var n=new google.ima.AdsRequest;n.adTagUrl=this.tagUrl,n.linearAdSlotWidth=t.offsetWidth,n.linearAdSlotHeight=t.offsetHeight,n.nonLinearAdSlotWidth=t.offsetWidth,n.nonLinearAdSlotHeight=t.offsetHeight,n.forceNonLinearFullSlot=!1,n.setAdWillPlayMuted(!this.player.muted),this.loader.requestAds(n)}catch(e){this.onAdError(e)}}},{key:"pollCountdown",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];if(!t)return clearInterval(this.countdownTimer),void this.elements.container.removeAttribute("data-badge-text");var n=function(){var t=bh(Math.max(e.manager.getRemainingTime(),0)),n="".concat(uh("advertisement",e.player.config)," - ").concat(t);e.elements.container.setAttribute("data-badge-text",n)};this.countdownTimer=setInterval(n,100)}},{key:"onAdsManagerLoaded",value:function(e){var t=this;if(this.enabled){var n=new google.ima.AdsRenderingSettings;n.restoreCustomPlaybackStateOnAdBreakComplete=!0,n.enablePreloading=!0,this.manager=e.getAdsManager(this.player,n),this.cuePoints=this.manager.getCuePoints(),this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR,(function(e){return t.onAdError(e)})),Object.keys(google.ima.AdEvent.Type).forEach((function(e){t.manager.addEventListener(google.ima.AdEvent.Type[e],(function(e){return t.onAdEvent(e)}))})),this.trigger("loaded")}}},{key:"addCuePoints",value:function(){var e=this;nu(this.cuePoints)||this.cuePoints.forEach((function(t){if(0!==t&&-1!==t&&t<e.player.duration){var n=e.player.elements.progress;if(Qc(n)){var i=100/e.player.duration*t,r=pu("span",{class:e.player.config.classNames.cues});r.style.left="".concat(i.toString(),"%"),n.appendChild(r)}}}))}},{key:"onAdEvent",value:function(e){var t=this,n=this.player.elements.container,i=e.getAd(),r=e.getAdData();switch(function(e){Ru.call(t.player,t.player.media,"ads".concat(e.replace(/_/g,"").toLowerCase()))}(e.type),e.type){case google.ima.AdEvent.Type.LOADED:this.trigger("loaded"),this.pollCountdown(!0),i.isLinear()||(i.width=n.offsetWidth,i.height=n.offsetHeight);break;case google.ima.AdEvent.Type.STARTED:this.manager.setVolume(this.player.volume);break;case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:this.loadAds();break;case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:this.pauseContent();break;case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:this.pollCountdown(),this.resumeContent();break;case google.ima.AdEvent.Type.LOG:r.adError&&this.player.debug.warn("Non-fatal ad error: ".concat(r.adError.getMessage()))}}},{key:"onAdError",value:function(e){this.cancel(),this.player.debug.warn("Ads error",e)}},{key:"listeners",value:function(){var e,t=this,n=this.player.elements.container;this.player.on("canplay",(function(){t.addCuePoints()})),this.player.on("ended",(function(){t.loader.contentComplete()})),this.player.on("timeupdate",(function(){e=t.player.currentTime})),this.player.on("seeked",(function(){var n=t.player.currentTime;nu(t.cuePoints)||t.cuePoints.forEach((function(i,r){e<i&&i<n&&(t.manager.discardAdBreak(),t.cuePoints.splice(r,1))}))})),window.addEventListener("resize",(function(){t.manager&&t.manager.resize(n.offsetWidth,n.offsetHeight,google.ima.ViewMode.NORMAL)}))}},{key:"play",value:function(){var e=this,t=this.player.elements.container;this.managerPromise||this.resumeContent(),this.managerPromise.then((function(){e.manager.setVolume(e.player.volume),e.elements.displayContainer.initialize();try{e.initialized||(e.manager.init(t.offsetWidth,t.offsetHeight,google.ima.ViewMode.NORMAL),e.manager.start()),e.initialized=!0}catch(t){e.onAdError(t)}})).catch((function(){}))}},{key:"resumeContent",value:function(){this.elements.container.style.zIndex="",this.playing=!1,this.player.media.play()}},{key:"pauseContent",value:function(){this.elements.container.style.zIndex=3,this.playing=!0,this.player.media.pause()}},{key:"cancel",value:function(){this.initialized&&this.resumeContent(),this.trigger("error"),this.loadAds()}},{key:"loadAds",value:function(){var e=this;this.managerPromise.then((function(){e.manager&&e.manager.destroy(),e.managerPromise=new Promise((function(t){e.on("loaded",t),e.player.debug.log(e.manager)})),e.requestAds()})).catch((function(){}))}},{key:"trigger",value:function(e){for(var t=this,n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];var a=this.events[e];Gc(a)&&a.forEach((function(e){Yc(e)&&e.apply(t,i)}))}},{key:"on",value:function(e,t){return Gc(this.events[e])||(this.events[e]=[]),this.events[e].push(t),this}},{key:"startSafetyTimer",value:function(e,t){var n=this;this.player.debug.log("Safety timer invoked from: ".concat(t)),this.safetyTimer=setTimeout((function(){n.cancel(),n.clearSafetyTimer("startSafetyTimer()")}),e)}},{key:"clearSafetyTimer",value:function(e){Vc(this.safetyTimer)||(this.player.debug.log("Safety timer cleared from: ".concat(e)),clearTimeout(this.safetyTimer),this.safetyTimer=null)}},{key:"enabled",get:function(){var e=this.config;return this.player.isHTML5&&this.player.isVideo&&e.enabled&&(!nu(e.publisherId)||tu(e.tagUrl))}},{key:"tagUrl",get:function(){var e=this.config;if(tu(e.tagUrl))return e.tagUrl;var t={AV_PUBLISHERID:"58c25bb0073ef448b1087ad6",AV_CHANNELID:"5a0458dc28a06145e4519d21",AV_URL:window.location.hostname,cb:Date.now(),AV_WIDTH:640,AV_HEIGHT:480,AV_CDIM2:e.publisherId};return"".concat("https://go.aniview.com/api/adserver6/vast/","?").concat(Th(t))}}]),e}(),Xh=ct.findIndex,Qh=!0,Jh=Qt("findIndex");"findIndex"in[]&&Array(1).findIndex((function(){Qh=!1})),Oe({target:"Array",proto:!0,forced:Qh||!Jh},{findIndex:function(e){return Xh(this,e,arguments.length>1?arguments[1]:void 0)}}),dn("findIndex");var Zh=Math.min,ef=[].lastIndexOf,tf=!!ef&&1/[1].lastIndexOf(1,-0)<0,nf=$t("lastIndexOf"),rf=Qt("indexOf",{ACCESSORS:!0,1:0}),af=tf||!nf||!rf?function(e){if(tf)return ef.apply(this,arguments)||0;var t=m(this),n=le(t.length),i=n-1;for(arguments.length>1&&(i=Zh(i,oe(arguments[1]))),i<0&&(i=n+i);i>=0;i--)if(i in t&&t[i]===e)return i||0;return-1}:ef;Oe({target:"Array",proto:!0,forced:af!==[].lastIndexOf},{lastIndexOf:af});var of=function(e,t){var n={};return e>t.width/t.height?(n.width=t.width,n.height=1/e*t.width):(n.height=t.height,n.width=e*t.height),n},sf=function(){function e(t){yo(this,e),this.player=t,this.thumbnails=[],this.loaded=!1,this.lastMouseMoveTime=Date.now(),this.mouseDown=!1,this.loadedImages=[],this.elements={thumb:{},scrubbing:{}},this.load()}return wo(e,[{key:"load",value:function(){var e=this;this.player.elements.display.seekTooltip&&(this.player.elements.display.seekTooltip.hidden=this.enabled),this.enabled&&this.getThumbnails().then((function(){e.enabled&&(e.render(),e.determineContainerAutoSizing(),e.loaded=!0)}))}},{key:"getThumbnails",value:function(){var e=this;return new Promise((function(t){var n=e.player.config.previewThumbnails.src;if(nu(n))throw new Error("Missing previewThumbnails.src config attribute");var i=(Kc(n)?[n]:n).map((function(t){return e.getThumbnail(t)}));Promise.all(i).then((function(){e.thumbnails.sort((function(e,t){return e.height-t.height})),e.player.debug.log("Preview thumbnails",e.thumbnails),t()}))}))}},{key:"getThumbnail",value:function(e){var t=this;return new Promise((function(n){fh(e).then((function(i){var r,a,o={frames:(r=i,a=[],r.split(/\r\n\r\n|\n\n|\r\r/).forEach((function(e){var t={};e.split(/\r\n|\n|\r/).forEach((function(e){if(Wc(t.startTime)){if(!nu(e.trim())&&nu(t.text)){var n=e.trim().split("#xywh="),i=Eo(n,1);if(t.text=i[0],n[1]){var r=Eo(n[1].split(","),4);t.x=r[0],t.y=r[1],t.w=r[2],t.h=r[3]}}}else{var a=e.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);a&&(t.startTime=60*Number(a[1]||0)*60+60*Number(a[2])+Number(a[3])+Number("0.".concat(a[4])),t.endTime=60*Number(a[6]||0)*60+60*Number(a[7])+Number(a[8])+Number("0.".concat(a[9])))}})),t.text&&a.push(t)})),a),height:null,urlPrefix:""};o.frames[0].text.startsWith("/")||o.frames[0].text.startsWith("http://")||o.frames[0].text.startsWith("https://")||(o.urlPrefix=e.substring(0,e.lastIndexOf("/")+1));var s=new Image;s.onload=function(){o.height=s.naturalHeight,o.width=s.naturalWidth,t.thumbnails.push(o),n()},s.src=o.urlPrefix+o.frames[0].text}))}))}},{key:"startMove",value:function(e){if(this.loaded&&Jc(e)&&["touchmove","mousemove"].includes(e.type)&&this.player.media.duration){if("touchmove"===e.type)this.seekTime=this.player.media.duration*(this.player.elements.inputs.seek.value/100);else{var t=this.player.elements.progress.getBoundingClientRect(),n=100/t.width*(e.pageX-t.left);this.seekTime=this.player.media.duration*(n/100),this.seekTime<0&&(this.seekTime=0),this.seekTime>this.player.media.duration-1&&(this.seekTime=this.player.media.duration-1),this.mousePosX=e.pageX,this.elements.thumb.time.innerText=bh(this.seekTime)}this.showImageAtCurrentTime()}}},{key:"endMove",value:function(){this.toggleThumbContainer(!1,!0)}},{key:"startScrubbing",value:function(e){(Vc(e.button)||!1===e.button||0===e.button)&&(this.mouseDown=!0,this.player.media.duration&&(this.toggleScrubbingContainer(!0),this.toggleThumbContainer(!1,!0),this.showImageAtCurrentTime()))}},{key:"endScrubbing",value:function(){var e=this;this.mouseDown=!1,Math.ceil(this.lastTime)===Math.ceil(this.player.media.currentTime)?this.toggleScrubbingContainer(!1):Nu.call(this.player,this.player.media,"timeupdate",(function(){e.mouseDown||e.toggleScrubbingContainer(!1)}))}},{key:"listeners",value:function(){var e=this;this.player.on("play",(function(){e.toggleThumbContainer(!1,!0)})),this.player.on("seeked",(function(){e.toggleThumbContainer(!1)})),this.player.on("timeupdate",(function(){e.lastTime=e.player.media.currentTime}))}},{key:"render",value:function(){this.elements.thumb.container=pu("div",{class:this.player.config.classNames.previewThumbnails.thumbContainer}),this.elements.thumb.imageContainer=pu("div",{class:this.player.config.classNames.previewThumbnails.imageContainer}),this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);var e=pu("div",{class:this.player.config.classNames.previewThumbnails.timeContainer});this.elements.thumb.time=pu("span",{},"00:00"),e.appendChild(this.elements.thumb.time),this.elements.thumb.container.appendChild(e),Qc(this.player.elements.progress)&&this.player.elements.progress.appendChild(this.elements.thumb.container),this.elements.scrubbing.container=pu("div",{class:this.player.config.classNames.previewThumbnails.scrubbingContainer}),this.player.elements.wrapper.appendChild(this.elements.scrubbing.container)}},{key:"destroy",value:function(){this.elements.thumb.container&&this.elements.thumb.container.remove(),this.elements.scrubbing.container&&this.elements.scrubbing.container.remove()}},{key:"showImageAtCurrentTime",value:function(){var e=this;this.mouseDown?this.setScrubbingContainerSize():this.setThumbContainerSizeAndPos();var t=this.thumbnails[0].frames.findIndex((function(t){return e.seekTime>=t.startTime&&e.seekTime<=t.endTime})),n=t>=0,i=0;this.mouseDown||this.toggleThumbContainer(n),n&&(this.thumbnails.forEach((function(n,r){e.loadedImages.includes(n.frames[t].text)&&(i=r)})),t!==this.showingThumb&&(this.showingThumb=t,this.loadImage(i)))}},{key:"loadImage",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=this.showingThumb,i=this.thumbnails[t],r=i.urlPrefix,a=i.frames[n],o=i.frames[n].text,s=r+o;if(this.currentImageElement&&this.currentImageElement.dataset.filename===o)this.showImage(this.currentImageElement,a,t,n,o,!1),this.currentImageElement.dataset.index=n,this.removeOldImages(this.currentImageElement);else{this.loadingImage&&this.usingSprites&&(this.loadingImage.onload=null);var l=new Image;l.src=s,l.dataset.index=n,l.dataset.filename=o,this.showingThumbFilename=o,this.player.debug.log("Loading image: ".concat(s)),l.onload=function(){return e.showImage(l,a,t,n,o,!0)},this.loadingImage=l,this.removeOldImages(l)}}},{key:"showImage",value:function(e,t,n,i,r){var a=!(arguments.length>5&&void 0!==arguments[5])||arguments[5];this.player.debug.log("Showing thumb: ".concat(r,". num: ").concat(i,". qual: ").concat(n,". newimg: ").concat(a)),this.setImageSizeAndOffset(e,t),a&&(this.currentImageContainer.appendChild(e),this.currentImageElement=e,this.loadedImages.includes(r)||this.loadedImages.push(r)),this.preloadNearby(i,!0).then(this.preloadNearby(i,!1)).then(this.getHigherQuality(n,e,t,r))}},{key:"removeOldImages",value:function(e){var t=this;Array.from(this.currentImageContainer.children).forEach((function(n){if("img"===n.tagName.toLowerCase()){var i=t.usingSprites?500:1e3;if(n.dataset.index!==e.dataset.index&&!n.dataset.deleting){n.dataset.deleting=!0;var r=t.currentImageContainer;setTimeout((function(){r.removeChild(n),t.player.debug.log("Removing thumb: ".concat(n.dataset.filename))}),i)}}}))}},{key:"preloadNearby",value:function(e){var t=this,n=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return new Promise((function(i){setTimeout((function(){var r=t.thumbnails[0].frames[e].text;if(t.showingThumbFilename===r){var a;a=n?t.thumbnails[0].frames.slice(e):t.thumbnails[0].frames.slice(0,e).reverse();var o=!1;a.forEach((function(e){var n=e.text;if(n!==r&&!t.loadedImages.includes(n)){o=!0,t.player.debug.log("Preloading thumb filename: ".concat(n));var a=t.thumbnails[0].urlPrefix+n,s=new Image;s.src=a,s.onload=function(){t.player.debug.log("Preloaded thumb filename: ".concat(n)),t.loadedImages.includes(n)||t.loadedImages.push(n),i()}}})),o||i()}}),300)}))}},{key:"getHigherQuality",value:function(e,t,n,i){var r=this;if(e<this.thumbnails.length-1){var a=t.naturalHeight;this.usingSprites&&(a=n.h),a<this.thumbContainerHeight&&setTimeout((function(){r.showingThumbFilename===i&&(r.player.debug.log("Showing higher quality thumb for: ".concat(i)),r.loadImage(e+1))}),300)}}},{key:"toggleThumbContainer",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.player.config.classNames.previewThumbnails.thumbContainerShown;this.elements.thumb.container.classList.toggle(n,e),!e&&t&&(this.showingThumb=null,this.showingThumbFilename=null)}},{key:"toggleScrubbingContainer",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=this.player.config.classNames.previewThumbnails.scrubbingContainerShown;this.elements.scrubbing.container.classList.toggle(t,e),e||(this.showingThumb=null,this.showingThumbFilename=null)}},{key:"determineContainerAutoSizing",value:function(){(this.elements.thumb.imageContainer.clientHeight>20||this.elements.thumb.imageContainer.clientWidth>20)&&(this.sizeSpecifiedInCSS=!0)}},{key:"setThumbContainerSizeAndPos",value:function(){if(this.sizeSpecifiedInCSS){if(this.elements.thumb.imageContainer.clientHeight>20&&this.elements.thumb.imageContainer.clientWidth<20){var e=Math.floor(this.elements.thumb.imageContainer.clientHeight*this.thumbAspectRatio);this.elements.thumb.imageContainer.style.width="".concat(e,"px")}else if(this.elements.thumb.imageContainer.clientHeight<20&&this.elements.thumb.imageContainer.clientWidth>20){var t=Math.floor(this.elements.thumb.imageContainer.clientWidth/this.thumbAspectRatio);this.elements.thumb.imageContainer.style.height="".concat(t,"px")}}else{var n=Math.floor(this.thumbContainerHeight*this.thumbAspectRatio);this.elements.thumb.imageContainer.style.height="".concat(this.thumbContainerHeight,"px"),this.elements.thumb.imageContainer.style.width="".concat(n,"px")}this.setThumbContainerPos()}},{key:"setThumbContainerPos",value:function(){var e=this.player.elements.progress.getBoundingClientRect(),t=this.player.elements.container.getBoundingClientRect(),n=this.elements.thumb.container,i=t.left-e.left+10,r=t.right-e.left-n.clientWidth-10,a=this.mousePosX-e.left-n.clientWidth/2;a<i&&(a=i),a>r&&(a=r),n.style.left="".concat(a,"px")}},{key:"setScrubbingContainerSize",value:function(){var e=of(this.thumbAspectRatio,{width:this.player.media.clientWidth,height:this.player.media.clientHeight}),t=e.width,n=e.height;this.elements.scrubbing.container.style.width="".concat(t,"px"),this.elements.scrubbing.container.style.height="".concat(n,"px")}},{key:"setImageSizeAndOffset",value:function(e,t){if(this.usingSprites){var n=this.thumbContainerHeight/t.h;e.style.height="".concat(e.naturalHeight*n,"px"),e.style.width="".concat(e.naturalWidth*n,"px"),e.style.left="-".concat(t.x*n,"px"),e.style.top="-".concat(t.y*n,"px")}}},{key:"enabled",get:function(){return this.player.isHTML5&&this.player.isVideo&&this.player.config.previewThumbnails.enabled}},{key:"currentImageContainer",get:function(){return this.mouseDown?this.elements.scrubbing.container:this.elements.thumb.imageContainer}},{key:"usingSprites",get:function(){return Object.keys(this.thumbnails[0].frames[0]).includes("w")}},{key:"thumbAspectRatio",get:function(){return this.usingSprites?this.thumbnails[0].frames[0].w/this.thumbnails[0].frames[0].h:this.thumbnails[0].width/this.thumbnails[0].height}},{key:"thumbContainerHeight",get:function(){return this.mouseDown?of(this.thumbAspectRatio,{width:this.player.media.clientWidth,height:this.player.media.clientHeight}).height:this.sizeSpecifiedInCSS?this.elements.thumb.imageContainer.clientHeight:Math.floor(this.player.media.clientWidth/this.thumbAspectRatio/4)}},{key:"currentImageElement",get:function(){return this.mouseDown?this.currentScrubbingImageElement:this.currentThumbnailImageElement},set:function(e){this.mouseDown?this.currentScrubbingImageElement=e:this.currentThumbnailImageElement=e}}]),e}(),lf={insertElements:function(e,t){var n=this;Kc(t)?mu(e,this.media,{src:t}):Gc(t)&&t.forEach((function(t){mu(e,n.media,t)}))},change:function(e){var t=this;uu(e,"sources.length")?(Bu.cancelRequests.call(this),this.destroy.call(this,(function(){t.options.quality=[],gu(t.media),t.media=null,Qc(t.elements.container)&&t.elements.container.removeAttribute("class");var n=e.sources,i=e.type,r=Eo(n,1)[0],a=r.provider,o=void 0===a?Ch.html5:a,s=r.src,l="html5"===o?i:"div",c="html5"===o?{}:{src:s};Object.assign(t,{provider:o,type:i,supported:Iu.check(i,o,t.config.playsinline),media:pu(l,c)}),t.elements.container.appendChild(t.media),$c(e.autoplay)&&(t.config.autoplay=e.autoplay),t.isHTML5&&(t.config.crossorigin&&t.media.setAttribute("crossorigin",""),t.config.autoplay&&t.media.setAttribute("autoplay",""),nu(e.poster)||(t.poster=e.poster),t.config.loop.active&&t.media.setAttribute("loop",""),t.config.muted&&t.media.setAttribute("muted",""),t.config.playsinline&&t.media.setAttribute("playsinline","")),Rh.addStyleHook.call(t),t.isHTML5&&lf.insertElements.call(t,"source",n),t.config.title=e.title,Yh.setup.call(t),t.isHTML5&&Object.keys(e).includes("tracks")&&lf.insertElements.call(t,"track",e.tracks),(t.isHTML5||t.isEmbed&&!t.supported.ui)&&Rh.build.call(t),t.isHTML5&&t.media.load(),nu(e.previewThumbnails)||(Object.assign(t.config.previewThumbnails,e.previewThumbnails),t.previewThumbnails&&t.previewThumbnails.loaded&&(t.previewThumbnails.destroy(),t.previewThumbnails=null),t.config.previewThumbnails.enabled&&(t.previewThumbnails=new sf(t))),t.fullscreen.update()}),!0)):this.debug.warn("Invalid source format")}};var cf,uf=function(){function e(t,n){var i=this;if(yo(this,e),this.timers={},this.ready=!1,this.loading=!1,this.failed=!1,this.touch=Iu.touch,this.media=t,Kc(this.media)&&(this.media=document.querySelectorAll(this.media)),(window.jQuery&&this.media instanceof jQuery||Xc(this.media)||Gc(this.media))&&(this.media=this.media[0]),this.config=hu({},Eh,e.defaults,n||{},function(){try{return JSON.parse(i.media.getAttribute("data-plyr-config"))}catch(e){return{}}}()),this.elements={container:null,captions:null,buttons:{},display:{},progress:{},inputs:{},settings:{popup:null,menu:null,panels:{},buttons:{}}},this.captions={active:null,currentTrack:-1,meta:new WeakMap},this.fullscreen={active:!1},this.options={speed:[],quality:[]},this.debug=new Lh(this.config.debug),this.debug.log("Config",this.config),this.debug.log("Support",Iu),!Vc(this.media)&&Qc(this.media))if(this.media.plyr)this.debug.warn("Target already setup");else if(this.config.enabled)if(Iu.check().api){var r=this.media.cloneNode(!0);r.autoplay=!1,this.elements.original=r;var a=this.media.tagName.toLowerCase(),o=null,s=null;switch(a){case"div":if(o=this.media.querySelector("iframe"),Qc(o)){if(s=kh(o.getAttribute("src")),this.provider=function(e){return/^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(e)?Ch.youtube:/^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(e)?Ch.vimeo:null}(s.toString()),this.elements.container=this.media,this.media=o,this.elements.container.className="",s.search.length){var l=["1","true"];l.includes(s.searchParams.get("autoplay"))&&(this.config.autoplay=!0),l.includes(s.searchParams.get("loop"))&&(this.config.loop.active=!0),this.isYouTube?(this.config.playsinline=l.includes(s.searchParams.get("playsinline")),this.config.youtube.hl=s.searchParams.get("hl")):this.config.playsinline=!0}}else this.provider=this.media.getAttribute(this.config.attributes.embed.provider),this.media.removeAttribute(this.config.attributes.embed.provider);if(nu(this.provider)||!Object.keys(Ch).includes(this.provider))return void this.debug.error("Setup failed: Invalid provider");this.type=Ih;break;case"video":case"audio":this.type=a,this.provider=Ch.html5,this.media.hasAttribute("crossorigin")&&(this.config.crossorigin=!0),this.media.hasAttribute("autoplay")&&(this.config.autoplay=!0),(this.media.hasAttribute("playsinline")||this.media.hasAttribute("webkit-playsinline"))&&(this.config.playsinline=!0),this.media.hasAttribute("muted")&&(this.config.muted=!0),this.media.hasAttribute("loop")&&(this.config.loop.active=!0);break;default:return void this.debug.error("Setup failed: unsupported type")}this.supported=Iu.check(this.type,this.provider,this.config.playsinline),this.supported.api?(this.eventListeners=[],this.listeners=new _h(this),this.storage=new hh(this),this.media.plyr=this,Qc(this.elements.container)||(this.elements.container=pu("div",{tabindex:0}),fu(this.media,this.elements.container)),Rh.addStyleHook.call(this),Yh.setup.call(this),this.config.debug&&ju.call(this,this.elements.container,this.config.events.join(" "),(function(e){i.debug.log("event: ".concat(e.type))})),(this.isHTML5||this.isEmbed&&!this.supported.ui)&&Rh.build.call(this),this.listeners.container(),this.listeners.global(),this.fullscreen=new jh(this),this.config.ads.enabled&&(this.ads=new Gh(this)),this.isHTML5&&this.config.autoplay&&setTimeout((function(){return i.play()}),10),this.lastSeekTime=0,this.config.previewThumbnails.enabled&&(this.previewThumbnails=new sf(this))):this.debug.error("Setup failed: no support")}else this.debug.error("Setup failed: no support");else this.debug.error("Setup failed: disabled by config");else this.debug.error("Setup failed: no suitable element passed")}return wo(e,[{key:"play",value:function(){var e=this;return Yc(this.media.play)?(this.ads&&this.ads.enabled&&this.ads.managerPromise.then((function(){return e.ads.play()})).catch((function(){return e.media.play()})),this.media.play()):null}},{key:"pause",value:function(){return this.playing&&Yc(this.media.pause)?this.media.pause():null}},{key:"togglePlay",value:function(e){return($c(e)?e:!this.playing)?this.play():this.pause()}},{key:"stop",value:function(){this.isHTML5?(this.pause(),this.restart()):Yc(this.media.stop)&&this.media.stop()}},{key:"restart",value:function(){this.currentTime=0}},{key:"rewind",value:function(e){this.currentTime-=Wc(e)?e:this.config.seekTime}},{key:"forward",value:function(e){this.currentTime+=Wc(e)?e:this.config.seekTime}},{key:"increaseVolume",value:function(e){var t=this.media.muted?0:this.volume;this.volume=t+(Wc(e)?e:0)}},{key:"decreaseVolume",value:function(e){this.increaseVolume(-e)}},{key:"toggleCaptions",value:function(e){Sh.toggle.call(this,e,!1)}},{key:"airplay",value:function(){Iu.airplay&&this.media.webkitShowPlaybackTargetPicker()}},{key:"toggleControls",value:function(e){if(this.supported.ui&&!this.isAudio){var t=Tu(this.elements.container,this.config.classNames.hideControls),n=void 0===e?void 0:!e,i=ku(this.elements.container,this.config.classNames.hideControls,n);if(i&&this.config.controls.includes("settings")&&!nu(this.config.settings)&&wh.toggleMenu.call(this,!1),i!==t){var r=i?"controlshidden":"controlsshown";Ru.call(this,this.media,r)}return!i}return!1}},{key:"on",value:function(e,t){ju.call(this,this.elements.container,e,t)}},{key:"once",value:function(e,t){Nu.call(this,this.elements.container,e,t)}},{key:"off",value:function(e,t){Mu(this.elements.container,e,t)}},{key:"destroy",value:function(e){var t=this,n=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(this.ready){var i=function(){document.body.style.overflow="",t.embed=null,n?(Object.keys(t.elements).length&&(gu(t.elements.buttons.play),gu(t.elements.captions),gu(t.elements.controls),gu(t.elements.wrapper),t.elements.buttons.play=null,t.elements.captions=null,t.elements.controls=null,t.elements.wrapper=null),Yc(e)&&e()):(_u.call(t),yu(t.elements.original,t.elements.container),Ru.call(t,t.elements.original,"destroyed",!0),Yc(e)&&e.call(t.elements.original),t.ready=!1,setTimeout((function(){t.elements=null,t.media=null}),200))};this.stop(),clearTimeout(this.timers.loading),clearTimeout(this.timers.controls),clearTimeout(this.timers.resized),this.isHTML5?(Rh.toggleNativeControls.call(this,!0),i()):this.isYouTube?(clearInterval(this.timers.buffering),clearInterval(this.timers.playing),null!==this.embed&&Yc(this.embed.destroy)&&this.embed.destroy(),i()):this.isVimeo&&(null!==this.embed&&this.embed.unload().then(i),setTimeout(i,200))}}},{key:"supports",value:function(e){return Iu.mime.call(this,e)}},{key:"isHTML5",get:function(){return this.provider===Ch.html5}},{key:"isEmbed",get:function(){return this.isYouTube||this.isVimeo}},{key:"isYouTube",get:function(){return this.provider===Ch.youtube}},{key:"isVimeo",get:function(){return this.provider===Ch.vimeo}},{key:"isVideo",get:function(){return this.type===Ih}},{key:"isAudio",get:function(){return this.type===Ph}},{key:"playing",get:function(){return Boolean(this.ready&&!this.paused&&!this.ended)}},{key:"paused",get:function(){return Boolean(this.media.paused)}},{key:"stopped",get:function(){return Boolean(this.paused&&0===this.currentTime)}},{key:"ended",get:function(){return Boolean(this.media.ended)}},{key:"currentTime",set:function(e){if(this.duration){var t=Wc(e)&&e>0;this.media.currentTime=t?Math.min(e,this.duration):0,this.debug.log("Seeking to ".concat(this.currentTime," seconds"))}},get:function(){return Number(this.media.currentTime)}},{key:"buffered",get:function(){var e=this.media.buffered;return Wc(e)?e:e&&e.length&&this.duration>0?e.end(0)/this.duration:0}},{key:"seeking",get:function(){return Boolean(this.media.seeking)}},{key:"duration",get:function(){var e=parseFloat(this.config.duration),t=(this.media||{}).duration,n=Wc(t)&&t!==1/0?t:0;return e||n}},{key:"volume",set:function(e){var t=e;Kc(t)&&(t=Number(t)),Wc(t)||(t=this.storage.get("volume")),Wc(t)||(t=this.config.volume),t>1&&(t=1),t<0&&(t=0),this.config.volume=t,this.media.volume=t,!nu(e)&&this.muted&&t>0&&(this.muted=!1)},get:function(){return Number(this.media.volume)}},{key:"muted",set:function(e){var t=e;$c(t)||(t=this.storage.get("muted")),$c(t)||(t=this.config.muted),this.config.muted=t,this.media.muted=t},get:function(){return Boolean(this.media.muted)}},{key:"hasAudio",get:function(){return!this.isHTML5||(!!this.isAudio||(Boolean(this.media.mozHasAudio)||Boolean(this.media.webkitAudioDecodedByteCount)||Boolean(this.media.audioTracks&&this.media.audioTracks.length)))}},{key:"speed",set:function(e){var t=this,n=null;Wc(e)&&(n=e),Wc(n)||(n=this.storage.get("speed")),Wc(n)||(n=this.config.speed.selected);var i=this.minimumSpeed,r=this.maximumSpeed;n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:255;return Math.min(Math.max(e,t),n)}(n,i,r),this.config.speed.selected=n,setTimeout((function(){t.media.playbackRate=n}),0)},get:function(){return Number(this.media.playbackRate)}},{key:"minimumSpeed",get:function(){return this.isYouTube?Math.min.apply(Math,Ao(this.options.speed)):this.isVimeo?.5:.0625}},{key:"maximumSpeed",get:function(){return this.isYouTube?Math.max.apply(Math,Ao(this.options.speed)):this.isVimeo?2:16}},{key:"quality",set:function(e){var t=this.config.quality,n=this.options.quality;if(n.length){var i=[!nu(e)&&Number(e),this.storage.get("quality"),t.selected,t.default].find(Wc),r=!0;if(!n.includes(i)){var a=function(e,t){return Gc(e)&&e.length?e.reduce((function(e,n){return Math.abs(n-t)<Math.abs(e-t)?n:e})):null}(n,i);this.debug.warn("Unsupported quality option: ".concat(i,", using ").concat(a," instead")),i=a,r=!1}t.selected=i,this.media.quality=i,r&&this.storage.set({quality:i})}},get:function(){return this.media.quality}},{key:"loop",set:function(e){var t=$c(e)?e:this.config.loop.active;this.config.loop.active=t,this.media.loop=t},get:function(){return Boolean(this.media.loop)}},{key:"source",set:function(e){lf.change.call(this,e)},get:function(){return this.media.currentSrc}},{key:"download",get:function(){var e=this.config.urls.download;return tu(e)?e:this.source},set:function(e){tu(e)&&(this.config.urls.download=e,wh.setDownloadUrl.call(this))}},{key:"poster",set:function(e){this.isVideo?Rh.setPoster.call(this,e,!1).catch((function(){})):this.debug.warn("Poster can only be set for video")},get:function(){return this.isVideo?this.media.getAttribute("poster"):null}},{key:"ratio",get:function(){if(!this.isVideo)return null;var e=Du(qu.call(this));return Gc(e)?e.join(":"):e},set:function(e){this.isVideo?Kc(e)&&Fu(e)?(this.config.ratio=e,Hu.call(this)):this.debug.error("Invalid aspect ratio specified (".concat(e,")")):this.debug.warn("Aspect ratio can only be set for video")}},{key:"autoplay",set:function(e){var t=$c(e)?e:this.config.autoplay;this.config.autoplay=t},get:function(){return Boolean(this.config.autoplay)}},{key:"currentTrack",set:function(e){Sh.set.call(this,e,!1)},get:function(){var e=this.captions,t=e.toggled,n=e.currentTrack;return t?n:-1}},{key:"language",set:function(e){Sh.setLanguage.call(this,e,!1)},get:function(){return(Sh.getCurrentTrack.call(this)||{}).language}},{key:"pip",set:function(e){if(Iu.pip){var t=$c(e)?e:!this.pip;Yc(this.media.webkitSetPresentationMode)&&this.media.webkitSetPresentationMode(t?Ah:xh),Yc(this.media.requestPictureInPicture)&&(!this.pip&&t?this.media.requestPictureInPicture():this.pip&&!t&&document.exitPictureInPicture())}},get:function(){return Iu.pip?nu(this.media.webkitPresentationMode)?this.media===document.pictureInPictureElement:this.media.webkitPresentationMode===Ah:null}}],[{key:"supported",value:function(e,t,n){return Iu.check(e,t,n)}},{key:"loadSprite",value:function(e,t){return dh(e,t)}},{key:"setup",value:function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=null;return Kc(t)?i=Array.from(document.querySelectorAll(t)):Xc(t)?i=Array.from(t):Gc(t)&&(i=t.filter(Qc)),nu(i)?null:i.map((function(t){return new e(t,n)}))}}]),e}();return uf.defaults=(cf=Eh,JSON.parse(JSON.stringify(cf))),uf}));
//# sourceMappingURL=plyr.polyfilled.js.map

 /*
 * Pointer Events Polyfill: Adds support for the style attribute "pointer-events: none" to browsers without this feature (namely, IE).
 * (c) 2013, Kent Mewhort, licensed under BSD. See LICENSE.txt for details.
 */

function PointerEventsPolyfill(t){if(this.options={selector:"*",mouseEvents:["click","dblclick","mousedown","mouseup"],usePolyfillIf:function(){if("Microsoft Internet Explorer"==navigator.appName){var t=navigator.userAgent;if(null!=t.match(/MSIE ([0-9]{1,}[\.0-9]{0,})/)){var e=parseFloat(RegExp.$1);if(11>e)return!0}}return!1}},t){var e=this;$.each(t,function(t,n){e.options[t]=n})}this.options.usePolyfillIf()&&this.register_mouse_events()}PointerEventsPolyfill.initialize=function(t){return null==PointerEventsPolyfill.singleton&&(PointerEventsPolyfill.singleton=new PointerEventsPolyfill(t)),PointerEventsPolyfill.singleton},PointerEventsPolyfill.prototype.register_mouse_events=function(){$(document).on(this.options.mouseEvents.join(" "),this.options.selector,function(t){if("none"==$(this).css("pointer-events")){var e=$(this).css("display");$(this).css("display","none");var n=document.elementFromPoint(t.clientX,t.clientY);return e?$(this).css("display",e):$(this).css("display",""),t.target=n,$(n).trigger(t),!1}return!0})};

/* option_selection.js */
function floatToString(t,e){var o=t.toFixed(e).toString();return o.match(/^\.\d+/)?"0"+o:o}if("undefined"==typeof Shopify)var Shopify={};Shopify.each=function(t,e){for(var o=0;o<t.length;o++)e(t[o],o)},Shopify.map=function(t,e){for(var o=[],i=0;i<t.length;i++)o.push(e(t[i],i));return o},Shopify.arrayIncludes=function(t,e){for(var o=0;o<t.length;o++)if(t[o]==e)return!0;return!1},Shopify.uniq=function(t){for(var e=[],o=0;o<t.length;o++)Shopify.arrayIncludes(e,t[o])||e.push(t[o]);return e},Shopify.isDefined=function(t){return"undefined"==typeof t?!1:!0},Shopify.getClass=function(t){return Object.prototype.toString.call(t).slice(8,-1)},Shopify.extend=function(t,e){function o(){}o.prototype=e.prototype,t.prototype=new o,t.prototype.constructor=t,t.baseConstructor=e,t.superClass=e.prototype},Shopify.locationSearch=function(){return window.location.search},Shopify.locationHash=function(){return window.location.hash},Shopify.replaceState=function(t){window.history.replaceState({},document.title,t)},Shopify.urlParam=function(t){var e=RegExp("[?&]"+t+"=([^&#]*)").exec(Shopify.locationSearch());return e&&decodeURIComponent(e[1].replace(/\+/g," "))},Shopify.newState=function(t,e){var o;return o=Shopify.urlParam(t)?Shopify.locationSearch().replace(RegExp("("+t+"=)[^&#]+"),"$1"+e):""===Shopify.locationSearch()?"?"+t+"="+e:Shopify.locationSearch()+"&"+t+"="+e,o+Shopify.locationHash()},Shopify.setParam=function(t,e){Shopify.replaceState(Shopify.newState(t,e))},Shopify.Product=function(t){Shopify.isDefined(t)&&this.update(t)},Shopify.Product.prototype.update=function(t){for(property in t)this[property]=t[property]},Shopify.Product.prototype.optionNames=function(){return"Array"==Shopify.getClass(this.options)?this.options:[]},Shopify.Product.prototype.optionValues=function(t){if(!Shopify.isDefined(this.variants))return null;var e=Shopify.map(this.variants,function(e){var o="option"+(t+1);return void 0==e[o]?null:e[o]});return null==e[0]?null:Shopify.uniq(e)},Shopify.Product.prototype.getVariant=function(t){var e=null;return t.length!=this.options.length?e:(Shopify.each(this.variants,function(o){for(var i=!0,r=0;r<t.length;r++){var n="option"+(r+1);o[n]!=t[r]&&(i=!1)}return 1==i?void(e=o):void 0}),e)},Shopify.Product.prototype.getVariantById=function(t){for(var e=0;e<this.variants.length;e++){var o=this.variants[e];if(t==o.id)return o}return null},Shopify.money_format="$",Shopify.formatMoney=function(t,e){function o(t,e){return"undefined"==typeof t?e:t}function i(t,e,i,r){if(e=o(e,2),i=o(i,","),r=o(r,"."),isNaN(t)||null==t)return 0;t=(t/100).toFixed(e);var n=t.split("."),a=n[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1"+i),s=n[1]?r+n[1]:"";return a+s}"string"==typeof t&&(t=t.replace(".",""));var r="",n=/\{\{\s*(\w+)\s*\}\}/,a=e||this.money_format;switch(a.match(n)[1]){case"amount":r=i(t,2);break;case"amount_no_decimals":r=i(t,0);break;case"amount_with_comma_separator":r=i(t,2,".",",");break;case"amount_with_apostrophe_separator":r=i(t,2);break;case"amount_no_decimals_with_comma_separator":r=i(t,0,".",",")}return a.replace(n,r)},Shopify.OptionSelectors=function(t,e){return this.selectorDivClass="selector-wrapper",this.selectorClass="single-option-selector",this.variantIdFieldIdSuffix="-variant-id",this.variantIdField=null,this.historyState=null,this.selectors=[],this.domIdPrefix=t,this.product=new Shopify.Product(e.product),this.onVariantSelected=Shopify.isDefined(e.onVariantSelected)?e.onVariantSelected:function(){},this.replaceSelector(t),this.initDropdown(),e.enableHistoryState&&(this.historyState=new Shopify.OptionSelectors.HistoryState(this)),!0},Shopify.OptionSelectors.prototype.initDropdown=function(){var t={initialLoad:!0},e=this.selectVariantFromDropdown(t);if(!e){var o=this;setTimeout(function(){o.selectVariantFromParams(t)||o.fireOnChangeForFirstDropdown.call(o,t)})}},Shopify.OptionSelectors.prototype.fireOnChangeForFirstDropdown=function(t){this.selectors[0].element.onchange(t)},Shopify.OptionSelectors.prototype.selectVariantFromParamsOrDropdown=function(t){var e=this.selectVariantFromParams(t);e||this.selectVariantFromDropdown(t)},Shopify.OptionSelectors.prototype.replaceSelector=function(t){var e=document.getElementById(t),o=e.parentNode;Shopify.each(this.buildSelectors(),function(t){o.insertBefore(t,e)}),e.style.display="none",this.variantIdField=e},Shopify.OptionSelectors.prototype.selectVariantFromDropdown=function(t){var e=document.getElementById(this.domIdPrefix).querySelector("[selected]");if(e||(e=document.getElementById(this.domIdPrefix).querySelector('[selected="selected"]')),!e)return!1;var o=e.value;return this.selectVariant(o,t)},Shopify.OptionSelectors.prototype.selectVariantFromParams=function(t){var e=Shopify.urlParam("variant");return this.selectVariant(e,t)},Shopify.OptionSelectors.prototype.selectVariant=function(t,e){var o=this.product.getVariantById(t);if(null==o)return!1;for(var i=0;i<this.selectors.length;i++){var r=this.selectors[i].element,n=r.getAttribute("data-option"),a=o[n];null!=a&&this.optionExistInSelect(r,a)&&(r.value=a)}return"undefined"!=typeof jQuery?jQuery(this.selectors[0].element).trigger("change",e):this.selectors[0].element.onchange(e),!0},Shopify.OptionSelectors.prototype.optionExistInSelect=function(t,e){for(var o=0;o<t.options.length;o++)if(t.options[o].value==e)return!0},Shopify.OptionSelectors.prototype.insertSelectors=function(t,e){Shopify.isDefined(e)&&this.setMessageElement(e),this.domIdPrefix="product-"+this.product.id+"-variant-selector";var o=document.getElementById(t);Shopify.each(this.buildSelectors(),function(t){o.appendChild(t)})},Shopify.OptionSelectors.prototype.buildSelectors=function(){for(var t=0;t<this.product.optionNames().length;t++){var e=new Shopify.SingleOptionSelector(this,t,this.product.optionNames()[t],this.product.optionValues(t));e.element.disabled=!1,this.selectors.push(e)}var o=this.selectorDivClass,i=this.product.optionNames(),r=Shopify.map(this.selectors,function(t){var e=document.createElement("div");if(e.setAttribute("class",o),i.length>1){var r=document.createElement("label");r.htmlFor=t.element.id,r.innerHTML=t.name,e.appendChild(r)}return e.appendChild(t.element),e});return r},Shopify.OptionSelectors.prototype.selectedValues=function(){for(var t=[],e=0;e<this.selectors.length;e++){var o=this.selectors[e].element.value;t.push(o)}return t},Shopify.OptionSelectors.prototype.updateSelectors=function(t,e){var o=this.selectedValues(),i=this.product.getVariant(o);i?(this.variantIdField.disabled=!1,this.variantIdField.value=i.id):this.variantIdField.disabled=!0,this.onVariantSelected(i,this,e),null!=this.historyState&&this.historyState.onVariantChange(i,this,e)},Shopify.OptionSelectorsFromDOM=function(t,e){var o=e.optionNames||[],i=e.priceFieldExists||!0,r=e.delimiter||"/",n=this.createProductFromSelector(t,o,i,r);e.product=n,Shopify.OptionSelectorsFromDOM.baseConstructor.call(this,t,e)},Shopify.extend(Shopify.OptionSelectorsFromDOM,Shopify.OptionSelectors),Shopify.OptionSelectorsFromDOM.prototype.createProductFromSelector=function(t,e,o,i){if(!Shopify.isDefined(o))var o=!0;if(!Shopify.isDefined(i))var i="/";var r=document.getElementById(t),n=r.childNodes,a=(r.parentNode,e.length),s=[];Shopify.each(n,function(t,r){if(1==t.nodeType&&"option"==t.tagName.toLowerCase()){var n=t.innerHTML.split(new RegExp("\\s*\\"+i+"\\s*"));0==e.length&&(a=n.length-(o?1:0));var p=n.slice(0,a),l=o?n[a]:"",c=(t.getAttribute("value"),{available:t.disabled?!1:!0,id:parseFloat(t.value),price:l,option1:p[0],option2:p[1],option3:p[2]});s.push(c)}});var p={variants:s};if(0==e.length){p.options=[];for(var l=0;a>l;l++)p.options[l]="option "+(l+1)}else p.options=e;return p},Shopify.SingleOptionSelector=function(t,e,o,i){this.multiSelector=t,this.values=i,this.index=e,this.name=o,this.element=document.createElement("select");for(var r=0;r<i.length;r++){var n=document.createElement("option");n.value=i[r],n.innerHTML=i[r],this.element.appendChild(n)}return this.element.setAttribute("class",this.multiSelector.selectorClass),this.element.setAttribute("data-option","option"+(e+1)),this.element.id=t.domIdPrefix+"-option-"+e,this.element.onchange=function(o,i){i=i||{},t.updateSelectors(e,i)},!0},Shopify.Image={preload:function(t,e){for(var o=0;o<t.length;o++){var i=t[o];this.loadImage(this.getSizedImageUrl(i,e))}},loadImage:function(t){(new Image).src=t},switchImage:function(t,e,o){if(t&&e){var i=this.imageSize(e.src),r=this.getSizedImageUrl(t.src,i);o?o(r,t,e):e.src=r}},imageSize:function(t){var e=t.match(/_(1024x1024|2048x2048|pico|icon|thumb|small|compact|medium|large|grande)\./);return null!=e?e[1]:null},getSizedImageUrl:function(t,e){if(null==e)return t;if("master"==e)return this.removeProtocol(t);var o=t.match(/\.(jpg|jpeg|gif|png|bmp|bitmap|tiff|tif)(\?v=\d+)?$/i);if(null!=o){var i=t.split(o[0]),r=o[0];return this.removeProtocol(i[0]+"_"+e+r)}return null},removeProtocol:function(t){return t.replace(/http(s)?:/,"")}},Shopify.OptionSelectors.HistoryState=function(t){this.browserSupports()&&this.register(t)},Shopify.OptionSelectors.HistoryState.prototype.register=function(t){window.addEventListener("popstate",function(e){t.selectVariantFromParamsOrDropdown({popStateCall:!0})})},Shopify.OptionSelectors.HistoryState.prototype.onVariantChange=function(t,e,o){this.browserSupports()&&(!t||o.initialLoad||o.popStateCall||Shopify.setParam("variant",t.id))},Shopify.OptionSelectors.HistoryState.prototype.browserSupports=function(){return window.history&&window.history.replaceState};

/*============================================================================
  Swatch options - second and third swatch 'sold-out' will update based on availability of previous options selected
==============================================================================*/

  Shopify.updateOptionsInSelector = function(selectorIndex, parent) {
    switch (selectorIndex) {
      case 0:
        var key = 'root';
        var selector = $(parent + ' .single-option-selector:eq(0)');
        break;
      case 1:
        var key = $(parent + ' .single-option-selector:eq(0)').val();
        var selector = $(parent + ' .single-option-selector:eq(1)');
        break;
      case 2:
        var key = $(parent + ' .single-option-selector:eq(0)').val();
        key += ' / ' + $(parent + ' .single-option-selector:eq(1)').val();
        var selector = $(parent + ' .single-option-selector:eq(2)');
    }

    var availableOptions = Shopify.optionsMap[key];

    $(parent + ' .swatch[data-option-index="' + selectorIndex + '"] .swatch-element').each(function() {
      if ($.inArray($(this).attr('data-value'), availableOptions) !== -1) {
        $(this).removeClass('soldout').find(':radio').removeAttr('disabled','disabled').removeAttr('checked');
      }
      else {
        $(this).addClass('soldout').find(':radio').removeAttr('checked').attr('disabled','disabled');
      }
    });
    selector.trigger('change');
  };

/* Linked Option Selectors */
  Shopify.linkOptionSelectors = function(product, parent) {
    // Building our mapping object.
    Shopify.optionsMap = {};
    for (var i=0; i<product.variants.length; i++) {
      var variant = product.variants[i];
      if (variant.available) {
        // Gathering values for the 1st drop-down.
        Shopify.optionsMap['root'] = Shopify.optionsMap['root'] || [];
        Shopify.optionsMap['root'].push(variant.option1);
        Shopify.optionsMap['root'] = Shopify.uniq(Shopify.optionsMap['root']);
        // Gathering values for the 2nd drop-down.
        if (product.options.length > 1) {
          var key = variant.option1;
          Shopify.optionsMap[key] = Shopify.optionsMap[key] || [];
          Shopify.optionsMap[key].push(variant.option2);
          Shopify.optionsMap[key] = Shopify.uniq(Shopify.optionsMap[key]);
        }
        // Gathering values for the 3rd drop-down.
        if (product.options.length === 3) {
          var key = variant.option1 + ' / ' + variant.option2;
          Shopify.optionsMap[key] = Shopify.optionsMap[key] || [];
          Shopify.optionsMap[key].push(variant.option3);
          Shopify.optionsMap[key] = Shopify.uniq(Shopify.optionsMap[key]);
        }
      }
    }
    // Update options right away.
    Shopify.updateOptionsInSelector(0, parent);
    if (product.options.length > 1) Shopify.updateOptionsInSelector(1, parent);
    if (product.options.length === 3) Shopify.updateOptionsInSelector(2, parent);
    // When there is an update in the first dropdown.
    $(parent + " .single-option-selector:eq(0)").change(function() {
      Shopify.updateOptionsInSelector(1, parent);
      if (product.options.length === 3) Shopify.updateOptionsInSelector(2, parent);
      return true;
    });
    // When there is an update in the second dropdown.
    $(parent + " .single-option-selector:eq(1)").change(function() {
      if (product.options.length === 3) Shopify.updateOptionsInSelector(2, parent);
      return true;
    });
  };

/*! fancyBox v2.1.5 fancyapps.com | fancyapps.com/fancybox/#license */
(function(r,G,f,v){var J=f("html"),n=f(r),p=f(G),b=f.fancybox=function(){b.open.apply(this,arguments)},I=navigator.userAgent.match(/msie/i),B=null,s=G.createTouch!==v,t=function(a){return a&&a.hasOwnProperty&&a instanceof f},q=function(a){return a&&"string"===f.type(a)},E=function(a){return q(a)&&0<a.indexOf("%")},l=function(a,d){var e=parseInt(a,10)||0;d&&E(a)&&(e*=b.getViewport()[d]/100);return Math.ceil(e)},w=function(a,b){return l(a,b)+"px"};f.extend(b,{version:"2.1.5",defaults:{padding:15,margin:20,
width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!s,fitToView:!0,aspectRatio:!1,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},
keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+
(I?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"><span class="icon-close"></span></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span class="icon-arrow-right"></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span class="icon-arrow-left"></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,
openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:f.noop,beforeLoad:f.noop,afterLoad:f.noop,beforeShow:f.noop,afterShow:f.noop,beforeChange:f.noop,beforeClose:f.noop,afterClose:f.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,
isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,d){if(a&&(f.isPlainObject(d)||(d={}),!1!==b.close(!0)))return f.isArray(a)||(a=t(a)?f(a).get():[a]),f.each(a,function(e,c){var k={},g,h,j,m,l;"object"===f.type(c)&&(c.nodeType&&(c=f(c)),t(c)?(k={href:c.data("fancybox-href")||c.attr("href"),title:c.data("fancybox-title")||c.attr("title"),isDom:!0,element:c},f.metadata&&f.extend(!0,k,
c.metadata())):k=c);g=d.href||k.href||(q(c)?c:null);h=d.title!==v?d.title:k.title||"";m=(j=d.content||k.content)?"html":d.type||k.type;!m&&k.isDom&&(m=c.data("fancybox-type"),m||(m=(m=c.prop("class").match(/fancybox\.(\w+)/))?m[1]:null));q(g)&&(m||(b.isImage(g)?m="image":b.isSWF(g)?m="swf":"#"===g.charAt(0)?m="inline":q(c)&&(m="html",j=c)),"ajax"===m&&(l=g.split(/\s+/,2),g=l.shift(),l=l.shift()));j||("inline"===m?g?j=f(q(g)?g.replace(/.*(?=#[^\s]+$)/,""):g):k.isDom&&(j=c):"html"===m?j=g:!m&&(!g&&
k.isDom)&&(m="inline",j=c));f.extend(k,{href:g,type:m,content:j,title:h,selector:l});a[e]=k}),b.opts=f.extend(!0,{},b.defaults,d),d.keys!==v&&(b.opts.keys=d.keys?f.extend({},b.defaults.keys,d.keys):!1),b.group=a,b._start(b.opts.index)},cancel:function(){var a=b.coming;a&&!1!==b.trigger("onCancel")&&(b.hideLoading(),b.ajaxLoad&&b.ajaxLoad.abort(),b.ajaxLoad=null,b.imgPreload&&(b.imgPreload.onload=b.imgPreload.onerror=null),a.wrap&&a.wrap.stop(!0,!0).trigger("onReset").remove(),b.coming=null,b.current||
b._afterZoomOut(a))},close:function(a){b.cancel();!1!==b.trigger("beforeClose")&&(b.unbindEvents(),b.isActive&&(!b.isOpen||!0===a?(f(".fancybox-wrap").stop(!0).trigger("onReset").remove(),b._afterZoomOut()):(b.isOpen=b.isOpened=!1,b.isClosing=!0,f(".fancybox-item, .fancybox-nav").remove(),b.wrap.stop(!0,!0).removeClass("fancybox-opened"),b.transitions[b.current.closeMethod]())))},play:function(a){var d=function(){clearTimeout(b.player.timer)},e=function(){d();b.current&&b.player.isActive&&(b.player.timer=
setTimeout(b.next,b.current.playSpeed))},c=function(){d();p.unbind(".player");b.player.isActive=!1;b.trigger("onPlayEnd")};if(!0===a||!b.player.isActive&&!1!==a){if(b.current&&(b.current.loop||b.current.index<b.group.length-1))b.player.isActive=!0,p.bind({"onCancel.player beforeClose.player":c,"onUpdate.player":e,"beforeLoad.player":d}),e(),b.trigger("onPlayStart")}else c()},next:function(a){var d=b.current;d&&(q(a)||(a=d.direction.next),b.jumpto(d.index+1,a,"next"))},prev:function(a){var d=b.current;
d&&(q(a)||(a=d.direction.prev),b.jumpto(d.index-1,a,"prev"))},jumpto:function(a,d,e){var c=b.current;c&&(a=l(a),b.direction=d||c.direction[a>=c.index?"next":"prev"],b.router=e||"jumpto",c.loop&&(0>a&&(a=c.group.length+a%c.group.length),a%=c.group.length),c.group[a]!==v&&(b.cancel(),b._start(a)))},reposition:function(a,d){var e=b.current,c=e?e.wrap:null,k;c&&(k=b._getPosition(d),a&&"scroll"===a.type?(delete k.position,c.stop(!0,!0).animate(k,200)):(c.css(k),e.pos=f.extend({},e.dim,k)))},update:function(a){var d=
a&&a.type,e=!d||"orientationchange"===d;e&&(clearTimeout(B),B=null);b.isOpen&&!B&&(B=setTimeout(function(){var c=b.current;c&&!b.isClosing&&(b.wrap.removeClass("fancybox-tmp"),(e||"load"===d||"resize"===d&&c.autoResize)&&b._setDimension(),"scroll"===d&&c.canShrink||b.reposition(a),b.trigger("onUpdate"),B=null)},e&&!s?0:300))},toggle:function(a){b.isOpen&&(b.current.fitToView="boolean"===f.type(a)?a:!b.current.fitToView,s&&(b.wrap.removeAttr("style").addClass("fancybox-tmp"),b.trigger("onUpdate")),
b.update())},hideLoading:function(){p.unbind(".loading");f("#fancybox-loading").remove()},showLoading:function(){var a,d;b.hideLoading();a=f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");p.bind("keydown.loading",function(a){if(27===(a.which||a.keyCode))a.preventDefault(),b.cancel()});b.defaults.fixed||(d=b.getViewport(),a.css({position:"absolute",top:0.5*d.h+d.y,left:0.5*d.w+d.x}))},getViewport:function(){var a=b.current&&b.current.locked||!1,d={x:n.scrollLeft(),
y:n.scrollTop()};a?(d.w=a[0].clientWidth,d.h=a[0].clientHeight):(d.w=s&&r.innerWidth?r.innerWidth:n.width(),d.h=s&&r.innerHeight?r.innerHeight:n.height());return d},unbindEvents:function(){b.wrap&&t(b.wrap)&&b.wrap.unbind(".fb");p.unbind(".fb");n.unbind(".fb")},bindEvents:function(){var a=b.current,d;a&&(n.bind("orientationchange.fb"+(s?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),b.update),(d=a.keys)&&p.bind("keydown.fb",function(e){var c=e.which||e.keyCode,k=e.target||e.srcElement;
if(27===c&&b.coming)return!1;!e.ctrlKey&&(!e.altKey&&!e.shiftKey&&!e.metaKey&&(!k||!k.type&&!f(k).is("[contenteditable]")))&&f.each(d,function(d,k){if(1<a.group.length&&k[c]!==v)return b[d](k[c]),e.preventDefault(),!1;if(-1<f.inArray(c,k))return b[d](),e.preventDefault(),!1})}),f.fn.mousewheel&&a.mouseWheel&&b.wrap.bind("mousewheel.fb",function(d,c,k,g){for(var h=f(d.target||null),j=!1;h.length&&!j&&!h.is(".fancybox-skin")&&!h.is(".fancybox-wrap");)j=h[0]&&!(h[0].style.overflow&&"hidden"===h[0].style.overflow)&&
(h[0].clientWidth&&h[0].scrollWidth>h[0].clientWidth||h[0].clientHeight&&h[0].scrollHeight>h[0].clientHeight),h=f(h).parent();if(0!==c&&!j&&1<b.group.length&&!a.canShrink){if(0<g||0<k)b.prev(0<g?"down":"left");else if(0>g||0>k)b.next(0>g?"up":"right");d.preventDefault()}}))},trigger:function(a,d){var e,c=d||b.coming||b.current;if(c){f.isFunction(c[a])&&(e=c[a].apply(c,Array.prototype.slice.call(arguments,1)));if(!1===e)return!1;c.helpers&&f.each(c.helpers,function(d,e){if(e&&b.helpers[d]&&f.isFunction(b.helpers[d][a]))b.helpers[d][a](f.extend(!0,
{},b.helpers[d].defaults,e),c)});p.trigger(a)}},isImage:function(a){return q(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(a){return q(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var d={},e,c;a=l(a);e=b.group[a]||null;if(!e)return!1;d=f.extend(!0,{},b.opts,e);e=d.margin;c=d.padding;"number"===f.type(e)&&(d.margin=[e,e,e,e]);"number"===f.type(c)&&(d.padding=[c,c,c,c]);d.modal&&f.extend(!0,d,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,
mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});d.autoSize&&(d.autoWidth=d.autoHeight=!0);"auto"===d.width&&(d.autoWidth=!0);"auto"===d.height&&(d.autoHeight=!0);d.group=b.group;d.index=a;b.coming=d;if(!1===b.trigger("beforeLoad"))b.coming=null;else{c=d.type;e=d.href;if(!c)return b.coming=null,b.current&&b.router&&"jumpto"!==b.router?(b.current.index=a,b[b.router](b.direction)):!1;b.isActive=!0;if("image"===c||"swf"===c)d.autoHeight=d.autoWidth=!1,d.scrolling="visible";"image"===c&&(d.aspectRatio=
!0);"iframe"===c&&s&&(d.scrolling="scroll");d.wrap=f(d.tpl.wrap).addClass("fancybox-"+(s?"mobile":"desktop")+" fancybox-type-"+c+" fancybox-tmp "+d.wrapCSS).appendTo(d.parent||"body");f.extend(d,{skin:f(".fancybox-skin",d.wrap),outer:f(".fancybox-outer",d.wrap),inner:f(".fancybox-inner",d.wrap)});f.each(["Top","Right","Bottom","Left"],function(a,b){d.skin.css("padding"+b,w(d.padding[a]))});b.trigger("onReady");if("inline"===c||"html"===c){if(!d.content||!d.content.length)return b._error("content")}else if(!e)return b._error("href");
"image"===c?b._loadImage():"ajax"===c?b._loadAjax():"iframe"===c?b._loadIframe():b._afterLoad()}},_error:function(a){f.extend(b.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:b.coming.tpl.error});b._afterLoad()},_loadImage:function(){var a=b.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null;b.coming.width=this.width/b.opts.pixelRatio;b.coming.height=this.height/b.opts.pixelRatio;b._afterLoad()};a.onerror=function(){this.onload=
this.onerror=null;b._error("image")};a.src=b.coming.href;!0!==a.complete&&b.showLoading()},_loadAjax:function(){var a=b.coming;b.showLoading();b.ajaxLoad=f.ajax(f.extend({},a.ajax,{url:a.href,error:function(a,e){b.coming&&"abort"!==e?b._error("ajax",a):b.hideLoading()},success:function(d,e){"success"===e&&(a.content=d,b._afterLoad())}}))},_loadIframe:function(){var a=b.coming,d=f(a.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",s?"auto":a.iframe.scrolling).attr("src",a.href);
f(a.wrap).bind("onReset",function(){try{f(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(a){}});a.iframe.preload&&(b.showLoading(),d.one("load",function(){f(this).data("ready",1);s||f(this).bind("load.fb",b.update);f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();b._afterLoad()}));a.content=d.appendTo(a.inner);a.iframe.preload||b._afterLoad()},_preloadImages:function(){var a=b.group,d=b.current,e=a.length,c=d.preload?Math.min(d.preload,
e-1):0,f,g;for(g=1;g<=c;g+=1)f=a[(d.index+g)%e],"image"===f.type&&f.href&&((new Image).src=f.href)},_afterLoad:function(){var a=b.coming,d=b.current,e,c,k,g,h;b.hideLoading();if(a&&!1!==b.isActive)if(!1===b.trigger("afterLoad",a,d))a.wrap.stop(!0).trigger("onReset").remove(),b.coming=null;else{d&&(b.trigger("beforeChange",d),d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());b.unbindEvents();e=a.content;c=a.type;k=a.scrolling;f.extend(b,{wrap:a.wrap,skin:a.skin,
outer:a.outer,inner:a.inner,current:a,previous:d});g=a.href;switch(c){case "inline":case "ajax":case "html":a.selector?e=f("<div>").html(e).find(a.selector):t(e)&&(e.data("fancybox-placeholder")||e.data("fancybox-placeholder",f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),e=e.show().detach(),a.wrap.bind("onReset",function(){f(this).find(e).length&&e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}));break;case "image":e=a.tpl.image.replace("{href}",
g);break;case "swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+g+'"></param>',h="",f.each(a.swf,function(a,b){e+='<param name="'+a+'" value="'+b+'"></param>';h+=" "+a+'="'+b+'"'}),e+='<embed src="'+g+'" type="application/x-shockwave-flash" width="100%" height="100%"'+h+"></embed></object>"}(!t(e)||!e.parent().is(a.inner))&&a.inner.append(e);b.trigger("beforeShow");a.inner.css("overflow","yes"===k?"scroll":
"no"===k?"hidden":k);b._setDimension();b.reposition();b.isOpen=!1;b.coming=null;b.bindEvents();if(b.isOpened){if(d.prevMethod)b.transitions[d.prevMethod]()}else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();b.transitions[b.isOpened?a.nextMethod:a.openMethod]();b._preloadImages()}},_setDimension:function(){var a=b.getViewport(),d=0,e=!1,c=!1,e=b.wrap,k=b.skin,g=b.inner,h=b.current,c=h.width,j=h.height,m=h.minWidth,u=h.minHeight,n=h.maxWidth,p=h.maxHeight,s=h.scrolling,q=h.scrollOutside?
h.scrollbarWidth:0,x=h.margin,y=l(x[1]+x[3]),r=l(x[0]+x[2]),v,z,t,C,A,F,B,D,H;e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");x=l(k.outerWidth(!0)-k.width());v=l(k.outerHeight(!0)-k.height());z=y+x;t=r+v;C=E(c)?(a.w-z)*l(c)/100:c;A=E(j)?(a.h-t)*l(j)/100:j;if("iframe"===h.type){if(H=h.content,h.autoHeight&&1===H.data("ready"))try{H[0].contentWindow.document.location&&(g.width(C).height(9999),F=H.contents().find("body"),q&&F.css("overflow-x","hidden"),A=F.outerHeight(!0))}catch(G){}}else if(h.autoWidth||
h.autoHeight)g.addClass("fancybox-tmp"),h.autoWidth||g.width(C),h.autoHeight||g.height(A),h.autoWidth&&(C=g.width()),h.autoHeight&&(A=g.height()),g.removeClass("fancybox-tmp");c=l(C);j=l(A);D=C/A;m=l(E(m)?l(m,"w")-z:m);n=l(E(n)?l(n,"w")-z:n);u=l(E(u)?l(u,"h")-t:u);p=l(E(p)?l(p,"h")-t:p);F=n;B=p;h.fitToView&&(n=Math.min(a.w-z,n),p=Math.min(a.h-t,p));z=a.w-y;r=a.h-r;h.aspectRatio?(c>n&&(c=n,j=l(c/D)),j>p&&(j=p,c=l(j*D)),c<m&&(c=m,j=l(c/D)),j<u&&(j=u,c=l(j*D))):(c=Math.max(m,Math.min(c,n)),h.autoHeight&&
"iframe"!==h.type&&(g.width(c),j=g.height()),j=Math.max(u,Math.min(j,p)));if(h.fitToView)if(g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height(),h.aspectRatio)for(;(a>z||y>r)&&(c>m&&j>u)&&!(19<d++);)j=Math.max(u,Math.min(p,j-10)),c=l(j*D),c<m&&(c=m,j=l(c/D)),c>n&&(c=n,j=l(c/D)),g.width(c).height(j),e.width(c+x),a=e.width(),y=e.height();else c=Math.max(m,Math.min(c,c-(a-z))),j=Math.max(u,Math.min(j,j-(y-r)));q&&("auto"===s&&j<A&&c+x+q<z)&&(c+=q);g.width(c).height(j);e.width(c+x);a=e.width();
y=e.height();e=(a>z||y>r)&&c>m&&j>u;c=h.aspectRatio?c<F&&j<B&&c<C&&j<A:(c<F||j<B)&&(c<C||j<A);f.extend(h,{dim:{width:w(a),height:w(y)},origWidth:C,origHeight:A,canShrink:e,canExpand:c,wPadding:x,hPadding:v,wrapSpace:y-k.outerHeight(!0),skinSpace:k.height()-j});!H&&(h.autoHeight&&j>u&&j<p&&!c)&&g.height("auto")},_getPosition:function(a){var d=b.current,e=b.getViewport(),c=d.margin,f=b.wrap.width()+c[1]+c[3],g=b.wrap.height()+c[0]+c[2],c={position:"absolute",top:c[0],left:c[3]};d.autoCenter&&d.fixed&&
!a&&g<=e.h&&f<=e.w?c.position="fixed":d.locked||(c.top+=e.y,c.left+=e.x);c.top=w(Math.max(c.top,c.top+(e.h-g)*d.topRatio));c.left=w(Math.max(c.left,c.left+(e.w-f)*d.leftRatio));return c},_afterZoomIn:function(){var a=b.current;a&&(b.isOpen=b.isOpened=!0,b.wrap.css("overflow","visible").addClass("fancybox-opened"),b.update(),(a.closeClick||a.nextClick&&1<b.group.length)&&b.inner.css("cursor","pointer").bind("click.fb",function(d){!f(d.target).is("a")&&!f(d.target).parent().is("a")&&(d.preventDefault(),
b[a.closeClick?"close":"next"]())}),a.closeBtn&&f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb",function(a){a.preventDefault();b.close()}),a.arrows&&1<b.group.length&&((a.loop||0<a.index)&&f(a.tpl.prev).appendTo(b.outer).bind("click.fb",b.prev),(a.loop||a.index<b.group.length-1)&&f(a.tpl.next).appendTo(b.outer).bind("click.fb",b.next)),b.trigger("afterShow"),!a.loop&&a.index===a.group.length-1?b.play(!1):b.opts.autoPlay&&!b.player.isActive&&(b.opts.autoPlay=!1,b.play()))},_afterZoomOut:function(a){a=
a||b.current;f(".fancybox-wrap").trigger("onReset").remove();f.extend(b,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});b.trigger("afterClose",a)}});b.transitions={getOrigPosition:function(){var a=b.current,d=a.element,e=a.orig,c={},f=50,g=50,h=a.hPadding,j=a.wPadding,m=b.getViewport();!e&&(a.isDom&&d.is(":visible"))&&(e=d.find("img:first"),e.length||(e=d));t(e)?(c=e.offset(),e.is("img")&&(f=e.outerWidth(),g=e.outerHeight())):
(c.top=m.y+(m.h-g)*a.topRatio,c.left=m.x+(m.w-f)*a.leftRatio);if("fixed"===b.wrap.css("position")||a.locked)c.top-=m.y,c.left-=m.x;return c={top:w(c.top-h*a.topRatio),left:w(c.left-j*a.leftRatio),width:w(f+j),height:w(g+h)}},step:function(a,d){var e,c,f=d.prop;c=b.current;var g=c.wrapSpace,h=c.skinSpace;if("width"===f||"height"===f)e=d.end===d.start?1:(a-d.start)/(d.end-d.start),b.isClosing&&(e=1-e),c="width"===f?c.wPadding:c.hPadding,c=a-c,b.skin[f](l("width"===f?c:c-g*e)),b.inner[f](l("width"===
f?c:c-g*e-h*e))},zoomIn:function(){var a=b.current,d=a.pos,e=a.openEffect,c="elastic"===e,k=f.extend({opacity:1},d);delete k.position;c?(d=this.getOrigPosition(),a.openOpacity&&(d.opacity=0.1)):"fade"===e&&(d.opacity=0.1);b.wrap.css(d).animate(k,{duration:"none"===e?0:a.openSpeed,easing:a.openEasing,step:c?this.step:null,complete:b._afterZoomIn})},zoomOut:function(){var a=b.current,d=a.closeEffect,e="elastic"===d,c={opacity:0.1};e&&(c=this.getOrigPosition(),a.closeOpacity&&(c.opacity=0.1));b.wrap.animate(c,
{duration:"none"===d?0:a.closeSpeed,easing:a.closeEasing,step:e?this.step:null,complete:b._afterZoomOut})},changeIn:function(){var a=b.current,d=a.nextEffect,e=a.pos,c={opacity:1},f=b.direction,g;e.opacity=0.1;"elastic"===d&&(g="down"===f||"up"===f?"top":"left","down"===f||"right"===f?(e[g]=w(l(e[g])-200),c[g]="+=200px"):(e[g]=w(l(e[g])+200),c[g]="-=200px"));"none"===d?b._afterZoomIn():b.wrap.css(e).animate(c,{duration:a.nextSpeed,easing:a.nextEasing,complete:b._afterZoomIn})},changeOut:function(){var a=
b.previous,d=a.prevEffect,e={opacity:0.1},c=b.direction;"elastic"===d&&(e["down"===c||"up"===c?"top":"left"]=("up"===c||"left"===c?"-":"+")+"=200px");a.wrap.animate(e,{duration:"none"===d?0:a.prevSpeed,easing:a.prevEasing,complete:function(){f(this).trigger("onReset").remove()}})}};b.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!s,fixed:!0},overlay:null,fixed:!1,el:f("html"),create:function(a){a=f.extend({},this.defaults,a);this.overlay&&this.close();this.overlay=
f('<div class="fancybox-overlay"></div>').appendTo(b.coming?b.coming.parent:a.parent);this.fixed=!1;a.fixed&&b.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(a){var d=this;a=f.extend({},this.defaults,a);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a);this.fixed||(n.bind("resize.overlay",f.proxy(this.update,this)),this.update());a.closeClick&&this.overlay.bind("click.overlay",function(a){if(f(a.target).hasClass("fancybox-overlay"))return b.isActive?
b.close():d.close(),!1});this.overlay.css(a.css).show()},close:function(){var a,b;n.unbind("resize.overlay");this.el.hasClass("fancybox-lock")&&(f(".fancybox-margin").removeClass("fancybox-margin"),a=n.scrollTop(),b=n.scrollLeft(),this.el.removeClass("fancybox-lock"),n.scrollTop(a).scrollLeft(b));f(".fancybox-overlay").remove().hide();f.extend(this,{overlay:null,fixed:!1})},update:function(){var a="100%",b;this.overlay.width(a).height("100%");I?(b=Math.max(G.documentElement.offsetWidth,G.body.offsetWidth),
p.width()>b&&(a=p.width())):p.width()>n.width()&&(a=p.width());this.overlay.width(a).height(p.height())},onReady:function(a,b){var e=this.overlay;f(".fancybox-overlay").stop(!0,!0);e||this.create(a);a.locked&&(this.fixed&&b.fixed)&&(e||(this.margin=p.height()>n.height()?f("html").css("margin-right").replace("px",""):!1),b.locked=this.overlay.append(b.wrap),b.fixed=!1);!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,b){var e,c;b.locked&&(!1!==this.margin&&(f("*").filter(function(){return"fixed"===
f(this).css("position")&&!f(this).hasClass("fancybox-overlay")&&!f(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin")),e=n.scrollTop(),c=n.scrollLeft(),this.el.addClass("fancybox-lock"),n.scrollTop(e).scrollLeft(c));this.open(a)},onUpdate:function(){this.fixed||this.update()},afterClose:function(a){this.overlay&&!b.coming&&this.overlay.fadeOut(a.speedOut,f.proxy(this.close,this))}};b.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(a){var d=
b.current,e=d.title,c=a.type;f.isFunction(e)&&(e=e.call(d.element,d));if(q(e)&&""!==f.trim(e)){d=f('<div class="fancybox-title fancybox-title-'+c+'-wrap">'+e+"</div>");switch(c){case "inside":c=b.skin;break;case "outside":c=b.wrap;break;case "over":c=b.inner;break;default:c=b.skin,d.appendTo("body"),I&&d.width(d.width()),d.wrapInner('<span class="child"></span>'),b.current.margin[2]+=Math.abs(l(d.css("margin-bottom")))}d["top"===a.position?"prependTo":"appendTo"](c)}}};f.fn.fancybox=function(a){var d,
e=f(this),c=this.selector||"",k=function(g){var h=f(this).blur(),j=d,k,l;!g.ctrlKey&&(!g.altKey&&!g.shiftKey&&!g.metaKey)&&!h.is(".fancybox-wrap")&&(k=a.groupAttr||"data-fancybox-group",l=h.attr(k),l||(k="rel",l=h.get(0)[k]),l&&(""!==l&&"nofollow"!==l)&&(h=c.length?f(c):e,h=h.filter("["+k+'="'+l+'"]'),j=h.index(this)),a.index=j,!1!==b.open(h,a)&&g.preventDefault())};a=a||{};d=a.index||0;!c||!1===a.live?e.unbind("click.fb-start").bind("click.fb-start",k):p.undelegate(c,"click.fb-start").delegate(c+
":not('.fancybox-item, .fancybox-nav')","click.fb-start",k);this.filter("[data-fancybox-start=1]").trigger("click");return this};p.ready(function(){var a,d;f.scrollbarWidth===v&&(f.scrollbarWidth=function(){var a=f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),b=b.innerWidth()-b.height(99).innerWidth();a.remove();return b});if(f.support.fixedPosition===v){a=f.support;d=f('<div style="position:fixed;top:20px;"></div>').appendTo("body");var e=20===
d[0].offsetTop||15===d[0].offsetTop;d.remove();a.fixedPosition=e}f.extend(b.defaults,{scrollbarWidth:f.scrollbarWidth(),fixed:f.support.fixedPosition,parent:f("body")});a=f(r).width();J.addClass("fancybox-lock-test");d=f(r).width();J.removeClass("fancybox-lock-test");f("<style type='text/css'>.fancybox-margin{margin-right:"+(d-a)+"px;}</style>").appendTo("head")})})(window,document,jQuery);

/*! lazysizes - v5.2.2 */
!function(e){var t=function(u,D,f){"use strict";var k,H;if(function(){var e;var t={lazyClass:"lazyload",loadedClass:"lazyloaded",loadingClass:"lazyloading",preloadClass:"lazypreload",errorClass:"lazyerror",autosizesClass:"lazyautosizes",srcAttr:"data-src",srcsetAttr:"data-srcset",sizesAttr:"data-sizes",minSize:40,customMedia:{},init:true,expFactor:1.5,hFac:.8,loadMode:2,loadHidden:true,ricTimeout:0,throttleDelay:125};H=u.lazySizesConfig||u.lazysizesConfig||{};for(e in t){if(!(e in H)){H[e]=t[e]}}}(),!D||!D.getElementsByClassName){return{init:function(){},cfg:H,noSupport:true}}var O=D.documentElement,a=u.HTMLPictureElement,P="addEventListener",$="getAttribute",q=u[P].bind(u),I=u.setTimeout,U=u.requestAnimationFrame||I,l=u.requestIdleCallback,j=/^picture$/i,r=["load","error","lazyincluded","_lazyloaded"],i={},G=Array.prototype.forEach,J=function(e,t){if(!i[t]){i[t]=new RegExp("(\\s|^)"+t+"(\\s|$)")}return i[t].test(e[$]("class")||"")&&i[t]},K=function(e,t){if(!J(e,t)){e.setAttribute("class",(e[$]("class")||"").trim()+" "+t)}},Q=function(e,t){var i;if(i=J(e,t)){e.setAttribute("class",(e[$]("class")||"").replace(i," "))}},V=function(t,i,e){var a=e?P:"removeEventListener";if(e){V(t,i)}r.forEach(function(e){t[a](e,i)})},X=function(e,t,i,a,r){var n=D.createEvent("Event");if(!i){i={}}i.instance=k;n.initEvent(t,!a,!r);n.detail=i;e.dispatchEvent(n);return n},Y=function(e,t){var i;if(!a&&(i=u.picturefill||H.pf)){if(t&&t.src&&!e[$]("srcset")){e.setAttribute("srcset",t.src)}i({reevaluate:true,elements:[e]})}else if(t&&t.src){e.src=t.src}},Z=function(e,t){return(getComputedStyle(e,null)||{})[t]},s=function(e,t,i){i=i||e.offsetWidth;while(i<H.minSize&&t&&!e._lazysizesWidth){i=t.offsetWidth;t=t.parentNode}return i},ee=function(){var i,a;var t=[];var r=[];var n=t;var s=function(){var e=n;n=t.length?r:t;i=true;a=false;while(e.length){e.shift()()}i=false};var e=function(e,t){if(i&&!t){e.apply(this,arguments)}else{n.push(e);if(!a){a=true;(D.hidden?I:U)(s)}}};e._lsFlush=s;return e}(),te=function(i,e){return e?function(){ee(i)}:function(){var e=this;var t=arguments;ee(function(){i.apply(e,t)})}},ie=function(e){var i;var a=0;var r=H.throttleDelay;var n=H.ricTimeout;var t=function(){i=false;a=f.now();e()};var s=l&&n>49?function(){l(t,{timeout:n});if(n!==H.ricTimeout){n=H.ricTimeout}}:te(function(){I(t)},true);return function(e){var t;if(e=e===true){n=33}if(i){return}i=true;t=r-(f.now()-a);if(t<0){t=0}if(e||t<9){s()}else{I(s,t)}}},ae=function(e){var t,i;var a=99;var r=function(){t=null;e()};var n=function(){var e=f.now()-i;if(e<a){I(n,a-e)}else{(l||r)(r)}};return function(){i=f.now();if(!t){t=I(n,a)}}},e=function(){var v,m,c,h,e;var y,z,g,p,C,b,A;var n=/^img$/i;var d=/^iframe$/i;var E="onscroll"in u&&!/(gle|ing)bot/.test(navigator.userAgent);var _=0;var w=0;var N=0;var M=-1;var x=function(e){N--;if(!e||N<0||!e.target){N=0}};var W=function(e){if(A==null){A=Z(D.body,"visibility")=="hidden"}return A||!(Z(e.parentNode,"visibility")=="hidden"&&Z(e,"visibility")=="hidden")};var S=function(e,t){var i;var a=e;var r=W(e);g-=t;b+=t;p-=t;C+=t;while(r&&(a=a.offsetParent)&&a!=D.body&&a!=O){r=(Z(a,"opacity")||1)>0;if(r&&Z(a,"overflow")!="visible"){i=a.getBoundingClientRect();r=C>i.left&&p<i.right&&b>i.top-1&&g<i.bottom+1}}return r};var t=function(){var e,t,i,a,r,n,s,l,o,u,f,c;var d=k.elements;if((h=H.loadMode)&&N<8&&(e=d.length)){t=0;M++;for(;t<e;t++){if(!d[t]||d[t]._lazyRace){continue}if(!E||k.prematureUnveil&&k.prematureUnveil(d[t])){R(d[t]);continue}if(!(l=d[t][$]("data-expand"))||!(n=l*1)){n=w}if(!u){u=!H.expand||H.expand<1?O.clientHeight>500&&O.clientWidth>500?500:370:H.expand;k._defEx=u;f=u*H.expFactor;c=H.hFac;A=null;if(w<f&&N<1&&M>2&&h>2&&!D.hidden){w=f;M=0}else if(h>1&&M>1&&N<6){w=u}else{w=_}}if(o!==n){y=innerWidth+n*c;z=innerHeight+n;s=n*-1;o=n}i=d[t].getBoundingClientRect();if((b=i.bottom)>=s&&(g=i.top)<=z&&(C=i.right)>=s*c&&(p=i.left)<=y&&(b||C||p||g)&&(H.loadHidden||W(d[t]))&&(m&&N<3&&!l&&(h<3||M<4)||S(d[t],n))){R(d[t]);r=true;if(N>9){break}}else if(!r&&m&&!a&&N<4&&M<4&&h>2&&(v[0]||H.preloadAfterLoad)&&(v[0]||!l&&(b||C||p||g||d[t][$](H.sizesAttr)!="auto"))){a=v[0]||d[t]}}if(a&&!r){R(a)}}};var i=ie(t);var B=function(e){var t=e.target;if(t._lazyCache){delete t._lazyCache;return}x(e);K(t,H.loadedClass);Q(t,H.loadingClass);V(t,L);X(t,"lazyloaded")};var a=te(B);var L=function(e){a({target:e.target})};var T=function(t,i){try{t.contentWindow.location.replace(i)}catch(e){t.src=i}};var F=function(e){var t;var i=e[$](H.srcsetAttr);if(t=H.customMedia[e[$]("data-media")||e[$]("media")]){e.setAttribute("media",t)}if(i){e.setAttribute("srcset",i)}};var s=te(function(t,e,i,a,r){var n,s,l,o,u,f;if(!(u=X(t,"lazybeforeunveil",e)).defaultPrevented){if(a){if(i){K(t,H.autosizesClass)}else{t.setAttribute("sizes",a)}}s=t[$](H.srcsetAttr);n=t[$](H.srcAttr);if(r){l=t.parentNode;o=l&&j.test(l.nodeName||"")}f=e.firesLoad||"src"in t&&(s||n||o);u={target:t};K(t,H.loadingClass);if(f){clearTimeout(c);c=I(x,2500);V(t,L,true)}if(o){G.call(l.getElementsByTagName("source"),F)}if(s){t.setAttribute("srcset",s)}else if(n&&!o){if(d.test(t.nodeName)){T(t,n)}else{t.src=n}}if(r&&(s||o)){Y(t,{src:n})}}if(t._lazyRace){delete t._lazyRace}Q(t,H.lazyClass);ee(function(){var e=t.complete&&t.naturalWidth>1;if(!f||e){if(e){K(t,"ls-is-cached")}B(u);t._lazyCache=true;I(function(){if("_lazyCache"in t){delete t._lazyCache}},9)}if(t.loading=="lazy"){N--}},true)});var R=function(e){if(e._lazyRace){return}var t;var i=n.test(e.nodeName);var a=i&&(e[$](H.sizesAttr)||e[$]("sizes"));var r=a=="auto";if((r||!m)&&i&&(e[$]("src")||e.srcset)&&!e.complete&&!J(e,H.errorClass)&&J(e,H.lazyClass)){return}t=X(e,"lazyunveilread").detail;if(r){re.updateElem(e,true,e.offsetWidth)}e._lazyRace=true;N++;s(e,t,r,a,i)};var r=ae(function(){H.loadMode=3;i()});var l=function(){if(H.loadMode==3){H.loadMode=2}r()};var o=function(){if(m){return}if(f.now()-e<999){I(o,999);return}m=true;H.loadMode=3;i();q("scroll",l,true)};return{_:function(){e=f.now();k.elements=D.getElementsByClassName(H.lazyClass);v=D.getElementsByClassName(H.lazyClass+" "+H.preloadClass);q("scroll",i,true);q("resize",i,true);q("pageshow",function(e){if(e.persisted){var t=D.querySelectorAll("."+H.loadingClass);if(t.length&&t.forEach){U(function(){t.forEach(function(e){if(e.complete){R(e)}})})}}});if(u.MutationObserver){new MutationObserver(i).observe(O,{childList:true,subtree:true,attributes:true})}else{O[P]("DOMNodeInserted",i,true);O[P]("DOMAttrModified",i,true);setInterval(i,999)}q("hashchange",i,true);["focus","mouseover","click","load","transitionend","animationend"].forEach(function(e){D[P](e,i,true)});if(/d$|^c/.test(D.readyState)){o()}else{q("load",o);D[P]("DOMContentLoaded",i);I(o,2e4)}if(k.elements.length){t();ee._lsFlush()}else{i()}},checkElems:i,unveil:R,_aLSL:l}}(),re=function(){var i;var n=te(function(e,t,i,a){var r,n,s;e._lazysizesWidth=a;a+="px";e.setAttribute("sizes",a);if(j.test(t.nodeName||"")){r=t.getElementsByTagName("source");for(n=0,s=r.length;n<s;n++){r[n].setAttribute("sizes",a)}}if(!i.detail.dataAttr){Y(e,i.detail)}});var a=function(e,t,i){var a;var r=e.parentNode;if(r){i=s(e,r,i);a=X(e,"lazybeforesizes",{width:i,dataAttr:!!t});if(!a.defaultPrevented){i=a.detail.width;if(i&&i!==e._lazysizesWidth){n(e,r,a,i)}}}};var e=function(){var e;var t=i.length;if(t){e=0;for(;e<t;e++){a(i[e])}}};var t=ae(e);return{_:function(){i=D.getElementsByClassName(H.autosizesClass);q("resize",t)},checkElems:t,updateElem:a}}(),t=function(){if(!t.i&&D.getElementsByClassName){t.i=true;re._();e._()}};return I(function(){H.init&&t()}),k={cfg:H,autoSizer:re,loader:e,init:t,uP:Y,aC:K,rC:Q,hC:J,fire:X,gW:s,rAF:ee}}(e,e.document,Date);e.lazySizes=t,"object"==typeof module&&module.exports&&(module.exports=t)}("undefined"!=typeof window?window:{});

/*
 * jQuery offscreen plugin
 *
 * Copyright Cory LaViska for A Beautiful Site, LLC
 *
 * @license: http://opensource.org/licenses/MIT
 *
 */
(function($) {
  $.extend($.expr[':'], {
    'off-top': function(el) {
      return $(el).offset().top < $(window).scrollTop();
    },
    'off-right': function(el) {
      return $(el).offset().left + $(el).outerWidth() - $(window).scrollLeft() > $(window).width();
    },
    'off-bottom': function(el) {
      return $(el).offset().top + $(el).outerHeight() - $(window).scrollTop() > $(window).height();
    },
    'off-left': function(el) {
      return $(el).offset().left < $(window).scrollLeft();
    },
    'off-screen': function(el) {
      return $(el).is(':off-top, :off-right, :off-bottom, :off-left');
    }
  });
})(jQuery);

/*
 * jQuery mmenu v5.7.8
 * @requires jQuery 1.7.0 or later
 *
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 * www.frebsite.nl
 *
 * License: CC-BY-NC-4.0
 * http://creativecommons.org/licenses/by-nc/4.0/
 */
!function(e){function n(){e[t].glbl||(r={$wndw:e(window),$docu:e(document),$html:e("html"),$body:e("body")},s={},a={},o={},e.each([s,a,o],function(e,n){n.add=function(e){e=e.split(" ");for(var t=0,i=e.length;t<i;t++)n[e[t]]=n.mm(e[t])}}),s.mm=function(e){return"mm-"+e},s.add("wrapper menu panels panel nopanel current highest opened subopened navbar hasnavbar title btn prev next listview nolistview inset vertical selected divider spacer hidden fullsubopen"),s.umm=function(e){return"mm-"==e.slice(0,3)&&(e=e.slice(3)),e},a.mm=function(e){return"mm-"+e},a.add("parent child"),o.mm=function(e){return e+".mm"},o.add("transitionend webkitTransitionEnd click scroll keydown mousedown mouseup touchstart touchmove touchend orientationchange"),e[t]._c=s,e[t]._d=a,e[t]._e=o,e[t].glbl=r)}var t="mmenu",i="5.7.8";if(!(e[t]&&e[t].version>i)){e[t]=function(e,n,t){this.$menu=e,this._api=["bind","getInstance","update","initPanels","openPanel","closePanel","closeAllPanels","setSelected"],this.opts=n,this.conf=t,this.vars={},this.cbck={},"function"==typeof this.___deprecated&&this.___deprecated(),this._initMenu(),this._initAnchors();var i=this.$pnls.children();return this._initAddons(),this.initPanels(i),"function"==typeof this.___debug&&this.___debug(),this},e[t].version=i,e[t].addons={},e[t].uniqueId=0,e[t].defaults={extensions:[],initMenu:function(){},initPanels:function(){},navbar:{add:!0,title:"Menu",titleLink:"panel"},onClick:{setSelected:!0},slidingSubmenus:!0},e[t].configuration={classNames:{divider:"Divider",inset:"Inset",panel:"Panel",selected:"Selected",spacer:"Spacer",vertical:"Vertical"},clone:!1,openingInterval:25,panelNodetype:"ul, ol, div",transitionDuration:400},e[t].prototype={init:function(e){this.initPanels(e)},getInstance:function(){return this},update:function(){this.trigger("update")},initPanels:function(e){e=e.not("."+s.nopanel),e=this._initPanels(e),this.opts.initPanels.call(this,e),this.trigger("initPanels",e),this.trigger("update")},openPanel:function(n){var i=n.parent(),a=this;if(i.hasClass(s.vertical)){var o=i.parents("."+s.subopened);if(o.length)return void this.openPanel(o.first());i.addClass(s.opened),this.trigger("openPanel",n),this.trigger("openingPanel",n),this.trigger("openedPanel",n)}else{if(n.hasClass(s.current))return;var r=this.$pnls.children("."+s.panel),l=r.filter("."+s.current);r.removeClass(s.highest).removeClass(s.current).not(n).not(l).not("."+s.vertical).addClass(s.hidden),e[t].support.csstransitions||l.addClass(s.hidden),n.hasClass(s.opened)?n.nextAll("."+s.opened).addClass(s.highest).removeClass(s.opened).removeClass(s.subopened):(n.addClass(s.highest),l.addClass(s.subopened)),n.removeClass(s.hidden).addClass(s.current),a.trigger("openPanel",n),setTimeout(function(){n.removeClass(s.subopened).addClass(s.opened),a.trigger("openingPanel",n),a.__transitionend(n,function(){a.trigger("openedPanel",n)},a.conf.transitionDuration)},this.conf.openingInterval)}},closePanel:function(e){var n=e.parent();n.hasClass(s.vertical)&&(n.removeClass(s.opened),this.trigger("closePanel",e),this.trigger("closingPanel",e),this.trigger("closedPanel",e))},closeAllPanels:function(){this.$menu.find("."+s.listview).children().removeClass(s.selected).filter("."+s.vertical).removeClass(s.opened);var e=this.$pnls.children("."+s.panel),n=e.first();this.$pnls.children("."+s.panel).not(n).removeClass(s.subopened).removeClass(s.opened).removeClass(s.current).removeClass(s.highest).addClass(s.hidden),this.openPanel(n)},togglePanel:function(e){var n=e.parent();n.hasClass(s.vertical)&&this[n.hasClass(s.opened)?"closePanel":"openPanel"](e)},setSelected:function(e){this.$menu.find("."+s.listview).children("."+s.selected).removeClass(s.selected),e.addClass(s.selected),this.trigger("setSelected",e)},bind:function(e,n){e="init"==e?"initPanels":e,this.cbck[e]=this.cbck[e]||[],this.cbck[e].push(n)},trigger:function(){var e=this,n=Array.prototype.slice.call(arguments),t=n.shift();if(t="init"==t?"initPanels":t,this.cbck[t])for(var i=0,s=this.cbck[t].length;i<s;i++)this.cbck[t][i].apply(e,n)},_initMenu:function(){this.conf.clone&&(this.$orig=this.$menu,this.$menu=this.$orig.clone(!0),this.$menu.add(this.$menu.find("[id]")).filter("[id]").each(function(){e(this).attr("id",s.mm(e(this).attr("id")))})),this.opts.initMenu.call(this,this.$menu,this.$orig),this.$menu.attr("id",this.$menu.attr("id")||this.__getUniqueId()),this.$pnls=e('<div class="'+s.panels+'" />').append(this.$menu.children(this.conf.panelNodetype)).prependTo(this.$menu),this.$menu.parent().addClass(s.wrapper);var n=[s.menu];this.opts.slidingSubmenus||n.push(s.vertical),this.opts.extensions=this.opts.extensions.length?"mm-"+this.opts.extensions.join(" mm-"):"",this.opts.extensions&&n.push(this.opts.extensions),this.$menu.addClass(n.join(" ")),this.trigger("_initMenu")},_initPanels:function(n){var i=this,o=this.__findAddBack(n,"ul, ol");this.__refactorClass(o,this.conf.classNames.inset,"inset").addClass(s.nolistview+" "+s.nopanel),o.not("."+s.nolistview).addClass(s.listview);var r=this.__findAddBack(n,"."+s.listview).children();this.__refactorClass(r,this.conf.classNames.selected,"selected"),this.__refactorClass(r,this.conf.classNames.divider,"divider"),this.__refactorClass(r,this.conf.classNames.spacer,"spacer"),this.__refactorClass(this.__findAddBack(n,"."+this.conf.classNames.panel),this.conf.classNames.panel,"panel");var l=e(),d=n.add(n.find("."+s.panel)).add(this.__findAddBack(n,"."+s.listview).children().children(this.conf.panelNodetype)).not("."+s.nopanel);this.__refactorClass(d,this.conf.classNames.vertical,"vertical"),this.opts.slidingSubmenus||d.addClass(s.vertical),d.each(function(){var n=e(this),t=n;n.is("ul, ol")?(n.wrap('<div class="'+s.panel+'" />'),t=n.parent()):t.addClass(s.panel);var a=n.attr("id");n.removeAttr("id"),t.attr("id",a||i.__getUniqueId()),n.hasClass(s.vertical)&&(n.removeClass(i.conf.classNames.vertical),t.add(t.parent()).addClass(s.vertical)),l=l.add(t)});var c=e("."+s.panel,this.$menu);l.each(function(n){var o,r,l=e(this),d=l.parent(),c=d.children("a, span").first();if(d.is("."+s.panels)||(d.data(a.child,l),l.data(a.parent,d)),d.children("."+s.next).length||d.parent().is("."+s.listview)&&(o=l.attr("id"),r=e('<a class="'+s.next+'" href="#'+o+'" data-target="#'+o+'" />').insertBefore(c),c.is("span")&&r.addClass(s.fullsubopen)),!l.children("."+s.navbar).length&&!d.hasClass(s.vertical)){d.parent().is("."+s.listview)?d=d.closest("."+s.panel):(c=d.closest("."+s.panel).find('a[href="#'+l.attr("id")+'"]').first(),d=c.closest("."+s.panel));var h=!1,u=e('<div class="'+s.navbar+'" />');if(i.opts.navbar.add&&l.addClass(s.hasnavbar),d.length){switch(o=d.attr("id"),i.opts.navbar.titleLink){case"anchor":h=c.attr("href");break;case"panel":case"parent":h="#"+o;break;default:h=!1}u.append('<a class="'+s.btn+" "+s.prev+'" href="#'+o+'" data-target="#'+o+'" />').append(e('<a class="'+s.title+'"'+(h?' href="'+h+'"':"")+" />").text(c.text())).prependTo(l)}else i.opts.navbar.title&&u.append('<a class="'+s.title+'">'+e[t].i18n(i.opts.navbar.title)+"</a>").prependTo(l)}});var h=this.__findAddBack(n,"."+s.listview).children("."+s.selected).removeClass(s.selected).last().addClass(s.selected);h.add(h.parentsUntil("."+s.menu,"li")).filter("."+s.vertical).addClass(s.opened).end().each(function(){e(this).parentsUntil("."+s.menu,"."+s.panel).not("."+s.vertical).first().addClass(s.opened).parentsUntil("."+s.menu,"."+s.panel).not("."+s.vertical).first().addClass(s.opened).addClass(s.subopened)}),h.children("."+s.panel).not("."+s.vertical).addClass(s.opened).parentsUntil("."+s.menu,"."+s.panel).not("."+s.vertical).first().addClass(s.opened).addClass(s.subopened);var u=c.filter("."+s.opened);return u.length||(u=l.first()),u.addClass(s.opened).last().addClass(s.current),l.not("."+s.vertical).not(u.last()).addClass(s.hidden).end().filter(function(){return!e(this).parent().hasClass(s.panels)}).appendTo(this.$pnls),this.trigger("_initPanels",l),l},_initAnchors:function(){var n=this;r.$body.on(o.click+"-oncanvas","a[href]",function(i){var a=e(this),o=!1,r=n.$menu.find(a).length;for(var l in e[t].addons)if(e[t].addons[l].clickAnchor.call(n,a,r)){o=!0;break}var d=a.attr("href");if(!o&&r&&d.length>1&&"#"==d.slice(0,1))try{var c=e(d,n.$menu);c.is("."+s.panel)&&(o=!0,n[a.parent().hasClass(s.vertical)?"togglePanel":"openPanel"](c))}catch(h){}if(o&&i.preventDefault(),!o&&r&&a.is("."+s.listview+" > li > a")&&!a.is('[rel="external"]')&&!a.is('[target="_blank"]')){n.__valueOrFn(n.opts.onClick.setSelected,a)&&n.setSelected(e(i.target).parent());var u=n.__valueOrFn(n.opts.onClick.preventDefault,a,"#"==d.slice(0,1));u&&i.preventDefault(),n.__valueOrFn(n.opts.onClick.close,a,u)&&n.close()}}),this.trigger("_initAnchors")},_initAddons:function(){var n;for(n in e[t].addons)e[t].addons[n].add.call(this),e[t].addons[n].add=function(){};for(n in e[t].addons)e[t].addons[n].setup.call(this);this.trigger("_initAddons")},_getOriginalMenuId:function(){var e=this.$menu.attr("id");return e&&e.length&&this.conf.clone&&(e=s.umm(e)),e},__api:function(){var n=this,t={};return e.each(this._api,function(e){var i=this;t[i]=function(){var e=n[i].apply(n,arguments);return"undefined"==typeof e?t:e}}),t},__valueOrFn:function(e,n,t){return"function"==typeof e?e.call(n[0]):"undefined"==typeof e&&"undefined"!=typeof t?t:e},__refactorClass:function(e,n,t){return e.filter("."+n).removeClass(n).addClass(s[t])},__findAddBack:function(e,n){return e.find(n).add(e.filter(n))},__filterListItems:function(e){return e.not("."+s.divider).not("."+s.hidden)},__transitionend:function(n,t,i){var s=!1,a=function(i){if("undefined"!=typeof i){if(!e(i.target).is(n))return!1;n.unbind(o.transitionend),n.unbind(o.webkitTransitionEnd)}s||t.call(n[0]),s=!0};n.on(o.transitionend,a),n.on(o.webkitTransitionEnd,a),setTimeout(a,1.1*i)},__getUniqueId:function(){return s.mm(e[t].uniqueId++)}},e.fn[t]=function(i,s){n(),i=e.extend(!0,{},e[t].defaults,i),s=e.extend(!0,{},e[t].configuration,s);var a=e();return this.each(function(){var n=e(this);if(!n.data(t)){var o=new e[t](n,i,s);o.$menu.data(t,o.__api()),a=a.add(o.$menu)}}),a},e[t].i18n=function(){var n={};return function(t){switch(typeof t){case"object":return e.extend(n,t),n;case"string":return n[t]||t;case"undefined":default:return n}}}(),e[t].support={touch:"ontouchstart"in window||navigator.msMaxTouchPoints||!1,csstransitions:function(){if("undefined"!=typeof Modernizr&&"undefined"!=typeof Modernizr.csstransitions)return Modernizr.csstransitions;var e=document.body||document.documentElement,n=e.style,t="transition";if("string"==typeof n[t])return!0;var i=["Moz","webkit","Webkit","Khtml","O","ms"];t=t.charAt(0).toUpperCase()+t.substr(1);for(var s=0;s<i.length;s++)if("string"==typeof n[i[s]+t])return!0;return!1}(),csstransforms:function(){return"undefined"==typeof Modernizr||"undefined"==typeof Modernizr.csstransforms||Modernizr.csstransforms}(),csstransforms3d:function(){return"undefined"==typeof Modernizr||"undefined"==typeof Modernizr.csstransforms3d||Modernizr.csstransforms3d}()};var s,a,o,r}}(jQuery),

/*
 * jQuery mmenu offCanvas add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */

function(e){var n="mmenu",t="offCanvas";e[n].addons[t]={setup:function(){if(this.opts[t]){var s=this.opts[t],a=this.conf[t];o=e[n].glbl,this._api=e.merge(this._api,["open","close","setPage"]),"top"!=s.position&&"bottom"!=s.position||(s.zposition="front"),"string"!=typeof a.pageSelector&&(a.pageSelector="> "+a.pageNodetype),o.$allMenus=(o.$allMenus||e()).add(this.$menu),this.vars.opened=!1;var r=[i.offcanvas];"left"!=s.position&&r.push(i.mm(s.position)),"back"!=s.zposition&&r.push(i.mm(s.zposition)),this.$menu.addClass(r.join(" ")).parent().removeClass(i.wrapper),e[n].support.csstransforms||this.$menu.addClass(i["no-csstransforms"]),e[n].support.csstransforms3d||this.$menu.addClass(i["no-csstransforms3d"]),this.setPage(o.$page),this._initBlocker(),this["_initWindow_"+t](),this.$menu[a.menuInjectMethod+"To"](a.menuWrapperSelector);var l=window.location.hash;if(l){var d=this._getOriginalMenuId();d&&d==l.slice(1)&&this.open()}}},add:function(){i=e[n]._c,s=e[n]._d,a=e[n]._e,i.add("offcanvas slideout blocking modal background opening blocker page no-csstransforms3d"),s.add("style"),a.add("resize")},clickAnchor:function(e,n){var s=this;if(this.opts[t]){var a=this._getOriginalMenuId();if(a&&e.is('[href="#'+a+'"]')){if(n)return!0;var r=e.closest("."+i.menu);if(r.length){var l=r.data("mmenu");if(l&&l.close)return l.close(),s.__transitionend(r,function(){s.open()},s.conf.transitionDuration),!0}return this.open(),!0}if(o.$page)return a=o.$page.first().attr("id"),a&&e.is('[href="#'+a+'"]')?(this.close(),!0):void 0}}},e[n].defaults[t]={position:"left",zposition:"back",blockUI:!0,moveBackground:!0},e[n].configuration[t]={pageNodetype:"div",pageSelector:null,noPageSelector:[],wrapPageIfNeeded:!0,menuWrapperSelector:"body",menuInjectMethod:"prepend"},e[n].prototype.open=function(){if(!this.vars.opened){var e=this;this._openSetup(),setTimeout(function(){e._openFinish()},this.conf.openingInterval),this.trigger("open")}},e[n].prototype._openSetup=function(){var n=this,r=this.opts[t];this.closeAllOthers(),o.$page.each(function(){e(this).data(s.style,e(this).attr("style")||"")}),o.$wndw.trigger(a.resize+"-"+t,[!0]);var l=[i.opened];r.blockUI&&l.push(i.blocking),"modal"==r.blockUI&&l.push(i.modal),r.moveBackground&&l.push(i.background),"left"!=r.position&&l.push(i.mm(this.opts[t].position)),"back"!=r.zposition&&l.push(i.mm(this.opts[t].zposition)),this.opts.extensions&&l.push(this.opts.extensions),o.$html.addClass(l.join(" ")),setTimeout(function(){n.vars.opened=!0},this.conf.openingInterval),this.$menu.addClass(i.current+" "+i.opened)},e[n].prototype._openFinish=function(){var e=this;this.__transitionend(o.$page.first(),function(){e.trigger("opened")},this.conf.transitionDuration),o.$html.addClass(i.opening),this.trigger("opening")},e[n].prototype.close=function(){if(this.vars.opened){var n=this;this.__transitionend(o.$page.first(),function(){n.$menu.removeClass(i.current+" "+i.opened);var a=[i.opened,i.blocking,i.modal,i.background,i.mm(n.opts[t].position),i.mm(n.opts[t].zposition)];n.opts.extensions&&a.push(n.opts.extensions),o.$html.removeClass(a.join(" ")),o.$page.each(function(){e(this).attr("style",e(this).data(s.style))}),n.vars.opened=!1,n.trigger("closed")},this.conf.transitionDuration),o.$html.removeClass(i.opening),this.trigger("close"),this.trigger("closing")}},e[n].prototype.closeAllOthers=function(){o.$allMenus.not(this.$menu).each(function(){var t=e(this).data(n);t&&t.close&&t.close()})},e[n].prototype.setPage=function(n){var s=this,a=this.conf[t];n&&n.length||(n=o.$body.find(a.pageSelector),a.noPageSelector.length&&(n=n.not(a.noPageSelector.join(", "))),n.length>1&&a.wrapPageIfNeeded&&(n=n.wrapAll("<"+this.conf[t].pageNodetype+" />").parent())),n.each(function(){e(this).attr("id",e(this).attr("id")||s.__getUniqueId())}),n.addClass(i.page+" "+i.slideout),o.$page=n,this.trigger("setPage",n)},e[n].prototype["_initWindow_"+t]=function(){o.$wndw.off(a.keydown+"-"+t).on(a.keydown+"-"+t,function(e){if(o.$html.hasClass(i.opened)&&9==e.keyCode)return e.preventDefault(),!1});var e=0;o.$wndw.off(a.resize+"-"+t).on(a.resize+"-"+t,function(n,t){if(1==o.$page.length&&(t||o.$html.hasClass(i.opened))){var s=o.$wndw.height();(t||s!=e)&&(e=s,o.$page.css("minHeight",s))}})},e[n].prototype._initBlocker=function(){var n=this;this.opts[t].blockUI&&(o.$blck||(o.$blck=e('<div id="'+i.blocker+'" class="'+i.slideout+'" />')),o.$blck.appendTo(o.$body).off(a.touchstart+"-"+t+" "+a.touchmove+"-"+t).on(a.touchstart+"-"+t+" "+a.touchmove+"-"+t,function(e){e.preventDefault(),e.stopPropagation(),o.$blck.trigger(a.mousedown+"-"+t)}).off(a.mousedown+"-"+t).on(a.mousedown+"-"+t,function(e){e.preventDefault(),o.$html.hasClass(i.modal)||(n.closeAllOthers(),n.close())}))};var i,s,a,o}(jQuery),/*

* jQuery mmenu searchfield add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(e){function n(e){switch(e){case 9:case 16:case 17:case 18:case 37:case 38:case 39:case 40:return!0}return!1}var t="mmenu",i="searchfield";e[t].addons[i]={setup:function(){var l=this,d=this.opts[i],c=this.conf[i];r=e[t].glbl,"boolean"==typeof d&&(d={add:d}),"object"!=typeof d&&(d={}),"boolean"==typeof d.resultsPanel&&(d.resultsPanel={add:d.resultsPanel}),d=this.opts[i]=e.extend(!0,{},e[t].defaults[i],d),c=this.conf[i]=e.extend(!0,{},e[t].configuration[i],c),this.bind("close",function(){this.$menu.find("."+s.search).find("input").blur()}),this.bind("initPanels",function(r){if(d.add){var h;switch(d.addTo){case"panels":h=r;break;default:h=this.$menu.find(d.addTo)}if(h.each(function(){var n=e(this);if(!n.is("."+s.panel)||!n.is("."+s.vertical)){if(!n.children("."+s.search).length){var i=l.__valueOrFn(c.clear,n),a=l.__valueOrFn(c.form,n),r=l.__valueOrFn(c.input,n),h=l.__valueOrFn(c.submit,n),u=e("<"+(a?"form":"div")+' class="'+s.search+'" />'),f=e('<input placeholder="'+e[t].i18n(d.placeholder)+'" type="text" autocomplete="off" />');u.append(f);var p;if(r)for(p in r)f.attr(p,r[p]);if(i&&e('<a class="'+s.btn+" "+s.clear+'" href="#" />').appendTo(u).on(o.click+"-searchfield",function(e){e.preventDefault(),f.val("").trigger(o.keyup+"-searchfield")}),a){for(p in a)u.attr(p,a[p]);h&&!i&&e('<a class="'+s.btn+" "+s.next+'" href="#" />').appendTo(u).on(o.click+"-searchfield",function(e){e.preventDefault(),u.submit()})}n.hasClass(s.search)?n.replaceWith(u):n.prepend(u).addClass(s.hassearch)}if(d.noResults){var v=n.closest("."+s.panel).length;if(v||(n=l.$pnls.children("."+s.panel).first()),!n.children("."+s.noresultsmsg).length){var m=n.children("."+s.listview).first();e('<div class="'+s.noresultsmsg+" "+s.hidden+'" />').append(e[t].i18n(d.noResults))[m.length?"insertAfter":"prependTo"](m.length?m:n)}}}}),d.search){if(d.resultsPanel.add){d.showSubPanels=!1;var u=this.$pnls.children("."+s.resultspanel);u.length||(u=e('<div class="'+s.panel+" "+s.resultspanel+" "+s.hidden+'" />').appendTo(this.$pnls).append('<div class="'+s.navbar+" "+s.hidden+'"><a class="'+s.title+'">'+e[t].i18n(d.resultsPanel.title)+"</a></div>").append('<ul class="'+s.listview+'" />').append(this.$pnls.find("."+s.noresultsmsg).first().clone()),this.initPanels(u))}this.$menu.find("."+s.search).each(function(){var t,r,c=e(this),h=c.closest("."+s.panel).length;h?(t=c.closest("."+s.panel),r=t):(t=e("."+s.panel,l.$menu),r=l.$menu),d.resultsPanel.add&&(t=t.not(u));var f=c.children("input"),p=l.__findAddBack(t,"."+s.listview).children("li"),v=p.filter("."+s.divider),m=l.__filterListItems(p),g="a",b=g+", span",_="",C=function(){var n=f.val().toLowerCase();if(n!=_){if(_=n,d.resultsPanel.add&&u.children("."+s.listview).empty(),t.scrollTop(0),m.add(v).addClass(s.hidden).find("."+s.fullsubopensearch).removeClass(s.fullsubopen+" "+s.fullsubopensearch),m.each(function(){var n=e(this),t=g;(d.showTextItems||d.showSubPanels&&n.find("."+s.next))&&(t=b);var i=n.data(a.searchtext)||n.children(t).text();i.toLowerCase().indexOf(_)>-1&&n.add(n.prevAll("."+s.divider).first()).removeClass(s.hidden)}),d.showSubPanels&&t.each(function(n){var t=e(this);l.__filterListItems(t.find("."+s.listview).children()).each(function(){var n=e(this),t=n.data(a.child);n.removeClass(s.nosubresults),t&&t.find("."+s.listview).children().removeClass(s.hidden)})}),d.resultsPanel.add)if(""===_)this.closeAllPanels(),this.openPanel(this.$pnls.children("."+s.subopened).last());else{var i=e();t.each(function(){var n=l.__filterListItems(e(this).find("."+s.listview).children()).not("."+s.hidden).clone(!0);n.length&&(d.resultsPanel.dividers&&(i=i.add('<li class="'+s.divider+'">'+e(this).children("."+s.navbar).text()+"</li>")),i=i.add(n))}),i.find("."+s.next).remove(),u.children("."+s.listview).append(i),this.openPanel(u)}else e(t.get().reverse()).each(function(n){var t=e(this),i=t.data(a.parent);i&&(l.__filterListItems(t.find("."+s.listview).children()).length?(i.hasClass(s.hidden)&&i.children("."+s.next).not("."+s.fullsubopen).addClass(s.fullsubopen).addClass(s.fullsubopensearch),i.removeClass(s.hidden).removeClass(s.nosubresults).prevAll("."+s.divider).first().removeClass(s.hidden)):h||(t.hasClass(s.opened)&&setTimeout(function(){l.openPanel(i.closest("."+s.panel))},(n+1)*(1.5*l.conf.openingInterval)),i.addClass(s.nosubresults)))});r.find("."+s.noresultsmsg)[m.not("."+s.hidden).length?"addClass":"removeClass"](s.hidden),this.update()}};f.off(o.keyup+"-"+i+" "+o.change+"-"+i).on(o.keyup+"-"+i,function(e){n(e.keyCode)||C.call(l)}).on(o.change+"-"+i,function(e){C.call(l)});var y=c.children("."+s.btn);y.length&&f.on(o.keyup+"-"+i,function(e){y[f.val().length?"removeClass":"addClass"](s.hidden)}),f.trigger(o.keyup+"-"+i)})}}})},add:function(){s=e[t]._c,a=e[t]._d,o=e[t]._e,s.add("clear search hassearch resultspanel noresultsmsg noresults nosubresults fullsubopensearch"),a.add("searchtext"),o.add("change keyup")},clickAnchor:function(e,n){}},e[t].defaults[i]={add:!1,addTo:"panels",placeholder:"Search",noResults:"No results found.",resultsPanel:{add:!1,dividers:!0,title:"Search results"},search:!0,showTextItems:!1,showSubPanels:!0},e[t].configuration[i]={clear:!1,form:!1,input:!1,submit:!1};var s,a,o,r}(jQuery)/*

/*
 * jQuery mmenu fixedElements add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(s){var i="mmenu",t="fixedElements";s[i].addons[t]={setup:function(){if(this.opts.offCanvas){var n=this.opts[t];this.conf[t];d=s[i].glbl,n=this.opts[t]=s.extend(!0,{},s[i].defaults[t],n);var a=function(s){var i=this.conf.classNames[t].fixed;this.__refactorClass(s.find("."+i),i,"slideout").appendTo(d.$body)};a.call(this,d.$page),this.bind("setPage",a)}},add:function(){n=s[i]._c,a=s[i]._d,e=s[i]._e,n.add("fixed")},clickAnchor:function(s,i){}},s[i].configuration.classNames[t]={fixed:"Fixed"};var n,a,e,d}(jQuery);


/*
 * jQuery mmenu navbar add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(n){var a="mmenu",t="navbars";n[a].addons[t]={setup:function(){var r=this,s=this.opts[t],c=this.conf[t];if(i=n[a].glbl,"undefined"!=typeof s){s instanceof Array||(s=[s]);var o={};if(s.length){n.each(s,function(i){var l=s[i];"boolean"==typeof l&&l&&(l={}),"object"!=typeof l&&(l={}),"undefined"==typeof l.content&&(l.content=["prev","title"]),l.content instanceof Array||(l.content=[l.content]),l=n.extend(!0,{},r.opts.navbar,l);var d=l.position,h=l.height;"number"!=typeof h&&(h=1),h=Math.min(4,Math.max(1,h)),"bottom"!=d&&(d="top"),o[d]||(o[d]=0),o[d]++;var f=n("<div />").addClass(e.navbar+" "+e.navbar+"-"+d+" "+e.navbar+"-"+d+"-"+o[d]+" "+e.navbar+"-size-"+h);o[d]+=h-1;for(var v=0,u=0,p=l.content.length;u<p;u++){var b=n[a].addons[t][l.content[u]]||!1;b?v+=b.call(r,f,l,c):(b=l.content[u],b instanceof n||(b=n(l.content[u])),f.append(b))}v+=Math.ceil(f.children().not("."+e.btn).length/h),v>1&&f.addClass(e.navbar+"-content-"+v),f.children("."+e.btn).length&&f.addClass(e.hasbtns),f.prependTo(r.$menu)});for(var l in o)r.$menu.addClass(e.hasnavbar+"-"+l+"-"+o[l])}}},add:function(){e=n[a]._c,r=n[a]._d,s=n[a]._e,e.add("close hasbtns")},clickAnchor:function(n,a){}},n[a].configuration[t]={breadcrumbSeparator:"/"},n[a].configuration.classNames[t]={};var e,r,s,i}(jQuery),/*
 * jQuery mmenu navbar add-on breadcrumbs content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(n){var a="mmenu",t="navbars",e="breadcrumbs";n[a].addons[t][e]=function(t,e,r){var s=n[a]._c,i=n[a]._d;s.add("breadcrumbs separator");var c=n('<span class="'+s.breadcrumbs+'" />').appendTo(t);this.bind("initPanels",function(a){a.removeClass(s.hasnavbar).each(function(){for(var a=[],t=n(this),e=n('<span class="'+s.breadcrumbs+'"></span>'),c=n(this).children().first(),o=!0;c&&c.length;){c.is("."+s.panel)||(c=c.closest("."+s.panel));var l=c.children("."+s.navbar).children("."+s.title).text();a.unshift(o?"<span>"+l+"</span>":'<a href="#'+c.attr("id")+'">'+l+"</a>"),o=!1,c=c.data(i.parent)}e.append(a.join('<span class="'+s.separator+'">'+r.breadcrumbSeparator+"</span>")).appendTo(t.children("."+s.navbar))})});var o=function(){c.html(this.$pnls.children("."+s.current).children("."+s.navbar).children("."+s.breadcrumbs).html())};return this.bind("openPanel",o),this.bind("initPanels",o),0}}(jQuery),/*
 * jQuery mmenu navbar add-on close content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(n){var a="mmenu",t="navbars",e="close";n[a].addons[t][e]=function(t,e){var r=n[a]._c,s=n[a].glbl,i=n('<a class="'+r.close+" "+r.btn+'" href="#" />').appendTo(t),c=function(n){i.attr("href","#"+n.attr("id"))};return c.call(this,s.$page),this.bind("setPage",c),-1}}(jQuery),/*
 * jQuery mmenu navbar add-on next content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(n){var a="mmenu",t="navbars",e="next";n[a].addons[t][e]=function(e,r){var s,i,c,o=n[a]._c,l=n('<a class="'+o.next+" "+o.btn+'" href="#" />').appendTo(e),d=function(n){n=n||this.$pnls.children("."+o.current);var a=n.find("."+this.conf.classNames[t].panelNext);s=a.attr("href"),c=a.attr("aria-owns"),i=a.html(),l[s?"attr":"removeAttr"]("href",s),l[c?"attr":"removeAttr"]("aria-owns",c),l[s||i?"removeClass":"addClass"](o.hidden),l.html(i)};return this.bind("openPanel",d),this.bind("initPanels",function(){d.call(this)}),-1},n[a].configuration.classNames[t].panelNext="Next"}(jQuery),/*
 * jQuery mmenu navbar add-on prev content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(n){var a="mmenu",t="navbars",e="prev";n[a].addons[t][e]=function(e,r){var s=n[a]._c,i=n('<a class="'+s.prev+" "+s.btn+'" href="#" />').appendTo(e);this.bind("initPanels",function(n){n.removeClass(s.hasnavbar).children("."+s.navbar).addClass(s.hidden)});var c,o,l,d=function(n){if(n=n||this.$pnls.children("."+s.current),!n.hasClass(s.vertical)){var a=n.find("."+this.conf.classNames[t].panelPrev);a.length||(a=n.children("."+s.navbar).children("."+s.prev)),c=a.attr("href"),l=a.attr("aria-owns"),o=a.html(),i[c?"attr":"removeAttr"]("href",c),i[l?"attr":"removeAttr"]("aria-owns",l),i[c||o?"removeClass":"addClass"](s.hidden),i.html(o)}};return this.bind("openPanel",d),this.bind("initPanels",function(){d.call(this)}),-1},n[a].configuration.classNames[t].panelPrev="Prev"}(jQuery),/*
 * jQuery mmenu navbar add-on searchfield content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(n){var a="mmenu",t="navbars",e="searchfield";n[a].addons[t][e]=function(t,e){var r=n[a]._c,s=n('<div class="'+r.search+'" />').appendTo(t);return"object"!=typeof this.opts.searchfield&&(this.opts.searchfield={}),this.opts.searchfield.add=!0,this.opts.searchfield.addTo=s,0}}(jQuery),/*
 * jQuery mmenu navbar add-on title content
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
function(n){var a="mmenu",t="navbars",e="title";n[a].addons[t][e]=function(e,r){var s,i,c=n[a]._c,o=n('<a class="'+c.title+'" />').appendTo(e),l=function(n){if(n=n||this.$pnls.children("."+c.current),!n.hasClass(c.vertical)){var a=n.find("."+this.conf.classNames[t].panelTitle);a.length||(a=n.children("."+c.navbar).children("."+c.title)),s=a.attr("href"),i=a.html()||r.title,o[s?"attr":"removeAttr"]("href",s),o[s||i?"removeClass":"addClass"](c.hidden),o.html(i)}};return this.bind("openPanel",l),this.bind("initPanels",function(n){l.call(this)}),0},n[a].configuration.classNames[t].panelTitle="Title"}(jQuery);
/*
 * jQuery mmenu screenReader add-on
 * mmenu.frebsite.nl
 *
 * Copyright (c) Fred Heusschen
 */
!function(i){var t="mmenu",n="screenReader";i[t].addons[n]={setup:function(){var a=this,h=this.opts[n],o=this.conf[n];s=i[t].glbl,"boolean"==typeof h&&(h={aria:h,text:h}),"object"!=typeof h&&(h={}),h=this.opts[n]=i.extend(!0,{},i[t].defaults[n],h),h.aria&&(this.bind("initAddons:after",function(){this.bind("initMenu:after",function(){this.trigger("initMenu:after:sr-aria")}),this.bind("initNavbar:after",function(){this.trigger("initNavbar:after:sr-aria",arguments[0])}),this.bind("openPanel:start",function(){this.trigger("openPanel:start:sr-aria",arguments[0])}),this.bind("close:start",function(){this.trigger("close:start:sr-aria")}),this.bind("close:finish",function(){this.trigger("close:finish:sr-aria")}),this.bind("open:start",function(){this.trigger("open:start:sr-aria")}),this.bind("open:finish",function(){this.trigger("open:finish:sr-aria")})}),this.bind("updateListview",function(){this.$pnls.find("."+e.listview).children().each(function(){a.__sr_aria(i(this),"hidden",i(this).is("."+e.hidden))})}),this.bind("openPanel:start",function(i){var t=this.$menu.find("."+e.panel).not(i).not(i.parents("."+e.panel)),n=i.add(i.find("."+e.vertical+"."+e.opened).children("."+e.panel));this.__sr_aria(t,"hidden",!0),this.__sr_aria(n,"hidden",!1)}),this.bind("closePanel",function(i){this.__sr_aria(i,"hidden",!0)}),this.bind("initPanels:after",function(t){var n=t.find("."+e.prev+", ."+e.next).each(function(){a.__sr_aria(i(this),"owns",i(this).attr("href").replace("#",""))});this.__sr_aria(n,"haspopup",!0)}),this.bind("initNavbar:after",function(i){var t=i.children("."+e.navbar);this.__sr_aria(t,"hidden",!i.hasClass(e.hasnavbar))}),h.text&&(this.bind("initlistview:after",function(i){var t=i.find("."+e.listview).find("."+e.fullsubopen).parent().children("span");this.__sr_aria(t,"hidden",!0)}),"parent"==this.opts.navbar.titleLink&&this.bind("initNavbar:after",function(i){var t=i.children("."+e.navbar),n=!!t.children("."+e.prev).length;this.__sr_aria(t.children("."+e.title),"hidden",n)}))),h.text&&(this.bind("initAddons:after",function(){this.bind("setPage:after",function(){this.trigger("setPage:after:sr-text",arguments[0])})}),this.bind("initNavbar:after",function(n){var r=n.children("."+e.navbar),a=r.children("."+e.title).text(),s=i[t].i18n(o.text.closeSubmenu);a&&(s+=" ("+a+")"),r.children("."+e.prev).html(this.__sr_text(s))}),this.bind("initListview:after",function(n){var s=n.data(r.parent);if(s&&s.length){var h=s.children("."+e.next),d=h.nextAll("span, a").first().text(),f=i[t].i18n(o.text[h.parent().is("."+e.vertical)?"toggleSubmenu":"openSubmenu"]);d&&(f+=" ("+d+")"),h.html(a.__sr_text(f))}}))},add:function(){e=i[t]._c,r=i[t]._d,a=i[t]._e,e.add("sronly")},clickAnchor:function(i,t){}},i[t].defaults[n]={aria:!0,text:!0},i[t].configuration[n]={text:{closeMenu:"Close menu",closeSubmenu:"Close submenu",openSubmenu:"Open submenu",toggleSubmenu:"Toggle submenu"}},i[t].prototype.__sr_aria=function(i,t,n){i.prop("aria-"+t,n)[n?"attr":"removeAttr"]("aria-"+t,n)},i[t].prototype.__sr_text=function(i){return'<span class="'+e.sronly+'">'+i+"</span>"};var e,r,a,s}(jQuery);

/*!
 * JavaScript Cookie v2.1.4
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */

!function (e) { var n = !1; if ("function" == typeof define && define.amd && (define(e), n = !0), "object" == typeof exports && (module.exports = e(), n = !0), !n) { var o = window.Cookies, t = window.Cookies = e(); t.noConflict = function () { return window.Cookies = o, t } } }(function () { function e() { for (var e = 0, n = {}; e < arguments.length; e++) { var o = arguments[e]; for (var t in o) n[t] = o[t] } return n } function n(o) { function t(n, r, i) { var c; if ("undefined" != typeof document) { if (arguments.length > 1) { if ("number" == typeof (i = e({ path: "/" }, t.defaults, i)).expires) { var a = new Date; a.setMilliseconds(a.getMilliseconds() + 864e5 * i.expires), i.expires = a } i.expires = i.expires ? i.expires.toUTCString() : ""; try { c = JSON.stringify(r), /^[\{\[]/.test(c) && (r = c) } catch (e) { } r = o.write ? o.write(r, n) : encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), n = (n = (n = encodeURIComponent(String(n))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape); var f = ""; for (var s in i) i[s] && (f += "; " + s, !0 !== i[s] && (f += "=" + i[s])); return document.cookie = n + "=" + r + f } n || (c = {}); for (var p = document.cookie ? document.cookie.split("; ") : [], d = /(%[0-9A-Z]{2})+/g, u = 0; u < p.length; u++) { var l = p[u].split("="), C = l.slice(1).join("="); '"' === C.charAt(0) && (C = C.slice(1, -1)); try { var g = l[0].replace(d, decodeURIComponent); if (C = o.read ? o.read(C, g) : o(C, g) || C.replace(d, decodeURIComponent), this.json) try { C = JSON.parse(C) } catch (e) { } if (n === g) { c = C; break } n || (c[g] = C) } catch (e) { } } return c } } return t.set = t, t.get = function (e) { return t.call(t, e) }, t.getJSON = function () { return t.apply({ json: !0 }, [].slice.call(arguments)) }, t.defaults = {}, t.remove = function (n, o) { t(n, "", e(o, { expires: -1 })) }, t.withConverter = n, t } return n(function () { }) });

/* instant.page v2.0.1 - (C) 2019 Alexandre Dieulot - https://instant.page/license */

window.onload = function() {
  var t,e,n,o=document.createElement("link"),s=o.relList&&o.relList.supports&&o.relList.supports("prefetch"),a=navigator.connection&&navigator.connection.saveData,i="instantAllowQueryString"in document.body.dataset,r="instantAllowExternalLinks"in document.body.dataset,d="instantWhitelist"in document.body.dataset,c=65,u=!1,l=!1;if("instantIntensity"in document.body.dataset)if("mousedown"==document.body.dataset.instantIntensity.substr(0,"mousedown".length))u=!0,"mousedown-only"==document.body.dataset.instantIntensity&&(l=!0);else{var _t=parseInt(document.body.dataset.instantIntensity);isNaN(_t)||(c=_t)}if(s&&!a){o.rel="prefetch",document.head.appendChild(o);var _s={capture:!0,passive:!0};l||document.addEventListener("touchstart",function(e){n=performance.now();var o=e.target.closest("a");m(o)&&(o.addEventListener("touchcancel",f,{passive:!0}),o.addEventListener("touchend",f,{passive:!0}),t=o.href,p(o.href))},_s),u?document.addEventListener("mousedown",function(e){var n=e.target.closest("a");m(n)&&(n.addEventListener("mouseout",h,{passive:!0}),t=n.href,p(n.href))},_s):document.addEventListener("mouseover",function(o){if(!(performance.now()-n<1100)){var a=o.target.closest("a");m(a)&&(a.addEventListener("mouseout",h,{passive:!0}),t=a.href,e=setTimeout(function(){p(a.href),e=void 0},c))}},_s)}function f(){t=void 0,v()}function h(n){n.relatedTarget&&n.target.closest("a")==n.relatedTarget.closest("a")||(e&&(clearTimeout(e),e=void 0),t=void 0,v())}function m(e){if(e&&e.href&&t!=e.href&&(!d||"instant"in e.dataset)&&(r||e.origin==location.origin||"instant"in e.dataset)&&["http:","https:"].includes(e.protocol)&&("http:"!=e.protocol||"https:"!=location.protocol)&&(i||!e.search||"instant"in e.dataset)&&!(e.hash&&e.pathname+e.search==location.pathname+location.search||"noInstant"in e.dataset))return!0}function p(t){o.href=t}function v(){o.removeAttribute("href")}
}

$(document)
  .on('shopify:block:select', function(e){

    var blockId = e.detail.blockId;
    var $parentSection = $('#shopify-section-' + e.detail.sectionId);

    if ($parentSection.hasClass('slideshow-section') || $parentSection.hasClass('testimonial-section')){
      sliderBlock.select(blockId, $parentSection)
    }

});


$(document)
  .on('shopify:block:deselect', function(e){

    var $parentSection = $('#shopify-section-' + e.detail.sectionId);

    if ($parentSection.hasClass('slideshow-section') || $parentSection.hasClass('testimonial-section')){
      sliderBlock.deselect($parentSection)
    }

});

$(document)
  .on('shopify:section:load', function(e){

    var $parentSection = $('#shopify-section-' + e.detail.sectionId);

    header.init();

    if ($parentSection.hasClass('recommended-products-section')){
      product.loadProductRecommendations();
      utils.initializeTabs();
      utils.initializeAccordions();
    }

    if ($parentSection.hasClass('cart-section')){
      productFormListeners.init();
    }

    if ($parentSection.hasClass('faq-template-section')){
      faqAccordion.init();
    }

    if ($parentSection.hasClass('slideshow-section')){
      slideshow.init();
    }

    if ($parentSection.hasClass('map-section')){
      map.init();
    }

    if ($parentSection.hasClass('page-details-section')){
      map.init();
    }

    if ($parentSection.hasClass('contact-template-section')){
      map.init();
    }

    if ($parentSection.hasClass('featured-product-section')){
      product.init();
      utils.initializeTabs();
      utils.initializeAccordions();
      utils.initializeProductLightbox();
    }

    if ($parentSection.hasClass('featured-collection-section')){
      collection.init();
      product.init();
    }

    if ($parentSection.hasClass('video-section')){
      video.init();
    }

    if ($parentSection.hasClass('page-details-section')){
      video.init();
    }

    if ($parentSection.hasClass('product-template-sidebar')) {
      product.updateWidthBasedOnSidebar();
    }

    if ($parentSection.hasClass('product-template-section')){
      collection.init();
      product.init();
      video.init();
      utils.initializeProductLightbox();
    }

    if ($parentSection.hasClass('collection-template-section')){
      collection.init();
      product.init();
    }

    if ($parentSection.hasClass('search-template-section')){
      collection.init();
    }

    if ($parentSection.hasClass('testimonial-section')){
      slideshow.init();
    }

    utils.enableDisclosure();
});

$(document)
  .on('shopify:section:unload', function(e){

    var $target = $(e.target);
    var $parentSection = $('#shopify-section-' + e.detail.sectionId);

    banner.unload($target);

    if ($parentSection.hasClass('slideshow-section')){
      slideshow.unload($target);
    }

    if ($parentSection.hasClass('featured-product-section')){
      product.unload($target);
      utils.unload($target);
    }

    if ($parentSection.hasClass('featured-collection-section')){
      collection.unload($target);
    }

    if ($parentSection.hasClass('product-template-section')){
      product.unload($target);
    }

    if ($parentSection.hasClass('collection-template-section')){
      collection.unload($target);
    }

    utils.unload();
});

$(document)
  .on('shopify:section:select', function(e){

    var $parentSection = $('#shopify-section-' + e.detail.sectionId);

    if ($parentSection.hasClass('featured-collection-section')){
      collection.init();
      product.init();
    }

});

$(document)
  .on('shopify:section:deselect', function(e){

    var $target = $(e.target);
    var $parentSection = $('#shopify-section-' + e.detail.sectionId);

});

$(document)
  .on('shopify:section:reorder', function(e){

    var $target = $(e.target);
    var $parentSection = $('#shopify-section-' + e.detail.sectionId);

    banner.unload($target);
    banner.init();

});

/* Logic allows for any resize functions to run when browser window adjusted
 * Short term solution preventing users from having to refresh page
 */

// Setup a timer
var resizeTimeout;

// Listen for resize events
window.addEventListener('resize', function ( event ) {

  // If timer is null, reset it to 66ms and run your functions.
  // Otherwise, wait until timer is cleared
  if ( !resizeTimeout ) {
    resizeTimeout = setTimeout(function() {

      // Reset timeout
      resizeTimeout = null;

      // Run our resize functions
      header.setPadding();
    }, 66);
  }
}, false);
