import { defineComponent as T, ref as g, watch as z, computed as B, openBlock as c, createElementBlock as o, normalizeClass as j, createElementVNode as d, normalizeStyle as x, toDisplayString as C, unref as b, Fragment as $, withDirectives as R, withModifiers as _, vShow as H, renderList as L, renderSlot as A, pushScopeId as W, popScopeId as E, reactive as D, createTextVNode as F, withKeys as K, vModelText as U } from "vue";
const P = (u) => (W("data-v-9a9dee56"), u = u(), E(), u), q = { class: "pickerWrap" }, G = { class: "pickerContent" }, J = { class: "pickerHeader" }, Q = {
  key: 0,
  class: "tedirSelectLoading"
}, X = /* @__PURE__ */ P(() => /* @__PURE__ */ d("span", { class: "spinner" }, null, -1)), Y = [
  X
], Z = ["onClick"], ee = { class: "check" }, le = ["checked", "id"], te = ["for"], ae = ["onClick"], se = { class: "check" }, ue = ["checked", "id"], ne = ["for"], re = ["onClick"], ce = ["onClick"], oe = ["onClick"], ie = ["onClick"], de = /* @__PURE__ */ T({
  __name: "SelectBox",
  props: {
    modelValue: { default: {} },
    options: { default: [] },
    prop: { default: "value" },
    datatype: { default: "" },
    dataprop: { default: "" },
    placeholder: { default: "-- Select Option --" },
    size: { default: 0 },
    type: { default: "" },
    up: { type: Boolean, default: !1 },
    defaultOption: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change", "search", "load"],
  setup(u, { emit: h }) {
    const s = u, e = g(s.modelValue || {}), v = g(!1), f = g(""), y = g(null), V = g(void 0);
    z(() => s.modelValue, () => {
      e.value = s.modelValue;
    });
    const m = () => {
      clearTimeout(V.value), V.value = setTimeout(() => {
        var l, t;
        f.value = "", ((l = y.value) == null ? void 0 : l.value) && ((t = y.value) == null ? void 0 : t.value) !== "" && (f.value = y.value.value), h("search", f.value);
      }, 500);
    }, k = B(() => {
      let l = s.options;
      return f.value.length >= 1 && (l = l.filter((t) => {
        if (isNaN(t) === !1 && Number(t) === Number(f.value))
          return !0;
        if (typeof t == "string" && t.toLowerCase().includes(f.value.toLowerCase()))
          return !0;
        if (typeof t == "object" && t !== null && Object.prototype.toString.call(t) === "[object Object]")
          for (const a of Object.keys(t)) {
            if (isNaN(t[a]) === !1 && Number(t[a]) === Number(f.value))
              return !0;
            if (typeof t[a] == "string" && t[a].toLowerCase().includes(f.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), l;
    }), I = ((l = 10) => {
      let t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", a = "";
      for (let N = 0; N < l; N++)
        a += t.charAt(Math.floor(Math.random() * t.length));
      return a;
    })(), w = (l) => {
      var t;
      l.target.style.display = "none", v.value = !1, (t = y.value) != null && t.value && (y.value.value = "", f.value = "");
    }, p = (l) => {
      e.value = l, h("update:modelValue", e.value), h("change", e.value, l), v.value = !1;
    }, i = (l, t = "") => {
      t !== "" ? e.value.map((a) => a[t]).includes(l[t]) ? e.value.splice(e.value.findIndex((a) => a[t] === l[t]), 1) : e.value.push(l) : e.value.includes(l) ? e.value.splice(e.value.findIndex((a) => a === l), 1) : e.value.push(l), h("update:modelValue", e.value), h("change", e.value, l);
    }, n = (l) => {
      typeof l == "object" && l !== null && String(s.datatype).toLowerCase() === "string" ? (e.value = l[String(s.dataprop || s.prop)], h("update:modelValue", String(e.value))) : typeof l == "object" && l !== null && String(s.datatype).toLowerCase() === "number" ? (e.value = l[String(s.dataprop || s.prop)], h("update:modelValue", Number(e.value))) : (e.value = l, h("update:modelValue", e.value)), v.value = !1, h("change", e.value, l);
    }, r = B(() => {
      let l = (s == null ? void 0 : s.placeholder) || "-- Select option --";
      if (k.value.length >= 1)
        if (typeof e.value == "number") {
          let t = k.value.filter((a) => Number(a[String(s.dataprop || s.prop)]) === Number(e.value));
          typeof k.value[0] == "object" && t.length >= 1 ? l = t[0][String(s.prop)] : typeof k.value[0] == "number" && (l = e.value);
        } else if (typeof e.value == "string") {
          let t = k.value.filter((a) => String(a[String(s.dataprop || s.prop)]) === e.value);
          typeof k.value[0] == "object" && t.length >= 1 ? l = t[0][String(s.prop)] : typeof k.value[0] == "string" && e.value !== "" && (l = e.value);
        } else
          typeof e.value == "object" && (Array.isArray(e.value) && e.value.length >= 1 ? typeof e.value[0] == "object" && String(s.prop) in e.value[0] ? l = e.value.map((t) => t[String(s.prop)]).join(", ") : l = e.value.join(", ") : e.value !== null && String(s.prop) in e.value && (l = e.value[String(s.prop)]));
      return l;
    });
    return (l, t) => (c(), o("div", {
      class: j(["picker suggestion", { active: v.value, pickerUp: u.up }])
    }, [
      d("div", {
        class: "pickerBackdrop",
        style: x({ display: v.value ? "block" : "none" }),
        onClick: w
      }, null, 4),
      d("div", q, [
        d("div", {
          class: "select pickerToggler",
          onClick: t[0] || (t[0] = (a) => {
            v.value = !v.value, h("load");
          })
        }, C(b(r)), 1),
        d("div", G, [
          d("div", J, [
            d("input", {
              type: "search",
              ref_key: "searchRef",
              ref: y,
              onInput: m,
              class: "input"
            }, null, 544)
          ]),
          u.loading ? (c(), o("div", Q, Y)) : (c(), o($, { key: 1 }, [
            Array.isArray(e.value) ? (c(), o("div", {
              key: 0,
              class: "pickerMenu",
              style: x({ "max-height": Number(u.size) !== 0 ? Number(u.size) * 42 + "px" : "auto" })
            }, [
              R(d("div", {
                onClick: t[1] || (t[1] = _((a) => p(typeof u.modelValue == "object" ? Array.isArray(u.modelValue) ? [] : {} : ""), ["stop"])),
                class: "pickerItem"
              }, C(u.placeholder || "-- Select Option --"), 513), [
                [H, u.defaultOption]
              ]),
              (c(!0), o($, null, L(b(k), (a, N) => (c(), o($, {
                key: "option-" + a
              }, [
                typeof a == "string" && u.type !== "slot" ? (c(), o("div", {
                  key: 0,
                  onClick: _((O) => i(a), ["stop"]),
                  class: "pickerItem"
                }, [
                  d("div", ee, [
                    d("input", {
                      type: "checkbox",
                      class: "checkInput",
                      checked: e.value.includes(a),
                      id: "check-" + (b(I) + String(N)),
                      style: { "pointer-events": "none" }
                    }, null, 8, le),
                    d("label", {
                      class: "checkLabel",
                      for: "check-" + (b(I) + String(N)),
                      style: { "pointer-events": "none" }
                    }, C(a), 9, te)
                  ])
                ], 8, Z)) : typeof a == "object" && a !== null && u.prop in a && u.type !== "slot" ? (c(), o("div", {
                  key: 1,
                  onClick: _((O) => i(a, u.prop), ["stop"]),
                  class: "pickerItem"
                }, [
                  d("div", se, [
                    d("input", {
                      type: "checkbox",
                      class: "checkInput",
                      checked: e.value.includes(a),
                      id: "check-" + (b(I) + String(N)),
                      style: { "pointer-events": "none" }
                    }, null, 8, ue),
                    d("label", {
                      class: "checkLabel",
                      for: "check-" + (b(I) + String(N)),
                      style: { "pointer-events": "none" }
                    }, C(a[u.prop]), 9, ne)
                  ])
                ], 8, ae)) : (c(), o("div", {
                  key: 2,
                  onClick: _((O) => i(a), ["stop"]),
                  class: "pickerItem"
                }, [
                  A(l.$slots, "default", {
                    option: a,
                    selected: e.value
                  }, void 0, !0)
                ], 8, re))
              ], 64))), 128))
            ], 4)) : (c(), o("div", {
              key: 1,
              class: "pickerMenu",
              style: x({ "max-height": Number(u.size) !== 0 ? Number(u.size) * 42 + "px" : "auto" })
            }, [
              R(d("div", {
                onClick: t[2] || (t[2] = _((a) => p(typeof u.modelValue == "object" ? Array.isArray(u.modelValue) ? [] : {} : ""), ["stop"])),
                class: "pickerItem"
              }, C(u.placeholder || "-- Select Option --"), 513), [
                [H, u.defaultOption]
              ]),
              (c(!0), o($, null, L(b(k), (a, N) => (c(), o($, {
                key: "option-" + a
              }, [
                typeof a == "string" && u.type !== "slot" ? (c(), o("div", {
                  key: 0,
                  onClick: (O) => n(a),
                  class: j(["pickerItem", e.value === a ? "active" : ""])
                }, C(a), 11, ce)) : typeof a == "object" && a !== null && u.prop in a && u.type !== "slot" ? (c(), o("div", {
                  key: 1,
                  onClick: (O) => n(a),
                  class: j(["pickerItem", e.value[u.prop] === a[u.prop] || String(a[u.dataprop || u.prop]) === String(e.value) ? "active" : ""])
                }, C(a[u.prop]), 11, oe)) : (c(), o("div", {
                  key: 2,
                  onClick: _((O) => n(a), ["stop"]),
                  class: j(["pickerItem", e.value === a ? "active" : ""])
                }, [
                  A(l.$slots, "default", {
                    option: a,
                    selected: e.value
                  }, void 0, !0)
                ], 10, ie))
              ], 64))), 128))
            ], 4))
          ], 64))
        ])
      ])
    ], 2));
  }
});
const M = (u, h) => {
  const s = u.__vccOpts || u;
  for (const [e, v] of h)
    s[e] = v;
  return s;
}, yl = /* @__PURE__ */ M(de, [["__scopeId", "data-v-9a9dee56"]]), ve = (u) => (W("data-v-6d1b181c"), u = u(), E(), u), fe = { class: "pickerWrap" }, pe = ["value", "placeholder"], he = ["value", "placeholder"], ye = { class: "pickerContent pickerSizing" }, ke = {
  key: 0,
  class: "tedirSelectLoading"
}, ge = /* @__PURE__ */ ve(() => /* @__PURE__ */ d("span", { class: "spinner" }, null, -1)), be = [
  ge
], Ce = ["onClick"], me = ["onClick"], Se = ["onClick"], $e = /* @__PURE__ */ T({
  __name: "ComboBox",
  props: {
    modelValue: { default: {} },
    options: { default: [] },
    prop: { default: "value" },
    datatype: { default: "" },
    dataprop: { default: "" },
    placeholder: { default: "-- Search Option --" },
    size: { default: 0 },
    select: { type: Boolean, default: !1 },
    up: { type: Boolean, default: !1 },
    serverSearch: { type: Boolean, default: !1 },
    emptySearch: { type: Boolean, default: !1 },
    loading: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change", "search"],
  setup(u, { emit: h }) {
    var i, n;
    const s = u, e = g(s.modelValue || {}), v = g(!1), f = g(((n = (i = s == null ? void 0 : s.options) == null ? void 0 : i.filter((r) => ((r == null ? void 0 : r[String(s == null ? void 0 : s.prop)]) || r) === s.modelValue)) == null ? void 0 : n[0]) || ""), y = g(null), V = g(void 0), m = g(!1);
    z(() => s.modelValue, () => {
      var r, l;
      e.value = s.modelValue, f.value = ((l = (r = s == null ? void 0 : s.options) == null ? void 0 : r.filter((t) => ((t == null ? void 0 : t[String(s == null ? void 0 : s.prop)]) || t) === s.modelValue)) == null ? void 0 : l[0]) || "", m.value = !1;
    });
    const k = B(() => {
      let r = s.options;
      return f.value.length >= 1 && s.serverSearch !== !0 && (r = r.filter((l) => {
        if (isNaN(l) === !1 && Number(l) === Number(f.value))
          return !0;
        if (typeof l == "string" && l.toLowerCase().includes(f.value.toLowerCase()))
          return !0;
        if (typeof l == "object" && l !== null && Object.prototype.toString.call(l) === "[object Object]")
          for (const t of Object.keys(l)) {
            if (isNaN(l[t]) === !1 && Number(l[t]) === Number(f.value))
              return !0;
            if (typeof l[t] == "string" && l[t].toLowerCase().includes(f.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), r;
    }), S = () => {
      clearTimeout(V.value), V.value = setTimeout(() => {
        var r, l;
        f.value = "", ((r = y.value) == null ? void 0 : r.value) && ((l = y.value) == null ? void 0 : l.value) !== "" && (f.value = y.value.value), h("search", f.value), k.value.length >= 1 && m.value === !0 || s.serverSearch == !0 ? v.value = !0 : v.value = !1;
      }, 500);
    }, I = (r, l) => {
      (typeof r == "string" || isNaN(r) === !1) && (f.value = r, y.value.value = r), s.emptySearch == !0 && (f.value = "", y.value.value = "", h("search", f.value)), typeof l == "object" && l !== null && String(s.datatype).toLowerCase() === "string" ? (e.value = l[String(s.dataprop || s.prop)], h("update:modelValue", String(e.value))) : typeof l == "object" && l !== null && String(s.datatype).toLowerCase() === "number" ? (e.value = l[String(s.dataprop || s.prop)], h("update:modelValue", Number(e.value))) : (e.value = l, h("update:modelValue", e.value)), h("change", r, l), v.value = !1;
    }, w = (r) => {
      r.target.style.display = "none", v.value = !1;
    }, p = B(() => {
      var l;
      let r = f.value;
      if (k.value.length >= 1 && m.value !== !0 && s.emptySearch !== !0)
        if (typeof e.value == "number") {
          let t = k.value.filter((a) => Number(a[String(s.dataprop || s.prop)]) === Number(e.value));
          typeof k.value[0] == "object" && t.length >= 1 ? r = t[0][String(s.prop)] : typeof k.value[0] == "number" && (r = e.value);
        } else if (typeof e.value == "string") {
          let t = k.value.filter((a) => String(a[String(s.dataprop || s.prop)]) === e.value);
          typeof k.value[0] == "object" && t.length >= 1 ? r = t[0][String(s.prop)] : typeof k.value[0] == "string" && e.value !== "" && (r = e.value);
        } else
          typeof e.value == "object" && (Array.isArray(e.value) && e.value.length >= 1 ? typeof e.value[0] == "object" && String(s.prop) in e.value[0] ? r = e.value.map((t) => t[String(s.prop)]).join(", ") : r = e.value.join(", ") : e.value !== null && String(s.prop) in e.value && (r = e.value[String(s.prop)]));
      else
        ((l = y.value) == null ? void 0 : l.value) && m.value === !0 && s.emptySearch !== !0 && (r = y.value.value);
      return r;
    });
    return (r, l) => (c(), o("div", {
      class: j(["picker suggestion", { active: v.value, pickerUp: u.up }])
    }, [
      d("div", {
        class: "pickerBackdrop",
        style: x({ display: v.value ? "block" : "none" }),
        onClick: w
      }, null, 4),
      d("div", fe, [
        u.select ? (c(), o("input", {
          key: 0,
          type: "search",
          value: b(p),
          ref_key: "searchRef",
          ref: y,
          onInput: S,
          onClick: l[0] || (l[0] = (t) => v.value = !0),
          onFocus: l[1] || (l[1] = (t) => m.value = !0),
          onBlur: l[2] || (l[2] = (t) => m.value = !1),
          class: "select",
          placeholder: u.placeholder
        }, null, 40, pe)) : (c(), o("input", {
          key: 1,
          type: "search",
          value: b(p),
          ref_key: "searchRef",
          ref: y,
          onInput: S,
          onClick: l[3] || (l[3] = (t) => v.value = b(k).length >= 1 && f.value !== ""),
          onFocus: l[4] || (l[4] = (t) => m.value = !0),
          onBlur: l[5] || (l[5] = (t) => m.value = !1),
          class: "input",
          placeholder: u.placeholder || "-- Search Option --"
        }, null, 40, he)),
        d("div", ye, [
          u.loading ? (c(), o("div", ke, be)) : (c(!0), o($, { key: 1 }, L(b(k), (t, a) => (c(), o($, {
            key: "option-" + t
          }, [
            typeof t == "string" ? (c(), o("div", {
              key: 0,
              onClick: (N) => I(t, t),
              class: j(["pickerItem", u.modelValue === t ? "active" : ""])
            }, C(t), 11, Ce)) : typeof t == "object" && u.prop in t ? (c(), o("div", {
              key: 1,
              onClick: (N) => I(t[u.prop], t),
              class: j(["pickerItem", e.value[u.prop] === t[u.prop] || String(t[u.dataprop || u.prop]) === String(e.value) ? "active" : ""])
            }, C(t[u.prop]), 11, me)) : (c(), o("div", {
              key: 2,
              onClick: _((N) => I(t, t), ["stop"]),
              class: j(["pickerItem", u.modelValue === t ? "active" : ""])
            }, [
              A(r.$slots, "default", { option: t }, void 0, !0)
            ], 10, Se))
          ], 64))), 128))
        ])
      ])
    ], 2));
  }
});
const kl = /* @__PURE__ */ M($e, [["__scopeId", "data-v-6d1b181c"]]), Ne = { class: "list" }, we = { class: "listHeader" }, je = ["onClick"], Ve = { class: "check" }, Ie = ["checked", "id"], _e = ["for"], Oe = ["onClick"], xe = { class: "check" }, Le = ["checked", "id"], Be = ["for"], Ae = ["onClick"], Te = ["onClick"], ze = ["onClick"], Me = ["onClick"], Re = /* @__PURE__ */ T({
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
  setup(u, { emit: h }) {
    const s = u, e = g(s.modelValue || {}), v = g(""), f = g(null), y = g(void 0);
    z(() => s.modelValue, () => {
      e.value = s.modelValue;
    });
    const V = () => {
      clearTimeout(y.value), y.value = setTimeout(() => {
        var p, i;
        v.value = "", ((p = f.value) == null ? void 0 : p.value) && ((i = f.value) == null ? void 0 : i.value) !== "" && (v.value = f.value.value), h("search", v.value);
      }, 500);
    }, m = B(() => {
      let p = s.options;
      return v.value.length >= 1 && (p = p.filter((i) => {
        if (isNaN(i) === !1 && Number(i) === Number(v.value))
          return !0;
        if (typeof i == "string" && i.toLowerCase().includes(v.value.toLowerCase()))
          return !0;
        if (typeof i == "object" && i !== null && Object.prototype.toString.call(i) === "[object Object]")
          for (const n of Object.keys(i)) {
            if (isNaN(i[n]) === !1 && Number(i[n]) === Number(v.value))
              return !0;
            if (typeof i[n] == "string" && i[n].toLowerCase().includes(v.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), p;
    }), S = (() => {
      let p = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", i = "";
      for (let n = 0; n < 10; n++)
        i += p.charAt(Math.floor(Math.random() * p.length));
      return i;
    })(), I = (p, i = "") => {
      i !== "" ? e.value.map((n) => n[i]).includes(p[i]) ? e.value.splice(e.value.findIndex((n) => n[i] === p[i]), 1) : e.value.push(p) : e.value.includes(p) ? e.value.splice(e.value.findIndex((n) => n === p), 1) : e.value.push(p), h("update:modelValue", e.value), h("change", e.value, p);
    }, w = (p) => {
      typeof p == "object" && p !== null && String(s.datatype).toLowerCase() === "string" ? (e.value = p[String(s.dataprop || s.prop)], h("update:modelValue", String(e.value))) : typeof p == "object" && p !== null && String(s.datatype).toLowerCase() === "number" ? (e.value = p[String(s.dataprop || s.prop)], h("update:modelValue", Number(e.value))) : (e.value = p, h("update:modelValue", e.value)), h("change", e.value, p);
    };
    return (p, i) => (c(), o("div", null, [
      d("div", Ne, [
        d("div", we, [
          d("input", {
            type: "search",
            ref_key: "searchRef",
            ref: f,
            onInput: V,
            class: "input"
          }, null, 544)
        ]),
        Array.isArray(u.modelValue) ? (c(), o("div", {
          key: 0,
          class: "listMenu",
          style: x({ "max-height": Number(u.size) !== 0 ? Number(u.size) * 44 + "px" : "auto" })
        }, [
          (c(!0), o($, null, L(b(m), (n, r) => (c(), o($, {
            key: "option-" + n
          }, [
            typeof n == "string" ? (c(), o("div", {
              key: 0,
              onClick: _((l) => I(n), ["stop"]),
              class: "listItem"
            }, [
              d("div", Ve, [
                d("input", {
                  type: "checkbox",
                  class: "checkInput",
                  checked: e.value.includes(n),
                  id: "check-" + (b(S) + String(r)),
                  style: { "pointer-events": "none" }
                }, null, 8, Ie),
                d("label", {
                  class: "checkLabel",
                  for: "check-" + (b(S) + String(r)),
                  style: { "pointer-events": "none" }
                }, C(n), 9, _e)
              ])
            ], 8, je)) : typeof n == "object" && u.prop in n ? (c(), o("div", {
              key: 1,
              onClick: _((l) => I(n, u.prop), ["stop"]),
              class: "listItem"
            }, [
              d("div", xe, [
                d("input", {
                  type: "checkbox",
                  class: "checkInput",
                  checked: e.value.includes(n),
                  id: "check-" + (b(S) + String(r)),
                  style: { "pointer-events": "none" }
                }, null, 8, Le),
                d("label", {
                  class: "checkLabel",
                  for: "check-" + (b(S) + String(r)),
                  style: { "pointer-events": "none" }
                }, C(n[u.prop]), 9, Be)
              ])
            ], 8, Oe)) : (c(), o("div", {
              key: 2,
              onClick: _((l) => I(n), ["stop"]),
              class: j(["listItem", e.value.includes(n) ? "active" : ""])
            }, [
              A(p.$slots, "default", {
                option: n,
                selected: e.value
              }, void 0, !0)
            ], 10, Ae))
          ], 64))), 128))
        ], 4)) : (c(), o("div", {
          key: 1,
          class: "listMenu",
          style: x({ "max-height": Number(u.size) !== 0 ? Number(u.size) * 44 + "px" : "auto" })
        }, [
          (c(!0), o($, null, L(b(m), (n, r) => (c(), o($, {
            key: "option-" + n
          }, [
            typeof n == "string" ? (c(), o("div", {
              key: 0,
              onClick: (l) => w(n),
              class: j(["listItem", e.value === n ? "active" : ""])
            }, C(n), 11, Te)) : typeof n == "object" && u.prop in n ? (c(), o("div", {
              key: 1,
              onClick: (l) => w(n),
              class: j(["listItem", e.value[u.prop] === n[u.prop] || String(n[u.dataprop || u.prop]) === String(e.value) ? "active" : ""])
            }, C(n[u.prop]), 11, ze)) : (c(), o("div", {
              key: 2,
              onClick: _((l) => w(n), ["stop"]),
              class: j(["listItem", e.value === n ? "active" : ""])
            }, [
              A(p.$slots, "default", {
                option: n,
                selected: e.value
              }, void 0, !0)
            ], 10, Me))
          ], 64))), 128))
        ], 4))
      ])
    ]));
  }
});
const gl = /* @__PURE__ */ M(Re, [["__scopeId", "data-v-d7fed8bc"]]), Fe = (u) => (W("data-v-3acd22f1"), u = u(), E(), u), We = { class: "tagWrap" }, Ee = { class: "tags" }, He = { class: "tag groupItem" }, Ue = ["onClick"], De = /* @__PURE__ */ Fe(() => /* @__PURE__ */ d("svg", {
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
  /* @__PURE__ */ d("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }),
  /* @__PURE__ */ d("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  })
], -1)), Ke = [
  De
], Pe = { class: "tagContent" }, qe = ["onClick"], Ge = ["onClick"], Je = ["onClick"], Qe = /* @__PURE__ */ T({
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
  setup(u, { emit: h }) {
    const s = u, e = g(!1), v = g(""), f = g(null), y = D(s.modelValue || []), V = g(s.options || []), m = g(s.separator || ","), k = g(s.prop || "value"), S = B(() => {
      let i = V.value;
      return v.value.length >= 1 && (i = i.filter((n) => {
        if (isNaN(n) === !1 && Number(n) === Number(v.value))
          return !0;
        if (typeof n == "string" && n.toLowerCase().includes(v.value.toLowerCase()))
          return !0;
        if (typeof n == "object" && n !== null && Object.prototype.toString.call(n) === "[object Object]")
          for (const r of Object.keys(n)) {
            if (isNaN(n[r]) === !1 && Number(n[r]) === Number(v.value))
              return !0;
            if (typeof n[r] == "string" && n[r].toLowerCase().includes(v.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), i;
    }), I = () => {
      f.value.focus();
    }, w = (i) => {
      if (i.key !== "Enter" && S.value.length >= 1 ? e.value = !0 : e.value = !1, v.value.endsWith(m.value) || i.key === "Enter") {
        const n = v.value.replace(m.value, "");
        y.includes(n) || (y.push(n), V.value.includes(n) && (V.value = V.value.filter((r) => typeof r == "string" && r !== n ? !0 : typeof r == "object" && k.value in r && r[k.value] !== n))), v.value = "", h("update:modelValue", y);
      }
    };
    z(v, () => {
      if (f.value !== null) {
        const i = document.createElement("div");
        i.style.width = "max-content", i.style.position = "absolute", i.style.visibility = "hidden";
        const n = v.value.length >= 2 ? v.value : f.value.getAttribute("placeholder");
        i.innerHTML = n.replace(/ /g, "&nbsp;").trim(), document.body.appendChild(i);
        const r = Math.ceil(Number(window.getComputedStyle(i).width.replace("px", ""))) + 30;
        f.value.style.setProperty("width", r + "px"), i.remove();
      }
    });
    const p = (i) => {
      i.target.style.display = "none", e.value = !1;
    };
    return (i, n) => (c(), o("div", {
      class: j(["taggable", { active: e.value === !0 }])
    }, [
      d("div", {
        class: "tagBackdrop",
        style: x({ display: e.value ? "block" : "none" }),
        onClick: p
      }, null, 4),
      d("div", We, [
        d("div", {
          class: "input tagToggler",
          onClick: I
        }, [
          d("div", Ee, [
            (c(!0), o($, null, L(y, (r, l) => (c(), o("div", {
              key: "tag-" + l,
              class: "group"
            }, [
              d("div", He, [
                typeof r == "string" && r !== "" ? (c(), o($, { key: 0 }, [
                  F(C(r), 1)
                ], 64)) : typeof r == "object" && k.value in r ? (c(), o($, { key: 1 }, [
                  F(C(r[k.value]), 1)
                ], 64)) : (c(), o($, { key: 2 }, [
                  F(C(u.placeholder), 1)
                ], 64))
              ]),
              d("div", {
                class: "tag groupItem",
                onClick: (t) => y.splice(l, 1)
              }, Ke, 8, Ue)
            ]))), 128)),
            R(d("input", {
              type: "search",
              ref_key: "inputRef",
              ref: f,
              "onUpdate:modelValue": n[0] || (n[0] = (r) => v.value = r),
              class: "tagInput",
              onInput: n[1] || (n[1] = (r) => w(r)),
              onKeyup: n[2] || (n[2] = K((r) => w(r), ["enter"])),
              placeholder: "Add new tag"
            }, null, 544), [
              [U, v.value]
            ])
          ])
        ]),
        d("div", Pe, [
          (c(!0), o($, null, L(b(S), (r, l) => (c(), o($, {
            key: "option-" + r
          }, [
            typeof r == "string" ? (c(), o("div", {
              key: 0,
              onClick: (t) => {
                v.value = r + ",", w(t);
              },
              class: "tagItem"
            }, C(r), 9, qe)) : typeof r == "object" && k.value in r ? (c(), o("div", {
              key: 1,
              onClick: (t) => {
                v.value = r[k.value] + ",", w(t);
              },
              class: "tagItem"
            }, C(r[k.value]), 9, Ge)) : (c(), o("div", {
              key: 2,
              onClick: (t) => {
                v.value = r + ",", w(t);
              },
              class: "tagItem"
            }, [
              A(i.$slots, "default", { option: r }, void 0, !0)
            ], 8, Je))
          ], 64))), 128))
        ])
      ])
    ], 2));
  }
});
const bl = /* @__PURE__ */ M(Qe, [["__scopeId", "data-v-3acd22f1"]]), Xe = { class: "pickerOverlay pickerWrap" }, Ye = { class: "pickerContent" }, Ze = { class: "pickerHeader" }, el = ["onClick"], ll = { class: "check" }, tl = ["checked", "id"], al = ["for"], sl = ["onClick"], ul = { class: "check" }, nl = ["checked", "id"], rl = ["for"], cl = ["onClick"], ol = ["onClick"], il = ["onClick"], dl = ["onClick"], vl = { class: "pickerFooter" }, fl = { class: "tedirCategoryAdd" }, pl = /* @__PURE__ */ T({
  __name: "CategoryBox",
  props: {
    modelValue: { default: {} },
    options: { default: [] },
    prop: { default: "value" },
    datatype: { default: "" },
    dataprop: { default: "" },
    placeholder: { default: "-- Select option --" },
    size: { default: 0 },
    up: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change", "add", "search"],
  setup(u, { emit: h }) {
    const s = u, e = g(s.modelValue || {}), v = g(!1), f = g(""), y = g(null), V = g(void 0), m = g("");
    z(() => s.modelValue, () => {
      e.value = s.modelValue;
    });
    const k = () => {
      clearTimeout(V.value), V.value = setTimeout(() => {
        var l, t;
        f.value = "", ((l = y.value) == null ? void 0 : l.value) && ((t = y.value) == null ? void 0 : t.value) !== "" && (f.value = y.value.value), h("search", f.value);
      }, 500);
    }, S = B(() => {
      let l = s.options;
      return f.value.length >= 1 && (l = l.filter((t) => {
        if (isNaN(t) === !1 && Number(t) === Number(f.value))
          return !0;
        if (typeof t == "string" && t.toLowerCase().includes(f.value.toLowerCase()))
          return !0;
        if (typeof t == "object" && t !== null && Object.prototype.toString.call(t) === "[object Object]")
          for (const a of Object.keys(t)) {
            if (isNaN(t[a]) === !1 && Number(t[a]) === Number(f.value))
              return !0;
            if (typeof t[a] == "string" && t[a].toLowerCase().includes(f.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), l;
    }), w = ((l = 10) => {
      let t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", a = "";
      for (let N = 0; N < l; N++)
        a += t.charAt(Math.floor(Math.random() * t.length));
      return a;
    })(), p = (l) => {
      var t;
      l.target.style.display = "none", v.value = !1, (t = y.value) != null && t.value && (y.value.value = "", f.value = "");
    }, i = (l, t = "") => {
      t !== "" ? e.value.map((a) => a[t]).includes(l[t]) ? e.value.splice(e.value.findIndex((a) => a[t] === l[t]), 1) : e.value.push(l) : e.value.includes(l) ? e.value.splice(e.value.findIndex((a) => a === l), 1) : e.value.push(l), h("update:modelValue", e.value), h("change", e.value, l);
    }, n = (l) => {
      typeof l == "object" && l !== null && String(s.datatype).toLowerCase() === "string" ? (e.value = l[String(s.dataprop || s.prop)], h("update:modelValue", String(e.value))) : typeof l == "object" && l !== null && String(s.datatype).toLowerCase() === "number" ? (e.value = l[String(s.dataprop || s.prop)], h("update:modelValue", Number(e.value))) : (e.value = l, h("update:modelValue", e.value)), v.value = !1, h("change", e.value, l);
    }, r = B(() => {
      let l = (s == null ? void 0 : s.placeholder) || "-- Select option --";
      if (S.value.length >= 1)
        if (typeof e.value == "number") {
          let t = S.value.filter((a) => Number(a[String(s.dataprop || s.prop)]) === Number(e.value));
          typeof S.value[0] == "object" && t.length >= 1 ? l = t[0][String(s.prop)] : typeof S.value[0] == "number" && (l = e.value);
        } else if (typeof e.value == "string") {
          let t = S.value.filter((a) => String(a[String(s.dataprop || s.prop)]) === e.value);
          typeof S.value[0] == "object" && t.length >= 1 ? l = t[0][String(s.prop)] : typeof S.value[0] == "string" && e.value !== "" && (l = e.value);
        } else
          typeof e.value == "object" && (Array.isArray(e.value) && e.value.length >= 1 ? typeof e.value[0] == "object" && String(s.prop) in e.value[0] ? l = e.value.map((t) => t[String(s.prop)]).join(", ") : l = e.value.join(", ") : e.value !== null && String(s.prop) in e.value && (l = e.value[String(s.prop)]));
      return l;
    });
    return (l, t) => (c(), o("div", {
      class: j(["picker suggestion tedirCategory", { active: v.value, pickerUp: u.up }])
    }, [
      d("div", {
        class: "pickerBackdrop",
        style: x({ display: v.value ? "block" : "none" }),
        onClick: p
      }, null, 4),
      d("div", Xe, [
        d("div", {
          class: "select pickerToggler",
          onClick: t[0] || (t[0] = (a) => v.value = !v.value)
        }, C(b(r)), 1),
        d("div", Ye, [
          d("div", Ze, [
            d("input", {
              type: "search",
              ref_key: "searchRef",
              ref: y,
              onInput: k,
              class: "input"
            }, null, 544)
          ]),
          Array.isArray(e.value) ? (c(), o("div", {
            key: 0,
            class: "pickerMenu",
            style: x({ "max-height": Number(u.size) !== 0 ? Number(u.size) * 42 + "px" : "auto" })
          }, [
            (c(!0), o($, null, L(b(S), (a, N) => (c(), o($, {
              key: "option-" + a
            }, [
              typeof a == "string" ? (c(), o("div", {
                key: 0,
                onClick: _((O) => i(a), ["stop"]),
                class: "pickerItem"
              }, [
                d("div", ll, [
                  d("input", {
                    type: "checkbox",
                    class: "checkInput",
                    checked: e.value.includes(a),
                    id: "check-" + (b(w) + String(N)),
                    style: { "pointer-events": "none" }
                  }, null, 8, tl),
                  d("label", {
                    class: "checkLabel",
                    for: "check-" + (b(w) + String(N)),
                    style: { "pointer-events": "none" }
                  }, C(a), 9, al)
                ])
              ], 8, el)) : typeof a == "object" && a !== null && u.prop in a ? (c(), o("div", {
                key: 1,
                onClick: _((O) => i(a, u.prop), ["stop"]),
                class: "pickerItem"
              }, [
                d("div", ul, [
                  d("input", {
                    type: "checkbox",
                    class: "checkInput",
                    checked: e.value.includes(a),
                    id: "check-" + (b(w) + String(N)),
                    style: { "pointer-events": "none" }
                  }, null, 8, nl),
                  d("label", {
                    class: "checkLabel",
                    for: "check-" + (b(w) + String(N)),
                    style: { "pointer-events": "none" }
                  }, C(a[u.prop]), 9, rl)
                ])
              ], 8, sl)) : (c(), o("div", {
                key: 2,
                onClick: _((O) => i(a), ["stop"]),
                class: "pickerItem"
              }, [
                A(l.$slots, "default", {
                  option: a,
                  selected: e.value
                }, void 0, !0)
              ], 8, cl))
            ], 64))), 128))
          ], 4)) : (c(), o("div", {
            key: 1,
            class: "pickerMenu",
            style: x({ "max-height": Number(u.size) !== 0 ? Number(u.size) * 42 + "px" : "auto" })
          }, [
            (c(!0), o($, null, L(b(S), (a, N) => (c(), o($, {
              key: "option-" + a
            }, [
              typeof a == "string" ? (c(), o("div", {
                key: 0,
                onClick: (O) => n(a),
                class: j(["pickerItem", e.value === a ? "active" : ""])
              }, C(a), 11, ol)) : typeof a == "object" && a !== null && u.prop in a ? (c(), o("div", {
                key: 1,
                onClick: (O) => n(a),
                class: j(["pickerItem", e.value[u.prop] === a[u.prop] || String(a[u.dataprop || u.prop]) === String(e.value) ? "active" : ""])
              }, C(a[u.prop]), 11, il)) : (c(), o("div", {
                key: 2,
                onClick: _((O) => n(a), ["stop"]),
                class: j(["pickerItem", e.value === a ? "active" : ""])
              }, [
                A(l.$slots, "default", {
                  option: a,
                  selected: e.value
                }, void 0, !0)
              ], 10, dl))
            ], 64))), 128))
          ], 4)),
          d("div", vl, [
            d("div", fl, [
              R(d("input", {
                type: "text",
                "onUpdate:modelValue": t[1] || (t[1] = (a) => m.value = a),
                class: "input",
                placeholder: "Add New Category"
              }, null, 512), [
                [U, m.value]
              ]),
              d("button", {
                type: "button",
                class: "button tedirCategoryButton",
                onClick: t[2] || (t[2] = (a) => {
                  h("add", m.value), m.value = "";
                })
              }, "Save")
            ])
          ])
        ])
      ])
    ], 2));
  }
});
const Cl = /* @__PURE__ */ M(pl, [["__scopeId", "data-v-9bd9abf8"]]);
export {
  Cl as CategoryBox,
  kl as ComboBox,
  gl as ListBox,
  yl as SelectBox,
  bl as TagBox
};
