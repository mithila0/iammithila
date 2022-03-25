! function(e) {
    var t = {};

    function r(o) {
        if (t[o]) return t[o].exports;
        var n = t[o] = {
            i: o,
            l: !1,
            exports: {}
        };
        return e[o].call(n.exports, n, n.exports, r), n.l = !0, n.exports
    }
    r.m = e, r.c = t, r.d = function(e, t, o) {
        r.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: o
        })
    }, r.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, r.t = function(e, t) {
        if (1 & t && (e = r(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var o = Object.create(null);
        if (r.r(o), Object.defineProperty(o, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var n in e) r.d(o, n, function(t) {
                return e[t]
            }.bind(null, n));
        return o
    }, r.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return r.d(t, "a", t), t
    }, r.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, r.p = "", r(r.s = 119)
}({
    119: function(e, t) {
        var r = document.querySelector(".cta"),
            o = document.querySelector(".style-options");
        colors = document.querySelectorAll(".colors div"), r.onclick = function(e) {
            o.classList.toggle("hide")
        }, colors.forEach((function(e) {
            e.addEventListener("click", (function(t) {
                colors.forEach((function(e) {
                    e.classList.remove("active")
                })), e.classList.add("active");
                var r = document.querySelectorAll("link[href]"),
                    o = document.querySelector("head");
                o.removeChild(r[1]), o.removeChild(r[2]);
                var n = e.getAttribute("data-color"),
                    c = document.createElement("link");
                c.href = "".concat(n, ".css"), c.rel = "stylesheet";
                var l = document.createElement("link");
                if (l.href = "".concat(n, "_dark_style.css"), l.rel = "stylesheet", e.classList.contains("color_one")) return c.href = "default_color.css", l.href = "default_color_dark_style.css", o.appendChild(c), void o.appendChild(l);
                o.appendChild(c), o.appendChild(l)
            }))
        }))
    }
});