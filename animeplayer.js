/*
 RequireJS order 1.0.5 Copyright (c) 2010-2011, The Dojo Foundation All Rights Reserved.
 Available via the MIT or new BSD license.
 see: http://github.com/jrburke/requirejs for details
*/
/*! Video.js v4.12.11 Copyright 2014 Brightcove, Inc. https://github.com/videojs/video.js/blob/master/LICENSE */
!function() {
    function t(t) {
        var e, n = t.currentTarget || t.srcElement;
        if ("load" === t.type || s.test(n.readyState)) {
            for (t = n.getAttribute("data-requiremodule"),
            a[t] = !0,
            t = 0; (e = r[t]) && a[e.name]; t++)
                e.req([e.name], e.onLoad);
            t > 0 && r.splice(0, t),
            setTimeout(function() {
                n.parentNode.removeChild(n)
            }, 15)
        }
    }
    function e(t) {
        var e, n;
        for (t.setAttribute("data-orderloaded", "loaded"),
        t = 0; (n = c[t]) && ((e = l[n]) && "loaded" === e.getAttribute("data-orderloaded")); t++)
            delete l[n],
            require.addScriptToDom(e);
        t > 0 && c.splice(0, t)
    }
    var n = "undefined" != typeof document && "undefined" != typeof window && document.createElement("script")
      , i = n && (n.async || window.opera && "[object Opera]" === Object.prototype.toString.call(window.opera) || "MozAppearance"in document.documentElement.style)
      , o = n && "uninitialized" === n.readyState
      , s = /^(complete|loaded)$/
      , r = []
      , a = {}
      , l = {}
      , c = []
      , n = null ;
    define("order", {
        version: "1.0.5",
        load: function(n, s, a, u) {
            var d;
            s.nameToUrl ? (d = s.nameToUrl(n, null ),
            require.s.skipAsync[d] = !0,
            i || u.isBuild ? s([n], a) : o ? (u = require.s.contexts._,
            !u.urlFetched[d] && !u.loaded[n] && (u.urlFetched[d] = !0,
            require.resourcesReady(!1),
            u.scriptCount += 1,
            d = require.attach(d, u, n, null , null , e),
            l[n] = d,
            c.push(n)),
            s([n], a)) : s.specified(n) ? s([n], a) : (r.push({
                name: n,
                req: s,
                onLoad: a
            }),
            require.attach(d, null , n, t, "script/cache"))) : s([n], a)
        }
    })
}(),
function() {
    function m() {
        return function() {}
    }
    function n(t) {
        return function() {
            return this[t]
        }
    }
    function p(t) {
        return function() {
            return t
        }
    }
    function t(e, n, i) {
        if ("string" == typeof e) {
            if (0 === e.indexOf("#") && (e = e.slice(1)),
            t.Da[e])
                return n && t.log.warn('Player "' + e + '" is already initialised. Options will not be applied.'),
                i && t.Da[e].I(i),
                t.Da[e];
            e = t.m(e)
        }
        if (!e || !e.nodeName)
            throw new TypeError("The element or ID supplied is not valid. (videojs)");
        return new t.Player(e,n,i)
    }
    function v(e, n, i, o) {
        t.xc.forEach(i, function(t) {
            e(n, t, o)
        })
    }
    function F(e, n) {
        var i, o;
        i = Array.prototype.slice.call(n),
        o = m(),
        o = window.console || {
            log: o,
            warn: o,
            error: o
        },
        e ? i.unshift(e.toUpperCase() + ":") : e = "log",
        t.log.history.push(i),
        i.unshift("VIDEOJS:"),
        o[e].apply ? o[e].apply(o, i) : o[e](i.join(" "))
    }
    function G(t) {
        t.r("vjs-lock-showing")
    }
    function ca(e, n, i, o) {
        return i !== b ? ((i === j || t.le(i)) && (i = 0),
        e.c.style[n] = -1 !== ("" + i).indexOf("%") || -1 !== ("" + i).indexOf("px") ? i : "auto" === i ? "" : i + "px",
        o || e.o("resize"),
        e) : e.c ? (i = e.c.style[n],
        o = i.indexOf("px"),
        -1 !== o ? parseInt(i.slice(0, o), 10) : parseInt(e.c["offset" + t.wa(n)], 10)) : 0
    }
    function da(e) {
        var n, i, o, s, r, a, c, u;
        n = 0,
        i = j,
        e.b("touchstart", function(e) {
            1 === e.touches.length && (i = t.i.copy(e.touches[0]),
            n = (new Date).getTime(),
            s = f)
        }),
        e.b("touchmove", function(t) {
            1 < t.touches.length ? s = l : i && (a = t.touches[0].pageX - i.pageX,
            c = t.touches[0].pageY - i.pageY,
            u = Math.sqrt(a * a + c * c),
            u > 10 && (s = l))
        }),
        r = function() {
            s = l
        }
        ,
        e.b("touchleave", r),
        e.b("touchcancel", r),
        e.b("touchend", function(t) {
            i = j,
            s === f && (o = (new Date).getTime() - n,
            200 > o && (t.preventDefault(),
            this.o("tap")))
        })
    }
    function ea(e, n) {
        var i, o, s, r;
        return i = e.c,
        o = t.Zd(i),
        r = s = i.offsetWidth,
        i = e.handle,
        e.options().vertical ? (r = o.top,
        o = n.changedTouches ? n.changedTouches[0].pageY : n.pageY,
        i && (i = i.m().offsetHeight,
        r += i / 2,
        s -= i),
        Math.max(0, Math.min(1, (r - o + s) / s))) : (s = o.left,
        o = n.changedTouches ? n.changedTouches[0].pageX : n.pageX,
        i && (i = i.m().offsetWidth,
        s += i / 2,
        r -= i),
        Math.max(0, Math.min(1, (o - s) / r)))
    }
    function fa(e, n) {
        e.ba(n),
        n.b("click", t.bind(e, function() {
            G(this)
        }))
    }
    function ga(t) {
        t.Ka = f,
        t.Aa.p("vjs-lock-showing"),
        t.c.setAttribute("aria-pressed", f),
        t.H && 0 < t.H.length && t.H[0].m().focus()
    }
    function H(t) {
        t.Ka = l,
        G(t.Aa),
        t.c.setAttribute("aria-pressed", l)
    }
    function ia(e) {
        var n, i, o = {
            sources: [],
            tracks: []
        };
        if (n = t.Pa(e),
        i = n["data-setup"],
        i !== j && t.i.D(n, t.JSON.parse(i || "{}")),
        t.i.D(o, n),
        e.hasChildNodes()) {
            var s, r;
            for (e = e.childNodes,
            s = 0,
            r = e.length; r > s; s++)
                n = e[s],
                i = n.nodeName.toLowerCase(),
                "source" === i ? o.sources.push(t.Pa(n)) : "track" === i && o.tracks.push(t.Pa(n))
        }
        return o
    }
    function ka(e, n, i) {
        e.h && (e.za = l,
        e.h.dispose(),
        e.h = l),
        "Html5" !== n && e.L && (t.e.Nb(e.L),
        e.L = j),
        e.Va = n,
        e.za = l;
        var o = t.i.D({
            source: i,
            parentEl: e.c
        }, e.q[n.toLowerCase()]);
        i && (e.Gc = i.type,
        i.src == e.K.src && 0 < e.K.currentTime && (o.startTime = e.K.currentTime),
        e.K.src = i.src),
        e.h = new window.videojs[n](e,o),
        e.h.I(function() {
            this.d.Xa()
        })
    }
    function la(t, e) {
        e !== b && t.Nc !== e && ((t.Nc = e) ? (t.p("vjs-has-started"),
        t.o("firstplay")) : t.r("vjs-has-started"))
    }
    function N(e, n, i) {
        if (e.h && !e.h.za)
            e.h.I(function() {
                this[n](i)
            });
        else
            try {
                e.h[n](i)
            } catch (o) {
                throw t.log(o),
                o
            }
    }
    function M(e, n) {
        if (e.h && e.h.za)
            try {
                return e.h[n]()
            } catch (i) {
                throw e.h[n] === b ? t.log("Video.js: " + n + " method not defined for " + e.Va + " playback technology.", i) : "TypeError" == i.name ? (t.log("Video.js: " + n + " unavailable on " + e.Va + " playback technology element.", i),
                e.h.za = l) : t.log(i),
                i
            }
    }
    function ma(t, e) {
        var n = t.selectSource(e);
        n ? n.h === t.Va ? t.src(n.source) : ka(t, n.h, n.source) : (t.setTimeout(function() {
            this.error({
                code: 4,
                message: this.v(this.options().notSupportedMessage)
            })
        }, 0),
        t.Xa())
    }
    function ja(t, e) {
        return e !== b ? (t.Pc = !!e,
        t) : t.Pc
    }
    function na(t) {
        return t.k().h && t.k().h.featuresPlaybackRate && t.k().options().playbackRates && 0 < t.k().options().playbackRates.length
    }
    function oa(t, e) {
        var n = /^blob\:/i;
        return e && t && n.test(t) ? e : t
    }
    function ta() {
        var t = T[U]
          , e = t.charAt(0).toUpperCase() + t.slice(1);
        ua["set" + e] = function(e) {
            return this.c.vjs_setProperty(t, e)
        }
    }
    function va(t) {
        ua[t] = function() {
            return this.c.vjs_getProperty(t)
        }
    }
    function P(e, n) {
        var i = e.Wa.length;
        "" + i in e || Object.defineProperty(e, i, {
            get: function() {
                return this.Wa[i]
            }
        }),
        n.addEventListener("modechange", t.bind(e, function() {
            this.o("change")
        })),
        e.Wa.push(n),
        e.o({
            type: "addtrack",
            T: n
        })
    }
    function Q(t, e) {
        for (var n, i = 0, o = t.length; o > i; i++)
            if (n = t[i],
            n === e) {
                t.Wa.splice(i, 1);
                break
            }
        t.o({
            type: "removetrack",
            T: e
        })
    }
    function W(t, e) {
        return "rgba(" + parseInt(t[1] + t[1], 16) + "," + parseInt(t[2] + t[2], 16) + "," + parseInt(t[3] + t[3], 16) + "," + e + ")"
    }
    function X(t) {
        var e;
        return t.Le ? e = t.Le[0] : t.options && (e = t.options[t.options.selectedIndex]),
        e.value
    }
    function Y(t, e) {
        var n, i;
        if (e) {
            for (n = 0; n < t.options.length && (i = t.options[n],
            !(i.value === e)); n++)
                ;
            t.selectedIndex = n
        }
    }
    function $(t, e) {
        var n = t.split(".")
          , i = Ba;
        !(n[0]in i) && i.execScript && i.execScript("var " + n[0]);
        for (var o; n.length && (o = n.shift()); )
            n.length || e === b ? i = i[o] ? i[o] : i[o] = {} : i[o] = e
    }
    var b = void 0, f = !0, j = null , l = !1, s;
    document.createElement("video"),
    document.createElement("audio"),
    document.createElement("track");
    var videojs = window.videojs = t;
    t.jc = "4.12",
    t.wd = "https:" == document.location.protocol ? "https://" : "http://",
    t.VERSION = "4.12.11",
    t.options = {
        techOrder: ["html5", "flash"],
        html5: {},
        flash: {},
        width: 300,
        height: 150,
        defaultVolume: 0,
        playbackRates: [],
        inactivityTimeout: 2e3,
        children: {
            mediaLoader: {},
            posterImage: {},
            loadingSpinner: {},
            textTrackDisplay: {},
            bigPlayButton: {},
            controlBar: {},
            errorDisplay: {},
            textTrackSettings: {}
        },
        language: document.getElementsByTagName("html")[0].getAttribute("lang") || navigator.languages && navigator.languages[0] || navigator.Jf || navigator.language || "en",
        languages: {},
        notSupportedMessage: ""
    },
    "GENERATED_CDN_VSN" !== t.jc && (videojs.options.flash.swf = t.wd + "vjs.zencdn.net/" + t.jc + "/video-js.swf"),
    t.Kd = function(e, n) {
        return t.options.languages[e] = t.options.languages[e] !== b ? t.$.Ba(t.options.languages[e], n) : n,
        t.options.languages
    }
    ,
    t.Da = {},
    "function" == typeof define && define.amd ? define("videojs", [], function() {
        return videojs
    }) : "object" == typeof exports && "object" == typeof module && (module.exports = videojs),
    t.Ha = t.CoreObject = m(),
    t.Ha.extend = function(e) {
        var n, i;
        e = e || {},
        n = e.init || e.l || this.prototype.init || this.prototype.l || m(),
        i = function() {
            n.apply(this, arguments)
        }
        ,
        i.prototype = t.i.create(this.prototype),
        i.prototype.constructor = i,
        i.extend = t.Ha.extend,
        i.create = t.Ha.create;
        for (var o in e)
            e.hasOwnProperty(o) && (i.prototype[o] = e[o]);
        return i
    }
    ,
    t.Ha.create = function() {
        var e = t.i.create(this.prototype);
        return this.apply(e, arguments),
        e
    }
    ,
    t.b = function(e, n, i) {
        if (t.i.isArray(n))
            return v(t.b, e, n, i);
        var o = t.getData(e);
        o.G || (o.G = {}),
        o.G[n] || (o.G[n] = []),
        i.s || (i.s = t.s++),
        o.G[n].push(i),
        o.ca || (o.disabled = l,
        o.ca = function(n) {
            if (!o.disabled) {
                n = t.Qb(n);
                var i = o.G[n.type];
                if (i)
                    for (var i = i.slice(0), s = 0, r = i.length; r > s && !n.Rc(); s++)
                        i[s].call(e, n)
            }
        }
        ),
        1 == o.G[n].length && (e.addEventListener ? e.addEventListener(n, o.ca, l) : e.attachEvent && e.attachEvent("on" + n, o.ca))
    }
    ,
    t.n = function(e, n, i) {
        if (t.Mc(e)) {
            var o = t.getData(e);
            if (o.G) {
                if (t.i.isArray(n))
                    return v(t.n, e, n, i);
                if (n) {
                    var s = o.G[n];
                    if (s) {
                        if (i) {
                            if (i.s)
                                for (o = 0; o < s.length; o++)
                                    s[o].s === i.s && s.splice(o--, 1)
                        } else
                            o.G[n] = [];
                        t.Bc(e, n)
                    }
                } else
                    for (s in o.G)
                        n = s,
                        o.G[n] = [],
                        t.Bc(e, n)
            }
        }
    }
    ,
    t.Bc = function(e, n) {
        var i = t.getData(e);
        0 === i.G[n].length && (delete i.G[n],
        e.removeEventListener ? e.removeEventListener(n, i.ca, l) : e.detachEvent && e.detachEvent("on" + n, i.ca)),
        t.kb(i.G) && (delete i.G,
        delete i.ca,
        delete i.disabled),
        t.kb(i) && t.cd(e)
    }
    ,
    t.Qb = function(t) {
        function e() {
            return f
        }
        function n() {
            return l
        }
        if (!t || !t.Wb) {
            var i = t || window.event;
            t = {};
            for (var o in i)
                "layerX" !== o && "layerY" !== o && "keyLocation" !== o && ("returnValue" == o && i.preventDefault || (t[o] = i[o]));
            if (t.target || (t.target = t.srcElement || document),
            t.relatedTarget = t.fromElement === t.target ? t.toElement : t.fromElement,
            t.preventDefault = function() {
                i.preventDefault && i.preventDefault(),
                t.returnValue = l,
                t.je = e,
                t.defaultPrevented = f
            }
            ,
            t.je = n,
            t.defaultPrevented = l,
            t.stopPropagation = function() {
                i.stopPropagation && i.stopPropagation(),
                t.cancelBubble = f,
                t.Wb = e
            }
            ,
            t.Wb = n,
            t.stopImmediatePropagation = function() {
                i.stopImmediatePropagation && i.stopImmediatePropagation(),
                t.Rc = e,
                t.stopPropagation()
            }
            ,
            t.Rc = n,
            t.clientX != j) {
                o = document.documentElement;
                var s = document.body;
                t.pageX = t.clientX + (o && o.scrollLeft || s && s.scrollLeft || 0) - (o && o.clientLeft || s && s.clientLeft || 0),
                t.pageY = t.clientY + (o && o.scrollTop || s && s.scrollTop || 0) - (o && o.clientTop || s && s.clientTop || 0)
            }
            t.which = t.charCode || t.keyCode,
            t.button != j && (t.button = 1 & t.button ? 0 : 4 & t.button ? 1 : 2 & t.button ? 2 : 0)
        }
        return t
    }
    ,
    t.o = function(e, n) {
        var i = t.Mc(e) ? t.getData(e) : {}
          , o = e.parentNode || e.ownerDocument;
        return "string" == typeof n && (n = {
            type: n,
            target: e
        }),
        n = t.Qb(n),
        i.ca && i.ca.call(e, n),
        o && !n.Wb() && n.bubbles !== l ? t.o(o, n) : o || n.defaultPrevented || (i = t.getData(n.target),
        !n.target[n.type]) || (i.disabled = f,
        "function" == typeof n.target[n.type] && n.target[n.type](),
        i.disabled = l),
        !n.defaultPrevented
    }
    ,
    t.N = function(e, n, i) {
        function o() {
            t.n(e, n, o),
            i.apply(this, arguments)
        }
        return t.i.isArray(n) ? v(t.N, e, n, i) : (o.s = i.s = i.s || t.s++,
        void t.b(e, n, o))
    }
    ;
    var w = Object.prototype.hasOwnProperty;
    t.f = function(e, n) {
        var i;
        return n = n || {},
        i = document.createElement(e || "div"),
        t.i.da(n, function(t, e) {
            -1 !== t.indexOf("aria-") || "role" == t ? i.setAttribute(t, e) : i[t] = e
        }),
        i
    }
    ,
    t.wa = function(t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
    }
    ,
    t.i = {},
    t.i.create = Object.create || function(t) {
        function e() {}
        return e.prototype = t,
        new e
    }
    ,
    t.i.da = function(t, e, n) {
        for (var i in t)
            w.call(t, i) && e.call(n || this, i, t[i])
    }
    ,
    t.i.D = function(t, e) {
        if (!e)
            return t;
        for (var n in e)
            w.call(e, n) && (t[n] = e[n]);
        return t
    }
    ,
    t.i.Sd = function(e, n) {
        var i, o, s;
        e = t.i.copy(e);
        for (i in n)
            w.call(n, i) && (o = e[i],
            s = n[i],
            e[i] = t.i.lb(o) && t.i.lb(s) ? t.i.Sd(o, s) : n[i]);
        return e
    }
    ,
    t.i.copy = function(e) {
        return t.i.D({}, e)
    }
    ,
    t.i.lb = function(t) {
        return !!t && "object" == typeof t && "[object Object]" === t.toString() && t.constructor === Object
    }
    ,
    t.i.isArray = Array.isArray || function(t) {
        return "[object Array]" === Object.prototype.toString.call(t)
    }
    ,
    t.le = function(t) {
        return t !== t
    }
    ,
    t.bind = function(e, n, i) {
        function o() {
            return n.apply(e, arguments)
        }
        return n.s || (n.s = t.s++),
        o.s = i ? i + "_" + n.s : n.s,
        o
    }
    ,
    t.va = {},
    t.s = 1,
    t.expando = "vdata" + (new Date).getTime(),
    t.getData = function(e) {
        var n = e[t.expando];
        return n || (n = e[t.expando] = t.s++),
        t.va[n] || (t.va[n] = {}),
        t.va[n]
    }
    ,
    t.Mc = function(e) {
        return e = e[t.expando],
        !(!e || t.kb(t.va[e]))
    }
    ,
    t.cd = function(e) {
        var n = e[t.expando];
        if (n) {
            delete t.va[n];
            try {
                delete e[t.expando]
            } catch (i) {
                e.removeAttribute ? e.removeAttribute(t.expando) : e[t.expando] = j
            }
        }
    }
    ,
    t.kb = function(t) {
        for (var e in t)
            if (t[e] !== j)
                return l;
        return f
    }
    ,
    t.Qa = function(t, e) {
        return -1 !== (" " + t.className + " ").indexOf(" " + e + " ")
    }
    ,
    t.p = function(e, n) {
        t.Qa(e, n) || (e.className = "" === e.className ? n : e.className + " " + n)
    }
    ,
    t.r = function(e, n) {
        var i, o;
        if (t.Qa(e, n)) {
            for (i = e.className.split(" "),
            o = i.length - 1; o >= 0; o--)
                i[o] === n && i.splice(o, 1);
            e.className = i.join(" ")
        }
    }
    ,
    t.A = t.f("video");
    var x = document.createElement("track");
    x.Xb = "captions",
    x.jd = "en",
    x.label = "English",
    t.A.appendChild(x),
    t.P = navigator.userAgent,
    t.Dd = /iPhone/i.test(t.P),
    t.Cd = /iPad/i.test(t.P),
    t.Ed = /iPod/i.test(t.P),
    t.Bd = t.Dd || t.Cd || t.Ed;
    var aa = t, y, z = t.P.match(/OS (\d+)_/i);
    y = z && z[1] ? z[1] : b,
    aa.lf = y,
    t.Ad = /Android/i.test(t.P);
    var ba = t, B, C = t.P.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i), D, E;
    C ? (D = C[1] && parseFloat(C[1]),
    E = C[2] && parseFloat(C[2]),
    B = D && E ? parseFloat(C[1] + "." + C[2]) : D ? D : j) : B = j,
    ba.ic = B,
    t.Fd = t.Ad && /webkit/i.test(t.P) && 2.3 > t.ic,
    t.kc = /Firefox/i.test(t.P),
    t.mf = /Chrome/i.test(t.P),
    t.qa = /MSIE\s8\.0/.test(t.P),
    t.Gb = !!("ontouchstart"in window || window.yd && document instanceof window.yd),
    t.xd = "backgroundSize"in t.A.style,
    t.ed = function(e, n) {
        t.i.da(n, function(t, n) {
            n === j || "undefined" == typeof n || n === l ? e.removeAttribute(t) : e.setAttribute(t, n === f ? "" : n)
        })
    }
    ,
    t.Pa = function(t) {
        var e, n, i, o;
        if (e = {},
        t && t.attributes && 0 < t.attributes.length) {
            n = t.attributes;
            for (var s = n.length - 1; s >= 0; s--)
                i = n[s].name,
                o = n[s].value,
                ("boolean" == typeof t[i] || -1 !== ",autoplay,controls,loop,muted,default,".indexOf("," + i + ",")) && (o = o !== j ? f : l),
                e[i] = o
        }
        return e
    }
    ,
    t.wf = function(t, e) {
        var n = "";
        return document.defaultView && document.defaultView.getComputedStyle ? n = document.defaultView.getComputedStyle(t, "").getPropertyValue(e) : t.currentStyle && (n = t["client" + e.substr(0, 1).toUpperCase() + e.substr(1)] + "px"),
        n
    }
    ,
    t.Vb = function(t, e) {
        e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t)
    }
    ,
    t.eb = {},
    t.m = function(t) {
        return 0 === t.indexOf("#") && (t = t.slice(1)),
        document.getElementById(t)
    }
    ,
    t.Oa = function(t, e) {
        e = e || t;
        var n = Math.floor(t % 60)
          , i = Math.floor(t / 60 % 60)
          , o = Math.floor(t / 3600)
          , s = Math.floor(e / 60 % 60)
          , r = Math.floor(e / 3600);
        return (isNaN(t) || 1 / 0 === t) && (o = i = n = "-"),
        o = o > 0 || r > 0 ? o + ":" : "",
        o + (((o || s >= 10) && 10 > i ? "0" + i : i) + ":") + (10 > n ? "0" + n : n)
    }
    ,
    t.Md = function() {
        document.body.focus(),
        document.onselectstart = p(l)
    }
    ,
    t.bf = function() {
        document.onselectstart = p(f)
    }
    ,
    t.trim = function(t) {
        return (t + "").replace(/^\s+|\s+$/g, "")
    }
    ,
    t.round = function(t, e) {
        return e || (e = 0),
        Math.round(t * Math.pow(10, e)) / Math.pow(10, e)
    }
    ,
    t.ya = function(t, e) {
        return t === b && e === b ? {
            length: 0,
            start: function() {
                throw Error("This TimeRanges object is empty")
            },
            end: function() {
                throw Error("This TimeRanges object is empty")
            }
        } : {
            length: 1,
            start: function() {
                return t
            },
            end: function() {
                return e
            }
        }
    }
    ,
    t.Ne = function(e) {
        try {
            var n = window.localStorage || l;
            n && (n.volume = e)
        } catch (i) {
            22 == i.code || 1014 == i.code ? t.log("LocalStorage Full (VideoJS)", i) : 18 == i.code ? t.log("LocalStorage not allowed (VideoJS)", i) : t.log("LocalStorage Error (VideoJS)", i)
        }
    }
    ,
    t.ae = function(e) {
        return e.match(/^https?:\/\//) || (e = t.f("div", {
            innerHTML: '<a href="' + e + '">x</a>'
        }).firstChild.href),
        e
    }
    ,
    t.Fe = function(e) {
        var n, i, o, s;
        s = "protocol hostname port pathname search hash host".split(" "),
        i = t.f("a", {
            href: e
        }),
        (o = "" === i.host && "file:" !== i.protocol) && (n = t.f("div"),
        n.innerHTML = '<a href="' + e + '"></a>',
        i = n.firstChild,
        n.setAttribute("style", "display:none; position:absolute;"),
        document.body.appendChild(n)),
        e = {};
        for (var r = 0; r < s.length; r++)
            e[s[r]] = i[s[r]];
        return "http:" === e.protocol && (e.host = e.host.replace(/:80$/, "")),
        "https:" === e.protocol && (e.host = e.host.replace(/:443$/, "")),
        o && document.body.removeChild(n),
        e
    }
    ,
    t.log = function() {
        F(j, arguments)
    }
    ,
    t.log.history = [],
    t.log.error = function() {
        F("error", arguments)
    }
    ,
    t.log.warn = function() {
        F("warn", arguments)
    }
    ,
    t.Zd = function(e) {
        var n, i;
        return e.getBoundingClientRect && e.parentNode && (n = e.getBoundingClientRect()),
        n ? (e = document.documentElement,
        i = document.body,
        {
            left: t.round(n.left + (window.pageXOffset || i.scrollLeft) - (e.clientLeft || i.clientLeft || 0)),
            top: t.round(n.top + (window.pageYOffset || i.scrollTop) - (e.clientTop || i.clientTop || 0))
        }) : {
            left: 0,
            top: 0
        }
    }
    ,
    t.xc = {},
    t.xc.forEach = function(e, n, i) {
        if (t.i.isArray(e) && n instanceof Function)
            for (var o = 0, s = e.length; s > o; ++o)
                n.call(i || t, e[o], o, e);
        return e
    }
    ,
    t.gf = function(e, n) {
        var i, o, s, r, a, l, c;
        "string" == typeof e && (e = {
            uri: e
        }),
        videojs.$.Ba({
            method: "GET",
            timeout: 45e3
        }, e),
        n = n || m(),
        l = function() {
            window.clearTimeout(a),
            n(j, o, o.response || o.responseText)
        }
        ,
        c = function(t) {
            window.clearTimeout(a),
            t && "string" != typeof t || (t = Error(t)),
            n(t, o)
        }
        ,
        i = window.XMLHttpRequest,
        "undefined" == typeof i && (i = function() {
            try {
                return new window.ActiveXObject("Msxml2.XMLHTTP.6.0")
            } catch (t) {}
            try {
                return new window.ActiveXObject("Msxml2.XMLHTTP.3.0")
            } catch (e) {}
            try {
                return new window.ActiveXObject("Msxml2.XMLHTTP")
            } catch (n) {}
            throw Error("This browser does not support XMLHttpRequest.")
        }
        ),
        o = new i,
        o.uri = e.uri,
        i = t.Fe(e.uri),
        s = window.location,
        i.protocol + i.host === s.protocol + s.host || !window.XDomainRequest || "withCredentials"in o ? (r = "file:" == i.protocol || "file:" == s.protocol,
        o.onreadystatechange = function() {
            if (4 === o.readyState) {
                if (o.Ze)
                    return c("timeout");
                200 === o.status || r && 0 === o.status ? l() : c()
            }
        }
        ,
        e.timeout && (a = window.setTimeout(function() {
            4 !== o.readyState && (o.Ze = f,
            o.abort())
        }, e.timeout))) : (o = new window.XDomainRequest,
        o.onload = l,
        o.onerror = c,
        o.onprogress = m(),
        o.ontimeout = m());
        try {
            o.open(e.method || "GET", e.uri, f)
        } catch (u) {
            return void c(u)
        }
        e.withCredentials && (o.withCredentials = f),
        e.responseType && (o.responseType = e.responseType);
        try {
            o.send()
        } catch (d) {
            c(d)
        }
    }
    ,
    t.$ = {},
    t.$.Ba = function(e, n) {
        var i, o, s;
        e = t.i.copy(e);
        for (i in n)
            n.hasOwnProperty(i) && (o = e[i],
            s = n[i],
            e[i] = t.i.lb(o) && t.i.lb(s) ? t.$.Ba(o, s) : n[i]);
        return e
    }
    ,
    t.z = m(),
    s = t.z.prototype,
    s.cb = {},
    s.b = function(e, n) {
        var i = this.addEventListener;
        this.addEventListener = Function.prototype,
        t.b(this, e, n),
        this.addEventListener = i
    }
    ,
    s.addEventListener = t.z.prototype.b,
    s.n = function(e, n) {
        t.n(this, e, n)
    }
    ,
    s.removeEventListener = t.z.prototype.n,
    s.N = function(e, n) {
        t.N(this, e, n)
    }
    ,
    s.o = function(e) {
        var n = e.type || e;
        "string" == typeof e && (e = {
            type: n
        }),
        e = t.Qb(e),
        this.cb[n] && this["on" + n] && this["on" + n](e),
        t.o(this, e)
    }
    ,
    s.dispatchEvent = t.z.prototype.o,
    t.a = t.Ha.extend({
        l: function(e, n, i) {
            if (this.d = e,
            this.q = t.i.copy(this.q),
            n = this.options(n),
            this.Ra = n.id || n.el && n.el.id,
            this.Ra || (this.Ra = (e.id && e.id() || "no_player") + "_component_" + t.s++),
            this.ue = n.name || j,
            this.c = n.el || this.f(),
            this.R = [],
            this.gb = {},
            this.hb = {},
            this.Oc(),
            this.I(i),
            n.dd !== l) {
                var o, s;
                this.k().reportUserActivity && (o = t.bind(this.k(), this.k().reportUserActivity),
                this.b("touchstart", function() {
                    o(),
                    this.clearInterval(s),
                    s = this.setInterval(o, 250)
                }),
                e = function() {
                    o(),
                    this.clearInterval(s)
                }
                ,
                this.b("touchmove", o),
                this.b("touchend", e),
                this.b("touchcancel", e))
            }
        }
    }),
    s = t.a.prototype,
    s.dispose = function() {
        if (this.o({
            type: "dispose",
            bubbles: l
        }),
        this.R)
            for (var e = this.R.length - 1; e >= 0; e--)
                this.R[e].dispose && this.R[e].dispose();
        this.hb = this.gb = this.R = j,
        this.n(),
        this.c.parentNode && this.c.parentNode.removeChild(this.c),
        t.cd(this.c),
        this.c = j
    }
    ,
    s.d = f,
    s.k = n("d"),
    s.options = function(e) {
        return e === b ? this.q : this.q = t.$.Ba(this.q, e)
    }
    ,
    s.f = function(e, n) {
        return t.f(e, n)
    }
    ,
    s.v = function(t) {
        var e = this.d.language()
          , n = this.d.languages();
        return n && n[e] && n[e][t] ? n[e][t] : t
    }
    ,
    s.m = n("c"),
    s.xa = function() {
        return this.B || this.c
    }
    ,
    s.id = n("Ra"),
    s.name = n("ue"),
    s.children = n("R"),
    s.be = function(t) {
        return this.gb[t]
    }
    ,
    s.ea = function(t) {
        return this.hb[t]
    }
    ,
    s.ba = function(e, n) {
        var i, o;
        return "string" == typeof e ? (o = e,
        n = n || {},
        i = n.componentClass || t.wa(o),
        n.name = o,
        i = new window.videojs[i](this.d || this,n)) : i = e,
        this.R.push(i),
        "function" == typeof i.id && (this.gb[i.id()] = i),
        (o = o || i.name && i.name()) && (this.hb[o] = i),
        "function" == typeof i.el && i.el() && this.xa().appendChild(i.el()),
        i
    }
    ,
    s.removeChild = function(t) {
        if ("string" == typeof t && (t = this.ea(t)),
        t && this.R) {
            for (var e = l, n = this.R.length - 1; n >= 0; n--)
                if (this.R[n] === t) {
                    e = f,
                    this.R.splice(n, 1);
                    break
                }
            e && (this.gb[t.id()] = j,
            this.hb[t.name()] = j,
            (e = t.m()) && e.parentNode === this.xa() && this.xa().removeChild(t.m()))
        }
    }
    ,
    s.Oc = function() {
        var e, n, i, o, s, r;
        if (e = this,
        n = e.options(),
        i = n.children)
            if (r = function(t, i) {
                n[t] !== b && (i = n[t]),
                i !== l && (e[t] = e.ba(t, i))
            }
            ,
            t.i.isArray(i))
                for (var a = 0; a < i.length; a++)
                    o = i[a],
                    "string" == typeof o ? (s = o,
                    o = {}) : s = o.name,
                    r(s, o);
            else
                t.i.da(i, r)
    }
    ,
    s.V = p(""),
    s.b = function(e, n, i) {
        var o, s, r;
        return "string" == typeof e || t.i.isArray(e) ? t.b(this.c, e, t.bind(this, n)) : (o = t.bind(this, i),
        r = this,
        s = function() {
            r.n(e, n, o)
        }
        ,
        s.s = o.s,
        this.b("dispose", s),
        i = function() {
            r.n("dispose", s)
        }
        ,
        i.s = o.s,
        e.nodeName ? (t.b(e, n, o),
        t.b(e, "dispose", i)) : "function" == typeof e.b && (e.b(n, o),
        e.b("dispose", i))),
        this
    }
    ,
    s.n = function(e, n, i) {
        return !e || "string" == typeof e || t.i.isArray(e) ? t.n(this.c, e, n) : (i = t.bind(this, i),
        this.n("dispose", i),
        e.nodeName ? (t.n(e, n, i),
        t.n(e, "dispose", i)) : (e.n(n, i),
        e.n("dispose", i))),
        this
    }
    ,
    s.N = function(e, n, i) {
        var o, s, r;
        return "string" == typeof e || t.i.isArray(e) ? t.N(this.c, e, t.bind(this, n)) : (o = t.bind(this, i),
        s = this,
        r = function() {
            s.n(e, n, r),
            o.apply(this, arguments)
        }
        ,
        r.s = o.s,
        this.b(e, n, r)),
        this
    }
    ,
    s.o = function(e) {
        return t.o(this.c, e),
        this
    }
    ,
    s.I = function(t) {
        return t && (this.za ? t.call(this) : (this.pb === b && (this.pb = []),
        this.pb.push(t))),
        this
    }
    ,
    s.Xa = function() {
        this.za = f;
        var t = this.pb;
        if (t && 0 < t.length) {
            for (var e = 0, n = t.length; n > e; e++)
                t[e].call(this);
            this.pb = [],
            this.o("ready")
        }
    }
    ,
    s.Qa = function(e) {
        return t.Qa(this.c, e)
    }
    ,
    s.p = function(e) {
        return t.p(this.c, e),
        this
    }
    ,
    s.r = function(e) {
        return t.r(this.c, e),
        this
    }
    ,
    s.show = function() {
        return this.r("vjs-hidden"),
        this
    }
    ,
    s.Y = function() {
        return this.p("vjs-hidden"),
        this
    }
    ,
    s.width = function(t, e) {
        return ca(this, "width", t, e)
    }
    ,
    s.height = function(t, e) {
        return ca(this, "height", t, e)
    }
    ,
    s.Ud = function(t, e) {
        return this.width(t, f).height(e)
    }
    ,
    s.setTimeout = function(e, n) {
        function i() {
            this.clearTimeout(o)
        }
        e = t.bind(this, e);
        var o = setTimeout(e, n);
        return i.s = "vjs-timeout-" + o,
        this.b("dispose", i),
        o
    }
    ,
    s.clearTimeout = function(t) {
        function e() {}
        return clearTimeout(t),
        e.s = "vjs-timeout-" + t,
        this.n("dispose", e),
        t
    }
    ,
    s.setInterval = function(e, n) {
        function i() {
            this.clearInterval(o)
        }
        e = t.bind(this, e);
        var o = setInterval(e, n);
        return i.s = "vjs-interval-" + o,
        this.b("dispose", i),
        o
    }
    ,
    s.clearInterval = function(t) {
        function e() {}
        return clearInterval(t),
        e.s = "vjs-interval-" + t,
        this.n("dispose", e),
        t
    }
    ,
    t.w = t.a.extend({
        l: function(e, n) {
            t.a.call(this, e, n),
            da(this),
            this.b("tap", this.u),
            this.b("click", this.u),
            this.b("focus", this.nb),
            this.b("blur", this.mb)
        }
    }),
    s = t.w.prototype,
    s.f = function(e, n) {
        var i;
        return n = t.i.D({
            className: this.V(),
            role: "button",
            "aria-live": "polite",
            tabIndex: 0
        }, n),
        i = t.a.prototype.f.call(this, e, n),
        n.innerHTML || (this.B = t.f("div", {
            className: "vjs-control-content"
        }),
        this.Lb = t.f("span", {
            className: "vjs-control-text",
            innerHTML: this.v(this.ua) || "Need Text"
        }),
        this.B.appendChild(this.Lb),
        i.appendChild(this.B)),
        i
    }
    ,
    s.V = function() {
        return "vjs-control " + t.a.prototype.V.call(this)
    }
    ,
    s.u = m(),
    s.nb = function() {
        t.b(document, "keydown", t.bind(this, this.la))
    }
    ,
    s.la = function(t) {
        (32 == t.which || 13 == t.which) && (t.preventDefault(),
        this.u())
    }
    ,
    s.mb = function() {
        t.n(document, "keydown", t.bind(this, this.la))
    }
    ,
    t.U = t.a.extend({
        l: function(e, n) {
            t.a.call(this, e, n),
            this.Ld = this.ea(this.q.barName),
            this.handle = this.ea(this.q.handleName),
            this.b("mousedown", this.ob),
            this.b("touchstart", this.ob),
            this.b("focus", this.nb),
            this.b("blur", this.mb),
            this.b("click", this.u),
            this.b(e, "controlsvisible", this.update),
            this.b(e, this.Yc, this.update)
        }
    }),
    s = t.U.prototype,
    s.f = function(e, n) {
        return n = n || {},
        n.className += " vjs-slider",
        n = t.i.D({
            role: "slider",
            "aria-valuenow": 0,
            "aria-valuemin": 0,
            "aria-valuemax": 100,
            tabIndex: 0
        }, n),
        t.a.prototype.f.call(this, e, n)
    }
    ,
    s.ob = function(e) {
        e.preventDefault(),
        t.Md(),
        this.p("vjs-sliding"),
        this.b(document, "mousemove", this.ma),
        this.b(document, "mouseup", this.Ca),
        this.b(document, "touchmove", this.ma),
        this.b(document, "touchend", this.Ca),
        this.ma(e)
    }
    ,
    s.ma = m(),
    s.Ca = function() {
        t.bf(),
        this.r("vjs-sliding"),
        this.n(document, "mousemove", this.ma),
        this.n(document, "mouseup", this.Ca),
        this.n(document, "touchmove", this.ma),
        this.n(document, "touchend", this.Ca),
        this.update()
    }
    ,
    s.update = function() {
        if (this.c) {
            var e, n = this.Tb(), i = this.handle, o = this.Ld;
            if (("number" != typeof n || n !== n || 0 > n || 1 / 0 === n) && (n = 0),
            e = n,
            i) {
                e = this.c.offsetWidth;
                var s = i.m().offsetWidth;
                e = s ? s / e : 0,
                n *= 1 - e,
                e = n + e / 2,
                i.m().style.left = t.round(100 * n, 2) + "%"
            }
            o && (o.m().style.width = t.round(100 * e, 2) + "%")
        }
    }
    ,
    s.nb = function() {
        this.b(document, "keydown", this.la)
    }
    ,
    s.la = function(t) {
        37 == t.which || 40 == t.which ? (t.preventDefault(),
        this.kd()) : (38 == t.which || 39 == t.which) && (t.preventDefault(),
        this.ld())
    }
    ,
    s.mb = function() {
        this.n(document, "keydown", this.la)
    }
    ,
    s.u = function(t) {
        t.stopImmediatePropagation(),
        t.preventDefault()
    }
    ,
    t.ha = t.a.extend(),
    t.ha.prototype.defaultValue = 0,
    t.ha.prototype.f = function(e, n) {
        return n = n || {},
        n.className += " vjs-slider-handle",
        n = t.i.D({
            innerHTML: '<span class="vjs-control-text">' + this.defaultValue + "</span>"
        }, n),
        t.a.prototype.f.call(this, "div", n)
    }
    ,
    t.ra = t.a.extend(),
    t.ra.prototype.f = function() {
        var e = this.options().Dc || "ul";
        return this.B = t.f(e, {
            className: "vjs-menu-content"
        }),
        e = t.a.prototype.f.call(this, "div", {
            append: this.B,
            className: "vjs-menu"
        }),
        e.appendChild(this.B),
        t.b(e, "click", function(t) {
            t.preventDefault(),
            t.stopImmediatePropagation()
        }),
        e
    }
    ,
    t.M = t.w.extend({
        l: function(e, n) {
            t.w.call(this, e, n),
            this.selected(n.selected)
        }
    }),
    t.M.prototype.f = function(e, n) {
        return t.w.prototype.f.call(this, "li", t.i.D({
            className: "vjs-menu-item",
            innerHTML: this.v(this.q.label)
        }, n))
    }
    ,
    t.M.prototype.u = function() {
        this.selected(f)
    }
    ,
    t.M.prototype.selected = function(t) {
        t ? (this.p("vjs-selected"),
        this.c.setAttribute("aria-selected", f)) : (this.r("vjs-selected"),
        this.c.setAttribute("aria-selected", l))
    }
    ,
    t.O = t.w.extend({
        l: function(e, n) {
            t.w.call(this, e, n),
            this.update(),
            this.b("keydown", this.la),
            this.c.setAttribute("aria-haspopup", f),
            this.c.setAttribute("role", "button")
        }
    }),
    s = t.O.prototype,
    s.update = function() {
        var t = this.Ma();
        this.Aa && this.removeChild(this.Aa),
        this.Aa = t,
        this.ba(t),
        this.H && 0 === this.H.length ? this.Y() : this.H && 1 < this.H.length && this.show()
    }
    ,
    s.Ka = l,
    s.Ma = function() {
        var e = new t.ra(this.d);
        if (this.options().title && e.xa().appendChild(t.f("li", {
            className: "vjs-menu-title",
            innerHTML: t.wa(this.options().title),
            Xe: -1
        })),
        this.H = this.createItems())
            for (var n = 0; n < this.H.length; n++)
                fa(e, this.H[n]);
        return e
    }
    ,
    s.La = m(),
    s.V = function() {
        return this.className + " vjs-menu-button " + t.w.prototype.V.call(this)
    }
    ,
    s.nb = m(),
    s.mb = m(),
    s.u = function() {
        this.N("mouseout", t.bind(this, function() {
            G(this.Aa),
            this.c.blur()
        })),
        this.Ka ? H(this) : ga(this)
    }
    ,
    s.la = function(t) {
        32 == t.which || 13 == t.which ? (this.Ka ? H(this) : ga(this),
        t.preventDefault()) : 27 == t.which && (this.Ka && H(this),
        t.preventDefault())
    }
    ,
    t.J = function(e) {
        "number" == typeof e ? this.code = e : "string" == typeof e ? this.message = e : "object" == typeof e && t.i.D(this, e),
        this.message || (this.message = t.J.Td[this.code] || "")
    }
    ,
    t.J.prototype.code = 0,
    t.J.prototype.message = "",
    t.J.prototype.status = j,
    t.J.jb = "MEDIA_ERR_CUSTOM MEDIA_ERR_ABORTED MEDIA_ERR_NETWORK MEDIA_ERR_DECODE MEDIA_ERR_SRC_NOT_SUPPORTED MEDIA_ERR_ENCRYPTED".split(" "),
    t.J.Td = {
        1: "You aborted the video playback",
        2: "A network error caused the video download to fail part-way.",
        3: "The video playback was aborted due to a corruption problem or because the video used features your browser did not support.",
        4: "The video could not be loaded, because the format is not supported.",
        5: "The video is encrypted and we do not have the keys to decrypt it.",
        6: "Video doesn't exist.",
        7: "Unauthorized devices.",
        8: "Duplicate login.",
        9: "To access the video, please login",
        10: "The video playback was aborted due to a corruption problem.",
        11: "Our Services are available in Taiwan.",
        12: "Oops, something went wrong.",
        13: "Sorry, you need to register for three months to use the service.",
        14: "Paid Member only."
    };
    for (var I = 0; I < t.J.jb.length; I++)
        t.J[t.J.jb[I]] = I,
        t.J.prototype[t.J.jb[I]] = I;
    var J, ha, K, L;
    for (J = ["requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror".split(" "), "webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror".split(" "), "webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror".split(" "), "mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror".split(" "), "msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError".split(" ")],
    ha = J[0],
    L = 0; L < J.length; L++)
        if (J[L][1]in document) {
            K = J[L];
            break
        }
    if (K)
        for (t.eb.Sb = {},
        L = 0; L < K.length; L++)
            t.eb.Sb[ha[L]] = K[L];
    t.Player = t.a.extend({
        l: function(e, n, i) {
            this.L = e,
            e.id = e.id || "vjs_video_" + t.s++,
            this.Ye = e && t.Pa(e),
            n = t.i.D(ia(e), n),
            this.Tc = n.language || t.options.language,
            this.oe = n.languages || t.options.languages,
            this.K = {},
            this.Zc = n.poster || "",
            this.Mb = !!n.controls,
            e.controls = l,
            n.dd = l,
            ja(this, "audio" === this.L.nodeName.toLowerCase()),
            t.a.call(this, this, n, i),
            this.controls() ? this.p("vjs-controls-enabled") : this.p("vjs-controls-disabled"),
            ja(this) && this.p("vjs-audio"),
            t.Da[this.Ra] = this,
            n.plugins && t.i.da(n.plugins, function(t, e) {
                this[t](e)
            }, this);
            var o, s, r, a, c;
            o = t.bind(this, this.reportUserActivity),
            this.b("mousedown", function() {
                o(),
                this.clearInterval(s),
                s = this.setInterval(o, 50)
            }),
            this.b("mousemove", function(t) {
                (t.screenX != a || t.screenY != c) && (a = t.screenX,
                c = t.screenY,
                o())
            }),
            this.b("mouseup", function() {
                o(),
                this.clearInterval(s)
            }),
            this.b("keydown", o),
            this.b("keyup", o),
            this.setInterval(function() {
                if (this.Ga) {
                    this.Ga = l,
                    this.userActive(f),
                    this.clearTimeout(r);
                    var t = this.options().inactivityTimeout;
                    t > 0 && (r = this.setTimeout(function() {
                        this.Ga || this.userActive(l)
                    }, t))
                }
            }, 50)
        }
    }),
    s = t.Player.prototype,
    s.language = function(t) {
        return t === b ? this.Tc : (this.Tc = t,
        this)
    }
    ,
    s.languages = n("oe"),
    s.q = t.options,
    s.dispose = function() {
        this.o("dispose"),
        this.n("dispose"),
        t.Da[this.Ra] = j,
        this.L && this.L.player && (this.L.player = j),
        this.c && this.c.player && (this.c.player = j),
        this.h && this.h.dispose(),
        t.a.prototype.dispose.call(this)
    }
    ,
    s.f = function() {
        var e, n = this.c = t.a.prototype.f.call(this, "div"), i = this.L;
        return i.removeAttribute("width"),
        i.removeAttribute("height"),
        e = t.Pa(i),
        t.i.da(e, function(t) {
            "class" == t ? n.className = e[t] : n.setAttribute(t, e[t])
        }),
        i.id += "_html5_api",
        i.className = "vjs-tech",
        i.player = n.player = this,
        this.p("vjs-paused"),
        this.width(this.q.width, f),
        this.height(this.q.height, f),
        i.he = i.networkState,
        i.parentNode && i.parentNode.insertBefore(n, i),
        t.Vb(i, n),
        this.c = n,
        this.b("loadstart", this.ye),
        this.b("waiting", this.Ee),
        this.b(["canplay", "canplaythrough", "playing", "ended"], this.De),
        this.b("seeking", this.Be),
        this.b("seeked", this.Ae),
        this.b("ended", this.ve),
        this.b("play", this.ac),
        this.b("firstplay", this.we),
        this.b("pause", this.$b),
        this.b("progress", this.ze),
        this.b("durationchange", this.Wc),
        this.b("fullscreenchange", this.xe),
        n
    }
    ,
    s.ye = function() {
        this.r("vjs-ended"),
        this.error(j),
        this.paused() ? la(this, l) : this.o("firstplay")
    }
    ,
    s.Nc = l,
    s.ac = function() {
        this.r("vjs-ended"),
        this.r("vjs-paused"),
        this.p("vjs-playing"),
        la(this, f)
    }
    ,
    s.Ee = function() {
        this.p("vjs-waiting")
    }
    ,
    s.De = function() {
        this.r("vjs-waiting")
    }
    ,
    s.Be = function() {
        this.p("vjs-seeking")
    }
    ,
    s.Ae = function() {
        this.r("vjs-seeking")
    }
    ,
    s.we = function() {
        this.q.starttime && this.currentTime(this.q.starttime),
        this.p("vjs-has-started")
    }
    ,
    s.$b = function() {
        this.r("vjs-playing"),
        this.p("vjs-paused")
    }
    ,
    s.ze = function() {
        1 == this.bufferedPercent() && this.o("loadedalldata")
    }
    ,
    s.ve = function() {
        this.p("vjs-ended"),
        this.q.loop ? (this.currentTime(0),
        this.play()) : this.paused() || this.pause()
    }
    ,
    s.Wc = function() {
        var t = M(this, "duration");
        t && (0 > t && (t = 1 / 0),
        this.duration(t),
        1 / 0 === t ? this.p("vjs-live") : this.r("vjs-live"))
    }
    ,
    s.xe = function() {
        this.isFullscreen() ? this.p("vjs-fullscreen") : this.r("vjs-fullscreen")
    }
    ,
    s.play = function() {
        return N(this, "play"),
        this
    }
    ,
    s.pause = function() {
        return N(this, "pause"),
        this
    }
    ,
    s.paused = function() {
        return M(this, "paused") === l ? l : f
    }
    ,
    s.currentTime = function(t) {
        return t !== b ? (N(this, "setCurrentTime", t),
        this) : this.K.currentTime = M(this, "currentTime") || 0
    }
    ,
    s.duration = function(t) {
        return t !== b ? (this.K.duration = parseFloat(t),
        this) : (this.K.duration === b && this.Wc(),
        this.K.duration || 0)
    }
    ,
    s.remainingTime = function() {
        return this.duration() - this.currentTime()
    }
    ,
    s.buffered = function() {
        var e = M(this, "buffered");
        return e && e.length || (e = t.ya(0, 0)),
        e
    }
    ,
    s.bufferedPercent = function() {
        var t, e, n = this.duration(), i = this.buffered(), o = 0;
        if (!n)
            return 0;
        for (var s = 0; s < i.length; s++)
            t = i.start(s),
            e = i.end(s),
            e > n && (e = n),
            o += e - t;
        return o / n
    }
    ,
    s.volume = function(e) {
        return e !== b ? (e = Math.max(0, Math.min(1, parseFloat(e))),
        this.K.volume = e,
        N(this, "setVolume", e),
        t.Ne(e),
        this) : (e = parseFloat(M(this, "volume")),
        isNaN(e) ? 1 : e)
    }
    ,
    s.muted = function(t) {
        return t !== b ? (N(this, "setMuted", t),
        this) : M(this, "muted") || l
    }
    ,
    s.Ua = function() {
        return M(this, "supportsFullScreen") || l
    }
    ,
    s.Qc = l,
    s.isFullscreen = function(t) {
        return t !== b ? (this.Qc = !!t,
        this) : this.Qc
    }
    ,
    s.isFullScreen = function(e) {
        return t.log.warn('player.isFullScreen() has been deprecated, use player.isFullscreen() with a lowercase "s")'),
        this.isFullscreen(e)
    }
    ,
    s.requestFullscreen = function() {
        var e = t.eb.Sb;
        return this.isFullscreen(f),
        e ? (t.b(document, e.fullscreenchange, t.bind(this, function(n) {
            this.isFullscreen(document[e.fullscreenElement]),
            this.isFullscreen() === l && t.n(document, e.fullscreenchange, arguments.callee),
            this.o("fullscreenchange")
        })),
        this.c[e.requestFullscreen]()) : this.h.Ua() ? N(this, "enterFullScreen") : (this.Jc(),
        this.o("fullscreenchange")),
        this
    }
    ,
    s.requestFullScreen = function() {
        return t.log.warn('player.requestFullScreen() has been deprecated, use player.requestFullscreen() with a lowercase "s")'),
        this.requestFullscreen()
    }
    ,
    s.exitFullscreen = function() {
        var e = t.eb.Sb;
        return this.isFullscreen(l),
        e ? document[e.exitFullscreen]() : this.h.Ua() ? N(this, "exitFullScreen") : (this.Ob(),
        this.o("fullscreenchange")),
        this
    }
    ,
    s.cancelFullScreen = function() {
        return t.log.warn("player.cancelFullScreen() has been deprecated, use player.exitFullscreen()"),
        this.exitFullscreen()
    }
    ,
    s.Jc = function() {
        this.ke = f,
        this.Vd = document.documentElement.style.overflow,
        t.b(document, "keydown", t.bind(this, this.Kc)),
        document.documentElement.style.overflow = "hidden",
        t.p(document.body, "vjs-full-window"),
        this.o("enterFullWindow")
    }
    ,
    s.Kc = function(t) {
        27 === t.keyCode && (this.isFullscreen() === f ? this.exitFullscreen() : this.Ob())
    }
    ,
    s.Ob = function() {
        this.ke = l,
        t.n(document, "keydown", this.Kc),
        document.documentElement.style.overflow = this.Vd,
        t.r(document.body, "vjs-full-window"),
        this.o("exitFullWindow")
    }
    ,
    s.selectSource = function(e) {
        for (var n = 0, i = this.q.techOrder; n < i.length; n++) {
            var o = t.wa(i[n])
              , s = window.videojs[o];
            if (s) {
                if (s.isSupported())
                    for (var r = 0, a = e; r < a.length; r++) {
                        var c = a[r];
                        if (s.canPlaySource(c))
                            return {
                                source: c,
                                h: o
                            }
                    }
            } else
                t.log.error('The "' + o + '" tech is undefined. Skipped browser support check for that tech.')
        }
        return l
    }
    ,
    s.src = function(e) {
        return e === b ? M(this, "src") : (t.i.isArray(e) ? ma(this, e) : "string" == typeof e ? this.src({
            src: e
        }) : e instanceof Object && (e.type && !window.videojs[this.Va].canPlaySource(e) ? ma(this, [e]) : (this.K.src = e.src,
        this.Gc = e.type || "",
        this.I(function() {
            window.videojs[this.Va].prototype.hasOwnProperty("setSource") ? N(this, "setSource", e) : N(this, "src", e.src),
            "auto" == this.q.preload && this.load(),
            this.q.autoplay && this.play()
        }))),
        this)
    }
    ,
    s.load = function() {
        return N(this, "load"),
        this
    }
    ,
    s.currentSrc = function() {
        return M(this, "currentSrc") || this.K.src || ""
    }
    ,
    s.Rd = function() {
        return this.Gc || ""
    }
    ,
    s.Sa = function(t) {
        return t !== b ? (N(this, "setPreload", t),
        this.q.preload = t,
        this) : M(this, "preload")
    }
    ,
    s.autoplay = function(t) {
        return t !== b ? (N(this, "setAutoplay", t),
        this.q.autoplay = t,
        this) : M(this, "autoplay")
    }
    ,
    s.loop = function(t) {
        return t !== b ? (N(this, "setLoop", t),
        this.q.loop = t,
        this) : M(this, "loop")
    }
    ,
    s.poster = function(t) {
        return t === b ? this.Zc : (t || (t = ""),
        this.Zc = t,
        N(this, "setPoster", t),
        this.o("posterchange"),
        this)
    }
    ,
    s.controls = function(t) {
        return t !== b ? (t = !!t,
        this.Mb !== t && ((this.Mb = t) ? (this.r("vjs-controls-disabled"),
        this.p("vjs-controls-enabled"),
        this.o("controlsenabled")) : (this.r("vjs-controls-enabled"),
        this.p("vjs-controls-disabled"),
        this.o("controlsdisabled"))),
        this) : this.Mb
    }
    ,
    t.Player.prototype.fc,
    s = t.Player.prototype,
    s.usingNativeControls = function(t) {
        return t !== b ? (t = !!t,
        this.fc !== t && ((this.fc = t) ? (this.p("vjs-using-native-controls"),
        this.o("usingnativecontrols")) : (this.r("vjs-using-native-controls"),
        this.o("usingcustomcontrols"))),
        this) : this.fc
    }
    ,
    s.ka = j,
    s.error = function(e) {
        return e === b ? this.ka : e === j ? (this.ka = e,
        this.r("vjs-error"),
        this) : (this.ka = e instanceof t.J ? e : new t.J(e),
        this.o("error"),
        this.p("vjs-error"),
        t.log.error("(CODE:" + this.ka.code + " " + t.J.jb[this.ka.code] + ")", this.ka.message, this.ka),
        this)
    }
    ,
    s.ended = function() {
        return M(this, "ended")
    }
    ,
    s.seeking = function() {
        return M(this, "seeking")
    }
    ,
    s.seekable = function() {
        return M(this, "seekable")
    }
    ,
    s.Ga = f,
    s.reportUserActivity = function() {
        this.Ga = f
    }
    ,
    s.ec = f,
    s.userActive = function(t) {
        return t !== b ? (t = !!t,
        t !== this.ec && ((this.ec = t) ? (this.Ga = f,
        this.r("vjs-user-inactive"),
        this.p("vjs-user-active"),
        this.o("useractive")) : (this.Ga = l,
        this.h && this.h.N("mousemove", function(t) {
            t.stopPropagation(),
            t.preventDefault()
        }),
        this.r("vjs-user-active"),
        this.p("vjs-user-inactive"),
        this.o("userinactive"))),
        this) : this.ec
    }
    ,
    s.playbackRate = function(t) {
        return t !== b ? (N(this, "setPlaybackRate", t),
        this) : this.h && this.h.featuresPlaybackRate ? M(this, "playbackRate") : 1
    }
    ,
    s.Pc = l,
    s.networkState = function() {
        return M(this, "networkState")
    }
    ,
    s.readyState = function() {
        return M(this, "readyState")
    }
    ,
    s.textTracks = function() {
        return this.h && this.h.textTracks()
    }
    ,
    s.Z = function() {
        return this.h && this.h.remoteTextTracks()
    }
    ,
    s.addTextTrack = function(t, e, n) {
        return this.h && this.h.addTextTrack(t, e, n)
    }
    ,
    s.ia = function(t) {
        return this.h && this.h.addRemoteTextTrack(t)
    }
    ,
    s.Ea = function(t) {
        this.h && this.h.removeRemoteTextTrack(t)
    }
    ,
    t.wb = t.a.extend(),
    t.wb.prototype.q = {
        xf: "play",
        children: {
            playToggle: {},
            currentTimeDisplay: {},
            timeDivider: {},
            durationDisplay: {},
            remainingTimeDisplay: {},
            liveDisplay: {},
            progressControl: {},
            fullscreenToggle: {},
            volumeControl: {},
            muteToggle: {},
            playbackRateMenuButton: {},
            subtitlesButton: {},
            captionsButton: {},
            chaptersButton: {}
        }
    },
    t.wb.prototype.f = function() {
        return t.f("div", {
            className: "vjs-control-bar"
        })
    }
    ,
    t.lc = t.a.extend({
        l: function(e, n) {
            t.a.call(this, e, n)
        }
    }),
    t.lc.prototype.f = function() {
        var e = t.a.prototype.f.call(this, "div", {
            className: "vjs-live-controls vjs-control"
        });
        return this.B = t.f("div", {
            className: "vjs-live-display",
            innerHTML: '<span class="vjs-control-text">' + this.v("Stream Type") + "</span>" + this.v("LIVE"),
            "aria-live": "off"
        }),
        e.appendChild(this.B),
        e
    }
    ,
    t.oc = t.w.extend({
        l: function(e, n) {
            t.w.call(this, e, n),
            this.b(e, "play", this.ac),
            this.b(e, "pause", this.$b)
        }
    }),
    s = t.oc.prototype,
    s.ua = "Play",
    s.V = function() {
        return "vjs-play-control " + t.w.prototype.V.call(this)
    }
    ,
    s.u = function() {
        this.d.paused() ? this.d.play() : this.d.pause()
    }
    ,
    s.ac = function() {
        this.r("vjs-paused"),
        this.p("vjs-playing"),
        this.c.children[0].children[0].innerHTML = this.v("Pause")
    }
    ,
    s.$b = function() {
        this.r("vjs-playing"),
        this.p("vjs-paused"),
        this.c.children[0].children[0].innerHTML = this.v("Play")
    }
    ,
    t.xb = t.a.extend({
        l: function(e, n) {
            t.a.call(this, e, n),
            this.b(e, "timeupdate", this.ga)
        }
    }),
    t.xb.prototype.f = function() {
        var e = t.a.prototype.f.call(this, "div", {
            className: "vjs-current-time vjs-time-controls vjs-control"
        });
        return this.B = t.f("div", {
            className: "vjs-current-time-display",
            innerHTML: '<span class="vjs-control-text">Current Time </span>0:00',
            "aria-live": "off"
        }),
        e.appendChild(this.B),
        e
    }
    ,
    t.xb.prototype.ga = function() {
        var e = this.d.qb ? this.d.K.currentTime : this.d.currentTime();
        this.B.innerHTML = '<span class="vjs-control-text">' + this.v("Current Time") + "</span> " + t.Oa(e, this.d.duration())
    }
    ,
    t.yb = t.a.extend({
        l: function(e, n) {
            t.a.call(this, e, n),
            this.b(e, "timeupdate", this.ga),
            this.b(e, "loadedmetadata", this.ga)
        }
    }),
    t.yb.prototype.f = function() {
        var e = t.a.prototype.f.call(this, "div", {
            className: "vjs-duration vjs-time-controls vjs-control"
        });
        return this.B = t.f("div", {
            className: "vjs-duration-display",
            innerHTML: '<span class="vjs-control-text">' + this.v("Duration Time") + "</span> 0:00",
            "aria-live": "off"
        }),
        e.appendChild(this.B),
        e
    }
    ,
    t.yb.prototype.ga = function() {
        var e = this.d.duration();
        e && (this.B.innerHTML = '<span class="vjs-control-text">' + this.v("Duration Time") + "</span> " + t.Oa(e))
    }
    ,
    t.uc = t.a.extend({
        l: function(e, n) {
            t.a.call(this, e, n)
        }
    }),
    t.uc.prototype.f = function() {
        return t.a.prototype.f.call(this, "div", {
            className: "vjs-time-divider",
            innerHTML: "<div><span>/</span></div>"
        })
    }
    ,
    t.Fb = t.a.extend({
        l: function(e, n) {
            t.a.call(this, e, n),
            this.b(e, "timeupdate", this.ga)
        }
    }),
    t.Fb.prototype.f = function() {
        var e = t.a.prototype.f.call(this, "div", {
            className: "vjs-remaining-time vjs-time-controls vjs-control"
        });
        return this.B = t.f("div", {
            className: "vjs-remaining-time-display",
            innerHTML: '<span class="vjs-control-text">' + this.v("Remaining Time") + "</span> -0:00",
            "aria-live": "off"
        }),
        e.appendChild(this.B),
        e
    }
    ,
    t.Fb.prototype.ga = function() {
        this.d.duration() && (this.B.innerHTML = '<span class="vjs-control-text">' + this.v("Remaining Time") + "</span> -" + t.Oa(this.d.remainingTime()))
    }
    ,
    t.$a = t.w.extend({
        l: function(e, n) {
            t.w.call(this, e, n)
        }
    }),
    t.$a.prototype.ua = "Fullscreen",
    t.$a.prototype.V = function() {
        return "vjs-fullscreen-control " + t.w.prototype.V.call(this)
    }
    ,
    t.$a.prototype.u = function() {
        this.d.isFullscreen() ? (this.d.exitFullscreen(),
        this.Lb.innerHTML = this.v("Fullscreen")) : (this.d.requestFullscreen(),
        this.Lb.innerHTML = this.v("Non-Fullscreen"))
    }
    ,
    t.Eb = t.a.extend({
        l: function(e, n) {
            t.a.call(this, e, n)
        }
    }),
    t.Eb.prototype.q = {
        children: {
            seekBar: {}
        }
    },
    t.Eb.prototype.f = function() {
        return t.a.prototype.f.call(this, "div", {
            className: "vjs-progress-control vjs-control"
        })
    }
    ,
    t.rc = t.U.extend({
        l: function(e, n) {
            t.U.call(this, e, n),
            this.b(e, "timeupdate", this.Fa),
            e.I(t.bind(this, this.Fa))
        }
    }),
    s = t.rc.prototype,
    s.q = {
        children: {
            loadProgressBar: {},
            playProgressBar: {},
            seekHandle: {}
        },
        barName: "playProgressBar",
        handleName: "seekHandle"
    },
    s.Yc = "timeupdate",
    s.f = function() {
        return t.U.prototype.f.call(this, "div", {
            className: "vjs-progress-holder",
            "aria-label": "video progress bar"
        })
    }
    ,
    s.Fa = function() {
        var e = this.d.qb ? this.d.K.currentTime : this.d.currentTime();
        this.c.setAttribute("aria-valuenow", t.round(100 * this.Tb(), 2)),
        this.c.setAttribute("aria-valuetext", t.Oa(e, this.d.duration()))
    }
    ,
    s.Tb = function() {
        return this.d.currentTime() / this.d.duration()
    }
    ,
    s.ob = function(e) {
        t.U.prototype.ob.call(this, e),
        this.d.qb = f,
        this.d.p("vjs-scrubbing"),
        this.ef = !this.d.paused(),
        this.d.pause()
    }
    ,
    s.ma = function(t) {
        t = ea(this, t) * this.d.duration(),
        t == this.d.duration() && (t -= .1),
        this.d.currentTime(t)
    }
    ,
    s.Ca = function(e) {
        t.U.prototype.Ca.call(this, e),
        this.d.qb = l,
        this.d.r("vjs-scrubbing"),
        this.ef && this.d.play()
    }
    ,
    s.ld = function() {
        this.d.currentTime(this.d.currentTime() + 5)
    }
    ,
    s.kd = function() {
        this.d.currentTime(this.d.currentTime() - 5)
    }
    ,
    t.Bb = t.a.extend({
        l: function(e, n) {
            t.a.call(this, e, n),
            this.b(e, "progress", this.update)
        }
    }),
    t.Bb.prototype.f = function() {
        return t.a.prototype.f.call(this, "div", {
            className: "vjs-load-progress",
            innerHTML: '<span class="vjs-control-text"><span>' + this.v("Loaded") + "</span>: 0%</span>"
        })
    }
    ,
    t.Bb.prototype.update = function() {
        var e, n, i, o, s = this.d.buffered();
        e = this.d.duration();
        var r, a = this.d;
        for (r = a.buffered(),
        a = a.duration(),
        r = r.end(r.length - 1),
        r > a && (r = a),
        a = this.c.children,
        this.c.style.width = 100 * (r / e || 0) + "%",
        e = 0; e < s.length; e++)
            n = s.start(e),
            i = s.end(e),
            (o = a[e]) || (o = this.c.appendChild(t.f())),
            o.style.left = 100 * (n / r || 0) + "%",
            o.style.width = 100 * ((i - n) / r || 0) + "%";
        for (e = a.length; e > s.length; e--)
            this.c.removeChild(a[e - 1])
    }
    ,
    t.nc = t.a.extend({
        l: function(e, n) {
            t.a.call(this, e, n)
        }
    }),
    t.nc.prototype.f = function() {
        return t.a.prototype.f.call(this, "div", {
            className: "vjs-play-progress",
            innerHTML: '<span class="vjs-control-text"><span>' + this.v("Progress") + "</span>: 0%</span>"
        })
    }
    ,
    t.ab = t.ha.extend({
        l: function(e, n) {
            t.ha.call(this, e, n),
            this.b(e, "timeupdate", this.ga)
        }
    }),
    t.ab.prototype.defaultValue = "00:00",
    t.ab.prototype.f = function() {
        return t.ha.prototype.f.call(this, "div", {
            className: "vjs-seek-handle",
            "aria-live": "off"
        })
    }
    ,
    t.ab.prototype.ga = function() {
        var e = this.d.qb ? this.d.K.currentTime : this.d.currentTime();
        this.c.innerHTML = '<span class="vjs-control-text">' + t.Oa(e, this.d.duration()) + "</span>"
    }
    ,
    t.Ib = t.a.extend({
        l: function(e, n) {
            t.a.call(this, e, n),
            e.h && e.h.featuresVolumeControl === l && this.p("vjs-hidden"),
            this.b(e, "loadstart", function() {
                e.h.featuresVolumeControl === l ? this.p("vjs-hidden") : this.r("vjs-hidden")
            })
        }
    }),
    t.Ib.prototype.q = {
        children: {
            volumeBar: {}
        }
    },
    t.Ib.prototype.f = function() {
        return t.a.prototype.f.call(this, "div", {
            className: "vjs-volume-control vjs-control"
        })
    }
    ,
    t.Hb = t.U.extend({
        l: function(e, n) {
            t.U.call(this, e, n),
            this.b(e, "volumechange", this.Fa),
            e.I(t.bind(this, this.Fa))
        }
    }),
    s = t.Hb.prototype,
    s.Fa = function() {
        this.c.setAttribute("aria-valuenow", t.round(100 * this.d.volume(), 2)),
        this.c.setAttribute("aria-valuetext", t.round(100 * this.d.volume(), 2) + "%")
    }
    ,
    s.q = {
        children: {
            volumeLevel: {},
            volumeHandle: {}
        },
        barName: "volumeLevel",
        handleName: "volumeHandle"
    },
    s.Yc = "volumechange",
    s.f = function() {
        return t.U.prototype.f.call(this, "div", {
            className: "vjs-volume-bar",
            "aria-label": "volume level"
        })
    }
    ,
    s.ma = function(t) {
        this.d.muted() && this.d.muted(l),
        this.d.volume(ea(this, t))
    }
    ,
    s.Tb = function() {
        return this.d.muted() ? 0 : this.d.volume()
    }
    ,
    s.ld = function() {
        this.d.volume(this.d.volume() + .1)
    }
    ,
    s.kd = function() {
        this.d.volume(this.d.volume() - .1)
    }
    ,
    t.vc = t.a.extend({
        l: function(e, n) {
            t.a.call(this, e, n)
        }
    }),
    t.vc.prototype.f = function() {
        return t.a.prototype.f.call(this, "div", {
            className: "vjs-volume-level",
            innerHTML: '<span class="vjs-control-text"></span>'
        })
    }
    ,
    t.Jb = t.ha.extend(),
    t.Jb.prototype.defaultValue = "00:00",
    t.Jb.prototype.f = function() {
        return t.ha.prototype.f.call(this, "div", {
            className: "vjs-volume-handle"
        })
    }
    ,
    t.sa = t.w.extend({
        l: function(e, n) {
            t.w.call(this, e, n),
            this.b(e, "volumechange", this.update),
            e.h && e.h.featuresVolumeControl === l && this.p("vjs-hidden"),
            this.b(e, "loadstart", function() {
                e.h.featuresVolumeControl === l ? this.p("vjs-hidden") : this.r("vjs-hidden")
            })
        }
    }),
    t.sa.prototype.f = function() {
        return t.w.prototype.f.call(this, "div", {
            className: "vjs-mute-control vjs-control",
            innerHTML: '<div><span class="vjs-control-text">' + this.v("Mute") + "</span></div>"
        })
    }
    ,
    t.sa.prototype.u = function() {
        this.d.muted(this.d.muted() ? l : f)
    }
    ,
    t.sa.prototype.update = function() {
        var e = this.d.volume()
          , n = 3;
        for (0 === e || this.d.muted() ? n = 0 : .33 > e ? n = 1 : .67 > e && (n = 2),
        this.d.muted() ? this.c.children[0].children[0].innerHTML != this.v("Unmute") && (this.c.children[0].children[0].innerHTML = this.v("Unmute")) : this.c.children[0].children[0].innerHTML != this.v("Mute") && (this.c.children[0].children[0].innerHTML = this.v("Mute")),
        e = 0; 4 > e; e++)
            t.r(this.c, "vjs-vol-" + e);
        t.p(this.c, "vjs-vol-" + n)
    }
    ,
    t.Ia = t.O.extend({
        l: function(e, n) {
            t.O.call(this, e, n),
            this.b(e, "volumechange", this.ff),
            e.h && e.h.featuresVolumeControl === l && this.p("vjs-hidden"),
            this.b(e, "loadstart", function() {
                e.h.featuresVolumeControl === l ? this.p("vjs-hidden") : this.r("vjs-hidden")
            }),
            this.p("vjs-menu-button")
        }
    }),
    t.Ia.prototype.Ma = function() {
        var e = new t.ra(this.d,{
            Dc: "div"
        })
          , n = new t.Hb(this.d,this.q.volumeBar);
        return n.b("focus", function() {
            e.p("vjs-lock-showing")
        }),
        n.b("blur", function() {
            G(e)
        }),
        e.ba(n),
        e
    }
    ,
    t.Ia.prototype.u = function() {
        t.sa.prototype.u.call(this),
        t.O.prototype.u.call(this)
    }
    ,
    t.Ia.prototype.f = function() {
        return t.w.prototype.f.call(this, "div", {
            className: "vjs-volume-menu-button vjs-menu-button vjs-control",
            innerHTML: '<div><span class="vjs-control-text">' + this.v("Mute") + "</span></div>"
        })
    }
    ,
    t.Ia.prototype.ff = t.sa.prototype.update,
    t.pc = t.O.extend({
        l: function(e, n) {
            t.O.call(this, e, n),
            this.td(),
            this.sd(),
            this.b(e, "loadstart", this.td),
            this.b(e, "ratechange", this.sd)
        }
    }),
    s = t.pc.prototype,
    s.ua = "Playback Rate",
    s.className = "vjs-playback-rate",
    s.f = function() {
        var e = t.O.prototype.f.call(this);
        return this.Sc = t.f("div", {
            className: "vjs-playback-rate-value",
            innerHTML: 1
        }),
        e.appendChild(this.Sc),
        e
    }
    ,
    s.Ma = function() {
        var e = new t.ra(this.k())
          , n = this.k().options().playbackRates;
        if (n)
            for (var i = n.length - 1; i >= 0; i--)
                e.ba(new t.Db(this.k(),{
                    rate: n[i] + "x"
                }));
        return e
    }
    ,
    s.Fa = function() {
        this.m().setAttribute("aria-valuenow", this.k().playbackRate())
    }
    ,
    s.u = function() {
        for (var t = this.k().playbackRate(), e = this.k().options().playbackRates, n = e[0], i = 0; i < e.length; i++)
            if (e[i] > t) {
                n = e[i];
                break
            }
        this.k().playbackRate(n)
    }
    ,
    s.td = function() {
        na(this) ? this.r("vjs-hidden") : this.p("vjs-hidden")
    }
    ,
    s.sd = function() {
        na(this) && (this.Sc.innerHTML = this.k().playbackRate() + "x")
    }
    ,
    t.Db = t.M.extend({
        Dc: "button",
        l: function(e, n) {
            var i = this.label = n.rate
              , o = this.$c = parseFloat(i, 10);
            n.label = i,
            n.selected = 1 === o,
            t.M.call(this, e, n),
            this.b(e, "ratechange", this.update)
        }
    }),
    t.Db.prototype.u = function() {
        t.M.prototype.u.call(this),
        this.k().playbackRate(this.$c)
    }
    ,
    t.Db.prototype.update = function() {
        this.selected(this.k().playbackRate() == this.$c)
    }
    ,
    t.qc = t.w.extend({
        l: function(e, n) {
            t.w.call(this, e, n),
            this.update(),
            e.b("posterchange", t.bind(this, this.update))
        }
    }),
    s = t.qc.prototype,
    s.dispose = function() {
        this.k().n("posterchange", this.update),
        t.w.prototype.dispose.call(this)
    }
    ,
    s.f = function() {
        var e = t.f("div", {
            className: "vjs-poster",
            tabIndex: -1
        });
        return t.xd || (this.Pb = t.f("img"),
        e.appendChild(this.Pb)),
        e
    }
    ,
    s.update = function() {
        var t = this.k().poster();
        this.oa(t),
        t ? this.show() : this.Y()
    }
    ,
    s.oa = function(t) {
        var e;
        this.Pb ? this.Pb.src = t : (e = "",
        t && (e = 'url("' + t + '")'),
        this.c.style.backgroundImage = e)
    }
    ,
    s.u = function() {
        this.d.play()
    }
    ,
    t.mc = t.a.extend({
        l: function(e, n) {
            t.a.call(this, e, n)
        }
    }),
    t.mc.prototype.f = function() {
        return t.a.prototype.f.call(this, "div", {
            className: "vjs-loading-spinner"
        })
    }
    ,
    t.ub = t.w.extend(),
    t.ub.prototype.f = function() {
        return t.w.prototype.f.call(this, "div", {
            className: "vjs-big-play-button",
            innerHTML: '<span aria-hidden="true"></span>',
            "aria-label": "play video"
        })
    }
    ,
    t.ub.prototype.u = function() {
        this.d.play()
    }
    ,
    t.zb = t.a.extend({
        l: function(e, n) {
            t.a.call(this, e, n),
            this.update(),
            this.b(e, "error", this.update)
        }
    }),
    t.zb.prototype.f = function() {
        var e = t.a.prototype.f.call(this, "div", {
            className: "vjs-error-display"
        });
        return this.B = t.f("div"),
        e.appendChild(this.B),
        e
    }
    ,
    t.zb.prototype.update = function() {
        this.k().error() && (this.B.innerHTML = this.v(this.k().error().message))
    }
    ;
    var O;
    t.j = t.a.extend({
        l: function(e, n, i) {
            n = n || {},
            n.dd = l,
            t.a.call(this, e, n, i),
            this.featuresProgressEvents || this.se(),
            this.featuresTimeupdateEvents || this.te(),
            this.ge(),
            this.featuresNativeTextTracks || this.Wd(),
            this.ie()
        }
    }),
    s = t.j.prototype,
    s.ge = function() {
        var t, e;
        t = this.k(),
        e = function() {
            t.controls() && !t.usingNativeControls() && this.Jd()
        }
        ,
        this.I(e),
        this.b(t, "controlsenabled", e),
        this.b(t, "controlsdisabled", this.Ie),
        this.I(function() {
            this.networkState && 0 < this.networkState() && this.k().o("loadstart")
        })
    }
    ,
    s.Jd = function() {
        var t;
        this.b("mousedown", this.u),
        this.b("touchstart", function() {
            t = this.d.userActive()
        }),
        this.b("touchmove", function() {
            t && this.k().reportUserActivity()
        }),
        this.b("touchend", function(t) {
            t.preventDefault()
        }),
        da(this),
        this.b("tap", this.Ce)
    }
    ,
    s.Ie = function() {
        this.n("tap"),
        this.n("touchstart"),
        this.n("touchmove"),
        this.n("touchleave"),
        this.n("touchcancel"),
        this.n("touchend"),
        this.n("click"),
        this.n("mousedown")
    }
    ,
    s.u = function(t) {
        0 === t.button && this.k().controls() && (this.k().paused() ? this.k().play() : this.k().pause())
    }
    ,
    s.Ce = function() {
        this.k().userActive(!this.k().userActive())
    }
    ,
    s.se = function() {
        this.Uc = f,
        this.af()
    }
    ,
    s.re = function() {
        this.Uc = l,
        this.md()
    }
    ,
    s.af = function() {
        this.He = this.setInterval(function() {
            var t = this.k().bufferedPercent();
            this.Nd != t && this.k().o("progress"),
            this.Nd = t,
            1 === t && this.md()
        }, 500)
    }
    ,
    s.md = function() {
        this.clearInterval(this.He)
    }
    ,
    s.te = function() {
        var t = this.d;
        this.Zb = f,
        this.b(t, "play", this.qd),
        this.b(t, "pause", this.tb),
        this.N("timeupdate", function() {
            this.featuresTimeupdateEvents = f,
            this.Vc()
        })
    }
    ,
    s.Vc = function() {
        var t = this.d;
        this.Zb = l,
        this.tb(),
        this.n(t, "play", this.qd),
        this.n(t, "pause", this.tb)
    }
    ,
    s.qd = function() {
        this.Fc && this.tb(),
        this.Fc = this.setInterval(function() {
            this.k().o("timeupdate")
        }, 250)
    }
    ,
    s.tb = function() {
        this.clearInterval(this.Fc),
        this.k().o("timeupdate")
    }
    ,
    s.dispose = function() {
        this.Uc && this.re(),
        this.Zb && this.Vc(),
        t.a.prototype.dispose.call(this)
    }
    ,
    s.cc = function() {
        this.Zb && this.k().o("timeupdate")
    }
    ,
    s.ie = function() {
        function e() {
            var t = i.ea("textTrackDisplay");
            t && t.C()
        }
        var n, i = this.d;
        (n = this.textTracks()) && (n.addEventListener("removetrack", e),
        n.addEventListener("addtrack", e),
        this.b("dispose", t.bind(this, function() {
            n.removeEventListener("removetrack", e),
            n.removeEventListener("addtrack", e)
        })))
    }
    ,
    s.Wd = function() {
        var e, n, i, o = this.d;
        window.WebVTT || (i = document.createElement("script"),
        i.src = o.options()["vtt.js"] || "../node_modules/vtt.js/dist/vtt.js",
        o.m().appendChild(i),
        window.WebVTT = f),
        (n = this.textTracks()) && (e = function() {
            var e, n, i;
            for (i = o.ea("textTrackDisplay"),
            i.C(),
            e = 0; e < this.length; e++)
                n = this[e],
                n.removeEventListener("cuechange", t.bind(i, i.C)),
                "showing" === n.mode && n.addEventListener("cuechange", t.bind(i, i.C))
        }
        ,
        n.addEventListener("change", e),
        this.b("dispose", t.bind(this, function() {
            n.removeEventListener("change", e)
        })))
    }
    ,
    s.textTracks = function() {
        return this.d.pd = this.d.pd || new t.F,
        this.d.pd
    }
    ,
    s.Z = function() {
        return this.d.ad = this.d.ad || new t.F,
        this.d.ad
    }
    ,
    O = function(e, n, i, o, s) {
        var r = e.textTracks();
        return s = s || {},
        s.kind = n,
        i && (s.label = i),
        o && (s.language = o),
        s.player = e.d,
        e = new t.t(s),
        P(r, e),
        e
    }
    ,
    t.j.prototype.addTextTrack = function(t, e, n) {
        if (!t)
            throw Error("TextTrack kind is required but was not provided");
        return O(this, t, e, n)
    }
    ,
    t.j.prototype.ia = function(t) {
        return t = O(this, t.kind, t.label, t.language, t),
        P(this.Z(), t),
        {
            T: t
        }
    }
    ,
    t.j.prototype.Ea = function(t) {
        Q(this.textTracks(), t),
        Q(this.Z(), t)
    }
    ,
    t.j.prototype.fd = m(),
    t.j.prototype.featuresVolumeControl = f,
    t.j.prototype.featuresFullscreenResize = l,
    t.j.prototype.featuresPlaybackRate = l,
    t.j.prototype.featuresProgressEvents = l,
    t.j.prototype.featuresTimeupdateEvents = l,
    t.j.prototype.featuresNativeTextTracks = l,
    t.j.hc = function(e) {
        e.Ta = function(t, n) {
            var i = e.gd;
            i || (i = e.gd = []),
            n === b && (n = i.length),
            i.splice(n, 0, t)
        }
        ,
        e.rb = function(t) {
            for (var n, i = e.gd || [], o = 0; o < i.length; o++)
                if (n = i[o].fb(t))
                    return i[o];
            return j
        }
        ,
        e.Ac = function(t) {
            var n = e.rb(t);
            return n ? n.fb(t) : ""
        }
        ,
        e.prototype.na = function(n) {
            var i = e.rb(n);
            return i || (e.S ? i = e.S : t.log.error("No source hander found for the current source.")),
            this.ja(),
            this.n("dispose", this.ja),
            this.ib = n,
            this.dc = i.Ub(n, this),
            this.b("dispose", this.ja),
            this
        }
        ,
        e.prototype.ja = function() {
            this.dc && this.dc.dispose && this.dc.dispose()
        }
    }
    ,
    t.media = {},
    t.e = t.j.extend({
        l: function(e, n, i) {
            var o, s, r;
            for ((n.nativeCaptions === l || n.nativeTextTracks === l) && (this.featuresNativeTextTracks = l),
            t.j.call(this, e, n, i),
            i = t.e.Ab.length - 1; i >= 0; i--)
                this.b(t.e.Ab[i], this.Xd);
            if ((n = n.source) && (this.c.currentSrc !== n.src || e.L && 3 === e.L.he) && this.na(n),
            this.c.hasChildNodes()) {
                for (i = this.c.childNodes,
                o = i.length,
                n = []; o--; )
                    s = i[o],
                    r = s.nodeName.toLowerCase(),
                    "track" === r && (this.featuresNativeTextTracks ? P(this.Z(), s.track) : n.push(s));
                for (i = 0; i < n.length; i++)
                    this.c.removeChild(n[i])
            }
            if (this.featuresNativeTextTracks && this.b("loadstart", t.bind(this, this.fe)),
            t.Gb && e.options().nativeControlsForTouch === f) {
                var a, c, u, d;
                a = this,
                c = this.k(),
                n = c.controls(),
                a.c.controls = !!n,
                u = function() {
                    a.c.controls = f
                }
                ,
                d = function() {
                    a.c.controls = l
                }
                ,
                c.b("controlsenabled", u),
                c.b("controlsdisabled", d),
                n = function() {
                    c.n("controlsenabled", u),
                    c.n("controlsdisabled", d)
                }
                ,
                a.b("dispose", n),
                c.b("usingcustomcontrols", n),
                c.usingNativeControls(f)
            }
            e.I(function() {
                this.src() && this.L && this.q.autoplay && this.paused() && (delete this.L.poster,
                this.play())
            }),
            this.Xa()
        }
    }),
    s = t.e.prototype,
    s.dispose = function() {
        t.e.Nb(this.c),
        t.j.prototype.dispose.call(this)
    }
    ,
    s.f = function() {
        var e, n, i, o = this.d, s = o.L;
        if (!s || this.movingMediaElementInDOM === l) {
            if (s ? (i = s.cloneNode(l),
            t.e.Nb(s),
            s = i,
            o.L = j) : (s = t.f("video"),
            i = videojs.$.Ba({}, o.Ye),
            (!t.Gb || o.options().nativeControlsForTouch !== f) && delete i.controls,
            t.ed(s, t.i.D(i, {
                id: o.id() + "_html5_api",
                "class": "vjs-tech"
            }))),
            s.player = o,
            o.q.rd)
                for (i = 0; i < o.q.rd.length; i++)
                    e = o.q.rd[i],
                    n = document.createElement("track"),
                    n.Xb = e.Xb,
                    n.label = e.label,
                    n.jd = e.jd,
                    n.src = e.src,
                    "default"in e && n.setAttribute("default", "default"),
                    s.appendChild(n);
            t.Vb(s, o.m())
        }
        for (e = ["autoplay", "preload", "loop", "muted"],
        i = e.length - 1; i >= 0; i--) {
            n = e[i];
            var r = {};
            "undefined" != typeof o.q[n] && (r[n] = o.q[n]),
            t.ed(s, r)
        }
        return s
    }
    ,
    s.fe = function() {
        for (var t, e = this.c.querySelectorAll("track"), n = e.length, i = {
            captions: 1,
            subtitles: 1
        }; n--; )
            (t = e[n].T) && t.kind in i && !e[n]["default"] && (t.mode = "disabled")
    }
    ,
    s.Xd = function(t) {
        "error" == t.type && this.error() ? this.k().error(this.error().code) : (t.bubbles = l,
        this.k().o(t))
    }
    ,
    s.play = function() {
        this.c.play()
    }
    ,
    s.pause = function() {
        this.c.pause()
    }
    ,
    s.paused = function() {
        return this.c.paused
    }
    ,
    s.currentTime = function() {
        return this.c.currentTime
    }
    ,
    s.cc = function(e) {
        try {
            this.c.currentTime = e
        } catch (n) {
            t.log(n, "Video is not ready. (Video.js)")
        }
    }
    ,
    s.duration = function() {
        return this.c.duration || 0
    }
    ,
    s.buffered = function() {
        return this.c.buffered
    }
    ,
    s.volume = function() {
        return this.c.volume
    }
    ,
    s.Te = function(t) {
        this.c.volume = t
    }
    ,
    s.muted = function() {
        return this.c.muted
    }
    ,
    s.Pe = function(t) {
        this.c.muted = t
    }
    ,
    s.width = function() {
        return this.c.offsetWidth
    }
    ,
    s.height = function() {
        return this.c.offsetHeight
    }
    ,
    s.Ua = function() {
        return "function" != typeof this.c.webkitEnterFullScreen || !/Android/.test(t.P) && /Chrome|Mac OS X 10.5/.test(t.P) ? l : f
    }
    ,
    s.Ic = function() {
        var t = this.c;
        "webkitDisplayingFullscreen"in t && this.N("webkitbeginfullscreen", function() {
            this.d.isFullscreen(f),
            this.N("webkitendfullscreen", function() {
                this.d.isFullscreen(l),
                this.d.o("fullscreenchange")
            }),
            this.d.o("fullscreenchange")
        }),
        t.paused && t.networkState <= t.kf ? (this.c.play(),
        this.setTimeout(function() {
            t.pause(),
            t.webkitEnterFullScreen()
        }, 0)) : t.webkitEnterFullScreen()
    }
    ,
    s.Yd = function() {
        this.c.webkitExitFullScreen()
    }
    ,
    s.src = function(t) {
        var e = this.c.src;
        return t === b ? oa(e, this.hd) : void this.oa(t)
    }
    ,
    s.oa = function(t) {
        this.c.src = t
    }
    ,
    s.load = function() {
        this.c.load()
    }
    ,
    s.currentSrc = function() {
        var t = this.c.currentSrc;
        return this.ib ? oa(t, this.ib.src) : t
    }
    ,
    s.poster = function() {
        return this.c.poster
    }
    ,
    s.fd = function(t) {
        this.c.poster = t
    }
    ,
    s.Sa = function() {
        return this.c.Sa
    }
    ,
    s.Re = function(t) {
        this.c.Sa = t
    }
    ,
    s.autoplay = function() {
        return this.c.autoplay
    }
    ,
    s.Me = function(t) {
        this.c.autoplay = t
    }
    ,
    s.controls = function() {
        return this.c.controls
    }
    ,
    s.loop = function() {
        return this.c.loop
    }
    ,
    s.Oe = function(t) {
        this.c.loop = t
    }
    ,
    s.error = function() {
        return this.c.error
    }
    ,
    s.seeking = function() {
        return this.c.seeking
    }
    ,
    s.seekable = function() {
        return this.c.seekable
    }
    ,
    s.ended = function() {
        return this.c.ended
    }
    ,
    s.playbackRate = function() {
        return this.c.playbackRate
    }
    ,
    s.Qe = function(t) {
        this.c.playbackRate = t
    }
    ,
    s.networkState = function() {
        return this.c.networkState
    }
    ,
    s.readyState = function() {
        return this.c.readyState
    }
    ,
    s.textTracks = function() {
        return this.featuresNativeTextTracks ? this.c.textTracks : t.j.prototype.textTracks.call(this)
    }
    ,
    s.addTextTrack = function(e, n, i) {
        return this.featuresNativeTextTracks ? this.c.addTextTrack(e, n, i) : t.j.prototype.addTextTrack.call(this, e, n, i)
    }
    ,
    s.ia = function(e) {
        if (!this.featuresNativeTextTracks)
            return t.j.prototype.ia.call(this, e);
        var n = document.createElement("track");
        return e = e || {},
        e.kind && (n.kind = e.kind),
        e.label && (n.label = e.label),
        (e.language || e.srclang) && (n.srclang = e.language || e.srclang),
        e["default"] && (n["default"] = e["default"]),
        e.id && (n.id = e.id),
        e.src && (n.src = e.src),
        this.m().appendChild(n),
        n.track.mode = "metadata" === n.T.kind ? "hidden" : "disabled",
        n.onload = function() {
            var t = n.track;
            2 <= n.readyState && ("metadata" === t.kind && "hidden" !== t.mode ? t.mode = "hidden" : "metadata" !== t.kind && "disabled" !== t.mode && (t.mode = "disabled"),
            n.onload = j)
        }
        ,
        P(this.Z(), n.T),
        n
    }
    ,
    s.Ea = function(e) {
        if (!this.featuresNativeTextTracks)
            return t.j.prototype.Ea.call(this, e);
        var n, i;
        for (Q(this.Z(), e),
        n = this.m().querySelectorAll("track"),
        i = 0; i < n.length; i++)
            if (n[i] === e || n[i].track === e) {
                n[i].parentNode.removeChild(n[i]);
                break
            }
    }
    ,
    t.e.isSupported = function() {
        try {
            t.A.volume = .5
        } catch (e) {
            return l
        }
        return !!t.A.canPlayType
    }
    ,
    t.j.hc(t.e);
    var pa = t.e.prototype.na
      , qa = t.e.prototype.ja;
    t.e.prototype.na = function(t) {
        var e = pa.call(this, t);
        return this.hd = t.src,
        e
    }
    ,
    t.e.prototype.ja = function() {
        return this.hd = b,
        qa.call(this)
    }
    ,
    t.e.S = {},
    t.e.S.fb = function(e) {
        function n(e) {
            try {
                return t.A.canPlayType(e)
            } catch (n) {
                return ""
            }
        }
        return e.type ? n(e.type) : e.src ? (e = (e = e.src.match(/\.([^.\/\?]+)(\?[^\/]+)?$/i)) && e[1],
        n("video/" + e)) : ""
    }
    ,
    t.e.S.Ub = function(t, e) {
        e.oa(t.src)
    }
    ,
    t.e.S.dispose = m(),
    t.e.Ta(t.e.S),
    t.e.Pd = function() {
        var e = t.A.volume;
        return t.A.volume = e / 2 + .1,
        e !== t.A.volume
    }
    ,
    t.e.Od = function() {
        var e = t.A.playbackRate;
        return t.A.playbackRate = e / 2 + .1,
        e !== t.A.playbackRate
    }
    ,
    t.e.We = function() {
        var e;
        return (e = !!t.A.textTracks) && 0 < t.A.textTracks.length && (e = "number" != typeof t.A.textTracks[0].mode),
        e && t.kc && (e = l),
        e
    }
    ,
    t.e.prototype.featuresVolumeControl = t.e.Pd(),
    t.e.prototype.featuresPlaybackRate = t.e.Od(),
    t.e.prototype.movingMediaElementInDOM = !t.Bd,
    t.e.prototype.featuresFullscreenResize = f,
    t.e.prototype.featuresProgressEvents = f,
    t.e.prototype.featuresNativeTextTracks = t.e.We();
    var S, ra = /^application\/(?:x-|vnd\.apple\.)mpegurl/i, sa = /^video\/mp4/i;
    t.e.Xc = function() {
        4 <= t.ic && (S || (S = t.A.constructor.prototype.canPlayType),
        t.A.constructor.prototype.canPlayType = function(t) {
            return t && ra.test(t) ? "maybe" : S.call(this, t)
        }
        ),
        t.Fd && (S || (S = t.A.constructor.prototype.canPlayType),
        t.A.constructor.prototype.canPlayType = function(t) {
            return t && sa.test(t) ? "maybe" : S.call(this, t)
        }
        )
    }
    ,
    t.e.cf = function() {
        var e = t.A.constructor.prototype.canPlayType;
        return t.A.constructor.prototype.canPlayType = S,
        S = j,
        e
    }
    ,
    t.e.Xc(),
    t.e.Ab = "loadstart suspend abort error emptied stalled loadedmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate progress play pause ratechange volumechange".split(" "),
    t.e.Nb = function(t) {
        if (t) {
            for (t.player = j,
            t.parentNode && t.parentNode.removeChild(t); t.hasChildNodes(); )
                t.removeChild(t.firstChild);
            if (t.removeAttribute("src"),
            "function" == typeof t.load)
                try {
                    t.load()
                } catch (e) {}
        }
    }
    ,
    t.g = t.j.extend({
        l: function(e, n, i) {
            t.j.call(this, e, n, i);
            var o = n.source;
            i = e.id() + "_flash_api";
            var s = e.q
              , s = t.i.D({
                readyFunction: "videojs.Flash.onReady",
                eventProxyFunction: "videojs.Flash.onEvent",
                errorEventProxyFunction: "videojs.Flash.onError",
                autoplay: s.autoplay,
                preload: s.Sa,
                loop: s.loop,
                muted: s.muted
            }, n.flashVars)
              , r = t.i.D({
                wmode: "opaque",
                bgcolor: "#000000"
            }, n.params);
            i = t.i.D({
                id: i,
                name: i,
                "class": "vjs-tech"
            }, n.attributes),
            o && this.I(function() {
                this.na(o)
            }),
            t.Vb(this.c, n.parentEl),
            n.startTime && this.I(function() {
                this.load(),
                this.play(),
                this.currentTime(n.startTime)
            }),
            t.kc && this.I(function() {
                this.b("mousemove", function() {
                    this.k().o({
                        type: "mousemove",
                        bubbles: l
                    })
                })
            }),
            e.b("stageclick", e.reportUserActivity),
            this.c = t.g.Hc(n.swf, this.c, s, r, i)
        }
    }),
    s = t.g.prototype,
    s.dispose = function() {
        t.j.prototype.dispose.call(this)
    }
    ,
    s.play = function() {
        this.c.vjs_play()
    }
    ,
    s.pause = function() {
        this.c.vjs_pause()
    }
    ,
    s.src = function(t) {
        return t === b ? this.currentSrc() : this.oa(t)
    }
    ,
    s.oa = function(e) {
        if (e = t.ae(e),
        this.c.vjs_src(e),
        this.d.autoplay()) {
            var n = this;
            this.setTimeout(function() {
                n.play()
            }, 0)
        }
    }
    ,
    t.g.prototype.setCurrentTime = function(e) {
        this.pe = e,
        this.c.vjs_setProperty("currentTime", e),
        t.j.prototype.cc.call(this)
    }
    ,
    t.g.prototype.currentTime = function() {
        return this.seeking() ? this.pe || 0 : this.c.vjs_getProperty("currentTime")
    }
    ,
    t.g.prototype.currentSrc = function() {
        return this.ib ? this.ib.src : this.c.vjs_getProperty("currentSrc")
    }
    ,
    t.g.prototype.load = function() {
        this.c.vjs_load()
    }
    ,
    t.g.prototype.poster = function() {
        this.c.vjs_getProperty("poster")
    }
    ,
    t.g.prototype.setPoster = m(),
    s = t.g.prototype,
    s.seekable = function() {
        return 0 === this.duration() ? t.ya() : t.ya(0, this.duration())
    }
    ,
    s.buffered = function() {
        return this.c.vjs_getProperty ? t.ya(0, this.c.vjs_getProperty("buffered")) : t.ya()
    }
    ,
    s.duration = function() {
        return this.c.vjs_getProperty ? this.c.vjs_getProperty("duration") : 0
    }
    ,
    s.Ua = p(l),
    s.Ic = p(l);
    var ua = t.g.prototype, T = "rtmpConnection rtmpStream preload defaultPlaybackRate playbackRate autoplay loop mediaGroup controller controls volume muted defaultMuted".split(" "), wa = "error networkState readyState seeking initialTime startOffsetTime paused played ended videoTracks audioTracks videoWidth videoHeight".split(" "), U;
    for (U = 0; U < T.length; U++)
        va(T[U]),
        ta();
    for (U = 0; U < wa.length; U++)
        va(wa[U]);
    t.g.isSupported = function() {
        return 10 <= t.g.version()[0]
    }
    ,
    t.j.hc(t.g),
    t.g.S = {},
    t.g.S.fb = function(e) {
        return e.type && e.type.replace(/;.*/, "").toLowerCase()in t.g.$d ? "maybe" : ""
    }
    ,
    t.g.S.Ub = function(t, e) {
        e.oa(t.src)
    }
    ,
    t.g.S.dispose = m(),
    t.g.Ta(t.g.S),
    t.g.$d = {
        "video/flv": "FLV",
        "video/x-flv": "FLV",
        "video/mp4": "MP4",
        "video/m4v": "MP4"
    },
    t.g.onReady = function(e) {
        var n;
        (n = (e = t.m(e)) && e.parentNode && e.parentNode.player) && (e.player = n,
        t.g.checkReady(n.h))
    }
    ,
    t.g.checkReady = function(e) {
        e.m() && (e.m().vjs_getProperty ? e.Xa() : this.setTimeout(function() {
            t.g.checkReady(e)
        }, 50))
    }
    ,
    t.g.onEvent = function(e, n) {
        t.m(e).player.o(n)
    }
    ,
    t.g.onError = function(e, n) {
        var i = t.m(e).player
          , o = "FLASH: " + n;
        "srcnotfound" == n ? i.error({
            code: 4,
            message: o
        }) : i.error(o)
    }
    ,
    t.g.version = function() {
        var t = "0,0,0";
        try {
            t = new window.ActiveXObject("ShockwaveFlash.ShockwaveFlash").GetVariable("$version").replace(/\D+/g, ",").match(/^,?(.+),?$/)[1]
        } catch (e) {
            try {
                navigator.mimeTypes["application/x-shockwave-flash"].enabledPlugin && (t = (navigator.plugins["Shockwave Flash 2.0"] || navigator.plugins["Shockwave Flash"]).description.replace(/\D+/g, ",").match(/^,?(.+),?$/)[1])
            } catch (n) {}
        }
        return t.split(",")
    }
    ,
    t.g.Hc = function(e, n, i, o, s) {
        e = t.g.de(e, i, o, s),
        e = t.f("div", {
            innerHTML: e
        }).childNodes[0],
        i = n.parentNode,
        n.parentNode.replaceChild(e, n),
        e[t.expando] = n[t.expando];
        var r = i.childNodes[0];
        return setTimeout(function() {
            r.style.display = "block"
        }, 1e3),
        e
    }
    ,
    t.g.de = function(e, n, i, o) {
        var s = ""
          , r = ""
          , a = "";
        return n && t.i.da(n, function(t, e) {
            s += t + "=" + e + "&amp;"
        }),
        i = t.i.D({
            movie: e,
            flashvars: s,
            allowScriptAccess: "always",
            allowNetworking: "all"
        }, i),
        t.i.da(i, function(t, e) {
            r += '<param name="' + t + '" value="' + e + '" />'
        }),
        o = t.i.D({
            data: e,
            width: "100%",
            height: "100%"
        }, o),
        t.i.da(o, function(t, e) {
            a += t + '="' + e + '" '
        }),
        '<object type="application/x-shockwave-flash" ' + a + ">" + r + "</object>"
    }
    ,
    t.g.Ve = {
        "rtmp/mp4": "MP4",
        "rtmp/flv": "FLV"
    },
    t.g.If = function(t, e) {
        return t + "&" + e
    }
    ,
    t.g.Ue = function(t) {
        var e = {
            Cc: "",
            nd: ""
        };
        if (!t)
            return e;
        var n, i = t.indexOf("&");
        return -1 !== i ? n = i + 1 : (i = n = t.lastIndexOf("/") + 1,
        0 === i && (i = n = t.length)),
        e.Cc = t.substring(0, i),
        e.nd = t.substring(n, t.length),
        e
    }
    ,
    t.g.ne = function(e) {
        return e in t.g.Ve
    }
    ,
    t.g.Hd = /^rtmp[set]?:\/\//i,
    t.g.me = function(e) {
        return t.g.Hd.test(e)
    }
    ,
    t.g.bc = {},
    t.g.bc.fb = function(e) {
        return t.g.ne(e.type) || t.g.me(e.src) ? "maybe" : ""
    }
    ,
    t.g.bc.Ub = function(e, n) {
        var i = t.g.Ue(e.src);
        n.setRtmpConnection(i.Cc),
        n.setRtmpStream(i.nd)
    }
    ,
    t.g.Ta(t.g.bc),
    t.Gd = t.a.extend({
        l: function(e, n, i) {
            if (t.a.call(this, e, n, i),
            e.q.sources && 0 !== e.q.sources.length)
                e.src(e.q.sources);
            else
                for (n = 0,
                i = e.q.techOrder; n < i.length; n++) {
                    var o = t.wa(i[n])
                      , s = window.videojs[o];
                    if (s && s.isSupported()) {
                        ka(e, o);
                        break
                    }
                }
        }
    }),
    t.sc = {
        disabled: "disabled",
        hidden: "hidden",
        showing: "showing"
    },
    t.Id = {
        subtitles: "subtitles",
        captions: "captions",
        descriptions: "descriptions",
        chapters: "chapters",
        metadata: "metadata"
    },
    t.t = function(e) {
        var n, i, o, s, r, a, c, u, d, p, h;
        if (e = e || {},
        !e.player)
            throw Error("A player was not provided.");
        if (n = this,
        t.qa)
            for (h in n = document.createElement("custom"),
            t.t.prototype)
                n[h] = t.t.prototype[h];
        return n.d = e.player,
        o = t.sc[e.mode] || "disabled",
        s = t.Id[e.kind] || "subtitles",
        r = e.label || "",
        a = e.language || e.srclang || "",
        i = e.id || "vjs_text_track_" + t.s++,
        ("metadata" === s || "chapters" === s) && (o = "hidden"),
        n.X = [],
        n.Ja = [],
        c = new t.W(n.X),
        u = new t.W(n.Ja),
        p = l,
        d = t.bind(n, function() {
            this.activeCues,
            p && (this.trigger("cuechange"),
            p = l)
        }),
        "disabled" !== o && n.d.b("timeupdate", d),
        Object.defineProperty(n, "kind", {
            get: function() {
                return s
            },
            set: Function.prototype
        }),
        Object.defineProperty(n, "label", {
            get: function() {
                return r
            },
            set: Function.prototype
        }),
        Object.defineProperty(n, "language", {
            get: function() {
                return a
            },
            set: Function.prototype
        }),
        Object.defineProperty(n, "id", {
            get: function() {
                return i
            },
            set: Function.prototype
        }),
        Object.defineProperty(n, "mode", {
            get: function() {
                return o
            },
            set: function(e) {
                t.sc[e] && (o = e,
                "showing" === o && this.d.b("timeupdate", d),
                this.o("modechange"))
            }
        }),
        Object.defineProperty(n, "cues", {
            get: function() {
                return this.Yb ? c : j
            },
            set: Function.prototype
        }),
        Object.defineProperty(n, "activeCues", {
            get: function() {
                var t, e, n, i, o;
                if (!this.Yb)
                    return j;
                if (0 === this.cues.length)
                    return u;
                for (i = this.d.currentTime(),
                t = 0,
                e = this.cues.length,
                n = []; e > t; t++)
                    o = this.cues[t],
                    o.startTime <= i && o.endTime >= i ? n.push(o) : o.startTime === o.endTime && o.startTime <= i && o.startTime + .5 >= i && n.push(o);
                if (p = l,
                n.length !== this.Ja.length)
                    p = f;
                else
                    for (t = 0; t < n.length; t++)
                        -1 === xa.call(this.Ja, n[t]) && (p = f);
                return this.Ja = n,
                u.sb(this.Ja),
                u
            },
            set: Function.prototype
        }),
        e.src ? ya(e.src, n) : n.Yb = f,
        t.qa ? n : void 0
    }
    ,
    t.t.prototype = t.i.create(t.z.prototype),
    t.t.prototype.constructor = t.t,
    t.t.prototype.cb = {
        cuechange: "cuechange"
    },
    t.t.prototype.wc = function(t) {
        var e = this.d.textTracks()
          , n = 0;
        if (e)
            for (; n < e.length; n++)
                e[n] !== this && e[n].bd(t);
        this.X.push(t),
        this.cues.sb(this.X)
    }
    ,
    t.t.prototype.bd = function(t) {
        for (var e, n = 0, i = this.X.length, o = l; i > n; n++)
            e = this.X[n],
            e === t && (this.X.splice(n, 1),
            o = f);
        o && this.Ec.sb(this.X)
    }
    ;
    var ya, V, xa;
    ya = function(e, n) {
        t.gf(e, t.bind(this, function(e, i, o) {
            return e ? t.log.error(e) : (n.Yb = f,
            void V(o, n))
        }))
    }
    ,
    V = function(e, n) {
        if ("function" != typeof window.WebVTT)
            window.setTimeout(function() {
                V(e, n)
            }, 25);
        else {
            var i = new window.WebVTT.Parser(window,window.vttjs,window.WebVTT.StringDecoder());
            i.oncue = function(t) {
                n.wc(t)
            }
            ,
            i.onparsingerror = function(e) {
                t.log.error(e)
            }
            ,
            i.parse(e),
            i.flush()
        }
    }
    ,
    xa = function(t, e) {
        var n;
        if (this == j)
            throw new TypeError('"this" is null or not defined');
        var i = Object(this)
          , o = i.length >>> 0;
        if (0 === o)
            return -1;
        if (n = +e || 0,
        1 / 0 === Math.abs(n) && (n = 0),
        n >= o)
            return -1;
        for (n = Math.max(n >= 0 ? n : o - Math.abs(n), 0); o > n; ) {
            if (n in i && i[n] === t)
                return n;
            n++
        }
        return -1
    }
    ,
    t.F = function(e) {
        var n, i = this, o = 0;
        if (t.qa)
            for (n in i = document.createElement("custom"),
            t.F.prototype)
                i[n] = t.F.prototype[n];
        for (e = e || [],
        i.Wa = [],
        Object.defineProperty(i, "length", {
            get: function() {
                return this.Wa.length
            }
        }); o < e.length; o++)
            P(i, e[o]);
        return t.qa ? i : void 0
    }
    ,
    t.F.prototype = t.i.create(t.z.prototype),
    t.F.prototype.constructor = t.F,
    t.F.prototype.cb = {
        change: "change",
        addtrack: "addtrack",
        removetrack: "removetrack"
    };
    for (var za in t.F.prototype.cb)
        t.F.prototype["on" + za] = j;
    t.F.prototype.ee = function(t) {
        for (var e, n = 0, i = this.length, o = j; i > n; n++)
            if (e = this[n],
            e.id === t) {
                o = e;
                break
            }
        return o
    }
    ,
    t.W = function(e) {
        var i, o = this;
        if (t.qa)
            for (i in o = document.createElement("custom"),
            t.W.prototype)
                o[i] = t.W.prototype[i];
        return t.W.prototype.sb.call(o, e),
        Object.defineProperty(o, "length", {
            get: n("qe")
        }),
        t.qa ? o : void 0
    }
    ,
    t.W.prototype.sb = function(t) {
        var e = this.length || 0
          , n = 0
          , i = t.length;
        if (this.X = t,
        this.qe = t.length,
        t = function(t) {
            "" + t in this || Object.defineProperty(this, "" + t, {
                get: function() {
                    return this.X[t]
                }
            })
        }
        ,
        i > e)
            for (n = e; i > n; n++)
                t.call(this, n)
    }
    ,
    t.W.prototype.ce = function(t) {
        for (var e, n = 0, i = this.length, o = j; i > n; n++)
            if (e = this[n],
            e.id === t) {
                o = e;
                break
            }
        return o
    }
    ,
    t.ta = t.a.extend({
        l: function(e, n, i) {
            t.a.call(this, e, n, i),
            e.b("loadstart", t.bind(this, this.$e)),
            e.I(t.bind(this, function() {
                if (e.h && e.h.featuresNativeTextTracks)
                    this.Y();
                else {
                    var n, i, o;
                    for (e.b("fullscreenchange", t.bind(this, this.C)),
                    i = e.q.tracks || [],
                    n = 0; n < i.length; n++)
                        o = i[n],
                        this.d.ia(o)
                }
            }))
        }
    }),
    t.ta.prototype.$e = function() {
        this.d.h && this.d.h.featuresNativeTextTracks ? this.Y() : this.show()
    }
    ,
    t.ta.prototype.f = function() {
        return t.a.prototype.f.call(this, "div", {
            className: "vjs-text-track-display"
        })
    }
    ,
    t.ta.prototype.Qd = function() {
        "function" == typeof window.WebVTT && window.WebVTT.processCues(window, [], this.c)
    }
    ;
    var Aa = {
        yf: "monospace",
        Ef: "sans-serif",
        Gf: "serif",
        zf: '"Andale Mono", "Lucida Console", monospace',
        Af: '"Courier New", monospace',
        Cf: "sans-serif",
        Df: "serif",
        pf: '"Comic Sans MS", Impact, fantasy',
        Ff: '"Monotype Corsiva", cursive',
        Hf: '"Andale Mono", "Lucida Console", monospace, sans-serif'
    };
    if (t.ta.prototype.C = function() {
        var t, e = this.d.textTracks(), n = 0;
        if (this.Qd(),
        e)
            for (; n < e.length; n++)
                t = e[n],
                "showing" === t.mode && this.df(t)
    }
    ,
    t.ta.prototype.df = function(t) {
        if ("function" == typeof window.WebVTT && t.activeCues) {
            for (var e, n = 0, i = this.d.textTrackSettings.Lc(), o = []; n < t.activeCues.length; n++)
                o.push(t.activeCues[n]);
            for (window.WebVTT.processCues(window, t.activeCues, this.c),
            n = o.length; n--; ) {
                if (t = o[n].qf,
                i.color && (t.firstChild.style.color = i.color),
                i.od)
                    try {
                        t.firstChild.style.color = W(i.color || "#fff", i.od)
                    } catch (s) {}
                if (i.backgroundColor && (t.firstChild.style.backgroundColor = i.backgroundColor),
                i.zc)
                    try {
                        t.firstChild.style.backgroundColor = W(i.backgroundColor || "#000", i.zc)
                    } catch (r) {}
                if (i.gc)
                    if (i.vd)
                        try {
                            t.style.backgroundColor = W(i.gc, i.vd)
                        } catch (a) {}
                    else
                        t.style.backgroundColor = i.gc;
                i.Na && ("dropshadow" === i.Na ? t.firstChild.style.textShadow = "2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px #222" : "raised" === i.Na ? t.firstChild.style.textShadow = "1px 1px #222, 2px 2px #222, 3px 3px #222" : "depressed" === i.Na ? t.firstChild.style.textShadow = "1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px #222" : "uniform" === i.Na && (t.firstChild.style.textShadow = "0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px #222")),
                i.Rb && 1 !== i.Rb && (e = window.Bf(t.style.fontSize),
                t.style.fontSize = e * i.Rb + "px",
                t.style.height = "auto",
                t.style.top = "auto",
                t.style.bottom = "2px"),
                i.fontFamily && "default" !== i.fontFamily && ("small-caps" === i.fontFamily ? t.firstChild.style.fontVariant = "small-caps" : t.firstChild.style.fontFamily = Aa[i.fontFamily])
            }
        }
    }
    ,
    t.aa = t.M.extend({
        l: function(e, n) {
            var i, o, s = this.T = n.track, r = e.textTracks();
            r && (i = t.bind(this, function() {
                var e, n, i, o = "showing" === this.T.mode;
                if (this instanceof t.Cb)
                    for (o = f,
                    n = 0,
                    i = r.length; i > n; n++)
                        if (e = r[n],
                        e.kind === this.T.kind && "showing" === e.mode) {
                            o = l;
                            break
                        }
                this.selected(o)
            }),
            r.addEventListener("change", i),
            e.b("dispose", function() {
                r.removeEventListener("change", i)
            })),
            n.label = s.label || s.language || "Unknown",
            n.selected = s["default"] || "showing" === s.mode,
            t.M.call(this, e, n),
            r && r.onchange === b && this.b(["tap", "click"], function() {
                if ("object" != typeof window.zd)
                    try {
                        o = new window.zd("change")
                    } catch (t) {}
                o || (o = document.createEvent("Event"),
                o.initEvent("change", f, f)),
                r.dispatchEvent(o)
            })
        }
    }),
    t.aa.prototype.u = function() {
        var e, n = this.T.kind, i = this.d.textTracks(), o = 0;
        if (t.M.prototype.u.call(this),
        i)
            for (; o < i.length; o++)
                e = i[o],
                e.kind === n && (e.mode = e === this.T ? "showing" : "disabled")
    }
    ,
    t.Cb = t.aa.extend({
        l: function(e, n) {
            n.track = {
                kind: n.kind,
                player: e,
                label: n.kind + " off",
                "default": l,
                mode: "disabled"
            },
            t.aa.call(this, e, n),
            this.selected(f)
        }
    }),
    t.vb = t.aa.extend({
        l: function(e, n) {
            n.track = {
                kind: n.kind,
                player: e,
                label: n.kind + " settings",
                "default": l,
                mode: "disabled"
            },
            t.aa.call(this, e, n),
            this.p("vjs-texttrack-settings")
        }
    }),
    t.vb.prototype.u = function() {
        this.k().ea("textTrackSettings").show()
    }
    ,
    t.Q = t.O.extend({
        l: function(e, n) {
            var i, o;
            t.O.call(this, e, n),
            i = this.d.textTracks(),
            1 >= this.H.length && this.Y(),
            i && (o = t.bind(this, this.update),
            i.addEventListener("removetrack", o),
            i.addEventListener("addtrack", o),
            this.d.b("dispose", function() {
                i.removeEventListener("removetrack", o),
                i.removeEventListener("addtrack", o)
            }))
        }
    }),
    t.Q.prototype.La = function() {
        var e, n, i = [];
        if (this instanceof t.pa && (!this.k().h || !this.k().h.featuresNativeTextTracks) && i.push(new t.vb(this.d,{
            kind: this.fa
        })),
        i.push(new t.Cb(this.d,{
            kind: this.fa
        })),
        n = this.d.textTracks(),
        !n)
            return i;
        for (var o = 0; o < n.length; o++)
            e = n[o],
            e.kind === this.fa && i.push(new t.aa(this.d,{
                track: e
            }));
        return i
    }
    ,
    t.pa = t.Q.extend({
        l: function(e, n, i) {
            t.Q.call(this, e, n, i),
            this.c.setAttribute("aria-label", "Captions Menu")
        }
    }),
    t.pa.prototype.fa = "captions",
    t.pa.prototype.ua = "Captions",
    t.pa.prototype.className = "vjs-captions-button",
    t.pa.prototype.update = function() {
        var e = 2;
        t.Q.prototype.update.call(this),
        this.k().h && this.k().h.featuresNativeTextTracks && (e = 1),
        this.H && this.H.length > e ? this.show() : this.Y()
    }
    ,
    t.bb = t.Q.extend({
        l: function(e, n, i) {
            t.Q.call(this, e, n, i),
            this.c.setAttribute("aria-label", "Subtitles Menu")
        }
    }),
    t.bb.prototype.fa = "subtitles",
    t.bb.prototype.ua = "Subtitles",
    t.bb.prototype.className = "vjs-subtitles-button",
    t.Ya = t.Q.extend({
        l: function(e, n, i) {
            t.Q.call(this, e, n, i),
            this.c.setAttribute("aria-label", "Chapters Menu")
        }
    }),
    s = t.Ya.prototype,
    s.fa = "chapters",
    s.ua = "Chapters",
    s.className = "vjs-chapters-button",
    s.La = function() {
        var e, n, i = [];
        if (n = this.d.textTracks(),
        !n)
            return i;
        for (var o = 0; o < n.length; o++)
            e = n[o],
            e.kind === this.fa && i.push(new t.aa(this.d,{
                track: e
            }));
        return i
    }
    ,
    s.Ma = function() {
        for (var e, n, i = this.d.textTracks() || [], o = 0, s = i.length, r = this.H = []; s > o; o++)
            if (e = i[o],
            e.kind == this.fa) {
                if (e.Ec) {
                    n = e;
                    break
                }
                e.mode = "hidden",
                window.setTimeout(t.bind(this, function() {
                    this.Ma()
                }), 100)
            }
        if (i = this.Aa,
        i === b && (i = new t.ra(this.d),
        i.xa().appendChild(t.f("li", {
            className: "vjs-menu-title",
            innerHTML: t.wa(this.fa),
            Xe: -1
        }))),
        n) {
            e = n.cues;
            for (var a, o = 0, s = e.length; s > o; o++)
                a = e[o],
                a = new t.Za(this.d,{
                    track: n,
                    cue: a
                }),
                r.push(a),
                i.ba(a);
            this.ba(i)
        }
        return 0 < this.H.length && this.show(),
        i
    }
    ,
    t.Za = t.M.extend({
        l: function(e, n) {
            var i = this.T = n.track
              , o = this.cue = n.cue
              , s = e.currentTime();
            n.label = o.text,
            n.selected = o.startTime <= s && s < o.endTime,
            t.M.call(this, e, n),
            i.addEventListener("cuechange", t.bind(this, this.update))
        }
    }),
    t.Za.prototype.u = function() {
        t.M.prototype.u.call(this),
        this.d.currentTime(this.cue.startTime),
        this.update(this.cue.startTime)
    }
    ,
    t.Za.prototype.update = function() {
        var t = this.cue
          , e = this.d.currentTime();
        this.selected(t.startTime <= e && e < t.endTime)
    }
    ,
    t.tc = t.a.extend({
        l: function(e, n) {
            t.a.call(this, e, n),
            this.Y(),
            t.b(this.m().querySelector(".vjs-done-button"), "click", t.bind(this, function() {
                this.Ke(),
                this.Y()
            })),
            t.b(this.m().querySelector(".vjs-default-button"), "click", t.bind(this, function() {
                this.m().querySelector(".vjs-fg-color > select").selectedIndex = 0,
                this.m().querySelector(".vjs-bg-color > select").selectedIndex = 0,
                this.m().querySelector(".window-color > select").selectedIndex = 0,
                this.m().querySelector(".vjs-text-opacity > select").selectedIndex = 0,
                this.m().querySelector(".vjs-bg-opacity > select").selectedIndex = 0,
                this.m().querySelector(".vjs-window-opacity > select").selectedIndex = 0,
                this.m().querySelector(".vjs-edge-style select").selectedIndex = 0,
                this.m().querySelector(".vjs-font-family select").selectedIndex = 0,
                this.m().querySelector(".vjs-font-percent select").selectedIndex = 2,
                this.C()
            })),
            t.b(this.m().querySelector(".vjs-fg-color > select"), "change", t.bind(this, this.C)),
            t.b(this.m().querySelector(".vjs-bg-color > select"), "change", t.bind(this, this.C)),
            t.b(this.m().querySelector(".window-color > select"), "change", t.bind(this, this.C)),
            t.b(this.m().querySelector(".vjs-text-opacity > select"), "change", t.bind(this, this.C)),
            t.b(this.m().querySelector(".vjs-bg-opacity > select"), "change", t.bind(this, this.C)),
            t.b(this.m().querySelector(".vjs-window-opacity > select"), "change", t.bind(this, this.C)),
            t.b(this.m().querySelector(".vjs-font-percent select"), "change", t.bind(this, this.C)),
            t.b(this.m().querySelector(".vjs-edge-style select"), "change", t.bind(this, this.C)),
            t.b(this.m().querySelector(".vjs-font-family select"), "change", t.bind(this, this.C)),
            e.options().persistTextTrackSettings && this.Je()
        }
    }),
    s = t.tc.prototype,
    s.f = function() {
        return t.a.prototype.f.call(this, "div", {
            className: "vjs-caption-settings vjs-modal-overlay",
            innerHTML: '<div class="vjs-tracksettings"><div class="vjs-tracksettings-colors"><div class="vjs-fg-color vjs-tracksetting"><label class="vjs-label">Foreground</label><select><option value="">---</option><option value="#FFF">White</option><option value="#000">Black</option><option value="#F00">Red</option><option value="#0F0">Green</option><option value="#00F">Blue</option><option value="#FF0">Yellow</option><option value="#F0F">Magenta</option><option value="#0FF">Cyan</option></select><span class="vjs-text-opacity vjs-opacity"><select><option value="">---</option><option value="1">Opaque</option><option value="0.5">Semi-Opaque</option></select></span></div><div class="vjs-bg-color vjs-tracksetting"><label class="vjs-label">Background</label><select><option value="">---</option><option value="#FFF">White</option><option value="#000">Black</option><option value="#F00">Red</option><option value="#0F0">Green</option><option value="#00F">Blue</option><option value="#FF0">Yellow</option><option value="#F0F">Magenta</option><option value="#0FF">Cyan</option></select><span class="vjs-bg-opacity vjs-opacity"><select><option value="">---</option><option value="1">Opaque</option><option value="0.5">Semi-Transparent</option><option value="0">Transparent</option></select></span></div><div class="window-color vjs-tracksetting"><label class="vjs-label">Window</label><select><option value="">---</option><option value="#FFF">White</option><option value="#000">Black</option><option value="#F00">Red</option><option value="#0F0">Green</option><option value="#00F">Blue</option><option value="#FF0">Yellow</option><option value="#F0F">Magenta</option><option value="#0FF">Cyan</option></select><span class="vjs-window-opacity vjs-opacity"><select><option value="">---</option><option value="1">Opaque</option><option value="0.5">Semi-Transparent</option><option value="0">Transparent</option></select></span></div></div><div class="vjs-tracksettings-font"><div class="vjs-font-percent vjs-tracksetting"><label class="vjs-label">Font Size</label><select><option value="0.50">50%</option><option value="0.75">75%</option><option value="1.00" selected>100%</option><option value="1.25">125%</option><option value="1.50">150%</option><option value="1.75">175%</option><option value="2.00">200%</option><option value="3.00">300%</option><option value="4.00">400%</option></select></div><div class="vjs-edge-style vjs-tracksetting"><label class="vjs-label">Text Edge Style</label><select><option value="none">None</option><option value="raised">Raised</option><option value="depressed">Depressed</option><option value="uniform">Uniform</option><option value="dropshadow">Dropshadow</option></select></div><div class="vjs-font-family vjs-tracksetting"><label class="vjs-label">Font Family</label><select><option value="">Default</option><option value="monospaceSerif">Monospace Serif</option><option value="proportionalSerif">Proportional Serif</option><option value="monospaceSansSerif">Monospace Sans-Serif</option><option value="proportionalSansSerif">Proportional Sans-Serif</option><option value="casual">Casual</option><option value="script">Script</option><option value="small-caps">Small Caps</option></select></div></div></div><div class="vjs-tracksettings-controls"><button class="vjs-default-button">Defaults</button><button class="vjs-done-button">Done</button></div>'
        })
    }
    ,
    s.Lc = function() {
        var t, e, n, i, o, s, r, a, l, c;
        t = this.m(),
        o = X(t.querySelector(".vjs-edge-style select")),
        s = X(t.querySelector(".vjs-font-family select")),
        r = X(t.querySelector(".vjs-fg-color > select")),
        n = X(t.querySelector(".vjs-text-opacity > select")),
        a = X(t.querySelector(".vjs-bg-color > select")),
        e = X(t.querySelector(".vjs-bg-opacity > select")),
        l = X(t.querySelector(".window-color > select")),
        i = X(t.querySelector(".vjs-window-opacity > select")),
        t = window.parseFloat(X(t.querySelector(".vjs-font-percent > select"))),
        e = {
            backgroundOpacity: e,
            textOpacity: n,
            windowOpacity: i,
            edgeStyle: o,
            fontFamily: s,
            color: r,
            backgroundColor: a,
            windowColor: l,
            fontPercent: t
        };
        for (c in e)
            ("" === e[c] || "none" === e[c] || "fontPercent" === c && 1 === e[c]) && delete e[c];
        return e
    }
    ,
    s.Se = function(t) {
        var e = this.m();
        Y(e.querySelector(".vjs-edge-style select"), t.Na),
        Y(e.querySelector(".vjs-font-family select"), t.fontFamily),
        Y(e.querySelector(".vjs-fg-color > select"), t.color),
        Y(e.querySelector(".vjs-text-opacity > select"), t.od),
        Y(e.querySelector(".vjs-bg-color > select"), t.backgroundColor),
        Y(e.querySelector(".vjs-bg-opacity > select"), t.zc),
        Y(e.querySelector(".window-color > select"), t.gc),
        Y(e.querySelector(".vjs-window-opacity > select"), t.vd),
        (t = t.Rb) && (t = t.toFixed(2)),
        Y(e.querySelector(".vjs-font-percent > select"), t)
    }
    ,
    s.Je = function() {
        var t;
        try {
            t = JSON.parse(window.localStorage.getItem("vjs-text-track-settings"))
        } catch (e) {}
        t && this.Se(t)
    }
    ,
    s.Ke = function() {
        var e;
        if (this.d.options().persistTextTrackSettings) {
            e = this.Lc();
            try {
                t.kb(e) ? window.localStorage.removeItem("vjs-text-track-settings") : window.localStorage.setItem("vjs-text-track-settings", JSON.stringify(e))
            } catch (n) {}
        }
    }
    ,
    s.C = function() {
        var t = this.d.ea("textTrackDisplay");
        t && t.C()
    }
    ,
    "undefined" != typeof window.JSON && "function" == typeof window.JSON.parse)
        t.JSON = window.JSON;
    else {
        t.JSON = {};
        var Z = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        t.JSON.parse = function(a, c) {
            function d(t, e) {
                var n, i, o = t[e];
                if (o && "object" == typeof o)
                    for (n in o)
                        Object.prototype.hasOwnProperty.call(o, n) && (i = d(o, n),
                        i !== b ? o[n] = i : delete o[n]);
                return c.call(t, e, o)
            }
            var e;
            if (a = String(a),
            Z.lastIndex = 0,
            Z.test(a) && (a = a.replace(Z, function(t) {
                return "\\u" + ("0000" + t.charCodeAt(0).toString(16)).slice(-4)
            })),
            /^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))
                return e = eval("(" + a + ")"),
                "function" == typeof c ? d({
                    "": e
                }, "") : e;
            throw new SyntaxError("JSON.parse(): invalid or malformed JSON data")
        }
    }
    t.yc = function() {
        var e, n, i, o;
        e = document.getElementsByTagName("video"),
        n = document.getElementsByTagName("audio");
        var s = [];
        if (e && 0 < e.length)
            for (i = 0,
            o = e.length; o > i; i++)
                s.push(e[i]);
        if (n && 0 < n.length)
            for (i = 0,
            o = n.length; o > i; i++)
                s.push(n[i]);
        if (s && 0 < s.length)
            for (i = 0,
            o = s.length; o > i; i++) {
                if (!(n = s[i]) || !n.getAttribute) {
                    t.Kb();
                    break
                }
                n.player === b && (e = n.getAttribute("data-setup"),
                e !== j && videojs(n))
            }
        else
            t.ud || t.Kb()
    }
    ,
    t.Kb = function() {
        setTimeout(t.yc, 1)
    }
    ,
    "complete" === document.readyState ? t.ud = f : t.N(window, "load", function() {
        t.ud = f
    }),
    t.Kb(),
    t.Ge = function(e, n) {
        t.Player.prototype[e] = n
    }
    ;
    var Ba = this;
    $("videojs", t),
    $("_V_", t),
    $("videojs.options", t.options),
    $("videojs.players", t.Da),
    $("videojs.TOUCH_ENABLED", t.Gb),
    $("videojs.cache", t.va),
    $("videojs.Component", t.a),
    t.a.prototype.player = t.a.prototype.k,
    t.a.prototype.options = t.a.prototype.options,
    t.a.prototype.init = t.a.prototype.l,
    t.a.prototype.dispose = t.a.prototype.dispose,
    t.a.prototype.createEl = t.a.prototype.f,
    t.a.prototype.contentEl = t.a.prototype.xa,
    t.a.prototype.el = t.a.prototype.m,
    t.a.prototype.addChild = t.a.prototype.ba,
    t.a.prototype.getChild = t.a.prototype.ea,
    t.a.prototype.getChildById = t.a.prototype.be,
    t.a.prototype.children = t.a.prototype.children,
    t.a.prototype.initChildren = t.a.prototype.Oc,
    t.a.prototype.removeChild = t.a.prototype.removeChild,
    t.a.prototype.on = t.a.prototype.b,
    t.a.prototype.off = t.a.prototype.n,
    t.a.prototype.one = t.a.prototype.N,
    t.a.prototype.trigger = t.a.prototype.o,
    t.a.prototype.triggerReady = t.a.prototype.Xa,
    t.a.prototype.show = t.a.prototype.show,
    t.a.prototype.hide = t.a.prototype.Y,
    t.a.prototype.width = t.a.prototype.width,
    t.a.prototype.height = t.a.prototype.height,
    t.a.prototype.dimensions = t.a.prototype.Ud,
    t.a.prototype.ready = t.a.prototype.I,
    t.a.prototype.addClass = t.a.prototype.p,
    t.a.prototype.removeClass = t.a.prototype.r,
    t.a.prototype.hasClass = t.a.prototype.Qa,
    t.a.prototype.buildCSSClass = t.a.prototype.V,
    t.a.prototype.localize = t.a.prototype.v,
    t.a.prototype.setInterval = t.a.prototype.setInterval,
    t.a.prototype.setTimeout = t.a.prototype.setTimeout,
    $("videojs.EventEmitter", t.z),
    t.z.prototype.on = t.z.prototype.b,
    t.z.prototype.addEventListener = t.z.prototype.addEventListener,
    t.z.prototype.off = t.z.prototype.n,
    t.z.prototype.removeEventListener = t.z.prototype.removeEventListener,
    t.z.prototype.one = t.z.prototype.N,
    t.z.prototype.trigger = t.z.prototype.o,
    t.z.prototype.dispatchEvent = t.z.prototype.dispatchEvent,
    t.Player.prototype.ended = t.Player.prototype.ended,
    t.Player.prototype.enterFullWindow = t.Player.prototype.Jc,
    t.Player.prototype.exitFullWindow = t.Player.prototype.Ob,
    t.Player.prototype.preload = t.Player.prototype.Sa,
    t.Player.prototype.remainingTime = t.Player.prototype.remainingTime,
    t.Player.prototype.supportsFullScreen = t.Player.prototype.Ua,
    t.Player.prototype.currentType = t.Player.prototype.Rd,
    t.Player.prototype.requestFullScreen = t.Player.prototype.requestFullScreen,
    t.Player.prototype.requestFullscreen = t.Player.prototype.requestFullscreen,
    t.Player.prototype.cancelFullScreen = t.Player.prototype.cancelFullScreen,
    t.Player.prototype.exitFullscreen = t.Player.prototype.exitFullscreen,
    t.Player.prototype.isFullScreen = t.Player.prototype.isFullScreen,
    t.Player.prototype.isFullscreen = t.Player.prototype.isFullscreen,
    t.Player.prototype.textTracks = t.Player.prototype.textTracks,
    t.Player.prototype.remoteTextTracks = t.Player.prototype.Z,
    t.Player.prototype.addTextTrack = t.Player.prototype.addTextTrack,
    t.Player.prototype.addRemoteTextTrack = t.Player.prototype.ia,
    t.Player.prototype.removeRemoteTextTrack = t.Player.prototype.Ea,
    t.Player.prototype.seekable = t.Player.prototype.seekable,
    $("videojs.MediaLoader", t.Gd),
    $("videojs.TextTrackDisplay", t.ta),
    $("videojs.ControlBar", t.wb),
    $("videojs.Button", t.w),
    $("videojs.PlayToggle", t.oc),
    $("videojs.FullscreenToggle", t.$a),
    $("videojs.BigPlayButton", t.ub),
    $("videojs.LoadingSpinner", t.mc),
    $("videojs.CurrentTimeDisplay", t.xb),
    $("videojs.DurationDisplay", t.yb),
    $("videojs.TimeDivider", t.uc),
    $("videojs.RemainingTimeDisplay", t.Fb),
    $("videojs.LiveDisplay", t.lc),
    $("videojs.ErrorDisplay", t.zb),
    $("videojs.Slider", t.U),
    $("videojs.ProgressControl", t.Eb),
    $("videojs.SeekBar", t.rc),
    $("videojs.LoadProgressBar", t.Bb),
    $("videojs.PlayProgressBar", t.nc),
    $("videojs.SeekHandle", t.ab),
    $("videojs.VolumeControl", t.Ib),
    $("videojs.VolumeBar", t.Hb),
    $("videojs.VolumeLevel", t.vc),
    $("videojs.VolumeMenuButton", t.Ia),
    $("videojs.VolumeHandle", t.Jb),
    $("videojs.MuteToggle", t.sa),
    $("videojs.PosterImage", t.qc),
    $("videojs.Menu", t.ra),
    $("videojs.MenuItem", t.M),
    $("videojs.MenuButton", t.O),
    $("videojs.PlaybackRateMenuButton", t.pc),
    $("videojs.ChaptersTrackMenuItem", t.Za),
    $("videojs.TextTrackButton", t.Q),
    $("videojs.TextTrackMenuItem", t.aa),
    $("videojs.OffTextTrackMenuItem", t.Cb),
    $("videojs.CaptionSettingsMenuItem", t.vb),
    t.O.prototype.createItems = t.O.prototype.La,
    t.Q.prototype.createItems = t.Q.prototype.La,
    t.Ya.prototype.createItems = t.Ya.prototype.La,
    $("videojs.SubtitlesButton", t.bb),
    $("videojs.CaptionsButton", t.pa),
    $("videojs.ChaptersButton", t.Ya),
    $("videojs.MediaTechController", t.j),
    t.j.withSourceHandlers = t.j.hc,
    t.j.prototype.featuresVolumeControl = t.j.prototype.vf,
    t.j.prototype.featuresFullscreenResize = t.j.prototype.rf,
    t.j.prototype.featuresPlaybackRate = t.j.prototype.sf,
    t.j.prototype.featuresProgressEvents = t.j.prototype.tf,
    t.j.prototype.featuresTimeupdateEvents = t.j.prototype.uf,
    t.j.prototype.setPoster = t.j.prototype.fd,
    t.j.prototype.textTracks = t.j.prototype.textTracks,
    t.j.prototype.remoteTextTracks = t.j.prototype.Z,
    t.j.prototype.addTextTrack = t.j.prototype.addTextTrack,
    t.j.prototype.addRemoteTextTrack = t.j.prototype.ia,
    t.j.prototype.removeRemoteTextTrack = t.j.prototype.Ea,
    $("videojs.Html5", t.e),
    t.e.Events = t.e.Ab,
    t.e.isSupported = t.e.isSupported,
    t.e.canPlaySource = t.e.Ac,
    t.e.patchCanPlayType = t.e.Xc,
    t.e.unpatchCanPlayType = t.e.cf,
    t.e.prototype.setCurrentTime = t.e.prototype.cc,
    t.e.prototype.setVolume = t.e.prototype.Te,
    t.e.prototype.setMuted = t.e.prototype.Pe,
    t.e.prototype.setPreload = t.e.prototype.Re,
    t.e.prototype.setAutoplay = t.e.prototype.Me,
    t.e.prototype.setLoop = t.e.prototype.Oe,
    t.e.prototype.enterFullScreen = t.e.prototype.Ic,
    t.e.prototype.exitFullScreen = t.e.prototype.Yd,
    t.e.prototype.playbackRate = t.e.prototype.playbackRate,
    t.e.prototype.setPlaybackRate = t.e.prototype.Qe,
    t.e.registerSourceHandler = t.e.Ta,
    t.e.selectSourceHandler = t.e.rb,
    t.e.prototype.setSource = t.e.prototype.na,
    t.e.prototype.disposeSourceHandler = t.e.prototype.ja,
    t.e.prototype.textTracks = t.e.prototype.textTracks,
    t.e.prototype.remoteTextTracks = t.e.prototype.Z,
    t.e.prototype.addTextTrack = t.e.prototype.addTextTrack,
    t.e.prototype.addRemoteTextTrack = t.e.prototype.ia,
    t.e.prototype.removeRemoteTextTrack = t.e.prototype.Ea,
    $("videojs.Flash", t.g),
    t.g.isSupported = t.g.isSupported,
    t.g.canPlaySource = t.g.Ac,
    t.g.onReady = t.g.onReady,
    t.g.embed = t.g.Hc,
    t.g.version = t.g.version,
    t.g.prototype.setSource = t.g.prototype.na,
    t.g.registerSourceHandler = t.g.Ta,
    t.g.selectSourceHandler = t.g.rb,
    t.g.prototype.setSource = t.g.prototype.na,
    t.g.prototype.disposeSourceHandler = t.g.prototype.ja,
    $("videojs.TextTrack", t.t),
    $("videojs.TextTrackList", t.F),
    $("videojs.TextTrackCueList", t.W),
    $("videojs.TextTrackSettings", t.tc),
    t.t.prototype.id = t.t.prototype.id,
    t.t.prototype.label = t.t.prototype.label,
    t.t.prototype.kind = t.t.prototype.Xb,
    t.t.prototype.mode = t.t.prototype.mode,
    t.t.prototype.cues = t.t.prototype.Ec,
    t.t.prototype.activeCues = t.t.prototype.of,
    t.t.prototype.addCue = t.t.prototype.wc,
    t.t.prototype.removeCue = t.t.prototype.bd,
    t.F.prototype.getTrackById = t.F.prototype.ee,
    t.W.prototype.getCueById = t.F.prototype.ce,
    $("videojs.CaptionsTrack", t.hf),
    $("videojs.SubtitlesTrack", t.nf),
    $("videojs.ChaptersTrack", t.jf),
    $("videojs.autoSetup", t.yc),
    $("videojs.plugin", t.Ge),
    $("videojs.createTimeRange", t.ya),
    $("videojs.util", t.$),
    t.$.mergeOptions = t.$.Ba,
    t.addLanguage = t.Kd
}(),
!function(t) {
    var e = t.vttjs = {}
      , n = e.VTTCue
      , i = e.VTTRegion
      , o = t.VTTCue
      , s = t.VTTRegion;
    e.shim = function() {
        e.VTTCue = n,
        e.VTTRegion = i
    }
    ,
    e.restore = function() {
        e.VTTCue = o,
        e.VTTRegion = s
    }
}(this),
function(t, e) {
    function n(t) {
        if ("string" != typeof t)
            return !1;
        var e = a[t.toLowerCase()];
        return e ? t.toLowerCase() : !1
    }
    function i(t) {
        if ("string" != typeof t)
            return !1;
        var e = l[t.toLowerCase()];
        return e ? t.toLowerCase() : !1
    }
    function o(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var i in n)
                t[i] = n[i]
        }
        return t
    }
    function s(t, e, s) {
        var a = this
          , l = /MSIE\s8\.0/.test(navigator.userAgent)
          , c = {};
        l ? a = document.createElement("custom") : c.enumerable = !0,
        a.hasBeenReset = !1;
        var u = ""
          , d = !1
          , p = t
          , h = e
          , f = s
          , v = null
          , m = ""
          , y = !0
          , g = "auto"
          , b = "start"
          , T = 50
          , w = "middle"
          , j = 50
          , k = "middle";
        return Object.defineProperty(a, "id", o({}, c, {
            get: function() {
                return u
            },
            set: function(t) {
                u = "" + t
            }
        })),
        Object.defineProperty(a, "pauseOnExit", o({}, c, {
            get: function() {
                return d
            },
            set: function(t) {
                d = !!t
            }
        })),
        Object.defineProperty(a, "startTime", o({}, c, {
            get: function() {
                return p
            },
            set: function(t) {
                if ("number" != typeof t)
                    throw new TypeError("Start time must be set to a number.");
                p = t,
                this.hasBeenReset = !0
            }
        })),
        Object.defineProperty(a, "endTime", o({}, c, {
            get: function() {
                return h
            },
            set: function(t) {
                if ("number" != typeof t)
                    throw new TypeError("End time must be set to a number.");
                h = t,
                this.hasBeenReset = !0
            }
        })),
        Object.defineProperty(a, "text", o({}, c, {
            get: function() {
                return f
            },
            set: function(t) {
                f = "" + t,
                this.hasBeenReset = !0
            }
        })),
        Object.defineProperty(a, "region", o({}, c, {
            get: function() {
                return v
            },
            set: function(t) {
                v = t,
                this.hasBeenReset = !0
            }
        })),
        Object.defineProperty(a, "vertical", o({}, c, {
            get: function() {
                return m
            },
            set: function(t) {
                var e = n(t);
                if (e === !1)
                    throw new SyntaxError("An invalid or illegal string was specified.");
                m = e,
                this.hasBeenReset = !0
            }
        })),
        Object.defineProperty(a, "snapToLines", o({}, c, {
            get: function() {
                return y
            },
            set: function(t) {
                y = !!t,
                this.hasBeenReset = !0
            }
        })),
        Object.defineProperty(a, "line", o({}, c, {
            get: function() {
                return g
            },
            set: function(t) {
                if ("number" != typeof t && t !== r)
                    throw new SyntaxError("An invalid number or illegal string was specified.");
                g = t,
                this.hasBeenReset = !0
            }
        })),
        Object.defineProperty(a, "lineAlign", o({}, c, {
            get: function() {
                return b
            },
            set: function(t) {
                var e = i(t);
                if (!e)
                    throw new SyntaxError("An invalid or illegal string was specified.");
                b = e,
                this.hasBeenReset = !0
            }
        })),
        Object.defineProperty(a, "position", o({}, c, {
            get: function() {
                return T
            },
            set: function(t) {
                if (0 > t || t > 100)
                    throw new Error("Position must be between 0 and 100.");
                T = t,
                this.hasBeenReset = !0
            }
        })),
        Object.defineProperty(a, "positionAlign", o({}, c, {
            get: function() {
                return w
            },
            set: function(t) {
                var e = i(t);
                if (!e)
                    throw new SyntaxError("An invalid or illegal string was specified.");
                w = e,
                this.hasBeenReset = !0
            }
        })),
        Object.defineProperty(a, "size", o({}, c, {
            get: function() {
                return j
            },
            set: function(t) {
                if (0 > t || t > 100)
                    throw new Error("Size must be between 0 and 100.");
                j = t,
                this.hasBeenReset = !0
            }
        })),
        Object.defineProperty(a, "align", o({}, c, {
            get: function() {
                return k
            },
            set: function(t) {
                var e = i(t);
                if (!e)
                    throw new SyntaxError("An invalid or illegal string was specified.");
                k = e,
                this.hasBeenReset = !0
            }
        })),
        a.displayState = void 0,
        l ? a : void 0
    }
    var r = "auto"
      , a = {
        "": !0,
        lr: !0,
        rl: !0
    }
      , l = {
        start: !0,
        middle: !0,
        end: !0,
        left: !0,
        right: !0
    };
    s.prototype.getCueAsHTML = function() {
        return WebVTT.convertCueToDOMTree(window, this.text)
    }
    ,
    t.VTTCue = t.VTTCue || s,
    e.VTTCue = s
}(this, this.vttjs || {}),
function(t, e) {
    function n(t) {
        if ("string" != typeof t)
            return !1;
        var e = s[t.toLowerCase()];
        return e ? t.toLowerCase() : !1
    }
    function i(t) {
        return "number" == typeof t && t >= 0 && 100 >= t
    }
    function o() {
        var t = 100
          , e = 3
          , o = 0
          , s = 100
          , r = 0
          , a = 100
          , l = "";
        Object.defineProperties(this, {
            width: {
                enumerable: !0,
                get: function() {
                    return t
                },
                set: function(e) {
                    if (!i(e))
                        throw new Error("Width must be between 0 and 100.");
                    t = e
                }
            },
            lines: {
                enumerable: !0,
                get: function() {
                    return e
                },
                set: function(t) {
                    if ("number" != typeof t)
                        throw new TypeError("Lines must be set to a number.");
                    e = t
                }
            },
            regionAnchorY: {
                enumerable: !0,
                get: function() {
                    return s
                },
                set: function(t) {
                    if (!i(t))
                        throw new Error("RegionAnchorX must be between 0 and 100.");
                    s = t
                }
            },
            regionAnchorX: {
                enumerable: !0,
                get: function() {
                    return o
                },
                set: function(t) {
                    if (!i(t))
                        throw new Error("RegionAnchorY must be between 0 and 100.");
                    o = t
                }
            },
            viewportAnchorY: {
                enumerable: !0,
                get: function() {
                    return a
                },
                set: function(t) {
                    if (!i(t))
                        throw new Error("ViewportAnchorY must be between 0 and 100.");
                    a = t
                }
            },
            viewportAnchorX: {
                enumerable: !0,
                get: function() {
                    return r
                },
                set: function(t) {
                    if (!i(t))
                        throw new Error("ViewportAnchorX must be between 0 and 100.");
                    r = t
                }
            },
            scroll: {
                enumerable: !0,
                get: function() {
                    return l
                },
                set: function(t) {
                    var e = n(t);
                    if (e === !1)
                        throw new SyntaxError("An invalid or illegal string was specified.");
                    l = e
                }
            }
        })
    }
    var s = {
        "": !0,
        up: !0
    };
    t.VTTRegion = t.VTTRegion || o,
    e.VTTRegion = o
}(this, this.vttjs || {}),
function(t) {
    function e(t, e) {
        this.name = "ParsingError",
        this.code = t.code,
        this.message = e || t.message
    }
    function n(t) {
        function e(t, e, n, i) {
            return 3600 * (0 | t) + 60 * (0 | e) + (0 | n) + (0 | i) / 1e3
        }
        var n = t.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);
        return n ? n[3] ? e(n[1], n[2], n[3].replace(":", ""), n[4]) : n[1] > 59 ? e(n[1], n[2], 0, n[4]) : e(0, n[1], n[2], n[4]) : null
    }
    function i() {
        this.values = f(null )
    }
    function o(t, e, n, i) {
        var o = i ? t.split(i) : [t];
        for (var s in o)
            if ("string" == typeof o[s]) {
                var r = o[s].split(n);
                if (2 === r.length) {
                    var a = r[0]
                      , l = r[1];
                    e(a, l)
                }
            }
    }
    function s(t, s, r) {
        function a() {
            var i = n(t);
            if (null === i)
                throw new e(e.Errors.BadTimeStamp,"Malformed timestamp: " + u);
            return t = t.replace(/^[^\sa-zA-Z-]+/, ""),
            i
        }
        function l(t, e) {
            var n = new i;
            o(t, function(t, e) {
                switch (t) {
                case "region":
                    for (var i = r.length - 1; i >= 0; i--)
                        if (r[i].id === e) {
                            n.set(t, r[i].region);
                            break
                        }
                    break;
                case "vertical":
                    n.alt(t, e, ["rl", "lr"]);
                    break;
                case "line":
                    var o = e.split(",")
                      , s = o[0];
                    n.integer(t, s),
                    n.percent(t, s) ? n.set("snapToLines", !1) : null ,
                    n.alt(t, s, ["auto"]),
                    2 === o.length && n.alt("lineAlign", o[1], ["start", "middle", "end"]);
                    break;
                case "position":
                    o = e.split(","),
                    n.percent(t, o[0]),
                    2 === o.length && n.alt("positionAlign", o[1], ["start", "middle", "end"]);
                    break;
                case "size":
                    n.percent(t, e);
                    break;
                case "align":
                    n.alt(t, e, ["start", "middle", "end", "left", "right"])
                }
            }, /:/, /\s/),
            e.region = n.get("region", null ),
            e.vertical = n.get("vertical", ""),
            e.line = n.get("line", "auto"),
            e.lineAlign = n.get("lineAlign", "start"),
            e.snapToLines = n.get("snapToLines", !0),
            e.size = n.get("size", 100),
            e.align = n.get("align", "middle"),
            e.position = n.get("position", {
                start: 0,
                left: 0,
                middle: 50,
                end: 100,
                right: 100
            }, e.align),
            e.positionAlign = n.get("positionAlign", {
                start: "start",
                left: "start",
                middle: "middle",
                end: "end",
                right: "end"
            }, e.align)
        }
        function c() {
            t = t.replace(/^\s+/, "")
        }
        var u = t;
        if (c(),
        s.startTime = a(),
        c(),
        "-->" !== t.substr(0, 3))
            throw new e(e.Errors.BadTimeStamp,"Malformed time stamp (time stamps must be separated by '-->'): " + u);
        t = t.substr(3),
        c(),
        s.endTime = a(),
        c(),
        l(t, s)
    }
    function r(t, e) {
        function i() {
            function t(t) {
                return e = e.substr(t.length),
                t
            }
            if (!e)
                return null ;
            var n = e.match(/^([^<]*)(<[^>]+>?)?/);
            return t(n[1] ? n[1] : n[2])
        }
        function o(t) {
            return v[t]
        }
        function s(t) {
            for (; f = t.match(/&(amp|lt|gt|lrm|rlm|nbsp);/); )
                t = t.replace(f[0], o);
            return t
        }
        function r(t, e) {
            return !g[e.localName] || g[e.localName] === t.localName
        }
        function a(e, n) {
            var i = m[e];
            if (!i)
                return null ;
            var o = t.document.createElement(i);
            o.localName = i;
            var s = y[e];
            return s && n && (o[s] = n.trim()),
            o
        }
        for (var l, c = t.document.createElement("div"), u = c, d = []; null !== (l = i()); )
            if ("<" !== l[0])
                u.appendChild(t.document.createTextNode(s(l)));
            else {
                if ("/" === l[1]) {
                    d.length && d[d.length - 1] === l.substr(2).replace(">", "") && (d.pop(),
                    u = u.parentNode);
                    continue
                }
                var p, h = n(l.substr(1, l.length - 2));
                if (h) {
                    p = t.document.createProcessingInstruction("timestamp", h),
                    u.appendChild(p);
                    continue
                }
                var f = l.match(/^<([^.\s\/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);
                if (!f)
                    continue;if (p = a(f[1], f[3]),
                !p)
                    continue;if (!r(u, p))
                    continue;f[2] && (p.className = f[2].substr(1).replace(".", " ")),
                d.push(f[1]),
                u.appendChild(p),
                u = p
            }
        return c
    }
    function a(t) {
        function e(t, e) {
            for (var n = e.childNodes.length - 1; n >= 0; n--)
                t.push(e.childNodes[n])
        }
        function n(t) {
            if (!t || !t.length)
                return null ;
            var i = t.pop()
              , o = i.textContent || i.innerText;
            if (o) {
                var s = o.match(/^.*(\n|\r)/);
                return s ? (t.length = 0,
                s[0]) : o
            }
            return "ruby" === i.tagName ? n(t) : i.childNodes ? (e(t, i),
            n(t)) : void 0
        }
        var i, o = [], s = "";
        if (!t || !t.childNodes)
            return "ltr";
        for (e(o, t); s = n(o); )
            for (var r = 0; r < s.length; r++) {
                i = s.charCodeAt(r);
                for (var a = 0; a < b.length; a++)
                    if (b[a] === i)
                        return "rtl"
            }
        return "ltr"
    }
    function l(t) {
        if ("number" == typeof t.line && (t.snapToLines || t.line >= 0 && t.line <= 100))
            return t.line;
        if (!t.track || !t.track.textTrackList || !t.track.textTrackList.mediaElement)
            return -1;
        for (var e = t.track, n = e.textTrackList, i = 0, o = 0; o < n.length && n[o] !== e; o++)
            "showing" === n[o].mode && i++;
        return -1 * ++i
    }
    function c() {}
    function u(t, e, n) {
        var i = /MSIE\s8\.0/.test(navigator.userAgent)
          , o = "rgba(255, 255, 255, 1)"
          , s = "rgba(0, 0, 0, 0.8)";
        i && (o = "rgb(255, 255, 255)",
        s = "rgb(0, 0, 0)"),
        c.call(this),
        this.cue = e,
        this.cueDiv = r(t, e.text);
        var l = {
            color: o,
            backgroundColor: s,
            position: "relative",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            display: "inline"
        };
        i || (l.writingMode = "" === e.vertical ? "horizontal-tb" : "lr" === e.vertical ? "vertical-lr" : "vertical-rl",
        l.unicodeBidi = "plaintext"),
        this.applyStyles(l, this.cueDiv),
        this.div = t.document.createElement("div"),
        l = {
            textAlign: "middle" === e.align ? "center" : e.align,
            font: n.font,
            whiteSpace: "pre-line",
            position: "absolute"
        },
        i || (l.direction = a(this.cueDiv),
        l.writingMode = "" === e.vertical ? "horizontal-tb" : "lr" === e.vertical ? "vertical-lr" : "vertical-rl".stylesunicodeBidi = "plaintext"),
        this.applyStyles(l),
        this.div.appendChild(this.cueDiv);
        var u = 0;
        switch (e.positionAlign) {
        case "start":
            u = e.position;
            break;
        case "middle":
            u = e.position - e.size / 2;
            break;
        case "end":
            u = e.position - e.size
        }
        this.applyStyles("" === e.vertical ? {
            left: this.formatStyle(u, "%"),
            width: this.formatStyle(e.size, "%")
        } : {
            top: this.formatStyle(u, "%"),
            height: this.formatStyle(e.size, "%")
        }),
        this.move = function(t) {
            this.applyStyles({
                top: this.formatStyle(t.top, "px"),
                bottom: this.formatStyle(t.bottom, "px"),
                left: this.formatStyle(t.left, "px"),
                right: this.formatStyle(t.right, "px"),
                height: this.formatStyle(t.height, "px"),
                width: this.formatStyle(t.width, "px")
            })
        }
    }
    function d(t) {
        var e, n, i, o, s = /MSIE\s8\.0/.test(navigator.userAgent);
        if (t.div) {
            n = t.div.offsetHeight,
            i = t.div.offsetWidth,
            o = t.div.offsetTop;
            var r = (r = t.div.childNodes) && (r = r[0]) && r.getClientRects && r.getClientRects();
            t = t.div.getBoundingClientRect(),
            e = r ? Math.max(r[0] && r[0].height || 0, t.height / r.length) : 0
        }
        this.left = t.left,
        this.right = t.right,
        this.top = t.top || o,
        this.height = t.height || n,
        this.bottom = t.bottom || o + (t.height || n),
        this.width = t.width || i,
        this.lineHeight = void 0 !== e ? e : t.lineHeight,
        s && !this.lineHeight && (this.lineHeight = 13)
    }
    function p(t, e, n, i) {
        function o(t, e) {
            for (var o, s = new d(t), r = 1, a = 0; a < e.length; a++) {
                for (; t.overlapsOppositeAxis(n, e[a]) || t.within(n) && t.overlapsAny(i); )
                    t.move(e[a]);
                if (t.within(n))
                    return t;
                var l = t.intersectPercentage(n);
                r > l && (o = new d(t),
                r = l),
                t = new d(s)
            }
            return o || s
        }
        var s = new d(e)
          , r = e.cue
          , a = l(r)
          , c = [];
        if (r.snapToLines) {
            var u;
            switch (r.vertical) {
            case "":
                c = ["+y", "-y"],
                u = "height";
                break;
            case "rl":
                c = ["+x", "-x"],
                u = "width";
                break;
            case "lr":
                c = ["-x", "+x"],
                u = "width"
            }
            var p = s.lineHeight
              , h = p * Math.round(a)
              , f = n[u] + p
              , v = c[0];
            Math.abs(h) > f && (h = 0 > h ? -1 : 1,
            h *= Math.ceil(f / p) * p),
            0 > a && (h += "" === r.vertical ? n.height : n.width,
            c = c.reverse()),
            s.move(v, h)
        } else {
            var m = s.lineHeight / n.height * 100;
            switch (r.lineAlign) {
            case "middle":
                a -= m / 2;
                break;
            case "end":
                a -= m
            }
            switch (r.vertical) {
            case "":
                e.applyStyles({
                    top: e.formatStyle(a, "%")
                });
                break;
            case "rl":
                e.applyStyles({
                    left: e.formatStyle(a, "%")
                });
                break;
            case "lr":
                e.applyStyles({
                    right: e.formatStyle(a, "%")
                })
            }
            c = ["+y", "-x", "+x", "-y"],
            s = new d(e)
        }
        var y = o(s, c);
        e.move(y.toCSSCompatValues(n))
    }
    function h() {}
    var f = Object.create || function() {
        function t() {}
        return function(e) {
            if (1 !== arguments.length)
                throw new Error("Object.create shim only accepts one parameter.");
            return t.prototype = e,
            new t
        }
    }();
    e.prototype = f(Error.prototype),
    e.prototype.constructor = e,
    e.Errors = {
        BadSignature: {
            code: 0,
            message: "Malformed WebVTT signature."
        },
        BadTimeStamp: {
            code: 1,
            message: "Malformed time stamp."
        }
    },
    i.prototype = {
        set: function(t, e) {
            this.get(t) || "" === e || (this.values[t] = e)
        },
        get: function(t, e, n) {
            return n ? this.has(t) ? this.values[t] : e[n] : this.has(t) ? this.values[t] : e
        },
        has: function(t) {
            return t in this.values
        },
        alt: function(t, e, n) {
            for (var i = 0; i < n.length; ++i)
                if (e === n[i]) {
                    this.set(t, e);
                    break
                }
        },
        integer: function(t, e) {
            /^-?\d+$/.test(e) && this.set(t, parseInt(e, 10))
        },
        percent: function(t, e) {
            var n;
            return (n = e.match(/^([\d]{1,3})(\.[\d]*)?%$/)) && (e = parseFloat(e),
            e >= 0 && 100 >= e) ? (this.set(t, e),
            !0) : !1
        }
    };
    var v = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&lrm;": "‎",
        "&rlm;": "‏",
        "&nbsp;": " "
    }
      , m = {
        c: "span",
        i: "i",
        b: "b",
        u: "u",
        ruby: "ruby",
        rt: "rt",
        v: "span",
        lang: "span"
    }
      , y = {
        v: "title",
        lang: "lang"
    }
      , g = {
        rt: "ruby"
    }
      , b = [1470, 1472, 1475, 1478, 1488, 1489, 1490, 1491, 1492, 1493, 1494, 1495, 1496, 1497, 1498, 1499, 1500, 1501, 1502, 1503, 1504, 1505, 1506, 1507, 1508, 1509, 1510, 1511, 1512, 1513, 1514, 1520, 1521, 1522, 1523, 1524, 1544, 1547, 1549, 1563, 1566, 1567, 1568, 1569, 1570, 1571, 1572, 1573, 1574, 1575, 1576, 1577, 1578, 1579, 1580, 1581, 1582, 1583, 1584, 1585, 1586, 1587, 1588, 1589, 1590, 1591, 1592, 1593, 1594, 1595, 1596, 1597, 1598, 1599, 1600, 1601, 1602, 1603, 1604, 1605, 1606, 1607, 1608, 1609, 1610, 1645, 1646, 1647, 1649, 1650, 1651, 1652, 1653, 1654, 1655, 1656, 1657, 1658, 1659, 1660, 1661, 1662, 1663, 1664, 1665, 1666, 1667, 1668, 1669, 1670, 1671, 1672, 1673, 1674, 1675, 1676, 1677, 1678, 1679, 1680, 1681, 1682, 1683, 1684, 1685, 1686, 1687, 1688, 1689, 1690, 1691, 1692, 1693, 1694, 1695, 1696, 1697, 1698, 1699, 1700, 1701, 1702, 1703, 1704, 1705, 1706, 1707, 1708, 1709, 1710, 1711, 1712, 1713, 1714, 1715, 1716, 1717, 1718, 1719, 1720, 1721, 1722, 1723, 1724, 1725, 1726, 1727, 1728, 1729, 1730, 1731, 1732, 1733, 1734, 1735, 1736, 1737, 1738, 1739, 1740, 1741, 1742, 1743, 1744, 1745, 1746, 1747, 1748, 1749, 1765, 1766, 1774, 1775, 1786, 1787, 1788, 1789, 1790, 1791, 1792, 1793, 1794, 1795, 1796, 1797, 1798, 1799, 1800, 1801, 1802, 1803, 1804, 1805, 1807, 1808, 1810, 1811, 1812, 1813, 1814, 1815, 1816, 1817, 1818, 1819, 1820, 1821, 1822, 1823, 1824, 1825, 1826, 1827, 1828, 1829, 1830, 1831, 1832, 1833, 1834, 1835, 1836, 1837, 1838, 1839, 1869, 1870, 1871, 1872, 1873, 1874, 1875, 1876, 1877, 1878, 1879, 1880, 1881, 1882, 1883, 1884, 1885, 1886, 1887, 1888, 1889, 1890, 1891, 1892, 1893, 1894, 1895, 1896, 1897, 1898, 1899, 1900, 1901, 1902, 1903, 1904, 1905, 1906, 1907, 1908, 1909, 1910, 1911, 1912, 1913, 1914, 1915, 1916, 1917, 1918, 1919, 1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1969, 1984, 1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2e3, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2036, 2037, 2042, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055, 2056, 2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065, 2066, 2067, 2068, 2069, 2074, 2084, 2088, 2096, 2097, 2098, 2099, 2100, 2101, 2102, 2103, 2104, 2105, 2106, 2107, 2108, 2109, 2110, 2112, 2113, 2114, 2115, 2116, 2117, 2118, 2119, 2120, 2121, 2122, 2123, 2124, 2125, 2126, 2127, 2128, 2129, 2130, 2131, 2132, 2133, 2134, 2135, 2136, 2142, 2208, 2210, 2211, 2212, 2213, 2214, 2215, 2216, 2217, 2218, 2219, 2220, 8207, 64285, 64287, 64288, 64289, 64290, 64291, 64292, 64293, 64294, 64295, 64296, 64298, 64299, 64300, 64301, 64302, 64303, 64304, 64305, 64306, 64307, 64308, 64309, 64310, 64312, 64313, 64314, 64315, 64316, 64318, 64320, 64321, 64323, 64324, 64326, 64327, 64328, 64329, 64330, 64331, 64332, 64333, 64334, 64335, 64336, 64337, 64338, 64339, 64340, 64341, 64342, 64343, 64344, 64345, 64346, 64347, 64348, 64349, 64350, 64351, 64352, 64353, 64354, 64355, 64356, 64357, 64358, 64359, 64360, 64361, 64362, 64363, 64364, 64365, 64366, 64367, 64368, 64369, 64370, 64371, 64372, 64373, 64374, 64375, 64376, 64377, 64378, 64379, 64380, 64381, 64382, 64383, 64384, 64385, 64386, 64387, 64388, 64389, 64390, 64391, 64392, 64393, 64394, 64395, 64396, 64397, 64398, 64399, 64400, 64401, 64402, 64403, 64404, 64405, 64406, 64407, 64408, 64409, 64410, 64411, 64412, 64413, 64414, 64415, 64416, 64417, 64418, 64419, 64420, 64421, 64422, 64423, 64424, 64425, 64426, 64427, 64428, 64429, 64430, 64431, 64432, 64433, 64434, 64435, 64436, 64437, 64438, 64439, 64440, 64441, 64442, 64443, 64444, 64445, 64446, 64447, 64448, 64449, 64467, 64468, 64469, 64470, 64471, 64472, 64473, 64474, 64475, 64476, 64477, 64478, 64479, 64480, 64481, 64482, 64483, 64484, 64485, 64486, 64487, 64488, 64489, 64490, 64491, 64492, 64493, 64494, 64495, 64496, 64497, 64498, 64499, 64500, 64501, 64502, 64503, 64504, 64505, 64506, 64507, 64508, 64509, 64510, 64511, 64512, 64513, 64514, 64515, 64516, 64517, 64518, 64519, 64520, 64521, 64522, 64523, 64524, 64525, 64526, 64527, 64528, 64529, 64530, 64531, 64532, 64533, 64534, 64535, 64536, 64537, 64538, 64539, 64540, 64541, 64542, 64543, 64544, 64545, 64546, 64547, 64548, 64549, 64550, 64551, 64552, 64553, 64554, 64555, 64556, 64557, 64558, 64559, 64560, 64561, 64562, 64563, 64564, 64565, 64566, 64567, 64568, 64569, 64570, 64571, 64572, 64573, 64574, 64575, 64576, 64577, 64578, 64579, 64580, 64581, 64582, 64583, 64584, 64585, 64586, 64587, 64588, 64589, 64590, 64591, 64592, 64593, 64594, 64595, 64596, 64597, 64598, 64599, 64600, 64601, 64602, 64603, 64604, 64605, 64606, 64607, 64608, 64609, 64610, 64611, 64612, 64613, 64614, 64615, 64616, 64617, 64618, 64619, 64620, 64621, 64622, 64623, 64624, 64625, 64626, 64627, 64628, 64629, 64630, 64631, 64632, 64633, 64634, 64635, 64636, 64637, 64638, 64639, 64640, 64641, 64642, 64643, 64644, 64645, 64646, 64647, 64648, 64649, 64650, 64651, 64652, 64653, 64654, 64655, 64656, 64657, 64658, 64659, 64660, 64661, 64662, 64663, 64664, 64665, 64666, 64667, 64668, 64669, 64670, 64671, 64672, 64673, 64674, 64675, 64676, 64677, 64678, 64679, 64680, 64681, 64682, 64683, 64684, 64685, 64686, 64687, 64688, 64689, 64690, 64691, 64692, 64693, 64694, 64695, 64696, 64697, 64698, 64699, 64700, 64701, 64702, 64703, 64704, 64705, 64706, 64707, 64708, 64709, 64710, 64711, 64712, 64713, 64714, 64715, 64716, 64717, 64718, 64719, 64720, 64721, 64722, 64723, 64724, 64725, 64726, 64727, 64728, 64729, 64730, 64731, 64732, 64733, 64734, 64735, 64736, 64737, 64738, 64739, 64740, 64741, 64742, 64743, 64744, 64745, 64746, 64747, 64748, 64749, 64750, 64751, 64752, 64753, 64754, 64755, 64756, 64757, 64758, 64759, 64760, 64761, 64762, 64763, 64764, 64765, 64766, 64767, 64768, 64769, 64770, 64771, 64772, 64773, 64774, 64775, 64776, 64777, 64778, 64779, 64780, 64781, 64782, 64783, 64784, 64785, 64786, 64787, 64788, 64789, 64790, 64791, 64792, 64793, 64794, 64795, 64796, 64797, 64798, 64799, 64800, 64801, 64802, 64803, 64804, 64805, 64806, 64807, 64808, 64809, 64810, 64811, 64812, 64813, 64814, 64815, 64816, 64817, 64818, 64819, 64820, 64821, 64822, 64823, 64824, 64825, 64826, 64827, 64828, 64829, 64848, 64849, 64850, 64851, 64852, 64853, 64854, 64855, 64856, 64857, 64858, 64859, 64860, 64861, 64862, 64863, 64864, 64865, 64866, 64867, 64868, 64869, 64870, 64871, 64872, 64873, 64874, 64875, 64876, 64877, 64878, 64879, 64880, 64881, 64882, 64883, 64884, 64885, 64886, 64887, 64888, 64889, 64890, 64891, 64892, 64893, 64894, 64895, 64896, 64897, 64898, 64899, 64900, 64901, 64902, 64903, 64904, 64905, 64906, 64907, 64908, 64909, 64910, 64911, 64914, 64915, 64916, 64917, 64918, 64919, 64920, 64921, 64922, 64923, 64924, 64925, 64926, 64927, 64928, 64929, 64930, 64931, 64932, 64933, 64934, 64935, 64936, 64937, 64938, 64939, 64940, 64941, 64942, 64943, 64944, 64945, 64946, 64947, 64948, 64949, 64950, 64951, 64952, 64953, 64954, 64955, 64956, 64957, 64958, 64959, 64960, 64961, 64962, 64963, 64964, 64965, 64966, 64967, 65008, 65009, 65010, 65011, 65012, 65013, 65014, 65015, 65016, 65017, 65018, 65019, 65020, 65136, 65137, 65138, 65139, 65140, 65142, 65143, 65144, 65145, 65146, 65147, 65148, 65149, 65150, 65151, 65152, 65153, 65154, 65155, 65156, 65157, 65158, 65159, 65160, 65161, 65162, 65163, 65164, 65165, 65166, 65167, 65168, 65169, 65170, 65171, 65172, 65173, 65174, 65175, 65176, 65177, 65178, 65179, 65180, 65181, 65182, 65183, 65184, 65185, 65186, 65187, 65188, 65189, 65190, 65191, 65192, 65193, 65194, 65195, 65196, 65197, 65198, 65199, 65200, 65201, 65202, 65203, 65204, 65205, 65206, 65207, 65208, 65209, 65210, 65211, 65212, 65213, 65214, 65215, 65216, 65217, 65218, 65219, 65220, 65221, 65222, 65223, 65224, 65225, 65226, 65227, 65228, 65229, 65230, 65231, 65232, 65233, 65234, 65235, 65236, 65237, 65238, 65239, 65240, 65241, 65242, 65243, 65244, 65245, 65246, 65247, 65248, 65249, 65250, 65251, 65252, 65253, 65254, 65255, 65256, 65257, 65258, 65259, 65260, 65261, 65262, 65263, 65264, 65265, 65266, 65267, 65268, 65269, 65270, 65271, 65272, 65273, 65274, 65275, 65276, 67584, 67585, 67586, 67587, 67588, 67589, 67592, 67594, 67595, 67596, 67597, 67598, 67599, 67600, 67601, 67602, 67603, 67604, 67605, 67606, 67607, 67608, 67609, 67610, 67611, 67612, 67613, 67614, 67615, 67616, 67617, 67618, 67619, 67620, 67621, 67622, 67623, 67624, 67625, 67626, 67627, 67628, 67629, 67630, 67631, 67632, 67633, 67634, 67635, 67636, 67637, 67639, 67640, 67644, 67647, 67648, 67649, 67650, 67651, 67652, 67653, 67654, 67655, 67656, 67657, 67658, 67659, 67660, 67661, 67662, 67663, 67664, 67665, 67666, 67667, 67668, 67669, 67671, 67672, 67673, 67674, 67675, 67676, 67677, 67678, 67679, 67840, 67841, 67842, 67843, 67844, 67845, 67846, 67847, 67848, 67849, 67850, 67851, 67852, 67853, 67854, 67855, 67856, 67857, 67858, 67859, 67860, 67861, 67862, 67863, 67864, 67865, 67866, 67867, 67872, 67873, 67874, 67875, 67876, 67877, 67878, 67879, 67880, 67881, 67882, 67883, 67884, 67885, 67886, 67887, 67888, 67889, 67890, 67891, 67892, 67893, 67894, 67895, 67896, 67897, 67903, 67968, 67969, 67970, 67971, 67972, 67973, 67974, 67975, 67976, 67977, 67978, 67979, 67980, 67981, 67982, 67983, 67984, 67985, 67986, 67987, 67988, 67989, 67990, 67991, 67992, 67993, 67994, 67995, 67996, 67997, 67998, 67999, 68e3, 68001, 68002, 68003, 68004, 68005, 68006, 68007, 68008, 68009, 68010, 68011, 68012, 68013, 68014, 68015, 68016, 68017, 68018, 68019, 68020, 68021, 68022, 68023, 68030, 68031, 68096, 68112, 68113, 68114, 68115, 68117, 68118, 68119, 68121, 68122, 68123, 68124, 68125, 68126, 68127, 68128, 68129, 68130, 68131, 68132, 68133, 68134, 68135, 68136, 68137, 68138, 68139, 68140, 68141, 68142, 68143, 68144, 68145, 68146, 68147, 68160, 68161, 68162, 68163, 68164, 68165, 68166, 68167, 68176, 68177, 68178, 68179, 68180, 68181, 68182, 68183, 68184, 68192, 68193, 68194, 68195, 68196, 68197, 68198, 68199, 68200, 68201, 68202, 68203, 68204, 68205, 68206, 68207, 68208, 68209, 68210, 68211, 68212, 68213, 68214, 68215, 68216, 68217, 68218, 68219, 68220, 68221, 68222, 68223, 68352, 68353, 68354, 68355, 68356, 68357, 68358, 68359, 68360, 68361, 68362, 68363, 68364, 68365, 68366, 68367, 68368, 68369, 68370, 68371, 68372, 68373, 68374, 68375, 68376, 68377, 68378, 68379, 68380, 68381, 68382, 68383, 68384, 68385, 68386, 68387, 68388, 68389, 68390, 68391, 68392, 68393, 68394, 68395, 68396, 68397, 68398, 68399, 68400, 68401, 68402, 68403, 68404, 68405, 68416, 68417, 68418, 68419, 68420, 68421, 68422, 68423, 68424, 68425, 68426, 68427, 68428, 68429, 68430, 68431, 68432, 68433, 68434, 68435, 68436, 68437, 68440, 68441, 68442, 68443, 68444, 68445, 68446, 68447, 68448, 68449, 68450, 68451, 68452, 68453, 68454, 68455, 68456, 68457, 68458, 68459, 68460, 68461, 68462, 68463, 68464, 68465, 68466, 68472, 68473, 68474, 68475, 68476, 68477, 68478, 68479, 68608, 68609, 68610, 68611, 68612, 68613, 68614, 68615, 68616, 68617, 68618, 68619, 68620, 68621, 68622, 68623, 68624, 68625, 68626, 68627, 68628, 68629, 68630, 68631, 68632, 68633, 68634, 68635, 68636, 68637, 68638, 68639, 68640, 68641, 68642, 68643, 68644, 68645, 68646, 68647, 68648, 68649, 68650, 68651, 68652, 68653, 68654, 68655, 68656, 68657, 68658, 68659, 68660, 68661, 68662, 68663, 68664, 68665, 68666, 68667, 68668, 68669, 68670, 68671, 68672, 68673, 68674, 68675, 68676, 68677, 68678, 68679, 68680, 126464, 126465, 126466, 126467, 126469, 126470, 126471, 126472, 126473, 126474, 126475, 126476, 126477, 126478, 126479, 126480, 126481, 126482, 126483, 126484, 126485, 126486, 126487, 126488, 126489, 126490, 126491, 126492, 126493, 126494, 126495, 126497, 126498, 126500, 126503, 126505, 126506, 126507, 126508, 126509, 126510, 126511, 126512, 126513, 126514, 126516, 126517, 126518, 126519, 126521, 126523, 126530, 126535, 126537, 126539, 126541, 126542, 126543, 126545, 126546, 126548, 126551, 126553, 126555, 126557, 126559, 126561, 126562, 126564, 126567, 126568, 126569, 126570, 126572, 126573, 126574, 126575, 126576, 126577, 126578, 126580, 126581, 126582, 126583, 126585, 126586, 126587, 126588, 126590, 126592, 126593, 126594, 126595, 126596, 126597, 126598, 126599, 126600, 126601, 126603, 126604, 126605, 126606, 126607, 126608, 126609, 126610, 126611, 126612, 126613, 126614, 126615, 126616, 126617, 126618, 126619, 126625, 126626, 126627, 126629, 126630, 126631, 126632, 126633, 126635, 126636, 126637, 126638, 126639, 126640, 126641, 126642, 126643, 126644, 126645, 126646, 126647, 126648, 126649, 126650, 126651, 1114109];
    c.prototype.applyStyles = function(t, e) {
        e = e || this.div;
        for (var n in t)
            t.hasOwnProperty(n) && (e.style[n] = t[n])
    }
    ,
    c.prototype.formatStyle = function(t, e) {
        return 0 === t ? 0 : t + e
    }
    ,
    u.prototype = f(c.prototype),
    u.prototype.constructor = u,
    d.prototype.move = function(t, e) {
        switch (e = void 0 !== e ? e : this.lineHeight,
        t) {
        case "+x":
            this.left += e,
            this.right += e;
            break;
        case "-x":
            this.left -= e,
            this.right -= e;
            break;
        case "+y":
            this.top += e,
            this.bottom += e;
            break;
        case "-y":
            this.top -= e,
            this.bottom -= e
        }
    }
    ,
    d.prototype.overlaps = function(t) {
        return this.left < t.right && this.right > t.left && this.top < t.bottom && this.bottom > t.top
    }
    ,
    d.prototype.overlapsAny = function(t) {
        for (var e = 0; e < t.length; e++)
            if (this.overlaps(t[e]))
                return !0;
        return !1
    }
    ,
    d.prototype.within = function(t) {
        return this.top >= t.top && this.bottom <= t.bottom && this.left >= t.left && this.right <= t.right
    }
    ,
    d.prototype.overlapsOppositeAxis = function(t, e) {
        switch (e) {
        case "+x":
            return this.left < t.left;
        case "-x":
            return this.right > t.right;
        case "+y":
            return this.top < t.top;
        case "-y":
            return this.bottom > t.bottom
        }
    }
    ,
    d.prototype.intersectPercentage = function(t) {
        var e = Math.max(0, Math.min(this.right, t.right) - Math.max(this.left, t.left))
          , n = Math.max(0, Math.min(this.bottom, t.bottom) - Math.max(this.top, t.top))
          , i = e * n;
        return i / (this.height * this.width)
    }
    ,
    d.prototype.toCSSCompatValues = function(t) {
        return {
            top: this.top - t.top,
            bottom: t.bottom - this.bottom,
            left: this.left - t.left,
            right: t.right - this.right,
            height: this.height,
            width: this.width
        }
    }
    ,
    d.getSimpleBoxPosition = function(t) {
        var e = t.div ? t.div.offsetHeight : t.tagName ? t.offsetHeight : 0
          , n = t.div ? t.div.offsetWidth : t.tagName ? t.offsetWidth : 0
          , i = t.div ? t.div.offsetTop : t.tagName ? t.offsetTop : 0;
        t = t.div ? t.div.getBoundingClientRect() : t.tagName ? t.getBoundingClientRect() : t;
        var o = {
            left: t.left,
            right: t.right,
            top: t.top || i,
            height: t.height || e,
            bottom: t.bottom || i + (t.height || e),
            width: t.width || n
        };
        return o
    }
    ,
    h.StringDecoder = function() {
        return {
            decode: function(t) {
                if (!t)
                    return "";
                if ("string" != typeof t)
                    throw new Error("Error - expected string data.");
                return decodeURIComponent(encodeURIComponent(t))
            }
        }
    }
    ,
    h.convertCueToDOMTree = function(t, e) {
        return t && e ? r(t, e) : null
    }
    ;
    var T = .05
      , w = "sans-serif"
      , j = "1.5%";
    h.processCues = function(t, e, n) {
        function i(t) {
            for (var e = 0; e < t.length; e++)
                if (t[e].hasBeenReset || !t[e].displayState)
                    return !0;
            return !1
        }
        if (!t || !e || !n)
            return null ;
        for (; n.firstChild; )
            n.removeChild(n.firstChild);
        var o = t.document.createElement("div");
        if (o.style.position = "absolute",
        o.style.left = "0",
        o.style.right = "0",
        o.style.top = "0",
        o.style.bottom = "0",
        o.style.margin = j,
        n.appendChild(o),
        i(e)) {
            var s = []
              , r = d.getSimpleBoxPosition(o)
              , a = Math.round(r.height * T * 100) / 100
              , l = {
                font: a + "px " + w
            };
            !function() {
                for (var n, i, a = 0; a < e.length; a++)
                    i = e[a],
                    n = new u(t,i,l),
                    o.appendChild(n.div),
                    p(t, n, r, s),
                    i.displayState = n.div,
                    s.push(d.getSimpleBoxPosition(n))
            }()
        } else
            for (var c = 0; c < e.length; c++)
                o.appendChild(e[c].displayState)
    }
    ,
    h.Parser = function(t, e, n) {
        n || (n = e,
        e = {}),
        e || (e = {}),
        this.window = t,
        this.vttjs = e,
        this.state = "INITIAL",
        this.buffer = "",
        this.decoder = n || new TextDecoder("utf8"),
        this.regionList = []
    }
    ,
    h.Parser.prototype = {
        reportOrThrowError: function(t) {
            if (!(t instanceof e))
                throw t;
            this.onparsingerror && this.onparsingerror(t)
        },
        parse: function(t) {
            function n() {
                for (var t = l.buffer, e = 0; e < t.length && "\r" !== t[e] && "\n" !== t[e]; )
                    ++e;
                var n = t.substr(0, e);
                return "\r" === t[e] && ++e,
                "\n" === t[e] && ++e,
                l.buffer = t.substr(e),
                n
            }
            function r(t) {
                var e = new i;
                if (o(t, function(t, n) {
                    switch (t) {
                    case "id":
                        e.set(t, n);
                        break;
                    case "width":
                        e.percent(t, n);
                        break;
                    case "lines":
                        e.integer(t, n);
                        break;
                    case "regionanchor":
                    case "viewportanchor":
                        var o = n.split(",");
                        if (2 !== o.length)
                            break;
                        var s = new i;
                        if (s.percent("x", o[0]),
                        s.percent("y", o[1]),
                        !s.has("x") || !s.has("y"))
                            break;
                        e.set(t + "X", s.get("x")),
                        e.set(t + "Y", s.get("y"));
                        break;
                    case "scroll":
                        e.alt(t, n, ["up"])
                    }
                }, /=/, /\s/),
                e.has("id")) {
                    var n = new (l.vttjs.VTTRegion || l.window.VTTRegion);
                    n.width = e.get("width", 100),
                    n.lines = e.get("lines", 3),
                    n.regionAnchorX = e.get("regionanchorX", 0),
                    n.regionAnchorY = e.get("regionanchorY", 100),
                    n.viewportAnchorX = e.get("viewportanchorX", 0),
                    n.viewportAnchorY = e.get("viewportanchorY", 100),
                    n.scroll = e.get("scroll", ""),
                    l.onregion && l.onregion(n),
                    l.regionList.push({
                        id: e.get("id"),
                        region: n
                    })
                }
            }
            function a(t) {
                o(t, function(t, e) {
                    switch (t) {
                    case "Region":
                        r(e)
                    }
                }, /:/)
            }
            var l = this;
            t && (l.buffer += l.decoder.decode(t, {
                stream: !0
            }));
            try {
                var c;
                if ("INITIAL" === l.state) {
                    if (!/\r\n|\n/.test(l.buffer))
                        return this;
                    c = n();
                    var u = c.match(/^WEBVTT([ \t].*)?$/);
                    if (!u || !u[0])
                        throw new e(e.Errors.BadSignature);
                    l.state = "HEADER"
                }
                for (var d = !1; l.buffer; ) {
                    if (!/\r\n|\n/.test(l.buffer))
                        return this;
                    switch (d ? d = !1 : c = n(),
                    l.state) {
                    case "HEADER":
                        /:/.test(c) ? a(c) : c || (l.state = "ID");
                        continue;
                    case "NOTE":
                        c || (l.state = "ID");
                        continue;
                    case "ID":
                        if (/^NOTE($|[ \t])/.test(c)) {
                            l.state = "NOTE";
                            break
                        }
                        if (!c)
                            continue;if (l.cue = new (l.vttjs.VTTCue || l.window.VTTCue)(0,0,""),
                        l.state = "CUE",
                        -1 === c.indexOf("-->")) {
                            l.cue.id = c;
                            continue
                        }
                    case "CUE":
                        try {
                            s(c, l.cue, l.regionList)
                        } catch (p) {
                            l.reportOrThrowError(p),
                            l.cue = null ,
                            l.state = "BADCUE";
                            continue
                        }
                        l.state = "CUETEXT";
                        continue;
                    case "CUETEXT":
                        var h = -1 !== c.indexOf("-->");
                        if (!c || h && (d = !0)) {
                            l.oncue && l.oncue(l.cue),
                            l.cue = null ,
                            l.state = "ID";
                            continue
                        }
                        l.cue.text && (l.cue.text += "\n"),
                        l.cue.text += c;
                        continue;
                    case "BADCUE":
                        c || (l.state = "ID");
                        continue
                    }
                }
            } catch (p) {
                l.reportOrThrowError(p),
                "CUETEXT" === l.state && l.cue && l.oncue && l.oncue(l.cue),
                l.cue = null ,
                l.state = "INITIAL" === l.state ? "BADWEBVTT" : "BADCUE"
            }
            return this
        },
        flush: function() {
            var t = this;
            try {
                if (t.buffer += t.decoder.decode(),
                (t.cue || "HEADER" === t.state) && (t.buffer += "\n\n",
                t.parse()),
                "INITIAL" === t.state)
                    throw new e(e.Errors.BadSignature)
            } catch (n) {
                t.reportOrThrowError(n)
            }
            return t.onflush && t.onflush(),
            this
        }
    },
    t.WebVTT = h
}(this, this.vttjs || {}),
!function(t, e, n, i) {
    "use strict";
    var o = function(t) {
        var e, n, i;
        for (n = 1; n < arguments.length; n++) {
            e = arguments[n];
            for (i in e)
                e.hasOwnProperty(i) && (t[i] = e[i])
        }
        return t
    }
      , s = function(t, e, n) {
        var i, o, s = Object.prototype.toString.call(e), r = function(t, e, n) {
            if (t.addEventListener)
                t.addEventListener(e, n);
            else if (t.on)
                t.on(e, n);
            else {
                if (!t.attachEvent)
                    throw new Error("object has no mechanism for adding event listeners");
                t.attachEvent("on" + e, n)
            }
        }
        ;
        switch (s) {
        case "[object String]":
            r(t, e, n);
            break;
        case "[object Array]":
            for (i = 0,
            o = e.length; o > i; i++)
                r(t, e[i], n);
            break;
        case "[object Object]":
            for (i in e)
                e.hasOwnProperty(i) && r(t, i, e[i]);
            break;
        default:
            throw new Error("Unrecognized events parameter type: " + s)
        }
        return t
    }
      , r = function(e) {
        return (t.setImmediate || t.requestAnimationFrame || t.mozRequestAnimationFrame || t.webkitRequestAnimationFrame || t.setTimeout)(e, 0)
    }
      , a = function(e) {
        return (t.clearImmediate || t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.clearTimeout)(e)
    }
      , l = function(t) {
        t.ads.cancelPlayTimeout || (t.ads.cancelPlayTimeout = r(function() {
            t.ads.cancelPlayTimeout = null ,
            t.paused() || t.pause()
        }))
    }
      , c = function(t) {
        var e = t.el().querySelector(".vjs-tech")
          , n = {
            src: t.currentSrc(),
            currentTime: t.currentTime(),
            type: t.currentType()
        };
        return e && (n.nativePoster = e.poster),
        n
    }
      , u = function(t, e) {
        for (var n = t.className.split(/\s+/), i = n.length, o = []; i--; )
            n[i] !== e && o.push(n[i]);
        t.className = o.join(" ")
    }
      , d = function(t, e) {
        var n, o = t.el().querySelector(".vjs-tech"), s = 20, r = function() {
            t.currentTime(e.currentTime),
            t.ended() || t.play()
        }
        , a = function() {
            return o.seekable === i ? void r() : o.seekable.length > 0 ? void r() : void (s-- && setTimeout(a, 50))
        }
        ;
        e.nativePoster && (o.poster = e.nativePoster),
        n = t.src() ? t.src() !== e.src : t.currentSrc() !== e.src,
        n ? (t.src({
            src: e.src,
            type: e.type
        }),
        t.load(),
        t.one("loadedmetadata", a)) : t.ended() || t.play()
    }
      , p = function(t) {
        var e = t.el().querySelector(".vjs-tech");
        e && e.removeAttribute("poster")
    }
      , h = {
        timeout: 5e3,
        prerollTimeout: 100,
        debug: !1
    }
      , f = function(e) {
        var i, f = this, v = o({}, h, e || {});
        f.ads = {
            state: "content-set",
            startLinearAdMode: function() {
                f.trigger("adstart")
            },
            endLinearAdMode: function() {
                f.trigger("adend")
            }
        },
        i = function(e) {
            var n = {
                "content-set": {
                    events: {
                        adsready: function() {
                            this.state = "ads-ready"
                        },
                        play: function() {
                            this.state = "ads-ready?",
                            l(f),
                            p(f)
                        }
                    }
                },
                "ads-ready": {
                    events: {
                        play: function() {
                            this.state = "preroll?",
                            l(f)
                        }
                    }
                },
                "preroll?": {
                    enter: function() {
                        f.el().className += " vjs-ad-loading",
                        f.ads.timeout = t.setTimeout(function() {
                            f.trigger("adtimeout")
                        }, v.prerollTimeout),
                        f.trigger("readyforpreroll")
                    },
                    leave: function() {
                        t.clearTimeout(f.ads.timeout),
                        a(f.ads.cancelPlayTimeout),
                        f.ads.cancelPlayTimeout = null ,
                        u(f.el(), "vjs-ad-loading")
                    },
                    events: {
                        play: function() {
                            l(f)
                        },
                        adstart: function() {
                            this.state = "ad-playback",
                            f.el().className += " vjs-ad-playing"
                        },
                        adtimeout: function() {
                            this.state = "content-playback",
                            f.play()
                        }
                    }
                },
                "ads-ready?": {
                    enter: function() {
                        f.el().className += " vjs-ad-loading",
                        f.ads.timeout = t.setTimeout(function() {
                            f.trigger("adtimeout")
                        }, v.timeout)
                    },
                    leave: function() {
                        t.clearTimeout(f.ads.timeout),
                        u(f.el(), "vjs-ad-loading")
                    },
                    events: {
                        play: function() {
                            l(f)
                        },
                        adsready: function() {
                            this.state = "preroll?"
                        },
                        adtimeout: function() {
                            this.state = "ad-timeout-playback"
                        }
                    }
                },
                "ad-timeout-playback": {
                    events: {
                        adsready: function() {
                            f.paused() ? this.state = "ads-ready" : this.state = "preroll?"
                        },
                        contentupdate: function() {
                            f.paused() ? this.state = "content-set" : this.state = "ads-ready?"
                        }
                    }
                },
                "ad-playback": {
                    enter: function() {
                        this.snapshot = c(f),
                        p(f)
                    },
                    leave: function() {
                        u(f.el(), "vjs-ad-playing"),
                        d(f, this.snapshot)
                    },
                    events: {
                        adend: function() {
                            this.state = "content-playback"
                        }
                    }
                },
                "content-playback": {
                    events: {
                        adstart: function() {
                            this.state = "ad-playback",
                            f.el().className += " vjs-ad-playing",
                            p(f)
                        },
                        contentupdate: function() {
                            f.paused() ? this.state = "content-set" : this.state = "ads-ready?"
                        }
                    }
                }
            };
            !function(t) {
                var i = function() {}
                ;
                (n[t].events[e.type] || i).apply(f.ads),
                t !== f.ads.state && ((n[t].leave || i).apply(f.ads),
                (n[f.ads.state].enter || i).apply(f.ads),
                v.debug && videojs.log("ads", t + " -> " + f.ads.state))
            }(f.ads.state)
        }
        ,
        s(f, n.Html5.Events.concat(["adtimeout", "contentupdate", "adsready", "adstart", "adend"]), i),
        f.ads.contentSrc = f.currentSrc(),
        function() {
            var t = function() {
                var t;
                "ad-playback" !== f.ads.state && (t = f.currentSrc(),
                t !== f.ads.contentSrc && (f.trigger({
                    type: "contentupdate",
                    oldValue: f.ads.contentSrc,
                    newValue: t
                }),
                f.ads.contentSrc = t))
            }
            ;
            f.on("loadstart", t),
            r(t)
        }(),
        f.paused() || i({
            type: "play"
        })
    }
    ;
    n.plugin("ads", f)
}(window, document, videojs),
!function(t) {
    window.DMVAST = t()
}(function() {
    return function t(e, n, i) {
        function o(r, a) {
            if (!n[r]) {
                if (!e[r]) {
                    var l = "function" == typeof require && require;
                    if (!a && l)
                        return l(r, !0);
                    if (s)
                        return s(r, !0);
                    throw new Error("Cannot find module '" + r + "'")
                }
                var c = n[r] = {
                    exports: {}
                };
                e[r][0].call(c.exports, function(t) {
                    var n = e[r][1][t];
                    return o(n ? n : t)
                }, c, c.exports, t, e, n, i)
            }
            return n[r].exports
        }
        for (var s = "function" == typeof require && require, r = 0; r < i.length; r++)
            o(i[r]);
        return o
    }({
        1: [function(t, e, n) {
            function i() {
                this._events = this._events || {},
                this._maxListeners = this._maxListeners || void 0
            }
            function o(t) {
                return "function" == typeof t
            }
            function s(t) {
                return "number" == typeof t
            }
            function r(t) {
                return "object" == typeof t && null !== t
            }
            function a(t) {
                return void 0 === t
            }
            e.exports = i,
            i.EventEmitter = i,
            i.prototype._events = void 0,
            i.prototype._maxListeners = void 0,
            i.defaultMaxListeners = 10,
            i.prototype.setMaxListeners = function(t) {
                if (!s(t) || 0 > t || isNaN(t))
                    throw TypeError("n must be a positive number");
                return this._maxListeners = t,
                this
            }
            ,
            i.prototype.emit = function(t) {
                var e, n, i, s, l, c;
                if (this._events || (this._events = {}),
                "error" === t && (!this._events.error || r(this._events.error) && !this._events.error.length))
                    throw e = arguments[1],
                    e instanceof Error ? e : TypeError('Uncaught, unspecified "error" event.');
                if (n = this._events[t],
                a(n))
                    return !1;
                if (o(n))
                    switch (arguments.length) {
                    case 1:
                        n.call(this);
                        break;
                    case 2:
                        n.call(this, arguments[1]);
                        break;
                    case 3:
                        n.call(this, arguments[1], arguments[2]);
                        break;
                    default:
                        for (i = arguments.length,
                        s = new Array(i - 1),
                        l = 1; i > l; l++)
                            s[l - 1] = arguments[l];
                        n.apply(this, s)
                    }
                else if (r(n)) {
                    for (i = arguments.length,
                    s = new Array(i - 1),
                    l = 1; i > l; l++)
                        s[l - 1] = arguments[l];
                    for (c = n.slice(),
                    i = c.length,
                    l = 0; i > l; l++)
                        c[l].apply(this, s)
                }
                return !0
            }
            ,
            i.prototype.addListener = function(t, e) {
                var n;
                if (!o(e))
                    throw TypeError("listener must be a function");
                if (this._events || (this._events = {}),
                this._events.newListener && this.emit("newListener", t, o(e.listener) ? e.listener : e),
                this._events[t] ? r(this._events[t]) ? this._events[t].push(e) : this._events[t] = [this._events[t], e] : this._events[t] = e,
                r(this._events[t]) && !this._events[t].warned) {
                    var n;
                    n = a(this._maxListeners) ? i.defaultMaxListeners : this._maxListeners,
                    n && n > 0 && this._events[t].length > n && (this._events[t].warned = !0,
                    console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[t].length),
                    console.trace())
                }
                return this
            }
            ,
            i.prototype.on = i.prototype.addListener,
            i.prototype.once = function(t, e) {
                function n() {
                    this.removeListener(t, n),
                    i || (i = !0,
                    e.apply(this, arguments))
                }
                if (!o(e))
                    throw TypeError("listener must be a function");
                var i = !1;
                return n.listener = e,
                this.on(t, n),
                this
            }
            ,
            i.prototype.removeListener = function(t, e) {
                var n, i, s, a;
                if (!o(e))
                    throw TypeError("listener must be a function");
                if (!this._events || !this._events[t])
                    return this;
                if (n = this._events[t],
                s = n.length,
                i = -1,
                n === e || o(n.listener) && n.listener === e)
                    delete this._events[t],
                    this._events.removeListener && this.emit("removeListener", t, e);
                else if (r(n)) {
                    for (a = s; a-- > 0; )
                        if (n[a] === e || n[a].listener && n[a].listener === e) {
                            i = a;
                            break
                        }
                    if (0 > i)
                        return this;
                    1 === n.length ? (n.length = 0,
                    delete this._events[t]) : n.splice(i, 1),
                    this._events.removeListener && this.emit("removeListener", t, e)
                }
                return this
            }
            ,
            i.prototype.removeAllListeners = function(t) {
                var e, n;
                if (!this._events)
                    return this;
                if (!this._events.removeListener)
                    return 0 === arguments.length ? this._events = {} : this._events[t] && delete this._events[t],
                    this;
                if (0 === arguments.length) {
                    for (e in this._events)
                        "removeListener" !== e && this.removeAllListeners(e);
                    return this.removeAllListeners("removeListener"),
                    this._events = {},
                    this
                }
                if (n = this._events[t],
                o(n))
                    this.removeListener(t, n);
                else
                    for (; n.length; )
                        this.removeListener(t, n[n.length - 1]);
                return delete this._events[t],
                this
            }
            ,
            i.prototype.listeners = function(t) {
                var e;
                return e = this._events && this._events[t] ? o(this._events[t]) ? [this._events[t]] : this._events[t].slice() : []
            }
            ,
            i.listenerCount = function(t, e) {
                var n;
                return n = t._events && t._events[e] ? o(t._events[e]) ? 1 : t._events[e].length : 0
            }
        }
        , {}],
        2: [function(t, e, n) {
            var i;
            i = function() {
                function t() {
                    this.errorURLTemplates = [],
                    this.impressionURLTemplates = [],
                    this.creatives = []
                }
                return t
            }(),
            e.exports = i
        }
        , {}],
        3: [function(t, e, n) {
            var i, o, s;
            o = t("./parser.coffee"),
            s = t("./util.coffee"),
            i = function() {
                function t() {}
                return t.cappingFreeLunch = 0,
                t.cappingMinimumTimeInterval = 0,
                t.timeout = 0,
                t.get = function(t, e) {
                    var n;
                    return n = +new Date,
                    this.totalCallsTimeout < n ? (this.totalCalls = 1,
                    this.totalCallsTimeout = n + 36e5) : this.totalCalls++,
                    this.cappingFreeLunch >= this.totalCalls ? void e(null ) : n - this.lastSuccessfullAd < this.cappingMinimumTimeInterval ? void e(null ) : o.parse(t, function(t) {
                        return function(t) {
                            return e(t)
                        }
                    }(this))
                }
                ,
                function() {
                    var e, n;
                    n = s.storage,
                    e = Object.defineProperty,
                    ["lastSuccessfullAd", "totalCalls", "totalCallsTimeout"].forEach(function(i) {
                        e(t, i, {
                            get: function() {
                                return n.getItem(i)
                            },
                            set: function(t) {
                                return n.setItem(i, t)
                            },
                            configurable: !1,
                            enumerable: !0
                        })
                    }),
                    null == t.totalCalls && (t.totalCalls = 0),
                    null == t.totalCallsTimeout && (t.totalCallsTimeout = 0)
                }(),
                t
            }(),
            e.exports = i
        }
        , {
            "./parser.coffee": 8,
            "./util.coffee": 14
        }],
        4: [function(t, e, n) {
            var i;
            i = function() {
                function t() {
                    this.id = null ,
                    this.width = 0,
                    this.height = 0,
                    this.type = null ,
                    this.staticResource = null ,
                    this.companionClickThroughURLTemplate = null ,
                    this.trackingEvents = {}
                }
                return t
            }(),
            e.exports = i
        }
        , {}],
        5: [function(t, e, n) {
            var i, o, s, r, a = {}.hasOwnProperty, l = function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var i in e)
                    a.call(e, i) && (t[i] = e[i]);
                return n.prototype = e.prototype,
                t.prototype = new n,
                t.__super__ = e.prototype,
                t
            }
            ;
            i = function() {
                function t() {
                    this.trackingEvents = {}
                }
                return t
            }(),
            s = function(t) {
                function e() {
                    e.__super__.constructor.apply(this, arguments),
                    this.type = "linear",
                    this.duration = 0,
                    this.skipDelay = null ,
                    this.mediaFiles = [],
                    this.videoClickThroughURLTemplate = null ,
                    this.videoClickTrackingURLTemplate = null
                }
                return l(e, t),
                e
            }(i),
            r = function(t) {
                function e() {
                    return e.__super__.constructor.apply(this, arguments)
                }
                return l(e, t),
                e
            }(i),
            o = function() {
                function t() {
                    this.type = "companion",
                    this.variations = []
                }
                return t
            }(),
            e.exports = {
                VASTCreativeLinear: s,
                VASTCreativeNonLinear: r,
                VASTCreativeCompanion: o
            }
        }
        , {}],
        6: [function(t, e, n) {
            e.exports = {
                client: t("./client.coffee"),
                tracker: t("./tracker.coffee"),
                parser: t("./parser.coffee"),
                util: t("./util.coffee")
            }
        }
        , {
            "./client.coffee": 3,
            "./parser.coffee": 8,
            "./tracker.coffee": 10,
            "./util.coffee": 14
        }],
        7: [function(t, e, n) {
            var i;
            i = function() {
                function t() {
                    this.fileURL = null ,
                    this.deliveryType = "progressive",
                    this.mimeType = null ,
                    this.codec = null ,
                    this.bitrate = 0,
                    this.minBitrate = 0,
                    this.maxBitrate = 0,
                    this.width = 0,
                    this.height = 0
                }
                return t
            }(),
            e.exports = i
        }
        , {}],
        8: [function(t, e, n) {
            var i, o, s, r, a, l, c, u, d, p = [].indexOf || function(t) {
                for (var e = 0, n = this.length; n > e; e++)
                    if (e in this && this[e] === t)
                        return e;
                return -1
            }
            ;
            i = t("./urlhandler.coffee"),
            u = t("./response.coffee"),
            o = t("./ad.coffee"),
            d = t("./util.coffee"),
            a = t("./creative.coffee").VASTCreativeLinear,
            r = t("./creative.coffee").VASTCreativeCompanion,
            l = t("./mediafile.coffee"),
            s = t("./companionad.coffee"),
            c = function() {
                function t() {}
                var e;
                return e = [],
                t.addURLTemplateFilter = function(t) {
                    "function" == typeof t && e.push(t)
                }
                ,
                t.removeURLTemplateFilter = function() {
                    return e.pop()
                }
                ,
                t.countURLTemplateFilters = function() {
                    return e.length
                }
                ,
                t.clearUrlTemplateFilters = function() {
                    return e = []
                }
                ,
                t.parse = function(t, e) {
                    return this._parse(t, null , function(t, n) {
                        return e(n)
                    })
                }
                ,
                t._parse = function(t, n, o) {
                    var s, r, a;
                    for (r = 0,
                    a = e.length; a > r; r++)
                        s = e[r],
                        t = s(t);
                    return null == n && (n = []),
                    n.push(t),
                    i.get(t, function(e) {
                        return function(i, s) {
                            var r, a, l, c, h, f, v, m, y, g, b;
                            if (null != i)
                                return o(i);
                            if (h = new u,
                            null == (null != s ? s.documentElement : void 0) || "VAST" !== s.documentElement.nodeName)
                                return o();
                            for (g = s.documentElement.childNodes,
                            f = 0,
                            m = g.length; m > f; f++)
                                c = g[f],
                                "Error" === c.nodeName && h.errorURLTemplates.push(e.parseNodeText(c));
                            for (b = s.documentElement.childNodes,
                            v = 0,
                            y = b.length; y > v; v++)
                                c = b[v],
                                "Ad" === c.nodeName && (r = e.parseAdElement(c),
                                null != r ? h.ads.push(r) : d.track(h.errorURLTemplates, {
                                    ERRORCODE: 101
                                }));
                            for (a = function() {
                                var t, e, n;
                                if (h) {
                                    for (n = h.ads,
                                    t = 0,
                                    e = n.length; e > t; t++)
                                        if (r = n[t],
                                        null != r.nextWrapperURL)
                                            return;
                                    return 0 === h.ads.length && (d.track(h.errorURLTemplates, {
                                        ERRORCODE: 303
                                    }),
                                    h = null ),
                                    o(null , h)
                                }
                            }
                            ,
                            l = h.ads.length; l--; )
                                r = h.ads[l],
                                null != r.nextWrapperURL && !function(i) {
                                    var o, s;
                                    return n.length >= 10 || (s = i.nextWrapperURL,
                                    p.call(n, s) >= 0) ? (d.track(i.errorURLTemplates, {
                                        ERRORCODE: 302
                                    }),
                                    h.ads.splice(h.ads.indexOf(i), 1),
                                    void a()) : (-1 === i.nextWrapperURL.indexOf("://") && (o = t.slice(0, t.lastIndexOf("/")),
                                    i.nextWrapperURL = "" + o + "/" + i.nextWrapperURL),
                                    e._parse(i.nextWrapperURL, n, function(t, e) {
                                        var n, o, s, r, l, c, u, p, f, v, m, y, g, b;
                                        if (null != t)
                                            d.track(i.errorURLTemplates, {
                                                ERRORCODE: 301
                                            }),
                                            h.ads.splice(h.ads.indexOf(i), 1);
                                        else if (null == e)
                                            d.track(i.errorURLTemplates, {
                                                ERRORCODE: 303
                                            }),
                                            h.ads.splice(h.ads.indexOf(i), 1);
                                        else
                                            for (h.errorURLTemplates = h.errorURLTemplates.concat(e.errorURLTemplates),
                                            s = h.ads.indexOf(i),
                                            h.ads.splice(s, 1),
                                            y = e.ads,
                                            c = 0,
                                            u = y.length; u > c; c++) {
                                                if (r = y[c],
                                                r.errorURLTemplates = i.errorURLTemplates.concat(r.errorURLTemplates),
                                                r.impressionURLTemplates = i.impressionURLTemplates.concat(r.impressionURLTemplates),
                                                null != i.trackingEvents)
                                                    for (g = r.creatives,
                                                    v = 0,
                                                    p = g.length; p > v; v++)
                                                        for (n = g[v],
                                                        b = Object.keys(i.trackingEvents),
                                                        m = 0,
                                                        f = b.length; f > m; m++)
                                                            o = b[m],
                                                            (l = n.trackingEvents)[o] || (l[o] = []),
                                                            n.trackingEvents[o] = n.trackingEvents[o].concat(i.trackingEvents[o]);
                                                h.ads.splice(s, 0, r)
                                            }
                                        return delete i.nextWrapperURL,
                                        a()
                                    }))
                                }(r);
                            return a()
                        }
                    }(this))
                }
                ,
                t.childByName = function(t, e) {
                    var n, i, o, s;
                    for (s = t.childNodes,
                    i = 0,
                    o = s.length; o > i; i++)
                        if (n = s[i],
                        n.nodeName === e)
                            return n
                }
                ,
                t.childsByName = function(t, e) {
                    var n, i, o, s, r;
                    for (i = [],
                    r = t.childNodes,
                    o = 0,
                    s = r.length; s > o; o++)
                        n = r[o],
                        n.nodeName === e && i.push(n);
                    return i
                }
                ,
                t.parseAdElement = function(t) {
                    var e, n, i, o;
                    for (o = t.childNodes,
                    n = 0,
                    i = o.length; i > n; n++) {
                        if (e = o[n],
                        "Wrapper" === e.nodeName)
                            return this.parseWrapperElement(e);
                        if ("InLine" === e.nodeName)
                            return this.parseInLineElement(e)
                    }
                }
                ,
                t.parseWrapperElement = function(t) {
                    var e, n, i;
                    return e = this.parseInLineElement(t),
                    i = this.childByName(t, "VASTAdTagURI"),
                    null != i && (e.nextWrapperURL = this.parseNodeText(i)),
                    n = e.creatives[0],
                    null != n && null != n.trackingEvents && (e.trackingEvents = n.trackingEvents),
                    null != e.nextWrapperURL ? e : void 0
                }
                ,
                t.parseInLineElement = function(t) {
                    var e, n, i, s, r, a, l, c, u, d, p, h, f, v;
                    for (e = new o,
                    h = t.childNodes,
                    a = 0,
                    u = h.length; u > a; a++)
                        switch (r = h[a],
                        r.nodeName) {
                        case "Error":
                            e.errorURLTemplates.push(this.parseNodeText(r));
                            break;
                        case "Impression":
                            e.impressionURLTemplates.push(this.parseNodeText(r));
                            break;
                        case "Creatives":
                            for (f = this.childsByName(r, "Creative"),
                            l = 0,
                            d = f.length; d > l; l++)
                                for (i = f[l],
                                v = i.childNodes,
                                c = 0,
                                p = v.length; p > c; c++)
                                    switch (s = v[c],
                                    s.nodeName) {
                                    case "Linear":
                                        n = this.parseCreativeLinearElement(s),
                                        n && e.creatives.push(n);
                                        break;
                                    case "CompanionAds":
                                        n = this.parseCompanionAd(s),
                                        n && e.creatives.push(n)
                                    }
                        }
                    return e
                }
                ,
                t.parseCreativeLinearElement = function(t) {
                    var e, n, i, o, s, r, c, u, d, p, h, f, v, m, y, g, b, T, w, j, k, x, C, S;
                    if (e = new a,
                    e.duration = this.parseDuration(this.parseNodeText(this.childByName(t, "Duration"))),
                    -1 === e.duration && "Wrapper" !== t.parentNode.parentNode.parentNode.nodeName)
                        return null ;
                    for (c = t.getAttribute("skipoffset"),
                    null == c ? e.skipDelay = null : "%" === c.charAt(c.length - 1) ? (r = parseInt(c, 10),
                    e.skipDelay = e.duration * (r / 100)) : e.skipDelay = this.parseDuration(c),
                    h = this.childByName(t, "VideoClicks"),
                    null != h && (e.videoClickThroughURLTemplate = this.parseNodeText(this.childByName(h, "ClickThrough")),
                    e.videoClickTrackingURLTemplate = this.parseNodeText(this.childByName(h, "ClickTracking"))),
                    k = this.childsByName(t, "TrackingEvents"),
                    v = 0,
                    b = k.length; b > v; v++)
                        for (d = k[v],
                        x = this.childsByName(d, "Tracking"),
                        m = 0,
                        T = x.length; T > m; m++)
                            u = x[m],
                            n = u.getAttribute("event"),
                            p = this.parseNodeText(u),
                            null != n && null != p && (null == (f = e.trackingEvents)[n] && (f[n] = []),
                            e.trackingEvents[n].push(p));
                    for (C = this.childsByName(t, "MediaFiles"),
                    y = 0,
                    w = C.length; w > y; y++)
                        for (s = C[y],
                        S = this.childsByName(s, "MediaFile"),
                        g = 0,
                        j = S.length; j > g; g++)
                            o = S[g],
                            i = new l,
                            i.fileURL = this.parseNodeText(o),
                            i.deliveryType = o.getAttribute("delivery"),
                            i.codec = o.getAttribute("codec"),
                            i.mimeType = o.getAttribute("type"),
                            i.bitrate = parseInt(o.getAttribute("bitrate") || 0),
                            i.minBitrate = parseInt(o.getAttribute("minBitrate") || 0),
                            i.maxBitrate = parseInt(o.getAttribute("maxBitrate") || 0),
                            i.width = parseInt(o.getAttribute("width") || 0),
                            i.height = parseInt(o.getAttribute("height") || 0),
                            e.mediaFiles.push(i);
                    return e
                }
                ,
                t.parseCompanionAd = function(t) {
                    var e, n, i, o, a, l, c, u, d, p, h, f, v, m, y, g, b, T, w, j, k;
                    for (i = new r,
                    T = this.childsByName(t, "Companion"),
                    p = 0,
                    m = T.length; m > p; p++) {
                        for (n = T[p],
                        e = new s,
                        e.id = n.getAttribute("id") || null ,
                        e.width = n.getAttribute("width"),
                        e.height = n.getAttribute("height"),
                        w = this.childsByName(n, "StaticResource"),
                        h = 0,
                        y = w.length; y > h; h++)
                            a = w[h],
                            e.type = a.getAttribute("creativeType") || 0,
                            e.staticResource = this.parseNodeText(a);
                        for (j = this.childsByName(n, "TrackingEvents"),
                        f = 0,
                        g = j.length; g > f; f++)
                            for (c = j[f],
                            k = this.childsByName(c, "Tracking"),
                            v = 0,
                            b = k.length; b > v; v++)
                                l = k[v],
                                o = l.getAttribute("event"),
                                u = this.parseNodeText(l),
                                null != o && null != u && (null == (d = e.trackingEvents)[o] && (d[o] = []),
                                e.trackingEvents[o].push(u));
                        e.companionClickThroughURLTemplate = this.parseNodeText(this.childByName(n, "CompanionClickThrough")),
                        i.variations.push(e)
                    }
                    return i
                }
                ,
                t.parseDuration = function(t) {
                    var e, n, i, o, s;
                    return null == t ? -1 : (e = t.split(":"),
                    3 !== e.length ? -1 : (s = e[2].split("."),
                    o = parseInt(s[0]),
                    2 === s.length && (o += parseFloat("0." + s[1])),
                    i = parseInt(60 * e[1]),
                    n = parseInt(60 * e[0] * 60),
                    isNaN(n || isNaN(i || isNaN(o || i > 3600 || o > 60))) ? -1 : n + i + o))
                }
                ,
                t.parseNodeText = function(t) {
                    return t && (t.textContent || t.text)
                }
                ,
                t
            }(),
            e.exports = c
        }
        , {
            "./ad.coffee": 2,
            "./companionad.coffee": 4,
            "./creative.coffee": 5,
            "./mediafile.coffee": 7,
            "./response.coffee": 9,
            "./urlhandler.coffee": 11,
            "./util.coffee": 14
        }],
        9: [function(t, e, n) {
            var i;
            i = function() {
                function t() {
                    this.ads = [],
                    this.errorURLTemplates = []
                }
                return t
            }(),
            e.exports = i
        }
        , {}],
        10: [function(t, e, n) {
            var i, o, s, r, a, l = {}.hasOwnProperty, c = function(t, e) {
                function n() {
                    this.constructor = t
                }
                for (var i in e)
                    l.call(e, i) && (t[i] = e[i]);
                return n.prototype = e.prototype,
                t.prototype = new n,
                t.__super__ = e.prototype,
                t
            }
            ;
            o = t("./client.coffee"),
            a = t("./util.coffee"),
            s = t("./creative.coffee").VASTCreativeLinear,
            i = t("events").EventEmitter,
            r = function(t) {
                function e(t, e) {
                    var n, i, r;
                    this.ad = t,
                    this.creative = e,
                    this.muted = !1,
                    this.impressed = !1,
                    this.skipable = !1,
                    this.skipDelayDefault = -1,
                    this.trackingEvents = {},
                    this.emitAlwaysEvents = ["creativeView", "start", "firstQuartile", "midpoint", "thirdQuartile", "complete", "rewind", "skip", "closeLinear", "close"],
                    r = e.trackingEvents;
                    for (n in r)
                        i = r[n],
                        this.trackingEvents[n] = i.slice(0);
                    e instanceof s ? (this.assetDuration = e.duration,
                    this.quartiles = {
                        firstQuartile: Math.round(25 * this.assetDuration) / 100,
                        midpoint: Math.round(50 * this.assetDuration) / 100,
                        thirdQuartile: Math.round(75 * this.assetDuration) / 100
                    },
                    this.skipDelay = e.skipDelay,
                    this.linear = !0,
                    this.clickThroughURLTemplate = e.videoClickThroughURLTemplate,
                    this.clickTrackingURLTemplate = e.videoClickTrackingURLTemplate) : (this.skipDelay = -1,
                    this.linear = !1),
                    this.on("start", function() {
                        o.lastSuccessfullAd = +new Date
                    })
                }
                return c(e, t),
                e.prototype.setProgress = function(t) {
                    var e, n, i, o, s, r, a, l, c;
                    if (s = null === this.skipDelay ? this.skipDelayDefault : this.skipDelay,
                    -1 === s || this.skipable || (s > t ? this.emit("skip-countdown", s - t) : (this.skipable = !0,
                    this.emit("skip-countdown", 0))),
                    this.linear && this.assetDuration > 0) {
                        if (n = [],
                        t > 0) {
                            n.push("start"),
                            i = Math.round(t / this.assetDuration * 100),
                            n.push("progress-" + i + "%"),
                            c = this.quartiles;
                            for (o in c)
                                r = c[o],
                                t >= r && r + 1 >= t && n.push(o)
                        }
                        for (a = 0,
                        l = n.length; l > a; a++)
                            e = n[a],
                            this.track(e, !0);
                        t < this.progress && this.track("rewind")
                    }
                    return this.progress = t
                }
                ,
                e.prototype.setMuted = function(t) {
                    return this.muted !== t && this.track(t ? "muted" : "unmuted"),
                    this.muted = t
                }
                ,
                e.prototype.setPaused = function(t) {
                    return this.paused !== t && this.track(t ? "pause" : "resume"),
                    this.paused = t
                }
                ,
                e.prototype.setFullscreen = function(t) {
                    return this.fullscreen !== t && this.track(t ? "fullscreen" : "exitFullscreen"),
                    this.fullscreen = t
                }
                ,
                e.prototype.setSkipDelay = function(t) {
                    return "number" == typeof t ? this.skipDelay = t : void 0
                }
                ,
                e.prototype.load = function() {
                    return this.impressed ? void 0 : (this.impressed = !0,
                    this.trackURLs(this.ad.impressionURLTemplates),
                    this.track("creativeView"))
                }
                ,
                e.prototype.errorWithCode = function(t) {
                    return this.trackURLs(this.ad.errorURLTemplates, {
                        ERRORCODE: t
                    })
                }
                ,
                e.prototype.complete = function() {
                    return this.track("complete")
                }
                ,
                e.prototype.stop = function() {
                    return this.track(this.linear ? "closeLinear" : "close")
                }
                ,
                e.prototype.skip = function() {
                    return this.track("skip"),
                    this.trackingEvents = []
                }
                ,
                e.prototype.click = function() {
                    var t, e;
                    return null != this.clickTrackingURLTemplate && this.trackURLs([this.clickTrackingURLTemplate]),
                    null != this.clickThroughURLTemplate ? (this.linear && (e = {
                        CONTENTPLAYHEAD: this.progressFormated()
                    }),
                    t = a.resolveURLTemplates([this.clickThroughURLTemplate], e)[0],
                    this.emit("clickthrough", t)) : void 0
                }
                ,
                e.prototype.track = function(t, e) {
                    var n, i;
                    null == e && (e = !1),
                    "closeLinear" === t && null == this.trackingEvents[t] && null != this.trackingEvents.close && (t = "close"),
                    i = this.trackingEvents[t],
                    n = this.emitAlwaysEvents.indexOf(t),
                    null != i ? (this.emit(t, ""),
                    this.trackURLs(i)) : -1 !== n && this.emit(t, ""),
                    e === !0 && (delete this.trackingEvents[t],
                    n > -1 && this.emitAlwaysEvents.splice(n, 1))
                }
                ,
                e.prototype.trackURLs = function(t, e) {
                    return null == e && (e = {}),
                    this.linear && (e.CONTENTPLAYHEAD = this.progressFormated()),
                    a.track(t, e)
                }
                ,
                e.prototype.progressFormated = function() {
                    var t, e, n, i, o;
                    return o = parseInt(this.progress),
                    t = o / 3600,
                    t.length < 2 && (t = "0" + t),
                    e = o / 60 % 60,
                    e.length < 2 && (e = "0" + e),
                    i = o % 60,
                    i.length < 2 && (i = "0" + e),
                    n = parseInt(100 * (this.progress - o)),
                    "" + t + ":" + e + ":" + i + "." + n
                }
                ,
                e
            }(i),
            e.exports = r
        }
        , {
            "./client.coffee": 3,
            "./creative.coffee": 5,
            "./util.coffee": 14,
            events: 1
        }],
        11: [function(t, e, n) {
            var i, o, s;
            s = t("./urlhandlers/xmlhttprequest.coffee"),
            o = t("./urlhandlers/flash.coffee"),
            i = function() {
                function e() {}
                return e.get = function(e, n) {
                    return "undefined" == typeof window || null === window ? t("./urlhandlers/node.coffee").get(e, n) : s.supported() ? s.get(e, n) : o.supported() ? o.get(e, n) : n()
                }
                ,
                e
            }(),
            e.exports = i
        }
        , {
            "./urlhandlers/flash.coffee": 12,
            "./urlhandlers/xmlhttprequest.coffee": 13
        }],
        12: [function(t, e, n) {
            var i;
            i = function() {
                function t() {}
                return t.xdr = function() {
                    var t;
                    return window.XDomainRequest && (t = new XDomainRequest),
                    t
                }
                ,
                t.supported = function() {
                    return !!this.xdr()
                }
                ,
                t.get = function(t, e) {
                    var n, i;
                    return (i = "function" == typeof window.ActiveXObject ? new window.ActiveXObject("Microsoft.XMLDOM") : void 0) ? (i.async = !1,
                    n = this.xdr(),
                    n.open("GET", t),
                    n.send(),
                    n.onload = function() {
                        return i.loadXML(n.responseText),
                        e(null , i)
                    }
                    ) : e()
                }
                ,
                t
            }(),
            e.exports = i
        }
        , {}],
        13: [function(t, e, n) {
            var i;
            i = function() {
                function t() {}
                return t.xhr = function() {
                    var t;
                    return t = new window.XMLHttpRequest,
                    "withCredentials"in t ? t : void 0
                }
                ,
                t.supported = function() {
                    return !!this.xhr()
                }
                ,
                t.get = function(t, e) {
                    var n = '<VAST xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" version="2.0" xsi:noNamespaceSchemaLocation="vast.xsd"><Ad id="270" ><InLine><AdSystem version="2.0"></AdSystem><AdTitle></AdTitle><Description></Description><Impression><![CDATA[]]></Impression><Creatives><Creative sequence="1" AdID="270"><Linear><Duration>00:00:35</Duration><TrackingEvents><Tracking event="start"><![CDATA[]]></Tracking><Tracking event="firstQuartile"><![CDATA[]]></Tracking><Tracking event="midpoint"><![CDATA[]]></Tracking><Tracking event="thirdQuartile"><![CDATA[]]></Tracking><Tracking event="complete"><![CDATA[]]></Tracking></TrackingEvents><VideoClicks><ClickThrough><![CDATA[]]></ClickThrough></VideoClicks><MediaFiles><MediaFile delivery="streaming" type="application/x-mpegURL" bitrate="400" width="640" height=""><![CDATA[]]></MediaFile></MediaFiles></Linear></Creative></Creatives></InLine></Ad></VAST>'
                      , i = new DOMParser
                      , o = i.parseFromString(n, "text/xml");
                    return e(null , o)
                }
                ,
                t
            }(),
            e.exports = i
        }
        , {}],
        14: [function(t, e, n) {
            var i;
            i = function() {
                function t() {}
                return t.track = function(t, e) {
                    var n, i, o, s, r, a;
                    for (i = this.resolveURLTemplates(t, e),
                    a = [],
                    s = 0,
                    r = i.length; r > s; s++)
                        n = i[s],
                        "undefined" != typeof window && null !== window && (o = new Image,
                        a.push(o.src = n));
                    return a
                }
                ,
                t.resolveURLTemplates = function(t, e) {
                    var n, i, o, s, r, a, l, c, u;
                    i = [],
                    null == e && (e = {}),
                    "CACHEBUSTING"in e || (e.CACHEBUSTING = Math.round(1e10 * Math.random())),
                    e.random = e.CACHEBUSTING;
                    try {
                        for (c = 0,
                        u = t.length; u > c; c++) {
                            n = t[c],
                            a = n;
                            for (o in e)
                                l = e[o],
                                s = "[" + o + "]",
                                r = "%%" + o + "%%",
                                a = a.replace(s, l),
                                a = a.replace(r, l);
                            i.push(a)
                        }
                    } catch (o) {
                        return !1
                    }
                    return i
                }
                ,
                t.storage = function() {
                    var t, e, n, i;
                    try {
                        n = "undefined" != typeof window && null !== window ? window.localStorage || window.sessionStorage : null
                    } catch (o) {
                        i = o,
                        n = null
                    }
                    return e = function(t) {
                        var e, n;
                        try {
                            if (n = "__VASTUtil__",
                            t.setItem(n, n),
                            t.getItem(n) !== n)
                                return !0
                        } catch (i) {
                            return e = i,
                            !0
                        }
                        return !1
                    }
                    ,
                    (null == n || e(n)) && (t = {},
                    n = {
                        length: 0,
                        getItem: function(e) {
                            return t[e]
                        },
                        setItem: function(e, n) {
                            t[e] = n,
                            this.length = Object.keys(t).length
                        },
                        removeItem: function(e) {
                            delete t[e],
                            this.length = Object.keys(t).length
                        },
                        clear: function() {
                            t = {},
                            this.length = 0
                        }
                    }),
                    n
                }(),
                t
            }(),
            e.exports = i
        }
        , {}]
    }, {}, [6])(6)
}),
function(t, e, n) {
    "use strict";
    var i = function(t) {
        var e, n, i;
        for (n = 1; n < arguments.length; n++) {
            e = arguments[n];
            for (i in e)
                e.hasOwnProperty(i) && (t[i] = e[i])
        }
        return t
    }
      , o = {
        skip: 5
    }
      , s = function(e, i) {
        var o = decodeURI(i.source);
        return {
            createSourceObjects: function(n) {
                var i, s, r, a = {}, l = e.options().techOrder;
                for (i = 0,
                s = l.length; s > i; i++) {
                    var c = l[i].charAt(0).toUpperCase() + l[i].slice(1);
                    if (r = t.videojs[c],
                    r && r.isSupported())
                        for (var u = 0, d = n.length; d > u; u++) {
                            var p = n[u]
                              , h = {
                                type: p.mimeType,
                                src: p.fileURL
                            };
                            r.canPlaySource(h) && (void 0 === a[l[i]] && (a[l[i]] = []),
                            a[l[i]].push({
                                type: p.mimeType,
                                src: o,
                                width: p.width,
                                height: p.height
                            }))
                        }
                }
                var f = [];
                for (s = 0; s < l.length; s++)
                    if (r = l[s],
                    void 0 !== a[r])
                        for (i = 0; i < a[r].length; i++)
                            f.push(a[r][i]);
                return f
            },
            getContent: function() {
                n.client.get(i.url, function(t) {
                    if (t)
                        for (var i = 0; i < t.ads.length; i++) {
                            var o = t.ads[i];
                            e.vast.companion = void 0;
                            for (var s = 0; s < o.creatives.length; s++) {
                                var r = o.creatives[s]
                                  , a = !1
                                  , l = !1;
                                if ("linear" !== r.type || a)
                                    "companion" !== r.type || l || (e.vast.companion = r,
                                    l = !0);
                                else if (r.mediaFiles.length) {
                                    if (e.vast.sources = e.vast.createSourceObjects(r.mediaFiles),
                                    !e.vast.sources.length)
                                        return void e.trigger("adscanceled");
                                    e.vastTracker = new n.tracker(o,r),
                                    a = !0
                                }
                            }
                            if (e.vastTracker) {
                                e.trigger("vast-ready");
                                break
                            }
                            n.util.track(o.errorURLTemplates, {
                                ERRORCODE: 403
                            })
                        }
                    e.vastTracker || e.trigger("adscanceled")
                })
            },
            setupEvents: function() {
                var t = !1
                  , i = function() {
                    e.vastTracker.load()
                }
                  , o = function() {
                    isNaN(e.vastTracker.assetDuration) && (e.vastTracker.assetDuration = e.duration()),
                    e.vastTracker.setProgress(e.currentTime())
                }
                  , s = function() {
                    e.vastTracker.setPaused(!0),
                    e.one("play", function() {
                        e.vastTracker.setPaused(!1)
                    })
                }
                  , r = function() {
                    n.util.track(e.vastTracker.ad.errorURLTemplates, {
                        ERRORCODE: 405
                    }),
                    t = !0,
                    e.trigger("ended")
                }
                ;
                e.on("canplay", i),
                e.on("timeupdate", o),
                e.on("pause", s),
                e.on("error", r),
                e.one("vast-preroll-removed", function() {
                    e.off("canplay", i),
                    e.off("timeupdate", o),
                    e.off("pause", s),
                    e.off("error", r),
                    t || e.vastTracker.complete()
                })
            },
            preroll: function(i) {
                e.ads.startLinearAdMode(),
                e.vast.showControls = e.controls(),
                e.vast.showControls && e.controls(1),
                e.src(e.vast.sources);
                var o;
                e.vastTracker.clickThroughURLTemplate && (o = n.util.resolveURLTemplates([e.vastTracker.clickThroughURLTemplate], {
                    CACHEBUSTER: Math.round(1e10 * Math.random()),
                    CONTENTPLAYHEAD: e.vastTracker.progressFormated()
                })[0]);
                var s = t.document.createElement("a");
                s.className = "vast-blocker",
                i.clickURL ? (s.href = i.clickURL,
                s.target = "_blank") : s.href = "#",
                s.onclick = function() {
                    if (e.paused())
                        return e.play();
                    e.pause();
                    e.vastTracker.clickTrackingURLTemplate
                }
                ,
                e.vast.blocker = s,
                e.el().insertBefore(s, e.controlBar.el());
                var i = t.document.createElement("a");
                i.href = "http://ani.gamer.com.tw/animePay.php",
                i.className = "vast-skip-button",
                i.target = "_blank",
                e.vast.skipButton = i,
                e.el().appendChild(i),
                e.on("timeupdate", e.vast.timeupdate),
                e.vast.skipButton.style.display = "none",
                e.vast.setupEvents(),
                e.one("ended", e.vast.tearDown),
                e.trigger("vast-preroll-ready")
            },
            tearDown: function() {
                e.vast.skipButton.parentNode.removeChild(e.vast.skipButton),
                e.vast.blocker.parentNode.removeChild(e.vast.blocker),
                e.off("timeupdate", e.vast.timeupdate),
                e.off("ended", e.vast.tearDown),
                e.ads.endLinearAdMode(),
                e.vast.showControls && e.controls(!0),
                e.trigger("vast-preroll-removed")
            },
            timeupdate: function(t) {
                e.vastTracker.skip();
                e.vast.tearDown();
            }
        }
    }
      , r = function(e) {
        var n = this
          , r = i({}, o, e || {});
        return void 0 === n.ads ? (t.console.error("vast video plugin requires videojs-contrib-ads, vast plugin not initialized"),
        null ) : (n.ads(),
        n.vast = new s(n,r),
        n.on("vast-ready", function() {
            n.trigger("adsready")
        }),
        n.on("vast-preroll-ready", function() {
            n.play()
        }),
        n.on("vast-preroll-removed", function() {
            n.play()
        }),
        n.on("contentupdate", function() {
            n.vast.getContent(r.url)
        }),
        n.on("readyforpreroll", function() {
            n.vast.preroll(r)
        }),
        n.currentSrc() && n.vast.getContent(r.url),
        n)
    }
    ;
    e.plugin("vast", r)
}(window, videojs, DMVAST),
define("viblastvast", ["videojs"], function() {}),
function(t) {
    "function" == typeof define && define.amd ? define("agegate", ["videojs"], function(e) {
        t(e)
    }) : t(videojs)
}(function(t) {
    var e = function(t) {
        var e = {
            2: "未滿六歲之兒童不宜觀賞， 六歲以上未滿十二歲之兒童需父母、師長或成年親友陪伴觀賞。",
            3: "未滿十二歲之兒童不宜觀賞， 十二歲以上未滿十八歲之少年需父母或師長輔導觀賞。",
            5: "未滿十八歲者不宜觀賞"
        }
          , n = {
            2: "TW-6TO12.png",
            3: "TW-12TO18.png",
            5: "TW-18UP.png"
        }
          , i = this
          , o = document.createElement("div")
          , s = document.createElement("a")
          , r = document.createElement("img")
          , a = document.createElement("p")
          , l = o.cloneNode(!1);
        l.className = "R18";
        var c = o.cloneNode(!1);
        c.className = "ncc";
        var u = r.cloneNode(!1);
        u.src = "http://i2.bahamut.com.tw/anime/" + n[t];
        var d = a.cloneNode(!1);
        d.innerHTML = e[t];
        var p = o.cloneNode(!1);
        p.className = "choose";
        var h = s.cloneNode(!1);
        h.innerHTML = "不同意",
        h.onclick = function() {
            setTimeout(function() {
                window.location = "http://ani.gamer.com.tw/index.php"
            }, 500),
            i.dispose()
        }
        ;
        var f = s.cloneNode(!1);
        f.innerHTML = "同意",
        f.onclick = function() {
            var t = document.getElementsByClassName("R18")[0];
            i.el().removeChild(t),
            i.play()
        }
        ,
        p.appendChild(f),
        p.appendChild(h),
        c.appendChild(u),
        c.appendChild(d),
        c.appendChild(p),
        l.appendChild(c),
        i.el().appendChild(l)
    }
    ;
    t.plugin("ageGate", e)
}),
function(t) {
    "function" == typeof define && define.amd ? define("breakpoint", ["videojs"], function(e) {
        t(window, document, e)
    }) : t(window, document, vjs)
}(function(t, e, n) {
    var i = function() {
        try {
            return t.localStorage.setItem("persistVolume", "persistVolume"),
            t.localStorage.removeItem("persistVolume"),
            !0
        } catch (e) {
            return !1
        }
    }
      , o = function(e) {
        return i() ? t.localStorage.getItem(e) : null
    }
      , s = function(e, n) {
        return i() ? t.localStorage.setItem(e, n) : null
    }
      , r = function() {
        var t = arguments;
        return t.length <= 0 ? !1 : void function e(n) {
            n >= t.length || "function" != typeof t[n] || setTimeout(function() {
                t[n](),
                e(n + 1)
            }, 500 * n)
        }(0)
    }
      , a = {
        namespace: ""
    }
      , l = function(t) {
        var e = this
          , i = n.util.mergeOptions(a, t)
          , l = i.namespace + "_BP";
        e.setInterval(function() {
            if (this.currentTime() > 0 && this.el().classList.contains("vjs-playing")) {
                var t = '{"sn":"' + animefun.videoSn + '","time":"' + this.currentTime() + '"}';
                s(l, t)
            }
        }, 5e3);
        var c = o(l);
        BPjson = JSON.parse(c),
        null !== c && animefun.videoSn == BPjson.sn && 5 <= Math.abs(e.duration() - parseInt(BPjson.time, 10)) ? r(function() {
            e.pause()
        }, function() {
            e.currentTime(BPjson.time)
        }, function() {
            e.play()
        }, function() {
            e.trigger("breakpoint")
        }) : e.trigger("breakpoint")
    }
    ;
    n.plugin("breakPoint", l)
}),
function(t) {
    "function" == typeof define && define.amd ? define("elapse", ["videojs"], function(e) {
        t(window, e, jQuery)
    }) : t(window, videojs, jQuery)
}(function(t, e, n) {
    var i = {
        sendElapse: function(t, e) {
            t.deviceID || (t.deviceID = e.getdeviceid(),
            e.setStorageItem("ANIME_deviceid", t.deviceID)),
            n.ajax({
                url: "/ajax/elapse.php?sn=" + e.videoSn + "&device=" + t.deviceID,
                success: function(n) {
                    if (obj = JSON.parse(n),
                    "ok" == obj.state)
                        obj.device && (t.deviceID = obj.device,
                        e.setStorageItem("ANIME_deviceid", t.deviceID));
                    else
                        switch (t.dispose(),
                        e.danmupause(),
                        obj.state) {
                        case 1:
                            alert("尚未登入，請進行登入。");
                            break;
                        case 2:
                            alert("登入狀態異常(1)。");
                            break;
                        case 3:
                            alert("登入狀態異常(2)。");
                            break;
                        case 4:
                            alert("本服務同時間內僅提供播放一部影片！");
                            break;
                        case 5:
                            alert("登入狀態異常(3)。");
                            break;
                        case 6:
                            alert("登入狀態異常(4)。");
                            break;
                        default:
                            alert("已偵測到新的裝置登入！本服務同時間內僅允許一個裝置登入使用！")
                        }
                }
            })
        },
        videoStateChanged: function(t, e) {
            n.ajax({
                url: "/ajax/unlock.php?sn=" + t + "&ttl=" + parseInt(e, 10),
                success: function() {}
            })
        }
    }
      , o = function(e) {
        function n(t, e) {
            e.total >= 60 * (e.counter + 1) && (i.sendElapse(t, o),
            t.total_time = e.total,
            e.counter++);
            var n = t.currentTime();
            !t.seeking() && !t.paused() && Math.abs(n - e.end) < .6 ? e.end = n : (e.base = e.total,
            e.start = e.end = n);
            var s = e.end - e.start;
            e.total = e.base + s
        }
        var o = t.animefun
          , s = this
          , r = e.adenable
          , a = {
            start: 0,
            end: 0,
            base: 0,
            total: 0,
            counter: 0
        };
        r ? s.one("adend", function() {
            s.on("timeupdate", function() {
                n(s, a)
            })
        }) : s.on("timeupdate", function() {
            n(s, a)
        }),
        ["play", "pause", "ended"].forEach(function(t) {
            s.on(t, function() {
                i.videoStateChanged(o.videoSn, a.total)
            })
        })
    }
    ;
    e.plugin("elapse", o)
}),
function(t) {
    "function" == typeof define && define.amd ? define("hotkeys", ["videojs"], function(e) {
        t(window, e)
    }) : t(window, videojs)
}(function(t, e) {
    var n = function(t) {
        var e, n, i;
        for (n = 1; n < arguments.length; n++) {
            e = arguments[n];
            for (i in e)
                e.hasOwnProperty(i) && (t[i] = e[i])
        }
        return t
    }
      , i = function(t) {
        var e = this
          , i = e.controlBar
          , o = {
            volumeStep: .1,
            seekStep: 5,
            enableMute: !0,
            enableFullscreen: !0,
            enableNumbers: !0,
            enableJogStyle: !1,
            alwaysCaptureHotkeys: !1
        };
        t = n({}, o, t || {});
        var s = t.volumeStep
          , r = t.seekStep
          , a = t.enableMute
          , l = t.enableFullscreen
          , c = t.enableNumbers
          , u = t.enableJogStyle
          , d = t.alwaysCaptureHotkeys;
        e.el().hasAttribute("tabIndex") || e.el().setAttribute("tabIndex", "-1"),
        d && e.one("play", function() {
            e.el().focus()
        }),
        e.on("play", function() {
            var t = e.el().querySelector(".iframeblocker");
            t && "" === t.style.display && (t.style.display = "block",
            t.style.bottom = "39px")
        });
        var p = function(t) {
            var n, o = t.which;
            if (e.controls()) {
                var p = document.activeElement;
                if (d || p == e.el() || p == e.el().querySelector(".vjs-tech") || p == e.el().querySelector(".vjs-control-bar") || p == e.el().querySelector(".iframeblocker"))
                    switch (o) {
                    case 32:
                        t.preventDefault(),
                        d && t.stopPropagation(),
                        e.paused() ? e.play() : e.pause();
                        break;
                    case 37:
                        t.preventDefault(),
                        n = e.currentTime() - r,
                        e.currentTime() <= r && (n = 0),
                        e.currentTime(n);
                        break;
                    case 39:
                        t.preventDefault(),
                        e.currentTime(e.currentTime() + r);
                        break;
                    case 40:
                        t.preventDefault(),
                        u ? (n = e.currentTime() - 1,
                        e.currentTime() <= 1 && (n = 0),
                        e.currentTime(n)) : e.volume(e.volume() - s);
                        break;
                    case 38:
                        t.preventDefault(),
                        u ? e.currentTime(e.currentTime() + 1) : e.volume(e.volume() + s);
                        break;
                    case 77:
                        a && (e.muted() ? e.muted(!1) : e.muted(!0));
                        break;
                    case 84:
                        i.getChildById("theaterToggle").el().click();
                        break;
                    case 70:
                        l && (e.isFullscreen() ? e.exitFullscreen() : e.requestFullscreen());
                        break;
                    default:
                        if ((o > 47 && 59 > o || o > 95 && 106 > o) && c) {
                            var h = 48;
                            o > 95 && (h = 96);
                            var f = o - h;
                            t.preventDefault(),
                            e.currentTime(e.duration() * f * .1)
                        }
                    }
            }
        }
          , h = function(t) {
            if (e.controls()) {
                var n = t.relatedTarget || t.toElement || document.activeElement;
                (n == e.el() || n == e.el().querySelector(".vjs-tech") || n == e.el().querySelector(".iframeblocker")) && l && (e.isFullscreen() ? e.exitFullscreen() : e.requestFullscreen())
            }
        }
        ;
        return e.on("keydown", p),
        e.on("dblclick", h),
        this
    }
    ;
    e.plugin("hotkeys", i)
}),
function(t) {
    "function" == typeof define && define.amd ? define("overlay", ["videojs"], function(e) {
        t(window, e, jQuery)
    }) : t(window, videojs, jQuery)
}(function(t, e, n) {
    var i, o, s, r = {
        content: "TeeHee",
        overlays: [{
            start: "playing",
            end: "paused"
        }]
    }, a = function(t, e) {
        return t.start - e.start
    }
    , l = function(t, e) {
        return t.end - e.end
    }
    ;
    i = function(t, e, n) {
        var i = document.createElement("div")
          , o = n.content || e.content
          , s = e.align || n.align
          , r = e["class"] || n["class"]
          , a = e.clickfunction || n.clickfunction;
        i.className = "vjs-overlay",
        n.el = i,
        a && (i.onclick = a),
        s && (i.className += " vjs-overlay-" + s),
        r && (i.className += " " + r),
        "string" == typeof o ? i.innerHTML = o : i.appendChild(o),
        t.el().appendChild(i)
    }
    ,
    o = function(t, e, n) {
        n.el && (n.el.parentNode.removeChild(n.el),
        delete n.el)
    }
    ,
    s = function(t) {
        var n, s, c = e.util.mergeOptions(r, t), u = this, d = {}, p = [], h = [], f = function(t) {
            for (var e, n = d[t.type], o = n.length; o--; )
                e = n[o],
                e.el || i(u, c, e)
        }
        , v = function(t) {
            for (var e, n = d[t.type], i = n.length; i--; )
                e = n[i],
                e.el && o(u, c, e)
        }
        , m = function(t, e, n, i) {
            var o, s = 0, r = 0;
            o = function() {
                var o = t[r]
                  , a = u.currentTime();
                for (s > a && (r = 0,
                o = t[r]); o && i(o[e], a); o = t[++r])
                    n(u, c, o);
                s = a
            }
            ,
            u.on("timeupdate", o),
            u.overlay.eventListeners.push({
                type: "timeupdate",
                fn: o
            })
        }
        ;
        !function() {
            var t, e;
            for (e in u.overlay.eventListeners)
                t = u.overlay.eventListeners[e],
                u.off(t.type, t.fn)
        }(),
        u.overlay.eventListeners = [];
        for (s in c.overlays)
            n = c.overlays[s],
            "string" == typeof n.start ? (d[n.start] || (d[n.start] = [],
            u.on(n.start, f),
            u.overlay.eventListeners.push({
                type: n.start,
                fn: f
            })),
            d[n.start].push(n)) : p.push(n),
            "string" == typeof n.end ? (d[n.end] || (d[n.end] = [],
            u.on(n.end, v),
            u.overlay.eventListeners.push({
                type: n.end,
                fn: v
            })),
            d[n.end].push(n)) : h.push(n);
        p.length && (p.sort(a),
        m(p, "start", i, function(t, e) {
            return e >= t
        }),
        m(p, "start", o, function(t, e) {
            return t > e
        })),
        h.length && (h.sort(l),
        m(h, "end", o, function(t, e) {
            return e >= t
        }))
    }
    ,
    e.plugin("overlay", s)
}),
function(t) {
    "function" == typeof define && define.amd ? define("peresistvolume", ["videojs"], function(e) {
        t(window, document, e)
    }) : t(window, document, videojs)
}(function(t, e, n) {
    var i = function() {
        try {
            return t.localStorage.setItem("persistVolume", "persistVolume"),
            t.localStorage.removeItem("persistVolume"),
            !0
        } catch (e) {
            return !1
        }
    }
      , o = function(e) {
        return i() ? t.localStorage.getItem(e) : null
    }
      , s = function(e, n) {
        return i() ? t.localStorage.setItem(e, n) : null
    }
      , r = {
        namespace: ""
    }
      , a = function(t) {
        var i = this
          , a = n.util.mergeOptions(r, t)
          , l = a.namespace + "_volume"
          , c = a.namespace + "_mute"
          , u = i.controlBar.getChildById("muteToggle");
        i.on("volumechange", function() {
            s(l, i.volume()),
            s(c, i.muted()),
            e.getElementById("ani_video").focus(),
            i.muted() ? u.c.title = "取消靜音" : u.c.title = "靜音"
        });
        var d = o(l);
        null !== d ? i.volume(d) : i.volume(1);
        var p = o(c);
        null !== p && i.muted("true" === p)
    }
    ;
    n.plugin("persistvolume", a)
}),
function(t) {
    "function" == typeof define && define.amd ? define("peresistdanmu", ["videojs"], function(e) {
        t(window, document, e, jQuery)
    }) : t(window, document, videojs, jQuery)
}(function(t, e, n, i) {
    var o = function() {
        try {
            return t.localStorage.setItem("persistVolume", "persistVolume"),
            t.localStorage.removeItem("persistVolume"),
            !0
        } catch (e) {
            return !1
        }
    }
      , s = function(e) {
        return o() ? t.localStorage.getItem(e) : null
    }
      , r = function(e, n) {
        return o() ? t.localStorage.setItem(e, n) : null
    }
      , a = {
        namespace: ""
    }
      , l = function(t) {
        var o = this
          , l = e
          , c = n.util.mergeOptions(a, t)
          , u = c.namespace + "_danmu"
          , d = o.controlBar.getChildById("danmuToggle")
          , p = s(u)
          , h = function() {
            try {
                var t = 10 * o.currentTime();
                t = parseInt(t, 10),
                i("#danmu").data("nowTime", t)
            } catch (e) {
                console.log("danmu sync error")
            }
        }
        ;
        if (o.on("timeupdate", h),
        d.on("click", function() {
            this.c.classList.contains("vjs-danmu-enable") ? (this.c.classList.remove("vjs-danmu-enable"),
            this.c.title = "開啟彈幕",
            r(u, "off")) : (this.c.classList.add("vjs-danmu-enable"),
            this.c.title = "關閉彈幕",
            r(u, "on")),
            o.el().focus(),
            animefun.danmushowhide()
        }),
        !p) {
            var f = l.createElement("div")
              , v = '<div class="button pill disable"> 開啟/關閉彈幕請點<i class="danmu-icon"></i> 圖示</div>';
            f.className = "vjs-overlay vjs-overlay-bottom-right",
            f.innerHTML = v,
            o.one("playing", function() {
                var t = this;
                this.el().appendChild(f);
                try {
                    this.setTimeout(function() {
                        t.el().removeChild(f)
                    }, 8e3),
                    d.one("click", function() {
                        t.el().removeChild(f)
                    })
                } catch (e) {}
            })
        }
        null == p || "on" == p ? (d.c.classList.add("vjs-danmu-enable"),
        d.c.title = "關閉彈幕") : (animefun.danmushowhide(),
        d.c.classList.remove("vjs-danmu-enable"),
        d.c.title = "開啟彈幕")
    }
    ;
    n.plugin("persistdanmu", l)
}),
function(t) {
    "function" == typeof define && define.amd ? define("peresistindent", ["videojs"], function(e) {
        t(window, document, e, jQuery)
    }) : t(window, document, videojs, jQuery)
}(function(t, e, n, i) {
    var o = function() {
        try {
            return t.localStorage.setItem("persistVolume", "persistVolume"),
            t.localStorage.removeItem("persistVolume"),
            !0
        } catch (e) {
            return !1
        }
    }
      , s = function(e) {
        return o() ? t.localStorage.getItem(e) : null
    }
      , r = function(e, n) {
        return o() ? t.localStorage.setItem(e, n) : null
    }
      , a = function(t) {
        t.indent.c.classList.add("vjs-indent-enable"),
        t.indent.c.title = "一般模式",
        t.subtitle.classList.add("vjs-hidden"),
        t.videoframe.classList.add("vjs-fullwindow")
    }
      , l = function(t) {
        t.indent.c.classList.remove("vjs-indent-enable"),
        t.indent.c.title = "劇院模式",
        t.subtitle.classList.remove("vjs-hidden"),
        t.videoframe.classList.remove("vjs-fullwindow"),
        t.video.style.paddingBottom = "56.25%"
    }
      , c = {
        namespace: ""
    }
      , u = function(t) {
        var i = this
          , o = i.controlBar
          , u = e
          , d = n.util.mergeOptions(c, t)
          , p = d.namespace + "_indent"
          , h = s(p)
          , f = {
            indent: o.getChildById("theaterToggle"),
            subtitle: u.getElementsByClassName("subtitle")[0],
            videoframe: u.getElementsByClassName("videoframe")[0],
            video: u.getElementsByClassName("video")[0]
        };
        "on" == h ? a(f) : l(f),
        f.indent.on("click", function() {
            this.c.classList.contains("vjs-indent-enable") ? (l(f),
            r("ANIME_indent", "off")) : (a(f),
            r("ANIME_indent", "on")),
            i.el().focus()
        })
    }
    ;
    n.plugin("persistindent", u);
}),
function(t) {
    "function" == typeof define && define.amd ? define("progresstip", ["videojs"], function(e) {
        t(e, jQuery)
    }) : t(videojs, jQuery)
}(function(t, e) {
    var n = function(t) {
        var n;
        n = function() {
            var t = this;
            e(".vjs-progress-control").after(e('<div id="vjs-tip" class="vjs-tip"><div id="vjs-tip-arrow" class="vjs-tip-arrow"></div><div id="vjs-tip-inner" class="vjs-tip-inner"></div></div><div id="vjs-menu-tip" class="vjs-tip"><div id="vjs-menu-tip-inner" class="vjs-tip-inner"></div></div>')),
            e(".vjs-progress-control").on("mousemove", function(n) {
                var i, o, s;
                o = t.controlBar.progressControl.seekBar;
                var r = n.pageX - e(o.el()).offset().left;
                r /= o.width(),
                r = Math.floor(1e3 * r) / 1e3,
                s = r * t.duration(),
                s >= t.duration() && (s -= .1),
                0 >= s && (s = 0);
                var a = parseInt(s, 10);
                a = t.duration() > 3600 ? 60 * Math.floor(a / 60) : 10 * Math.floor(a / 10);
                var l = ("0" + Math.floor(a / 3600)).slice(-2)
                  , c = ("0" + Math.floor((a - 3600 * l) / 60)).slice(-2)
                  , u = ("0" + a % 60).slice(-2)
                  , d = "00" == l ? c + ":" + u : l + ":" + c + ":" + u;
                e("#vjs-tip-inner").html(d),
                i = e(".vjs-control-bar").height(),
                e("#vjs-tip").css("top", "" + (n.pageY - e(this).offset().top - i - 20) + "px").css("left", "" + (n.pageX - e(this).offset().left - 30) + "px").css("visibility", "visible")
            }),
            e(".vjs-show-tip").on("mousemove", function(t) {
                var n = e(this).attr("title");
                if (n) {
                    var i = e(this).parent().offset().left
                      , o = e(this).parent().width() - 50
                      , s = t.pageX - i;
                    s = s >= o ? o : s;
                    var r = e(this).width()
                      , a = s - r / 2;
                    return e("#vjs-menu-tip-inner").html(n),
                    void e("#vjs-menu-tip").css("top", "-40px").css("left", a + "px").css("visibility", "visible")
                }
            }),
            e(".vjs-progress-control, .vjs-play-control, .vjs-show-tip").on("mouseout click", function() {
                e("#vjs-tip").css("visibility", "hidden"),
                e("#vjs-menu-tip").css("visibility", "hidden")
            })
        }
        ,
        this.on("loadedmetadata", n)
    }
    ;
    t.plugin("progresstips", n)
}),
function(t) {
    "function" == typeof define && define.amd ? define("quality", ["videojs"], function(e) {
        t(e)
    }) : t(videojs)
}(function(t) {
    var e = {
        res_label: function(t) {
            return /^\d{5,}$/.test(t) ? this.humanRead(t, !0) : /^\d+$/.test(t) ? " " + t + "p" : " " + t
        },
        humanRead: function(t) {
            for (var e = 0; t > 1e3; )
                t /= 1e3,
                ++e;
            return " " + t.toFixed(0) + " " + ["bps", "kbps", "mbps"][e]
        }
    };
    t.ResolutionMenuItem = t.MenuItem.extend({
        call_count: 0,
        init: function(n, i) {
            if (i.label = e.res_label(i.res),
            i.res.toString() === n.localize("Auto")) {
                i.selected = !0;
                var o = this;
                n.viblast.addEventListener("videoqualitychange", function(t) {
                    var i = n.viblast.video.quality;
                    n.viblast.abr && (o.el().innerHTML = n.localize("Auto") + " " + e.res_label(i.height > 0 ? i.height : i.bandwidth))
                }),
                n.on("changeRes", function() {
                    var t = n.viblast.video.quality;
                    n.viblast.abr ? o.el().innerHTML = n.localize("Auto") + " " + e.res_label(t.height > 0 ? t.height : t.bandwidth) : o.el().innerHTML = n.localize("Auto")
                })
            }
            t.MenuItem.call(this, n, i),
            this.resolution = i.res,
            this.on(["click", "tap"], this.onClick),
            n.on("changeRes", t.bind(this, function() {
                this.resolution == n.getCurrentRes() ? this.selected(!0) : this.selected(!1),
                this.call_count = 0,
                document.getElementById("ani_video").focus()
            }))
        }
    }),
    t.ResolutionMenuItem.prototype.onClick = function() {
        if (!(this.call_count > 0)) {
            var t = this.player()
              , e = document
              , n = e.getElementsByClassName("vjs-switchRes-button")[0]
              , i = e.getElementById("resList");
            i.classList.add("vjs-hidden"),
            setTimeout(function() {
                i.classList.remove("vjs-hidden")
            }, 3e3);
            var o = e.getElementsByClassName("vjs-res-button")[0]
              , s = t.currentTime()
              , r = t.el().classList.contains("vjs-playing") ? 1 : 0;
            t.changeRes(this.resolution),
            t.localize("Auto") != this.resolution && (t.currentTime(s - 10),
            t.pause(),
            o.classList.add("vjs-res-enable"),
            n.classList.remove("vjs-hidden"),
            n.innerHTML = "畫質變更中，請稍候...",
            setTimeout(function() {
                t.currentTime(s),
                r && t.play(),
                o.classList.remove("vjs-res-enable"),
                n.classList.add("vjs-hidden")
            }, 3e3)),
            this.call_count++
        }
    }
    ,
    t.ResolutionTitleMenuItem = t.MenuItem.extend({
        init: function(e, n) {
            t.MenuItem.call(this, e, n),
            this.off("click")
        }
    }),
    t.ResolutionSelector = t.MenuButton.extend({
        init: function(e, n) {
            e.availableRes = n.available_res,
            t.MenuButton.call(this, e, n),
            this.el().firstChild.firstChild.innerHTML = n.buttonText,
            this.el().firstChild.id = "resList"
        }
    }),
    t.ResolutionSelector.prototype.className = "vjs-res-button",
    t.ResolutionSelector.prototype.createItems = function() {
        var e, n = this.player(), i = [];
        i.push(new t.ResolutionTitleMenuItem(n,{
            el: t.Component.prototype.createEl("li", {
                className: "vjs-menu-title vjs-res-menu-title",
                innerHTML: n.localize("Quality")
            })
        }));
        for (e in n.availableRes)
            "length" != e && i.push(new t.ResolutionMenuItem(n,{
                res: e
            }));
        return i.sort(function(t, e) {
            return "undefined" == typeof t.resolution ? -1 : parseInt(e.resolution) - parseInt(t.resolution)
        }),
        i
    }
    ;
    var n = function(e) {
        var n = this
          , i = t.util.mergeOptions({
            default_res: "",
            force_types: !1
        }, e || {});
        i.default_res && "string" == typeof i.default_res ? i.default_res.split(",") : [];
        "function" != typeof n.localize && (n.localize = function(t) {
            return t
        }
        ),
        n.getCurrentRes = function() {
            try {
                return n.currentRes
            } catch (t) {
                return ""
            }
        }
        ,
        n.changeRes = function(t) {
            if (n.getCurrentRes() == t || !n.availableRes || !n.availableRes[t])
                return !1;
            if (t === n.localize("Auto"))
                n.viblast.abr = !0;
            else {
                for (var e = n.viblast.video.qualities, i = n.viblast.video.qualities.length, o = e[0].height > 0 ? "height" : "bandwidth"; i > 0 && (i--,
                e[i][o] != t); )
                    ;
                n.viblast.abr = !1,
                n.viblast.video.quality = n.viblast.video.qualities[i]
            }
            return n.currentRes = t,
            n.trigger("changeRes"),
            !0
        }
        ,
        n.addResButton = function() {
            var e = document.createElement("div");
            e.className = "vjs-switchRes-button vjs-hidden",
            n.el().appendChild(e);
            var i, o, s = {
                length: 0
            }, r = n.viblast.video.qualities, a = n.viblast.video.qualities.length, l = n.localize("Auto");
            for (s[l] = [],
            s.length++,
            s[l]["data-res"] = l; a > 0; )
                a--,
                i = r[a].height ? r[a].height : r[a].bandwidth,
                "object" != typeof s[i] && (s[i] = [],
                s.length++),
                s[i]["data-res"] = i;
            o = new t.ResolutionSelector(n,{
                buttonText: '<i class="fa fa-cog"></i>',
                available_res: s
            }),
            o.Ra = "resButton",
            n.controlBar.resolutionSelector = n.controlBar.addChild(o)
        }
    }
    ;
    t.plugin("resolutionselector", n)
}),
function(t) {
    "function" == typeof define && define.amd ? define("qualitysingle", ["videojs"], function(e) {
        t(e)
    }) : t(videojs)
}(function(t) {
    var e = {
        res_label: function(t) {
            return /^\d{5,}$/.test(t) ? this.humanRead(t, !0) : /^\d+$/.test(t) ? " " + t + "p" : " " + t
        },
        humanRead: function(t) {
            for (var e = 0; t > 1e3; )
                t /= 1e3,
                ++e;
            return " " + t.toFixed(0) + " " + ["bps", "kbps", "mbps"][e]
        }
    };
    t.SingleMenuItem = t.MenuItem.extend({
        init: function(n, i) {
            i.label = e.res_label(i.res),
            t.MenuItem.call(this, n, i),
            this.resolution = i.res,
            this.on(["click", "tap"], this.onClick),
            "360" == this.resolution && this.selected(!0)
        }
    }),
    t.SingleMenuItem.prototype.onClick = function() {
        if ("360" != this.resolution) {
            var t = this.player()
              , e = t.el().getElementsByClassName("video-login-wrapper")[0]
              , n = document.getElementById("resList");
            n.classList.add("vjs-hidden"),
            e.classList.remove("vjs-hidden"),
            t.paused() && e.classList.add("paused"),
            t.pause(),
            setTimeout(function() {
                n.classList.remove("vjs-hidden")
            }, 2e3),
            this.selected(!1)
        }
    }
    ,
    t.SingleTitleMenuItem = t.MenuItem.extend({
        init: function(e, n) {
            t.MenuItem.call(this, e, n),
            this.off("click")
        }
    }),
    t.SingleSelector = t.MenuButton.extend({
        init: function(e, n) {
            e.availableRes = n.available_res,
            t.MenuButton.call(this, e, n),
            this.el().firstChild.firstChild.innerHTML = n.buttonText,
            this.el().firstChild.id = "resList"
        }
    }),
    t.SingleSelector.prototype.className = "vjs-res-button",
    t.SingleSelector.prototype.createItems = function() {
        var e, n = this.player(), i = [];
        i.push(new t.SingleTitleMenuItem(n,{
            el: t.Component.prototype.createEl("li", {
                className: "vjs-menu-title vjs-res-menu-title",
                innerHTML: n.localize("Quality")
            })
        }));
        for (e in n.availableRes)
            "length" != e && i.push(new t.SingleMenuItem(n,{
                res: e
            }));
        return i.sort(function(t, e) {
            return "undefined" == typeof t.resolution ? -1 : parseInt(e.resolution) - parseInt(t.resolution)
        }),
        i
    }
    ;
    var n = function(e) {
        var n = this;
        n.changeRes = function() {
            return !1
        }
        ,
        n.addResButton = function() {
            var e = document
              , i = e.createElement("a")
              , o = e.createElement("b")
              , s = e.createElement("i")
              , r = e.createElement("p")
              , a = e.createElement("h2")
              , l = e.createElement("h3")
              , c = e.createElement("div")
              , u = l.cloneNode(!1)
              , d = r.cloneNode(!1)
              , p = i.cloneNode(!1)
              , h = l.cloneNode(!1)
              , f = r.cloneNode(!1)
              , v = o.cloneNode(!1)
              , m = i.cloneNode(!1)
              , y = a.cloneNode(!1)
              , g = c.cloneNode(!1)
              , b = i.cloneNode(!1)
              , T = s.cloneNode(!1)
              , w = c.cloneNode(!1);
            u.innerHTML = "已有帳號",
            d.innerHTML = '<i class="fa fa-user"></i>登入',
            p.href = "https://user.gamer.com.tw/login.php",
            h.innerHTML = "還沒有帳號？",
            f.innerHTML = '<i class="fa fa-user-plus"></i>註冊',
            v.innerHTML = "非常簡單！",
            m.className = "reg",
            m.href = "https://user.gamer.com.tw/regS1.php",
            y.innerHTML = "更改畫質需要先登入巴哈帳號喔！",
            g.className = "video-login",
            b.className = "cancel",
            b.href = "#",
            T.className = "fa fa-times-circle",
            b.onclick = function() {
                var t = n.el().getElementsByClassName("video-login-wrapper")[0];
                t.classList.add("vjs-hidden"),
                t.classList.contains("paused") ? t.classList.remove("paused") : n.play()
            }
            ,
            w.className = "video-login-wrapper vjs-hidden",
            p.appendChild(u),
            p.appendChild(d),
            m.appendChild(h),
            m.appendChild(f),
            m.appendChild(v),
            g.appendChild(y),
            g.appendChild(p),
            g.appendChild(m),
            b.appendChild(T),
            w.appendChild(b),
            w.appendChild(g),
            n.el().appendChild(w);
            for (var j, k = {
                length: 0
            }, x = n.viblast.video.qualities, C = n.viblast.video.qualities.length; C > 0; )
                C--,
                j = x[C].height ? x[C].height : x[C].bandwidth,
                "360" == j && (n.viblast.video.quality = n.viblast.video.qualities[C],
                n.viblast.abr = !1),
                "object" != typeof k[j] && (k[j] = [],
                k.length++),
                k[j]["data-res"] = j;
            singleSelector = new t.SingleSelector(n,{
                buttonText: '<i class="fa fa-cog"></i>',
                available_res: k
            }),
            singleSelector.Ra = "resButton",
            n.controlBar.singleSelector = n.controlBar.addChild(singleSelector)
        }
    }
    ;
    t.plugin("resolutionsingle", n)
}),
function(t) {
    "function" == typeof define && define.amd ? define("stopmask", ["videojs"], function(e) {
        t(window, e, jQuery)
    }) : t(window, videojs, jQuery)
}(function(t, e, n) {
    var i = {
        option: {},
        obj: {},
        el: {
            div: document.createElement("div"),
            a: document.createElement("a"),
            i: document.createElement("i"),
            p: document.createElement("p"),
            h1: document.createElement("h1"),
            h2: document.createElement("h2")
        },
        addMask: function(t, e) {
            var n = i.el.div.cloneNode(!1)
              , o = i.el.h1.cloneNode(!1);
            o.innerHTML = e;
            var s = i.el.div.cloneNode(!1);
            s.className = "replay";
            var r = i.el.a.cloneNode(!1);
            r.href = "",
            r.onclick = function(e) {
                e.preventDefault(),
                n.classList.add("vjs-hidden"),
                t.currentTime(0),
                t.play()
            }
            ;
            var a = i.el.i.cloneNode(!1);
            a.className = "fa fa-refresh";
            var l = i.el.p.cloneNode(!1);
            if (l.innerHTML = "重播",
            r.appendChild(a),
            r.appendChild(l),
            s.appendChild(r),
            i.option.nextsn) {
                var c = i.el.a.cloneNode(!1);
                c.href = "http://ani.gamer.com.tw/animeVideo.php?sn=" + i.option.nextsn;
                var u = i.el.i.cloneNode(!1);
                u.className = "fa fa-fast-forward";
                var d = i.el.p.cloneNode(!1);
                d.innerHTML = "下一集",
                c.appendChild(u),
                c.appendChild(d),
                s.appendChild(c)
            }
            return n.appendChild(o),
            n.appendChild(s),
            n.className = "stop vjs-hidden",
            t.el().appendChild(n),
            n
        },
        initQuiz: function(t) {
            900 <= t.total_time && n.ajax({
                url: "/ajax/animeGetQuestion.php",
                success: function(e) {
                    i.obj = JSON.parse(e),
                    i.obj.error || i.addQuiz(t)
                },
                error: function() {
                    console.log("Error:: Can't get any question")
                }
            })
        },
        addQuiz: function(t) {
            var e = i.el.div.cloneNode(!1);
            e.className = "video-login-wrapper";
            var o = i.el.div.cloneNode(!1);
            o.className = "anime-quiz";
            var s = i.el.a.cloneNode(!1);
            s.href = "#",
            s.className = "fa fa-times",
            s.onclick = function(t) {
                t.preventDefault(),
                e.classList.add("vjs-hidden"),
                n.ajax({
                    type: "POST",
                    url: "/ajax/animeAnsQuestion.php",
                    data: "token=" + i.obj.token + "&ans=0"
                })
            }
            ;
            var r = i.el.p.cloneNode(!1);
            r.innerHTML = i.obj.question + " （作者：" + i.obj.userid + "）";
            var a = i.el.h2.cloneNode(!1);
            a.innerHTML = "動漫通 Beta測試版<span>關連作品：" + i.obj.game + "</span>";
            var l = i.el.div.cloneNode(!1);
            l.className = "support",
            l.innerHTML = '<a href="https://www.facebook.com/animategamer/" target="_blank" ><i class="fa fa-chevron-circle-right"></i> 粉絲團找答案</a>';
            var c = [];
            ["a1", "a2", "a3", "a4"].forEach(function(t, e) {
                c[t] = i.el.a.cloneNode(!1),
                c[t].innerHTML = i.obj[t],
                c[t].href = "#",
                c[t].dataset.value = ++e,
                c[t].onclick = i.checkAns
            }),
            a.appendChild(s),
            o.appendChild(a),
            o.appendChild(r),
            ["a1", "a2", "a3", "a4"].forEach(function(t) {
                o.appendChild(c[t])
            }),
            o.appendChild(l),
            e.appendChild(o),
            t.el().appendChild(e),
            i.el.anime_quiz = o,
            i.el.loginwrapper = e,
            ["seeked", "seeking", "playing"].forEach(function(n) {
                t.on(n, function() {
                    e.classList.add("vjs-hidden")
                })
            })
        },
        checkAns: function() {
            var t = this.dataset.value;
            n.ajax({
                type: "POST",
                url: "/ajax/animeAnsQuestion.php",
                data: "token=" + i.obj.token + "&ans=" + t,
                success: function(t) {
                    var e = JSON.parse(t)
                      , n = i.el.a.cloneNode(!1);
                    n.href = "#",
                    n.innerHTML = "結束動漫通",
                    n.onclick = function(t) {
                        t.preventDefault(),
                        i.el.loginwrapper.classList.add("vjs-hidden")
                    }
                    ;
                    var o = i.el.a.cloneNode(!1);
                    if (o.href = "https://www.facebook.com/animategamer/",
                    o.target = "_blank",
                    o.innerHTML = "動畫瘋粉絲團",
                    e.error)
                        i.el.anime_quiz.innerHTML = '<h2>動漫通 Beta測試版</h2><p><i class="fa fa-times error"></i>很遺憾答錯囉！下次可以先上動畫瘋粉絲團找答案喔！</p>',
                        i.el.anime_quiz.appendChild(n),
                        i.el.anime_quiz.appendChild(o);
                    else {
                        i.el.anime_quiz.innerHTML = '<h2>動漫通 Beta測試版</h2><div class="pic"><img src="http://i2.bahamut.com.tw/anime/award.png" alt=""></div><p class="get"><i class="fa fa-circle-o correct"></i>恭喜答對囉，抽個獎吧！<br></p>';
                        var s = i.el.a.cloneNode(!1);
                        s.innerHTML = "抽獎",
                        s.href = "#",
                        s.onclick = function(t) {
                            t.preventDefault(),
                            i.el.anime_quiz.innerHTML = "<h2>動漫通 Beta測試版</h2><p>" + e.gift + "<br>詳見站內信說明喔！</p>",
                            i.el.anime_quiz.appendChild(n)
                        }
                        ;
                        var r = document.getElementsByClassName("get")[0];
                        r.appendChild(s)
                    }
                },
                error: function() {
                    console.log("Error:: No response from quiz")
                }
            })
        }
    };
    stopmask = function(t, e) {
        i.option.nextsn = e,
        i.option.title = t;
        var n = this
          , o = i.addMask(n, t);
        ["seeked", "seeking", "playing"].forEach(function(t) {
            n.on(t, function() {
                o.classList.add("vjs-hidden")
            })
        }),
        n.on("ended", function() {
            animefun.danmusettime(n.duration() + 6e3),
            animefun.danmupause(),
            this.bigPlayButton.hide(),
            o.classList.remove("vjs-hidden"),
            i.initQuiz(this)
        })
    }
    ,
    e.plugin("stopmask", stopmask)
}),
define("player", ["videojs"], function(t) {
    function e() {
        var t = (new Date).getTime();
        window.performance && "function" == typeof window.performance.now && (t += performance.now());
        var e = "xxxxxxxxxxxx".replace(/[x]/g, function(e) {
            var n = (t + 16 * Math.random()) % 16 | 0;
            return t = Math.floor(t / 16),
            ("x" == e ? n : 3 & n | 8).toString(16)
        });
        return e
    }
    function n() {
        var t = document.createElement("source");
        t.type = "application/x-mpegURL";
        var e = document.createElement("video");
        e.className = "video-js vjs-default-skin vjs-big-play-centered",
        e.id = "ani_video",
        e.setAttribute("data-viblast-key", "bth44tqf2a"),
        e.setAttribute("data-viblast-abr-consider-dimensions", "false"),
        e.setAttribute("data-viblast-low-buffer-level", "60"),
        e.setAttribute("data-viblast-buffer-while-paused", "true"),
        e.setAttribute("data-viblast-av-gap-correction", "true"),
        e.setAttribute("data-setup", '{"techOrder": ["viblast","html5"]}'),
        e.setAttribute("width", "auto"),
        e.setAttribute("height", "auto"),
        e.appendChild(t),
        function n() {
            try {
                var t = document.getElementById("video-container");
                t.appendChild(e)
            } catch (i) {
                setTimeout(n, 2e3)
            }
        }()
    }
    function i() {
        var t = document
          , n = new XMLHttpRequest;
        r.uuid = e(),
        animefun.uuid = r.uuid,
        n.onreadystatechange = function() {
            if (4 == n.readyState && 200 == n.status) {
                var e = JSON.parse(n.responseText);
                if (!Object.isFrozen(r))
                    for (var i in e)
                        r[i] = e[i];
                !function o() {
                    try {
                        var e = t.getElementById("ani_video");
                        e.firstChild.src = r.src ? r.src : ""
                    } catch (n) {
                        setTimeout(o, 2e3)
                    }
                }()
            }
        }
        ,
        n.open("GET", "/ajax/token.php?adID=" + l + "&sn=" + animefun.videoSn + "&device=" + animefun.getdeviceid() + "&hash=" + r.uuid, !1);
        try {
            n.send()
        } catch (i) {
            Object.isFrozen(r) || (r.error = 10)
        }
    }
    function o(t) {
        var e = document
          , n = e.createElement("div")
          , i = e.createElement("a")
          , o = e.createElement("div")
          , s = e.getElementsByClassName("video")[0];
        n.className = "login",
        n.innerHTML = '<span class="fa fa-user fa-2"></span> <br> 請先登入',
        i.href = "https://user.gamer.com.tw/login.php",
        o.className = "stop",
        i.appendChild(n),
        o.appendChild(i),
        s.appendChild(o)
    }
    function s(t) {
        var e = document
          , n = e.createElement("div")
          , i = e.createElement("div")
          , o = e.getElementsByClassName("video")[0];
        n.className = "R18",
        i.className = "video-charge-check",
        i.innerHTML = '<h2> 本動畫僅供付費會員觀看喔！</h2><a href="http://ani.gamer.com.tw/animePay.php"target="_blank">參考付費方案</a>',
        n.appendChild(i),
        o.appendChild(n)
    }
    var r = {};
    try {
        var a = getAd()
          , l = a[0]
          , c = a[1]
          , u = a[2];
        l || (r.error = 12)
    } catch (d) {
        r.error = 12,
        Object.freeze(r),
        console.log("Error:: Can't get video")
    }
    return {
        initialize: function() {
            n(),
            i(),
            t.addLanguage("zh", {
                Play: "播放",
                Pause: "暫停",
                "Current Time": "目前時間",
                "Duration Time": "總共時間",
                "Remaining Time": "剩餘時間",
                "Stream Type": "串流類型",
                LIVE: "直播",
                Loaded: "載入完畢",
                Progress: "進度",
                Fullscreen: "全螢幕",
                "Non-Fullscreen": "退出全螢幕",
                Mute: "靜音",
                Unmuted: "取消靜音",
                "Playback Rate": " 播放速率",
                Subtitles: "字幕",
                "subtitles off": "關閉字幕",
                Captions: "內嵌字幕",
                "captions off": "關閉內嵌字幕",
                Chapters: "章節",
                Quality: "畫質",
                Auto: "自動",
                "You aborted the video playback": "影片播放已終止",
                "A network error caused the video download to fail part-way.": "網路錯誤導致影片下載失敗。",
                "The video playback was aborted due to a corruption problem or because the video used features your browser did not support.": "影片因格式不支援或者伺服器或網路的問題無法載入。",
                "The video could not be loaded, because the format is not supported.": "您的瀏覽器不支援該影片。",
                "The video is encrypted and we do not have the keys to decrypt it.": "影片已加密，無法解密。",
                "Video doesn't exist.": "錯誤的影片位置！",
                "Unauthorized devices.": "無法辨識您的裝置，可能原因為： <br />1.使用無痕或私密瀏覽 <br />2.受到使用的外掛插件影響",
                "Duplicate login.": "重複登入，本服務僅限一台裝置使用，請暫停其他裝置播放！",
                "To access the video, please login": "<a href='https://user.gamer.com.tw/login.php'>請先登入</a>",
                "The video playback was aborted due to a corruption problem.": "網路異常，無法取得影片！請嘗試重新整理頁面",
                "Our Services are available in Taiwan.": "本服務授權範圍限台、澎、金、馬地區，如果您為外國用戶，將無法正常使用本服務。",
                "Oops, something went wrong.": "播放器未正確載入，可能原因如下： <br />1.網路異常，請嘗試重新整理頁面 <br />2.受瀏覽器的擋廣告插件或是防毒軟體影響，請將 gamer.com.tw 加入白名單或是關閉插件。",
                "Sorry, you need to register for three months to use the service.": "很抱歉！使用本服務須註冊滿三個月。",
                "Paid Member only.": "本動畫僅供付費會員觀看喔！。"
            });
            var e = t("ani_video", {
                children: {
                    controlBar: {
                        children: [{
                            name: "playToggle",
                            id: "playToggle"
                        }, {
                            name: "progressControl",
                            id: "progressControl"
                        }, {
                            name: "button",
                            id: "preEpisode"
                        }, {
                            name: "button",
                            id: "nextEpisode"
                        }, {
                            name: "currentTimeDisplay",
                            id: "currentTimeDisplay"
                        }, {
                            name: "timeDivider",
                            id: "timeDivider"
                        }, {
                            name: "durationDisplay",
                            id: "durationDisplay"
                        }, {
                            name: "muteToggle",
                            id: "muteToggle"
                        }, {
                            name: "volumeControl",
                            id: "volumeControl"
                        }, {
                            name: "button",
                            id: "theaterToggle"
                        }, {
                            name: "fullscreenToggle",
                            id: "fullscreenToggle"
                        }, {
                            name: "button",
                            id: "danmuToggle"
                        }]
                    }
                },
                controls: !0,
                language: "zh"
            })
              , a = e.controlBar;
            return a.getChildById("theaterToggle").c.className = "vjs-indent-button vjs-control vjs-show-tip",
            a.getChildById("preEpisode").c.title = "上一集",
            a.getChildById("preEpisode").c.className = "vjs-pre-button vjs-control vjs-show-tip vjs-hidden",
            a.getChildById("nextEpisode").c.title = "下一集",
            a.getChildById("nextEpisode").c.className = "vjs-next-button vjs-control vjs-show-tip vjs-hidden",
            a.getChildById("danmuToggle").c.className = "vjs-danmu-button vjs-control vjs-show-tip vjs-hidden",
            a.getChildById("fullscreenToggle").c.title = "進入全螢幕",
            a.getChildById("fullscreenToggle").c.classList.add("vjs-show-tip"),
            a.getChildById("muteToggle").c.classList.add("vjs-show-tip"),
            r.error ? (9 == r.error && (e.dispose(),
            o(e)),
            14 == r.error && (e.dispose(),
            s(e)),
            e.error(r.error),
            !1) : (1 != r.time ? e.adenable = !0 : e.adenable = !1,
            1 != r.login ? e.login = !1 : e.login = !0,
            r.r18 && (e.r18 = r.r18),
            e.adID = l,
            e.adSID = u,
            e.adURL = c,
            e)
        }
    }
}),
define("app", [], function() {
    return {
        initialize: function() {
            function t() {
                try {
                    l.addResButton(),
                    l.changeRes(l.localize("Auto"));
                    var e = c.getElementsByClassName("vjs-res-button")[0];
                    e.title = "畫質";
                    var n = l.controlBar.getChildById("resButton");
                    n.Aa.B.lastChild.click()
                } catch (i) {
                    l && setTimeout(t, 3e3)
                }
            }
            function e(t) {
                var e = c.createElement("textarea");
                return e.innerHTML = t,
                e.value
            }
            function n(t) {
                l.isFullscreen() ? (t.indent.hide(),
                t.danmuMask.style.zIndex = 2147483647,
                t.fullscreen.c.title = "離開全螢幕") : (t.indent.show(),
                t.danmuMask.style.zIndex = 50,
                t.fullscreen.c.title = "進入全螢幕"),
                l.el().focus()
            }
            function i() {
                function t(t) {
                    var n = {};
                    n.log = viblast.printDebugInfo(),
                    n.count = n.log.match(t.reg) ? n.log.match(t.reg) : [],
                    n.count.length >= t.upperbound && (e = !1,
                    o(t.case_sn)),
                    n.count.length > t.record && n.count.length < t.upperbound && (t.record = n.count.length,
                    jQuery.ajax({
                        url: "/ajax/anime403.php?case=" + t.case_sn + "&sn=" + animefun.videoSn + "&hash=" + animefun.uuid,
                        success: function() {}
                    }))
                }
                var e = "true"
                  , n = [{
                    reg: /Response code = 403/g,
                    upperbound: 8,
                    record: 0,
                    case_sn: 1
                }, {
                    reg: /responded with 403/g,
                    upperbound: 15,
                    record: 0,
                    case_sn: 2
                }, {
                    reg: /responded with 0|Response code = 0/g,
                    upperbound: 20,
                    record: 0,
                    case_sn: 3
                }]
                  , i = setInterval(function() {
                    e ? n.forEach(t) : clearInterval(i)
                }, 5e3)
            }
            function o(t) {
                if (l) {
                    l.dispose();
                    var e = "http://ani.gamer.com.tw/anime403info.php"
                      , n = c.createElement("div")
                      , i = n.cloneNode(!1)
                      , o = n.cloneNode(!1)
                      , s = n.cloneNode(!1)
                      , r = c.getElementsByClassName("video")[0];
                    switch (t) {
                    case 1:
                    case 2:
                        i.innerHTML = "錯誤代碼1，影片傳輸中斷，請參考<a href='" + e + "'>可能原因</a>";
                        break;
                    case 3:
                        i.innerHTML = "網路中斷，請確認連線狀態！或嘗試重新整理 <br />";
                        break;
                    default:
                        i.innerHTML = "錯誤代碼2，無法取得影片，請參考<a href='" + e + "'>可能原因</a>"
                    }
                    o.appendChild(i),
                    o.className = "vjs-error-display",
                    s.appendChild(o),
                    s.className = "vjs-error",
                    r.appendChild(s),
                    jQuery.ajax({
                        url: "/ajax/anime403.php?case=0&sn=" + animefun.videoSn + "&hash=" + animefun.uuid,
                        success: function() {}
                    })
                }
            }
            function s() {
                var t = l.currentTime();
                Math.abs(t - l.endPointer) > 5 ? (l.currentTime(1),
                l.endPointer = 1) : l.endPointer = l.currentTime()
            }
            function r() {
                l.on("timeupdate", s);
                var t = c.createElement("a")
                  , e = '<a href="#" target="_blank" class="button pill"> 處理中，請稍後...</a>';
                t.className = "vjs-overlay vjs-overlay-bottom-left",
                t.innerHTML = e;
                var n = l.setTimeout(function() {
                    this.el().appendChild(t)
                }, 5e3)
                  , i = l.setTimeout(function() {
                    o()
                }, 3e4);
                ["loadeddata", "timeupdate"].forEach(function(e) {
                    l.one(e, function() {
                        clearTimeout(n),
                        clearTimeout(i);
                        try {
                            this.el().removeChild(t)
                        } catch (e) {}
                    })
                }),
                setTimeout(function() {
                    try {
                        var t = c.getElementsByClassName("vast-blocker")[0];
                        t.addEventListener("click", function() {
                            setTimeout(function() {
                                t.href = "#",
                                t.removeAttribute("target")
                            }, 350)
                        }, !1)
                    } catch (e) {}
                }, 500)
            }
            function a() {
                l.off("timeupdate", s),
                l.hotkeys({
                    volumeStep: .1,
                    seekStep: 5,
                    enableMute: !0,
                    enableFullscreen: !0,
                    enableNumbers: !0,
                    alwaysCaptureHotkeys: !0
                }),
                l.persistvolume({
                    namespace: "ANIME"
                }),
                l.persistdanmu({
                    namespace: "ANIME"
                }),
                l.progresstips(),
                l.setTimeout(function() {
                    this.overlay({
                        overlays: [{
                            start: "waiting",
                            end: "timeupdate",
                            align: "bottom-left",
                            content: '<div class="button pill" id="reportBtn">播放不順嗎? 點我回報</div>',
                            clickfunction: function() {
                                var t = document
                                  , e = t.getElementsByClassName("vjs-overlay");
                                this.firstChild.className = "button pill disable",
                                this.firstChild.innerHTML = "感謝提供資訊，我們會努力改善，謝謝！",
                                setTimeout(function() {
                                    e[0].style.display = "none"
                                }, 2e3),
                                function() {
                                    var t, e;
                                    for (e in l.overlay.eventListeners)
                                        t = l.overlay.eventListeners[e],
                                        l.off(t.type, t.fn)
                                }(),
                                jQuery.ajax({
                                    type: "POST",
                                    url: "/ajax/laglog.php",
                                    data: "s={sn:" + animefun.videosn + ",quality:" + l.viblast.video.quality.height + ",bandwidth:" + l.viblast.cdnBandwidth + ",abr:" + l.viblast.abr + "}",
                                    success: function() {},
                                    dataType: "application/x-www-form-urlencoded"
                                })
                            }
                        }]
                    })
                }, 1e4),
                d.danmu.show(),
                l.on("playing", function() {
                    animefun.danmustart()
                }),
                l.on("seeked", function() {
                    animefun.danmusettime(l.currentTime())
                }),
                ["pause", "waiting"].forEach(function(t) {
                    l.on(t, function() {
                        animefun.danmupause()
                    })
                }),
                l.login ? l.resolutionselector() : l.resolutionsingle(),
                l.one("playing", function() {
                    setTimeout(t, 2e3),
                    setTimeout(i, 1e4),
                    this.breakPoint({
                        namespace: "ANIME"
                    });
                    var e = [{
                        sn: animefun.preSn,
                        el: d.pre
                    }, {
                        sn: animefun.nextSn,
                        el: d.next
                    }];
                    e.forEach(function(t) {
                        t.sn && (t.el.show(),
                        t.el.on("click", function() {
                            window.location = "http://ani.gamer.com.tw/animeVideo.php?sn=" + t.sn
                        }))
                    })
                }),
                l.one("timeupdate", function() {
                    jQuery.ajax({
                        url: "/ajax/videoStart.php?sn=" + animefun.videoSn,
                        success: function() {}
                    }),
                    n(d)
                }),
                l.one("breakpoint", function() {
                    var t = this;
                    this.on("pause", function() {
                        t.ended() || t.seeking() || t.bigPlayButton.show(),
                        t.el().focus()
                    }),
                    this.stopmask(e(animefun.title), animefun.nextSn)
                })
            }
            var l = this;
            l.endPointer = 0;
            var c = document
              , u = l.controlBar
              , d = {
                pre: u.getChildById("preEpisode"),
                next: u.getChildById("nextEpisode"),
                indent: u.getChildById("theaterToggle"),
                fullscreen: u.getChildById("fullscreenToggle"),
                danmu: u.getChildById("danmuToggle"),
                danmuMask: c.getElementById("danmu")
            };
            l.volume(.2),
            l.persistindent({
                namespace: "ANIME"
            }),
            l.adenable ? (l.vast({
                source: encodeURI("http://gamer-cds.cdn.hinet.net/vod/gamer/gamer_ad-" + l.adID + "/hls-ae-2s/index.m3u8"),
                clickURL: l.adURL
            }),
            l.elapse({
                adenable: !0
            }),
            l.one("adstart", function() {
                r(),
                jQuery.ajax({
                    url: "/ajax/videoCastcishu.php?s=" + l.adSID + "&sn=" + animefun.videoSn,
                    success: function() {}
                })
            }),
            l.one("adend", function() {
                a(),
                jQuery.ajax({
                    url: "/ajax/videoCastcishu.php?s=" + l.adSID + "&sn=" + animefun.videoSn + "&ad=end",
                    success: function() {}
                })
            })) : (l.elapse({
                adenable: !1
            }),
            l.one("play", function() {
                r(),
                a()
            })),
            l.r18 && (l.ageGate(l.r18),
            l.bigPlayButton.hide()),
            l.one("play", function() {
                jQuery.ajax({
                    url: "/ajax/checklock.php?device=" + animefun.getdeviceid() + "&sn=" + animefun.videoSn,
                    success: function() {}
                })
            }),
            l.on("fullscreenchange", function() {
                n(d)
            }),
            l.on("play", function() {
                this.bigPlayButton.hide(),
                this.el().focus()
            })
        }
    }
}),
requirejs.config({
    baseUrl: ".",
    waitSeconds: 20,
    mainConfigFile: "js/anime_main.js",
    urlArgs: "v=" + (new Date).getFullYear() + ((new Date).getMonth() + 1 < 10 ? "0" : "") + ((new Date).getMonth() + 1) + ((new Date).getDate() < 10 ? "0" : "") + (new Date).getDate(),
    paths: {
        order: "js/order",
        videojs: "js/video",
        viblast: "http://i2.bahamut.com.tw/js/viblast",
        viblastvast: "js/videojs_viblast_vast",
        peresistvolume: "js/videojs_persistvolume",
        peresistdanmu: "js/videojs_persistdanmu",
        peresistindent: "js/videojs_persistindent",
        hotkeys: "js/videojs_hotkeys",
        quality: "js/videojs_quality_selector",
        qualitysingle: "js/videojs_quality_single",
        elapse: "js/videojs_elapse",
        agegate: "js/videojs_agegate",
        stopmask: "js/videojs_stopmask",
        overlay: "js/videojs_overlay",
        progresstip: "js/videojs_progresstip",
        breakpoint: "js/videojs_breakpoint",
        player: "js/anime_init",
        app: "js/anime_extension"
    },
    shim: {
        viblast: {},
        viblastvast: {
            deps: ["videojs"]
        }
    }
}),
requirejs(["order!videojs", "order!viblast", "order!viblastvast", "order!agegate", "order!breakpoint", "order!elapse", "order!hotkeys", "order!overlay", "order!peresistvolume", "order!peresistdanmu", "order!peresistindent", "order!progresstip", "order!quality", "order!qualitysingle", "order!stopmask", "order!player", "order!app"], function(t, e, n, i, o, s, r, a, l, c, u, d, p, h, f, v, m) {
    var y = v.initialize();
    m.initialize.apply(y),
    delete videojs.players.ani_video
}),
define("js/anime_main", function() {});
