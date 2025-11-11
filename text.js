/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

( () => {
    var Y_ = Object.create;
    var sn = Object.defineProperty;
    var $_ = Object.getOwnPropertyDescriptor;
    var Q_ = Object.getOwnPropertyNames;
    var Z_ = Object.getPrototypeOf
      , J_ = Object.prototype.hasOwnProperty;
    var me = (e, t) => () => (e && (t = e(e = 0)),
    t);
    var c = (e, t) => () => (t || e((t = {
        exports: {}
    }).exports, t),
    t.exports)
      , Fe = (e, t) => {
        for (var r in t)
            sn(e, r, {
                get: t[r],
                enumerable: !0
            })
    }
      , Ls = (e, t, r, n) => {
        if (t && typeof t == "object" || typeof t == "function")
            for (let o of Q_(t))
                !J_.call(e, o) && o !== r && sn(e, o, {
                    get: () => t[o],
                    enumerable: !(n = $_(t, o)) || n.enumerable
                });
        return e
    }
    ;
    var fe = (e, t, r) => (r = e != null ? Y_(Z_(e)) : {},
    Ls(t || !e || !e.__esModule ? sn(r, "default", {
        value: e,
        enumerable: !0
    }) : r, e))
      , nt = e => Ls(sn({}, "__esModule", {
        value: !0
    }), e);
    var Pi = c( () => {
        "use strict";
        window.tram = function(e) {
            function t(f, b) {
                var w = new y.Bare;
                return w.init(f, b)
            }
            function r(f) {
                return f.replace(/[A-Z]/g, function(b) {
                    return "-" + b.toLowerCase()
                })
            }
            function n(f) {
                var b = parseInt(f.slice(1), 16)
                  , w = b >> 16 & 255
                  , C = b >> 8 & 255
                  , O = 255 & b;
                return [w, C, O]
            }
            function o(f, b, w) {
                return "#" + (1 << 24 | f << 16 | b << 8 | w).toString(16).slice(1)
            }
            function i() {}
            function a(f, b) {
                d("Type warning: Expected: [" + f + "] Got: [" + typeof b + "] " + b)
            }
            function s(f, b, w) {
                d("Units do not match [" + f + "]: " + b + ", " + w)
            }
            function u(f, b, w) {
                if (b !== void 0 && (w = b),
                f === void 0)
                    return w;
                var C = w;
                return qe.test(f) || !Xe.test(f) ? C = parseInt(f, 10) : Xe.test(f) && (C = 1e3 * parseFloat(f)),
                0 > C && (C = 0),
                C === C ? C : w
            }
            function d(f) {
                oe.debug && window && window.console.warn(f)
            }
            function h(f) {
                for (var b = -1, w = f ? f.length : 0, C = []; ++b < w; ) {
                    var O = f[b];
                    O && C.push(O)
                }
                return C
            }
            var g = function(f, b, w) {
                function C(ae) {
                    return typeof ae == "object"
                }
                function O(ae) {
                    return typeof ae == "function"
                }
                function N() {}
                function Z(ae, ge) {
                    function z() {
                        var Ce = new se;
                        return O(Ce.init) && Ce.init.apply(Ce, arguments),
                        Ce
                    }
                    function se() {}
                    ge === w && (ge = ae,
                    ae = Object),
                    z.Bare = se;
                    var ue, be = N[f] = ae[f], rt = se[f] = z[f] = new N;
                    return rt.constructor = z,
                    z.mixin = function(Ce) {
                        return se[f] = z[f] = Z(z, Ce)[f],
                        z
                    }
                    ,
                    z.open = function(Ce) {
                        if (ue = {},
                        O(Ce) ? ue = Ce.call(z, rt, be, z, ae) : C(Ce) && (ue = Ce),
                        C(ue))
                            for (var _r in ue)
                                b.call(ue, _r) && (rt[_r] = ue[_r]);
                        return O(rt.init) || (rt.init = ae),
                        z
                    }
                    ,
                    z.open(ge)
                }
                return Z
            }("prototype", {}.hasOwnProperty)
              , m = {
                ease: ["ease", function(f, b, w, C) {
                    var O = (f /= C) * f
                      , N = O * f;
                    return b + w * (-2.75 * N * O + 11 * O * O + -15.5 * N + 8 * O + .25 * f)
                }
                ],
                "ease-in": ["ease-in", function(f, b, w, C) {
                    var O = (f /= C) * f
                      , N = O * f;
                    return b + w * (-1 * N * O + 3 * O * O + -3 * N + 2 * O)
                }
                ],
                "ease-out": ["ease-out", function(f, b, w, C) {
                    var O = (f /= C) * f
                      , N = O * f;
                    return b + w * (.3 * N * O + -1.6 * O * O + 2.2 * N + -1.8 * O + 1.9 * f)
                }
                ],
                "ease-in-out": ["ease-in-out", function(f, b, w, C) {
                    var O = (f /= C) * f
                      , N = O * f;
                    return b + w * (2 * N * O + -5 * O * O + 2 * N + 2 * O)
                }
                ],
                linear: ["linear", function(f, b, w, C) {
                    return w * f / C + b
                }
                ],
                "ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(f, b, w, C) {
                    return w * (f /= C) * f + b
                }
                ],
                "ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(f, b, w, C) {
                    return -w * (f /= C) * (f - 2) + b
                }
                ],
                "ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(f, b, w, C) {
                    return (f /= C / 2) < 1 ? w / 2 * f * f + b : -w / 2 * (--f * (f - 2) - 1) + b
                }
                ],
                "ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(f, b, w, C) {
                    return w * (f /= C) * f * f + b
                }
                ],
                "ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(f, b, w, C) {
                    return w * ((f = f / C - 1) * f * f + 1) + b
                }
                ],
                "ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(f, b, w, C) {
                    return (f /= C / 2) < 1 ? w / 2 * f * f * f + b : w / 2 * ((f -= 2) * f * f + 2) + b
                }
                ],
                "ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(f, b, w, C) {
                    return w * (f /= C) * f * f * f + b
                }
                ],
                "ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(f, b, w, C) {
                    return -w * ((f = f / C - 1) * f * f * f - 1) + b
                }
                ],
                "ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(f, b, w, C) {
                    return (f /= C / 2) < 1 ? w / 2 * f * f * f * f + b : -w / 2 * ((f -= 2) * f * f * f - 2) + b
                }
                ],
                "ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(f, b, w, C) {
                    return w * (f /= C) * f * f * f * f + b
                }
                ],
                "ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(f, b, w, C) {
                    return w * ((f = f / C - 1) * f * f * f * f + 1) + b
                }
                ],
                "ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(f, b, w, C) {
                    return (f /= C / 2) < 1 ? w / 2 * f * f * f * f * f + b : w / 2 * ((f -= 2) * f * f * f * f + 2) + b
                }
                ],
                "ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(f, b, w, C) {
                    return -w * Math.cos(f / C * (Math.PI / 2)) + w + b
                }
                ],
                "ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(f, b, w, C) {
                    return w * Math.sin(f / C * (Math.PI / 2)) + b
                }
                ],
                "ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(f, b, w, C) {
                    return -w / 2 * (Math.cos(Math.PI * f / C) - 1) + b
                }
                ],
                "ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(f, b, w, C) {
                    return f === 0 ? b : w * Math.pow(2, 10 * (f / C - 1)) + b
                }
                ],
                "ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(f, b, w, C) {
                    return f === C ? b + w : w * (-Math.pow(2, -10 * f / C) + 1) + b
                }
                ],
                "ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(f, b, w, C) {
                    return f === 0 ? b : f === C ? b + w : (f /= C / 2) < 1 ? w / 2 * Math.pow(2, 10 * (f - 1)) + b : w / 2 * (-Math.pow(2, -10 * --f) + 2) + b
                }
                ],
                "ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(f, b, w, C) {
                    return -w * (Math.sqrt(1 - (f /= C) * f) - 1) + b
                }
                ],
                "ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(f, b, w, C) {
                    return w * Math.sqrt(1 - (f = f / C - 1) * f) + b
                }
                ],
                "ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(f, b, w, C) {
                    return (f /= C / 2) < 1 ? -w / 2 * (Math.sqrt(1 - f * f) - 1) + b : w / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + b
                }
                ],
                "ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(f, b, w, C, O) {
                    return O === void 0 && (O = 1.70158),
                    w * (f /= C) * f * ((O + 1) * f - O) + b
                }
                ],
                "ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(f, b, w, C, O) {
                    return O === void 0 && (O = 1.70158),
                    w * ((f = f / C - 1) * f * ((O + 1) * f + O) + 1) + b
                }
                ],
                "ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(f, b, w, C, O) {
                    return O === void 0 && (O = 1.70158),
                    (f /= C / 2) < 1 ? w / 2 * f * f * (((O *= 1.525) + 1) * f - O) + b : w / 2 * ((f -= 2) * f * (((O *= 1.525) + 1) * f + O) + 2) + b
                }
                ]
            }
              , E = {
                "ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
                "ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
                "ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
            }
              , T = document
              , I = window
              , D = "bkwld-tram"
              , S = /[\-\.0-9]/g
              , L = /[A-Z]/
              , R = "number"
              , P = /^(rgb|#)/
              , q = /(em|cm|mm|in|pt|pc|px)$/
              , M = /(em|cm|mm|in|pt|pc|px|%)$/
              , X = /(deg|rad|turn)$/
              , K = "unitless"
              , $ = /(all|none) 0s ease 0s/
              , J = /^(width|height)$/
              , ee = " "
              , U = T.createElement("a")
              , x = ["Webkit", "Moz", "O", "ms"]
              , F = ["-webkit-", "-moz-", "-o-", "-ms-"]
              , B = function(f) {
                if (f in U.style)
                    return {
                        dom: f,
                        css: f
                    };
                var b, w, C = "", O = f.split("-");
                for (b = 0; b < O.length; b++)
                    C += O[b].charAt(0).toUpperCase() + O[b].slice(1);
                for (b = 0; b < x.length; b++)
                    if (w = x[b] + C,
                    w in U.style)
                        return {
                            dom: w,
                            css: F[b] + f
                        }
            }
              , H = t.support = {
                bind: Function.prototype.bind,
                transform: B("transform"),
                transition: B("transition"),
                backface: B("backface-visibility"),
                timing: B("transition-timing-function")
            };
            if (H.transition) {
                var te = H.timing.dom;
                if (U.style[te] = m["ease-in-back"][0],
                !U.style[te])
                    for (var re in E)
                        m[re][0] = E[re]
            }
            var k = t.frame = function() {
                var f = I.requestAnimationFrame || I.webkitRequestAnimationFrame || I.mozRequestAnimationFrame || I.oRequestAnimationFrame || I.msRequestAnimationFrame;
                return f && H.bind ? f.bind(I) : function(b) {
                    I.setTimeout(b, 16)
                }
            }()
              , Y = t.now = function() {
                var f = I.performance
                  , b = f && (f.now || f.webkitNow || f.msNow || f.mozNow);
                return b && H.bind ? b.bind(f) : Date.now || function() {
                    return +new Date
                }
            }()
              , p = g(function(f) {
                function b(ne, ce) {
                    var ye = h(("" + ne).split(ee))
                      , pe = ye[0];
                    ce = ce || {};
                    var Le = j[pe];
                    if (!Le)
                        return d("Unsupported property: " + pe);
                    if (!ce.weak || !this.props[pe]) {
                        var je = Le[0]
                          , De = this.props[pe];
                        return De || (De = this.props[pe] = new je.Bare),
                        De.init(this.$el, ye, Le, ce),
                        De
                    }
                }
                function w(ne, ce, ye) {
                    if (ne) {
                        var pe = typeof ne;
                        if (ce || (this.timer && this.timer.destroy(),
                        this.queue = [],
                        this.active = !1),
                        pe == "number" && ce)
                            return this.timer = new ie({
                                duration: ne,
                                context: this,
                                complete: N
                            }),
                            void (this.active = !0);
                        if (pe == "string" && ce) {
                            switch (ne) {
                            case "hide":
                                z.call(this);
                                break;
                            case "stop":
                                Z.call(this);
                                break;
                            case "redraw":
                                se.call(this);
                                break;
                            default:
                                b.call(this, ne, ye && ye[1])
                            }
                            return N.call(this)
                        }
                        if (pe == "function")
                            return void ne.call(this, this);
                        if (pe == "object") {
                            var Le = 0;
                            rt.call(this, ne, function(Te, K_) {
                                Te.span > Le && (Le = Te.span),
                                Te.stop(),
                                Te.animate(K_)
                            }, function(Te) {
                                "wait"in Te && (Le = u(Te.wait, 0))
                            }),
                            be.call(this),
                            Le > 0 && (this.timer = new ie({
                                duration: Le,
                                context: this
                            }),
                            this.active = !0,
                            ce && (this.timer.complete = N));
                            var je = this
                              , De = !1
                              , an = {};
                            k(function() {
                                rt.call(je, ne, function(Te) {
                                    Te.active && (De = !0,
                                    an[Te.name] = Te.nextStyle)
                                }),
                                De && je.$el.css(an)
                            })
                        }
                    }
                }
                function C(ne) {
                    ne = u(ne, 0),
                    this.active ? this.queue.push({
                        options: ne
                    }) : (this.timer = new ie({
                        duration: ne,
                        context: this,
                        complete: N
                    }),
                    this.active = !0)
                }
                function O(ne) {
                    return this.active ? (this.queue.push({
                        options: ne,
                        args: arguments
                    }),
                    void (this.timer.complete = N)) : d("No active transition timer. Use start() or wait() before then().")
                }
                function N() {
                    if (this.timer && this.timer.destroy(),
                    this.active = !1,
                    this.queue.length) {
                        var ne = this.queue.shift();
                        w.call(this, ne.options, !0, ne.args)
                    }
                }
                function Z(ne) {
                    this.timer && this.timer.destroy(),
                    this.queue = [],
                    this.active = !1;
                    var ce;
                    typeof ne == "string" ? (ce = {},
                    ce[ne] = 1) : ce = typeof ne == "object" && ne != null ? ne : this.props,
                    rt.call(this, ce, Ce),
                    be.call(this)
                }
                function ae(ne) {
                    Z.call(this, ne),
                    rt.call(this, ne, _r, j_)
                }
                function ge(ne) {
                    typeof ne != "string" && (ne = "block"),
                    this.el.style.display = ne
                }
                function z() {
                    Z.call(this),
                    this.el.style.display = "none"
                }
                function se() {
                    this.el.offsetHeight
                }
                function ue() {
                    Z.call(this),
                    e.removeData(this.el, D),
                    this.$el = this.el = null
                }
                function be() {
                    var ne, ce, ye = [];
                    this.upstream && ye.push(this.upstream);
                    for (ne in this.props)
                        ce = this.props[ne],
                        ce.active && ye.push(ce.string);
                    ye = ye.join(","),
                    this.style !== ye && (this.style = ye,
                    this.el.style[H.transition.dom] = ye)
                }
                function rt(ne, ce, ye) {
                    var pe, Le, je, De, an = ce !== Ce, Te = {};
                    for (pe in ne)
                        je = ne[pe],
                        pe in de ? (Te.transform || (Te.transform = {}),
                        Te.transform[pe] = je) : (L.test(pe) && (pe = r(pe)),
                        pe in j ? Te[pe] = je : (De || (De = {}),
                        De[pe] = je));
                    for (pe in Te) {
                        if (je = Te[pe],
                        Le = this.props[pe],
                        !Le) {
                            if (!an)
                                continue;
                            Le = b.call(this, pe)
                        }
                        ce.call(this, Le, je)
                    }
                    ye && De && ye.call(this, De)
                }
                function Ce(ne) {
                    ne.stop()
                }
                function _r(ne, ce) {
                    ne.set(ce)
                }
                function j_(ne) {
                    this.$el.css(ne)
                }
                function Be(ne, ce) {
                    f[ne] = function() {
                        return this.children ? z_.call(this, ce, arguments) : (this.el && ce.apply(this, arguments),
                        this)
                    }
                }
                function z_(ne, ce) {
                    var ye, pe = this.children.length;
                    for (ye = 0; pe > ye; ye++)
                        ne.apply(this.children[ye], ce);
                    return this
                }
                f.init = function(ne) {
                    if (this.$el = e(ne),
                    this.el = this.$el[0],
                    this.props = {},
                    this.queue = [],
                    this.style = "",
                    this.active = !1,
                    oe.keepInherited && !oe.fallback) {
                        var ce = W(this.el, "transition");
                        ce && !$.test(ce) && (this.upstream = ce)
                    }
                    H.backface && oe.hideBackface && v(this.el, H.backface.css, "hidden")
                }
                ,
                Be("add", b),
                Be("start", w),
                Be("wait", C),
                Be("then", O),
                Be("next", N),
                Be("stop", Z),
                Be("set", ae),
                Be("show", ge),
                Be("hide", z),
                Be("redraw", se),
                Be("destroy", ue)
            })
              , y = g(p, function(f) {
                function b(w, C) {
                    var O = e.data(w, D) || e.data(w, D, new p.Bare);
                    return O.el || O.init(w),
                    C ? O.start(C) : O
                }
                f.init = function(w, C) {
                    var O = e(w);
                    if (!O.length)
                        return this;
                    if (O.length === 1)
                        return b(O[0], C);
                    var N = [];
                    return O.each(function(Z, ae) {
                        N.push(b(ae, C))
                    }),
                    this.children = N,
                    this
                }
            })
              , _ = g(function(f) {
                function b() {
                    var N = this.get();
                    this.update("auto");
                    var Z = this.get();
                    return this.update(N),
                    Z
                }
                function w(N, Z, ae) {
                    return Z !== void 0 && (ae = Z),
                    N in m ? N : ae
                }
                function C(N) {
                    var Z = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(N);
                    return (Z ? o(Z[1], Z[2], Z[3]) : N).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
                }
                var O = {
                    duration: 500,
                    ease: "ease",
                    delay: 0
                };
                f.init = function(N, Z, ae, ge) {
                    this.$el = N,
                    this.el = N[0];
                    var z = Z[0];
                    ae[2] && (z = ae[2]),
                    Q[z] && (z = Q[z]),
                    this.name = z,
                    this.type = ae[1],
                    this.duration = u(Z[1], this.duration, O.duration),
                    this.ease = w(Z[2], this.ease, O.ease),
                    this.delay = u(Z[3], this.delay, O.delay),
                    this.span = this.duration + this.delay,
                    this.active = !1,
                    this.nextStyle = null,
                    this.auto = J.test(this.name),
                    this.unit = ge.unit || this.unit || oe.defaultUnit,
                    this.angle = ge.angle || this.angle || oe.defaultAngle,
                    oe.fallback || ge.fallback ? this.animate = this.fallback : (this.animate = this.transition,
                    this.string = this.name + ee + this.duration + "ms" + (this.ease != "ease" ? ee + m[this.ease][0] : "") + (this.delay ? ee + this.delay + "ms" : ""))
                }
                ,
                f.set = function(N) {
                    N = this.convert(N, this.type),
                    this.update(N),
                    this.redraw()
                }
                ,
                f.transition = function(N) {
                    this.active = !0,
                    N = this.convert(N, this.type),
                    this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()),
                    this.redraw()),
                    N == "auto" && (N = b.call(this))),
                    this.nextStyle = N
                }
                ,
                f.fallback = function(N) {
                    var Z = this.el.style[this.name] || this.convert(this.get(), this.type);
                    N = this.convert(N, this.type),
                    this.auto && (Z == "auto" && (Z = this.convert(this.get(), this.type)),
                    N == "auto" && (N = b.call(this))),
                    this.tween = new A({
                        from: Z,
                        to: N,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }
                ,
                f.get = function() {
                    return W(this.el, this.name)
                }
                ,
                f.update = function(N) {
                    v(this.el, this.name, N)
                }
                ,
                f.stop = function() {
                    (this.active || this.nextStyle) && (this.active = !1,
                    this.nextStyle = null,
                    v(this.el, this.name, this.get()));
                    var N = this.tween;
                    N && N.context && N.destroy()
                }
                ,
                f.convert = function(N, Z) {
                    if (N == "auto" && this.auto)
                        return N;
                    var ae, ge = typeof N == "number", z = typeof N == "string";
                    switch (Z) {
                    case R:
                        if (ge)
                            return N;
                        if (z && N.replace(S, "") === "")
                            return +N;
                        ae = "number(unitless)";
                        break;
                    case P:
                        if (z) {
                            if (N === "" && this.original)
                                return this.original;
                            if (Z.test(N))
                                return N.charAt(0) == "#" && N.length == 7 ? N : C(N)
                        }
                        ae = "hex or rgb string";
                        break;
                    case q:
                        if (ge)
                            return N + this.unit;
                        if (z && Z.test(N))
                            return N;
                        ae = "number(px) or string(unit)";
                        break;
                    case M:
                        if (ge)
                            return N + this.unit;
                        if (z && Z.test(N))
                            return N;
                        ae = "number(px) or string(unit or %)";
                        break;
                    case X:
                        if (ge)
                            return N + this.angle;
                        if (z && Z.test(N))
                            return N;
                        ae = "number(deg) or string(angle)";
                        break;
                    case K:
                        if (ge || z && M.test(N))
                            return N;
                        ae = "number(unitless) or string(unit or %)"
                    }
                    return a(ae, N),
                    N
                }
                ,
                f.redraw = function() {
                    this.el.offsetHeight
                }
            })
              , l = g(_, function(f, b) {
                f.init = function() {
                    b.init.apply(this, arguments),
                    this.original || (this.original = this.convert(this.get(), P))
                }
            })
              , G = g(_, function(f, b) {
                f.init = function() {
                    b.init.apply(this, arguments),
                    this.animate = this.fallback
                }
                ,
                f.get = function() {
                    return this.$el[this.name]()
                }
                ,
                f.update = function(w) {
                    this.$el[this.name](w)
                }
            })
              , V = g(_, function(f, b) {
                function w(C, O) {
                    var N, Z, ae, ge, z;
                    for (N in C)
                        ge = de[N],
                        ae = ge[0],
                        Z = ge[1] || N,
                        z = this.convert(C[N], ae),
                        O.call(this, Z, z, ae)
                }
                f.init = function() {
                    b.init.apply(this, arguments),
                    this.current || (this.current = {},
                    de.perspective && oe.perspective && (this.current.perspective = oe.perspective,
                    v(this.el, this.name, this.style(this.current)),
                    this.redraw()))
                }
                ,
                f.set = function(C) {
                    w.call(this, C, function(O, N) {
                        this.current[O] = N
                    }),
                    v(this.el, this.name, this.style(this.current)),
                    this.redraw()
                }
                ,
                f.transition = function(C) {
                    var O = this.values(C);
                    this.tween = new le({
                        current: this.current,
                        values: O,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease
                    });
                    var N, Z = {};
                    for (N in this.current)
                        Z[N] = N in O ? O[N] : this.current[N];
                    this.active = !0,
                    this.nextStyle = this.style(Z)
                }
                ,
                f.fallback = function(C) {
                    var O = this.values(C);
                    this.tween = new le({
                        current: this.current,
                        values: O,
                        duration: this.duration,
                        delay: this.delay,
                        ease: this.ease,
                        update: this.update,
                        context: this
                    })
                }
                ,
                f.update = function() {
                    v(this.el, this.name, this.style(this.current))
                }
                ,
                f.style = function(C) {
                    var O, N = "";
                    for (O in C)
                        N += O + "(" + C[O] + ") ";
                    return N
                }
                ,
                f.values = function(C) {
                    var O, N = {};
                    return w.call(this, C, function(Z, ae, ge) {
                        N[Z] = ae,
                        this.current[Z] === void 0 && (O = 0,
                        ~Z.indexOf("scale") && (O = 1),
                        this.current[Z] = this.convert(O, ge))
                    }),
                    N
                }
            })
              , A = g(function(f) {
                function b(z) {
                    ae.push(z) === 1 && k(w)
                }
                function w() {
                    var z, se, ue, be = ae.length;
                    if (be)
                        for (k(w),
                        se = Y(),
                        z = be; z--; )
                            ue = ae[z],
                            ue && ue.render(se)
                }
                function C(z) {
                    var se, ue = e.inArray(z, ae);
                    ue >= 0 && (se = ae.slice(ue + 1),
                    ae.length = ue,
                    se.length && (ae = ae.concat(se)))
                }
                function O(z) {
                    return Math.round(z * ge) / ge
                }
                function N(z, se, ue) {
                    return o(z[0] + ue * (se[0] - z[0]), z[1] + ue * (se[1] - z[1]), z[2] + ue * (se[2] - z[2]))
                }
                var Z = {
                    ease: m.ease[1],
                    from: 0,
                    to: 1
                };
                f.init = function(z) {
                    this.duration = z.duration || 0,
                    this.delay = z.delay || 0;
                    var se = z.ease || Z.ease;
                    m[se] && (se = m[se][1]),
                    typeof se != "function" && (se = Z.ease),
                    this.ease = se,
                    this.update = z.update || i,
                    this.complete = z.complete || i,
                    this.context = z.context || this,
                    this.name = z.name;
                    var ue = z.from
                      , be = z.to;
                    ue === void 0 && (ue = Z.from),
                    be === void 0 && (be = Z.to),
                    this.unit = z.unit || "",
                    typeof ue == "number" && typeof be == "number" ? (this.begin = ue,
                    this.change = be - ue) : this.format(be, ue),
                    this.value = this.begin + this.unit,
                    this.start = Y(),
                    z.autoplay !== !1 && this.play()
                }
                ,
                f.play = function() {
                    this.active || (this.start || (this.start = Y()),
                    this.active = !0,
                    b(this))
                }
                ,
                f.stop = function() {
                    this.active && (this.active = !1,
                    C(this))
                }
                ,
                f.render = function(z) {
                    var se, ue = z - this.start;
                    if (this.delay) {
                        if (ue <= this.delay)
                            return;
                        ue -= this.delay
                    }
                    if (ue < this.duration) {
                        var be = this.ease(ue, 0, 1, this.duration);
                        return se = this.startRGB ? N(this.startRGB, this.endRGB, be) : O(this.begin + be * this.change),
                        this.value = se + this.unit,
                        void this.update.call(this.context, this.value)
                    }
                    se = this.endHex || this.begin + this.change,
                    this.value = se + this.unit,
                    this.update.call(this.context, this.value),
                    this.complete.call(this.context),
                    this.destroy()
                }
                ,
                f.format = function(z, se) {
                    if (se += "",
                    z += "",
                    z.charAt(0) == "#")
                        return this.startRGB = n(se),
                        this.endRGB = n(z),
                        this.endHex = z,
                        this.begin = 0,
                        void (this.change = 1);
                    if (!this.unit) {
                        var ue = se.replace(S, "")
                          , be = z.replace(S, "");
                        ue !== be && s("tween", se, z),
                        this.unit = ue
                    }
                    se = parseFloat(se),
                    z = parseFloat(z),
                    this.begin = this.value = se,
                    this.change = z - se
                }
                ,
                f.destroy = function() {
                    this.stop(),
                    this.context = null,
                    this.ease = this.update = this.complete = i
                }
                ;
                var ae = []
                  , ge = 1e3
            })
              , ie = g(A, function(f) {
                f.init = function(b) {
                    this.duration = b.duration || 0,
                    this.complete = b.complete || i,
                    this.context = b.context,
                    this.play()
                }
                ,
                f.render = function(b) {
                    var w = b - this.start;
                    w < this.duration || (this.complete.call(this.context),
                    this.destroy())
                }
            })
              , le = g(A, function(f, b) {
                f.init = function(w) {
                    this.context = w.context,
                    this.update = w.update,
                    this.tweens = [],
                    this.current = w.current;
                    var C, O;
                    for (C in w.values)
                        O = w.values[C],
                        this.current[C] !== O && this.tweens.push(new A({
                            name: C,
                            from: this.current[C],
                            to: O,
                            duration: w.duration,
                            delay: w.delay,
                            ease: w.ease,
                            autoplay: !1
                        }));
                    this.play()
                }
                ,
                f.render = function(w) {
                    var C, O, N = this.tweens.length, Z = !1;
                    for (C = N; C--; )
                        O = this.tweens[C],
                        O.context && (O.render(w),
                        this.current[O.name] = O.value,
                        Z = !0);
                    return Z ? void (this.update && this.update.call(this.context)) : this.destroy()
                }
                ,
                f.destroy = function() {
                    if (b.destroy.call(this),
                    this.tweens) {
                        var w, C = this.tweens.length;
                        for (w = C; w--; )
                            this.tweens[w].destroy();
                        this.tweens = null,
                        this.current = null
                    }
                }
            })
              , oe = t.config = {
                debug: !1,
                defaultUnit: "px",
                defaultAngle: "deg",
                keepInherited: !1,
                hideBackface: !1,
                perspective: "",
                fallback: !H.transition,
                agentTests: []
            };
            t.fallback = function(f) {
                if (!H.transition)
                    return oe.fallback = !0;
                oe.agentTests.push("(" + f + ")");
                var b = new RegExp(oe.agentTests.join("|"),"i");
                oe.fallback = b.test(navigator.userAgent)
            }
            ,
            t.fallback("6.0.[2-5] Safari"),
            t.tween = function(f) {
                return new A(f)
            }
            ,
            t.delay = function(f, b, w) {
                return new ie({
                    complete: b,
                    duration: f,
                    context: w
                })
            }
            ,
            e.fn.tram = function(f) {
                return t.call(null, this, f)
            }
            ;
            var v = e.style
              , W = e.css
              , Q = {
                transform: H.transform && H.transform.css
            }
              , j = {
                color: [l, P],
                background: [l, P, "background-color"],
                "outline-color": [l, P],
                "border-color": [l, P],
                "border-top-color": [l, P],
                "border-right-color": [l, P],
                "border-bottom-color": [l, P],
                "border-left-color": [l, P],
                "border-width": [_, q],
                "border-top-width": [_, q],
                "border-right-width": [_, q],
                "border-bottom-width": [_, q],
                "border-left-width": [_, q],
                "border-spacing": [_, q],
                "letter-spacing": [_, q],
                margin: [_, q],
                "margin-top": [_, q],
                "margin-right": [_, q],
                "margin-bottom": [_, q],
                "margin-left": [_, q],
                padding: [_, q],
                "padding-top": [_, q],
                "padding-right": [_, q],
                "padding-bottom": [_, q],
                "padding-left": [_, q],
                "outline-width": [_, q],
                opacity: [_, R],
                top: [_, M],
                right: [_, M],
                bottom: [_, M],
                left: [_, M],
                "font-size": [_, M],
                "text-indent": [_, M],
                "word-spacing": [_, M],
                width: [_, M],
                "min-width": [_, M],
                "max-width": [_, M],
                height: [_, M],
                "min-height": [_, M],
                "max-height": [_, M],
                "line-height": [_, K],
                "scroll-top": [G, R, "scrollTop"],
                "scroll-left": [G, R, "scrollLeft"]
            }
              , de = {};
            H.transform && (j.transform = [V],
            de = {
                x: [M, "translateX"],
                y: [M, "translateY"],
                rotate: [X],
                rotateX: [X],
                rotateY: [X],
                scale: [R],
                scaleX: [R],
                scaleY: [R],
                skew: [X],
                skewX: [X],
                skewY: [X]
            }),
            H.transform && H.backface && (de.z = [M, "translateZ"],
            de.rotateZ = [X],
            de.scaleZ = [R],
            de.perspective = [q]);
            var qe = /ms/
              , Xe = /s|\./;
            return e.tram = t
        }(window.jQuery)
    }
    );
    var Ps = c( (VV, Ns) => {
        "use strict";
        var eb = window.$
          , tb = Pi() && eb.tram;
        Ns.exports = function() {
            var e = {};
            e.VERSION = "1.6.0-Webflow";
            var t = {}
              , r = Array.prototype
              , n = Object.prototype
              , o = Function.prototype
              , i = r.push
              , a = r.slice
              , s = r.concat
              , u = n.toString
              , d = n.hasOwnProperty
              , h = r.forEach
              , g = r.map
              , m = r.reduce
              , E = r.reduceRight
              , T = r.filter
              , I = r.every
              , D = r.some
              , S = r.indexOf
              , L = r.lastIndexOf
              , R = Array.isArray
              , P = Object.keys
              , q = o.bind
              , M = e.each = e.forEach = function(x, F, B) {
                if (x == null)
                    return x;
                if (h && x.forEach === h)
                    x.forEach(F, B);
                else if (x.length === +x.length) {
                    for (var H = 0, te = x.length; H < te; H++)
                        if (F.call(B, x[H], H, x) === t)
                            return
                } else
                    for (var re = e.keys(x), H = 0, te = re.length; H < te; H++)
                        if (F.call(B, x[re[H]], re[H], x) === t)
                            return;
                return x
            }
            ;
            e.map = e.collect = function(x, F, B) {
                var H = [];
                return x == null ? H : g && x.map === g ? x.map(F, B) : (M(x, function(te, re, k) {
                    H.push(F.call(B, te, re, k))
                }),
                H)
            }
            ,
            e.find = e.detect = function(x, F, B) {
                var H;
                return X(x, function(te, re, k) {
                    if (F.call(B, te, re, k))
                        return H = te,
                        !0
                }),
                H
            }
            ,
            e.filter = e.select = function(x, F, B) {
                var H = [];
                return x == null ? H : T && x.filter === T ? x.filter(F, B) : (M(x, function(te, re, k) {
                    F.call(B, te, re, k) && H.push(te)
                }),
                H)
            }
            ;
            var X = e.some = e.any = function(x, F, B) {
                F || (F = e.identity);
                var H = !1;
                return x == null ? H : D && x.some === D ? x.some(F, B) : (M(x, function(te, re, k) {
                    if (H || (H = F.call(B, te, re, k)))
                        return t
                }),
                !!H)
            }
            ;
            e.contains = e.include = function(x, F) {
                return x == null ? !1 : S && x.indexOf === S ? x.indexOf(F) != -1 : X(x, function(B) {
                    return B === F
                })
            }
            ,
            e.delay = function(x, F) {
                var B = a.call(arguments, 2);
                return setTimeout(function() {
                    return x.apply(null, B)
                }, F)
            }
            ,
            e.defer = function(x) {
                return e.delay.apply(e, [x, 1].concat(a.call(arguments, 1)))
            }
            ,
            e.throttle = function(x) {
                var F, B, H;
                return function() {
                    F || (F = !0,
                    B = arguments,
                    H = this,
                    tb.frame(function() {
                        F = !1,
                        x.apply(H, B)
                    }))
                }
            }
            ,
            e.debounce = function(x, F, B) {
                var H, te, re, k, Y, p = function() {
                    var y = e.now() - k;
                    y < F ? H = setTimeout(p, F - y) : (H = null,
                    B || (Y = x.apply(re, te),
                    re = te = null))
                };
                return function() {
                    re = this,
                    te = arguments,
                    k = e.now();
                    var y = B && !H;
                    return H || (H = setTimeout(p, F)),
                    y && (Y = x.apply(re, te),
                    re = te = null),
                    Y
                }
            }
            ,
            e.defaults = function(x) {
                if (!e.isObject(x))
                    return x;
                for (var F = 1, B = arguments.length; F < B; F++) {
                    var H = arguments[F];
                    for (var te in H)
                        x[te] === void 0 && (x[te] = H[te])
                }
                return x
            }
            ,
            e.keys = function(x) {
                if (!e.isObject(x))
                    return [];
                if (P)
                    return P(x);
                var F = [];
                for (var B in x)
                    e.has(x, B) && F.push(B);
                return F
            }
            ,
            e.has = function(x, F) {
                return d.call(x, F)
            }
            ,
            e.isObject = function(x) {
                return x === Object(x)
            }
            ,
            e.now = Date.now || function() {
                return new Date().getTime()
            }
            ,
            e.templateSettings = {
                evaluate: /<%([\s\S]+?)%>/g,
                interpolate: /<%=([\s\S]+?)%>/g,
                escape: /<%-([\s\S]+?)%>/g
            };
            var K = /(.)^/
              , $ = {
                "'": "'",
                "\\": "\\",
                "\r": "r",
                "\n": "n",
                "\u2028": "u2028",
                "\u2029": "u2029"
            }
              , J = /\\|'|\r|\n|\u2028|\u2029/g
              , ee = function(x) {
                return "\\" + $[x]
            }
              , U = /^\s*(\w|\$)+\s*$/;
            return e.template = function(x, F, B) {
                !F && B && (F = B),
                F = e.defaults({}, F, e.templateSettings);
                var H = RegExp([(F.escape || K).source, (F.interpolate || K).source, (F.evaluate || K).source].join("|") + "|$", "g")
                  , te = 0
                  , re = "__p+='";
                x.replace(H, function(y, _, l, G, V) {
                    return re += x.slice(te, V).replace(J, ee),
                    te = V + y.length,
                    _ ? re += `'+
((__t=(` + _ + `))==null?'':_.escape(__t))+
'` : l ? re += `'+
((__t=(` + l + `))==null?'':__t)+
'` : G && (re += `';
` + G + `
__p+='`),
                    y
                }),
                re += `';
`;
                var k = F.variable;
                if (k) {
                    if (!U.test(k))
                        throw new Error("variable is not a bare identifier: " + k)
                } else
                    re = `with(obj||{}){
` + re + `}
`,
                    k = "obj";
                re = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + re + `return __p;
`;
                var Y;
                try {
                    Y = new Function(F.variable || "obj","_",re)
                } catch (y) {
                    throw y.source = re,
                    y
                }
                var p = function(y) {
                    return Y.call(this, y, e)
                };
                return p.source = "function(" + k + `){
` + re + "}",
                p
            }
            ,
            e
        }()
    }
    );
    var Ge = c( (WV, Vs) => {
        "use strict";
        var ve = {}
          , Wt = {}
          , Ht = []
          , qi = window.Webflow || []
          , _t = window.jQuery
          , Ke = _t(window)
          , rb = _t(document)
          , it = _t.isFunction
          , ze = ve._ = Ps()
          , qs = ve.tram = Pi() && _t.tram
          , cn = !1
          , Di = !1;
        qs.config.hideBackface = !1;
        qs.config.keepInherited = !0;
        ve.define = function(e, t, r) {
            Wt[e] && Fs(Wt[e]);
            var n = Wt[e] = t(_t, ze, r) || {};
            return Ds(n),
            n
        }
        ;
        ve.require = function(e) {
            return Wt[e]
        }
        ;
        function Ds(e) {
            ve.env() && (it(e.design) && Ke.on("__wf_design", e.design),
            it(e.preview) && Ke.on("__wf_preview", e.preview)),
            it(e.destroy) && Ke.on("__wf_destroy", e.destroy),
            e.ready && it(e.ready) && nb(e)
        }
        function nb(e) {
            if (cn) {
                e.ready();
                return
            }
            ze.contains(Ht, e.ready) || Ht.push(e.ready)
        }
        function Fs(e) {
            it(e.design) && Ke.off("__wf_design", e.design),
            it(e.preview) && Ke.off("__wf_preview", e.preview),
            it(e.destroy) && Ke.off("__wf_destroy", e.destroy),
            e.ready && it(e.ready) && ib(e)
        }
        function ib(e) {
            Ht = ze.filter(Ht, function(t) {
                return t !== e.ready
            })
        }
        ve.push = function(e) {
            if (cn) {
                it(e) && e();
                return
            }
            qi.push(e)
        }
        ;
        ve.env = function(e) {
            var t = window.__wf_design
              , r = typeof t < "u";
            if (!e)
                return r;
            if (e === "design")
                return r && t;
            if (e === "preview")
                return r && !t;
            if (e === "slug")
                return r && window.__wf_slug;
            if (e === "editor")
                return window.WebflowEditor;
            if (e === "test")
                return window.__wf_test;
            if (e === "frame")
                return window !== window.top
        }
        ;
        var un = navigator.userAgent.toLowerCase()
          , Gs = ve.env.touch = "ontouchstart"in window || window.DocumentTouch && document instanceof window.DocumentTouch
          , ob = ve.env.chrome = /chrome/.test(un) && /Google/.test(navigator.vendor) && parseInt(un.match(/chrome\/(\d+)\./)[1], 10)
          , ab = ve.env.ios = /(ipod|iphone|ipad)/.test(un);
        ve.env.safari = /safari/.test(un) && !ob && !ab;
        var Mi;
        Gs && rb.on("touchstart mousedown", function(e) {
            Mi = e.target
        });
        ve.validClick = Gs ? function(e) {
            return e === Mi || _t.contains(e, Mi)
        }
        : function() {
            return !0
        }
        ;
        var Us = "resize.webflow orientationchange.webflow load.webflow"
          , sb = "scroll.webflow " + Us;
        ve.resize = Fi(Ke, Us);
        ve.scroll = Fi(Ke, sb);
        ve.redraw = Fi();
        function Fi(e, t) {
            var r = []
              , n = {};
            return n.up = ze.throttle(function(o) {
                ze.each(r, function(i) {
                    i(o)
                })
            }),
            e && t && e.on(t, n.up),
            n.on = function(o) {
                typeof o == "function" && (ze.contains(r, o) || r.push(o))
            }
            ,
            n.off = function(o) {
                if (!arguments.length) {
                    r = [];
                    return
                }
                r = ze.filter(r, function(i) {
                    return i !== o
                })
            }
            ,
            n
        }
        ve.location = function(e) {
            window.location = e
        }
        ;
        ve.env() && (ve.location = function() {}
        );
        ve.ready = function() {
            cn = !0,
            Di ? ub() : ze.each(Ht, Ms),
            ze.each(qi, Ms),
            ve.resize.up()
        }
        ;
        function Ms(e) {
            it(e) && e()
        }
        function ub() {
            Di = !1,
            ze.each(Wt, Ds)
        }
        var Ct;
        ve.load = function(e) {
            Ct.then(e)
        }
        ;
        function ks() {
            Ct && (Ct.reject(),
            Ke.off("load", Ct.resolve)),
            Ct = new _t.Deferred,
            Ke.on("load", Ct.resolve)
        }
        ve.destroy = function(e) {
            e = e || {},
            Di = !0,
            Ke.triggerHandler("__wf_destroy"),
            e.domready != null && (cn = e.domready),
            ze.each(Wt, Fs),
            ve.resize.off(),
            ve.scroll.off(),
            ve.redraw.off(),
            Ht = [],
            qi = [],
            Ct.state() === "pending" && ks()
        }
        ;
        _t(ve.ready);
        ks();
        Vs.exports = window.Webflow = ve
    }
    );
    var Xs = c( (HV, Hs) => {
        "use strict";
        var Ws = Ge();
        Ws.define("brand", Hs.exports = function(e) {
            var t = {}, r = document, n = e("html"), o = e("body"), i = ".w-webflow-badge", a = window.location, s = /PhantomJS/i.test(navigator.userAgent), u = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange", d;
            t.ready = function() {
                var E = n.attr("data-wf-status")
                  , T = n.attr("data-wf-domain") || "";
                /\.webflow\.io$/i.test(T) && a.hostname !== T && (E = !0),
                E && !s && (d = d || g(),
                m(),
                setTimeout(m, 500),
                e(r).off(u, h).on(u, h))
            }
            ;
            function h() {
                var E = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
                e(d).attr("style", E ? "display: none !important;" : "")
            }
            function g() {
                var E = e('<a class="w-webflow-badge"></a>').attr("href", "https://webflow.com?utm_campaign=brandjs")
                  , T = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-icon-d2.89e12c322e.svg").attr("alt", "").css({
                    marginRight: "4px",
                    width: "26px"
                })
                  , I = e("<img>").attr("src", "https://d3e54v103j8qbb.cloudfront.net/img/webflow-badge-text-d2.c82cec3b78.svg").attr("alt", "Made in Webflow");
                return E.append(T, I),
                E[0]
            }
            function m() {
                var E = o.children(i)
                  , T = E.length && E.get(0) === d
                  , I = Ws.env("editor");
                if (T) {
                    I && E.remove();
                    return
                }
                E.length && E.remove(),
                I || o.append(d)
            }
            return t
        }
        )
    }
    );
    var js = c( (XV, Bs) => {
        "use strict";
        var Gi = Ge();
        Gi.define("edit", Bs.exports = function(e, t, r) {
            if (r = r || {},
            (Gi.env("test") || Gi.env("frame")) && !r.fixture && !cb())
                return {
                    exit: 1
                };
            var n = {}, o = e(window), i = e(document.documentElement), a = document.location, s = "hashchange", u, d = r.load || m, h = !1;
            try {
                h = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
            } catch {}
            h ? d() : a.search ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) || /\?edit$/.test(a.href)) && d() : o.on(s, g).triggerHandler(s);
            function g() {
                u || /\?edit/.test(a.hash) && d()
            }
            function m() {
                u = !0,
                window.WebflowEditor = !0,
                o.off(s, g),
                L(function(P) {
                    e.ajax({
                        url: S("https://editor-api.webflow.com/api/editor/view"),
                        data: {
                            siteId: i.attr("data-wf-site")
                        },
                        xhrFields: {
                            withCredentials: !0
                        },
                        dataType: "json",
                        crossDomain: !0,
                        success: E(P)
                    })
                })
            }
            function E(P) {
                return function(q) {
                    if (!q) {
                        console.error("Could not load editor data");
                        return
                    }
                    q.thirdPartyCookiesSupported = P,
                    T(D(q.bugReporterScriptPath), function() {
                        T(D(q.scriptPath), function() {
                            window.WebflowEditor(q)
                        })
                    })
                }
            }
            function T(P, q) {
                e.ajax({
                    type: "GET",
                    url: P,
                    dataType: "script",
                    cache: !0
                }).then(q, I)
            }
            function I(P, q, M) {
                throw console.error("Could not load editor script: " + q),
                M
            }
            function D(P) {
                return P.indexOf("//") >= 0 ? P : S("https://editor-api.webflow.com" + P)
            }
            function S(P) {
                return P.replace(/([^:])\/\//g, "$1/")
            }
            function L(P) {
                var q = window.document.createElement("iframe");
                q.src = "https://webflow.com/site/third-party-cookie-check.html",
                q.style.display = "none",
                q.sandbox = "allow-scripts allow-same-origin";
                var M = function(X) {
                    X.data === "WF_third_party_cookies_unsupported" ? (R(q, M),
                    P(!1)) : X.data === "WF_third_party_cookies_supported" && (R(q, M),
                    P(!0))
                };
                q.onerror = function() {
                    R(q, M),
                    P(!1)
                }
                ,
                window.addEventListener("message", M, !1),
                window.document.body.appendChild(q)
            }
            function R(P, q) {
                window.removeEventListener("message", q, !1),
                P.remove()
            }
            return n
        }
        );
        function cb() {
            try {
                return window.top.__Cypress__
            } catch {
                return !1
            }
        }
    }
    );
    var Ks = c( (BV, zs) => {
        "use strict";
        var lb = Ge();
        lb.define("focus-visible", zs.exports = function() {
            function e(r) {
                var n = !0
                  , o = !1
                  , i = null
                  , a = {
                    text: !0,
                    search: !0,
                    url: !0,
                    tel: !0,
                    email: !0,
                    password: !0,
                    number: !0,
                    date: !0,
                    month: !0,
                    week: !0,
                    time: !0,
                    datetime: !0,
                    "datetime-local": !0
                };
                function s(R) {
                    return !!(R && R !== document && R.nodeName !== "HTML" && R.nodeName !== "BODY" && "classList"in R && "contains"in R.classList)
                }
                function u(R) {
                    var P = R.type
                      , q = R.tagName;
                    return !!(q === "INPUT" && a[P] && !R.readOnly || q === "TEXTAREA" && !R.readOnly || R.isContentEditable)
                }
                function d(R) {
                    R.getAttribute("data-wf-focus-visible") || R.setAttribute("data-wf-focus-visible", "true")
                }
                function h(R) {
                    R.getAttribute("data-wf-focus-visible") && R.removeAttribute("data-wf-focus-visible")
                }
                function g(R) {
                    R.metaKey || R.altKey || R.ctrlKey || (s(r.activeElement) && d(r.activeElement),
                    n = !0)
                }
                function m() {
                    n = !1
                }
                function E(R) {
                    s(R.target) && (n || u(R.target)) && d(R.target)
                }
                function T(R) {
                    s(R.target) && R.target.hasAttribute("data-wf-focus-visible") && (o = !0,
                    window.clearTimeout(i),
                    i = window.setTimeout(function() {
                        o = !1
                    }, 100),
                    h(R.target))
                }
                function I() {
                    document.visibilityState === "hidden" && (o && (n = !0),
                    D())
                }
                function D() {
                    document.addEventListener("mousemove", L),
                    document.addEventListener("mousedown", L),
                    document.addEventListener("mouseup", L),
                    document.addEventListener("pointermove", L),
                    document.addEventListener("pointerdown", L),
                    document.addEventListener("pointerup", L),
                    document.addEventListener("touchmove", L),
                    document.addEventListener("touchstart", L),
                    document.addEventListener("touchend", L)
                }
                function S() {
                    document.removeEventListener("mousemove", L),
                    document.removeEventListener("mousedown", L),
                    document.removeEventListener("mouseup", L),
                    document.removeEventListener("pointermove", L),
                    document.removeEventListener("pointerdown", L),
                    document.removeEventListener("pointerup", L),
                    document.removeEventListener("touchmove", L),
                    document.removeEventListener("touchstart", L),
                    document.removeEventListener("touchend", L)
                }
                function L(R) {
                    R.target.nodeName && R.target.nodeName.toLowerCase() === "html" || (n = !1,
                    S())
                }
                document.addEventListener("keydown", g, !0),
                document.addEventListener("mousedown", m, !0),
                document.addEventListener("pointerdown", m, !0),
                document.addEventListener("touchstart", m, !0),
                document.addEventListener("visibilitychange", I, !0),
                D(),
                r.addEventListener("focus", E, !0),
                r.addEventListener("blur", T, !0)
            }
            function t() {
                if (typeof document < "u")
                    try {
                        document.querySelector(":focus-visible")
                    } catch {
                        e(document)
                    }
            }
            return {
                ready: t
            }
        }
        )
    }
    );
    var Qs = c( (jV, $s) => {
        "use strict";
        var Ys = Ge();
        Ys.define("focus", $s.exports = function() {
            var e = []
              , t = !1;
            function r(a) {
                t && (a.preventDefault(),
                a.stopPropagation(),
                a.stopImmediatePropagation(),
                e.unshift(a))
            }
            function n(a) {
                var s = a.target
                  , u = s.tagName;
                return /^a$/i.test(u) && s.href != null || /^(button|textarea)$/i.test(u) && s.disabled !== !0 || /^input$/i.test(u) && /^(button|reset|submit|radio|checkbox)$/i.test(s.type) && !s.disabled || !/^(button|input|textarea|select|a)$/i.test(u) && !Number.isNaN(Number.parseFloat(s.tabIndex)) || /^audio$/i.test(u) || /^video$/i.test(u) && s.controls === !0
            }
            function o(a) {
                n(a) && (t = !0,
                setTimeout( () => {
                    for (t = !1,
                    a.target.focus(); e.length > 0; ) {
                        var s = e.pop();
                        s.target.dispatchEvent(new MouseEvent(s.type,s))
                    }
                }
                , 0))
            }
            function i() {
                typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && Ys.env.safari && (document.addEventListener("mousedown", o, !0),
                document.addEventListener("mouseup", r, !0),
                document.addEventListener("click", r, !0))
            }
            return {
                ready: i
            }
        }
        )
    }
    );
    var eu = c( (zV, Js) => {
        "use strict";
        var Ui = window.jQuery
          , ot = {}
          , ln = []
          , Zs = ".w-ix"
          , fn = {
            reset: function(e, t) {
                t.__wf_intro = null
            },
            intro: function(e, t) {
                t.__wf_intro || (t.__wf_intro = !0,
                Ui(t).triggerHandler(ot.types.INTRO))
            },
            outro: function(e, t) {
                t.__wf_intro && (t.__wf_intro = null,
                Ui(t).triggerHandler(ot.types.OUTRO))
            }
        };
        ot.triggers = {};
        ot.types = {
            INTRO: "w-ix-intro" + Zs,
            OUTRO: "w-ix-outro" + Zs
        };
        ot.init = function() {
            for (var e = ln.length, t = 0; t < e; t++) {
                var r = ln[t];
                r[0](0, r[1])
            }
            ln = [],
            Ui.extend(ot.triggers, fn)
        }
        ;
        ot.async = function() {
            for (var e in fn) {
                var t = fn[e];
                fn.hasOwnProperty(e) && (ot.triggers[e] = function(r, n) {
                    ln.push([t, n])
                }
                )
            }
        }
        ;
        ot.async();
        Js.exports = ot
    }
    );
    var br = c( (KV, nu) => {
        "use strict";
        var ki = eu();
        function tu(e, t) {
            var r = document.createEvent("CustomEvent");
            r.initCustomEvent(t, !0, !0, null),
            e.dispatchEvent(r)
        }
        var fb = window.jQuery
          , dn = {}
          , ru = ".w-ix"
          , db = {
            reset: function(e, t) {
                ki.triggers.reset(e, t)
            },
            intro: function(e, t) {
                ki.triggers.intro(e, t),
                tu(t, "COMPONENT_ACTIVE")
            },
            outro: function(e, t) {
                ki.triggers.outro(e, t),
                tu(t, "COMPONENT_INACTIVE")
            }
        };
        dn.triggers = {};
        dn.types = {
            INTRO: "w-ix-intro" + ru,
            OUTRO: "w-ix-outro" + ru
        };
        fb.extend(dn.triggers, db);
        nu.exports = dn
    }
    );
    var iu = c( (YV, pt) => {
        function Vi(e) {
            return pt.exports = Vi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
                return typeof t
            }
            : function(t) {
                return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            }
            ,
            pt.exports.__esModule = !0,
            pt.exports.default = pt.exports,
            Vi(e)
        }
        pt.exports = Vi,
        pt.exports.__esModule = !0,
        pt.exports.default = pt.exports
    }
    );
    var pn = c( ($V, Tr) => {
        var pb = iu().default;
        function ou(e) {
            if (typeof WeakMap != "function")
                return null;
            var t = new WeakMap
              , r = new WeakMap;
            return (ou = function(o) {
                return o ? r : t
            }
            )(e)
        }
        function vb(e, t) {
            if (!t && e && e.__esModule)
                return e;
            if (e === null || pb(e) !== "object" && typeof e != "function")
                return {
                    default: e
                };
            var r = ou(t);
            if (r && r.has(e))
                return r.get(e);
            var n = {}
              , o = Object.defineProperty && Object.getOwnPropertyDescriptor;
            for (var i in e)
                if (i !== "default" && Object.prototype.hasOwnProperty.call(e, i)) {
                    var a = o ? Object.getOwnPropertyDescriptor(e, i) : null;
                    a && (a.get || a.set) ? Object.defineProperty(n, i, a) : n[i] = e[i]
                }
            return n.default = e,
            r && r.set(e, n),
            n
        }
        Tr.exports = vb,
        Tr.exports.__esModule = !0,
        Tr.exports.default = Tr.exports
    }
    );
    var au = c( (QV, Ir) => {
        function gb(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        Ir.exports = gb,
        Ir.exports.__esModule = !0,
        Ir.exports.default = Ir.exports
    }
    );
    var Ee = c( (ZV, su) => {
        var vn = function(e) {
            return e && e.Math == Math && e
        };
        su.exports = vn(typeof globalThis == "object" && globalThis) || vn(typeof window == "object" && window) || vn(typeof self == "object" && self) || vn(typeof global == "object" && global) || function() {
            return this
        }() || Function("return this")()
    }
    );
    var Xt = c( (JV, uu) => {
        uu.exports = function(e) {
            try {
                return !!e()
            } catch {
                return !0
            }
        }
    }
    );
    var Lt = c( (eW, cu) => {
        var hb = Xt();
        cu.exports = !hb(function() {
            return Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1] != 7
        })
    }
    );
    var gn = c( (tW, lu) => {
        var Or = Function.prototype.call;
        lu.exports = Or.bind ? Or.bind(Or) : function() {
            return Or.apply(Or, arguments)
        }
    }
    );
    var vu = c(pu => {
        "use strict";
        var fu = {}.propertyIsEnumerable
          , du = Object.getOwnPropertyDescriptor
          , mb = du && !fu.call({
            1: 2
        }, 1);
        pu.f = mb ? function(t) {
            var r = du(this, t);
            return !!r && r.enumerable
        }
        : fu
    }
    );
    var Wi = c( (nW, gu) => {
        gu.exports = function(e, t) {
            return {
                enumerable: !(e & 1),
                configurable: !(e & 2),
                writable: !(e & 4),
                value: t
            }
        }
    }
    );
    var Ye = c( (iW, mu) => {
        var hu = Function.prototype
          , Hi = hu.bind
          , Xi = hu.call
          , Eb = Hi && Hi.bind(Xi);
        mu.exports = Hi ? function(e) {
            return e && Eb(Xi, e)
        }
        : function(e) {
            return e && function() {
                return Xi.apply(e, arguments)
            }
        }
    }
    );
    var _u = c( (oW, yu) => {
        var Eu = Ye()
          , yb = Eu({}.toString)
          , _b = Eu("".slice);
        yu.exports = function(e) {
            return _b(yb(e), 8, -1)
        }
    }
    );
    var Tu = c( (aW, bu) => {
        var bb = Ee()
          , Tb = Ye()
          , Ib = Xt()
          , Ob = _u()
          , Bi = bb.Object
          , wb = Tb("".split);
        bu.exports = Ib(function() {
            return !Bi("z").propertyIsEnumerable(0)
        }) ? function(e) {
            return Ob(e) == "String" ? wb(e, "") : Bi(e)
        }
        : Bi
    }
    );
    var ji = c( (sW, Iu) => {
        var xb = Ee()
          , Ab = xb.TypeError;
        Iu.exports = function(e) {
            if (e == null)
                throw Ab("Can't call method on " + e);
            return e
        }
    }
    );
    var wr = c( (uW, Ou) => {
        var Sb = Tu()
          , Rb = ji();
        Ou.exports = function(e) {
            return Sb(Rb(e))
        }
    }
    );
    var at = c( (cW, wu) => {
        wu.exports = function(e) {
            return typeof e == "function"
        }
    }
    );
    var Bt = c( (lW, xu) => {
        var Cb = at();
        xu.exports = function(e) {
            return typeof e == "object" ? e !== null : Cb(e)
        }
    }
    );
    var xr = c( (fW, Au) => {
        var zi = Ee()
          , Lb = at()
          , Nb = function(e) {
            return Lb(e) ? e : void 0
        };
        Au.exports = function(e, t) {
            return arguments.length < 2 ? Nb(zi[e]) : zi[e] && zi[e][t]
        }
    }
    );
    var Ru = c( (dW, Su) => {
        var Pb = Ye();
        Su.exports = Pb({}.isPrototypeOf)
    }
    );
    var Lu = c( (pW, Cu) => {
        var Mb = xr();
        Cu.exports = Mb("navigator", "userAgent") || ""
    }
    );
    var Gu = c( (vW, Fu) => {
        var Du = Ee(), Ki = Lu(), Nu = Du.process, Pu = Du.Deno, Mu = Nu && Nu.versions || Pu && Pu.version, qu = Mu && Mu.v8, $e, hn;
        qu && ($e = qu.split("."),
        hn = $e[0] > 0 && $e[0] < 4 ? 1 : +($e[0] + $e[1]));
        !hn && Ki && ($e = Ki.match(/Edge\/(\d+)/),
        (!$e || $e[1] >= 74) && ($e = Ki.match(/Chrome\/(\d+)/),
        $e && (hn = +$e[1])));
        Fu.exports = hn
    }
    );
    var Yi = c( (gW, ku) => {
        var Uu = Gu()
          , qb = Xt();
        ku.exports = !!Object.getOwnPropertySymbols && !qb(function() {
            var e = Symbol();
            return !String(e) || !(Object(e)instanceof Symbol) || !Symbol.sham && Uu && Uu < 41
        })
    }
    );
    var $i = c( (hW, Vu) => {
        var Db = Yi();
        Vu.exports = Db && !Symbol.sham && typeof Symbol.iterator == "symbol"
    }
    );
    var Qi = c( (mW, Wu) => {
        var Fb = Ee()
          , Gb = xr()
          , Ub = at()
          , kb = Ru()
          , Vb = $i()
          , Wb = Fb.Object;
        Wu.exports = Vb ? function(e) {
            return typeof e == "symbol"
        }
        : function(e) {
            var t = Gb("Symbol");
            return Ub(t) && kb(t.prototype, Wb(e))
        }
    }
    );
    var Xu = c( (EW, Hu) => {
        var Hb = Ee()
          , Xb = Hb.String;
        Hu.exports = function(e) {
            try {
                return Xb(e)
            } catch {
                return "Object"
            }
        }
    }
    );
    var ju = c( (yW, Bu) => {
        var Bb = Ee()
          , jb = at()
          , zb = Xu()
          , Kb = Bb.TypeError;
        Bu.exports = function(e) {
            if (jb(e))
                return e;
            throw Kb(zb(e) + " is not a function")
        }
    }
    );
    var Ku = c( (_W, zu) => {
        var Yb = ju();
        zu.exports = function(e, t) {
            var r = e[t];
            return r == null ? void 0 : Yb(r)
        }
    }
    );
    var $u = c( (bW, Yu) => {
        var $b = Ee()
          , Zi = gn()
          , Ji = at()
          , eo = Bt()
          , Qb = $b.TypeError;
        Yu.exports = function(e, t) {
            var r, n;
            if (t === "string" && Ji(r = e.toString) && !eo(n = Zi(r, e)) || Ji(r = e.valueOf) && !eo(n = Zi(r, e)) || t !== "string" && Ji(r = e.toString) && !eo(n = Zi(r, e)))
                return n;
            throw Qb("Can't convert object to primitive value")
        }
    }
    );
    var Zu = c( (TW, Qu) => {
        Qu.exports = !1
    }
    );
    var mn = c( (IW, ec) => {
        var Ju = Ee()
          , Zb = Object.defineProperty;
        ec.exports = function(e, t) {
            try {
                Zb(Ju, e, {
                    value: t,
                    configurable: !0,
                    writable: !0
                })
            } catch {
                Ju[e] = t
            }
            return t
        }
    }
    );
    var En = c( (OW, rc) => {
        var Jb = Ee()
          , eT = mn()
          , tc = "__core-js_shared__"
          , tT = Jb[tc] || eT(tc, {});
        rc.exports = tT
    }
    );
    var to = c( (wW, ic) => {
        var rT = Zu()
          , nc = En();
        (ic.exports = function(e, t) {
            return nc[e] || (nc[e] = t !== void 0 ? t : {})
        }
        )("versions", []).push({
            version: "3.19.0",
            mode: rT ? "pure" : "global",
            copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
        })
    }
    );
    var ac = c( (xW, oc) => {
        var nT = Ee()
          , iT = ji()
          , oT = nT.Object;
        oc.exports = function(e) {
            return oT(iT(e))
        }
    }
    );
    var bt = c( (AW, sc) => {
        var aT = Ye()
          , sT = ac()
          , uT = aT({}.hasOwnProperty);
        sc.exports = Object.hasOwn || function(t, r) {
            return uT(sT(t), r)
        }
    }
    );
    var ro = c( (SW, uc) => {
        var cT = Ye()
          , lT = 0
          , fT = Math.random()
          , dT = cT(1 .toString);
        uc.exports = function(e) {
            return "Symbol(" + (e === void 0 ? "" : e) + ")_" + dT(++lT + fT, 36)
        }
    }
    );
    var no = c( (RW, pc) => {
        var pT = Ee()
          , vT = to()
          , cc = bt()
          , gT = ro()
          , lc = Yi()
          , dc = $i()
          , jt = vT("wks")
          , Nt = pT.Symbol
          , fc = Nt && Nt.for
          , hT = dc ? Nt : Nt && Nt.withoutSetter || gT;
        pc.exports = function(e) {
            if (!cc(jt, e) || !(lc || typeof jt[e] == "string")) {
                var t = "Symbol." + e;
                lc && cc(Nt, e) ? jt[e] = Nt[e] : dc && fc ? jt[e] = fc(t) : jt[e] = hT(t)
            }
            return jt[e]
        }
    }
    );
    var mc = c( (CW, hc) => {
        var mT = Ee()
          , ET = gn()
          , vc = Bt()
          , gc = Qi()
          , yT = Ku()
          , _T = $u()
          , bT = no()
          , TT = mT.TypeError
          , IT = bT("toPrimitive");
        hc.exports = function(e, t) {
            if (!vc(e) || gc(e))
                return e;
            var r = yT(e, IT), n;
            if (r) {
                if (t === void 0 && (t = "default"),
                n = ET(r, e, t),
                !vc(n) || gc(n))
                    return n;
                throw TT("Can't convert object to primitive value")
            }
            return t === void 0 && (t = "number"),
            _T(e, t)
        }
    }
    );
    var io = c( (LW, Ec) => {
        var OT = mc()
          , wT = Qi();
        Ec.exports = function(e) {
            var t = OT(e, "string");
            return wT(t) ? t : t + ""
        }
    }
    );
    var ao = c( (NW, _c) => {
        var xT = Ee()
          , yc = Bt()
          , oo = xT.document
          , AT = yc(oo) && yc(oo.createElement);
        _c.exports = function(e) {
            return AT ? oo.createElement(e) : {}
        }
    }
    );
    var so = c( (PW, bc) => {
        var ST = Lt()
          , RT = Xt()
          , CT = ao();
        bc.exports = !ST && !RT(function() {
            return Object.defineProperty(CT("div"), "a", {
                get: function() {
                    return 7
                }
            }).a != 7
        })
    }
    );
    var uo = c(Ic => {
        var LT = Lt()
          , NT = gn()
          , PT = vu()
          , MT = Wi()
          , qT = wr()
          , DT = io()
          , FT = bt()
          , GT = so()
          , Tc = Object.getOwnPropertyDescriptor;
        Ic.f = LT ? Tc : function(t, r) {
            if (t = qT(t),
            r = DT(r),
            GT)
                try {
                    return Tc(t, r)
                } catch {}
            if (FT(t, r))
                return MT(!NT(PT.f, t, r), t[r])
        }
    }
    );
    var Ar = c( (qW, wc) => {
        var Oc = Ee()
          , UT = Bt()
          , kT = Oc.String
          , VT = Oc.TypeError;
        wc.exports = function(e) {
            if (UT(e))
                return e;
            throw VT(kT(e) + " is not an object")
        }
    }
    );
    var Sr = c(Sc => {
        var WT = Ee()
          , HT = Lt()
          , XT = so()
          , xc = Ar()
          , BT = io()
          , jT = WT.TypeError
          , Ac = Object.defineProperty;
        Sc.f = HT ? Ac : function(t, r, n) {
            if (xc(t),
            r = BT(r),
            xc(n),
            XT)
                try {
                    return Ac(t, r, n)
                } catch {}
            if ("get"in n || "set"in n)
                throw jT("Accessors not supported");
            return "value"in n && (t[r] = n.value),
            t
        }
    }
    );
    var yn = c( (FW, Rc) => {
        var zT = Lt()
          , KT = Sr()
          , YT = Wi();
        Rc.exports = zT ? function(e, t, r) {
            return KT.f(e, t, YT(1, r))
        }
        : function(e, t, r) {
            return e[t] = r,
            e
        }
    }
    );
    var lo = c( (GW, Cc) => {
        var $T = Ye()
          , QT = at()
          , co = En()
          , ZT = $T(Function.toString);
        QT(co.inspectSource) || (co.inspectSource = function(e) {
            return ZT(e)
        }
        );
        Cc.exports = co.inspectSource
    }
    );
    var Pc = c( (UW, Nc) => {
        var JT = Ee()
          , eI = at()
          , tI = lo()
          , Lc = JT.WeakMap;
        Nc.exports = eI(Lc) && /native code/.test(tI(Lc))
    }
    );
    var fo = c( (kW, qc) => {
        var rI = to()
          , nI = ro()
          , Mc = rI("keys");
        qc.exports = function(e) {
            return Mc[e] || (Mc[e] = nI(e))
        }
    }
    );
    var _n = c( (VW, Dc) => {
        Dc.exports = {}
    }
    );
    var Wc = c( (WW, Vc) => {
        var iI = Pc(), kc = Ee(), po = Ye(), oI = Bt(), aI = yn(), vo = bt(), go = En(), sI = fo(), uI = _n(), Fc = "Object already initialized", mo = kc.TypeError, cI = kc.WeakMap, bn, Rr, Tn, lI = function(e) {
            return Tn(e) ? Rr(e) : bn(e, {})
        }, fI = function(e) {
            return function(t) {
                var r;
                if (!oI(t) || (r = Rr(t)).type !== e)
                    throw mo("Incompatible receiver, " + e + " required");
                return r
            }
        };
        iI || go.state ? (Tt = go.state || (go.state = new cI),
        Gc = po(Tt.get),
        ho = po(Tt.has),
        Uc = po(Tt.set),
        bn = function(e, t) {
            if (ho(Tt, e))
                throw new mo(Fc);
            return t.facade = e,
            Uc(Tt, e, t),
            t
        }
        ,
        Rr = function(e) {
            return Gc(Tt, e) || {}
        }
        ,
        Tn = function(e) {
            return ho(Tt, e)
        }
        ) : (Pt = sI("state"),
        uI[Pt] = !0,
        bn = function(e, t) {
            if (vo(e, Pt))
                throw new mo(Fc);
            return t.facade = e,
            aI(e, Pt, t),
            t
        }
        ,
        Rr = function(e) {
            return vo(e, Pt) ? e[Pt] : {}
        }
        ,
        Tn = function(e) {
            return vo(e, Pt)
        }
        );
        var Tt, Gc, ho, Uc, Pt;
        Vc.exports = {
            set: bn,
            get: Rr,
            has: Tn,
            enforce: lI,
            getterFor: fI
        }
    }
    );
    var Bc = c( (HW, Xc) => {
        var Eo = Lt()
          , dI = bt()
          , Hc = Function.prototype
          , pI = Eo && Object.getOwnPropertyDescriptor
          , yo = dI(Hc, "name")
          , vI = yo && function() {}
        .name === "something"
          , gI = yo && (!Eo || Eo && pI(Hc, "name").configurable);
        Xc.exports = {
            EXISTS: yo,
            PROPER: vI,
            CONFIGURABLE: gI
        }
    }
    );
    var $c = c( (XW, Yc) => {
        var hI = Ee()
          , jc = at()
          , mI = bt()
          , zc = yn()
          , EI = mn()
          , yI = lo()
          , Kc = Wc()
          , _I = Bc().CONFIGURABLE
          , bI = Kc.get
          , TI = Kc.enforce
          , II = String(String).split("String");
        (Yc.exports = function(e, t, r, n) {
            var o = n ? !!n.unsafe : !1, i = n ? !!n.enumerable : !1, a = n ? !!n.noTargetGet : !1, s = n && n.name !== void 0 ? n.name : t, u;
            if (jc(r) && (String(s).slice(0, 7) === "Symbol(" && (s = "[" + String(s).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"),
            (!mI(r, "name") || _I && r.name !== s) && zc(r, "name", s),
            u = TI(r),
            u.source || (u.source = II.join(typeof s == "string" ? s : ""))),
            e === hI) {
                i ? e[t] = r : EI(t, r);
                return
            } else
                o ? !a && e[t] && (i = !0) : delete e[t];
            i ? e[t] = r : zc(e, t, r)
        }
        )(Function.prototype, "toString", function() {
            return jc(this) && bI(this).source || yI(this)
        })
    }
    );
    var _o = c( (BW, Qc) => {
        var OI = Math.ceil
          , wI = Math.floor;
        Qc.exports = function(e) {
            var t = +e;
            return t !== t || t === 0 ? 0 : (t > 0 ? wI : OI)(t)
        }
    }
    );
    var Jc = c( (jW, Zc) => {
        var xI = _o()
          , AI = Math.max
          , SI = Math.min;
        Zc.exports = function(e, t) {
            var r = xI(e);
            return r < 0 ? AI(r + t, 0) : SI(r, t)
        }
    }
    );
    var tl = c( (zW, el) => {
        var RI = _o()
          , CI = Math.min;
        el.exports = function(e) {
            return e > 0 ? CI(RI(e), 9007199254740991) : 0
        }
    }
    );
    var nl = c( (KW, rl) => {
        var LI = tl();
        rl.exports = function(e) {
            return LI(e.length)
        }
    }
    );
    var bo = c( (YW, ol) => {
        var NI = wr()
          , PI = Jc()
          , MI = nl()
          , il = function(e) {
            return function(t, r, n) {
                var o = NI(t), i = MI(o), a = PI(n, i), s;
                if (e && r != r) {
                    for (; i > a; )
                        if (s = o[a++],
                        s != s)
                            return !0
                } else
                    for (; i > a; a++)
                        if ((e || a in o) && o[a] === r)
                            return e || a || 0;
                return !e && -1
            }
        };
        ol.exports = {
            includes: il(!0),
            indexOf: il(!1)
        }
    }
    );
    var Io = c( ($W, sl) => {
        var qI = Ye()
          , To = bt()
          , DI = wr()
          , FI = bo().indexOf
          , GI = _n()
          , al = qI([].push);
        sl.exports = function(e, t) {
            var r = DI(e), n = 0, o = [], i;
            for (i in r)
                !To(GI, i) && To(r, i) && al(o, i);
            for (; t.length > n; )
                To(r, i = t[n++]) && (~FI(o, i) || al(o, i));
            return o
        }
    }
    );
    var In = c( (QW, ul) => {
        ul.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
    }
    );
    var ll = c(cl => {
        var UI = Io()
          , kI = In()
          , VI = kI.concat("length", "prototype");
        cl.f = Object.getOwnPropertyNames || function(t) {
            return UI(t, VI)
        }
    }
    );
    var dl = c(fl => {
        fl.f = Object.getOwnPropertySymbols
    }
    );
    var vl = c( (eH, pl) => {
        var WI = xr()
          , HI = Ye()
          , XI = ll()
          , BI = dl()
          , jI = Ar()
          , zI = HI([].concat);
        pl.exports = WI("Reflect", "ownKeys") || function(t) {
            var r = XI.f(jI(t))
              , n = BI.f;
            return n ? zI(r, n(t)) : r
        }
    }
    );
    var hl = c( (tH, gl) => {
        var KI = bt()
          , YI = vl()
          , $I = uo()
          , QI = Sr();
        gl.exports = function(e, t) {
            for (var r = YI(t), n = QI.f, o = $I.f, i = 0; i < r.length; i++) {
                var a = r[i];
                KI(e, a) || n(e, a, o(t, a))
            }
        }
    }
    );
    var El = c( (rH, ml) => {
        var ZI = Xt()
          , JI = at()
          , eO = /#|\.prototype\./
          , Cr = function(e, t) {
            var r = rO[tO(e)];
            return r == iO ? !0 : r == nO ? !1 : JI(t) ? ZI(t) : !!t
        }
          , tO = Cr.normalize = function(e) {
            return String(e).replace(eO, ".").toLowerCase()
        }
          , rO = Cr.data = {}
          , nO = Cr.NATIVE = "N"
          , iO = Cr.POLYFILL = "P";
        ml.exports = Cr
    }
    );
    var _l = c( (nH, yl) => {
        var Oo = Ee()
          , oO = uo().f
          , aO = yn()
          , sO = $c()
          , uO = mn()
          , cO = hl()
          , lO = El();
        yl.exports = function(e, t) {
            var r = e.target, n = e.global, o = e.stat, i, a, s, u, d, h;
            if (n ? a = Oo : o ? a = Oo[r] || uO(r, {}) : a = (Oo[r] || {}).prototype,
            a)
                for (s in t) {
                    if (d = t[s],
                    e.noTargetGet ? (h = oO(a, s),
                    u = h && h.value) : u = a[s],
                    i = lO(n ? s : r + (o ? "." : "#") + s, e.forced),
                    !i && u !== void 0) {
                        if (typeof d == typeof u)
                            continue;
                        cO(d, u)
                    }
                    (e.sham || u && u.sham) && aO(d, "sham", !0),
                    sO(a, s, d, e)
                }
        }
    }
    );
    var Tl = c( (iH, bl) => {
        var fO = Io()
          , dO = In();
        bl.exports = Object.keys || function(t) {
            return fO(t, dO)
        }
    }
    );
    var Ol = c( (oH, Il) => {
        var pO = Lt()
          , vO = Sr()
          , gO = Ar()
          , hO = wr()
          , mO = Tl();
        Il.exports = pO ? Object.defineProperties : function(t, r) {
            gO(t);
            for (var n = hO(r), o = mO(r), i = o.length, a = 0, s; i > a; )
                vO.f(t, s = o[a++], n[s]);
            return t
        }
    }
    );
    var xl = c( (aH, wl) => {
        var EO = xr();
        wl.exports = EO("document", "documentElement")
    }
    );
    var Ml = c( (sH, Pl) => {
        var yO = Ar(), _O = Ol(), Al = In(), bO = _n(), TO = xl(), IO = ao(), OO = fo(), Sl = ">", Rl = "<", xo = "prototype", Ao = "script", Ll = OO("IE_PROTO"), wo = function() {}, Nl = function(e) {
            return Rl + Ao + Sl + e + Rl + "/" + Ao + Sl
        }, Cl = function(e) {
            e.write(Nl("")),
            e.close();
            var t = e.parentWindow.Object;
            return e = null,
            t
        }, wO = function() {
            var e = IO("iframe"), t = "java" + Ao + ":", r;
            return e.style.display = "none",
            TO.appendChild(e),
            e.src = String(t),
            r = e.contentWindow.document,
            r.open(),
            r.write(Nl("document.F=Object")),
            r.close(),
            r.F
        }, On, wn = function() {
            try {
                On = new ActiveXObject("htmlfile")
            } catch {}
            wn = typeof document < "u" ? document.domain && On ? Cl(On) : wO() : Cl(On);
            for (var e = Al.length; e--; )
                delete wn[xo][Al[e]];
            return wn()
        };
        bO[Ll] = !0;
        Pl.exports = Object.create || function(t, r) {
            var n;
            return t !== null ? (wo[xo] = yO(t),
            n = new wo,
            wo[xo] = null,
            n[Ll] = t) : n = wn(),
            r === void 0 ? n : _O(n, r)
        }
    }
    );
    var Dl = c( (uH, ql) => {
        var xO = no()
          , AO = Ml()
          , SO = Sr()
          , So = xO("unscopables")
          , Ro = Array.prototype;
        Ro[So] == null && SO.f(Ro, So, {
            configurable: !0,
            value: AO(null)
        });
        ql.exports = function(e) {
            Ro[So][e] = !0
        }
    }
    );
    var Fl = c( () => {
        "use strict";
        var RO = _l()
          , CO = bo().includes
          , LO = Dl();
        RO({
            target: "Array",
            proto: !0
        }, {
            includes: function(t) {
                return CO(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        });
        LO("includes")
    }
    );
    var Ul = c( (fH, Gl) => {
        var NO = Ee()
          , PO = Ye();
        Gl.exports = function(e, t) {
            return PO(NO[e].prototype[t])
        }
    }
    );
    var Vl = c( (dH, kl) => {
        Fl();
        var MO = Ul();
        kl.exports = MO("Array", "includes")
    }
    );
    var Hl = c( (pH, Wl) => {
        var qO = Vl();
        Wl.exports = qO
    }
    );
    var Bl = c( (vH, Xl) => {
        var DO = Hl();
        Xl.exports = DO
    }
    );
    var Co = c( (gH, jl) => {
        var FO = typeof global == "object" && global && global.Object === Object && global;
        jl.exports = FO
    }
    );
    var Qe = c( (hH, zl) => {
        var GO = Co()
          , UO = typeof self == "object" && self && self.Object === Object && self
          , kO = GO || UO || Function("return this")();
        zl.exports = kO
    }
    );
    var zt = c( (mH, Kl) => {
        var VO = Qe()
          , WO = VO.Symbol;
        Kl.exports = WO
    }
    );
    var Zl = c( (EH, Ql) => {
        var Yl = zt()
          , $l = Object.prototype
          , HO = $l.hasOwnProperty
          , XO = $l.toString
          , Lr = Yl ? Yl.toStringTag : void 0;
        function BO(e) {
            var t = HO.call(e, Lr)
              , r = e[Lr];
            try {
                e[Lr] = void 0;
                var n = !0
            } catch {}
            var o = XO.call(e);
            return n && (t ? e[Lr] = r : delete e[Lr]),
            o
        }
        Ql.exports = BO
    }
    );
    var ef = c( (yH, Jl) => {
        var jO = Object.prototype
          , zO = jO.toString;
        function KO(e) {
            return zO.call(e)
        }
        Jl.exports = KO
    }
    );
    var It = c( (_H, nf) => {
        var tf = zt()
          , YO = Zl()
          , $O = ef()
          , QO = "[object Null]"
          , ZO = "[object Undefined]"
          , rf = tf ? tf.toStringTag : void 0;
        function JO(e) {
            return e == null ? e === void 0 ? ZO : QO : rf && rf in Object(e) ? YO(e) : $O(e)
        }
        nf.exports = JO
    }
    );
    var Lo = c( (bH, of) => {
        function ew(e, t) {
            return function(r) {
                return e(t(r))
            }
        }
        of.exports = ew
    }
    );
    var No = c( (TH, af) => {
        var tw = Lo()
          , rw = tw(Object.getPrototypeOf, Object);
        af.exports = rw
    }
    );
    var vt = c( (IH, sf) => {
        function nw(e) {
            return e != null && typeof e == "object"
        }
        sf.exports = nw
    }
    );
    var Po = c( (OH, cf) => {
        var iw = It()
          , ow = No()
          , aw = vt()
          , sw = "[object Object]"
          , uw = Function.prototype
          , cw = Object.prototype
          , uf = uw.toString
          , lw = cw.hasOwnProperty
          , fw = uf.call(Object);
        function dw(e) {
            if (!aw(e) || iw(e) != sw)
                return !1;
            var t = ow(e);
            if (t === null)
                return !0;
            var r = lw.call(t, "constructor") && t.constructor;
            return typeof r == "function" && r instanceof r && uf.call(r) == fw
        }
        cf.exports = dw
    }
    );
    var lf = c(Mo => {
        "use strict";
        Object.defineProperty(Mo, "__esModule", {
            value: !0
        });
        Mo.default = pw;
        function pw(e) {
            var t, r = e.Symbol;
            return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"),
            r.observable = t) : t = "@@observable",
            t
        }
    }
    );
    var ff = c( (Do, qo) => {
        "use strict";
        Object.defineProperty(Do, "__esModule", {
            value: !0
        });
        var vw = lf()
          , gw = hw(vw);
        function hw(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var Kt;
        typeof self < "u" ? Kt = self : typeof window < "u" ? Kt = window : typeof global < "u" ? Kt = global : typeof qo < "u" ? Kt = qo : Kt = Function("return this")();
        var mw = (0,
        gw.default)(Kt);
        Do.default = mw
    }
    );
    var Fo = c(Nr => {
        "use strict";
        Nr.__esModule = !0;
        Nr.ActionTypes = void 0;
        Nr.default = gf;
        var Ew = Po()
          , yw = vf(Ew)
          , _w = ff()
          , df = vf(_w);
        function vf(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var pf = Nr.ActionTypes = {
            INIT: "@@redux/INIT"
        };
        function gf(e, t, r) {
            var n;
            if (typeof t == "function" && typeof r > "u" && (r = t,
            t = void 0),
            typeof r < "u") {
                if (typeof r != "function")
                    throw new Error("Expected the enhancer to be a function.");
                return r(gf)(e, t)
            }
            if (typeof e != "function")
                throw new Error("Expected the reducer to be a function.");
            var o = e
              , i = t
              , a = []
              , s = a
              , u = !1;
            function d() {
                s === a && (s = a.slice())
            }
            function h() {
                return i
            }
            function g(I) {
                if (typeof I != "function")
                    throw new Error("Expected listener to be a function.");
                var D = !0;
                return d(),
                s.push(I),
                function() {
                    if (D) {
                        D = !1,
                        d();
                        var L = s.indexOf(I);
                        s.splice(L, 1)
                    }
                }
            }
            function m(I) {
                if (!(0,
                yw.default)(I))
                    throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (typeof I.type > "u")
                    throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (u)
                    throw new Error("Reducers may not dispatch actions.");
                try {
                    u = !0,
                    i = o(i, I)
                } finally {
                    u = !1
                }
                for (var D = a = s, S = 0; S < D.length; S++)
                    D[S]();
                return I
            }
            function E(I) {
                if (typeof I != "function")
                    throw new Error("Expected the nextReducer to be a function.");
                o = I,
                m({
                    type: pf.INIT
                })
            }
            function T() {
                var I, D = g;
                return I = {
                    subscribe: function(L) {
                        if (typeof L != "object")
                            throw new TypeError("Expected the observer to be an object.");
                        function R() {
                            L.next && L.next(h())
                        }
                        R();
                        var P = D(R);
                        return {
                            unsubscribe: P
                        }
                    }
                },
                I[df.default] = function() {
                    return this
                }
                ,
                I
            }
            return m({
                type: pf.INIT
            }),
            n = {
                dispatch: m,
                subscribe: g,
                getState: h,
                replaceReducer: E
            },
            n[df.default] = T,
            n
        }
    }
    );
    var Uo = c(Go => {
        "use strict";
        Go.__esModule = !0;
        Go.default = bw;
        function bw(e) {
            typeof console < "u" && typeof console.error == "function" && console.error(e);
            try {
                throw new Error(e)
            } catch {}
        }
    }
    );
    var Ef = c(ko => {
        "use strict";
        ko.__esModule = !0;
        ko.default = xw;
        var hf = Fo()
          , Tw = Po()
          , SH = mf(Tw)
          , Iw = Uo()
          , RH = mf(Iw);
        function mf(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function Ow(e, t) {
            var r = t && t.type
              , n = r && '"' + r.toString() + '"' || "an action";
            return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
        }
        function ww(e) {
            Object.keys(e).forEach(function(t) {
                var r = e[t]
                  , n = r(void 0, {
                    type: hf.ActionTypes.INIT
                });
                if (typeof n > "u")
                    throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
                var o = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
                if (typeof r(void 0, {
                    type: o
                }) > "u")
                    throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + hf.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
            })
        }
        function xw(e) {
            for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
                var o = t[n];
                typeof e[o] == "function" && (r[o] = e[o])
            }
            var i = Object.keys(r);
            if (!1)
                var a;
            var s;
            try {
                ww(r)
            } catch (u) {
                s = u
            }
            return function() {
                var d = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0]
                  , h = arguments[1];
                if (s)
                    throw s;
                if (!1)
                    var g;
                for (var m = !1, E = {}, T = 0; T < i.length; T++) {
                    var I = i[T]
                      , D = r[I]
                      , S = d[I]
                      , L = D(S, h);
                    if (typeof L > "u") {
                        var R = Ow(I, h);
                        throw new Error(R)
                    }
                    E[I] = L,
                    m = m || L !== S
                }
                return m ? E : d
            }
        }
    }
    );
    var _f = c(Vo => {
        "use strict";
        Vo.__esModule = !0;
        Vo.default = Aw;
        function yf(e, t) {
            return function() {
                return t(e.apply(void 0, arguments))
            }
        }
        function Aw(e, t) {
            if (typeof e == "function")
                return yf(e, t);
            if (typeof e != "object" || e === null)
                throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
            for (var r = Object.keys(e), n = {}, o = 0; o < r.length; o++) {
                var i = r[o]
                  , a = e[i];
                typeof a == "function" && (n[i] = yf(a, t))
            }
            return n
        }
    }
    );
    var Ho = c(Wo => {
        "use strict";
        Wo.__esModule = !0;
        Wo.default = Sw;
        function Sw() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            if (t.length === 0)
                return function(i) {
                    return i
                }
                ;
            if (t.length === 1)
                return t[0];
            var n = t[t.length - 1]
              , o = t.slice(0, -1);
            return function() {
                return o.reduceRight(function(i, a) {
                    return a(i)
                }, n.apply(void 0, arguments))
            }
        }
    }
    );
    var bf = c(Xo => {
        "use strict";
        Xo.__esModule = !0;
        var Rw = Object.assign || function(e) {
            for (var t = 1; t < arguments.length; t++) {
                var r = arguments[t];
                for (var n in r)
                    Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
            }
            return e
        }
        ;
        Xo.default = Pw;
        var Cw = Ho()
          , Lw = Nw(Cw);
        function Nw(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        function Pw() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
                t[r] = arguments[r];
            return function(n) {
                return function(o, i, a) {
                    var s = n(o, i, a)
                      , u = s.dispatch
                      , d = []
                      , h = {
                        getState: s.getState,
                        dispatch: function(m) {
                            return u(m)
                        }
                    };
                    return d = t.map(function(g) {
                        return g(h)
                    }),
                    u = Lw.default.apply(void 0, d)(s.dispatch),
                    Rw({}, s, {
                        dispatch: u
                    })
                }
            }
        }
    }
    );
    var Bo = c(He => {
        "use strict";
        He.__esModule = !0;
        He.compose = He.applyMiddleware = He.bindActionCreators = He.combineReducers = He.createStore = void 0;
        var Mw = Fo()
          , qw = Yt(Mw)
          , Dw = Ef()
          , Fw = Yt(Dw)
          , Gw = _f()
          , Uw = Yt(Gw)
          , kw = bf()
          , Vw = Yt(kw)
          , Ww = Ho()
          , Hw = Yt(Ww)
          , Xw = Uo()
          , MH = Yt(Xw);
        function Yt(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        He.createStore = qw.default;
        He.combineReducers = Fw.default;
        He.bindActionCreators = Uw.default;
        He.applyMiddleware = Vw.default;
        He.compose = Hw.default
    }
    );
    var Ze, jo, st, Bw, jw, xn, zw, zo = me( () => {
        "use strict";
        Ze = {
            NAVBAR_OPEN: "NAVBAR_OPEN",
            NAVBAR_CLOSE: "NAVBAR_CLOSE",
            TAB_ACTIVE: "TAB_ACTIVE",
            TAB_INACTIVE: "TAB_INACTIVE",
            SLIDER_ACTIVE: "SLIDER_ACTIVE",
            SLIDER_INACTIVE: "SLIDER_INACTIVE",
            DROPDOWN_OPEN: "DROPDOWN_OPEN",
            DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
            MOUSE_CLICK: "MOUSE_CLICK",
            MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
            MOUSE_DOWN: "MOUSE_DOWN",
            MOUSE_UP: "MOUSE_UP",
            MOUSE_OVER: "MOUSE_OVER",
            MOUSE_OUT: "MOUSE_OUT",
            MOUSE_MOVE: "MOUSE_MOVE",
            MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
            SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
            SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
            SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
            ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
            ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
            PAGE_START: "PAGE_START",
            PAGE_FINISH: "PAGE_FINISH",
            PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
            PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
            PAGE_SCROLL: "PAGE_SCROLL"
        },
        jo = {
            ELEMENT: "ELEMENT",
            CLASS: "CLASS",
            PAGE: "PAGE"
        },
        st = {
            ELEMENT: "ELEMENT",
            VIEWPORT: "VIEWPORT"
        },
        Bw = {
            X_AXIS: "X_AXIS",
            Y_AXIS: "Y_AXIS"
        },
        jw = {
            CHILDREN: "CHILDREN",
            SIBLINGS: "SIBLINGS",
            IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
        },
        xn = {
            FADE_EFFECT: "FADE_EFFECT",
            SLIDE_EFFECT: "SLIDE_EFFECT",
            GROW_EFFECT: "GROW_EFFECT",
            SHRINK_EFFECT: "SHRINK_EFFECT",
            SPIN_EFFECT: "SPIN_EFFECT",
            FLY_EFFECT: "FLY_EFFECT",
            POP_EFFECT: "POP_EFFECT",
            FLIP_EFFECT: "FLIP_EFFECT",
            JIGGLE_EFFECT: "JIGGLE_EFFECT",
            PULSE_EFFECT: "PULSE_EFFECT",
            DROP_EFFECT: "DROP_EFFECT",
            BLINK_EFFECT: "BLINK_EFFECT",
            BOUNCE_EFFECT: "BOUNCE_EFFECT",
            FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
            FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
            RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
            JELLO_EFFECT: "JELLO_EFFECT",
            GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
            SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
            PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
        },
        zw = {
            LEFT: "LEFT",
            RIGHT: "RIGHT",
            BOTTOM: "BOTTOM",
            TOP: "TOP",
            BOTTOM_LEFT: "BOTTOM_LEFT",
            BOTTOM_RIGHT: "BOTTOM_RIGHT",
            TOP_RIGHT: "TOP_RIGHT",
            TOP_LEFT: "TOP_LEFT",
            CLOCKWISE: "CLOCKWISE",
            COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
        }
    }
    );
    var Ue, Kw, An = me( () => {
        "use strict";
        Ue = {
            TRANSFORM_MOVE: "TRANSFORM_MOVE",
            TRANSFORM_SCALE: "TRANSFORM_SCALE",
            TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
            TRANSFORM_SKEW: "TRANSFORM_SKEW",
            STYLE_OPACITY: "STYLE_OPACITY",
            STYLE_SIZE: "STYLE_SIZE",
            STYLE_FILTER: "STYLE_FILTER",
            STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
            STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
            STYLE_BORDER: "STYLE_BORDER",
            STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
            OBJECT_VALUE: "OBJECT_VALUE",
            PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
            PLUGIN_SPLINE: "PLUGIN_SPLINE",
            PLUGIN_VARIABLE: "PLUGIN_VARIABLE",
            GENERAL_DISPLAY: "GENERAL_DISPLAY",
            GENERAL_START_ACTION: "GENERAL_START_ACTION",
            GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
            GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
            GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
            GENERAL_LOOP: "GENERAL_LOOP",
            STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
        },
        Kw = {
            ELEMENT: "ELEMENT",
            ELEMENT_CLASS: "ELEMENT_CLASS",
            TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
        }
    }
    );
    var Yw, Tf = me( () => {
        "use strict";
        Yw = {
            MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
            MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
            MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
            SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
            SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
            MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
            PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
            PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
            PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
            NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
            DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
            ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
            TAB_INTERACTION: "TAB_INTERACTION",
            SLIDER_INTERACTION: "SLIDER_INTERACTION"
        }
    }
    );
    var $w, Qw, Zw, Jw, ex, tx, rx, Ko, If = me( () => {
        "use strict";
        An();
        ({TRANSFORM_MOVE: $w, TRANSFORM_SCALE: Qw, TRANSFORM_ROTATE: Zw, TRANSFORM_SKEW: Jw, STYLE_SIZE: ex, STYLE_FILTER: tx, STYLE_FONT_VARIATION: rx} = Ue),
        Ko = {
            [$w]: !0,
            [Qw]: !0,
            [Zw]: !0,
            [Jw]: !0,
            [ex]: !0,
            [tx]: !0,
            [rx]: !0
        }
    }
    );
    var Ie = {};
    Fe(Ie, {
        IX2_ACTION_LIST_PLAYBACK_CHANGED: () => yx,
        IX2_ANIMATION_FRAME_CHANGED: () => px,
        IX2_CLEAR_REQUESTED: () => lx,
        IX2_ELEMENT_STATE_CHANGED: () => Ex,
        IX2_EVENT_LISTENER_ADDED: () => fx,
        IX2_EVENT_STATE_CHANGED: () => dx,
        IX2_INSTANCE_ADDED: () => gx,
        IX2_INSTANCE_REMOVED: () => mx,
        IX2_INSTANCE_STARTED: () => hx,
        IX2_MEDIA_QUERIES_DEFINED: () => bx,
        IX2_PARAMETER_CHANGED: () => vx,
        IX2_PLAYBACK_REQUESTED: () => ux,
        IX2_PREVIEW_REQUESTED: () => sx,
        IX2_RAW_DATA_IMPORTED: () => nx,
        IX2_SESSION_INITIALIZED: () => ix,
        IX2_SESSION_STARTED: () => ox,
        IX2_SESSION_STOPPED: () => ax,
        IX2_STOP_REQUESTED: () => cx,
        IX2_TEST_FRAME_RENDERED: () => Tx,
        IX2_VIEWPORT_WIDTH_CHANGED: () => _x
    });
    var nx, ix, ox, ax, sx, ux, cx, lx, fx, dx, px, vx, gx, hx, mx, Ex, yx, _x, bx, Tx, Of = me( () => {
        "use strict";
        nx = "IX2_RAW_DATA_IMPORTED",
        ix = "IX2_SESSION_INITIALIZED",
        ox = "IX2_SESSION_STARTED",
        ax = "IX2_SESSION_STOPPED",
        sx = "IX2_PREVIEW_REQUESTED",
        ux = "IX2_PLAYBACK_REQUESTED",
        cx = "IX2_STOP_REQUESTED",
        lx = "IX2_CLEAR_REQUESTED",
        fx = "IX2_EVENT_LISTENER_ADDED",
        dx = "IX2_EVENT_STATE_CHANGED",
        px = "IX2_ANIMATION_FRAME_CHANGED",
        vx = "IX2_PARAMETER_CHANGED",
        gx = "IX2_INSTANCE_ADDED",
        hx = "IX2_INSTANCE_STARTED",
        mx = "IX2_INSTANCE_REMOVED",
        Ex = "IX2_ELEMENT_STATE_CHANGED",
        yx = "IX2_ACTION_LIST_PLAYBACK_CHANGED",
        _x = "IX2_VIEWPORT_WIDTH_CHANGED",
        bx = "IX2_MEDIA_QUERIES_DEFINED",
        Tx = "IX2_TEST_FRAME_RENDERED"
    }
    );
    var Re = {};
    Fe(Re, {
        ABSTRACT_NODE: () => _A,
        AUTO: () => cA,
        BACKGROUND: () => nA,
        BACKGROUND_COLOR: () => rA,
        BAR_DELIMITER: () => dA,
        BORDER_COLOR: () => iA,
        BOUNDARY_SELECTOR: () => Ax,
        CHILDREN: () => pA,
        COLON_DELIMITER: () => fA,
        COLOR: () => oA,
        COMMA_DELIMITER: () => lA,
        CONFIG_UNIT: () => qx,
        CONFIG_VALUE: () => Lx,
        CONFIG_X_UNIT: () => Nx,
        CONFIG_X_VALUE: () => Sx,
        CONFIG_Y_UNIT: () => Px,
        CONFIG_Y_VALUE: () => Rx,
        CONFIG_Z_UNIT: () => Mx,
        CONFIG_Z_VALUE: () => Cx,
        DISPLAY: () => aA,
        FILTER: () => Zx,
        FLEX: () => sA,
        FONT_VARIATION_SETTINGS: () => Jx,
        HEIGHT: () => tA,
        HTML_ELEMENT: () => EA,
        IMMEDIATE_CHILDREN: () => vA,
        IX2_ID_DELIMITER: () => Ix,
        OPACITY: () => Qx,
        PARENT: () => hA,
        PLAIN_OBJECT: () => yA,
        PRESERVE_3D: () => mA,
        RENDER_GENERAL: () => TA,
        RENDER_PLUGIN: () => OA,
        RENDER_STYLE: () => IA,
        RENDER_TRANSFORM: () => bA,
        ROTATE_X: () => Bx,
        ROTATE_Y: () => jx,
        ROTATE_Z: () => zx,
        SCALE_3D: () => Xx,
        SCALE_X: () => Vx,
        SCALE_Y: () => Wx,
        SCALE_Z: () => Hx,
        SIBLINGS: () => gA,
        SKEW: () => Kx,
        SKEW_X: () => Yx,
        SKEW_Y: () => $x,
        TRANSFORM: () => Dx,
        TRANSLATE_3D: () => kx,
        TRANSLATE_X: () => Fx,
        TRANSLATE_Y: () => Gx,
        TRANSLATE_Z: () => Ux,
        WF_PAGE: () => Ox,
        WIDTH: () => eA,
        WILL_CHANGE: () => uA,
        W_MOD_IX: () => xx,
        W_MOD_JS: () => wx
    });
    var Ix, Ox, wx, xx, Ax, Sx, Rx, Cx, Lx, Nx, Px, Mx, qx, Dx, Fx, Gx, Ux, kx, Vx, Wx, Hx, Xx, Bx, jx, zx, Kx, Yx, $x, Qx, Zx, Jx, eA, tA, rA, nA, iA, oA, aA, sA, uA, cA, lA, fA, dA, pA, vA, gA, hA, mA, EA, yA, _A, bA, TA, IA, OA, wf = me( () => {
        "use strict";
        Ix = "|",
        Ox = "data-wf-page",
        wx = "w-mod-js",
        xx = "w-mod-ix",
        Ax = ".w-dyn-item",
        Sx = "xValue",
        Rx = "yValue",
        Cx = "zValue",
        Lx = "value",
        Nx = "xUnit",
        Px = "yUnit",
        Mx = "zUnit",
        qx = "unit",
        Dx = "transform",
        Fx = "translateX",
        Gx = "translateY",
        Ux = "translateZ",
        kx = "translate3d",
        Vx = "scaleX",
        Wx = "scaleY",
        Hx = "scaleZ",
        Xx = "scale3d",
        Bx = "rotateX",
        jx = "rotateY",
        zx = "rotateZ",
        Kx = "skew",
        Yx = "skewX",
        $x = "skewY",
        Qx = "opacity",
        Zx = "filter",
        Jx = "font-variation-settings",
        eA = "width",
        tA = "height",
        rA = "backgroundColor",
        nA = "background",
        iA = "borderColor",
        oA = "color",
        aA = "display",
        sA = "flex",
        uA = "willChange",
        cA = "AUTO",
        lA = ",",
        fA = ":",
        dA = "|",
        pA = "CHILDREN",
        vA = "IMMEDIATE_CHILDREN",
        gA = "SIBLINGS",
        hA = "PARENT",
        mA = "preserve-3d",
        EA = "HTML_ELEMENT",
        yA = "PLAIN_OBJECT",
        _A = "ABSTRACT_NODE",
        bA = "RENDER_TRANSFORM",
        TA = "RENDER_GENERAL",
        IA = "RENDER_STYLE",
        OA = "RENDER_PLUGIN"
    }
    );
    var xf = {};
    Fe(xf, {
        ActionAppliesTo: () => Kw,
        ActionTypeConsts: () => Ue,
        EventAppliesTo: () => jo,
        EventBasedOn: () => st,
        EventContinuousMouseAxes: () => Bw,
        EventLimitAffectedElements: () => jw,
        EventTypeConsts: () => Ze,
        IX2EngineActionTypes: () => Ie,
        IX2EngineConstants: () => Re,
        InteractionTypeConsts: () => Yw,
        QuickEffectDirectionConsts: () => zw,
        QuickEffectIds: () => xn,
        ReducedMotionTypes: () => Ko
    });
    var ke = me( () => {
        "use strict";
        zo();
        An();
        Tf();
        If();
        Of();
        wf();
        An();
        zo()
    }
    );
    var wA, Af, Sf = me( () => {
        "use strict";
        ke();
        ({IX2_RAW_DATA_IMPORTED: wA} = Ie),
        Af = (e=Object.freeze({}), t) => {
            switch (t.type) {
            case wA:
                return t.payload.ixData || Object.freeze({});
            default:
                return e
            }
        }
    }
    );
    var $t = c(_e => {
        "use strict";
        Object.defineProperty(_e, "__esModule", {
            value: !0
        });
        var xA = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
            return typeof e
        }
        : function(e) {
            return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }
        ;
        _e.clone = Rn;
        _e.addLast = Lf;
        _e.addFirst = Nf;
        _e.removeLast = Pf;
        _e.removeFirst = Mf;
        _e.insert = qf;
        _e.removeAt = Df;
        _e.replaceAt = Ff;
        _e.getIn = Cn;
        _e.set = Ln;
        _e.setIn = Nn;
        _e.update = Uf;
        _e.updateIn = kf;
        _e.merge = Vf;
        _e.mergeDeep = Wf;
        _e.mergeIn = Hf;
        _e.omit = Xf;
        _e.addDefaults = Bf;
        var Rf = "INVALID_ARGS";
        function Cf(e) {
            throw new Error(e)
        }
        function Yo(e) {
            var t = Object.keys(e);
            return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
        }
        var AA = {}.hasOwnProperty;
        function Rn(e) {
            if (Array.isArray(e))
                return e.slice();
            for (var t = Yo(e), r = {}, n = 0; n < t.length; n++) {
                var o = t[n];
                r[o] = e[o]
            }
            return r
        }
        function Ve(e, t, r) {
            var n = r;
            n == null && Cf(Rf);
            for (var o = !1, i = arguments.length, a = Array(i > 3 ? i - 3 : 0), s = 3; s < i; s++)
                a[s - 3] = arguments[s];
            for (var u = 0; u < a.length; u++) {
                var d = a[u];
                if (d != null) {
                    var h = Yo(d);
                    if (h.length)
                        for (var g = 0; g <= h.length; g++) {
                            var m = h[g];
                            if (!(e && n[m] !== void 0)) {
                                var E = d[m];
                                t && Sn(n[m]) && Sn(E) && (E = Ve(e, t, n[m], E)),
                                !(E === void 0 || E === n[m]) && (o || (o = !0,
                                n = Rn(n)),
                                n[m] = E)
                            }
                        }
                }
            }
            return n
        }
        function Sn(e) {
            var t = typeof e > "u" ? "undefined" : xA(e);
            return e != null && (t === "object" || t === "function")
        }
        function Lf(e, t) {
            return Array.isArray(t) ? e.concat(t) : e.concat([t])
        }
        function Nf(e, t) {
            return Array.isArray(t) ? t.concat(e) : [t].concat(e)
        }
        function Pf(e) {
            return e.length ? e.slice(0, e.length - 1) : e
        }
        function Mf(e) {
            return e.length ? e.slice(1) : e
        }
        function qf(e, t, r) {
            return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
        }
        function Df(e, t) {
            return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
        }
        function Ff(e, t, r) {
            if (e[t] === r)
                return e;
            for (var n = e.length, o = Array(n), i = 0; i < n; i++)
                o[i] = e[i];
            return o[t] = r,
            o
        }
        function Cn(e, t) {
            if (!Array.isArray(t) && Cf(Rf),
            e != null) {
                for (var r = e, n = 0; n < t.length; n++) {
                    var o = t[n];
                    if (r = r?.[o],
                    r === void 0)
                        return r
                }
                return r
            }
        }
        function Ln(e, t, r) {
            var n = typeof t == "number" ? [] : {}
              , o = e ?? n;
            if (o[t] === r)
                return o;
            var i = Rn(o);
            return i[t] = r,
            i
        }
        function Gf(e, t, r, n) {
            var o = void 0
              , i = t[n];
            if (n === t.length - 1)
                o = r;
            else {
                var a = Sn(e) && Sn(e[i]) ? e[i] : typeof t[n + 1] == "number" ? [] : {};
                o = Gf(a, t, r, n + 1)
            }
            return Ln(e, i, o)
        }
        function Nn(e, t, r) {
            return t.length ? Gf(e, t, r, 0) : r
        }
        function Uf(e, t, r) {
            var n = e?.[t]
              , o = r(n);
            return Ln(e, t, o)
        }
        function kf(e, t, r) {
            var n = Cn(e, t)
              , o = r(n);
            return Nn(e, t, o)
        }
        function Vf(e, t, r, n, o, i) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++)
                s[u - 6] = arguments[u];
            return s.length ? Ve.call.apply(Ve, [null, !1, !1, e, t, r, n, o, i].concat(s)) : Ve(!1, !1, e, t, r, n, o, i)
        }
        function Wf(e, t, r, n, o, i) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++)
                s[u - 6] = arguments[u];
            return s.length ? Ve.call.apply(Ve, [null, !1, !0, e, t, r, n, o, i].concat(s)) : Ve(!1, !0, e, t, r, n, o, i)
        }
        function Hf(e, t, r, n, o, i, a) {
            var s = Cn(e, t);
            s == null && (s = {});
            for (var u = void 0, d = arguments.length, h = Array(d > 7 ? d - 7 : 0), g = 7; g < d; g++)
                h[g - 7] = arguments[g];
            return h.length ? u = Ve.call.apply(Ve, [null, !1, !1, s, r, n, o, i, a].concat(h)) : u = Ve(!1, !1, s, r, n, o, i, a),
            Nn(e, t, u)
        }
        function Xf(e, t) {
            for (var r = Array.isArray(t) ? t : [t], n = !1, o = 0; o < r.length; o++)
                if (AA.call(e, r[o])) {
                    n = !0;
                    break
                }
            if (!n)
                return e;
            for (var i = {}, a = Yo(e), s = 0; s < a.length; s++) {
                var u = a[s];
                r.indexOf(u) >= 0 || (i[u] = e[u])
            }
            return i
        }
        function Bf(e, t, r, n, o, i) {
            for (var a = arguments.length, s = Array(a > 6 ? a - 6 : 0), u = 6; u < a; u++)
                s[u - 6] = arguments[u];
            return s.length ? Ve.call.apply(Ve, [null, !0, !1, e, t, r, n, o, i].concat(s)) : Ve(!0, !1, e, t, r, n, o, i)
        }
        var SA = {
            clone: Rn,
            addLast: Lf,
            addFirst: Nf,
            removeLast: Pf,
            removeFirst: Mf,
            insert: qf,
            removeAt: Df,
            replaceAt: Ff,
            getIn: Cn,
            set: Ln,
            setIn: Nn,
            update: Uf,
            updateIn: kf,
            merge: Vf,
            mergeDeep: Wf,
            mergeIn: Hf,
            omit: Xf,
            addDefaults: Bf
        };
        _e.default = SA
    }
    );
    var zf, RA, CA, LA, NA, PA, jf, Kf, Yf = me( () => {
        "use strict";
        ke();
        zf = fe($t()),
        {IX2_PREVIEW_REQUESTED: RA, IX2_PLAYBACK_REQUESTED: CA, IX2_STOP_REQUESTED: LA, IX2_CLEAR_REQUESTED: NA} = Ie,
        PA = {
            preview: {},
            playback: {},
            stop: {},
            clear: {}
        },
        jf = Object.create(null, {
            [RA]: {
                value: "preview"
            },
            [CA]: {
                value: "playback"
            },
            [LA]: {
                value: "stop"
            },
            [NA]: {
                value: "clear"
            }
        }),
        Kf = (e=PA, t) => {
            if (t.type in jf) {
                let r = [jf[t.type]];
                return (0,
                zf.setIn)(e, [r], {
                    ...t.payload
                })
            }
            return e
        }
    }
    );
    var Ne, MA, qA, DA, FA, GA, UA, kA, VA, WA, HA, $f, XA, Qf, Zf = me( () => {
        "use strict";
        ke();
        Ne = fe($t()),
        {IX2_SESSION_INITIALIZED: MA, IX2_SESSION_STARTED: qA, IX2_TEST_FRAME_RENDERED: DA, IX2_SESSION_STOPPED: FA, IX2_EVENT_LISTENER_ADDED: GA, IX2_EVENT_STATE_CHANGED: UA, IX2_ANIMATION_FRAME_CHANGED: kA, IX2_ACTION_LIST_PLAYBACK_CHANGED: VA, IX2_VIEWPORT_WIDTH_CHANGED: WA, IX2_MEDIA_QUERIES_DEFINED: HA} = Ie,
        $f = {
            active: !1,
            tick: 0,
            eventListeners: [],
            eventState: {},
            playbackState: {},
            viewportWidth: 0,
            mediaQueryKey: null,
            hasBoundaryNodes: !1,
            hasDefinedMediaQueries: !1,
            reducedMotion: !1
        },
        XA = 20,
        Qf = (e=$f, t) => {
            switch (t.type) {
            case MA:
                {
                    let {hasBoundaryNodes: r, reducedMotion: n} = t.payload;
                    return (0,
                    Ne.merge)(e, {
                        hasBoundaryNodes: r,
                        reducedMotion: n
                    })
                }
            case qA:
                return (0,
                Ne.set)(e, "active", !0);
            case DA:
                {
                    let {payload: {step: r=XA}} = t;
                    return (0,
                    Ne.set)(e, "tick", e.tick + r)
                }
            case FA:
                return $f;
            case kA:
                {
                    let {payload: {now: r}} = t;
                    return (0,
                    Ne.set)(e, "tick", r)
                }
            case GA:
                {
                    let r = (0,
                    Ne.addLast)(e.eventListeners, t.payload);
                    return (0,
                    Ne.set)(e, "eventListeners", r)
                }
            case UA:
                {
                    let {stateKey: r, newState: n} = t.payload;
                    return (0,
                    Ne.setIn)(e, ["eventState", r], n)
                }
            case VA:
                {
                    let {actionListId: r, isPlaying: n} = t.payload;
                    return (0,
                    Ne.setIn)(e, ["playbackState", r], n)
                }
            case WA:
                {
                    let {width: r, mediaQueries: n} = t.payload
                      , o = n.length
                      , i = null;
                    for (let a = 0; a < o; a++) {
                        let {key: s, min: u, max: d} = n[a];
                        if (r >= u && r <= d) {
                            i = s;
                            break
                        }
                    }
                    return (0,
                    Ne.merge)(e, {
                        viewportWidth: r,
                        mediaQueryKey: i
                    })
                }
            case HA:
                return (0,
                Ne.set)(e, "hasDefinedMediaQueries", !0);
            default:
                return e
            }
        }
    }
    );
    var ed = c( (eX, Jf) => {
        function BA() {
            this.__data__ = [],
            this.size = 0
        }
        Jf.exports = BA
    }
    );
    var Pn = c( (tX, td) => {
        function jA(e, t) {
            return e === t || e !== e && t !== t
        }
        td.exports = jA
    }
    );
    var Pr = c( (rX, rd) => {
        var zA = Pn();
        function KA(e, t) {
            for (var r = e.length; r--; )
                if (zA(e[r][0], t))
                    return r;
            return -1
        }
        rd.exports = KA
    }
    );
    var id = c( (nX, nd) => {
        var YA = Pr()
          , $A = Array.prototype
          , QA = $A.splice;
        function ZA(e) {
            var t = this.__data__
              , r = YA(t, e);
            if (r < 0)
                return !1;
            var n = t.length - 1;
            return r == n ? t.pop() : QA.call(t, r, 1),
            --this.size,
            !0
        }
        nd.exports = ZA
    }
    );
    var ad = c( (iX, od) => {
        var JA = Pr();
        function eS(e) {
            var t = this.__data__
              , r = JA(t, e);
            return r < 0 ? void 0 : t[r][1]
        }
        od.exports = eS
    }
    );
    var ud = c( (oX, sd) => {
        var tS = Pr();
        function rS(e) {
            return tS(this.__data__, e) > -1
        }
        sd.exports = rS
    }
    );
    var ld = c( (aX, cd) => {
        var nS = Pr();
        function iS(e, t) {
            var r = this.__data__
              , n = nS(r, e);
            return n < 0 ? (++this.size,
            r.push([e, t])) : r[n][1] = t,
            this
        }
        cd.exports = iS
    }
    );
    var Mr = c( (sX, fd) => {
        var oS = ed()
          , aS = id()
          , sS = ad()
          , uS = ud()
          , cS = ld();
        function Qt(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Qt.prototype.clear = oS;
        Qt.prototype.delete = aS;
        Qt.prototype.get = sS;
        Qt.prototype.has = uS;
        Qt.prototype.set = cS;
        fd.exports = Qt
    }
    );
    var pd = c( (uX, dd) => {
        var lS = Mr();
        function fS() {
            this.__data__ = new lS,
            this.size = 0
        }
        dd.exports = fS
    }
    );
    var gd = c( (cX, vd) => {
        function dS(e) {
            var t = this.__data__
              , r = t.delete(e);
            return this.size = t.size,
            r
        }
        vd.exports = dS
    }
    );
    var md = c( (lX, hd) => {
        function pS(e) {
            return this.__data__.get(e)
        }
        hd.exports = pS
    }
    );
    var yd = c( (fX, Ed) => {
        function vS(e) {
            return this.__data__.has(e)
        }
        Ed.exports = vS
    }
    );
    var ut = c( (dX, _d) => {
        function gS(e) {
            var t = typeof e;
            return e != null && (t == "object" || t == "function")
        }
        _d.exports = gS
    }
    );
    var $o = c( (pX, bd) => {
        var hS = It()
          , mS = ut()
          , ES = "[object AsyncFunction]"
          , yS = "[object Function]"
          , _S = "[object GeneratorFunction]"
          , bS = "[object Proxy]";
        function TS(e) {
            if (!mS(e))
                return !1;
            var t = hS(e);
            return t == yS || t == _S || t == ES || t == bS
        }
        bd.exports = TS
    }
    );
    var Id = c( (vX, Td) => {
        var IS = Qe()
          , OS = IS["__core-js_shared__"];
        Td.exports = OS
    }
    );
    var xd = c( (gX, wd) => {
        var Qo = Id()
          , Od = function() {
            var e = /[^.]+$/.exec(Qo && Qo.keys && Qo.keys.IE_PROTO || "");
            return e ? "Symbol(src)_1." + e : ""
        }();
        function wS(e) {
            return !!Od && Od in e
        }
        wd.exports = wS
    }
    );
    var Zo = c( (hX, Ad) => {
        var xS = Function.prototype
          , AS = xS.toString;
        function SS(e) {
            if (e != null) {
                try {
                    return AS.call(e)
                } catch {}
                try {
                    return e + ""
                } catch {}
            }
            return ""
        }
        Ad.exports = SS
    }
    );
    var Rd = c( (mX, Sd) => {
        var RS = $o()
          , CS = xd()
          , LS = ut()
          , NS = Zo()
          , PS = /[\\^$.*+?()[\]{}|]/g
          , MS = /^\[object .+?Constructor\]$/
          , qS = Function.prototype
          , DS = Object.prototype
          , FS = qS.toString
          , GS = DS.hasOwnProperty
          , US = RegExp("^" + FS.call(GS).replace(PS, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
        function kS(e) {
            if (!LS(e) || CS(e))
                return !1;
            var t = RS(e) ? US : MS;
            return t.test(NS(e))
        }
        Sd.exports = kS
    }
    );
    var Ld = c( (EX, Cd) => {
        function VS(e, t) {
            return e?.[t]
        }
        Cd.exports = VS
    }
    );
    var Ot = c( (yX, Nd) => {
        var WS = Rd()
          , HS = Ld();
        function XS(e, t) {
            var r = HS(e, t);
            return WS(r) ? r : void 0
        }
        Nd.exports = XS
    }
    );
    var Mn = c( (_X, Pd) => {
        var BS = Ot()
          , jS = Qe()
          , zS = BS(jS, "Map");
        Pd.exports = zS
    }
    );
    var qr = c( (bX, Md) => {
        var KS = Ot()
          , YS = KS(Object, "create");
        Md.exports = YS
    }
    );
    var Fd = c( (TX, Dd) => {
        var qd = qr();
        function $S() {
            this.__data__ = qd ? qd(null) : {},
            this.size = 0
        }
        Dd.exports = $S
    }
    );
    var Ud = c( (IX, Gd) => {
        function QS(e) {
            var t = this.has(e) && delete this.__data__[e];
            return this.size -= t ? 1 : 0,
            t
        }
        Gd.exports = QS
    }
    );
    var Vd = c( (OX, kd) => {
        var ZS = qr()
          , JS = "__lodash_hash_undefined__"
          , e0 = Object.prototype
          , t0 = e0.hasOwnProperty;
        function r0(e) {
            var t = this.__data__;
            if (ZS) {
                var r = t[e];
                return r === JS ? void 0 : r
            }
            return t0.call(t, e) ? t[e] : void 0
        }
        kd.exports = r0
    }
    );
    var Hd = c( (wX, Wd) => {
        var n0 = qr()
          , i0 = Object.prototype
          , o0 = i0.hasOwnProperty;
        function a0(e) {
            var t = this.__data__;
            return n0 ? t[e] !== void 0 : o0.call(t, e)
        }
        Wd.exports = a0
    }
    );
    var Bd = c( (xX, Xd) => {
        var s0 = qr()
          , u0 = "__lodash_hash_undefined__";
        function c0(e, t) {
            var r = this.__data__;
            return this.size += this.has(e) ? 0 : 1,
            r[e] = s0 && t === void 0 ? u0 : t,
            this
        }
        Xd.exports = c0
    }
    );
    var zd = c( (AX, jd) => {
        var l0 = Fd()
          , f0 = Ud()
          , d0 = Vd()
          , p0 = Hd()
          , v0 = Bd();
        function Zt(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Zt.prototype.clear = l0;
        Zt.prototype.delete = f0;
        Zt.prototype.get = d0;
        Zt.prototype.has = p0;
        Zt.prototype.set = v0;
        jd.exports = Zt
    }
    );
    var $d = c( (SX, Yd) => {
        var Kd = zd()
          , g0 = Mr()
          , h0 = Mn();
        function m0() {
            this.size = 0,
            this.__data__ = {
                hash: new Kd,
                map: new (h0 || g0),
                string: new Kd
            }
        }
        Yd.exports = m0
    }
    );
    var Zd = c( (RX, Qd) => {
        function E0(e) {
            var t = typeof e;
            return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
        }
        Qd.exports = E0
    }
    );
    var Dr = c( (CX, Jd) => {
        var y0 = Zd();
        function _0(e, t) {
            var r = e.__data__;
            return y0(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
        }
        Jd.exports = _0
    }
    );
    var tp = c( (LX, ep) => {
        var b0 = Dr();
        function T0(e) {
            var t = b0(this, e).delete(e);
            return this.size -= t ? 1 : 0,
            t
        }
        ep.exports = T0
    }
    );
    var np = c( (NX, rp) => {
        var I0 = Dr();
        function O0(e) {
            return I0(this, e).get(e)
        }
        rp.exports = O0
    }
    );
    var op = c( (PX, ip) => {
        var w0 = Dr();
        function x0(e) {
            return w0(this, e).has(e)
        }
        ip.exports = x0
    }
    );
    var sp = c( (MX, ap) => {
        var A0 = Dr();
        function S0(e, t) {
            var r = A0(this, e)
              , n = r.size;
            return r.set(e, t),
            this.size += r.size == n ? 0 : 1,
            this
        }
        ap.exports = S0
    }
    );
    var qn = c( (qX, up) => {
        var R0 = $d()
          , C0 = tp()
          , L0 = np()
          , N0 = op()
          , P0 = sp();
        function Jt(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.clear(); ++t < r; ) {
                var n = e[t];
                this.set(n[0], n[1])
            }
        }
        Jt.prototype.clear = R0;
        Jt.prototype.delete = C0;
        Jt.prototype.get = L0;
        Jt.prototype.has = N0;
        Jt.prototype.set = P0;
        up.exports = Jt
    }
    );
    var lp = c( (DX, cp) => {
        var M0 = Mr()
          , q0 = Mn()
          , D0 = qn()
          , F0 = 200;
        function G0(e, t) {
            var r = this.__data__;
            if (r instanceof M0) {
                var n = r.__data__;
                if (!q0 || n.length < F0 - 1)
                    return n.push([e, t]),
                    this.size = ++r.size,
                    this;
                r = this.__data__ = new D0(n)
            }
            return r.set(e, t),
            this.size = r.size,
            this
        }
        cp.exports = G0
    }
    );
    var Jo = c( (FX, fp) => {
        var U0 = Mr()
          , k0 = pd()
          , V0 = gd()
          , W0 = md()
          , H0 = yd()
          , X0 = lp();
        function er(e) {
            var t = this.__data__ = new U0(e);
            this.size = t.size
        }
        er.prototype.clear = k0;
        er.prototype.delete = V0;
        er.prototype.get = W0;
        er.prototype.has = H0;
        er.prototype.set = X0;
        fp.exports = er
    }
    );
    var pp = c( (GX, dp) => {
        var B0 = "__lodash_hash_undefined__";
        function j0(e) {
            return this.__data__.set(e, B0),
            this
        }
        dp.exports = j0
    }
    );
    var gp = c( (UX, vp) => {
        function z0(e) {
            return this.__data__.has(e)
        }
        vp.exports = z0
    }
    );
    var mp = c( (kX, hp) => {
        var K0 = qn()
          , Y0 = pp()
          , $0 = gp();
        function Dn(e) {
            var t = -1
              , r = e == null ? 0 : e.length;
            for (this.__data__ = new K0; ++t < r; )
                this.add(e[t])
        }
        Dn.prototype.add = Dn.prototype.push = Y0;
        Dn.prototype.has = $0;
        hp.exports = Dn
    }
    );
    var yp = c( (VX, Ep) => {
        function Q0(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n; )
                if (t(e[r], r, e))
                    return !0;
            return !1
        }
        Ep.exports = Q0
    }
    );
    var bp = c( (WX, _p) => {
        function Z0(e, t) {
            return e.has(t)
        }
        _p.exports = Z0
    }
    );
    var ea = c( (HX, Tp) => {
        var J0 = mp()
          , eR = yp()
          , tR = bp()
          , rR = 1
          , nR = 2;
        function iR(e, t, r, n, o, i) {
            var a = r & rR
              , s = e.length
              , u = t.length;
            if (s != u && !(a && u > s))
                return !1;
            var d = i.get(e)
              , h = i.get(t);
            if (d && h)
                return d == t && h == e;
            var g = -1
              , m = !0
              , E = r & nR ? new J0 : void 0;
            for (i.set(e, t),
            i.set(t, e); ++g < s; ) {
                var T = e[g]
                  , I = t[g];
                if (n)
                    var D = a ? n(I, T, g, t, e, i) : n(T, I, g, e, t, i);
                if (D !== void 0) {
                    if (D)
                        continue;
                    m = !1;
                    break
                }
                if (E) {
                    if (!eR(t, function(S, L) {
                        if (!tR(E, L) && (T === S || o(T, S, r, n, i)))
                            return E.push(L)
                    })) {
                        m = !1;
                        break
                    }
                } else if (!(T === I || o(T, I, r, n, i))) {
                    m = !1;
                    break
                }
            }
            return i.delete(e),
            i.delete(t),
            m
        }
        Tp.exports = iR
    }
    );
    var Op = c( (XX, Ip) => {
        var oR = Qe()
          , aR = oR.Uint8Array;
        Ip.exports = aR
    }
    );
    var xp = c( (BX, wp) => {
        function sR(e) {
            var t = -1
              , r = Array(e.size);
            return e.forEach(function(n, o) {
                r[++t] = [o, n]
            }),
            r
        }
        wp.exports = sR
    }
    );
    var Sp = c( (jX, Ap) => {
        function uR(e) {
            var t = -1
              , r = Array(e.size);
            return e.forEach(function(n) {
                r[++t] = n
            }),
            r
        }
        Ap.exports = uR
    }
    );
    var Pp = c( (zX, Np) => {
        var Rp = zt()
          , Cp = Op()
          , cR = Pn()
          , lR = ea()
          , fR = xp()
          , dR = Sp()
          , pR = 1
          , vR = 2
          , gR = "[object Boolean]"
          , hR = "[object Date]"
          , mR = "[object Error]"
          , ER = "[object Map]"
          , yR = "[object Number]"
          , _R = "[object RegExp]"
          , bR = "[object Set]"
          , TR = "[object String]"
          , IR = "[object Symbol]"
          , OR = "[object ArrayBuffer]"
          , wR = "[object DataView]"
          , Lp = Rp ? Rp.prototype : void 0
          , ta = Lp ? Lp.valueOf : void 0;
        function xR(e, t, r, n, o, i, a) {
            switch (r) {
            case wR:
                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
                    return !1;
                e = e.buffer,
                t = t.buffer;
            case OR:
                return !(e.byteLength != t.byteLength || !i(new Cp(e), new Cp(t)));
            case gR:
            case hR:
            case yR:
                return cR(+e, +t);
            case mR:
                return e.name == t.name && e.message == t.message;
            case _R:
            case TR:
                return e == t + "";
            case ER:
                var s = fR;
            case bR:
                var u = n & pR;
                if (s || (s = dR),
                e.size != t.size && !u)
                    return !1;
                var d = a.get(e);
                if (d)
                    return d == t;
                n |= vR,
                a.set(e, t);
                var h = lR(s(e), s(t), n, o, i, a);
                return a.delete(e),
                h;
            case IR:
                if (ta)
                    return ta.call(e) == ta.call(t)
            }
            return !1
        }
        Np.exports = xR
    }
    );
    var Fn = c( (KX, Mp) => {
        function AR(e, t) {
            for (var r = -1, n = t.length, o = e.length; ++r < n; )
                e[o + r] = t[r];
            return e
        }
        Mp.exports = AR
    }
    );
    var we = c( (YX, qp) => {
        var SR = Array.isArray;
        qp.exports = SR
    }
    );
    var ra = c( ($X, Dp) => {
        var RR = Fn()
          , CR = we();
        function LR(e, t, r) {
            var n = t(e);
            return CR(e) ? n : RR(n, r(e))
        }
        Dp.exports = LR
    }
    );
    var Gp = c( (QX, Fp) => {
        function NR(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, o = 0, i = []; ++r < n; ) {
                var a = e[r];
                t(a, r, e) && (i[o++] = a)
            }
            return i
        }
        Fp.exports = NR
    }
    );
    var na = c( (ZX, Up) => {
        function PR() {
            return []
        }
        Up.exports = PR
    }
    );
    var ia = c( (JX, Vp) => {
        var MR = Gp()
          , qR = na()
          , DR = Object.prototype
          , FR = DR.propertyIsEnumerable
          , kp = Object.getOwnPropertySymbols
          , GR = kp ? function(e) {
            return e == null ? [] : (e = Object(e),
            MR(kp(e), function(t) {
                return FR.call(e, t)
            }))
        }
        : qR;
        Vp.exports = GR
    }
    );
    var Hp = c( (e5, Wp) => {
        function UR(e, t) {
            for (var r = -1, n = Array(e); ++r < e; )
                n[r] = t(r);
            return n
        }
        Wp.exports = UR
    }
    );
    var Bp = c( (t5, Xp) => {
        var kR = It()
          , VR = vt()
          , WR = "[object Arguments]";
        function HR(e) {
            return VR(e) && kR(e) == WR
        }
        Xp.exports = HR
    }
    );
    var Fr = c( (r5, Kp) => {
        var jp = Bp()
          , XR = vt()
          , zp = Object.prototype
          , BR = zp.hasOwnProperty
          , jR = zp.propertyIsEnumerable
          , zR = jp(function() {
            return arguments
        }()) ? jp : function(e) {
            return XR(e) && BR.call(e, "callee") && !jR.call(e, "callee")
        }
        ;
        Kp.exports = zR
    }
    );
    var $p = c( (n5, Yp) => {
        function KR() {
            return !1
        }
        Yp.exports = KR
    }
    );
    var Gn = c( (Gr, tr) => {
        var YR = Qe()
          , $R = $p()
          , Jp = typeof Gr == "object" && Gr && !Gr.nodeType && Gr
          , Qp = Jp && typeof tr == "object" && tr && !tr.nodeType && tr
          , QR = Qp && Qp.exports === Jp
          , Zp = QR ? YR.Buffer : void 0
          , ZR = Zp ? Zp.isBuffer : void 0
          , JR = ZR || $R;
        tr.exports = JR
    }
    );
    var Un = c( (i5, ev) => {
        var eC = 9007199254740991
          , tC = /^(?:0|[1-9]\d*)$/;
        function rC(e, t) {
            var r = typeof e;
            return t = t ?? eC,
            !!t && (r == "number" || r != "symbol" && tC.test(e)) && e > -1 && e % 1 == 0 && e < t
        }
        ev.exports = rC
    }
    );
    var kn = c( (o5, tv) => {
        var nC = 9007199254740991;
        function iC(e) {
            return typeof e == "number" && e > -1 && e % 1 == 0 && e <= nC
        }
        tv.exports = iC
    }
    );
    var nv = c( (a5, rv) => {
        var oC = It()
          , aC = kn()
          , sC = vt()
          , uC = "[object Arguments]"
          , cC = "[object Array]"
          , lC = "[object Boolean]"
          , fC = "[object Date]"
          , dC = "[object Error]"
          , pC = "[object Function]"
          , vC = "[object Map]"
          , gC = "[object Number]"
          , hC = "[object Object]"
          , mC = "[object RegExp]"
          , EC = "[object Set]"
          , yC = "[object String]"
          , _C = "[object WeakMap]"
          , bC = "[object ArrayBuffer]"
          , TC = "[object DataView]"
          , IC = "[object Float32Array]"
          , OC = "[object Float64Array]"
          , wC = "[object Int8Array]"
          , xC = "[object Int16Array]"
          , AC = "[object Int32Array]"
          , SC = "[object Uint8Array]"
          , RC = "[object Uint8ClampedArray]"
          , CC = "[object Uint16Array]"
          , LC = "[object Uint32Array]"
          , he = {};
        he[IC] = he[OC] = he[wC] = he[xC] = he[AC] = he[SC] = he[RC] = he[CC] = he[LC] = !0;
        he[uC] = he[cC] = he[bC] = he[lC] = he[TC] = he[fC] = he[dC] = he[pC] = he[vC] = he[gC] = he[hC] = he[mC] = he[EC] = he[yC] = he[_C] = !1;
        function NC(e) {
            return sC(e) && aC(e.length) && !!he[oC(e)]
        }
        rv.exports = NC
    }
    );
    var ov = c( (s5, iv) => {
        function PC(e) {
            return function(t) {
                return e(t)
            }
        }
        iv.exports = PC
    }
    );
    var sv = c( (Ur, rr) => {
        var MC = Co()
          , av = typeof Ur == "object" && Ur && !Ur.nodeType && Ur
          , kr = av && typeof rr == "object" && rr && !rr.nodeType && rr
          , qC = kr && kr.exports === av
          , oa = qC && MC.process
          , DC = function() {
            try {
                var e = kr && kr.require && kr.require("util").types;
                return e || oa && oa.binding && oa.binding("util")
            } catch {}
        }();
        rr.exports = DC
    }
    );
    var Vn = c( (u5, lv) => {
        var FC = nv()
          , GC = ov()
          , uv = sv()
          , cv = uv && uv.isTypedArray
          , UC = cv ? GC(cv) : FC;
        lv.exports = UC
    }
    );
    var aa = c( (c5, fv) => {
        var kC = Hp()
          , VC = Fr()
          , WC = we()
          , HC = Gn()
          , XC = Un()
          , BC = Vn()
          , jC = Object.prototype
          , zC = jC.hasOwnProperty;
        function KC(e, t) {
            var r = WC(e)
              , n = !r && VC(e)
              , o = !r && !n && HC(e)
              , i = !r && !n && !o && BC(e)
              , a = r || n || o || i
              , s = a ? kC(e.length, String) : []
              , u = s.length;
            for (var d in e)
                (t || zC.call(e, d)) && !(a && (d == "length" || o && (d == "offset" || d == "parent") || i && (d == "buffer" || d == "byteLength" || d == "byteOffset") || XC(d, u))) && s.push(d);
            return s
        }
        fv.exports = KC
    }
    );
    var Wn = c( (l5, dv) => {
        var YC = Object.prototype;
        function $C(e) {
            var t = e && e.constructor
              , r = typeof t == "function" && t.prototype || YC;
            return e === r
        }
        dv.exports = $C
    }
    );
    var vv = c( (f5, pv) => {
        var QC = Lo()
          , ZC = QC(Object.keys, Object);
        pv.exports = ZC
    }
    );
    var Hn = c( (d5, gv) => {
        var JC = Wn()
          , eL = vv()
          , tL = Object.prototype
          , rL = tL.hasOwnProperty;
        function nL(e) {
            if (!JC(e))
                return eL(e);
            var t = [];
            for (var r in Object(e))
                rL.call(e, r) && r != "constructor" && t.push(r);
            return t
        }
        gv.exports = nL
    }
    );
    var Mt = c( (p5, hv) => {
        var iL = $o()
          , oL = kn();
        function aL(e) {
            return e != null && oL(e.length) && !iL(e)
        }
        hv.exports = aL
    }
    );
    var Vr = c( (v5, mv) => {
        var sL = aa()
          , uL = Hn()
          , cL = Mt();
        function lL(e) {
            return cL(e) ? sL(e) : uL(e)
        }
        mv.exports = lL
    }
    );
    var yv = c( (g5, Ev) => {
        var fL = ra()
          , dL = ia()
          , pL = Vr();
        function vL(e) {
            return fL(e, pL, dL)
        }
        Ev.exports = vL
    }
    );
    var Tv = c( (h5, bv) => {
        var _v = yv()
          , gL = 1
          , hL = Object.prototype
          , mL = hL.hasOwnProperty;
        function EL(e, t, r, n, o, i) {
            var a = r & gL
              , s = _v(e)
              , u = s.length
              , d = _v(t)
              , h = d.length;
            if (u != h && !a)
                return !1;
            for (var g = u; g--; ) {
                var m = s[g];
                if (!(a ? m in t : mL.call(t, m)))
                    return !1
            }
            var E = i.get(e)
              , T = i.get(t);
            if (E && T)
                return E == t && T == e;
            var I = !0;
            i.set(e, t),
            i.set(t, e);
            for (var D = a; ++g < u; ) {
                m = s[g];
                var S = e[m]
                  , L = t[m];
                if (n)
                    var R = a ? n(L, S, m, t, e, i) : n(S, L, m, e, t, i);
                if (!(R === void 0 ? S === L || o(S, L, r, n, i) : R)) {
                    I = !1;
                    break
                }
                D || (D = m == "constructor")
            }
            if (I && !D) {
                var P = e.constructor
                  , q = t.constructor;
                P != q && "constructor"in e && "constructor"in t && !(typeof P == "function" && P instanceof P && typeof q == "function" && q instanceof q) && (I = !1)
            }
            return i.delete(e),
            i.delete(t),
            I
        }
        bv.exports = EL
    }
    );
    var Ov = c( (m5, Iv) => {
        var yL = Ot()
          , _L = Qe()
          , bL = yL(_L, "DataView");
        Iv.exports = bL
    }
    );
    var xv = c( (E5, wv) => {
        var TL = Ot()
          , IL = Qe()
          , OL = TL(IL, "Promise");
        wv.exports = OL
    }
    );
    var Sv = c( (y5, Av) => {
        var wL = Ot()
          , xL = Qe()
          , AL = wL(xL, "Set");
        Av.exports = AL
    }
    );
    var sa = c( (_5, Rv) => {
        var SL = Ot()
          , RL = Qe()
          , CL = SL(RL, "WeakMap");
        Rv.exports = CL
    }
    );
    var Xn = c( (b5, Dv) => {
        var ua = Ov()
          , ca = Mn()
          , la = xv()
          , fa = Sv()
          , da = sa()
          , qv = It()
          , nr = Zo()
          , Cv = "[object Map]"
          , LL = "[object Object]"
          , Lv = "[object Promise]"
          , Nv = "[object Set]"
          , Pv = "[object WeakMap]"
          , Mv = "[object DataView]"
          , NL = nr(ua)
          , PL = nr(ca)
          , ML = nr(la)
          , qL = nr(fa)
          , DL = nr(da)
          , qt = qv;
        (ua && qt(new ua(new ArrayBuffer(1))) != Mv || ca && qt(new ca) != Cv || la && qt(la.resolve()) != Lv || fa && qt(new fa) != Nv || da && qt(new da) != Pv) && (qt = function(e) {
            var t = qv(e)
              , r = t == LL ? e.constructor : void 0
              , n = r ? nr(r) : "";
            if (n)
                switch (n) {
                case NL:
                    return Mv;
                case PL:
                    return Cv;
                case ML:
                    return Lv;
                case qL:
                    return Nv;
                case DL:
                    return Pv
                }
            return t
        }
        );
        Dv.exports = qt
    }
    );
    var Xv = c( (T5, Hv) => {
        var pa = Jo()
          , FL = ea()
          , GL = Pp()
          , UL = Tv()
          , Fv = Xn()
          , Gv = we()
          , Uv = Gn()
          , kL = Vn()
          , VL = 1
          , kv = "[object Arguments]"
          , Vv = "[object Array]"
          , Bn = "[object Object]"
          , WL = Object.prototype
          , Wv = WL.hasOwnProperty;
        function HL(e, t, r, n, o, i) {
            var a = Gv(e)
              , s = Gv(t)
              , u = a ? Vv : Fv(e)
              , d = s ? Vv : Fv(t);
            u = u == kv ? Bn : u,
            d = d == kv ? Bn : d;
            var h = u == Bn
              , g = d == Bn
              , m = u == d;
            if (m && Uv(e)) {
                if (!Uv(t))
                    return !1;
                a = !0,
                h = !1
            }
            if (m && !h)
                return i || (i = new pa),
                a || kL(e) ? FL(e, t, r, n, o, i) : GL(e, t, u, r, n, o, i);
            if (!(r & VL)) {
                var E = h && Wv.call(e, "__wrapped__")
                  , T = g && Wv.call(t, "__wrapped__");
                if (E || T) {
                    var I = E ? e.value() : e
                      , D = T ? t.value() : t;
                    return i || (i = new pa),
                    o(I, D, r, n, i)
                }
            }
            return m ? (i || (i = new pa),
            UL(e, t, r, n, o, i)) : !1
        }
        Hv.exports = HL
    }
    );
    var va = c( (I5, zv) => {
        var XL = Xv()
          , Bv = vt();
        function jv(e, t, r, n, o) {
            return e === t ? !0 : e == null || t == null || !Bv(e) && !Bv(t) ? e !== e && t !== t : XL(e, t, r, n, jv, o)
        }
        zv.exports = jv
    }
    );
    var Yv = c( (O5, Kv) => {
        var BL = Jo()
          , jL = va()
          , zL = 1
          , KL = 2;
        function YL(e, t, r, n) {
            var o = r.length
              , i = o
              , a = !n;
            if (e == null)
                return !i;
            for (e = Object(e); o--; ) {
                var s = r[o];
                if (a && s[2] ? s[1] !== e[s[0]] : !(s[0]in e))
                    return !1
            }
            for (; ++o < i; ) {
                s = r[o];
                var u = s[0]
                  , d = e[u]
                  , h = s[1];
                if (a && s[2]) {
                    if (d === void 0 && !(u in e))
                        return !1
                } else {
                    var g = new BL;
                    if (n)
                        var m = n(d, h, u, e, t, g);
                    if (!(m === void 0 ? jL(h, d, zL | KL, n, g) : m))
                        return !1
                }
            }
            return !0
        }
        Kv.exports = YL
    }
    );
    var ga = c( (w5, $v) => {
        var $L = ut();
        function QL(e) {
            return e === e && !$L(e)
        }
        $v.exports = QL
    }
    );
    var Zv = c( (x5, Qv) => {
        var ZL = ga()
          , JL = Vr();
        function eN(e) {
            for (var t = JL(e), r = t.length; r--; ) {
                var n = t[r]
                  , o = e[n];
                t[r] = [n, o, ZL(o)]
            }
            return t
        }
        Qv.exports = eN
    }
    );
    var ha = c( (A5, Jv) => {
        function tN(e, t) {
            return function(r) {
                return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
            }
        }
        Jv.exports = tN
    }
    );
    var tg = c( (S5, eg) => {
        var rN = Yv()
          , nN = Zv()
          , iN = ha();
        function oN(e) {
            var t = nN(e);
            return t.length == 1 && t[0][2] ? iN(t[0][0], t[0][1]) : function(r) {
                return r === e || rN(r, e, t)
            }
        }
        eg.exports = oN
    }
    );
    var Wr = c( (R5, rg) => {
        var aN = It()
          , sN = vt()
          , uN = "[object Symbol]";
        function cN(e) {
            return typeof e == "symbol" || sN(e) && aN(e) == uN
        }
        rg.exports = cN
    }
    );
    var jn = c( (C5, ng) => {
        var lN = we()
          , fN = Wr()
          , dN = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/
          , pN = /^\w*$/;
        function vN(e, t) {
            if (lN(e))
                return !1;
            var r = typeof e;
            return r == "number" || r == "symbol" || r == "boolean" || e == null || fN(e) ? !0 : pN.test(e) || !dN.test(e) || t != null && e in Object(t)
        }
        ng.exports = vN
    }
    );
    var ag = c( (L5, og) => {
        var ig = qn()
          , gN = "Expected a function";
        function ma(e, t) {
            if (typeof e != "function" || t != null && typeof t != "function")
                throw new TypeError(gN);
            var r = function() {
                var n = arguments
                  , o = t ? t.apply(this, n) : n[0]
                  , i = r.cache;
                if (i.has(o))
                    return i.get(o);
                var a = e.apply(this, n);
                return r.cache = i.set(o, a) || i,
                a
            };
            return r.cache = new (ma.Cache || ig),
            r
        }
        ma.Cache = ig;
        og.exports = ma
    }
    );
    var ug = c( (N5, sg) => {
        var hN = ag()
          , mN = 500;
        function EN(e) {
            var t = hN(e, function(n) {
                return r.size === mN && r.clear(),
                n
            })
              , r = t.cache;
            return t
        }
        sg.exports = EN
    }
    );
    var lg = c( (P5, cg) => {
        var yN = ug()
          , _N = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g
          , bN = /\\(\\)?/g
          , TN = yN(function(e) {
            var t = [];
            return e.charCodeAt(0) === 46 && t.push(""),
            e.replace(_N, function(r, n, o, i) {
                t.push(o ? i.replace(bN, "$1") : n || r)
            }),
            t
        });
        cg.exports = TN
    }
    );
    var Ea = c( (M5, fg) => {
        function IN(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length, o = Array(n); ++r < n; )
                o[r] = t(e[r], r, e);
            return o
        }
        fg.exports = IN
    }
    );
    var mg = c( (q5, hg) => {
        var dg = zt()
          , ON = Ea()
          , wN = we()
          , xN = Wr()
          , AN = 1 / 0
          , pg = dg ? dg.prototype : void 0
          , vg = pg ? pg.toString : void 0;
        function gg(e) {
            if (typeof e == "string")
                return e;
            if (wN(e))
                return ON(e, gg) + "";
            if (xN(e))
                return vg ? vg.call(e) : "";
            var t = e + "";
            return t == "0" && 1 / e == -AN ? "-0" : t
        }
        hg.exports = gg
    }
    );
    var yg = c( (D5, Eg) => {
        var SN = mg();
        function RN(e) {
            return e == null ? "" : SN(e)
        }
        Eg.exports = RN
    }
    );
    var Hr = c( (F5, _g) => {
        var CN = we()
          , LN = jn()
          , NN = lg()
          , PN = yg();
        function MN(e, t) {
            return CN(e) ? e : LN(e, t) ? [e] : NN(PN(e))
        }
        _g.exports = MN
    }
    );
    var ir = c( (G5, bg) => {
        var qN = Wr()
          , DN = 1 / 0;
        function FN(e) {
            if (typeof e == "string" || qN(e))
                return e;
            var t = e + "";
            return t == "0" && 1 / e == -DN ? "-0" : t
        }
        bg.exports = FN
    }
    );
    var zn = c( (U5, Tg) => {
        var GN = Hr()
          , UN = ir();
        function kN(e, t) {
            t = GN(t, e);
            for (var r = 0, n = t.length; e != null && r < n; )
                e = e[UN(t[r++])];
            return r && r == n ? e : void 0
        }
        Tg.exports = kN
    }
    );
    var Kn = c( (k5, Ig) => {
        var VN = zn();
        function WN(e, t, r) {
            var n = e == null ? void 0 : VN(e, t);
            return n === void 0 ? r : n
        }
        Ig.exports = WN
    }
    );
    var wg = c( (V5, Og) => {
        function HN(e, t) {
            return e != null && t in Object(e)
        }
        Og.exports = HN
    }
    );
    var Ag = c( (W5, xg) => {
        var XN = Hr()
          , BN = Fr()
          , jN = we()
          , zN = Un()
          , KN = kn()
          , YN = ir();
        function $N(e, t, r) {
            t = XN(t, e);
            for (var n = -1, o = t.length, i = !1; ++n < o; ) {
                var a = YN(t[n]);
                if (!(i = e != null && r(e, a)))
                    break;
                e = e[a]
            }
            return i || ++n != o ? i : (o = e == null ? 0 : e.length,
            !!o && KN(o) && zN(a, o) && (jN(e) || BN(e)))
        }
        xg.exports = $N
    }
    );
    var Rg = c( (H5, Sg) => {
        var QN = wg()
          , ZN = Ag();
        function JN(e, t) {
            return e != null && ZN(e, t, QN)
        }
        Sg.exports = JN
    }
    );
    var Lg = c( (X5, Cg) => {
        var eP = va()
          , tP = Kn()
          , rP = Rg()
          , nP = jn()
          , iP = ga()
          , oP = ha()
          , aP = ir()
          , sP = 1
          , uP = 2;
        function cP(e, t) {
            return nP(e) && iP(t) ? oP(aP(e), t) : function(r) {
                var n = tP(r, e);
                return n === void 0 && n === t ? rP(r, e) : eP(t, n, sP | uP)
            }
        }
        Cg.exports = cP
    }
    );
    var Yn = c( (B5, Ng) => {
        function lP(e) {
            return e
        }
        Ng.exports = lP
    }
    );
    var ya = c( (j5, Pg) => {
        function fP(e) {
            return function(t) {
                return t?.[e]
            }
        }
        Pg.exports = fP
    }
    );
    var qg = c( (z5, Mg) => {
        var dP = zn();
        function pP(e) {
            return function(t) {
                return dP(t, e)
            }
        }
        Mg.exports = pP
    }
    );
    var Fg = c( (K5, Dg) => {
        var vP = ya()
          , gP = qg()
          , hP = jn()
          , mP = ir();
        function EP(e) {
            return hP(e) ? vP(mP(e)) : gP(e)
        }
        Dg.exports = EP
    }
    );
    var wt = c( (Y5, Gg) => {
        var yP = tg()
          , _P = Lg()
          , bP = Yn()
          , TP = we()
          , IP = Fg();
        function OP(e) {
            return typeof e == "function" ? e : e == null ? bP : typeof e == "object" ? TP(e) ? _P(e[0], e[1]) : yP(e) : IP(e)
        }
        Gg.exports = OP
    }
    );
    var _a = c( ($5, Ug) => {
        var wP = wt()
          , xP = Mt()
          , AP = Vr();
        function SP(e) {
            return function(t, r, n) {
                var o = Object(t);
                if (!xP(t)) {
                    var i = wP(r, 3);
                    t = AP(t),
                    r = function(s) {
                        return i(o[s], s, o)
                    }
                }
                var a = e(t, r, n);
                return a > -1 ? o[i ? t[a] : a] : void 0
            }
        }
        Ug.exports = SP
    }
    );
    var ba = c( (Q5, kg) => {
        function RP(e, t, r, n) {
            for (var o = e.length, i = r + (n ? 1 : -1); n ? i-- : ++i < o; )
                if (t(e[i], i, e))
                    return i;
            return -1
        }
        kg.exports = RP
    }
    );
    var Wg = c( (Z5, Vg) => {
        var CP = /\s/;
        function LP(e) {
            for (var t = e.length; t-- && CP.test(e.charAt(t)); )
                ;
            return t
        }
        Vg.exports = LP
    }
    );
    var Xg = c( (J5, Hg) => {
        var NP = Wg()
          , PP = /^\s+/;
        function MP(e) {
            return e && e.slice(0, NP(e) + 1).replace(PP, "")
        }
        Hg.exports = MP
    }
    );
    var $n = c( (eB, zg) => {
        var qP = Xg()
          , Bg = ut()
          , DP = Wr()
          , jg = 0 / 0
          , FP = /^[-+]0x[0-9a-f]+$/i
          , GP = /^0b[01]+$/i
          , UP = /^0o[0-7]+$/i
          , kP = parseInt;
        function VP(e) {
            if (typeof e == "number")
                return e;
            if (DP(e))
                return jg;
            if (Bg(e)) {
                var t = typeof e.valueOf == "function" ? e.valueOf() : e;
                e = Bg(t) ? t + "" : t
            }
            if (typeof e != "string")
                return e === 0 ? e : +e;
            e = qP(e);
            var r = GP.test(e);
            return r || UP.test(e) ? kP(e.slice(2), r ? 2 : 8) : FP.test(e) ? jg : +e
        }
        zg.exports = VP
    }
    );
    var $g = c( (tB, Yg) => {
        var WP = $n()
          , Kg = 1 / 0
          , HP = 17976931348623157e292;
        function XP(e) {
            if (!e)
                return e === 0 ? e : 0;
            if (e = WP(e),
            e === Kg || e === -Kg) {
                var t = e < 0 ? -1 : 1;
                return t * HP
            }
            return e === e ? e : 0
        }
        Yg.exports = XP
    }
    );
    var Ta = c( (rB, Qg) => {
        var BP = $g();
        function jP(e) {
            var t = BP(e)
              , r = t % 1;
            return t === t ? r ? t - r : t : 0
        }
        Qg.exports = jP
    }
    );
    var Jg = c( (nB, Zg) => {
        var zP = ba()
          , KP = wt()
          , YP = Ta()
          , $P = Math.max;
        function QP(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n)
                return -1;
            var o = r == null ? 0 : YP(r);
            return o < 0 && (o = $P(n + o, 0)),
            zP(e, KP(t, 3), o)
        }
        Zg.exports = QP
    }
    );
    var Ia = c( (iB, eh) => {
        var ZP = _a()
          , JP = Jg()
          , eM = ZP(JP);
        eh.exports = eM
    }
    );
    var nh = {};
    Fe(nh, {
        ELEMENT_MATCHES: () => tM,
        FLEX_PREFIXED: () => Oa,
        IS_BROWSER_ENV: () => Je,
        TRANSFORM_PREFIXED: () => xt,
        TRANSFORM_STYLE_PREFIXED: () => Zn,
        withBrowser: () => Qn
    });
    var rh, Je, Qn, tM, Oa, xt, th, Zn, Jn = me( () => {
        "use strict";
        rh = fe(Ia()),
        Je = typeof window < "u",
        Qn = (e, t) => Je ? e() : t,
        tM = Qn( () => (0,
        rh.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype)),
        Oa = Qn( () => {
            let e = document.createElement("i")
              , t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"]
              , r = "";
            try {
                let {length: n} = t;
                for (let o = 0; o < n; o++) {
                    let i = t[o];
                    if (e.style.display = i,
                    e.style.display === i)
                        return i
                }
                return r
            } catch {
                return r
            }
        }
        , "flex"),
        xt = Qn( () => {
            let e = document.createElement("i");
            if (e.style.transform == null) {
                let t = ["Webkit", "Moz", "ms"]
                  , r = "Transform"
                  , {length: n} = t;
                for (let o = 0; o < n; o++) {
                    let i = t[o] + r;
                    if (e.style[i] !== void 0)
                        return i
                }
            }
            return "transform"
        }
        , "transform"),
        th = xt.split("transform")[0],
        Zn = th ? th + "TransformStyle" : "transformStyle"
    }
    );
    var wa = c( (oB, uh) => {
        var rM = 4
          , nM = .001
          , iM = 1e-7
          , oM = 10
          , Xr = 11
          , ei = 1 / (Xr - 1)
          , aM = typeof Float32Array == "function";
        function ih(e, t) {
            return 1 - 3 * t + 3 * e
        }
        function oh(e, t) {
            return 3 * t - 6 * e
        }
        function ah(e) {
            return 3 * e
        }
        function ti(e, t, r) {
            return ((ih(t, r) * e + oh(t, r)) * e + ah(t)) * e
        }
        function sh(e, t, r) {
            return 3 * ih(t, r) * e * e + 2 * oh(t, r) * e + ah(t)
        }
        function sM(e, t, r, n, o) {
            var i, a, s = 0;
            do
                a = t + (r - t) / 2,
                i = ti(a, n, o) - e,
                i > 0 ? r = a : t = a;
            while (Math.abs(i) > iM && ++s < oM);
            return a
        }
        function uM(e, t, r, n) {
            for (var o = 0; o < rM; ++o) {
                var i = sh(t, r, n);
                if (i === 0)
                    return t;
                var a = ti(t, r, n) - e;
                t -= a / i
            }
            return t
        }
        uh.exports = function(t, r, n, o) {
            if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
                throw new Error("bezier x values must be in [0, 1] range");
            var i = aM ? new Float32Array(Xr) : new Array(Xr);
            if (t !== r || n !== o)
                for (var a = 0; a < Xr; ++a)
                    i[a] = ti(a * ei, t, n);
            function s(u) {
                for (var d = 0, h = 1, g = Xr - 1; h !== g && i[h] <= u; ++h)
                    d += ei;
                --h;
                var m = (u - i[h]) / (i[h + 1] - i[h])
                  , E = d + m * ei
                  , T = sh(E, t, n);
                return T >= nM ? uM(u, E, t, n) : T === 0 ? E : sM(u, d, d + ei, t, n)
            }
            return function(d) {
                return t === r && n === o ? d : d === 0 ? 0 : d === 1 ? 1 : ti(s(d), r, o)
            }
        }
    }
    );
    var jr = {};
    Fe(jr, {
        bounce: () => XM,
        bouncePast: () => BM,
        ease: () => cM,
        easeIn: () => lM,
        easeInOut: () => dM,
        easeOut: () => fM,
        inBack: () => qM,
        inCirc: () => LM,
        inCubic: () => hM,
        inElastic: () => GM,
        inExpo: () => SM,
        inOutBack: () => FM,
        inOutCirc: () => PM,
        inOutCubic: () => EM,
        inOutElastic: () => kM,
        inOutExpo: () => CM,
        inOutQuad: () => gM,
        inOutQuart: () => bM,
        inOutQuint: () => OM,
        inOutSine: () => AM,
        inQuad: () => pM,
        inQuart: () => yM,
        inQuint: () => TM,
        inSine: () => wM,
        outBack: () => DM,
        outBounce: () => MM,
        outCirc: () => NM,
        outCubic: () => mM,
        outElastic: () => UM,
        outExpo: () => RM,
        outQuad: () => vM,
        outQuart: () => _M,
        outQuint: () => IM,
        outSine: () => xM,
        swingFrom: () => WM,
        swingFromTo: () => VM,
        swingTo: () => HM
    });
    function pM(e) {
        return Math.pow(e, 2)
    }
    function vM(e) {
        return -(Math.pow(e - 1, 2) - 1)
    }
    function gM(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
    }
    function hM(e) {
        return Math.pow(e, 3)
    }
    function mM(e) {
        return Math.pow(e - 1, 3) + 1
    }
    function EM(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
    }
    function yM(e) {
        return Math.pow(e, 4)
    }
    function _M(e) {
        return -(Math.pow(e - 1, 4) - 1)
    }
    function bM(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
    }
    function TM(e) {
        return Math.pow(e, 5)
    }
    function IM(e) {
        return Math.pow(e - 1, 5) + 1
    }
    function OM(e) {
        return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
    }
    function wM(e) {
        return -Math.cos(e * (Math.PI / 2)) + 1
    }
    function xM(e) {
        return Math.sin(e * (Math.PI / 2))
    }
    function AM(e) {
        return -.5 * (Math.cos(Math.PI * e) - 1)
    }
    function SM(e) {
        return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
    }
    function RM(e) {
        return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
    }
    function CM(e) {
        return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
    }
    function LM(e) {
        return -(Math.sqrt(1 - e * e) - 1)
    }
    function NM(e) {
        return Math.sqrt(1 - Math.pow(e - 1, 2))
    }
    function PM(e) {
        return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
    }
    function MM(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }
    function qM(e) {
        let t = gt;
        return e * e * ((t + 1) * e - t)
    }
    function DM(e) {
        let t = gt;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }
    function FM(e) {
        let t = gt;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }
    function GM(e) {
        let t = gt
          , r = 0
          , n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3),
        n < 1 ? (n = 1,
        t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n),
        -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
    }
    function UM(e) {
        let t = gt
          , r = 0
          , n = 1;
        return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3),
        n < 1 ? (n = 1,
        t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n),
        n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
    }
    function kM(e) {
        let t = gt
          , r = 0
          , n = 1;
        return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5),
        n < 1 ? (n = 1,
        t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n),
        e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
    }
    function VM(e) {
        let t = gt;
        return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
    }
    function WM(e) {
        let t = gt;
        return e * e * ((t + 1) * e - t)
    }
    function HM(e) {
        let t = gt;
        return (e -= 1) * e * ((t + 1) * e + t) + 1
    }
    function XM(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
    }
    function BM(e) {
        return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
    }
    var Br, gt, cM, lM, fM, dM, xa = me( () => {
        "use strict";
        Br = fe(wa()),
        gt = 1.70158,
        cM = (0,
        Br.default)(.25, .1, .25, 1),
        lM = (0,
        Br.default)(.42, 0, 1, 1),
        fM = (0,
        Br.default)(0, 0, .58, 1),
        dM = (0,
        Br.default)(.42, 0, .58, 1)
    }
    );
    var lh = {};
    Fe(lh, {
        applyEasing: () => zM,
        createBezierEasing: () => jM,
        optimizeFloat: () => zr
    });
    function zr(e, t=5, r=10) {
        let n = Math.pow(r, t)
          , o = Number(Math.round(e * n) / n);
        return Math.abs(o) > 1e-4 ? o : 0
    }
    function jM(e) {
        return (0,
        ch.default)(...e)
    }
    function zM(e, t, r) {
        return t === 0 ? 0 : t === 1 ? 1 : zr(r ? t > 0 ? r(t) : t : t > 0 && e && jr[e] ? jr[e](t) : t)
    }
    var ch, Aa = me( () => {
        "use strict";
        xa();
        ch = fe(wa())
    }
    );
    var ph = {};
    Fe(ph, {
        createElementState: () => dh,
        ixElements: () => sq,
        mergeActionState: () => Sa
    });
    function dh(e, t, r, n, o) {
        let i = r === KM ? (0,
        or.getIn)(o, ["config", "target", "objectId"]) : null;
        return (0,
        or.mergeIn)(e, [n], {
            id: n,
            ref: t,
            refId: i,
            refType: r
        })
    }
    function Sa(e, t, r, n, o) {
        let i = cq(o);
        return (0,
        or.mergeIn)(e, [t, aq, r], n, i)
    }
    function cq(e) {
        let {config: t} = e;
        return uq.reduce( (r, n) => {
            let o = n[0]
              , i = n[1]
              , a = t[o]
              , s = t[i];
            return a != null && s != null && (r[i] = s),
            r
        }
        , {})
    }
    var or, sB, KM, uB, YM, $M, QM, ZM, JM, eq, tq, rq, nq, iq, oq, fh, aq, sq, uq, vh = me( () => {
        "use strict";
        or = fe($t());
        ke();
        ({HTML_ELEMENT: sB, PLAIN_OBJECT: KM, ABSTRACT_NODE: uB, CONFIG_X_VALUE: YM, CONFIG_Y_VALUE: $M, CONFIG_Z_VALUE: QM, CONFIG_VALUE: ZM, CONFIG_X_UNIT: JM, CONFIG_Y_UNIT: eq, CONFIG_Z_UNIT: tq, CONFIG_UNIT: rq} = Re),
        {IX2_SESSION_STOPPED: nq, IX2_INSTANCE_ADDED: iq, IX2_ELEMENT_STATE_CHANGED: oq} = Ie,
        fh = {},
        aq = "refState",
        sq = (e=fh, t={}) => {
            switch (t.type) {
            case nq:
                return fh;
            case iq:
                {
                    let {elementId: r, element: n, origin: o, actionItem: i, refType: a} = t.payload
                      , {actionTypeId: s} = i
                      , u = e;
                    return (0,
                    or.getIn)(u, [r, n]) !== n && (u = dh(u, n, a, r, i)),
                    Sa(u, r, s, o, i)
                }
            case oq:
                {
                    let {elementId: r, actionTypeId: n, current: o, actionItem: i} = t.payload;
                    return Sa(e, r, n, o, i)
                }
            default:
                return e
            }
        }
        ;
        uq = [[YM, JM], [$M, eq], [QM, tq], [ZM, rq]]
    }
    );
    var gh = c(xe => {
        "use strict";
        Object.defineProperty(xe, "__esModule", {
            value: !0
        });
        xe.renderPlugin = xe.getPluginOrigin = xe.getPluginDuration = xe.getPluginDestination = xe.getPluginConfig = xe.createPluginInstance = xe.clearPlugin = void 0;
        var lq = e => e.value;
        xe.getPluginConfig = lq;
        var fq = (e, t) => {
            if (t.config.duration !== "auto")
                return null;
            let r = parseFloat(e.getAttribute("data-duration"));
            return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
        }
        ;
        xe.getPluginDuration = fq;
        var dq = e => e || {
            value: 0
        };
        xe.getPluginOrigin = dq;
        var pq = e => ({
            value: e.value
        });
        xe.getPluginDestination = pq;
        var vq = e => {
            let t = window.Webflow.require("lottie").createInstance(e);
            return t.stop(),
            t.setSubframe(!0),
            t
        }
        ;
        xe.createPluginInstance = vq;
        var gq = (e, t, r) => {
            if (!e)
                return;
            let n = t[r.actionTypeId].value / 100;
            e.goToFrame(e.frames * n)
        }
        ;
        xe.renderPlugin = gq;
        var hq = e => {
            window.Webflow.require("lottie").createInstance(e).stop()
        }
        ;
        xe.clearPlugin = hq
    }
    );
    var mh = c(Ae => {
        "use strict";
        Object.defineProperty(Ae, "__esModule", {
            value: !0
        });
        Ae.renderPlugin = Ae.getPluginOrigin = Ae.getPluginDuration = Ae.getPluginDestination = Ae.getPluginConfig = Ae.createPluginInstance = Ae.clearPlugin = void 0;
        var mq = e => document.querySelector(`[data-w-id="${e}"]`)
          , Eq = () => window.Webflow.require("spline")
          , yq = (e, t) => e.filter(r => !t.includes(r))
          , _q = (e, t) => e.value[t];
        Ae.getPluginConfig = _q;
        var bq = () => null;
        Ae.getPluginDuration = bq;
        var hh = Object.freeze({
            positionX: 0,
            positionY: 0,
            positionZ: 0,
            rotationX: 0,
            rotationY: 0,
            rotationZ: 0,
            scaleX: 1,
            scaleY: 1,
            scaleZ: 1
        })
          , Tq = (e, t) => {
            let r = t.config.value
              , n = Object.keys(r);
            if (e) {
                let i = Object.keys(e)
                  , a = yq(n, i);
                return a.length ? a.reduce( (u, d) => (u[d] = hh[d],
                u), e) : e
            }
            return n.reduce( (i, a) => (i[a] = hh[a],
            i), {})
        }
        ;
        Ae.getPluginOrigin = Tq;
        var Iq = e => e.value;
        Ae.getPluginDestination = Iq;
        var Oq = (e, t) => {
            var r, n;
            let o = t == null || (r = t.config) === null || r === void 0 || (n = r.target) === null || n === void 0 ? void 0 : n.pluginElement;
            return o ? mq(o) : null
        }
        ;
        Ae.createPluginInstance = Oq;
        var wq = (e, t, r) => {
            let n = Eq()
              , o = n.getInstance(e)
              , i = r.config.target.objectId
              , a = s => {
                if (!s)
                    throw new Error("Invalid spline app passed to renderSpline");
                let u = i && s.findObjectById(i);
                if (!u)
                    return;
                let {PLUGIN_SPLINE: d} = t;
                d.positionX != null && (u.position.x = d.positionX),
                d.positionY != null && (u.position.y = d.positionY),
                d.positionZ != null && (u.position.z = d.positionZ),
                d.rotationX != null && (u.rotation.x = d.rotationX),
                d.rotationY != null && (u.rotation.y = d.rotationY),
                d.rotationZ != null && (u.rotation.z = d.rotationZ),
                d.scaleX != null && (u.scale.x = d.scaleX),
                d.scaleY != null && (u.scale.y = d.scaleY),
                d.scaleZ != null && (u.scale.z = d.scaleZ)
            }
            ;
            o ? a(o.spline) : n.setLoadHandler(e, a)
        }
        ;
        Ae.renderPlugin = wq;
        var xq = () => null;
        Ae.clearPlugin = xq
    }
    );
    var yh = c(Oe => {
        "use strict";
        Object.defineProperty(Oe, "__esModule", {
            value: !0
        });
        Oe.getPluginOrigin = Oe.getPluginDuration = Oe.getPluginDestination = Oe.getPluginConfig = Oe.createPluginInstance = Oe.clearPlugin = void 0;
        Oe.normalizeColor = Eh;
        Oe.renderPlugin = void 0;
        function Eh(e) {
            let t, r, n, o = 1, i = e.replace(/\s/g, "").toLowerCase();
            if (i.startsWith("#")) {
                let a = i.substring(1);
                a.length === 3 ? (t = parseInt(a[0] + a[0], 16),
                r = parseInt(a[1] + a[1], 16),
                n = parseInt(a[2] + a[2], 16)) : a.length === 6 && (t = parseInt(a.substring(0, 2), 16),
                r = parseInt(a.substring(2, 4), 16),
                n = parseInt(a.substring(4, 6), 16))
            } else if (i.startsWith("rgba")) {
                let a = i.match(/rgba\(([^)]+)\)/)[1].split(",");
                t = parseInt(a[0], 10),
                r = parseInt(a[1], 10),
                n = parseInt(a[2], 10),
                o = parseFloat(a[3])
            } else if (i.startsWith("rgb")) {
                let a = i.match(/rgb\(([^)]+)\)/)[1].split(",");
                t = parseInt(a[0], 10),
                r = parseInt(a[1], 10),
                n = parseInt(a[2], 10)
            } else if (i.startsWith("hsla")) {
                let a = i.match(/hsla\(([^)]+)\)/)[1].split(",")
                  , s = parseFloat(a[0])
                  , u = parseFloat(a[1].replace("%", "")) / 100
                  , d = parseFloat(a[2].replace("%", "")) / 100;
                o = parseFloat(a[3]);
                let h = (1 - Math.abs(2 * d - 1)) * u, g = h * (1 - Math.abs(s / 60 % 2 - 1)), m = d - h / 2, E, T, I;
                s >= 0 && s < 60 ? (E = h,
                T = g,
                I = 0) : s >= 60 && s < 120 ? (E = g,
                T = h,
                I = 0) : s >= 120 && s < 180 ? (E = 0,
                T = h,
                I = g) : s >= 180 && s < 240 ? (E = 0,
                T = g,
                I = h) : s >= 240 && s < 300 ? (E = g,
                T = 0,
                I = h) : (E = h,
                T = 0,
                I = g),
                t = Math.round((E + m) * 255),
                r = Math.round((T + m) * 255),
                n = Math.round((I + m) * 255)
            } else if (i.startsWith("hsl")) {
                let a = i.match(/hsl\(([^)]+)\)/)[1].split(","), s = parseFloat(a[0]), u = parseFloat(a[1].replace("%", "")) / 100, d = parseFloat(a[2].replace("%", "")) / 100, h = (1 - Math.abs(2 * d - 1)) * u, g = h * (1 - Math.abs(s / 60 % 2 - 1)), m = d - h / 2, E, T, I;
                s >= 0 && s < 60 ? (E = h,
                T = g,
                I = 0) : s >= 60 && s < 120 ? (E = g,
                T = h,
                I = 0) : s >= 120 && s < 180 ? (E = 0,
                T = h,
                I = g) : s >= 180 && s < 240 ? (E = 0,
                T = g,
                I = h) : s >= 240 && s < 300 ? (E = g,
                T = 0,
                I = h) : (E = h,
                T = 0,
                I = g),
                t = Math.round((E + m) * 255),
                r = Math.round((T + m) * 255),
                n = Math.round((I + m) * 255)
            }
            return (Number.isNaN(t) || Number.isNaN(r) || Number.isNaN(n)) && `${e}`,
            {
                red: t,
                green: r,
                blue: n,
                alpha: o
            }
        }
        var Aq = (e, t) => e.value[t];
        Oe.getPluginConfig = Aq;
        var Sq = () => null;
        Oe.getPluginDuration = Sq;
        var Rq = (e, t) => {
            if (e)
                return e;
            let r = t.config.value
              , n = t.config.target.objectId
              , o = getComputedStyle(document.documentElement).getPropertyValue(n);
            if (r.size != null)
                return {
                    size: parseInt(o, 10)
                };
            if (r.red != null && r.green != null && r.blue != null)
                return Eh(o)
        }
        ;
        Oe.getPluginOrigin = Rq;
        var Cq = e => e.value;
        Oe.getPluginDestination = Cq;
        var Lq = () => null;
        Oe.createPluginInstance = Lq;
        var Nq = (e, t, r) => {
            let n = r.config.target.objectId, o = r.config.value.unit, {PLUGIN_VARIABLE: i} = t, {size: a, red: s, green: u, blue: d, alpha: h} = i, g;
            a != null && (g = a + o),
            s != null && d != null && u != null && h != null && (g = `rgba(${s}, ${u}, ${d}, ${h})`),
            g != null && document.documentElement.style.setProperty(n, g)
        }
        ;
        Oe.renderPlugin = Nq;
        var Pq = (e, t) => {
            let r = t.config.target.objectId;
            document.documentElement.style.removeProperty(r)
        }
        ;
        Oe.clearPlugin = Pq
    }
    );
    var _h = c(ri => {
        "use strict";
        var Ca = pn().default;
        Object.defineProperty(ri, "__esModule", {
            value: !0
        });
        ri.pluginMethodMap = void 0;
        var Ra = (ke(),
        nt(xf))
          , Mq = Ca(gh())
          , qq = Ca(mh())
          , Dq = Ca(yh())
          , dB = ri.pluginMethodMap = new Map([[Ra.ActionTypeConsts.PLUGIN_LOTTIE, {
            ...Mq
        }], [Ra.ActionTypeConsts.PLUGIN_SPLINE, {
            ...qq
        }], [Ra.ActionTypeConsts.PLUGIN_VARIABLE, {
            ...Dq
        }]])
    }
    );
    var bh = {};
    Fe(bh, {
        clearPlugin: () => Da,
        createPluginInstance: () => Gq,
        getPluginConfig: () => Na,
        getPluginDestination: () => Ma,
        getPluginDuration: () => Fq,
        getPluginOrigin: () => Pa,
        isPluginType: () => Dt,
        renderPlugin: () => qa
    });
    function Dt(e) {
        return La.pluginMethodMap.has(e)
    }
    var La, Ft, Na, Pa, Fq, Ma, Gq, qa, Da, Fa = me( () => {
        "use strict";
        Jn();
        La = fe(_h());
        Ft = e => t => {
            if (!Je)
                return () => null;
            let r = La.pluginMethodMap.get(t);
            if (!r)
                throw new Error(`IX2 no plugin configured for: ${t}`);
            let n = r[e];
            if (!n)
                throw new Error(`IX2 invalid plugin method: ${e}`);
            return n
        }
        ,
        Na = Ft("getPluginConfig"),
        Pa = Ft("getPluginOrigin"),
        Fq = Ft("getPluginDuration"),
        Ma = Ft("getPluginDestination"),
        Gq = Ft("createPluginInstance"),
        qa = Ft("renderPlugin"),
        Da = Ft("clearPlugin")
    }
    );
    var Ih = c( (gB, Th) => {
        function Uq(e, t) {
            return e == null || e !== e ? t : e
        }
        Th.exports = Uq
    }
    );
    var wh = c( (hB, Oh) => {
        function kq(e, t, r, n) {
            var o = -1
              , i = e == null ? 0 : e.length;
            for (n && i && (r = e[++o]); ++o < i; )
                r = t(r, e[o], o, e);
            return r
        }
        Oh.exports = kq
    }
    );
    var Ah = c( (mB, xh) => {
        function Vq(e) {
            return function(t, r, n) {
                for (var o = -1, i = Object(t), a = n(t), s = a.length; s--; ) {
                    var u = a[e ? s : ++o];
                    if (r(i[u], u, i) === !1)
                        break
                }
                return t
            }
        }
        xh.exports = Vq
    }
    );
    var Rh = c( (EB, Sh) => {
        var Wq = Ah()
          , Hq = Wq();
        Sh.exports = Hq
    }
    );
    var Ga = c( (yB, Ch) => {
        var Xq = Rh()
          , Bq = Vr();
        function jq(e, t) {
            return e && Xq(e, t, Bq)
        }
        Ch.exports = jq
    }
    );
    var Nh = c( (_B, Lh) => {
        var zq = Mt();
        function Kq(e, t) {
            return function(r, n) {
                if (r == null)
                    return r;
                if (!zq(r))
                    return e(r, n);
                for (var o = r.length, i = t ? o : -1, a = Object(r); (t ? i-- : ++i < o) && n(a[i], i, a) !== !1; )
                    ;
                return r
            }
        }
        Lh.exports = Kq
    }
    );
    var Ua = c( (bB, Ph) => {
        var Yq = Ga()
          , $q = Nh()
          , Qq = $q(Yq);
        Ph.exports = Qq
    }
    );
    var qh = c( (TB, Mh) => {
        function Zq(e, t, r, n, o) {
            return o(e, function(i, a, s) {
                r = n ? (n = !1,
                i) : t(r, i, a, s)
            }),
            r
        }
        Mh.exports = Zq
    }
    );
    var Fh = c( (IB, Dh) => {
        var Jq = wh()
          , e1 = Ua()
          , t1 = wt()
          , r1 = qh()
          , n1 = we();
        function i1(e, t, r) {
            var n = n1(e) ? Jq : r1
              , o = arguments.length < 3;
            return n(e, t1(t, 4), r, o, e1)
        }
        Dh.exports = i1
    }
    );
    var Uh = c( (OB, Gh) => {
        var o1 = ba()
          , a1 = wt()
          , s1 = Ta()
          , u1 = Math.max
          , c1 = Math.min;
        function l1(e, t, r) {
            var n = e == null ? 0 : e.length;
            if (!n)
                return -1;
            var o = n - 1;
            return r !== void 0 && (o = s1(r),
            o = r < 0 ? u1(n + o, 0) : c1(o, n - 1)),
            o1(e, a1(t, 3), o, !0)
        }
        Gh.exports = l1
    }
    );
    var Vh = c( (wB, kh) => {
        var f1 = _a()
          , d1 = Uh()
          , p1 = f1(d1);
        kh.exports = p1
    }
    );
    function Wh(e, t) {
        return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
    }
    function g1(e, t) {
        if (Wh(e, t))
            return !0;
        if (typeof e != "object" || e === null || typeof t != "object" || t === null)
            return !1;
        let r = Object.keys(e)
          , n = Object.keys(t);
        if (r.length !== n.length)
            return !1;
        for (let o = 0; o < r.length; o++)
            if (!v1.call(t, r[o]) || !Wh(e[r[o]], t[r[o]]))
                return !1;
        return !0
    }
    var v1, ka, Hh = me( () => {
        "use strict";
        v1 = Object.prototype.hasOwnProperty;
        ka = g1
    }
    );
    var am = {};
    Fe(am, {
        cleanupHTMLElement: () => dD,
        clearAllStyles: () => fD,
        clearObjectCache: () => N1,
        getActionListProgress: () => vD,
        getAffectedElements: () => Ba,
        getComputedStyle: () => k1,
        getDestinationValues: () => z1,
        getElementId: () => D1,
        getInstanceId: () => M1,
        getInstanceOrigin: () => H1,
        getItemConfigByKey: () => j1,
        getMaxDurationItemIndex: () => om,
        getNamespacedParameterId: () => mD,
        getRenderType: () => rm,
        getStyleProp: () => K1,
        mediaQueriesEqual: () => yD,
        observeStore: () => U1,
        reduceListToGroup: () => gD,
        reifyState: () => F1,
        renderHTMLElement: () => Y1,
        shallowEqual: () => ka,
        shouldAllowMediaQuery: () => ED,
        shouldNamespaceEventParameter: () => hD,
        stringifyTarget: () => _D
    });
    function N1() {
        ni.clear()
    }
    function M1() {
        return "i" + P1++
    }
    function D1(e, t) {
        for (let r in e) {
            let n = e[r];
            if (n && n.ref === t)
                return n.id
        }
        return "e" + q1++
    }
    function F1({events: e, actionLists: t, site: r}={}) {
        let n = (0,
        si.default)(e, (a, s) => {
            let {eventTypeId: u} = s;
            return a[u] || (a[u] = {}),
            a[u][s.id] = s,
            a
        }
        , {})
          , o = r && r.mediaQueries
          , i = [];
        return o ? i = o.map(a => a.key) : (o = [],
        console.warn("IX2 missing mediaQueries in site data")),
        {
            ixData: {
                events: e,
                actionLists: t,
                eventTypeMap: n,
                mediaQueries: o,
                mediaQueryKeys: i
            }
        }
    }
    function U1({store: e, select: t, onChange: r, comparator: n=G1}) {
        let {getState: o, subscribe: i} = e
          , a = i(u)
          , s = t(o());
        function u() {
            let d = t(o());
            if (d == null) {
                a();
                return
            }
            n(d, s) || (s = d,
            r(s, e))
        }
        return a
    }
    function jh(e) {
        let t = typeof e;
        if (t === "string")
            return {
                id: e
            };
        if (e != null && t === "object") {
            let {id: r, objectId: n, selector: o, selectorGuids: i, appliesTo: a, useEventTarget: s} = e;
            return {
                id: r,
                objectId: n,
                selector: o,
                selectorGuids: i,
                appliesTo: a,
                useEventTarget: s
            }
        }
        return {}
    }
    function Ba({config: e, event: t, eventTarget: r, elementRoot: n, elementApi: o}) {
        if (!o)
            throw new Error("IX2 missing elementApi");
        let {targets: i} = e;
        if (Array.isArray(i) && i.length > 0)
            return i.reduce( (U, x) => U.concat(Ba({
                config: {
                    target: x
                },
                event: t,
                eventTarget: r,
                elementRoot: n,
                elementApi: o
            })), []);
        let {getValidDocument: a, getQuerySelector: s, queryDocument: u, getChildElements: d, getSiblingElements: h, matchSelector: g, elementContains: m, isSiblingNode: E} = o
          , {target: T} = e;
        if (!T)
            return [];
        let {id: I, objectId: D, selector: S, selectorGuids: L, appliesTo: R, useEventTarget: P} = jh(T);
        if (D)
            return [ni.has(D) ? ni.get(D) : ni.set(D, {}).get(D)];
        if (R === jo.PAGE) {
            let U = a(I);
            return U ? [U] : []
        }
        let M = (t?.action?.config?.affectedElements ?? {})[I || S] || {}, X = !!(M.id || M.selector), K, $, J, ee = t && s(jh(t.target));
        if (X ? (K = M.limitAffectedElements,
        $ = ee,
        J = s(M)) : $ = J = s({
            id: I,
            selector: S,
            selectorGuids: L
        }),
        t && P) {
            let U = r && (J || P === !0) ? [r] : u(ee);
            if (J) {
                if (P === R1)
                    return u(J).filter(x => U.some(F => m(x, F)));
                if (P === Xh)
                    return u(J).filter(x => U.some(F => m(F, x)));
                if (P === Bh)
                    return u(J).filter(x => U.some(F => E(F, x)))
            }
            return U
        }
        return $ == null || J == null ? [] : Je && n ? u(J).filter(U => n.contains(U)) : K === Xh ? u($, J) : K === S1 ? d(u($)).filter(g(J)) : K === Bh ? h(u($)).filter(g(J)) : u(J)
    }
    function k1({element: e, actionItem: t}) {
        if (!Je)
            return {};
        let {actionTypeId: r} = t;
        switch (r) {
        case lr:
        case fr:
        case dr:
        case pr:
        case ci:
            return window.getComputedStyle(e);
        default:
            return {}
        }
    }
    function H1(e, t={}, r={}, n, o) {
        let {getStyle: i} = o
          , {actionTypeId: a} = n;
        if (Dt(a))
            return Pa(a)(t[a], n);
        switch (n.actionTypeId) {
        case sr:
        case ur:
        case cr:
        case Qr:
            return t[n.actionTypeId] || ja[n.actionTypeId];
        case Zr:
            return V1(t[n.actionTypeId], n.config.filters);
        case Jr:
            return W1(t[n.actionTypeId], n.config.fontVariations);
        case Jh:
            return {
                value: (0,
                ht.default)(parseFloat(i(e, oi)), 1)
            };
        case lr:
            {
                let s = i(e, ct), u = i(e, lt), d, h;
                return n.config.widthUnit === At ? d = zh.test(s) ? parseFloat(s) : parseFloat(r.width) : d = (0,
                ht.default)(parseFloat(s), parseFloat(r.width)),
                n.config.heightUnit === At ? h = zh.test(u) ? parseFloat(u) : parseFloat(r.height) : h = (0,
                ht.default)(parseFloat(u), parseFloat(r.height)),
                {
                    widthValue: d,
                    heightValue: h
                }
            }
        case fr:
        case dr:
        case pr:
            return uD({
                element: e,
                actionTypeId: n.actionTypeId,
                computedStyle: r,
                getStyle: i
            });
        case ci:
            return {
                value: (0,
                ht.default)(i(e, ai), r.display)
            };
        case L1:
            return t[n.actionTypeId] || {
                value: 0
            };
        default:
            return
        }
    }
    function z1({element: e, actionItem: t, elementApi: r}) {
        if (Dt(t.actionTypeId))
            return Ma(t.actionTypeId)(t.config);
        switch (t.actionTypeId) {
        case sr:
        case ur:
        case cr:
        case Qr:
            {
                let {xValue: n, yValue: o, zValue: i} = t.config;
                return {
                    xValue: n,
                    yValue: o,
                    zValue: i
                }
            }
        case lr:
            {
                let {getStyle: n, setStyle: o, getProperty: i} = r
                  , {widthUnit: a, heightUnit: s} = t.config
                  , {widthValue: u, heightValue: d} = t.config;
                if (!Je)
                    return {
                        widthValue: u,
                        heightValue: d
                    };
                if (a === At) {
                    let h = n(e, ct);
                    o(e, ct, ""),
                    u = i(e, "offsetWidth"),
                    o(e, ct, h)
                }
                if (s === At) {
                    let h = n(e, lt);
                    o(e, lt, ""),
                    d = i(e, "offsetHeight"),
                    o(e, lt, h)
                }
                return {
                    widthValue: u,
                    heightValue: d
                }
            }
        case fr:
        case dr:
        case pr:
            {
                let {rValue: n, gValue: o, bValue: i, aValue: a} = t.config;
                return {
                    rValue: n,
                    gValue: o,
                    bValue: i,
                    aValue: a
                }
            }
        case Zr:
            return t.config.filters.reduce(X1, {});
        case Jr:
            return t.config.fontVariations.reduce(B1, {});
        default:
            {
                let {value: n} = t.config;
                return {
                    value: n
                }
            }
        }
    }
    function rm(e) {
        if (/^TRANSFORM_/.test(e))
            return Qh;
        if (/^STYLE_/.test(e))
            return Ha;
        if (/^GENERAL_/.test(e))
            return Wa;
        if (/^PLUGIN_/.test(e))
            return Zh
    }
    function K1(e, t) {
        return e === Ha ? t.replace("STYLE_", "").toLowerCase() : null
    }
    function Y1(e, t, r, n, o, i, a, s, u) {
        switch (s) {
        case Qh:
            return eD(e, t, r, o, a);
        case Ha:
            return cD(e, t, r, o, i, a);
        case Wa:
            return lD(e, o, a);
        case Zh:
            {
                let {actionTypeId: d} = o;
                if (Dt(d))
                    return qa(d)(u, t, o)
            }
        }
    }
    function eD(e, t, r, n, o) {
        let i = J1.map(s => {
            let u = ja[s]
              , {xValue: d=u.xValue, yValue: h=u.yValue, zValue: g=u.zValue, xUnit: m="", yUnit: E="", zUnit: T=""} = t[s] || {};
            switch (s) {
            case sr:
                return `${E1}(${d}${m}, ${h}${E}, ${g}${T})`;
            case ur:
                return `${y1}(${d}${m}, ${h}${E}, ${g}${T})`;
            case cr:
                return `${_1}(${d}${m}) ${b1}(${h}${E}) ${T1}(${g}${T})`;
            case Qr:
                return `${I1}(${d}${m}, ${h}${E})`;
            default:
                return ""
            }
        }
        ).join(" ")
          , {setStyle: a} = o;
        Gt(e, xt, o),
        a(e, xt, i),
        nD(n, r) && a(e, Zn, O1)
    }
    function tD(e, t, r, n) {
        let o = (0,
        si.default)(t, (a, s, u) => `${a} ${u}(${s}${Z1(u, r)})`, "")
          , {setStyle: i} = n;
        Gt(e, Kr, n),
        i(e, Kr, o)
    }
    function rD(e, t, r, n) {
        let o = (0,
        si.default)(t, (a, s, u) => (a.push(`"${u}" ${s}`),
        a), []).join(", ")
          , {setStyle: i} = n;
        Gt(e, Yr, n),
        i(e, Yr, o)
    }
    function nD({actionTypeId: e}, {xValue: t, yValue: r, zValue: n}) {
        return e === sr && n !== void 0 || e === ur && n !== void 0 || e === cr && (t !== void 0 || r !== void 0)
    }
    function sD(e, t) {
        let r = e.exec(t);
        return r ? r[1] : ""
    }
    function uD({element: e, actionTypeId: t, computedStyle: r, getStyle: n}) {
        let o = Xa[t]
          , i = n(e, o)
          , a = oD.test(i) ? i : r[o]
          , s = sD(aD, a).split($r);
        return {
            rValue: (0,
            ht.default)(parseInt(s[0], 10), 255),
            gValue: (0,
            ht.default)(parseInt(s[1], 10), 255),
            bValue: (0,
            ht.default)(parseInt(s[2], 10), 255),
            aValue: (0,
            ht.default)(parseFloat(s[3]), 1)
        }
    }
    function cD(e, t, r, n, o, i) {
        let {setStyle: a} = i;
        switch (n.actionTypeId) {
        case lr:
            {
                let {widthUnit: s="", heightUnit: u=""} = n.config
                  , {widthValue: d, heightValue: h} = r;
                d !== void 0 && (s === At && (s = "px"),
                Gt(e, ct, i),
                a(e, ct, d + s)),
                h !== void 0 && (u === At && (u = "px"),
                Gt(e, lt, i),
                a(e, lt, h + u));
                break
            }
        case Zr:
            {
                tD(e, r, n.config, i);
                break
            }
        case Jr:
            {
                rD(e, r, n.config, i);
                break
            }
        case fr:
        case dr:
        case pr:
            {
                let s = Xa[n.actionTypeId]
                  , u = Math.round(r.rValue)
                  , d = Math.round(r.gValue)
                  , h = Math.round(r.bValue)
                  , g = r.aValue;
                Gt(e, s, i),
                a(e, s, g >= 1 ? `rgb(${u},${d},${h})` : `rgba(${u},${d},${h},${g})`);
                break
            }
        default:
            {
                let {unit: s=""} = n.config;
                Gt(e, o, i),
                a(e, o, r.value + s);
                break
            }
        }
    }
    function lD(e, t, r) {
        let {setStyle: n} = r;
        switch (t.actionTypeId) {
        case ci:
            {
                let {value: o} = t.config;
                o === w1 && Je ? n(e, ai, Oa) : n(e, ai, o);
                return
            }
        }
    }
    function Gt(e, t, r) {
        if (!Je)
            return;
        let n = tm[t];
        if (!n)
            return;
        let {getStyle: o, setStyle: i} = r
          , a = o(e, ar);
        if (!a) {
            i(e, ar, n);
            return
        }
        let s = a.split($r).map(em);
        s.indexOf(n) === -1 && i(e, ar, s.concat(n).join($r))
    }
    function nm(e, t, r) {
        if (!Je)
            return;
        let n = tm[t];
        if (!n)
            return;
        let {getStyle: o, setStyle: i} = r
          , a = o(e, ar);
        !a || a.indexOf(n) === -1 || i(e, ar, a.split($r).map(em).filter(s => s !== n).join($r))
    }
    function fD({store: e, elementApi: t}) {
        let {ixData: r} = e.getState()
          , {events: n={}, actionLists: o={}} = r;
        Object.keys(n).forEach(i => {
            let a = n[i]
              , {config: s} = a.action
              , {actionListId: u} = s
              , d = o[u];
            d && Kh({
                actionList: d,
                event: a,
                elementApi: t
            })
        }
        ),
        Object.keys(o).forEach(i => {
            Kh({
                actionList: o[i],
                elementApi: t
            })
        }
        )
    }
    function Kh({actionList: e={}, event: t, elementApi: r}) {
        let {actionItemGroups: n, continuousParameterGroups: o} = e;
        n && n.forEach(i => {
            Yh({
                actionGroup: i,
                event: t,
                elementApi: r
            })
        }
        ),
        o && o.forEach(i => {
            let {continuousActionGroups: a} = i;
            a.forEach(s => {
                Yh({
                    actionGroup: s,
                    event: t,
                    elementApi: r
                })
            }
            )
        }
        )
    }
    function Yh({actionGroup: e, event: t, elementApi: r}) {
        let {actionItems: n} = e;
        n.forEach(o => {
            let {actionTypeId: i, config: a} = o, s;
            Dt(i) ? s = u => Da(i)(u, o) : s = im({
                effect: pD,
                actionTypeId: i,
                elementApi: r
            }),
            Ba({
                config: a,
                event: t,
                elementApi: r
            }).forEach(s)
        }
        )
    }
    function dD(e, t, r) {
        let {setStyle: n, getStyle: o} = r
          , {actionTypeId: i} = t;
        if (i === lr) {
            let {config: a} = t;
            a.widthUnit === At && n(e, ct, ""),
            a.heightUnit === At && n(e, lt, "")
        }
        o(e, ar) && im({
            effect: nm,
            actionTypeId: i,
            elementApi: r
        })(e)
    }
    function pD(e, t, r) {
        let {setStyle: n} = r;
        nm(e, t, r),
        n(e, t, ""),
        t === xt && n(e, Zn, "")
    }
    function om(e) {
        let t = 0
          , r = 0;
        return e.forEach( (n, o) => {
            let {config: i} = n
              , a = i.delay + i.duration;
            a >= t && (t = a,
            r = o)
        }
        ),
        r
    }
    function vD(e, t) {
        let {actionItemGroups: r, useFirstGroupAsInitialState: n} = e
          , {actionItem: o, verboseTimeElapsed: i=0} = t
          , a = 0
          , s = 0;
        return r.forEach( (u, d) => {
            if (n && d === 0)
                return;
            let {actionItems: h} = u
              , g = h[om(h)]
              , {config: m, actionTypeId: E} = g;
            o.id === g.id && (s = a + i);
            let T = rm(E) === Wa ? 0 : m.duration;
            a += m.delay + T
        }
        ),
        a > 0 ? zr(s / a) : 0
    }
    function gD({actionList: e, actionItemId: t, rawData: r}) {
        let {actionItemGroups: n, continuousParameterGroups: o} = e
          , i = []
          , a = s => (i.push((0,
        ui.mergeIn)(s, ["config"], {
            delay: 0,
            duration: 0
        })),
        s.id === t);
        return n && n.some( ({actionItems: s}) => s.some(a)),
        o && o.some(s => {
            let {continuousActionGroups: u} = s;
            return u.some( ({actionItems: d}) => d.some(a))
        }
        ),
        (0,
        ui.setIn)(r, ["actionLists"], {
            [e.id]: {
                id: e.id,
                actionItemGroups: [{
                    actionItems: i
                }]
            }
        })
    }
    function hD(e, {basedOn: t}) {
        return e === Ze.SCROLLING_IN_VIEW && (t === st.ELEMENT || t == null) || e === Ze.MOUSE_MOVE && t === st.ELEMENT
    }
    function mD(e, t) {
        return e + C1 + t
    }
    function ED(e, t) {
        return t == null ? !0 : e.indexOf(t) !== -1
    }
    function yD(e, t) {
        return ka(e && e.sort(), t && t.sort())
    }
    function _D(e) {
        if (typeof e == "string")
            return e;
        if (e.pluginElement && e.objectId)
            return e.pluginElement + Va + e.objectId;
        if (e.objectId)
            return e.objectId;
        let {id: t="", selector: r="", useEventTarget: n=""} = e;
        return t + Va + r + Va + n
    }
    var ht, si, ii, ui, h1, m1, E1, y1, _1, b1, T1, I1, O1, w1, oi, Kr, Yr, ct, lt, $h, x1, A1, Xh, S1, Bh, R1, ai, ar, At, $r, C1, Va, Qh, Wa, Ha, Zh, sr, ur, cr, Qr, Jh, Zr, Jr, lr, fr, dr, pr, ci, L1, em, Xa, tm, ni, P1, q1, G1, zh, V1, W1, X1, B1, j1, ja, $1, Q1, Z1, J1, iD, oD, aD, im, sm = me( () => {
        "use strict";
        ht = fe(Ih()),
        si = fe(Fh()),
        ii = fe(Vh()),
        ui = fe($t());
        ke();
        Hh();
        Aa();
        Fa();
        Jn();
        ({BACKGROUND: h1, TRANSFORM: m1, TRANSLATE_3D: E1, SCALE_3D: y1, ROTATE_X: _1, ROTATE_Y: b1, ROTATE_Z: T1, SKEW: I1, PRESERVE_3D: O1, FLEX: w1, OPACITY: oi, FILTER: Kr, FONT_VARIATION_SETTINGS: Yr, WIDTH: ct, HEIGHT: lt, BACKGROUND_COLOR: $h, BORDER_COLOR: x1, COLOR: A1, CHILDREN: Xh, IMMEDIATE_CHILDREN: S1, SIBLINGS: Bh, PARENT: R1, DISPLAY: ai, WILL_CHANGE: ar, AUTO: At, COMMA_DELIMITER: $r, COLON_DELIMITER: C1, BAR_DELIMITER: Va, RENDER_TRANSFORM: Qh, RENDER_GENERAL: Wa, RENDER_STYLE: Ha, RENDER_PLUGIN: Zh} = Re),
        {TRANSFORM_MOVE: sr, TRANSFORM_SCALE: ur, TRANSFORM_ROTATE: cr, TRANSFORM_SKEW: Qr, STYLE_OPACITY: Jh, STYLE_FILTER: Zr, STYLE_FONT_VARIATION: Jr, STYLE_SIZE: lr, STYLE_BACKGROUND_COLOR: fr, STYLE_BORDER: dr, STYLE_TEXT_COLOR: pr, GENERAL_DISPLAY: ci, OBJECT_VALUE: L1} = Ue,
        em = e => e.trim(),
        Xa = Object.freeze({
            [fr]: $h,
            [dr]: x1,
            [pr]: A1
        }),
        tm = Object.freeze({
            [xt]: m1,
            [$h]: h1,
            [oi]: oi,
            [Kr]: Kr,
            [ct]: ct,
            [lt]: lt,
            [Yr]: Yr
        }),
        ni = new Map;
        P1 = 1;
        q1 = 1;
        G1 = (e, t) => e === t;
        zh = /px/,
        V1 = (e, t) => t.reduce( (r, n) => (r[n.type] == null && (r[n.type] = $1[n.type]),
        r), e || {}),
        W1 = (e, t) => t.reduce( (r, n) => (r[n.type] == null && (r[n.type] = Q1[n.type] || n.defaultValue || 0),
        r), e || {});
        X1 = (e, t) => (t && (e[t.type] = t.value || 0),
        e),
        B1 = (e, t) => (t && (e[t.type] = t.value || 0),
        e),
        j1 = (e, t, r) => {
            if (Dt(e))
                return Na(e)(r, t);
            switch (e) {
            case Zr:
                {
                    let n = (0,
                    ii.default)(r.filters, ({type: o}) => o === t);
                    return n ? n.value : 0
                }
            case Jr:
                {
                    let n = (0,
                    ii.default)(r.fontVariations, ({type: o}) => o === t);
                    return n ? n.value : 0
                }
            default:
                return r[t]
            }
        }
        ;
        ja = {
            [sr]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [ur]: Object.freeze({
                xValue: 1,
                yValue: 1,
                zValue: 1
            }),
            [cr]: Object.freeze({
                xValue: 0,
                yValue: 0,
                zValue: 0
            }),
            [Qr]: Object.freeze({
                xValue: 0,
                yValue: 0
            })
        },
        $1 = Object.freeze({
            blur: 0,
            "hue-rotate": 0,
            invert: 0,
            grayscale: 0,
            saturate: 100,
            sepia: 0,
            contrast: 100,
            brightness: 100
        }),
        Q1 = Object.freeze({
            wght: 0,
            opsz: 0,
            wdth: 0,
            slnt: 0
        }),
        Z1 = (e, t) => {
            let r = (0,
            ii.default)(t.filters, ({type: n}) => n === e);
            if (r && r.unit)
                return r.unit;
            switch (e) {
            case "blur":
                return "px";
            case "hue-rotate":
                return "deg";
            default:
                return "%"
            }
        }
        ,
        J1 = Object.keys(ja);
        iD = "\\(([^)]+)\\)",
        oD = /^rgb/,
        aD = RegExp(`rgba?${iD}`);
        im = ({effect: e, actionTypeId: t, elementApi: r}) => n => {
            switch (t) {
            case sr:
            case ur:
            case cr:
            case Qr:
                e(n, xt, r);
                break;
            case Zr:
                e(n, Kr, r);
                break;
            case Jr:
                e(n, Yr, r);
                break;
            case Jh:
                e(n, oi, r);
                break;
            case lr:
                e(n, ct, r),
                e(n, lt, r);
                break;
            case fr:
            case dr:
            case pr:
                e(n, Xa[t], r);
                break;
            case ci:
                e(n, ai, r);
                break
            }
        }
    }
    );
    var Ut = c(Pe => {
        "use strict";
        var vr = pn().default;
        Object.defineProperty(Pe, "__esModule", {
            value: !0
        });
        Pe.IX2VanillaUtils = Pe.IX2VanillaPlugins = Pe.IX2ElementsReducer = Pe.IX2Easings = Pe.IX2EasingUtils = Pe.IX2BrowserSupport = void 0;
        var bD = vr((Jn(),
        nt(nh)));
        Pe.IX2BrowserSupport = bD;
        var TD = vr((xa(),
        nt(jr)));
        Pe.IX2Easings = TD;
        var ID = vr((Aa(),
        nt(lh)));
        Pe.IX2EasingUtils = ID;
        var OD = vr((vh(),
        nt(ph)));
        Pe.IX2ElementsReducer = OD;
        var wD = vr((Fa(),
        nt(bh)));
        Pe.IX2VanillaPlugins = wD;
        var xD = vr((sm(),
        nt(am)));
        Pe.IX2VanillaUtils = xD
    }
    );
    var fi, mt, AD, SD, RD, CD, LD, ND, li, um, PD, MD, za, qD, DD, FD, GD, cm, lm = me( () => {
        "use strict";
        ke();
        fi = fe(Ut()),
        mt = fe($t()),
        {IX2_RAW_DATA_IMPORTED: AD, IX2_SESSION_STOPPED: SD, IX2_INSTANCE_ADDED: RD, IX2_INSTANCE_STARTED: CD, IX2_INSTANCE_REMOVED: LD, IX2_ANIMATION_FRAME_CHANGED: ND} = Ie,
        {optimizeFloat: li, applyEasing: um, createBezierEasing: PD} = fi.IX2EasingUtils,
        {RENDER_GENERAL: MD} = Re,
        {getItemConfigByKey: za, getRenderType: qD, getStyleProp: DD} = fi.IX2VanillaUtils,
        FD = (e, t) => {
            let {position: r, parameterId: n, actionGroups: o, destinationKeys: i, smoothing: a, restingValue: s, actionTypeId: u, customEasingFn: d, skipMotion: h, skipToValue: g} = e
              , {parameters: m} = t.payload
              , E = Math.max(1 - a, .01)
              , T = m[n];
            T == null && (E = 1,
            T = s);
            let I = Math.max(T, 0) || 0
              , D = li(I - r)
              , S = h ? g : li(r + D * E)
              , L = S * 100;
            if (S === r && e.current)
                return e;
            let R, P, q, M;
            for (let K = 0, {length: $} = o; K < $; K++) {
                let {keyframe: J, actionItems: ee} = o[K];
                if (K === 0 && (R = ee[0]),
                L >= J) {
                    R = ee[0];
                    let U = o[K + 1]
                      , x = U && L !== J;
                    P = x ? U.actionItems[0] : null,
                    x && (q = J / 100,
                    M = (U.keyframe - J) / 100)
                }
            }
            let X = {};
            if (R && !P)
                for (let K = 0, {length: $} = i; K < $; K++) {
                    let J = i[K];
                    X[J] = za(u, J, R.config)
                }
            else if (R && P && q !== void 0 && M !== void 0) {
                let K = (S - q) / M
                  , $ = R.config.easing
                  , J = um($, K, d);
                for (let ee = 0, {length: U} = i; ee < U; ee++) {
                    let x = i[ee]
                      , F = za(u, x, R.config)
                      , te = (za(u, x, P.config) - F) * J + F;
                    X[x] = te
                }
            }
            return (0,
            mt.merge)(e, {
                position: S,
                current: X
            })
        }
        ,
        GD = (e, t) => {
            let {active: r, origin: n, start: o, immediate: i, renderType: a, verbose: s, actionItem: u, destination: d, destinationKeys: h, pluginDuration: g, instanceDelay: m, customEasingFn: E, skipMotion: T} = e
              , I = u.config.easing
              , {duration: D, delay: S} = u.config;
            g != null && (D = g),
            S = m ?? S,
            a === MD ? D = 0 : (i || T) && (D = S = 0);
            let {now: L} = t.payload;
            if (r && n) {
                let R = L - (o + S);
                if (s) {
                    let K = L - o
                      , $ = D + S
                      , J = li(Math.min(Math.max(0, K / $), 1));
                    e = (0,
                    mt.set)(e, "verboseTimeElapsed", $ * J)
                }
                if (R < 0)
                    return e;
                let P = li(Math.min(Math.max(0, R / D), 1))
                  , q = um(I, P, E)
                  , M = {}
                  , X = null;
                return h.length && (X = h.reduce( (K, $) => {
                    let J = d[$]
                      , ee = parseFloat(n[$]) || 0
                      , x = (parseFloat(J) - ee) * q + ee;
                    return K[$] = x,
                    K
                }
                , {})),
                M.current = X,
                M.position = P,
                P === 1 && (M.active = !1,
                M.complete = !0),
                (0,
                mt.merge)(e, M)
            }
            return e
        }
        ,
        cm = (e=Object.freeze({}), t) => {
            switch (t.type) {
            case AD:
                return t.payload.ixInstances || Object.freeze({});
            case SD:
                return Object.freeze({});
            case RD:
                {
                    let {instanceId: r, elementId: n, actionItem: o, eventId: i, eventTarget: a, eventStateKey: s, actionListId: u, groupIndex: d, isCarrier: h, origin: g, destination: m, immediate: E, verbose: T, continuous: I, parameterId: D, actionGroups: S, smoothing: L, restingValue: R, pluginInstance: P, pluginDuration: q, instanceDelay: M, skipMotion: X, skipToValue: K} = t.payload
                      , {actionTypeId: $} = o
                      , J = qD($)
                      , ee = DD(J, $)
                      , U = Object.keys(m).filter(F => m[F] != null && typeof m[F] != "string")
                      , {easing: x} = o.config;
                    return (0,
                    mt.set)(e, r, {
                        id: r,
                        elementId: n,
                        active: !1,
                        position: 0,
                        start: 0,
                        origin: g,
                        destination: m,
                        destinationKeys: U,
                        immediate: E,
                        verbose: T,
                        current: null,
                        actionItem: o,
                        actionTypeId: $,
                        eventId: i,
                        eventTarget: a,
                        eventStateKey: s,
                        actionListId: u,
                        groupIndex: d,
                        renderType: J,
                        isCarrier: h,
                        styleProp: ee,
                        continuous: I,
                        parameterId: D,
                        actionGroups: S,
                        smoothing: L,
                        restingValue: R,
                        pluginInstance: P,
                        pluginDuration: q,
                        instanceDelay: M,
                        skipMotion: X,
                        skipToValue: K,
                        customEasingFn: Array.isArray(x) && x.length === 4 ? PD(x) : void 0
                    })
                }
            case CD:
                {
                    let {instanceId: r, time: n} = t.payload;
                    return (0,
                    mt.mergeIn)(e, [r], {
                        active: !0,
                        complete: !1,
                        start: n
                    })
                }
            case LD:
                {
                    let {instanceId: r} = t.payload;
                    if (!e[r])
                        return e;
                    let n = {}
                      , o = Object.keys(e)
                      , {length: i} = o;
                    for (let a = 0; a < i; a++) {
                        let s = o[a];
                        s !== r && (n[s] = e[s])
                    }
                    return n
                }
            case ND:
                {
                    let r = e
                      , n = Object.keys(e)
                      , {length: o} = n;
                    for (let i = 0; i < o; i++) {
                        let a = n[i]
                          , s = e[a]
                          , u = s.continuous ? FD : GD;
                        r = (0,
                        mt.set)(r, a, u(s, t))
                    }
                    return r
                }
            default:
                return e
            }
        }
    }
    );
    var UD, kD, VD, fm, dm = me( () => {
        "use strict";
        ke();
        ({IX2_RAW_DATA_IMPORTED: UD, IX2_SESSION_STOPPED: kD, IX2_PARAMETER_CHANGED: VD} = Ie),
        fm = (e={}, t) => {
            switch (t.type) {
            case UD:
                return t.payload.ixParameters || {};
            case kD:
                return {};
            case VD:
                {
                    let {key: r, value: n} = t.payload;
                    return e[r] = n,
                    e
                }
            default:
                return e
            }
        }
    }
    );
    var gm = {};
    Fe(gm, {
        default: () => HD
    });
    var pm, vm, WD, HD, hm = me( () => {
        "use strict";
        pm = fe(Bo());
        Sf();
        Yf();
        Zf();
        vm = fe(Ut());
        lm();
        dm();
        ({ixElements: WD} = vm.IX2ElementsReducer),
        HD = (0,
        pm.combineReducers)({
            ixData: Af,
            ixRequest: Kf,
            ixSession: Qf,
            ixElements: WD,
            ixInstances: cm,
            ixParameters: fm
        })
    }
    );
    var Em = c( (WB, mm) => {
        var XD = It()
          , BD = we()
          , jD = vt()
          , zD = "[object String]";
        function KD(e) {
            return typeof e == "string" || !BD(e) && jD(e) && XD(e) == zD
        }
        mm.exports = KD
    }
    );
    var _m = c( (HB, ym) => {
        var YD = ya()
          , $D = YD("length");
        ym.exports = $D
    }
    );
    var Tm = c( (XB, bm) => {
        var QD = "\\ud800-\\udfff"
          , ZD = "\\u0300-\\u036f"
          , JD = "\\ufe20-\\ufe2f"
          , eF = "\\u20d0-\\u20ff"
          , tF = ZD + JD + eF
          , rF = "\\ufe0e\\ufe0f"
          , nF = "\\u200d"
          , iF = RegExp("[" + nF + QD + tF + rF + "]");
        function oF(e) {
            return iF.test(e)
        }
        bm.exports = oF
    }
    );
    var Lm = c( (BB, Cm) => {
        var Om = "\\ud800-\\udfff"
          , aF = "\\u0300-\\u036f"
          , sF = "\\ufe20-\\ufe2f"
          , uF = "\\u20d0-\\u20ff"
          , cF = aF + sF + uF
          , lF = "\\ufe0e\\ufe0f"
          , fF = "[" + Om + "]"
          , Ka = "[" + cF + "]"
          , Ya = "\\ud83c[\\udffb-\\udfff]"
          , dF = "(?:" + Ka + "|" + Ya + ")"
          , wm = "[^" + Om + "]"
          , xm = "(?:\\ud83c[\\udde6-\\uddff]){2}"
          , Am = "[\\ud800-\\udbff][\\udc00-\\udfff]"
          , pF = "\\u200d"
          , Sm = dF + "?"
          , Rm = "[" + lF + "]?"
          , vF = "(?:" + pF + "(?:" + [wm, xm, Am].join("|") + ")" + Rm + Sm + ")*"
          , gF = Rm + Sm + vF
          , hF = "(?:" + [wm + Ka + "?", Ka, xm, Am, fF].join("|") + ")"
          , Im = RegExp(Ya + "(?=" + Ya + ")|" + hF + gF, "g");
        function mF(e) {
            for (var t = Im.lastIndex = 0; Im.test(e); )
                ++t;
            return t
        }
        Cm.exports = mF
    }
    );
    var Pm = c( (jB, Nm) => {
        var EF = _m()
          , yF = Tm()
          , _F = Lm();
        function bF(e) {
            return yF(e) ? _F(e) : EF(e)
        }
        Nm.exports = bF
    }
    );
    var qm = c( (zB, Mm) => {
        var TF = Hn()
          , IF = Xn()
          , OF = Mt()
          , wF = Em()
          , xF = Pm()
          , AF = "[object Map]"
          , SF = "[object Set]";
        function RF(e) {
            if (e == null)
                return 0;
            if (OF(e))
                return wF(e) ? xF(e) : e.length;
            var t = IF(e);
            return t == AF || t == SF ? e.size : TF(e).length
        }
        Mm.exports = RF
    }
    );
    var Fm = c( (KB, Dm) => {
        var CF = "Expected a function";
        function LF(e) {
            if (typeof e != "function")
                throw new TypeError(CF);
            return function() {
                var t = arguments;
                switch (t.length) {
                case 0:
                    return !e.call(this);
                case 1:
                    return !e.call(this, t[0]);
                case 2:
                    return !e.call(this, t[0], t[1]);
                case 3:
                    return !e.call(this, t[0], t[1], t[2])
                }
                return !e.apply(this, t)
            }
        }
        Dm.exports = LF
    }
    );
    var $a = c( (YB, Gm) => {
        var NF = Ot()
          , PF = function() {
            try {
                var e = NF(Object, "defineProperty");
                return e({}, "", {}),
                e
            } catch {}
        }();
        Gm.exports = PF
    }
    );
    var Qa = c( ($B, km) => {
        var Um = $a();
        function MF(e, t, r) {
            t == "__proto__" && Um ? Um(e, t, {
                configurable: !0,
                enumerable: !0,
                value: r,
                writable: !0
            }) : e[t] = r
        }
        km.exports = MF
    }
    );
    var Wm = c( (QB, Vm) => {
        var qF = Qa()
          , DF = Pn()
          , FF = Object.prototype
          , GF = FF.hasOwnProperty;
        function UF(e, t, r) {
            var n = e[t];
            (!(GF.call(e, t) && DF(n, r)) || r === void 0 && !(t in e)) && qF(e, t, r)
        }
        Vm.exports = UF
    }
    );
    var Bm = c( (ZB, Xm) => {
        var kF = Wm()
          , VF = Hr()
          , WF = Un()
          , Hm = ut()
          , HF = ir();
        function XF(e, t, r, n) {
            if (!Hm(e))
                return e;
            t = VF(t, e);
            for (var o = -1, i = t.length, a = i - 1, s = e; s != null && ++o < i; ) {
                var u = HF(t[o])
                  , d = r;
                if (u === "__proto__" || u === "constructor" || u === "prototype")
                    return e;
                if (o != a) {
                    var h = s[u];
                    d = n ? n(h, u, s) : void 0,
                    d === void 0 && (d = Hm(h) ? h : WF(t[o + 1]) ? [] : {})
                }
                kF(s, u, d),
                s = s[u]
            }
            return e
        }
        Xm.exports = XF
    }
    );
    var zm = c( (JB, jm) => {
        var BF = zn()
          , jF = Bm()
          , zF = Hr();
        function KF(e, t, r) {
            for (var n = -1, o = t.length, i = {}; ++n < o; ) {
                var a = t[n]
                  , s = BF(e, a);
                r(s, a) && jF(i, zF(a, e), s)
            }
            return i
        }
        jm.exports = KF
    }
    );
    var Ym = c( (ej, Km) => {
        var YF = Fn()
          , $F = No()
          , QF = ia()
          , ZF = na()
          , JF = Object.getOwnPropertySymbols
          , e2 = JF ? function(e) {
            for (var t = []; e; )
                YF(t, QF(e)),
                e = $F(e);
            return t
        }
        : ZF;
        Km.exports = e2
    }
    );
    var Qm = c( (tj, $m) => {
        function t2(e) {
            var t = [];
            if (e != null)
                for (var r in Object(e))
                    t.push(r);
            return t
        }
        $m.exports = t2
    }
    );
    var Jm = c( (rj, Zm) => {
        var r2 = ut()
          , n2 = Wn()
          , i2 = Qm()
          , o2 = Object.prototype
          , a2 = o2.hasOwnProperty;
        function s2(e) {
            if (!r2(e))
                return i2(e);
            var t = n2(e)
              , r = [];
            for (var n in e)
                n == "constructor" && (t || !a2.call(e, n)) || r.push(n);
            return r
        }
        Zm.exports = s2
    }
    );
    var tE = c( (nj, eE) => {
        var u2 = aa()
          , c2 = Jm()
          , l2 = Mt();
        function f2(e) {
            return l2(e) ? u2(e, !0) : c2(e)
        }
        eE.exports = f2
    }
    );
    var nE = c( (ij, rE) => {
        var d2 = ra()
          , p2 = Ym()
          , v2 = tE();
        function g2(e) {
            return d2(e, v2, p2)
        }
        rE.exports = g2
    }
    );
    var oE = c( (oj, iE) => {
        var h2 = Ea()
          , m2 = wt()
          , E2 = zm()
          , y2 = nE();
        function _2(e, t) {
            if (e == null)
                return {};
            var r = h2(y2(e), function(n) {
                return [n]
            });
            return t = m2(t),
            E2(e, r, function(n, o) {
                return t(n, o[0])
            })
        }
        iE.exports = _2
    }
    );
    var sE = c( (aj, aE) => {
        var b2 = wt()
          , T2 = Fm()
          , I2 = oE();
        function O2(e, t) {
            return I2(e, T2(b2(t)))
        }
        aE.exports = O2
    }
    );
    var cE = c( (sj, uE) => {
        var w2 = Hn()
          , x2 = Xn()
          , A2 = Fr()
          , S2 = we()
          , R2 = Mt()
          , C2 = Gn()
          , L2 = Wn()
          , N2 = Vn()
          , P2 = "[object Map]"
          , M2 = "[object Set]"
          , q2 = Object.prototype
          , D2 = q2.hasOwnProperty;
        function F2(e) {
            if (e == null)
                return !0;
            if (R2(e) && (S2(e) || typeof e == "string" || typeof e.splice == "function" || C2(e) || N2(e) || A2(e)))
                return !e.length;
            var t = x2(e);
            if (t == P2 || t == M2)
                return !e.size;
            if (L2(e))
                return !w2(e).length;
            for (var r in e)
                if (D2.call(e, r))
                    return !1;
            return !0
        }
        uE.exports = F2
    }
    );
    var fE = c( (uj, lE) => {
        var G2 = Qa()
          , U2 = Ga()
          , k2 = wt();
        function V2(e, t) {
            var r = {};
            return t = k2(t, 3),
            U2(e, function(n, o, i) {
                G2(r, o, t(n, o, i))
            }),
            r
        }
        lE.exports = V2
    }
    );
    var pE = c( (cj, dE) => {
        function W2(e, t) {
            for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1; )
                ;
            return e
        }
        dE.exports = W2
    }
    );
    var gE = c( (lj, vE) => {
        var H2 = Yn();
        function X2(e) {
            return typeof e == "function" ? e : H2
        }
        vE.exports = X2
    }
    );
    var mE = c( (fj, hE) => {
        var B2 = pE()
          , j2 = Ua()
          , z2 = gE()
          , K2 = we();
        function Y2(e, t) {
            var r = K2(e) ? B2 : j2;
            return r(e, z2(t))
        }
        hE.exports = Y2
    }
    );
    var yE = c( (dj, EE) => {
        var $2 = Qe()
          , Q2 = function() {
            return $2.Date.now()
        };
        EE.exports = Q2
    }
    );
    var TE = c( (pj, bE) => {
        var Z2 = ut()
          , Za = yE()
          , _E = $n()
          , J2 = "Expected a function"
          , eG = Math.max
          , tG = Math.min;
        function rG(e, t, r) {
            var n, o, i, a, s, u, d = 0, h = !1, g = !1, m = !0;
            if (typeof e != "function")
                throw new TypeError(J2);
            t = _E(t) || 0,
            Z2(r) && (h = !!r.leading,
            g = "maxWait"in r,
            i = g ? eG(_E(r.maxWait) || 0, t) : i,
            m = "trailing"in r ? !!r.trailing : m);
            function E(M) {
                var X = n
                  , K = o;
                return n = o = void 0,
                d = M,
                a = e.apply(K, X),
                a
            }
            function T(M) {
                return d = M,
                s = setTimeout(S, t),
                h ? E(M) : a
            }
            function I(M) {
                var X = M - u
                  , K = M - d
                  , $ = t - X;
                return g ? tG($, i - K) : $
            }
            function D(M) {
                var X = M - u
                  , K = M - d;
                return u === void 0 || X >= t || X < 0 || g && K >= i
            }
            function S() {
                var M = Za();
                if (D(M))
                    return L(M);
                s = setTimeout(S, I(M))
            }
            function L(M) {
                return s = void 0,
                m && n ? E(M) : (n = o = void 0,
                a)
            }
            function R() {
                s !== void 0 && clearTimeout(s),
                d = 0,
                n = u = o = s = void 0
            }
            function P() {
                return s === void 0 ? a : L(Za())
            }
            function q() {
                var M = Za()
                  , X = D(M);
                if (n = arguments,
                o = this,
                u = M,
                X) {
                    if (s === void 0)
                        return T(u);
                    if (g)
                        return clearTimeout(s),
                        s = setTimeout(S, t),
                        E(u)
                }
                return s === void 0 && (s = setTimeout(S, t)),
                a
            }
            return q.cancel = R,
            q.flush = P,
            q
        }
        bE.exports = rG
    }
    );
    var OE = c( (vj, IE) => {
        var nG = TE()
          , iG = ut()
          , oG = "Expected a function";
        function aG(e, t, r) {
            var n = !0
              , o = !0;
            if (typeof e != "function")
                throw new TypeError(oG);
            return iG(r) && (n = "leading"in r ? !!r.leading : n,
            o = "trailing"in r ? !!r.trailing : o),
            nG(e, t, {
                leading: n,
                maxWait: t,
                trailing: o
            })
        }
        IE.exports = aG
    }
    );
    var xE = {};
    Fe(xE, {
        actionListPlaybackChanged: () => hr,
        animationFrameChanged: () => pi,
        clearRequested: () => LG,
        elementStateChanged: () => as,
        eventListenerAdded: () => di,
        eventStateChanged: () => ns,
        instanceAdded: () => is,
        instanceRemoved: () => os,
        instanceStarted: () => vi,
        mediaQueriesDefined: () => us,
        parameterChanged: () => gr,
        playbackRequested: () => RG,
        previewRequested: () => SG,
        rawDataImported: () => Ja,
        sessionInitialized: () => es,
        sessionStarted: () => ts,
        sessionStopped: () => rs,
        stopRequested: () => CG,
        testFrameRendered: () => NG,
        viewportWidthChanged: () => ss
    });
    var wE, sG, uG, cG, lG, fG, dG, pG, vG, gG, hG, mG, EG, yG, _G, bG, TG, IG, OG, wG, xG, AG, Ja, es, ts, rs, SG, RG, CG, LG, di, NG, ns, pi, gr, is, vi, os, as, hr, ss, us, gi = me( () => {
        "use strict";
        ke();
        wE = fe(Ut()),
        {IX2_RAW_DATA_IMPORTED: sG, IX2_SESSION_INITIALIZED: uG, IX2_SESSION_STARTED: cG, IX2_SESSION_STOPPED: lG, IX2_PREVIEW_REQUESTED: fG, IX2_PLAYBACK_REQUESTED: dG, IX2_STOP_REQUESTED: pG, IX2_CLEAR_REQUESTED: vG, IX2_EVENT_LISTENER_ADDED: gG, IX2_TEST_FRAME_RENDERED: hG, IX2_EVENT_STATE_CHANGED: mG, IX2_ANIMATION_FRAME_CHANGED: EG, IX2_PARAMETER_CHANGED: yG, IX2_INSTANCE_ADDED: _G, IX2_INSTANCE_STARTED: bG, IX2_INSTANCE_REMOVED: TG, IX2_ELEMENT_STATE_CHANGED: IG, IX2_ACTION_LIST_PLAYBACK_CHANGED: OG, IX2_VIEWPORT_WIDTH_CHANGED: wG, IX2_MEDIA_QUERIES_DEFINED: xG} = Ie,
        {reifyState: AG} = wE.IX2VanillaUtils,
        Ja = e => ({
            type: sG,
            payload: {
                ...AG(e)
            }
        }),
        es = ({hasBoundaryNodes: e, reducedMotion: t}) => ({
            type: uG,
            payload: {
                hasBoundaryNodes: e,
                reducedMotion: t
            }
        }),
        ts = () => ({
            type: cG
        }),
        rs = () => ({
            type: lG
        }),
        SG = ({rawData: e, defer: t}) => ({
            type: fG,
            payload: {
                defer: t,
                rawData: e
            }
        }),
        RG = ({actionTypeId: e=Ue.GENERAL_START_ACTION, actionListId: t, actionItemId: r, eventId: n, allowEvents: o, immediate: i, testManual: a, verbose: s, rawData: u}) => ({
            type: dG,
            payload: {
                actionTypeId: e,
                actionListId: t,
                actionItemId: r,
                testManual: a,
                eventId: n,
                allowEvents: o,
                immediate: i,
                verbose: s,
                rawData: u
            }
        }),
        CG = e => ({
            type: pG,
            payload: {
                actionListId: e
            }
        }),
        LG = () => ({
            type: vG
        }),
        di = (e, t) => ({
            type: gG,
            payload: {
                target: e,
                listenerParams: t
            }
        }),
        NG = (e=1) => ({
            type: hG,
            payload: {
                step: e
            }
        }),
        ns = (e, t) => ({
            type: mG,
            payload: {
                stateKey: e,
                newState: t
            }
        }),
        pi = (e, t) => ({
            type: EG,
            payload: {
                now: e,
                parameters: t
            }
        }),
        gr = (e, t) => ({
            type: yG,
            payload: {
                key: e,
                value: t
            }
        }),
        is = e => ({
            type: _G,
            payload: {
                ...e
            }
        }),
        vi = (e, t) => ({
            type: bG,
            payload: {
                instanceId: e,
                time: t
            }
        }),
        os = e => ({
            type: TG,
            payload: {
                instanceId: e
            }
        }),
        as = (e, t, r, n) => ({
            type: IG,
            payload: {
                elementId: e,
                actionTypeId: t,
                current: r,
                actionItem: n
            }
        }),
        hr = ({actionListId: e, isPlaying: t}) => ({
            type: OG,
            payload: {
                actionListId: e,
                isPlaying: t
            }
        }),
        ss = ({width: e, mediaQueries: t}) => ({
            type: wG,
            payload: {
                width: e,
                mediaQueries: t
            }
        }),
        us = () => ({
            type: xG
        })
    }
    );
    var Me = {};
    Fe(Me, {
        elementContains: () => fs,
        getChildElements: () => WG,
        getClosestElement: () => en,
        getProperty: () => FG,
        getQuerySelector: () => ls,
        getRefType: () => ds,
        getSiblingElements: () => HG,
        getStyle: () => DG,
        getValidDocument: () => UG,
        isSiblingNode: () => VG,
        matchSelector: () => GG,
        queryDocument: () => kG,
        setStyle: () => qG
    });
    function qG(e, t, r) {
        e.style[t] = r
    }
    function DG(e, t) {
        return e.style[t]
    }
    function FG(e, t) {
        return e[t]
    }
    function GG(e) {
        return t => t[cs](e)
    }
    function ls({id: e, selector: t}) {
        if (e) {
            let r = e;
            if (e.indexOf(AE) !== -1) {
                let n = e.split(AE)
                  , o = n[0];
                if (r = n[1],
                o !== document.documentElement.getAttribute(RE))
                    return null
            }
            return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
        }
        return t
    }
    function UG(e) {
        return e == null || e === document.documentElement.getAttribute(RE) ? document : null
    }
    function kG(e, t) {
        return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
    }
    function fs(e, t) {
        return e.contains(t)
    }
    function VG(e, t) {
        return e !== t && e.parentNode === t.parentNode
    }
    function WG(e) {
        let t = [];
        for (let r = 0, {length: n} = e || []; r < n; r++) {
            let {children: o} = e[r]
              , {length: i} = o;
            if (i)
                for (let a = 0; a < i; a++)
                    t.push(o[a])
        }
        return t
    }
    function HG(e=[]) {
        let t = []
          , r = [];
        for (let n = 0, {length: o} = e; n < o; n++) {
            let {parentNode: i} = e[n];
            if (!i || !i.children || !i.children.length || r.indexOf(i) !== -1)
                continue;
            r.push(i);
            let a = i.firstElementChild;
            for (; a != null; )
                e.indexOf(a) === -1 && t.push(a),
                a = a.nextElementSibling
        }
        return t
    }
    function ds(e) {
        return e != null && typeof e == "object" ? e instanceof Element ? PG : MG : null
    }
    var SE, cs, AE, PG, MG, RE, en, CE = me( () => {
        "use strict";
        SE = fe(Ut());
        ke();
        ({ELEMENT_MATCHES: cs} = SE.IX2BrowserSupport),
        {IX2_ID_DELIMITER: AE, HTML_ELEMENT: PG, PLAIN_OBJECT: MG, WF_PAGE: RE} = Re;
        en = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
            if (!document.documentElement.contains(e))
                return null;
            let r = e;
            do {
                if (r[cs] && r[cs](t))
                    return r;
                r = r.parentNode
            } while (r != null);
            return null
        }
    }
    );
    var ps = c( (mj, NE) => {
        var XG = ut()
          , LE = Object.create
          , BG = function() {
            function e() {}
            return function(t) {
                if (!XG(t))
                    return {};
                if (LE)
                    return LE(t);
                e.prototype = t;
                var r = new e;
                return e.prototype = void 0,
                r
            }
        }();
        NE.exports = BG
    }
    );
    var hi = c( (Ej, PE) => {
        function jG() {}
        PE.exports = jG
    }
    );
    var Ei = c( (yj, ME) => {
        var zG = ps()
          , KG = hi();
        function mi(e, t) {
            this.__wrapped__ = e,
            this.__actions__ = [],
            this.__chain__ = !!t,
            this.__index__ = 0,
            this.__values__ = void 0
        }
        mi.prototype = zG(KG.prototype);
        mi.prototype.constructor = mi;
        ME.exports = mi
    }
    );
    var GE = c( (_j, FE) => {
        var qE = zt()
          , YG = Fr()
          , $G = we()
          , DE = qE ? qE.isConcatSpreadable : void 0;
        function QG(e) {
            return $G(e) || YG(e) || !!(DE && e && e[DE])
        }
        FE.exports = QG
    }
    );
    var VE = c( (bj, kE) => {
        var ZG = Fn()
          , JG = GE();
        function UE(e, t, r, n, o) {
            var i = -1
              , a = e.length;
            for (r || (r = JG),
            o || (o = []); ++i < a; ) {
                var s = e[i];
                t > 0 && r(s) ? t > 1 ? UE(s, t - 1, r, n, o) : ZG(o, s) : n || (o[o.length] = s)
            }
            return o
        }
        kE.exports = UE
    }
    );
    var HE = c( (Tj, WE) => {
        var eU = VE();
        function tU(e) {
            var t = e == null ? 0 : e.length;
            return t ? eU(e, 1) : []
        }
        WE.exports = tU
    }
    );
    var BE = c( (Ij, XE) => {
        function rU(e, t, r) {
            switch (r.length) {
            case 0:
                return e.call(t);
            case 1:
                return e.call(t, r[0]);
            case 2:
                return e.call(t, r[0], r[1]);
            case 3:
                return e.call(t, r[0], r[1], r[2])
            }
            return e.apply(t, r)
        }
        XE.exports = rU
    }
    );
    var KE = c( (Oj, zE) => {
        var nU = BE()
          , jE = Math.max;
        function iU(e, t, r) {
            return t = jE(t === void 0 ? e.length - 1 : t, 0),
            function() {
                for (var n = arguments, o = -1, i = jE(n.length - t, 0), a = Array(i); ++o < i; )
                    a[o] = n[t + o];
                o = -1;
                for (var s = Array(t + 1); ++o < t; )
                    s[o] = n[o];
                return s[t] = r(a),
                nU(e, this, s)
            }
        }
        zE.exports = iU
    }
    );
    var $E = c( (wj, YE) => {
        function oU(e) {
            return function() {
                return e
            }
        }
        YE.exports = oU
    }
    );
    var JE = c( (xj, ZE) => {
        var aU = $E()
          , QE = $a()
          , sU = Yn()
          , uU = QE ? function(e, t) {
            return QE(e, "toString", {
                configurable: !0,
                enumerable: !1,
                value: aU(t),
                writable: !0
            })
        }
        : sU;
        ZE.exports = uU
    }
    );
    var ty = c( (Aj, ey) => {
        var cU = 800
          , lU = 16
          , fU = Date.now;
        function dU(e) {
            var t = 0
              , r = 0;
            return function() {
                var n = fU()
                  , o = lU - (n - r);
                if (r = n,
                o > 0) {
                    if (++t >= cU)
                        return arguments[0]
                } else
                    t = 0;
                return e.apply(void 0, arguments)
            }
        }
        ey.exports = dU
    }
    );
    var ny = c( (Sj, ry) => {
        var pU = JE()
          , vU = ty()
          , gU = vU(pU);
        ry.exports = gU
    }
    );
    var oy = c( (Rj, iy) => {
        var hU = HE()
          , mU = KE()
          , EU = ny();
        function yU(e) {
            return EU(mU(e, void 0, hU), e + "")
        }
        iy.exports = yU
    }
    );
    var uy = c( (Cj, sy) => {
        var ay = sa()
          , _U = ay && new ay;
        sy.exports = _U
    }
    );
    var ly = c( (Lj, cy) => {
        function bU() {}
        cy.exports = bU
    }
    );
    var vs = c( (Nj, dy) => {
        var fy = uy()
          , TU = ly()
          , IU = fy ? function(e) {
            return fy.get(e)
        }
        : TU;
        dy.exports = IU
    }
    );
    var vy = c( (Pj, py) => {
        var OU = {};
        py.exports = OU
    }
    );
    var gs = c( (Mj, hy) => {
        var gy = vy()
          , wU = Object.prototype
          , xU = wU.hasOwnProperty;
        function AU(e) {
            for (var t = e.name + "", r = gy[t], n = xU.call(gy, t) ? r.length : 0; n--; ) {
                var o = r[n]
                  , i = o.func;
                if (i == null || i == e)
                    return o.name
            }
            return t
        }
        hy.exports = AU
    }
    );
    var _i = c( (qj, my) => {
        var SU = ps()
          , RU = hi()
          , CU = 4294967295;
        function yi(e) {
            this.__wrapped__ = e,
            this.__actions__ = [],
            this.__dir__ = 1,
            this.__filtered__ = !1,
            this.__iteratees__ = [],
            this.__takeCount__ = CU,
            this.__views__ = []
        }
        yi.prototype = SU(RU.prototype);
        yi.prototype.constructor = yi;
        my.exports = yi
    }
    );
    var yy = c( (Dj, Ey) => {
        function LU(e, t) {
            var r = -1
              , n = e.length;
            for (t || (t = Array(n)); ++r < n; )
                t[r] = e[r];
            return t
        }
        Ey.exports = LU
    }
    );
    var by = c( (Fj, _y) => {
        var NU = _i()
          , PU = Ei()
          , MU = yy();
        function qU(e) {
            if (e instanceof NU)
                return e.clone();
            var t = new PU(e.__wrapped__,e.__chain__);
            return t.__actions__ = MU(e.__actions__),
            t.__index__ = e.__index__,
            t.__values__ = e.__values__,
            t
        }
        _y.exports = qU
    }
    );
    var Oy = c( (Gj, Iy) => {
        var DU = _i()
          , Ty = Ei()
          , FU = hi()
          , GU = we()
          , UU = vt()
          , kU = by()
          , VU = Object.prototype
          , WU = VU.hasOwnProperty;
        function bi(e) {
            if (UU(e) && !GU(e) && !(e instanceof DU)) {
                if (e instanceof Ty)
                    return e;
                if (WU.call(e, "__wrapped__"))
                    return kU(e)
            }
            return new Ty(e)
        }
        bi.prototype = FU.prototype;
        bi.prototype.constructor = bi;
        Iy.exports = bi
    }
    );
    var xy = c( (Uj, wy) => {
        var HU = _i()
          , XU = vs()
          , BU = gs()
          , jU = Oy();
        function zU(e) {
            var t = BU(e)
              , r = jU[t];
            if (typeof r != "function" || !(t in HU.prototype))
                return !1;
            if (e === r)
                return !0;
            var n = XU(r);
            return !!n && e === n[0]
        }
        wy.exports = zU
    }
    );
    var Cy = c( (kj, Ry) => {
        var Ay = Ei()
          , KU = oy()
          , YU = vs()
          , hs = gs()
          , $U = we()
          , Sy = xy()
          , QU = "Expected a function"
          , ZU = 8
          , JU = 32
          , ek = 128
          , tk = 256;
        function rk(e) {
            return KU(function(t) {
                var r = t.length
                  , n = r
                  , o = Ay.prototype.thru;
                for (e && t.reverse(); n--; ) {
                    var i = t[n];
                    if (typeof i != "function")
                        throw new TypeError(QU);
                    if (o && !a && hs(i) == "wrapper")
                        var a = new Ay([],!0)
                }
                for (n = a ? n : r; ++n < r; ) {
                    i = t[n];
                    var s = hs(i)
                      , u = s == "wrapper" ? YU(i) : void 0;
                    u && Sy(u[0]) && u[1] == (ek | ZU | JU | tk) && !u[4].length && u[9] == 1 ? a = a[hs(u[0])].apply(a, u[3]) : a = i.length == 1 && Sy(i) ? a[s]() : a.thru(i)
                }
                return function() {
                    var d = arguments
                      , h = d[0];
                    if (a && d.length == 1 && $U(h))
                        return a.plant(h).value();
                    for (var g = 0, m = r ? t[g].apply(this, d) : h; ++g < r; )
                        m = t[g].call(this, m);
                    return m
                }
            })
        }
        Ry.exports = rk
    }
    );
    var Ny = c( (Vj, Ly) => {
        var nk = Cy()
          , ik = nk();
        Ly.exports = ik
    }
    );
    var My = c( (Wj, Py) => {
        function ok(e, t, r) {
            return e === e && (r !== void 0 && (e = e <= r ? e : r),
            t !== void 0 && (e = e >= t ? e : t)),
            e
        }
        Py.exports = ok
    }
    );
    var Dy = c( (Hj, qy) => {
        var ak = My()
          , ms = $n();
        function sk(e, t, r) {
            return r === void 0 && (r = t,
            t = void 0),
            r !== void 0 && (r = ms(r),
            r = r === r ? r : 0),
            t !== void 0 && (t = ms(t),
            t = t === t ? t : 0),
            ak(ms(e), t, r)
        }
        qy.exports = sk
    }
    );
    var By, jy, zy, Ky, uk, ck, lk, fk, dk, pk, vk, gk, hk, mk, Ek, yk, _k, bk, Tk, Yy, $y, Ik, Ok, wk, Qy, xk, Ak, Zy, Sk, Es, Jy, Fy, Gy, e_, rn, Rk, ft, t_, Ck, We, et, nn, r_, ys, Uy, _s, Lk, tn, Nk, Pk, Mk, n_, ky, qk, Vy, Dk, Fk, Gk, Wy, Ti, Ii, Hy, Xy, i_, o_ = me( () => {
        "use strict";
        By = fe(Ny()),
        jy = fe(Kn()),
        zy = fe(Dy());
        ke();
        bs();
        gi();
        Ky = fe(Ut()),
        {MOUSE_CLICK: uk, MOUSE_SECOND_CLICK: ck, MOUSE_DOWN: lk, MOUSE_UP: fk, MOUSE_OVER: dk, MOUSE_OUT: pk, DROPDOWN_CLOSE: vk, DROPDOWN_OPEN: gk, SLIDER_ACTIVE: hk, SLIDER_INACTIVE: mk, TAB_ACTIVE: Ek, TAB_INACTIVE: yk, NAVBAR_CLOSE: _k, NAVBAR_OPEN: bk, MOUSE_MOVE: Tk, PAGE_SCROLL_DOWN: Yy, SCROLL_INTO_VIEW: $y, SCROLL_OUT_OF_VIEW: Ik, PAGE_SCROLL_UP: Ok, SCROLLING_IN_VIEW: wk, PAGE_FINISH: Qy, ECOMMERCE_CART_CLOSE: xk, ECOMMERCE_CART_OPEN: Ak, PAGE_START: Zy, PAGE_SCROLL: Sk} = Ze,
        Es = "COMPONENT_ACTIVE",
        Jy = "COMPONENT_INACTIVE",
        {COLON_DELIMITER: Fy} = Re,
        {getNamespacedParameterId: Gy} = Ky.IX2VanillaUtils,
        e_ = e => t => typeof t == "object" && e(t) ? !0 : t,
        rn = e_( ({element: e, nativeEvent: t}) => e === t.target),
        Rk = e_( ({element: e, nativeEvent: t}) => e.contains(t.target)),
        ft = (0,
        By.default)([rn, Rk]),
        t_ = (e, t) => {
            if (t) {
                let {ixData: r} = e.getState()
                  , {events: n} = r
                  , o = n[t];
                if (o && !Lk[o.eventTypeId])
                    return o
            }
            return null
        }
        ,
        Ck = ({store: e, event: t}) => {
            let {action: r} = t
              , {autoStopEventId: n} = r.config;
            return !!t_(e, n)
        }
        ,
        We = ({store: e, event: t, element: r, eventStateKey: n}, o) => {
            let {action: i, id: a} = t
              , {actionListId: s, autoStopEventId: u} = i.config
              , d = t_(e, u);
            return d && mr({
                store: e,
                eventId: u,
                eventTarget: r,
                eventStateKey: u + Fy + n.split(Fy)[1],
                actionListId: (0,
                jy.default)(d, "action.config.actionListId")
            }),
            mr({
                store: e,
                eventId: a,
                eventTarget: r,
                eventStateKey: n,
                actionListId: s
            }),
            on({
                store: e,
                eventId: a,
                eventTarget: r,
                eventStateKey: n,
                actionListId: s
            }),
            o
        }
        ,
        et = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n,
        nn = {
            handler: et(ft, We)
        },
        r_ = {
            ...nn,
            types: [Es, Jy].join(" ")
        },
        ys = [{
            target: window,
            types: "resize orientationchange",
            throttle: !0
        }, {
            target: document,
            types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
            throttle: !0
        }],
        Uy = "mouseover mouseout",
        _s = {
            types: ys
        },
        Lk = {
            PAGE_START: Zy,
            PAGE_FINISH: Qy
        },
        tn = ( () => {
            let e = window.pageXOffset !== void 0
              , r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
            return () => ({
                scrollLeft: e ? window.pageXOffset : r.scrollLeft,
                scrollTop: e ? window.pageYOffset : r.scrollTop,
                stiffScrollTop: (0,
                zy.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
                scrollWidth: r.scrollWidth,
                scrollHeight: r.scrollHeight,
                clientWidth: r.clientWidth,
                clientHeight: r.clientHeight,
                innerWidth: window.innerWidth,
                innerHeight: window.innerHeight
            })
        }
        )(),
        Nk = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top),
        Pk = ({element: e, nativeEvent: t}) => {
            let {type: r, target: n, relatedTarget: o} = t
              , i = e.contains(n);
            if (r === "mouseover" && i)
                return !0;
            let a = e.contains(o);
            return !!(r === "mouseout" && i && a)
        }
        ,
        Mk = e => {
            let {element: t, event: {config: r}} = e
              , {clientWidth: n, clientHeight: o} = tn()
              , i = r.scrollOffsetValue
              , u = r.scrollOffsetUnit === "PX" ? i : o * (i || 0) / 100;
            return Nk(t.getBoundingClientRect(), {
                left: 0,
                top: u,
                right: n,
                bottom: o - u
            })
        }
        ,
        n_ = e => (t, r) => {
            let {type: n} = t.nativeEvent
              , o = [Es, Jy].indexOf(n) !== -1 ? n === Es : r.isActive
              , i = {
                ...r,
                isActive: o
            };
            return (!r || i.isActive !== r.isActive) && e(t, i) || i
        }
        ,
        ky = e => (t, r) => {
            let n = {
                elementHovered: Pk(t)
            };
            return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
        }
        ,
        qk = e => (t, r) => {
            let n = {
                ...r,
                elementVisible: Mk(t)
            };
            return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
        }
        ,
        Vy = e => (t, r={}) => {
            let {stiffScrollTop: n, scrollHeight: o, innerHeight: i} = tn()
              , {event: {config: a, eventTypeId: s}} = t
              , {scrollOffsetValue: u, scrollOffsetUnit: d} = a
              , h = d === "PX"
              , g = o - i
              , m = Number((n / g).toFixed(2));
            if (r && r.percentTop === m)
                return r;
            let E = (h ? u : i * (u || 0) / 100) / g, T, I, D = 0;
            r && (T = m > r.percentTop,
            I = r.scrollingDown !== T,
            D = I ? m : r.anchorTop);
            let S = s === Yy ? m >= D + E : m <= D - E
              , L = {
                ...r,
                percentTop: m,
                inBounds: S,
                anchorTop: D,
                scrollingDown: T
            };
            return r && S && (I || L.inBounds !== r.inBounds) && e(t, L) || L
        }
        ,
        Dk = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom,
        Fk = e => (t, r) => {
            let n = {
                finished: document.readyState === "complete"
            };
            return n.finished && !(r && r.finshed) && e(t),
            n
        }
        ,
        Gk = e => (t, r) => {
            let n = {
                started: !0
            };
            return r || e(t),
            n
        }
        ,
        Wy = e => (t, r={
            clickCount: 0
        }) => {
            let n = {
                clickCount: r.clickCount % 2 + 1
            };
            return n.clickCount !== r.clickCount && e(t, n) || n
        }
        ,
        Ti = (e=!0) => ({
            ...r_,
            handler: et(e ? ft : rn, n_( (t, r) => r.isActive ? nn.handler(t, r) : r))
        }),
        Ii = (e=!0) => ({
            ...r_,
            handler: et(e ? ft : rn, n_( (t, r) => r.isActive ? r : nn.handler(t, r)))
        }),
        Hy = {
            ..._s,
            handler: qk( (e, t) => {
                let {elementVisible: r} = t
                  , {event: n, store: o} = e
                  , {ixData: i} = o.getState()
                  , {events: a} = i;
                return !a[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === $y === r ? (We(e),
                {
                    ...t,
                    triggered: !0
                }) : t
            }
            )
        },
        Xy = .05,
        i_ = {
            [hk]: Ti(),
            [mk]: Ii(),
            [gk]: Ti(),
            [vk]: Ii(),
            [bk]: Ti(!1),
            [_k]: Ii(!1),
            [Ek]: Ti(),
            [yk]: Ii(),
            [Ak]: {
                types: "ecommerce-cart-open",
                handler: et(ft, We)
            },
            [xk]: {
                types: "ecommerce-cart-close",
                handler: et(ft, We)
            },
            [uk]: {
                types: "click",
                handler: et(ft, Wy( (e, {clickCount: t}) => {
                    Ck(e) ? t === 1 && We(e) : We(e)
                }
                ))
            },
            [ck]: {
                types: "click",
                handler: et(ft, Wy( (e, {clickCount: t}) => {
                    t === 2 && We(e)
                }
                ))
            },
            [lk]: {
                ...nn,
                types: "mousedown"
            },
            [fk]: {
                ...nn,
                types: "mouseup"
            },
            [dk]: {
                types: Uy,
                handler: et(ft, ky( (e, t) => {
                    t.elementHovered && We(e)
                }
                ))
            },
            [pk]: {
                types: Uy,
                handler: et(ft, ky( (e, t) => {
                    t.elementHovered || We(e)
                }
                ))
            },
            [Tk]: {
                types: "mousemove mouseout scroll",
                handler: ({store: e, element: t, eventConfig: r, nativeEvent: n, eventStateKey: o}, i={
                    clientX: 0,
                    clientY: 0,
                    pageX: 0,
                    pageY: 0
                }) => {
                    let {basedOn: a, selectedAxis: s, continuousParameterGroupId: u, reverse: d, restingState: h=0} = r
                      , {clientX: g=i.clientX, clientY: m=i.clientY, pageX: E=i.pageX, pageY: T=i.pageY} = n
                      , I = s === "X_AXIS"
                      , D = n.type === "mouseout"
                      , S = h / 100
                      , L = u
                      , R = !1;
                    switch (a) {
                    case st.VIEWPORT:
                        {
                            S = I ? Math.min(g, window.innerWidth) / window.innerWidth : Math.min(m, window.innerHeight) / window.innerHeight;
                            break
                        }
                    case st.PAGE:
                        {
                            let {scrollLeft: P, scrollTop: q, scrollWidth: M, scrollHeight: X} = tn();
                            S = I ? Math.min(P + E, M) / M : Math.min(q + T, X) / X;
                            break
                        }
                    case st.ELEMENT:
                    default:
                        {
                            L = Gy(o, u);
                            let P = n.type.indexOf("mouse") === 0;
                            if (P && ft({
                                element: t,
                                nativeEvent: n
                            }) !== !0)
                                break;
                            let q = t.getBoundingClientRect()
                              , {left: M, top: X, width: K, height: $} = q;
                            if (!P && !Dk({
                                left: g,
                                top: m
                            }, q))
                                break;
                            R = !0,
                            S = I ? (g - M) / K : (m - X) / $;
                            break
                        }
                    }
                    return D && (S > 1 - Xy || S < Xy) && (S = Math.round(S)),
                    (a !== st.ELEMENT || R || R !== i.elementHovered) && (S = d ? 1 - S : S,
                    e.dispatch(gr(L, S))),
                    {
                        elementHovered: R,
                        clientX: g,
                        clientY: m,
                        pageX: E,
                        pageY: T
                    }
                }
            },
            [Sk]: {
                types: ys,
                handler: ({store: e, eventConfig: t}) => {
                    let {continuousParameterGroupId: r, reverse: n} = t
                      , {scrollTop: o, scrollHeight: i, clientHeight: a} = tn()
                      , s = o / (i - a);
                    s = n ? 1 - s : s,
                    e.dispatch(gr(r, s))
                }
            },
            [wk]: {
                types: ys,
                handler: ({element: e, store: t, eventConfig: r, eventStateKey: n}, o={
                    scrollPercent: 0
                }) => {
                    let {scrollLeft: i, scrollTop: a, scrollWidth: s, scrollHeight: u, clientHeight: d} = tn()
                      , {basedOn: h, selectedAxis: g, continuousParameterGroupId: m, startsEntering: E, startsExiting: T, addEndOffset: I, addStartOffset: D, addOffsetValue: S=0, endOffsetValue: L=0} = r
                      , R = g === "X_AXIS";
                    if (h === st.VIEWPORT) {
                        let P = R ? i / s : a / u;
                        return P !== o.scrollPercent && t.dispatch(gr(m, P)),
                        {
                            scrollPercent: P
                        }
                    } else {
                        let P = Gy(n, m)
                          , q = e.getBoundingClientRect()
                          , M = (D ? S : 0) / 100
                          , X = (I ? L : 0) / 100;
                        M = E ? M : 1 - M,
                        X = T ? X : 1 - X;
                        let K = q.top + Math.min(q.height * M, d)
                          , J = q.top + q.height * X - K
                          , ee = Math.min(d + J, u)
                          , x = Math.min(Math.max(0, d - K), ee) / ee;
                        return x !== o.scrollPercent && t.dispatch(gr(P, x)),
                        {
                            scrollPercent: x
                        }
                    }
                }
            },
            [$y]: Hy,
            [Ik]: Hy,
            [Yy]: {
                ..._s,
                handler: Vy( (e, t) => {
                    t.scrollingDown && We(e)
                }
                )
            },
            [Ok]: {
                ..._s,
                handler: Vy( (e, t) => {
                    t.scrollingDown || We(e)
                }
                )
            },
            [Qy]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: et(rn, Fk(We))
            },
            [Zy]: {
                types: "readystatechange IX2_PAGE_UPDATE",
                handler: et(rn, Gk(We))
            }
        }
    }
    );
    var T_ = {};
    Fe(T_, {
        observeRequests: () => iV,
        startActionGroup: () => on,
        startEngine: () => Ri,
        stopActionGroup: () => mr,
        stopAllActionGroups: () => y_,
        stopEngine: () => Ci
    });
    function iV(e) {
        kt({
            store: e,
            select: ({ixRequest: t}) => t.preview,
            onChange: sV
        }),
        kt({
            store: e,
            select: ({ixRequest: t}) => t.playback,
            onChange: uV
        }),
        kt({
            store: e,
            select: ({ixRequest: t}) => t.stop,
            onChange: cV
        }),
        kt({
            store: e,
            select: ({ixRequest: t}) => t.clear,
            onChange: lV
        })
    }
    function oV(e) {
        kt({
            store: e,
            select: ({ixSession: t}) => t.mediaQueryKey,
            onChange: () => {
                Ci(e),
                g_({
                    store: e,
                    elementApi: Me
                }),
                Ri({
                    store: e,
                    allowEvents: !0
                }),
                h_()
            }
        })
    }
    function aV(e, t) {
        let r = kt({
            store: e,
            select: ({ixSession: n}) => n.tick,
            onChange: n => {
                t(n),
                r()
            }
        })
    }
    function sV({rawData: e, defer: t}, r) {
        let n = () => {
            Ri({
                store: r,
                rawData: e,
                allowEvents: !0
            }),
            h_()
        }
        ;
        t ? setTimeout(n, 0) : n()
    }
    function h_() {
        document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
    }
    function uV(e, t) {
        let {actionTypeId: r, actionListId: n, actionItemId: o, eventId: i, allowEvents: a, immediate: s, testManual: u, verbose: d=!0} = e
          , {rawData: h} = e;
        if (n && o && h && s) {
            let g = h.actionLists[n];
            g && (h = zk({
                actionList: g,
                actionItemId: o,
                rawData: h
            }))
        }
        if (Ri({
            store: t,
            rawData: h,
            allowEvents: a,
            testManual: u
        }),
        n && r === Ue.GENERAL_START_ACTION || Ts(r)) {
            mr({
                store: t,
                actionListId: n
            }),
            E_({
                store: t,
                actionListId: n,
                eventId: i
            });
            let g = on({
                store: t,
                eventId: i,
                actionListId: n,
                immediate: s,
                verbose: d
            });
            d && g && t.dispatch(hr({
                actionListId: n,
                isPlaying: !s
            }))
        }
    }
    function cV({actionListId: e}, t) {
        e ? mr({
            store: t,
            actionListId: e
        }) : y_({
            store: t
        }),
        Ci(t)
    }
    function lV(e, t) {
        Ci(t),
        g_({
            store: t,
            elementApi: Me
        })
    }
    function Ri({store: e, rawData: t, allowEvents: r, testManual: n}) {
        let {ixSession: o} = e.getState();
        t && e.dispatch(Ja(t)),
        o.active || (e.dispatch(es({
            hasBoundaryNodes: !!document.querySelector(wi),
            reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
        })),
        r && (hV(e),
        fV(),
        e.getState().ixSession.hasDefinedMediaQueries && oV(e)),
        e.dispatch(ts()),
        dV(e, n))
    }
    function fV() {
        let {documentElement: e} = document;
        e.className.indexOf(a_) === -1 && (e.className += ` ${a_}`)
    }
    function dV(e, t) {
        let r = n => {
            let {ixSession: o, ixParameters: i} = e.getState();
            o.active && (e.dispatch(pi(n, i)),
            t ? aV(e, r) : requestAnimationFrame(r))
        }
        ;
        r(window.performance.now())
    }
    function Ci(e) {
        let {ixSession: t} = e.getState();
        if (t.active) {
            let {eventListeners: r} = t;
            r.forEach(pV),
            Qk(),
            e.dispatch(rs())
        }
    }
    function pV({target: e, listenerParams: t}) {
        e.removeEventListener.apply(e, t)
    }
    function vV({store: e, eventStateKey: t, eventTarget: r, eventId: n, eventConfig: o, actionListId: i, parameterGroup: a, smoothing: s, restingValue: u}) {
        let {ixData: d, ixSession: h} = e.getState()
          , {events: g} = d
          , m = g[n]
          , {eventTypeId: E} = m
          , T = {}
          , I = {}
          , D = []
          , {continuousActionGroups: S} = a
          , {id: L} = a;
        Kk(E, o) && (L = Yk(t, L));
        let R = h.hasBoundaryNodes && r ? en(r, wi) : null;
        S.forEach(P => {
            let {keyframe: q, actionItems: M} = P;
            M.forEach(X => {
                let {actionTypeId: K} = X
                  , {target: $} = X.config;
                if (!$)
                    return;
                let J = $.boundaryMode ? R : null
                  , ee = Zk($) + Is + K;
                if (I[ee] = gV(I[ee], q, X),
                !T[ee]) {
                    T[ee] = !0;
                    let {config: U} = X;
                    xi({
                        config: U,
                        event: m,
                        eventTarget: r,
                        elementRoot: J,
                        elementApi: Me
                    }).forEach(x => {
                        D.push({
                            element: x,
                            key: ee
                        })
                    }
                    )
                }
            }
            )
        }
        ),
        D.forEach( ({element: P, key: q}) => {
            let M = I[q]
              , X = (0,
            Et.default)(M, "[0].actionItems[0]", {})
              , {actionTypeId: K} = X
              , $ = Si(K) ? ws(K)(P, X) : null
              , J = Os({
                element: P,
                actionItem: X,
                elementApi: Me
            }, $);
            xs({
                store: e,
                element: P,
                eventId: n,
                actionListId: i,
                actionItem: X,
                destination: J,
                continuous: !0,
                parameterId: L,
                actionGroups: M,
                smoothing: s,
                restingValue: u,
                pluginInstance: $
            })
        }
        )
    }
    function gV(e=[], t, r) {
        let n = [...e], o;
        return n.some( (i, a) => i.keyframe === t ? (o = a,
        !0) : !1),
        o == null && (o = n.length,
        n.push({
            keyframe: t,
            actionItems: []
        })),
        n[o].actionItems.push(r),
        n
    }
    function hV(e) {
        let {ixData: t} = e.getState()
          , {eventTypeMap: r} = t;
        m_(e),
        (0,
        Er.default)(r, (o, i) => {
            let a = i_[i];
            if (!a) {
                console.warn(`IX2 event type not configured: ${i}`);
                return
            }
            TV({
                logic: a,
                store: e,
                events: o
            })
        }
        );
        let {ixSession: n} = e.getState();
        n.eventListeners.length && EV(e)
    }
    function EV(e) {
        let t = () => {
            m_(e)
        }
        ;
        mV.forEach(r => {
            window.addEventListener(r, t),
            e.dispatch(di(window, [r, t]))
        }
        ),
        t()
    }
    function m_(e) {
        let {ixSession: t, ixData: r} = e.getState()
          , n = window.innerWidth;
        if (n !== t.viewportWidth) {
            let {mediaQueries: o} = r;
            e.dispatch(ss({
                width: n,
                mediaQueries: o
            }))
        }
    }
    function TV({logic: e, store: t, events: r}) {
        IV(r);
        let {types: n, handler: o} = e
          , {ixData: i} = t.getState()
          , {actionLists: a} = i
          , s = yV(r, bV);
        if (!(0,
        c_.default)(s))
            return;
        (0,
        Er.default)(s, (g, m) => {
            let E = r[m]
              , {action: T, id: I, mediaQueries: D=i.mediaQueryKeys} = E
              , {actionListId: S} = T.config;
            Jk(D, i.mediaQueryKeys) || t.dispatch(us()),
            T.actionTypeId === Ue.GENERAL_CONTINUOUS_ACTION && (Array.isArray(E.config) ? E.config : [E.config]).forEach(R => {
                let {continuousParameterGroupId: P} = R
                  , q = (0,
                Et.default)(a, `${S}.continuousParameterGroups`, [])
                  , M = (0,
                u_.default)(q, ({id: $}) => $ === P)
                  , X = (R.smoothing || 0) / 100
                  , K = (R.restingState || 0) / 100;
                M && g.forEach( ($, J) => {
                    let ee = I + Is + J;
                    vV({
                        store: t,
                        eventStateKey: ee,
                        eventTarget: $,
                        eventId: I,
                        eventConfig: R,
                        actionListId: S,
                        parameterGroup: M,
                        smoothing: X,
                        restingValue: K
                    })
                }
                )
            }
            ),
            (T.actionTypeId === Ue.GENERAL_START_ACTION || Ts(T.actionTypeId)) && E_({
                store: t,
                actionListId: S,
                eventId: I
            })
        }
        );
        let u = g => {
            let {ixSession: m} = t.getState();
            _V(s, (E, T, I) => {
                let D = r[T]
                  , S = m.eventState[I]
                  , {action: L, mediaQueries: R=i.mediaQueryKeys} = D;
                if (!Ai(R, m.mediaQueryKey))
                    return;
                let P = (q={}) => {
                    let M = o({
                        store: t,
                        element: E,
                        event: D,
                        eventConfig: q,
                        nativeEvent: g,
                        eventStateKey: I
                    }, S);
                    eV(M, S) || t.dispatch(ns(I, M))
                }
                ;
                L.actionTypeId === Ue.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(D.config) ? D.config : [D.config]).forEach(P) : P()
            }
            )
        }
          , d = (0,
        p_.default)(u, nV)
          , h = ({target: g=document, types: m, throttle: E}) => {
            m.split(" ").filter(Boolean).forEach(T => {
                let I = E ? d : u;
                g.addEventListener(T, I),
                t.dispatch(di(g, [T, I]))
            }
            )
        }
        ;
        Array.isArray(n) ? n.forEach(h) : typeof n == "string" && h(e)
    }
    function IV(e) {
        if (!rV)
            return;
        let t = {}
          , r = "";
        for (let n in e) {
            let {eventTypeId: o, target: i} = e[n]
              , a = ls(i);
            t[a] || (o === Ze.MOUSE_CLICK || o === Ze.MOUSE_SECOND_CLICK) && (t[a] = !0,
            r += a + "{cursor: pointer;touch-action: manipulation;}")
        }
        if (r) {
            let n = document.createElement("style");
            n.textContent = r,
            document.body.appendChild(n)
        }
    }
    function E_({store: e, actionListId: t, eventId: r}) {
        let {ixData: n, ixSession: o} = e.getState()
          , {actionLists: i, events: a} = n
          , s = a[r]
          , u = i[t];
        if (u && u.useFirstGroupAsInitialState) {
            let d = (0,
            Et.default)(u, "actionItemGroups[0].actionItems", [])
              , h = (0,
            Et.default)(s, "mediaQueries", n.mediaQueryKeys);
            if (!Ai(h, o.mediaQueryKey))
                return;
            d.forEach(g => {
                let {config: m, actionTypeId: E} = g
                  , T = m?.target?.useEventTarget === !0 && m?.target?.objectId == null ? {
                    target: s.target,
                    targets: s.targets
                } : m
                  , I = xi({
                    config: T,
                    event: s,
                    elementApi: Me
                })
                  , D = Si(E);
                I.forEach(S => {
                    let L = D ? ws(E)(S, g) : null;
                    xs({
                        destination: Os({
                            element: S,
                            actionItem: g,
                            elementApi: Me
                        }, L),
                        immediate: !0,
                        store: e,
                        element: S,
                        eventId: r,
                        actionItem: g,
                        actionListId: t,
                        pluginInstance: L
                    })
                }
                )
            }
            )
        }
    }
    function y_({store: e}) {
        let {ixInstances: t} = e.getState();
        (0,
        Er.default)(t, r => {
            if (!r.continuous) {
                let {actionListId: n, verbose: o} = r;
                As(r, e),
                o && e.dispatch(hr({
                    actionListId: n,
                    isPlaying: !1
                }))
            }
        }
        )
    }
    function mr({store: e, eventId: t, eventTarget: r, eventStateKey: n, actionListId: o}) {
        let {ixInstances: i, ixSession: a} = e.getState()
          , s = a.hasBoundaryNodes && r ? en(r, wi) : null;
        (0,
        Er.default)(i, u => {
            let d = (0,
            Et.default)(u, "actionItem.config.target.boundaryMode")
              , h = n ? u.eventStateKey === n : !0;
            if (u.actionListId === o && u.eventId === t && h) {
                if (s && d && !fs(s, u.element))
                    return;
                As(u, e),
                u.verbose && e.dispatch(hr({
                    actionListId: o,
                    isPlaying: !1
                }))
            }
        }
        )
    }
    function on({store: e, eventId: t, eventTarget: r, eventStateKey: n, actionListId: o, groupIndex: i=0, immediate: a, verbose: s}) {
        let {ixData: u, ixSession: d} = e.getState()
          , {events: h} = u
          , g = h[t] || {}
          , {mediaQueries: m=u.mediaQueryKeys} = g
          , E = (0,
        Et.default)(u, `actionLists.${o}`, {})
          , {actionItemGroups: T, useFirstGroupAsInitialState: I} = E;
        if (!T || !T.length)
            return !1;
        i >= T.length && (0,
        Et.default)(g, "config.loop") && (i = 0),
        i === 0 && I && i++;
        let S = (i === 0 || i === 1 && I) && Ts(g.action?.actionTypeId) ? g.config.delay : void 0
          , L = (0,
        Et.default)(T, [i, "actionItems"], []);
        if (!L.length || !Ai(m, d.mediaQueryKey))
            return !1;
        let R = d.hasBoundaryNodes && r ? en(r, wi) : null
          , P = Xk(L)
          , q = !1;
        return L.forEach( (M, X) => {
            let {config: K, actionTypeId: $} = M
              , J = Si($)
              , {target: ee} = K;
            if (!ee)
                return;
            let U = ee.boundaryMode ? R : null;
            xi({
                config: K,
                event: g,
                eventTarget: r,
                elementRoot: U,
                elementApi: Me
            }).forEach( (F, B) => {
                let H = J ? ws($)(F, M) : null
                  , te = J ? tV($)(F, M) : null;
                q = !0;
                let re = P === X && B === 0
                  , k = Bk({
                    element: F,
                    actionItem: M
                })
                  , Y = Os({
                    element: F,
                    actionItem: M,
                    elementApi: Me
                }, H);
                xs({
                    store: e,
                    element: F,
                    actionItem: M,
                    eventId: t,
                    eventTarget: r,
                    eventStateKey: n,
                    actionListId: o,
                    groupIndex: i,
                    isCarrier: re,
                    computedStyle: k,
                    destination: Y,
                    immediate: a,
                    verbose: s,
                    pluginInstance: H,
                    pluginDuration: te,
                    instanceDelay: S
                })
            }
            )
        }
        ),
        q
    }
    function xs(e) {
        let {store: t, computedStyle: r, ...n} = e, {element: o, actionItem: i, immediate: a, pluginInstance: s, continuous: u, restingValue: d, eventId: h} = n, g = !u, m = Wk(), {ixElements: E, ixSession: T, ixData: I} = t.getState(), D = Vk(E, o), {refState: S} = E[D] || {}, L = ds(o), R = T.reducedMotion && Ko[i.actionTypeId], P;
        if (R && u)
            switch (I.events[h]?.eventTypeId) {
            case Ze.MOUSE_MOVE:
            case Ze.MOUSE_MOVE_IN_VIEWPORT:
                P = d;
                break;
            default:
                P = .5;
                break
            }
        let q = jk(o, S, r, i, Me, s);
        if (t.dispatch(is({
            instanceId: m,
            elementId: D,
            origin: q,
            refType: L,
            skipMotion: R,
            skipToValue: P,
            ...n
        })),
        __(document.body, "ix2-animation-started", m),
        a) {
            OV(t, m);
            return
        }
        kt({
            store: t,
            select: ({ixInstances: M}) => M[m],
            onChange: b_
        }),
        g && t.dispatch(vi(m, T.tick))
    }
    function As(e, t) {
        __(document.body, "ix2-animation-stopping", {
            instanceId: e.id,
            state: t.getState()
        });
        let {elementId: r, actionItem: n} = e
          , {ixElements: o} = t.getState()
          , {ref: i, refType: a} = o[r] || {};
        a === v_ && $k(i, n, Me),
        t.dispatch(os(e.id))
    }
    function __(e, t, r) {
        let n = document.createEvent("CustomEvent");
        n.initCustomEvent(t, !0, !0, r),
        e.dispatchEvent(n)
    }
    function OV(e, t) {
        let {ixParameters: r} = e.getState();
        e.dispatch(vi(t, 0)),
        e.dispatch(pi(performance.now(), r));
        let {ixInstances: n} = e.getState();
        b_(n[t], e)
    }
    function b_(e, t) {
        let {active: r, continuous: n, complete: o, elementId: i, actionItem: a, actionTypeId: s, renderType: u, current: d, groupIndex: h, eventId: g, eventTarget: m, eventStateKey: E, actionListId: T, isCarrier: I, styleProp: D, verbose: S, pluginInstance: L} = e
          , {ixData: R, ixSession: P} = t.getState()
          , {events: q} = R
          , M = q[g] || {}
          , {mediaQueries: X=R.mediaQueryKeys} = M;
        if (Ai(X, P.mediaQueryKey) && (n || r || o)) {
            if (d || u === kk && o) {
                t.dispatch(as(i, s, d, a));
                let {ixElements: K} = t.getState()
                  , {ref: $, refType: J, refState: ee} = K[i] || {}
                  , U = ee && ee[s];
                (J === v_ || Si(s)) && Hk($, ee, U, g, a, D, Me, u, L)
            }
            if (o) {
                if (I) {
                    let K = on({
                        store: t,
                        eventId: g,
                        eventTarget: m,
                        eventStateKey: E,
                        actionListId: T,
                        groupIndex: h + 1,
                        verbose: S
                    });
                    S && !K && t.dispatch(hr({
                        actionListId: T,
                        isPlaying: !1
                    }))
                }
                As(e, t)
            }
        }
    }
    var u_, Et, c_, l_, f_, d_, Er, p_, Oi, Uk, Ts, Is, wi, v_, kk, a_, xi, Vk, Os, kt, Wk, Hk, g_, Xk, Bk, jk, zk, Kk, Yk, Ai, $k, Qk, Zk, Jk, eV, Si, ws, tV, s_, rV, nV, mV, yV, _V, bV, bs = me( () => {
        "use strict";
        u_ = fe(Ia()),
        Et = fe(Kn()),
        c_ = fe(qm()),
        l_ = fe(sE()),
        f_ = fe(cE()),
        d_ = fe(fE()),
        Er = fe(mE()),
        p_ = fe(OE());
        ke();
        Oi = fe(Ut());
        gi();
        CE();
        o_();
        Uk = Object.keys(xn),
        Ts = e => Uk.includes(e),
        {COLON_DELIMITER: Is, BOUNDARY_SELECTOR: wi, HTML_ELEMENT: v_, RENDER_GENERAL: kk, W_MOD_IX: a_} = Re,
        {getAffectedElements: xi, getElementId: Vk, getDestinationValues: Os, observeStore: kt, getInstanceId: Wk, renderHTMLElement: Hk, clearAllStyles: g_, getMaxDurationItemIndex: Xk, getComputedStyle: Bk, getInstanceOrigin: jk, reduceListToGroup: zk, shouldNamespaceEventParameter: Kk, getNamespacedParameterId: Yk, shouldAllowMediaQuery: Ai, cleanupHTMLElement: $k, clearObjectCache: Qk, stringifyTarget: Zk, mediaQueriesEqual: Jk, shallowEqual: eV} = Oi.IX2VanillaUtils,
        {isPluginType: Si, createPluginInstance: ws, getPluginDuration: tV} = Oi.IX2VanillaPlugins,
        s_ = navigator.userAgent,
        rV = s_.match(/iPad/i) || s_.match(/iPhone/),
        nV = 12;
        mV = ["resize", "orientationchange"];
        yV = (e, t) => (0,
        l_.default)((0,
        d_.default)(e, t), f_.default),
        _V = (e, t) => {
            (0,
            Er.default)(e, (r, n) => {
                r.forEach( (o, i) => {
                    let a = n + Is + i;
                    t(o, n, a)
                }
                )
            }
            )
        }
        ,
        bV = e => {
            let t = {
                target: e.target,
                targets: e.targets
            };
            return xi({
                config: t,
                elementApi: Me
            })
        }
    }
    );
    var O_ = c(yt => {
        "use strict";
        var wV = pn().default
          , xV = au().default;
        Object.defineProperty(yt, "__esModule", {
            value: !0
        });
        yt.actions = void 0;
        yt.destroy = I_;
        yt.init = LV;
        yt.setEnv = CV;
        yt.store = void 0;
        Bl();
        var AV = Bo()
          , SV = xV((hm(),
        nt(gm)))
          , Ss = (bs(),
        nt(T_))
          , RV = wV((gi(),
        nt(xE)));
        yt.actions = RV;
        var Rs = yt.store = (0,
        AV.createStore)(SV.default);
        function CV(e) {
            e() && (0,
            Ss.observeRequests)(Rs)
        }
        function LV(e) {
            I_(),
            (0,
            Ss.startEngine)({
                store: Rs,
                rawData: e,
                allowEvents: !0
            })
        }
        function I_() {
            (0,
            Ss.stopEngine)(Rs)
        }
    }
    );
    var S_ = c( (Zj, A_) => {
        "use strict";
        var w_ = Ge()
          , x_ = O_();
        x_.setEnv(w_.env);
        w_.define("ix2", A_.exports = function() {
            return x_
        }
        )
    }
    );
    var C_ = c( (Jj, R_) => {
        "use strict";
        var yr = Ge();
        yr.define("links", R_.exports = function(e, t) {
            var r = {}, n = e(window), o, i = yr.env(), a = window.location, s = document.createElement("a"), u = "w--current", d = /index\.(html|php)$/, h = /\/$/, g, m;
            r.ready = r.design = r.preview = E;
            function E() {
                o = i && yr.env("design"),
                m = yr.env("slug") || a.pathname || "",
                yr.scroll.off(I),
                g = [];
                for (var S = document.links, L = 0; L < S.length; ++L)
                    T(S[L]);
                g.length && (yr.scroll.on(I),
                I())
            }
            function T(S) {
                if (!S.getAttribute("hreflang")) {
                    var L = o && S.getAttribute("href-disabled") || S.getAttribute("href");
                    if (s.href = L,
                    !(L.indexOf(":") >= 0)) {
                        var R = e(S);
                        if (s.hash.length > 1 && s.host + s.pathname === a.host + a.pathname) {
                            if (!/^#[a-zA-Z0-9\-\_]+$/.test(s.hash))
                                return;
                            var P = e(s.hash);
                            P.length && g.push({
                                link: R,
                                sec: P,
                                active: !1
                            });
                            return
                        }
                        if (!(L === "#" || L === "")) {
                            var q = s.href === a.href || L === m || d.test(L) && h.test(m);
                            D(R, u, q)
                        }
                    }
                }
            }
            function I() {
                var S = n.scrollTop()
                  , L = n.height();
                t.each(g, function(R) {
                    if (!R.link.attr("hreflang")) {
                        var P = R.link
                          , q = R.sec
                          , M = q.offset().top
                          , X = q.outerHeight()
                          , K = L * .5
                          , $ = q.is(":visible") && M + X - K >= S && M + K <= S + L;
                        R.active !== $ && (R.active = $,
                        D(P, u, $))
                    }
                })
            }
            function D(S, L, R) {
                var P = S.hasClass(L);
                R && P || !R && !P || (R ? S.addClass(L) : S.removeClass(L))
            }
            return r
        }
        )
    }
    );
    var N_ = c( (ez, L_) => {
        "use strict";
        var Li = Ge();
        Li.define("scroll", L_.exports = function(e) {
            var t = {
                WF_CLICK_EMPTY: "click.wf-empty-link",
                WF_CLICK_SCROLL: "click.wf-scroll"
            }
              , r = window.location
              , n = T() ? null : window.history
              , o = e(window)
              , i = e(document)
              , a = e(document.body)
              , s = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(U) {
                window.setTimeout(U, 15)
            }
              , u = Li.env("editor") ? ".w-editor-body" : "body"
              , d = "header, " + u + " > .header, " + u + " > .w-nav:not([data-no-scroll])"
              , h = 'a[href="#"]'
              , g = 'a[href*="#"]:not(.w-tab-link):not(' + h + ")"
              , m = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}'
              , E = document.createElement("style");
            E.appendChild(document.createTextNode(m));
            function T() {
                try {
                    return !!window.frameElement
                } catch {
                    return !0
                }
            }
            var I = /^#[a-zA-Z0-9][\w:.-]*$/;
            function D(U) {
                return I.test(U.hash) && U.host + U.pathname === r.host + r.pathname
            }
            let S = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");
            function L() {
                return document.body.getAttribute("data-wf-scroll-motion") === "none" || S.matches
            }
            function R(U, x) {
                var F;
                switch (x) {
                case "add":
                    F = U.attr("tabindex"),
                    F ? U.attr("data-wf-tabindex-swap", F) : U.attr("tabindex", "-1");
                    break;
                case "remove":
                    F = U.attr("data-wf-tabindex-swap"),
                    F ? (U.attr("tabindex", F),
                    U.removeAttr("data-wf-tabindex-swap")) : U.removeAttr("tabindex");
                    break
                }
                U.toggleClass("wf-force-outline-none", x === "add")
            }
            function P(U) {
                var x = U.currentTarget;
                if (!(Li.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(x.className))) {
                    var F = D(x) ? x.hash : "";
                    if (F !== "") {
                        var B = e(F);
                        B.length && (U && (U.preventDefault(),
                        U.stopPropagation()),
                        q(F, U),
                        window.setTimeout(function() {
                            M(B, function() {
                                R(B, "add"),
                                B.get(0).focus({
                                    preventScroll: !0
                                }),
                                R(B, "remove")
                            })
                        }, U ? 0 : 300))
                    }
                }
            }
            function q(U) {
                if (r.hash !== U && n && n.pushState && !(Li.env.chrome && r.protocol === "file:")) {
                    var x = n.state && n.state.hash;
                    x !== U && n.pushState({
                        hash: U
                    }, "", U)
                }
            }
            function M(U, x) {
                var F = o.scrollTop()
                  , B = X(U);
                if (F !== B) {
                    var H = K(U, F, B)
                      , te = Date.now()
                      , re = function() {
                        var k = Date.now() - te;
                        window.scroll(0, $(F, B, k, H)),
                        k <= H ? s(re) : typeof x == "function" && x()
                    };
                    s(re)
                }
            }
            function X(U) {
                var x = e(d)
                  , F = x.css("position") === "fixed" ? x.outerHeight() : 0
                  , B = U.offset().top - F;
                if (U.data("scroll") === "mid") {
                    var H = o.height() - F
                      , te = U.outerHeight();
                    te < H && (B -= Math.round((H - te) / 2))
                }
                return B
            }
            function K(U, x, F) {
                if (L())
                    return 0;
                var B = 1;
                return a.add(U).each(function(H, te) {
                    var re = parseFloat(te.getAttribute("data-scroll-time"));
                    !isNaN(re) && re >= 0 && (B = re)
                }),
                (472.143 * Math.log(Math.abs(x - F) + 125) - 2e3) * B
            }
            function $(U, x, F, B) {
                return F > B ? x : U + (x - U) * J(F / B)
            }
            function J(U) {
                return U < .5 ? 4 * U * U * U : (U - 1) * (2 * U - 2) * (2 * U - 2) + 1
            }
            function ee() {
                var {WF_CLICK_EMPTY: U, WF_CLICK_SCROLL: x} = t;
                i.on(x, g, P),
                i.on(U, h, function(F) {
                    F.preventDefault()
                }),
                document.head.insertBefore(E, document.head.firstChild)
            }
            return {
                ready: ee
            }
        }
        )
    }
    );
    var M_ = c( (tz, P_) => {
        "use strict";
        var NV = Ge();
        NV.define("touch", P_.exports = function(e) {
            var t = {}
              , r = window.getSelection;
            e.event.special.tap = {
                bindType: "click",
                delegateType: "click"
            },
            t.init = function(i) {
                return i = typeof i == "string" ? e(i).get(0) : i,
                i ? new n(i) : null
            }
            ;
            function n(i) {
                var a = !1, s = !1, u = Math.min(Math.round(window.innerWidth * .04), 40), d, h;
                i.addEventListener("touchstart", g, !1),
                i.addEventListener("touchmove", m, !1),
                i.addEventListener("touchend", E, !1),
                i.addEventListener("touchcancel", T, !1),
                i.addEventListener("mousedown", g, !1),
                i.addEventListener("mousemove", m, !1),
                i.addEventListener("mouseup", E, !1),
                i.addEventListener("mouseout", T, !1);
                function g(D) {
                    var S = D.touches;
                    S && S.length > 1 || (a = !0,
                    S ? (s = !0,
                    d = S[0].clientX) : d = D.clientX,
                    h = d)
                }
                function m(D) {
                    if (a) {
                        if (s && D.type === "mousemove") {
                            D.preventDefault(),
                            D.stopPropagation();
                            return
                        }
                        var S = D.touches
                          , L = S ? S[0].clientX : D.clientX
                          , R = L - h;
                        h = L,
                        Math.abs(R) > u && r && String(r()) === "" && (o("swipe", D, {
                            direction: R > 0 ? "right" : "left"
                        }),
                        T())
                    }
                }
                function E(D) {
                    if (a && (a = !1,
                    s && D.type === "mouseup")) {
                        D.preventDefault(),
                        D.stopPropagation(),
                        s = !1;
                        return
                    }
                }
                function T() {
                    a = !1
                }
                function I() {
                    i.removeEventListener("touchstart", g, !1),
                    i.removeEventListener("touchmove", m, !1),
                    i.removeEventListener("touchend", E, !1),
                    i.removeEventListener("touchcancel", T, !1),
                    i.removeEventListener("mousedown", g, !1),
                    i.removeEventListener("mousemove", m, !1),
                    i.removeEventListener("mouseup", E, !1),
                    i.removeEventListener("mouseout", T, !1),
                    i = null
                }
                this.destroy = I
            }
            function o(i, a, s) {
                var u = e.Event(i, {
                    originalEvent: a
                });
                e(a.target).trigger(u, s)
            }
            return t.instance = t.init(document),
            t
        }
        )
    }
    );
    var F_ = c( (rz, D_) => {
        "use strict";
        var Vt = Ge()
          , PV = br()
          , tt = {
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            ESCAPE: 27,
            SPACE: 32,
            ENTER: 13,
            HOME: 36,
            END: 35
        }
          , q_ = !0
          , MV = /^#[a-zA-Z0-9\-_]+$/;
        Vt.define("dropdown", D_.exports = function(e, t) {
            var r = t.debounce, n = {}, o = Vt.env(), i = !1, a, s = Vt.env.touch, u = ".w-dropdown", d = "w--open", h = PV.triggers, g = 900, m = "focusout" + u, E = "keydown" + u, T = "mouseenter" + u, I = "mousemove" + u, D = "mouseleave" + u, S = (s ? "click" : "mouseup") + u, L = "w-close" + u, R = "setting" + u, P = e(document), q;
            n.ready = M,
            n.design = function() {
                i && x(),
                i = !1,
                M()
            }
            ,
            n.preview = function() {
                i = !0,
                M()
            }
            ;
            function M() {
                a = o && Vt.env("design"),
                q = P.find(u),
                q.each(X)
            }
            function X(l, G) {
                var V = e(G)
                  , A = e.data(G, u);
                A || (A = e.data(G, u, {
                    open: !1,
                    el: V,
                    config: {},
                    selectedIdx: -1
                })),
                A.toggle = A.el.children(".w-dropdown-toggle"),
                A.list = A.el.children(".w-dropdown-list"),
                A.links = A.list.find("a:not(.w-dropdown .w-dropdown a)"),
                A.complete = H(A),
                A.mouseLeave = re(A),
                A.mouseUpOutside = B(A),
                A.mouseMoveOutside = k(A),
                K(A);
                var ie = A.toggle.attr("id")
                  , le = A.list.attr("id");
                ie || (ie = "w-dropdown-toggle-" + l),
                le || (le = "w-dropdown-list-" + l),
                A.toggle.attr("id", ie),
                A.toggle.attr("aria-controls", le),
                A.toggle.attr("aria-haspopup", "menu"),
                A.toggle.attr("aria-expanded", "false"),
                A.toggle.find(".w-icon-dropdown-toggle").attr("aria-hidden", "true"),
                A.toggle.prop("tagName") !== "BUTTON" && (A.toggle.attr("role", "button"),
                A.toggle.attr("tabindex") || A.toggle.attr("tabindex", "0")),
                A.list.attr("id", le),
                A.list.attr("aria-labelledby", ie),
                A.links.each(function(v, W) {
                    W.hasAttribute("tabindex") || W.setAttribute("tabindex", "0"),
                    MV.test(W.hash) && W.addEventListener("click", U.bind(null, A))
                }),
                A.el.off(u),
                A.toggle.off(u),
                A.nav && A.nav.off(u);
                var oe = J(A, q_);
                a && A.el.on(R, $(A)),
                a || (o && (A.hovering = !1,
                U(A)),
                A.config.hover && A.toggle.on(T, te(A)),
                A.el.on(L, oe),
                A.el.on(E, Y(A)),
                A.el.on(m, _(A)),
                A.toggle.on(S, oe),
                A.toggle.on(E, y(A)),
                A.nav = A.el.closest(".w-nav"),
                A.nav.on(L, oe))
            }
            function K(l) {
                var G = Number(l.el.css("z-index"));
                l.manageZ = G === g || G === g + 1,
                l.config = {
                    hover: l.el.attr("data-hover") === "true" && !s,
                    delay: l.el.attr("data-delay")
                }
            }
            function $(l) {
                return function(G, V) {
                    V = V || {},
                    K(l),
                    V.open === !0 && ee(l, !0),
                    V.open === !1 && U(l, {
                        immediate: !0
                    })
                }
            }
            function J(l, G) {
                return r(function(V) {
                    if (l.open || V && V.type === "w-close")
                        return U(l, {
                            forceClose: G
                        });
                    ee(l)
                })
            }
            function ee(l) {
                if (!l.open) {
                    F(l),
                    l.open = !0,
                    l.list.addClass(d),
                    l.toggle.addClass(d),
                    l.toggle.attr("aria-expanded", "true"),
                    h.intro(0, l.el[0]),
                    Vt.redraw.up(),
                    l.manageZ && l.el.css("z-index", g + 1);
                    var G = Vt.env("editor");
                    a || P.on(S, l.mouseUpOutside),
                    l.hovering && !G && l.el.on(D, l.mouseLeave),
                    l.hovering && G && P.on(I, l.mouseMoveOutside),
                    window.clearTimeout(l.delayId)
                }
            }
            function U(l, {immediate: G, forceClose: V}={}) {
                if (l.open && !(l.config.hover && l.hovering && !V)) {
                    l.toggle.attr("aria-expanded", "false"),
                    l.open = !1;
                    var A = l.config;
                    if (h.outro(0, l.el[0]),
                    P.off(S, l.mouseUpOutside),
                    P.off(I, l.mouseMoveOutside),
                    l.el.off(D, l.mouseLeave),
                    window.clearTimeout(l.delayId),
                    !A.delay || G)
                        return l.complete();
                    l.delayId = window.setTimeout(l.complete, A.delay)
                }
            }
            function x() {
                P.find(u).each(function(l, G) {
                    e(G).triggerHandler(L)
                })
            }
            function F(l) {
                var G = l.el[0];
                q.each(function(V, A) {
                    var ie = e(A);
                    ie.is(G) || ie.has(G).length || ie.triggerHandler(L)
                })
            }
            function B(l) {
                return l.mouseUpOutside && P.off(S, l.mouseUpOutside),
                r(function(G) {
                    if (l.open) {
                        var V = e(G.target);
                        if (!V.closest(".w-dropdown-toggle").length) {
                            var A = e.inArray(l.el[0], V.parents(u)) === -1
                              , ie = Vt.env("editor");
                            if (A) {
                                if (ie) {
                                    var le = V.parents().length === 1 && V.parents("svg").length === 1
                                      , oe = V.parents(".w-editor-bem-EditorHoverControls").length;
                                    if (le || oe)
                                        return
                                }
                                U(l)
                            }
                        }
                    }
                })
            }
            function H(l) {
                return function() {
                    l.list.removeClass(d),
                    l.toggle.removeClass(d),
                    l.manageZ && l.el.css("z-index", "")
                }
            }
            function te(l) {
                return function() {
                    l.hovering = !0,
                    ee(l)
                }
            }
            function re(l) {
                return function() {
                    l.hovering = !1,
                    l.links.is(":focus") || U(l)
                }
            }
            function k(l) {
                return r(function(G) {
                    if (l.open) {
                        var V = e(G.target)
                          , A = e.inArray(l.el[0], V.parents(u)) === -1;
                        if (A) {
                            var ie = V.parents(".w-editor-bem-EditorHoverControls").length
                              , le = V.parents(".w-editor-bem-RTToolbar").length
                              , oe = e(".w-editor-bem-EditorOverlay")
                              , v = oe.find(".w-editor-edit-outline").length || oe.find(".w-editor-bem-RTToolbar").length;
                            if (ie || le || v)
                                return;
                            l.hovering = !1,
                            U(l)
                        }
                    }
                })
            }
            function Y(l) {
                return function(G) {
                    if (!(a || !l.open))
                        switch (l.selectedIdx = l.links.index(document.activeElement),
                        G.keyCode) {
                        case tt.HOME:
                            return l.open ? (l.selectedIdx = 0,
                            p(l),
                            G.preventDefault()) : void 0;
                        case tt.END:
                            return l.open ? (l.selectedIdx = l.links.length - 1,
                            p(l),
                            G.preventDefault()) : void 0;
                        case tt.ESCAPE:
                            return U(l),
                            l.toggle.focus(),
                            G.stopPropagation();
                        case tt.ARROW_RIGHT:
                        case tt.ARROW_DOWN:
                            return l.selectedIdx = Math.min(l.links.length - 1, l.selectedIdx + 1),
                            p(l),
                            G.preventDefault();
                        case tt.ARROW_LEFT:
                        case tt.ARROW_UP:
                            return l.selectedIdx = Math.max(-1, l.selectedIdx - 1),
                            p(l),
                            G.preventDefault()
                        }
                }
            }
            function p(l) {
                l.links[l.selectedIdx] && l.links[l.selectedIdx].focus()
            }
            function y(l) {
                var G = J(l, q_);
                return function(V) {
                    if (!a) {
                        if (!l.open)
                            switch (V.keyCode) {
                            case tt.ARROW_UP:
                            case tt.ARROW_DOWN:
                                return V.stopPropagation()
                            }
                        switch (V.keyCode) {
                        case tt.SPACE:
                        case tt.ENTER:
                            return G(),
                            V.stopPropagation(),
                            V.preventDefault()
                        }
                    }
                }
            }
            function _(l) {
                return r(function(G) {
                    var {relatedTarget: V, target: A} = G
                      , ie = l.el[0]
                      , le = ie.contains(V) || ie.contains(A);
                    return le || U(l),
                    G.stopPropagation()
                })
            }
            return n
        }
        )
    }
    );
    var G_ = c(Cs => {
        "use strict";
        Object.defineProperty(Cs, "__esModule", {
            value: !0
        });
        Cs.default = qV;
        function qV(e, t, r, n, o, i, a, s, u, d, h, g, m) {
            return function(E) {
                e(E);
                var T = E.form
                  , I = {
                    name: T.attr("data-name") || T.attr("name") || "Untitled Form",
                    pageId: T.attr("data-wf-page-id") || "",
                    elementId: T.attr("data-wf-element-id") || "",
                    source: t.href,
                    test: r.env(),
                    fields: {},
                    fileUploads: {},
                    dolphin: /pass[\s-_]?(word|code)|secret|login|credentials/i.test(T.html()),
                    trackingCookies: n()
                };
                let D = T.attr("data-wf-flow");
                D && (I.wfFlow = D),
                o(E);
                var S = i(T, I.fields);
                if (S)
                    return a(S);
                if (I.fileUploads = s(T),
                u(E),
                !d) {
                    h(E);
                    return
                }
                g.ajax({
                    url: m,
                    type: "POST",
                    data: I,
                    dataType: "json",
                    crossDomain: !0
                }).done(function(L) {
                    L && L.code === 200 && (E.success = !0),
                    h(E)
                }).fail(function() {
                    h(E)
                })
            }
        }
    }
    );
    var k_ = c( (iz, U_) => {
        "use strict";
        var Ni = Ge();
        Ni.define("forms", U_.exports = function(e, t) {
            var r = {}, n = e(document), o, i = window.location, a = window.XDomainRequest && !window.atob, s = ".w-form", u, d = /e(-)?mail/i, h = /^\S+@\S+$/, g = window.alert, m = Ni.env(), E, T, I, D = /list-manage[1-9]?.com/i, S = t.debounce(function() {
                g("Oops! This page has improperly configured forms. Please contact your website administrator to fix this issue.")
            }, 100);
            r.ready = r.design = r.preview = function() {
                L(),
                !m && !E && P()
            }
            ;
            function L() {
                u = e("html").attr("data-wf-site"),
                T = "https://webflow.com/api/v1/form/" + u,
                a && T.indexOf("https://webflow.com") >= 0 && (T = T.replace("https://webflow.com", "https://formdata.webflow.com")),
                I = `${T}/signFile`,
                o = e(s + " form"),
                o.length && o.each(R)
            }
            function R(k, Y) {
                var p = e(Y)
                  , y = e.data(Y, s);
                y || (y = e.data(Y, s, {
                    form: p
                })),
                q(y);
                var _ = p.closest("div.w-form");
                y.done = _.find("> .w-form-done"),
                y.fail = _.find("> .w-form-fail"),
                y.fileUploads = _.find(".w-file-upload"),
                y.fileUploads.each(function(V) {
                    H(V, y)
                });
                var l = y.form.attr("aria-label") || y.form.attr("data-name") || "Form";
                y.done.attr("aria-label") || y.form.attr("aria-label", l),
                y.done.attr("tabindex", "-1"),
                y.done.attr("role", "region"),
                y.done.attr("aria-label") || y.done.attr("aria-label", l + " success"),
                y.fail.attr("tabindex", "-1"),
                y.fail.attr("role", "region"),
                y.fail.attr("aria-label") || y.fail.attr("aria-label", l + " failure");
                var G = y.action = p.attr("action");
                if (y.handler = null,
                y.redirect = p.attr("data-redirect"),
                D.test(G)) {
                    y.handler = x;
                    return
                }
                if (!G) {
                    if (u) {
                        y.handler = ( () => {
                            let V = G_().default;
                            return V(q, i, Ni, J, B, X, g, K, M, u, F, e, T)
                        }
                        )();
                        return
                    }
                    S()
                }
            }
            function P() {
                E = !0,
                n.on("submit", s + " form", function(V) {
                    var A = e.data(this, s);
                    A.handler && (A.evt = V,
                    A.handler(A))
                });
                let k = ".w-checkbox-input"
                  , Y = ".w-radio-input"
                  , p = "w--redirected-checked"
                  , y = "w--redirected-focus"
                  , _ = "w--redirected-focus-visible"
                  , l = ":focus-visible, [data-wf-focus-visible]"
                  , G = [["checkbox", k], ["radio", Y]];
                n.on("change", s + ' form input[type="checkbox"]:not(' + k + ")", V => {
                    e(V.target).siblings(k).toggleClass(p)
                }
                ),
                n.on("change", s + ' form input[type="radio"]', V => {
                    e(`input[name="${V.target.name}"]:not(${k})`).map( (ie, le) => e(le).siblings(Y).removeClass(p));
                    let A = e(V.target);
                    A.hasClass("w-radio-input") || A.siblings(Y).addClass(p)
                }
                ),
                G.forEach( ([V,A]) => {
                    n.on("focus", s + ` form input[type="${V}"]:not(` + A + ")", ie => {
                        e(ie.target).siblings(A).addClass(y),
                        e(ie.target).filter(l).siblings(A).addClass(_)
                    }
                    ),
                    n.on("blur", s + ` form input[type="${V}"]:not(` + A + ")", ie => {
                        e(ie.target).siblings(A).removeClass(`${y} ${_}`)
                    }
                    )
                }
                )
            }
            function q(k) {
                var Y = k.btn = k.form.find(':input[type="submit"]');
                k.wait = k.btn.attr("data-wait") || null,
                k.success = !1,
                Y.prop("disabled", !1),
                k.label && Y.val(k.label)
            }
            function M(k) {
                var Y = k.btn
                  , p = k.wait;
                Y.prop("disabled", !0),
                p && (k.label = Y.val(),
                Y.val(p))
            }
            function X(k, Y) {
                var p = null;
                return Y = Y || {},
                k.find(':input:not([type="submit"]):not([type="file"])').each(function(y, _) {
                    var l = e(_)
                      , G = l.attr("type")
                      , V = l.attr("data-name") || l.attr("name") || "Field " + (y + 1)
                      , A = l.val();
                    if (G === "checkbox")
                        A = l.is(":checked");
                    else if (G === "radio") {
                        if (Y[V] === null || typeof Y[V] == "string")
                            return;
                        A = k.find('input[name="' + l.attr("name") + '"]:checked').val() || null
                    }
                    typeof A == "string" && (A = e.trim(A)),
                    Y[V] = A,
                    p = p || ee(l, G, V, A)
                }),
                p
            }
            function K(k) {
                var Y = {};
                return k.find(':input[type="file"]').each(function(p, y) {
                    var _ = e(y)
                      , l = _.attr("data-name") || _.attr("name") || "File " + (p + 1)
                      , G = _.attr("data-value");
                    typeof G == "string" && (G = e.trim(G)),
                    Y[l] = G
                }),
                Y
            }
            let $ = {
                _mkto_trk: "marketo"
            };
            function J() {
                return document.cookie.split("; ").reduce(function(Y, p) {
                    let y = p.split("=")
                      , _ = y[0];
                    if (_ in $) {
                        let l = $[_]
                          , G = y.slice(1).join("=");
                        Y[l] = G
                    }
                    return Y
                }, {})
            }
            function ee(k, Y, p, y) {
                var _ = null;
                return Y === "password" ? _ = "Passwords cannot be submitted." : k.attr("required") ? y ? d.test(k.attr("type")) && (h.test(y) || (_ = "Please enter a valid email address for: " + p)) : _ = "Please fill out the required field: " + p : p === "g-recaptcha-response" && !y && (_ = "Please confirm you\u2019re not a robot."),
                _
            }
            function U(k) {
                B(k),
                F(k)
            }
            function x(k) {
                q(k);
                var Y = k.form
                  , p = {};
                if (/^https/.test(i.href) && !/^https/.test(k.action)) {
                    Y.attr("method", "post");
                    return
                }
                B(k);
                var y = X(Y, p);
                if (y)
                    return g(y);
                M(k);
                var _;
                t.each(p, function(A, ie) {
                    d.test(ie) && (p.EMAIL = A),
                    /^((full[ _-]?)?name)$/i.test(ie) && (_ = A),
                    /^(first[ _-]?name)$/i.test(ie) && (p.FNAME = A),
                    /^(last[ _-]?name)$/i.test(ie) && (p.LNAME = A)
                }),
                _ && !p.FNAME && (_ = _.split(" "),
                p.FNAME = _[0],
                p.LNAME = p.LNAME || _[1]);
                var l = k.action.replace("/post?", "/post-json?") + "&c=?"
                  , G = l.indexOf("u=") + 2;
                G = l.substring(G, l.indexOf("&", G));
                var V = l.indexOf("id=") + 3;
                V = l.substring(V, l.indexOf("&", V)),
                p["b_" + G + "_" + V] = "",
                e.ajax({
                    url: l,
                    data: p,
                    dataType: "jsonp"
                }).done(function(A) {
                    k.success = A.result === "success" || /already/.test(A.msg),
                    k.success || console.info("MailChimp error: " + A.msg),
                    F(k)
                }).fail(function() {
                    F(k)
                })
            }
            function F(k) {
                var Y = k.form
                  , p = k.redirect
                  , y = k.success;
                if (y && p) {
                    Ni.location(p);
                    return
                }
                k.done.toggle(y),
                k.fail.toggle(!y),
                y ? k.done.focus() : k.fail.focus(),
                Y.toggle(!y),
                q(k)
            }
            function B(k) {
                k.evt && k.evt.preventDefault(),
                k.evt = null
            }
            function H(k, Y) {
                if (!Y.fileUploads || !Y.fileUploads[k])
                    return;
                var p, y = e(Y.fileUploads[k]), _ = y.find("> .w-file-upload-default"), l = y.find("> .w-file-upload-uploading"), G = y.find("> .w-file-upload-success"), V = y.find("> .w-file-upload-error"), A = _.find(".w-file-upload-input"), ie = _.find(".w-file-upload-label"), le = ie.children(), oe = V.find(".w-file-upload-error-msg"), v = G.find(".w-file-upload-file"), W = G.find(".w-file-remove-link"), Q = v.find(".w-file-upload-file-name"), j = oe.attr("data-w-size-error"), de = oe.attr("data-w-type-error"), qe = oe.attr("data-w-generic-error");
                if (m || ie.on("click keydown", function(O) {
                    O.type === "keydown" && O.which !== 13 && O.which !== 32 || (O.preventDefault(),
                    A.click())
                }),
                ie.find(".w-icon-file-upload-icon").attr("aria-hidden", "true"),
                W.find(".w-icon-file-upload-remove").attr("aria-hidden", "true"),
                m)
                    A.on("click", function(O) {
                        O.preventDefault()
                    }),
                    ie.on("click", function(O) {
                        O.preventDefault()
                    }),
                    le.on("click", function(O) {
                        O.preventDefault()
                    });
                else {
                    W.on("click keydown", function(O) {
                        if (O.type === "keydown") {
                            if (O.which !== 13 && O.which !== 32)
                                return;
                            O.preventDefault()
                        }
                        A.removeAttr("data-value"),
                        A.val(""),
                        Q.html(""),
                        _.toggle(!0),
                        G.toggle(!1),
                        ie.focus()
                    }),
                    A.on("change", function(O) {
                        p = O.target && O.target.files && O.target.files[0],
                        p && (_.toggle(!1),
                        V.toggle(!1),
                        l.toggle(!0),
                        l.focus(),
                        Q.text(p.name),
                        C() || M(Y),
                        Y.fileUploads[k].uploading = !0,
                        te(p, b))
                    });
                    var Xe = ie.outerHeight();
                    A.height(Xe),
                    A.width(1)
                }
                function f(O) {
                    var N = O.responseJSON && O.responseJSON.msg
                      , Z = qe;
                    typeof N == "string" && N.indexOf("InvalidFileTypeError") === 0 ? Z = de : typeof N == "string" && N.indexOf("MaxFileSizeError") === 0 && (Z = j),
                    oe.text(Z),
                    A.removeAttr("data-value"),
                    A.val(""),
                    l.toggle(!1),
                    _.toggle(!0),
                    V.toggle(!0),
                    V.focus(),
                    Y.fileUploads[k].uploading = !1,
                    C() || q(Y)
                }
                function b(O, N) {
                    if (O)
                        return f(O);
                    var Z = N.fileName
                      , ae = N.postData
                      , ge = N.fileId
                      , z = N.s3Url;
                    A.attr("data-value", ge),
                    re(z, ae, p, Z, w)
                }
                function w(O) {
                    if (O)
                        return f(O);
                    l.toggle(!1),
                    G.css("display", "inline-block"),
                    G.focus(),
                    Y.fileUploads[k].uploading = !1,
                    C() || q(Y)
                }
                function C() {
                    var O = Y.fileUploads && Y.fileUploads.toArray() || [];
                    return O.some(function(N) {
                        return N.uploading
                    })
                }
            }
            function te(k, Y) {
                var p = new URLSearchParams({
                    name: k.name,
                    size: k.size
                });
                e.ajax({
                    type: "GET",
                    url: `${I}?${p}`,
                    crossDomain: !0
                }).done(function(y) {
                    Y(null, y)
                }).fail(function(y) {
                    Y(y)
                })
            }
            function re(k, Y, p, y, _) {
                var l = new FormData;
                for (var G in Y)
                    l.append(G, Y[G]);
                l.append("file", p, y),
                e.ajax({
                    type: "POST",
                    url: k,
                    data: l,
                    processData: !1,
                    contentType: !1
                }).done(function() {
                    _(null)
                }).fail(function(V) {
                    _(V)
                })
            }
            return r
        }
        )
    }
    );
    var W_ = c( (oz, V_) => {
        "use strict";
        var St = Ge()
          , DV = br()
          , Se = {
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            ESCAPE: 27,
            SPACE: 32,
            ENTER: 13,
            HOME: 36,
            END: 35
        };
        St.define("navbar", V_.exports = function(e, t) {
            var r = {}, n = e.tram, o = e(window), i = e(document), a = t.debounce, s, u, d, h, g = St.env(), m = '<div class="w-nav-overlay" data-wf-ignore />', E = ".w-nav", T = "w--open", I = "w--nav-dropdown-open", D = "w--nav-dropdown-toggle-open", S = "w--nav-dropdown-list-open", L = "w--nav-link-open", R = DV.triggers, P = e();
            r.ready = r.design = r.preview = q,
            r.destroy = function() {
                P = e(),
                M(),
                u && u.length && u.each(J)
            }
            ;
            function q() {
                d = g && St.env("design"),
                h = St.env("editor"),
                s = e(document.body),
                u = i.find(E),
                u.length && (u.each($),
                M(),
                X())
            }
            function M() {
                St.resize.off(K)
            }
            function X() {
                St.resize.on(K)
            }
            function K() {
                u.each(_)
            }
            function $(v, W) {
                var Q = e(W)
                  , j = e.data(W, E);
                j || (j = e.data(W, E, {
                    open: !1,
                    el: Q,
                    config: {},
                    selectedIdx: -1
                })),
                j.menu = Q.find(".w-nav-menu"),
                j.links = j.menu.find(".w-nav-link"),
                j.dropdowns = j.menu.find(".w-dropdown"),
                j.dropdownToggle = j.menu.find(".w-dropdown-toggle"),
                j.dropdownList = j.menu.find(".w-dropdown-list"),
                j.button = Q.find(".w-nav-button"),
                j.container = Q.find(".w-container"),
                j.overlayContainerId = "w-nav-overlay-" + v,
                j.outside = p(j);
                var de = Q.find(".w-nav-brand");
                de && de.attr("href") === "/" && de.attr("aria-label") == null && de.attr("aria-label", "home"),
                j.button.attr("style", "-webkit-user-select: text;"),
                j.button.attr("aria-label") == null && j.button.attr("aria-label", "menu"),
                j.button.attr("role", "button"),
                j.button.attr("tabindex", "0"),
                j.button.attr("aria-controls", j.overlayContainerId),
                j.button.attr("aria-haspopup", "menu"),
                j.button.attr("aria-expanded", "false"),
                j.el.off(E),
                j.button.off(E),
                j.menu.off(E),
                x(j),
                d ? (ee(j),
                j.el.on("setting" + E, F(j))) : (U(j),
                j.button.on("click" + E, k(j)),
                j.menu.on("click" + E, "a", Y(j)),
                j.button.on("keydown" + E, B(j)),
                j.el.on("keydown" + E, H(j))),
                _(v, W)
            }
            function J(v, W) {
                var Q = e.data(W, E);
                Q && (ee(Q),
                e.removeData(W, E))
            }
            function ee(v) {
                v.overlay && (oe(v, !0),
                v.overlay.remove(),
                v.overlay = null)
            }
            function U(v) {
                v.overlay || (v.overlay = e(m).appendTo(v.el),
                v.overlay.attr("id", v.overlayContainerId),
                v.parent = v.menu.parent(),
                oe(v, !0))
            }
            function x(v) {
                var W = {}
                  , Q = v.config || {}
                  , j = W.animation = v.el.attr("data-animation") || "default";
                W.animOver = /^over/.test(j),
                W.animDirect = /left$/.test(j) ? -1 : 1,
                Q.animation !== j && v.open && t.defer(re, v),
                W.easing = v.el.attr("data-easing") || "ease",
                W.easing2 = v.el.attr("data-easing2") || "ease";
                var de = v.el.attr("data-duration");
                W.duration = de != null ? Number(de) : 400,
                W.docHeight = v.el.attr("data-doc-height"),
                v.config = W
            }
            function F(v) {
                return function(W, Q) {
                    Q = Q || {};
                    var j = o.width();
                    x(v),
                    Q.open === !0 && ie(v, !0),
                    Q.open === !1 && oe(v, !0),
                    v.open && t.defer(function() {
                        j !== o.width() && re(v)
                    })
                }
            }
            function B(v) {
                return function(W) {
                    switch (W.keyCode) {
                    case Se.SPACE:
                    case Se.ENTER:
                        return k(v)(),
                        W.preventDefault(),
                        W.stopPropagation();
                    case Se.ESCAPE:
                        return oe(v),
                        W.preventDefault(),
                        W.stopPropagation();
                    case Se.ARROW_RIGHT:
                    case Se.ARROW_DOWN:
                    case Se.HOME:
                    case Se.END:
                        return v.open ? (W.keyCode === Se.END ? v.selectedIdx = v.links.length - 1 : v.selectedIdx = 0,
                        te(v),
                        W.preventDefault(),
                        W.stopPropagation()) : (W.preventDefault(),
                        W.stopPropagation())
                    }
                }
            }
            function H(v) {
                return function(W) {
                    if (v.open)
                        switch (v.selectedIdx = v.links.index(document.activeElement),
                        W.keyCode) {
                        case Se.HOME:
                        case Se.END:
                            return W.keyCode === Se.END ? v.selectedIdx = v.links.length - 1 : v.selectedIdx = 0,
                            te(v),
                            W.preventDefault(),
                            W.stopPropagation();
                        case Se.ESCAPE:
                            return oe(v),
                            v.button.focus(),
                            W.preventDefault(),
                            W.stopPropagation();
                        case Se.ARROW_LEFT:
                        case Se.ARROW_UP:
                            return v.selectedIdx = Math.max(-1, v.selectedIdx - 1),
                            te(v),
                            W.preventDefault(),
                            W.stopPropagation();
                        case Se.ARROW_RIGHT:
                        case Se.ARROW_DOWN:
                            return v.selectedIdx = Math.min(v.links.length - 1, v.selectedIdx + 1),
                            te(v),
                            W.preventDefault(),
                            W.stopPropagation()
                        }
                }
            }
            function te(v) {
                if (v.links[v.selectedIdx]) {
                    var W = v.links[v.selectedIdx];
                    W.focus(),
                    Y(W)
                }
            }
            function re(v) {
                v.open && (oe(v, !0),
                ie(v, !0))
            }
            function k(v) {
                return a(function() {
                    v.open ? oe(v) : ie(v)
                })
            }
            function Y(v) {
                return function(W) {
                    var Q = e(this)
                      , j = Q.attr("href");
                    if (!St.validClick(W.currentTarget)) {
                        W.preventDefault();
                        return
                    }
                    j && j.indexOf("#") === 0 && v.open && oe(v)
                }
            }
            function p(v) {
                return v.outside && i.off("click" + E, v.outside),
                function(W) {
                    var Q = e(W.target);
                    h && Q.closest(".w-editor-bem-EditorOverlay").length || y(v, Q)
                }
            }
            var y = a(function(v, W) {
                if (v.open) {
                    var Q = W.closest(".w-nav-menu");
                    v.menu.is(Q) || oe(v)
                }
            });
            function _(v, W) {
                var Q = e.data(W, E)
                  , j = Q.collapsed = Q.button.css("display") !== "none";
                if (Q.open && !j && !d && oe(Q, !0),
                Q.container.length) {
                    var de = G(Q);
                    Q.links.each(de),
                    Q.dropdowns.each(de)
                }
                Q.open && le(Q)
            }
            var l = "max-width";
            function G(v) {
                var W = v.container.css(l);
                return W === "none" && (W = ""),
                function(Q, j) {
                    j = e(j),
                    j.css(l, ""),
                    j.css(l) === "none" && j.css(l, W)
                }
            }
            function V(v, W) {
                W.setAttribute("data-nav-menu-open", "")
            }
            function A(v, W) {
                W.removeAttribute("data-nav-menu-open")
            }
            function ie(v, W) {
                if (v.open)
                    return;
                v.open = !0,
                v.menu.each(V),
                v.links.addClass(L),
                v.dropdowns.addClass(I),
                v.dropdownToggle.addClass(D),
                v.dropdownList.addClass(S),
                v.button.addClass(T);
                var Q = v.config
                  , j = Q.animation;
                (j === "none" || !n.support.transform || Q.duration <= 0) && (W = !0);
                var de = le(v)
                  , qe = v.menu.outerHeight(!0)
                  , Xe = v.menu.outerWidth(!0)
                  , f = v.el.height()
                  , b = v.el[0];
                if (_(0, b),
                R.intro(0, b),
                St.redraw.up(),
                d || i.on("click" + E, v.outside),
                W) {
                    O();
                    return
                }
                var w = "transform " + Q.duration + "ms " + Q.easing;
                if (v.overlay && (P = v.menu.prev(),
                v.overlay.show().append(v.menu)),
                Q.animOver) {
                    n(v.menu).add(w).set({
                        x: Q.animDirect * Xe,
                        height: de
                    }).start({
                        x: 0
                    }).then(O),
                    v.overlay && v.overlay.width(Xe);
                    return
                }
                var C = f + qe;
                n(v.menu).add(w).set({
                    y: -C
                }).start({
                    y: 0
                }).then(O);
                function O() {
                    v.button.attr("aria-expanded", "true")
                }
            }
            function le(v) {
                var W = v.config
                  , Q = W.docHeight ? i.height() : s.height();
                return W.animOver ? v.menu.height(Q) : v.el.css("position") !== "fixed" && (Q -= v.el.outerHeight(!0)),
                v.overlay && v.overlay.height(Q),
                Q
            }
            function oe(v, W) {
                if (!v.open)
                    return;
                v.open = !1,
                v.button.removeClass(T);
                var Q = v.config;
                if ((Q.animation === "none" || !n.support.transform || Q.duration <= 0) && (W = !0),
                R.outro(0, v.el[0]),
                i.off("click" + E, v.outside),
                W) {
                    n(v.menu).stop(),
                    b();
                    return
                }
                var j = "transform " + Q.duration + "ms " + Q.easing2
                  , de = v.menu.outerHeight(!0)
                  , qe = v.menu.outerWidth(!0)
                  , Xe = v.el.height();
                if (Q.animOver) {
                    n(v.menu).add(j).start({
                        x: qe * Q.animDirect
                    }).then(b);
                    return
                }
                var f = Xe + de;
                n(v.menu).add(j).start({
                    y: -f
                }).then(b);
                function b() {
                    v.menu.height(""),
                    n(v.menu).set({
                        x: 0,
                        y: 0
                    }),
                    v.menu.each(A),
                    v.links.removeClass(L),
                    v.dropdowns.removeClass(I),
                    v.dropdownToggle.removeClass(D),
                    v.dropdownList.removeClass(S),
                    v.overlay && v.overlay.children().length && (P.length ? v.menu.insertAfter(P) : v.menu.prependTo(v.parent),
                    v.overlay.attr("style", "").hide()),
                    v.el.triggerHandler("w-close"),
                    v.button.attr("aria-expanded", "false")
                }
            }
            return r
        }
        )
    }
    );
    var B_ = c( (az, X_) => {
        "use strict";
        var Rt = Ge()
          , FV = br()
          , dt = {
            ARROW_LEFT: 37,
            ARROW_UP: 38,
            ARROW_RIGHT: 39,
            ARROW_DOWN: 40,
            SPACE: 32,
            ENTER: 13,
            HOME: 36,
            END: 35
        }
          , H_ = 'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, *[tabindex], *[contenteditable]';
        Rt.define("slider", X_.exports = function(e, t) {
            var r = {}, n = e.tram, o = e(document), i, a, s = Rt.env(), u = ".w-slider", d = '<div class="w-slider-dot" data-wf-ignore />', h = '<div aria-live="off" aria-atomic="true" class="w-slider-aria-label" data-wf-ignore />', g = "w-slider-force-show", m = FV.triggers, E, T = !1;
            r.ready = function() {
                a = Rt.env("design"),
                I()
            }
            ,
            r.design = function() {
                a = !0,
                setTimeout(I, 1e3)
            }
            ,
            r.preview = function() {
                a = !1,
                I()
            }
            ,
            r.redraw = function() {
                T = !0,
                I(),
                T = !1
            }
            ,
            r.destroy = D;
            function I() {
                i = o.find(u),
                i.length && (i.each(R),
                !E && (D(),
                S()))
            }
            function D() {
                Rt.resize.off(L),
                Rt.redraw.off(r.redraw)
            }
            function S() {
                Rt.resize.on(L),
                Rt.redraw.on(r.redraw)
            }
            function L() {
                i.filter(":visible").each(H)
            }
            function R(p, y) {
                var _ = e(y)
                  , l = e.data(y, u);
                l || (l = e.data(y, u, {
                    index: 0,
                    depth: 1,
                    hasFocus: {
                        keyboard: !1,
                        mouse: !1
                    },
                    el: _,
                    config: {}
                })),
                l.mask = _.children(".w-slider-mask"),
                l.left = _.children(".w-slider-arrow-left"),
                l.right = _.children(".w-slider-arrow-right"),
                l.nav = _.children(".w-slider-nav"),
                l.slides = l.mask.children(".w-slide"),
                l.slides.each(m.reset),
                T && (l.maskWidth = 0),
                _.attr("role") === void 0 && _.attr("role", "region"),
                _.attr("aria-label") === void 0 && _.attr("aria-label", "carousel");
                var G = l.mask.attr("id");
                if (G || (G = "w-slider-mask-" + p,
                l.mask.attr("id", G)),
                !a && !l.ariaLiveLabel && (l.ariaLiveLabel = e(h).appendTo(l.mask)),
                l.left.attr("role", "button"),
                l.left.attr("tabindex", "0"),
                l.left.attr("aria-controls", G),
                l.left.attr("aria-label") === void 0 && l.left.attr("aria-label", "previous slide"),
                l.right.attr("role", "button"),
                l.right.attr("tabindex", "0"),
                l.right.attr("aria-controls", G),
                l.right.attr("aria-label") === void 0 && l.right.attr("aria-label", "next slide"),
                !n.support.transform) {
                    l.left.hide(),
                    l.right.hide(),
                    l.nav.hide(),
                    E = !0;
                    return
                }
                l.el.off(u),
                l.left.off(u),
                l.right.off(u),
                l.nav.off(u),
                P(l),
                a ? (l.el.on("setting" + u, x(l)),
                U(l),
                l.hasTimer = !1) : (l.el.on("swipe" + u, x(l)),
                l.left.on("click" + u, K(l)),
                l.right.on("click" + u, $(l)),
                l.left.on("keydown" + u, X(l, K)),
                l.right.on("keydown" + u, X(l, $)),
                l.nav.on("keydown" + u, "> div", x(l)),
                l.config.autoplay && !l.hasTimer && (l.hasTimer = !0,
                l.timerCount = 1,
                ee(l)),
                l.el.on("mouseenter" + u, M(l, !0, "mouse")),
                l.el.on("focusin" + u, M(l, !0, "keyboard")),
                l.el.on("mouseleave" + u, M(l, !1, "mouse")),
                l.el.on("focusout" + u, M(l, !1, "keyboard"))),
                l.nav.on("click" + u, "> div", x(l)),
                s || l.mask.contents().filter(function() {
                    return this.nodeType === 3
                }).remove();
                var V = _.filter(":hidden");
                V.addClass(g);
                var A = _.parents(":hidden");
                A.addClass(g),
                T || H(p, y),
                V.removeClass(g),
                A.removeClass(g)
            }
            function P(p) {
                var y = {};
                y.crossOver = 0,
                y.animation = p.el.attr("data-animation") || "slide",
                y.animation === "outin" && (y.animation = "cross",
                y.crossOver = .5),
                y.easing = p.el.attr("data-easing") || "ease";
                var _ = p.el.attr("data-duration");
                if (y.duration = _ != null ? parseInt(_, 10) : 500,
                q(p.el.attr("data-infinite")) && (y.infinite = !0),
                q(p.el.attr("data-disable-swipe")) && (y.disableSwipe = !0),
                q(p.el.attr("data-hide-arrows")) ? y.hideArrows = !0 : p.config.hideArrows && (p.left.show(),
                p.right.show()),
                q(p.el.attr("data-autoplay"))) {
                    y.autoplay = !0,
                    y.delay = parseInt(p.el.attr("data-delay"), 10) || 2e3,
                    y.timerMax = parseInt(p.el.attr("data-autoplay-limit"), 10);
                    var l = "mousedown" + u + " touchstart" + u;
                    a || p.el.off(l).one(l, function() {
                        U(p)
                    })
                }
                var G = p.right.width();
                y.edge = G ? G + 40 : 100,
                p.config = y
            }
            function q(p) {
                return p === "1" || p === "true"
            }
            function M(p, y, _) {
                return function(l) {
                    if (y)
                        p.hasFocus[_] = y;
                    else if (e.contains(p.el.get(0), l.relatedTarget) || (p.hasFocus[_] = y,
                    p.hasFocus.mouse && _ === "keyboard" || p.hasFocus.keyboard && _ === "mouse"))
                        return;
                    y ? (p.ariaLiveLabel.attr("aria-live", "polite"),
                    p.hasTimer && U(p)) : (p.ariaLiveLabel.attr("aria-live", "off"),
                    p.hasTimer && ee(p))
                }
            }
            function X(p, y) {
                return function(_) {
                    switch (_.keyCode) {
                    case dt.SPACE:
                    case dt.ENTER:
                        return y(p)(),
                        _.preventDefault(),
                        _.stopPropagation()
                    }
                }
            }
            function K(p) {
                return function() {
                    B(p, {
                        index: p.index - 1,
                        vector: -1
                    })
                }
            }
            function $(p) {
                return function() {
                    B(p, {
                        index: p.index + 1,
                        vector: 1
                    })
                }
            }
            function J(p, y) {
                var _ = null;
                y === p.slides.length && (I(),
                te(p)),
                t.each(p.anchors, function(l, G) {
                    e(l.els).each(function(V, A) {
                        e(A).index() === y && (_ = G)
                    })
                }),
                _ != null && B(p, {
                    index: _,
                    immediate: !0
                })
            }
            function ee(p) {
                U(p);
                var y = p.config
                  , _ = y.timerMax;
                _ && p.timerCount++ > _ || (p.timerId = window.setTimeout(function() {
                    p.timerId == null || a || ($(p)(),
                    ee(p))
                }, y.delay))
            }
            function U(p) {
                window.clearTimeout(p.timerId),
                p.timerId = null
            }
            function x(p) {
                return function(y, _) {
                    _ = _ || {};
                    var l = p.config;
                    if (a && y.type === "setting") {
                        if (_.select === "prev")
                            return K(p)();
                        if (_.select === "next")
                            return $(p)();
                        if (P(p),
                        te(p),
                        _.select == null)
                            return;
                        J(p, _.select);
                        return
                    }
                    if (y.type === "swipe")
                        return l.disableSwipe || Rt.env("editor") ? void 0 : _.direction === "left" ? $(p)() : _.direction === "right" ? K(p)() : void 0;
                    if (p.nav.has(y.target).length) {
                        var G = e(y.target).index();
                        if (y.type === "click" && B(p, {
                            index: G
                        }),
                        y.type === "keydown")
                            switch (y.keyCode) {
                            case dt.ENTER:
                            case dt.SPACE:
                                {
                                    B(p, {
                                        index: G
                                    }),
                                    y.preventDefault();
                                    break
                                }
                            case dt.ARROW_LEFT:
                            case dt.ARROW_UP:
                                {
                                    F(p.nav, Math.max(G - 1, 0)),
                                    y.preventDefault();
                                    break
                                }
                            case dt.ARROW_RIGHT:
                            case dt.ARROW_DOWN:
                                {
                                    F(p.nav, Math.min(G + 1, p.pages)),
                                    y.preventDefault();
                                    break
                                }
                            case dt.HOME:
                                {
                                    F(p.nav, 0),
                                    y.preventDefault();
                                    break
                                }
                            case dt.END:
                                {
                                    F(p.nav, p.pages),
                                    y.preventDefault();
                                    break
                                }
                            default:
                                return
                            }
                    }
                }
            }
            function F(p, y) {
                var _ = p.children().eq(y).focus();
                p.children().not(_)
            }
            function B(p, y) {
                y = y || {};
                var _ = p.config
                  , l = p.anchors;
                p.previous = p.index;
                var G = y.index
                  , V = {};
                G < 0 ? (G = l.length - 1,
                _.infinite && (V.x = -p.endX,
                V.from = 0,
                V.to = l[0].width)) : G >= l.length && (G = 0,
                _.infinite && (V.x = l[l.length - 1].width,
                V.from = -l[l.length - 1].x,
                V.to = V.from - V.x)),
                p.index = G;
                var A = p.nav.children().eq(G).addClass("w-active").attr("aria-pressed", "true").attr("tabindex", "0");
                p.nav.children().not(A).removeClass("w-active").attr("aria-pressed", "false").attr("tabindex", "-1"),
                _.hideArrows && (p.index === l.length - 1 ? p.right.hide() : p.right.show(),
                p.index === 0 ? p.left.hide() : p.left.show());
                var ie = p.offsetX || 0
                  , le = p.offsetX = -l[p.index].x
                  , oe = {
                    x: le,
                    opacity: 1,
                    visibility: ""
                }
                  , v = e(l[p.index].els)
                  , W = e(l[p.previous] && l[p.previous].els)
                  , Q = p.slides.not(v)
                  , j = _.animation
                  , de = _.easing
                  , qe = Math.round(_.duration)
                  , Xe = y.vector || (p.index > p.previous ? 1 : -1)
                  , f = "opacity " + qe + "ms " + de
                  , b = "transform " + qe + "ms " + de;
                if (v.find(H_).removeAttr("tabindex"),
                v.removeAttr("aria-hidden"),
                v.find("*").removeAttr("aria-hidden"),
                Q.find(H_).attr("tabindex", "-1"),
                Q.attr("aria-hidden", "true"),
                Q.find("*").attr("aria-hidden", "true"),
                a || (v.each(m.intro),
                Q.each(m.outro)),
                y.immediate && !T) {
                    n(v).set(oe),
                    O();
                    return
                }
                if (p.index === p.previous)
                    return;
                if (a || p.ariaLiveLabel.text(`Slide ${G + 1} of ${l.length}.`),
                j === "cross") {
                    var w = Math.round(qe - qe * _.crossOver)
                      , C = Math.round(qe - w);
                    f = "opacity " + w + "ms " + de,
                    n(W).set({
                        visibility: ""
                    }).add(f).start({
                        opacity: 0
                    }),
                    n(v).set({
                        visibility: "",
                        x: le,
                        opacity: 0,
                        zIndex: p.depth++
                    }).add(f).wait(C).then({
                        opacity: 1
                    }).then(O);
                    return
                }
                if (j === "fade") {
                    n(W).set({
                        visibility: ""
                    }).stop(),
                    n(v).set({
                        visibility: "",
                        x: le,
                        opacity: 0,
                        zIndex: p.depth++
                    }).add(f).start({
                        opacity: 1
                    }).then(O);
                    return
                }
                if (j === "over") {
                    oe = {
                        x: p.endX
                    },
                    n(W).set({
                        visibility: ""
                    }).stop(),
                    n(v).set({
                        visibility: "",
                        zIndex: p.depth++,
                        x: le + l[p.index].width * Xe
                    }).add(b).start({
                        x: le
                    }).then(O);
                    return
                }
                _.infinite && V.x ? (n(p.slides.not(W)).set({
                    visibility: "",
                    x: V.x
                }).add(b).start({
                    x: le
                }),
                n(W).set({
                    visibility: "",
                    x: V.from
                }).add(b).start({
                    x: V.to
                }),
                p.shifted = W) : (_.infinite && p.shifted && (n(p.shifted).set({
                    visibility: "",
                    x: ie
                }),
                p.shifted = null),
                n(p.slides).set({
                    visibility: ""
                }).add(b).start({
                    x: le
                }));
                function O() {
                    v = e(l[p.index].els),
                    Q = p.slides.not(v),
                    j !== "slide" && (oe.visibility = "hidden"),
                    n(Q).set(oe)
                }
            }
            function H(p, y) {
                var _ = e.data(y, u);
                if (_) {
                    if (k(_))
                        return te(_);
                    a && Y(_) && te(_)
                }
            }
            function te(p) {
                var y = 1
                  , _ = 0
                  , l = 0
                  , G = 0
                  , V = p.maskWidth
                  , A = V - p.config.edge;
                A < 0 && (A = 0),
                p.anchors = [{
                    els: [],
                    x: 0,
                    width: 0
                }],
                p.slides.each(function(le, oe) {
                    l - _ > A && (y++,
                    _ += V,
                    p.anchors[y - 1] = {
                        els: [],
                        x: l,
                        width: 0
                    }),
                    G = e(oe).outerWidth(!0),
                    l += G,
                    p.anchors[y - 1].width += G,
                    p.anchors[y - 1].els.push(oe);
                    var v = le + 1 + " of " + p.slides.length;
                    e(oe).attr("aria-label", v),
                    e(oe).attr("role", "group")
                }),
                p.endX = l,
                a && (p.pages = null),
                p.nav.length && p.pages !== y && (p.pages = y,
                re(p));
                var ie = p.index;
                ie >= y && (ie = y - 1),
                B(p, {
                    immediate: !0,
                    index: ie
                })
            }
            function re(p) {
                var y = [], _, l = p.el.attr("data-nav-spacing");
                l && (l = parseFloat(l) + "px");
                for (var G = 0, V = p.pages; G < V; G++)
                    _ = e(d),
                    _.attr("aria-label", "Show slide " + (G + 1) + " of " + V).attr("aria-pressed", "false").attr("role", "button").attr("tabindex", "-1"),
                    p.nav.hasClass("w-num") && _.text(G + 1),
                    l != null && _.css({
                        "margin-left": l,
                        "margin-right": l
                    }),
                    y.push(_);
                p.nav.empty().append(y)
            }
            function k(p) {
                var y = p.mask.width();
                return p.maskWidth !== y ? (p.maskWidth = y,
                !0) : !1
            }
            function Y(p) {
                var y = 0;
                return p.slides.each(function(_, l) {
                    y += e(l).outerWidth(!0)
                }),
                p.slidesWidth !== y ? (p.slidesWidth = y,
                !0) : !1
            }
            return r
        }
        )
    }
    );
    Xs();
    js();
    Ks();
    Qs();
    br();
    S_();
    C_();
    N_();
    M_();
    F_();
    k_();
    W_();
    B_();
}
)();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
    "events": {
        "e": {
            "id": "e",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-2"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".fs-cc-banner_trigger",
                "originalId": "604754d4dda4d04793554a12|6394c3e2-9282-0a25-b671-2a9ad9fe232a",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".fs-cc-banner_trigger",
                "originalId": "604754d4dda4d04793554a12|6394c3e2-9282-0a25-b671-2a9ad9fe232a",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1615288220024
        },
        "e-2": {
            "id": "e-2",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-2",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".fs-cc-banner_trigger",
                "originalId": "604754d4dda4d04793554a12|6394c3e2-9282-0a25-b671-2a9ad9fe232a",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".fs-cc-banner_trigger",
                "originalId": "604754d4dda4d04793554a12|6394c3e2-9282-0a25-b671-2a9ad9fe232a",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1615288220027
        },
        "e-3": {
            "id": "e-3",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-3",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-4"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".fs-cc-prefs_checkbox",
                "originalId": "604754d4dda4d04793554a12|a33fc45e-0d3f-689d-9c21-1e7d11312e2e",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".fs-cc-prefs_checkbox",
                "originalId": "604754d4dda4d04793554a12|a33fc45e-0d3f-689d-9c21-1e7d11312e2e",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1615343217594
        },
        "e-4": {
            "id": "e-4",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-4",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-3"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".fs-cc-prefs_checkbox",
                "originalId": "604754d4dda4d04793554a12|a33fc45e-0d3f-689d-9c21-1e7d11312e2e",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".fs-cc-prefs_checkbox",
                "originalId": "604754d4dda4d04793554a12|a33fc45e-0d3f-689d-9c21-1e7d11312e2e",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1615343217595
        },
        "e-5": {
            "id": "e-5",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-5",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-6"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".fs-cc-prefs_trigger",
                "originalId": "73e7dc50-5d88-fde2-c817-b2bf73944a4c",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".fs-cc-prefs_trigger",
                "originalId": "73e7dc50-5d88-fde2-c817-b2bf73944a4c",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1615393093699
        },
        "e-6": {
            "id": "e-6",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_SECOND_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-6",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-5"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "selector": ".fs-cc-prefs_trigger",
                "originalId": "73e7dc50-5d88-fde2-c817-b2bf73944a4c",
                "appliesTo": "CLASS"
            },
            "targets": [{
                "selector": ".fs-cc-prefs_trigger",
                "originalId": "73e7dc50-5d88-fde2-c817-b2bf73944a4c",
                "appliesTo": "CLASS"
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1615393093699
        },
        "e-7": {
            "id": "e-7",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-7",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|309044d9-9ef1-85b3-51e6-a6adc540406b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|309044d9-9ef1-85b3-51e6-a6adc540406b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-7-p",
                "smoothing": 80,
                "startsEntering": false,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1657718227398
        },
        "e-8": {
            "id": "e-8",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-9",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-9"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|9e2a81c8-852e-796f-2722-7f850ef3c374",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|9e2a81c8-852e-796f-2722-7f850ef3c374",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1657732233476
        },
        "e-10": {
            "id": "e-10",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-10",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-11"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|c9e38ed0-3d3c-fc7a-90ff-a73fde83ed9d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|c9e38ed0-3d3c-fc7a-90ff-a73fde83ed9d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1657732584271
        },
        "e-12": {
            "id": "e-12",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-8",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-13"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|84da35ba-9aef-74b4-2f47-b2cdb0dd5e5c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|84da35ba-9aef-74b4-2f47-b2cdb0dd5e5c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1657732606034
        },
        "e-14": {
            "id": "e-14",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-13",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-15"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|0ba29e9c-b926-b501-dd81-128bb941381e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|0ba29e9c-b926-b501-dd81-128bb941381e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1657732843981
        },
        "e-16": {
            "id": "e-16",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-12",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-17"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|f78d4922-b802-66df-1585-1267f4d3e588",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|f78d4922-b802-66df-1585-1267f4d3e588",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1657732845274
        },
        "e-18": {
            "id": "e-18",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-11",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-19"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|61bf28be-6629-81e0-7f2b-a70232b98399",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|61bf28be-6629-81e0-7f2b-a70232b98399",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1657732848469
        },
        "e-24": {
            "id": "e-24",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-16",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|d4f12a52-f52f-493c-4356-c1da1ce0636c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|d4f12a52-f52f-493c-4356-c1da1ce0636c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-16-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": true,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1657790928476
        },
        "e-25": {
            "id": "e-25",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|02c7d04a-4af9-20e2-583f-7d2abaf7cd4c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|02c7d04a-4af9-20e2-583f-7d2abaf7cd4c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-17-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-17-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1657797418306
        },
        "e-28": {
            "id": "e-28",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-29"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|12ef0d55-6b9b-3091-4434-56082c78f2e7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|12ef0d55-6b9b-3091-4434-56082c78f2e7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1657817214658
        },
        "e-29": {
            "id": "e-29",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-28"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|12ef0d55-6b9b-3091-4434-56082c78f2e7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|12ef0d55-6b9b-3091-4434-56082c78f2e7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1657817214658
        },
        "e-30": {
            "id": "e-30",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-31"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|edb56977-0172-6c95-f0ff-ed46f6c2e78a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|edb56977-0172-6c95-f0ff-ed46f6c2e78a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1657817382932
        },
        "e-31": {
            "id": "e-31",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-30"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|edb56977-0172-6c95-f0ff-ed46f6c2e78a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|edb56977-0172-6c95-f0ff-ed46f6c2e78a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1657817382932
        },
        "e-32": {
            "id": "e-32",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-33"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|2e354002-9b78-3de5-1a32-2d1dfbb8c1d1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|2e354002-9b78-3de5-1a32-2d1dfbb8c1d1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1657817404271
        },
        "e-33": {
            "id": "e-33",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-32"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|2e354002-9b78-3de5-1a32-2d1dfbb8c1d1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|2e354002-9b78-3de5-1a32-2d1dfbb8c1d1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1657817404272
        },
        "e-34": {
            "id": "e-34",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-35"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|9bab84e4-c83f-89bc-0e95-e70361272c12",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|9bab84e4-c83f-89bc-0e95-e70361272c12",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1657817419414
        },
        "e-35": {
            "id": "e-35",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-34"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|9bab84e4-c83f-89bc-0e95-e70361272c12",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|9bab84e4-c83f-89bc-0e95-e70361272c12",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1657817419414
        },
        "e-36": {
            "id": "e-36",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-37"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|87e68899-0906-e373-489e-553080cbe9a7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|87e68899-0906-e373-489e-553080cbe9a7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1657817432531
        },
        "e-37": {
            "id": "e-37",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-36"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|87e68899-0906-e373-489e-553080cbe9a7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|87e68899-0906-e373-489e-553080cbe9a7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1657817432532
        },
        "e-38": {
            "id": "e-38",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-20",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-39"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|0feabb55-13b0-5ceb-dce6-dd6bcb6ec56b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|0feabb55-13b0-5ceb-dce6-dd6bcb6ec56b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1657817448361
        },
        "e-39": {
            "id": "e-39",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-21",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-38"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|0feabb55-13b0-5ceb-dce6-dd6bcb6ec56b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|0feabb55-13b0-5ceb-dce6-dd6bcb6ec56b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1657817448361
        },
        "e-40": {
            "id": "e-40",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-22",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-41"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1657873623805
        },
        "e-42": {
            "id": "e-42",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-43"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|e005a517-9994-fb0e-d076-41b967d4199a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|e005a517-9994-fb0e-d076-41b967d4199a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1657874016056
        },
        "e-45": {
            "id": "e-45",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-24",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-44"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1657877037503
        },
        "e-46": {
            "id": "e-46",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-47"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|e005a517-9994-fb0e-d076-41b967d4199a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|e005a517-9994-fb0e-d076-41b967d4199a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1657877674593
        },
        "e-47": {
            "id": "e-47",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-46"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|e005a517-9994-fb0e-d076-41b967d4199a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|e005a517-9994-fb0e-d076-41b967d4199a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1657877674593
        },
        "e-49": {
            "id": "e-49",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-27",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-48"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1657883150478
        },
        "e-50": {
            "id": "e-50",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|12ef0d55-6b9b-3091-4434-56082c78f2e7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|12ef0d55-6b9b-3091-4434-56082c78f2e7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-28-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-28-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1657884428727
        },
        "e-51": {
            "id": "e-51",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-29",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-52"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|12ef0d55-6b9b-3091-4434-56082c78f2e7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|12ef0d55-6b9b-3091-4434-56082c78f2e7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1657889812327
        },
        "e-53": {
            "id": "e-53",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-30",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-54"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|edb56977-0172-6c95-f0ff-ed46f6c2e78a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|edb56977-0172-6c95-f0ff-ed46f6c2e78a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1657890033128
        },
        "e-55": {
            "id": "e-55",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-31",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-56"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|2e354002-9b78-3de5-1a32-2d1dfbb8c1d1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|2e354002-9b78-3de5-1a32-2d1dfbb8c1d1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1657890177826
        },
        "e-57": {
            "id": "e-57",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-32",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-58"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|9bab84e4-c83f-89bc-0e95-e70361272c12",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|9bab84e4-c83f-89bc-0e95-e70361272c12",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1657890218798
        },
        "e-59": {
            "id": "e-59",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-33",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-60"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|87e68899-0906-e373-489e-553080cbe9a7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|87e68899-0906-e373-489e-553080cbe9a7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1657890256113
        },
        "e-61": {
            "id": "e-61",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-34",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-62"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|0feabb55-13b0-5ceb-dce6-dd6bcb6ec56b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|0feabb55-13b0-5ceb-dce6-dd6bcb6ec56b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1657890282450
        },
        "e-63": {
            "id": "e-63",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|0feabb55-13b0-5ceb-dce6-dd6bcb6ec56b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|0feabb55-13b0-5ceb-dce6-dd6bcb6ec56b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-28-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-28-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1657890331410
        },
        "e-64": {
            "id": "e-64",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|87e68899-0906-e373-489e-553080cbe9a7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|87e68899-0906-e373-489e-553080cbe9a7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-28-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-28-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1657890401102
        },
        "e-65": {
            "id": "e-65",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|9bab84e4-c83f-89bc-0e95-e70361272c12",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|9bab84e4-c83f-89bc-0e95-e70361272c12",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-28-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-28-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1657890414095
        },
        "e-66": {
            "id": "e-66",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|2e354002-9b78-3de5-1a32-2d1dfbb8c1d1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|2e354002-9b78-3de5-1a32-2d1dfbb8c1d1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-28-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-28-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1657890429960
        },
        "e-67": {
            "id": "e-67",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-28",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|edb56977-0172-6c95-f0ff-ed46f6c2e78a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|edb56977-0172-6c95-f0ff-ed46f6c2e78a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-28-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-28-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1657890448496
        },
        "e-68": {
            "id": "e-68",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-35",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|e7630ede-9abf-e48d-4036-43089579ed4a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|e7630ede-9abf-e48d-4036-43089579ed4a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-35-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 0,
                "startsExiting": true,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1658134089600
        },
        "e-69": {
            "id": "e-69",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|34c6525a-4f44-0816-665e-42294176c958",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|34c6525a-4f44-0816-665e-42294176c958",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-36-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 31,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-36-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 31,
                "restingState": 50
            }],
            "createdOn": 1658145489934
        },
        "e-70": {
            "id": "e-70",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-71"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|34c6525a-4f44-0816-665e-42294176c958",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|34c6525a-4f44-0816-665e-42294176c958",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1658146820697
        },
        "e-71": {
            "id": "e-71",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-70"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|34c6525a-4f44-0816-665e-42294176c958",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|34c6525a-4f44-0816-665e-42294176c958",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1658146820699
        },
        "e-72": {
            "id": "e-72",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-17",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|46ff2a1a-f55a-f5e7-93fe-221d19526ced",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|46ff2a1a-f55a-f5e7-93fe-221d19526ced",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-17-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-17-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1658147309758
        },
        "e-73": {
            "id": "e-73",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-39",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-74"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|46ff2a1a-f55a-f5e7-93fe-221d19526ced",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|46ff2a1a-f55a-f5e7-93fe-221d19526ced",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1658147387793
        },
        "e-74": {
            "id": "e-74",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-40",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-73"
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|46ff2a1a-f55a-f5e7-93fe-221d19526ced",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|46ff2a1a-f55a-f5e7-93fe-221d19526ced",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1658147387837
        },
        "e-75": {
            "id": "e-75",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-41",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|309044d9-9ef1-85b3-51e6-a6adc540406b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|309044d9-9ef1-85b3-51e6-a6adc540406b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-41-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-41-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1658837887467
        },
        "e-76": {
            "id": "e-76",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-42",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-42-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1658838878789
        },
        "e-77": {
            "id": "e-77",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-43-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 30,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-43-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 30,
                "restingState": 50
            }],
            "createdOn": 1658911843726
        },
        "e-78": {
            "id": "e-78",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-41",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|b20a913c-1f00-a5e6-b4fb-e07164ce034b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|b20a913c-1f00-a5e6-b4fb-e07164ce034b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-41-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-41-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 90,
                "restingState": 50
            }],
            "createdOn": 1658913814737
        },
        "e-80": {
            "id": "e-80",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-44",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-79"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1658927586241
        },
        "e-82": {
            "id": "e-82",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-45",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|6de3abb2-3688-2220-1517-36466516ff97",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|6de3abb2-3688-2220-1517-36466516ff97",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-45-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1658930099914
        },
        "e-83": {
            "id": "e-83",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-46",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-84"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|c84947aa-d0e9-5ccd-52cd-a4196fadd3b4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|c84947aa-d0e9-5ccd-52cd-a4196fadd3b4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1658932101575
        },
        "e-84": {
            "id": "e-84",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-47",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-83"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|c84947aa-d0e9-5ccd-52cd-a4196fadd3b4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|c84947aa-d0e9-5ccd-52cd-a4196fadd3b4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1658932101576
        },
        "e-85": {
            "id": "e-85",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-37",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-86"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|550df140-0c30-8da6-9670-1e78bf3228e4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|550df140-0c30-8da6-9670-1e78bf3228e4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1658943738585
        },
        "e-86": {
            "id": "e-86",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-38",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-85"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|550df140-0c30-8da6-9670-1e78bf3228e4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|550df140-0c30-8da6-9670-1e78bf3228e4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1658943738585
        },
        "e-87": {
            "id": "e-87",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-36",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|550df140-0c30-8da6-9670-1e78bf3228e4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|550df140-0c30-8da6-9670-1e78bf3228e4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-36-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 31,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-36-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 31,
                "restingState": 50
            }],
            "createdOn": 1658943738585
        },
        "e-88": {
            "id": "e-88",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-46",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-89"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|550df140-0c30-8da6-9670-1e78bf3228ee",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|550df140-0c30-8da6-9670-1e78bf3228ee",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1658943738585
        },
        "e-89": {
            "id": "e-89",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-47",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-88"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|550df140-0c30-8da6-9670-1e78bf3228ee",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|550df140-0c30-8da6-9670-1e78bf3228ee",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1658943738585
        },
        "e-90": {
            "id": "e-90",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-48",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-91"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|84da35ba-9aef-74b4-2f47-b2cdb0dd5e5c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|84da35ba-9aef-74b4-2f47-b2cdb0dd5e5c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1658998774844
        },
        "e-92": {
            "id": "e-92",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-49",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-93"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|9e2a81c8-852e-796f-2722-7f850ef3c374",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|9e2a81c8-852e-796f-2722-7f850ef3c374",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1658998802424
        },
        "e-94": {
            "id": "e-94",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-50",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-95"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|c9e38ed0-3d3c-fc7a-90ff-a73fde83ed9d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|c9e38ed0-3d3c-fc7a-90ff-a73fde83ed9d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1658999025004
        },
        "e-96": {
            "id": "e-96",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-51",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-97"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|61bf28be-6629-81e0-7f2b-a70232b98399",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|61bf28be-6629-81e0-7f2b-a70232b98399",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1658999104950
        },
        "e-98": {
            "id": "e-98",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-52",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-99"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|f78d4922-b802-66df-1585-1267f4d3e588",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|f78d4922-b802-66df-1585-1267f4d3e588",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1658999154395
        },
        "e-100": {
            "id": "e-100",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-53",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-101"
                }
            },
            "mediaQueries": ["medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|0ba29e9c-b926-b501-dd81-128bb941381e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|0ba29e9c-b926-b501-dd81-128bb941381e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1658999195723
        },
        "e-102": {
            "id": "e-102",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-54",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-103"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659001353759
        },
        "e-104": {
            "id": "e-104",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-55",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|d4f12a52-f52f-493c-4356-c1da1ce0636c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|d4f12a52-f52f-493c-4356-c1da1ce0636c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-55-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1659001996968
        },
        "e-105": {
            "id": "e-105",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-56",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-56-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1659003732712
        },
        "e-107": {
            "id": "e-107",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-57",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-106"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659025877469
        },
        "e-109": {
            "id": "e-109",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-58",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-108"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659026304100
        },
        "e-110": {
            "id": "e-110",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-59",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-111"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "cf8c0513-56aa-94e6-f851-76034f436e89",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "cf8c0513-56aa-94e6-f851-76034f436e89",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659082238802
        },
        "e-111": {
            "id": "e-111",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-110"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "cf8c0513-56aa-94e6-f851-76034f436e89",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "cf8c0513-56aa-94e6-f851-76034f436e89",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659082238804
        },
        "e-112": {
            "id": "e-112",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-59",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-113"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "cf8c0513-56aa-94e6-f851-76034f436e86",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "cf8c0513-56aa-94e6-f851-76034f436e86",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659088034962
        },
        "e-113": {
            "id": "e-113",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-112"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "cf8c0513-56aa-94e6-f851-76034f436e86",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "cf8c0513-56aa-94e6-f851-76034f436e86",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659088034964
        },
        "e-116": {
            "id": "e-116",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-59",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-117"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|9e2a81c8-852e-796f-2722-7f850ef3c374",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|9e2a81c8-852e-796f-2722-7f850ef3c374",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659095284184
        },
        "e-117": {
            "id": "e-117",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-116"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|9e2a81c8-852e-796f-2722-7f850ef3c374",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|9e2a81c8-852e-796f-2722-7f850ef3c374",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659095284186
        },
        "e-118": {
            "id": "e-118",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-59",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-119"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|84da35ba-9aef-74b4-2f47-b2cdb0dd5e5c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|84da35ba-9aef-74b4-2f47-b2cdb0dd5e5c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659095328689
        },
        "e-119": {
            "id": "e-119",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-118"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|84da35ba-9aef-74b4-2f47-b2cdb0dd5e5c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|84da35ba-9aef-74b4-2f47-b2cdb0dd5e5c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659095328691
        },
        "e-120": {
            "id": "e-120",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-59",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-121"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|c9e38ed0-3d3c-fc7a-90ff-a73fde83ed9d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|c9e38ed0-3d3c-fc7a-90ff-a73fde83ed9d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659095346476
        },
        "e-121": {
            "id": "e-121",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-120"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|c9e38ed0-3d3c-fc7a-90ff-a73fde83ed9d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|c9e38ed0-3d3c-fc7a-90ff-a73fde83ed9d",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659095346525
        },
        "e-122": {
            "id": "e-122",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-59",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-123"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|61bf28be-6629-81e0-7f2b-a70232b98399",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|61bf28be-6629-81e0-7f2b-a70232b98399",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659095358831
        },
        "e-123": {
            "id": "e-123",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-122"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|61bf28be-6629-81e0-7f2b-a70232b98399",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|61bf28be-6629-81e0-7f2b-a70232b98399",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659095358833
        },
        "e-124": {
            "id": "e-124",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-59",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-125"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|f78d4922-b802-66df-1585-1267f4d3e588",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|f78d4922-b802-66df-1585-1267f4d3e588",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659095374026
        },
        "e-125": {
            "id": "e-125",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-124"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|f78d4922-b802-66df-1585-1267f4d3e588",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|f78d4922-b802-66df-1585-1267f4d3e588",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659095374071
        },
        "e-126": {
            "id": "e-126",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-59",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-127"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|0ba29e9c-b926-b501-dd81-128bb941381e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|0ba29e9c-b926-b501-dd81-128bb941381e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659095391325
        },
        "e-127": {
            "id": "e-127",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-126"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|0ba29e9c-b926-b501-dd81-128bb941381e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|0ba29e9c-b926-b501-dd81-128bb941381e",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659095391370
        },
        "e-128": {
            "id": "e-128",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-59",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-129"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "00c80493-eae3-1b2d-4907-391b8c7efda7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "00c80493-eae3-1b2d-4907-391b8c7efda7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659095463994
        },
        "e-129": {
            "id": "e-129",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-128"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "00c80493-eae3-1b2d-4907-391b8c7efda7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "00c80493-eae3-1b2d-4907-391b8c7efda7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659095463996
        },
        "e-130": {
            "id": "e-130",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-59",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-131"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "00c80493-eae3-1b2d-4907-391b8c7efda9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "00c80493-eae3-1b2d-4907-391b8c7efda9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659095515301
        },
        "e-131": {
            "id": "e-131",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-130"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "00c80493-eae3-1b2d-4907-391b8c7efda9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "00c80493-eae3-1b2d-4907-391b8c7efda9",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659095515304
        },
        "e-132": {
            "id": "e-132",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-59",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-133"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "dcfb87e9-8368-2974-7503-3e1e5b5a2765",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "dcfb87e9-8368-2974-7503-3e1e5b5a2765",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659095530556
        },
        "e-133": {
            "id": "e-133",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-132"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "dcfb87e9-8368-2974-7503-3e1e5b5a2765",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "dcfb87e9-8368-2974-7503-3e1e5b5a2765",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659095530604
        },
        "e-134": {
            "id": "e-134",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-59",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-135"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "00c80493-eae3-1b2d-4907-391b8c7efdb0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "00c80493-eae3-1b2d-4907-391b8c7efdb0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659095551193
        },
        "e-135": {
            "id": "e-135",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-134"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "00c80493-eae3-1b2d-4907-391b8c7efdb0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "00c80493-eae3-1b2d-4907-391b8c7efdb0",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659095551238
        },
        "e-136": {
            "id": "e-136",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-59",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-137"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "00c80493-eae3-1b2d-4907-391b8c7efdab",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "00c80493-eae3-1b2d-4907-391b8c7efdab",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659095566579
        },
        "e-137": {
            "id": "e-137",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-136"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "00c80493-eae3-1b2d-4907-391b8c7efdab",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "00c80493-eae3-1b2d-4907-391b8c7efdab",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659095566630
        },
        "e-138": {
            "id": "e-138",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-59",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-139"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|823dfe28-fbbe-3da3-5678-26dc1a1867dd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|823dfe28-fbbe-3da3-5678-26dc1a1867dd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659095626037
        },
        "e-139": {
            "id": "e-139",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-138"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|823dfe28-fbbe-3da3-5678-26dc1a1867dd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|823dfe28-fbbe-3da3-5678-26dc1a1867dd",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659095626038
        },
        "e-140": {
            "id": "e-140",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-59",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-141"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|73364084-3ae1-9b45-64c8-23edf3874ed8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|73364084-3ae1-9b45-64c8-23edf3874ed8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659095706237
        },
        "e-141": {
            "id": "e-141",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-140"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|73364084-3ae1-9b45-64c8-23edf3874ed8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|73364084-3ae1-9b45-64c8-23edf3874ed8",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659095706239
        },
        "e-142": {
            "id": "e-142",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-59",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-143"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|73364084-3ae1-9b45-64c8-23edf3874edb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|73364084-3ae1-9b45-64c8-23edf3874edb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659095742056
        },
        "e-143": {
            "id": "e-143",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-142"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|73364084-3ae1-9b45-64c8-23edf3874edb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|73364084-3ae1-9b45-64c8-23edf3874edb",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659095742114
        },
        "e-144": {
            "id": "e-144",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-59",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-145"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|8f04575e-49f0-eadb-bc2a-e2000cc99fef",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|8f04575e-49f0-eadb-bc2a-e2000cc99fef",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659095755974
        },
        "e-145": {
            "id": "e-145",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-144"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|8f04575e-49f0-eadb-bc2a-e2000cc99fef",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|8f04575e-49f0-eadb-bc2a-e2000cc99fef",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659095756020
        },
        "e-146": {
            "id": "e-146",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-61",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-147"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|2de70e74-75f0-9f57-29b2-55ce9bf28787",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|2de70e74-75f0-9f57-29b2-55ce9bf28787",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659095798795
        },
        "e-147": {
            "id": "e-147",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-62",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-146"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|2de70e74-75f0-9f57-29b2-55ce9bf28787",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|2de70e74-75f0-9f57-29b2-55ce9bf28787",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659095798839
        },
        "e-148": {
            "id": "e-148",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-63",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|2de70e74-75f0-9f57-29b2-55ce9bf28787",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|2de70e74-75f0-9f57-29b2-55ce9bf28787",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-63-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-63-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "ELEMENT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1659095931136
        },
        "e-149": {
            "id": "e-149",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-59",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-150"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|8f04575e-49f0-eadb-bc2a-e2000cc99ff4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|8f04575e-49f0-eadb-bc2a-e2000cc99ff4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659096444778
        },
        "e-150": {
            "id": "e-150",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-149"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|8f04575e-49f0-eadb-bc2a-e2000cc99ff4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|8f04575e-49f0-eadb-bc2a-e2000cc99ff4",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659096444780
        },
        "e-151": {
            "id": "e-151",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-59",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-152"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|2e354002-9b78-3de5-1a32-2d1dfbb8c1d1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|2e354002-9b78-3de5-1a32-2d1dfbb8c1d1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659096475932
        },
        "e-152": {
            "id": "e-152",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-151"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|2e354002-9b78-3de5-1a32-2d1dfbb8c1d1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|2e354002-9b78-3de5-1a32-2d1dfbb8c1d1",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659096475981
        },
        "e-153": {
            "id": "e-153",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-59",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-154"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|edb56977-0172-6c95-f0ff-ed46f6c2e78a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|edb56977-0172-6c95-f0ff-ed46f6c2e78a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659096490985
        },
        "e-154": {
            "id": "e-154",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-153"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|edb56977-0172-6c95-f0ff-ed46f6c2e78a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|edb56977-0172-6c95-f0ff-ed46f6c2e78a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659096491030
        },
        "e-155": {
            "id": "e-155",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-59",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-156"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|12ef0d55-6b9b-3091-4434-56082c78f2e7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|12ef0d55-6b9b-3091-4434-56082c78f2e7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659096504607
        },
        "e-156": {
            "id": "e-156",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-155"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|12ef0d55-6b9b-3091-4434-56082c78f2e7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|12ef0d55-6b9b-3091-4434-56082c78f2e7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659096504651
        },
        "e-157": {
            "id": "e-157",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-59",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-158"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|0feabb55-13b0-5ceb-dce6-dd6bcb6ec56b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|0feabb55-13b0-5ceb-dce6-dd6bcb6ec56b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659096525085
        },
        "e-158": {
            "id": "e-158",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-157"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|0feabb55-13b0-5ceb-dce6-dd6bcb6ec56b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|0feabb55-13b0-5ceb-dce6-dd6bcb6ec56b",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659096525134
        },
        "e-159": {
            "id": "e-159",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-59",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-160"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|87e68899-0906-e373-489e-553080cbe9a7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|87e68899-0906-e373-489e-553080cbe9a7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659096545339
        },
        "e-160": {
            "id": "e-160",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-159"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|87e68899-0906-e373-489e-553080cbe9a7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|87e68899-0906-e373-489e-553080cbe9a7",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659096545388
        },
        "e-161": {
            "id": "e-161",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-59",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-162"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|9bab84e4-c83f-89bc-0e95-e70361272c12",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|9bab84e4-c83f-89bc-0e95-e70361272c12",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659096560328
        },
        "e-162": {
            "id": "e-162",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-161"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|9bab84e4-c83f-89bc-0e95-e70361272c12",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|9bab84e4-c83f-89bc-0e95-e70361272c12",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659096560374
        },
        "e-163": {
            "id": "e-163",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-59",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-164"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|81129826-1a72-a340-f44f-d1da47874b3c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|81129826-1a72-a340-f44f-d1da47874b3c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659096658534
        },
        "e-164": {
            "id": "e-164",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-163"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|81129826-1a72-a340-f44f-d1da47874b3c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|81129826-1a72-a340-f44f-d1da47874b3c",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659096658537
        },
        "e-165": {
            "id": "e-165",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-59",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-166"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|8f04575e-49f0-eadb-bc2a-e2000cc99ff3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|8f04575e-49f0-eadb-bc2a-e2000cc99ff3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659096731849
        },
        "e-166": {
            "id": "e-166",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-60",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-165"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|8f04575e-49f0-eadb-bc2a-e2000cc99ff3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|8f04575e-49f0-eadb-bc2a-e2000cc99ff3",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1659096731893
        },
        "e-167": {
            "id": "e-167",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-64",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6357338d8749|309044d9-9ef1-85b3-51e6-a6adc540406a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6357338d8749|309044d9-9ef1-85b3-51e6-a6adc540406a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-64-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 0,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1659098787357
        },
        "e-168": {
            "id": "e-168",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea63e6368d8753",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea63e6368d8753",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-43-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-43-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1659112243942
        },
        "e-169": {
            "id": "e-169",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-43",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "62cd9cfff2ea6369398d874f",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "62cd9cfff2ea6369398d874f",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-43-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-43-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 50,
                "restingState": 50
            }],
            "createdOn": 1659112259277
        },
        "e-197": {
            "id": "e-197",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-65",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-198"
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "64c38b158187de85e44ff911",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64c38b158187de85e44ff911",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1690536725601
        },
        "e-199": {
            "id": "e-199",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_CLICK",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-23",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-200"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64c38b158187de85e44ff911|e005a517-9994-fb0e-d076-41b967d4199a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64c38b158187de85e44ff911|e005a517-9994-fb0e-d076-41b967d4199a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1690536725601
        },
        "e-202": {
            "id": "e-202",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-66",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-201"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64c38b158187de85e44ff911",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64c38b158187de85e44ff911",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1690536725601
        },
        "e-203": {
            "id": "e-203",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OVER",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-25",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-204"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64c38b158187de85e44ff911|e005a517-9994-fb0e-d076-41b967d4199a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64c38b158187de85e44ff911|e005a517-9994-fb0e-d076-41b967d4199a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1690536725601
        },
        "e-204": {
            "id": "e-204",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_OUT",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-26",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-203"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64c38b158187de85e44ff911|e005a517-9994-fb0e-d076-41b967d4199a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64c38b158187de85e44ff911|e005a517-9994-fb0e-d076-41b967d4199a",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1690536725601
        },
        "e-206": {
            "id": "e-206",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-67",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-205"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64c38b158187de85e44ff911",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64c38b158187de85e44ff911",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1690536725601
        },
        "e-233": {
            "id": "e-233",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-68",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "64c38b158187de85e44ff911",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64c38b158187de85e44ff911",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-68-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1690536725601
        },
        "e-234": {
            "id": "e-234",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "MOUSE_MOVE",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-69",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64c38b158187de85e44ff911",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64c38b158187de85e44ff911",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-69-p",
                "selectedAxis": "X_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 30,
                "restingState": 50
            }, {
                "continuousParameterGroupId": "a-69-p-2",
                "selectedAxis": "Y_AXIS",
                "basedOn": "VIEWPORT",
                "reverse": false,
                "smoothing": 30,
                "restingState": 50
            }],
            "createdOn": 1690536725601
        },
        "e-237": {
            "id": "e-237",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-70",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-236"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64c38b158187de85e44ff911",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64c38b158187de85e44ff911",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1690536725601
        },
        "e-259": {
            "id": "e-259",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_START",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-73",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-260"
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "64c38b158187de85e44ff911",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64c38b158187de85e44ff911",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": false,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1690536725601
        },
        "e-262": {
            "id": "e-262",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_SCROLL",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-74",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "64c38b158187de85e44ff911",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64c38b158187de85e44ff911",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-74-p",
                "smoothing": 50,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1690536725601
        },
        "e-264": {
            "id": "e-264",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-75",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-263"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64c38b158187de85e44ff911",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64c38b158187de85e44ff911",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1690536725601
        },
        "e-266": {
            "id": "e-266",
            "name": "",
            "animationType": "preset",
            "eventTypeId": "PAGE_FINISH",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_START_ACTION",
                "config": {
                    "delay": 0,
                    "easing": "",
                    "duration": 0,
                    "actionListId": "a-76",
                    "affectedElements": {},
                    "playInReverse": false,
                    "autoStopEventId": "e-265"
                }
            },
            "mediaQueries": ["main", "medium", "small", "tiny"],
            "target": {
                "id": "64c38b158187de85e44ff911",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64c38b158187de85e44ff911",
                "appliesTo": "PAGE",
                "styleBlockIds": []
            }],
            "config": {
                "loop": true,
                "playInReverse": false,
                "scrollOffsetValue": null,
                "scrollOffsetUnit": null,
                "delay": null,
                "direction": null,
                "effectIn": null
            },
            "createdOn": 1690536725601
        },
        "e-267": {
            "id": "e-267",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-77",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["main", "medium"],
            "target": {
                "id": "64c38b158187de85e44ff911|2afa5ff1-d5b7-be11-f414-d52797a619ca",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64c38b158187de85e44ff911|2afa5ff1-d5b7-be11-f414-d52797a619ca",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-77-p",
                "smoothing": 90,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1669364294905
        },
        "e-268": {
            "id": "e-268",
            "name": "",
            "animationType": "custom",
            "eventTypeId": "SCROLLING_IN_VIEW",
            "action": {
                "id": "",
                "actionTypeId": "GENERAL_CONTINUOUS_ACTION",
                "config": {
                    "actionListId": "a-78",
                    "affectedElements": {},
                    "duration": 0
                }
            },
            "mediaQueries": ["small", "tiny"],
            "target": {
                "id": "64c38b158187de85e44ff911|2afa5ff1-d5b7-be11-f414-d52797a619ca",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            },
            "targets": [{
                "id": "64c38b158187de85e44ff911|2afa5ff1-d5b7-be11-f414-d52797a619ca",
                "appliesTo": "ELEMENT",
                "styleBlockIds": []
            }],
            "config": [{
                "continuousParameterGroupId": "a-78-p",
                "smoothing": 90,
                "startsEntering": true,
                "addStartOffset": false,
                "addOffsetValue": 50,
                "startsExiting": false,
                "addEndOffset": false,
                "endOffsetValue": 50
            }],
            "createdOn": 1669957793458
        }
    },
    "actionLists": {
        "a": {
            "id": "a",
            "title": "Cookie Banner [SHOW]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".fs-cc-banner_component",
                            "selectorGuids": ["8c2570bb-5247-647e-54d9-0d5866f026e1"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".fs-cc-banner_component",
                            "selectorGuids": ["8c2570bb-5247-647e-54d9-0d5866f026e1"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".fs-cc-banner_component",
                            "selectorGuids": ["8c2570bb-5247-647e-54d9-0d5866f026e1"]
                        },
                        "value": "flex"
                    }
                }, {
                    "id": "a-n-4",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".fs-cc-banner_component",
                            "selectorGuids": ["8c2570bb-5247-647e-54d9-0d5866f026e1"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1615288223878
        },
        "a-2": {
            "id": "a-2",
            "title": "Cookie Banner [HIDE]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-2-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".fs-cc-banner_component",
                            "selectorGuids": ["8c2570bb-5247-647e-54d9-0d5866f026e1"]
                        },
                        "yValue": 100,
                        "xUnit": "PX",
                        "yUnit": "%",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-2-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".fs-cc-banner_component",
                            "selectorGuids": ["8c2570bb-5247-647e-54d9-0d5866f026e1"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1615288223878
        },
        "a-3": {
            "id": "a-3",
            "title": "Preferences Checkbox [CHECK]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-3-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 250,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".fs-cc-prefs_toggle",
                            "selectorGuids": ["8c2570bb-5247-647e-54d9-0d5866f026f3"]
                        },
                        "xValue": 20,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-3-n-2",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".fs-cc-prefs_checkbox-field",
                            "selectorGuids": ["8c2570bb-5247-647e-54d9-0d5866f026f5"]
                        },
                        "globalSwatchId": "aadc4da9",
                        "rValue": 15,
                        "bValue": 15,
                        "gValue": 15,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1615343221337
        },
        "a-4": {
            "id": "a-4",
            "title": "Preferences Checkbox [UNCHECK]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-4-n",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 250,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".fs-cc-prefs_toggle",
                            "selectorGuids": ["8c2570bb-5247-647e-54d9-0d5866f026f3"]
                        },
                        "xValue": 0,
                        "xUnit": "px",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-4-n-2",
                    "actionTypeId": "STYLE_BACKGROUND_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".fs-cc-prefs_checkbox-field",
                            "selectorGuids": ["8c2570bb-5247-647e-54d9-0d5866f026f5"]
                        },
                        "globalSwatchId": "",
                        "rValue": 204,
                        "bValue": 204,
                        "gValue": 204,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1615343221337
        },
        "a-5": {
            "id": "a-5",
            "title": "Preferences Popup [SHOW]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-5-n",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".fs-cc-prefs_component",
                            "selectorGuids": ["8c2570bb-5247-647e-54d9-0d5866f026f6"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-5-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".fs-cc-prefs_component",
                            "selectorGuids": ["8c2570bb-5247-647e-54d9-0d5866f026f6"]
                        },
                        "yValue": 20,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }, {
                    "id": "a-5-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".fs-cc-prefs_component",
                            "selectorGuids": ["8c2570bb-5247-647e-54d9-0d5866f026f6"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-5-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".fs-cc-prefs_component",
                            "selectorGuids": ["8c2570bb-5247-647e-54d9-0d5866f026f6"]
                        },
                        "value": "flex"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-5-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".fs-cc-prefs_component",
                            "selectorGuids": ["8c2570bb-5247-647e-54d9-0d5866f026f6"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-5-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".fs-cc-prefs_component",
                            "selectorGuids": ["8c2570bb-5247-647e-54d9-0d5866f026f6"]
                        },
                        "yValue": 0,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1615393118761
        },
        "a-6": {
            "id": "a-6",
            "title": "Preferences Popup [HIDE]",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-6-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".fs-cc-prefs_component",
                            "selectorGuids": ["8c2570bb-5247-647e-54d9-0d5866f026f6"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-6-n-2",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "ease",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".fs-cc-prefs_component",
                            "selectorGuids": ["8c2570bb-5247-647e-54d9-0d5866f026f6"]
                        },
                        "yValue": 20,
                        "xUnit": "PX",
                        "yUnit": "px",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-6-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".fs-cc-prefs_component",
                            "selectorGuids": ["8c2570bb-5247-647e-54d9-0d5866f026f6"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1615393118761
        },
        "a-7": {
            "id": "a-7",
            "title": "projects-scrolling",
            "continuousParameterGroups": [{
                "id": "a-7-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-7-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".projects-collection-list",
                                "selectorGuids": ["9cf95d92-e27a-d3f2-40a7-23d0c4da4b62"]
                            },
                            "xValue": 0,
                            "xUnit": "rem",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-7-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".projects-collection-list",
                                "selectorGuids": ["9cf95d92-e27a-d3f2-40a7-23d0c4da4b62"]
                            },
                            "xValue": -1,
                            "xUnit": "rem",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1657718253655
        },
        "a-9": {
            "id": "a-9",
            "title": "services item OPEN - analyse",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-9-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-item-content",
                            "selectorGuids": ["07c05542-6ec5-5f9c-e274-d4612707b8ae"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-9-n-11",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".text-size-large.is-bold",
                            "selectorGuids": ["b0934d9a-875a-bb42-0630-12090a77fbf9", "e8e3e006-3531-0ece-825c-4b1d8bdf40a4"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-9-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-item-content",
                            "selectorGuids": ["07c05542-6ec5-5f9c-e274-d4612707b8ae"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-9-n-10",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-heading.is-analyse.is-tablet",
                            "selectorGuids": ["b7955528-16a5-433a-ccf2-03c46f9168fb", "c8d5b74d-22ef-a8dd-a1a3-c084af48e02e", "6b26b706-3248-b115-71b3-efc14c200159"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-9-n-9",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-heading.is-produkte",
                            "selectorGuids": ["b7955528-16a5-433a-ccf2-03c46f9168fb", "6f5a6c6c-2630-0fab-24f2-d666bf62a788"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-9-n-8",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-heading.is-digital",
                            "selectorGuids": ["b7955528-16a5-433a-ccf2-03c46f9168fb", "d7009ceb-ce0f-d405-f8b2-9824f13b7890"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-9-n-7",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-heading.is-print",
                            "selectorGuids": ["b7955528-16a5-433a-ccf2-03c46f9168fb", "df826fa0-0598-8f1a-c137-daa752acc5e5"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-9-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-heading.is-corporate",
                            "selectorGuids": ["b7955528-16a5-433a-ccf2-03c46f9168fb", "c1de435f-7069-44c2-80e4-cb5cbf0cb49a"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-9-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-heading.is-konzeption",
                            "selectorGuids": ["b7955528-16a5-433a-ccf2-03c46f9168fb", "892e872c-5ce9-a823-9bea-6253f3b55e0e"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-9-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 10,
                        "easing": "inQuad",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".services-item-content.is-analyse",
                            "selectorGuids": ["07c05542-6ec5-5f9c-e274-d4612707b8ae", "80052126-019d-dc07-f02d-424b9c5ffd53"]
                        },
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-9-n-12",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 10,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|e4864860-f304-29e9-82e0-2072964ef78f"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-9-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 10,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-heading.is-analyse",
                            "selectorGuids": ["b7955528-16a5-433a-ccf2-03c46f9168fb", "c8d5b74d-22ef-a8dd-a1a3-c084af48e02e"]
                        },
                        "value": "block"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1657732250013
        },
        "a-10": {
            "id": "a-10",
            "title": "services item OPEN - corporate",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-10-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-item-content",
                            "selectorGuids": ["07c05542-6ec5-5f9c-e274-d4612707b8ae"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-10-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-item-content",
                            "selectorGuids": ["07c05542-6ec5-5f9c-e274-d4612707b8ae"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-10-n-12",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".text-size-large.is-bold",
                            "selectorGuids": ["b0934d9a-875a-bb42-0630-12090a77fbf9", "e8e3e006-3531-0ece-825c-4b1d8bdf40a4"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-10-n-10",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-heading.is-corporate.is-tablet",
                            "selectorGuids": ["b7955528-16a5-433a-ccf2-03c46f9168fb", "c1de435f-7069-44c2-80e4-cb5cbf0cb49a", "3873f8d8-a5ff-a464-87bc-ac7e1939cf1f"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-10-n-9",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-heading.is-produkte",
                            "selectorGuids": ["b7955528-16a5-433a-ccf2-03c46f9168fb", "6f5a6c6c-2630-0fab-24f2-d666bf62a788"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-10-n-8",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-heading.is-digital",
                            "selectorGuids": ["b7955528-16a5-433a-ccf2-03c46f9168fb", "d7009ceb-ce0f-d405-f8b2-9824f13b7890"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-10-n-7",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-heading.is-print",
                            "selectorGuids": ["b7955528-16a5-433a-ccf2-03c46f9168fb", "df826fa0-0598-8f1a-c137-daa752acc5e5"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-10-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-heading.is-analyse",
                            "selectorGuids": ["b7955528-16a5-433a-ccf2-03c46f9168fb", "c8d5b74d-22ef-a8dd-a1a3-c084af48e02e"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-10-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-heading.is-konzeption",
                            "selectorGuids": ["b7955528-16a5-433a-ccf2-03c46f9168fb", "892e872c-5ce9-a823-9bea-6253f3b55e0e"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-10-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 10,
                        "easing": "inQuad",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".services-item-content.is-corporate",
                            "selectorGuids": ["07c05542-6ec5-5f9c-e274-d4612707b8ae", "350f02bb-530c-95eb-eddb-63e60d44c928"]
                        },
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-10-n-11",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 10,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "62cd9cfff2ea6357338d8749|b1d51777-e59d-1087-5c5e-819e50731c4c"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-10-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 10,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-heading.is-corporate",
                            "selectorGuids": ["b7955528-16a5-433a-ccf2-03c46f9168fb", "c1de435f-7069-44c2-80e4-cb5cbf0cb49a"]
                        },
                        "value": "block"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1657732250013
        },
        "a-8": {
            "id": "a-8",
            "title": "services item OPEN - konzeption",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-8-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-item-content",
                            "selectorGuids": ["07c05542-6ec5-5f9c-e274-d4612707b8ae"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-8-n-15",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|c7a1f852-11a3-78fe-34b5-2cd0dd9d2440"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-8-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".services-item-content.is-konzeption",
                            "selectorGuids": ["07c05542-6ec5-5f9c-e274-d4612707b8ae", "62411a24-c05d-4e51-66d5-df21d5d59abc"]
                        },
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-8-n-11",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-item-content",
                            "selectorGuids": ["07c05542-6ec5-5f9c-e274-d4612707b8ae"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-8-n-14",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".text-size-large.is-bold",
                            "selectorGuids": ["b0934d9a-875a-bb42-0630-12090a77fbf9", "e8e3e006-3531-0ece-825c-4b1d8bdf40a4"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-8-n-9",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-heading.is-produkte",
                            "selectorGuids": ["b7955528-16a5-433a-ccf2-03c46f9168fb", "6f5a6c6c-2630-0fab-24f2-d666bf62a788"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-8-n-10",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-heading.is-konzeption.is-tablet",
                            "selectorGuids": ["b7955528-16a5-433a-ccf2-03c46f9168fb", "892e872c-5ce9-a823-9bea-6253f3b55e0e", "2ab16fbc-0159-8788-9417-2cfc9771b7f3"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-8-n-8",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-heading.is-digital",
                            "selectorGuids": ["b7955528-16a5-433a-ccf2-03c46f9168fb", "d7009ceb-ce0f-d405-f8b2-9824f13b7890"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-8-n-7",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-heading.is-print",
                            "selectorGuids": ["b7955528-16a5-433a-ccf2-03c46f9168fb", "df826fa0-0598-8f1a-c137-daa752acc5e5"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-8-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-heading.is-corporate",
                            "selectorGuids": ["b7955528-16a5-433a-ccf2-03c46f9168fb", "c1de435f-7069-44c2-80e4-cb5cbf0cb49a"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-8-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-heading.is-analyse",
                            "selectorGuids": ["b7955528-16a5-433a-ccf2-03c46f9168fb", "c8d5b74d-22ef-a8dd-a1a3-c084af48e02e"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-8-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 10,
                        "easing": "inQuad",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".services-item-content.is-konzeption",
                            "selectorGuids": ["07c05542-6ec5-5f9c-e274-d4612707b8ae", "62411a24-c05d-4e51-66d5-df21d5d59abc"]
                        },
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-8-n-13",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 10,
                        "easing": "outQuart",
                        "duration": 10,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|c7a1f852-11a3-78fe-34b5-2cd0dd9d2440"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-8-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 10,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-heading.is-konzeption",
                            "selectorGuids": ["b7955528-16a5-433a-ccf2-03c46f9168fb", "892e872c-5ce9-a823-9bea-6253f3b55e0e"]
                        },
                        "value": "block"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1657732250013
        },
        "a-13": {
            "id": "a-13",
            "title": "services item OPEN - produkte",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-13-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-item-content",
                            "selectorGuids": ["07c05542-6ec5-5f9c-e274-d4612707b8ae"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-13-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-item-content",
                            "selectorGuids": ["07c05542-6ec5-5f9c-e274-d4612707b8ae"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-13-n-12",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".text-size-large.is-bold",
                            "selectorGuids": ["b0934d9a-875a-bb42-0630-12090a77fbf9", "e8e3e006-3531-0ece-825c-4b1d8bdf40a4"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-13-n-10",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-heading.is-produkte.is-tablet",
                            "selectorGuids": ["b7955528-16a5-433a-ccf2-03c46f9168fb", "6f5a6c6c-2630-0fab-24f2-d666bf62a788", "f0e264ea-b65a-4b7e-6c2e-c6036c380c2d"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-13-n-8",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-heading.is-digital",
                            "selectorGuids": ["b7955528-16a5-433a-ccf2-03c46f9168fb", "d7009ceb-ce0f-d405-f8b2-9824f13b7890"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-13-n-7",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-heading.is-print",
                            "selectorGuids": ["b7955528-16a5-433a-ccf2-03c46f9168fb", "df826fa0-0598-8f1a-c137-daa752acc5e5"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-13-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-heading.is-corporate",
                            "selectorGuids": ["b7955528-16a5-433a-ccf2-03c46f9168fb", "c1de435f-7069-44c2-80e4-cb5cbf0cb49a"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-13-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-heading.is-analyse",
                            "selectorGuids": ["b7955528-16a5-433a-ccf2-03c46f9168fb", "c8d5b74d-22ef-a8dd-a1a3-c084af48e02e"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-13-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-heading.is-konzeption",
                            "selectorGuids": ["b7955528-16a5-433a-ccf2-03c46f9168fb", "892e872c-5ce9-a823-9bea-6253f3b55e0e"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-13-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 10,
                        "easing": "inQuad",
                        "duration": 200,
                        "target": {
                            "selector": ".services-item-content.is-produkte",
                            "selectorGuids": ["07c05542-6ec5-5f9c-e274-d4612707b8ae", "43676be3-0da2-7896-498c-dcbab42074bb"]
                        },
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-13-n-11",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 10,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "62cd9cfff2ea6357338d8749|efe3a35a-0330-0141-0be1-8d535659f05d"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-13-n-9",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 10,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-heading.is-produkte",
                            "selectorGuids": ["b7955528-16a5-433a-ccf2-03c46f9168fb", "6f5a6c6c-2630-0fab-24f2-d666bf62a788"]
                        },
                        "value": "block"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1657732250013
        },
        "a-12": {
            "id": "a-12",
            "title": "services item OPEN - digital",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-12-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-item-content",
                            "selectorGuids": ["07c05542-6ec5-5f9c-e274-d4612707b8ae"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-12-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-item-content",
                            "selectorGuids": ["07c05542-6ec5-5f9c-e274-d4612707b8ae"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-12-n-12",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".text-size-large.is-bold",
                            "selectorGuids": ["b0934d9a-875a-bb42-0630-12090a77fbf9", "e8e3e006-3531-0ece-825c-4b1d8bdf40a4"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-12-n-10",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-heading.is-digital.is-tablet",
                            "selectorGuids": ["b7955528-16a5-433a-ccf2-03c46f9168fb", "d7009ceb-ce0f-d405-f8b2-9824f13b7890", "7296e43e-e954-0a3d-6dfd-6351d08fe6bc"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-12-n-9",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-heading.is-produkte",
                            "selectorGuids": ["b7955528-16a5-433a-ccf2-03c46f9168fb", "6f5a6c6c-2630-0fab-24f2-d666bf62a788"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-12-n-7",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-heading.is-print",
                            "selectorGuids": ["b7955528-16a5-433a-ccf2-03c46f9168fb", "df826fa0-0598-8f1a-c137-daa752acc5e5"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-12-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-heading.is-corporate",
                            "selectorGuids": ["b7955528-16a5-433a-ccf2-03c46f9168fb", "c1de435f-7069-44c2-80e4-cb5cbf0cb49a"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-12-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-heading.is-analyse",
                            "selectorGuids": ["b7955528-16a5-433a-ccf2-03c46f9168fb", "c8d5b74d-22ef-a8dd-a1a3-c084af48e02e"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-12-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-heading.is-konzeption",
                            "selectorGuids": ["b7955528-16a5-433a-ccf2-03c46f9168fb", "892e872c-5ce9-a823-9bea-6253f3b55e0e"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-12-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 10,
                        "easing": "inQuad",
                        "duration": 200,
                        "target": {
                            "selector": ".services-item-content.is-digital",
                            "selectorGuids": ["07c05542-6ec5-5f9c-e274-d4612707b8ae", "5377ab50-472b-6957-7d51-2fac4e001c05"]
                        },
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-12-n-11",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 10,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "62cd9cfff2ea6357338d8749|75b7d69a-f411-82d5-98f8-c46e99742f9b"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-12-n-8",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 10,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-heading.is-digital",
                            "selectorGuids": ["b7955528-16a5-433a-ccf2-03c46f9168fb", "d7009ceb-ce0f-d405-f8b2-9824f13b7890"]
                        },
                        "value": "block"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1657732250013
        },
        "a-11": {
            "id": "a-11",
            "title": "services item OPEN - print",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-11-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-item-content",
                            "selectorGuids": ["07c05542-6ec5-5f9c-e274-d4612707b8ae"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-11-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-item-content",
                            "selectorGuids": ["07c05542-6ec5-5f9c-e274-d4612707b8ae"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-11-n-12",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".text-size-large.is-bold",
                            "selectorGuids": ["b0934d9a-875a-bb42-0630-12090a77fbf9", "e8e3e006-3531-0ece-825c-4b1d8bdf40a4"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-11-n-10",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-heading.is-print.is-tablet",
                            "selectorGuids": ["b7955528-16a5-433a-ccf2-03c46f9168fb", "df826fa0-0598-8f1a-c137-daa752acc5e5", "6a0396a4-2fac-6bfe-c630-1af17d0db324"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-11-n-9",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-heading.is-produkte",
                            "selectorGuids": ["b7955528-16a5-433a-ccf2-03c46f9168fb", "6f5a6c6c-2630-0fab-24f2-d666bf62a788"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-11-n-8",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-heading.is-digital",
                            "selectorGuids": ["b7955528-16a5-433a-ccf2-03c46f9168fb", "d7009ceb-ce0f-d405-f8b2-9824f13b7890"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-11-n-6",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-heading.is-corporate",
                            "selectorGuids": ["b7955528-16a5-433a-ccf2-03c46f9168fb", "c1de435f-7069-44c2-80e4-cb5cbf0cb49a"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-11-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-heading.is-analyse",
                            "selectorGuids": ["b7955528-16a5-433a-ccf2-03c46f9168fb", "c8d5b74d-22ef-a8dd-a1a3-c084af48e02e"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-11-n-4",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-heading.is-konzeption",
                            "selectorGuids": ["b7955528-16a5-433a-ccf2-03c46f9168fb", "892e872c-5ce9-a823-9bea-6253f3b55e0e"]
                        },
                        "value": "none"
                    }
                }, {
                    "id": "a-11-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 10,
                        "easing": "inQuad",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".services-item-content.is-print",
                            "selectorGuids": ["07c05542-6ec5-5f9c-e274-d4612707b8ae", "538a6720-3c21-93bc-7ae7-8ff46c8682f3"]
                        },
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-11-n-11",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 10,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "62cd9cfff2ea6357338d8749|6d1e4eac-30b3-6df0-ca13-c7f27b787199"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-11-n-7",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 10,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-heading.is-print",
                            "selectorGuids": ["b7955528-16a5-433a-ccf2-03c46f9168fb", "df826fa0-0598-8f1a-c137-daa752acc5e5"]
                        },
                        "value": "block"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1657732250013
        },
        "a-16": {
            "id": "a-16",
            "title": "stone zoom",
            "continuousParameterGroups": [{
                "id": "a-16-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-16-n",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".dark-stone-illustration",
                                "selectorGuids": ["751e5636-d2b0-7b86-a19a-6fb05dcf7d41"]
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }, {
                        "id": "a-16-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".dark-stone-illustration",
                                "selectorGuids": ["751e5636-d2b0-7b86-a19a-6fb05dcf7d41"]
                            },
                            "xValue": 0,
                            "yValue": 0,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-16-n-5",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".section-home-contact",
                                "selectorGuids": ["4349c172-b209-352f-9327-57280f662d38"]
                            },
                            "globalSwatchId": "63aa7009",
                            "rValue": 255,
                            "bValue": 255,
                            "gValue": 255,
                            "aValue": 1
                        }
                    }]
                }, {
                    "keyframe": 80,
                    "actionItems": [{
                        "id": "a-16-n-2",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".dark-stone-illustration",
                                "selectorGuids": ["751e5636-d2b0-7b86-a19a-6fb05dcf7d41"]
                            },
                            "xValue": 5,
                            "yValue": 5,
                            "locked": true
                        }
                    }, {
                        "id": "a-16-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".dark-stone-illustration",
                                "selectorGuids": ["751e5636-d2b0-7b86-a19a-6fb05dcf7d41"]
                            },
                            "xValue": -70,
                            "yValue": 100,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 92,
                    "actionItems": [{
                        "id": "a-16-n-7",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".section-home-contact",
                                "selectorGuids": ["4349c172-b209-352f-9327-57280f662d38"]
                            },
                            "globalSwatchId": "63aa7009",
                            "rValue": 255,
                            "bValue": 255,
                            "gValue": 255,
                            "aValue": 1
                        }
                    }]
                }, {
                    "keyframe": 92.5,
                    "actionItems": [{
                        "id": "a-16-n-6",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".section-home-contact",
                                "selectorGuids": ["4349c172-b209-352f-9327-57280f662d38"]
                            },
                            "globalSwatchId": "aadc4da9",
                            "rValue": 15,
                            "bValue": 15,
                            "gValue": 15,
                            "aValue": 1
                        }
                    }]
                }]
            }],
            "createdOn": 1657790934044
        },
        "a-17": {
            "id": "a-17",
            "title": "about-content hover",
            "continuousParameterGroups": [{
                "id": "a-17-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-17-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".act-now-image",
                                "selectorGuids": ["66eb8d81-edf5-7ad3-6da3-80ac12534639"]
                            },
                            "xValue": -170,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-17-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".act-now-image",
                                "selectorGuids": ["66eb8d81-edf5-7ad3-6da3-80ac12534639"]
                            },
                            "xValue": 170,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-17-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-17-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".act-now-image",
                                "selectorGuids": ["66eb8d81-edf5-7ad3-6da3-80ac12534639"]
                            },
                            "yValue": -170,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-17-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".act-now-image",
                                "selectorGuids": ["66eb8d81-edf5-7ad3-6da3-80ac12534639"]
                            },
                            "yValue": 170,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1657797422484
        },
        "a-20": {
            "id": "a-20",
            "title": "culture hover IN",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-20-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".culture-content",
                            "selectorGuids": ["26a3a69a-23b9-c2f6-566e-2068bf6472ea"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-20-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".culture-content",
                            "selectorGuids": ["26a3a69a-23b9-c2f6-566e-2068bf6472ea"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1657817219877
        },
        "a-21": {
            "id": "a-21",
            "title": "culture hover OUT",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-21-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuad",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".culture-content",
                            "selectorGuids": ["26a3a69a-23b9-c2f6-566e-2068bf6472ea"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-21-n-4",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 300,
                        "target": {
                            "selector": ".list_img-wrap",
                            "selectorGuids": ["32d4a3a9-a619-8dcd-03da-8dfaec90bb66"]
                        },
                        "xValue": 0.5,
                        "yValue": 0.5,
                        "locked": true
                    }
                }, {
                    "id": "a-21-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 300,
                        "target": {
                            "selector": ".list_img-wrap",
                            "selectorGuids": ["32d4a3a9-a619-8dcd-03da-8dfaec90bb66"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-21-n-5",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".list_img-wrap",
                            "selectorGuids": ["32d4a3a9-a619-8dcd-03da-8dfaec90bb66"]
                        },
                        "value": "none"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1657817219877
        },
        "a-22": {
            "id": "a-22",
            "title": "loading-animation",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-22-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|e005a517-9994-fb0e-d076-41b967d4199a"
                        },
                        "xValue": 2,
                        "yValue": 2,
                        "locked": true
                    }
                }, {
                    "id": "a-22-n-23",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|5378f927-0750-dec8-d642-fcd882ab5214"
                        },
                        "value": "flex"
                    }
                }, {
                    "id": "a-22-n-21",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|2ed658af-11e0-ea4e-4900-46e8a5cf4cc5"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-22-n-19",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|26471630-e7a2-40ad-dfc1-c7de7ebcc291"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-22-n-16",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|dae1c164-67ef-dc38-e09d-64d3bb5e061e"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-22-n-15",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|dae1c164-67ef-dc38-e09d-64d3bb5e061e"
                        },
                        "xValue": 1.2,
                        "yValue": 1.2,
                        "locked": true
                    }
                }, {
                    "id": "a-22-n-12",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|b383814d-55d6-2176-bf5d-50e268192119"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-22-n-11",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|b383814d-55d6-2176-bf5d-50e268192119"
                        },
                        "xValue": 1.2,
                        "yValue": 1.2,
                        "locked": true
                    }
                }, {
                    "id": "a-22-n-8",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|2350b711-a6e9-0488-4b21-23d2bfec5e52"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-22-n-7",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|2350b711-a6e9-0488-4b21-23d2bfec5e52"
                        },
                        "xValue": 1.2,
                        "yValue": 1.2,
                        "locked": true
                    }
                }, {
                    "id": "a-22-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|a191514b-fb90-dc41-ac09-1402b80cc768"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-22-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|a191514b-fb90-dc41-ac09-1402b80cc768"
                        },
                        "xValue": 1.2,
                        "yValue": 1.2,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-22-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 800,
                        "easing": "outQuart",
                        "duration": 800,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|e005a517-9994-fb0e-d076-41b967d4199a"
                        },
                        "xValue": 0.1,
                        "yValue": 0.1,
                        "locked": true
                    }
                }, {
                    "id": "a-22-n-22",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 800,
                        "easing": "outQuart",
                        "duration": 800,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|2ed658af-11e0-ea4e-4900-46e8a5cf4cc5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-22-n-20",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 1400,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|26471630-e7a2-40ad-dfc1-c7de7ebcc291"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-22-n-5",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|a191514b-fb90-dc41-ac09-1402b80cc768"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-22-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|a191514b-fb90-dc41-ac09-1402b80cc768"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-22-n-9",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 100,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|2350b711-a6e9-0488-4b21-23d2bfec5e52"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-22-n-10",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 100,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|2350b711-a6e9-0488-4b21-23d2bfec5e52"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-22-n-13",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 200,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|b383814d-55d6-2176-bf5d-50e268192119"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-22-n-14",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|b383814d-55d6-2176-bf5d-50e268192119"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-22-n-17",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 300,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|dae1c164-67ef-dc38-e09d-64d3bb5e061e"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-22-n-18",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 300,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|dae1c164-67ef-dc38-e09d-64d3bb5e061e"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1657873638515
        },
        "a-23": {
            "id": "a-23",
            "title": "loader HIDE",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-23-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".header-heading",
                            "selectorGuids": ["494167e3-da1b-6944-9b25-8cc1d003e368"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-23-n-6",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".header-heading",
                            "selectorGuids": ["494167e3-da1b-6944-9b25-8cc1d003e368"]
                        },
                        "xValue": -20,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {
                            "useEventTarget": true,
                            "id": "62cd9cfff2ea6357338d8749|e005a517-9994-fb0e-d076-41b967d4199a"
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "locked": true
                    }
                }, {
                    "id": "a-23-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".page-loader",
                            "selectorGuids": ["ba5917de-5986-0f38-17dd-cbc81b5c5044"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 200,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "PARENT",
                            "selector": ".page-loader",
                            "selectorGuids": ["ba5917de-5986-0f38-17dd-cbc81b5c5044"]
                        },
                        "value": "none"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-23-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 600,
                        "target": {
                            "selector": ".header-heading",
                            "selectorGuids": ["494167e3-da1b-6944-9b25-8cc1d003e368"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-23-n-7",
                    "actionTypeId": "TRANSFORM_MOVE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 600,
                        "target": {
                            "selector": ".header-heading",
                            "selectorGuids": ["494167e3-da1b-6944-9b25-8cc1d003e368"]
                        },
                        "xValue": 0,
                        "xUnit": "%",
                        "yUnit": "PX",
                        "zUnit": "PX"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1657874025282
        },
        "a-24": {
            "id": "a-24",
            "title": "loader-text drehung",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-24-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 40000,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|a191514b-fb90-dc41-ac09-1402b80cc768"
                        },
                        "zValue": 360,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-24-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 40000,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|dae1c164-67ef-dc38-e09d-64d3bb5e061e"
                        },
                        "zValue": -360,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-24-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 40000,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|b383814d-55d6-2176-bf5d-50e268192119"
                        },
                        "zValue": 360,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-24-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 40000,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|2350b711-a6e9-0488-4b21-23d2bfec5e52"
                        },
                        "zValue": -360,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-24-n-5",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|a191514b-fb90-dc41-ac09-1402b80cc768"
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-24-n-8",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|2350b711-a6e9-0488-4b21-23d2bfec5e52"
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-24-n-7",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|b383814d-55d6-2176-bf5d-50e268192119"
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-24-n-6",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|dae1c164-67ef-dc38-e09d-64d3bb5e061e"
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1657877041122
        },
        "a-25": {
            "id": "a-25",
            "title": "loader link hover IN",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-25-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": true,
                            "id": "62cd9cfff2ea6357338d8749|e005a517-9994-fb0e-d076-41b967d4199a"
                        },
                        "xValue": 0.1,
                        "yValue": 0.1,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-25-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 100,
                        "target": {
                            "useEventTarget": true,
                            "id": "62cd9cfff2ea6357338d8749|e005a517-9994-fb0e-d076-41b967d4199a"
                        },
                        "xValue": 0.11,
                        "yValue": 0.11,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1657877687979
        },
        "a-26": {
            "id": "a-26",
            "title": "loader link hover OUT",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-26-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 100,
                        "target": {
                            "useEventTarget": true,
                            "id": "62cd9cfff2ea6357338d8749|e005a517-9994-fb0e-d076-41b967d4199a"
                        },
                        "xValue": 0.1,
                        "yValue": 0.1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1657877800750
        },
        "a-27": {
            "id": "a-27",
            "title": "rotate animation",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-27-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 20000,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|b0799276-3d35-074c-c008-745c93d59e3b"
                        },
                        "zValue": -360,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-27-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|b0799276-3d35-074c-c008-745c93d59e3b"
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1657883153932
        },
        "a-28": {
            "id": "a-28",
            "title": "culture move photos",
            "continuousParameterGroups": [{
                "id": "a-28-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-28-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".list_img-wrap",
                                "selectorGuids": ["32d4a3a9-a619-8dcd-03da-8dfaec90bb66"]
                            },
                            "xValue": -10,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-28-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".list_img-wrap",
                                "selectorGuids": ["32d4a3a9-a619-8dcd-03da-8dfaec90bb66"]
                            },
                            "xValue": 10,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-28-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-28-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".list_img-wrap",
                                "selectorGuids": ["32d4a3a9-a619-8dcd-03da-8dfaec90bb66"]
                            },
                            "yValue": -10,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-28-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".list_img-wrap",
                                "selectorGuids": ["32d4a3a9-a619-8dcd-03da-8dfaec90bb66"]
                            },
                            "yValue": 10,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1657884435086
        },
        "a-29": {
            "id": "a-29",
            "title": "culture image IN solidarity",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-29-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".list_img-wrap.is-solidarity",
                            "selectorGuids": ["32d4a3a9-a619-8dcd-03da-8dfaec90bb66", "68c73c19-7892-7e17-797e-a1c786cf971b"]
                        },
                        "xValue": 0.5,
                        "yValue": 0.5,
                        "locked": true
                    }
                }, {
                    "id": "a-29-n-6",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".list_img-wrap.is-solidarity",
                            "selectorGuids": ["32d4a3a9-a619-8dcd-03da-8dfaec90bb66", "68c73c19-7892-7e17-797e-a1c786cf971b"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-29-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".list_img-wrap.is-solidarity",
                            "selectorGuids": ["32d4a3a9-a619-8dcd-03da-8dfaec90bb66", "68c73c19-7892-7e17-797e-a1c786cf971b"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-29-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".list_img-wrap.is-solidarity",
                            "selectorGuids": ["32d4a3a9-a619-8dcd-03da-8dfaec90bb66", "68c73c19-7892-7e17-797e-a1c786cf971b"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-29-n-7",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".list_img-wrap.is-solidarity",
                            "selectorGuids": ["32d4a3a9-a619-8dcd-03da-8dfaec90bb66", "68c73c19-7892-7e17-797e-a1c786cf971b"]
                        },
                        "zValue": -5,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-29-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".list_img-wrap.is-solidarity",
                            "selectorGuids": ["32d4a3a9-a619-8dcd-03da-8dfaec90bb66", "68c73c19-7892-7e17-797e-a1c786cf971b"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-29-n-4",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".list_img-wrap.is-solidarity",
                            "selectorGuids": ["32d4a3a9-a619-8dcd-03da-8dfaec90bb66", "68c73c19-7892-7e17-797e-a1c786cf971b"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1657889817694
        },
        "a-30": {
            "id": "a-30",
            "title": "culture image IN creativity",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-30-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".list_img-wrap.is-creativity",
                            "selectorGuids": ["32d4a3a9-a619-8dcd-03da-8dfaec90bb66", "5113198f-d406-04f0-e522-989d305289c3"]
                        },
                        "xValue": 0.5,
                        "yValue": 0.5,
                        "locked": true
                    }
                }, {
                    "id": "a-30-n-6",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".list_img-wrap.is-creativity",
                            "selectorGuids": ["32d4a3a9-a619-8dcd-03da-8dfaec90bb66", "5113198f-d406-04f0-e522-989d305289c3"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-30-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".list_img-wrap.is-creativity",
                            "selectorGuids": ["32d4a3a9-a619-8dcd-03da-8dfaec90bb66", "5113198f-d406-04f0-e522-989d305289c3"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-30-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".list_img-wrap.is-creativity",
                            "selectorGuids": ["32d4a3a9-a619-8dcd-03da-8dfaec90bb66", "5113198f-d406-04f0-e522-989d305289c3"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-30-n-7",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".list_img-wrap.is-creativity",
                            "selectorGuids": ["32d4a3a9-a619-8dcd-03da-8dfaec90bb66", "5113198f-d406-04f0-e522-989d305289c3"]
                        },
                        "zValue": 5,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-30-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".list_img-wrap.is-creativity",
                            "selectorGuids": ["32d4a3a9-a619-8dcd-03da-8dfaec90bb66", "5113198f-d406-04f0-e522-989d305289c3"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-30-n-5",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".list_img-wrap.is-creativity",
                            "selectorGuids": ["32d4a3a9-a619-8dcd-03da-8dfaec90bb66", "5113198f-d406-04f0-e522-989d305289c3"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1657889817694
        },
        "a-31": {
            "id": "a-31",
            "title": "culture image IN workspirit",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-31-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".list_img-wrap.is-workspirit",
                            "selectorGuids": ["32d4a3a9-a619-8dcd-03da-8dfaec90bb66", "f7dcaf41-33a7-9782-b28b-07cf89d26d2a"]
                        },
                        "xValue": 0.5,
                        "yValue": 0.5,
                        "locked": true
                    }
                }, {
                    "id": "a-31-n-6",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".list_img-wrap.is-workspirit",
                            "selectorGuids": ["32d4a3a9-a619-8dcd-03da-8dfaec90bb66", "f7dcaf41-33a7-9782-b28b-07cf89d26d2a"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-31-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".list_img-wrap.is-workspirit",
                            "selectorGuids": ["32d4a3a9-a619-8dcd-03da-8dfaec90bb66", "f7dcaf41-33a7-9782-b28b-07cf89d26d2a"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-31-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".list_img-wrap.is-workspirit",
                            "selectorGuids": ["32d4a3a9-a619-8dcd-03da-8dfaec90bb66", "f7dcaf41-33a7-9782-b28b-07cf89d26d2a"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-31-n-7",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".list_img-wrap.is-workspirit",
                            "selectorGuids": ["32d4a3a9-a619-8dcd-03da-8dfaec90bb66", "f7dcaf41-33a7-9782-b28b-07cf89d26d2a"]
                        },
                        "zValue": -5,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-31-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".list_img-wrap.is-workspirit",
                            "selectorGuids": ["32d4a3a9-a619-8dcd-03da-8dfaec90bb66", "f7dcaf41-33a7-9782-b28b-07cf89d26d2a"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-31-n-5",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".list_img-wrap.is-workspirit",
                            "selectorGuids": ["32d4a3a9-a619-8dcd-03da-8dfaec90bb66", "f7dcaf41-33a7-9782-b28b-07cf89d26d2a"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1657889817694
        },
        "a-32": {
            "id": "a-32",
            "title": "culture image IN open minds",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-32-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".list_img-wrap.is-openminds",
                            "selectorGuids": ["32d4a3a9-a619-8dcd-03da-8dfaec90bb66", "93d86197-964e-91b4-e656-ec93f29788dd"]
                        },
                        "xValue": 0.5,
                        "yValue": 0.5,
                        "locked": true
                    }
                }, {
                    "id": "a-32-n-6",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".list_img-wrap.is-openminds",
                            "selectorGuids": ["32d4a3a9-a619-8dcd-03da-8dfaec90bb66", "93d86197-964e-91b4-e656-ec93f29788dd"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-32-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".list_img-wrap.is-openminds",
                            "selectorGuids": ["32d4a3a9-a619-8dcd-03da-8dfaec90bb66", "93d86197-964e-91b4-e656-ec93f29788dd"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-32-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".list_img-wrap.is-openminds",
                            "selectorGuids": ["32d4a3a9-a619-8dcd-03da-8dfaec90bb66", "93d86197-964e-91b4-e656-ec93f29788dd"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-32-n-7",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".list_img-wrap.is-openminds",
                            "selectorGuids": ["32d4a3a9-a619-8dcd-03da-8dfaec90bb66", "93d86197-964e-91b4-e656-ec93f29788dd"]
                        },
                        "zValue": 5,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-32-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".list_img-wrap.is-openminds",
                            "selectorGuids": ["32d4a3a9-a619-8dcd-03da-8dfaec90bb66", "93d86197-964e-91b4-e656-ec93f29788dd"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-32-n-5",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".list_img-wrap.is-openminds",
                            "selectorGuids": ["32d4a3a9-a619-8dcd-03da-8dfaec90bb66", "93d86197-964e-91b4-e656-ec93f29788dd"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1657889817694
        },
        "a-33": {
            "id": "a-33",
            "title": "culture image IN mindfullness",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-33-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".list_img-wrap.is-mindfullness",
                            "selectorGuids": ["32d4a3a9-a619-8dcd-03da-8dfaec90bb66", "fd7c44ba-0f03-a362-1b9f-fd03a4af0ce6"]
                        },
                        "xValue": 0.5,
                        "yValue": 0.5,
                        "locked": true
                    }
                }, {
                    "id": "a-33-n-6",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".list_img-wrap.is-mindfullness",
                            "selectorGuids": ["32d4a3a9-a619-8dcd-03da-8dfaec90bb66", "fd7c44ba-0f03-a362-1b9f-fd03a4af0ce6"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-33-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".list_img-wrap.is-mindfullness",
                            "selectorGuids": ["32d4a3a9-a619-8dcd-03da-8dfaec90bb66", "fd7c44ba-0f03-a362-1b9f-fd03a4af0ce6"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-33-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".list_img-wrap.is-mindfullness",
                            "selectorGuids": ["32d4a3a9-a619-8dcd-03da-8dfaec90bb66", "fd7c44ba-0f03-a362-1b9f-fd03a4af0ce6"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-33-n-7",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".list_img-wrap.is-mindfullness",
                            "selectorGuids": ["32d4a3a9-a619-8dcd-03da-8dfaec90bb66", "fd7c44ba-0f03-a362-1b9f-fd03a4af0ce6"]
                        },
                        "zValue": -5,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-33-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".list_img-wrap.is-mindfullness",
                            "selectorGuids": ["32d4a3a9-a619-8dcd-03da-8dfaec90bb66", "fd7c44ba-0f03-a362-1b9f-fd03a4af0ce6"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-33-n-5",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".list_img-wrap.is-mindfullness",
                            "selectorGuids": ["32d4a3a9-a619-8dcd-03da-8dfaec90bb66", "fd7c44ba-0f03-a362-1b9f-fd03a4af0ce6"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1657889817694
        },
        "a-34": {
            "id": "a-34",
            "title": "culture image IN fightForDesign",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-34-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".list_img-wrap.is-fightfordesign",
                            "selectorGuids": ["32d4a3a9-a619-8dcd-03da-8dfaec90bb66", "2ca2dbaa-2f9a-3cfa-f872-63768bc41876"]
                        },
                        "xValue": 0.5,
                        "yValue": 0.5,
                        "locked": true
                    }
                }, {
                    "id": "a-34-n-6",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".list_img-wrap.is-fightfordesign",
                            "selectorGuids": ["32d4a3a9-a619-8dcd-03da-8dfaec90bb66", "2ca2dbaa-2f9a-3cfa-f872-63768bc41876"]
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-34-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".list_img-wrap.is-fightfordesign",
                            "selectorGuids": ["32d4a3a9-a619-8dcd-03da-8dfaec90bb66", "2ca2dbaa-2f9a-3cfa-f872-63768bc41876"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-34-n-3",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".list_img-wrap.is-fightfordesign",
                            "selectorGuids": ["32d4a3a9-a619-8dcd-03da-8dfaec90bb66", "2ca2dbaa-2f9a-3cfa-f872-63768bc41876"]
                        },
                        "value": "block"
                    }
                }, {
                    "id": "a-34-n-7",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".list_img-wrap.is-fightfordesign",
                            "selectorGuids": ["32d4a3a9-a619-8dcd-03da-8dfaec90bb66", "2ca2dbaa-2f9a-3cfa-f872-63768bc41876"]
                        },
                        "zValue": 5,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-34-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".list_img-wrap.is-fightfordesign",
                            "selectorGuids": ["32d4a3a9-a619-8dcd-03da-8dfaec90bb66", "2ca2dbaa-2f9a-3cfa-f872-63768bc41876"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-34-n-5",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".list_img-wrap.is-fightfordesign",
                            "selectorGuids": ["32d4a3a9-a619-8dcd-03da-8dfaec90bb66", "2ca2dbaa-2f9a-3cfa-f872-63768bc41876"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1657889817694
        },
        "a-35": {
            "id": "a-35",
            "title": "footer animation",
            "continuousParameterGroups": [{
                "id": "a-35-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-35-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".text-color-white.heading-xlarge",
                                "selectorGuids": ["06fb1785-115b-42bb-da6b-de5f2de174d0", "b54d5578-436a-98c7-02a4-e67169debc50"]
                            },
                            "xValue": 60,
                            "yValue": -100,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-35-n-3",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".text-color-white.heading-xlarge",
                                "selectorGuids": ["06fb1785-115b-42bb-da6b-de5f2de174d0", "b54d5578-436a-98c7-02a4-e67169debc50"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }, {
                        "id": "a-35-n-5",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".form",
                                "selectorGuids": ["b0934d9a-875a-bb42-0630-12090a77fc2d"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 40,
                    "actionItems": [{
                        "id": "a-35-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": [0.25, 0.25, 0.75, 0.75],
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".text-color-white.heading-xlarge",
                                "selectorGuids": ["06fb1785-115b-42bb-da6b-de5f2de174d0", "b54d5578-436a-98c7-02a4-e67169debc50"]
                            },
                            "xValue": 0,
                            "yValue": -100,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-35-n-4",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".text-color-white.heading-xlarge",
                                "selectorGuids": ["06fb1785-115b-42bb-da6b-de5f2de174d0", "b54d5578-436a-98c7-02a4-e67169debc50"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 60,
                    "actionItems": [{
                        "id": "a-35-n-8",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".text-color-white.heading-xlarge",
                                "selectorGuids": ["06fb1785-115b-42bb-da6b-de5f2de174d0", "b54d5578-436a-98c7-02a4-e67169debc50"]
                            },
                            "xValue": 0,
                            "yValue": 0,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 80,
                    "actionItems": [{
                        "id": "a-35-n-7",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".form",
                                "selectorGuids": ["b0934d9a-875a-bb42-0630-12090a77fc2d"]
                            },
                            "value": 0,
                            "unit": ""
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-35-n-6",
                        "actionTypeId": "STYLE_OPACITY",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".form",
                                "selectorGuids": ["b0934d9a-875a-bb42-0630-12090a77fc2d"]
                            },
                            "value": 1,
                            "unit": ""
                        }
                    }]
                }]
            }],
            "createdOn": 1658134115202
        },
        "a-36": {
            "id": "a-36",
            "title": "prohects hover animation",
            "continuousParameterGroups": [{
                "id": "a-36-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-36-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".projects-hover-item",
                                "selectorGuids": ["48ade50e-a7d8-d277-b5e1-f97d85502f06"]
                            },
                            "xValue": -200,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-36-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".projects-hover-item",
                                "selectorGuids": ["48ade50e-a7d8-d277-b5e1-f97d85502f06"]
                            },
                            "xValue": 200,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-36-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-36-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".projects-hover-item",
                                "selectorGuids": ["48ade50e-a7d8-d277-b5e1-f97d85502f06"]
                            },
                            "yValue": -300,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-36-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".projects-hover-item",
                                "selectorGuids": ["48ade50e-a7d8-d277-b5e1-f97d85502f06"]
                            },
                            "yValue": 300,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1658145495230
        },
        "a-37": {
            "id": "a-37",
            "title": "act now button hover IN",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-37-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".projects-hover-item",
                            "selectorGuids": ["48ade50e-a7d8-d277-b5e1-f97d85502f06"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-37-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".cursor",
                            "selectorGuids": ["25547e5a-0b8a-c325-ae13-fc686dada18b"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-37-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".projects-hover-item",
                            "selectorGuids": ["48ade50e-a7d8-d277-b5e1-f97d85502f06"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-37-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 100,
                        "target": {
                            "selector": ".cursor",
                            "selectorGuids": ["25547e5a-0b8a-c325-ae13-fc686dada18b"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1658146825056
        },
        "a-38": {
            "id": "a-38",
            "title": "act now button hover OUT",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-38-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 100,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".projects-hover-item",
                            "selectorGuids": ["48ade50e-a7d8-d277-b5e1-f97d85502f06"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-38-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 100,
                        "target": {
                            "selector": ".cursor",
                            "selectorGuids": ["25547e5a-0b8a-c325-ae13-fc686dada18b"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1658146825056
        },
        "a-39": {
            "id": "a-39",
            "title": "about button hover IN",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-39-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".act-now-link",
                            "selectorGuids": ["af1ebcd4-c076-8117-fe0c-352b6f27733f"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-39-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "selector": ".cursor",
                            "selectorGuids": ["25547e5a-0b8a-c325-ae13-fc686dada18b"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-39-n-3",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".act-now-link",
                            "selectorGuids": ["af1ebcd4-c076-8117-fe0c-352b6f27733f"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-39-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".act-now-link",
                            "selectorGuids": ["af1ebcd4-c076-8117-fe0c-352b6f27733f"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-39-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 100,
                        "target": {
                            "selector": ".cursor",
                            "selectorGuids": ["25547e5a-0b8a-c325-ae13-fc686dada18b"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-39-n-4",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".act-now-link",
                            "selectorGuids": ["af1ebcd4-c076-8117-fe0c-352b6f27733f"]
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1658146825056
        },
        "a-40": {
            "id": "a-40",
            "title": "about button hover OUT",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-40-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 50,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".act-now-link",
                            "selectorGuids": ["af1ebcd4-c076-8117-fe0c-352b6f27733f"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-40-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 100,
                        "target": {
                            "selector": ".cursor",
                            "selectorGuids": ["25547e5a-0b8a-c325-ae13-fc686dada18b"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-40-n-2",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 50,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "selector": ".act-now-link",
                            "selectorGuids": ["af1ebcd4-c076-8117-fe0c-352b6f27733f"]
                        },
                        "xValue": 0,
                        "yValue": 0,
                        "locked": true
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1658146825056
        },
        "a-41": {
            "id": "a-41",
            "title": "header illustraion",
            "continuousParameterGroups": [{
                "id": "a-41-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-41-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".header-illustration",
                                "selectorGuids": ["15333724-ccfd-fb2a-00e2-9f4923ec4360"]
                            },
                            "xValue": -6,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-41-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".header-illustration",
                                "selectorGuids": ["15333724-ccfd-fb2a-00e2-9f4923ec4360"]
                            },
                            "xValue": 6,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-41-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-41-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".header-illustration",
                                "selectorGuids": ["15333724-ccfd-fb2a-00e2-9f4923ec4360"]
                            },
                            "yValue": -6,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-41-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".header-illustration",
                                "selectorGuids": ["15333724-ccfd-fb2a-00e2-9f4923ec4360"]
                            },
                            "yValue": 6,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1658837894282
        },
        "a-42": {
            "id": "a-42",
            "title": "nav bar",
            "continuousParameterGroups": [{
                "id": "a-42-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-42-n",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "cf8c0513-56aa-94e6-f851-76034f436e89"
                            },
                            "globalSwatchId": "",
                            "rValue": 15,
                            "bValue": 15,
                            "gValue": 15,
                            "aValue": 1
                        }
                    }, {
                        "id": "a-42-n-4",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "6a6620a2-add5-a504-6696-3202b75ecadb"
                            },
                            "globalSwatchId": "aadc4da9",
                            "rValue": 15,
                            "bValue": 15,
                            "gValue": 15,
                            "aValue": 1
                        }
                    }]
                }, {
                    "keyframe": 87,
                    "actionItems": [{
                        "id": "a-42-n-3",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "cf8c0513-56aa-94e6-f851-76034f436e89"
                            },
                            "globalSwatchId": "",
                            "rValue": 15,
                            "bValue": 15,
                            "gValue": 15,
                            "aValue": 1
                        }
                    }, {
                        "id": "a-42-n-5",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "6a6620a2-add5-a504-6696-3202b75ecadb"
                            },
                            "globalSwatchId": "aadc4da9",
                            "rValue": 15,
                            "bValue": 15,
                            "gValue": 15,
                            "aValue": 1
                        }
                    }]
                }, {
                    "keyframe": 88,
                    "actionItems": [{
                        "id": "a-42-n-2",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "cf8c0513-56aa-94e6-f851-76034f436e89"
                            },
                            "globalSwatchId": "63aa7009",
                            "rValue": 255,
                            "bValue": 255,
                            "gValue": 255,
                            "aValue": 1
                        }
                    }, {
                        "id": "a-42-n-6",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "6a6620a2-add5-a504-6696-3202b75ecadb"
                            },
                            "globalSwatchId": "63aa7009",
                            "rValue": 255,
                            "bValue": 255,
                            "gValue": 255,
                            "aValue": 1
                        }
                    }]
                }]
            }],
            "createdOn": 1658838883365
        },
        "a-43": {
            "id": "a-43",
            "title": "cursor",
            "continuousParameterGroups": [{
                "id": "a-43-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-43-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "fe85dcf4-7fc0-1e93-4cbb-de564c73a2bd"
                            },
                            "xValue": -50,
                            "xUnit": "vw",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-43-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "fe85dcf4-7fc0-1e93-4cbb-de564c73a2bd"
                            },
                            "xValue": 50,
                            "xUnit": "vw",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-43-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-43-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "fe85dcf4-7fc0-1e93-4cbb-de564c73a2bd"
                            },
                            "yValue": -50,
                            "xUnit": "PX",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-43-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "fe85dcf4-7fc0-1e93-4cbb-de564c73a2bd"
                            },
                            "yValue": 50,
                            "xUnit": "PX",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1658911848407
        },
        "a-44": {
            "id": "a-44",
            "title": "header big animation",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-44-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|5ed7bcae-2c90-5eee-153e-b1136884f5a3"
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-44-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200000,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|5ed7bcae-2c90-5eee-153e-b1136884f5a3"
                        },
                        "zValue": 360,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-44-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|5ed7bcae-2c90-5eee-153e-b1136884f5a3"
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1658927592192
        },
        "a-45": {
            "id": "a-45",
            "title": "about scroll",
            "continuousParameterGroups": [{
                "id": "a-45-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-45-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".about-illustration",
                                "selectorGuids": ["2352885a-abae-3ca1-fcb9-e6b10e927bbb"]
                            },
                            "yValue": 30,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-45-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".about-illustration",
                                "selectorGuids": ["2352885a-abae-3ca1-fcb9-e6b10e927bbb"]
                            },
                            "yValue": -30,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1658930106057
        },
        "a-46": {
            "id": "a-46",
            "title": "slider rotate",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-46-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "PARENT",
                            "boundaryMode": true,
                            "id": "62cd9cfff2ea6357338d8749|c84947aa-d0e9-5ccd-52cd-a4196fadd3b4"
                        },
                        "zValue": 5,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1658932106619
        },
        "a-47": {
            "id": "a-47",
            "title": "slider rotate OUT",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-47-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 300,
                        "target": {
                            "useEventTarget": "PARENT",
                            "boundaryMode": true,
                            "id": "62cd9cfff2ea6357338d8749|c84947aa-d0e9-5ccd-52cd-a4196fadd3b4"
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1658932106619
        },
        "a-48": {
            "id": "a-48",
            "title": "services item OPEN - konzeption mobile",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-48-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-item-content",
                            "selectorGuids": ["07c05542-6ec5-5f9c-e274-d4612707b8ae"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-48-n-14",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "62cd9cfff2ea6357338d8749|c7a1f852-11a3-78fe-34b5-2cd0dd9d2440"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-48-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".services-item-content.is-konzeption",
                            "selectorGuids": ["07c05542-6ec5-5f9c-e274-d4612707b8ae", "62411a24-c05d-4e51-66d5-df21d5d59abc"]
                        },
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-48-n-3",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-item-content",
                            "selectorGuids": ["07c05542-6ec5-5f9c-e274-d4612707b8ae"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-48-n-13",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".text-size-large.is-bold",
                            "selectorGuids": ["b0934d9a-875a-bb42-0630-12090a77fbf9", "e8e3e006-3531-0ece-825c-4b1d8bdf40a4"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-48-n-10",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 10,
                        "easing": "inQuad",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".services-item-content.is-konzeption",
                            "selectorGuids": ["07c05542-6ec5-5f9c-e274-d4612707b8ae", "62411a24-c05d-4e51-66d5-df21d5d59abc"]
                        },
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-48-n-12",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 10,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "62cd9cfff2ea6357338d8749|c7a1f852-11a3-78fe-34b5-2cd0dd9d2440"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-48-n-11",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 10,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-heading.is-konzeption",
                            "selectorGuids": ["b7955528-16a5-433a-ccf2-03c46f9168fb", "892e872c-5ce9-a823-9bea-6253f3b55e0e"]
                        },
                        "value": "block"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1657732250013
        },
        "a-49": {
            "id": "a-49",
            "title": "services item OPEN - analyse mobile",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-49-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-item-content",
                            "selectorGuids": ["07c05542-6ec5-5f9c-e274-d4612707b8ae"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-49-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-item-content",
                            "selectorGuids": ["07c05542-6ec5-5f9c-e274-d4612707b8ae"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-49-n-12",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".text-size-large.is-bold",
                            "selectorGuids": ["b0934d9a-875a-bb42-0630-12090a77fbf9", "e8e3e006-3531-0ece-825c-4b1d8bdf40a4"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-49-n-9",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 10,
                        "easing": "inQuad",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".services-item-content.is-analyse",
                            "selectorGuids": ["07c05542-6ec5-5f9c-e274-d4612707b8ae", "80052126-019d-dc07-f02d-424b9c5ffd53"]
                        },
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-49-n-11",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 10,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "62cd9cfff2ea6357338d8749|e4864860-f304-29e9-82e0-2072964ef78f"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-49-n-10",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 10,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-heading.is-analyse",
                            "selectorGuids": ["b7955528-16a5-433a-ccf2-03c46f9168fb", "c8d5b74d-22ef-a8dd-a1a3-c084af48e02e"]
                        },
                        "value": "block"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1657732250013
        },
        "a-50": {
            "id": "a-50",
            "title": "services item OPEN - corporate mobile",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-50-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-item-content",
                            "selectorGuids": ["07c05542-6ec5-5f9c-e274-d4612707b8ae"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-50-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-item-content",
                            "selectorGuids": ["07c05542-6ec5-5f9c-e274-d4612707b8ae"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-50-n-12",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".text-size-large.is-bold",
                            "selectorGuids": ["b0934d9a-875a-bb42-0630-12090a77fbf9", "e8e3e006-3531-0ece-825c-4b1d8bdf40a4"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-50-n-9",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 10,
                        "easing": "inQuad",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".services-item-content.is-corporate",
                            "selectorGuids": ["07c05542-6ec5-5f9c-e274-d4612707b8ae", "350f02bb-530c-95eb-eddb-63e60d44c928"]
                        },
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-50-n-11",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 10,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "62cd9cfff2ea6357338d8749|b1d51777-e59d-1087-5c5e-819e50731c4c"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-50-n-10",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 10,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-heading.is-corporate",
                            "selectorGuids": ["b7955528-16a5-433a-ccf2-03c46f9168fb", "c1de435f-7069-44c2-80e4-cb5cbf0cb49a"]
                        },
                        "value": "block"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1657732250013
        },
        "a-51": {
            "id": "a-51",
            "title": "services item OPEN - print mobile",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-51-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-item-content",
                            "selectorGuids": ["07c05542-6ec5-5f9c-e274-d4612707b8ae"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-51-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-item-content",
                            "selectorGuids": ["07c05542-6ec5-5f9c-e274-d4612707b8ae"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-51-n-12",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".text-size-large.is-bold",
                            "selectorGuids": ["b0934d9a-875a-bb42-0630-12090a77fbf9", "e8e3e006-3531-0ece-825c-4b1d8bdf40a4"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-51-n-9",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 10,
                        "easing": "inQuad",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "SIBLINGS",
                            "selector": ".services-item-content.is-print",
                            "selectorGuids": ["07c05542-6ec5-5f9c-e274-d4612707b8ae", "538a6720-3c21-93bc-7ae7-8ff46c8682f3"]
                        },
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-51-n-11",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 10,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "62cd9cfff2ea6357338d8749|6d1e4eac-30b3-6df0-ca13-c7f27b787199"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-51-n-10",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 10,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-heading.is-print",
                            "selectorGuids": ["b7955528-16a5-433a-ccf2-03c46f9168fb", "df826fa0-0598-8f1a-c137-daa752acc5e5"]
                        },
                        "value": "block"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1657732250013
        },
        "a-52": {
            "id": "a-52",
            "title": "services item OPEN - digital mobile",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-52-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-item-content",
                            "selectorGuids": ["07c05542-6ec5-5f9c-e274-d4612707b8ae"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-52-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-item-content",
                            "selectorGuids": ["07c05542-6ec5-5f9c-e274-d4612707b8ae"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-52-n-12",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".text-size-large.is-bold",
                            "selectorGuids": ["b0934d9a-875a-bb42-0630-12090a77fbf9", "e8e3e006-3531-0ece-825c-4b1d8bdf40a4"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-52-n-9",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 10,
                        "easing": "inQuad",
                        "duration": 200,
                        "target": {
                            "selector": ".services-item-content.is-digital",
                            "selectorGuids": ["07c05542-6ec5-5f9c-e274-d4612707b8ae", "5377ab50-472b-6957-7d51-2fac4e001c05"]
                        },
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-52-n-11",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 10,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "62cd9cfff2ea6357338d8749|75b7d69a-f411-82d5-98f8-c46e99742f9b"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-52-n-10",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 10,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-heading.is-digital",
                            "selectorGuids": ["b7955528-16a5-433a-ccf2-03c46f9168fb", "d7009ceb-ce0f-d405-f8b2-9824f13b7890"]
                        },
                        "value": "block"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1657732250013
        },
        "a-53": {
            "id": "a-53",
            "title": "services item OPEN - produkte mobile",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-53-n",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-item-content",
                            "selectorGuids": ["07c05542-6ec5-5f9c-e274-d4612707b8ae"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-53-n-2",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-item-content",
                            "selectorGuids": ["07c05542-6ec5-5f9c-e274-d4612707b8ae"]
                        },
                        "heightValue": 0,
                        "widthUnit": "PX",
                        "heightUnit": "px",
                        "locked": false
                    }
                }, {
                    "id": "a-53-n-12",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".text-size-large.is-bold",
                            "selectorGuids": ["b0934d9a-875a-bb42-0630-12090a77fbf9", "e8e3e006-3531-0ece-825c-4b1d8bdf40a4"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-53-n-9",
                    "actionTypeId": "STYLE_SIZE",
                    "config": {
                        "delay": 10,
                        "easing": "inQuad",
                        "duration": 200,
                        "target": {
                            "selector": ".services-item-content.is-produkte",
                            "selectorGuids": ["07c05542-6ec5-5f9c-e274-d4612707b8ae", "43676be3-0da2-7896-498c-dcbab42074bb"]
                        },
                        "widthUnit": "PX",
                        "heightUnit": "AUTO",
                        "locked": false
                    }
                }, {
                    "id": "a-53-n-11",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 10,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {
                            "useEventTarget": "CHILDREN",
                            "id": "62cd9cfff2ea6357338d8749|efe3a35a-0330-0141-0be1-8d535659f05d"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-53-n-10",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 10,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".services-heading.is-produkte",
                            "selectorGuids": ["b7955528-16a5-433a-ccf2-03c46f9168fb", "6f5a6c6c-2630-0fab-24f2-d666bf62a788"]
                        },
                        "value": "block"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1657732250013
        },
        "a-54": {
            "id": "a-54",
            "title": "loading-animation mobile",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-54-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|e005a517-9994-fb0e-d076-41b967d4199a"
                        },
                        "xValue": 2,
                        "yValue": 2,
                        "locked": true
                    }
                }, {
                    "id": "a-54-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|5378f927-0750-dec8-d642-fcd882ab5214"
                        },
                        "value": "flex"
                    }
                }, {
                    "id": "a-54-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|2ed658af-11e0-ea4e-4900-46e8a5cf4cc5"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-54-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|26471630-e7a2-40ad-dfc1-c7de7ebcc291"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-54-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|dae1c164-67ef-dc38-e09d-64d3bb5e061e"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-54-n-6",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|dae1c164-67ef-dc38-e09d-64d3bb5e061e"
                        },
                        "xValue": 1.2,
                        "yValue": 1.2,
                        "locked": true
                    }
                }, {
                    "id": "a-54-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|b383814d-55d6-2176-bf5d-50e268192119"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-54-n-8",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|b383814d-55d6-2176-bf5d-50e268192119"
                        },
                        "xValue": 1.2,
                        "yValue": 1.2,
                        "locked": true
                    }
                }, {
                    "id": "a-54-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|2350b711-a6e9-0488-4b21-23d2bfec5e52"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-54-n-10",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|2350b711-a6e9-0488-4b21-23d2bfec5e52"
                        },
                        "xValue": 1.2,
                        "yValue": 1.2,
                        "locked": true
                    }
                }, {
                    "id": "a-54-n-11",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|a191514b-fb90-dc41-ac09-1402b80cc768"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-54-n-12",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|a191514b-fb90-dc41-ac09-1402b80cc768"
                        },
                        "xValue": 1.2,
                        "yValue": 1.2,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-54-n-13",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 800,
                        "easing": "outQuart",
                        "duration": 800,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|e005a517-9994-fb0e-d076-41b967d4199a"
                        },
                        "xValue": 0.3,
                        "yValue": 0.3,
                        "locked": true
                    }
                }, {
                    "id": "a-54-n-14",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 800,
                        "easing": "outQuart",
                        "duration": 800,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|2ed658af-11e0-ea4e-4900-46e8a5cf4cc5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-54-n-15",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 1400,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|26471630-e7a2-40ad-dfc1-c7de7ebcc291"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-54-n-16",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|a191514b-fb90-dc41-ac09-1402b80cc768"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-54-n-17",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|a191514b-fb90-dc41-ac09-1402b80cc768"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-54-n-18",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 100,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|2350b711-a6e9-0488-4b21-23d2bfec5e52"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-54-n-19",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 100,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|2350b711-a6e9-0488-4b21-23d2bfec5e52"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-54-n-20",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 200,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|b383814d-55d6-2176-bf5d-50e268192119"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-54-n-21",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|b383814d-55d6-2176-bf5d-50e268192119"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-54-n-22",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 300,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|dae1c164-67ef-dc38-e09d-64d3bb5e061e"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-54-n-23",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 300,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|dae1c164-67ef-dc38-e09d-64d3bb5e061e"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1657873638515
        },
        "a-55": {
            "id": "a-55",
            "title": "stone zoom mobile",
            "continuousParameterGroups": [{
                "id": "a-55-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-55-n",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".dark-stone-illustration",
                                "selectorGuids": ["751e5636-d2b0-7b86-a19a-6fb05dcf7d41"]
                            },
                            "xValue": 1,
                            "yValue": 1,
                            "locked": true
                        }
                    }, {
                        "id": "a-55-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".dark-stone-illustration",
                                "selectorGuids": ["751e5636-d2b0-7b86-a19a-6fb05dcf7d41"]
                            },
                            "xValue": 0,
                            "yValue": 0,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-55-n-3",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".section-home-contact",
                                "selectorGuids": ["4349c172-b209-352f-9327-57280f662d38"]
                            },
                            "globalSwatchId": "63aa7009",
                            "rValue": 255,
                            "bValue": 255,
                            "gValue": 255,
                            "aValue": 1
                        }
                    }]
                }, {
                    "keyframe": 54,
                    "actionItems": [{
                        "id": "a-55-n-4",
                        "actionTypeId": "TRANSFORM_SCALE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".dark-stone-illustration",
                                "selectorGuids": ["751e5636-d2b0-7b86-a19a-6fb05dcf7d41"]
                            },
                            "xValue": 5,
                            "yValue": 5,
                            "locked": true
                        }
                    }, {
                        "id": "a-55-n-5",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".dark-stone-illustration",
                                "selectorGuids": ["751e5636-d2b0-7b86-a19a-6fb05dcf7d41"]
                            },
                            "xValue": -70,
                            "yValue": 100,
                            "xUnit": "%",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 60,
                    "actionItems": [{
                        "id": "a-55-n-6",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".section-home-contact",
                                "selectorGuids": ["4349c172-b209-352f-9327-57280f662d38"]
                            },
                            "globalSwatchId": "63aa7009",
                            "rValue": 255,
                            "bValue": 255,
                            "gValue": 255,
                            "aValue": 1
                        }
                    }]
                }, {
                    "keyframe": 60.5,
                    "actionItems": [{
                        "id": "a-55-n-7",
                        "actionTypeId": "STYLE_BACKGROUND_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".section-home-contact",
                                "selectorGuids": ["4349c172-b209-352f-9327-57280f662d38"]
                            },
                            "globalSwatchId": "aadc4da9",
                            "rValue": 15,
                            "bValue": 15,
                            "gValue": 15,
                            "aValue": 1
                        }
                    }]
                }]
            }],
            "createdOn": 1657790934044
        },
        "a-56": {
            "id": "a-56",
            "title": "nav bar mobile",
            "continuousParameterGroups": [{
                "id": "a-56-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-56-n",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "cf8c0513-56aa-94e6-f851-76034f436e89"
                            },
                            "globalSwatchId": "",
                            "rValue": 15,
                            "bValue": 15,
                            "gValue": 15,
                            "aValue": 1
                        }
                    }, {
                        "id": "a-56-n-2",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "6a6620a2-add5-a504-6696-3202b75ecadb"
                            },
                            "globalSwatchId": "aadc4da9",
                            "rValue": 15,
                            "bValue": 15,
                            "gValue": 15,
                            "aValue": 1
                        }
                    }]
                }, {
                    "keyframe": 86,
                    "actionItems": [{
                        "id": "a-56-n-3",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "cf8c0513-56aa-94e6-f851-76034f436e89"
                            },
                            "globalSwatchId": "",
                            "rValue": 15,
                            "bValue": 15,
                            "gValue": 15,
                            "aValue": 1
                        }
                    }, {
                        "id": "a-56-n-4",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "6a6620a2-add5-a504-6696-3202b75ecadb"
                            },
                            "globalSwatchId": "aadc4da9",
                            "rValue": 15,
                            "bValue": 15,
                            "gValue": 15,
                            "aValue": 1
                        }
                    }]
                }, {
                    "keyframe": 87,
                    "actionItems": [{
                        "id": "a-56-n-5",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "cf8c0513-56aa-94e6-f851-76034f436e89"
                            },
                            "globalSwatchId": "63aa7009",
                            "rValue": 255,
                            "bValue": 255,
                            "gValue": 255,
                            "aValue": 1
                        }
                    }, {
                        "id": "a-56-n-6",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "6a6620a2-add5-a504-6696-3202b75ecadb"
                            },
                            "globalSwatchId": "63aa7009",
                            "rValue": 255,
                            "bValue": 255,
                            "gValue": 255,
                            "aValue": 1
                        }
                    }]
                }]
            }],
            "createdOn": 1658838883365
        },
        "a-57": {
            "id": "a-57",
            "title": "kathi image change",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-57-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|0f17989a-f02c-30e8-3d39-a35128ea9b30"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-57-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 6000,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|0f17989a-f02c-30e8-3d39-a35128ea9b30"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-57-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 3000,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|0f17989a-f02c-30e8-3d39-a35128ea9b30"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-57-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 4000,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|0f17989a-f02c-30e8-3d39-a35128ea9b30"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-57-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 5000,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|0f17989a-f02c-30e8-3d39-a35128ea9b30"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-57-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 5000,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|0f17989a-f02c-30e8-3d39-a35128ea9b30"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-57-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 3000,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|0f17989a-f02c-30e8-3d39-a35128ea9b30"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1659025881686
        },
        "a-58": {
            "id": "a-58",
            "title": "Aleya image change",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-58-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|8f7163be-5d10-814e-e21c-e07210a9173b"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-58-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 5000,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|8f7163be-5d10-814e-e21c-e07210a9173b"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-58-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|8f7163be-5d10-814e-e21c-e07210a9173b"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-58-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 3000,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|8f7163be-5d10-814e-e21c-e07210a9173b"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-58-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 4000,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|8f7163be-5d10-814e-e21c-e07210a9173b"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-58-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 4000,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|8f7163be-5d10-814e-e21c-e07210a9173b"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-58-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "62cd9cfff2ea6357338d8749|8f7163be-5d10-814e-e21c-e07210a9173b"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1659025881686
        },
        "a-59": {
            "id": "a-59",
            "title": "Cursor hover IN",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-59-n",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "selector": ".cursor",
                            "selectorGuids": ["25547e5a-0b8a-c325-ae13-fc686dada18b"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 0.05
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-59-n-2",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {
                            "selector": ".cursor",
                            "selectorGuids": ["25547e5a-0b8a-c325-ae13-fc686dada18b"]
                        },
                        "globalSwatchId": "63aa7009",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 1
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1659082243028
        },
        "a-60": {
            "id": "a-60",
            "title": "Cursor hover OUT",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-60-n",
                    "actionTypeId": "STYLE_TEXT_COLOR",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {
                            "selector": ".cursor",
                            "selectorGuids": ["25547e5a-0b8a-c325-ae13-fc686dada18b"]
                        },
                        "globalSwatchId": "",
                        "rValue": 255,
                        "bValue": 255,
                        "gValue": 255,
                        "aValue": 0.05
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1659082243028
        },
        "a-61": {
            "id": "a-61",
            "title": "send-button IN",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-61-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 100,
                        "target": {
                            "selector": ".cursor",
                            "selectorGuids": ["25547e5a-0b8a-c325-ae13-fc686dada18b"]
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1659095809211
        },
        "a-62": {
            "id": "a-62",
            "title": "send-button OUT",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-62-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 100,
                        "target": {
                            "selector": ".cursor",
                            "selectorGuids": ["25547e5a-0b8a-c325-ae13-fc686dada18b"]
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1659095809211
        },
        "a-63": {
            "id": "a-63",
            "title": "sticky-send button",
            "continuousParameterGroups": [{
                "id": "a-63-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-63-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "62cd9cfff2ea6357338d8749|2de70e74-75f0-9f57-29b2-55ce9bf28787"
                            },
                            "xValue": -10,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-63-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "62cd9cfff2ea6357338d8749|2de70e74-75f0-9f57-29b2-55ce9bf28787"
                            },
                            "xValue": 10,
                            "xUnit": "%",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-63-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-63-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "62cd9cfff2ea6357338d8749|2de70e74-75f0-9f57-29b2-55ce9bf28787"
                            },
                            "yValue": -10,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-63-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": true,
                                "id": "62cd9cfff2ea6357338d8749|2de70e74-75f0-9f57-29b2-55ce9bf28787"
                            },
                            "yValue": 10,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1659095935538
        },
        "a-64": {
            "id": "a-64",
            "title": "projects-scroll IN",
            "continuousParameterGroups": [{
                "id": "a-64-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-64-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".projects-overlay",
                                "selectorGuids": ["50e331c3-a1ca-5dff-df16-36bec210d7bf"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 17,
                    "actionItems": [{
                        "id": "a-64-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "useEventTarget": "CHILDREN",
                                "selector": ".projects-overlay",
                                "selectorGuids": ["50e331c3-a1ca-5dff-df16-36bec210d7bf"]
                            },
                            "yValue": -100,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1659098793170
        },
        "a-65": {
            "id": "a-65",
            "title": "loading-animation 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-65-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64c38b158187de85e44ff911|e005a517-9994-fb0e-d076-41b967d4199a"
                        },
                        "xValue": 2,
                        "yValue": 2,
                        "locked": true
                    }
                }, {
                    "id": "a-65-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "64c38b158187de85e44ff911|5378f927-0750-dec8-d642-fcd882ab5214"
                        },
                        "value": "flex"
                    }
                }, {
                    "id": "a-65-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64c38b158187de85e44ff911|2ed658af-11e0-ea4e-4900-46e8a5cf4cc5"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-65-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64c38b158187de85e44ff911|26471630-e7a2-40ad-dfc1-c7de7ebcc291"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-65-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64c38b158187de85e44ff911|dae1c164-67ef-dc38-e09d-64d3bb5e061e"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-65-n-6",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64c38b158187de85e44ff911|dae1c164-67ef-dc38-e09d-64d3bb5e061e"
                        },
                        "xValue": 1.2,
                        "yValue": 1.2,
                        "locked": true
                    }
                }, {
                    "id": "a-65-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64c38b158187de85e44ff911|b383814d-55d6-2176-bf5d-50e268192119"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-65-n-8",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64c38b158187de85e44ff911|b383814d-55d6-2176-bf5d-50e268192119"
                        },
                        "xValue": 1.2,
                        "yValue": 1.2,
                        "locked": true
                    }
                }, {
                    "id": "a-65-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64c38b158187de85e44ff911|2350b711-a6e9-0488-4b21-23d2bfec5e52"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-65-n-10",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64c38b158187de85e44ff911|2350b711-a6e9-0488-4b21-23d2bfec5e52"
                        },
                        "xValue": 1.2,
                        "yValue": 1.2,
                        "locked": true
                    }
                }, {
                    "id": "a-65-n-11",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64c38b158187de85e44ff911|a191514b-fb90-dc41-ac09-1402b80cc768"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-65-n-12",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64c38b158187de85e44ff911|a191514b-fb90-dc41-ac09-1402b80cc768"
                        },
                        "xValue": 1.2,
                        "yValue": 1.2,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-65-n-13",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 800,
                        "easing": "outQuart",
                        "duration": 800,
                        "target": {
                            "id": "64c38b158187de85e44ff911|e005a517-9994-fb0e-d076-41b967d4199a"
                        },
                        "xValue": 0.1,
                        "yValue": 0.1,
                        "locked": true
                    }
                }, {
                    "id": "a-65-n-14",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 800,
                        "easing": "outQuart",
                        "duration": 800,
                        "target": {
                            "id": "64c38b158187de85e44ff911|2ed658af-11e0-ea4e-4900-46e8a5cf4cc5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-65-n-15",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 1400,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {
                            "id": "64c38b158187de85e44ff911|26471630-e7a2-40ad-dfc1-c7de7ebcc291"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-65-n-16",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "64c38b158187de85e44ff911|a191514b-fb90-dc41-ac09-1402b80cc768"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-65-n-17",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "64c38b158187de85e44ff911|a191514b-fb90-dc41-ac09-1402b80cc768"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-65-n-18",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 100,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "64c38b158187de85e44ff911|2350b711-a6e9-0488-4b21-23d2bfec5e52"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-65-n-19",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 100,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "64c38b158187de85e44ff911|2350b711-a6e9-0488-4b21-23d2bfec5e52"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-65-n-20",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 200,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "64c38b158187de85e44ff911|b383814d-55d6-2176-bf5d-50e268192119"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-65-n-21",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "64c38b158187de85e44ff911|b383814d-55d6-2176-bf5d-50e268192119"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-65-n-22",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 300,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "64c38b158187de85e44ff911|dae1c164-67ef-dc38-e09d-64d3bb5e061e"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-65-n-23",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 300,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "64c38b158187de85e44ff911|dae1c164-67ef-dc38-e09d-64d3bb5e061e"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1657873638515
        },
        "a-66": {
            "id": "a-66",
            "title": "loader-text drehung 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-66-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 40000,
                        "target": {
                            "id": "64c38b158187de85e44ff911|a191514b-fb90-dc41-ac09-1402b80cc768"
                        },
                        "zValue": 360,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-66-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 40000,
                        "target": {
                            "id": "64c38b158187de85e44ff911|dae1c164-67ef-dc38-e09d-64d3bb5e061e"
                        },
                        "zValue": -360,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-66-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 40000,
                        "target": {
                            "id": "64c38b158187de85e44ff911|b383814d-55d6-2176-bf5d-50e268192119"
                        },
                        "zValue": 360,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-66-n-4",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 40000,
                        "target": {
                            "id": "64c38b158187de85e44ff911|2350b711-a6e9-0488-4b21-23d2bfec5e52"
                        },
                        "zValue": -360,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-66-n-5",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "64c38b158187de85e44ff911|a191514b-fb90-dc41-ac09-1402b80cc768"
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-66-n-6",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "64c38b158187de85e44ff911|2350b711-a6e9-0488-4b21-23d2bfec5e52"
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-66-n-7",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "64c38b158187de85e44ff911|b383814d-55d6-2176-bf5d-50e268192119"
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-66-n-8",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "64c38b158187de85e44ff911|dae1c164-67ef-dc38-e09d-64d3bb5e061e"
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1657877041122
        },
        "a-67": {
            "id": "a-67",
            "title": "rotate animation 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-67-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 20000,
                        "target": {
                            "id": "64c38b158187de85e44ff911|b0799276-3d35-074c-c008-745c93d59e3b"
                        },
                        "zValue": -360,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-67-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "64c38b158187de85e44ff911|b0799276-3d35-074c-c008-745c93d59e3b"
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": false,
            "createdOn": 1657883153932
        },
        "a-68": {
            "id": "a-68",
            "title": "nav bar 2",
            "continuousParameterGroups": [{
                "id": "a-68-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-68-n",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "64c38b158187de85e44ff911|cf8c0513-56aa-94e6-f851-76034f436e89"
                            },
                            "globalSwatchId": "",
                            "rValue": 15,
                            "bValue": 15,
                            "gValue": 15,
                            "aValue": 1
                        }
                    }, {
                        "id": "a-68-n-2",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "64c38b158187de85e44ff911|6a6620a2-add5-a504-6696-3202b75ecadb"
                            },
                            "globalSwatchId": "aadc4da9",
                            "rValue": 15,
                            "bValue": 15,
                            "gValue": 15,
                            "aValue": 1
                        }
                    }]
                }, {
                    "keyframe": 87,
                    "actionItems": [{
                        "id": "a-68-n-3",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "64c38b158187de85e44ff911|cf8c0513-56aa-94e6-f851-76034f436e89"
                            },
                            "globalSwatchId": "",
                            "rValue": 15,
                            "bValue": 15,
                            "gValue": 15,
                            "aValue": 1
                        }
                    }, {
                        "id": "a-68-n-4",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "64c38b158187de85e44ff911|6a6620a2-add5-a504-6696-3202b75ecadb"
                            },
                            "globalSwatchId": "aadc4da9",
                            "rValue": 15,
                            "bValue": 15,
                            "gValue": 15,
                            "aValue": 1
                        }
                    }]
                }, {
                    "keyframe": 88,
                    "actionItems": [{
                        "id": "a-68-n-5",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "64c38b158187de85e44ff911|cf8c0513-56aa-94e6-f851-76034f436e89"
                            },
                            "globalSwatchId": "63aa7009",
                            "rValue": 255,
                            "bValue": 255,
                            "gValue": 255,
                            "aValue": 1
                        }
                    }, {
                        "id": "a-68-n-6",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "64c38b158187de85e44ff911|6a6620a2-add5-a504-6696-3202b75ecadb"
                            },
                            "globalSwatchId": "63aa7009",
                            "rValue": 255,
                            "bValue": 255,
                            "gValue": 255,
                            "aValue": 1
                        }
                    }]
                }]
            }],
            "createdOn": 1658838883365
        },
        "a-69": {
            "id": "a-69",
            "title": "cursor 2",
            "continuousParameterGroups": [{
                "id": "a-69-p",
                "type": "MOUSE_X",
                "parameterLabel": "Mouse X",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-69-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "64c38b158187de85e44ff911|fe85dcf4-7fc0-1e93-4cbb-de564c73a2bd"
                            },
                            "xValue": -50,
                            "xUnit": "vw",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-69-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "64c38b158187de85e44ff911|fe85dcf4-7fc0-1e93-4cbb-de564c73a2bd"
                            },
                            "xValue": 50,
                            "xUnit": "vw",
                            "yUnit": "PX",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }, {
                "id": "a-69-p-2",
                "type": "MOUSE_Y",
                "parameterLabel": "Mouse Y",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-69-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "64c38b158187de85e44ff911|fe85dcf4-7fc0-1e93-4cbb-de564c73a2bd"
                            },
                            "yValue": -50,
                            "xUnit": "PX",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-69-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "64c38b158187de85e44ff911|fe85dcf4-7fc0-1e93-4cbb-de564c73a2bd"
                            },
                            "yValue": 50,
                            "xUnit": "PX",
                            "yUnit": "vh",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1658911848407
        },
        "a-70": {
            "id": "a-70",
            "title": "header big animation 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-70-n",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64c38b158187de85e44ff911|5ed7bcae-2c90-5eee-153e-b1136884f5a3"
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-70-n-2",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 200000,
                        "target": {
                            "id": "64c38b158187de85e44ff911|5ed7bcae-2c90-5eee-153e-b1136884f5a3"
                        },
                        "zValue": 360,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }, {
                    "id": "a-70-n-3",
                    "actionTypeId": "TRANSFORM_ROTATE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "64c38b158187de85e44ff911|5ed7bcae-2c90-5eee-153e-b1136884f5a3"
                        },
                        "zValue": 0,
                        "xUnit": "DEG",
                        "yUnit": "DEG",
                        "zUnit": "deg"
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1658927592192
        },
        "a-73": {
            "id": "a-73",
            "title": "loading-animation mobile 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-73-n",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64c38b158187de85e44ff911|e005a517-9994-fb0e-d076-41b967d4199a"
                        },
                        "xValue": 2,
                        "yValue": 2,
                        "locked": true
                    }
                }, {
                    "id": "a-73-n-2",
                    "actionTypeId": "GENERAL_DISPLAY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 0,
                        "target": {
                            "id": "64c38b158187de85e44ff911|5378f927-0750-dec8-d642-fcd882ab5214"
                        },
                        "value": "flex"
                    }
                }, {
                    "id": "a-73-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64c38b158187de85e44ff911|2ed658af-11e0-ea4e-4900-46e8a5cf4cc5"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-73-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64c38b158187de85e44ff911|26471630-e7a2-40ad-dfc1-c7de7ebcc291"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-73-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64c38b158187de85e44ff911|dae1c164-67ef-dc38-e09d-64d3bb5e061e"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-73-n-6",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64c38b158187de85e44ff911|dae1c164-67ef-dc38-e09d-64d3bb5e061e"
                        },
                        "xValue": 1.2,
                        "yValue": 1.2,
                        "locked": true
                    }
                }, {
                    "id": "a-73-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64c38b158187de85e44ff911|b383814d-55d6-2176-bf5d-50e268192119"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-73-n-8",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64c38b158187de85e44ff911|b383814d-55d6-2176-bf5d-50e268192119"
                        },
                        "xValue": 1.2,
                        "yValue": 1.2,
                        "locked": true
                    }
                }, {
                    "id": "a-73-n-9",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64c38b158187de85e44ff911|2350b711-a6e9-0488-4b21-23d2bfec5e52"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-73-n-10",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64c38b158187de85e44ff911|2350b711-a6e9-0488-4b21-23d2bfec5e52"
                        },
                        "xValue": 1.2,
                        "yValue": 1.2,
                        "locked": true
                    }
                }, {
                    "id": "a-73-n-11",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64c38b158187de85e44ff911|a191514b-fb90-dc41-ac09-1402b80cc768"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-73-n-12",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64c38b158187de85e44ff911|a191514b-fb90-dc41-ac09-1402b80cc768"
                        },
                        "xValue": 1.2,
                        "yValue": 1.2,
                        "locked": true
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-73-n-13",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 800,
                        "easing": "outQuart",
                        "duration": 800,
                        "target": {
                            "id": "64c38b158187de85e44ff911|e005a517-9994-fb0e-d076-41b967d4199a"
                        },
                        "xValue": 0.3,
                        "yValue": 0.3,
                        "locked": true
                    }
                }, {
                    "id": "a-73-n-14",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 800,
                        "easing": "outQuart",
                        "duration": 800,
                        "target": {
                            "id": "64c38b158187de85e44ff911|2ed658af-11e0-ea4e-4900-46e8a5cf4cc5"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }, {
                    "id": "a-73-n-15",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 1400,
                        "easing": "outQuart",
                        "duration": 200,
                        "target": {
                            "id": "64c38b158187de85e44ff911|26471630-e7a2-40ad-dfc1-c7de7ebcc291"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-73-n-16",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "64c38b158187de85e44ff911|a191514b-fb90-dc41-ac09-1402b80cc768"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-73-n-17",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "64c38b158187de85e44ff911|a191514b-fb90-dc41-ac09-1402b80cc768"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-73-n-18",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 100,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "64c38b158187de85e44ff911|2350b711-a6e9-0488-4b21-23d2bfec5e52"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-73-n-19",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 100,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "64c38b158187de85e44ff911|2350b711-a6e9-0488-4b21-23d2bfec5e52"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-73-n-20",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 200,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "64c38b158187de85e44ff911|b383814d-55d6-2176-bf5d-50e268192119"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-73-n-21",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 200,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "64c38b158187de85e44ff911|b383814d-55d6-2176-bf5d-50e268192119"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }, {
                    "id": "a-73-n-22",
                    "actionTypeId": "TRANSFORM_SCALE",
                    "config": {
                        "delay": 300,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "64c38b158187de85e44ff911|dae1c164-67ef-dc38-e09d-64d3bb5e061e"
                        },
                        "xValue": 1,
                        "yValue": 1,
                        "locked": true
                    }
                }, {
                    "id": "a-73-n-23",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 300,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "64c38b158187de85e44ff911|dae1c164-67ef-dc38-e09d-64d3bb5e061e"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1657873638515
        },
        "a-74": {
            "id": "a-74",
            "title": "nav bar mobile 2",
            "continuousParameterGroups": [{
                "id": "a-74-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-74-n",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "64c38b158187de85e44ff911|cf8c0513-56aa-94e6-f851-76034f436e89"
                            },
                            "globalSwatchId": "",
                            "rValue": 15,
                            "bValue": 15,
                            "gValue": 15,
                            "aValue": 1
                        }
                    }, {
                        "id": "a-74-n-2",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "64c38b158187de85e44ff911|6a6620a2-add5-a504-6696-3202b75ecadb"
                            },
                            "globalSwatchId": "aadc4da9",
                            "rValue": 15,
                            "bValue": 15,
                            "gValue": 15,
                            "aValue": 1
                        }
                    }]
                }, {
                    "keyframe": 86,
                    "actionItems": [{
                        "id": "a-74-n-3",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "64c38b158187de85e44ff911|cf8c0513-56aa-94e6-f851-76034f436e89"
                            },
                            "globalSwatchId": "",
                            "rValue": 15,
                            "bValue": 15,
                            "gValue": 15,
                            "aValue": 1
                        }
                    }, {
                        "id": "a-74-n-4",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "64c38b158187de85e44ff911|6a6620a2-add5-a504-6696-3202b75ecadb"
                            },
                            "globalSwatchId": "aadc4da9",
                            "rValue": 15,
                            "bValue": 15,
                            "gValue": 15,
                            "aValue": 1
                        }
                    }]
                }, {
                    "keyframe": 87,
                    "actionItems": [{
                        "id": "a-74-n-5",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "64c38b158187de85e44ff911|cf8c0513-56aa-94e6-f851-76034f436e89"
                            },
                            "globalSwatchId": "63aa7009",
                            "rValue": 255,
                            "bValue": 255,
                            "gValue": 255,
                            "aValue": 1
                        }
                    }, {
                        "id": "a-74-n-6",
                        "actionTypeId": "STYLE_TEXT_COLOR",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "id": "64c38b158187de85e44ff911|6a6620a2-add5-a504-6696-3202b75ecadb"
                            },
                            "globalSwatchId": "63aa7009",
                            "rValue": 255,
                            "bValue": 255,
                            "gValue": 255,
                            "aValue": 1
                        }
                    }]
                }]
            }],
            "createdOn": 1658838883365
        },
        "a-75": {
            "id": "a-75",
            "title": "kathi image change 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-75-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64c38b158187de85e44ff911|0f17989a-f02c-30e8-3d39-a35128ea9b30"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-75-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 6000,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "64c38b158187de85e44ff911|0f17989a-f02c-30e8-3d39-a35128ea9b30"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-75-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 3000,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "64c38b158187de85e44ff911|0f17989a-f02c-30e8-3d39-a35128ea9b30"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-75-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 4000,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "64c38b158187de85e44ff911|0f17989a-f02c-30e8-3d39-a35128ea9b30"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-75-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 5000,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "64c38b158187de85e44ff911|0f17989a-f02c-30e8-3d39-a35128ea9b30"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-75-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 5000,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "64c38b158187de85e44ff911|0f17989a-f02c-30e8-3d39-a35128ea9b30"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-75-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 3000,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "64c38b158187de85e44ff911|0f17989a-f02c-30e8-3d39-a35128ea9b30"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1659025881686
        },
        "a-76": {
            "id": "a-76",
            "title": "Aleya image change 2",
            "actionItemGroups": [{
                "actionItems": [{
                    "id": "a-76-n",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 0,
                        "easing": "",
                        "duration": 500,
                        "target": {
                            "id": "64c38b158187de85e44ff911|8f7163be-5d10-814e-e21c-e07210a9173b"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-76-n-2",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 5000,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "64c38b158187de85e44ff911|8f7163be-5d10-814e-e21c-e07210a9173b"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-76-n-3",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "64c38b158187de85e44ff911|8f7163be-5d10-814e-e21c-e07210a9173b"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-76-n-4",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 3000,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "64c38b158187de85e44ff911|8f7163be-5d10-814e-e21c-e07210a9173b"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-76-n-5",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 4000,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "64c38b158187de85e44ff911|8f7163be-5d10-814e-e21c-e07210a9173b"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-76-n-6",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 4000,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "64c38b158187de85e44ff911|8f7163be-5d10-814e-e21c-e07210a9173b"
                        },
                        "value": 1,
                        "unit": ""
                    }
                }]
            }, {
                "actionItems": [{
                    "id": "a-76-n-7",
                    "actionTypeId": "STYLE_OPACITY",
                    "config": {
                        "delay": 2000,
                        "easing": "outQuart",
                        "duration": 400,
                        "target": {
                            "id": "64c38b158187de85e44ff911|8f7163be-5d10-814e-e21c-e07210a9173b"
                        },
                        "value": 0,
                        "unit": ""
                    }
                }]
            }],
            "useFirstGroupAsInitialState": true,
            "createdOn": 1659025881686
        },
        "a-77": {
            "id": "a-77",
            "title": "Header 80 [Scroll] [Desktop]",
            "continuousParameterGroups": [{
                "id": "a-77-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-77-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".header80_image-list",
                                "selectorGuids": ["f296f6b6-c5fb-2883-0d5a-39173944e07e"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-77-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".header80_image-list.image-list-right",
                                "selectorGuids": ["f296f6b6-c5fb-2883-0d5a-39173944e07e", "f296f6b6-c5fb-2883-0d5a-39173944e089"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 100,
                    "actionItems": [{
                        "id": "a-77-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".header80_image-list",
                                "selectorGuids": ["f296f6b6-c5fb-2883-0d5a-39173944e07e"]
                            },
                            "yValue": -85,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-77-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".header80_image-list.image-list-right",
                                "selectorGuids": ["f296f6b6-c5fb-2883-0d5a-39173944e07e", "f296f6b6-c5fb-2883-0d5a-39173944e089"]
                            },
                            "yValue": -60,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1669364366884
        },
        "a-78": {
            "id": "a-78",
            "title": "Header 80 [Scroll] [Mobile]",
            "continuousParameterGroups": [{
                "id": "a-78-p",
                "type": "SCROLL_PROGRESS",
                "parameterLabel": "Scroll",
                "continuousActionGroups": [{
                    "keyframe": 0,
                    "actionItems": [{
                        "id": "a-78-n",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".header80_image-list",
                                "selectorGuids": ["f296f6b6-c5fb-2883-0d5a-39173944e07e"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-78-n-2",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".header80_image-list.image-list-right",
                                "selectorGuids": ["f296f6b6-c5fb-2883-0d5a-39173944e07e", "f296f6b6-c5fb-2883-0d5a-39173944e089"]
                            },
                            "yValue": 0,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }, {
                    "keyframe": 65,
                    "actionItems": [{
                        "id": "a-78-n-3",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".header80_image-list",
                                "selectorGuids": ["f296f6b6-c5fb-2883-0d5a-39173944e07e"]
                            },
                            "yValue": -85,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }, {
                        "id": "a-78-n-4",
                        "actionTypeId": "TRANSFORM_MOVE",
                        "config": {
                            "delay": 0,
                            "easing": "",
                            "duration": 500,
                            "target": {
                                "selector": ".header80_image-list.image-list-right",
                                "selectorGuids": ["f296f6b6-c5fb-2883-0d5a-39173944e07e", "f296f6b6-c5fb-2883-0d5a-39173944e089"]
                            },
                            "yValue": -85,
                            "xUnit": "PX",
                            "yUnit": "%",
                            "zUnit": "PX"
                        }
                    }]
                }]
            }],
            "createdOn": 1669364366884
        }
    },
    "site": {
        "mediaQueries": [{
            "key": "main",
            "min": 992,
            "max": 10000
        }, {
            "key": "medium",
            "min": 768,
            "max": 991
        }, {
            "key": "small",
            "min": 480,
            "max": 767
        }, {
            "key": "tiny",
            "min": 0,
            "max": 479
        }]
    }
});