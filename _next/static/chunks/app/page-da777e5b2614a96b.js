(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    1063: function (e, t, r) {
      Promise.resolve().then(r.t.bind(r, 8173, 23)),
        Promise.resolve().then(r.t.bind(r, 231, 23)),
        Promise.resolve().then(r.bind(r, 1054)),
        Promise.resolve().then(r.bind(r, 9499)),
        Promise.resolve().then(r.bind(r, 3557)),
        Promise.resolve().then(r.bind(r, 7621)),
        Promise.resolve().then(r.bind(r, 6775)),
        Promise.resolve().then(r.bind(r, 3058));
    },
    9354: function (e, t, r) {
      "use strict";
      r.d(t, {
        cn: function () {
          return s;
        },
      });
      var n = r(4839),
        a = r(6164);
      function s() {
        for (var e = arguments.length, t = Array(e), r = 0; r < e; r++)
          t[r] = arguments[r];
        return (0, a.m6)((0, n.W)(t));
      }
    },
    1054: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return i;
        },
      });
      var n = r(7437),
        a = r(6648),
        s = r(5860);
      function i(e) {
        let { buyLink: t } = e;
        return (0, n.jsxs)("div", {
          className: "bg-secondary w-full",
          children: [
            (0, n.jsxs)("div", {
              className:
                "flex flex-col items-center justify-start w-full space-y-[54px] xl:space-y-[82px] bg-secondary",
              children: [
                (0, n.jsx)("h3", {
                  className:
                    "px-4 text-left text-primary-foreground text-[50px] leading-[56px] uppercase font-extended font-normal tracking-[2%] md:text-center lg:text-[80px] lg:leading-[80px] lg:text-center max-w-[1400px]",
                  children:
                    "BadCat is a lazy, degenerate gambler whose old tricks stopped working. His friends failed him, and frustration boiled over.",
                }),
                (0, n.jsx)(s.z, {
                  size: "lg",
                  onClick: () => {
                    var e, t;
                    return null === (e = (t = window).fbq) || void 0 === e
                      ? void 0
                      : e.call(t, "track", "Buy BadCat", { position: "ponke" });
                  },
                  children: (0, n.jsx)("a", {
                    href: t,
                    target: "_blank",
                    children: "Buy BadCat",
                  }),
                }),
              ],
            }),
            (0, n.jsx)(a.default, {
              src: "/badcat-ponke/paint.webp",
              alt: "Bad Cat Paint",
              width: 1500,
              height: 750,
              className:
                "object-cover h-[300px] -mt-[100px] lg:h-full lg:mt-[-200px] 3xl:-mt-[450px] w-full lg:object-contain",
            }),
          ],
        });
      }
    },
    9499: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return l;
        },
      });
      var n = r(7437),
        a = r(2265),
        s = r(3227),
        i = r(939);
      function l(e) {
        let { address: t } = e,
          [r, l] = (0, a.useState)(6),
          [o, d] = (0, a.useState)(""),
          [c, x] = (0, a.useState)(""),
          [p, f] = (0, s.Z)(t),
          [h, m] = (0, a.useState)(!1);
        if (
          ((0, a.useEffect)(() => {
            let e = () => {
              let e = window.innerWidth;
              e > 1400
                ? (l(12),
                  d("$BADCAT contract address >>>"),
                  x("<<< contract address $BADCAT"))
                : (e > 768 ? l(8) : l(6), d("Contract >>"), x("<< address"));
            };
            return (
              e(),
              window.addEventListener("resize", e),
              () => window.removeEventListener("resize", e)
            );
          }, []),
          !t)
        )
          return null;
        let u = t.slice(0, r),
          g = t.slice(-r),
          C = () => f();
        return (0, n.jsx)("div", {
          className:
            "relative z-10 w-full font-dangrek uppercase text-[20px] sm:text-[24px] lg:text-[35px] border-b-[4px] border-black bg-primary-foreground whitespace-nowrap overflow-hidden",
          children: (0, n.jsxs)("div", {
            className: "px-4 flex items-center justify-center",
            children: [
              o,
              "    ",
              (0, n.jsxs)(i.J2, {
                open: h,
                onOpenChange: m,
                children: [
                  (0, n.jsx)(i.xo, {
                    asChild: !0,
                    onClick: C,
                    children: (0, n.jsxs)("span", {
                      className:
                        "px-2 text-[#121216] cursor-pointer underline leading-none",
                      onClick: C,
                      children: [u, "...", g],
                    }),
                  }),
                  (0, n.jsx)(i.yk, {
                    side: "bottom",
                    children: (0, n.jsx)("p", {
                      className: "font-dangrek text-[27px] leading-none",
                      children: "✅ Copied",
                    }),
                  }),
                ],
              }),
              c,
            ],
          }),
        });
      }
    },
    3557: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return p;
        },
      });
      var n = r(7437),
        a = r(7138),
        s = r(9354);
      function i(e) {
        return (0, n.jsxs)("svg", {
          width: "100%",
          height: "100%",
          viewBox: "0 0 54 54",
          ...e,
          children: [
            (0, n.jsx)("g", {
              clipPath: "url(#clip0_529_7548)",
              children: (0, n.jsx)("path", {
                d: "M1.12507 2.6625H0.445563L0.856149 3.20393L20.7604 29.4513L0.753903 50.769L0.220408 51.3375H1H5.54788H5.69397L5.79396 51.231L23.2086 32.6774L37.2574 51.2039L37.3586 51.3375H37.5263H53H53.6795L53.2689 50.7961L32.236 23.0595L50.8456 3.23096L51.3791 2.6625H50.5995H46.0516H45.9055L45.8055 2.76904L29.7909 19.8334L16.8708 2.79607L16.7695 2.6625H16.6018H1.12809H1.12507ZM39.3685 47.3592L8.49061 6.64079H14.7505L45.6283 47.3592H39.3685Z",
                strokeWidth: "0.675",
              }),
            }),
            (0, n.jsx)("defs", {
              children: (0, n.jsx)("clipPath", {
                id: "clip0_529_7548",
                children: (0, n.jsx)("rect", { width: "54", height: "54" }),
              }),
            }),
          ],
        });
      }
      function l(e) {
        return (0, n.jsx)("svg", {
          width: "100%",
          height: "100%",
          viewBox: "0 0 54 54",
          preserveAspectRatio: "xMidYMid meet",
          ...e,
          xmlns: "http://www.w3.org/2000/svg",
          children: (0, n.jsx)("path", {
            d: "M1.4187 25.0572C1.54271 24.9961 1.66678 24.9381 1.78769 24.8831C3.88966 23.9247 6.01953 23.0272 8.1463 22.1298C8.26101 22.1298 8.45318 21.9985 8.56169 21.9558C8.726 21.8856 8.89034 21.8184 9.05465 21.7482C9.37088 21.6139 9.68712 21.4826 10.0002 21.3483C10.6327 21.0828 11.262 20.8172 11.8945 20.5517C13.1563 20.0205 14.418 19.4894 15.6798 18.9552C18.2035 17.893 20.7302 16.8276 23.2538 15.7653C25.7774 14.703 28.3041 13.6377 30.8277 12.5755C33.3513 11.5132 35.878 10.4479 38.4016 9.38562C40.9252 8.32336 43.452 7.25805 45.9756 6.19578C46.5367 5.95769 47.1443 5.60359 47.7458 5.49981C48.2511 5.41128 48.744 5.24037 49.2525 5.14574C50.2166 4.96565 51.28 4.89238 52.2039 5.28615C52.5232 5.42351 52.8178 5.61578 53.0627 5.85693C54.2346 6.99856 54.0702 8.87283 53.8222 10.4784C52.0954 21.6689 50.3686 32.8624 48.6386 44.0528C48.403 45.5882 48.0806 47.2732 46.8498 48.2439C45.8081 49.065 44.3262 49.1565 43.0395 48.8085C41.7529 48.4575 40.6183 47.7219 39.5053 46.9984C34.889 43.9887 30.2697 40.9789 25.6534 37.9691C24.5559 37.2549 23.3344 36.3208 23.3468 35.0235C23.353 34.2421 23.8273 33.5461 24.311 32.9264C28.3227 27.7738 34.1109 24.233 38.4171 19.3184C39.0248 18.6255 39.5022 17.374 38.6682 16.9742C38.1722 16.7361 37.6017 17.0596 37.1491 17.3679C31.457 21.2598 25.7681 25.1548 20.0761 29.0467C18.219 30.3165 16.2721 31.623 14.0337 31.9344C12.0309 32.2152 10.0158 31.6657 8.07811 31.1041C6.45358 30.634 4.83209 30.1517 3.21686 29.6541C2.35809 29.3916 1.47141 29.1078 0.80796 28.5125C0.144507 27.9173 -0.236772 26.9161 0.16316 26.1225C0.41428 25.6249 0.901028 25.3105 1.41257 25.0541L1.4187 25.0572Z",
          }),
        });
      }
      function o(e) {
        return (0, n.jsxs)("svg", {
          width: "100%",
          height: "100%",
          viewBox: "0 0 54 54",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            (0, n.jsxs)("g", {
              clipPath: "url(#clip0_529_7542)",
              children: [
                (0, n.jsx)("path", {
                  d: "M40.4863 1H13.5137C6.0621 1 0 7.06756 0 14.5259L0 39.2241C0 46.6824 6.0621 52.75 13.5137 52.75H40.4863C47.9379 52.75 54 46.6824 54 39.2241V14.5259C54 7.06756 47.9379 1 40.4863 1ZM4.76723 14.5259C4.76723 9.69938 8.69155 5.77151 13.5137 5.77151H40.4863C45.3085 5.77151 49.2328 9.69938 49.2328 14.5259V39.2241C49.2328 44.0506 45.3085 47.9785 40.4863 47.9785H13.5137C8.69155 47.9785 4.76723 44.0506 4.76723 39.2241V14.5259Z",
                }),
                (0, n.jsx)("path", {
                  d: "M26.9998 39.4526C33.9292 39.4526 39.5698 33.8099 39.5698 26.8712C39.5698 19.9325 33.9322 14.2898 26.9998 14.2898C20.0673 14.2898 14.4297 19.9325 14.4297 26.8712C14.4297 33.8099 20.0673 39.4526 26.9998 39.4526ZM26.9998 19.0644C31.3028 19.0644 34.8026 22.5673 34.8026 26.8742C34.8026 31.1811 31.3028 34.6841 26.9998 34.6841C22.6967 34.6841 19.1969 31.1811 19.1969 26.8742C19.1969 22.5673 22.6967 19.0644 26.9998 19.0644Z",
                }),
                (0, n.jsx)("path", {
                  d: "M40.7384 16.3235C42.6044 16.3235 44.1252 14.8043 44.1252 12.9336C44.1252 11.0629 42.6074 9.5437 40.7384 9.5437C38.8694 9.5437 37.3516 11.0629 37.3516 12.9336C37.3516 14.8043 38.8694 16.3235 40.7384 16.3235Z",
                }),
              ],
            }),
            (0, n.jsx)("defs", {
              children: (0, n.jsx)("clipPath", {
                id: "clip0_529_7542",
                children: (0, n.jsx)("rect", { width: "54", height: "54" }),
              }),
            }),
          ],
        });
      }
      function d(e) {
        return (0, n.jsxs)("svg", {
          width: "100%",
          height: "65",
          viewBox: "0 0 54 65",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: [
            (0, n.jsx)("g", {
              id: "Layer_1",
              clipPath: "url(#clip0_1639_2010)",
              children: (0, n.jsx)("g", {
                id: "6PoPlD",
                children: (0, n.jsxs)("g", {
                  id: "Group",
                  children: [
                    (0, n.jsx)("path", {
                      id: "Vector",
                      d: "M18.6814 27.2213L18.3642 30.5012L11.6078 34.399L11.4813 34.6141C12.5973 35.1366 13.688 35.7388 14.7573 36.3499C17.2861 37.7938 18.4518 38.3007 20.0835 40.8509C23.6009 46.3474 24.9017 53.5446 26.9421 59.6793L27.1455 59.8165C28.2712 55.9342 29.2841 51.9946 30.6473 48.1873C31.7574 45.0873 33.754 39.9879 36.456 38.039C38.328 36.6895 40.7119 35.806 42.616 34.4691L35.6601 30.4312L35.4159 27.2203C40.3509 27.3896 44.6165 23.6777 43.3253 18.4848C43.1064 17.6033 42.6209 16.8531 42.3377 16.0027C43.6591 14.7047 44.7799 13.2394 45.8765 11.7517C46.7794 13.3124 47.552 15.0482 48.0385 16.7879C49.4104 21.6996 48.6631 27.0734 48.8402 32.1378C49.0514 38.1694 50.3231 44.2379 52.7186 49.7626C53.1224 50.6927 53.6225 51.5772 54 52.5181L46.7357 46.6899L41.4475 55.1451L35.8557 49.9883L27.0005 64.1949L18.2893 49.9893L12.6966 55.1442L7.36067 46.6908L0 52.5181C2.5687 47.7193 4.18289 42.3036 4.85133 36.8889C5.49837 31.6484 4.98268 26.618 5.25026 21.4281C5.38939 18.7339 6.56185 14.0655 8.12836 11.8519C8.1955 11.7575 8.19258 11.7099 8.26847 11.8043C9.4205 13.2345 10.4198 14.7884 11.7459 16.0796C10.3263 18.6453 9.91672 21.5361 11.6934 24.0416C13.2677 26.2619 16.0067 27.3225 18.6814 27.2223V27.2213Z",
                      fill: "currentColor",
                    }),
                    (0, n.jsx)("path", {
                      id: "Vector_2",
                      d: "M47.1564 4.03013C47.3539 3.82775 47.529 3.49791 47.7246 3.28385C47.8355 3.16222 47.9173 3.13303 47.8706 3.33152C47.7947 3.64969 47.5193 4.26462 47.3724 4.58474C44.8416 10.0967 37.9003 16.1186 32.6617 19.0638C32.2959 19.2691 30.922 20.0757 30.6272 20.0027C30.4774 19.9658 30.1719 19.6797 29.9714 19.5805C28.2629 18.733 26.9007 18.4742 25.0539 19.1426C24.4312 19.3684 23.9204 19.777 23.3133 20.0212C20.5266 18.6941 17.9063 16.9096 15.5225 14.9578C11.7493 11.8685 7.90887 7.88998 6.22754 3.23617L7.49145 4.59933C8.63958 5.52854 9.8782 6.46455 11.4146 6.57742C19.6782 -2.21258 34.4063 -2.17463 42.6855 6.57742C44.4126 6.42271 45.9849 5.23469 47.1564 4.02916V4.03013Z",
                      fill: "currentColor",
                    }),
                    (0, n.jsx)("path", {
                      id: "Vector_3",
                      d: "M35.514 34.5178C30.4019 37.1829 28.6856 43.1142 27.0967 48.2389C26.8826 48.2818 26.9741 48.1465 26.9264 48.0249C26.2998 46.3951 25.8989 44.6321 25.247 42.9858C23.8985 39.5793 21.935 36.2556 18.584 34.5178C19.4568 33.5867 21.8571 33.1702 21.9943 31.7506C22.2706 28.8871 21.6703 26.8974 23.6027 24.3102C26.9284 19.8568 31.0402 23.379 31.8672 27.6086C32.1767 29.1897 31.9324 30.4955 32.1056 31.9433C32.1397 32.2255 32.3343 32.5757 32.56 32.7538C33.282 33.3249 34.5537 33.7803 35.3525 34.3398C35.4012 34.3738 35.5539 34.4585 35.514 34.5169V34.5178Z",
                      fill: "currentColor",
                    }),
                    (0, n.jsx)("path", {
                      id: "Vector_4",
                      d: "M21.5023 22.8439L20.5808 23.3313C18.2048 24.3899 13.8682 23.3401 14.0102 20.1711C14.0248 19.8529 14.2788 18.8157 14.45 18.5617C14.5639 18.3915 14.5571 18.5111 14.6427 18.5617C15.3831 19.0025 16.182 19.7527 16.9399 20.2547C18.3897 21.2151 19.9299 22.1005 21.5032 22.8429L21.5023 22.8439Z",
                      fill: "currentColor",
                    }),
                    (0, n.jsx)("path", {
                      id: "Vector_5",
                      d: "M32.5957 22.9393L36.3816 20.7432L39.5993 18.4655C41.6883 23.0862 35.9428 24.8882 32.5957 22.9393Z",
                      fill: "currentColor",
                    }),
                  ],
                }),
              }),
            }),
            (0, n.jsx)("defs", {
              children: (0, n.jsx)("clipPath", {
                id: "clip0_1639_2010",
                children: (0, n.jsx)("rect", {
                  width: "54",
                  height: "64.195",
                  fill: "white",
                }),
              }),
            }),
          ],
        });
      }
      function c(e) {
        return (0, n.jsx)("svg", {
          width: "100%",
          height: "54",
          viewBox: "0 0 54 54",
          fill: "none",
          xmlns: "http://www.w3.org/2000/svg",
          ...e,
          children: (0, n.jsx)("path", {
            d: "M45.7431 9.50085C42.2476 7.86538 38.51 6.67679 34.6025 6C34.1226 6.86762 33.562 8.0346 33.1754 8.96292C29.0216 8.33824 24.906 8.33824 20.8286 8.96292C20.4421 8.0346 19.8687 6.86762 19.3846 6C15.4728 6.67679 11.731 7.86975 8.23543 9.50951C1.18495 20.1637 -0.726325 30.5533 0.229312 40.7953C4.90557 44.2875 9.43742 46.4088 13.8928 47.797C14.9928 46.283 15.974 44.6736 16.8191 42.9774C15.2094 42.3657 13.6677 41.6109 12.2109 40.7346C12.5974 40.4483 12.9754 40.149 13.3407 39.841C22.2259 43.9968 31.88 43.9968 40.6592 39.841C41.0287 40.149 41.4066 40.4483 41.7889 40.7346C40.3278 41.6152 38.7819 42.37 37.1722 42.9818C38.0173 44.6736 38.9942 46.2873 40.0985 47.8013C44.5582 46.4131 49.0942 44.2918 53.7705 40.7953C54.8918 28.9222 51.855 18.628 45.7431 9.50085ZM18.0296 34.4966C15.3624 34.4966 13.175 32.0065 13.175 28.9742C13.175 25.942 15.3157 23.4476 18.0296 23.4476C20.7437 23.4476 22.931 25.9376 22.8843 28.9742C22.8885 32.0065 20.7437 34.4966 18.0296 34.4966ZM35.9702 34.4966C33.3029 34.4966 31.1155 32.0065 31.1155 28.9742C31.1155 25.942 33.2561 23.4476 35.9702 23.4476C38.6841 23.4476 40.8715 25.9376 40.8248 28.9742C40.8248 32.0065 38.6841 34.4966 35.9702 34.4966Z",
            fill: "currentColor",
          }),
        });
      }
      r(2265);
      var x = r(5860);
      function p(e) {
        let { buyLink: t } = e;
        return (0, n.jsxs)("div", {
          className:
            "flex-col items-center justify-start w-full -mt-[110px] lg:-mt-[200px] xl:-mt-[300px] z-10 space-y-6 md:space-y-10 pb-[50px] lg:pb-[100px] flex overflow-x-hidden",
          children: [
            (0, n.jsx)("div", {
              className:
                "relative pt-4 xl:pt-[35px] flex flex-col items-center justify-center gap-4",
              children: (0, n.jsx)(x.z, {
                size: "lg",
                animation: "bounce",
                onClick: () => {
                  var e, t;
                  return null === (e = (t = window).fbq) || void 0 === e
                    ? void 0
                    : e.call(t, "track", "Buy BadCat", { position: "start" });
                },
                children: (0, n.jsx)("a", {
                  href: t,
                  target: "_blank",
                  children: "Buy BadCat",
                }),
              }),
            }),
            (0, n.jsx)(f, {}),
            (0, n.jsxs)("h3", {
              className:
                "font-extended text-primary-foreground text-[50px] px-4 py-8 text-center leading-none transform lg:text-[80px] lg:py-16",
              children: [
                "The Legendary Hustler. ",
                (0, n.jsx)("br", {}),
                "Master of Vice and natural ",
                (0, n.jsx)("br", {}),
                "born gambler.",
              ],
            }),
          ],
        });
      }
      function f() {
        let e = (e) => {
          var t, r;
          return null === (t = (r = window).fbq) || void 0 === t
            ? void 0
            : t.call(r, "track", "View Socials", { social: e });
        };
        return (0, n.jsxs)("div", {
          className:
            "flex flex-col sm:flex-row items-start gap-8 justify-center pt-6 xl:pt-0",
          children: [
            (0, n.jsxs)("div", {
              className: "flex items-start justify-center space-x-8",
              children: [
                (0, n.jsx)(h, {
                  href: "https://t.me/badcat_bep20",
                  onClick: () => e("Telegram"),
                  children: (0, n.jsx)(l, { className: "fill-foreground" }),
                }),
                (0, n.jsx)(h, {
                  href: "https://x.com/badcat_bep20",
                  onClick: () => e("X"),
                  children: (0, n.jsx)(i, { className: "fill-foreground" }),
                }),
              ],
            }),
            (0, n.jsxs)("div", {
              className:
                "w-full flex justify-center items-start space-x-8 lg:space-x-8",
              children: [
                
                (0, n.jsx)(h, {
                  href: "https://dexscreener.com/bsc/0x00000000000000000000000000000000000000",
                  className: "py-3 px-4",
                  onClick: () => {
                    var e, t;
                    return null === (e = (t = window).fbq) || void 0 === e
                      ? void 0
                      : e.call(t, "track", "View on DEX Screener", {
                          position: "start",
                        });
                  },
                  children: (0, n.jsx)(d, {
                    className: "fill-foreground flex-shrink-0",
                  }),
                }),
              ],
            }),
          ],
        });
      }
      function h(e) {
        let { children: t, href: r, className: i, ...l } = e;
        return (0, n.jsx)(a.default, {
          href: r,
          target: "_blank",
          children: (0, n.jsx)(x.z, {
            variant: "ghost",
            animation: "bounce",
            isIcon: !0,
            className: (0, s.cn)(
              "flex items-center justify-center w-[56px] h-[56px] p-3 bg-primary",
              i
            ),
            ...l,
            children: t,
          }),
        });
      }
    },
    7621: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return g;
        },
      });
      var n = r(7437),
        a = r(2265),
        s = r(3227),
        i = r(939),
        l = r(2218),
        o = r(9354);
      let d = a.forwardRef((e, t) => {
          let { className: r, children: a, ...s } = e;
          return (0, n.jsx)("div", {
            className: (0, o.cn)(
              "grid grid-cols-[1fr_min-content_1fr] w-full gap-8 sm:gap-1 md:gap-2 lg:gap-0 xl:gap-5",
              r
            ),
            ref: t,
            ...s,
            children: a,
          });
        }),
        c = (0, l.j)(
          "z-[10] flex items-start gap-x-3 sm:items-center md:gap-x-[17px] lg:gap-x-[34px]  grid-cols-subgrid col-span-3",
          {
            variants: {
              position: {
                left: "sm:flex-row-reverse sm:mr-[calc(50%)]",
                right: "sm:ml-[calc(50%)]",
              },
            },
            defaultVariants: { position: "left" },
          }
        ),
        x = a.forwardRef((e, t) => {
          let { className: r, position: a = "left", children: s, ...i } = e;
          return (0, n.jsx)("div", {
            className: (0, o.cn)(c({ position: a }), r),
            ref: t,
            ...i,
            children: s,
          });
        });
      x.displayName = "TimelineItem";
      let p = a.forwardRef((e, t) => {
        let { className: r, children: a, ...s } = e;
        return (0, n.jsx)("h1", {
          className: (0, o.cn)(
            "font-arco text-primary-foreground text-[100px] leading-[50px] drop-shadow-border sm:text-[64px] lg:text-[94px] lg:leading-normal xl:text-[128px] xl:leading-[147px] ",
            r
          ),
          ref: t,
          ...s,
          children: a,
        });
      });
      p.displayName = "TimelineTitle";
      let f = (0, l.j)(
          "flex flex-col justify-center font-dangrek space-y-3 sm:max-w-[275px] md:max-w-[300px] lg:max-w-[400px] xl:max-w-[550px] lg:space-y-4",
          {
            variants: {
              position: { left: "sm:text-right text-left", right: "text-left" },
            },
            defaultVariants: { position: "left" },
          }
        ),
        h = a.forwardRef((e, t) => {
          let { className: r, children: a, position: s = "left", ...i } = e;
          return (0, n.jsx)("div", {
            className: (0, o.cn)(f({ position: s }), r),
            ref: t,
            ...i,
            children: a,
          });
        });
      h.displayName = "TimelineContent";
      let m = a.forwardRef((e, t) => {
        let { className: r, children: a, ...s } = e;
        return (0, n.jsx)("h2", {
          className: (0, o.cn)(
            "text-primary-foreground text-[30px] leading-[30px] sm:text-[28px] md:text-[32px] md:leading-none lg:text-[44px]",
            r
          ),
          ref: t,
          ...s,
          children: a,
        });
      });
      m.displayName = "TimelineHeader";
      let u = a.forwardRef((e, t) => {
        let { className: r, children: a, ...s } = e;
        return (0, n.jsx)("p", {
          className: (0, o.cn)(
            "text-foreground text-[20px] leading-[24px] sm:text-[16px] md:leading-none lg:text-[24px] lg:leading-[28px] xl:text-[28px] xl:leading-[32px]",
            r
          ),
          ref: t,
          ...s,
          children: a,
        });
      });
      function g(e) {
        let { contractAddress: t, buyLink: r } = e,
          [l, o] = (0, a.useState)(!1),
          [c, f] = (0, s.Z)(t);
        return (
          (0, a.useEffect)(() => o(c), [c]),
          (0, n.jsxs)(d, {
            className:
              "absolute top-[100px] sm:top-[24px] md:top-[40px] lg:top-[56px] xl:top-[110px] px-4 lg:px-0",
            children: [
              (0, n.jsxs)(x, {
                position: "left",
                children: [
                  (0, n.jsx)(p, { children: "1" }),
                  (0, n.jsxs)(h, {
                    position: "left",
                    children: [
                      (0, n.jsxs)(m, {
                        children: [
                          "Create a wallet ",
                          (0, n.jsx)("br", {}),
                          "with MetaMask",
                        ],
                      }),
                      (0, n.jsxs)(u, {
                        children: [
                          "Visit",
                          " ",
                          (0, n.jsx)("a", {
                            className: "text-primary underline",
                            href: "https://metamask.io/",
                            target: "_blank",
                            children: "metamask.io",
                          }),
                          " ",
                          "and follow the simple ",
                          (0, n.jsx)("br", { className: "hidden xl:block" }),
                          "steps to create a new account ",
                          (0, n.jsx)("br", { className: "hidden xl:block" }),
                          " ",
                          "with the Metamask app",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, n.jsxs)(x, {
                position: "right",
                className: "sm:-mt-[60px] md:-mt-4 lg:-mt-10 xl:mt-0",
                children: [
                  (0, n.jsx)(p, { children: "2" }),
                  (0, n.jsxs)(h, {
                    position: "right",
                    children: [
                      (0, n.jsx)(m, { children: "Get some $BNB" }),
                      (0, n.jsxs)(u, {
                        children: [
                          "Tap the BUY button in the app to purchase",
                          " ",
                          (0, n.jsx)("br", { className: "hidden xl:block" }),
                          " BSC, or deposit $BNB to your Metamask ",
                          (0, n.jsx)("br", { className: "hidden xl:block" }),
                          "wallet from the crypto exchange.",
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, n.jsxs)(x, {
                position: "left",
                className: "sm:-mt-[45px] md:-mt-5 lg:-mt-7 xl:pt-5 xl:mt-0",
                children: [
                  (0, n.jsx)(p, { children: "3" }),
                  (0, n.jsxs)(h, {
                    position: "left",
                    children: [
                      (0, n.jsx)(m, { children: "Swap $BNB for $BADCAT" }),
                      (0, n.jsxs)(u, {
                        children: [
                          "Go to",
                          " ",
                          (0, n.jsx)("span", {
                            className: "text-primary underline",
                            children: (0, n.jsx)("a", {
                              href: r,
                              target: "_blank",
                              children: "pancakeswap.finance",
                            }),
                          }),
                          " ",
                          "and swap $BNB for $BADCAT",
                          (0, n.jsx)("br", {}),
                          (0, n.jsxs)(i.J2, {
                            open: l,
                            onOpenChange: o,
                            children: [
                              (0, n.jsx)(i.xo, {
                                asChild: !0,
                                onClick: () => f(),
                                children: (0, n.jsx)("span", {
                                  className: "text-primary cursor-pointer",
                                  children: "(click to copy token address)",
                                }),
                              }),
                              (0, n.jsx)(i.yk, {
                                side: "top",
                                children: (0, n.jsx)("p", {
                                  className:
                                    "font-dangrek text-[27px] leading-none",
                                  children: "✅ Copied",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, n.jsxs)(x, {
                position: "right",
                className:
                  "sm:-mt-[20px] md:-mt-[20px] lg:-mt-[30px] xl:pt-[20px] xl:mt-0",
                children: [
                  (0, n.jsx)(p, { children: "4" }),
                  (0, n.jsxs)(h, {
                    position: "right",
                    children: [
                      (0, n.jsxs)(m, {
                        children: [
                          "You are now ",
                          (0, n.jsx)("br", { className: "hidden xl:block" }),
                          "a $BADCAT holder!",
                        ],
                      }),
                      (0, n.jsx)(u, { children: "Welcome to the GANG!" }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
      u.displayName = "TimelineParagraph";
    },
    6775: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return g;
        },
      });
      var n = r(7437),
        a = r(6648),
        s = r(2265),
        i = r(3227),
        l = r(3782),
        o = r(9354);
      let d = l.fC,
        c = l.xz,
        x = l.h_;
      l.x8;
      let p = s.forwardRef((e, t) => {
        let { className: r, ...a } = e;
        return (0, n.jsx)(l.aV, {
          ref: t,
          className: (0, o.cn)(
            "fixed inset-0 z-[100] bg-black/90 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
            r
          ),
          ...a,
        });
      });
      p.displayName = l.aV.displayName;
      let f = s.forwardRef((e, t) => {
        let { className: r, children: a, ...s } = e;
        return (0, n.jsxs)(x, {
          children: [
            (0, n.jsx)(p, {}),
            (0, n.jsx)(l.VY, {
              ref: t,
              className: (0, o.cn)(
                "fixed left-[50%] top-[50%] z-[100] grid w-full max-w-2xl translate-x-[-50%] translate-y-[-50%] gap-4 p-6 duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg focus:border-none focus:ring-none focus:outline-none",
                r
              ),
              ...s,
              children: a,
            }),
          ],
        });
      });
      function h() {
        return (0, n.jsxs)(d, {
          children: [
            (0, n.jsx)(c, {
              asChild: !0,
              children: (0, n.jsx)("p", {
                className:
                  "text-center text-primary-foreground text-[32px] leading-[32px] font-dangrek underline cursor-pointer animate-whitepaper-bounce",
                children: "Check white paper",
              }),
            }),
            (0, n.jsx)(f, {
              children: (0, n.jsx)(a.default, {
                src: "/tokenomics/whitepaper.png",
                alt: "White Paper",
                width: 1100,
                height: 750,
              }),
            }),
          ],
        });
      }
      (f.displayName = l.VY.displayName),
        (s.forwardRef((e, t) => {
          let { className: r, ...a } = e;
          return (0, n.jsx)(l.Dx, {
            ref: t,
            className: (0, o.cn)(
              "text-lg font-semibold leading-none tracking-tight",
              r
            ),
            ...a,
          });
        }).displayName = l.Dx.displayName),
        (s.forwardRef((e, t) => {
          let { className: r, ...a } = e;
          return (0, n.jsx)(l.dk, {
            ref: t,
            className: (0, o.cn)("text-sm text-muted-foreground", r),
            ...a,
          });
        }).displayName = l.dk.displayName);
      var m = r(5860),
        u = r(939);
      function g(e) {
        let { contractAddress: t, buyLink: r } = e,
          [l, o] = (0, s.useState)(!1),
          [d, c] = (0, i.Z)(t);
        return (
          (0, s.useEffect)(() => o(d), [d]),
          (0, n.jsxs)("div", {
            className:
              "bg-[#4E494E] flex w-full flex-col items-center justify-start space-y-6 pt-10 lg:space-y-[30px] md:pt-[20px]",
            children: [
              (0, n.jsxs)("div", {
                className: "grid gap-6",
                children: [
                  (0, n.jsx)("h1", {
                    className:
                      "font-arco font-bold text-primary-foreground text-[44px] leading-[50px] text-center drop-shadow-heading xl:text-[96px] xl:leading-[110px]",
                    children: "TOTAL SUPPLY",
                  }),
                  (0, n.jsx)("h2", {
                    className:
                      "font-dangrek text-primary-foreground text-[54px] leading-[1em] text-center drop-shadow-heading xl:text-[96px]",
                    children: "- 1,000,000,000 -",
                  }),
                  (0, n.jsxs)("div", {
                    className:
                      "flex flex-col items-center justify-center space-y-0 w-full px-4",
                    children: [
                      (0, n.jsx)("h3", {
                        className:
                          "w-fit px-[26px] pt-4 pb-3 font-arco font-bold text-[23px] leading-[1em] text-center text-primary-foreground bg-black xl:pt-6 xl:pb-4 xl:px-10 xl:text-[35px] xl:leading-[1]",
                        children: "contract address",
                      }),
                      (0, n.jsx)("div", {
                        className:
                          "shrink-0 max-w-full px-4 bg-primary-foreground border-[2px] border-black text-wrap xl:border-[4px]",
                        children: (0, n.jsx)("p", {
                          className:
                            "px-2 py-[13px] font-dangrek text-[23px] leading-[23px] text-background text-center text-wrap xl:px-6 xl:py-5 xl:text-[35px] xl:leading-none cursor-pointer",
                          style: { wordBreak: "break-all" },
                          children: (0, n.jsxs)(u.J2, {
                            open: l,
                            onOpenChange: o,
                            children: [
                              (0, n.jsx)(u.xo, {
                                asChild: !0,
                                onClick: () => c(),
                                children: (0, n.jsx)("span", { children: t }),
                              }),
                              (0, n.jsx)(u.yk, {
                                side: "top",
                                children: (0, n.jsx)("p", {
                                  className:
                                    "font-dangrek text-[27px] leading-none",
                                  children: "✅ Copied",
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, n.jsx)("div", {
                className: "pt-[50px]",
                children: (0, n.jsx)(m.z, {
                  size: "lg",
                  animation: "bounce",
                  children: (0, n.jsx)("a", {
                    href: r,
                    target: "_blank",
                    children: "Buy BadCat",
                  }),
                }),
              }),
              (0, n.jsx)(h, {}),
              (0, n.jsx)("div", {
                className: "h-auto w-full",
                children: (0, n.jsx)(a.default, {
                  src: "/tokenomics/roadmap.webp",
                  width: 805,
                  height: 850,
                  alt: "Bad Cat winning jackpot!",
                  className: "w-full object-contain",
                }),
              }),
            ],
          })
        );
      }
    },
    5860: function (e, t, r) {
      "use strict";
      r.d(t, {
        z: function () {
          return d;
        },
      });
      var n = r(7437),
        a = r(1538),
        s = r(2218),
        i = r(2265),
        l = r(9354);
      let o = (0, s.j)(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
          {
            variants: {
              variant: {
                default:
                  "bg-primary text-foreground border border-[#711111] font-arco border-solid border-[9px]",
                destructive:
                  "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                outline:
                  "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
                secondary:
                  "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                ghost: "",
                link: "text-primary underline-offset-4 hover:underline",
              },
              size: {
                default: "h-10 px-4 py-2",
                sm: "h-9 rounded-md px-3",
                lg: "h-20 px-8 text-[32px]",
                icon: "p-4",
              },
              animation: { none: "", bounce: "bounce-out-on-hover" },
            },
            defaultVariants: {
              variant: "default",
              size: "default",
              animation: "bounce",
            },
          }
        ),
        d = i.forwardRef((e, t) => {
          let {
              className: r,
              variant: s,
              animation: i,
              size: d,
              asChild: c = !1,
              children: x,
              isIcon: p = !1,
              ...f
            } = e,
            h = c ? a.g7 : "button";
          return (0, n.jsx)(h, {
            className: (0, l.cn)(
              o({ variant: s, size: d, animation: i, className: r })
            ),
            ref: t,
            ...f,
            children: p
              ? (0, n.jsx)(n.Fragment, { children: x })
              : (0, n.jsx)("span", {
                  className: "mb-1 md:mb-2 flex gap-3 md:gap-6",
                  children: x,
                }),
          });
        });
      d.displayName = "Button";
    },
    939: function (e, t, r) {
      "use strict";
      r.d(t, {
        J2: function () {
          return l;
        },
        xo: function () {
          return o;
        },
        yk: function () {
          return d;
        },
      });
      var n = r(7437),
        a = r(8894),
        s = r(2265),
        i = r(9354);
      let l = a.fC,
        o = a.xz,
        d = s.forwardRef((e, t) => {
          let {
            className: r,
            align: s = "center",
            sideOffset: l = 4,
            ...o
          } = e;
          return (0, n.jsx)(a.h_, {
            children: (0, n.jsx)(a.VY, {
              ref: t,
              align: s,
              sideOffset: l,
              className: (0, i.cn)(
                "z-50 w-fit rounded-md border-[4px] leading-none border-black bg-primary-foreground py-5 px-6 text-popover-foreground outline-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                r
              ),
              ...o,
            }),
          });
        });
      d.displayName = a.VY.displayName;
    },
    3058: function (e, t, r) {
      "use strict";
      r.d(t, {
        Tooltip: function () {
          return o;
        },
        TooltipContent: function () {
          return c;
        },
        TooltipProvider: function () {
          return l;
        },
        TooltipTrigger: function () {
          return d;
        },
      });
      var n = r(7437),
        a = r(5640),
        s = r(2265),
        i = r(9354);
      let l = a.zt,
        o = a.fC,
        d = a.xz,
        c = s.forwardRef((e, t) => {
          let { className: r, sideOffset: s = 4, ...l } = e;
          return (0, n.jsx)(a.h_, {
            children: (0, n.jsx)(a.VY, {
              ref: t,
              sideOffset: s,
              className: (0, i.cn)(
                "z-50 overflow-hidden rounded-md border-4 font-dangrek text-[27px] border-black leading-none bg-primary-foreground px-3 py-1.5 text-popover-foreground outline-none animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                r
              ),
              ...l,
            }),
          });
        });
      c.displayName = a.VY.displayName;
    },
  },
  function (e) {
    e.O(0, [614, 269, 640, 783, 971, 23, 744], function () {
      return e((e.s = 1063));
    }),
      (_N_E = e.O());
  },
]);
