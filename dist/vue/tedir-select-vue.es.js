import { defineComponent as T, ref as b, watch as R, computed as A, openBlock as r, createElementBlock as o, normalizeClass as j, createElementVNode as v, normalizeStyle as O, toDisplayString as m, unref as S, withDirectives as M, withModifiers as V, vShow as W, Fragment as N, renderList as L, renderSlot as B, reactive as H, createTextVNode as F, withKeys as U, vModelText as E, pushScopeId as D, popScopeId as K } from "vue";
const P = { class: "pickerWrap" }, q = { class: "pickerContent" }, G = { class: "pickerHeader" }, J = ["onClick"], Q = { class: "check" }, X = ["checked", "id"], Y = ["for"], Z = ["onClick"], ee = { class: "check" }, le = ["checked", "id"], te = ["for"], ae = ["onClick"], se = ["onClick"], ue = ["onClick"], ce = ["onClick"], ne = /* @__PURE__ */ T({
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
    defaultOption: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change", "search"],
  setup(s, { emit: k }) {
    const c = s, e = b(c.modelValue || {}), i = b(!1), h = b(""), g = b(null), I = b(void 0);
    R(() => c.modelValue, () => {
      e.value = c.modelValue;
    });
    const _ = () => {
      clearTimeout(I.value), I.value = setTimeout(() => {
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
    }, d = (t, a = "") => {
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
      class: j(["picker suggestion", { active: i.value, pickerUp: s.up }])
    }, [
      v("div", {
        class: "pickerBackdrop",
        style: O({ display: i.value ? "block" : "none" }),
        onClick: p
      }, null, 4),
      v("div", P, [
        v("div", {
          class: "select pickerToggler",
          onClick: a[0] || (a[0] = (l) => i.value = !i.value)
        }, m(S(f)), 1),
        v("div", q, [
          v("div", G, [
            v("input", {
              type: "search",
              ref_key: "searchRef",
              ref: g,
              onInput: _,
              class: "input"
            }, null, 544)
          ]),
          Array.isArray(e.value) ? (r(), o("div", {
            key: 0,
            class: "pickerMenu",
            style: O({ "max-height": Number(s.size) !== 0 ? Number(s.size) * 42 + "px" : "auto" })
          }, [
            M(v("div", {
              onClick: a[1] || (a[1] = V((l) => n(typeof s.modelValue == "object" ? Array.isArray(s.modelValue) ? [] : {} : ""), ["stop"])),
              class: "pickerItem"
            }, m(s.placeholder || "-- Select Option --"), 513), [
              [W, s.defaultOption]
            ]),
            (r(!0), o(N, null, L(S(C), (l, w) => (r(), o(N, {
              key: "option-" + l
            }, [
              typeof l == "string" && s.type !== "slot" ? (r(), o("div", {
                key: 0,
                onClick: V((x) => d(l), ["stop"]),
                class: "pickerItem"
              }, [
                v("div", Q, [
                  v("input", {
                    type: "checkbox",
                    class: "checkInput",
                    checked: e.value.includes(l),
                    id: "check-" + (S(y) + String(w)),
                    style: { "pointer-events": "none" }
                  }, null, 8, X),
                  v("label", {
                    class: "checkLabel",
                    for: "check-" + (S(y) + String(w)),
                    style: { "pointer-events": "none" }
                  }, m(l), 9, Y)
                ])
              ], 8, J)) : typeof l == "object" && l !== null && s.prop in l && s.type !== "slot" ? (r(), o("div", {
                key: 1,
                onClick: V((x) => d(l, s.prop), ["stop"]),
                class: "pickerItem"
              }, [
                v("div", ee, [
                  v("input", {
                    type: "checkbox",
                    class: "checkInput",
                    checked: e.value.includes(l),
                    id: "check-" + (S(y) + String(w)),
                    style: { "pointer-events": "none" }
                  }, null, 8, le),
                  v("label", {
                    class: "checkLabel",
                    for: "check-" + (S(y) + String(w)),
                    style: { "pointer-events": "none" }
                  }, m(l[s.prop]), 9, te)
                ])
              ], 8, Z)) : (r(), o("div", {
                key: 2,
                onClick: V((x) => d(l), ["stop"]),
                class: "pickerItem"
              }, [
                B(t.$slots, "default", {
                  option: l,
                  selected: e.value
                }, void 0, !0)
              ], 8, ae))
            ], 64))), 128))
          ], 4)) : (r(), o("div", {
            key: 1,
            class: "pickerMenu",
            style: O({ "max-height": Number(s.size) !== 0 ? Number(s.size) * 42 + "px" : "auto" })
          }, [
            M(v("div", {
              onClick: a[2] || (a[2] = V((l) => n(typeof s.modelValue == "object" ? Array.isArray(s.modelValue) ? [] : {} : ""), ["stop"])),
              class: "pickerItem"
            }, m(s.placeholder || "-- Select Option --"), 513), [
              [W, s.defaultOption]
            ]),
            (r(!0), o(N, null, L(S(C), (l, w) => (r(), o(N, {
              key: "option-" + l
            }, [
              typeof l == "string" && s.type !== "slot" ? (r(), o("div", {
                key: 0,
                onClick: (x) => u(l),
                class: j(["pickerItem", e.value === l ? "active" : ""])
              }, m(l), 11, se)) : typeof l == "object" && l !== null && s.prop in l && s.type !== "slot" ? (r(), o("div", {
                key: 1,
                onClick: (x) => u(l),
                class: j(["pickerItem", e.value[s.prop] === l[s.prop] || String(l[s.dataprop || s.prop]) === String(e.value) ? "active" : ""])
              }, m(l[s.prop]), 11, ue)) : (r(), o("div", {
                key: 2,
                onClick: V((x) => u(l), ["stop"]),
                class: j(["pickerItem", e.value === l ? "active" : ""])
              }, [
                B(t.$slots, "default", {
                  option: l,
                  selected: e.value
                }, void 0, !0)
              ], 10, ce))
            ], 64))), 128))
          ], 4))
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
}, cl = /* @__PURE__ */ z(ne, [["__scopeId", "data-v-eef682a4"]]), re = { class: "pickerWrap" }, oe = { class: "pickerContent pickerSizing" }, ie = ["onClick"], de = ["onClick"], ve = ["onClick"], fe = /* @__PURE__ */ T({
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
    const c = s, e = b(!1), i = b(""), h = b(null), g = b(void 0), I = A(() => {
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
    }), _ = () => {
      clearTimeout(g.value), g.value = setTimeout(() => {
        var y, p;
        i.value = "", ((y = h.value) == null ? void 0 : y.value) && ((p = h.value) == null ? void 0 : p.value) !== "" && (i.value = h.value.value), k("search", i.value), I.value.length >= 1 && i.value !== "" || c.serverSearch == !0 ? e.value = !0 : e.value = !1;
      }, 500);
    }, C = (y, p) => {
      (typeof y == "string" || isNaN(y) === !1) && (i.value = y, h.value.value = y), c.emptySearch == !0 && (i.value = "", h.value.value = "", k("search", i.value)), k("update:modelValue", p), k("change", y, p), e.value = !1;
    }, $ = (y) => {
      y.target.style.display = "none", e.value = !1;
    };
    return (y, p) => (r(), o("div", {
      class: j(["picker suggestion", { active: e.value, pickerUp: s.up }])
    }, [
      v("div", {
        class: "pickerBackdrop",
        style: O({ display: e.value ? "block" : "none" }),
        onClick: $
      }, null, 4),
      v("div", re, [
        s.select ? (r(), o("input", {
          key: 0,
          type: "search",
          ref_key: "searchRef",
          ref: h,
          onInput: _,
          onClick: p[0] || (p[0] = (n) => e.value = !0),
          class: "select"
        }, null, 544)) : (r(), o("input", {
          key: 1,
          type: "search",
          ref_key: "searchRef",
          ref: h,
          onInput: _,
          onClick: p[1] || (p[1] = (n) => S(I).length >= 1 && i.value !== "" ? e.value = !0 : e.value = !1),
          class: "input"
        }, null, 544)),
        v("div", oe, [
          (r(!0), o(N, null, L(S(I), (n, d) => (r(), o(N, {
            key: "option-" + n
          }, [
            typeof n == "string" ? (r(), o("div", {
              key: 0,
              onClick: (u) => C(n, n),
              class: j(["pickerItem", s.modelValue === n ? "active" : ""])
            }, m(n), 11, ie)) : typeof n == "object" && s.prop in n ? (r(), o("div", {
              key: 1,
              onClick: (u) => C(n[s.prop], n),
              class: j(["pickerItem", s.modelValue[s.prop] === n[s.prop] ? "active" : ""])
            }, m(n[s.prop]), 11, de)) : (r(), o("div", {
              key: 2,
              onClick: (u) => C(n, n),
              class: j(["pickerItem", s.modelValue === n ? "active" : ""])
            }, [
              B(y.$slots, "default", { option: n }, void 0, !0)
            ], 10, ve))
          ], 64))), 128))
        ])
      ])
    ], 2));
  }
});
const nl = /* @__PURE__ */ z(fe, [["__scopeId", "data-v-cd73ec9f"]]), pe = { class: "list" }, he = { class: "listHeader" }, ke = ["onClick"], ye = { class: "check" }, ge = ["checked", "id"], be = ["for"], Ce = ["onClick"], me = { class: "check" }, Se = ["checked", "id"], $e = ["for"], Ne = ["onClick"], we = ["onClick"], je = ["onClick"], Ie = ["onClick"], _e = /* @__PURE__ */ T({
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
    const I = () => {
      clearTimeout(g.value), g.value = setTimeout(() => {
        var n, d;
        i.value = "", ((n = h.value) == null ? void 0 : n.value) && ((d = h.value) == null ? void 0 : d.value) !== "" && (i.value = h.value.value), k("search", i.value);
      }, 500);
    }, _ = A(() => {
      let n = c.options;
      return i.value.length >= 1 && (n = n.filter((d) => {
        if (isNaN(d) === !1 && Number(d) === Number(i.value))
          return !0;
        if (typeof d == "string" && d.toLowerCase().includes(i.value.toLowerCase()))
          return !0;
        if (typeof d == "object" && d !== null && Object.prototype.toString.call(d) === "[object Object]")
          for (const u of Object.keys(d)) {
            if (isNaN(d[u]) === !1 && Number(d[u]) === Number(i.value))
              return !0;
            if (typeof d[u] == "string" && d[u].toLowerCase().includes(i.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), n;
    }), $ = (() => {
      let n = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", d = "";
      for (let u = 0; u < 10; u++)
        d += n.charAt(Math.floor(Math.random() * n.length));
      return d;
    })(), y = (n, d = "") => {
      d !== "" ? e.value.map((u) => u[d]).includes(n[d]) ? e.value.splice(e.value.findIndex((u) => u[d] === n[d]), 1) : e.value.push(n) : e.value.includes(n) ? e.value.splice(e.value.findIndex((u) => u === n), 1) : e.value.push(n), k("update:modelValue", e.value), k("change", e.value, n);
    }, p = (n) => {
      typeof n == "object" && n !== null && String(c.datatype).toLowerCase() === "string" ? (e.value = n[String(c.dataprop || c.prop)], k("update:modelValue", String(e.value))) : typeof n == "object" && n !== null && String(c.datatype).toLowerCase() === "number" ? (e.value = n[String(c.dataprop || c.prop)], k("update:modelValue", Number(e.value))) : (e.value = n, k("update:modelValue", e.value)), k("change", e.value, n);
    };
    return (n, d) => (r(), o("div", null, [
      v("div", pe, [
        v("div", he, [
          v("input", {
            type: "search",
            ref_key: "searchRef",
            ref: h,
            onInput: I,
            class: "input"
          }, null, 544)
        ]),
        Array.isArray(s.modelValue) ? (r(), o("div", {
          key: 0,
          class: "listMenu",
          style: O({ "max-height": Number(s.size) !== 0 ? Number(s.size) * 44 + "px" : "auto" })
        }, [
          (r(!0), o(N, null, L(S(_), (u, f) => (r(), o(N, {
            key: "option-" + u
          }, [
            typeof u == "string" ? (r(), o("div", {
              key: 0,
              onClick: V((t) => y(u), ["stop"]),
              class: "listItem"
            }, [
              v("div", ye, [
                v("input", {
                  type: "checkbox",
                  class: "checkInput",
                  checked: e.value.includes(u),
                  id: "check-" + (S($) + String(f)),
                  style: { "pointer-events": "none" }
                }, null, 8, ge),
                v("label", {
                  class: "checkLabel",
                  for: "check-" + (S($) + String(f)),
                  style: { "pointer-events": "none" }
                }, m(u), 9, be)
              ])
            ], 8, ke)) : typeof u == "object" && s.prop in u ? (r(), o("div", {
              key: 1,
              onClick: V((t) => y(u, s.prop), ["stop"]),
              class: "listItem"
            }, [
              v("div", me, [
                v("input", {
                  type: "checkbox",
                  class: "checkInput",
                  checked: e.value.includes(u),
                  id: "check-" + (S($) + String(f)),
                  style: { "pointer-events": "none" }
                }, null, 8, Se),
                v("label", {
                  class: "checkLabel",
                  for: "check-" + (S($) + String(f)),
                  style: { "pointer-events": "none" }
                }, m(u[s.prop]), 9, $e)
              ])
            ], 8, Ce)) : (r(), o("div", {
              key: 2,
              onClick: V((t) => y(u), ["stop"]),
              class: j(["listItem", e.value.includes(u) ? "active" : ""])
            }, [
              B(n.$slots, "default", {
                option: u,
                selected: e.value
              }, void 0, !0)
            ], 10, Ne))
          ], 64))), 128))
        ], 4)) : (r(), o("div", {
          key: 1,
          class: "listMenu",
          style: O({ "max-height": Number(s.size) !== 0 ? Number(s.size) * 44 + "px" : "auto" })
        }, [
          (r(!0), o(N, null, L(S(_), (u, f) => (r(), o(N, {
            key: "option-" + u
          }, [
            typeof u == "string" ? (r(), o("div", {
              key: 0,
              onClick: (t) => p(u),
              class: j(["listItem", e.value === u ? "active" : ""])
            }, m(u), 11, we)) : typeof u == "object" && s.prop in u ? (r(), o("div", {
              key: 1,
              onClick: (t) => p(u),
              class: j(["listItem", e.value[s.prop] === u[s.prop] || String(u[s.dataprop || s.prop]) === String(e.value) ? "active" : ""])
            }, m(u[s.prop]), 11, je)) : (r(), o("div", {
              key: 2,
              onClick: V((t) => p(u), ["stop"]),
              class: j(["listItem", e.value === u ? "active" : ""])
            }, [
              B(n.$slots, "default", {
                option: u,
                selected: e.value
              }, void 0, !0)
            ], 10, Ie))
          ], 64))), 128))
        ], 4))
      ])
    ]));
  }
});
const rl = /* @__PURE__ */ z(_e, [["__scopeId", "data-v-d7fed8bc"]]), Ve = (s) => (D("data-v-3acd22f1"), s = s(), K(), s), xe = { class: "tagWrap" }, Oe = { class: "tags" }, Le = { class: "tag groupItem" }, Be = ["onClick"], Ae = /* @__PURE__ */ Ve(() => /* @__PURE__ */ v("svg", {
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
  Ae
], ze = { class: "tagContent" }, Me = ["onClick"], Re = ["onClick"], Fe = ["onClick"], We = /* @__PURE__ */ T({
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
    const c = s, e = b(!1), i = b(""), h = b(null), g = H(c.modelValue || []), I = b(c.options || []), _ = b(c.separator || ","), C = b(c.prop || "value"), $ = A(() => {
      let d = I.value;
      return i.value.length >= 1 && (d = d.filter((u) => {
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
      })), d;
    }), y = () => {
      h.value.focus();
    }, p = (d) => {
      if (d.key !== "Enter" && $.value.length >= 1 ? e.value = !0 : e.value = !1, i.value.endsWith(_.value) || d.key === "Enter") {
        const u = i.value.replace(_.value, "");
        g.includes(u) || (g.push(u), I.value.includes(u) && (I.value = I.value.filter((f) => typeof f == "string" && f !== u ? !0 : typeof f == "object" && C.value in f && f[C.value] !== u))), i.value = "", k("update:modelValue", g);
      }
    };
    R(i, () => {
      if (h.value !== null) {
        const d = document.createElement("div");
        d.style.width = "max-content", d.style.position = "absolute", d.style.visibility = "hidden";
        const u = i.value.length >= 2 ? i.value : h.value.getAttribute("placeholder");
        d.innerHTML = u.replace(/ /g, "&nbsp;").trim(), document.body.appendChild(d);
        const f = Math.ceil(Number(window.getComputedStyle(d).width.replace("px", ""))) + 30;
        h.value.style.setProperty("width", f + "px"), d.remove();
      }
    });
    const n = (d) => {
      d.target.style.display = "none", e.value = !1;
    };
    return (d, u) => (r(), o("div", {
      class: j(["taggable", { active: e.value === !0 }])
    }, [
      v("div", {
        class: "tagBackdrop",
        style: O({ display: e.value ? "block" : "none" }),
        onClick: n
      }, null, 4),
      v("div", xe, [
        v("div", {
          class: "input tagToggler",
          onClick: y
        }, [
          v("div", Oe, [
            (r(!0), o(N, null, L(g, (f, t) => (r(), o("div", {
              key: "tag-" + t,
              class: "group"
            }, [
              v("div", Le, [
                typeof f == "string" && f !== "" ? (r(), o(N, { key: 0 }, [
                  F(m(f), 1)
                ], 64)) : typeof f == "object" && C.value in f ? (r(), o(N, { key: 1 }, [
                  F(m(f[C.value]), 1)
                ], 64)) : (r(), o(N, { key: 2 }, [
                  F(m(s.placeholder), 1)
                ], 64))
              ]),
              v("div", {
                class: "tag groupItem",
                onClick: (a) => g.splice(t, 1)
              }, Te, 8, Be)
            ]))), 128)),
            M(v("input", {
              type: "search",
              ref_key: "inputRef",
              ref: h,
              "onUpdate:modelValue": u[0] || (u[0] = (f) => i.value = f),
              class: "tagInput",
              onInput: u[1] || (u[1] = (f) => p(f)),
              onKeyup: u[2] || (u[2] = U((f) => p(f), ["enter"])),
              placeholder: "Add new tag"
            }, null, 544), [
              [E, i.value]
            ])
          ])
        ]),
        v("div", ze, [
          (r(!0), o(N, null, L(S($), (f, t) => (r(), o(N, {
            key: "option-" + f
          }, [
            typeof f == "string" ? (r(), o("div", {
              key: 0,
              onClick: (a) => {
                i.value = f + ",", p(a);
              },
              class: "tagItem"
            }, m(f), 9, Me)) : typeof f == "object" && C.value in f ? (r(), o("div", {
              key: 1,
              onClick: (a) => {
                i.value = f[C.value] + ",", p(a);
              },
              class: "tagItem"
            }, m(f[C.value]), 9, Re)) : (r(), o("div", {
              key: 2,
              onClick: (a) => {
                i.value = f + ",", p(a);
              },
              class: "tagItem"
            }, [
              B(d.$slots, "default", { option: f }, void 0, !0)
            ], 8, Fe))
          ], 64))), 128))
        ])
      ])
    ], 2));
  }
});
const ol = /* @__PURE__ */ z(We, [["__scopeId", "data-v-3acd22f1"]]), Ee = { class: "pickerOverlay pickerWrap" }, He = { class: "pickerContent" }, Ue = { class: "pickerHeader" }, De = ["onClick"], Ke = { class: "check" }, Pe = ["checked", "id"], qe = ["for"], Ge = ["onClick"], Je = { class: "check" }, Qe = ["checked", "id"], Xe = ["for"], Ye = ["onClick"], Ze = ["onClick"], el = ["onClick"], ll = ["onClick"], tl = { class: "pickerFooter" }, al = { class: "tedirCategoryAdd" }, sl = /* @__PURE__ */ T({
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
    const c = s, e = b(c.modelValue || {}), i = b(!1), h = b(""), g = b(null), I = b(void 0), _ = b("");
    R(() => c.modelValue, () => {
      e.value = c.modelValue;
    });
    const C = () => {
      clearTimeout(I.value), I.value = setTimeout(() => {
        var t, a;
        h.value = "", ((t = g.value) == null ? void 0 : t.value) && ((a = g.value) == null ? void 0 : a.value) !== "" && (h.value = g.value.value), k("search", h.value);
      }, 500);
    }, $ = A(() => {
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
    }, d = (t, a = "") => {
      a !== "" ? e.value.map((l) => l[a]).includes(t[a]) ? e.value.splice(e.value.findIndex((l) => l[a] === t[a]), 1) : e.value.push(t) : e.value.includes(t) ? e.value.splice(e.value.findIndex((l) => l === t), 1) : e.value.push(t), k("update:modelValue", e.value), k("change", e.value, t);
    }, u = (t) => {
      typeof t == "object" && t !== null && String(c.datatype).toLowerCase() === "string" ? (e.value = t[String(c.dataprop || c.prop)], k("update:modelValue", String(e.value))) : typeof t == "object" && t !== null && String(c.datatype).toLowerCase() === "number" ? (e.value = t[String(c.dataprop || c.prop)], k("update:modelValue", Number(e.value))) : (e.value = t, k("update:modelValue", e.value)), i.value = !1, k("change", e.value, t);
    }, f = A(() => {
      let t = (c == null ? void 0 : c.placeholder) || "-- Select option --";
      if ($.value.length >= 1)
        if (typeof e.value == "number") {
          let a = $.value.filter((l) => Number(l[String(c.dataprop || c.prop)]) === Number(e.value));
          typeof $.value[0] == "object" && a.length >= 1 ? t = a[0][String(c.prop)] : typeof $.value[0] == "number" && (t = e.value);
        } else if (typeof e.value == "string") {
          let a = $.value.filter((l) => String(l[String(c.dataprop || c.prop)]) === e.value);
          typeof $.value[0] == "object" && a.length >= 1 ? t = a[0][String(c.prop)] : typeof $.value[0] == "string" && e.value !== "" && (t = e.value);
        } else
          typeof e.value == "object" && (Array.isArray(e.value) && e.value.length >= 1 ? typeof e.value[0] == "object" && String(c.prop) in e.value[0] ? t = e.value.map((a) => a[String(c.prop)]).join(", ") : t = e.value.join(", ") : e.value !== null && String(c.prop) in e.value && (t = e.value[String(c.prop)]));
      return t;
    });
    return (t, a) => (r(), o("div", {
      class: j(["picker suggestion tedirCategory", { active: i.value, pickerUp: s.up }])
    }, [
      v("div", {
        class: "pickerBackdrop",
        style: O({ display: i.value ? "block" : "none" }),
        onClick: n
      }, null, 4),
      v("div", Ee, [
        v("div", {
          class: "select pickerToggler",
          onClick: a[0] || (a[0] = (l) => i.value = !i.value)
        }, m(S(f)), 1),
        v("div", He, [
          v("div", Ue, [
            v("input", {
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
            (r(!0), o(N, null, L(S($), (l, w) => (r(), o(N, {
              key: "option-" + l
            }, [
              typeof l == "string" ? (r(), o("div", {
                key: 0,
                onClick: V((x) => d(l), ["stop"]),
                class: "pickerItem"
              }, [
                v("div", Ke, [
                  v("input", {
                    type: "checkbox",
                    class: "checkInput",
                    checked: e.value.includes(l),
                    id: "check-" + (S(p) + String(w)),
                    style: { "pointer-events": "none" }
                  }, null, 8, Pe),
                  v("label", {
                    class: "checkLabel",
                    for: "check-" + (S(p) + String(w)),
                    style: { "pointer-events": "none" }
                  }, m(l), 9, qe)
                ])
              ], 8, De)) : typeof l == "object" && l !== null && s.prop in l ? (r(), o("div", {
                key: 1,
                onClick: V((x) => d(l, s.prop), ["stop"]),
                class: "pickerItem"
              }, [
                v("div", Je, [
                  v("input", {
                    type: "checkbox",
                    class: "checkInput",
                    checked: e.value.includes(l),
                    id: "check-" + (S(p) + String(w)),
                    style: { "pointer-events": "none" }
                  }, null, 8, Qe),
                  v("label", {
                    class: "checkLabel",
                    for: "check-" + (S(p) + String(w)),
                    style: { "pointer-events": "none" }
                  }, m(l[s.prop]), 9, Xe)
                ])
              ], 8, Ge)) : (r(), o("div", {
                key: 2,
                onClick: V((x) => d(l), ["stop"]),
                class: "pickerItem"
              }, [
                B(t.$slots, "default", {
                  option: l,
                  selected: e.value
                }, void 0, !0)
              ], 8, Ye))
            ], 64))), 128))
          ], 4)) : (r(), o("div", {
            key: 1,
            class: "pickerMenu",
            style: O({ "max-height": Number(s.size) !== 0 ? Number(s.size) * 42 + "px" : "auto" })
          }, [
            (r(!0), o(N, null, L(S($), (l, w) => (r(), o(N, {
              key: "option-" + l
            }, [
              typeof l == "string" ? (r(), o("div", {
                key: 0,
                onClick: (x) => u(l),
                class: j(["pickerItem", e.value === l ? "active" : ""])
              }, m(l), 11, Ze)) : typeof l == "object" && l !== null && s.prop in l ? (r(), o("div", {
                key: 1,
                onClick: (x) => u(l),
                class: j(["pickerItem", e.value[s.prop] === l[s.prop] || String(l[s.dataprop || s.prop]) === String(e.value) ? "active" : ""])
              }, m(l[s.prop]), 11, el)) : (r(), o("div", {
                key: 2,
                onClick: V((x) => u(l), ["stop"]),
                class: j(["pickerItem", e.value === l ? "active" : ""])
              }, [
                B(t.$slots, "default", {
                  option: l,
                  selected: e.value
                }, void 0, !0)
              ], 10, ll))
            ], 64))), 128))
          ], 4)),
          v("div", tl, [
            v("div", al, [
              M(v("input", {
                type: "text",
                "onUpdate:modelValue": a[1] || (a[1] = (l) => _.value = l),
                class: "input",
                placeholder: "Add New Category"
              }, null, 512), [
                [E, _.value]
              ]),
              v("button", {
                type: "button",
                class: "button tedirCategoryButton",
                onClick: a[2] || (a[2] = (l) => {
                  k("add", _.value), _.value = "";
                })
              }, "Save")
            ])
          ])
        ])
      ])
    ], 2));
  }
});
const il = /* @__PURE__ */ z(sl, [["__scopeId", "data-v-9bd9abf8"]]);
export {
  il as CategoryBox,
  nl as ComboBox,
  rl as ListBox,
  cl as SelectBox,
  ol as TagBox
};
