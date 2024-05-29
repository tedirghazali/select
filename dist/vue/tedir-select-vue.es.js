import { defineComponent as T, ref as g, watch as z, computed as B, openBlock as o, createElementBlock as i, normalizeClass as V, createElementVNode as d, normalizeStyle as x, toDisplayString as m, unref as b, Fragment as S, withDirectives as R, withModifiers as _, vShow as H, renderList as L, renderSlot as A, pushScopeId as W, popScopeId as E, reactive as D, createTextVNode as F, withKeys as K, vModelText as U } from "vue";
const P = (n) => (W("data-v-9d6782b2"), n = n(), E(), n), q = { class: "pickerWrap" }, G = { class: "pickerContent" }, J = { class: "pickerHeader" }, Q = {
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
  emits: ["update:modelValue", "change", "search"],
  setup(n, { emit: h }) {
    const t = n, e = g(t.modelValue || {}), v = g(!1), f = g(""), y = g(null), j = g(void 0);
    z(() => t.modelValue, () => {
      e.value = t.modelValue;
    });
    const $ = () => {
      clearTimeout(j.value), j.value = setTimeout(() => {
        var s, u;
        f.value = "", ((s = y.value) == null ? void 0 : s.value) && ((u = y.value) == null ? void 0 : u.value) !== "" && (f.value = y.value.value), h("search", f.value);
      }, 500);
    }, k = B(() => {
      let s = t.options;
      return f.value.length >= 1 && (s = s.filter((u) => {
        if (isNaN(u) === !1 && Number(u) === Number(f.value))
          return !0;
        if (typeof u == "string" && u.toLowerCase().includes(f.value.toLowerCase()))
          return !0;
        if (typeof u == "object" && u !== null && Object.prototype.toString.call(u) === "[object Object]")
          for (const a of Object.keys(u)) {
            if (isNaN(u[a]) === !1 && Number(u[a]) === Number(f.value))
              return !0;
            if (typeof u[a] == "string" && u[a].toLowerCase().includes(f.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), s;
    }), I = ((s = 10) => {
      let u = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", a = "";
      for (let w = 0; w < s; w++)
        a += u.charAt(Math.floor(Math.random() * u.length));
      return a;
    })(), N = (s) => {
      var u;
      s.target.style.display = "none", v.value = !1, (u = y.value) != null && u.value && (y.value.value = "", f.value = "");
    }, p = (s) => {
      e.value = s, h("update:modelValue", e.value), h("change", e.value, s), v.value = !1;
    }, c = (s, u = "") => {
      u !== "" ? e.value.map((a) => a[u]).includes(s[u]) ? e.value.splice(e.value.findIndex((a) => a[u] === s[u]), 1) : e.value.push(s) : e.value.includes(s) ? e.value.splice(e.value.findIndex((a) => a === s), 1) : e.value.push(s), h("update:modelValue", e.value), h("change", e.value, s);
    }, l = (s) => {
      typeof s == "object" && s !== null && String(t.datatype).toLowerCase() === "string" ? (e.value = s[String(t.dataprop || t.prop)], h("update:modelValue", String(e.value))) : typeof s == "object" && s !== null && String(t.datatype).toLowerCase() === "number" ? (e.value = s[String(t.dataprop || t.prop)], h("update:modelValue", Number(e.value))) : (e.value = s, h("update:modelValue", e.value)), v.value = !1, h("change", e.value, s);
    }, r = B(() => {
      let s = (t == null ? void 0 : t.placeholder) || "-- Select option --";
      if (k.value.length >= 1)
        if (typeof e.value == "number") {
          let u = k.value.filter((a) => Number(a[String(t.dataprop || t.prop)]) === Number(e.value));
          typeof k.value[0] == "object" && u.length >= 1 ? s = u[0][String(t.prop)] : typeof k.value[0] == "number" && (s = e.value);
        } else if (typeof e.value == "string") {
          let u = k.value.filter((a) => String(a[String(t.dataprop || t.prop)]) === e.value);
          typeof k.value[0] == "object" && u.length >= 1 ? s = u[0][String(t.prop)] : typeof k.value[0] == "string" && e.value !== "" && (s = e.value);
        } else
          typeof e.value == "object" && (Array.isArray(e.value) && e.value.length >= 1 ? typeof e.value[0] == "object" && String(t.prop) in e.value[0] ? s = e.value.map((u) => u[String(t.prop)]).join(", ") : s = e.value.join(", ") : e.value !== null && String(t.prop) in e.value && (s = e.value[String(t.prop)]));
      return s;
    });
    return (s, u) => (o(), i("div", {
      class: V(["picker suggestion", { active: v.value, pickerUp: n.up }])
    }, [
      d("div", {
        class: "pickerBackdrop",
        style: x({ display: v.value ? "block" : "none" }),
        onClick: N
      }, null, 4),
      d("div", q, [
        d("div", {
          class: "select pickerToggler",
          onClick: u[0] || (u[0] = (a) => v.value = !v.value)
        }, m(b(r)), 1),
        d("div", G, [
          d("div", J, [
            d("input", {
              type: "search",
              ref_key: "searchRef",
              ref: y,
              onInput: $,
              class: "input"
            }, null, 544)
          ]),
          n.loading ? (o(), i("div", Q, Y)) : (o(), i(S, { key: 1 }, [
            Array.isArray(e.value) ? (o(), i("div", {
              key: 0,
              class: "pickerMenu",
              style: x({ "max-height": Number(n.size) !== 0 ? Number(n.size) * 42 + "px" : "auto" })
            }, [
              R(d("div", {
                onClick: u[1] || (u[1] = _((a) => p(typeof n.modelValue == "object" ? Array.isArray(n.modelValue) ? [] : {} : ""), ["stop"])),
                class: "pickerItem"
              }, m(n.placeholder || "-- Select Option --"), 513), [
                [H, n.defaultOption]
              ]),
              (o(!0), i(S, null, L(b(k), (a, w) => (o(), i(S, {
                key: "option-" + a
              }, [
                typeof a == "string" && n.type !== "slot" ? (o(), i("div", {
                  key: 0,
                  onClick: _((O) => c(a), ["stop"]),
                  class: "pickerItem"
                }, [
                  d("div", ee, [
                    d("input", {
                      type: "checkbox",
                      class: "checkInput",
                      checked: e.value.includes(a),
                      id: "check-" + (b(I) + String(w)),
                      style: { "pointer-events": "none" }
                    }, null, 8, le),
                    d("label", {
                      class: "checkLabel",
                      for: "check-" + (b(I) + String(w)),
                      style: { "pointer-events": "none" }
                    }, m(a), 9, te)
                  ])
                ], 8, Z)) : typeof a == "object" && a !== null && n.prop in a && n.type !== "slot" ? (o(), i("div", {
                  key: 1,
                  onClick: _((O) => c(a, n.prop), ["stop"]),
                  class: "pickerItem"
                }, [
                  d("div", se, [
                    d("input", {
                      type: "checkbox",
                      class: "checkInput",
                      checked: e.value.includes(a),
                      id: "check-" + (b(I) + String(w)),
                      style: { "pointer-events": "none" }
                    }, null, 8, ue),
                    d("label", {
                      class: "checkLabel",
                      for: "check-" + (b(I) + String(w)),
                      style: { "pointer-events": "none" }
                    }, m(a[n.prop]), 9, ne)
                  ])
                ], 8, ae)) : (o(), i("div", {
                  key: 2,
                  onClick: _((O) => c(a), ["stop"]),
                  class: "pickerItem"
                }, [
                  A(s.$slots, "default", {
                    option: a,
                    selected: e.value
                  }, void 0, !0)
                ], 8, re))
              ], 64))), 128))
            ], 4)) : (o(), i("div", {
              key: 1,
              class: "pickerMenu",
              style: x({ "max-height": Number(n.size) !== 0 ? Number(n.size) * 42 + "px" : "auto" })
            }, [
              R(d("div", {
                onClick: u[2] || (u[2] = _((a) => p(typeof n.modelValue == "object" ? Array.isArray(n.modelValue) ? [] : {} : ""), ["stop"])),
                class: "pickerItem"
              }, m(n.placeholder || "-- Select Option --"), 513), [
                [H, n.defaultOption]
              ]),
              (o(!0), i(S, null, L(b(k), (a, w) => (o(), i(S, {
                key: "option-" + a
              }, [
                typeof a == "string" && n.type !== "slot" ? (o(), i("div", {
                  key: 0,
                  onClick: (O) => l(a),
                  class: V(["pickerItem", e.value === a ? "active" : ""])
                }, m(a), 11, ce)) : typeof a == "object" && a !== null && n.prop in a && n.type !== "slot" ? (o(), i("div", {
                  key: 1,
                  onClick: (O) => l(a),
                  class: V(["pickerItem", e.value[n.prop] === a[n.prop] || String(a[n.dataprop || n.prop]) === String(e.value) ? "active" : ""])
                }, m(a[n.prop]), 11, oe)) : (o(), i("div", {
                  key: 2,
                  onClick: _((O) => l(a), ["stop"]),
                  class: V(["pickerItem", e.value === a ? "active" : ""])
                }, [
                  A(s.$slots, "default", {
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
const M = (n, h) => {
  const t = n.__vccOpts || n;
  for (const [e, v] of h)
    t[e] = v;
  return t;
}, yl = /* @__PURE__ */ M(de, [["__scopeId", "data-v-9d6782b2"]]), ve = (n) => (W("data-v-e03d48ed"), n = n(), E(), n), fe = { class: "pickerWrap" }, pe = ["value", "placeholder"], he = ["value", "placeholder"], ye = { class: "pickerContent pickerSizing" }, ke = {
  key: 0,
  class: "tedirSelectLoading"
}, ge = /* @__PURE__ */ ve(() => /* @__PURE__ */ d("span", { class: "spinner" }, null, -1)), be = [
  ge
], me = ["onClick"], Ce = ["onClick"], Se = ["onClick"], $e = /* @__PURE__ */ T({
  __name: "ComboBox",
  props: {
    modelValue: { default: null },
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
  setup(n, { emit: h }) {
    const t = n, e = g(t.modelValue || {}), v = g(!1), f = g(""), y = g(null), j = g(void 0), $ = g(!1);
    z(() => t.modelValue, () => {
      var c, l;
      e.value = t.modelValue, typeof t.modelValue == "string" || isNaN(t.modelValue) === !1 ? (f.value = t.modelValue, y.value.value = t.modelValue) : (typeof ((c = t.modelValue) == null ? void 0 : c[String(t.prop)]) == "string" || isNaN((l = t.modelValue) == null ? void 0 : l[String(t.prop)]) === !1) && (f.value = t.modelValue[String(t.prop)], y.value.value = t.modelValue[String(t.prop)]), t.emptySearch == !0 && (f.value = "", y.value.value = "", h("search", f.value));
    });
    const k = B(() => {
      let c = t.options;
      return f.value.length >= 1 && t.serverSearch !== !0 && (c = c.filter((l) => {
        if (isNaN(l) === !1 && Number(l) === Number(f.value))
          return !0;
        if (typeof l == "string" && l.toLowerCase().includes(f.value.toLowerCase()))
          return !0;
        if (typeof l == "object" && l !== null && Object.prototype.toString.call(l) === "[object Object]")
          for (const r of Object.keys(l)) {
            if (isNaN(l[r]) === !1 && Number(l[r]) === Number(f.value))
              return !0;
            if (typeof l[r] == "string" && l[r].toLowerCase().includes(f.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), c;
    }), C = () => {
      clearTimeout(j.value), j.value = setTimeout(() => {
        var c, l;
        f.value = "", ((c = y.value) == null ? void 0 : c.value) && ((l = y.value) == null ? void 0 : l.value) !== "" && (f.value = y.value.value), h("search", f.value), k.value.length >= 1 && $.value === !0 || t.serverSearch == !0 ? v.value = !0 : v.value = !1;
      }, 500);
    }, I = (c, l) => {
      (typeof c == "string" || isNaN(c) === !1) && (f.value = c, y.value.value = c), t.emptySearch == !0 && (f.value = "", y.value.value = "", h("search", f.value)), typeof l == "object" && l !== null && String(t.datatype).toLowerCase() === "string" ? (e.value = l[String(t.dataprop || t.prop)], h("update:modelValue", String(e.value))) : typeof l == "object" && l !== null && String(t.datatype).toLowerCase() === "number" ? (e.value = l[String(t.dataprop || t.prop)], h("update:modelValue", Number(e.value))) : (e.value = l, h("update:modelValue", e.value)), h("change", c, l), v.value = !1;
    }, N = (c) => {
      c.target.style.display = "none", v.value = !1;
    }, p = B(() => {
      var l;
      let c = "";
      if (k.value.length >= 1 && $.value !== !0 && t.emptySearch !== !0)
        if (typeof e.value == "number") {
          let r = k.value.filter((s) => Number(s[String(t.dataprop || t.prop)]) === Number(e.value));
          typeof k.value[0] == "object" && r.length >= 1 ? c = r[0][String(t.prop)] : typeof k.value[0] == "number" && (c = e.value);
        } else if (typeof e.value == "string") {
          let r = k.value.filter((s) => String(s[String(t.dataprop || t.prop)]) === e.value);
          typeof k.value[0] == "object" && r.length >= 1 ? c = r[0][String(t.prop)] : typeof k.value[0] == "string" && e.value !== "" && (c = e.value);
        } else
          typeof e.value == "object" && (Array.isArray(e.value) && e.value.length >= 1 ? typeof e.value[0] == "object" && String(t.prop) in e.value[0] ? c = e.value.map((r) => r[String(t.prop)]).join(", ") : c = e.value.join(", ") : e.value !== null && String(t.prop) in e.value && (c = e.value[String(t.prop)]));
      else
        ((l = y.value) == null ? void 0 : l.value) && $.value === !0 && t.emptySearch !== !0 && (c = y.value.value);
      return c;
    });
    return (c, l) => (o(), i("div", {
      class: V(["picker suggestion", { active: v.value, pickerUp: n.up }])
    }, [
      d("div", {
        class: "pickerBackdrop",
        style: x({ display: v.value ? "block" : "none" }),
        onClick: N
      }, null, 4),
      d("div", fe, [
        n.select ? (o(), i("input", {
          key: 0,
          type: "search",
          value: b(p),
          ref_key: "searchRef",
          ref: y,
          onInput: C,
          onClick: l[0] || (l[0] = (r) => v.value = !0),
          onFocus: l[1] || (l[1] = (r) => $.value = !0),
          onBlur: l[2] || (l[2] = (r) => $.value = !1),
          class: "select",
          placeholder: n.placeholder
        }, null, 40, pe)) : (o(), i("input", {
          key: 1,
          type: "search",
          value: b(p),
          ref_key: "searchRef",
          ref: y,
          onInput: C,
          onClick: l[3] || (l[3] = (r) => b(k).length >= 1 && f.value !== "" ? v.value = !0 : v.value = !1),
          onFocus: l[4] || (l[4] = (r) => $.value = !0),
          onBlur: l[5] || (l[5] = (r) => $.value = !1),
          class: "input",
          placeholder: n.placeholder
        }, null, 40, he)),
        d("div", ye, [
          n.loading ? (o(), i("div", ke, be)) : (o(!0), i(S, { key: 1 }, L(b(k), (r, s) => (o(), i(S, {
            key: "option-" + r
          }, [
            typeof r == "string" ? (o(), i("div", {
              key: 0,
              onClick: (u) => I(r, r),
              class: V(["pickerItem", n.modelValue === r ? "active" : ""])
            }, m(r), 11, me)) : typeof r == "object" && n.prop in r ? (o(), i("div", {
              key: 1,
              onClick: (u) => I(r[n.prop], r),
              class: V(["pickerItem", e.value[n.prop] === r[n.prop] || String(r[n.dataprop || n.prop]) === String(e.value) ? "active" : ""])
            }, m(r[n.prop]), 11, Ce)) : (o(), i("div", {
              key: 2,
              onClick: _((u) => I(r, r), ["stop"]),
              class: V(["pickerItem", n.modelValue === r ? "active" : ""])
            }, [
              A(c.$slots, "default", { option: r }, void 0, !0)
            ], 10, Se))
          ], 64))), 128))
        ])
      ])
    ], 2));
  }
});
const kl = /* @__PURE__ */ M($e, [["__scopeId", "data-v-e03d48ed"]]), Ne = { class: "list" }, we = { class: "listHeader" }, Ve = ["onClick"], je = { class: "check" }, Ie = ["checked", "id"], _e = ["for"], Oe = ["onClick"], xe = { class: "check" }, Le = ["checked", "id"], Be = ["for"], Ae = ["onClick"], Te = ["onClick"], ze = ["onClick"], Me = ["onClick"], Re = /* @__PURE__ */ T({
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
  setup(n, { emit: h }) {
    const t = n, e = g(t.modelValue || {}), v = g(""), f = g(null), y = g(void 0);
    z(() => t.modelValue, () => {
      e.value = t.modelValue;
    });
    const j = () => {
      clearTimeout(y.value), y.value = setTimeout(() => {
        var p, c;
        v.value = "", ((p = f.value) == null ? void 0 : p.value) && ((c = f.value) == null ? void 0 : c.value) !== "" && (v.value = f.value.value), h("search", v.value);
      }, 500);
    }, $ = B(() => {
      let p = t.options;
      return v.value.length >= 1 && (p = p.filter((c) => {
        if (isNaN(c) === !1 && Number(c) === Number(v.value))
          return !0;
        if (typeof c == "string" && c.toLowerCase().includes(v.value.toLowerCase()))
          return !0;
        if (typeof c == "object" && c !== null && Object.prototype.toString.call(c) === "[object Object]")
          for (const l of Object.keys(c)) {
            if (isNaN(c[l]) === !1 && Number(c[l]) === Number(v.value))
              return !0;
            if (typeof c[l] == "string" && c[l].toLowerCase().includes(v.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), p;
    }), C = (() => {
      let p = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", c = "";
      for (let l = 0; l < 10; l++)
        c += p.charAt(Math.floor(Math.random() * p.length));
      return c;
    })(), I = (p, c = "") => {
      c !== "" ? e.value.map((l) => l[c]).includes(p[c]) ? e.value.splice(e.value.findIndex((l) => l[c] === p[c]), 1) : e.value.push(p) : e.value.includes(p) ? e.value.splice(e.value.findIndex((l) => l === p), 1) : e.value.push(p), h("update:modelValue", e.value), h("change", e.value, p);
    }, N = (p) => {
      typeof p == "object" && p !== null && String(t.datatype).toLowerCase() === "string" ? (e.value = p[String(t.dataprop || t.prop)], h("update:modelValue", String(e.value))) : typeof p == "object" && p !== null && String(t.datatype).toLowerCase() === "number" ? (e.value = p[String(t.dataprop || t.prop)], h("update:modelValue", Number(e.value))) : (e.value = p, h("update:modelValue", e.value)), h("change", e.value, p);
    };
    return (p, c) => (o(), i("div", null, [
      d("div", Ne, [
        d("div", we, [
          d("input", {
            type: "search",
            ref_key: "searchRef",
            ref: f,
            onInput: j,
            class: "input"
          }, null, 544)
        ]),
        Array.isArray(n.modelValue) ? (o(), i("div", {
          key: 0,
          class: "listMenu",
          style: x({ "max-height": Number(n.size) !== 0 ? Number(n.size) * 44 + "px" : "auto" })
        }, [
          (o(!0), i(S, null, L(b($), (l, r) => (o(), i(S, {
            key: "option-" + l
          }, [
            typeof l == "string" ? (o(), i("div", {
              key: 0,
              onClick: _((s) => I(l), ["stop"]),
              class: "listItem"
            }, [
              d("div", je, [
                d("input", {
                  type: "checkbox",
                  class: "checkInput",
                  checked: e.value.includes(l),
                  id: "check-" + (b(C) + String(r)),
                  style: { "pointer-events": "none" }
                }, null, 8, Ie),
                d("label", {
                  class: "checkLabel",
                  for: "check-" + (b(C) + String(r)),
                  style: { "pointer-events": "none" }
                }, m(l), 9, _e)
              ])
            ], 8, Ve)) : typeof l == "object" && n.prop in l ? (o(), i("div", {
              key: 1,
              onClick: _((s) => I(l, n.prop), ["stop"]),
              class: "listItem"
            }, [
              d("div", xe, [
                d("input", {
                  type: "checkbox",
                  class: "checkInput",
                  checked: e.value.includes(l),
                  id: "check-" + (b(C) + String(r)),
                  style: { "pointer-events": "none" }
                }, null, 8, Le),
                d("label", {
                  class: "checkLabel",
                  for: "check-" + (b(C) + String(r)),
                  style: { "pointer-events": "none" }
                }, m(l[n.prop]), 9, Be)
              ])
            ], 8, Oe)) : (o(), i("div", {
              key: 2,
              onClick: _((s) => I(l), ["stop"]),
              class: V(["listItem", e.value.includes(l) ? "active" : ""])
            }, [
              A(p.$slots, "default", {
                option: l,
                selected: e.value
              }, void 0, !0)
            ], 10, Ae))
          ], 64))), 128))
        ], 4)) : (o(), i("div", {
          key: 1,
          class: "listMenu",
          style: x({ "max-height": Number(n.size) !== 0 ? Number(n.size) * 44 + "px" : "auto" })
        }, [
          (o(!0), i(S, null, L(b($), (l, r) => (o(), i(S, {
            key: "option-" + l
          }, [
            typeof l == "string" ? (o(), i("div", {
              key: 0,
              onClick: (s) => N(l),
              class: V(["listItem", e.value === l ? "active" : ""])
            }, m(l), 11, Te)) : typeof l == "object" && n.prop in l ? (o(), i("div", {
              key: 1,
              onClick: (s) => N(l),
              class: V(["listItem", e.value[n.prop] === l[n.prop] || String(l[n.dataprop || n.prop]) === String(e.value) ? "active" : ""])
            }, m(l[n.prop]), 11, ze)) : (o(), i("div", {
              key: 2,
              onClick: _((s) => N(l), ["stop"]),
              class: V(["listItem", e.value === l ? "active" : ""])
            }, [
              A(p.$slots, "default", {
                option: l,
                selected: e.value
              }, void 0, !0)
            ], 10, Me))
          ], 64))), 128))
        ], 4))
      ])
    ]));
  }
});
const gl = /* @__PURE__ */ M(Re, [["__scopeId", "data-v-d7fed8bc"]]), Fe = (n) => (W("data-v-3acd22f1"), n = n(), E(), n), We = { class: "tagWrap" }, Ee = { class: "tags" }, He = { class: "tag groupItem" }, Ue = ["onClick"], De = /* @__PURE__ */ Fe(() => /* @__PURE__ */ d("svg", {
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
  setup(n, { emit: h }) {
    const t = n, e = g(!1), v = g(""), f = g(null), y = D(t.modelValue || []), j = g(t.options || []), $ = g(t.separator || ","), k = g(t.prop || "value"), C = B(() => {
      let c = j.value;
      return v.value.length >= 1 && (c = c.filter((l) => {
        if (isNaN(l) === !1 && Number(l) === Number(v.value))
          return !0;
        if (typeof l == "string" && l.toLowerCase().includes(v.value.toLowerCase()))
          return !0;
        if (typeof l == "object" && l !== null && Object.prototype.toString.call(l) === "[object Object]")
          for (const r of Object.keys(l)) {
            if (isNaN(l[r]) === !1 && Number(l[r]) === Number(v.value))
              return !0;
            if (typeof l[r] == "string" && l[r].toLowerCase().includes(v.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), c;
    }), I = () => {
      f.value.focus();
    }, N = (c) => {
      if (c.key !== "Enter" && C.value.length >= 1 ? e.value = !0 : e.value = !1, v.value.endsWith($.value) || c.key === "Enter") {
        const l = v.value.replace($.value, "");
        y.includes(l) || (y.push(l), j.value.includes(l) && (j.value = j.value.filter((r) => typeof r == "string" && r !== l ? !0 : typeof r == "object" && k.value in r && r[k.value] !== l))), v.value = "", h("update:modelValue", y);
      }
    };
    z(v, () => {
      if (f.value !== null) {
        const c = document.createElement("div");
        c.style.width = "max-content", c.style.position = "absolute", c.style.visibility = "hidden";
        const l = v.value.length >= 2 ? v.value : f.value.getAttribute("placeholder");
        c.innerHTML = l.replace(/ /g, "&nbsp;").trim(), document.body.appendChild(c);
        const r = Math.ceil(Number(window.getComputedStyle(c).width.replace("px", ""))) + 30;
        f.value.style.setProperty("width", r + "px"), c.remove();
      }
    });
    const p = (c) => {
      c.target.style.display = "none", e.value = !1;
    };
    return (c, l) => (o(), i("div", {
      class: V(["taggable", { active: e.value === !0 }])
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
            (o(!0), i(S, null, L(y, (r, s) => (o(), i("div", {
              key: "tag-" + s,
              class: "group"
            }, [
              d("div", He, [
                typeof r == "string" && r !== "" ? (o(), i(S, { key: 0 }, [
                  F(m(r), 1)
                ], 64)) : typeof r == "object" && k.value in r ? (o(), i(S, { key: 1 }, [
                  F(m(r[k.value]), 1)
                ], 64)) : (o(), i(S, { key: 2 }, [
                  F(m(n.placeholder), 1)
                ], 64))
              ]),
              d("div", {
                class: "tag groupItem",
                onClick: (u) => y.splice(s, 1)
              }, Ke, 8, Ue)
            ]))), 128)),
            R(d("input", {
              type: "search",
              ref_key: "inputRef",
              ref: f,
              "onUpdate:modelValue": l[0] || (l[0] = (r) => v.value = r),
              class: "tagInput",
              onInput: l[1] || (l[1] = (r) => N(r)),
              onKeyup: l[2] || (l[2] = K((r) => N(r), ["enter"])),
              placeholder: "Add new tag"
            }, null, 544), [
              [U, v.value]
            ])
          ])
        ]),
        d("div", Pe, [
          (o(!0), i(S, null, L(b(C), (r, s) => (o(), i(S, {
            key: "option-" + r
          }, [
            typeof r == "string" ? (o(), i("div", {
              key: 0,
              onClick: (u) => {
                v.value = r + ",", N(u);
              },
              class: "tagItem"
            }, m(r), 9, qe)) : typeof r == "object" && k.value in r ? (o(), i("div", {
              key: 1,
              onClick: (u) => {
                v.value = r[k.value] + ",", N(u);
              },
              class: "tagItem"
            }, m(r[k.value]), 9, Ge)) : (o(), i("div", {
              key: 2,
              onClick: (u) => {
                v.value = r + ",", N(u);
              },
              class: "tagItem"
            }, [
              A(c.$slots, "default", { option: r }, void 0, !0)
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
  setup(n, { emit: h }) {
    const t = n, e = g(t.modelValue || {}), v = g(!1), f = g(""), y = g(null), j = g(void 0), $ = g("");
    z(() => t.modelValue, () => {
      e.value = t.modelValue;
    });
    const k = () => {
      clearTimeout(j.value), j.value = setTimeout(() => {
        var s, u;
        f.value = "", ((s = y.value) == null ? void 0 : s.value) && ((u = y.value) == null ? void 0 : u.value) !== "" && (f.value = y.value.value), h("search", f.value);
      }, 500);
    }, C = B(() => {
      let s = t.options;
      return f.value.length >= 1 && (s = s.filter((u) => {
        if (isNaN(u) === !1 && Number(u) === Number(f.value))
          return !0;
        if (typeof u == "string" && u.toLowerCase().includes(f.value.toLowerCase()))
          return !0;
        if (typeof u == "object" && u !== null && Object.prototype.toString.call(u) === "[object Object]")
          for (const a of Object.keys(u)) {
            if (isNaN(u[a]) === !1 && Number(u[a]) === Number(f.value))
              return !0;
            if (typeof u[a] == "string" && u[a].toLowerCase().includes(f.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), s;
    }), N = ((s = 10) => {
      let u = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", a = "";
      for (let w = 0; w < s; w++)
        a += u.charAt(Math.floor(Math.random() * u.length));
      return a;
    })(), p = (s) => {
      var u;
      s.target.style.display = "none", v.value = !1, (u = y.value) != null && u.value && (y.value.value = "", f.value = "");
    }, c = (s, u = "") => {
      u !== "" ? e.value.map((a) => a[u]).includes(s[u]) ? e.value.splice(e.value.findIndex((a) => a[u] === s[u]), 1) : e.value.push(s) : e.value.includes(s) ? e.value.splice(e.value.findIndex((a) => a === s), 1) : e.value.push(s), h("update:modelValue", e.value), h("change", e.value, s);
    }, l = (s) => {
      typeof s == "object" && s !== null && String(t.datatype).toLowerCase() === "string" ? (e.value = s[String(t.dataprop || t.prop)], h("update:modelValue", String(e.value))) : typeof s == "object" && s !== null && String(t.datatype).toLowerCase() === "number" ? (e.value = s[String(t.dataprop || t.prop)], h("update:modelValue", Number(e.value))) : (e.value = s, h("update:modelValue", e.value)), v.value = !1, h("change", e.value, s);
    }, r = B(() => {
      let s = (t == null ? void 0 : t.placeholder) || "-- Select option --";
      if (C.value.length >= 1)
        if (typeof e.value == "number") {
          let u = C.value.filter((a) => Number(a[String(t.dataprop || t.prop)]) === Number(e.value));
          typeof C.value[0] == "object" && u.length >= 1 ? s = u[0][String(t.prop)] : typeof C.value[0] == "number" && (s = e.value);
        } else if (typeof e.value == "string") {
          let u = C.value.filter((a) => String(a[String(t.dataprop || t.prop)]) === e.value);
          typeof C.value[0] == "object" && u.length >= 1 ? s = u[0][String(t.prop)] : typeof C.value[0] == "string" && e.value !== "" && (s = e.value);
        } else
          typeof e.value == "object" && (Array.isArray(e.value) && e.value.length >= 1 ? typeof e.value[0] == "object" && String(t.prop) in e.value[0] ? s = e.value.map((u) => u[String(t.prop)]).join(", ") : s = e.value.join(", ") : e.value !== null && String(t.prop) in e.value && (s = e.value[String(t.prop)]));
      return s;
    });
    return (s, u) => (o(), i("div", {
      class: V(["picker suggestion tedirCategory", { active: v.value, pickerUp: n.up }])
    }, [
      d("div", {
        class: "pickerBackdrop",
        style: x({ display: v.value ? "block" : "none" }),
        onClick: p
      }, null, 4),
      d("div", Xe, [
        d("div", {
          class: "select pickerToggler",
          onClick: u[0] || (u[0] = (a) => v.value = !v.value)
        }, m(b(r)), 1),
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
          Array.isArray(e.value) ? (o(), i("div", {
            key: 0,
            class: "pickerMenu",
            style: x({ "max-height": Number(n.size) !== 0 ? Number(n.size) * 42 + "px" : "auto" })
          }, [
            (o(!0), i(S, null, L(b(C), (a, w) => (o(), i(S, {
              key: "option-" + a
            }, [
              typeof a == "string" ? (o(), i("div", {
                key: 0,
                onClick: _((O) => c(a), ["stop"]),
                class: "pickerItem"
              }, [
                d("div", ll, [
                  d("input", {
                    type: "checkbox",
                    class: "checkInput",
                    checked: e.value.includes(a),
                    id: "check-" + (b(N) + String(w)),
                    style: { "pointer-events": "none" }
                  }, null, 8, tl),
                  d("label", {
                    class: "checkLabel",
                    for: "check-" + (b(N) + String(w)),
                    style: { "pointer-events": "none" }
                  }, m(a), 9, al)
                ])
              ], 8, el)) : typeof a == "object" && a !== null && n.prop in a ? (o(), i("div", {
                key: 1,
                onClick: _((O) => c(a, n.prop), ["stop"]),
                class: "pickerItem"
              }, [
                d("div", ul, [
                  d("input", {
                    type: "checkbox",
                    class: "checkInput",
                    checked: e.value.includes(a),
                    id: "check-" + (b(N) + String(w)),
                    style: { "pointer-events": "none" }
                  }, null, 8, nl),
                  d("label", {
                    class: "checkLabel",
                    for: "check-" + (b(N) + String(w)),
                    style: { "pointer-events": "none" }
                  }, m(a[n.prop]), 9, rl)
                ])
              ], 8, sl)) : (o(), i("div", {
                key: 2,
                onClick: _((O) => c(a), ["stop"]),
                class: "pickerItem"
              }, [
                A(s.$slots, "default", {
                  option: a,
                  selected: e.value
                }, void 0, !0)
              ], 8, cl))
            ], 64))), 128))
          ], 4)) : (o(), i("div", {
            key: 1,
            class: "pickerMenu",
            style: x({ "max-height": Number(n.size) !== 0 ? Number(n.size) * 42 + "px" : "auto" })
          }, [
            (o(!0), i(S, null, L(b(C), (a, w) => (o(), i(S, {
              key: "option-" + a
            }, [
              typeof a == "string" ? (o(), i("div", {
                key: 0,
                onClick: (O) => l(a),
                class: V(["pickerItem", e.value === a ? "active" : ""])
              }, m(a), 11, ol)) : typeof a == "object" && a !== null && n.prop in a ? (o(), i("div", {
                key: 1,
                onClick: (O) => l(a),
                class: V(["pickerItem", e.value[n.prop] === a[n.prop] || String(a[n.dataprop || n.prop]) === String(e.value) ? "active" : ""])
              }, m(a[n.prop]), 11, il)) : (o(), i("div", {
                key: 2,
                onClick: _((O) => l(a), ["stop"]),
                class: V(["pickerItem", e.value === a ? "active" : ""])
              }, [
                A(s.$slots, "default", {
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
                "onUpdate:modelValue": u[1] || (u[1] = (a) => $.value = a),
                class: "input",
                placeholder: "Add New Category"
              }, null, 512), [
                [U, $.value]
              ]),
              d("button", {
                type: "button",
                class: "button tedirCategoryButton",
                onClick: u[2] || (u[2] = (a) => {
                  h("add", $.value), $.value = "";
                })
              }, "Save")
            ])
          ])
        ])
      ])
    ], 2));
  }
});
const ml = /* @__PURE__ */ M(pl, [["__scopeId", "data-v-9bd9abf8"]]);
export {
  ml as CategoryBox,
  kl as ComboBox,
  gl as ListBox,
  yl as SelectBox,
  bl as TagBox
};
