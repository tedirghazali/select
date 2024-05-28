import { defineComponent as T, ref as k, watch as z, computed as B, openBlock as o, createElementBlock as i, normalizeClass as j, createElementVNode as d, normalizeStyle as x, toDisplayString as m, unref as g, Fragment as N, withDirectives as R, withModifiers as V, vShow as W, renderList as L, renderSlot as A, pushScopeId as E, popScopeId as H, reactive as D, createTextVNode as F, withKeys as K, vModelText as U } from "vue";
const P = (n) => (E("data-v-9d6782b2"), n = n(), H(), n), q = { class: "pickerWrap" }, G = { class: "pickerContent" }, J = { class: "pickerHeader" }, Q = {
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
    const u = n, e = k(u.modelValue || {}), v = k(!1), f = k(""), y = k(null), I = k(void 0);
    z(() => u.modelValue, () => {
      e.value = u.modelValue;
    });
    const b = () => {
      clearTimeout(I.value), I.value = setTimeout(() => {
        var s, a;
        f.value = "", ((s = y.value) == null ? void 0 : s.value) && ((a = y.value) == null ? void 0 : a.value) !== "" && (f.value = y.value.value), h("search", f.value);
      }, 500);
    }, C = B(() => {
      let s = u.options;
      return f.value.length >= 1 && (s = s.filter((a) => {
        if (isNaN(a) === !1 && Number(a) === Number(f.value))
          return !0;
        if (typeof a == "string" && a.toLowerCase().includes(f.value.toLowerCase()))
          return !0;
        if (typeof a == "object" && a !== null && Object.prototype.toString.call(a) === "[object Object]")
          for (const t of Object.keys(a)) {
            if (isNaN(a[t]) === !1 && Number(a[t]) === Number(f.value))
              return !0;
            if (typeof a[t] == "string" && a[t].toLowerCase().includes(f.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), s;
    }), _ = ((s = 10) => {
      let a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", t = "";
      for (let w = 0; w < s; w++)
        t += a.charAt(Math.floor(Math.random() * a.length));
      return t;
    })(), $ = (s) => {
      var a;
      s.target.style.display = "none", v.value = !1, (a = y.value) != null && a.value && (y.value.value = "", f.value = "");
    }, p = (s) => {
      e.value = s, h("update:modelValue", e.value), h("change", e.value, s), v.value = !1;
    }, r = (s, a = "") => {
      a !== "" ? e.value.map((t) => t[a]).includes(s[a]) ? e.value.splice(e.value.findIndex((t) => t[a] === s[a]), 1) : e.value.push(s) : e.value.includes(s) ? e.value.splice(e.value.findIndex((t) => t === s), 1) : e.value.push(s), h("update:modelValue", e.value), h("change", e.value, s);
    }, l = (s) => {
      typeof s == "object" && s !== null && String(u.datatype).toLowerCase() === "string" ? (e.value = s[String(u.dataprop || u.prop)], h("update:modelValue", String(e.value))) : typeof s == "object" && s !== null && String(u.datatype).toLowerCase() === "number" ? (e.value = s[String(u.dataprop || u.prop)], h("update:modelValue", Number(e.value))) : (e.value = s, h("update:modelValue", e.value)), v.value = !1, h("change", e.value, s);
    }, c = B(() => {
      let s = (u == null ? void 0 : u.placeholder) || "-- Select option --";
      if (C.value.length >= 1)
        if (typeof e.value == "number") {
          let a = C.value.filter((t) => Number(t[String(u.dataprop || u.prop)]) === Number(e.value));
          typeof C.value[0] == "object" && a.length >= 1 ? s = a[0][String(u.prop)] : typeof C.value[0] == "number" && (s = e.value);
        } else if (typeof e.value == "string") {
          let a = C.value.filter((t) => String(t[String(u.dataprop || u.prop)]) === e.value);
          typeof C.value[0] == "object" && a.length >= 1 ? s = a[0][String(u.prop)] : typeof C.value[0] == "string" && e.value !== "" && (s = e.value);
        } else
          typeof e.value == "object" && (Array.isArray(e.value) && e.value.length >= 1 ? typeof e.value[0] == "object" && String(u.prop) in e.value[0] ? s = e.value.map((a) => a[String(u.prop)]).join(", ") : s = e.value.join(", ") : e.value !== null && String(u.prop) in e.value && (s = e.value[String(u.prop)]));
      return s;
    });
    return (s, a) => (o(), i("div", {
      class: j(["picker suggestion", { active: v.value, pickerUp: n.up }])
    }, [
      d("div", {
        class: "pickerBackdrop",
        style: x({ display: v.value ? "block" : "none" }),
        onClick: $
      }, null, 4),
      d("div", q, [
        d("div", {
          class: "select pickerToggler",
          onClick: a[0] || (a[0] = (t) => v.value = !v.value)
        }, m(g(c)), 1),
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
          n.loading ? (o(), i("div", Q, Y)) : (o(), i(N, { key: 1 }, [
            Array.isArray(e.value) ? (o(), i("div", {
              key: 0,
              class: "pickerMenu",
              style: x({ "max-height": Number(n.size) !== 0 ? Number(n.size) * 42 + "px" : "auto" })
            }, [
              R(d("div", {
                onClick: a[1] || (a[1] = V((t) => p(typeof n.modelValue == "object" ? Array.isArray(n.modelValue) ? [] : {} : ""), ["stop"])),
                class: "pickerItem"
              }, m(n.placeholder || "-- Select Option --"), 513), [
                [W, n.defaultOption]
              ]),
              (o(!0), i(N, null, L(g(C), (t, w) => (o(), i(N, {
                key: "option-" + t
              }, [
                typeof t == "string" && n.type !== "slot" ? (o(), i("div", {
                  key: 0,
                  onClick: V((O) => r(t), ["stop"]),
                  class: "pickerItem"
                }, [
                  d("div", ee, [
                    d("input", {
                      type: "checkbox",
                      class: "checkInput",
                      checked: e.value.includes(t),
                      id: "check-" + (g(_) + String(w)),
                      style: { "pointer-events": "none" }
                    }, null, 8, le),
                    d("label", {
                      class: "checkLabel",
                      for: "check-" + (g(_) + String(w)),
                      style: { "pointer-events": "none" }
                    }, m(t), 9, te)
                  ])
                ], 8, Z)) : typeof t == "object" && t !== null && n.prop in t && n.type !== "slot" ? (o(), i("div", {
                  key: 1,
                  onClick: V((O) => r(t, n.prop), ["stop"]),
                  class: "pickerItem"
                }, [
                  d("div", se, [
                    d("input", {
                      type: "checkbox",
                      class: "checkInput",
                      checked: e.value.includes(t),
                      id: "check-" + (g(_) + String(w)),
                      style: { "pointer-events": "none" }
                    }, null, 8, ue),
                    d("label", {
                      class: "checkLabel",
                      for: "check-" + (g(_) + String(w)),
                      style: { "pointer-events": "none" }
                    }, m(t[n.prop]), 9, ne)
                  ])
                ], 8, ae)) : (o(), i("div", {
                  key: 2,
                  onClick: V((O) => r(t), ["stop"]),
                  class: "pickerItem"
                }, [
                  A(s.$slots, "default", {
                    option: t,
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
                onClick: a[2] || (a[2] = V((t) => p(typeof n.modelValue == "object" ? Array.isArray(n.modelValue) ? [] : {} : ""), ["stop"])),
                class: "pickerItem"
              }, m(n.placeholder || "-- Select Option --"), 513), [
                [W, n.defaultOption]
              ]),
              (o(!0), i(N, null, L(g(C), (t, w) => (o(), i(N, {
                key: "option-" + t
              }, [
                typeof t == "string" && n.type !== "slot" ? (o(), i("div", {
                  key: 0,
                  onClick: (O) => l(t),
                  class: j(["pickerItem", e.value === t ? "active" : ""])
                }, m(t), 11, ce)) : typeof t == "object" && t !== null && n.prop in t && n.type !== "slot" ? (o(), i("div", {
                  key: 1,
                  onClick: (O) => l(t),
                  class: j(["pickerItem", e.value[n.prop] === t[n.prop] || String(t[n.dataprop || n.prop]) === String(e.value) ? "active" : ""])
                }, m(t[n.prop]), 11, oe)) : (o(), i("div", {
                  key: 2,
                  onClick: V((O) => l(t), ["stop"]),
                  class: j(["pickerItem", e.value === t ? "active" : ""])
                }, [
                  A(s.$slots, "default", {
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
const M = (n, h) => {
  const u = n.__vccOpts || n;
  for (const [e, v] of h)
    u[e] = v;
  return u;
}, vl = /* @__PURE__ */ M(de, [["__scopeId", "data-v-9d6782b2"]]), ve = { class: "pickerWrap" }, fe = ["value", "placeholder"], pe = ["value", "placeholder"], he = { class: "pickerContent pickerSizing" }, ye = ["onClick"], ke = ["onClick"], ge = ["onClick"], be = /* @__PURE__ */ T({
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
  setup(n, { emit: h }) {
    const u = n, e = k(u.modelValue || {}), v = k(!1), f = k(""), y = k(null), I = k(void 0);
    z(() => u.modelValue, () => {
      e.value = u.modelValue;
    });
    const b = B(() => {
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
    }), C = () => {
      clearTimeout(I.value), I.value = setTimeout(() => {
        var r, l;
        f.value = "", ((r = y.value) == null ? void 0 : r.value) && ((l = y.value) == null ? void 0 : l.value) !== "" && (f.value = y.value.value), h("search", f.value), b.value.length >= 1 && f.value !== "" || u.serverSearch == !0 ? v.value = !0 : v.value = !1;
      }, 500);
    }, S = (r, l) => {
      (typeof r == "string" || isNaN(r) === !1) && (f.value = r, y.value.value = r), u.emptySearch == !0 && (f.value = "", y.value.value = "", h("search", f.value)), typeof l == "object" && l !== null && String(u.datatype).toLowerCase() === "string" ? (e.value = l[String(u.dataprop || u.prop)], h("update:modelValue", String(e.value))) : typeof l == "object" && l !== null && String(u.datatype).toLowerCase() === "number" ? (e.value = l[String(u.dataprop || u.prop)], h("update:modelValue", Number(e.value))) : (e.value = l, h("update:modelValue", e.value)), h("change", r, l), v.value = !1;
    }, _ = (r) => {
      r.target.style.display = "none", v.value = !1;
    }, $ = k(!1), p = B(() => {
      let r = "";
      if (b.value.length >= 1 && $.value === !1)
        if (typeof e.value == "number") {
          let l = b.value.filter((c) => Number(c[String(u.dataprop || u.prop)]) === Number(e.value));
          typeof b.value[0] == "object" && l.length >= 1 ? r = l[0][String(u.prop)] : typeof b.value[0] == "number" && (r = e.value);
        } else if (typeof e.value == "string") {
          let l = b.value.filter((c) => String(c[String(u.dataprop || u.prop)]) === e.value);
          typeof b.value[0] == "object" && l.length >= 1 ? r = l[0][String(u.prop)] : typeof b.value[0] == "string" && e.value !== "" && (r = e.value);
        } else
          typeof e.value == "object" && (Array.isArray(e.value) && e.value.length >= 1 ? typeof e.value[0] == "object" && String(u.prop) in e.value[0] ? r = e.value.map((l) => l[String(u.prop)]).join(", ") : r = e.value.join(", ") : e.value !== null && String(u.prop) in e.value && (r = e.value[String(u.prop)]));
      else
        y.value.value && $.value === !0 && (r = y.value.value);
      return r;
    });
    return (r, l) => (o(), i("div", {
      class: j(["picker suggestion", { active: v.value, pickerUp: n.up }]),
      onMouseenter: l[2] || (l[2] = V((c) => $.value = !0, ["self"])),
      onMouseleave: l[3] || (l[3] = V((c) => $.value = !1, ["self"]))
    }, [
      d("div", {
        class: "pickerBackdrop",
        style: x({ display: v.value ? "block" : "none" }),
        onClick: _
      }, null, 4),
      d("div", ve, [
        n.select ? (o(), i("input", {
          key: 0,
          type: "search",
          value: g(p),
          ref_key: "searchRef",
          ref: y,
          onInput: C,
          onClick: l[0] || (l[0] = (c) => v.value = !0),
          class: "select",
          placeholder: n.placeholder
        }, null, 40, fe)) : (o(), i("input", {
          key: 1,
          type: "search",
          value: g(p),
          ref_key: "searchRef",
          ref: y,
          onInput: C,
          onClick: l[1] || (l[1] = (c) => g(b).length >= 1 && f.value !== "" ? v.value = !0 : v.value = !1),
          class: "input",
          placeholder: n.placeholder
        }, null, 40, pe)),
        d("div", he, [
          (o(!0), i(N, null, L(g(b), (c, s) => (o(), i(N, {
            key: "option-" + c
          }, [
            typeof c == "string" ? (o(), i("div", {
              key: 0,
              onClick: (a) => S(c, c),
              class: j(["pickerItem", n.modelValue === c ? "active" : ""])
            }, m(c), 11, ye)) : typeof c == "object" && n.prop in c ? (o(), i("div", {
              key: 1,
              onClick: (a) => S(c[n.prop], c),
              class: j(["pickerItem", n.modelValue[n.prop] === c[n.prop] ? "active" : ""])
            }, m(c[n.prop]), 11, ke)) : (o(), i("div", {
              key: 2,
              onClick: (a) => S(c, c),
              class: j(["pickerItem", n.modelValue === c ? "active" : ""])
            }, [
              A(r.$slots, "default", { option: c }, void 0, !0)
            ], 10, ge))
          ], 64))), 128))
        ])
      ])
    ], 34));
  }
});
const fl = /* @__PURE__ */ M(be, [["__scopeId", "data-v-af106d79"]]), Ce = { class: "list" }, me = { class: "listHeader" }, Se = ["onClick"], $e = { class: "check" }, Ne = ["checked", "id"], we = ["for"], je = ["onClick"], Ve = { class: "check" }, Ie = ["checked", "id"], _e = ["for"], Oe = ["onClick"], xe = ["onClick"], Le = ["onClick"], Be = ["onClick"], Ae = /* @__PURE__ */ T({
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
    const u = n, e = k(u.modelValue || {}), v = k(""), f = k(null), y = k(void 0);
    z(() => u.modelValue, () => {
      e.value = u.modelValue;
    });
    const I = () => {
      clearTimeout(y.value), y.value = setTimeout(() => {
        var p, r;
        v.value = "", ((p = f.value) == null ? void 0 : p.value) && ((r = f.value) == null ? void 0 : r.value) !== "" && (v.value = f.value.value), h("search", v.value);
      }, 500);
    }, b = B(() => {
      let p = u.options;
      return v.value.length >= 1 && (p = p.filter((r) => {
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
      })), p;
    }), S = (() => {
      let p = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", r = "";
      for (let l = 0; l < 10; l++)
        r += p.charAt(Math.floor(Math.random() * p.length));
      return r;
    })(), _ = (p, r = "") => {
      r !== "" ? e.value.map((l) => l[r]).includes(p[r]) ? e.value.splice(e.value.findIndex((l) => l[r] === p[r]), 1) : e.value.push(p) : e.value.includes(p) ? e.value.splice(e.value.findIndex((l) => l === p), 1) : e.value.push(p), h("update:modelValue", e.value), h("change", e.value, p);
    }, $ = (p) => {
      typeof p == "object" && p !== null && String(u.datatype).toLowerCase() === "string" ? (e.value = p[String(u.dataprop || u.prop)], h("update:modelValue", String(e.value))) : typeof p == "object" && p !== null && String(u.datatype).toLowerCase() === "number" ? (e.value = p[String(u.dataprop || u.prop)], h("update:modelValue", Number(e.value))) : (e.value = p, h("update:modelValue", e.value)), h("change", e.value, p);
    };
    return (p, r) => (o(), i("div", null, [
      d("div", Ce, [
        d("div", me, [
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
          (o(!0), i(N, null, L(g(b), (l, c) => (o(), i(N, {
            key: "option-" + l
          }, [
            typeof l == "string" ? (o(), i("div", {
              key: 0,
              onClick: V((s) => _(l), ["stop"]),
              class: "listItem"
            }, [
              d("div", $e, [
                d("input", {
                  type: "checkbox",
                  class: "checkInput",
                  checked: e.value.includes(l),
                  id: "check-" + (g(S) + String(c)),
                  style: { "pointer-events": "none" }
                }, null, 8, Ne),
                d("label", {
                  class: "checkLabel",
                  for: "check-" + (g(S) + String(c)),
                  style: { "pointer-events": "none" }
                }, m(l), 9, we)
              ])
            ], 8, Se)) : typeof l == "object" && n.prop in l ? (o(), i("div", {
              key: 1,
              onClick: V((s) => _(l, n.prop), ["stop"]),
              class: "listItem"
            }, [
              d("div", Ve, [
                d("input", {
                  type: "checkbox",
                  class: "checkInput",
                  checked: e.value.includes(l),
                  id: "check-" + (g(S) + String(c)),
                  style: { "pointer-events": "none" }
                }, null, 8, Ie),
                d("label", {
                  class: "checkLabel",
                  for: "check-" + (g(S) + String(c)),
                  style: { "pointer-events": "none" }
                }, m(l[n.prop]), 9, _e)
              ])
            ], 8, je)) : (o(), i("div", {
              key: 2,
              onClick: V((s) => _(l), ["stop"]),
              class: j(["listItem", e.value.includes(l) ? "active" : ""])
            }, [
              A(p.$slots, "default", {
                option: l,
                selected: e.value
              }, void 0, !0)
            ], 10, Oe))
          ], 64))), 128))
        ], 4)) : (o(), i("div", {
          key: 1,
          class: "listMenu",
          style: x({ "max-height": Number(n.size) !== 0 ? Number(n.size) * 44 + "px" : "auto" })
        }, [
          (o(!0), i(N, null, L(g(b), (l, c) => (o(), i(N, {
            key: "option-" + l
          }, [
            typeof l == "string" ? (o(), i("div", {
              key: 0,
              onClick: (s) => $(l),
              class: j(["listItem", e.value === l ? "active" : ""])
            }, m(l), 11, xe)) : typeof l == "object" && n.prop in l ? (o(), i("div", {
              key: 1,
              onClick: (s) => $(l),
              class: j(["listItem", e.value[n.prop] === l[n.prop] || String(l[n.dataprop || n.prop]) === String(e.value) ? "active" : ""])
            }, m(l[n.prop]), 11, Le)) : (o(), i("div", {
              key: 2,
              onClick: V((s) => $(l), ["stop"]),
              class: j(["listItem", e.value === l ? "active" : ""])
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
const pl = /* @__PURE__ */ M(Ae, [["__scopeId", "data-v-d7fed8bc"]]), Te = (n) => (E("data-v-3acd22f1"), n = n(), H(), n), ze = { class: "tagWrap" }, Me = { class: "tags" }, Re = { class: "tag groupItem" }, Fe = ["onClick"], We = /* @__PURE__ */ Te(() => /* @__PURE__ */ d("svg", {
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
  setup(n, { emit: h }) {
    const u = n, e = k(!1), v = k(""), f = k(null), y = D(u.modelValue || []), I = k(u.options || []), b = k(u.separator || ","), C = k(u.prop || "value"), S = B(() => {
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
    }), _ = () => {
      f.value.focus();
    }, $ = (r) => {
      if (r.key !== "Enter" && S.value.length >= 1 ? e.value = !0 : e.value = !1, v.value.endsWith(b.value) || r.key === "Enter") {
        const l = v.value.replace(b.value, "");
        y.includes(l) || (y.push(l), I.value.includes(l) && (I.value = I.value.filter((c) => typeof c == "string" && c !== l ? !0 : typeof c == "object" && C.value in c && c[C.value] !== l))), v.value = "", h("update:modelValue", y);
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
    const p = (r) => {
      r.target.style.display = "none", e.value = !1;
    };
    return (r, l) => (o(), i("div", {
      class: j(["taggable", { active: e.value === !0 }])
    }, [
      d("div", {
        class: "tagBackdrop",
        style: x({ display: e.value ? "block" : "none" }),
        onClick: p
      }, null, 4),
      d("div", ze, [
        d("div", {
          class: "input tagToggler",
          onClick: _
        }, [
          d("div", Me, [
            (o(!0), i(N, null, L(y, (c, s) => (o(), i("div", {
              key: "tag-" + s,
              class: "group"
            }, [
              d("div", Re, [
                typeof c == "string" && c !== "" ? (o(), i(N, { key: 0 }, [
                  F(m(c), 1)
                ], 64)) : typeof c == "object" && C.value in c ? (o(), i(N, { key: 1 }, [
                  F(m(c[C.value]), 1)
                ], 64)) : (o(), i(N, { key: 2 }, [
                  F(m(n.placeholder), 1)
                ], 64))
              ]),
              d("div", {
                class: "tag groupItem",
                onClick: (a) => y.splice(s, 1)
              }, Ee, 8, Fe)
            ]))), 128)),
            R(d("input", {
              type: "search",
              ref_key: "inputRef",
              ref: f,
              "onUpdate:modelValue": l[0] || (l[0] = (c) => v.value = c),
              class: "tagInput",
              onInput: l[1] || (l[1] = (c) => $(c)),
              onKeyup: l[2] || (l[2] = K((c) => $(c), ["enter"])),
              placeholder: "Add new tag"
            }, null, 544), [
              [U, v.value]
            ])
          ])
        ]),
        d("div", He, [
          (o(!0), i(N, null, L(g(S), (c, s) => (o(), i(N, {
            key: "option-" + c
          }, [
            typeof c == "string" ? (o(), i("div", {
              key: 0,
              onClick: (a) => {
                v.value = c + ",", $(a);
              },
              class: "tagItem"
            }, m(c), 9, Ue)) : typeof c == "object" && C.value in c ? (o(), i("div", {
              key: 1,
              onClick: (a) => {
                v.value = c[C.value] + ",", $(a);
              },
              class: "tagItem"
            }, m(c[C.value]), 9, De)) : (o(), i("div", {
              key: 2,
              onClick: (a) => {
                v.value = c + ",", $(a);
              },
              class: "tagItem"
            }, [
              A(r.$slots, "default", { option: c }, void 0, !0)
            ], 8, Ke))
          ], 64))), 128))
        ])
      ])
    ], 2));
  }
});
const hl = /* @__PURE__ */ M(Pe, [["__scopeId", "data-v-3acd22f1"]]), qe = { class: "pickerOverlay pickerWrap" }, Ge = { class: "pickerContent" }, Je = { class: "pickerHeader" }, Qe = ["onClick"], Xe = { class: "check" }, Ye = ["checked", "id"], Ze = ["for"], el = ["onClick"], ll = { class: "check" }, tl = ["checked", "id"], al = ["for"], sl = ["onClick"], ul = ["onClick"], nl = ["onClick"], rl = ["onClick"], cl = { class: "pickerFooter" }, ol = { class: "tedirCategoryAdd" }, il = /* @__PURE__ */ T({
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
    const u = n, e = k(u.modelValue || {}), v = k(!1), f = k(""), y = k(null), I = k(void 0), b = k("");
    z(() => u.modelValue, () => {
      e.value = u.modelValue;
    });
    const C = () => {
      clearTimeout(I.value), I.value = setTimeout(() => {
        var s, a;
        f.value = "", ((s = y.value) == null ? void 0 : s.value) && ((a = y.value) == null ? void 0 : a.value) !== "" && (f.value = y.value.value), h("search", f.value);
      }, 500);
    }, S = B(() => {
      let s = u.options;
      return f.value.length >= 1 && (s = s.filter((a) => {
        if (isNaN(a) === !1 && Number(a) === Number(f.value))
          return !0;
        if (typeof a == "string" && a.toLowerCase().includes(f.value.toLowerCase()))
          return !0;
        if (typeof a == "object" && a !== null && Object.prototype.toString.call(a) === "[object Object]")
          for (const t of Object.keys(a)) {
            if (isNaN(a[t]) === !1 && Number(a[t]) === Number(f.value))
              return !0;
            if (typeof a[t] == "string" && a[t].toLowerCase().includes(f.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), s;
    }), $ = ((s = 10) => {
      let a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", t = "";
      for (let w = 0; w < s; w++)
        t += a.charAt(Math.floor(Math.random() * a.length));
      return t;
    })(), p = (s) => {
      var a;
      s.target.style.display = "none", v.value = !1, (a = y.value) != null && a.value && (y.value.value = "", f.value = "");
    }, r = (s, a = "") => {
      a !== "" ? e.value.map((t) => t[a]).includes(s[a]) ? e.value.splice(e.value.findIndex((t) => t[a] === s[a]), 1) : e.value.push(s) : e.value.includes(s) ? e.value.splice(e.value.findIndex((t) => t === s), 1) : e.value.push(s), h("update:modelValue", e.value), h("change", e.value, s);
    }, l = (s) => {
      typeof s == "object" && s !== null && String(u.datatype).toLowerCase() === "string" ? (e.value = s[String(u.dataprop || u.prop)], h("update:modelValue", String(e.value))) : typeof s == "object" && s !== null && String(u.datatype).toLowerCase() === "number" ? (e.value = s[String(u.dataprop || u.prop)], h("update:modelValue", Number(e.value))) : (e.value = s, h("update:modelValue", e.value)), v.value = !1, h("change", e.value, s);
    }, c = B(() => {
      let s = (u == null ? void 0 : u.placeholder) || "-- Select option --";
      if (S.value.length >= 1)
        if (typeof e.value == "number") {
          let a = S.value.filter((t) => Number(t[String(u.dataprop || u.prop)]) === Number(e.value));
          typeof S.value[0] == "object" && a.length >= 1 ? s = a[0][String(u.prop)] : typeof S.value[0] == "number" && (s = e.value);
        } else if (typeof e.value == "string") {
          let a = S.value.filter((t) => String(t[String(u.dataprop || u.prop)]) === e.value);
          typeof S.value[0] == "object" && a.length >= 1 ? s = a[0][String(u.prop)] : typeof S.value[0] == "string" && e.value !== "" && (s = e.value);
        } else
          typeof e.value == "object" && (Array.isArray(e.value) && e.value.length >= 1 ? typeof e.value[0] == "object" && String(u.prop) in e.value[0] ? s = e.value.map((a) => a[String(u.prop)]).join(", ") : s = e.value.join(", ") : e.value !== null && String(u.prop) in e.value && (s = e.value[String(u.prop)]));
      return s;
    });
    return (s, a) => (o(), i("div", {
      class: j(["picker suggestion tedirCategory", { active: v.value, pickerUp: n.up }])
    }, [
      d("div", {
        class: "pickerBackdrop",
        style: x({ display: v.value ? "block" : "none" }),
        onClick: p
      }, null, 4),
      d("div", qe, [
        d("div", {
          class: "select pickerToggler",
          onClick: a[0] || (a[0] = (t) => v.value = !v.value)
        }, m(g(c)), 1),
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
            style: x({ "max-height": Number(n.size) !== 0 ? Number(n.size) * 42 + "px" : "auto" })
          }, [
            (o(!0), i(N, null, L(g(S), (t, w) => (o(), i(N, {
              key: "option-" + t
            }, [
              typeof t == "string" ? (o(), i("div", {
                key: 0,
                onClick: V((O) => r(t), ["stop"]),
                class: "pickerItem"
              }, [
                d("div", Xe, [
                  d("input", {
                    type: "checkbox",
                    class: "checkInput",
                    checked: e.value.includes(t),
                    id: "check-" + (g($) + String(w)),
                    style: { "pointer-events": "none" }
                  }, null, 8, Ye),
                  d("label", {
                    class: "checkLabel",
                    for: "check-" + (g($) + String(w)),
                    style: { "pointer-events": "none" }
                  }, m(t), 9, Ze)
                ])
              ], 8, Qe)) : typeof t == "object" && t !== null && n.prop in t ? (o(), i("div", {
                key: 1,
                onClick: V((O) => r(t, n.prop), ["stop"]),
                class: "pickerItem"
              }, [
                d("div", ll, [
                  d("input", {
                    type: "checkbox",
                    class: "checkInput",
                    checked: e.value.includes(t),
                    id: "check-" + (g($) + String(w)),
                    style: { "pointer-events": "none" }
                  }, null, 8, tl),
                  d("label", {
                    class: "checkLabel",
                    for: "check-" + (g($) + String(w)),
                    style: { "pointer-events": "none" }
                  }, m(t[n.prop]), 9, al)
                ])
              ], 8, el)) : (o(), i("div", {
                key: 2,
                onClick: V((O) => r(t), ["stop"]),
                class: "pickerItem"
              }, [
                A(s.$slots, "default", {
                  option: t,
                  selected: e.value
                }, void 0, !0)
              ], 8, sl))
            ], 64))), 128))
          ], 4)) : (o(), i("div", {
            key: 1,
            class: "pickerMenu",
            style: x({ "max-height": Number(n.size) !== 0 ? Number(n.size) * 42 + "px" : "auto" })
          }, [
            (o(!0), i(N, null, L(g(S), (t, w) => (o(), i(N, {
              key: "option-" + t
            }, [
              typeof t == "string" ? (o(), i("div", {
                key: 0,
                onClick: (O) => l(t),
                class: j(["pickerItem", e.value === t ? "active" : ""])
              }, m(t), 11, ul)) : typeof t == "object" && t !== null && n.prop in t ? (o(), i("div", {
                key: 1,
                onClick: (O) => l(t),
                class: j(["pickerItem", e.value[n.prop] === t[n.prop] || String(t[n.dataprop || n.prop]) === String(e.value) ? "active" : ""])
              }, m(t[n.prop]), 11, nl)) : (o(), i("div", {
                key: 2,
                onClick: V((O) => l(t), ["stop"]),
                class: j(["pickerItem", e.value === t ? "active" : ""])
              }, [
                A(s.$slots, "default", {
                  option: t,
                  selected: e.value
                }, void 0, !0)
              ], 10, rl))
            ], 64))), 128))
          ], 4)),
          d("div", cl, [
            d("div", ol, [
              R(d("input", {
                type: "text",
                "onUpdate:modelValue": a[1] || (a[1] = (t) => b.value = t),
                class: "input",
                placeholder: "Add New Category"
              }, null, 512), [
                [U, b.value]
              ]),
              d("button", {
                type: "button",
                class: "button tedirCategoryButton",
                onClick: a[2] || (a[2] = (t) => {
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
