(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [269],
  {
    8369: function (e, t, n) {
      "use strict";
      n.d(t, {
        Ry: function () {
          return s;
        },
      });
      var r = new WeakMap(),
        o = new WeakMap(),
        i = {},
        a = 0,
        u = function (e) {
          return e && (e.host || u(e.parentNode));
        },
        l = function (e, t, n, l) {
          var s = (Array.isArray(e) ? e : [e])
            .map(function (e) {
              if (t.contains(e)) return e;
              var n = u(e);
              return n && t.contains(n)
                ? n
                : (console.error(
                    "aria-hidden",
                    e,
                    "in not contained inside",
                    t,
                    ". Doing nothing"
                  ),
                  null);
            })
            .filter(function (e) {
              return !!e;
            });
          i[n] || (i[n] = new WeakMap());
          var c = i[n],
            d = [],
            f = new Set(),
            p = new Set(s),
            h = function (e) {
              !e || f.has(e) || (f.add(e), h(e.parentNode));
            };
          s.forEach(h);
          var m = function (e) {
            !e ||
              p.has(e) ||
              Array.prototype.forEach.call(e.children, function (e) {
                if (f.has(e)) m(e);
                else
                  try {
                    var t = e.getAttribute(l),
                      i = null !== t && "false" !== t,
                      a = (r.get(e) || 0) + 1,
                      u = (c.get(e) || 0) + 1;
                    r.set(e, a),
                      c.set(e, u),
                      d.push(e),
                      1 === a && i && o.set(e, !0),
                      1 === u && e.setAttribute(n, "true"),
                      i || e.setAttribute(l, "true");
                  } catch (t) {
                    console.error("aria-hidden: cannot operate on ", e, t);
                  }
              });
          };
          return (
            m(t),
            f.clear(),
            a++,
            function () {
              d.forEach(function (e) {
                var t = r.get(e) - 1,
                  i = c.get(e) - 1;
                r.set(e, t),
                  c.set(e, i),
                  t || (o.has(e) || e.removeAttribute(l), o.delete(e)),
                  i || e.removeAttribute(n);
              }),
                --a ||
                  ((r = new WeakMap()),
                  (r = new WeakMap()),
                  (o = new WeakMap()),
                  (i = {}));
            }
          );
        },
        s = function (e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var r = Array.from(Array.isArray(e) ? e : [e]),
            o =
              t ||
              ("undefined" == typeof document
                ? null
                : (Array.isArray(e) ? e[0] : e).ownerDocument.body);
          return o
            ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
              l(r, o, n, "aria-hidden"))
            : function () {
                return null;
              };
        };
    },
    42: function (e, t, n) {
      "use strict";
      var r = n(5786),
        o = { "text/plain": "Text", "text/html": "Url", default: "Text" };
      e.exports = function (e, t) {
        var n,
          i,
          a,
          u,
          l,
          s,
          c,
          d,
          f = !1;
        t || (t = {}), (a = t.debug || !1);
        try {
          if (
            ((l = r()),
            (s = document.createRange()),
            (c = document.getSelection()),
            ((d = document.createElement("span")).textContent = e),
            (d.ariaHidden = "true"),
            (d.style.all = "unset"),
            (d.style.position = "fixed"),
            (d.style.top = 0),
            (d.style.clip = "rect(0, 0, 0, 0)"),
            (d.style.whiteSpace = "pre"),
            (d.style.webkitUserSelect = "text"),
            (d.style.MozUserSelect = "text"),
            (d.style.msUserSelect = "text"),
            (d.style.userSelect = "text"),
            d.addEventListener("copy", function (n) {
              if ((n.stopPropagation(), t.format)) {
                if ((n.preventDefault(), void 0 === n.clipboardData)) {
                  a && console.warn("unable to use e.clipboardData"),
                    a && console.warn("trying IE specific stuff"),
                    window.clipboardData.clearData();
                  var r = o[t.format] || o.default;
                  window.clipboardData.setData(r, e);
                } else
                  n.clipboardData.clearData(),
                    n.clipboardData.setData(t.format, e);
              }
              t.onCopy && (n.preventDefault(), t.onCopy(n.clipboardData));
            }),
            document.body.appendChild(d),
            s.selectNodeContents(d),
            c.addRange(s),
            !document.execCommand("copy"))
          )
            throw Error("copy command was unsuccessful");
          f = !0;
        } catch (r) {
          a && console.error("unable to copy using execCommand: ", r),
            a && console.warn("trying IE specific stuff");
          try {
            window.clipboardData.setData(t.format || "text", e),
              t.onCopy && t.onCopy(window.clipboardData),
              (f = !0);
          } catch (r) {
            a && console.error("unable to copy using clipboardData: ", r),
              a && console.error("falling back to prompt"),
              (n =
                "message" in t
                  ? t.message
                  : "Copy to clipboard: #{key}, Enter"),
              (i =
                (/mac os x/i.test(navigator.userAgent) ? "⌘" : "Ctrl") + "+C"),
              (u = n.replace(/#{\s*key\s*}/g, i)),
              window.prompt(u, e);
          }
        } finally {
          c &&
            ("function" == typeof c.removeRange
              ? c.removeRange(s)
              : c.removeAllRanges()),
            d && document.body.removeChild(d),
            l();
        }
        return f;
      };
    },
    6648: function (e, t, n) {
      "use strict";
      n.d(t, {
        default: function () {
          return o.a;
        },
      });
      var r = n(5601),
        o = n.n(r);
    },
    844: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "addLocale", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        n(8157);
      let r = function (e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        return e;
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    5944: function (e, t, n) {
      "use strict";
      function r(e, t, n, r) {
        return !1;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getDomainLocale", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        n(8157),
        ("function" == typeof t.default ||
          ("object" == typeof t.default && null !== t.default)) &&
          void 0 === t.default.__esModule &&
          (Object.defineProperty(t.default, "__esModule", { value: !0 }),
          Object.assign(t.default, t),
          (e.exports = t.default));
    },
    8173: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return b;
          },
        });
      let r = n(9920),
        o = n(1452),
        i = n(7437),
        a = o._(n(2265)),
        u = r._(n(4887)),
        l = r._(n(8321)),
        s = n(497),
        c = n(7103),
        d = n(3938);
      n(2301);
      let f = n(291),
        p = r._(n(1241)),
        h = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function m(e, t, n, r, o, i, a) {
        let u = null == e ? void 0 : e.src;
        e &&
          e["data-loaded-src"] !== u &&
          ((e["data-loaded-src"] = u),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (e.parentElement && e.isConnected) {
                if (("empty" !== t && o(!0), null == n ? void 0 : n.current)) {
                  let t = new Event("load");
                  Object.defineProperty(t, "target", {
                    writable: !1,
                    value: e,
                  });
                  let r = !1,
                    o = !1;
                  n.current({
                    ...t,
                    nativeEvent: t,
                    currentTarget: e,
                    target: e,
                    isDefaultPrevented: () => r,
                    isPropagationStopped: () => o,
                    persist: () => {},
                    preventDefault: () => {
                      (r = !0), t.preventDefault();
                    },
                    stopPropagation: () => {
                      (o = !0), t.stopPropagation();
                    },
                  });
                }
                (null == r ? void 0 : r.current) && r.current(e);
              }
            }));
      }
      function v(e) {
        return a.use ? { fetchPriority: e } : { fetchpriority: e };
      }
      "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
      let g = (0, a.forwardRef)((e, t) => {
        let {
          src: n,
          srcSet: r,
          sizes: o,
          height: u,
          width: l,
          decoding: s,
          className: c,
          style: d,
          fetchPriority: f,
          placeholder: p,
          loading: h,
          unoptimized: g,
          fill: y,
          onLoadRef: b,
          onLoadingCompleteRef: w,
          setBlurComplete: E,
          setShowAltText: x,
          sizesInput: P,
          onLoad: C,
          onError: S,
          ...R
        } = e;
        return (0, i.jsx)("img", {
          ...R,
          ...v(f),
          loading: h,
          width: l,
          height: u,
          decoding: s,
          "data-nimg": y ? "fill" : "1",
          className: c,
          style: d,
          sizes: o,
          srcSet: r,
          src: n,
          ref: (0, a.useCallback)(
            (e) => {
              t &&
                ("function" == typeof t
                  ? t(e)
                  : "object" == typeof t && (t.current = e)),
                e &&
                  (S && (e.src = e.src), e.complete && m(e, p, b, w, E, g, P));
            },
            [n, p, b, w, E, S, g, P, t]
          ),
          onLoad: (e) => {
            m(e.currentTarget, p, b, w, E, g, P);
          },
          onError: (e) => {
            x(!0), "empty" !== p && E(!0), S && S(e);
          },
        });
      });
      function y(e) {
        let { isAppRouter: t, imgAttributes: n } = e,
          r = {
            as: "image",
            imageSrcSet: n.srcSet,
            imageSizes: n.sizes,
            crossOrigin: n.crossOrigin,
            referrerPolicy: n.referrerPolicy,
            ...v(n.fetchPriority),
          };
        return t && u.default.preload
          ? (u.default.preload(n.src, r), null)
          : (0, i.jsx)(l.default, {
              children: (0, i.jsx)(
                "link",
                { rel: "preload", href: n.srcSet ? void 0 : n.src, ...r },
                "__nimg-" + n.src + n.srcSet + n.sizes
              ),
            });
      }
      let b = (0, a.forwardRef)((e, t) => {
        let n = (0, a.useContext)(f.RouterContext),
          r = (0, a.useContext)(d.ImageConfigContext),
          o = (0, a.useMemo)(() => {
            let e = h || r || c.imageConfigDefault,
              t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
              n = e.deviceSizes.sort((e, t) => e - t);
            return { ...e, allSizes: t, deviceSizes: n };
          }, [r]),
          { onLoad: u, onLoadingComplete: l } = e,
          m = (0, a.useRef)(u);
        (0, a.useEffect)(() => {
          m.current = u;
        }, [u]);
        let v = (0, a.useRef)(l);
        (0, a.useEffect)(() => {
          v.current = l;
        }, [l]);
        let [b, w] = (0, a.useState)(!1),
          [E, x] = (0, a.useState)(!1),
          { props: P, meta: C } = (0, s.getImgProps)(e, {
            defaultLoader: p.default,
            imgConf: o,
            blurComplete: b,
            showAltText: E,
          });
        return (0, i.jsxs)(i.Fragment, {
          children: [
            (0, i.jsx)(g, {
              ...P,
              unoptimized: C.unoptimized,
              placeholder: C.placeholder,
              fill: C.fill,
              onLoadRef: m,
              onLoadingCompleteRef: v,
              setBlurComplete: w,
              setShowAltText: x,
              sizesInput: e.sizes,
              ref: t,
            }),
            C.priority
              ? (0, i.jsx)(y, { isAppRouter: !n, imgAttributes: P })
              : null,
          ],
        });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    231: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return w;
          },
        });
      let r = n(9920),
        o = n(7437),
        i = r._(n(2265)),
        a = n(8016),
        u = n(8029),
        l = n(1142),
        s = n(3461),
        c = n(844),
        d = n(291),
        f = n(4467),
        p = n(3106),
        h = n(5944),
        m = n(4897),
        v = n(1507),
        g = new Set();
      function y(e, t, n, r, o, i) {
        if ("undefined" != typeof window && (i || (0, u.isLocalURL)(t))) {
          if (!r.bypassPrefetchedCheck) {
            let o =
              t +
              "%" +
              n +
              "%" +
              (void 0 !== r.locale
                ? r.locale
                : "locale" in e
                ? e.locale
                : void 0);
            if (g.has(o)) return;
            g.add(o);
          }
          (async () => (i ? e.prefetch(t, o) : e.prefetch(t, n, r)))().catch(
            (e) => {}
          );
        }
      }
      function b(e) {
        return "string" == typeof e ? e : (0, l.formatUrl)(e);
      }
      let w = i.default.forwardRef(function (e, t) {
        let n, r;
        let {
          href: l,
          as: g,
          children: w,
          prefetch: E = null,
          passHref: x,
          replace: P,
          shallow: C,
          scroll: S,
          locale: R,
          onClick: O,
          onMouseEnter: j,
          onTouchStart: _,
          legacyBehavior: M = !1,
          ...N
        } = e;
        (n = w),
          M &&
            ("string" == typeof n || "number" == typeof n) &&
            (n = (0, o.jsx)("a", { children: n }));
        let A = i.default.useContext(d.RouterContext),
          k = i.default.useContext(f.AppRouterContext),
          T = null != A ? A : k,
          I = !A,
          L = !1 !== E,
          D = null === E ? v.PrefetchKind.AUTO : v.PrefetchKind.FULL,
          { href: W, as: F } = i.default.useMemo(() => {
            if (!A) {
              let e = b(l);
              return { href: e, as: g ? b(g) : e };
            }
            let [e, t] = (0, a.resolveHref)(A, l, !0);
            return { href: e, as: g ? (0, a.resolveHref)(A, g) : t || e };
          }, [A, l, g]),
          U = i.default.useRef(W),
          z = i.default.useRef(F);
        M && (r = i.default.Children.only(n));
        let B = M ? r && "object" == typeof r && r.ref : t,
          [V, Y, K] = (0, p.useIntersection)({ rootMargin: "200px" }),
          H = i.default.useCallback(
            (e) => {
              (z.current !== F || U.current !== W) &&
                (K(), (z.current = F), (U.current = W)),
                V(e),
                B &&
                  ("function" == typeof B
                    ? B(e)
                    : "object" == typeof B && (B.current = e));
            },
            [F, B, W, K, V]
          );
        i.default.useEffect(() => {
          T && Y && L && y(T, W, F, { locale: R }, { kind: D }, I);
        }, [F, W, Y, R, L, null == A ? void 0 : A.locale, T, I, D]);
        let $ = {
          ref: H,
          onClick(e) {
            M || "function" != typeof O || O(e),
              M &&
                r.props &&
                "function" == typeof r.props.onClick &&
                r.props.onClick(e),
              T &&
                !e.defaultPrevented &&
                (function (e, t, n, r, o, a, l, s, c) {
                  let { nodeName: d } = e.currentTarget;
                  if (
                    "A" === d.toUpperCase() &&
                    ((function (e) {
                      let t = e.currentTarget.getAttribute("target");
                      return (
                        (t && "_self" !== t) ||
                        e.metaKey ||
                        e.ctrlKey ||
                        e.shiftKey ||
                        e.altKey ||
                        (e.nativeEvent && 2 === e.nativeEvent.which)
                      );
                    })(e) ||
                      (!c && !(0, u.isLocalURL)(n)))
                  )
                    return;
                  e.preventDefault();
                  let f = () => {
                    let e = null == l || l;
                    "beforePopState" in t
                      ? t[o ? "replace" : "push"](n, r, {
                          shallow: a,
                          locale: s,
                          scroll: e,
                        })
                      : t[o ? "replace" : "push"](r || n, { scroll: e });
                  };
                  c ? i.default.startTransition(f) : f();
                })(e, T, W, F, P, C, S, R, I);
          },
          onMouseEnter(e) {
            M || "function" != typeof j || j(e),
              M &&
                r.props &&
                "function" == typeof r.props.onMouseEnter &&
                r.props.onMouseEnter(e),
              T &&
                (L || !I) &&
                y(
                  T,
                  W,
                  F,
                  { locale: R, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: D },
                  I
                );
          },
          onTouchStart: function (e) {
            M || "function" != typeof _ || _(e),
              M &&
                r.props &&
                "function" == typeof r.props.onTouchStart &&
                r.props.onTouchStart(e),
              T &&
                (L || !I) &&
                y(
                  T,
                  W,
                  F,
                  { locale: R, priority: !0, bypassPrefetchedCheck: !0 },
                  { kind: D },
                  I
                );
          },
        };
        if ((0, s.isAbsoluteUrl)(F)) $.href = F;
        else if (!M || x || ("a" === r.type && !("href" in r.props))) {
          let e = void 0 !== R ? R : null == A ? void 0 : A.locale,
            t =
              (null == A ? void 0 : A.isLocaleDomain) &&
              (0, h.getDomainLocale)(
                F,
                e,
                null == A ? void 0 : A.locales,
                null == A ? void 0 : A.domainLocales
              );
          $.href =
            t ||
            (0, m.addBasePath)(
              (0, c.addLocale)(F, e, null == A ? void 0 : A.defaultLocale)
            );
        }
        return M
          ? i.default.cloneElement(r, $)
          : (0, o.jsx)("a", { ...N, ...$, children: n });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    8016: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "resolveHref", {
          enumerable: !0,
          get: function () {
            return d;
          },
        });
      let r = n(8323),
        o = n(1142),
        i = n(5519),
        a = n(3461),
        u = n(8157),
        l = n(8029),
        s = n(9195),
        c = n(20);
      function d(e, t, n) {
        let d;
        let f = "string" == typeof t ? t : (0, o.formatWithValidation)(t),
          p = f.match(/^[a-zA-Z]{1,}:\/\//),
          h = p ? f.slice(p[0].length) : f;
        if ((h.split("?", 1)[0] || "").match(/(\/\/|\\)/)) {
          console.error(
            "Invalid href '" +
              f +
              "' passed to next/router in page: '" +
              e.pathname +
              "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href."
          );
          let t = (0, a.normalizeRepeatedSlashes)(h);
          f = (p ? p[0] : "") + t;
        }
        if (!(0, l.isLocalURL)(f)) return n ? [f] : f;
        try {
          d = new URL(f.startsWith("#") ? e.asPath : e.pathname, "http://n");
        } catch (e) {
          d = new URL("/", "http://n");
        }
        try {
          let e = new URL(f, d);
          e.pathname = (0, u.normalizePathTrailingSlash)(e.pathname);
          let t = "";
          if ((0, s.isDynamicRoute)(e.pathname) && e.searchParams && n) {
            let n = (0, r.searchParamsToUrlQuery)(e.searchParams),
              { result: a, params: u } = (0, c.interpolateAs)(
                e.pathname,
                e.pathname,
                n
              );
            a &&
              (t = (0, o.formatWithValidation)({
                pathname: a,
                hash: e.hash,
                query: (0, i.omit)(n, u),
              }));
          }
          let a =
            e.origin === d.origin ? e.href.slice(e.origin.length) : e.href;
          return n ? [a, t || a] : a;
        } catch (e) {
          return n ? [f] : f;
        }
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    3106: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "useIntersection", {
          enumerable: !0,
          get: function () {
            return l;
          },
        });
      let r = n(2265),
        o = n(9189),
        i = "function" == typeof IntersectionObserver,
        a = new Map(),
        u = [];
      function l(e) {
        let { rootRef: t, rootMargin: n, disabled: l } = e,
          s = l || !i,
          [c, d] = (0, r.useState)(!1),
          f = (0, r.useRef)(null),
          p = (0, r.useCallback)((e) => {
            f.current = e;
          }, []);
        return (
          (0, r.useEffect)(() => {
            if (i) {
              if (s || c) return;
              let e = f.current;
              if (e && e.tagName)
                return (function (e, t, n) {
                  let {
                    id: r,
                    observer: o,
                    elements: i,
                  } = (function (e) {
                    let t;
                    let n = {
                        root: e.root || null,
                        margin: e.rootMargin || "",
                      },
                      r = u.find(
                        (e) => e.root === n.root && e.margin === n.margin
                      );
                    if (r && (t = a.get(r))) return t;
                    let o = new Map();
                    return (
                      (t = {
                        id: n,
                        observer: new IntersectionObserver((e) => {
                          e.forEach((e) => {
                            let t = o.get(e.target),
                              n = e.isIntersecting || e.intersectionRatio > 0;
                            t && n && t(n);
                          });
                        }, e),
                        elements: o,
                      }),
                      u.push(n),
                      a.set(n, t),
                      t
                    );
                  })(n);
                  return (
                    i.set(e, t),
                    o.observe(e),
                    function () {
                      if ((i.delete(e), o.unobserve(e), 0 === i.size)) {
                        o.disconnect(), a.delete(r);
                        let e = u.findIndex(
                          (e) => e.root === r.root && e.margin === r.margin
                        );
                        e > -1 && u.splice(e, 1);
                      }
                    }
                  );
                })(e, (e) => e && d(e), {
                  root: null == t ? void 0 : t.current,
                  rootMargin: n,
                });
            } else if (!c) {
              let e = (0, o.requestIdleCallback)(() => d(!0));
              return () => (0, o.cancelIdleCallback)(e);
            }
          }, [s, n, t, c, f.current]),
          [
            p,
            c,
            (0, r.useCallback)(() => {
              d(!1);
            }, []),
          ]
        );
      }
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    2901: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = n(9920)._(n(2265)).default.createContext({});
    },
    687: function (e, t) {
      "use strict";
      function n(e) {
        let {
          ampFirst: t = !1,
          hybrid: n = !1,
          hasQuery: r = !1,
        } = void 0 === e ? {} : e;
        return t || (n && r);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    1943: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "escapeStringRegexp", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = /[|\\{}()[\]^$+*?.-]/,
        r = /[|\\{}()[\]^$+*?.-]/g;
      function o(e) {
        return n.test(e) ? e.replace(r, "\\$&") : e;
      }
    },
    497: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return u;
          },
        }),
        n(2301);
      let r = n(1564),
        o = n(7103);
      function i(e) {
        return void 0 !== e.default;
      }
      function a(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function u(e, t) {
        var n;
        let u,
          l,
          s,
          {
            src: c,
            sizes: d,
            unoptimized: f = !1,
            priority: p = !1,
            loading: h,
            className: m,
            quality: v,
            width: g,
            height: y,
            fill: b = !1,
            style: w,
            overrideSrc: E,
            onLoad: x,
            onLoadingComplete: P,
            placeholder: C = "empty",
            blurDataURL: S,
            fetchPriority: R,
            layout: O,
            objectFit: j,
            objectPosition: _,
            lazyBoundary: M,
            lazyRoot: N,
            ...A
          } = e,
          { imgConf: k, showAltText: T, blurComplete: I, defaultLoader: L } = t,
          D = k || o.imageConfigDefault;
        if ("allSizes" in D) u = D;
        else {
          let e = [...D.deviceSizes, ...D.imageSizes].sort((e, t) => e - t),
            t = D.deviceSizes.sort((e, t) => e - t);
          u = { ...D, allSizes: e, deviceSizes: t };
        }
        if (void 0 === L)
          throw Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
          );
        let W = A.loader || L;
        delete A.loader, delete A.srcSet;
        let F = "__next_img_default" in W;
        if (F) {
          if ("custom" === u.loader)
            throw Error(
              'Image with src "' +
                c +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          let e = W;
          W = (t) => {
            let { config: n, ...r } = t;
            return e(r);
          };
        }
        if (O) {
          "fill" === O && (b = !0);
          let e = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[O];
          e && (w = { ...w, ...e });
          let t = { responsive: "100vw", fill: "100vw" }[O];
          t && !d && (d = t);
        }
        let U = "",
          z = a(g),
          B = a(y);
        if ("object" == typeof (n = c) && (i(n) || void 0 !== n.src)) {
          let e = i(c) ? c.default : c;
          if (!e.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(e)
            );
          if (!e.height || !e.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(e)
            );
          if (
            ((l = e.blurWidth),
            (s = e.blurHeight),
            (S = S || e.blurDataURL),
            (U = e.src),
            !b)
          ) {
            if (z || B) {
              if (z && !B) {
                let t = z / e.width;
                B = Math.round(e.height * t);
              } else if (!z && B) {
                let t = B / e.height;
                z = Math.round(e.width * t);
              }
            } else (z = e.width), (B = e.height);
          }
        }
        let V = !p && ("lazy" === h || void 0 === h);
        (!(c = "string" == typeof c ? c : U) ||
          c.startsWith("data:") ||
          c.startsWith("blob:")) &&
          ((f = !0), (V = !1)),
          u.unoptimized && (f = !0),
          F && c.endsWith(".svg") && !u.dangerouslyAllowSVG && (f = !0),
          p && (R = "high");
        let Y = a(v),
          K = Object.assign(
            b
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: j,
                  objectPosition: _,
                }
              : {},
            T ? {} : { color: "transparent" },
            w
          ),
          H =
            I || "empty" === C
              ? null
              : "blur" === C
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, r.getImageBlurSvg)({
                  widthInt: z,
                  heightInt: B,
                  blurWidth: l,
                  blurHeight: s,
                  blurDataURL: S || "",
                  objectFit: K.objectFit,
                }) +
                '")'
              : 'url("' + C + '")',
          $ = H
            ? {
                backgroundSize: K.objectFit || "cover",
                backgroundPosition: K.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: H,
              }
            : {},
          q = (function (e) {
            let {
              config: t,
              src: n,
              unoptimized: r,
              width: o,
              quality: i,
              sizes: a,
              loader: u,
            } = e;
            if (r) return { src: n, srcSet: void 0, sizes: void 0 };
            let { widths: l, kind: s } = (function (e, t, n) {
                let { deviceSizes: r, allSizes: o } = e;
                if (n) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    t = [];
                  for (let r; (r = e.exec(n)); r) t.push(parseInt(r[2]));
                  if (t.length) {
                    let e = 0.01 * Math.min(...t);
                    return {
                      widths: o.filter((t) => t >= r[0] * e),
                      kind: "w",
                    };
                  }
                  return { widths: o, kind: "w" };
                }
                return "number" != typeof t
                  ? { widths: r, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [t, 2 * t].map(
                            (e) => o.find((t) => t >= e) || o[o.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(t, o, a),
              c = l.length - 1;
            return {
              sizes: a || "w" !== s ? a : "100vw",
              srcSet: l
                .map(
                  (e, r) =>
                    u({ config: t, src: n, quality: i, width: e }) +
                    " " +
                    ("w" === s ? e : r + 1) +
                    s
                )
                .join(", "),
              src: u({ config: t, src: n, quality: i, width: l[c] }),
            };
          })({
            config: u,
            src: c,
            unoptimized: f,
            width: z,
            quality: Y,
            sizes: d,
            loader: W,
          });
        return {
          props: {
            ...A,
            loading: V ? "lazy" : h,
            fetchPriority: R,
            width: z,
            height: B,
            decoding: "async",
            className: m,
            style: { ...K, ...$ },
            sizes: q.sizes,
            srcSet: q.srcSet,
            src: E || q.src,
          },
          meta: { unoptimized: f, priority: p, placeholder: C, fill: b },
        };
      }
    },
    8321: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return m;
          },
          defaultHead: function () {
            return d;
          },
        });
      let r = n(9920),
        o = n(1452),
        i = n(7437),
        a = o._(n(2265)),
        u = r._(n(5960)),
        l = n(2901),
        s = n(6590),
        c = n(687);
      function d(e) {
        void 0 === e && (e = !1);
        let t = [(0, i.jsx)("meta", { charSet: "utf-8" })];
        return (
          e ||
            t.push(
              (0, i.jsx)("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          t
        );
      }
      function f(e, t) {
        return "string" == typeof t || "number" == typeof t
          ? e
          : t.type === a.default.Fragment
          ? e.concat(
              a.default.Children.toArray(t.props.children).reduce(
                (e, t) =>
                  "string" == typeof t || "number" == typeof t
                    ? e
                    : e.concat(t),
                []
              )
            )
          : e.concat(t);
      }
      n(2301);
      let p = ["name", "httpEquiv", "charSet", "itemProp"];
      function h(e, t) {
        let { inAmpMode: n } = t;
        return e
          .reduce(f, [])
          .reverse()
          .concat(d(n).reverse())
          .filter(
            (function () {
              let e = new Set(),
                t = new Set(),
                n = new Set(),
                r = {};
              return (o) => {
                let i = !0,
                  a = !1;
                if (
                  o.key &&
                  "number" != typeof o.key &&
                  o.key.indexOf("$") > 0
                ) {
                  a = !0;
                  let t = o.key.slice(o.key.indexOf("$") + 1);
                  e.has(t) ? (i = !1) : e.add(t);
                }
                switch (o.type) {
                  case "title":
                  case "base":
                    t.has(o.type) ? (i = !1) : t.add(o.type);
                    break;
                  case "meta":
                    for (let e = 0, t = p.length; e < t; e++) {
                      let t = p[e];
                      if (o.props.hasOwnProperty(t)) {
                        if ("charSet" === t) n.has(t) ? (i = !1) : n.add(t);
                        else {
                          let e = o.props[t],
                            n = r[t] || new Set();
                          ("name" !== t || !a) && n.has(e)
                            ? (i = !1)
                            : (n.add(e), (r[t] = n));
                        }
                      }
                    }
                }
                return i;
              };
            })()
          )
          .reverse()
          .map((e, t) => {
            let r = e.key || t;
            if (
              !n &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((t) => e.props.href.startsWith(t))
            ) {
              let t = { ...(e.props || {}) };
              return (
                (t["data-href"] = t.href),
                (t.href = void 0),
                (t["data-optimized-fonts"] = !0),
                a.default.cloneElement(e, t)
              );
            }
            return a.default.cloneElement(e, { key: r });
          });
      }
      let m = function (e) {
        let { children: t } = e,
          n = (0, a.useContext)(l.AmpStateContext),
          r = (0, a.useContext)(s.HeadManagerContext);
        return (0, i.jsx)(u.default, {
          reduceComponentsToState: h,
          headManager: r,
          inAmpMode: (0, c.isInAmpMode)(n),
          children: t,
        });
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    1564: function (e, t) {
      "use strict";
      function n(e) {
        let {
            widthInt: t,
            heightInt: n,
            blurWidth: r,
            blurHeight: o,
            blurDataURL: i,
            objectFit: a,
          } = e,
          u = r ? 40 * r : t,
          l = o ? 40 * o : n,
          s = u && l ? "viewBox='0 0 " + u + " " + l + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          s +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (s
            ? "none"
            : "contain" === a
            ? "xMidYMid"
            : "cover" === a
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          i +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    3938: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let r = n(9920)._(n(2265)),
        o = n(7103),
        i = r.default.createContext(o.imageConfigDefault);
    },
    7103: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          VALID_LOADERS: function () {
            return n;
          },
          imageConfigDefault: function () {
            return r;
          },
        });
      let n = ["default", "imgix", "cloudinary", "akamai", "custom"],
        r = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "inline",
          remotePatterns: [],
          unoptimized: !1,
        };
    },
    5601: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          default: function () {
            return l;
          },
          getImageProps: function () {
            return u;
          },
        });
      let r = n(9920),
        o = n(497),
        i = n(8173),
        a = r._(n(1241));
      function u(e) {
        let { props: t } = (0, o.getImgProps)(e, {
          defaultLoader: a.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [e, n] of Object.entries(t)) void 0 === n && delete t[e];
        return { props: t };
      }
      let l = i.Image;
    },
    1241: function (e, t) {
      "use strict";
      function n(e) {
        let { config: t, src: n, width: r, quality: o } = e;
        return n;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return r;
          },
        }),
        (n.__next_img_default = !0);
      let r = n;
    },
    291: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "RouterContext", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      let r = n(9920)._(n(2265)).default.createContext(null);
    },
    1142: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          formatUrl: function () {
            return i;
          },
          formatWithValidation: function () {
            return u;
          },
          urlObjectKeys: function () {
            return a;
          },
        });
      let r = n(1452)._(n(8323)),
        o = /https?|ftp|gopher|file/;
      function i(e) {
        let { auth: t, hostname: n } = e,
          i = e.protocol || "",
          a = e.pathname || "",
          u = e.hash || "",
          l = e.query || "",
          s = !1;
        (t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : ""),
          e.host
            ? (s = t + e.host)
            : n &&
              ((s = t + (~n.indexOf(":") ? "[" + n + "]" : n)),
              e.port && (s += ":" + e.port)),
          l &&
            "object" == typeof l &&
            (l = String(r.urlQueryToSearchParams(l)));
        let c = e.search || (l && "?" + l) || "";
        return (
          i && !i.endsWith(":") && (i += ":"),
          e.slashes || ((!i || o.test(i)) && !1 !== s)
            ? ((s = "//" + (s || "")), a && "/" !== a[0] && (a = "/" + a))
            : s || (s = ""),
          u && "#" !== u[0] && (u = "#" + u),
          c && "?" !== c[0] && (c = "?" + c),
          "" +
            i +
            s +
            (a = a.replace(/[?#]/g, encodeURIComponent)) +
            (c = c.replace("#", "%23")) +
            u
        );
      }
      let a = [
        "auth",
        "hash",
        "host",
        "hostname",
        "href",
        "path",
        "pathname",
        "port",
        "protocol",
        "query",
        "search",
        "slashes",
      ];
      function u(e) {
        return i(e);
      }
    },
    9195: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          getSortedRoutes: function () {
            return r.getSortedRoutes;
          },
          isDynamicRoute: function () {
            return o.isDynamicRoute;
          },
        });
      let r = n(9089),
        o = n(8083);
    },
    20: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "interpolateAs", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let r = n(1533),
        o = n(3169);
      function i(e, t, n) {
        let i = "",
          a = (0, o.getRouteRegex)(e),
          u = a.groups,
          l = (t !== e ? (0, r.getRouteMatcher)(a)(t) : "") || n;
        i = e;
        let s = Object.keys(u);
        return (
          s.every((e) => {
            let t = l[e] || "",
              { repeat: n, optional: r } = u[e],
              o = "[" + (n ? "..." : "") + e + "]";
            return (
              r && (o = (t ? "" : "/") + "[" + o + "]"),
              n && !Array.isArray(t) && (t = [t]),
              (r || e in l) &&
                (i =
                  i.replace(
                    o,
                    n
                      ? t.map((e) => encodeURIComponent(e)).join("/")
                      : encodeURIComponent(t)
                  ) || "/")
            );
          }) || (i = ""),
          { params: s, result: i }
        );
      }
    },
    8083: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isDynamicRoute", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let r = n(2269),
        o = /\/\[[^/]+?\](?=\/|$)/;
      function i(e) {
        return (
          (0, r.isInterceptionRouteAppPath)(e) &&
            (e = (0, r.extractInterceptionRouteInformation)(
              e
            ).interceptedRoute),
          o.test(e)
        );
      }
    },
    8029: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isLocalURL", {
          enumerable: !0,
          get: function () {
            return i;
          },
        });
      let r = n(3461),
        o = n(9404);
      function i(e) {
        if (!(0, r.isAbsoluteUrl)(e)) return !0;
        try {
          let t = (0, r.getLocationOrigin)(),
            n = new URL(e, t);
          return n.origin === t && (0, o.hasBasePath)(n.pathname);
        } catch (e) {
          return !1;
        }
      }
    },
    5519: function (e, t) {
      "use strict";
      function n(e, t) {
        let n = {};
        return (
          Object.keys(e).forEach((r) => {
            t.includes(r) || (n[r] = e[r]);
          }),
          n
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "omit", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
    },
    8323: function (e, t) {
      "use strict";
      function n(e) {
        let t = {};
        return (
          e.forEach((e, n) => {
            void 0 === t[n]
              ? (t[n] = e)
              : Array.isArray(t[n])
              ? t[n].push(e)
              : (t[n] = [t[n], e]);
          }),
          t
        );
      }
      function r(e) {
        return "string" != typeof e &&
          ("number" != typeof e || isNaN(e)) &&
          "boolean" != typeof e
          ? ""
          : String(e);
      }
      function o(e) {
        let t = new URLSearchParams();
        return (
          Object.entries(e).forEach((e) => {
            let [n, o] = e;
            Array.isArray(o)
              ? o.forEach((e) => t.append(n, r(e)))
              : t.set(n, r(o));
          }),
          t
        );
      }
      function i(e) {
        for (
          var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        return (
          n.forEach((t) => {
            Array.from(t.keys()).forEach((t) => e.delete(t)),
              t.forEach((t, n) => e.append(n, t));
          }),
          e
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          assign: function () {
            return i;
          },
          searchParamsToUrlQuery: function () {
            return n;
          },
          urlQueryToSearchParams: function () {
            return o;
          },
        });
    },
    1533: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getRouteMatcher", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let r = n(3461);
      function o(e) {
        let { re: t, groups: n } = e;
        return (e) => {
          let o = t.exec(e);
          if (!o) return !1;
          let i = (e) => {
              try {
                return decodeURIComponent(e);
              } catch (e) {
                throw new r.DecodeError("failed to decode param");
              }
            },
            a = {};
          return (
            Object.keys(n).forEach((e) => {
              let t = n[e],
                r = o[t.pos];
              void 0 !== r &&
                (a[e] = ~r.indexOf("/")
                  ? r.split("/").map((e) => i(e))
                  : t.repeat
                  ? [i(r)]
                  : i(r));
            }),
            a
          );
        };
      }
    },
    3169: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          getNamedMiddlewareRegex: function () {
            return f;
          },
          getNamedRouteRegex: function () {
            return d;
          },
          getRouteRegex: function () {
            return l;
          },
        });
      let r = n(2269),
        o = n(1943),
        i = n(7741);
      function a(e) {
        let t = e.startsWith("[") && e.endsWith("]");
        t && (e = e.slice(1, -1));
        let n = e.startsWith("...");
        return n && (e = e.slice(3)), { key: e, repeat: n, optional: t };
      }
      function u(e) {
        let t = (0, i.removeTrailingSlash)(e).slice(1).split("/"),
          n = {},
          u = 1;
        return {
          parameterizedRoute: t
            .map((e) => {
              let t = r.INTERCEPTION_ROUTE_MARKERS.find((t) => e.startsWith(t)),
                i = e.match(/\[((?:\[.*\])|.+)\]/);
              if (t && i) {
                let { key: e, optional: r, repeat: l } = a(i[1]);
                return (
                  (n[e] = { pos: u++, repeat: l, optional: r }),
                  "/" + (0, o.escapeStringRegexp)(t) + "([^/]+?)"
                );
              }
              if (!i) return "/" + (0, o.escapeStringRegexp)(e);
              {
                let { key: e, repeat: t, optional: r } = a(i[1]);
                return (
                  (n[e] = { pos: u++, repeat: t, optional: r }),
                  t ? (r ? "(?:/(.+?))?" : "/(.+?)") : "/([^/]+?)"
                );
              }
            })
            .join(""),
          groups: n,
        };
      }
      function l(e) {
        let { parameterizedRoute: t, groups: n } = u(e);
        return { re: RegExp("^" + t + "(?:/)?$"), groups: n };
      }
      function s(e) {
        let {
            interceptionMarker: t,
            getSafeRouteKey: n,
            segment: r,
            routeKeys: i,
            keyPrefix: u,
          } = e,
          { key: l, optional: s, repeat: c } = a(r),
          d = l.replace(/\W/g, "");
        u && (d = "" + u + d);
        let f = !1;
        (0 === d.length || d.length > 30) && (f = !0),
          isNaN(parseInt(d.slice(0, 1))) || (f = !0),
          f && (d = n()),
          u ? (i[d] = "" + u + l) : (i[d] = l);
        let p = t ? (0, o.escapeStringRegexp)(t) : "";
        return c
          ? s
            ? "(?:/" + p + "(?<" + d + ">.+?))?"
            : "/" + p + "(?<" + d + ">.+?)"
          : "/" + p + "(?<" + d + ">[^/]+?)";
      }
      function c(e, t) {
        let n;
        let a = (0, i.removeTrailingSlash)(e).slice(1).split("/"),
          u =
            ((n = 0),
            () => {
              let e = "",
                t = ++n;
              for (; t > 0; )
                (e += String.fromCharCode(97 + ((t - 1) % 26))),
                  (t = Math.floor((t - 1) / 26));
              return e;
            }),
          l = {};
        return {
          namedParameterizedRoute: a
            .map((e) => {
              let n = r.INTERCEPTION_ROUTE_MARKERS.some((t) => e.startsWith(t)),
                i = e.match(/\[((?:\[.*\])|.+)\]/);
              if (n && i) {
                let [n] = e.split(i[0]);
                return s({
                  getSafeRouteKey: u,
                  interceptionMarker: n,
                  segment: i[1],
                  routeKeys: l,
                  keyPrefix: t ? "nxtI" : void 0,
                });
              }
              return i
                ? s({
                    getSafeRouteKey: u,
                    segment: i[1],
                    routeKeys: l,
                    keyPrefix: t ? "nxtP" : void 0,
                  })
                : "/" + (0, o.escapeStringRegexp)(e);
            })
            .join(""),
          routeKeys: l,
        };
      }
      function d(e, t) {
        let n = c(e, t);
        return {
          ...l(e),
          namedRegex: "^" + n.namedParameterizedRoute + "(?:/)?$",
          routeKeys: n.routeKeys,
        };
      }
      function f(e, t) {
        let { parameterizedRoute: n } = u(e),
          { catchAll: r = !0 } = t;
        if ("/" === n) return { namedRegex: "^/" + (r ? ".*" : "") + "$" };
        let { namedParameterizedRoute: o } = c(e, !1);
        return { namedRegex: "^" + o + (r ? "(?:(/.*)?)" : "") + "$" };
      }
    },
    9089: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getSortedRoutes", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
      class n {
        insert(e) {
          this._insert(e.split("/").filter(Boolean), [], !1);
        }
        smoosh() {
          return this._smoosh();
        }
        _smoosh(e) {
          void 0 === e && (e = "/");
          let t = [...this.children.keys()].sort();
          null !== this.slugName && t.splice(t.indexOf("[]"), 1),
            null !== this.restSlugName && t.splice(t.indexOf("[...]"), 1),
            null !== this.optionalRestSlugName &&
              t.splice(t.indexOf("[[...]]"), 1);
          let n = t
            .map((t) => this.children.get(t)._smoosh("" + e + t + "/"))
            .reduce((e, t) => [...e, ...t], []);
          if (
            (null !== this.slugName &&
              n.push(
                ...this.children
                  .get("[]")
                  ._smoosh(e + "[" + this.slugName + "]/")
              ),
            !this.placeholder)
          ) {
            let t = "/" === e ? "/" : e.slice(0, -1);
            if (null != this.optionalRestSlugName)
              throw Error(
                'You cannot define a route with the same specificity as a optional catch-all route ("' +
                  t +
                  '" and "' +
                  t +
                  "[[..." +
                  this.optionalRestSlugName +
                  ']]").'
              );
            n.unshift(t);
          }
          return (
            null !== this.restSlugName &&
              n.push(
                ...this.children
                  .get("[...]")
                  ._smoosh(e + "[..." + this.restSlugName + "]/")
              ),
            null !== this.optionalRestSlugName &&
              n.push(
                ...this.children
                  .get("[[...]]")
                  ._smoosh(e + "[[..." + this.optionalRestSlugName + "]]/")
              ),
            n
          );
        }
        _insert(e, t, r) {
          if (0 === e.length) {
            this.placeholder = !1;
            return;
          }
          if (r) throw Error("Catch-all must be the last part of the URL.");
          let o = e[0];
          if (o.startsWith("[") && o.endsWith("]")) {
            let n = o.slice(1, -1),
              a = !1;
            if (
              (n.startsWith("[") &&
                n.endsWith("]") &&
                ((n = n.slice(1, -1)), (a = !0)),
              n.startsWith("...") && ((n = n.substring(3)), (r = !0)),
              n.startsWith("[") || n.endsWith("]"))
            )
              throw Error(
                "Segment names may not start or end with extra brackets ('" +
                  n +
                  "')."
              );
            if (n.startsWith("."))
              throw Error(
                "Segment names may not start with erroneous periods ('" +
                  n +
                  "')."
              );
            function i(e, n) {
              if (null !== e && e !== n)
                throw Error(
                  "You cannot use different slug names for the same dynamic path ('" +
                    e +
                    "' !== '" +
                    n +
                    "')."
                );
              t.forEach((e) => {
                if (e === n)
                  throw Error(
                    'You cannot have the same slug name "' +
                      n +
                      '" repeat within a single dynamic path'
                  );
                if (e.replace(/\W/g, "") === o.replace(/\W/g, ""))
                  throw Error(
                    'You cannot have the slug names "' +
                      e +
                      '" and "' +
                      n +
                      '" differ only by non-word symbols within a single dynamic path'
                  );
              }),
                t.push(n);
            }
            if (r) {
              if (a) {
                if (null != this.restSlugName)
                  throw Error(
                    'You cannot use both an required and optional catch-all route at the same level ("[...' +
                      this.restSlugName +
                      ']" and "' +
                      e[0] +
                      '" ).'
                  );
                i(this.optionalRestSlugName, n),
                  (this.optionalRestSlugName = n),
                  (o = "[[...]]");
              } else {
                if (null != this.optionalRestSlugName)
                  throw Error(
                    'You cannot use both an optional and required catch-all route at the same level ("[[...' +
                      this.optionalRestSlugName +
                      ']]" and "' +
                      e[0] +
                      '").'
                  );
                i(this.restSlugName, n), (this.restSlugName = n), (o = "[...]");
              }
            } else {
              if (a)
                throw Error(
                  'Optional route parameters are not yet supported ("' +
                    e[0] +
                    '").'
                );
              i(this.slugName, n), (this.slugName = n), (o = "[]");
            }
          }
          this.children.has(o) || this.children.set(o, new n()),
            this.children.get(o)._insert(e.slice(1), t, r);
        }
        constructor() {
          (this.placeholder = !0),
            (this.children = new Map()),
            (this.slugName = null),
            (this.restSlugName = null),
            (this.optionalRestSlugName = null);
        }
      }
      function r(e) {
        let t = new n();
        return e.forEach((e) => t.insert(e)), t.smoosh();
      }
    },
    5960: function (e, t, n) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return u;
          },
        });
      let r = n(2265),
        o = "undefined" == typeof window,
        i = o ? () => {} : r.useLayoutEffect,
        a = o ? () => {} : r.useEffect;
      function u(e) {
        let { headManager: t, reduceComponentsToState: n } = e;
        function u() {
          if (t && t.mountedInstances) {
            let o = r.Children.toArray(
              Array.from(t.mountedInstances).filter(Boolean)
            );
            t.updateHead(n(o, e));
          }
        }
        if (o) {
          var l;
          null == t || null == (l = t.mountedInstances) || l.add(e.children),
            u();
        }
        return (
          i(() => {
            var n;
            return (
              null == t ||
                null == (n = t.mountedInstances) ||
                n.add(e.children),
              () => {
                var n;
                null == t ||
                  null == (n = t.mountedInstances) ||
                  n.delete(e.children);
              }
            );
          }),
          i(
            () => (
              t && (t._pendingUpdate = u),
              () => {
                t && (t._pendingUpdate = u);
              }
            )
          ),
          a(
            () => (
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null)),
              () => {
                t &&
                  t._pendingUpdate &&
                  (t._pendingUpdate(), (t._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
    3461: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var n in t)
            Object.defineProperty(e, n, { enumerable: !0, get: t[n] });
        })(t, {
          DecodeError: function () {
            return h;
          },
          MiddlewareNotFoundError: function () {
            return y;
          },
          MissingStaticPage: function () {
            return g;
          },
          NormalizeError: function () {
            return m;
          },
          PageNotFoundError: function () {
            return v;
          },
          SP: function () {
            return f;
          },
          ST: function () {
            return p;
          },
          WEB_VITALS: function () {
            return n;
          },
          execOnce: function () {
            return r;
          },
          getDisplayName: function () {
            return l;
          },
          getLocationOrigin: function () {
            return a;
          },
          getURL: function () {
            return u;
          },
          isAbsoluteUrl: function () {
            return i;
          },
          isResSent: function () {
            return s;
          },
          loadGetInitialProps: function () {
            return d;
          },
          normalizeRepeatedSlashes: function () {
            return c;
          },
          stringifyError: function () {
            return b;
          },
        });
      let n = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];
      function r(e) {
        let t,
          n = !1;
        return function () {
          for (var r = arguments.length, o = Array(r), i = 0; i < r; i++)
            o[i] = arguments[i];
          return n || ((n = !0), (t = e(...o))), t;
        };
      }
      let o = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        i = (e) => o.test(e);
      function a() {
        let { protocol: e, hostname: t, port: n } = window.location;
        return e + "//" + t + (n ? ":" + n : "");
      }
      function u() {
        let { href: e } = window.location,
          t = a();
        return e.substring(t.length);
      }
      function l(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown";
      }
      function s(e) {
        return e.finished || e.headersSent;
      }
      function c(e) {
        let t = e.split("?");
        return (
          t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") +
          (t[1] ? "?" + t.slice(1).join("?") : "")
        );
      }
      async function d(e, t) {
        let n = t.res || (t.ctx && t.ctx.res);
        if (!e.getInitialProps)
          return t.ctx && t.Component
            ? { pageProps: await d(t.Component, t.ctx) }
            : {};
        let r = await e.getInitialProps(t);
        if (n && s(n)) return r;
        if (!r)
          throw Error(
            '"' +
              l(e) +
              '.getInitialProps()" should resolve to an object. But found "' +
              r +
              '" instead.'
          );
        return r;
      }
      let f = "undefined" != typeof performance,
        p =
          f &&
          ["mark", "measure", "getEntriesByName"].every(
            (e) => "function" == typeof performance[e]
          );
      class h extends Error {}
      class m extends Error {}
      class v extends Error {
        constructor(e) {
          super(),
            (this.code = "ENOENT"),
            (this.name = "PageNotFoundError"),
            (this.message = "Cannot find module for page: " + e);
        }
      }
      class g extends Error {
        constructor(e, t) {
          super(),
            (this.message =
              "Failed to load static file for page: " + e + " " + t);
        }
      }
      class y extends Error {
        constructor() {
          super(),
            (this.code = "ENOENT"),
            (this.message = "Cannot find the middleware module");
        }
      }
      function b(e) {
        return JSON.stringify({ message: e.message, stack: e.stack });
      }
    },
    1823: function (e, t, n) {
      "use strict";
      n.d(t, {
        Av: function () {
          return a;
        },
        pF: function () {
          return r;
        },
        xv: function () {
          return i;
        },
        zi: function () {
          return o;
        },
      });
      var r = "right-scroll-bar-position",
        o = "width-before-scroll-bar",
        i = "with-scroll-bars-hidden",
        a = "--removed-body-scroll-bar-size";
    },
    5973: function (e, t, n) {
      "use strict";
      n.d(t, {
        jp: function () {
          return m;
        },
      });
      var r = n(2265),
        o = n(8039),
        i = n(1823),
        a = { left: 0, top: 0, right: 0, gap: 0 },
        u = function (e) {
          return parseInt(e || "", 10) || 0;
        },
        l = function (e) {
          var t = window.getComputedStyle(document.body),
            n = t["padding" === e ? "paddingLeft" : "marginLeft"],
            r = t["padding" === e ? "paddingTop" : "marginTop"],
            o = t["padding" === e ? "paddingRight" : "marginRight"];
          return [u(n), u(r), u(o)];
        },
        s = function (e) {
          if ((void 0 === e && (e = "margin"), "undefined" == typeof window))
            return a;
          var t = l(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
          return {
            left: t[0],
            top: t[1],
            right: t[2],
            gap: Math.max(0, r - n + t[2] - t[0]),
          };
        },
        c = (0, o.Ws)(),
        d = "data-scroll-locked",
        f = function (e, t, n, r) {
          var o = e.left,
            a = e.top,
            u = e.right,
            l = e.gap;
          return (
            void 0 === n && (n = "margin"),
            "\n  ."
              .concat(i.xv, " {\n   overflow: hidden ")
              .concat(r, ";\n   padding-right: ")
              .concat(l, "px ")
              .concat(r, ";\n  }\n  body[")
              .concat(d, "] {\n    overflow: hidden ")
              .concat(r, ";\n    overscroll-behavior: contain;\n    ")
              .concat(
                [
                  t && "position: relative ".concat(r, ";"),
                  "margin" === n &&
                    "\n    padding-left: "
                      .concat(o, "px;\n    padding-top: ")
                      .concat(a, "px;\n    padding-right: ")
                      .concat(
                        u,
                        "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: "
                      )
                      .concat(l, "px ")
                      .concat(r, ";\n    "),
                  "padding" === n &&
                    "padding-right: ".concat(l, "px ").concat(r, ";"),
                ]
                  .filter(Boolean)
                  .join(""),
                "\n  }\n  \n  ."
              )
              .concat(i.pF, " {\n    right: ")
              .concat(l, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(i.zi, " {\n    margin-right: ")
              .concat(l, "px ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(i.pF, " .")
              .concat(i.pF, " {\n    right: 0 ")
              .concat(r, ";\n  }\n  \n  .")
              .concat(i.zi, " .")
              .concat(i.zi, " {\n    margin-right: 0 ")
              .concat(r, ";\n  }\n  \n  body[")
              .concat(d, "] {\n    ")
              .concat(i.Av, ": ")
              .concat(l, "px;\n  }\n")
          );
        },
        p = function () {
          var e = parseInt(document.body.getAttribute(d) || "0", 10);
          return isFinite(e) ? e : 0;
        },
        h = function () {
          r.useEffect(function () {
            return (
              document.body.setAttribute(d, (p() + 1).toString()),
              function () {
                var e = p() - 1;
                e <= 0
                  ? document.body.removeAttribute(d)
                  : document.body.setAttribute(d, e.toString());
              }
            );
          }, []);
        },
        m = function (e) {
          var t = e.noRelative,
            n = e.noImportant,
            o = e.gapMode,
            i = void 0 === o ? "margin" : o;
          h();
          var a = r.useMemo(
            function () {
              return s(i);
            },
            [i]
          );
          return r.createElement(c, {
            styles: f(a, !t, i, n ? "" : "!important"),
          });
        };
    },
    8039: function (e, t, n) {
      "use strict";
      n.d(t, {
        Ws: function () {
          return u;
        },
      });
      var r,
        o = n(2265),
        i = function () {
          var e = 0,
            t = null;
          return {
            add: function (o) {
              if (
                0 == e &&
                (t = (function () {
                  if (!document) return null;
                  var e = document.createElement("style");
                  e.type = "text/css";
                  var t = r || n.nc;
                  return t && e.setAttribute("nonce", t), e;
                })())
              ) {
                var i, a;
                (i = t).styleSheet
                  ? (i.styleSheet.cssText = o)
                  : i.appendChild(document.createTextNode(o)),
                  (a = t),
                  (
                    document.head || document.getElementsByTagName("head")[0]
                  ).appendChild(a);
              }
              e++;
            },
            remove: function () {
              --e ||
                !t ||
                (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
          };
        },
        a = function () {
          var e = i();
          return function (t, n) {
            o.useEffect(
              function () {
                return (
                  e.add(t),
                  function () {
                    e.remove();
                  }
                );
              },
              [t && n]
            );
          };
        },
        u = function () {
          var e = a();
          return function (t) {
            return e(t.styles, t.dynamic), null;
          };
        };
    },
    3227: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return a;
        },
      });
      var r = n(2265),
        o = n(42),
        i = n.n(o);
      function a(e, t) {
        var n = (0, r.useState)(!1),
          o = n[0],
          a = n[1],
          u = t && t.successDuration;
        return (
          (0, r.useEffect)(
            function () {
              if (o && u) {
                var e = setTimeout(function () {
                  a(!1);
                }, u);
                return function () {
                  clearTimeout(e);
                };
              }
            },
            [o, u]
          ),
          [
            o,
            function () {
              a(i()(e));
            },
          ]
        );
      }
    },
    5786: function (e) {
      e.exports = function () {
        var e = document.getSelection();
        if (!e.rangeCount) return function () {};
        for (
          var t = document.activeElement, n = [], r = 0;
          r < e.rangeCount;
          r++
        )
          n.push(e.getRangeAt(r));
        switch (t.tagName.toUpperCase()) {
          case "INPUT":
          case "TEXTAREA":
            t.blur();
            break;
          default:
            t = null;
        }
        return (
          e.removeAllRanges(),
          function () {
            "Caret" === e.type && e.removeAllRanges(),
              e.rangeCount ||
                n.forEach(function (t) {
                  e.addRange(t);
                }),
              t && t.focus();
          }
        );
      };
    },
    8215: function (e, t, n) {
      "use strict";
      n.d(t, {
        q: function () {
          return u;
        },
      });
      var r = n(2265);
      function o(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e;
      }
      var i = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect,
        a = new WeakMap();
      function u(e, t) {
        var n,
          u,
          l,
          s =
            ((n = t || null),
            (u = function (t) {
              return e.forEach(function (e) {
                return o(e, t);
              });
            }),
            ((l = (0, r.useState)(function () {
              return {
                value: n,
                callback: u,
                facade: {
                  get current() {
                    return l.value;
                  },
                  set current(value) {
                    var e = l.value;
                    e !== value && ((l.value = value), l.callback(value, e));
                  },
                },
              };
            })[0]).callback = u),
            l.facade);
        return (
          i(
            function () {
              var t = a.get(s);
              if (t) {
                var n = new Set(t),
                  r = new Set(e),
                  i = s.current;
                n.forEach(function (e) {
                  r.has(e) || o(e, null);
                }),
                  r.forEach(function (e) {
                    n.has(e) || o(e, i);
                  });
              }
              a.set(s, e);
            },
            [e]
          ),
          s
        );
      }
    },
    8776: function (e, t, n) {
      "use strict";
      n.d(t, {
        L: function () {
          return a;
        },
      });
      var r = n(1735),
        o = n(2265),
        i = function (e) {
          var t = e.sideCar,
            n = (0, r._T)(e, ["sideCar"]);
          if (!t)
            throw Error(
              "Sidecar: please provide `sideCar` property to import the right car"
            );
          var i = t.read();
          if (!i) throw Error("Sidecar medium not found");
          return o.createElement(i, (0, r.pi)({}, n));
        };
      function a(e, t) {
        return e.useMedium(t), i;
      }
      i.isSideCarExport = !0;
    },
    5411: function (e, t, n) {
      "use strict";
      n.d(t, {
        _: function () {
          return i;
        },
      });
      var r = n(1735);
      function o(e) {
        return e;
      }
      function i(e) {
        void 0 === e && (e = {});
        var t,
          n,
          i,
          a =
            (void 0 === t && (t = o),
            (n = []),
            (i = !1),
            {
              read: function () {
                if (i)
                  throw Error(
                    "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
                  );
                return n.length ? n[n.length - 1] : null;
              },
              useMedium: function (e) {
                var r = t(e, i);
                return (
                  n.push(r),
                  function () {
                    n = n.filter(function (e) {
                      return e !== r;
                    });
                  }
                );
              },
              assignSyncMedium: function (e) {
                for (i = !0; n.length; ) {
                  var t = n;
                  (n = []), t.forEach(e);
                }
                n = {
                  push: function (t) {
                    return e(t);
                  },
                  filter: function () {
                    return n;
                  },
                };
              },
              assignMedium: function (e) {
                i = !0;
                var t = [];
                if (n.length) {
                  var r = n;
                  (n = []), r.forEach(e), (t = n);
                }
                var o = function () {
                    var n = t;
                    (t = []), n.forEach(e);
                  },
                  a = function () {
                    return Promise.resolve().then(o);
                  };
                a(),
                  (n = {
                    push: function (e) {
                      t.push(e), a();
                    },
                    filter: function (e) {
                      return (t = t.filter(e)), n;
                    },
                  });
              },
            });
        return (a.options = (0, r.pi)({ async: !0, ssr: !1 }, e)), a;
      }
    },
    8149: function (e, t, n) {
      "use strict";
      function r(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
        return function (r) {
          if ((e?.(r), !1 === n || !r.defaultPrevented)) return t?.(r);
        };
      }
      n.d(t, {
        M: function () {
          return r;
        },
      });
    },
    1584: function (e, t, n) {
      "use strict";
      n.d(t, {
        F: function () {
          return o;
        },
        e: function () {
          return i;
        },
      });
      var r = n(2265);
      function o(...e) {
        return (t) =>
          e.forEach((e) => {
            "function" == typeof e ? e(t) : null != e && (e.current = t);
          });
      }
      function i(...e) {
        return r.useCallback(o(...e), e);
      }
    },
    467: function (e, t, n) {
      "use strict";
      let r;
      n.d(t, {
        M: function () {
          return f;
        },
      });
      var o = n(2265),
        i = n(1584),
        a = n(5171),
        u = n(5137),
        l = n(7437),
        s = "focusScope.autoFocusOnMount",
        c = "focusScope.autoFocusOnUnmount",
        d = { bubbles: !1, cancelable: !0 },
        f = o.forwardRef((e, t) => {
          let {
              loop: n = !1,
              trapped: r = !1,
              onMountAutoFocus: f,
              onUnmountAutoFocus: g,
              ...y
            } = e,
            [b, w] = o.useState(null),
            E = (0, u.W)(f),
            x = (0, u.W)(g),
            P = o.useRef(null),
            C = (0, i.e)(t, (e) => w(e)),
            S = o.useRef({
              paused: !1,
              pause() {
                this.paused = !0;
              },
              resume() {
                this.paused = !1;
              },
            }).current;
          o.useEffect(() => {
            if (r) {
              let e = function (e) {
                  if (S.paused || !b) return;
                  let t = e.target;
                  b.contains(t)
                    ? (P.current = t)
                    : m(P.current, { select: !0 });
                },
                t = function (e) {
                  if (S.paused || !b) return;
                  let t = e.relatedTarget;
                  null === t || b.contains(t) || m(P.current, { select: !0 });
                };
              document.addEventListener("focusin", e),
                document.addEventListener("focusout", t);
              let n = new MutationObserver(function (e) {
                if (document.activeElement === document.body)
                  for (let t of e) t.removedNodes.length > 0 && m(b);
              });
              return (
                b && n.observe(b, { childList: !0, subtree: !0 }),
                () => {
                  document.removeEventListener("focusin", e),
                    document.removeEventListener("focusout", t),
                    n.disconnect();
                }
              );
            }
          }, [r, b, S.paused]),
            o.useEffect(() => {
              if (b) {
                v.add(S);
                let e = document.activeElement;
                if (!b.contains(e)) {
                  let t = new CustomEvent(s, d);
                  b.addEventListener(s, E),
                    b.dispatchEvent(t),
                    t.defaultPrevented ||
                      ((function (e) {
                        let { select: t = !1 } =
                            arguments.length > 1 && void 0 !== arguments[1]
                              ? arguments[1]
                              : {},
                          n = document.activeElement;
                        for (let r of e)
                          if (
                            (m(r, { select: t }), document.activeElement !== n)
                          )
                            return;
                      })(
                        p(b).filter((e) => "A" !== e.tagName),
                        { select: !0 }
                      ),
                      document.activeElement === e && m(b));
                }
                return () => {
                  b.removeEventListener(s, E),
                    setTimeout(() => {
                      let t = new CustomEvent(c, d);
                      b.addEventListener(c, x),
                        b.dispatchEvent(t),
                        t.defaultPrevented ||
                          m(null != e ? e : document.body, { select: !0 }),
                        b.removeEventListener(c, x),
                        v.remove(S);
                    }, 0);
                };
              }
            }, [b, E, x, S]);
          let R = o.useCallback(
            (e) => {
              if ((!n && !r) || S.paused) return;
              let t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
                o = document.activeElement;
              if (t && o) {
                let t = e.currentTarget,
                  [r, i] = (function (e) {
                    let t = p(e);
                    return [h(t, e), h(t.reverse(), e)];
                  })(t);
                r && i
                  ? e.shiftKey || o !== i
                    ? e.shiftKey &&
                      o === r &&
                      (e.preventDefault(), n && m(i, { select: !0 }))
                    : (e.preventDefault(), n && m(r, { select: !0 }))
                  : o === t && e.preventDefault();
              }
            },
            [n, r, S.paused]
          );
          return (0, l.jsx)(a.WV.div, {
            tabIndex: -1,
            ...y,
            ref: C,
            onKeyDown: R,
          });
        });
      function p(e) {
        let t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (e) => {
              let t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t
                ? NodeFilter.FILTER_SKIP
                : e.tabIndex >= 0
                ? NodeFilter.FILTER_ACCEPT
                : NodeFilter.FILTER_SKIP;
            },
          });
        for (; n.nextNode(); ) t.push(n.currentNode);
        return t;
      }
      function h(e, t) {
        for (let n of e)
          if (
            !(function (e, t) {
              let { upTo: n } = t;
              if ("hidden" === getComputedStyle(e).visibility) return !0;
              for (; e && (void 0 === n || e !== n); ) {
                if ("none" === getComputedStyle(e).display) return !0;
                e = e.parentElement;
              }
              return !1;
            })(n, { upTo: t })
          )
            return n;
      }
      function m(e) {
        let { select: t = !1 } =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (e && e.focus) {
          var n;
          let r = document.activeElement;
          e.focus({ preventScroll: !0 }),
            e !== r &&
              (n = e) instanceof HTMLInputElement &&
              "select" in n &&
              t &&
              e.select();
        }
      }
      f.displayName = "FocusScope";
      var v =
        ((r = []),
        {
          add(e) {
            let t = r[0];
            e !== t && (null == t || t.pause()), (r = g(r, e)).unshift(e);
          },
          remove(e) {
            var t;
            null === (t = (r = g(r, e))[0]) || void 0 === t || t.resume();
          },
        });
      function g(e, t) {
        let n = [...e],
          r = n.indexOf(t);
        return -1 !== r && n.splice(r, 1), n;
      }
    },
    8894: function (e, t, n) {
      "use strict";
      n.d(t, {
        VY: function () {
          return eK;
        },
        h_: function () {
          return eY;
        },
        fC: function () {
          return eB;
        },
        xz: function () {
          return eV;
        },
      });
      var r,
        o = n(2265),
        i = n(8149),
        a = n(1584),
        u = n(8324),
        l = n(5171),
        s = n(5137),
        c = n(6486),
        d = n(7437),
        f = "dismissableLayer.update",
        p = o.createContext({
          layers: new Set(),
          layersWithOutsidePointerEventsDisabled: new Set(),
          branches: new Set(),
        }),
        h = o.forwardRef((e, t) => {
          var n, u;
          let {
              disableOutsidePointerEvents: h = !1,
              onEscapeKeyDown: g,
              onPointerDownOutside: y,
              onFocusOutside: b,
              onInteractOutside: w,
              onDismiss: E,
              ...x
            } = e,
            P = o.useContext(p),
            [C, S] = o.useState(null),
            R =
              null !== (u = null == C ? void 0 : C.ownerDocument) &&
              void 0 !== u
                ? u
                : null === (n = globalThis) || void 0 === n
                ? void 0
                : n.document,
            [, O] = o.useState({}),
            j = (0, a.e)(t, (e) => S(e)),
            _ = Array.from(P.layers),
            [M] = [...P.layersWithOutsidePointerEventsDisabled].slice(-1),
            N = _.indexOf(M),
            A = C ? _.indexOf(C) : -1,
            k = P.layersWithOutsidePointerEventsDisabled.size > 0,
            T = A >= N,
            I = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                    ? void 0
                    : t.document,
                r = (0, s.W)(e),
                i = o.useRef(!1),
                a = o.useRef(() => {});
              return (
                o.useEffect(() => {
                  let e = (e) => {
                      if (e.target && !i.current) {
                        let t = function () {
                            v("dismissableLayer.pointerDownOutside", r, o, {
                              discrete: !0,
                            });
                          },
                          o = { originalEvent: e };
                        "touch" === e.pointerType
                          ? (n.removeEventListener("click", a.current),
                            (a.current = t),
                            n.addEventListener("click", a.current, {
                              once: !0,
                            }))
                          : t();
                      } else n.removeEventListener("click", a.current);
                      i.current = !1;
                    },
                    t = window.setTimeout(() => {
                      n.addEventListener("pointerdown", e);
                    }, 0);
                  return () => {
                    window.clearTimeout(t),
                      n.removeEventListener("pointerdown", e),
                      n.removeEventListener("click", a.current);
                  };
                }, [n, r]),
                { onPointerDownCapture: () => (i.current = !0) }
              );
            })((e) => {
              let t = e.target,
                n = [...P.branches].some((e) => e.contains(t));
              !T ||
                n ||
                (null == y || y(e),
                null == w || w(e),
                e.defaultPrevented || null == E || E());
            }, R),
            L = (function (e) {
              var t;
              let n =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : null === (t = globalThis) || void 0 === t
                    ? void 0
                    : t.document,
                r = (0, s.W)(e),
                i = o.useRef(!1);
              return (
                o.useEffect(() => {
                  let e = (e) => {
                    e.target &&
                      !i.current &&
                      v(
                        "dismissableLayer.focusOutside",
                        r,
                        { originalEvent: e },
                        { discrete: !1 }
                      );
                  };
                  return (
                    n.addEventListener("focusin", e),
                    () => n.removeEventListener("focusin", e)
                  );
                }, [n, r]),
                {
                  onFocusCapture: () => (i.current = !0),
                  onBlurCapture: () => (i.current = !1),
                }
              );
            })((e) => {
              let t = e.target;
              [...P.branches].some((e) => e.contains(t)) ||
                (null == b || b(e),
                null == w || w(e),
                e.defaultPrevented || null == E || E());
            }, R);
          return (
            (0, c.e)((e) => {
              A !== P.layers.size - 1 ||
                (null == g || g(e),
                !e.defaultPrevented && E && (e.preventDefault(), E()));
            }, R),
            o.useEffect(() => {
              if (C)
                return (
                  h &&
                    (0 === P.layersWithOutsidePointerEventsDisabled.size &&
                      ((r = R.body.style.pointerEvents),
                      (R.body.style.pointerEvents = "none")),
                    P.layersWithOutsidePointerEventsDisabled.add(C)),
                  P.layers.add(C),
                  m(),
                  () => {
                    h &&
                      1 === P.layersWithOutsidePointerEventsDisabled.size &&
                      (R.body.style.pointerEvents = r);
                  }
                );
            }, [C, R, h, P]),
            o.useEffect(
              () => () => {
                C &&
                  (P.layers.delete(C),
                  P.layersWithOutsidePointerEventsDisabled.delete(C),
                  m());
              },
              [C, P]
            ),
            o.useEffect(() => {
              let e = () => O({});
              return (
                document.addEventListener(f, e),
                () => document.removeEventListener(f, e)
              );
            }, []),
            (0, d.jsx)(l.WV.div, {
              ...x,
              ref: j,
              style: {
                pointerEvents: k ? (T ? "auto" : "none") : void 0,
                ...e.style,
              },
              onFocusCapture: (0, i.M)(e.onFocusCapture, L.onFocusCapture),
              onBlurCapture: (0, i.M)(e.onBlurCapture, L.onBlurCapture),
              onPointerDownCapture: (0, i.M)(
                e.onPointerDownCapture,
                I.onPointerDownCapture
              ),
            })
          );
        });
      function m() {
        let e = new CustomEvent(f);
        document.dispatchEvent(e);
      }
      function v(e, t, n, r) {
        let { discrete: o } = r,
          i = n.originalEvent.target,
          a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
        t && i.addEventListener(e, t, { once: !0 }),
          o ? (0, l.jH)(i, a) : i.dispatchEvent(a);
      }
      (h.displayName = "DismissableLayer"),
        (o.forwardRef((e, t) => {
          let n = o.useContext(p),
            r = o.useRef(null),
            i = (0, a.e)(t, r);
          return (
            o.useEffect(() => {
              let e = r.current;
              if (e)
                return (
                  n.branches.add(e),
                  () => {
                    n.branches.delete(e);
                  }
                );
            }, [n.branches]),
            (0, d.jsx)(l.WV.div, { ...e, ref: i })
          );
        }).displayName = "DismissableLayerBranch");
      var g = 0;
      function y() {
        let e = document.createElement("span");
        return (
          e.setAttribute("data-radix-focus-guard", ""),
          (e.tabIndex = 0),
          (e.style.outline = "none"),
          (e.style.opacity = "0"),
          (e.style.position = "fixed"),
          (e.style.pointerEvents = "none"),
          e
        );
      }
      var b = n(467),
        w = n(3201),
        E = n(4674),
        x = n(5621),
        P = o.forwardRef((e, t) => {
          let { children: n, width: r = 10, height: o = 5, ...i } = e;
          return (0, d.jsx)(l.WV.svg, {
            ...i,
            ref: t,
            width: r,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild
              ? n
              : (0, d.jsx)("polygon", { points: "0,0 30,0 15,10" }),
          });
        });
      P.displayName = "Arrow";
      var C = n(1336),
        S = n(5238),
        R = "Popper",
        [O, j] = (function (e, t = []) {
          let n = [],
            r = () => {
              let t = n.map((e) => o.createContext(e));
              return function (n) {
                let r = n?.[e] || t;
                return o.useMemo(
                  () => ({ [`__scope${e}`]: { ...n, [e]: r } }),
                  [n, r]
                );
              };
            };
          return (
            (r.scopeName = e),
            [
              function (t, r) {
                let i = o.createContext(r),
                  a = n.length;
                function u(t) {
                  let { scope: n, children: r, ...u } = t,
                    l = n?.[e][a] || i,
                    s = o.useMemo(() => u, Object.values(u));
                  return (0, d.jsx)(l.Provider, { value: s, children: r });
                }
                return (
                  (n = [...n, r]),
                  (u.displayName = t + "Provider"),
                  [
                    u,
                    function (n, u) {
                      let l = u?.[e][a] || i,
                        s = o.useContext(l);
                      if (s) return s;
                      if (void 0 !== r) return r;
                      throw Error(`\`${n}\` must be used within \`${t}\``);
                    },
                  ]
                );
              },
              (function (...e) {
                let t = e[0];
                if (1 === e.length) return t;
                let n = () => {
                  let n = e.map((e) => ({
                    useScope: e(),
                    scopeName: e.scopeName,
                  }));
                  return function (e) {
                    let r = n.reduce((t, { useScope: n, scopeName: r }) => {
                      let o = n(e)[`__scope${r}`];
                      return { ...t, ...o };
                    }, {});
                    return o.useMemo(
                      () => ({ [`__scope${t.scopeName}`]: r }),
                      [r]
                    );
                  };
                };
                return (n.scopeName = t.scopeName), n;
              })(r, ...t),
            ]
          );
        })(R),
        [_, M] = O(R),
        N = (e) => {
          let { __scopePopper: t, children: n } = e,
            [r, i] = o.useState(null);
          return (0, d.jsx)(_, {
            scope: t,
            anchor: r,
            onAnchorChange: i,
            children: n,
          });
        };
      N.displayName = R;
      var A = "PopperAnchor",
        k = o.forwardRef((e, t) => {
          let { __scopePopper: n, virtualRef: r, ...i } = e,
            u = M(A, n),
            s = o.useRef(null),
            c = (0, a.e)(t, s);
          return (
            o.useEffect(() => {
              u.onAnchorChange((null == r ? void 0 : r.current) || s.current);
            }),
            r ? null : (0, d.jsx)(l.WV.div, { ...i, ref: c })
          );
        });
      k.displayName = A;
      var T = "PopperContent",
        [I, L] = O(T),
        D = o.forwardRef((e, t) => {
          var n, r, i, u, c, f, p, h;
          let {
              __scopePopper: m,
              side: v = "bottom",
              sideOffset: g = 0,
              align: y = "center",
              alignOffset: b = 0,
              arrowPadding: w = 0,
              avoidCollisions: P = !0,
              collisionBoundary: R = [],
              collisionPadding: O = 0,
              sticky: j = "partial",
              hideWhenDetached: _ = !1,
              updatePositionStrategy: N = "optimized",
              onPlaced: A,
              ...k
            } = e,
            L = M(T, m),
            [D, W] = o.useState(null),
            F = (0, a.e)(t, (e) => W(e)),
            [U, Y] = o.useState(null),
            K = (0, S.t)(U),
            H =
              null !== (p = null == K ? void 0 : K.width) && void 0 !== p
                ? p
                : 0,
            $ =
              null !== (h = null == K ? void 0 : K.height) && void 0 !== h
                ? h
                : 0,
            q =
              "number" == typeof O
                ? O
                : { top: 0, right: 0, bottom: 0, left: 0, ...O },
            X = Array.isArray(R) ? R : [R],
            G = X.length > 0,
            Z = { padding: q, boundary: X.filter(z), altBoundary: G },
            {
              refs: Q,
              floatingStyles: J,
              placement: ee,
              isPositioned: et,
              middlewareData: en,
            } = (0, E.YF)({
              strategy: "fixed",
              placement: v + ("center" !== y ? "-" + y : ""),
              whileElementsMounted: function () {
                for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
                  t[n] = arguments[n];
                return (0, x.Me)(...t, { animationFrame: "always" === N });
              },
              elements: { reference: L.anchor },
              middleware: [
                (0, E.cv)({ mainAxis: g + $, alignmentAxis: b }),
                P &&
                  (0, E.uY)({
                    mainAxis: !0,
                    crossAxis: !1,
                    limiter: "partial" === j ? (0, E.dr)() : void 0,
                    ...Z,
                  }),
                P && (0, E.RR)({ ...Z }),
                (0, E.dp)({
                  ...Z,
                  apply: (e) => {
                    let {
                        elements: t,
                        rects: n,
                        availableWidth: r,
                        availableHeight: o,
                      } = e,
                      { width: i, height: a } = n.reference,
                      u = t.floating.style;
                    u.setProperty(
                      "--radix-popper-available-width",
                      "".concat(r, "px")
                    ),
                      u.setProperty(
                        "--radix-popper-available-height",
                        "".concat(o, "px")
                      ),
                      u.setProperty(
                        "--radix-popper-anchor-width",
                        "".concat(i, "px")
                      ),
                      u.setProperty(
                        "--radix-popper-anchor-height",
                        "".concat(a, "px")
                      );
                  },
                }),
                U && (0, E.x7)({ element: U, padding: w }),
                B({ arrowWidth: H, arrowHeight: $ }),
                _ && (0, E.Cp)({ strategy: "referenceHidden", ...Z }),
              ],
            }),
            [er, eo] = V(ee),
            ei = (0, s.W)(A);
          (0, C.b)(() => {
            et && (null == ei || ei());
          }, [et, ei]);
          let ea = null === (n = en.arrow) || void 0 === n ? void 0 : n.x,
            eu = null === (r = en.arrow) || void 0 === r ? void 0 : r.y,
            el =
              (null === (i = en.arrow) || void 0 === i
                ? void 0
                : i.centerOffset) !== 0,
            [es, ec] = o.useState();
          return (
            (0, C.b)(() => {
              D && ec(window.getComputedStyle(D).zIndex);
            }, [D]),
            (0, d.jsx)("div", {
              ref: Q.setFloating,
              "data-radix-popper-content-wrapper": "",
              style: {
                ...J,
                transform: et ? J.transform : "translate(0, -200%)",
                minWidth: "max-content",
                zIndex: es,
                "--radix-popper-transform-origin": [
                  null === (u = en.transformOrigin) || void 0 === u
                    ? void 0
                    : u.x,
                  null === (c = en.transformOrigin) || void 0 === c
                    ? void 0
                    : c.y,
                ].join(" "),
                ...((null === (f = en.hide) || void 0 === f
                  ? void 0
                  : f.referenceHidden) && {
                  visibility: "hidden",
                  pointerEvents: "none",
                }),
              },
              dir: e.dir,
              children: (0, d.jsx)(I, {
                scope: m,
                placedSide: er,
                onArrowChange: Y,
                arrowX: ea,
                arrowY: eu,
                shouldHideArrow: el,
                children: (0, d.jsx)(l.WV.div, {
                  "data-side": er,
                  "data-align": eo,
                  ...k,
                  ref: F,
                  style: { ...k.style, animation: et ? void 0 : "none" },
                }),
              }),
            })
          );
        });
      D.displayName = T;
      var W = "PopperArrow",
        F = { top: "bottom", right: "left", bottom: "top", left: "right" },
        U = o.forwardRef(function (e, t) {
          let { __scopePopper: n, ...r } = e,
            o = L(W, n),
            i = F[o.placedSide];
          return (0,
          d.jsx)("span", { ref: o.onArrowChange, style: { position: "absolute", left: o.arrowX, top: o.arrowY, [i]: 0, transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[o.placedSide], transform: { top: "translateY(100%)", right: "translateY(50%) rotate(90deg) translateX(-50%)", bottom: "rotate(180deg)", left: "translateY(50%) rotate(-90deg) translateX(50%)" }[o.placedSide], visibility: o.shouldHideArrow ? "hidden" : void 0 }, children: (0, d.jsx)(P, { ...r, ref: t, style: { ...r.style, display: "block" } }) });
        });
      function z(e) {
        return null !== e;
      }
      U.displayName = W;
      var B = (e) => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          var n, r, o, i, a;
          let { placement: u, rects: l, middlewareData: s } = t,
            c =
              (null === (n = s.arrow) || void 0 === n
                ? void 0
                : n.centerOffset) !== 0,
            d = c ? 0 : e.arrowWidth,
            f = c ? 0 : e.arrowHeight,
            [p, h] = V(u),
            m = { start: "0%", center: "50%", end: "100%" }[h],
            v =
              (null !==
                (i = null === (r = s.arrow) || void 0 === r ? void 0 : r.x) &&
              void 0 !== i
                ? i
                : 0) +
              d / 2,
            g =
              (null !==
                (a = null === (o = s.arrow) || void 0 === o ? void 0 : o.y) &&
              void 0 !== a
                ? a
                : 0) +
              f / 2,
            y = "",
            b = "";
          return (
            "bottom" === p
              ? ((y = c ? m : "".concat(v, "px")), (b = "".concat(-f, "px")))
              : "top" === p
              ? ((y = c ? m : "".concat(v, "px")),
                (b = "".concat(l.floating.height + f, "px")))
              : "right" === p
              ? ((y = "".concat(-f, "px")), (b = c ? m : "".concat(g, "px")))
              : "left" === p &&
                ((y = "".concat(l.floating.width + f, "px")),
                (b = c ? m : "".concat(g, "px"))),
            { data: { x: y, y: b } }
          );
        },
      });
      function V(e) {
        let [t, n = "center"] = e.split("-");
        return [t, n];
      }
      var Y = n(4887),
        K = o.forwardRef((e, t) => {
          var n, r;
          let { container: i, ...a } = e,
            [u, s] = o.useState(!1);
          (0, C.b)(() => s(!0), []);
          let c =
            i ||
            (u &&
              (null === (r = globalThis) || void 0 === r
                ? void 0
                : null === (n = r.document) || void 0 === n
                ? void 0
                : n.body));
          return c
            ? Y.createPortal((0, d.jsx)(l.WV.div, { ...a, ref: t }), c)
            : null;
        });
      K.displayName = "Portal";
      var H = (e) => {
        var t, n;
        let r, i;
        let { present: u, children: l } = e,
          s = (function (e) {
            var t, n;
            let [r, i] = o.useState(),
              a = o.useRef({}),
              u = o.useRef(e),
              l = o.useRef("none"),
              [s, c] =
                ((t = e ? "mounted" : "unmounted"),
                (n = {
                  mounted: {
                    UNMOUNT: "unmounted",
                    ANIMATION_OUT: "unmountSuspended",
                  },
                  unmountSuspended: {
                    MOUNT: "mounted",
                    ANIMATION_END: "unmounted",
                  },
                  unmounted: { MOUNT: "mounted" },
                }),
                o.useReducer((e, t) => {
                  let r = n[e][t];
                  return null != r ? r : e;
                }, t));
            return (
              o.useEffect(() => {
                let e = $(a.current);
                l.current = "mounted" === s ? e : "none";
              }, [s]),
              (0, C.b)(() => {
                let t = a.current,
                  n = u.current;
                if (n !== e) {
                  let r = l.current,
                    o = $(t);
                  e
                    ? c("MOUNT")
                    : "none" === o ||
                      (null == t ? void 0 : t.display) === "none"
                    ? c("UNMOUNT")
                    : n && r !== o
                    ? c("ANIMATION_OUT")
                    : c("UNMOUNT"),
                    (u.current = e);
                }
              }, [e, c]),
              (0, C.b)(() => {
                if (r) {
                  var e;
                  let t;
                  let n =
                      null !== (e = r.ownerDocument.defaultView) && void 0 !== e
                        ? e
                        : window,
                    o = (e) => {
                      let o = $(a.current).includes(e.animationName);
                      if (
                        e.target === r &&
                        o &&
                        (c("ANIMATION_END"), !u.current)
                      ) {
                        let e = r.style.animationFillMode;
                        (r.style.animationFillMode = "forwards"),
                          (t = n.setTimeout(() => {
                            "forwards" === r.style.animationFillMode &&
                              (r.style.animationFillMode = e);
                          }));
                      }
                    },
                    i = (e) => {
                      e.target === r && (l.current = $(a.current));
                    };
                  return (
                    r.addEventListener("animationstart", i),
                    r.addEventListener("animationcancel", o),
                    r.addEventListener("animationend", o),
                    () => {
                      n.clearTimeout(t),
                        r.removeEventListener("animationstart", i),
                        r.removeEventListener("animationcancel", o),
                        r.removeEventListener("animationend", o);
                    }
                  );
                }
                c("ANIMATION_END");
              }, [r, c]),
              {
                isPresent: ["mounted", "unmountSuspended"].includes(s),
                ref: o.useCallback((e) => {
                  e && (a.current = getComputedStyle(e)), i(e);
                }, []),
              }
            );
          })(u),
          c =
            "function" == typeof l
              ? l({ present: s.isPresent })
              : o.Children.only(l),
          d = (0, a.e)(
            s.ref,
            (r =
              null === (t = Object.getOwnPropertyDescriptor(c.props, "ref")) ||
              void 0 === t
                ? void 0
                : t.get) &&
              "isReactWarning" in r &&
              r.isReactWarning
              ? c.ref
              : (r =
                  null === (n = Object.getOwnPropertyDescriptor(c, "ref")) ||
                  void 0 === n
                    ? void 0
                    : n.get) &&
                "isReactWarning" in r &&
                r.isReactWarning
              ? c.props.ref
              : c.props.ref || c.ref
          );
        return "function" == typeof l || s.isPresent
          ? o.cloneElement(c, { ref: d })
          : null;
      };
      function $(e) {
        return (null == e ? void 0 : e.animationName) || "none";
      }
      H.displayName = "Presence";
      var q = n(1538),
        X = n(1715),
        G = n(8369),
        Z = n(1735),
        Q = n(1823),
        J = n(8215),
        ee = (0, n(5411)._)(),
        et = function () {},
        en = o.forwardRef(function (e, t) {
          var n = o.useRef(null),
            r = o.useState({
              onScrollCapture: et,
              onWheelCapture: et,
              onTouchMoveCapture: et,
            }),
            i = r[0],
            a = r[1],
            u = e.forwardProps,
            l = e.children,
            s = e.className,
            c = e.removeScrollBar,
            d = e.enabled,
            f = e.shards,
            p = e.sideCar,
            h = e.noIsolation,
            m = e.inert,
            v = e.allowPinchZoom,
            g = e.as,
            y = e.gapMode,
            b = (0, Z._T)(e, [
              "forwardProps",
              "children",
              "className",
              "removeScrollBar",
              "enabled",
              "shards",
              "sideCar",
              "noIsolation",
              "inert",
              "allowPinchZoom",
              "as",
              "gapMode",
            ]),
            w = (0, J.q)([n, t]),
            E = (0, Z.pi)((0, Z.pi)({}, b), i);
          return o.createElement(
            o.Fragment,
            null,
            d &&
              o.createElement(p, {
                sideCar: ee,
                removeScrollBar: c,
                shards: f,
                noIsolation: h,
                inert: m,
                setCallbacks: a,
                allowPinchZoom: !!v,
                lockRef: n,
                gapMode: y,
              }),
            u
              ? o.cloneElement(
                  o.Children.only(l),
                  (0, Z.pi)((0, Z.pi)({}, E), { ref: w })
                )
              : o.createElement(
                  void 0 === g ? "div" : g,
                  (0, Z.pi)({}, E, { className: s, ref: w }),
                  l
                )
          );
        });
      (en.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 }),
        (en.classNames = { fullWidth: Q.zi, zeroRight: Q.pF });
      var er = n(8776),
        eo = n(5973),
        ei = n(8039),
        ea = !1;
      if ("undefined" != typeof window)
        try {
          var eu = Object.defineProperty({}, "passive", {
            get: function () {
              return (ea = !0), !0;
            },
          });
          window.addEventListener("test", eu, eu),
            window.removeEventListener("test", eu, eu);
        } catch (e) {
          ea = !1;
        }
      var el = !!ea && { passive: !1 },
        es = function (e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return (
            "hidden" !== n[t] &&
            !(
              n.overflowY === n.overflowX &&
              "TEXTAREA" !== e.tagName &&
              "visible" === n[t]
            )
          );
        },
        ec = function (e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if (
              ("undefined" != typeof ShadowRoot &&
                r instanceof ShadowRoot &&
                (r = r.host),
              ed(e, r))
            ) {
              var o = ef(e, r);
              if (o[1] > o[2]) return !0;
            }
            r = r.parentNode;
          } while (r && r !== n.body);
          return !1;
        },
        ed = function (e, t) {
          return "v" === e ? es(t, "overflowY") : es(t, "overflowX");
        },
        ef = function (e, t) {
          return "v" === e
            ? [t.scrollTop, t.scrollHeight, t.clientHeight]
            : [t.scrollLeft, t.scrollWidth, t.clientWidth];
        },
        ep = function (e, t, n, r, o) {
          var i,
            a =
              ((i = window.getComputedStyle(t).direction),
              "h" === e && "rtl" === i ? -1 : 1),
            u = a * r,
            l = n.target,
            s = t.contains(l),
            c = !1,
            d = u > 0,
            f = 0,
            p = 0;
          do {
            var h = ef(e, l),
              m = h[0],
              v = h[1] - h[2] - a * m;
            (m || v) && ed(e, l) && ((f += v), (p += m)),
              l instanceof ShadowRoot ? (l = l.host) : (l = l.parentNode);
          } while (
            (!s && l !== document.body) ||
            (s && (t.contains(l) || t === l))
          );
          return (
            d && ((o && 1 > Math.abs(f)) || (!o && u > f))
              ? (c = !0)
              : !d && ((o && 1 > Math.abs(p)) || (!o && -u > p)) && (c = !0),
            c
          );
        },
        eh = function (e) {
          return "changedTouches" in e
            ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY]
            : [0, 0];
        },
        em = function (e) {
          return [e.deltaX, e.deltaY];
        },
        ev = function (e) {
          return e && "current" in e ? e.current : e;
        },
        eg = 0,
        ey = [],
        eb = (0, er.L)(ee, function (e) {
          var t = o.useRef([]),
            n = o.useRef([0, 0]),
            r = o.useRef(),
            i = o.useState(eg++)[0],
            a = o.useState(ei.Ws)[0],
            u = o.useRef(e);
          o.useEffect(
            function () {
              u.current = e;
            },
            [e]
          ),
            o.useEffect(
              function () {
                if (e.inert) {
                  document.body.classList.add("block-interactivity-".concat(i));
                  var t = (0, Z.ev)(
                    [e.lockRef.current],
                    (e.shards || []).map(ev),
                    !0
                  ).filter(Boolean);
                  return (
                    t.forEach(function (e) {
                      return e.classList.add("allow-interactivity-".concat(i));
                    }),
                    function () {
                      document.body.classList.remove(
                        "block-interactivity-".concat(i)
                      ),
                        t.forEach(function (e) {
                          return e.classList.remove(
                            "allow-interactivity-".concat(i)
                          );
                        });
                    }
                  );
                }
              },
              [e.inert, e.lockRef.current, e.shards]
            );
          var l = o.useCallback(function (e, t) {
              if (
                ("touches" in e && 2 === e.touches.length) ||
                ("wheel" === e.type && e.ctrlKey)
              )
                return !u.current.allowPinchZoom;
              var o,
                i = eh(e),
                a = n.current,
                l = "deltaX" in e ? e.deltaX : a[0] - i[0],
                s = "deltaY" in e ? e.deltaY : a[1] - i[1],
                c = e.target,
                d = Math.abs(l) > Math.abs(s) ? "h" : "v";
              if ("touches" in e && "h" === d && "range" === c.type) return !1;
              var f = ec(d, c);
              if (!f) return !0;
              if (
                (f ? (o = d) : ((o = "v" === d ? "h" : "v"), (f = ec(d, c))),
                !f)
              )
                return !1;
              if (
                (!r.current &&
                  "changedTouches" in e &&
                  (l || s) &&
                  (r.current = o),
                !o)
              )
                return !0;
              var p = r.current || o;
              return ep(p, t, e, "h" === p ? l : s, !0);
            }, []),
            s = o.useCallback(function (e) {
              if (ey.length && ey[ey.length - 1] === a) {
                var n = "deltaY" in e ? em(e) : eh(e),
                  r = t.current.filter(function (t) {
                    var r;
                    return (
                      t.name === e.type &&
                      (t.target === e.target || e.target === t.shadowParent) &&
                      (r = t.delta)[0] === n[0] &&
                      r[1] === n[1]
                    );
                  })[0];
                if (r && r.should) {
                  e.cancelable && e.preventDefault();
                  return;
                }
                if (!r) {
                  var o = (u.current.shards || [])
                    .map(ev)
                    .filter(Boolean)
                    .filter(function (t) {
                      return t.contains(e.target);
                    });
                  (o.length > 0 ? l(e, o[0]) : !u.current.noIsolation) &&
                    e.cancelable &&
                    e.preventDefault();
                }
              }
            }, []),
            c = o.useCallback(function (e, n, r, o) {
              var i = {
                name: e,
                delta: n,
                target: r,
                should: o,
                shadowParent: (function (e) {
                  for (var t = null; null !== e; )
                    e instanceof ShadowRoot && ((t = e.host), (e = e.host)),
                      (e = e.parentNode);
                  return t;
                })(r),
              };
              t.current.push(i),
                setTimeout(function () {
                  t.current = t.current.filter(function (e) {
                    return e !== i;
                  });
                }, 1);
            }, []),
            d = o.useCallback(function (e) {
              (n.current = eh(e)), (r.current = void 0);
            }, []),
            f = o.useCallback(function (t) {
              c(t.type, em(t), t.target, l(t, e.lockRef.current));
            }, []),
            p = o.useCallback(function (t) {
              c(t.type, eh(t), t.target, l(t, e.lockRef.current));
            }, []);
          o.useEffect(function () {
            return (
              ey.push(a),
              e.setCallbacks({
                onScrollCapture: f,
                onWheelCapture: f,
                onTouchMoveCapture: p,
              }),
              document.addEventListener("wheel", s, el),
              document.addEventListener("touchmove", s, el),
              document.addEventListener("touchstart", d, el),
              function () {
                (ey = ey.filter(function (e) {
                  return e !== a;
                })),
                  document.removeEventListener("wheel", s, el),
                  document.removeEventListener("touchmove", s, el),
                  document.removeEventListener("touchstart", d, el);
              }
            );
          }, []);
          var h = e.removeScrollBar,
            m = e.inert;
          return o.createElement(
            o.Fragment,
            null,
            m
              ? o.createElement(a, {
                  styles: "\n  .block-interactivity-"
                    .concat(
                      i,
                      " {pointer-events: none;}\n  .allow-interactivity-"
                    )
                    .concat(i, " {pointer-events: all;}\n"),
                })
              : null,
            h ? o.createElement(eo.jp, { gapMode: e.gapMode }) : null
          );
        }),
        ew = o.forwardRef(function (e, t) {
          return o.createElement(en, (0, Z.pi)({}, e, { ref: t, sideCar: eb }));
        });
      ew.classNames = en.classNames;
      var eE = "Popover",
        [ex, eP] = (0, u.b)(eE, [j]),
        eC = j(),
        [eS, eR] = ex(eE),
        eO = (e) => {
          let {
              __scopePopover: t,
              children: n,
              open: r,
              defaultOpen: i,
              onOpenChange: a,
              modal: u = !1,
            } = e,
            l = eC(t),
            s = o.useRef(null),
            [c, f] = o.useState(!1),
            [p = !1, h] = (0, X.T)({ prop: r, defaultProp: i, onChange: a });
          return (0, d.jsx)(N, {
            ...l,
            children: (0, d.jsx)(eS, {
              scope: t,
              contentId: (0, w.M)(),
              triggerRef: s,
              open: p,
              onOpenChange: h,
              onOpenToggle: o.useCallback(() => h((e) => !e), [h]),
              hasCustomAnchor: c,
              onCustomAnchorAdd: o.useCallback(() => f(!0), []),
              onCustomAnchorRemove: o.useCallback(() => f(!1), []),
              modal: u,
              children: n,
            }),
          });
        };
      eO.displayName = eE;
      var ej = "PopoverAnchor";
      o.forwardRef((e, t) => {
        let { __scopePopover: n, ...r } = e,
          i = eR(ej, n),
          a = eC(n),
          { onCustomAnchorAdd: u, onCustomAnchorRemove: l } = i;
        return (
          o.useEffect(() => (u(), () => l()), [u, l]),
          (0, d.jsx)(k, { ...a, ...r, ref: t })
        );
      }).displayName = ej;
      var e_ = "PopoverTrigger",
        eM = o.forwardRef((e, t) => {
          let { __scopePopover: n, ...r } = e,
            o = eR(e_, n),
            u = eC(n),
            s = (0, a.e)(t, o.triggerRef),
            c = (0, d.jsx)(l.WV.button, {
              type: "button",
              "aria-haspopup": "dialog",
              "aria-expanded": o.open,
              "aria-controls": o.contentId,
              "data-state": ez(o.open),
              ...r,
              ref: s,
              onClick: (0, i.M)(e.onClick, o.onOpenToggle),
            });
          return o.hasCustomAnchor
            ? c
            : (0, d.jsx)(k, { asChild: !0, ...u, children: c });
        });
      eM.displayName = e_;
      var eN = "PopoverPortal",
        [eA, ek] = ex(eN, { forceMount: void 0 }),
        eT = (e) => {
          let {
              __scopePopover: t,
              forceMount: n,
              children: r,
              container: o,
            } = e,
            i = eR(eN, t);
          return (0, d.jsx)(eA, {
            scope: t,
            forceMount: n,
            children: (0, d.jsx)(H, {
              present: n || i.open,
              children: (0, d.jsx)(K, {
                asChild: !0,
                container: o,
                children: r,
              }),
            }),
          });
        };
      eT.displayName = eN;
      var eI = "PopoverContent",
        eL = o.forwardRef((e, t) => {
          let n = ek(eI, e.__scopePopover),
            { forceMount: r = n.forceMount, ...o } = e,
            i = eR(eI, e.__scopePopover);
          return (0, d.jsx)(H, {
            present: r || i.open,
            children: i.modal
              ? (0, d.jsx)(eD, { ...o, ref: t })
              : (0, d.jsx)(eW, { ...o, ref: t }),
          });
        });
      eL.displayName = eI;
      var eD = o.forwardRef((e, t) => {
          let n = eR(eI, e.__scopePopover),
            r = o.useRef(null),
            u = (0, a.e)(t, r),
            l = o.useRef(!1);
          return (
            o.useEffect(() => {
              let e = r.current;
              if (e) return (0, G.Ry)(e);
            }, []),
            (0, d.jsx)(ew, {
              as: q.g7,
              allowPinchZoom: !0,
              children: (0, d.jsx)(eF, {
                ...e,
                ref: u,
                trapFocus: n.open,
                disableOutsidePointerEvents: !0,
                onCloseAutoFocus: (0, i.M)(e.onCloseAutoFocus, (e) => {
                  var t;
                  e.preventDefault(),
                    l.current ||
                      null === (t = n.triggerRef.current) ||
                      void 0 === t ||
                      t.focus();
                }),
                onPointerDownOutside: (0, i.M)(
                  e.onPointerDownOutside,
                  (e) => {
                    let t = e.detail.originalEvent,
                      n = 0 === t.button && !0 === t.ctrlKey,
                      r = 2 === t.button || n;
                    l.current = r;
                  },
                  { checkForDefaultPrevented: !1 }
                ),
                onFocusOutside: (0, i.M)(
                  e.onFocusOutside,
                  (e) => e.preventDefault(),
                  { checkForDefaultPrevented: !1 }
                ),
              }),
            })
          );
        }),
        eW = o.forwardRef((e, t) => {
          let n = eR(eI, e.__scopePopover),
            r = o.useRef(!1),
            i = o.useRef(!1);
          return (0, d.jsx)(eF, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: (t) => {
              var o, a;
              null === (o = e.onCloseAutoFocus) || void 0 === o || o.call(e, t),
                t.defaultPrevented ||
                  (r.current ||
                    null === (a = n.triggerRef.current) ||
                    void 0 === a ||
                    a.focus(),
                  t.preventDefault()),
                (r.current = !1),
                (i.current = !1);
            },
            onInteractOutside: (t) => {
              var o, a;
              null === (o = e.onInteractOutside) ||
                void 0 === o ||
                o.call(e, t),
                t.defaultPrevented ||
                  ((r.current = !0),
                  "pointerdown" !== t.detail.originalEvent.type ||
                    (i.current = !0));
              let u = t.target;
              (null === (a = n.triggerRef.current) || void 0 === a
                ? void 0
                : a.contains(u)) && t.preventDefault(),
                "focusin" === t.detail.originalEvent.type &&
                  i.current &&
                  t.preventDefault();
            },
          });
        }),
        eF = o.forwardRef((e, t) => {
          let {
              __scopePopover: n,
              trapFocus: r,
              onOpenAutoFocus: i,
              onCloseAutoFocus: a,
              disableOutsidePointerEvents: u,
              onEscapeKeyDown: l,
              onPointerDownOutside: s,
              onFocusOutside: c,
              onInteractOutside: f,
              ...p
            } = e,
            m = eR(eI, n),
            v = eC(n);
          return (
            o.useEffect(() => {
              var e, t;
              let n = document.querySelectorAll("[data-radix-focus-guard]");
              return (
                document.body.insertAdjacentElement(
                  "afterbegin",
                  null !== (e = n[0]) && void 0 !== e ? e : y()
                ),
                document.body.insertAdjacentElement(
                  "beforeend",
                  null !== (t = n[1]) && void 0 !== t ? t : y()
                ),
                g++,
                () => {
                  1 === g &&
                    document
                      .querySelectorAll("[data-radix-focus-guard]")
                      .forEach((e) => e.remove()),
                    g--;
                }
              );
            }, []),
            (0, d.jsx)(b.M, {
              asChild: !0,
              loop: !0,
              trapped: r,
              onMountAutoFocus: i,
              onUnmountAutoFocus: a,
              children: (0, d.jsx)(h, {
                asChild: !0,
                disableOutsidePointerEvents: u,
                onInteractOutside: f,
                onEscapeKeyDown: l,
                onPointerDownOutside: s,
                onFocusOutside: c,
                onDismiss: () => m.onOpenChange(!1),
                children: (0, d.jsx)(D, {
                  "data-state": ez(m.open),
                  role: "dialog",
                  id: m.contentId,
                  ...v,
                  ...p,
                  ref: t,
                  style: {
                    ...p.style,
                    "--radix-popover-content-transform-origin":
                      "var(--radix-popper-transform-origin)",
                    "--radix-popover-content-available-width":
                      "var(--radix-popper-available-width)",
                    "--radix-popover-content-available-height":
                      "var(--radix-popper-available-height)",
                    "--radix-popover-trigger-width":
                      "var(--radix-popper-anchor-width)",
                    "--radix-popover-trigger-height":
                      "var(--radix-popper-anchor-height)",
                  },
                }),
              }),
            })
          );
        }),
        eU = "PopoverClose";
      function ez(e) {
        return e ? "open" : "closed";
      }
      (o.forwardRef((e, t) => {
        let { __scopePopover: n, ...r } = e,
          o = eR(eU, n);
        return (0, d.jsx)(l.WV.button, {
          type: "button",
          ...r,
          ref: t,
          onClick: (0, i.M)(e.onClick, () => o.onOpenChange(!1)),
        });
      }).displayName = eU),
        (o.forwardRef((e, t) => {
          let { __scopePopover: n, ...r } = e,
            o = eC(n);
          return (0, d.jsx)(U, { ...o, ...r, ref: t });
        }).displayName = "PopoverArrow");
      var eB = eO,
        eV = eM,
        eY = eT,
        eK = eL;
    },
    5171: function (e, t, n) {
      "use strict";
      n.d(t, {
        WV: function () {
          return u;
        },
        jH: function () {
          return l;
        },
      });
      var r = n(2265),
        o = n(4887),
        i = n(1538),
        a = n(7437),
        u = [
          "a",
          "button",
          "div",
          "form",
          "h2",
          "h3",
          "img",
          "input",
          "label",
          "li",
          "nav",
          "ol",
          "p",
          "span",
          "svg",
          "ul",
        ].reduce((e, t) => {
          let n = r.forwardRef((e, n) => {
            let { asChild: r, ...o } = e,
              u = r ? i.g7 : t;
            return (
              "undefined" != typeof window &&
                (window[Symbol.for("radix-ui")] = !0),
              (0, a.jsx)(u, { ...o, ref: n })
            );
          });
          return (n.displayName = `Primitive.${t}`), { ...e, [t]: n };
        }, {});
      function l(e, t) {
        e && o.flushSync(() => e.dispatchEvent(t));
      }
    },
    1538: function (e, t, n) {
      "use strict";
      n.d(t, {
        g7: function () {
          return a;
        },
      });
      var r = n(2265),
        o = n(1584),
        i = n(7437),
        a = r.forwardRef((e, t) => {
          let { children: n, ...o } = e,
            a = r.Children.toArray(n),
            l = a.find(s);
          if (l) {
            let e = l.props.children,
              n = a.map((t) =>
                t !== l
                  ? t
                  : r.Children.count(e) > 1
                  ? r.Children.only(null)
                  : r.isValidElement(e)
                  ? e.props.children
                  : null
              );
            return (0, i.jsx)(u, {
              ...o,
              ref: t,
              children: r.isValidElement(e)
                ? r.cloneElement(e, void 0, n)
                : null,
            });
          }
          return (0, i.jsx)(u, { ...o, ref: t, children: n });
        });
      a.displayName = "Slot";
      var u = r.forwardRef((e, t) => {
        let { children: n, ...i } = e;
        if (r.isValidElement(n)) {
          let e, a;
          let u =
            (e = Object.getOwnPropertyDescriptor(n.props, "ref")?.get) &&
            "isReactWarning" in e &&
            e.isReactWarning
              ? n.ref
              : (e = Object.getOwnPropertyDescriptor(n, "ref")?.get) &&
                "isReactWarning" in e &&
                e.isReactWarning
              ? n.props.ref
              : n.props.ref || n.ref;
          return r.cloneElement(n, {
            ...(function (e, t) {
              let n = { ...t };
              for (let r in t) {
                let o = e[r],
                  i = t[r];
                /^on[A-Z]/.test(r)
                  ? o && i
                    ? (n[r] = (...e) => {
                        i(...e), o(...e);
                      })
                    : o && (n[r] = o)
                  : "style" === r
                  ? (n[r] = { ...o, ...i })
                  : "className" === r &&
                    (n[r] = [o, i].filter(Boolean).join(" "));
              }
              return { ...e, ...n };
            })(i, n.props),
            ref: t ? (0, o.F)(t, u) : u,
          });
        }
        return r.Children.count(n) > 1 ? r.Children.only(null) : null;
      });
      u.displayName = "SlotClone";
      var l = ({ children: e }) => (0, i.jsx)(i.Fragment, { children: e });
      function s(e) {
        return r.isValidElement(e) && e.type === l;
      }
    },
    2218: function (e, t, n) {
      "use strict";
      n.d(t, {
        j: function () {
          return i;
        },
      });
      let r = (e) => ("boolean" == typeof e ? "".concat(e) : 0 === e ? "0" : e),
        o = function () {
          for (var e, t, n = 0, r = ""; n < arguments.length; )
            (e = arguments[n++]) &&
              (t = (function e(t) {
                var n,
                  r,
                  o = "";
                if ("string" == typeof t || "number" == typeof t) o += t;
                else if ("object" == typeof t) {
                  if (Array.isArray(t))
                    for (n = 0; n < t.length; n++)
                      t[n] && (r = e(t[n])) && (o && (o += " "), (o += r));
                  else for (n in t) t[n] && (o && (o += " "), (o += n));
                }
                return o;
              })(e)) &&
              (r && (r += " "), (r += t));
          return r;
        },
        i = (e, t) => (n) => {
          var i;
          if ((null == t ? void 0 : t.variants) == null)
            return o(
              e,
              null == n ? void 0 : n.class,
              null == n ? void 0 : n.className
            );
          let { variants: a, defaultVariants: u } = t,
            l = Object.keys(a).map((e) => {
              let t = null == n ? void 0 : n[e],
                o = null == u ? void 0 : u[e];
              if (null === t) return null;
              let i = r(t) || r(o);
              return a[e][i];
            }),
            s =
              n &&
              Object.entries(n).reduce((e, t) => {
                let [n, r] = t;
                return void 0 === r || (e[n] = r), e;
              }, {});
          return o(
            e,
            l,
            null == t
              ? void 0
              : null === (i = t.compoundVariants) || void 0 === i
              ? void 0
              : i.reduce((e, t) => {
                  let { class: n, className: r, ...o } = t;
                  return Object.entries(o).every((e) => {
                    let [t, n] = e;
                    return Array.isArray(n)
                      ? n.includes({ ...u, ...s }[t])
                      : { ...u, ...s }[t] === n;
                  })
                    ? [...e, n, r]
                    : e;
                }, []),
            null == n ? void 0 : n.class,
            null == n ? void 0 : n.className
          );
        };
    },
    1735: function (e, t, n) {
      "use strict";
      n.d(t, {
        _T: function () {
          return o;
        },
        ev: function () {
          return i;
        },
        pi: function () {
          return r;
        },
      });
      var r = function () {
        return (r =
          Object.assign ||
          function (e) {
            for (var t, n = 1, r = arguments.length; n < r; n++)
              for (var o in (t = arguments[n]))
                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e;
          }).apply(this, arguments);
      };
      function o(e, t) {
        var n = {};
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) &&
            0 > t.indexOf(r) &&
            (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols)
          for (
            var o = 0, r = Object.getOwnPropertySymbols(e);
            o < r.length;
            o++
          )
            0 > t.indexOf(r[o]) &&
              Object.prototype.propertyIsEnumerable.call(e, r[o]) &&
              (n[r[o]] = e[r[o]]);
        return n;
      }
      function i(e, t, n) {
        if (n || 2 == arguments.length)
          for (var r, o = 0, i = t.length; o < i; o++)
            (!r && o in t) ||
              (r || (r = Array.prototype.slice.call(t, 0, o)), (r[o] = t[o]));
        return e.concat(r || Array.prototype.slice.call(t));
      }
      "function" == typeof SuppressedError && SuppressedError;
    },
  },
]);
