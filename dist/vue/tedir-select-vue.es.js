import { defineComponent as T, ref as g, watch as z, computed as B, openBlock as o, createElementBlock as i, normalizeClass as w, createElementVNode as d, normalizeStyle as x, toDisplayString as m, unref as b, Fragment as S, withDirectives as R, withModifiers as O, vShow as W, renderList as L, renderSlot as A, pushScopeId as E, popScopeId as H, reactive as D, createTextVNode as F, withKeys as K, vModelText as U } from "vue";
const P = (r) => (E("data-v-9d6782b2"), r = r(), H(), r), q = { class: "pickerWrap" }, G = { class: "pickerContent" }, J = { class: "pickerHeader" }, Q = {
  key: 0,
  class: "tedirSelectLoading"
}, X = /* @__PURE__ */ P(() => /* @__PURE__ */ d("span", { class: "spinner" }, null, -1)), Y = [
  X
], Z = ["onClick"], ee = { class: "check" }, le = ["checked", "id"], te = ["for"], ae = ["onClick"], se = { class: "check" }, ue = ["checked", "id"], re = ["for"], ne = ["onClick"], ce = ["onClick"], oe = ["onClick"], ie = ["onClick"], de = /* @__PURE__ */ T({
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
  setup(r, { emit: h }) {
    const t = r, e = g(t.modelValue || {}), v = g(!1), f = g(""), y = g(null), j = g(void 0);
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
      for (let V = 0; V < s; V++)
        a += u.charAt(Math.floor(Math.random() * u.length));
      return a;
    })(), N = (s) => {
      var u;
      s.target.style.display = "none", v.value = !1, (u = y.value) != null && u.value && (y.value.value = "", f.value = "");
    }, p = (s) => {
      e.value = s, h("update:modelValue", e.value), h("change", e.value, s), v.value = !1;
    }, n = (s, u = "") => {
      u !== "" ? e.value.map((a) => a[u]).includes(s[u]) ? e.value.splice(e.value.findIndex((a) => a[u] === s[u]), 1) : e.value.push(s) : e.value.includes(s) ? e.value.splice(e.value.findIndex((a) => a === s), 1) : e.value.push(s), h("update:modelValue", e.value), h("change", e.value, s);
    }, l = (s) => {
      typeof s == "object" && s !== null && String(t.datatype).toLowerCase() === "string" ? (e.value = s[String(t.dataprop || t.prop)], h("update:modelValue", String(e.value))) : typeof s == "object" && s !== null && String(t.datatype).toLowerCase() === "number" ? (e.value = s[String(t.dataprop || t.prop)], h("update:modelValue", Number(e.value))) : (e.value = s, h("update:modelValue", e.value)), v.value = !1, h("change", e.value, s);
    }, c = B(() => {
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
      class: w(["picker suggestion", { active: v.value, pickerUp: r.up }])
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
        }, m(b(c)), 1),
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
          r.loading ? (o(), i("div", Q, Y)) : (o(), i(S, { key: 1 }, [
            Array.isArray(e.value) ? (o(), i("div", {
              key: 0,
              class: "pickerMenu",
              style: x({ "max-height": Number(r.size) !== 0 ? Number(r.size) * 42 + "px" : "auto" })
            }, [
              R(d("div", {
                onClick: u[1] || (u[1] = O((a) => p(typeof r.modelValue == "object" ? Array.isArray(r.modelValue) ? [] : {} : ""), ["stop"])),
                class: "pickerItem"
              }, m(r.placeholder || "-- Select Option --"), 513), [
                [W, r.defaultOption]
              ]),
              (o(!0), i(S, null, L(b(k), (a, V) => (o(), i(S, {
                key: "option-" + a
              }, [
                typeof a == "string" && r.type !== "slot" ? (o(), i("div", {
                  key: 0,
                  onClick: O((_) => n(a), ["stop"]),
                  class: "pickerItem"
                }, [
                  d("div", ee, [
                    d("input", {
                      type: "checkbox",
                      class: "checkInput",
                      checked: e.value.includes(a),
                      id: "check-" + (b(I) + String(V)),
                      style: { "pointer-events": "none" }
                    }, null, 8, le),
                    d("label", {
                      class: "checkLabel",
                      for: "check-" + (b(I) + String(V)),
                      style: { "pointer-events": "none" }
                    }, m(a), 9, te)
                  ])
                ], 8, Z)) : typeof a == "object" && a !== null && r.prop in a && r.type !== "slot" ? (o(), i("div", {
                  key: 1,
                  onClick: O((_) => n(a, r.prop), ["stop"]),
                  class: "pickerItem"
                }, [
                  d("div", se, [
                    d("input", {
                      type: "checkbox",
                      class: "checkInput",
                      checked: e.value.includes(a),
                      id: "check-" + (b(I) + String(V)),
                      style: { "pointer-events": "none" }
                    }, null, 8, ue),
                    d("label", {
                      class: "checkLabel",
                      for: "check-" + (b(I) + String(V)),
                      style: { "pointer-events": "none" }
                    }, m(a[r.prop]), 9, re)
                  ])
                ], 8, ae)) : (o(), i("div", {
                  key: 2,
                  onClick: O((_) => n(a), ["stop"]),
                  class: "pickerItem"
                }, [
                  A(s.$slots, "default", {
                    option: a,
                    selected: e.value
                  }, void 0, !0)
                ], 8, ne))
              ], 64))), 128))
            ], 4)) : (o(), i("div", {
              key: 1,
              class: "pickerMenu",
              style: x({ "max-height": Number(r.size) !== 0 ? Number(r.size) * 42 + "px" : "auto" })
            }, [
              R(d("div", {
                onClick: u[2] || (u[2] = O((a) => p(typeof r.modelValue == "object" ? Array.isArray(r.modelValue) ? [] : {} : ""), ["stop"])),
                class: "pickerItem"
              }, m(r.placeholder || "-- Select Option --"), 513), [
                [W, r.defaultOption]
              ]),
              (o(!0), i(S, null, L(b(k), (a, V) => (o(), i(S, {
                key: "option-" + a
              }, [
                typeof a == "string" && r.type !== "slot" ? (o(), i("div", {
                  key: 0,
                  onClick: (_) => l(a),
                  class: w(["pickerItem", e.value === a ? "active" : ""])
                }, m(a), 11, ce)) : typeof a == "object" && a !== null && r.prop in a && r.type !== "slot" ? (o(), i("div", {
                  key: 1,
                  onClick: (_) => l(a),
                  class: w(["pickerItem", e.value[r.prop] === a[r.prop] || String(a[r.dataprop || r.prop]) === String(e.value) ? "active" : ""])
                }, m(a[r.prop]), 11, oe)) : (o(), i("div", {
                  key: 2,
                  onClick: O((_) => l(a), ["stop"]),
                  class: w(["pickerItem", e.value === a ? "active" : ""])
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
const M = (r, h) => {
  const t = r.__vccOpts || r;
  for (const [e, v] of h)
    t[e] = v;
  return t;
}, vl = /* @__PURE__ */ M(de, [["__scopeId", "data-v-9d6782b2"]]), ve = { class: "pickerWrap" }, fe = ["value", "placeholder"], pe = ["value", "placeholder"], he = { class: "pickerContent pickerSizing" }, ye = ["onClick"], ke = ["onClick"], ge = ["onClick"], be = /* @__PURE__ */ T({
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
    emptySearch: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change", "search"],
  setup(r, { emit: h }) {
    const t = r, e = g(t.modelValue || {}), v = g(!1), f = g(""), y = g(null), j = g(void 0), $ = g(!1);
    z(() => t.modelValue, () => {
      var n, l;
      e.value = t.modelValue, typeof t.modelValue == "string" || isNaN(t.modelValue) === !1 ? (f.value = t.modelValue, y.value.value = t.modelValue) : (typeof ((n = t.modelValue) == null ? void 0 : n[String(t.dataprop || t.prop)]) == "string" || isNaN((l = t.modelValue) == null ? void 0 : l[String(t.dataprop || t.prop)]) === !1) && (f.value = t.modelValue[String(t.dataprop || t.prop)], y.value.value = t.modelValue[String(t.dataprop || t.prop)]), t.emptySearch == !0 && (f.value = "", y.value.value = "", h("search", f.value));
    });
    const k = B(() => {
      let n = t.options;
      return f.value.length >= 1 && t.serverSearch !== !0 && (n = n.filter((l) => {
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
      })), n;
    }), C = () => {
      clearTimeout(j.value), j.value = setTimeout(() => {
        var n, l;
        f.value = "", ((n = y.value) == null ? void 0 : n.value) && ((l = y.value) == null ? void 0 : l.value) !== "" && (f.value = y.value.value), h("search", f.value), k.value.length >= 1 && $.value === !0 || t.serverSearch == !0 ? v.value = !0 : v.value = !1;
      }, 500);
    }, I = (n, l) => {
      (typeof n == "string" || isNaN(n) === !1) && (f.value = n, y.value.value = n), t.emptySearch == !0 && (f.value = "", y.value.value = "", h("search", f.value)), typeof l == "object" && l !== null && String(t.datatype).toLowerCase() === "string" ? (e.value = l[String(t.dataprop || t.prop)], h("update:modelValue", String(e.value))) : typeof l == "object" && l !== null && String(t.datatype).toLowerCase() === "number" ? (e.value = l[String(t.dataprop || t.prop)], h("update:modelValue", Number(e.value))) : (e.value = l, h("update:modelValue", e.value)), h("change", n, l), v.value = !1;
    }, N = (n) => {
      n.target.style.display = "none", v.value = !1;
    }, p = B(() => {
      var l;
      let n = "";
      if (k.value.length >= 1 && $.value !== !0 && t.emptySearch !== !0)
        if (typeof e.value == "number") {
          let c = k.value.filter((s) => Number(s[String(t.dataprop || t.prop)]) === Number(e.value));
          typeof k.value[0] == "object" && c.length >= 1 ? n = c[0][String(t.prop)] : typeof k.value[0] == "number" && (n = e.value);
        } else if (typeof e.value == "string") {
          let c = k.value.filter((s) => String(s[String(t.dataprop || t.prop)]) === e.value);
          typeof k.value[0] == "object" && c.length >= 1 ? n = c[0][String(t.prop)] : typeof k.value[0] == "string" && e.value !== "" && (n = e.value);
        } else
          typeof e.value == "object" && (Array.isArray(e.value) && e.value.length >= 1 ? typeof e.value[0] == "object" && String(t.prop) in e.value[0] ? n = e.value.map((c) => c[String(t.prop)]).join(", ") : n = e.value.join(", ") : e.value !== null && String(t.prop) in e.value && (n = e.value[String(t.prop)]));
      else
        ((l = y.value) == null ? void 0 : l.value) && $.value === !0 && t.emptySearch !== !0 && (n = y.value.value);
      return n;
    });
    return (n, l) => (o(), i("div", {
      class: w(["picker suggestion", { active: v.value, pickerUp: r.up }])
    }, [
      d("div", {
        class: "pickerBackdrop",
        style: x({ display: v.value ? "block" : "none" }),
        onClick: N
      }, null, 4),
      d("div", ve, [
        r.select ? (o(), i("input", {
          key: 0,
          type: "search",
          value: b(p),
          ref_key: "searchRef",
          ref: y,
          onInput: C,
          onClick: l[0] || (l[0] = (c) => v.value = !0),
          onFocus: l[1] || (l[1] = (c) => $.value = !0),
          onBlur: l[2] || (l[2] = (c) => $.value = !1),
          class: "select",
          placeholder: r.placeholder
        }, null, 40, fe)) : (o(), i("input", {
          key: 1,
          type: "search",
          value: b(p),
          ref_key: "searchRef",
          ref: y,
          onInput: C,
          onClick: l[3] || (l[3] = (c) => b(k).length >= 1 && f.value !== "" ? v.value = !0 : v.value = !1),
          onFocus: l[4] || (l[4] = (c) => $.value = !0),
          onBlur: l[5] || (l[5] = (c) => $.value = !1),
          class: "input",
          placeholder: r.placeholder
        }, null, 40, pe)),
        d("div", he, [
          (o(!0), i(S, null, L(b(k), (c, s) => (o(), i(S, {
            key: "option-" + c
          }, [
            typeof c == "string" ? (o(), i("div", {
              key: 0,
              onClick: (u) => I(c, c),
              class: w(["pickerItem", r.modelValue === c ? "active" : ""])
            }, m(c), 11, ye)) : typeof c == "object" && r.prop in c ? (o(), i("div", {
              key: 1,
              onClick: (u) => I(c[r.prop], c),
              class: w(["pickerItem", r.modelValue[r.prop] === c[r.prop] ? "active" : ""])
            }, m(c[r.prop]), 11, ke)) : (o(), i("div", {
              key: 2,
              onClick: (u) => I(c, c),
              class: w(["pickerItem", r.modelValue === c ? "active" : ""])
            }, [
              A(n.$slots, "default", { option: c }, void 0, !0)
            ], 10, ge))
          ], 64))), 128))
        ])
      ])
    ], 2));
  }
});
const fl = /* @__PURE__ */ M(be, [["__scopeId", "data-v-fd87e445"]]), me = { class: "list" }, Ce = { class: "listHeader" }, Se = ["onClick"], $e = { class: "check" }, Ne = ["checked", "id"], Ve = ["for"], we = ["onClick"], je = { class: "check" }, Ie = ["checked", "id"], Oe = ["for"], _e = ["onClick"], xe = ["onClick"], Le = ["onClick"], Be = ["onClick"], Ae = /* @__PURE__ */ T({
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
  setup(r, { emit: h }) {
    const t = r, e = g(t.modelValue || {}), v = g(""), f = g(null), y = g(void 0);
    z(() => t.modelValue, () => {
      e.value = t.modelValue;
    });
    const j = () => {
      clearTimeout(y.value), y.value = setTimeout(() => {
        var p, n;
        v.value = "", ((p = f.value) == null ? void 0 : p.value) && ((n = f.value) == null ? void 0 : n.value) !== "" && (v.value = f.value.value), h("search", v.value);
      }, 500);
    }, $ = B(() => {
      let p = t.options;
      return v.value.length >= 1 && (p = p.filter((n) => {
        if (isNaN(n) === !1 && Number(n) === Number(v.value))
          return !0;
        if (typeof n == "string" && n.toLowerCase().includes(v.value.toLowerCase()))
          return !0;
        if (typeof n == "object" && n !== null && Object.prototype.toString.call(n) === "[object Object]")
          for (const l of Object.keys(n)) {
            if (isNaN(n[l]) === !1 && Number(n[l]) === Number(v.value))
              return !0;
            if (typeof n[l] == "string" && n[l].toLowerCase().includes(v.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), p;
    }), C = (() => {
      let p = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", n = "";
      for (let l = 0; l < 10; l++)
        n += p.charAt(Math.floor(Math.random() * p.length));
      return n;
    })(), I = (p, n = "") => {
      n !== "" ? e.value.map((l) => l[n]).includes(p[n]) ? e.value.splice(e.value.findIndex((l) => l[n] === p[n]), 1) : e.value.push(p) : e.value.includes(p) ? e.value.splice(e.value.findIndex((l) => l === p), 1) : e.value.push(p), h("update:modelValue", e.value), h("change", e.value, p);
    }, N = (p) => {
      typeof p == "object" && p !== null && String(t.datatype).toLowerCase() === "string" ? (e.value = p[String(t.dataprop || t.prop)], h("update:modelValue", String(e.value))) : typeof p == "object" && p !== null && String(t.datatype).toLowerCase() === "number" ? (e.value = p[String(t.dataprop || t.prop)], h("update:modelValue", Number(e.value))) : (e.value = p, h("update:modelValue", e.value)), h("change", e.value, p);
    };
    return (p, n) => (o(), i("div", null, [
      d("div", me, [
        d("div", Ce, [
          d("input", {
            type: "search",
            ref_key: "searchRef",
            ref: f,
            onInput: j,
            class: "input"
          }, null, 544)
        ]),
        Array.isArray(r.modelValue) ? (o(), i("div", {
          key: 0,
          class: "listMenu",
          style: x({ "max-height": Number(r.size) !== 0 ? Number(r.size) * 44 + "px" : "auto" })
        }, [
          (o(!0), i(S, null, L(b($), (l, c) => (o(), i(S, {
            key: "option-" + l
          }, [
            typeof l == "string" ? (o(), i("div", {
              key: 0,
              onClick: O((s) => I(l), ["stop"]),
              class: "listItem"
            }, [
              d("div", $e, [
                d("input", {
                  type: "checkbox",
                  class: "checkInput",
                  checked: e.value.includes(l),
                  id: "check-" + (b(C) + String(c)),
                  style: { "pointer-events": "none" }
                }, null, 8, Ne),
                d("label", {
                  class: "checkLabel",
                  for: "check-" + (b(C) + String(c)),
                  style: { "pointer-events": "none" }
                }, m(l), 9, Ve)
              ])
            ], 8, Se)) : typeof l == "object" && r.prop in l ? (o(), i("div", {
              key: 1,
              onClick: O((s) => I(l, r.prop), ["stop"]),
              class: "listItem"
            }, [
              d("div", je, [
                d("input", {
                  type: "checkbox",
                  class: "checkInput",
                  checked: e.value.includes(l),
                  id: "check-" + (b(C) + String(c)),
                  style: { "pointer-events": "none" }
                }, null, 8, Ie),
                d("label", {
                  class: "checkLabel",
                  for: "check-" + (b(C) + String(c)),
                  style: { "pointer-events": "none" }
                }, m(l[r.prop]), 9, Oe)
              ])
            ], 8, we)) : (o(), i("div", {
              key: 2,
              onClick: O((s) => I(l), ["stop"]),
              class: w(["listItem", e.value.includes(l) ? "active" : ""])
            }, [
              A(p.$slots, "default", {
                option: l,
                selected: e.value
              }, void 0, !0)
            ], 10, _e))
          ], 64))), 128))
        ], 4)) : (o(), i("div", {
          key: 1,
          class: "listMenu",
          style: x({ "max-height": Number(r.size) !== 0 ? Number(r.size) * 44 + "px" : "auto" })
        }, [
          (o(!0), i(S, null, L(b($), (l, c) => (o(), i(S, {
            key: "option-" + l
          }, [
            typeof l == "string" ? (o(), i("div", {
              key: 0,
              onClick: (s) => N(l),
              class: w(["listItem", e.value === l ? "active" : ""])
            }, m(l), 11, xe)) : typeof l == "object" && r.prop in l ? (o(), i("div", {
              key: 1,
              onClick: (s) => N(l),
              class: w(["listItem", e.value[r.prop] === l[r.prop] || String(l[r.dataprop || r.prop]) === String(e.value) ? "active" : ""])
            }, m(l[r.prop]), 11, Le)) : (o(), i("div", {
              key: 2,
              onClick: O((s) => N(l), ["stop"]),
              class: w(["listItem", e.value === l ? "active" : ""])
            }, [
              A(p.$slots, "default", {
                option: l,
                selected: e.value
              }, void 0, !0)
            ], 10, Be))
          ], 64))), 128))
        ], 4))
      ])
    ]));
  }
});
const pl = /* @__PURE__ */ M(Ae, [["__scopeId", "data-v-d7fed8bc"]]), Te = (r) => (E("data-v-3acd22f1"), r = r(), H(), r), ze = { class: "tagWrap" }, Me = { class: "tags" }, Re = { class: "tag groupItem" }, Fe = ["onClick"], We = /* @__PURE__ */ Te(() => /* @__PURE__ */ d("svg", {
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
], -1)), Ee = [
  We
], He = { class: "tagContent" }, Ue = ["onClick"], De = ["onClick"], Ke = ["onClick"], Pe = /* @__PURE__ */ T({
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
  setup(r, { emit: h }) {
    const t = r, e = g(!1), v = g(""), f = g(null), y = D(t.modelValue || []), j = g(t.options || []), $ = g(t.separator || ","), k = g(t.prop || "value"), C = B(() => {
      let n = j.value;
      return v.value.length >= 1 && (n = n.filter((l) => {
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
      })), n;
    }), I = () => {
      f.value.focus();
    }, N = (n) => {
      if (n.key !== "Enter" && C.value.length >= 1 ? e.value = !0 : e.value = !1, v.value.endsWith($.value) || n.key === "Enter") {
        const l = v.value.replace($.value, "");
        y.includes(l) || (y.push(l), j.value.includes(l) && (j.value = j.value.filter((c) => typeof c == "string" && c !== l ? !0 : typeof c == "object" && k.value in c && c[k.value] !== l))), v.value = "", h("update:modelValue", y);
      }
    };
    z(v, () => {
      if (f.value !== null) {
        const n = document.createElement("div");
        n.style.width = "max-content", n.style.position = "absolute", n.style.visibility = "hidden";
        const l = v.value.length >= 2 ? v.value : f.value.getAttribute("placeholder");
        n.innerHTML = l.replace(/ /g, "&nbsp;").trim(), document.body.appendChild(n);
        const c = Math.ceil(Number(window.getComputedStyle(n).width.replace("px", ""))) + 30;
        f.value.style.setProperty("width", c + "px"), n.remove();
      }
    });
    const p = (n) => {
      n.target.style.display = "none", e.value = !1;
    };
    return (n, l) => (o(), i("div", {
      class: w(["taggable", { active: e.value === !0 }])
    }, [
      d("div", {
        class: "tagBackdrop",
        style: x({ display: e.value ? "block" : "none" }),
        onClick: p
      }, null, 4),
      d("div", ze, [
        d("div", {
          class: "input tagToggler",
          onClick: I
        }, [
          d("div", Me, [
            (o(!0), i(S, null, L(y, (c, s) => (o(), i("div", {
              key: "tag-" + s,
              class: "group"
            }, [
              d("div", Re, [
                typeof c == "string" && c !== "" ? (o(), i(S, { key: 0 }, [
                  F(m(c), 1)
                ], 64)) : typeof c == "object" && k.value in c ? (o(), i(S, { key: 1 }, [
                  F(m(c[k.value]), 1)
                ], 64)) : (o(), i(S, { key: 2 }, [
                  F(m(r.placeholder), 1)
                ], 64))
              ]),
              d("div", {
                class: "tag groupItem",
                onClick: (u) => y.splice(s, 1)
              }, Ee, 8, Fe)
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
        d("div", He, [
          (o(!0), i(S, null, L(b(C), (c, s) => (o(), i(S, {
            key: "option-" + c
          }, [
            typeof c == "string" ? (o(), i("div", {
              key: 0,
              onClick: (u) => {
                v.value = c + ",", N(u);
              },
              class: "tagItem"
            }, m(c), 9, Ue)) : typeof c == "object" && k.value in c ? (o(), i("div", {
              key: 1,
              onClick: (u) => {
                v.value = c[k.value] + ",", N(u);
              },
              class: "tagItem"
            }, m(c[k.value]), 9, De)) : (o(), i("div", {
              key: 2,
              onClick: (u) => {
                v.value = c + ",", N(u);
              },
              class: "tagItem"
            }, [
              A(n.$slots, "default", { option: c }, void 0, !0)
            ], 8, Ke))
          ], 64))), 128))
        ])
      ])
    ], 2));
  }
});
const hl = /* @__PURE__ */ M(Pe, [["__scopeId", "data-v-3acd22f1"]]), qe = { class: "pickerOverlay pickerWrap" }, Ge = { class: "pickerContent" }, Je = { class: "pickerHeader" }, Qe = ["onClick"], Xe = { class: "check" }, Ye = ["checked", "id"], Ze = ["for"], el = ["onClick"], ll = { class: "check" }, tl = ["checked", "id"], al = ["for"], sl = ["onClick"], ul = ["onClick"], rl = ["onClick"], nl = ["onClick"], cl = { class: "pickerFooter" }, ol = { class: "tedirCategoryAdd" }, il = /* @__PURE__ */ T({
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
  setup(r, { emit: h }) {
    const t = r, e = g(t.modelValue || {}), v = g(!1), f = g(""), y = g(null), j = g(void 0), $ = g("");
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
      for (let V = 0; V < s; V++)
        a += u.charAt(Math.floor(Math.random() * u.length));
      return a;
    })(), p = (s) => {
      var u;
      s.target.style.display = "none", v.value = !1, (u = y.value) != null && u.value && (y.value.value = "", f.value = "");
    }, n = (s, u = "") => {
      u !== "" ? e.value.map((a) => a[u]).includes(s[u]) ? e.value.splice(e.value.findIndex((a) => a[u] === s[u]), 1) : e.value.push(s) : e.value.includes(s) ? e.value.splice(e.value.findIndex((a) => a === s), 1) : e.value.push(s), h("update:modelValue", e.value), h("change", e.value, s);
    }, l = (s) => {
      typeof s == "object" && s !== null && String(t.datatype).toLowerCase() === "string" ? (e.value = s[String(t.dataprop || t.prop)], h("update:modelValue", String(e.value))) : typeof s == "object" && s !== null && String(t.datatype).toLowerCase() === "number" ? (e.value = s[String(t.dataprop || t.prop)], h("update:modelValue", Number(e.value))) : (e.value = s, h("update:modelValue", e.value)), v.value = !1, h("change", e.value, s);
    }, c = B(() => {
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
      class: w(["picker suggestion tedirCategory", { active: v.value, pickerUp: r.up }])
    }, [
      d("div", {
        class: "pickerBackdrop",
        style: x({ display: v.value ? "block" : "none" }),
        onClick: p
      }, null, 4),
      d("div", qe, [
        d("div", {
          class: "select pickerToggler",
          onClick: u[0] || (u[0] = (a) => v.value = !v.value)
        }, m(b(c)), 1),
        d("div", Ge, [
          d("div", Je, [
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
            style: x({ "max-height": Number(r.size) !== 0 ? Number(r.size) * 42 + "px" : "auto" })
          }, [
            (o(!0), i(S, null, L(b(C), (a, V) => (o(), i(S, {
              key: "option-" + a
            }, [
              typeof a == "string" ? (o(), i("div", {
                key: 0,
                onClick: O((_) => n(a), ["stop"]),
                class: "pickerItem"
              }, [
                d("div", Xe, [
                  d("input", {
                    type: "checkbox",
                    class: "checkInput",
                    checked: e.value.includes(a),
                    id: "check-" + (b(N) + String(V)),
                    style: { "pointer-events": "none" }
                  }, null, 8, Ye),
                  d("label", {
                    class: "checkLabel",
                    for: "check-" + (b(N) + String(V)),
                    style: { "pointer-events": "none" }
                  }, m(a), 9, Ze)
                ])
              ], 8, Qe)) : typeof a == "object" && a !== null && r.prop in a ? (o(), i("div", {
                key: 1,
                onClick: O((_) => n(a, r.prop), ["stop"]),
                class: "pickerItem"
              }, [
                d("div", ll, [
                  d("input", {
                    type: "checkbox",
                    class: "checkInput",
                    checked: e.value.includes(a),
                    id: "check-" + (b(N) + String(V)),
                    style: { "pointer-events": "none" }
                  }, null, 8, tl),
                  d("label", {
                    class: "checkLabel",
                    for: "check-" + (b(N) + String(V)),
                    style: { "pointer-events": "none" }
                  }, m(a[r.prop]), 9, al)
                ])
              ], 8, el)) : (o(), i("div", {
                key: 2,
                onClick: O((_) => n(a), ["stop"]),
                class: "pickerItem"
              }, [
                A(s.$slots, "default", {
                  option: a,
                  selected: e.value
                }, void 0, !0)
              ], 8, sl))
            ], 64))), 128))
          ], 4)) : (o(), i("div", {
            key: 1,
            class: "pickerMenu",
            style: x({ "max-height": Number(r.size) !== 0 ? Number(r.size) * 42 + "px" : "auto" })
          }, [
            (o(!0), i(S, null, L(b(C), (a, V) => (o(), i(S, {
              key: "option-" + a
            }, [
              typeof a == "string" ? (o(), i("div", {
                key: 0,
                onClick: (_) => l(a),
                class: w(["pickerItem", e.value === a ? "active" : ""])
              }, m(a), 11, ul)) : typeof a == "object" && a !== null && r.prop in a ? (o(), i("div", {
                key: 1,
                onClick: (_) => l(a),
                class: w(["pickerItem", e.value[r.prop] === a[r.prop] || String(a[r.dataprop || r.prop]) === String(e.value) ? "active" : ""])
              }, m(a[r.prop]), 11, rl)) : (o(), i("div", {
                key: 2,
                onClick: O((_) => l(a), ["stop"]),
                class: w(["pickerItem", e.value === a ? "active" : ""])
              }, [
                A(s.$slots, "default", {
                  option: a,
                  selected: e.value
                }, void 0, !0)
              ], 10, nl))
            ], 64))), 128))
          ], 4)),
          d("div", cl, [
            d("div", ol, [
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
const yl = /* @__PURE__ */ M(il, [["__scopeId", "data-v-9bd9abf8"]]);
export {
  yl as CategoryBox,
  fl as ComboBox,
  pl as ListBox,
  vl as SelectBox,
  hl as TagBox
};
