import { defineComponent as T, ref as k, watch as z, computed as B, openBlock as o, createElementBlock as i, normalizeClass as j, createElementVNode as d, normalizeStyle as x, toDisplayString as m, unref as g, Fragment as $, withDirectives as R, withModifiers as V, vShow as W, renderList as L, renderSlot as A, pushScopeId as E, popScopeId as H, reactive as D, createTextVNode as F, withKeys as K, vModelText as U } from "vue";
const P = (c) => (E("data-v-9d6782b2"), c = c(), H(), c), q = { class: "pickerWrap" }, G = { class: "pickerContent" }, J = { class: "pickerHeader" }, Q = {
  key: 0,
  class: "tedirSelectLoading"
}, X = /* @__PURE__ */ P(() => /* @__PURE__ */ d("span", { class: "spinner" }, null, -1)), Y = [
  X
], Z = ["onClick"], ee = { class: "check" }, le = ["checked", "id"], te = ["for"], ae = ["onClick"], se = { class: "check" }, ue = ["checked", "id"], ne = ["for"], ce = ["onClick"], re = ["onClick"], oe = ["onClick"], ie = ["onClick"], de = /* @__PURE__ */ T({
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
  setup(c, { emit: h }) {
    const s = c, e = k(s.modelValue || {}), v = k(!1), p = k(""), y = k(null), _ = k(void 0);
    z(() => s.modelValue, () => {
      e.value = s.modelValue;
    });
    const b = () => {
      clearTimeout(_.value), _.value = setTimeout(() => {
        var a, u;
        p.value = "", ((a = y.value) == null ? void 0 : a.value) && ((u = y.value) == null ? void 0 : u.value) !== "" && (p.value = y.value.value), h("search", p.value);
      }, 500);
    }, C = B(() => {
      let a = s.options;
      return p.value.length >= 1 && (a = a.filter((u) => {
        if (isNaN(u) === !1 && Number(u) === Number(p.value))
          return !0;
        if (typeof u == "string" && u.toLowerCase().includes(p.value.toLowerCase()))
          return !0;
        if (typeof u == "object" && u !== null && Object.prototype.toString.call(u) === "[object Object]")
          for (const t of Object.keys(u)) {
            if (isNaN(u[t]) === !1 && Number(u[t]) === Number(p.value))
              return !0;
            if (typeof u[t] == "string" && u[t].toLowerCase().includes(p.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), a;
    }), I = ((a = 10) => {
      let u = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", t = "";
      for (let w = 0; w < a; w++)
        t += u.charAt(Math.floor(Math.random() * u.length));
      return t;
    })(), N = (a) => {
      var u;
      a.target.style.display = "none", v.value = !1, (u = y.value) != null && u.value && (y.value.value = "", p.value = "");
    }, r = (a) => {
      e.value = a, h("update:modelValue", e.value), h("change", e.value, a), v.value = !1;
    }, n = (a, u = "") => {
      u !== "" ? e.value.map((t) => t[u]).includes(a[u]) ? e.value.splice(e.value.findIndex((t) => t[u] === a[u]), 1) : e.value.push(a) : e.value.includes(a) ? e.value.splice(e.value.findIndex((t) => t === a), 1) : e.value.push(a), h("update:modelValue", e.value), h("change", e.value, a);
    }, l = (a) => {
      typeof a == "object" && a !== null && String(s.datatype).toLowerCase() === "string" ? (e.value = a[String(s.dataprop || s.prop)], h("update:modelValue", String(e.value))) : typeof a == "object" && a !== null && String(s.datatype).toLowerCase() === "number" ? (e.value = a[String(s.dataprop || s.prop)], h("update:modelValue", Number(e.value))) : (e.value = a, h("update:modelValue", e.value)), v.value = !1, h("change", e.value, a);
    }, f = B(() => {
      let a = (s == null ? void 0 : s.placeholder) || "-- Select option --";
      if (C.value.length >= 1)
        if (typeof e.value == "number") {
          let u = C.value.filter((t) => Number(t[String(s.dataprop || s.prop)]) === Number(e.value));
          typeof C.value[0] == "object" && u.length >= 1 ? a = u[0][String(s.prop)] : typeof C.value[0] == "number" && (a = e.value);
        } else if (typeof e.value == "string") {
          let u = C.value.filter((t) => String(t[String(s.dataprop || s.prop)]) === e.value);
          typeof C.value[0] == "object" && u.length >= 1 ? a = u[0][String(s.prop)] : typeof C.value[0] == "string" && e.value !== "" && (a = e.value);
        } else
          typeof e.value == "object" && (Array.isArray(e.value) && e.value.length >= 1 ? typeof e.value[0] == "object" && String(s.prop) in e.value[0] ? a = e.value.map((u) => u[String(s.prop)]).join(", ") : a = e.value.join(", ") : e.value !== null && String(s.prop) in e.value && (a = e.value[String(s.prop)]));
      return a;
    });
    return (a, u) => (o(), i("div", {
      class: j(["picker suggestion", { active: v.value, pickerUp: c.up }])
    }, [
      d("div", {
        class: "pickerBackdrop",
        style: x({ display: v.value ? "block" : "none" }),
        onClick: N
      }, null, 4),
      d("div", q, [
        d("div", {
          class: "select pickerToggler",
          onClick: u[0] || (u[0] = (t) => v.value = !v.value)
        }, m(g(f)), 1),
        d("div", G, [
          d("div", J, [
            d("input", {
              type: "search",
              ref_key: "searchRef",
              ref: y,
              onInput: b,
              class: "input"
            }, null, 544)
          ]),
          c.loading ? (o(), i("div", Q, Y)) : (o(), i($, { key: 1 }, [
            Array.isArray(e.value) ? (o(), i("div", {
              key: 0,
              class: "pickerMenu",
              style: x({ "max-height": Number(c.size) !== 0 ? Number(c.size) * 42 + "px" : "auto" })
            }, [
              R(d("div", {
                onClick: u[1] || (u[1] = V((t) => r(typeof c.modelValue == "object" ? Array.isArray(c.modelValue) ? [] : {} : ""), ["stop"])),
                class: "pickerItem"
              }, m(c.placeholder || "-- Select Option --"), 513), [
                [W, c.defaultOption]
              ]),
              (o(!0), i($, null, L(g(C), (t, w) => (o(), i($, {
                key: "option-" + t
              }, [
                typeof t == "string" && c.type !== "slot" ? (o(), i("div", {
                  key: 0,
                  onClick: V((O) => n(t), ["stop"]),
                  class: "pickerItem"
                }, [
                  d("div", ee, [
                    d("input", {
                      type: "checkbox",
                      class: "checkInput",
                      checked: e.value.includes(t),
                      id: "check-" + (g(I) + String(w)),
                      style: { "pointer-events": "none" }
                    }, null, 8, le),
                    d("label", {
                      class: "checkLabel",
                      for: "check-" + (g(I) + String(w)),
                      style: { "pointer-events": "none" }
                    }, m(t), 9, te)
                  ])
                ], 8, Z)) : typeof t == "object" && t !== null && c.prop in t && c.type !== "slot" ? (o(), i("div", {
                  key: 1,
                  onClick: V((O) => n(t, c.prop), ["stop"]),
                  class: "pickerItem"
                }, [
                  d("div", se, [
                    d("input", {
                      type: "checkbox",
                      class: "checkInput",
                      checked: e.value.includes(t),
                      id: "check-" + (g(I) + String(w)),
                      style: { "pointer-events": "none" }
                    }, null, 8, ue),
                    d("label", {
                      class: "checkLabel",
                      for: "check-" + (g(I) + String(w)),
                      style: { "pointer-events": "none" }
                    }, m(t[c.prop]), 9, ne)
                  ])
                ], 8, ae)) : (o(), i("div", {
                  key: 2,
                  onClick: V((O) => n(t), ["stop"]),
                  class: "pickerItem"
                }, [
                  A(a.$slots, "default", {
                    option: t,
                    selected: e.value
                  }, void 0, !0)
                ], 8, ce))
              ], 64))), 128))
            ], 4)) : (o(), i("div", {
              key: 1,
              class: "pickerMenu",
              style: x({ "max-height": Number(c.size) !== 0 ? Number(c.size) * 42 + "px" : "auto" })
            }, [
              R(d("div", {
                onClick: u[2] || (u[2] = V((t) => r(typeof c.modelValue == "object" ? Array.isArray(c.modelValue) ? [] : {} : ""), ["stop"])),
                class: "pickerItem"
              }, m(c.placeholder || "-- Select Option --"), 513), [
                [W, c.defaultOption]
              ]),
              (o(!0), i($, null, L(g(C), (t, w) => (o(), i($, {
                key: "option-" + t
              }, [
                typeof t == "string" && c.type !== "slot" ? (o(), i("div", {
                  key: 0,
                  onClick: (O) => l(t),
                  class: j(["pickerItem", e.value === t ? "active" : ""])
                }, m(t), 11, re)) : typeof t == "object" && t !== null && c.prop in t && c.type !== "slot" ? (o(), i("div", {
                  key: 1,
                  onClick: (O) => l(t),
                  class: j(["pickerItem", e.value[c.prop] === t[c.prop] || String(t[c.dataprop || c.prop]) === String(e.value) ? "active" : ""])
                }, m(t[c.prop]), 11, oe)) : (o(), i("div", {
                  key: 2,
                  onClick: V((O) => l(t), ["stop"]),
                  class: j(["pickerItem", e.value === t ? "active" : ""])
                }, [
                  A(a.$slots, "default", {
                    option: t,
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
const M = (c, h) => {
  const s = c.__vccOpts || c;
  for (const [e, v] of h)
    s[e] = v;
  return s;
}, vl = /* @__PURE__ */ M(de, [["__scopeId", "data-v-9d6782b2"]]), ve = { class: "pickerWrap" }, fe = ["value"], pe = ["value"], he = { class: "pickerContent pickerSizing" }, ye = ["onClick"], ke = ["onClick"], ge = ["onClick"], be = /* @__PURE__ */ T({
  __name: "ComboBox",
  props: {
    modelValue: { default: null },
    options: { default: [] },
    prop: { default: "value" },
    datatype: { default: "" },
    dataprop: { default: "" },
    placeholder: { default: "-- Search option --" },
    size: { default: 0 },
    select: { type: Boolean, default: !1 },
    up: { type: Boolean, default: !1 },
    serverSearch: { type: Boolean, default: !1 },
    emptySearch: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change", "search"],
  setup(c, { emit: h }) {
    const s = c, e = k(s.modelValue || {}), v = k(!1), p = k(""), y = k(null), _ = k(void 0);
    z(() => s.modelValue, () => {
      e.value = s.modelValue;
    });
    const b = B(() => {
      let r = s.options;
      return p.value.length >= 1 && s.serverSearch !== !0 && (r = r.filter((n) => {
        if (isNaN(n) === !1 && Number(n) === Number(p.value))
          return !0;
        if (typeof n == "string" && n.toLowerCase().includes(p.value.toLowerCase()))
          return !0;
        if (typeof n == "object" && n !== null && Object.prototype.toString.call(n) === "[object Object]")
          for (const l of Object.keys(n)) {
            if (isNaN(n[l]) === !1 && Number(n[l]) === Number(p.value))
              return !0;
            if (typeof n[l] == "string" && n[l].toLowerCase().includes(p.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), r;
    }), C = () => {
      clearTimeout(_.value), _.value = setTimeout(() => {
        var r, n;
        p.value = "", ((r = y.value) == null ? void 0 : r.value) && ((n = y.value) == null ? void 0 : n.value) !== "" && (p.value = y.value.value), h("search", p.value), b.value.length >= 1 && p.value !== "" || s.serverSearch == !0 ? v.value = !0 : v.value = !1;
      }, 500);
    }, S = (r, n) => {
      (typeof r == "string" || isNaN(r) === !1) && (p.value = r, y.value.value = r), s.emptySearch == !0 && (p.value = "", y.value.value = "", h("search", p.value)), typeof n == "object" && n !== null && String(s.datatype).toLowerCase() === "string" ? (e.value = n[String(s.dataprop || s.prop)], h("update:modelValue", String(e.value))) : typeof n == "object" && n !== null && String(s.datatype).toLowerCase() === "number" ? (e.value = n[String(s.dataprop || s.prop)], h("update:modelValue", Number(e.value))) : (e.value = n, h("update:modelValue", e.value)), h("change", r, n), v.value = !1;
    }, I = (r) => {
      r.target.style.display = "none", v.value = !1;
    }, N = B(() => {
      let r = (s == null ? void 0 : s.placeholder) || "-- Search option --";
      if (b.value.length >= 1)
        if (typeof e.value == "number") {
          let n = b.value.filter((l) => Number(l[String(s.dataprop || s.prop)]) === Number(e.value));
          typeof b.value[0] == "object" && n.length >= 1 ? r = n[0][String(s.prop)] : typeof b.value[0] == "number" && (r = e.value);
        } else if (typeof e.value == "string") {
          let n = b.value.filter((l) => String(l[String(s.dataprop || s.prop)]) === e.value);
          typeof b.value[0] == "object" && n.length >= 1 ? r = n[0][String(s.prop)] : typeof b.value[0] == "string" && e.value !== "" && (r = e.value);
        } else
          typeof e.value == "object" && (Array.isArray(e.value) && e.value.length >= 1 ? typeof e.value[0] == "object" && String(s.prop) in e.value[0] ? r = e.value.map((n) => n[String(s.prop)]).join(", ") : r = e.value.join(", ") : e.value !== null && String(s.prop) in e.value && (r = e.value[String(s.prop)]));
      return r;
    });
    return (r, n) => (o(), i("div", {
      class: j(["picker suggestion", { active: v.value, pickerUp: c.up }])
    }, [
      d("div", {
        class: "pickerBackdrop",
        style: x({ display: v.value ? "block" : "none" }),
        onClick: I
      }, null, 4),
      d("div", ve, [
        c.select ? (o(), i("input", {
          key: 0,
          type: "search",
          value: g(N),
          ref_key: "searchRef",
          ref: y,
          onInput: C,
          onClick: n[0] || (n[0] = (l) => v.value = !0),
          class: "select"
        }, null, 40, fe)) : (o(), i("input", {
          key: 1,
          type: "search",
          value: g(N),
          ref_key: "searchRef",
          ref: y,
          onInput: C,
          onClick: n[1] || (n[1] = (l) => g(b).length >= 1 && p.value !== "" ? v.value = !0 : v.value = !1),
          class: "input"
        }, null, 40, pe)),
        d("div", he, [
          (o(!0), i($, null, L(g(b), (l, f) => (o(), i($, {
            key: "option-" + l
          }, [
            typeof l == "string" ? (o(), i("div", {
              key: 0,
              onClick: (a) => S(l, l),
              class: j(["pickerItem", c.modelValue === l ? "active" : ""])
            }, m(l), 11, ye)) : typeof l == "object" && c.prop in l ? (o(), i("div", {
              key: 1,
              onClick: (a) => S(l[c.prop], l),
              class: j(["pickerItem", c.modelValue[c.prop] === l[c.prop] ? "active" : ""])
            }, m(l[c.prop]), 11, ke)) : (o(), i("div", {
              key: 2,
              onClick: (a) => S(l, l),
              class: j(["pickerItem", c.modelValue === l ? "active" : ""])
            }, [
              A(r.$slots, "default", { option: l }, void 0, !0)
            ], 10, ge))
          ], 64))), 128))
        ])
      ])
    ], 2));
  }
});
const fl = /* @__PURE__ */ M(be, [["__scopeId", "data-v-e5e12d3b"]]), Ce = { class: "list" }, me = { class: "listHeader" }, Se = ["onClick"], $e = { class: "check" }, Ne = ["checked", "id"], we = ["for"], je = ["onClick"], _e = { class: "check" }, Ve = ["checked", "id"], Ie = ["for"], Oe = ["onClick"], xe = ["onClick"], Le = ["onClick"], Be = ["onClick"], Ae = /* @__PURE__ */ T({
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
  setup(c, { emit: h }) {
    const s = c, e = k(s.modelValue || {}), v = k(""), p = k(null), y = k(void 0);
    z(() => s.modelValue, () => {
      e.value = s.modelValue;
    });
    const _ = () => {
      clearTimeout(y.value), y.value = setTimeout(() => {
        var r, n;
        v.value = "", ((r = p.value) == null ? void 0 : r.value) && ((n = p.value) == null ? void 0 : n.value) !== "" && (v.value = p.value.value), h("search", v.value);
      }, 500);
    }, b = B(() => {
      let r = s.options;
      return v.value.length >= 1 && (r = r.filter((n) => {
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
      })), r;
    }), S = (() => {
      let r = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", n = "";
      for (let l = 0; l < 10; l++)
        n += r.charAt(Math.floor(Math.random() * r.length));
      return n;
    })(), I = (r, n = "") => {
      n !== "" ? e.value.map((l) => l[n]).includes(r[n]) ? e.value.splice(e.value.findIndex((l) => l[n] === r[n]), 1) : e.value.push(r) : e.value.includes(r) ? e.value.splice(e.value.findIndex((l) => l === r), 1) : e.value.push(r), h("update:modelValue", e.value), h("change", e.value, r);
    }, N = (r) => {
      typeof r == "object" && r !== null && String(s.datatype).toLowerCase() === "string" ? (e.value = r[String(s.dataprop || s.prop)], h("update:modelValue", String(e.value))) : typeof r == "object" && r !== null && String(s.datatype).toLowerCase() === "number" ? (e.value = r[String(s.dataprop || s.prop)], h("update:modelValue", Number(e.value))) : (e.value = r, h("update:modelValue", e.value)), h("change", e.value, r);
    };
    return (r, n) => (o(), i("div", null, [
      d("div", Ce, [
        d("div", me, [
          d("input", {
            type: "search",
            ref_key: "searchRef",
            ref: p,
            onInput: _,
            class: "input"
          }, null, 544)
        ]),
        Array.isArray(c.modelValue) ? (o(), i("div", {
          key: 0,
          class: "listMenu",
          style: x({ "max-height": Number(c.size) !== 0 ? Number(c.size) * 44 + "px" : "auto" })
        }, [
          (o(!0), i($, null, L(g(b), (l, f) => (o(), i($, {
            key: "option-" + l
          }, [
            typeof l == "string" ? (o(), i("div", {
              key: 0,
              onClick: V((a) => I(l), ["stop"]),
              class: "listItem"
            }, [
              d("div", $e, [
                d("input", {
                  type: "checkbox",
                  class: "checkInput",
                  checked: e.value.includes(l),
                  id: "check-" + (g(S) + String(f)),
                  style: { "pointer-events": "none" }
                }, null, 8, Ne),
                d("label", {
                  class: "checkLabel",
                  for: "check-" + (g(S) + String(f)),
                  style: { "pointer-events": "none" }
                }, m(l), 9, we)
              ])
            ], 8, Se)) : typeof l == "object" && c.prop in l ? (o(), i("div", {
              key: 1,
              onClick: V((a) => I(l, c.prop), ["stop"]),
              class: "listItem"
            }, [
              d("div", _e, [
                d("input", {
                  type: "checkbox",
                  class: "checkInput",
                  checked: e.value.includes(l),
                  id: "check-" + (g(S) + String(f)),
                  style: { "pointer-events": "none" }
                }, null, 8, Ve),
                d("label", {
                  class: "checkLabel",
                  for: "check-" + (g(S) + String(f)),
                  style: { "pointer-events": "none" }
                }, m(l[c.prop]), 9, Ie)
              ])
            ], 8, je)) : (o(), i("div", {
              key: 2,
              onClick: V((a) => I(l), ["stop"]),
              class: j(["listItem", e.value.includes(l) ? "active" : ""])
            }, [
              A(r.$slots, "default", {
                option: l,
                selected: e.value
              }, void 0, !0)
            ], 10, Oe))
          ], 64))), 128))
        ], 4)) : (o(), i("div", {
          key: 1,
          class: "listMenu",
          style: x({ "max-height": Number(c.size) !== 0 ? Number(c.size) * 44 + "px" : "auto" })
        }, [
          (o(!0), i($, null, L(g(b), (l, f) => (o(), i($, {
            key: "option-" + l
          }, [
            typeof l == "string" ? (o(), i("div", {
              key: 0,
              onClick: (a) => N(l),
              class: j(["listItem", e.value === l ? "active" : ""])
            }, m(l), 11, xe)) : typeof l == "object" && c.prop in l ? (o(), i("div", {
              key: 1,
              onClick: (a) => N(l),
              class: j(["listItem", e.value[c.prop] === l[c.prop] || String(l[c.dataprop || c.prop]) === String(e.value) ? "active" : ""])
            }, m(l[c.prop]), 11, Le)) : (o(), i("div", {
              key: 2,
              onClick: V((a) => N(l), ["stop"]),
              class: j(["listItem", e.value === l ? "active" : ""])
            }, [
              A(r.$slots, "default", {
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
const pl = /* @__PURE__ */ M(Ae, [["__scopeId", "data-v-d7fed8bc"]]), Te = (c) => (E("data-v-3acd22f1"), c = c(), H(), c), ze = { class: "tagWrap" }, Me = { class: "tags" }, Re = { class: "tag groupItem" }, Fe = ["onClick"], We = /* @__PURE__ */ Te(() => /* @__PURE__ */ d("svg", {
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
  setup(c, { emit: h }) {
    const s = c, e = k(!1), v = k(""), p = k(null), y = D(s.modelValue || []), _ = k(s.options || []), b = k(s.separator || ","), C = k(s.prop || "value"), S = B(() => {
      let n = _.value;
      return v.value.length >= 1 && (n = n.filter((l) => {
        if (isNaN(l) === !1 && Number(l) === Number(v.value))
          return !0;
        if (typeof l == "string" && l.toLowerCase().includes(v.value.toLowerCase()))
          return !0;
        if (typeof l == "object" && l !== null && Object.prototype.toString.call(l) === "[object Object]")
          for (const f of Object.keys(l)) {
            if (isNaN(l[f]) === !1 && Number(l[f]) === Number(v.value))
              return !0;
            if (typeof l[f] == "string" && l[f].toLowerCase().includes(v.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), n;
    }), I = () => {
      p.value.focus();
    }, N = (n) => {
      if (n.key !== "Enter" && S.value.length >= 1 ? e.value = !0 : e.value = !1, v.value.endsWith(b.value) || n.key === "Enter") {
        const l = v.value.replace(b.value, "");
        y.includes(l) || (y.push(l), _.value.includes(l) && (_.value = _.value.filter((f) => typeof f == "string" && f !== l ? !0 : typeof f == "object" && C.value in f && f[C.value] !== l))), v.value = "", h("update:modelValue", y);
      }
    };
    z(v, () => {
      if (p.value !== null) {
        const n = document.createElement("div");
        n.style.width = "max-content", n.style.position = "absolute", n.style.visibility = "hidden";
        const l = v.value.length >= 2 ? v.value : p.value.getAttribute("placeholder");
        n.innerHTML = l.replace(/ /g, "&nbsp;").trim(), document.body.appendChild(n);
        const f = Math.ceil(Number(window.getComputedStyle(n).width.replace("px", ""))) + 30;
        p.value.style.setProperty("width", f + "px"), n.remove();
      }
    });
    const r = (n) => {
      n.target.style.display = "none", e.value = !1;
    };
    return (n, l) => (o(), i("div", {
      class: j(["taggable", { active: e.value === !0 }])
    }, [
      d("div", {
        class: "tagBackdrop",
        style: x({ display: e.value ? "block" : "none" }),
        onClick: r
      }, null, 4),
      d("div", ze, [
        d("div", {
          class: "input tagToggler",
          onClick: I
        }, [
          d("div", Me, [
            (o(!0), i($, null, L(y, (f, a) => (o(), i("div", {
              key: "tag-" + a,
              class: "group"
            }, [
              d("div", Re, [
                typeof f == "string" && f !== "" ? (o(), i($, { key: 0 }, [
                  F(m(f), 1)
                ], 64)) : typeof f == "object" && C.value in f ? (o(), i($, { key: 1 }, [
                  F(m(f[C.value]), 1)
                ], 64)) : (o(), i($, { key: 2 }, [
                  F(m(c.placeholder), 1)
                ], 64))
              ]),
              d("div", {
                class: "tag groupItem",
                onClick: (u) => y.splice(a, 1)
              }, Ee, 8, Fe)
            ]))), 128)),
            R(d("input", {
              type: "search",
              ref_key: "inputRef",
              ref: p,
              "onUpdate:modelValue": l[0] || (l[0] = (f) => v.value = f),
              class: "tagInput",
              onInput: l[1] || (l[1] = (f) => N(f)),
              onKeyup: l[2] || (l[2] = K((f) => N(f), ["enter"])),
              placeholder: "Add new tag"
            }, null, 544), [
              [U, v.value]
            ])
          ])
        ]),
        d("div", He, [
          (o(!0), i($, null, L(g(S), (f, a) => (o(), i($, {
            key: "option-" + f
          }, [
            typeof f == "string" ? (o(), i("div", {
              key: 0,
              onClick: (u) => {
                v.value = f + ",", N(u);
              },
              class: "tagItem"
            }, m(f), 9, Ue)) : typeof f == "object" && C.value in f ? (o(), i("div", {
              key: 1,
              onClick: (u) => {
                v.value = f[C.value] + ",", N(u);
              },
              class: "tagItem"
            }, m(f[C.value]), 9, De)) : (o(), i("div", {
              key: 2,
              onClick: (u) => {
                v.value = f + ",", N(u);
              },
              class: "tagItem"
            }, [
              A(n.$slots, "default", { option: f }, void 0, !0)
            ], 8, Ke))
          ], 64))), 128))
        ])
      ])
    ], 2));
  }
});
const hl = /* @__PURE__ */ M(Pe, [["__scopeId", "data-v-3acd22f1"]]), qe = { class: "pickerOverlay pickerWrap" }, Ge = { class: "pickerContent" }, Je = { class: "pickerHeader" }, Qe = ["onClick"], Xe = { class: "check" }, Ye = ["checked", "id"], Ze = ["for"], el = ["onClick"], ll = { class: "check" }, tl = ["checked", "id"], al = ["for"], sl = ["onClick"], ul = ["onClick"], nl = ["onClick"], cl = ["onClick"], rl = { class: "pickerFooter" }, ol = { class: "tedirCategoryAdd" }, il = /* @__PURE__ */ T({
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
  setup(c, { emit: h }) {
    const s = c, e = k(s.modelValue || {}), v = k(!1), p = k(""), y = k(null), _ = k(void 0), b = k("");
    z(() => s.modelValue, () => {
      e.value = s.modelValue;
    });
    const C = () => {
      clearTimeout(_.value), _.value = setTimeout(() => {
        var a, u;
        p.value = "", ((a = y.value) == null ? void 0 : a.value) && ((u = y.value) == null ? void 0 : u.value) !== "" && (p.value = y.value.value), h("search", p.value);
      }, 500);
    }, S = B(() => {
      let a = s.options;
      return p.value.length >= 1 && (a = a.filter((u) => {
        if (isNaN(u) === !1 && Number(u) === Number(p.value))
          return !0;
        if (typeof u == "string" && u.toLowerCase().includes(p.value.toLowerCase()))
          return !0;
        if (typeof u == "object" && u !== null && Object.prototype.toString.call(u) === "[object Object]")
          for (const t of Object.keys(u)) {
            if (isNaN(u[t]) === !1 && Number(u[t]) === Number(p.value))
              return !0;
            if (typeof u[t] == "string" && u[t].toLowerCase().includes(p.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), a;
    }), N = ((a = 10) => {
      let u = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", t = "";
      for (let w = 0; w < a; w++)
        t += u.charAt(Math.floor(Math.random() * u.length));
      return t;
    })(), r = (a) => {
      var u;
      a.target.style.display = "none", v.value = !1, (u = y.value) != null && u.value && (y.value.value = "", p.value = "");
    }, n = (a, u = "") => {
      u !== "" ? e.value.map((t) => t[u]).includes(a[u]) ? e.value.splice(e.value.findIndex((t) => t[u] === a[u]), 1) : e.value.push(a) : e.value.includes(a) ? e.value.splice(e.value.findIndex((t) => t === a), 1) : e.value.push(a), h("update:modelValue", e.value), h("change", e.value, a);
    }, l = (a) => {
      typeof a == "object" && a !== null && String(s.datatype).toLowerCase() === "string" ? (e.value = a[String(s.dataprop || s.prop)], h("update:modelValue", String(e.value))) : typeof a == "object" && a !== null && String(s.datatype).toLowerCase() === "number" ? (e.value = a[String(s.dataprop || s.prop)], h("update:modelValue", Number(e.value))) : (e.value = a, h("update:modelValue", e.value)), v.value = !1, h("change", e.value, a);
    }, f = B(() => {
      let a = (s == null ? void 0 : s.placeholder) || "-- Select option --";
      if (S.value.length >= 1)
        if (typeof e.value == "number") {
          let u = S.value.filter((t) => Number(t[String(s.dataprop || s.prop)]) === Number(e.value));
          typeof S.value[0] == "object" && u.length >= 1 ? a = u[0][String(s.prop)] : typeof S.value[0] == "number" && (a = e.value);
        } else if (typeof e.value == "string") {
          let u = S.value.filter((t) => String(t[String(s.dataprop || s.prop)]) === e.value);
          typeof S.value[0] == "object" && u.length >= 1 ? a = u[0][String(s.prop)] : typeof S.value[0] == "string" && e.value !== "" && (a = e.value);
        } else
          typeof e.value == "object" && (Array.isArray(e.value) && e.value.length >= 1 ? typeof e.value[0] == "object" && String(s.prop) in e.value[0] ? a = e.value.map((u) => u[String(s.prop)]).join(", ") : a = e.value.join(", ") : e.value !== null && String(s.prop) in e.value && (a = e.value[String(s.prop)]));
      return a;
    });
    return (a, u) => (o(), i("div", {
      class: j(["picker suggestion tedirCategory", { active: v.value, pickerUp: c.up }])
    }, [
      d("div", {
        class: "pickerBackdrop",
        style: x({ display: v.value ? "block" : "none" }),
        onClick: r
      }, null, 4),
      d("div", qe, [
        d("div", {
          class: "select pickerToggler",
          onClick: u[0] || (u[0] = (t) => v.value = !v.value)
        }, m(g(f)), 1),
        d("div", Ge, [
          d("div", Je, [
            d("input", {
              type: "search",
              ref_key: "searchRef",
              ref: y,
              onInput: C,
              class: "input"
            }, null, 544)
          ]),
          Array.isArray(e.value) ? (o(), i("div", {
            key: 0,
            class: "pickerMenu",
            style: x({ "max-height": Number(c.size) !== 0 ? Number(c.size) * 42 + "px" : "auto" })
          }, [
            (o(!0), i($, null, L(g(S), (t, w) => (o(), i($, {
              key: "option-" + t
            }, [
              typeof t == "string" ? (o(), i("div", {
                key: 0,
                onClick: V((O) => n(t), ["stop"]),
                class: "pickerItem"
              }, [
                d("div", Xe, [
                  d("input", {
                    type: "checkbox",
                    class: "checkInput",
                    checked: e.value.includes(t),
                    id: "check-" + (g(N) + String(w)),
                    style: { "pointer-events": "none" }
                  }, null, 8, Ye),
                  d("label", {
                    class: "checkLabel",
                    for: "check-" + (g(N) + String(w)),
                    style: { "pointer-events": "none" }
                  }, m(t), 9, Ze)
                ])
              ], 8, Qe)) : typeof t == "object" && t !== null && c.prop in t ? (o(), i("div", {
                key: 1,
                onClick: V((O) => n(t, c.prop), ["stop"]),
                class: "pickerItem"
              }, [
                d("div", ll, [
                  d("input", {
                    type: "checkbox",
                    class: "checkInput",
                    checked: e.value.includes(t),
                    id: "check-" + (g(N) + String(w)),
                    style: { "pointer-events": "none" }
                  }, null, 8, tl),
                  d("label", {
                    class: "checkLabel",
                    for: "check-" + (g(N) + String(w)),
                    style: { "pointer-events": "none" }
                  }, m(t[c.prop]), 9, al)
                ])
              ], 8, el)) : (o(), i("div", {
                key: 2,
                onClick: V((O) => n(t), ["stop"]),
                class: "pickerItem"
              }, [
                A(a.$slots, "default", {
                  option: t,
                  selected: e.value
                }, void 0, !0)
              ], 8, sl))
            ], 64))), 128))
          ], 4)) : (o(), i("div", {
            key: 1,
            class: "pickerMenu",
            style: x({ "max-height": Number(c.size) !== 0 ? Number(c.size) * 42 + "px" : "auto" })
          }, [
            (o(!0), i($, null, L(g(S), (t, w) => (o(), i($, {
              key: "option-" + t
            }, [
              typeof t == "string" ? (o(), i("div", {
                key: 0,
                onClick: (O) => l(t),
                class: j(["pickerItem", e.value === t ? "active" : ""])
              }, m(t), 11, ul)) : typeof t == "object" && t !== null && c.prop in t ? (o(), i("div", {
                key: 1,
                onClick: (O) => l(t),
                class: j(["pickerItem", e.value[c.prop] === t[c.prop] || String(t[c.dataprop || c.prop]) === String(e.value) ? "active" : ""])
              }, m(t[c.prop]), 11, nl)) : (o(), i("div", {
                key: 2,
                onClick: V((O) => l(t), ["stop"]),
                class: j(["pickerItem", e.value === t ? "active" : ""])
              }, [
                A(a.$slots, "default", {
                  option: t,
                  selected: e.value
                }, void 0, !0)
              ], 10, cl))
            ], 64))), 128))
          ], 4)),
          d("div", rl, [
            d("div", ol, [
              R(d("input", {
                type: "text",
                "onUpdate:modelValue": u[1] || (u[1] = (t) => b.value = t),
                class: "input",
                placeholder: "Add New Category"
              }, null, 512), [
                [U, b.value]
              ]),
              d("button", {
                type: "button",
                class: "button tedirCategoryButton",
                onClick: u[2] || (u[2] = (t) => {
                  h("add", b.value), b.value = "";
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
