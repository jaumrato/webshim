/*!	SWFMini - a SWFObject 2.2 cut down version for webshims
 * 
 * based on SWFObject v2.2 <http://code.google.com/p/swfobject/> 
	is released under the MIT License <http://www.opensource.org/licenses/mit-license.php> 
*/
var swfmini=function(){function a(){if(!s){s=!0;for(var a=r.length,b=0;a>b;b++)r[b]()}}function b(a){s?a():r[r.length]=a}function c(){q&&d()}function d(){var a=o.getElementsByTagName("body")[0],b=e(i);b.setAttribute("type",m);var c=a.appendChild(b);if(c){var d=0;!function(){if(typeof c.GetVariable!=h){var e=c.GetVariable("$version");e&&(e=e.split(" ")[1].split(","),u.pv=[parseInt(e[0],10),parseInt(e[1],10),parseInt(e[2],10)])}else if(10>d)return d++,void setTimeout(arguments.callee,10);a.removeChild(b),c=null}()}}function e(a){return o.createElement(a)}function f(a){var b=u.pv,c=a.split(".");return c[0]=parseInt(c[0],10),c[1]=parseInt(c[1],10)||0,c[2]=parseInt(c[2],10)||0,b[0]>c[0]||b[0]==c[0]&&b[1]>c[1]||b[0]==c[0]&&b[1]==c[1]&&b[2]>=c[2]?!0:!1}var g=function(){j.error("This method was removed from swfmini")},h="undefined",i="object",j=window.webshims,k="Shockwave Flash",l="ShockwaveFlash.ShockwaveFlash",m="application/x-shockwave-flash",n=window,o=document,p=navigator,q=!1,r=[c],s=!1,t=!0,u=function(){var a=typeof o.getElementById!=h&&typeof o.getElementsByTagName!=h&&typeof o.createElement!=h,b=p.userAgent.toLowerCase(),c=p.platform.toLowerCase(),d=/win/.test(c?c:b),e=/mac/.test(c?c:b),f=/webkit/.test(b)?parseFloat(b.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,"$1")):!1,g=!1,j=[0,0,0],r=null;if(typeof p.plugins!=h&&typeof p.plugins[k]==i)r=p.plugins[k].description,!r||typeof p.mimeTypes!=h&&p.mimeTypes[m]&&!p.mimeTypes[m].enabledPlugin||(q=!0,g=!1,r=r.replace(/^.*\s+(\S+\s+\S+$)/,"$1"),j[0]=parseInt(r.replace(/^(.*)\..*$/,"$1"),10),j[1]=parseInt(r.replace(/^.*\.(.*)\s.*$/,"$1"),10),j[2]=/[a-zA-Z]/.test(r)?parseInt(r.replace(/^.*[a-zA-Z]+(.*)$/,"$1"),10):0);else if(typeof n.ActiveXObject!=h)try{var s=new ActiveXObject(l);s&&(r=s.GetVariable("$version"),r&&(g=!0,r=r.split(" ")[1].split(","),j=[parseInt(r[0],10),parseInt(r[1],10),parseInt(r[2],10)]))}catch(t){}return{w3:a,pv:j,wk:f,ie:g,win:d,mac:e}}();j.ready("DOM",a),j.loader.addModule("swfmini-embed",{d:["swfmini"]});var v=f("9.0.0")?function(){return j.loader.loadList(["swfmini-embed"]),!0}:j.$.noop;return Modernizr.video?j.ready("WINDOWLOAD",v):v(),{registerObject:g,getObjectById:g,embedSWF:function(a,b,c,d,e,f,g,h,i,k){var l=arguments;v()?j.ready("swfmini-embed",function(){swfmini.embedSWF.apply(swfmini,l)}):k&&k({success:!1,id:b})},switchOffAutoHideShow:function(){t=!1},ua:u,getFlashPlayerVersion:function(){return{major:u.pv[0],minor:u.pv[1],release:u.pv[2]}},hasFlashPlayerVersion:f,createSWF:function(a,b,c){return u.w3?createSWF(a,b,c):void 0},showExpressInstall:g,removeSWF:g,createCSS:g,addDomLoadEvent:b,addLoadEvent:g,expressInstallCallback:g}}();webshims.isReady("swfmini",!0),function(a){"use strict";var b=window.webshims;if(!b.defineProperties){var c="defineProperty",d=Object.prototype.hasOwnProperty,e=["configurable","enumerable","writable"],f=function(a){for(var b=0;3>b;b++)void 0!==a[e[b]]||"writable"===e[b]&&void 0===a.value||(a[e[b]]=!0)},g=function(a){if(a)for(var b in a)d.call(a,b)&&f(a[b])};Object.create&&(b.objectCreate=function(b,c,d){g(c);var e=Object.create(b,c);return d&&(e.options=a.extend(!0,{},e.options||{},d),d=e.options),e._create&&a.isFunction(e._create)&&e._create(d),e}),Object[c]&&(b[c]=function(a,b,d){return f(d),Object[c](a,b,d)}),Object.defineProperties&&(b.defineProperties=function(a,b){return g(b),Object.defineProperties(a,b)}),b.getOwnPropertyDescriptor=Object.getOwnPropertyDescriptor,b.getPrototypeOf=Object.getPrototypeOf}}(window.webshims.$),webshims.register("dom-extend",function(a,b,c,d,e){"use strict";function f(c,d,e){var f=a.clone(c,d,!1);return a(f.querySelectorAll("."+b.shadowClass)).detach(),e?(t++,a(f.querySelectorAll("[id]")).prop("id",function(a,b){return b+t})):a(f.querySelectorAll('audio[id^="ID-"], video[id^="ID-"], label[id^="ID-"]')).removeAttr("id"),f}var g=!("hrefNormalized"in a.support)||a.support.hrefNormalized,h=!("getSetAttribute"in a.support)||a.support.getSetAttribute,i=Object.prototype.hasOwnProperty;if(b.assumeARIA=h||Modernizr.canvas||Modernizr.video||Modernizr.boxsizing,("text"==a('<input type="email" />').attr("type")||""===a("<form />").attr("novalidate")||"required"in a("<input />")[0].attributes)&&b.error("IE browser modes are busted in IE10+. Please test your HTML/CSS/JS with a real IE version or at least IETester or similiar tools"),"debug"in b&&b.error('Use webshims.setOptions("debug", true||false||"noCombo"); to debug flag'),!b.cfg.no$Switch){var j=function(){if(!c.jQuery||c.$&&c.jQuery!=c.$||c.jQuery.webshims||(b.error("jQuery was included more than once. Make sure to include it only once or try the $.noConflict(extreme) feature! Webshims and other Plugins might not work properly. Or set webshims.cfg.no$Switch to 'true'."),c.$&&(c.$=b.$),c.jQuery=b.$),b.M!=Modernizr){b.error("Modernizr was included more than once. Make sure to include it only once! Webshims and other scripts might not work properly.");for(var a in Modernizr)a in b.M||(b.M[a]=Modernizr[a]);Modernizr=b.M}};j(),setTimeout(j,90),b.ready("DOM",j),a(j),b.ready("WINDOWLOAD",j)}var k=(b.modules,/\s*,\s*/),l={},m={},n={},o={},p={},q={},r=a.fn.val,s=function(b,c,d,e,f){return f?r.call(a(b)):r.call(a(b),d)};a.widget||!function(){var b=a.cleanData;a.cleanData=function(c){if(!a.widget)for(var d,e=0;null!=(d=c[e]);e++)try{a(d).triggerHandler("remove")}catch(f){}b(c)}}(),a.fn.val=function(b){var c=this[0];if(arguments.length&&null==b&&(b=""),!arguments.length)return c&&1===c.nodeType?a.prop(c,"value",b,"val",!0):r.call(this);if(a.isArray(b))return r.apply(this,arguments);var d=a.isFunction(b);return this.each(function(f){if(c=this,1===c.nodeType)if(d){var g=b.call(c,f,a.prop(c,"value",e,"val",!0));null==g&&(g=""),a.prop(c,"value",g,"val")}else a.prop(c,"value",b,"val")})},a.fn.onTrigger=function(a,b){return this.on(a,b).each(b)},a.fn.onWSOff=function(b,c,e,f){return f||(f=d),a(f)[e?"onTrigger":"on"](b,c),this.on("remove",function(d){d.originalEvent||a(f).off(b,c)}),this};var t=0,u="_webshims"+Math.round(1e3*Math.random()),v=function(b,c,d){if(b=b.jquery?b[0]:b,!b)return d||{};var f=a.data(b,u);return d!==e&&(f||(f=a.data(b,u,{})),c&&(f[c]=d)),c?f&&f[c]:f};[{name:"getNativeElement",prop:"nativeElement"},{name:"getShadowElement",prop:"shadowElement"},{name:"getShadowFocusElement",prop:"shadowFocusElement"}].forEach(function(b){a.fn[b.name]=function(){var c=[];return this.each(function(){var d=v(this,"shadowData"),e=d&&d[b.prop]||this;-1==a.inArray(e,c)&&c.push(e)}),this.pushStack(c)}}),a.fn.clonePolyfill=function(b,c){return b=b||!1,this.map(function(){var e=f(this,b,c);return setTimeout(function(){a.contains(d.body,e)&&a(e).updatePolyfill()}),e})},b.cfg.extendNative||b.cfg.noTriggerOverride||!function(b){a.event.trigger=function(c,d,e,f){if(!n[c]||f||!e||1!==e.nodeType)return b.apply(this,arguments);var g,h,j,k=e[c],l=a.prop(e,c),m=l&&k!=l;return m&&(j="__ws"+c,h=c in e&&i.call(e,c),e[c]=l,e[j]=k),g=b.apply(this,arguments),m&&(h?e[c]=k:delete e[c],delete e[j]),g}}(a.event.trigger),["removeAttr","prop","attr"].forEach(function(c){l[c]=a[c],a[c]=function(b,d,f,g,h){var i="val"==g,j=i?s:l[c];if(!b||!m[d]||1!==b.nodeType||!i&&g&&"attr"==c&&a.attrFn[d])return j(b,d,f,g,h);var k,n,p,r=(b.nodeName||"").toLowerCase(),t=o[r],u="attr"!=c||f!==!1&&null!==f?c:"removeAttr";if(t||(t=o["*"]),t&&(t=t[d]),t&&(k=t[u]),k){if("value"==d&&(n=k.isVal,k.isVal=i),"removeAttr"===u)return k.value.call(b);if(f===e)return k.get?k.get.call(b):k.value;k.set&&("attr"==c&&f===!0&&(f=d),p=k.set.call(b,f)),"value"==d&&(k.isVal=n)}else p=j(b,d,f,g,h);if((f!==e||"removeAttr"===u)&&q[r]&&q[r][d]){var v;v="removeAttr"==u?!1:"prop"==u?!!f:!0,q[r][d].forEach(function(a){(!a.only||(a.only="prop"&&"prop"==c)||"attr"==a.only&&"prop"!=c)&&a.call(b,f,v,i?"val":u,c)})}return p},p[c]=function(a,d,f){o[a]||(o[a]={}),o[a][d]||(o[a][d]={});var g=o[a][d][c],h=function(a,b,e){var g;return b&&b[a]?b[a]:e&&e[a]?e[a]:"prop"==c&&"value"==d?function(a){var b=this;return f.isVal?s(b,d,a,!1,0===arguments.length):l[c](b,d,a)}:"prop"==c&&"value"==a&&f.value.apply?(g="__ws"+d,n[d]=!0,function(){var a=this[g]||l[c](this,d);return a&&a.apply&&(a=a.apply(this,arguments)),a}):function(a){return l[c](this,d,a)}};o[a][d][c]=f,f.value===e&&(f.set||(f.set=f.writeable?h("set",f,g):b.cfg.useStrict&&"prop"==d?function(){throw d+" is readonly on "+a}:function(){b.info(d+" is readonly on "+a)}),f.get||(f.get=h("get",f,g))),["value","get","set"].forEach(function(a){f[a]&&(f["_sup"+a]=h(a,g))})}});var w=function(){var a=b.getPrototypeOf(d.createElement("foobar")),c=Modernizr.advancedObjectProperties&&Modernizr.objectAccessor;return function(e,f,g){var h,j;if(!(c&&(h=d.createElement(e))&&(j=b.getPrototypeOf(h))&&a!==j)||h[f]&&i.call(h,f))g._supvalue=function(){var a=v(this,"propValue");return a&&a[f]&&a[f].apply?a[f].apply(this,arguments):a&&a[f]},x.extendValue(e,f,g.value);else{var k=h[f];g._supvalue=function(){return k&&k.apply?k.apply(this,arguments):k},j[f]=g.value}g.value._supvalue=g._supvalue}}(),x=function(){var c={};b.addReady(function(d,e){var f={},g=function(b){f[b]||(f[b]=a(d.getElementsByTagName(b)),e[0]&&a.nodeName(e[0],b)&&(f[b]=f[b].add(e)))};a.each(c,function(a,c){return g(a),c&&c.forEach?void c.forEach(function(b){f[a].each(b)}):void b.warn("Error: with "+a+"-property. methods: "+c)}),f=null});var e,f=a([]),g=function(b,f){c[b]?c[b].push(f):c[b]=[f],a.isDOMReady&&(e||a(d.getElementsByTagName(b))).each(f)};return{createTmpCache:function(b){return a.isDOMReady&&(e=e||a(d.getElementsByTagName(b))),e||f},flushTmpCache:function(){e=null},content:function(b,c){g(b,function(){var b=a.attr(this,c);null!=b&&a.attr(this,c,b)})},createElement:function(a,b){g(a,b)},extendValue:function(b,c,d){g(b,function(){a(this).each(function(){var a=v(this,"propValue",{});a[c]=this[c],this[c]=d})})}}}(),y=function(a,b){a.defaultValue===e&&(a.defaultValue=""),a.removeAttr||(a.removeAttr={value:function(){a[b||"prop"].set.call(this,a.defaultValue),a.removeAttr._supvalue.call(this)}}),a.attr||(a.attr={})};a.extend(b,{getID:function(){var b=(new Date).getTime();return function(c){c=a(c);var d=c.prop("id");return d||(b++,d="ID-"+b,c.eq(0).prop("id",d)),d}}(),shadowClass:"wsshadow-"+Date.now(),implement:function(a,c){var d=v(a,"implemented")||v(a,"implemented",{});return d[c]?(b.warn(c+" already implemented for element #"+a.id),!1):(d[c]=!0,!0)},extendUNDEFProp:function(b,c){a.each(c,function(a,c){a in b||(b[a]=c)})},getOptions:function(){var c=/\-([a-z])/g,d={},e={},f=function(a,b){return b.toLowerCase()},g=function(a,b){return b.toUpperCase()};return function(h,i,j,k){e[i]?i=e[i]:(e[i]=i.replace(c,g),i=e[i]);var l,m=v(h,"cfg"+i),n={};if(m)return m;if(m=a(h).data(),m&&"string"==typeof m[i]){if(k)return v(h,"cfg"+i,m[i]);b.error("data-"+i+" attribute has to be a valid JSON, was: "+m[i])}j?Array.isArray(j)?j.unshift(!0,{}):j=[!0,{},j]:j=[!0,{}],m&&"object"==typeof m[i]&&j.push(m[i]),d[i]||(d[i]=new RegExp("^"+i+"([A-Z])"));for(l in m)d[i].test(l)&&(n[l.replace(d[i],f)]=m[l]);return j.push(n),v(h,"cfg"+i,a.extend.apply(a,j))}}(),createPropDefault:y,data:v,moveToFirstEvent:function(b,c,d){var e,f=(a._data(b,"events")||{})[c];f&&f.length>1&&(e=f.pop(),d||(d="bind"),"bind"==d&&f.delegateCount?f.splice(f.delegateCount,0,e):f.unshift(e)),b=null},addShadowDom:function(){var e,f,g,h=a(c),i={init:!1,runs:0,test:function(){var a=i.getHeight(),b=i.getWidth();a!=i.height||b!=i.width?(i.height=a,i.width=b,i.handler({type:"docresize"}),i.runs++,i.runs<9&&setTimeout(i.test,90)):i.runs=0},handler:function(){var b=function(){a(d).triggerHandler("updateshadowdom")};return function(a){clearTimeout(e),e=setTimeout(function(){if("resize"==a.type){var d=h.width(),e=h.width();if(e==f&&d==g)return;f=e,g=d,i.height=i.getHeight(),i.width=i.getWidth()}c.requestAnimationFrame?requestAnimationFrame(b):setTimeout(b,0)},"resize"!=a.type||c.requestAnimationFrame?9:50)}}(),_create:function(){a.each({Height:"getHeight",Width:"getWidth"},function(a,b){var c=d.body,e=d.documentElement;i[b]=function(){return Math.max(c["scroll"+a],e["scroll"+a],c["offset"+a],e["offset"+a],e["client"+a])}})},start:function(){!this.init&&d.body&&(this.init=!0,this._create(),this.height=i.getHeight(),this.width=i.getWidth(),setInterval(this.test,999),a(this.test),null==a.support.boxSizing&&a(function(){a.support.boxSizing&&i.handler({type:"boxsizing"})}),b.ready("WINDOWLOAD",this.test),a(d).on("updatelayout.webshim pageinit popupafteropen panelbeforeopen tabsactivate collapsibleexpand shown.bs.modal shown.bs.collapse slid.bs.carousel",this.handler),a(c).on("resize",this.handler))}};return b.docObserve=function(){b.ready("DOM",function(){i.start()})},function(c,d,e){if(c&&d){e=e||{},c.jquery&&(c=c[0]),d.jquery&&(d=d[0]);var f=a.data(c,u)||a.data(c,u,{}),g=a.data(d,u)||a.data(d,u,{}),h={};e.shadowFocusElement?e.shadowFocusElement&&(e.shadowFocusElement.jquery&&(e.shadowFocusElement=e.shadowFocusElement[0]),h=a.data(e.shadowFocusElement,u)||a.data(e.shadowFocusElement,u,h)):e.shadowFocusElement=d,a(c).on("remove",function(b){b.originalEvent||setTimeout(function(){a(d).remove()},4)}),f.hasShadow=d,h.nativeElement=g.nativeElement=c,h.shadowData=g.shadowData=f.shadowData={nativeElement:c,shadowElement:d,shadowFocusElement:e.shadowFocusElement},e.shadowChilds&&e.shadowChilds.each(function(){v(this,"shadowData",g.shadowData)}),e.data&&(h.shadowData.data=g.shadowData.data=f.shadowData.data=e.data),e=null}b.docObserve()}}(),propTypes:{standard:function(a){y(a),a.prop||(a.prop={set:function(b){a.attr.set.call(this,""+b)},get:function(){return a.attr.get.call(this)||a.defaultValue}})},"boolean":function(a){y(a),a.prop||(a.prop={set:function(b){b?a.attr.set.call(this,""):a.removeAttr.value.call(this)},get:function(){return null!=a.attr.get.call(this)}})},src:function(){var b=d.createElement("a");return b.style.display="none",function(c,d){y(c),c.prop||(c.prop={set:function(a){c.attr.set.call(this,a)},get:function(){var c,e=this.getAttribute(d);if(null==e)return"";if(b.setAttribute("href",e+""),!g){try{a(b).insertAfter(this),c=b.getAttribute("href",4)}catch(f){c=b.getAttribute("href",4)}a(b).detach()}return c||b.href}})}}(),enumarated:function(a){y(a),a.prop||(a.prop={set:function(b){a.attr.set.call(this,b)},get:function(){var b=(a.attr.get.call(this)||"").toLowerCase();return b&&-1!=a.limitedTo.indexOf(b)||(b=a.defaultValue),b}})}},reflectProperties:function(c,d){"string"==typeof d&&(d=d.split(k)),d.forEach(function(d){b.defineNodeNamesProperty(c,d,{prop:{set:function(b){a.attr(this,d,b)},get:function(){return a.attr(this,d)||""}}})})},defineNodeNameProperty:function(c,d,e){return m[d]=!0,e.reflect&&(e.propType&&!b.propTypes[e.propType]?b.error("could not finde propType "+e.propType):b.propTypes[e.propType||"standard"](e,d)),["prop","attr","removeAttr"].forEach(function(f){var g=e[f];g&&(g="prop"===f?a.extend({writeable:!0},g):a.extend({},g,{writeable:!0}),p[f](c,d,g),"*"!=c&&b.cfg.extendNative&&"prop"==f&&g.value&&a.isFunction(g.value)&&w(c,d,g),e[f]=g)}),e.initAttr&&x.content(c,d),e},defineNodeNameProperties:function(a,c,d,e){for(var f in c)!e&&c[f].initAttr&&x.createTmpCache(a),d&&(c[f][d]||(c[f][d]={},["value","set","get"].forEach(function(a){a in c[f]&&(c[f][d][a]=c[f][a],delete c[f][a])}))),c[f]=b.defineNodeNameProperty(a,f,c[f]);return e||x.flushTmpCache(),c},createElement:function(c,d,e){var f;return a.isFunction(d)&&(d={after:d}),x.createTmpCache(c),d.before&&x.createElement(c,d.before),e&&(f=b.defineNodeNameProperties(c,e,!1,!0)),d.after&&x.createElement(c,d.after),x.flushTmpCache(),f},onNodeNamesPropertyModify:function(b,c,d,e){"string"==typeof b&&(b=b.split(k)),a.isFunction(d)&&(d={set:d}),b.forEach(function(a){q[a]||(q[a]={}),"string"==typeof c&&(c=c.split(k)),d.initAttr&&x.createTmpCache(a),c.forEach(function(b){q[a][b]||(q[a][b]=[],m[b]=!0),d.set&&(e&&(d.set.only=e),q[a][b].push(d.set)),d.initAttr&&x.content(a,b)}),x.flushTmpCache()})},defineNodeNamesBooleanProperty:function(c,d,f){f||(f={}),a.isFunction(f)&&(f.set=f),b.defineNodeNamesProperty(c,d,{attr:{set:function(a){f.useContentAttribute?b.contentAttr(this,d,a):this.setAttribute(d,a),f.set&&f.set.call(this,!0)},get:function(){var a=f.useContentAttribute?b.contentAttr(this,d):this.getAttribute(d);return null==a?e:d}},removeAttr:{value:function(){this.removeAttribute(d),f.set&&f.set.call(this,!1)}},reflect:!0,propType:"boolean",initAttr:f.initAttr||!1})},contentAttr:function(a,b,c){if(a.nodeName){var d;return c===e?(d=a.attributes[b]||{},c=d.specified?d.value:null,null==c?e:c):void("boolean"==typeof c?c?a.setAttribute(b,b):a.removeAttribute(b):a.setAttribute(b,c))}},activeLang:function(){var c=[],d=[],e={},f=function(d,f,h){f._isLoading=!0,e[d]?e[d].push(f):(e[d]=[f],b.loader.loadScript(d,function(){h==c.join()&&a.each(e[d],function(a,b){g(b)}),delete e[d]}))},g=function(b){var d=b.__active,e=function(a,d){return b._isLoading=!1,b[d]||-1!=b.availableLangs.indexOf(d)?(b[d]?(b.__active=b[d],b.__activeName=d):f(b.langSrc+d,b,c.join()),!1):void 0};a.each(c,e),b.__active||(b.__active=b[""],b.__activeName=""),d!=b.__active&&a(b).trigger("change")};return function(a){var b;if("string"==typeof a)c[0]!=a&&(c=[a],b=c[0].split("-")[0],b&&b!=a&&c.push(b),d.forEach(g));else if("object"==typeof a)return a.__active||(d.push(a),g(a)),a.__active;return c[0]}}()}),a.each({defineNodeNamesProperty:"defineNodeNameProperty",defineNodeNamesProperties:"defineNodeNameProperties",createElements:"createElement"},function(a,c){b[a]=function(a,d,e,f){"string"==typeof a&&(a=a.split(k));var g={};return a.forEach(function(a){g[a]=b[c](a,d,e,f)}),g}}),b.isReady("webshimLocalization",!0),function(){if(!("content"in d.createElement("template")||(a(function(){var c=a("main").attr({role:"main"});c.length>1?b.error("only one main element allowed in document"):c.is("article *, section *")&&b.error("main not allowed inside of article/section elements")}),"hidden"in d.createElement("a")))){b.defineNodeNamesBooleanProperty(["*"],"hidden");var c={article:"article",aside:"complementary",section:"region",nav:"navigation",address:"contentinfo"},e=function(a,b){var c=a.getAttribute("role");c||a.setAttribute("role",b)};a.webshims.addReady(function(b,f){if(a.each(c,function(c,d){for(var g=a(c,b).add(f.filter(c)),h=0,i=g.length;i>h;h++)e(g[h],d)}),b===d){var g=d.getElementsByTagName("header")[0],h=d.getElementsByTagName("footer"),i=h.length;if(g&&!a(g).closest("section, article")[0]&&e(g,"banner"),!i)return;var j=h[i-1];a(j).closest("section, article")[0]||e(j,"contentinfo")}})}}()}),webshims.register("form-core",function(a,b,c,d,e,f){"use strict";b.capturingEventPrevented=function(b){if(!b._isPolyfilled){var c=b.isDefaultPrevented,d=b.preventDefault;b.preventDefault=function(){return clearTimeout(a.data(b.target,b.type+"DefaultPrevented")),a.data(b.target,b.type+"DefaultPrevented",setTimeout(function(){a.removeData(b.target,b.type+"DefaultPrevented")},30)),d.apply(this,arguments)},b.isDefaultPrevented=function(){return!(!c.apply(this,arguments)&&!a.data(b.target,b.type+"DefaultPrevented"))},b._isPolyfilled=!0}},Modernizr.formvalidation&&!b.bugs.bustedValidity&&b.capturingEvents(["invalid"],!0);var g=b.modules,h=function(b){return(a.prop(b,"validity")||{valid:1}).valid},i=function(){var c=["form-validation"];f.lazyCustomMessages&&(f.customMessages=!0,c.push("form-message")),b._getAutoEnhance(f.customDatalist)&&(f.fD=!0,c.push("form-datalist")),f.addValidators&&c.push("form-validators"),b.reTest(c),a(d).off(".lazyloadvalidation")},j=function(){var c,e,f=a.expr[":"],g=/^(?:form|fieldset)$/i,i=function(b){var c=!1;return a(b).jProp("elements").each(function(){return!g.test(this.nodeName||"")&&(c=f.invalid(this))?!1:void 0}),c};if(a.extend(f,{"valid-element":function(b){return g.test(b.nodeName||"")?!i(b):!(!a.prop(b,"willValidate")||!h(b))},"invalid-element":function(b){return g.test(b.nodeName||"")?i(b):!(!a.prop(b,"willValidate")||h(b))},"required-element":function(b){return!(!a.prop(b,"willValidate")||!a.prop(b,"required"))},"user-error":function(b){return a.prop(b,"willValidate")&&a(b).hasClass("user-error")},"optional-element":function(b){return!(!a.prop(b,"willValidate")||a.prop(b,"required")!==!1)}}),["valid","invalid","required","optional"].forEach(function(b){f[b]=a.expr[":"][b+"-element"]}),Modernizr.fieldsetdisabled&&!a('<fieldset disabled=""><input /><input /></fieldset>').find(":disabled").filter(":disabled").is(":disabled")&&(c=a.find.matches,e={":disabled":1,":enabled":1},a.find.matches=function(a,b){return e[a]?c.call(this,"*"+a,b):c.apply(this,arguments)},a.extend(f,{enabled:function(b){return b.disabled===!1&&!a(b).is("fieldset[disabled] *")},disabled:function(b){return b.disabled===!0||"disabled"in b&&a(b).is("fieldset[disabled] *")}})),"unknown"==typeof d.activeElement){var j=f.focus;f.focus=function(){try{return j.apply(this,arguments)}catch(a){b.error(a)}return!1}}},k={noAutoCallback:!0,options:f},l=b.loader.addModule,m=function(a,c,d){i(),b.ready("form-validation",function(){a[c].apply(a,d)})},n="transitionDelay"in d.documentElement.style?"":" no-transition",o=b.cfg.wspopover;l("form-validation",a.extend({d:["form-message"]},k)),l("form-validators",a.extend({},k)),a.expr.filters?j():b.ready("sizzle",j),b.triggerInlineForm=function(b,c){a(b).trigger(c)},o.position||o.position===!1||(o.position={at:"left bottom",my:"left top",collision:"fit flip"}),b.wsPopover={id:0,_create:function(){this.options=a.extend(!0,{},o,this.options),this.id=b.wsPopover.id++,this.eventns=".wsoverlay"+this.id,this.timers={},this.element=a('<div class="ws-popover'+n+'" tabindex="-1"><div class="ws-po-outerbox"><div class="ws-po-arrow"><div class="ws-po-arrowbox" /></div><div class="ws-po-box" /></div></div>'),this.contentElement=a(".ws-po-box",this.element),this.lastElement=a([]),this.bindElement(),this.element.data("wspopover",this)},options:{},content:function(a){this.contentElement.html(a)},bindElement:function(){var a=this,b=function(){a.stopBlur=!1};this.preventBlur=function(){a.stopBlur=!0,clearTimeout(a.timers.stopBlur),a.timers.stopBlur=setTimeout(b,9)},this.element.on({mousedown:this.preventBlur})},show:function(){m(this,"show",arguments)}},b.validityAlert={showFor:function(){m(this,"showFor",arguments)}},b.getContentValidationMessage=function(c,d,e){var f;b.errorbox&&b.errorbox.initIvalContentMessage&&b.errorbox.initIvalContentMessage(c);var g=(b.getOptions&&b.errorbox?b.getOptions(c,"errormessage",!1,!0):a(c).data("errormessage"))||c.getAttribute("x-moz-errormessage")||"";return e&&g[e]?g=g[e]:g&&(d=d||a.prop(c,"validity")||{valid:1},d.valid&&(g="")),"object"==typeof g&&(d=d||a.prop(c,"validity")||{valid:1},d.customError&&(f=a.data(c,"customMismatchedRule"))&&g[f]&&"string"==typeof g[f]?g=g[f]:d.valid||(a.each(d,function(a,b){return b&&"valid"!=a&&g[a]?(g=g[a],!1):void 0}),"object"==typeof g&&(d.typeMismatch&&g.badInput&&(g=g.badInput),d.badInput&&g.typeMismatch&&(g=g.typeMismatch)))),"object"==typeof g&&(g=g.defaultMessage),b.replaceValidationplaceholder&&(g=b.replaceValidationplaceholder(c,g)),g||""},a.fn.getErrorMessage=function(c){var d="",e=this[0];return e&&(d=b.getContentValidationMessage(e,!1,c)||a.prop(e,"customValidationMessage")||a.prop(e,"validationMessage")),d},a.event.special.valuevalidation={setup:function(){b.error("valuevalidation was renamed to validatevalue!")}},a.event.special.validatevalue={setup:function(){var b=a(this).data()||a.data(this,{});"validatevalue"in b||(b.validatevalue=!0)}},a(d).on("focusin.lazyloadvalidation",function(a){"form"in a.target&&i()}),b.ready("WINDOWLOAD",i),g["form-number-date-ui"].loaded&&!f.customMessages&&(g["form-number-date-api"].test()||Modernizr.inputtypes.range&&Modernizr.inputtypes.color)&&b.isReady("form-number-date-ui",!0),b.ready("DOM",function(){d.querySelector(".ws-custom-file")&&b.reTest(["form-validation"])}),a(function(){var a="FileReader"in c&&"FormData"in c;a||b.addReady(function(c){a||g.filereader.loaded||g.moxie.loaded||c.querySelector("input.ws-filereader")&&(b.reTest(["filereader","moxie"]),a=!0)})})}),webshims.register("form-message",function(a,b,c,d,e,f){"use strict";f.lazyCustomMessages&&(f.customMessages=!0);var g=b.validityMessages,h=f.customMessages?["customValidationMessage"]:[];g.en=a.extend(!0,{typeMismatch:{defaultMessage:"Please enter a valid value.",email:"Please enter an email address.",url:"Please enter a URL."},badInput:{defaultMessage:"Please enter a valid value.",number:"Please enter a number.",date:"Please enter a date.",time:"Please enter a time.",range:"Invalid input.",month:"Please enter a valid value.","datetime-local":"Please enter a datetime."},rangeUnderflow:{defaultMessage:"Value must be greater than or equal to {%min}."},rangeOverflow:{defaultMessage:"Value must be less than or equal to {%max}."},stepMismatch:"Invalid input.",tooLong:"Please enter at most {%maxlength} character(s). You entered {%valueLen}.",tooShort:"Please enter at least {%minlength} character(s). You entered {%valueLen}.",patternMismatch:"Invalid input. {%title}",valueMissing:{defaultMessage:"Please fill out this field.",checkbox:"Please check this box if you want to proceed."}},g.en||g["en-US"]||{}),"object"==typeof g.en.valueMissing&&["select","radio"].forEach(function(a){g.en.valueMissing[a]=g.en.valueMissing[a]||"Please select an option."}),"object"==typeof g.en.rangeUnderflow&&["date","time","datetime-local","month"].forEach(function(a){g.en.rangeUnderflow[a]=g.en.rangeUnderflow[a]||"Value must be at or after {%min}."}),"object"==typeof g.en.rangeOverflow&&["date","time","datetime-local","month"].forEach(function(a){g.en.rangeOverflow[a]=g.en.rangeOverflow[a]||"Value must be at or before {%max}."}),g["en-US"]||(g["en-US"]=a.extend(!0,{},g.en)),g["en-GB"]||(g["en-GB"]=a.extend(!0,{},g.en)),g["en-AU"]||(g["en-AU"]=a.extend(!0,{},g.en)),g[""]=g[""]||g["en-US"],g.de=a.extend(!0,{typeMismatch:{defaultMessage:"{%value} ist in diesem Feld nicht zul\xe4ssig.",email:"{%value} ist keine g\xfcltige E-Mail-Adresse.",url:"{%value} ist kein(e) g\xfcltige(r) Webadresse/Pfad."},badInput:{defaultMessage:"Geben Sie einen zul\xe4ssigen Wert ein.",number:"Geben Sie eine Nummer ein.",date:"Geben Sie ein Datum ein.",time:"Geben Sie eine Uhrzeit ein.",month:"Geben Sie einen Monat mit Jahr ein.",range:"Geben Sie eine Nummer.","datetime-local":"Geben Sie ein Datum mit Uhrzeit ein."},rangeUnderflow:{defaultMessage:"{%value} ist zu niedrig. {%min} ist der unterste Wert, den Sie benutzen k\xf6nnen."},rangeOverflow:{defaultMessage:"{%value} ist zu hoch. {%max} ist der oberste Wert, den Sie benutzen k\xf6nnen."},stepMismatch:"Der Wert {%value} ist in diesem Feld nicht zul\xe4ssig. Hier sind nur bestimmte Werte zul\xe4ssig. {%title}",tooLong:"Der eingegebene Text ist zu lang! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%maxlength} das Maximum.",tooShort:"Der eingegebene Text ist zu kurz! Sie haben {%valueLen} Zeichen eingegeben, dabei sind {%minlength} das Minimum.",patternMismatch:"{%value} hat f\xfcr dieses Eingabefeld ein falsches Format. {%title}",valueMissing:{defaultMessage:"Bitte geben Sie einen Wert ein.",checkbox:"Bitte aktivieren Sie das K\xe4stchen."}},g.de||{}),"object"==typeof g.de.valueMissing&&["select","radio"].forEach(function(a){g.de.valueMissing[a]=g.de.valueMissing[a]||"Bitte w\xe4hlen Sie eine Option aus."}),"object"==typeof g.de.rangeUnderflow&&["date","time","datetime-local","month"].forEach(function(a){g.de.rangeUnderflow[a]=g.de.rangeUnderflow[a]||"{%value} ist zu fr\xfch. {%min} ist die fr\xfcheste Zeit, die Sie benutzen k\xf6nnen."}),"object"==typeof g.de.rangeOverflow&&["date","time","datetime-local","month"].forEach(function(a){g.de.rangeOverflow[a]=g.de.rangeOverflow[a]||"{%value} ist zu sp\xe4t. {%max} ist die sp\xe4teste Zeit, die Sie benutzen k\xf6nnen."});var i=g[""],j=function(b,c){return b&&"string"!=typeof b&&(b=b[a.prop(c,"type")]||b[(c.nodeName||"").toLowerCase()]||b.defaultMessage),b||""},k=/</g,l=/>/g,m={value:1,min:1,max:1},n=function(){var d,e={number:function(a){var b=1*a;return b.toLocaleString&&!isNaN(b)&&(a=b.toLocaleString()||a),a}},f=function(b,c,d){var f,g;return m[d]&&(f=a.prop(c,"type"),g=a(c).getShadowElement().data("wsWidget"+f),g&&g.formatValue?b=g.formatValue(b,!1):e[f]&&(b=e[f](b))),b};return[{n:"date",f:"toLocaleDateString"},{n:"time",f:"toLocaleTimeString"},{n:"datetime-local",f:"toLocaleString"}].forEach(function(a){e[a.n]=function(b){var c=new Date(b);return c&&c[a.f]&&(b=c[a.f]()||b),b}}),c.Intl&&Intl.DateTimeFormat&&(d=new Intl.DateTimeFormat(navigator.browserLanguage||navigator.language,{year:"numeric",month:"2-digit"}).format(new Date),d&&d.format&&(e.month=function(a){var b=new Date(a);return b&&(a=d.format(b)||a),a})),b.format={},["date","number","month","time","datetime-local"].forEach(function(a){b.format[a]=function(c,d){return d&&d.nodeType?f(c,d,a):("number"==a&&d&&d.toFixed&&(c=1*c,(!d.fixOnlyFloat||c%1)&&(c=c.toFixed(d.toFixed))),b._format&&b._format[a]?b._format[a](c,d):e[a](c))}}),f}();b.replaceValidationplaceholder=function(c,d,e){var f=a.prop(c,"title");return d&&("patternMismatch"!=e||f||b.error("no title for patternMismatch provided. Always add a title attribute."),f&&(f='<span class="ws-titlevalue">'+f.replace(k,"&lt;").replace(l,"&gt;")+"</span>"),-1!=d.indexOf("{%title}")?d=d.replace("{%title}",f):f&&(d=d+" "+f)),d&&-1!=d.indexOf("{%")&&["value","min","max","maxlength","minlength","label"].forEach(function(b){if(-1!==d.indexOf("{%"+b)){var e=("label"==b?a.trim(a('label[for="'+c.id+'"]',c.form).text()).replace(/\*$|:$/,""):a.prop(c,b)||a.attr(c,b)||"")||"";e=""+e,e=n(e,c,b),d=d.replace("{%"+b+"}",e.replace(k,"&lt;").replace(l,"&gt;")),"value"==b&&(d=d.replace("{%valueLen}",e.length))}}),d},b.createValidationMessage=function(c,d){var e=j(i[d],c);return e||"badInput"!=d||(e=j(i.typeMismatch,c)),e||"typeMismatch"!=d||(e=j(i.badInput,c)),e||(e=j(g[""][d],c)||a.prop(c,"validationMessage"),"customError"!=d&&b.info("could not find errormessage for: "+d+" / "+a.prop(c,"type")+". in language: "+b.activeLang())),e=b.replaceValidationplaceholder(c,e,d),e||""},(!Modernizr.formvalidation||b.bugs.bustedValidity)&&h.push("validationMessage"),i=b.activeLang(g),a(g).on("change",function(){i=g.__active}),h.forEach(function(c){b.defineNodeNamesProperty(["fieldset","output","button"],c,{prop:{value:"",writeable:!1}}),["input","select","textarea"].forEach(function(d){var e=b.defineNodeNameProperty(d,c,{prop:{get:function(){var c=this,d="";if(!a.prop(c,"willValidate"))return d;var f=a.prop(c,"validity")||{valid:1};return f.valid?d:(d=b.getContentValidationMessage(c,f))?d:f.customError&&c.nodeName&&(d=Modernizr.formvalidation&&!b.bugs.bustedValidity&&e.prop._supget?e.prop._supget.call(c):b.data(c,"customvalidationMessage"))?d:(a.each(f,function(a,e){return"valid"!=a&&e?(d=b.createValidationMessage(c,a),d?!1:void 0):void 0}),d||"")},writeable:!1}})})})}),function(a,b){"use strict";var c,d=a.audio&&a.video,e=!1,f=b.bugs,g="mediaelement-jaris",h=function(){b.ready(g,function(){b.mediaelement.createSWF||(b.mediaelement.loadSwf=!0,b.reTest([g],d))})},i=b.cfg,j=i.mediaelement;if(!j)return void b.error("mediaelement wasn't implemented but loaded");if(d){var k=document.createElement("video");a.videoBuffered="buffered"in k,a.mediaDefaultMuted="defaultMuted"in k,e="loop"in k,a.mediaLoop=e,b.capturingEvents(["play","playing","waiting","paused","ended","durationchange","loadedmetadata","canplay","volumechange"]),(!a.videoBuffered||!e||!a.mediaDefaultMuted&&-1!=navigator.userAgent.indexOf("MSIE")&&"ActiveXObject"in window)&&(b.addPolyfill("mediaelement-native-fix",{d:["dom-support"]}),b.loader.loadList(["mediaelement-native-fix"]))}a.track&&!f.track&&!function(){if(!f.track){window.VTTCue&&!window.TextTrackCue?window.TextTrackCue=window.VTTCue:window.VTTCue||(window.VTTCue=window.TextTrackCue);try{new VTTCue(2,3,"")}catch(a){f.track=!0}}}(),b.register("mediaelement-core",function(b,f,i,j,k,l){c=swfmini.hasFlashPlayerVersion("10.0.3");var m=f.mediaelement;m.parseRtmp=function(a){var b,c,d,e=a.src.split("://"),g=e[1].split("/");for(a.server=e[0]+"://"+g[0]+"/",a.streamId=[],b=1,c=g.length;c>b;b++)d||-1===g[b].indexOf(":")||(g[b]=g[b].split(":")[1],d=!0),d?a.streamId.push(g[b]):a.server+=g[b]+"/";
a.streamId.length||f.error("Could not parse rtmp url"),a.streamId=a.streamId.join("/")};var n=function(a,c){a=b(a);var d,e={src:a.attr("src")||"",elem:a,srcProp:a.prop("src")};return e.src?(d=a.attr("data-server"),null!=d&&(e.server=d),d=a.attr("type")||a.attr("data-type"),d?(e.type=d,e.container=b.trim(d.split(";")[0])):(c||(c=a[0].nodeName.toLowerCase(),"source"==c&&(c=(a.closest("video, audio")[0]||{nodeName:"video"}).nodeName.toLowerCase())),e.server?(e.type=c+"/rtmp",e.container=c+"/rtmp"):(d=m.getTypeForSrc(e.src,c,e),d&&(e.type=d,e.container=d))),e.container||b(a).attr("data-wsrecheckmimetype",""),d=a.attr("media"),d&&(e.media=d),("audio/rtmp"==e.type||"video/rtmp"==e.type)&&(e.server?e.streamId=e.src:m.parseRtmp(e)),e):e},o=!c&&"postMessage"in i&&d,p=function(){p.loaded||(p.loaded=!0,l.noAutoTrack||f.ready("WINDOWLOAD",function(){r(),f.loader.loadList(["track-ui"])}))},q=function(){var a;return function(){!a&&o&&(a=!0,f.loader.loadScript("https://www.youtube.com/player_api"),b(function(){f._polyfill(["mediaelement-yt"])}))}}(),r=function(){c?h():q()};f.addPolyfill("mediaelement-yt",{test:!o,d:["dom-support"]}),m.mimeTypes={audio:{"audio/ogg":["ogg","oga","ogm"],'audio/ogg;codecs="opus"':"opus","audio/mpeg":["mp2","mp3","mpga","mpega"],"audio/mp4":["mp4","mpg4","m4r","m4a","m4p","m4b","aac"],"audio/wav":["wav"],"audio/3gpp":["3gp","3gpp"],"audio/webm":["webm"],"audio/fla":["flv","f4a","fla"],"application/x-mpegURL":["m3u8","m3u"]},video:{"video/ogg":["ogg","ogv","ogm"],"video/mpeg":["mpg","mpeg","mpe"],"video/mp4":["mp4","mpg4","m4v"],"video/quicktime":["mov","qt"],"video/x-msvideo":["avi"],"video/x-ms-asf":["asf","asx"],"video/flv":["flv","f4v"],"video/3gpp":["3gp","3gpp"],"video/webm":["webm"],"application/x-mpegURL":["m3u8","m3u"],"video/MP2T":["ts"]}},m.mimeTypes.source=b.extend({},m.mimeTypes.audio,m.mimeTypes.video),m.getTypeForSrc=function(a,c){if(-1!=a.indexOf("youtube.com/watch?")||-1!=a.indexOf("youtube.com/v/"))return"video/youtube";if(0===a.indexOf("rtmp"))return c+"/rtmp";a=a.split("?")[0].split("#")[0].split("."),a=a[a.length-1];var d;return b.each(m.mimeTypes[c],function(b,c){return-1!==c.indexOf(a)?(d=b,!1):void 0}),d},m.srces=function(a,c){if(a=b(a),!c){c=[];var d=a[0].nodeName.toLowerCase(),e=n(a,d);return e.src?c.push(e):b("source",a).each(function(){e=n(this,d),e.src&&c.push(e)}),c}f.error("setting sources was removed.")},m.swfMimeTypes=["video/3gpp","video/x-msvideo","video/quicktime","video/x-m4v","video/mp4","video/m4p","video/x-flv","video/flv","audio/mpeg","audio/aac","audio/mp4","audio/x-m4a","audio/m4a","audio/mp3","audio/x-fla","audio/fla","youtube/flv","video/jarisplayer","jarisplayer/jarisplayer","video/youtube","video/rtmp","audio/rtmp"],m.canThirdPlaySrces=function(a,d){var e="";return(c||o)&&(a=b(a),d=d||m.srces(a),b.each(d,function(a,b){return b.container&&b.src&&(c&&-1!=m.swfMimeTypes.indexOf(b.container)||o&&"video/youtube"==b.container)?(e=b,!1):void 0})),e};var s={};m.canNativePlaySrces=function(a,c){var e="";if(d){a=b(a);var f=(a[0].nodeName||"").toLowerCase(),g=(s[f]||{prop:{_supvalue:!1}}).prop._supvalue||a[0].canPlayType;if(!g)return e;c=c||m.srces(a),b.each(c,function(b,c){return c.type&&g.call(a[0],c.type)?(e=c,!1):void 0})}return e};var t=/^\s*application\/octet\-stream\s*$/i,u=function(){var a=t.test(b.attr(this,"type")||"");return a&&b(this).removeAttr("type"),a};m.setError=function(a,c){if(b("source",a).filter(u).length){f.error('"application/octet-stream" is a useless mimetype for audio/video. Please change this attribute.');try{b(a).mediaLoad()}catch(d){}}else c||(c="can't play sources"),b(a).pause().data("mediaerror",c),f.error("mediaelementError: "+c+". Run the following line in your console to get more info: webshim.mediaelement.loadDebugger();"),setTimeout(function(){b(a).data("mediaerror")&&b(a).addClass("media-error").trigger("mediaerror")},1)};var v=function(){var a,d=c?g:"mediaelement-yt";return function(c,e,g){f.ready(d,function(){m.createSWF&&b(c).parent()[0]?m.createSWF(c,e,g):a||(a=!0,r(),v(c,e,g))}),a||!o||m.createSWF||q()}}(),w=function(a,b,c,d,e){var f;c||c!==!1&&b&&"third"==b.isActive?(f=m.canThirdPlaySrces(a,d),f?v(a,f,b):e?m.setError(a,!1):w(a,b,!1,d,!0)):(f=m.canNativePlaySrces(a,d),f?b&&"third"==b.isActive&&m.setActive(a,"html5",b):e?(m.setError(a,!1),b&&"third"==b.isActive&&m.setActive(a,"html5",b)):w(a,b,!0,d,!0))},x=/^(?:embed|object|datalist)$/i,y=function(a,c){var d=f.data(a,"mediaelementBase")||f.data(a,"mediaelementBase",{}),e=m.srces(a),g=a.parentNode;clearTimeout(d.loadTimer),b(a).removeClass("media-error"),b.data(a,"mediaerror",!1),e.length&&g&&1==g.nodeType&&!x.test(g.nodeName||"")&&(c=c||f.data(a,"mediaelement"),m.sortMedia&&e.sort(m.sortMedia),w(a,c,l.preferFlash||k,e))};m.selectSource=y,b(j).on("ended",function(a){var c=f.data(a.target,"mediaelement");(!e||c&&"html5"!=c.isActive||b.prop(a.target,"loop"))&&setTimeout(function(){!b.prop(a.target,"paused")&&b.prop(a.target,"loop")&&b(a.target).prop("currentTime",0).play()})});var z=!1,A=function(){var g=function(){f.implement(this,"mediaelement")&&(y(this),a.mediaDefaultMuted||null==b.attr(this,"muted")||b.prop(this,"muted",!0))};f.ready("dom-support",function(){z=!0,e||f.defineNodeNamesBooleanProperty(["audio","video"],"loop"),["audio","video"].forEach(function(a){var e;e=f.defineNodeNameProperty(a,"load",{prop:{value:function(){var a=f.data(this,"mediaelement");y(this,a),!d||a&&"html5"!=a.isActive||!e.prop._supvalue||e.prop._supvalue.apply(this,arguments),!p.loaded&&b("track",this).length&&p(),b(this).triggerHandler("wsmediareload")}}}),s[a]=f.defineNodeNameProperty(a,"canPlayType",{prop:{value:function(e){var f="";return d&&s[a].prop._supvalue&&(f=s[a].prop._supvalue.call(this,e),"no"==f&&(f="")),!f&&c&&(e=b.trim((e||"").split(";")[0]),-1!=m.swfMimeTypes.indexOf(e)&&(f="maybe")),!f&&o&&"video/youtube"==e&&(f="maybe"),f}}})}),f.onNodeNamesPropertyModify(["audio","video"],["src","poster"],{set:function(){var a=this,b=f.data(a,"mediaelementBase")||f.data(a,"mediaelementBase",{});clearTimeout(b.loadTimer),b.loadTimer=setTimeout(function(){y(a),a=null},9)}}),f.addReady(function(a,c){var d=b("video, audio",a).add(c.filter("video, audio")).each(g);!p.loaded&&b("track",d).length&&p(),d=null})}),d&&!z&&f.addReady(function(a,c){z||b("video, audio",a).add(c.filter("video, audio")).each(function(){return m.canNativePlaySrces(this)?void 0:(r(),z=!0,!1)})})};m.loadDebugger=function(){f.ready("dom-support",function(){f.loader.loadScript("mediaelement-debug")})},f.cfg.debug&&f.ready("WINDOWLOAD",m.loadDebugger),d?(f.isReady("mediaelement-core",!0),A(),f.ready("WINDOWLOAD mediaelement",r)):f.ready(g,A),f.ready("track",p)})}(Modernizr,webshims);