import xe from "vue";
var we = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Se(q) {
  return q && q.__esModule && Object.prototype.hasOwnProperty.call(q, "default") ? q.default : q;
}
var Vt = { exports: {} };
(function(q, Pe) {
  (function(bt, j) {
    q.exports = j(xe);
  })(typeof self < "u" ? self : we, function(bt) {
    return function(j) {
      var w = {};
      function h(u) {
        if (w[u])
          return w[u].exports;
        var O = w[u] = { i: u, l: !1, exports: {} };
        return j[u].call(O.exports, O, O.exports, h), O.l = !0, O.exports;
      }
      return h.m = j, h.c = w, h.d = function(u, O, E) {
        h.o(u, O) || Object.defineProperty(u, O, { enumerable: !0, get: E });
      }, h.r = function(u) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(u, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(u, "__esModule", { value: !0 });
      }, h.t = function(u, O) {
        if (1 & O && (u = h(u)), 8 & O || 4 & O && typeof u == "object" && u && u.__esModule)
          return u;
        var E = /* @__PURE__ */ Object.create(null);
        if (h.r(E), Object.defineProperty(E, "default", { enumerable: !0, value: u }), 2 & O && typeof u != "string")
          for (var V in u)
            h.d(E, V, function(R) {
              return u[R];
            }.bind(null, V));
        return E;
      }, h.n = function(u) {
        var O = u && u.__esModule ? function() {
          return u.default;
        } : function() {
          return u;
        };
        return h.d(O, "a", O), O;
      }, h.o = function(u, O) {
        return Object.prototype.hasOwnProperty.call(u, O);
      }, h.p = "", h(h.s = "fb15");
    }({ "091b": function(j, w, h) {
      var u = h("24fb");
      w = u(!1), w.push([j.i, ".vue-slider-dot{position:absolute;-webkit-transition:all 0s;transition:all 0s;z-index:5}.vue-slider-dot:focus{outline:none}.vue-slider-dot-tooltip{position:absolute;visibility:hidden}.vue-slider-dot-hover:hover .vue-slider-dot-tooltip{visibility:visible}.vue-slider-dot-tooltip-show{visibility:visible}.vue-slider-dot-tooltip-top{top:-10px;left:50%;-webkit-transform:translate(-50%,-100%);transform:translate(-50%,-100%)}.vue-slider-dot-tooltip-bottom{bottom:-10px;left:50%;-webkit-transform:translate(-50%,100%);transform:translate(-50%,100%)}.vue-slider-dot-tooltip-left{left:-10px;top:50%;-webkit-transform:translate(-100%,-50%);transform:translate(-100%,-50%)}.vue-slider-dot-tooltip-right{right:-10px;top:50%;-webkit-transform:translate(100%,-50%);transform:translate(100%,-50%)}", ""]), j.exports = w;
    }, "24fb": function(j, w, h) {
      function u(E, V) {
        var R = E[1] || "", s = E[3];
        if (!s)
          return R;
        if (V && typeof btoa == "function") {
          var M = O(s), k = s.sources.map(function(S) {
            return "/*# sourceURL=".concat(s.sourceRoot || "").concat(S, " */");
          });
          return [R].concat(k).concat([M]).join(`
`);
        }
        return [R].join(`
`);
      }
      function O(E) {
        var V = btoa(unescape(encodeURIComponent(JSON.stringify(E)))), R = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(V);
        return "/*# ".concat(R, " */");
      }
      j.exports = function(E) {
        var V = [];
        return V.toString = function() {
          return this.map(function(R) {
            var s = u(R, E);
            return R[2] ? "@media ".concat(R[2], " {").concat(s, "}") : s;
          }).join("");
        }, V.i = function(R, s, M) {
          typeof R == "string" && (R = [[null, R, ""]]);
          var k = {};
          if (M)
            for (var S = 0; S < this.length; S++) {
              var p = this[S][0];
              p != null && (k[p] = !0);
            }
          for (var B = 0; B < R.length; B++) {
            var _ = [].concat(R[B]);
            M && k[_[0]] || (s && (_[2] ? _[2] = "".concat(s, " and ").concat(_[2]) : _[2] = s), V.push(_));
          }
        }, V;
      };
    }, 2638: function(j, w, h) {
      function u() {
        return u = Object.assign || function(M) {
          for (var k, S = 1; S < arguments.length; S++)
            for (var p in k = arguments[S], k)
              Object.prototype.hasOwnProperty.call(k, p) && (M[p] = k[p]);
          return M;
        }, u.apply(this, arguments);
      }
      var O = ["attrs", "props", "domProps"], E = ["class", "style", "directives"], V = ["on", "nativeOn"], R = function(M) {
        return M.reduce(function(k, S) {
          for (var p in S)
            if (k[p])
              if (O.indexOf(p) !== -1)
                k[p] = u({}, k[p], S[p]);
              else if (E.indexOf(p) !== -1) {
                var B = k[p] instanceof Array ? k[p] : [k[p]], _ = S[p] instanceof Array ? S[p] : [S[p]];
                k[p] = B.concat(_);
              } else if (V.indexOf(p) !== -1)
                for (var I in S[p])
                  if (k[p][I]) {
                    var c = k[p][I] instanceof Array ? k[p][I] : [k[p][I]], T = S[p][I] instanceof Array ? S[p][I] : [S[p][I]];
                    k[p][I] = c.concat(T);
                  } else
                    k[p][I] = S[p][I];
              else if (p == "hook")
                for (var l in S[p])
                  k[p][l] = k[p][l] ? s(k[p][l], S[p][l]) : S[p][l];
              else
                k[p] = S[p];
            else
              k[p] = S[p];
          return k;
        }, {});
      }, s = function(M, k) {
        return function() {
          M && M.apply(this, arguments), k && k.apply(this, arguments);
        };
      };
      j.exports = R;
    }, "499e": function(j, w, h) {
      function u(d, g) {
        for (var v = [], x = {}, m = 0; m < g.length; m++) {
          var D = g[m], C = D[0], z = D[1], N = D[2], F = D[3], G = { id: d + ":" + m, css: z, media: N, sourceMap: F };
          x[C] ? x[C].parts.push(G) : v.push(x[C] = { id: C, parts: [G] });
        }
        return v;
      }
      h.r(w), h.d(w, "default", function() {
        return _;
      });
      var O = typeof document < "u";
      if (typeof DEBUG < "u" && DEBUG && !O)
        throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");
      var E = {}, V = O && (document.head || document.getElementsByTagName("head")[0]), R = null, s = 0, M = !1, k = function() {
      }, S = null, p = "data-vue-ssr-id", B = typeof navigator < "u" && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());
      function _(d, g, v, x) {
        M = v, S = x || {};
        var m = u(d, g);
        return I(m), function(D) {
          for (var C = [], z = 0; z < m.length; z++) {
            var N = m[z], F = E[N.id];
            F.refs--, C.push(F);
          }
          for (D ? (m = u(d, D), I(m)) : m = [], z = 0; z < C.length; z++)
            if (F = C[z], F.refs === 0) {
              for (var G = 0; G < F.parts.length; G++)
                F.parts[G]();
              delete E[F.id];
            }
        };
      }
      function I(d) {
        for (var g = 0; g < d.length; g++) {
          var v = d[g], x = E[v.id];
          if (x) {
            x.refs++;
            for (var m = 0; m < x.parts.length; m++)
              x.parts[m](v.parts[m]);
            for (; m < v.parts.length; m++)
              x.parts.push(T(v.parts[m]));
            x.parts.length > v.parts.length && (x.parts.length = v.parts.length);
          } else {
            var D = [];
            for (m = 0; m < v.parts.length; m++)
              D.push(T(v.parts[m]));
            E[v.id] = { id: v.id, refs: 1, parts: D };
          }
        }
      }
      function c() {
        var d = document.createElement("style");
        return d.type = "text/css", V.appendChild(d), d;
      }
      function T(d) {
        var g, v, x = document.querySelector("style[" + p + '~="' + d.id + '"]');
        if (x) {
          if (M)
            return k;
          x.parentNode.removeChild(x);
        }
        if (B) {
          var m = s++;
          x = R || (R = c()), g = f.bind(null, x, m, !1), v = f.bind(null, x, m, !0);
        } else
          x = c(), g = A.bind(null, x), v = function() {
            x.parentNode.removeChild(x);
          };
        return g(d), function(D) {
          if (D) {
            if (D.css === d.css && D.media === d.media && D.sourceMap === d.sourceMap)
              return;
            g(d = D);
          } else
            v();
        };
      }
      var l = function() {
        var d = [];
        return function(g, v) {
          return d[g] = v, d.filter(Boolean).join(`
`);
        };
      }();
      function f(d, g, v, x) {
        var m = v ? "" : x.css;
        if (d.styleSheet)
          d.styleSheet.cssText = l(g, m);
        else {
          var D = document.createTextNode(m), C = d.childNodes;
          C[g] && d.removeChild(C[g]), C.length ? d.insertBefore(D, C[g]) : d.appendChild(D);
        }
      }
      function A(d, g) {
        var v = g.css, x = g.media, m = g.sourceMap;
        if (x && d.setAttribute("media", x), S.ssrId && d.setAttribute(p, g.id), m && (v += `
/*# sourceURL=` + m.sources[0] + " */", v += `
/*# sourceMappingURL=data:application/json;base64,` + btoa(unescape(encodeURIComponent(JSON.stringify(m)))) + " */"), d.styleSheet)
          d.styleSheet.cssText = v;
        else {
          for (; d.firstChild; )
            d.removeChild(d.firstChild);
          d.appendChild(document.createTextNode(v));
        }
      }
    }, "4abb": function(j, w, h) {
      var u = h("7a57");
      typeof u == "string" && (u = [[j.i, u, ""]]), u.locals && (j.exports = u.locals);
      var O = h("499e").default;
      O("b2af7572", u, !0, { sourceMap: !1, shadowMode: !1 });
    }, "4ed8": function(j, w, h) {
      var u = h("091b");
      typeof u == "string" && (u = [[j.i, u, ""]]), u.locals && (j.exports = u.locals);
      var O = h("499e").default;
      O("2f6bee1a", u, !0, { sourceMap: !1, shadowMode: !1 });
    }, "556c": function(j, w, h) {
      var u = h("eef2");
      typeof u == "string" && (u = [[j.i, u, ""]]), u.locals && (j.exports = u.locals);
      var O = h("499e").default;
      O("1209fd47", u, !0, { sourceMap: !1, shadowMode: !1 });
    }, "65d9": function(j, w, h) {
      /**
      * vue-class-component v7.0.1
      * (c) 2015-present Evan You
      * @license MIT
      */
      function u(l) {
        return l && typeof l == "object" && "default" in l ? l.default : l;
      }
      Object.defineProperty(w, "__esModule", { value: !0 });
      var O = u(h("8bbf")), E = typeof Reflect < "u" && Reflect.defineMetadata && Reflect.getOwnMetadataKeys;
      function V(l, f) {
        R(l, f), Object.getOwnPropertyNames(f.prototype).forEach(function(A) {
          R(l.prototype, f.prototype, A);
        }), Object.getOwnPropertyNames(f).forEach(function(A) {
          R(l, f, A);
        });
      }
      function R(l, f, A) {
        var d = A ? Reflect.getOwnMetadataKeys(f, A) : Reflect.getOwnMetadataKeys(f);
        d.forEach(function(g) {
          var v = A ? Reflect.getOwnMetadata(g, f, A) : Reflect.getOwnMetadata(g, f);
          A ? Reflect.defineMetadata(g, v, l, A) : Reflect.defineMetadata(g, v, l);
        });
      }
      var s = { __proto__: [] }, M = s instanceof Array;
      function k(l) {
        return function(f, A, d) {
          var g = typeof f == "function" ? f : f.constructor;
          g.__decorators__ || (g.__decorators__ = []), typeof d != "number" && (d = void 0), g.__decorators__.push(function(v) {
            return l(v, A, d);
          });
        };
      }
      function S() {
        for (var l = [], f = 0; f < arguments.length; f++)
          l[f] = arguments[f];
        return O.extend({ mixins: l });
      }
      function p(l) {
        var f = typeof l;
        return l == null || f !== "object" && f !== "function";
      }
      function B(l, f) {
        var A = f.prototype._init;
        f.prototype._init = function() {
          var v = this, x = Object.getOwnPropertyNames(l);
          if (l.$options.props)
            for (var m in l.$options.props)
              l.hasOwnProperty(m) || x.push(m);
          x.forEach(function(D) {
            D.charAt(0) !== "_" && Object.defineProperty(v, D, { get: function() {
              return l[D];
            }, set: function(C) {
              l[D] = C;
            }, configurable: !0 });
          });
        };
        var d = new f();
        f.prototype._init = A;
        var g = {};
        return Object.keys(d).forEach(function(v) {
          d[v] !== void 0 && (g[v] = d[v]);
        }), g;
      }
      var _ = ["data", "beforeCreate", "created", "beforeMount", "mounted", "beforeDestroy", "destroyed", "beforeUpdate", "updated", "activated", "deactivated", "render", "errorCaptured", "serverPrefetch"];
      function I(l, f) {
        f === void 0 && (f = {}), f.name = f.name || l._componentTag || l.name;
        var A = l.prototype;
        Object.getOwnPropertyNames(A).forEach(function(m) {
          if (m !== "constructor")
            if (_.indexOf(m) > -1)
              f[m] = A[m];
            else {
              var D = Object.getOwnPropertyDescriptor(A, m);
              D.value !== void 0 ? typeof D.value == "function" ? (f.methods || (f.methods = {}))[m] = D.value : (f.mixins || (f.mixins = [])).push({ data: function() {
                var C;
                return C = {}, C[m] = D.value, C;
              } }) : (D.get || D.set) && ((f.computed || (f.computed = {}))[m] = { get: D.get, set: D.set });
            }
        }), (f.mixins || (f.mixins = [])).push({ data: function() {
          return B(this, l);
        } });
        var d = l.__decorators__;
        d && (d.forEach(function(m) {
          return m(f);
        }), delete l.__decorators__);
        var g = Object.getPrototypeOf(l.prototype), v = g instanceof O ? g.constructor : O, x = v.extend(f);
        return c(x, l, v), E && V(x, l), x;
      }
      function c(l, f, A) {
        Object.getOwnPropertyNames(f).forEach(function(d) {
          if (d !== "prototype") {
            var g = Object.getOwnPropertyDescriptor(l, d);
            if (!g || g.configurable) {
              var v = Object.getOwnPropertyDescriptor(f, d);
              if (!M) {
                if (d === "cid")
                  return;
                var x = Object.getOwnPropertyDescriptor(A, d);
                if (!p(v.value) && x && x.value === v.value)
                  return;
              }
              Object.defineProperty(l, d, v);
            }
          }
        });
      }
      function T(l) {
        return typeof l == "function" ? I(l) : function(f) {
          return I(f, l);
        };
      }
      T.registerHooks = function(l) {
        _.push.apply(_, l);
      }, w.default = T, w.createDecorator = k, w.mixins = S;
    }, "7a57": function(j, w, h) {
      var u = h("24fb");
      w = u(!1), w.push([j.i, ".vue-slider{position:relative;-webkit-box-sizing:content-box;box-sizing:content-box;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:block;-webkit-tap-highlight-color:rgba(0,0,0,0)}.vue-slider-rail{position:relative;width:100%;height:100%;-webkit-transition-property:width,height,left,right,top,bottom;transition-property:width,height,left,right,top,bottom}.vue-slider-process{position:absolute;z-index:1}", ""]), j.exports = w;
    }, 8875: function(j, w, h) {
      var u, O, E;
      (function(V, R) {
        O = [], u = R, E = typeof u == "function" ? u.apply(w, O) : u, E === void 0 || (j.exports = E);
      })(typeof self < "u" && self, function() {
        function V() {
          var R = Object.getOwnPropertyDescriptor(document, "currentScript");
          if (!R && "currentScript" in document && document.currentScript || R && R.get !== V && document.currentScript)
            return document.currentScript;
          try {
            throw new Error();
          } catch (f) {
            var s, M, k, S = /.*at [^(]*\((.*):(.+):(.+)\)$/gi, p = /@([^@]*):(\d+):(\d+)\s*$/gi, B = S.exec(f.stack) || p.exec(f.stack), _ = B && B[1] || !1, I = B && B[2] || !1, c = document.location.href.replace(document.location.hash, ""), T = document.getElementsByTagName("script");
            _ === c && (s = document.documentElement.outerHTML, M = new RegExp("(?:[^\\n]+?\\n){0," + (I - 2) + "}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*", "i"), k = s.replace(M, "$1").trim());
            for (var l = 0; l < T.length; l++)
              if (T[l].readyState === "interactive" || T[l].src === _ || _ === c && T[l].innerHTML && T[l].innerHTML.trim() === k)
                return T[l];
            return null;
          }
        }
        return V;
      });
    }, "8bbf": function(j, w) {
      j.exports = bt;
    }, eef2: function(j, w, h) {
      var u = h("24fb");
      w = u(!1), w.push([j.i, ".vue-slider-marks{position:relative;width:100%;height:100%}.vue-slider-mark{position:absolute;z-index:1}.vue-slider-ltr .vue-slider-mark,.vue-slider-rtl .vue-slider-mark{width:0;height:100%;top:50%}.vue-slider-ltr .vue-slider-mark-step,.vue-slider-rtl .vue-slider-mark-step{top:0}.vue-slider-ltr .vue-slider-mark-label,.vue-slider-rtl .vue-slider-mark-label{top:100%;margin-top:10px}.vue-slider-ltr .vue-slider-mark{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.vue-slider-ltr .vue-slider-mark-step{left:0}.vue-slider-ltr .vue-slider-mark-label{left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.vue-slider-rtl .vue-slider-mark{-webkit-transform:translate(50%,-50%);transform:translate(50%,-50%)}.vue-slider-rtl .vue-slider-mark-step{right:0}.vue-slider-rtl .vue-slider-mark-label{right:50%;-webkit-transform:translateX(50%);transform:translateX(50%)}.vue-slider-btt .vue-slider-mark,.vue-slider-ttb .vue-slider-mark{width:100%;height:0;left:50%}.vue-slider-btt .vue-slider-mark-step,.vue-slider-ttb .vue-slider-mark-step{left:0}.vue-slider-btt .vue-slider-mark-label,.vue-slider-ttb .vue-slider-mark-label{left:100%;margin-left:10px}.vue-slider-btt .vue-slider-mark{-webkit-transform:translate(-50%,50%);transform:translate(-50%,50%)}.vue-slider-btt .vue-slider-mark-step{top:0}.vue-slider-btt .vue-slider-mark-label{top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.vue-slider-ttb .vue-slider-mark{-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.vue-slider-ttb .vue-slider-mark-step{bottom:0}.vue-slider-ttb .vue-slider-mark-label{bottom:50%;-webkit-transform:translateY(50%);transform:translateY(50%)}.vue-slider-mark-label,.vue-slider-mark-step{position:absolute}", ""]), j.exports = w;
    }, fb15: function(j, w, h) {
      if (h.r(w), h.d(w, "ERROR_TYPE", function() {
        return U;
      }), h.d(w, "VueSliderMark", function() {
        return ct;
      }), h.d(w, "VueSliderDot", function() {
        return F;
      }), typeof window < "u") {
        var u = window.document.currentScript, O = h("8875");
        u = O(), "currentScript" in document || Object.defineProperty(document, "currentScript", { get: O });
        var E = u && u.src.match(/(.+\/)[^/]+\.js(\?.*)?$/);
        E && (h.p = E[1]);
      }
      var V = h("2638"), R = h.n(V);
      function s(r, t, n, e) {
        var o, i = arguments.length, a = i < 3 ? t : e === null ? e = Object.getOwnPropertyDescriptor(t, n) : e;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
          a = Reflect.decorate(r, t, n, e);
        else
          for (var y = r.length - 1; y >= 0; y--)
            (o = r[y]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, n, a) : o(t, n)) || a);
        return i > 3 && a && Object.defineProperty(t, n, a), a;
      }
      var M = h("8bbf"), k = h.n(M), S = h("65d9"), p = h.n(S), B = typeof Reflect < "u" && typeof Reflect.getMetadata < "u";
      function _(r, t, n) {
        B && (Array.isArray(r) || typeof r == "function" || typeof r.type < "u" || (r.type = Reflect.getMetadata("design:type", t, n)));
      }
      function I(r, t) {
        return t === void 0 && (t = {}), function(n, e) {
          _(t, n, e), Object(S.createDecorator)(function(o, i) {
            (o.props || (o.props = {}))[i] = t, o.model = { prop: i, event: r || i };
          })(n, e);
        };
      }
      function c(r) {
        return r === void 0 && (r = {}), function(t, n) {
          _(r, t, n), Object(S.createDecorator)(function(e, o) {
            (e.props || (e.props = {}))[o] = r;
          })(t, n);
        };
      }
      function T(r, t) {
        t === void 0 && (t = {});
        var n = t.deep, e = n !== void 0 && n, o = t.immediate, i = o !== void 0 && o;
        return Object(S.createDecorator)(function(a, y) {
          typeof a.watch != "object" && (a.watch = /* @__PURE__ */ Object.create(null));
          var P = a.watch;
          typeof P[r] != "object" || Array.isArray(P[r]) ? typeof P[r] > "u" && (P[r] = []) : P[r] = [P[r]], P[r].push({ handler: y, deep: e, immediate: i });
        });
      }
      h("4ed8");
      function l(r) {
        return l = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
          return typeof t;
        } : function(t) {
          return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        }, l(r);
      }
      function f(r, t) {
        if (!(r instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function A(r, t) {
        for (var n = 0; n < t.length; n++) {
          var e = t[n];
          e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(r, e.key, e);
        }
      }
      function d(r, t, n) {
        return t && A(r.prototype, t), n && A(r, n), r;
      }
      function g(r, t) {
        if (typeof t != "function" && t !== null)
          throw new TypeError("Super expression must either be null or a function");
        r.prototype = Object.create(t && t.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), t && v(r, t);
      }
      function v(r, t) {
        return v = Object.setPrototypeOf || function(n, e) {
          return n.__proto__ = e, n;
        }, v(r, t);
      }
      function x(r) {
        var t = C();
        return function() {
          var n, e = z(r);
          if (t) {
            var o = z(this).constructor;
            n = Reflect.construct(e, arguments, o);
          } else
            n = e.apply(this, arguments);
          return m(this, n);
        };
      }
      function m(r, t) {
        return !t || l(t) !== "object" && typeof t != "function" ? D(r) : t;
      }
      function D(r) {
        if (r === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return r;
      }
      function C() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
          return !1;
        if (typeof Proxy == "function")
          return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
          })), !0;
        } catch {
          return !1;
        }
      }
      function z(r) {
        return z = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }, z(r);
      }
      var N = function(r) {
        g(n, r);
        var t = x(n);
        function n() {
          return f(this, n), t.apply(this, arguments);
        }
        return d(n, [{ key: "dragStart", value: function(e) {
          if (this.disabled)
            return !1;
          this.$emit("drag-start");
        } }, { key: "render", value: function() {
          var e = arguments[0];
          return e("div", { ref: "dot", class: this.dotClasses, attrs: { "aria-valuetext": this.tooltipValue }, on: { mousedown: this.dragStart, touchstart: this.dragStart } }, [this.$slots.dot || e("div", { class: this.handleClasses, style: this.dotStyle }), this.tooltip !== "none" ? e("div", { class: this.tooltipClasses }, [this.$slots.tooltip || e("div", { class: this.tooltipInnerClasses, style: this.tooltipStyle }, [e("span", { class: "vue-slider-dot-tooltip-text" }, [this.tooltipValue])])]) : null]);
        } }, { key: "dotClasses", get: function() {
          return ["vue-slider-dot", { "vue-slider-dot-hover": this.tooltip === "hover" || this.tooltip === "active", "vue-slider-dot-disabled": this.disabled, "vue-slider-dot-focus": this.focus }];
        } }, { key: "handleClasses", get: function() {
          return ["vue-slider-dot-handle", { "vue-slider-dot-handle-disabled": this.disabled, "vue-slider-dot-handle-focus": this.focus }];
        } }, { key: "tooltipClasses", get: function() {
          return ["vue-slider-dot-tooltip", ["vue-slider-dot-tooltip-".concat(this.tooltipPlacement)], { "vue-slider-dot-tooltip-show": this.showTooltip }];
        } }, { key: "tooltipInnerClasses", get: function() {
          return ["vue-slider-dot-tooltip-inner", ["vue-slider-dot-tooltip-inner-".concat(this.tooltipPlacement)], { "vue-slider-dot-tooltip-inner-disabled": this.disabled, "vue-slider-dot-tooltip-inner-focus": this.focus }];
        } }, { key: "showTooltip", get: function() {
          switch (this.tooltip) {
            case "always":
              return !0;
            case "none":
              return !1;
            case "focus":
            case "active":
              return !!this.focus;
            default:
              return !1;
          }
        } }, { key: "tooltipValue", get: function() {
          return this.tooltipFormatter ? typeof this.tooltipFormatter == "string" ? this.tooltipFormatter.replace(/\{value\}/, String(this.value)) : this.tooltipFormatter(this.value) : this.value;
        } }]), n;
      }(k.a);
      s([c({ default: 0 })], N.prototype, "value", void 0), s([c()], N.prototype, "tooltip", void 0), s([c()], N.prototype, "dotStyle", void 0), s([c()], N.prototype, "tooltipStyle", void 0), s([c({ type: String, validator: function(r) {
        return ["top", "right", "bottom", "left"].indexOf(r) > -1;
      }, required: !0 })], N.prototype, "tooltipPlacement", void 0), s([c({ type: [String, Function] })], N.prototype, "tooltipFormatter", void 0), s([c({ type: Boolean, default: !1 })], N.prototype, "focus", void 0), s([c({ default: !1 })], N.prototype, "disabled", void 0), N = s([p()({ name: "VueSliderDot" })], N);
      var F = N;
      h("556c");
      function G(r) {
        return G = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
          return typeof t;
        } : function(t) {
          return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        }, G(r);
      }
      function Mt(r, t) {
        if (!(r instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function gt(r, t) {
        for (var n = 0; n < t.length; n++) {
          var e = t[n];
          e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(r, e.key, e);
        }
      }
      function _t(r, t, n) {
        return t && gt(r.prototype, t), n && gt(r, n), r;
      }
      function Ct(r, t) {
        if (typeof t != "function" && t !== null)
          throw new TypeError("Super expression must either be null or a function");
        r.prototype = Object.create(t && t.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), t && lt(r, t);
      }
      function lt(r, t) {
        return lt = Object.setPrototypeOf || function(n, e) {
          return n.__proto__ = e, n;
        }, lt(r, t);
      }
      function It(r) {
        var t = Bt();
        return function() {
          var n, e = it(r);
          if (t) {
            var o = it(this).constructor;
            n = Reflect.construct(e, arguments, o);
          } else
            n = e.apply(this, arguments);
          return Tt(this, n);
        };
      }
      function Tt(r, t) {
        return !t || G(t) !== "object" && typeof t != "function" ? Lt(r) : t;
      }
      function Lt(r) {
        if (r === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return r;
      }
      function Bt() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
          return !1;
        if (typeof Proxy == "function")
          return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
          })), !0;
        } catch {
          return !1;
        }
      }
      function it(r) {
        return it = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }, it(r);
      }
      var X = function(r) {
        Ct(n, r);
        var t = It(n);
        function n() {
          return Mt(this, n), t.apply(this, arguments);
        }
        return _t(n, [{ key: "labelClickHandle", value: function(e) {
          e.stopPropagation(), this.$emit("pressLabel", this.mark.pos);
        } }, { key: "render", value: function() {
          var e = arguments[0], o = this.mark;
          return e("div", { class: this.marksClasses }, [this.$slots.step || e("div", { class: this.stepClasses, style: [this.stepStyle, o.style, o.active ? this.stepActiveStyle : null, o.active ? o.activeStyle : null] }), this.hideLabel ? null : this.$slots.label || e("div", { class: this.labelClasses, style: [this.labelStyle, o.labelStyle, o.active ? this.labelActiveStyle : null, o.active ? o.labelActiveStyle : null], on: { click: this.labelClickHandle } }, [o.label])]);
        } }, { key: "marksClasses", get: function() {
          return ["vue-slider-mark", { "vue-slider-mark-active": this.mark.active }];
        } }, { key: "stepClasses", get: function() {
          return ["vue-slider-mark-step", { "vue-slider-mark-step-active": this.mark.active }];
        } }, { key: "labelClasses", get: function() {
          return ["vue-slider-mark-label", { "vue-slider-mark-label-active": this.mark.active }];
        } }]), n;
      }(k.a);
      s([c({ required: !0 })], X.prototype, "mark", void 0), s([c(Boolean)], X.prototype, "hideLabel", void 0), s([c()], X.prototype, "stepStyle", void 0), s([c()], X.prototype, "stepActiveStyle", void 0), s([c()], X.prototype, "labelStyle", void 0), s([c()], X.prototype, "labelActiveStyle", void 0), X = s([p()({ name: "VueSlideMark" })], X);
      var W, ct = X, et = function(r) {
        return typeof r == "number" ? "".concat(r, "px") : r;
      }, Nt = function(r) {
        var t = document.documentElement, n = document.body, e = r.getBoundingClientRect(), o = { y: e.top + (window.pageYOffset || t.scrollTop) - (t.clientTop || n.clientTop || 0), x: e.left + (window.pageXOffset || t.scrollLeft) - (t.clientLeft || n.clientLeft || 0) };
        return o;
      }, zt = function(r, t, n) {
        var e = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1, o = "targetTouches" in r ? r.targetTouches[0] : r, i = Nt(t), a = { x: o.pageX - i.x, y: o.pageY - i.y };
        return { x: n ? t.offsetWidth * e - a.x : a.x, y: n ? t.offsetHeight * e - a.y : a.y };
      };
      (function(r) {
        r[r.PAGE_UP = 33] = "PAGE_UP", r[r.PAGE_DOWN = 34] = "PAGE_DOWN", r[r.END = 35] = "END", r[r.HOME = 36] = "HOME", r[r.LEFT = 37] = "LEFT", r[r.UP = 38] = "UP", r[r.RIGHT = 39] = "RIGHT", r[r.DOWN = 40] = "DOWN";
      })(W || (W = {}));
      var Ht = function(r, t) {
        if (t.hook) {
          var n = t.hook(r);
          if (typeof n == "function")
            return n;
          if (!n)
            return null;
        }
        switch (r.keyCode) {
          case W.UP:
            return function(e) {
              return t.direction === "ttb" ? e - 1 : e + 1;
            };
          case W.RIGHT:
            return function(e) {
              return t.direction === "rtl" ? e - 1 : e + 1;
            };
          case W.DOWN:
            return function(e) {
              return t.direction === "ttb" ? e + 1 : e - 1;
            };
          case W.LEFT:
            return function(e) {
              return t.direction === "rtl" ? e + 1 : e - 1;
            };
          case W.END:
            return function() {
              return t.max;
            };
          case W.HOME:
            return function() {
              return t.min;
            };
          case W.PAGE_UP:
            return function(e) {
              return e + 10;
            };
          case W.PAGE_DOWN:
            return function(e) {
              return e - 10;
            };
          default:
            return null;
        }
      };
      function Ft(r, t) {
        if (!(r instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function kt(r, t) {
        for (var n = 0; n < t.length; n++) {
          var e = t[n];
          e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(r, e.key, e);
        }
      }
      function Ut(r, t, n) {
        return t && kt(r.prototype, t), n && kt(r, n), r;
      }
      var J, U, K = function() {
        function r(t) {
          Ft(this, r), this.num = t;
        }
        return Ut(r, [{ key: "decimal", value: function(t, n) {
          var e = this.num, o = this.getDecimalLen(e), i = this.getDecimalLen(t), a = 0;
          switch (n) {
            case "+":
              a = this.getExponent(o, i), this.num = (this.safeRoundUp(e, a) + this.safeRoundUp(t, a)) / a;
              break;
            case "-":
              a = this.getExponent(o, i), this.num = (this.safeRoundUp(e, a) - this.safeRoundUp(t, a)) / a;
              break;
            case "*":
              this.num = this.safeRoundUp(this.safeRoundUp(e, this.getExponent(o)), this.safeRoundUp(t, this.getExponent(i))) / this.getExponent(o + i);
              break;
            case "/":
              a = this.getExponent(o, i), this.num = this.safeRoundUp(e, a) / this.safeRoundUp(t, a);
              break;
            case "%":
              a = this.getExponent(o, i), this.num = this.safeRoundUp(e, a) % this.safeRoundUp(t, a) / a;
              break;
          }
          return this;
        } }, { key: "plus", value: function(t) {
          return this.decimal(t, "+");
        } }, { key: "minus", value: function(t) {
          return this.decimal(t, "-");
        } }, { key: "multiply", value: function(t) {
          return this.decimal(t, "*");
        } }, { key: "divide", value: function(t) {
          return this.decimal(t, "/");
        } }, { key: "remainder", value: function(t) {
          return this.decimal(t, "%");
        } }, { key: "toNumber", value: function() {
          return this.num;
        } }, { key: "getDecimalLen", value: function(t) {
          var n = "".concat(t).split("e");
          return ("".concat(n[0]).split(".")[1] || "").length - (n[1] ? +n[1] : 0);
        } }, { key: "getExponent", value: function(t, n) {
          return Math.pow(10, n !== void 0 ? Math.max(t, n) : t);
        } }, { key: "safeRoundUp", value: function(t, n) {
          return Math.round(t * n);
        } }]), r;
      }();
      function Ot(r, t) {
        var n = Object.keys(r);
        if (Object.getOwnPropertySymbols) {
          var e = Object.getOwnPropertySymbols(r);
          t && (e = e.filter(function(o) {
            return Object.getOwnPropertyDescriptor(r, o).enumerable;
          })), n.push.apply(n, e);
        }
        return n;
      }
      function $t(r) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t] != null ? arguments[t] : {};
          t % 2 ? Ot(Object(n), !0).forEach(function(e) {
            Z(r, e, n[e]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(n)) : Ot(Object(n)).forEach(function(e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(n, e));
          });
        }
        return r;
      }
      function Gt(r, t) {
        return Kt(r) || Xt(r, t) || xt(r, t) || Wt();
      }
      function Wt() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function Xt(r, t) {
        if (typeof Symbol < "u" && Symbol.iterator in Object(r)) {
          var n = [], e = !0, o = !1, i = void 0;
          try {
            for (var a, y = r[Symbol.iterator](); !(e = (a = y.next()).done) && (n.push(a.value), !(t && n.length === t)); e = !0)
              ;
          } catch (P) {
            o = !0, i = P;
          } finally {
            try {
              e || y.return == null || y.return();
            } finally {
              if (o)
                throw i;
            }
          }
          return n;
        }
      }
      function Kt(r) {
        if (Array.isArray(r))
          return r;
      }
      function Q(r) {
        return Jt(r) || qt(r) || xt(r) || Yt();
      }
      function Yt() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function xt(r, t) {
        if (r) {
          if (typeof r == "string")
            return dt(r, t);
          var n = Object.prototype.toString.call(r).slice(8, -1);
          return n === "Object" && r.constructor && (n = r.constructor.name), n === "Map" || n === "Set" ? Array.from(r) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? dt(r, t) : void 0;
        }
      }
      function qt(r) {
        if (typeof Symbol < "u" && Symbol.iterator in Object(r))
          return Array.from(r);
      }
      function Jt(r) {
        if (Array.isArray(r))
          return dt(r);
      }
      function dt(r, t) {
        (t == null || t > r.length) && (t = r.length);
        for (var n = 0, e = new Array(t); n < t; n++)
          e[n] = r[n];
        return e;
      }
      function Qt(r, t) {
        if (!(r instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function wt(r, t) {
        for (var n = 0; n < t.length; n++) {
          var e = t[n];
          e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(r, e.key, e);
        }
      }
      function Zt(r, t, n) {
        return t && wt(r.prototype, t), n && wt(r, n), r;
      }
      function Z(r, t, n) {
        return t in r ? Object.defineProperty(r, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : r[t] = n, r;
      }
      (function(r) {
        r[r.VALUE = 1] = "VALUE", r[r.INTERVAL = 2] = "INTERVAL", r[r.MIN = 3] = "MIN", r[r.MAX = 4] = "MAX", r[r.ORDER = 5] = "ORDER";
      })(U || (U = {}));
      var te = (J = {}, Z(J, U.VALUE, 'The type of the "value" is illegal'), Z(J, U.INTERVAL, 'The prop "interval" is invalid, "(max - min)" must be divisible by "interval"'), Z(J, U.MIN, 'The "value" must be greater than or equal to the "min".'), Z(J, U.MAX, 'The "value" must be less than or equal to the "max".'), Z(J, U.ORDER, 'When "order" is false, the parameters "minRange", "maxRange", "fixed", "enabled" are invalid.'), J), ee = function() {
        function r(t) {
          Qt(this, r), this.dotsPos = [], this.dotsValue = [], this.cacheRangeDir = {}, this.data = t.data, this.max = t.max, this.min = t.min, this.interval = t.interval, this.order = t.order, this.marks = t.marks, this.included = t.included, this.process = t.process, this.adsorb = t.adsorb, this.dotOptions = t.dotOptions, this.onError = t.onError, this.order ? (this.minRange = t.minRange || 0, this.maxRange = t.maxRange || 0, this.enableCross = t.enableCross, this.fixed = t.fixed) : ((t.minRange || t.maxRange || !t.enableCross || t.fixed) && this.emitError(U.ORDER), this.minRange = 0, this.maxRange = 0, this.enableCross = !0, this.fixed = !1), this.setValue(t.value);
        }
        return Zt(r, [{ key: "setValue", value: function(t) {
          var n = this;
          this.setDotsValue(Array.isArray(t) ? this.order ? Q(t).sort(function(e, o) {
            return n.getIndexByValue(e) - n.getIndexByValue(o);
          }) : Q(t) : [t], !0);
        } }, { key: "setDotsValue", value: function(t, n) {
          this.dotsValue = t, n && this.syncDotsPos();
        } }, { key: "setDotsPos", value: function(t) {
          var n = this, e = this.order ? Q(t).sort(function(o, i) {
            return o - i;
          }) : t;
          this.dotsPos = e, this.setDotsValue(e.map(function(o) {
            return n.getValueByPos(o);
          }), this.adsorb);
        } }, { key: "getValueByPos", value: function(t) {
          var n = this.parsePos(t);
          if (this.included) {
            var e = 100;
            this.markList.forEach(function(o) {
              var i = Math.abs(o.pos - t);
              i < e && (e = i, n = o.value);
            });
          }
          return n;
        } }, { key: "syncDotsPos", value: function() {
          var t = this;
          this.dotsPos = this.dotsValue.map(function(n) {
            return t.parseValue(n);
          });
        } }, { key: "getRecentDot", value: function(t) {
          var n = this, e = this.dotsPos.filter(function(o, i) {
            return !(n.getDotOption(i) && n.getDotOption(i).disabled);
          }).map(function(o) {
            return Math.abs(o - t);
          });
          return e.indexOf(Math.min.apply(Math, Q(e)));
        } }, { key: "getIndexByValue", value: function(t) {
          return this.data ? this.data.indexOf(t) : new K(+t).minus(this.min).divide(this.interval).toNumber();
        } }, { key: "getValueByIndex", value: function(t) {
          return t < 0 ? t = 0 : t > this.total && (t = this.total), this.data ? this.data[t] : new K(t).multiply(this.interval).plus(this.min).toNumber();
        } }, { key: "setDotPos", value: function(t, n) {
          t = this.getValidPos(t, n).pos;
          var e = t - this.dotsPos[n];
          if (e) {
            var o = new Array(this.dotsPos.length);
            this.fixed ? o = this.getFixedChangePosArr(e, n) : this.minRange || this.maxRange ? o = this.getLimitRangeChangePosArr(t, e, n) : o[n] = e, this.setDotsPos(this.dotsPos.map(function(i, a) {
              return i + (o[a] || 0);
            }));
          }
        } }, { key: "getFixedChangePosArr", value: function(t, n) {
          var e = this;
          return this.dotsPos.forEach(function(o, i) {
            if (i !== n) {
              var a = e.getValidPos(o + t, i), y = a.pos, P = a.inRange;
              P || (t = Math.min(Math.abs(y - o), Math.abs(t)) * (t < 0 ? -1 : 1));
            }
          }), this.dotsPos.map(function(o) {
            return t;
          });
        } }, { key: "getLimitRangeChangePosArr", value: function(t, n, e) {
          var o = this, i = [{ index: e, changePos: n }], a = n;
          return [this.minRange, this.maxRange].forEach(function(y, P) {
            if (!y)
              return !1;
            var $ = P === 0, Y = n > 0, tt = 0;
            tt = $ ? Y ? 1 : -1 : Y ? -1 : 1;
            for (var ut = function(ke, Oe) {
              var At = Math.abs(ke - Oe);
              return $ ? At < o.minRangeDir : At > o.maxRangeDir;
            }, nt = e + tt, ot = o.dotsPos[nt], jt = t; o.isPos(ot) && ut(ot, jt); ) {
              var ge = o.getValidPos(ot + a, nt), Et = ge.pos;
              i.push({ index: nt, changePos: Et - ot }), nt += tt, jt = Et, ot = o.dotsPos[nt];
            }
          }), this.dotsPos.map(function(y, P) {
            var $ = i.filter(function(Y) {
              return Y.index === P;
            });
            return $.length ? $[0].changePos : 0;
          });
        } }, { key: "isPos", value: function(t) {
          return typeof t == "number";
        } }, { key: "getValidPos", value: function(t, n) {
          var e = this.valuePosRange[n], o = !0;
          return t < e[0] ? (t = e[0], o = !1) : t > e[1] && (t = e[1], o = !1), { pos: t, inRange: o };
        } }, { key: "parseValue", value: function(t) {
          if (this.data)
            t = this.data.indexOf(t);
          else if (typeof t == "number" || typeof t == "string") {
            if (t = +t, t < this.min)
              return this.emitError(U.MIN), 0;
            if (t > this.max)
              return this.emitError(U.MAX), 0;
            if (typeof t != "number" || t !== t)
              return this.emitError(U.VALUE), 0;
            t = new K(t).minus(this.min).divide(this.interval).toNumber();
          }
          var n = new K(t).multiply(this.gap).toNumber();
          return n < 0 ? 0 : n > 100 ? 100 : n;
        } }, { key: "parsePos", value: function(t) {
          var n = Math.round(t / this.gap);
          return this.getValueByIndex(n);
        } }, { key: "isActiveByPos", value: function(t) {
          return this.processArray.some(function(n) {
            var e = Gt(n, 2), o = e[0], i = e[1];
            return t >= o && t <= i;
          });
        } }, { key: "getValues", value: function() {
          if (this.data)
            return this.data;
          for (var t = [], n = 0; n <= this.total; n++)
            t.push(new K(n).multiply(this.interval).plus(this.min).toNumber());
          return t;
        } }, { key: "getRangeDir", value: function(t) {
          return t ? new K(t).divide(new K(this.data ? this.data.length - 1 : this.max).minus(this.data ? 0 : this.min).toNumber()).multiply(100).toNumber() : 100;
        } }, { key: "emitError", value: function(t) {
          this.onError && this.onError(t, te[t]);
        } }, { key: "getDotOption", value: function(t) {
          return Array.isArray(this.dotOptions) ? this.dotOptions[t] : this.dotOptions;
        } }, { key: "getDotRange", value: function(t, n, e) {
          if (!this.dotOptions)
            return e;
          var o = this.getDotOption(t);
          return o && o[n] !== void 0 ? this.parseValue(o[n]) : e;
        } }, { key: "markList", get: function() {
          var t = this;
          if (!this.marks)
            return [];
          var n = function(e, o) {
            var i = t.parseValue(e);
            return $t({ pos: i, value: e, label: e, active: t.isActiveByPos(i) }, o);
          };
          return this.marks === !0 ? this.getValues().map(function(e) {
            return n(e);
          }) : Object.prototype.toString.call(this.marks) === "[object Object]" ? Object.keys(this.marks).sort(function(e, o) {
            return +e - +o;
          }).map(function(e) {
            var o = t.marks[e];
            return n(e, typeof o != "string" ? o : { label: o });
          }) : Array.isArray(this.marks) ? this.marks.map(function(e) {
            return n(e);
          }) : typeof this.marks == "function" ? this.getValues().map(function(e) {
            return { value: e, result: t.marks(e) };
          }).filter(function(e) {
            var o = e.result;
            return !!o;
          }).map(function(e) {
            var o = e.value, i = e.result;
            return n(o, i);
          }) : [];
        } }, { key: "processArray", get: function() {
          if (this.process) {
            if (typeof this.process == "function")
              return this.process(this.dotsPos);
            if (this.dotsPos.length === 1)
              return [[0, this.dotsPos[0]]];
            if (this.dotsPos.length > 1)
              return [[Math.min.apply(Math, Q(this.dotsPos)), Math.max.apply(Math, Q(this.dotsPos))]];
          }
          return [];
        } }, { key: "total", get: function() {
          var t = 0;
          return t = this.data ? this.data.length - 1 : new K(this.max).minus(this.min).divide(this.interval).toNumber(), t - Math.floor(t) !== 0 ? (this.emitError(U.INTERVAL), 0) : t;
        } }, { key: "gap", get: function() {
          return 100 / this.total;
        } }, { key: "minRangeDir", get: function() {
          return this.cacheRangeDir[this.minRange] ? this.cacheRangeDir[this.minRange] : this.cacheRangeDir[this.minRange] = this.getRangeDir(this.minRange);
        } }, { key: "maxRangeDir", get: function() {
          return this.cacheRangeDir[this.maxRange] ? this.cacheRangeDir[this.maxRange] : this.cacheRangeDir[this.maxRange] = this.getRangeDir(this.maxRange);
        } }, { key: "valuePosRange", get: function() {
          var t = this, n = this.dotsPos, e = [];
          return n.forEach(function(o, i) {
            e.push([Math.max(t.minRange ? t.minRangeDir * i : 0, t.enableCross ? 0 : n[i - 1] || 0, t.getDotRange(i, "min", 0)), Math.min(t.minRange ? 100 - t.minRangeDir * (n.length - 1 - i) : 100, t.enableCross ? 100 : n[i + 1] || 100, t.getDotRange(i, "max", 100))]);
          }), e;
        } }, { key: "dotsIndex", get: function() {
          var t = this;
          return this.dotsValue.map(function(n) {
            return t.getIndexByValue(n);
          });
        } }]), r;
      }();
      function re(r, t) {
        if (!(r instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function St(r, t) {
        for (var n = 0; n < t.length; n++) {
          var e = t[n];
          e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(r, e.key, e);
        }
      }
      function ne(r, t, n) {
        return t && St(r.prototype, t), n && St(r, n), r;
      }
      var oe = function() {
        function r(t) {
          re(this, r), this.states = 0, this.map = t;
        }
        return ne(r, [{ key: "add", value: function(t) {
          this.states |= t;
        } }, { key: "delete", value: function(t) {
          this.states &= ~t;
        } }, { key: "toggle", value: function(t) {
          this.has(t) ? this.delete(t) : this.add(t);
        } }, { key: "has", value: function(t) {
          return !!(this.states & t);
        } }]), r;
      }();
      h("4abb");
      function ft(r, t) {
        return se(r) || ae(r, t) || Dt(r, t) || ie();
      }
      function ie() {
        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function ae(r, t) {
        if (typeof Symbol < "u" && Symbol.iterator in Object(r)) {
          var n = [], e = !0, o = !1, i = void 0;
          try {
            for (var a, y = r[Symbol.iterator](); !(e = (a = y.next()).done) && (n.push(a.value), !(t && n.length === t)); e = !0)
              ;
          } catch (P) {
            o = !0, i = P;
          } finally {
            try {
              e || y.return == null || y.return();
            } finally {
              if (o)
                throw i;
            }
          }
          return n;
        }
      }
      function se(r) {
        if (Array.isArray(r))
          return r;
      }
      function Pt(r, t) {
        var n = Object.keys(r);
        if (Object.getOwnPropertySymbols) {
          var e = Object.getOwnPropertySymbols(r);
          t && (e = e.filter(function(o) {
            return Object.getOwnPropertyDescriptor(r, o).enumerable;
          })), n.push.apply(n, e);
        }
        return n;
      }
      function rt(r) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t] != null ? arguments[t] : {};
          t % 2 ? Pt(Object(n), !0).forEach(function(e) {
            H(r, e, n[e]);
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(n)) : Pt(Object(n)).forEach(function(e) {
            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(n, e));
          });
        }
        return r;
      }
      function H(r, t, n) {
        return t in r ? Object.defineProperty(r, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : r[t] = n, r;
      }
      function ht(r) {
        return ce(r) || le(r) || Dt(r) || ue();
      }
      function ue() {
        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
      }
      function Dt(r, t) {
        if (r) {
          if (typeof r == "string")
            return pt(r, t);
          var n = Object.prototype.toString.call(r).slice(8, -1);
          return n === "Object" && r.constructor && (n = r.constructor.name), n === "Map" || n === "Set" ? Array.from(r) : n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? pt(r, t) : void 0;
        }
      }
      function le(r) {
        if (typeof Symbol < "u" && Symbol.iterator in Object(r))
          return Array.from(r);
      }
      function ce(r) {
        if (Array.isArray(r))
          return pt(r);
      }
      function pt(r, t) {
        (t == null || t > r.length) && (t = r.length);
        for (var n = 0, e = new Array(t); n < t; n++)
          e[n] = r[n];
        return e;
      }
      function at(r) {
        return at = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
          return typeof t;
        } : function(t) {
          return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
        }, at(r);
      }
      function de(r, t) {
        if (!(r instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function Rt(r, t) {
        for (var n = 0; n < t.length; n++) {
          var e = t[n];
          e.enumerable = e.enumerable || !1, e.configurable = !0, "value" in e && (e.writable = !0), Object.defineProperty(r, e.key, e);
        }
      }
      function fe(r, t, n) {
        return t && Rt(r.prototype, t), n && Rt(r, n), r;
      }
      function he(r, t) {
        if (typeof t != "function" && t !== null)
          throw new TypeError("Super expression must either be null or a function");
        r.prototype = Object.create(t && t.prototype, { constructor: { value: r, writable: !0, configurable: !0 } }), t && yt(r, t);
      }
      function yt(r, t) {
        return yt = Object.setPrototypeOf || function(n, e) {
          return n.__proto__ = e, n;
        }, yt(r, t);
      }
      function pe(r) {
        var t = me();
        return function() {
          var n, e = st(r);
          if (t) {
            var o = st(this).constructor;
            n = Reflect.construct(e, arguments, o);
          } else
            n = e.apply(this, arguments);
          return ye(this, n);
        };
      }
      function ye(r, t) {
        return !t || at(t) !== "object" && typeof t != "function" ? ve(r) : t;
      }
      function ve(r) {
        if (r === void 0)
          throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return r;
      }
      function me() {
        if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
          return !1;
        if (typeof Proxy == "function")
          return !0;
        try {
          return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
          })), !0;
        } catch {
          return !1;
        }
      }
      function st(r) {
        return st = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
          return t.__proto__ || Object.getPrototypeOf(t);
        }, st(r);
      }
      var L = { None: 0, Drag: 2, Focus: 4 }, vt = 4, b = function(r) {
        he(n, r);
        var t = pe(n);
        function n() {
          var e;
          return de(this, n), e = t.apply(this, arguments), e.states = new oe(L), e.scale = 1, e.focusDotIndex = 0, e;
        }
        return fe(n, [{ key: "isObjectData", value: function(e) {
          return !!e && Object.prototype.toString.call(e) === "[object Object]";
        } }, { key: "isObjectArrayData", value: function(e) {
          return !!e && Array.isArray(e) && e.length > 0 && at(e[0]) === "object";
        } }, { key: "onValueChanged", value: function() {
          this.control && !this.states.has(L.Drag) && this.isNotSync && (this.control.setValue(this.value), this.syncValueByPos());
        } }, { key: "created", value: function() {
          this.initControl();
        } }, { key: "mounted", value: function() {
          this.bindEvent();
        } }, { key: "beforeDestroy", value: function() {
          this.unbindEvent();
        } }, { key: "bindEvent", value: function() {
          document.addEventListener("touchmove", this.dragMove, { passive: !1 }), document.addEventListener("touchend", this.dragEnd, { passive: !1 }), document.addEventListener("mousedown", this.blurHandle), document.addEventListener("mousemove", this.dragMove, { passive: !1 }), document.addEventListener("mouseup", this.dragEnd), document.addEventListener("mouseleave", this.dragEnd), document.addEventListener("keydown", this.keydownHandle);
        } }, { key: "unbindEvent", value: function() {
          document.removeEventListener("touchmove", this.dragMove), document.removeEventListener("touchend", this.dragEnd), document.removeEventListener("mousedown", this.blurHandle), document.removeEventListener("mousemove", this.dragMove), document.removeEventListener("mouseup", this.dragEnd), document.removeEventListener("mouseleave", this.dragEnd), document.removeEventListener("keydown", this.keydownHandle);
        } }, { key: "setScale", value: function() {
          var e = new K(Math.floor(this.isHorizontal ? this.$refs.rail.offsetWidth : this.$refs.rail.offsetHeight));
          this.zoom !== void 0 && e.multiply(this.zoom), e.divide(100), this.scale = e.toNumber();
        } }, { key: "initControl", value: function() {
          var e = this;
          this.control = new ee({ value: this.value, data: this.sliderData, enableCross: this.enableCross, fixed: this.fixed, max: this.max, min: this.min, interval: this.interval, minRange: this.minRange, maxRange: this.maxRange, order: this.order, marks: this.sliderMarks, included: this.included, process: this.process, adsorb: this.adsorb, dotOptions: this.dotOptions, onError: this.emitError }), this.syncValueByPos(), ["data", "enableCross", "fixed", "max", "min", "interval", "minRange", "maxRange", "order", "marks", "process", "adsorb", "included", "dotOptions"].forEach(function(o) {
            e.$watch(o, function(i) {
              if (o === "data" && Array.isArray(e.control.data) && Array.isArray(i) && e.control.data.length === i.length && i.every(function(a, y) {
                return a === e.control.data[y];
              }))
                return !1;
              switch (o) {
                case "data":
                case "dataLabel":
                case "dataValue":
                  e.control.data = e.sliderData;
                  break;
                case "mark":
                  e.control.marks = e.sliderMarks;
                  break;
                default:
                  e.control[o] = i;
              }
              ["data", "max", "min", "interval"].indexOf(o) > -1 && e.control.syncDotsPos();
            });
          });
        } }, { key: "syncValueByPos", value: function() {
          var e = this.control.dotsValue;
          this.isDiff(e, Array.isArray(this.value) ? this.value : [this.value]) && this.$emit("change", e.length === 1 ? e[0] : ht(e), this.focusDotIndex);
        } }, { key: "isDiff", value: function(e, o) {
          return e.length !== o.length || e.some(function(i, a) {
            return i !== o[a];
          });
        } }, { key: "emitError", value: function(e, o) {
          this.silent || console.error("[VueSlider error]: ".concat(o)), this.$emit("error", e, o);
        } }, { key: "dragStartOnProcess", value: function(e) {
          if (this.dragOnClick) {
            this.setScale();
            var o = this.getPosByEvent(e), i = this.control.getRecentDot(o);
            if (this.dots[i].disabled)
              return;
            this.dragStart(i), this.control.setDotPos(o, this.focusDotIndex), this.lazy || this.syncValueByPos();
          }
        } }, { key: "dragStart", value: function(e) {
          this.focusDotIndex = e, this.setScale(), this.states.add(L.Drag), this.states.add(L.Focus), this.$emit("drag-start", this.focusDotIndex);
        } }, { key: "dragMove", value: function(e) {
          if (!this.states.has(L.Drag))
            return !1;
          e.preventDefault();
          var o = this.getPosByEvent(e);
          this.isCrossDot(o), this.control.setDotPos(o, this.focusDotIndex), this.lazy || this.syncValueByPos();
          var i = this.control.dotsValue;
          this.$emit("dragging", i.length === 1 ? i[0] : ht(i), this.focusDotIndex);
        } }, { key: "isCrossDot", value: function(e) {
          if (this.canSort) {
            var o = this.focusDotIndex, i = e;
            if (i > this.dragRange[1] ? (i = this.dragRange[1], this.focusDotIndex++) : i < this.dragRange[0] && (i = this.dragRange[0], this.focusDotIndex--), o !== this.focusDotIndex) {
              var a = this.$refs["dot-".concat(this.focusDotIndex)];
              a && a.$el && a.$el.focus(), this.control.setDotPos(i, o);
            }
          }
        } }, { key: "dragEnd", value: function(e) {
          var o = this;
          if (!this.states.has(L.Drag))
            return !1;
          setTimeout(function() {
            o.lazy && o.syncValueByPos(), o.included && o.isNotSync ? o.control.setValue(o.value) : o.control.syncDotsPos(), o.states.delete(L.Drag), o.useKeyboard && !("targetTouches" in e) || o.states.delete(L.Focus), o.$emit("drag-end", o.focusDotIndex);
          });
        } }, { key: "blurHandle", value: function(e) {
          if (!this.states.has(L.Focus) || !this.$refs.container || this.$refs.container.contains(e.target))
            return !1;
          this.states.delete(L.Focus);
        } }, { key: "clickHandle", value: function(e) {
          if (!this.clickable || this.disabled)
            return !1;
          if (!this.states.has(L.Drag)) {
            this.setScale();
            var o = this.getPosByEvent(e);
            this.setValueByPos(o);
          }
        } }, { key: "focus", value: function() {
          var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
          this.states.add(L.Focus), this.focusDotIndex = e;
        } }, { key: "blur", value: function() {
          this.states.delete(L.Focus);
        } }, { key: "getValue", value: function() {
          var e = this.control.dotsValue;
          return e.length === 1 ? e[0] : e;
        } }, { key: "getIndex", value: function() {
          var e = this.control.dotsIndex;
          return e.length === 1 ? e[0] : e;
        } }, { key: "setValue", value: function(e) {
          this.control.setValue(Array.isArray(e) ? ht(e) : [e]), this.syncValueByPos();
        } }, { key: "setIndex", value: function(e) {
          var o = this, i = Array.isArray(e) ? e.map(function(a) {
            return o.control.getValueByIndex(a);
          }) : this.control.getValueByIndex(e);
          this.setValue(i);
        } }, { key: "setValueByPos", value: function(e) {
          var o = this, i = this.control.getRecentDot(e);
          if (this.disabled || this.dots[i].disabled)
            return !1;
          this.focusDotIndex = i, this.control.setDotPos(e, i), this.syncValueByPos(), this.useKeyboard && this.states.add(L.Focus), setTimeout(function() {
            o.included && o.isNotSync ? o.control.setValue(o.value) : o.control.syncDotsPos();
          });
        } }, { key: "keydownHandle", value: function(e) {
          var o = this;
          if (!this.useKeyboard || !this.states.has(L.Focus))
            return !1;
          var i = this.included && this.marks, a = Ht(e, { direction: this.direction, max: i ? this.control.markList.length - 1 : this.control.total, min: 0, hook: this.keydownHook });
          if (a) {
            e.preventDefault();
            var y = -1, P = 0;
            i ? (this.control.markList.some(function($, Y) {
              return $.value === o.control.dotsValue[o.focusDotIndex] && (y = a(Y), !0);
            }), y < 0 ? y = 0 : y > this.control.markList.length - 1 && (y = this.control.markList.length - 1), P = this.control.markList[y].pos) : (y = a(this.control.getIndexByValue(this.control.dotsValue[this.focusDotIndex])), P = this.control.parseValue(this.control.getValueByIndex(y))), this.isCrossDot(P), this.control.setDotPos(P, this.focusDotIndex), this.syncValueByPos();
          }
        } }, { key: "getPosByEvent", value: function(e) {
          return zt(e, this.$refs.rail, this.isReverse, this.zoom)[this.isHorizontal ? "x" : "y"] / this.scale;
        } }, { key: "renderSlot", value: function(e, o, i, a) {
          var y = this.$createElement, P = this.$scopedSlots[e];
          return P ? a ? P(o) : y("template", { slot: e }, [P(o)]) : i;
        } }, { key: "render", value: function() {
          var e = this, o = arguments[0];
          return o("div", R()([{ ref: "container", class: this.containerClasses, style: this.containerStyles, on: { click: this.clickHandle, touchstart: this.dragStartOnProcess, mousedown: this.dragStartOnProcess } }, this.$attrs]), [o("div", { ref: "rail", class: "vue-slider-rail", style: this.railStyle }, [this.processArray.map(function(i, a) {
            return e.renderSlot("process", i, o("div", { class: "vue-slider-process", key: "process-".concat(a), style: i.style }), !0);
          }), this.sliderMarks ? o("div", { class: "vue-slider-marks" }, [this.control.markList.map(function(i, a) {
            var y;
            return e.renderSlot("mark", i, o("vue-slider-mark", { key: "mark-".concat(a), attrs: { mark: i, hideLabel: e.hideLabel, stepStyle: e.stepStyle, stepActiveStyle: e.stepActiveStyle, labelStyle: e.labelStyle, labelActiveStyle: e.labelActiveStyle }, style: (y = {}, H(y, e.isHorizontal ? "height" : "width", "100%"), H(y, e.isHorizontal ? "width" : "height", e.tailSize), H(y, e.mainDirection, "".concat(i.pos, "%")), y), on: { pressLabel: function(P) {
              return e.clickable && e.setValueByPos(P);
            } } }, [e.renderSlot("step", i, null), e.renderSlot("label", i, null)]), !0);
          })]) : null, this.dots.map(function(i, a) {
            var y;
            return o("vue-slider-dot", { ref: "dot-".concat(a), key: "dot-".concat(a), attrs: rt({ value: i.value, disabled: i.disabled, focus: i.focus, "dot-style": [i.style, i.disabled ? i.disabledStyle : null, i.focus ? i.focusStyle : null], tooltip: i.tooltip || e.tooltip, "tooltip-style": [e.tooltipStyle, i.tooltipStyle, i.disabled ? i.tooltipDisabledStyle : null, i.focus ? i.tooltipFocusStyle : null], "tooltip-formatter": Array.isArray(e.sliderTooltipFormatter) ? e.sliderTooltipFormatter[a] : e.sliderTooltipFormatter, "tooltip-placement": e.tooltipDirections[a], role: "slider", "aria-valuenow": i.value, "aria-valuemin": e.min, "aria-valuemax": e.max, "aria-orientation": e.isHorizontal ? "horizontal" : "vertical", tabindex: "0" }, e.dotAttrs), style: [e.dotBaseStyle, (y = {}, H(y, e.mainDirection, "".concat(i.pos, "%")), H(y, "transition", "".concat(e.mainDirection, " ").concat(e.animateTime, "s")), y)], on: { "drag-start": function() {
              return e.dragStart(a);
            } }, nativeOn: { focus: function() {
              return !i.disabled && e.focus(a);
            }, blur: function() {
              return e.blur();
            } } }, [e.renderSlot("dot", i, null), e.renderSlot("tooltip", i, null)]);
          }), this.renderSlot("default", { value: this.getValue() }, null, !0)])]);
        } }, { key: "tailSize", get: function() {
          return et((this.isHorizontal ? this.height : this.width) || vt);
        } }, { key: "containerClasses", get: function() {
          return ["vue-slider", ["vue-slider-".concat(this.direction)], { "vue-slider-disabled": this.disabled }];
        } }, { key: "containerStyles", get: function() {
          var e = Array.isArray(this.dotSize) ? this.dotSize : [this.dotSize, this.dotSize], o = ft(e, 2), i = o[0], a = o[1], y = this.width ? et(this.width) : this.isHorizontal ? "auto" : et(vt), P = this.height ? et(this.height) : this.isHorizontal ? et(vt) : "auto";
          return { padding: this.contained ? "".concat(a / 2, "px ").concat(i / 2, "px") : this.isHorizontal ? "".concat(a / 2, "px 0") : "0 ".concat(i / 2, "px"), width: y, height: P };
        } }, { key: "processArray", get: function() {
          var e = this;
          return this.control.processArray.map(function(o, i) {
            var a, y = ft(o, 3), P = y[0], $ = y[1], Y = y[2];
            if (P > $) {
              var tt = [$, P];
              P = tt[0], $ = tt[1];
            }
            var ut = e.isHorizontal ? "width" : "height";
            return { start: P, end: $, index: i, style: rt(rt((a = {}, H(a, e.isHorizontal ? "height" : "width", "100%"), H(a, e.isHorizontal ? "top" : "left", 0), H(a, e.mainDirection, "".concat(P, "%")), H(a, ut, "".concat($ - P, "%")), H(a, "transitionProperty", "".concat(ut, ",").concat(e.mainDirection)), H(a, "transitionDuration", "".concat(e.animateTime, "s")), a), e.processStyle), Y) };
          });
        } }, { key: "dotBaseStyle", get: function() {
          var e, o = Array.isArray(this.dotSize) ? this.dotSize : [this.dotSize, this.dotSize], i = ft(o, 2), a = i[0], y = i[1];
          return e = this.isHorizontal ? H({ transform: "translate(".concat(this.isReverse ? "50%" : "-50%", ", -50%)"), "-WebkitTransform": "translate(".concat(this.isReverse ? "50%" : "-50%", ", -50%)"), top: "50%" }, this.direction === "ltr" ? "left" : "right", "0") : H({ transform: "translate(-50%, ".concat(this.isReverse ? "50%" : "-50%", ")"), "-WebkitTransform": "translate(-50%, ".concat(this.isReverse ? "50%" : "-50%", ")"), left: "50%" }, this.direction === "btt" ? "bottom" : "top", "0"), rt({ width: "".concat(a, "px"), height: "".concat(y, "px") }, e);
        } }, { key: "mainDirection", get: function() {
          switch (this.direction) {
            case "ltr":
              return "left";
            case "rtl":
              return "right";
            case "btt":
              return "bottom";
            case "ttb":
              return "top";
          }
        } }, { key: "isHorizontal", get: function() {
          return this.direction === "ltr" || this.direction === "rtl";
        } }, { key: "isReverse", get: function() {
          return this.direction === "rtl" || this.direction === "btt";
        } }, { key: "tooltipDirections", get: function() {
          var e = this.tooltipPlacement || (this.isHorizontal ? "top" : "left");
          return Array.isArray(e) ? e : this.dots.map(function() {
            return e;
          });
        } }, { key: "dots", get: function() {
          var e = this;
          return this.control.dotsPos.map(function(o, i) {
            return rt({ pos: o, index: i, value: e.control.dotsValue[i], focus: e.states.has(L.Focus) && e.focusDotIndex === i, disabled: e.disabled, style: e.dotStyle }, (Array.isArray(e.dotOptions) ? e.dotOptions[i] : e.dotOptions) || {});
          });
        } }, { key: "animateTime", get: function() {
          return this.states.has(L.Drag) ? 0 : this.duration;
        } }, { key: "canSort", get: function() {
          return this.order && !this.minRange && !this.maxRange && !this.fixed && this.enableCross;
        } }, { key: "sliderData", get: function() {
          var e = this;
          return this.isObjectArrayData(this.data) ? this.data.map(function(o) {
            return o[e.dataValue];
          }) : this.isObjectData(this.data) ? Object.keys(this.data) : this.data;
        } }, { key: "sliderMarks", get: function() {
          var e = this;
          return this.marks ? this.marks : this.isObjectArrayData(this.data) ? function(o) {
            var i = { label: o };
            return e.data.some(function(a) {
              return a[e.dataValue] === o && (i.label = a[e.dataLabel], !0);
            }), i;
          } : this.isObjectData(this.data) ? this.data : void 0;
        } }, { key: "sliderTooltipFormatter", get: function() {
          var e = this;
          if (this.tooltipFormatter)
            return this.tooltipFormatter;
          if (this.isObjectArrayData(this.data))
            return function(i) {
              var a = "" + i;
              return e.data.some(function(y) {
                return y[e.dataValue] === i && (a = y[e.dataLabel], !0);
              }), a;
            };
          if (this.isObjectData(this.data)) {
            var o = this.data;
            return function(i) {
              return o[i];
            };
          }
        } }, { key: "isNotSync", get: function() {
          var e = this.control.dotsValue;
          return Array.isArray(this.value) ? this.value.length !== e.length || this.value.some(function(o, i) {
            return o !== e[i];
          }) : this.value !== e[0];
        } }, { key: "dragRange", get: function() {
          var e = this.dots[this.focusDotIndex - 1], o = this.dots[this.focusDotIndex + 1];
          return [e ? e.pos : -1 / 0, o ? o.pos : 1 / 0];
        } }]), n;
      }(k.a);
      s([I("change", { default: 0 })], b.prototype, "value", void 0), s([c({ type: Boolean, default: !1 })], b.prototype, "silent", void 0), s([c({ default: "ltr", validator: function(r) {
        return ["ltr", "rtl", "ttb", "btt"].indexOf(r) > -1;
      } })], b.prototype, "direction", void 0), s([c({ type: [Number, String] })], b.prototype, "width", void 0), s([c({ type: [Number, String] })], b.prototype, "height", void 0), s([c({ default: 14 })], b.prototype, "dotSize", void 0), s([c({ default: !1 })], b.prototype, "contained", void 0), s([c({ type: Number, default: 0 })], b.prototype, "min", void 0), s([c({ type: Number, default: 100 })], b.prototype, "max", void 0), s([c({ type: Number, default: 1 })], b.prototype, "interval", void 0), s([c({ type: Boolean, default: !1 })], b.prototype, "disabled", void 0), s([c({ type: Boolean, default: !0 })], b.prototype, "clickable", void 0), s([c({ type: Boolean, default: !1 })], b.prototype, "dragOnClick", void 0), s([c({ type: Number, default: 0.5 })], b.prototype, "duration", void 0), s([c({ type: [Object, Array] })], b.prototype, "data", void 0), s([c({ type: String, default: "value" })], b.prototype, "dataValue", void 0), s([c({ type: String, default: "label" })], b.prototype, "dataLabel", void 0), s([c({ type: Boolean, default: !1 })], b.prototype, "lazy", void 0), s([c({ type: String, validator: function(r) {
        return ["none", "always", "focus", "hover", "active"].indexOf(r) > -1;
      }, default: "active" })], b.prototype, "tooltip", void 0), s([c({ type: [String, Array], validator: function(r) {
        return (Array.isArray(r) ? r : [r]).every(function(t) {
          return ["top", "right", "bottom", "left"].indexOf(t) > -1;
        });
      } })], b.prototype, "tooltipPlacement", void 0), s([c({ type: [String, Array, Function] })], b.prototype, "tooltipFormatter", void 0), s([c({ type: Boolean, default: !0 })], b.prototype, "useKeyboard", void 0), s([c(Function)], b.prototype, "keydownHook", void 0), s([c({ type: Boolean, default: !0 })], b.prototype, "enableCross", void 0), s([c({ type: Boolean, default: !1 })], b.prototype, "fixed", void 0), s([c({ type: Boolean, default: !0 })], b.prototype, "order", void 0), s([c(Number)], b.prototype, "minRange", void 0), s([c(Number)], b.prototype, "maxRange", void 0), s([c({ type: [Boolean, Object, Array, Function], default: !1 })], b.prototype, "marks", void 0), s([c({ type: [Boolean, Function], default: !0 })], b.prototype, "process", void 0), s([c({ type: [Number] })], b.prototype, "zoom", void 0), s([c(Boolean)], b.prototype, "included", void 0), s([c(Boolean)], b.prototype, "adsorb", void 0), s([c(Boolean)], b.prototype, "hideLabel", void 0), s([c()], b.prototype, "dotOptions", void 0), s([c()], b.prototype, "dotAttrs", void 0), s([c()], b.prototype, "railStyle", void 0), s([c()], b.prototype, "processStyle", void 0), s([c()], b.prototype, "dotStyle", void 0), s([c()], b.prototype, "tooltipStyle", void 0), s([c()], b.prototype, "stepStyle", void 0), s([c()], b.prototype, "stepActiveStyle", void 0), s([c()], b.prototype, "labelStyle", void 0), s([c()], b.prototype, "labelActiveStyle", void 0), s([T("value")], b.prototype, "onValueChanged", null), b = s([p()({ name: "VueSlider", data: function() {
        return { control: null };
      }, components: { VueSliderDot: F, VueSliderMark: ct } })], b);
      var mt = b;
      mt.VueSliderMark = ct, mt.VueSliderDot = F;
      var be = mt;
      w.default = be;
    } }).default;
  });
})(Vt);
const Re = /* @__PURE__ */ Se(Vt.exports);
export {
  Re as VueSlider
};
