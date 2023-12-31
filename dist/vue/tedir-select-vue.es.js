import { defineComponent as T, ref as b, watch as R, computed as A, openBlock as r, createElementBlock as o, normalizeClass as _, createElementVNode as d, normalizeStyle as O, toDisplayString as m, unref as S, Fragment as $, withDirectives as M, withModifiers as V, vShow as W, renderList as L, renderSlot as B, pushScopeId as E, popScopeId as H, reactive as D, createTextVNode as F, withKeys as K, vModelText as U } from "vue";
const P = (s) => (E("data-v-9d6782b2"), s = s(), H(), s), q = { class: "pickerWrap" }, G = { class: "pickerContent" }, J = { class: "pickerHeader" }, Q = {
  key: 0,
  class: "tedirSelectLoading"
}, X = /* @__PURE__ */ P(() => /* @__PURE__ */ d("span", { class: "spinner" }, null, -1)), Y = [
  X
], Z = ["onClick"], ee = { class: "check" }, le = ["checked", "id"], te = ["for"], ae = ["onClick"], se = { class: "check" }, ue = ["checked", "id"], ce = ["for"], ne = ["onClick"], re = ["onClick"], oe = ["onClick"], ie = ["onClick"], de = /* @__PURE__ */ T({
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
  setup(s, { emit: k }) {
    const c = s, e = b(c.modelValue || {}), i = b(!1), h = b(""), g = b(null), j = b(void 0);
    R(() => c.modelValue, () => {
      e.value = c.modelValue;
    });
    const I = () => {
      clearTimeout(j.value), j.value = setTimeout(() => {
        var t, a;
        h.value = "", ((t = g.value) == null ? void 0 : t.value) && ((a = g.value) == null ? void 0 : a.value) !== "" && (h.value = g.value.value), k("search", h.value);
      }, 500);
    }, C = A(() => {
      let t = c.options;
      return h.value.length >= 1 && (t = t.filter((a) => {
        if (isNaN(a) === !1 && Number(a) === Number(h.value))
          return !0;
        if (typeof a == "string" && a.toLowerCase().includes(h.value.toLowerCase()))
          return !0;
        if (typeof a == "object" && a !== null && Object.prototype.toString.call(a) === "[object Object]")
          for (const l of Object.keys(a)) {
            if (isNaN(a[l]) === !1 && Number(a[l]) === Number(h.value))
              return !0;
            if (typeof a[l] == "string" && a[l].toLowerCase().includes(h.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), t;
    }), y = ((t = 10) => {
      let a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", l = "";
      for (let w = 0; w < t; w++)
        l += a.charAt(Math.floor(Math.random() * a.length));
      return l;
    })(), p = (t) => {
      var a;
      t.target.style.display = "none", i.value = !1, (a = g.value) != null && a.value && (g.value.value = "", h.value = "");
    }, n = (t) => {
      e.value = t, k("update:modelValue", e.value), k("change", e.value, t), i.value = !1;
    }, v = (t, a = "") => {
      a !== "" ? e.value.map((l) => l[a]).includes(t[a]) ? e.value.splice(e.value.findIndex((l) => l[a] === t[a]), 1) : e.value.push(t) : e.value.includes(t) ? e.value.splice(e.value.findIndex((l) => l === t), 1) : e.value.push(t), k("update:modelValue", e.value), k("change", e.value, t);
    }, u = (t) => {
      typeof t == "object" && t !== null && String(c.datatype).toLowerCase() === "string" ? (e.value = t[String(c.dataprop || c.prop)], k("update:modelValue", String(e.value))) : typeof t == "object" && t !== null && String(c.datatype).toLowerCase() === "number" ? (e.value = t[String(c.dataprop || c.prop)], k("update:modelValue", Number(e.value))) : (e.value = t, k("update:modelValue", e.value)), i.value = !1, k("change", e.value, t);
    }, f = A(() => {
      let t = (c == null ? void 0 : c.placeholder) || "-- Select option --";
      if (C.value.length >= 1)
        if (typeof e.value == "number") {
          let a = C.value.filter((l) => Number(l[String(c.dataprop || c.prop)]) === Number(e.value));
          typeof C.value[0] == "object" && a.length >= 1 ? t = a[0][String(c.prop)] : typeof C.value[0] == "number" && (t = e.value);
        } else if (typeof e.value == "string") {
          let a = C.value.filter((l) => String(l[String(c.dataprop || c.prop)]) === e.value);
          typeof C.value[0] == "object" && a.length >= 1 ? t = a[0][String(c.prop)] : typeof C.value[0] == "string" && e.value !== "" && (t = e.value);
        } else
          typeof e.value == "object" && (Array.isArray(e.value) && e.value.length >= 1 ? typeof e.value[0] == "object" && String(c.prop) in e.value[0] ? t = e.value.map((a) => a[String(c.prop)]).join(", ") : t = e.value.join(", ") : e.value !== null && String(c.prop) in e.value && (t = e.value[String(c.prop)]));
      return t;
    });
    return (t, a) => (r(), o("div", {
      class: _(["picker suggestion", { active: i.value, pickerUp: s.up }])
    }, [
      d("div", {
        class: "pickerBackdrop",
        style: O({ display: i.value ? "block" : "none" }),
        onClick: p
      }, null, 4),
      d("div", q, [
        d("div", {
          class: "select pickerToggler",
          onClick: a[0] || (a[0] = (l) => i.value = !i.value)
        }, m(S(f)), 1),
        d("div", G, [
          d("div", J, [
            d("input", {
              type: "search",
              ref_key: "searchRef",
              ref: g,
              onInput: I,
              class: "input"
            }, null, 544)
          ]),
          s.loading ? (r(), o("div", Q, Y)) : (r(), o($, { key: 1 }, [
            Array.isArray(e.value) ? (r(), o("div", {
              key: 0,
              class: "pickerMenu",
              style: O({ "max-height": Number(s.size) !== 0 ? Number(s.size) * 42 + "px" : "auto" })
            }, [
              M(d("div", {
                onClick: a[1] || (a[1] = V((l) => n(typeof s.modelValue == "object" ? Array.isArray(s.modelValue) ? [] : {} : ""), ["stop"])),
                class: "pickerItem"
              }, m(s.placeholder || "-- Select Option --"), 513), [
                [W, s.defaultOption]
              ]),
              (r(!0), o($, null, L(S(C), (l, w) => (r(), o($, {
                key: "option-" + l
              }, [
                typeof l == "string" && s.type !== "slot" ? (r(), o("div", {
                  key: 0,
                  onClick: V((x) => v(l), ["stop"]),
                  class: "pickerItem"
                }, [
                  d("div", ee, [
                    d("input", {
                      type: "checkbox",
                      class: "checkInput",
                      checked: e.value.includes(l),
                      id: "check-" + (S(y) + String(w)),
                      style: { "pointer-events": "none" }
                    }, null, 8, le),
                    d("label", {
                      class: "checkLabel",
                      for: "check-" + (S(y) + String(w)),
                      style: { "pointer-events": "none" }
                    }, m(l), 9, te)
                  ])
                ], 8, Z)) : typeof l == "object" && l !== null && s.prop in l && s.type !== "slot" ? (r(), o("div", {
                  key: 1,
                  onClick: V((x) => v(l, s.prop), ["stop"]),
                  class: "pickerItem"
                }, [
                  d("div", se, [
                    d("input", {
                      type: "checkbox",
                      class: "checkInput",
                      checked: e.value.includes(l),
                      id: "check-" + (S(y) + String(w)),
                      style: { "pointer-events": "none" }
                    }, null, 8, ue),
                    d("label", {
                      class: "checkLabel",
                      for: "check-" + (S(y) + String(w)),
                      style: { "pointer-events": "none" }
                    }, m(l[s.prop]), 9, ce)
                  ])
                ], 8, ae)) : (r(), o("div", {
                  key: 2,
                  onClick: V((x) => v(l), ["stop"]),
                  class: "pickerItem"
                }, [
                  B(t.$slots, "default", {
                    option: l,
                    selected: e.value
                  }, void 0, !0)
                ], 8, ne))
              ], 64))), 128))
            ], 4)) : (r(), o("div", {
              key: 1,
              class: "pickerMenu",
              style: O({ "max-height": Number(s.size) !== 0 ? Number(s.size) * 42 + "px" : "auto" })
            }, [
              M(d("div", {
                onClick: a[2] || (a[2] = V((l) => n(typeof s.modelValue == "object" ? Array.isArray(s.modelValue) ? [] : {} : ""), ["stop"])),
                class: "pickerItem"
              }, m(s.placeholder || "-- Select Option --"), 513), [
                [W, s.defaultOption]
              ]),
              (r(!0), o($, null, L(S(C), (l, w) => (r(), o($, {
                key: "option-" + l
              }, [
                typeof l == "string" && s.type !== "slot" ? (r(), o("div", {
                  key: 0,
                  onClick: (x) => u(l),
                  class: _(["pickerItem", e.value === l ? "active" : ""])
                }, m(l), 11, re)) : typeof l == "object" && l !== null && s.prop in l && s.type !== "slot" ? (r(), o("div", {
                  key: 1,
                  onClick: (x) => u(l),
                  class: _(["pickerItem", e.value[s.prop] === l[s.prop] || String(l[s.dataprop || s.prop]) === String(e.value) ? "active" : ""])
                }, m(l[s.prop]), 11, oe)) : (r(), o("div", {
                  key: 2,
                  onClick: V((x) => u(l), ["stop"]),
                  class: _(["pickerItem", e.value === l ? "active" : ""])
                }, [
                  B(t.$slots, "default", {
                    option: l,
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
const z = (s, k) => {
  const c = s.__vccOpts || s;
  for (const [e, i] of k)
    c[e] = i;
  return c;
}, il = /* @__PURE__ */ z(de, [["__scopeId", "data-v-9d6782b2"]]), ve = { class: "pickerWrap" }, fe = { class: "pickerContent pickerSizing" }, pe = ["onClick"], he = ["onClick"], ke = ["onClick"], ye = /* @__PURE__ */ T({
  __name: "ComboBox",
  props: {
    modelValue: { default: null },
    options: { default: [] },
    prop: { default: "value" },
    placeholder: { default: "Search option" },
    size: { default: 0 },
    select: { type: Boolean, default: !1 },
    up: { type: Boolean, default: !1 },
    serverSearch: { type: Boolean, default: !1 },
    emptySearch: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change", "search"],
  setup(s, { emit: k }) {
    const c = s, e = b(!1), i = b(""), h = b(null), g = b(void 0), j = A(() => {
      let y = c.options;
      return i.value.length >= 1 && c.serverSearch !== !0 && (y = y.filter((p) => {
        if (isNaN(p) === !1 && Number(p) === Number(i.value))
          return !0;
        if (typeof p == "string" && p.toLowerCase().includes(i.value.toLowerCase()))
          return !0;
        if (typeof p == "object" && p !== null && Object.prototype.toString.call(p) === "[object Object]")
          for (const n of Object.keys(p)) {
            if (isNaN(p[n]) === !1 && Number(p[n]) === Number(i.value))
              return !0;
            if (typeof p[n] == "string" && p[n].toLowerCase().includes(i.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), y;
    }), I = () => {
      clearTimeout(g.value), g.value = setTimeout(() => {
        var y, p;
        i.value = "", ((y = h.value) == null ? void 0 : y.value) && ((p = h.value) == null ? void 0 : p.value) !== "" && (i.value = h.value.value), k("search", i.value), j.value.length >= 1 && i.value !== "" || c.serverSearch == !0 ? e.value = !0 : e.value = !1;
      }, 500);
    }, C = (y, p) => {
      (typeof y == "string" || isNaN(y) === !1) && (i.value = y, h.value.value = y), c.emptySearch == !0 && (i.value = "", h.value.value = "", k("search", i.value)), k("update:modelValue", p), k("change", y, p), e.value = !1;
    }, N = (y) => {
      y.target.style.display = "none", e.value = !1;
    };
    return (y, p) => (r(), o("div", {
      class: _(["picker suggestion", { active: e.value, pickerUp: s.up }])
    }, [
      d("div", {
        class: "pickerBackdrop",
        style: O({ display: e.value ? "block" : "none" }),
        onClick: N
      }, null, 4),
      d("div", ve, [
        s.select ? (r(), o("input", {
          key: 0,
          type: "search",
          ref_key: "searchRef",
          ref: h,
          onInput: I,
          onClick: p[0] || (p[0] = (n) => e.value = !0),
          class: "select"
        }, null, 544)) : (r(), o("input", {
          key: 1,
          type: "search",
          ref_key: "searchRef",
          ref: h,
          onInput: I,
          onClick: p[1] || (p[1] = (n) => S(j).length >= 1 && i.value !== "" ? e.value = !0 : e.value = !1),
          class: "input"
        }, null, 544)),
        d("div", fe, [
          (r(!0), o($, null, L(S(j), (n, v) => (r(), o($, {
            key: "option-" + n
          }, [
            typeof n == "string" ? (r(), o("div", {
              key: 0,
              onClick: (u) => C(n, n),
              class: _(["pickerItem", s.modelValue === n ? "active" : ""])
            }, m(n), 11, pe)) : typeof n == "object" && s.prop in n ? (r(), o("div", {
              key: 1,
              onClick: (u) => C(n[s.prop], n),
              class: _(["pickerItem", s.modelValue[s.prop] === n[s.prop] ? "active" : ""])
            }, m(n[s.prop]), 11, he)) : (r(), o("div", {
              key: 2,
              onClick: (u) => C(n, n),
              class: _(["pickerItem", s.modelValue === n ? "active" : ""])
            }, [
              B(y.$slots, "default", { option: n }, void 0, !0)
            ], 10, ke))
          ], 64))), 128))
        ])
      ])
    ], 2));
  }
});
const dl = /* @__PURE__ */ z(ye, [["__scopeId", "data-v-cd73ec9f"]]), ge = { class: "list" }, be = { class: "listHeader" }, Ce = ["onClick"], me = { class: "check" }, Se = ["checked", "id"], $e = ["for"], Ne = ["onClick"], we = { class: "check" }, _e = ["checked", "id"], je = ["for"], Ie = ["onClick"], Ve = ["onClick"], xe = ["onClick"], Oe = ["onClick"], Le = /* @__PURE__ */ T({
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
  setup(s, { emit: k }) {
    const c = s, e = b(c.modelValue || {}), i = b(""), h = b(null), g = b(void 0);
    R(() => c.modelValue, () => {
      e.value = c.modelValue;
    });
    const j = () => {
      clearTimeout(g.value), g.value = setTimeout(() => {
        var n, v;
        i.value = "", ((n = h.value) == null ? void 0 : n.value) && ((v = h.value) == null ? void 0 : v.value) !== "" && (i.value = h.value.value), k("search", i.value);
      }, 500);
    }, I = A(() => {
      let n = c.options;
      return i.value.length >= 1 && (n = n.filter((v) => {
        if (isNaN(v) === !1 && Number(v) === Number(i.value))
          return !0;
        if (typeof v == "string" && v.toLowerCase().includes(i.value.toLowerCase()))
          return !0;
        if (typeof v == "object" && v !== null && Object.prototype.toString.call(v) === "[object Object]")
          for (const u of Object.keys(v)) {
            if (isNaN(v[u]) === !1 && Number(v[u]) === Number(i.value))
              return !0;
            if (typeof v[u] == "string" && v[u].toLowerCase().includes(i.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), n;
    }), N = (() => {
      let n = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", v = "";
      for (let u = 0; u < 10; u++)
        v += n.charAt(Math.floor(Math.random() * n.length));
      return v;
    })(), y = (n, v = "") => {
      v !== "" ? e.value.map((u) => u[v]).includes(n[v]) ? e.value.splice(e.value.findIndex((u) => u[v] === n[v]), 1) : e.value.push(n) : e.value.includes(n) ? e.value.splice(e.value.findIndex((u) => u === n), 1) : e.value.push(n), k("update:modelValue", e.value), k("change", e.value, n);
    }, p = (n) => {
      typeof n == "object" && n !== null && String(c.datatype).toLowerCase() === "string" ? (e.value = n[String(c.dataprop || c.prop)], k("update:modelValue", String(e.value))) : typeof n == "object" && n !== null && String(c.datatype).toLowerCase() === "number" ? (e.value = n[String(c.dataprop || c.prop)], k("update:modelValue", Number(e.value))) : (e.value = n, k("update:modelValue", e.value)), k("change", e.value, n);
    };
    return (n, v) => (r(), o("div", null, [
      d("div", ge, [
        d("div", be, [
          d("input", {
            type: "search",
            ref_key: "searchRef",
            ref: h,
            onInput: j,
            class: "input"
          }, null, 544)
        ]),
        Array.isArray(s.modelValue) ? (r(), o("div", {
          key: 0,
          class: "listMenu",
          style: O({ "max-height": Number(s.size) !== 0 ? Number(s.size) * 44 + "px" : "auto" })
        }, [
          (r(!0), o($, null, L(S(I), (u, f) => (r(), o($, {
            key: "option-" + u
          }, [
            typeof u == "string" ? (r(), o("div", {
              key: 0,
              onClick: V((t) => y(u), ["stop"]),
              class: "listItem"
            }, [
              d("div", me, [
                d("input", {
                  type: "checkbox",
                  class: "checkInput",
                  checked: e.value.includes(u),
                  id: "check-" + (S(N) + String(f)),
                  style: { "pointer-events": "none" }
                }, null, 8, Se),
                d("label", {
                  class: "checkLabel",
                  for: "check-" + (S(N) + String(f)),
                  style: { "pointer-events": "none" }
                }, m(u), 9, $e)
              ])
            ], 8, Ce)) : typeof u == "object" && s.prop in u ? (r(), o("div", {
              key: 1,
              onClick: V((t) => y(u, s.prop), ["stop"]),
              class: "listItem"
            }, [
              d("div", we, [
                d("input", {
                  type: "checkbox",
                  class: "checkInput",
                  checked: e.value.includes(u),
                  id: "check-" + (S(N) + String(f)),
                  style: { "pointer-events": "none" }
                }, null, 8, _e),
                d("label", {
                  class: "checkLabel",
                  for: "check-" + (S(N) + String(f)),
                  style: { "pointer-events": "none" }
                }, m(u[s.prop]), 9, je)
              ])
            ], 8, Ne)) : (r(), o("div", {
              key: 2,
              onClick: V((t) => y(u), ["stop"]),
              class: _(["listItem", e.value.includes(u) ? "active" : ""])
            }, [
              B(n.$slots, "default", {
                option: u,
                selected: e.value
              }, void 0, !0)
            ], 10, Ie))
          ], 64))), 128))
        ], 4)) : (r(), o("div", {
          key: 1,
          class: "listMenu",
          style: O({ "max-height": Number(s.size) !== 0 ? Number(s.size) * 44 + "px" : "auto" })
        }, [
          (r(!0), o($, null, L(S(I), (u, f) => (r(), o($, {
            key: "option-" + u
          }, [
            typeof u == "string" ? (r(), o("div", {
              key: 0,
              onClick: (t) => p(u),
              class: _(["listItem", e.value === u ? "active" : ""])
            }, m(u), 11, Ve)) : typeof u == "object" && s.prop in u ? (r(), o("div", {
              key: 1,
              onClick: (t) => p(u),
              class: _(["listItem", e.value[s.prop] === u[s.prop] || String(u[s.dataprop || s.prop]) === String(e.value) ? "active" : ""])
            }, m(u[s.prop]), 11, xe)) : (r(), o("div", {
              key: 2,
              onClick: V((t) => p(u), ["stop"]),
              class: _(["listItem", e.value === u ? "active" : ""])
            }, [
              B(n.$slots, "default", {
                option: u,
                selected: e.value
              }, void 0, !0)
            ], 10, Oe))
          ], 64))), 128))
        ], 4))
      ])
    ]));
  }
});
const vl = /* @__PURE__ */ z(Le, [["__scopeId", "data-v-d7fed8bc"]]), Be = (s) => (E("data-v-3acd22f1"), s = s(), H(), s), Ae = { class: "tagWrap" }, Te = { class: "tags" }, ze = { class: "tag groupItem" }, Me = ["onClick"], Re = /* @__PURE__ */ Be(() => /* @__PURE__ */ d("svg", {
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
], -1)), Fe = [
  Re
], We = { class: "tagContent" }, Ee = ["onClick"], He = ["onClick"], Ue = ["onClick"], De = /* @__PURE__ */ T({
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
  setup(s, { emit: k }) {
    const c = s, e = b(!1), i = b(""), h = b(null), g = D(c.modelValue || []), j = b(c.options || []), I = b(c.separator || ","), C = b(c.prop || "value"), N = A(() => {
      let v = j.value;
      return i.value.length >= 1 && (v = v.filter((u) => {
        if (isNaN(u) === !1 && Number(u) === Number(i.value))
          return !0;
        if (typeof u == "string" && u.toLowerCase().includes(i.value.toLowerCase()))
          return !0;
        if (typeof u == "object" && u !== null && Object.prototype.toString.call(u) === "[object Object]")
          for (const f of Object.keys(u)) {
            if (isNaN(u[f]) === !1 && Number(u[f]) === Number(i.value))
              return !0;
            if (typeof u[f] == "string" && u[f].toLowerCase().includes(i.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), v;
    }), y = () => {
      h.value.focus();
    }, p = (v) => {
      if (v.key !== "Enter" && N.value.length >= 1 ? e.value = !0 : e.value = !1, i.value.endsWith(I.value) || v.key === "Enter") {
        const u = i.value.replace(I.value, "");
        g.includes(u) || (g.push(u), j.value.includes(u) && (j.value = j.value.filter((f) => typeof f == "string" && f !== u ? !0 : typeof f == "object" && C.value in f && f[C.value] !== u))), i.value = "", k("update:modelValue", g);
      }
    };
    R(i, () => {
      if (h.value !== null) {
        const v = document.createElement("div");
        v.style.width = "max-content", v.style.position = "absolute", v.style.visibility = "hidden";
        const u = i.value.length >= 2 ? i.value : h.value.getAttribute("placeholder");
        v.innerHTML = u.replace(/ /g, "&nbsp;").trim(), document.body.appendChild(v);
        const f = Math.ceil(Number(window.getComputedStyle(v).width.replace("px", ""))) + 30;
        h.value.style.setProperty("width", f + "px"), v.remove();
      }
    });
    const n = (v) => {
      v.target.style.display = "none", e.value = !1;
    };
    return (v, u) => (r(), o("div", {
      class: _(["taggable", { active: e.value === !0 }])
    }, [
      d("div", {
        class: "tagBackdrop",
        style: O({ display: e.value ? "block" : "none" }),
        onClick: n
      }, null, 4),
      d("div", Ae, [
        d("div", {
          class: "input tagToggler",
          onClick: y
        }, [
          d("div", Te, [
            (r(!0), o($, null, L(g, (f, t) => (r(), o("div", {
              key: "tag-" + t,
              class: "group"
            }, [
              d("div", ze, [
                typeof f == "string" && f !== "" ? (r(), o($, { key: 0 }, [
                  F(m(f), 1)
                ], 64)) : typeof f == "object" && C.value in f ? (r(), o($, { key: 1 }, [
                  F(m(f[C.value]), 1)
                ], 64)) : (r(), o($, { key: 2 }, [
                  F(m(s.placeholder), 1)
                ], 64))
              ]),
              d("div", {
                class: "tag groupItem",
                onClick: (a) => g.splice(t, 1)
              }, Fe, 8, Me)
            ]))), 128)),
            M(d("input", {
              type: "search",
              ref_key: "inputRef",
              ref: h,
              "onUpdate:modelValue": u[0] || (u[0] = (f) => i.value = f),
              class: "tagInput",
              onInput: u[1] || (u[1] = (f) => p(f)),
              onKeyup: u[2] || (u[2] = K((f) => p(f), ["enter"])),
              placeholder: "Add new tag"
            }, null, 544), [
              [U, i.value]
            ])
          ])
        ]),
        d("div", We, [
          (r(!0), o($, null, L(S(N), (f, t) => (r(), o($, {
            key: "option-" + f
          }, [
            typeof f == "string" ? (r(), o("div", {
              key: 0,
              onClick: (a) => {
                i.value = f + ",", p(a);
              },
              class: "tagItem"
            }, m(f), 9, Ee)) : typeof f == "object" && C.value in f ? (r(), o("div", {
              key: 1,
              onClick: (a) => {
                i.value = f[C.value] + ",", p(a);
              },
              class: "tagItem"
            }, m(f[C.value]), 9, He)) : (r(), o("div", {
              key: 2,
              onClick: (a) => {
                i.value = f + ",", p(a);
              },
              class: "tagItem"
            }, [
              B(v.$slots, "default", { option: f }, void 0, !0)
            ], 8, Ue))
          ], 64))), 128))
        ])
      ])
    ], 2));
  }
});
const fl = /* @__PURE__ */ z(De, [["__scopeId", "data-v-3acd22f1"]]), Ke = { class: "pickerOverlay pickerWrap" }, Pe = { class: "pickerContent" }, qe = { class: "pickerHeader" }, Ge = ["onClick"], Je = { class: "check" }, Qe = ["checked", "id"], Xe = ["for"], Ye = ["onClick"], Ze = { class: "check" }, el = ["checked", "id"], ll = ["for"], tl = ["onClick"], al = ["onClick"], sl = ["onClick"], ul = ["onClick"], cl = { class: "pickerFooter" }, nl = { class: "tedirCategoryAdd" }, rl = /* @__PURE__ */ T({
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
  setup(s, { emit: k }) {
    const c = s, e = b(c.modelValue || {}), i = b(!1), h = b(""), g = b(null), j = b(void 0), I = b("");
    R(() => c.modelValue, () => {
      e.value = c.modelValue;
    });
    const C = () => {
      clearTimeout(j.value), j.value = setTimeout(() => {
        var t, a;
        h.value = "", ((t = g.value) == null ? void 0 : t.value) && ((a = g.value) == null ? void 0 : a.value) !== "" && (h.value = g.value.value), k("search", h.value);
      }, 500);
    }, N = A(() => {
      let t = c.options;
      return h.value.length >= 1 && (t = t.filter((a) => {
        if (isNaN(a) === !1 && Number(a) === Number(h.value))
          return !0;
        if (typeof a == "string" && a.toLowerCase().includes(h.value.toLowerCase()))
          return !0;
        if (typeof a == "object" && a !== null && Object.prototype.toString.call(a) === "[object Object]")
          for (const l of Object.keys(a)) {
            if (isNaN(a[l]) === !1 && Number(a[l]) === Number(h.value))
              return !0;
            if (typeof a[l] == "string" && a[l].toLowerCase().includes(h.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), t;
    }), p = ((t = 10) => {
      let a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", l = "";
      for (let w = 0; w < t; w++)
        l += a.charAt(Math.floor(Math.random() * a.length));
      return l;
    })(), n = (t) => {
      var a;
      t.target.style.display = "none", i.value = !1, (a = g.value) != null && a.value && (g.value.value = "", h.value = "");
    }, v = (t, a = "") => {
      a !== "" ? e.value.map((l) => l[a]).includes(t[a]) ? e.value.splice(e.value.findIndex((l) => l[a] === t[a]), 1) : e.value.push(t) : e.value.includes(t) ? e.value.splice(e.value.findIndex((l) => l === t), 1) : e.value.push(t), k("update:modelValue", e.value), k("change", e.value, t);
    }, u = (t) => {
      typeof t == "object" && t !== null && String(c.datatype).toLowerCase() === "string" ? (e.value = t[String(c.dataprop || c.prop)], k("update:modelValue", String(e.value))) : typeof t == "object" && t !== null && String(c.datatype).toLowerCase() === "number" ? (e.value = t[String(c.dataprop || c.prop)], k("update:modelValue", Number(e.value))) : (e.value = t, k("update:modelValue", e.value)), i.value = !1, k("change", e.value, t);
    }, f = A(() => {
      let t = (c == null ? void 0 : c.placeholder) || "-- Select option --";
      if (N.value.length >= 1)
        if (typeof e.value == "number") {
          let a = N.value.filter((l) => Number(l[String(c.dataprop || c.prop)]) === Number(e.value));
          typeof N.value[0] == "object" && a.length >= 1 ? t = a[0][String(c.prop)] : typeof N.value[0] == "number" && (t = e.value);
        } else if (typeof e.value == "string") {
          let a = N.value.filter((l) => String(l[String(c.dataprop || c.prop)]) === e.value);
          typeof N.value[0] == "object" && a.length >= 1 ? t = a[0][String(c.prop)] : typeof N.value[0] == "string" && e.value !== "" && (t = e.value);
        } else
          typeof e.value == "object" && (Array.isArray(e.value) && e.value.length >= 1 ? typeof e.value[0] == "object" && String(c.prop) in e.value[0] ? t = e.value.map((a) => a[String(c.prop)]).join(", ") : t = e.value.join(", ") : e.value !== null && String(c.prop) in e.value && (t = e.value[String(c.prop)]));
      return t;
    });
    return (t, a) => (r(), o("div", {
      class: _(["picker suggestion tedirCategory", { active: i.value, pickerUp: s.up }])
    }, [
      d("div", {
        class: "pickerBackdrop",
        style: O({ display: i.value ? "block" : "none" }),
        onClick: n
      }, null, 4),
      d("div", Ke, [
        d("div", {
          class: "select pickerToggler",
          onClick: a[0] || (a[0] = (l) => i.value = !i.value)
        }, m(S(f)), 1),
        d("div", Pe, [
          d("div", qe, [
            d("input", {
              type: "search",
              ref_key: "searchRef",
              ref: g,
              onInput: C,
              class: "input"
            }, null, 544)
          ]),
          Array.isArray(e.value) ? (r(), o("div", {
            key: 0,
            class: "pickerMenu",
            style: O({ "max-height": Number(s.size) !== 0 ? Number(s.size) * 42 + "px" : "auto" })
          }, [
            (r(!0), o($, null, L(S(N), (l, w) => (r(), o($, {
              key: "option-" + l
            }, [
              typeof l == "string" ? (r(), o("div", {
                key: 0,
                onClick: V((x) => v(l), ["stop"]),
                class: "pickerItem"
              }, [
                d("div", Je, [
                  d("input", {
                    type: "checkbox",
                    class: "checkInput",
                    checked: e.value.includes(l),
                    id: "check-" + (S(p) + String(w)),
                    style: { "pointer-events": "none" }
                  }, null, 8, Qe),
                  d("label", {
                    class: "checkLabel",
                    for: "check-" + (S(p) + String(w)),
                    style: { "pointer-events": "none" }
                  }, m(l), 9, Xe)
                ])
              ], 8, Ge)) : typeof l == "object" && l !== null && s.prop in l ? (r(), o("div", {
                key: 1,
                onClick: V((x) => v(l, s.prop), ["stop"]),
                class: "pickerItem"
              }, [
                d("div", Ze, [
                  d("input", {
                    type: "checkbox",
                    class: "checkInput",
                    checked: e.value.includes(l),
                    id: "check-" + (S(p) + String(w)),
                    style: { "pointer-events": "none" }
                  }, null, 8, el),
                  d("label", {
                    class: "checkLabel",
                    for: "check-" + (S(p) + String(w)),
                    style: { "pointer-events": "none" }
                  }, m(l[s.prop]), 9, ll)
                ])
              ], 8, Ye)) : (r(), o("div", {
                key: 2,
                onClick: V((x) => v(l), ["stop"]),
                class: "pickerItem"
              }, [
                B(t.$slots, "default", {
                  option: l,
                  selected: e.value
                }, void 0, !0)
              ], 8, tl))
            ], 64))), 128))
          ], 4)) : (r(), o("div", {
            key: 1,
            class: "pickerMenu",
            style: O({ "max-height": Number(s.size) !== 0 ? Number(s.size) * 42 + "px" : "auto" })
          }, [
            (r(!0), o($, null, L(S(N), (l, w) => (r(), o($, {
              key: "option-" + l
            }, [
              typeof l == "string" ? (r(), o("div", {
                key: 0,
                onClick: (x) => u(l),
                class: _(["pickerItem", e.value === l ? "active" : ""])
              }, m(l), 11, al)) : typeof l == "object" && l !== null && s.prop in l ? (r(), o("div", {
                key: 1,
                onClick: (x) => u(l),
                class: _(["pickerItem", e.value[s.prop] === l[s.prop] || String(l[s.dataprop || s.prop]) === String(e.value) ? "active" : ""])
              }, m(l[s.prop]), 11, sl)) : (r(), o("div", {
                key: 2,
                onClick: V((x) => u(l), ["stop"]),
                class: _(["pickerItem", e.value === l ? "active" : ""])
              }, [
                B(t.$slots, "default", {
                  option: l,
                  selected: e.value
                }, void 0, !0)
              ], 10, ul))
            ], 64))), 128))
          ], 4)),
          d("div", cl, [
            d("div", nl, [
              M(d("input", {
                type: "text",
                "onUpdate:modelValue": a[1] || (a[1] = (l) => I.value = l),
                class: "input",
                placeholder: "Add New Category"
              }, null, 512), [
                [U, I.value]
              ]),
              d("button", {
                type: "button",
                class: "button tedirCategoryButton",
                onClick: a[2] || (a[2] = (l) => {
                  k("add", I.value), I.value = "";
                })
              }, "Save")
            ])
          ])
        ])
      ])
    ], 2));
  }
});
const pl = /* @__PURE__ */ z(rl, [["__scopeId", "data-v-9bd9abf8"]]);
export {
  pl as CategoryBox,
  dl as ComboBox,
  vl as ListBox,
  il as SelectBox,
  fl as TagBox
};
