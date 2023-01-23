import { defineComponent as z, ref as C, watch as M, computed as B, openBlock as r, createElementBlock as o, normalizeClass as N, createElementVNode as v, normalizeStyle as V, toDisplayString as _, unref as m, Fragment as $, renderList as O, withModifiers as x, renderSlot as L, reactive as E, createTextVNode as R, withDirectives as F, withKeys as H, vModelText as W, pushScopeId as D, popScopeId as K } from "vue";
const U = { class: "pickerWrap" }, P = { class: "pickerContent" }, q = { class: "pickerHeader" }, G = ["onClick"], J = { class: "check" }, Q = ["checked", "id"], X = ["for"], Y = ["onClick"], Z = { class: "check" }, ee = ["checked", "id"], le = ["for"], te = ["onClick"], ae = ["onClick"], se = ["onClick"], ue = ["onClick"], ce = /* @__PURE__ */ z({
  __name: "SelectBox",
  props: {
    modelValue: { default: {} },
    options: { default: [] },
    prop: { default: "value" },
    datatype: { default: "" },
    dataprop: { default: "" },
    placeholder: { default: "-- Select option --" },
    size: { default: 0 },
    type: { default: "" }
  },
  emits: ["update:modelValue", "change", "search"],
  setup(u, { emit: k }) {
    const c = u, e = C(c.modelValue || {}), i = C(!1), h = C(""), b = C(null), w = C(void 0);
    M(() => c.modelValue, () => {
      e.value = c.modelValue;
    });
    const j = () => {
      clearTimeout(w.value), w.value = setTimeout(() => {
        var a, t;
        h.value = "", ((a = b.value) == null ? void 0 : a.value) && ((t = b.value) == null ? void 0 : t.value) !== "" && (h.value = b.value.value), k("search", h.value);
      }, 500);
    }, S = B(() => {
      let a = c.options;
      return h.value.length >= 1 && (a = a.filter((t) => {
        if (isNaN(t) === !1 && Number(t) === Number(h.value))
          return !0;
        if (typeof t == "string" && t.toLowerCase().includes(h.value.toLowerCase()))
          return !0;
        if (typeof t == "object" && t !== null && Object.prototype.toString.call(t) === "[object Object]")
          for (const l of Object.keys(t)) {
            if (isNaN(t[l]) === !1 && Number(t[l]) === Number(h.value))
              return !0;
            if (typeof t[l] == "string" && t[l].toLowerCase().includes(h.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), a;
    }), y = ((a = 10) => {
      let t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", l = "";
      for (let n = 0; n < a; n++)
        l += t.charAt(Math.floor(Math.random() * t.length));
      return l;
    })(), f = (a) => {
      var t;
      a.target.style.display = "none", i.value = !1, (t = b.value) != null && t.value && (b.value.value = "", h.value = "");
    }, p = (a, t = "") => {
      t !== "" ? e.value.map((l) => l[t]).includes(a[t]) ? e.value.splice(e.value.findIndex((l) => l[t] === a[t]), 1) : e.value.push(a) : e.value.includes(a) ? e.value.splice(e.value.findIndex((l) => l === a), 1) : e.value.push(a), k("update:modelValue", e.value), k("change", e.value, a);
    }, d = (a) => {
      typeof a == "object" && a !== null && String(c.datatype).toLowerCase() === "string" ? (e.value = a[String(c.dataprop || c.prop)], k("update:modelValue", String(e.value))) : typeof a == "object" && a !== null && String(c.datatype).toLowerCase() === "number" ? (e.value = a[String(c.dataprop || c.prop)], k("update:modelValue", Number(e.value))) : (e.value = a, k("update:modelValue", e.value)), i.value = !1, k("change", e.value, a);
    }, s = B(() => {
      let a = (c == null ? void 0 : c.placeholder) || "-- Select option --";
      if (S.value.length >= 1)
        if (typeof e.value == "number") {
          let t = S.value.filter((l) => Number(l[String(c.dataprop || c.prop)]) === Number(e.value));
          typeof S.value[0] == "object" && t.length >= 1 ? a = t[0][String(c.prop)] : typeof S.value[0] == "number" && (a = e.value);
        } else if (typeof e.value == "string") {
          let t = S.value.filter((l) => String(l[String(c.dataprop || c.prop)]) === e.value);
          typeof S.value[0] == "object" && t.length >= 1 ? a = t[0][String(c.prop)] : typeof S.value[0] == "string" && e.value !== "" && (a = e.value);
        } else
          typeof e.value == "object" && (Array.isArray(e.value) && e.value.length >= 1 ? typeof e.value[0] == "object" && String(c.prop) in e.value[0] ? a = e.value.map((t) => t[String(c.prop)]).join(", ") : a = e.value.join(", ") : e.value !== null && String(c.prop) in e.value && (a = e.value[String(c.prop)]));
      return a;
    });
    return (a, t) => (r(), o("div", {
      class: N(["picker suggestion", i.value ? "active" : ""])
    }, [
      v("div", {
        class: "pickerBackdrop",
        style: V({ display: i.value ? "block" : "none" }),
        onClick: f
      }, null, 4),
      v("div", U, [
        v("div", {
          class: "select pickerToggler",
          onClick: t[0] || (t[0] = (l) => i.value = !i.value)
        }, _(m(s)), 1),
        v("div", P, [
          v("div", q, [
            v("input", {
              type: "search",
              ref_key: "searchRef",
              ref: b,
              onInput: j,
              class: "input"
            }, null, 544)
          ]),
          Array.isArray(e.value) ? (r(), o("div", {
            key: 0,
            class: "pickerMenu",
            style: V({ "max-height": Number(u.size) !== 0 ? Number(u.size) * 42 + "px" : "auto" })
          }, [
            (r(!0), o($, null, O(m(S), (l, n) => (r(), o($, {
              key: "option-" + l
            }, [
              typeof l == "string" && u.type !== "slot" ? (r(), o("div", {
                key: 0,
                onClick: x((I) => p(l), ["stop"]),
                class: "pickerItem"
              }, [
                v("div", J, [
                  v("input", {
                    type: "checkbox",
                    class: "checkInput",
                    checked: e.value.includes(l),
                    id: "check-" + (m(y) + String(n)),
                    style: { "pointer-events": "none" }
                  }, null, 8, Q),
                  v("label", {
                    class: "checkLabel",
                    for: "check-" + (m(y) + String(n)),
                    style: { "pointer-events": "none" }
                  }, _(l), 9, X)
                ])
              ], 8, G)) : typeof l == "object" && l !== null && u.prop in l && u.type !== "slot" ? (r(), o("div", {
                key: 1,
                onClick: x((I) => p(l, u.prop), ["stop"]),
                class: "pickerItem"
              }, [
                v("div", Z, [
                  v("input", {
                    type: "checkbox",
                    class: "checkInput",
                    checked: e.value.includes(l),
                    id: "check-" + (m(y) + String(n)),
                    style: { "pointer-events": "none" }
                  }, null, 8, ee),
                  v("label", {
                    class: "checkLabel",
                    for: "check-" + (m(y) + String(n)),
                    style: { "pointer-events": "none" }
                  }, _(l[u.prop]), 9, le)
                ])
              ], 8, Y)) : (r(), o("div", {
                key: 2,
                onClick: x((I) => p(l), ["stop"]),
                class: "pickerItem"
              }, [
                L(a.$slots, "default", {
                  option: l,
                  selected: e.value
                }, void 0, !0)
              ], 8, te))
            ], 64))), 128))
          ], 4)) : (r(), o("div", {
            key: 1,
            class: "pickerMenu",
            style: V({ "max-height": Number(u.size) !== 0 ? Number(u.size) * 42 + "px" : "auto" })
          }, [
            (r(!0), o($, null, O(m(S), (l, n) => (r(), o($, {
              key: "option-" + l
            }, [
              typeof l == "string" && u.type !== "slot" ? (r(), o("div", {
                key: 0,
                onClick: (I) => d(l),
                class: N(["pickerItem", e.value === l ? "active" : ""])
              }, _(l), 11, ae)) : typeof l == "object" && l !== null && u.prop in l && u.type !== "slot" ? (r(), o("div", {
                key: 1,
                onClick: (I) => d(l),
                class: N(["pickerItem", e.value[u.prop] === l[u.prop] || String(l[u.dataprop || u.prop]) === String(e.value) ? "active" : ""])
              }, _(l[u.prop]), 11, se)) : (r(), o("div", {
                key: 2,
                onClick: x((I) => d(l), ["stop"]),
                class: N(["pickerItem", e.value === l ? "active" : ""])
              }, [
                L(a.$slots, "default", {
                  option: l,
                  selected: e.value
                }, void 0, !0)
              ], 10, ue))
            ], 64))), 128))
          ], 4))
        ])
      ])
    ], 2));
  }
});
const A = (u, k) => {
  const c = u.__vccOpts || u;
  for (const [e, i] of k)
    c[e] = i;
  return c;
}, ul = /* @__PURE__ */ A(ce, [["__scopeId", "data-v-f5c4006d"]]), ne = { class: "pickerWrap" }, re = { class: "pickerContent pickerSizing" }, oe = ["onClick"], ie = ["onClick"], de = ["onClick"], ve = /* @__PURE__ */ z({
  __name: "ComboBox",
  props: {
    modelValue: { default: null },
    options: { default: [] },
    prop: { default: "value" },
    placeholder: { default: "Search option" },
    size: { default: 0 },
    select: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "search"],
  setup(u, { emit: k }) {
    const c = u, e = C(!1), i = C(""), h = C(null), b = C(void 0), w = B(() => {
      let g = c.options;
      return i.value.length >= 1 && (g = g.filter((y) => {
        if (isNaN(y) === !1 && Number(y) === Number(i.value))
          return !0;
        if (typeof y == "string" && y.toLowerCase().includes(i.value.toLowerCase()))
          return !0;
        if (typeof y == "object" && y !== null && Object.prototype.toString.call(y) === "[object Object]")
          for (const f of Object.keys(y)) {
            if (isNaN(y[f]) === !1 && Number(y[f]) === Number(i.value))
              return !0;
            if (typeof y[f] == "string" && y[f].toLowerCase().includes(i.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), g;
    }), j = () => {
      clearTimeout(b.value), b.value = setTimeout(() => {
        var g, y;
        i.value = "", ((g = h.value) == null ? void 0 : g.value) && ((y = h.value) == null ? void 0 : y.value) !== "" && (i.value = h.value.value), k("search", i.value), w.value.length >= 1 && i.value !== "" ? e.value = !0 : e.value = !1;
      }, 500);
    }, S = (g) => {
      g.target.style.display = "none", e.value = !1;
    };
    return (g, y) => (r(), o("div", {
      class: N(["picker suggestion", e.value ? "active" : ""])
    }, [
      v("div", {
        class: "pickerBackdrop",
        style: V({ display: e.value ? "block" : "none" }),
        onClick: S
      }, null, 4),
      v("div", ne, [
        u.select ? (r(), o("input", {
          key: 0,
          type: "search",
          ref_key: "searchRef",
          ref: h,
          onInput: j,
          onClick: y[0] || (y[0] = (f) => e.value = !0),
          class: "select"
        }, null, 544)) : (r(), o("input", {
          key: 1,
          type: "search",
          ref_key: "searchRef",
          ref: h,
          onInput: j,
          onClick: y[1] || (y[1] = (f) => m(w).length >= 1 && i.value !== "" ? e.value = !0 : e.value = !1),
          class: "input"
        }, null, 544)),
        v("div", re, [
          (r(!0), o($, null, O(m(w), (f, p) => (r(), o($, {
            key: "option-" + f
          }, [
            typeof f == "string" ? (r(), o("div", {
              key: 0,
              onClick: (d) => {
                i.value = f, k("update:modelValue", f), e.value = !1;
              },
              class: N(["pickerItem", u.modelValue === f ? "active" : ""])
            }, _(f), 11, oe)) : typeof f == "object" && u.prop in f ? (r(), o("div", {
              key: 1,
              onClick: (d) => {
                i.value = f[u.prop], k("update:modelValue", f), e.value = !1;
              },
              class: N(["pickerItem", u.modelValue[u.prop] === f[u.prop] ? "active" : ""])
            }, _(f[u.prop]), 11, ie)) : (r(), o("div", {
              key: 2,
              onClick: (d) => {
                i.value = f, k("update:modelValue", f), e.value = !1;
              },
              class: N(["pickerItem", u.modelValue === f ? "active" : ""])
            }, [
              L(g.$slots, "default", { option: f }, void 0, !0)
            ], 10, de))
          ], 64))), 128))
        ])
      ])
    ], 2));
  }
});
const cl = /* @__PURE__ */ A(ve, [["__scopeId", "data-v-f7a05695"]]), fe = { class: "list" }, pe = { class: "listHeader" }, he = ["onClick"], ke = { class: "check" }, ye = ["checked", "id"], ge = ["for"], be = ["onClick"], Ce = { class: "check" }, me = ["checked", "id"], Se = ["for"], _e = ["onClick"], $e = ["onClick"], Ne = ["onClick"], we = ["onClick"], je = /* @__PURE__ */ z({
  __name: "ListBox",
  props: {
    modelValue: { default: {} },
    options: { default: [] },
    prop: { default: "value" },
    datatype: { default: "" },
    dataprop: { default: "" },
    size: { default: 0 }
  },
  emits: ["update:modelValue", "change", "search"],
  setup(u, { emit: k }) {
    const c = u, e = C(c.modelValue || {}), i = C(""), h = C(null), b = C(void 0);
    M(() => c.modelValue, () => {
      e.value = c.modelValue;
    });
    const w = () => {
      clearTimeout(b.value), b.value = setTimeout(() => {
        var p, d;
        i.value = "", ((p = h.value) == null ? void 0 : p.value) && ((d = h.value) == null ? void 0 : d.value) !== "" && (i.value = h.value.value), k("search", i.value);
      }, 500);
    }, j = B(() => {
      let p = c.options;
      return i.value.length >= 1 && (p = p.filter((d) => {
        if (isNaN(d) === !1 && Number(d) === Number(i.value))
          return !0;
        if (typeof d == "string" && d.toLowerCase().includes(i.value.toLowerCase()))
          return !0;
        if (typeof d == "object" && d !== null && Object.prototype.toString.call(d) === "[object Object]")
          for (const s of Object.keys(d)) {
            if (isNaN(d[s]) === !1 && Number(d[s]) === Number(i.value))
              return !0;
            if (typeof d[s] == "string" && d[s].toLowerCase().includes(i.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), p;
    }), g = (() => {
      let p = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", d = "";
      for (let s = 0; s < 10; s++)
        d += p.charAt(Math.floor(Math.random() * p.length));
      return d;
    })(), y = (p, d = "") => {
      d !== "" ? e.value.map((s) => s[d]).includes(p[d]) ? e.value.splice(e.value.findIndex((s) => s[d] === p[d]), 1) : e.value.push(p) : e.value.includes(p) ? e.value.splice(e.value.findIndex((s) => s === p), 1) : e.value.push(p), k("update:modelValue", e.value), k("change", e.value, p);
    }, f = (p) => {
      typeof p == "object" && p !== null && String(c.datatype).toLowerCase() === "string" ? (e.value = p[String(c.dataprop || c.prop)], k("update:modelValue", String(e.value))) : typeof p == "object" && p !== null && String(c.datatype).toLowerCase() === "number" ? (e.value = p[String(c.dataprop || c.prop)], k("update:modelValue", Number(e.value))) : (e.value = p, k("update:modelValue", e.value)), k("change", e.value, p);
    };
    return (p, d) => (r(), o("div", null, [
      v("div", fe, [
        v("div", pe, [
          v("input", {
            type: "search",
            ref_key: "searchRef",
            ref: h,
            onInput: w,
            class: "input"
          }, null, 544)
        ]),
        Array.isArray(u.modelValue) ? (r(), o("div", {
          key: 0,
          class: "listMenu",
          style: V({ "max-height": Number(u.size) !== 0 ? Number(u.size) * 44 + "px" : "auto" })
        }, [
          (r(!0), o($, null, O(m(j), (s, a) => (r(), o($, {
            key: "option-" + s
          }, [
            typeof s == "string" ? (r(), o("div", {
              key: 0,
              onClick: x((t) => y(s), ["stop"]),
              class: "listItem"
            }, [
              v("div", ke, [
                v("input", {
                  type: "checkbox",
                  class: "checkInput",
                  checked: e.value.includes(s),
                  id: "check-" + (m(g) + String(a)),
                  style: { "pointer-events": "none" }
                }, null, 8, ye),
                v("label", {
                  class: "checkLabel",
                  for: "check-" + (m(g) + String(a)),
                  style: { "pointer-events": "none" }
                }, _(s), 9, ge)
              ])
            ], 8, he)) : typeof s == "object" && u.prop in s ? (r(), o("div", {
              key: 1,
              onClick: x((t) => y(s, u.prop), ["stop"]),
              class: "listItem"
            }, [
              v("div", Ce, [
                v("input", {
                  type: "checkbox",
                  class: "checkInput",
                  checked: e.value.includes(s),
                  id: "check-" + (m(g) + String(a)),
                  style: { "pointer-events": "none" }
                }, null, 8, me),
                v("label", {
                  class: "checkLabel",
                  for: "check-" + (m(g) + String(a)),
                  style: { "pointer-events": "none" }
                }, _(s[u.prop]), 9, Se)
              ])
            ], 8, be)) : (r(), o("div", {
              key: 2,
              onClick: x((t) => y(s), ["stop"]),
              class: N(["listItem", e.value.includes(s) ? "active" : ""])
            }, [
              L(p.$slots, "default", {
                option: s,
                selected: e.value
              }, void 0, !0)
            ], 10, _e))
          ], 64))), 128))
        ], 4)) : (r(), o("div", {
          key: 1,
          class: "listMenu",
          style: V({ "max-height": Number(u.size) !== 0 ? Number(u.size) * 44 + "px" : "auto" })
        }, [
          (r(!0), o($, null, O(m(j), (s, a) => (r(), o($, {
            key: "option-" + s
          }, [
            typeof s == "string" ? (r(), o("div", {
              key: 0,
              onClick: (t) => f(s),
              class: N(["listItem", e.value === s ? "active" : ""])
            }, _(s), 11, $e)) : typeof s == "object" && u.prop in s ? (r(), o("div", {
              key: 1,
              onClick: (t) => f(s),
              class: N(["listItem", e.value[u.prop] === s[u.prop] || String(s[u.dataprop || u.prop]) === String(e.value) ? "active" : ""])
            }, _(s[u.prop]), 11, Ne)) : (r(), o("div", {
              key: 2,
              onClick: x((t) => f(s), ["stop"]),
              class: N(["listItem", e.value === s ? "active" : ""])
            }, [
              L(p.$slots, "default", {
                option: s,
                selected: e.value
              }, void 0, !0)
            ], 10, we))
          ], 64))), 128))
        ], 4))
      ])
    ]));
  }
});
const nl = /* @__PURE__ */ A(je, [["__scopeId", "data-v-d7fed8bc"]]), Ie = (u) => (D("data-v-3acd22f1"), u = u(), K(), u), xe = { class: "tagWrap" }, Ve = { class: "tags" }, Oe = { class: "tag groupItem" }, Le = ["onClick"], Be = /* @__PURE__ */ Ie(() => /* @__PURE__ */ v("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  width: "16",
  height: "16",
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  "stroke-width": "2",
  "stroke-linecap": "round",
  "stroke-linejoin": "round"
}, [
  /* @__PURE__ */ v("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }),
  /* @__PURE__ */ v("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  })
], -1)), Te = [
  Be
], ze = { class: "tagContent" }, Ae = ["onClick"], Me = ["onClick"], Re = ["onClick"], Fe = /* @__PURE__ */ z({
  __name: "TagBox",
  props: {
    modelValue: { default: [] },
    options: { default: [] },
    prop: { default: "value" },
    placeholder: { default: "Add new tag" },
    size: { default: 0 },
    separator: { default: "," }
  },
  emits: ["update:modelValue"],
  setup(u, { emit: k }) {
    const c = u, e = C(!1), i = C(""), h = C(null), b = E(c.modelValue || []), w = C(c.options || []), j = C(c.separator || ","), S = C(c.prop || "value"), g = B(() => {
      let d = w.value;
      return i.value.length >= 1 && (d = d.filter((s) => {
        if (isNaN(s) === !1 && Number(s) === Number(i.value))
          return !0;
        if (typeof s == "string" && s.toLowerCase().includes(i.value.toLowerCase()))
          return !0;
        if (typeof s == "object" && s !== null && Object.prototype.toString.call(s) === "[object Object]")
          for (const a of Object.keys(s)) {
            if (isNaN(s[a]) === !1 && Number(s[a]) === Number(i.value))
              return !0;
            if (typeof s[a] == "string" && s[a].toLowerCase().includes(i.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), d;
    }), y = () => {
      h.value.focus();
    }, f = (d) => {
      if (d.key !== "Enter" && g.value.length >= 1 ? e.value = !0 : e.value = !1, i.value.endsWith(j.value) || d.key === "Enter") {
        const s = i.value.replace(j.value, "");
        b.includes(s) || (b.push(s), w.value.includes(s) && (w.value = w.value.filter((a) => typeof a == "string" && a !== s ? !0 : typeof a == "object" && S.value in a && a[S.value] !== s))), i.value = "", k("update:modelValue", b);
      }
    };
    M(i, () => {
      if (h.value !== null) {
        const d = document.createElement("div");
        d.style.width = "max-content", d.style.position = "absolute", d.style.visibility = "hidden";
        const s = i.value.length >= 2 ? i.value : h.value.getAttribute("placeholder");
        d.innerHTML = s.replace(/ /g, "&nbsp;").trim(), document.body.appendChild(d);
        const a = Math.ceil(Number(window.getComputedStyle(d).width.replace("px", ""))) + 30;
        h.value.style.setProperty("width", a + "px"), d.remove();
      }
    });
    const p = (d) => {
      d.target.style.display = "none", e.value = !1;
    };
    return (d, s) => (r(), o("div", {
      class: N(["taggable", { active: e.value === !0 }])
    }, [
      v("div", {
        class: "tagBackdrop",
        style: V({ display: e.value ? "block" : "none" }),
        onClick: p
      }, null, 4),
      v("div", xe, [
        v("div", {
          class: "input tagToggler",
          onClick: y
        }, [
          v("div", Ve, [
            (r(!0), o($, null, O(b, (a, t) => (r(), o("div", {
              key: "tag-" + t,
              class: "group"
            }, [
              v("div", Oe, [
                typeof a == "string" && a !== "" ? (r(), o($, { key: 0 }, [
                  R(_(a), 1)
                ], 64)) : typeof a == "object" && S.value in a ? (r(), o($, { key: 1 }, [
                  R(_(a[S.value]), 1)
                ], 64)) : (r(), o($, { key: 2 }, [
                  R(_(u.placeholder), 1)
                ], 64))
              ]),
              v("div", {
                class: "tag groupItem",
                onClick: (l) => b.splice(t, 1)
              }, Te, 8, Le)
            ]))), 128)),
            F(v("input", {
              type: "search",
              ref_key: "inputRef",
              ref: h,
              "onUpdate:modelValue": s[0] || (s[0] = (a) => i.value = a),
              class: "tagInput",
              onInput: s[1] || (s[1] = (a) => f(a)),
              onKeyup: s[2] || (s[2] = H((a) => f(a), ["enter"])),
              placeholder: "Add new tag"
            }, null, 544), [
              [W, i.value]
            ])
          ])
        ]),
        v("div", ze, [
          (r(!0), o($, null, O(m(g), (a, t) => (r(), o($, {
            key: "option-" + a
          }, [
            typeof a == "string" ? (r(), o("div", {
              key: 0,
              onClick: (l) => {
                i.value = a + ",", f(l);
              },
              class: "tagItem"
            }, _(a), 9, Ae)) : typeof a == "object" && S.value in a ? (r(), o("div", {
              key: 1,
              onClick: (l) => {
                i.value = a[S.value] + ",", f(l);
              },
              class: "tagItem"
            }, _(a[S.value]), 9, Me)) : (r(), o("div", {
              key: 2,
              onClick: (l) => {
                i.value = a + ",", f(l);
              },
              class: "tagItem"
            }, [
              L(d.$slots, "default", { option: a }, void 0, !0)
            ], 8, Re))
          ], 64))), 128))
        ])
      ])
    ], 2));
  }
});
const rl = /* @__PURE__ */ A(Fe, [["__scopeId", "data-v-3acd22f1"]]), We = { class: "pickerOverlay pickerWrap" }, Ee = { class: "pickerContent" }, He = { class: "pickerHeader" }, De = ["onClick"], Ke = { class: "check" }, Ue = ["checked", "id"], Pe = ["for"], qe = ["onClick"], Ge = { class: "check" }, Je = ["checked", "id"], Qe = ["for"], Xe = ["onClick"], Ye = ["onClick"], Ze = ["onClick"], el = ["onClick"], ll = { class: "pickerFooter" }, tl = { class: "tedirCategoryAdd" }, al = /* @__PURE__ */ z({
  __name: "CategoryBox",
  props: {
    modelValue: { default: {} },
    options: { default: [] },
    prop: { default: "value" },
    datatype: { default: "" },
    dataprop: { default: "" },
    placeholder: { default: "-- Select option --" },
    size: { default: 0 }
  },
  emits: ["update:modelValue", "change", "add", "search"],
  setup(u, { emit: k }) {
    const c = u, e = C(c.modelValue || {}), i = C(!1), h = C(""), b = C(null), w = C(void 0), j = C("");
    M(() => c.modelValue, () => {
      e.value = c.modelValue;
    });
    const S = () => {
      clearTimeout(w.value), w.value = setTimeout(() => {
        var t, l;
        h.value = "", ((t = b.value) == null ? void 0 : t.value) && ((l = b.value) == null ? void 0 : l.value) !== "" && (h.value = b.value.value), k("search", h.value);
      }, 500);
    }, g = B(() => {
      let t = c.options;
      return h.value.length >= 1 && (t = t.filter((l) => {
        if (isNaN(l) === !1 && Number(l) === Number(h.value))
          return !0;
        if (typeof l == "string" && l.toLowerCase().includes(h.value.toLowerCase()))
          return !0;
        if (typeof l == "object" && l !== null && Object.prototype.toString.call(l) === "[object Object]")
          for (const n of Object.keys(l)) {
            if (isNaN(l[n]) === !1 && Number(l[n]) === Number(h.value))
              return !0;
            if (typeof l[n] == "string" && l[n].toLowerCase().includes(h.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), t;
    }), f = ((t = 10) => {
      let l = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", n = "";
      for (let I = 0; I < t; I++)
        n += l.charAt(Math.floor(Math.random() * l.length));
      return n;
    })(), p = (t) => {
      var l;
      t.target.style.display = "none", i.value = !1, (l = b.value) != null && l.value && (b.value.value = "", h.value = "");
    }, d = (t, l = "") => {
      l !== "" ? e.value.map((n) => n[l]).includes(t[l]) ? e.value.splice(e.value.findIndex((n) => n[l] === t[l]), 1) : e.value.push(t) : e.value.includes(t) ? e.value.splice(e.value.findIndex((n) => n === t), 1) : e.value.push(t), k("update:modelValue", e.value), k("change", e.value, t);
    }, s = (t) => {
      typeof t == "object" && t !== null && String(c.datatype).toLowerCase() === "string" ? (e.value = t[String(c.dataprop || c.prop)], k("update:modelValue", String(e.value))) : typeof t == "object" && t !== null && String(c.datatype).toLowerCase() === "number" ? (e.value = t[String(c.dataprop || c.prop)], k("update:modelValue", Number(e.value))) : (e.value = t, k("update:modelValue", e.value)), i.value = !1, k("change", e.value, t);
    }, a = B(() => {
      let t = (c == null ? void 0 : c.placeholder) || "-- Select option --";
      if (g.value.length >= 1)
        if (typeof e.value == "number") {
          let l = g.value.filter((n) => Number(n[String(c.dataprop || c.prop)]) === Number(e.value));
          typeof g.value[0] == "object" && l.length >= 1 ? t = l[0][String(c.prop)] : typeof g.value[0] == "number" && (t = e.value);
        } else if (typeof e.value == "string") {
          let l = g.value.filter((n) => String(n[String(c.dataprop || c.prop)]) === e.value);
          typeof g.value[0] == "object" && l.length >= 1 ? t = l[0][String(c.prop)] : typeof g.value[0] == "string" && e.value !== "" && (t = e.value);
        } else
          typeof e.value == "object" && (Array.isArray(e.value) && e.value.length >= 1 ? typeof e.value[0] == "object" && String(c.prop) in e.value[0] ? t = e.value.map((l) => l[String(c.prop)]).join(", ") : t = e.value.join(", ") : e.value !== null && String(c.prop) in e.value && (t = e.value[String(c.prop)]));
      return t;
    });
    return (t, l) => (r(), o("div", {
      class: N(["picker suggestion tedirCategory", i.value ? "active" : ""])
    }, [
      v("div", {
        class: "pickerBackdrop",
        style: V({ display: i.value ? "block" : "none" }),
        onClick: p
      }, null, 4),
      v("div", We, [
        v("div", {
          class: "select pickerToggler",
          onClick: l[0] || (l[0] = (n) => i.value = !i.value)
        }, _(m(a)), 1),
        v("div", Ee, [
          v("div", He, [
            v("input", {
              type: "search",
              ref_key: "searchRef",
              ref: b,
              onInput: S,
              class: "input"
            }, null, 544)
          ]),
          Array.isArray(e.value) ? (r(), o("div", {
            key: 0,
            class: "pickerMenu",
            style: V({ "max-height": Number(u.size) !== 0 ? Number(u.size) * 42 + "px" : "auto" })
          }, [
            (r(!0), o($, null, O(m(g), (n, I) => (r(), o($, {
              key: "option-" + n
            }, [
              typeof n == "string" ? (r(), o("div", {
                key: 0,
                onClick: x((T) => d(n), ["stop"]),
                class: "pickerItem"
              }, [
                v("div", Ke, [
                  v("input", {
                    type: "checkbox",
                    class: "checkInput",
                    checked: e.value.includes(n),
                    id: "check-" + (m(f) + String(I)),
                    style: { "pointer-events": "none" }
                  }, null, 8, Ue),
                  v("label", {
                    class: "checkLabel",
                    for: "check-" + (m(f) + String(I)),
                    style: { "pointer-events": "none" }
                  }, _(n), 9, Pe)
                ])
              ], 8, De)) : typeof n == "object" && n !== null && u.prop in n ? (r(), o("div", {
                key: 1,
                onClick: x((T) => d(n, u.prop), ["stop"]),
                class: "pickerItem"
              }, [
                v("div", Ge, [
                  v("input", {
                    type: "checkbox",
                    class: "checkInput",
                    checked: e.value.includes(n),
                    id: "check-" + (m(f) + String(I)),
                    style: { "pointer-events": "none" }
                  }, null, 8, Je),
                  v("label", {
                    class: "checkLabel",
                    for: "check-" + (m(f) + String(I)),
                    style: { "pointer-events": "none" }
                  }, _(n[u.prop]), 9, Qe)
                ])
              ], 8, qe)) : (r(), o("div", {
                key: 2,
                onClick: x((T) => d(n), ["stop"]),
                class: "pickerItem"
              }, [
                L(t.$slots, "default", {
                  option: n,
                  selected: e.value
                }, void 0, !0)
              ], 8, Xe))
            ], 64))), 128))
          ], 4)) : (r(), o("div", {
            key: 1,
            class: "pickerMenu",
            style: V({ "max-height": Number(u.size) !== 0 ? Number(u.size) * 42 + "px" : "auto" })
          }, [
            (r(!0), o($, null, O(m(g), (n, I) => (r(), o($, {
              key: "option-" + n
            }, [
              typeof n == "string" ? (r(), o("div", {
                key: 0,
                onClick: (T) => s(n),
                class: N(["pickerItem", e.value === n ? "active" : ""])
              }, _(n), 11, Ye)) : typeof n == "object" && n !== null && u.prop in n ? (r(), o("div", {
                key: 1,
                onClick: (T) => s(n),
                class: N(["pickerItem", e.value[u.prop] === n[u.prop] || String(n[u.dataprop || u.prop]) === String(e.value) ? "active" : ""])
              }, _(n[u.prop]), 11, Ze)) : (r(), o("div", {
                key: 2,
                onClick: x((T) => s(n), ["stop"]),
                class: N(["pickerItem", e.value === n ? "active" : ""])
              }, [
                L(t.$slots, "default", {
                  option: n,
                  selected: e.value
                }, void 0, !0)
              ], 10, el))
            ], 64))), 128))
          ], 4)),
          v("div", ll, [
            v("div", tl, [
              F(v("input", {
                type: "text",
                "onUpdate:modelValue": l[1] || (l[1] = (n) => j.value = n),
                class: "input",
                placeholder: "Add New Category"
              }, null, 512), [
                [W, j.value]
              ]),
              v("button", {
                type: "button",
                class: "button tedirCategoryButton",
                onClick: l[2] || (l[2] = (n) => {
                  k("add", j.value), j.value = "";
                })
              }, "Save")
            ])
          ])
        ])
      ])
    ], 2));
  }
});
const ol = /* @__PURE__ */ A(al, [["__scopeId", "data-v-93d03657"]]);
export {
  ol as CategoryBox,
  cl as ComboBox,
  nl as ListBox,
  ul as SelectBox,
  rl as TagBox
};
