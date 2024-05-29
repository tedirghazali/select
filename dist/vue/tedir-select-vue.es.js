import { defineComponent as T, ref as g, watch as z, computed as B, openBlock as o, createElementBlock as i, normalizeClass as j, createElementVNode as d, normalizeStyle as x, toDisplayString as C, unref as b, Fragment as $, withDirectives as R, withModifiers as _, vShow as H, renderList as L, renderSlot as A, pushScopeId as W, popScopeId as E, reactive as D, createTextVNode as F, withKeys as K, vModelText as U } from "vue";
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
  setup(n, { emit: y }) {
    const u = n, e = g(u.modelValue || {}), v = g(!1), f = g(""), p = g(null), I = g(void 0);
    z(() => u.modelValue, () => {
      e.value = u.modelValue;
    });
    const m = () => {
      clearTimeout(I.value), I.value = setTimeout(() => {
        var t, s;
        f.value = "", ((t = p.value) == null ? void 0 : t.value) && ((s = p.value) == null ? void 0 : s.value) !== "" && (f.value = p.value.value), y("search", f.value);
      }, 500);
    }, k = B(() => {
      let t = u.options;
      return f.value.length >= 1 && (t = t.filter((s) => {
        if (isNaN(s) === !1 && Number(s) === Number(f.value))
          return !0;
        if (typeof s == "string" && s.toLowerCase().includes(f.value.toLowerCase()))
          return !0;
        if (typeof s == "object" && s !== null && Object.prototype.toString.call(s) === "[object Object]")
          for (const a of Object.keys(s)) {
            if (isNaN(s[a]) === !1 && Number(s[a]) === Number(f.value))
              return !0;
            if (typeof s[a] == "string" && s[a].toLowerCase().includes(f.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), t;
    }), V = ((t = 10) => {
      let s = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", a = "";
      for (let w = 0; w < t; w++)
        a += s.charAt(Math.floor(Math.random() * s.length));
      return a;
    })(), N = (t) => {
      var s;
      t.target.style.display = "none", v.value = !1, (s = p.value) != null && s.value && (p.value.value = "", f.value = "");
    }, h = (t) => {
      e.value = t, y("update:modelValue", e.value), y("change", e.value, t), v.value = !1;
    }, r = (t, s = "") => {
      s !== "" ? e.value.map((a) => a[s]).includes(t[s]) ? e.value.splice(e.value.findIndex((a) => a[s] === t[s]), 1) : e.value.push(t) : e.value.includes(t) ? e.value.splice(e.value.findIndex((a) => a === t), 1) : e.value.push(t), y("update:modelValue", e.value), y("change", e.value, t);
    }, l = (t) => {
      typeof t == "object" && t !== null && String(u.datatype).toLowerCase() === "string" ? (e.value = t[String(u.dataprop || u.prop)], y("update:modelValue", String(e.value))) : typeof t == "object" && t !== null && String(u.datatype).toLowerCase() === "number" ? (e.value = t[String(u.dataprop || u.prop)], y("update:modelValue", Number(e.value))) : (e.value = t, y("update:modelValue", e.value)), v.value = !1, y("change", e.value, t);
    }, c = B(() => {
      let t = (u == null ? void 0 : u.placeholder) || "-- Select option --";
      if (k.value.length >= 1)
        if (typeof e.value == "number") {
          let s = k.value.filter((a) => Number(a[String(u.dataprop || u.prop)]) === Number(e.value));
          typeof k.value[0] == "object" && s.length >= 1 ? t = s[0][String(u.prop)] : typeof k.value[0] == "number" && (t = e.value);
        } else if (typeof e.value == "string") {
          let s = k.value.filter((a) => String(a[String(u.dataprop || u.prop)]) === e.value);
          typeof k.value[0] == "object" && s.length >= 1 ? t = s[0][String(u.prop)] : typeof k.value[0] == "string" && e.value !== "" && (t = e.value);
        } else
          typeof e.value == "object" && (Array.isArray(e.value) && e.value.length >= 1 ? typeof e.value[0] == "object" && String(u.prop) in e.value[0] ? t = e.value.map((s) => s[String(u.prop)]).join(", ") : t = e.value.join(", ") : e.value !== null && String(u.prop) in e.value && (t = e.value[String(u.prop)]));
      return t;
    });
    return (t, s) => (o(), i("div", {
      class: j(["picker suggestion", { active: v.value, pickerUp: n.up }])
    }, [
      d("div", {
        class: "pickerBackdrop",
        style: x({ display: v.value ? "block" : "none" }),
        onClick: N
      }, null, 4),
      d("div", q, [
        d("div", {
          class: "select pickerToggler",
          onClick: s[0] || (s[0] = (a) => v.value = !v.value)
        }, C(b(c)), 1),
        d("div", G, [
          d("div", J, [
            d("input", {
              type: "search",
              ref_key: "searchRef",
              ref: p,
              onInput: m,
              class: "input"
            }, null, 544)
          ]),
          n.loading ? (o(), i("div", Q, Y)) : (o(), i($, { key: 1 }, [
            Array.isArray(e.value) ? (o(), i("div", {
              key: 0,
              class: "pickerMenu",
              style: x({ "max-height": Number(n.size) !== 0 ? Number(n.size) * 42 + "px" : "auto" })
            }, [
              R(d("div", {
                onClick: s[1] || (s[1] = _((a) => h(typeof n.modelValue == "object" ? Array.isArray(n.modelValue) ? [] : {} : ""), ["stop"])),
                class: "pickerItem"
              }, C(n.placeholder || "-- Select Option --"), 513), [
                [H, n.defaultOption]
              ]),
              (o(!0), i($, null, L(b(k), (a, w) => (o(), i($, {
                key: "option-" + a
              }, [
                typeof a == "string" && n.type !== "slot" ? (o(), i("div", {
                  key: 0,
                  onClick: _((O) => r(a), ["stop"]),
                  class: "pickerItem"
                }, [
                  d("div", ee, [
                    d("input", {
                      type: "checkbox",
                      class: "checkInput",
                      checked: e.value.includes(a),
                      id: "check-" + (b(V) + String(w)),
                      style: { "pointer-events": "none" }
                    }, null, 8, le),
                    d("label", {
                      class: "checkLabel",
                      for: "check-" + (b(V) + String(w)),
                      style: { "pointer-events": "none" }
                    }, C(a), 9, te)
                  ])
                ], 8, Z)) : typeof a == "object" && a !== null && n.prop in a && n.type !== "slot" ? (o(), i("div", {
                  key: 1,
                  onClick: _((O) => r(a, n.prop), ["stop"]),
                  class: "pickerItem"
                }, [
                  d("div", se, [
                    d("input", {
                      type: "checkbox",
                      class: "checkInput",
                      checked: e.value.includes(a),
                      id: "check-" + (b(V) + String(w)),
                      style: { "pointer-events": "none" }
                    }, null, 8, ue),
                    d("label", {
                      class: "checkLabel",
                      for: "check-" + (b(V) + String(w)),
                      style: { "pointer-events": "none" }
                    }, C(a[n.prop]), 9, ne)
                  ])
                ], 8, ae)) : (o(), i("div", {
                  key: 2,
                  onClick: _((O) => r(a), ["stop"]),
                  class: "pickerItem"
                }, [
                  A(t.$slots, "default", {
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
                onClick: s[2] || (s[2] = _((a) => h(typeof n.modelValue == "object" ? Array.isArray(n.modelValue) ? [] : {} : ""), ["stop"])),
                class: "pickerItem"
              }, C(n.placeholder || "-- Select Option --"), 513), [
                [H, n.defaultOption]
              ]),
              (o(!0), i($, null, L(b(k), (a, w) => (o(), i($, {
                key: "option-" + a
              }, [
                typeof a == "string" && n.type !== "slot" ? (o(), i("div", {
                  key: 0,
                  onClick: (O) => l(a),
                  class: j(["pickerItem", e.value === a ? "active" : ""])
                }, C(a), 11, ce)) : typeof a == "object" && a !== null && n.prop in a && n.type !== "slot" ? (o(), i("div", {
                  key: 1,
                  onClick: (O) => l(a),
                  class: j(["pickerItem", e.value[n.prop] === a[n.prop] || String(a[n.dataprop || n.prop]) === String(e.value) ? "active" : ""])
                }, C(a[n.prop]), 11, oe)) : (o(), i("div", {
                  key: 2,
                  onClick: _((O) => l(a), ["stop"]),
                  class: j(["pickerItem", e.value === a ? "active" : ""])
                }, [
                  A(t.$slots, "default", {
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
const M = (n, y) => {
  const u = n.__vccOpts || n;
  for (const [e, v] of y)
    u[e] = v;
  return u;
}, yl = /* @__PURE__ */ M(de, [["__scopeId", "data-v-9d6782b2"]]), ve = (n) => (W("data-v-1d3962c4"), n = n(), E(), n), fe = { class: "pickerWrap" }, pe = ["value", "placeholder"], he = ["value", "placeholder"], ye = { class: "pickerContent pickerSizing" }, ke = {
  key: 0,
  class: "tedirSelectLoading"
}, ge = /* @__PURE__ */ ve(() => /* @__PURE__ */ d("span", { class: "spinner" }, null, -1)), be = [
  ge
], Ce = ["onClick"], me = ["onClick"], Se = ["onClick"], $e = /* @__PURE__ */ T({
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
  setup(n, { emit: y }) {
    const u = n, e = g(u.modelValue || {}), v = g(!1), f = g(""), p = g(null), I = g(void 0), m = g(!1);
    z(() => u.modelValue, () => {
      var r, l, c, t;
      e.value = u.modelValue, m.value = !1, typeof e.value == "string" || isNaN(e.value) === !1 ? (f.value = e.value, (r = p.value) != null && r.value && (p.value.value = e.value)) : (typeof ((l = e.value) == null ? void 0 : l[String(u.prop)]) == "string" || isNaN((c = e.value) == null ? void 0 : c[String(u.prop)]) === !1) && (f.value = e.value[String(u.prop)], (t = p.value) != null && t.value && (p.value.value = e.value[String(u.prop)])), u.emptySearch == !0 && (f.value = "", p.value.value = "", y("search", f.value));
    });
    const k = B(() => {
      let r = u.options;
      return f.value.length >= 1 && u.serverSearch !== !0 && (r = r.filter((l) => {
        if (isNaN(l) === !1 && Number(l) === Number(f.value))
          return !0;
        if (typeof l == "string" && l.toLowerCase().includes(f.value.toLowerCase()))
          return !0;
        if (typeof l == "object" && l !== null && Object.prototype.toString.call(l) === "[object Object]")
          for (const c of Object.keys(l)) {
            if (isNaN(l[c]) === !1 && Number(l[c]) === Number(f.value))
              return !0;
            if (typeof l[c] == "string" && l[c].toLowerCase().includes(f.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), r;
    }), S = () => {
      clearTimeout(I.value), I.value = setTimeout(() => {
        var r, l;
        f.value = "", ((r = p.value) == null ? void 0 : r.value) && ((l = p.value) == null ? void 0 : l.value) !== "" && (f.value = p.value.value), y("search", f.value), k.value.length >= 1 && m.value === !0 || u.serverSearch == !0 ? v.value = !0 : v.value = !1;
      }, 500);
    }, V = (r, l) => {
      (typeof r == "string" || isNaN(r) === !1) && (f.value = r, p.value.value = r), u.emptySearch == !0 && (f.value = "", p.value.value = "", y("search", f.value)), typeof l == "object" && l !== null && String(u.datatype).toLowerCase() === "string" ? (e.value = l[String(u.dataprop || u.prop)], y("update:modelValue", String(e.value))) : typeof l == "object" && l !== null && String(u.datatype).toLowerCase() === "number" ? (e.value = l[String(u.dataprop || u.prop)], y("update:modelValue", Number(e.value))) : (e.value = l, y("update:modelValue", e.value)), y("change", r, l), v.value = !1;
    }, N = (r) => {
      r.target.style.display = "none", v.value = !1;
    }, h = B(() => {
      var l, c;
      let r = f.value;
      if ((l = p.value) != null && l.value && (r = p.value.value), k.value.length >= 1 && m.value !== !0 && u.emptySearch !== !0)
        if (typeof e.value == "number") {
          let t = k.value.filter((s) => Number(s[String(u.dataprop || u.prop)]) === Number(e.value));
          typeof k.value[0] == "object" && t.length >= 1 ? r = t[0][String(u.prop)] : typeof k.value[0] == "number" && (r = e.value);
        } else if (typeof e.value == "string") {
          let t = k.value.filter((s) => String(s[String(u.dataprop || u.prop)]) === e.value);
          typeof k.value[0] == "object" && t.length >= 1 ? r = t[0][String(u.prop)] : typeof k.value[0] == "string" && e.value !== "" && (r = e.value);
        } else
          typeof e.value == "object" && (Array.isArray(e.value) && e.value.length >= 1 ? typeof e.value[0] == "object" && String(u.prop) in e.value[0] ? r = e.value.map((t) => t[String(u.prop)]).join(", ") : r = e.value.join(", ") : e.value !== null && String(u.prop) in e.value && (r = e.value[String(u.prop)]));
      else
        ((c = p.value) == null ? void 0 : c.value) && m.value === !0 && u.emptySearch !== !0 && (r = p.value.value);
      return r;
    });
    return (r, l) => (o(), i("div", {
      class: j(["picker suggestion", { active: v.value, pickerUp: n.up }])
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
          value: b(h),
          ref_key: "searchRef",
          ref: p,
          onInput: S,
          onClick: l[0] || (l[0] = (c) => v.value = !0),
          onFocus: l[1] || (l[1] = (c) => m.value = !0),
          onBlur: l[2] || (l[2] = (c) => m.value = !1),
          class: "select",
          placeholder: n.placeholder
        }, null, 40, pe)) : (o(), i("input", {
          key: 1,
          type: "search",
          value: b(h),
          ref_key: "searchRef",
          ref: p,
          onInput: S,
          onClick: l[3] || (l[3] = (c) => b(k).length >= 1 && f.value !== "" ? v.value = !0 : v.value = !1),
          onFocus: l[4] || (l[4] = (c) => m.value = !0),
          onBlur: l[5] || (l[5] = (c) => m.value = !1),
          class: "input",
          placeholder: n.placeholder
        }, null, 40, he)),
        d("div", ye, [
          n.loading ? (o(), i("div", ke, be)) : (o(!0), i($, { key: 1 }, L(b(k), (c, t) => (o(), i($, {
            key: "option-" + c
          }, [
            typeof c == "string" ? (o(), i("div", {
              key: 0,
              onClick: (s) => V(c, c),
              class: j(["pickerItem", n.modelValue === c ? "active" : ""])
            }, C(c), 11, Ce)) : typeof c == "object" && n.prop in c ? (o(), i("div", {
              key: 1,
              onClick: (s) => V(c[n.prop], c),
              class: j(["pickerItem", e.value[n.prop] === c[n.prop] || String(c[n.dataprop || n.prop]) === String(e.value) ? "active" : ""])
            }, C(c[n.prop]), 11, me)) : (o(), i("div", {
              key: 2,
              onClick: _((s) => V(c, c), ["stop"]),
              class: j(["pickerItem", n.modelValue === c ? "active" : ""])
            }, [
              A(r.$slots, "default", { option: c }, void 0, !0)
            ], 10, Se))
          ], 64))), 128))
        ])
      ])
    ], 2));
  }
});
const kl = /* @__PURE__ */ M($e, [["__scopeId", "data-v-1d3962c4"]]), Ne = { class: "list" }, we = { class: "listHeader" }, je = ["onClick"], Ie = { class: "check" }, Ve = ["checked", "id"], _e = ["for"], Oe = ["onClick"], xe = { class: "check" }, Le = ["checked", "id"], Be = ["for"], Ae = ["onClick"], Te = ["onClick"], ze = ["onClick"], Me = ["onClick"], Re = /* @__PURE__ */ T({
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
  setup(n, { emit: y }) {
    const u = n, e = g(u.modelValue || {}), v = g(""), f = g(null), p = g(void 0);
    z(() => u.modelValue, () => {
      e.value = u.modelValue;
    });
    const I = () => {
      clearTimeout(p.value), p.value = setTimeout(() => {
        var h, r;
        v.value = "", ((h = f.value) == null ? void 0 : h.value) && ((r = f.value) == null ? void 0 : r.value) !== "" && (v.value = f.value.value), y("search", v.value);
      }, 500);
    }, m = B(() => {
      let h = u.options;
      return v.value.length >= 1 && (h = h.filter((r) => {
        if (isNaN(r) === !1 && Number(r) === Number(v.value))
          return !0;
        if (typeof r == "string" && r.toLowerCase().includes(v.value.toLowerCase()))
          return !0;
        if (typeof r == "object" && r !== null && Object.prototype.toString.call(r) === "[object Object]")
          for (const l of Object.keys(r)) {
            if (isNaN(r[l]) === !1 && Number(r[l]) === Number(v.value))
              return !0;
            if (typeof r[l] == "string" && r[l].toLowerCase().includes(v.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), h;
    }), S = (() => {
      let h = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", r = "";
      for (let l = 0; l < 10; l++)
        r += h.charAt(Math.floor(Math.random() * h.length));
      return r;
    })(), V = (h, r = "") => {
      r !== "" ? e.value.map((l) => l[r]).includes(h[r]) ? e.value.splice(e.value.findIndex((l) => l[r] === h[r]), 1) : e.value.push(h) : e.value.includes(h) ? e.value.splice(e.value.findIndex((l) => l === h), 1) : e.value.push(h), y("update:modelValue", e.value), y("change", e.value, h);
    }, N = (h) => {
      typeof h == "object" && h !== null && String(u.datatype).toLowerCase() === "string" ? (e.value = h[String(u.dataprop || u.prop)], y("update:modelValue", String(e.value))) : typeof h == "object" && h !== null && String(u.datatype).toLowerCase() === "number" ? (e.value = h[String(u.dataprop || u.prop)], y("update:modelValue", Number(e.value))) : (e.value = h, y("update:modelValue", e.value)), y("change", e.value, h);
    };
    return (h, r) => (o(), i("div", null, [
      d("div", Ne, [
        d("div", we, [
          d("input", {
            type: "search",
            ref_key: "searchRef",
            ref: f,
            onInput: I,
            class: "input"
          }, null, 544)
        ]),
        Array.isArray(n.modelValue) ? (o(), i("div", {
          key: 0,
          class: "listMenu",
          style: x({ "max-height": Number(n.size) !== 0 ? Number(n.size) * 44 + "px" : "auto" })
        }, [
          (o(!0), i($, null, L(b(m), (l, c) => (o(), i($, {
            key: "option-" + l
          }, [
            typeof l == "string" ? (o(), i("div", {
              key: 0,
              onClick: _((t) => V(l), ["stop"]),
              class: "listItem"
            }, [
              d("div", Ie, [
                d("input", {
                  type: "checkbox",
                  class: "checkInput",
                  checked: e.value.includes(l),
                  id: "check-" + (b(S) + String(c)),
                  style: { "pointer-events": "none" }
                }, null, 8, Ve),
                d("label", {
                  class: "checkLabel",
                  for: "check-" + (b(S) + String(c)),
                  style: { "pointer-events": "none" }
                }, C(l), 9, _e)
              ])
            ], 8, je)) : typeof l == "object" && n.prop in l ? (o(), i("div", {
              key: 1,
              onClick: _((t) => V(l, n.prop), ["stop"]),
              class: "listItem"
            }, [
              d("div", xe, [
                d("input", {
                  type: "checkbox",
                  class: "checkInput",
                  checked: e.value.includes(l),
                  id: "check-" + (b(S) + String(c)),
                  style: { "pointer-events": "none" }
                }, null, 8, Le),
                d("label", {
                  class: "checkLabel",
                  for: "check-" + (b(S) + String(c)),
                  style: { "pointer-events": "none" }
                }, C(l[n.prop]), 9, Be)
              ])
            ], 8, Oe)) : (o(), i("div", {
              key: 2,
              onClick: _((t) => V(l), ["stop"]),
              class: j(["listItem", e.value.includes(l) ? "active" : ""])
            }, [
              A(h.$slots, "default", {
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
          (o(!0), i($, null, L(b(m), (l, c) => (o(), i($, {
            key: "option-" + l
          }, [
            typeof l == "string" ? (o(), i("div", {
              key: 0,
              onClick: (t) => N(l),
              class: j(["listItem", e.value === l ? "active" : ""])
            }, C(l), 11, Te)) : typeof l == "object" && n.prop in l ? (o(), i("div", {
              key: 1,
              onClick: (t) => N(l),
              class: j(["listItem", e.value[n.prop] === l[n.prop] || String(l[n.dataprop || n.prop]) === String(e.value) ? "active" : ""])
            }, C(l[n.prop]), 11, ze)) : (o(), i("div", {
              key: 2,
              onClick: _((t) => N(l), ["stop"]),
              class: j(["listItem", e.value === l ? "active" : ""])
            }, [
              A(h.$slots, "default", {
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
  setup(n, { emit: y }) {
    const u = n, e = g(!1), v = g(""), f = g(null), p = D(u.modelValue || []), I = g(u.options || []), m = g(u.separator || ","), k = g(u.prop || "value"), S = B(() => {
      let r = I.value;
      return v.value.length >= 1 && (r = r.filter((l) => {
        if (isNaN(l) === !1 && Number(l) === Number(v.value))
          return !0;
        if (typeof l == "string" && l.toLowerCase().includes(v.value.toLowerCase()))
          return !0;
        if (typeof l == "object" && l !== null && Object.prototype.toString.call(l) === "[object Object]")
          for (const c of Object.keys(l)) {
            if (isNaN(l[c]) === !1 && Number(l[c]) === Number(v.value))
              return !0;
            if (typeof l[c] == "string" && l[c].toLowerCase().includes(v.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), r;
    }), V = () => {
      f.value.focus();
    }, N = (r) => {
      if (r.key !== "Enter" && S.value.length >= 1 ? e.value = !0 : e.value = !1, v.value.endsWith(m.value) || r.key === "Enter") {
        const l = v.value.replace(m.value, "");
        p.includes(l) || (p.push(l), I.value.includes(l) && (I.value = I.value.filter((c) => typeof c == "string" && c !== l ? !0 : typeof c == "object" && k.value in c && c[k.value] !== l))), v.value = "", y("update:modelValue", p);
      }
    };
    z(v, () => {
      if (f.value !== null) {
        const r = document.createElement("div");
        r.style.width = "max-content", r.style.position = "absolute", r.style.visibility = "hidden";
        const l = v.value.length >= 2 ? v.value : f.value.getAttribute("placeholder");
        r.innerHTML = l.replace(/ /g, "&nbsp;").trim(), document.body.appendChild(r);
        const c = Math.ceil(Number(window.getComputedStyle(r).width.replace("px", ""))) + 30;
        f.value.style.setProperty("width", c + "px"), r.remove();
      }
    });
    const h = (r) => {
      r.target.style.display = "none", e.value = !1;
    };
    return (r, l) => (o(), i("div", {
      class: j(["taggable", { active: e.value === !0 }])
    }, [
      d("div", {
        class: "tagBackdrop",
        style: x({ display: e.value ? "block" : "none" }),
        onClick: h
      }, null, 4),
      d("div", We, [
        d("div", {
          class: "input tagToggler",
          onClick: V
        }, [
          d("div", Ee, [
            (o(!0), i($, null, L(p, (c, t) => (o(), i("div", {
              key: "tag-" + t,
              class: "group"
            }, [
              d("div", He, [
                typeof c == "string" && c !== "" ? (o(), i($, { key: 0 }, [
                  F(C(c), 1)
                ], 64)) : typeof c == "object" && k.value in c ? (o(), i($, { key: 1 }, [
                  F(C(c[k.value]), 1)
                ], 64)) : (o(), i($, { key: 2 }, [
                  F(C(n.placeholder), 1)
                ], 64))
              ]),
              d("div", {
                class: "tag groupItem",
                onClick: (s) => p.splice(t, 1)
              }, Ke, 8, Ue)
            ]))), 128)),
            R(d("input", {
              type: "search",
              ref_key: "inputRef",
              ref: f,
              "onUpdate:modelValue": l[0] || (l[0] = (c) => v.value = c),
              class: "tagInput",
              onInput: l[1] || (l[1] = (c) => N(c)),
              onKeyup: l[2] || (l[2] = K((c) => N(c), ["enter"])),
              placeholder: "Add new tag"
            }, null, 544), [
              [U, v.value]
            ])
          ])
        ]),
        d("div", Pe, [
          (o(!0), i($, null, L(b(S), (c, t) => (o(), i($, {
            key: "option-" + c
          }, [
            typeof c == "string" ? (o(), i("div", {
              key: 0,
              onClick: (s) => {
                v.value = c + ",", N(s);
              },
              class: "tagItem"
            }, C(c), 9, qe)) : typeof c == "object" && k.value in c ? (o(), i("div", {
              key: 1,
              onClick: (s) => {
                v.value = c[k.value] + ",", N(s);
              },
              class: "tagItem"
            }, C(c[k.value]), 9, Ge)) : (o(), i("div", {
              key: 2,
              onClick: (s) => {
                v.value = c + ",", N(s);
              },
              class: "tagItem"
            }, [
              A(r.$slots, "default", { option: c }, void 0, !0)
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
  setup(n, { emit: y }) {
    const u = n, e = g(u.modelValue || {}), v = g(!1), f = g(""), p = g(null), I = g(void 0), m = g("");
    z(() => u.modelValue, () => {
      e.value = u.modelValue;
    });
    const k = () => {
      clearTimeout(I.value), I.value = setTimeout(() => {
        var t, s;
        f.value = "", ((t = p.value) == null ? void 0 : t.value) && ((s = p.value) == null ? void 0 : s.value) !== "" && (f.value = p.value.value), y("search", f.value);
      }, 500);
    }, S = B(() => {
      let t = u.options;
      return f.value.length >= 1 && (t = t.filter((s) => {
        if (isNaN(s) === !1 && Number(s) === Number(f.value))
          return !0;
        if (typeof s == "string" && s.toLowerCase().includes(f.value.toLowerCase()))
          return !0;
        if (typeof s == "object" && s !== null && Object.prototype.toString.call(s) === "[object Object]")
          for (const a of Object.keys(s)) {
            if (isNaN(s[a]) === !1 && Number(s[a]) === Number(f.value))
              return !0;
            if (typeof s[a] == "string" && s[a].toLowerCase().includes(f.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), t;
    }), N = ((t = 10) => {
      let s = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", a = "";
      for (let w = 0; w < t; w++)
        a += s.charAt(Math.floor(Math.random() * s.length));
      return a;
    })(), h = (t) => {
      var s;
      t.target.style.display = "none", v.value = !1, (s = p.value) != null && s.value && (p.value.value = "", f.value = "");
    }, r = (t, s = "") => {
      s !== "" ? e.value.map((a) => a[s]).includes(t[s]) ? e.value.splice(e.value.findIndex((a) => a[s] === t[s]), 1) : e.value.push(t) : e.value.includes(t) ? e.value.splice(e.value.findIndex((a) => a === t), 1) : e.value.push(t), y("update:modelValue", e.value), y("change", e.value, t);
    }, l = (t) => {
      typeof t == "object" && t !== null && String(u.datatype).toLowerCase() === "string" ? (e.value = t[String(u.dataprop || u.prop)], y("update:modelValue", String(e.value))) : typeof t == "object" && t !== null && String(u.datatype).toLowerCase() === "number" ? (e.value = t[String(u.dataprop || u.prop)], y("update:modelValue", Number(e.value))) : (e.value = t, y("update:modelValue", e.value)), v.value = !1, y("change", e.value, t);
    }, c = B(() => {
      let t = (u == null ? void 0 : u.placeholder) || "-- Select option --";
      if (S.value.length >= 1)
        if (typeof e.value == "number") {
          let s = S.value.filter((a) => Number(a[String(u.dataprop || u.prop)]) === Number(e.value));
          typeof S.value[0] == "object" && s.length >= 1 ? t = s[0][String(u.prop)] : typeof S.value[0] == "number" && (t = e.value);
        } else if (typeof e.value == "string") {
          let s = S.value.filter((a) => String(a[String(u.dataprop || u.prop)]) === e.value);
          typeof S.value[0] == "object" && s.length >= 1 ? t = s[0][String(u.prop)] : typeof S.value[0] == "string" && e.value !== "" && (t = e.value);
        } else
          typeof e.value == "object" && (Array.isArray(e.value) && e.value.length >= 1 ? typeof e.value[0] == "object" && String(u.prop) in e.value[0] ? t = e.value.map((s) => s[String(u.prop)]).join(", ") : t = e.value.join(", ") : e.value !== null && String(u.prop) in e.value && (t = e.value[String(u.prop)]));
      return t;
    });
    return (t, s) => (o(), i("div", {
      class: j(["picker suggestion tedirCategory", { active: v.value, pickerUp: n.up }])
    }, [
      d("div", {
        class: "pickerBackdrop",
        style: x({ display: v.value ? "block" : "none" }),
        onClick: h
      }, null, 4),
      d("div", Xe, [
        d("div", {
          class: "select pickerToggler",
          onClick: s[0] || (s[0] = (a) => v.value = !v.value)
        }, C(b(c)), 1),
        d("div", Ye, [
          d("div", Ze, [
            d("input", {
              type: "search",
              ref_key: "searchRef",
              ref: p,
              onInput: k,
              class: "input"
            }, null, 544)
          ]),
          Array.isArray(e.value) ? (o(), i("div", {
            key: 0,
            class: "pickerMenu",
            style: x({ "max-height": Number(n.size) !== 0 ? Number(n.size) * 42 + "px" : "auto" })
          }, [
            (o(!0), i($, null, L(b(S), (a, w) => (o(), i($, {
              key: "option-" + a
            }, [
              typeof a == "string" ? (o(), i("div", {
                key: 0,
                onClick: _((O) => r(a), ["stop"]),
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
                  }, C(a), 9, al)
                ])
              ], 8, el)) : typeof a == "object" && a !== null && n.prop in a ? (o(), i("div", {
                key: 1,
                onClick: _((O) => r(a, n.prop), ["stop"]),
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
                  }, C(a[n.prop]), 9, rl)
                ])
              ], 8, sl)) : (o(), i("div", {
                key: 2,
                onClick: _((O) => r(a), ["stop"]),
                class: "pickerItem"
              }, [
                A(t.$slots, "default", {
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
            (o(!0), i($, null, L(b(S), (a, w) => (o(), i($, {
              key: "option-" + a
            }, [
              typeof a == "string" ? (o(), i("div", {
                key: 0,
                onClick: (O) => l(a),
                class: j(["pickerItem", e.value === a ? "active" : ""])
              }, C(a), 11, ol)) : typeof a == "object" && a !== null && n.prop in a ? (o(), i("div", {
                key: 1,
                onClick: (O) => l(a),
                class: j(["pickerItem", e.value[n.prop] === a[n.prop] || String(a[n.dataprop || n.prop]) === String(e.value) ? "active" : ""])
              }, C(a[n.prop]), 11, il)) : (o(), i("div", {
                key: 2,
                onClick: _((O) => l(a), ["stop"]),
                class: j(["pickerItem", e.value === a ? "active" : ""])
              }, [
                A(t.$slots, "default", {
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
                "onUpdate:modelValue": s[1] || (s[1] = (a) => m.value = a),
                class: "input",
                placeholder: "Add New Category"
              }, null, 512), [
                [U, m.value]
              ]),
              d("button", {
                type: "button",
                class: "button tedirCategoryButton",
                onClick: s[2] || (s[2] = (a) => {
                  y("add", m.value), m.value = "";
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
