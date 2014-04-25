// Avoid `console` errors in browsers that lack a console.
(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());
//
// Fueled HTML5 form input polyfill
//
(function() {
    var input = {},
        inputElem = document.createElement('input'),
        attrs = {};
    input.has = (function(props) {
        for(var i = 0, len = props.length; i < len; i++) {
            attrs[props[i]] = props[i] in inputElem;
        }
        return attrs;
    })('autocomplete autofocus list placeholder max min multiple pattern required step'.split(' '));

    if(!input.has.placeholder) {
        $('[placeholder]').each(function(i, t) {
            t = $(t);
            var p = t.attr('placeholder');
            t.attr('value', p);
        });
    }

}());

// Place any jQuery/helper plugins in here.

(function(c,q){var m="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";c.fn.imagesLoaded=function(f){function n(){var b=c(j),a=c(h);d&&(h.length?d.reject(e,b,a):d.resolve(e));c.isFunction(f)&&f.call(g,e,b,a)}function p(b){k(b.target,"error"===b.type)}function k(b,a){b.src===m||-1!==c.inArray(b,l)||(l.push(b),a?h.push(b):j.push(b),c.data(b,"imagesLoaded",{isBroken:a,src:b.src}),r&&d.notifyWith(c(b),[a,e,c(j),c(h)]),e.length===l.length&&(setTimeout(n),e.unbind(".imagesLoaded",
p)))}var g=this,d=c.isFunction(c.Deferred)?c.Deferred():0,r=c.isFunction(d.notify),e=g.find("img").add(g.filter("img")),l=[],j=[],h=[];c.isPlainObject(f)&&c.each(f,function(b,a){if("callback"===b)f=a;else if(d)d[b](a)});e.length?e.bind("load.imagesLoaded error.imagesLoaded",p).each(function(b,a){var d=a.src,e=c.data(a,"imagesLoaded");if(e&&e.src===d)k(a,e.isBroken);else if(a.complete&&a.naturalWidth!==q)k(a,0===a.naturalWidth||0===a.naturalHeight);else if(a.readyState||a.complete)a.src=m,a.src=d}):
n();return d?d.promise(g):g}})(jQuery);

(function(e){"use strict";e.Transitions={_names:{transition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend"},_parseTimes:function(e){var t,n=e.split(/,\s*/);for(var r=0;r<n.length;r++)t=n[r],n[r]=parseFloat(t),t.match(/\ds/)&&(n[r]=n[r]*1e3);return n},getEvent:function(){var e=!1;for(var t in this._names)if(typeof document.body.style[t]!="undefined"){e=this._names[t];break}return this.getEvent=function(){return e},e},animFrame:function(e){var t=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.msRequestAnimationFrame;return t?this.animFrame=function(e){return t.call(window,e)}:this.animFrame=function(e){return setTimeout(e,10)},this.animFrame(e)},isSupported:function(){return this.getEvent()!==!1}},e.extend(e.fn,{afterTransition:function(t,n){typeof n=="undefined"&&(n=t,t=1);if(!e.Transitions.isSupported()){for(var r=0;r<this.length;r++)n.call(this[r],{type:"aftertransition",elapsedTime:0,propertyName:"",currentTarget:this[r]});return this}for(var r=0;r<this.length;r++){var i=e(this[r]),s=i.css("transition-property").split(/,\s*/),o=i.css("transition-duration"),u=i.css("transition-delay");o=e.Transitions._parseTimes(o),u=e.Transitions._parseTimes(u);var a,f,l,c,h;for(var p=0;p<s.length;p++)a=s[p],f=o[o.length==1?0:p],l=u[u.length==1?0:p],c=l+f*t,h=f*t/1e3,function(t,r,i,s){setTimeout(function(){e.Transitions.animFrame(function(){n.call(t[0],{type:"aftertransition",elapsedTime:s,propertyName:r,currentTarget:t[0]})})},i)}(i,a,c,h)}return this},transitionEnd:function(t){for(var n=0;n<this.length;n++)this[n].addEventListener(e.Transitions.getEvent(),function(e){t.call(this,e)});return this}})}).call(this,jQuery)
