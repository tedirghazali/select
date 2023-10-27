import { defineComponent as T, ref as b, watch as R, computed as B, openBlock as o, createElementBlock as i, normalizeClass as w, createElementVNode as f, normalizeStyle as x, toDisplayString as m, unref as S, withDirectives as M, withModifiers as _, vShow as W, Fragment as N, renderList as O, renderSlot as L, reactive as H, createTextVNode as F, withKeys as U, vModelText as E, pushScopeId as D, popScopeId as K } from "vue";
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
    const c = s, e = b(c.modelValue || {}), d = b(!1), h = b(""), g = b(null), j = b(void 0);
    R(() => c.modelValue, () => {
      e.value = c.modelValue;
    });
    const I = () => {
      clearTimeout(j.value), j.value = setTimeout(() => {
        var a, t;
        h.value = "", ((a = g.value) == null ? void 0 : a.value) && ((t = g.value) == null ? void 0 : t.value) !== "" && (h.value = g.value.value), k("search", h.value);
      }, 500);
    }, C = B(() => {
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
      for (let r = 0; r < a; r++)
        l += t.charAt(Math.floor(Math.random() * t.length));
      return l;
    })(), p = (a) => {
      var t;
      a.target.style.display = "none", d.value = !1, (t = g.value) != null && t.value && (g.value.value = "", h.value = "");
    }, n = (a, t = "") => {
      t !== "" ? e.value.map((l) => l[t]).includes(a[t]) ? e.value.splice(e.value.findIndex((l) => l[t] === a[t]), 1) : e.value.push(a) : e.value.includes(a) ? e.value.splice(e.value.findIndex((l) => l === a), 1) : e.value.push(a), k("update:modelValue", e.value), k("change", e.value, a);
    }, v = (a) => {
      typeof a == "object" && a !== null && String(c.datatype).toLowerCase() === "string" ? (e.value = a[String(c.dataprop || c.prop)], k("update:modelValue", String(e.value))) : typeof a == "object" && a !== null && String(c.datatype).toLowerCase() === "number" ? (e.value = a[String(c.dataprop || c.prop)], k("update:modelValue", Number(e.value))) : (e.value = a, k("update:modelValue", e.value)), d.value = !1, k("change", e.value, a);
    }, u = B(() => {
      let a = (c == null ? void 0 : c.placeholder) || "-- Select option --";
      if (C.value.length >= 1)
        if (typeof e.value == "number") {
          let t = C.value.filter((l) => Number(l[String(c.dataprop || c.prop)]) === Number(e.value));
          typeof C.value[0] == "object" && t.length >= 1 ? a = t[0][String(c.prop)] : typeof C.value[0] == "number" && (a = e.value);
        } else if (typeof e.value == "string") {
          let t = C.value.filter((l) => String(l[String(c.dataprop || c.prop)]) === e.value);
          typeof C.value[0] == "object" && t.length >= 1 ? a = t[0][String(c.prop)] : typeof C.value[0] == "string" && e.value !== "" && (a = e.value);
        } else
          typeof e.value == "object" && (Array.isArray(e.value) && e.value.length >= 1 ? typeof e.value[0] == "object" && String(c.prop) in e.value[0] ? a = e.value.map((t) => t[String(c.prop)]).join(", ") : a = e.value.join(", ") : e.value !== null && String(c.prop) in e.value && (a = e.value[String(c.prop)]));
      return a;
    });
    return (a, t) => (o(), i("div", {
      class: w(["picker suggestion", { active: d.value, pickerUp: s.up }])
    }, [
      f("div", {
        class: "pickerBackdrop",
        style: x({ display: d.value ? "block" : "none" }),
        onClick: p
      }, null, 4),
      f("div", P, [
        f("div", {
          class: "select pickerToggler",
          onClick: t[0] || (t[0] = (l) => d.value = !d.value)
        }, m(S(u)), 1),
        f("div", q, [
          f("div", G, [
            f("input", {
              type: "search",
              ref_key: "searchRef",
              ref: g,
              onInput: I,
              class: "input"
            }, null, 544)
          ]),
          Array.isArray(e.value) ? (o(), i("div", {
            key: 0,
            class: "pickerMenu",
            style: x({ "max-height": Number(s.size) !== 0 ? Number(s.size) * 42 + "px" : "auto" })
          }, [
            M(f("div", {
              onClick: t[1] || (t[1] = _((l) => n(typeof s.modelValue == "object" ? Array.isArray(s.modelValue) ? [] : {} : isNaN(s.modelValue) === !1 ? 0 : ""), ["stop"])),
              class: "pickerItem"
            }, m(s.placeholder || "-- Select Option --"), 513), [
              [W, s.defaultOption]
            ]),
            (o(!0), i(N, null, O(S(C), (l, r) => (o(), i(N, {
              key: "option-" + l
            }, [
              typeof l == "string" && s.type !== "slot" ? (o(), i("div", {
                key: 0,
                onClick: _((V) => n(l), ["stop"]),
                class: "pickerItem"
              }, [
                f("div", Q, [
                  f("input", {
                    type: "checkbox",
                    class: "checkInput",
                    checked: e.value.includes(l),
                    id: "check-" + (S(y) + String(r)),
                    style: { "pointer-events": "none" }
                  }, null, 8, X),
                  f("label", {
                    class: "checkLabel",
                    for: "check-" + (S(y) + String(r)),
                    style: { "pointer-events": "none" }
                  }, m(l), 9, Y)
                ])
              ], 8, J)) : typeof l == "object" && l !== null && s.prop in l && s.type !== "slot" ? (o(), i("div", {
                key: 1,
                onClick: _((V) => n(l, s.prop), ["stop"]),
                class: "pickerItem"
              }, [
                f("div", ee, [
                  f("input", {
                    type: "checkbox",
                    class: "checkInput",
                    checked: e.value.includes(l),
                    id: "check-" + (S(y) + String(r)),
                    style: { "pointer-events": "none" }
                  }, null, 8, le),
                  f("label", {
                    class: "checkLabel",
                    for: "check-" + (S(y) + String(r)),
                    style: { "pointer-events": "none" }
                  }, m(l[s.prop]), 9, te)
                ])
              ], 8, Z)) : (o(), i("div", {
                key: 2,
                onClick: _((V) => n(l), ["stop"]),
                class: "pickerItem"
              }, [
                L(a.$slots, "default", {
                  option: l,
                  selected: e.value
                }, void 0, !0)
              ], 8, ae))
            ], 64))), 128))
          ], 4)) : (o(), i("div", {
            key: 1,
            class: "pickerMenu",
            style: x({ "max-height": Number(s.size) !== 0 ? Number(s.size) * 42 + "px" : "auto" })
          }, [
            M(f("div", {
              onClick: t[2] || (t[2] = _((l) => n(typeof s.modelValue == "object" ? Array.isArray(s.modelValue) ? [] : {} : isNaN(s.modelValue) === !1 ? 0 : ""), ["stop"])),
              class: "pickerItem"
            }, m(s.placeholder || "-- Select Option --"), 513), [
              [W, s.defaultOption]
            ]),
            (o(!0), i(N, null, O(S(C), (l, r) => (o(), i(N, {
              key: "option-" + l
            }, [
              typeof l == "string" && s.type !== "slot" ? (o(), i("div", {
                key: 0,
                onClick: (V) => v(l),
                class: w(["pickerItem", e.value === l ? "active" : ""])
              }, m(l), 11, se)) : typeof l == "object" && l !== null && s.prop in l && s.type !== "slot" ? (o(), i("div", {
                key: 1,
                onClick: (V) => v(l),
                class: w(["pickerItem", e.value[s.prop] === l[s.prop] || String(l[s.dataprop || s.prop]) === String(e.value) ? "active" : ""])
              }, m(l[s.prop]), 11, ue)) : (o(), i("div", {
                key: 2,
                onClick: _((V) => v(l), ["stop"]),
                class: w(["pickerItem", e.value === l ? "active" : ""])
              }, [
                L(a.$slots, "default", {
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
  for (const [e, d] of k)
    c[e] = d;
  return c;
}, cl = /* @__PURE__ */ z(ne, [["__scopeId", "data-v-5881f731"]]), re = { class: "pickerWrap" }, oe = { class: "pickerContent pickerSizing" }, ie = ["onClick"], de = ["onClick"], ve = ["onClick"], fe = /* @__PURE__ */ T({
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
    const c = s, e = b(!1), d = b(""), h = b(null), g = b(void 0), j = B(() => {
      let y = c.options;
      return d.value.length >= 1 && c.serverSearch !== !0 && (y = y.filter((p) => {
        if (isNaN(p) === !1 && Number(p) === Number(d.value))
          return !0;
        if (typeof p == "string" && p.toLowerCase().includes(d.value.toLowerCase()))
          return !0;
        if (typeof p == "object" && p !== null && Object.prototype.toString.call(p) === "[object Object]")
          for (const n of Object.keys(p)) {
            if (isNaN(p[n]) === !1 && Number(p[n]) === Number(d.value))
              return !0;
            if (typeof p[n] == "string" && p[n].toLowerCase().includes(d.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), y;
    }), I = () => {
      clearTimeout(g.value), g.value = setTimeout(() => {
        var y, p;
        d.value = "", ((y = h.value) == null ? void 0 : y.value) && ((p = h.value) == null ? void 0 : p.value) !== "" && (d.value = h.value.value), k("search", d.value), j.value.length >= 1 && d.value !== "" || c.serverSearch == !0 ? e.value = !0 : e.value = !1;
      }, 500);
    }, C = (y, p) => {
      (typeof y == "string" || isNaN(y) === !1) && (d.value = y, h.value.value = y), c.emptySearch == !0 && (d.value = "", h.value.value = "", k("search", d.value)), k("update:modelValue", p), k("change", y, p), e.value = !1;
    }, $ = (y) => {
      y.target.style.display = "none", e.value = !1;
    };
    return (y, p) => (o(), i("div", {
      class: w(["picker suggestion", { active: e.value, pickerUp: s.up }])
    }, [
      f("div", {
        class: "pickerBackdrop",
        style: x({ display: e.value ? "block" : "none" }),
        onClick: $
      }, null, 4),
      f("div", re, [
        s.select ? (o(), i("input", {
          key: 0,
          type: "search",
          ref_key: "searchRef",
          ref: h,
          onInput: I,
          onClick: p[0] || (p[0] = (n) => e.value = !0),
          class: "select"
        }, null, 544)) : (o(), i("input", {
          key: 1,
          type: "search",
          ref_key: "searchRef",
          ref: h,
          onInput: I,
          onClick: p[1] || (p[1] = (n) => S(j).length >= 1 && d.value !== "" ? e.value = !0 : e.value = !1),
          class: "input"
        }, null, 544)),
        f("div", oe, [
          (o(!0), i(N, null, O(S(j), (n, v) => (o(), i(N, {
            key: "option-" + n
          }, [
            typeof n == "string" ? (o(), i("div", {
              key: 0,
              onClick: (u) => C(n, n),
              class: w(["pickerItem", s.modelValue === n ? "active" : ""])
            }, m(n), 11, ie)) : typeof n == "object" && s.prop in n ? (o(), i("div", {
              key: 1,
              onClick: (u) => C(n[s.prop], n),
              class: w(["pickerItem", s.modelValue[s.prop] === n[s.prop] ? "active" : ""])
            }, m(n[s.prop]), 11, de)) : (o(), i("div", {
              key: 2,
              onClick: (u) => C(n, n),
              class: w(["pickerItem", s.modelValue === n ? "active" : ""])
            }, [
              L(y.$slots, "default", { option: n }, void 0, !0)
            ], 10, ve))
          ], 64))), 128))
        ])
      ])
    ], 2));
  }
});
const nl = /* @__PURE__ */ z(fe, [["__scopeId", "data-v-cd73ec9f"]]), pe = { class: "list" }, he = { class: "listHeader" }, ke = ["onClick"], ye = { class: "check" }, ge = ["checked", "id"], be = ["for"], Ce = ["onClick"], me = { class: "check" }, Se = ["checked", "id"], $e = ["for"], Ne = ["onClick"], we = ["onClick"], je = ["onClick"], Ie = ["onClick"], Ve = /* @__PURE__ */ T({
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
    const c = s, e = b(c.modelValue || {}), d = b(""), h = b(null), g = b(void 0);
    R(() => c.modelValue, () => {
      e.value = c.modelValue;
    });
    const j = () => {
      clearTimeout(g.value), g.value = setTimeout(() => {
        var n, v;
        d.value = "", ((n = h.value) == null ? void 0 : n.value) && ((v = h.value) == null ? void 0 : v.value) !== "" && (d.value = h.value.value), k("search", d.value);
      }, 500);
    }, I = B(() => {
      let n = c.options;
      return d.value.length >= 1 && (n = n.filter((v) => {
        if (isNaN(v) === !1 && Number(v) === Number(d.value))
          return !0;
        if (typeof v == "string" && v.toLowerCase().includes(d.value.toLowerCase()))
          return !0;
        if (typeof v == "object" && v !== null && Object.prototype.toString.call(v) === "[object Object]")
          for (const u of Object.keys(v)) {
            if (isNaN(v[u]) === !1 && Number(v[u]) === Number(d.value))
              return !0;
            if (typeof v[u] == "string" && v[u].toLowerCase().includes(d.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), n;
    }), $ = (() => {
      let n = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", v = "";
      for (let u = 0; u < 10; u++)
        v += n.charAt(Math.floor(Math.random() * n.length));
      return v;
    })(), y = (n, v = "") => {
      v !== "" ? e.value.map((u) => u[v]).includes(n[v]) ? e.value.splice(e.value.findIndex((u) => u[v] === n[v]), 1) : e.value.push(n) : e.value.includes(n) ? e.value.splice(e.value.findIndex((u) => u === n), 1) : e.value.push(n), k("update:modelValue", e.value), k("change", e.value, n);
    }, p = (n) => {
      typeof n == "object" && n !== null && String(c.datatype).toLowerCase() === "string" ? (e.value = n[String(c.dataprop || c.prop)], k("update:modelValue", String(e.value))) : typeof n == "object" && n !== null && String(c.datatype).toLowerCase() === "number" ? (e.value = n[String(c.dataprop || c.prop)], k("update:modelValue", Number(e.value))) : (e.value = n, k("update:modelValue", e.value)), k("change", e.value, n);
    };
    return (n, v) => (o(), i("div", null, [
      f("div", pe, [
        f("div", he, [
          f("input", {
            type: "search",
            ref_key: "searchRef",
            ref: h,
            onInput: j,
            class: "input"
          }, null, 544)
        ]),
        Array.isArray(s.modelValue) ? (o(), i("div", {
          key: 0,
          class: "listMenu",
          style: x({ "max-height": Number(s.size) !== 0 ? Number(s.size) * 44 + "px" : "auto" })
        }, [
          (o(!0), i(N, null, O(S(I), (u, a) => (o(), i(N, {
            key: "option-" + u
          }, [
            typeof u == "string" ? (o(), i("div", {
              key: 0,
              onClick: _((t) => y(u), ["stop"]),
              class: "listItem"
            }, [
              f("div", ye, [
                f("input", {
                  type: "checkbox",
                  class: "checkInput",
                  checked: e.value.includes(u),
                  id: "check-" + (S($) + String(a)),
                  style: { "pointer-events": "none" }
                }, null, 8, ge),
                f("label", {
                  class: "checkLabel",
                  for: "check-" + (S($) + String(a)),
                  style: { "pointer-events": "none" }
                }, m(u), 9, be)
              ])
            ], 8, ke)) : typeof u == "object" && s.prop in u ? (o(), i("div", {
              key: 1,
              onClick: _((t) => y(u, s.prop), ["stop"]),
              class: "listItem"
            }, [
              f("div", me, [
                f("input", {
                  type: "checkbox",
                  class: "checkInput",
                  checked: e.value.includes(u),
                  id: "check-" + (S($) + String(a)),
                  style: { "pointer-events": "none" }
                }, null, 8, Se),
                f("label", {
                  class: "checkLabel",
                  for: "check-" + (S($) + String(a)),
                  style: { "pointer-events": "none" }
                }, m(u[s.prop]), 9, $e)
              ])
            ], 8, Ce)) : (o(), i("div", {
              key: 2,
              onClick: _((t) => y(u), ["stop"]),
              class: w(["listItem", e.value.includes(u) ? "active" : ""])
            }, [
              L(n.$slots, "default", {
                option: u,
                selected: e.value
              }, void 0, !0)
            ], 10, Ne))
          ], 64))), 128))
        ], 4)) : (o(), i("div", {
          key: 1,
          class: "listMenu",
          style: x({ "max-height": Number(s.size) !== 0 ? Number(s.size) * 44 + "px" : "auto" })
        }, [
          (o(!0), i(N, null, O(S(I), (u, a) => (o(), i(N, {
            key: "option-" + u
          }, [
            typeof u == "string" ? (o(), i("div", {
              key: 0,
              onClick: (t) => p(u),
              class: w(["listItem", e.value === u ? "active" : ""])
            }, m(u), 11, we)) : typeof u == "object" && s.prop in u ? (o(), i("div", {
              key: 1,
              onClick: (t) => p(u),
              class: w(["listItem", e.value[s.prop] === u[s.prop] || String(u[s.dataprop || s.prop]) === String(e.value) ? "active" : ""])
            }, m(u[s.prop]), 11, je)) : (o(), i("div", {
              key: 2,
              onClick: _((t) => p(u), ["stop"]),
              class: w(["listItem", e.value === u ? "active" : ""])
            }, [
              L(n.$slots, "default", {
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
const rl = /* @__PURE__ */ z(Ve, [["__scopeId", "data-v-d7fed8bc"]]), _e = (s) => (D("data-v-3acd22f1"), s = s(), K(), s), xe = { class: "tagWrap" }, Oe = { class: "tags" }, Le = { class: "tag groupItem" }, Be = ["onClick"], Ae = /* @__PURE__ */ _e(() => /* @__PURE__ */ f("svg", {
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
  /* @__PURE__ */ f("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }),
  /* @__PURE__ */ f("line", {
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
    const c = s, e = b(!1), d = b(""), h = b(null), g = H(c.modelValue || []), j = b(c.options || []), I = b(c.separator || ","), C = b(c.prop || "value"), $ = B(() => {
      let v = j.value;
      return d.value.length >= 1 && (v = v.filter((u) => {
        if (isNaN(u) === !1 && Number(u) === Number(d.value))
          return !0;
        if (typeof u == "string" && u.toLowerCase().includes(d.value.toLowerCase()))
          return !0;
        if (typeof u == "object" && u !== null && Object.prototype.toString.call(u) === "[object Object]")
          for (const a of Object.keys(u)) {
            if (isNaN(u[a]) === !1 && Number(u[a]) === Number(d.value))
              return !0;
            if (typeof u[a] == "string" && u[a].toLowerCase().includes(d.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), v;
    }), y = () => {
      h.value.focus();
    }, p = (v) => {
      if (v.key !== "Enter" && $.value.length >= 1 ? e.value = !0 : e.value = !1, d.value.endsWith(I.value) || v.key === "Enter") {
        const u = d.value.replace(I.value, "");
        g.includes(u) || (g.push(u), j.value.includes(u) && (j.value = j.value.filter((a) => typeof a == "string" && a !== u ? !0 : typeof a == "object" && C.value in a && a[C.value] !== u))), d.value = "", k("update:modelValue", g);
      }
    };
    R(d, () => {
      if (h.value !== null) {
        const v = document.createElement("div");
        v.style.width = "max-content", v.style.position = "absolute", v.style.visibility = "hidden";
        const u = d.value.length >= 2 ? d.value : h.value.getAttribute("placeholder");
        v.innerHTML = u.replace(/ /g, "&nbsp;").trim(), document.body.appendChild(v);
        const a = Math.ceil(Number(window.getComputedStyle(v).width.replace("px", ""))) + 30;
        h.value.style.setProperty("width", a + "px"), v.remove();
      }
    });
    const n = (v) => {
      v.target.style.display = "none", e.value = !1;
    };
    return (v, u) => (o(), i("div", {
      class: w(["taggable", { active: e.value === !0 }])
    }, [
      f("div", {
        class: "tagBackdrop",
        style: x({ display: e.value ? "block" : "none" }),
        onClick: n
      }, null, 4),
      f("div", xe, [
        f("div", {
          class: "input tagToggler",
          onClick: y
        }, [
          f("div", Oe, [
            (o(!0), i(N, null, O(g, (a, t) => (o(), i("div", {
              key: "tag-" + t,
              class: "group"
            }, [
              f("div", Le, [
                typeof a == "string" && a !== "" ? (o(), i(N, { key: 0 }, [
                  F(m(a), 1)
                ], 64)) : typeof a == "object" && C.value in a ? (o(), i(N, { key: 1 }, [
                  F(m(a[C.value]), 1)
                ], 64)) : (o(), i(N, { key: 2 }, [
                  F(m(s.placeholder), 1)
                ], 64))
              ]),
              f("div", {
                class: "tag groupItem",
                onClick: (l) => g.splice(t, 1)
              }, Te, 8, Be)
            ]))), 128)),
            M(f("input", {
              type: "search",
              ref_key: "inputRef",
              ref: h,
              "onUpdate:modelValue": u[0] || (u[0] = (a) => d.value = a),
              class: "tagInput",
              onInput: u[1] || (u[1] = (a) => p(a)),
              onKeyup: u[2] || (u[2] = U((a) => p(a), ["enter"])),
              placeholder: "Add new tag"
            }, null, 544), [
              [E, d.value]
            ])
          ])
        ]),
        f("div", ze, [
          (o(!0), i(N, null, O(S($), (a, t) => (o(), i(N, {
            key: "option-" + a
          }, [
            typeof a == "string" ? (o(), i("div", {
              key: 0,
              onClick: (l) => {
                d.value = a + ",", p(l);
              },
              class: "tagItem"
            }, m(a), 9, Me)) : typeof a == "object" && C.value in a ? (o(), i("div", {
              key: 1,
              onClick: (l) => {
                d.value = a[C.value] + ",", p(l);
              },
              class: "tagItem"
            }, m(a[C.value]), 9, Re)) : (o(), i("div", {
              key: 2,
              onClick: (l) => {
                d.value = a + ",", p(l);
              },
              class: "tagItem"
            }, [
              L(v.$slots, "default", { option: a }, void 0, !0)
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
    const c = s, e = b(c.modelValue || {}), d = b(!1), h = b(""), g = b(null), j = b(void 0), I = b("");
    R(() => c.modelValue, () => {
      e.value = c.modelValue;
    });
    const C = () => {
      clearTimeout(j.value), j.value = setTimeout(() => {
        var t, l;
        h.value = "", ((t = g.value) == null ? void 0 : t.value) && ((l = g.value) == null ? void 0 : l.value) !== "" && (h.value = g.value.value), k("search", h.value);
      }, 500);
    }, $ = B(() => {
      let t = c.options;
      return h.value.length >= 1 && (t = t.filter((l) => {
        if (isNaN(l) === !1 && Number(l) === Number(h.value))
          return !0;
        if (typeof l == "string" && l.toLowerCase().includes(h.value.toLowerCase()))
          return !0;
        if (typeof l == "object" && l !== null && Object.prototype.toString.call(l) === "[object Object]")
          for (const r of Object.keys(l)) {
            if (isNaN(l[r]) === !1 && Number(l[r]) === Number(h.value))
              return !0;
            if (typeof l[r] == "string" && l[r].toLowerCase().includes(h.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), t;
    }), p = ((t = 10) => {
      let l = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", r = "";
      for (let V = 0; V < t; V++)
        r += l.charAt(Math.floor(Math.random() * l.length));
      return r;
    })(), n = (t) => {
      var l;
      t.target.style.display = "none", d.value = !1, (l = g.value) != null && l.value && (g.value.value = "", h.value = "");
    }, v = (t, l = "") => {
      l !== "" ? e.value.map((r) => r[l]).includes(t[l]) ? e.value.splice(e.value.findIndex((r) => r[l] === t[l]), 1) : e.value.push(t) : e.value.includes(t) ? e.value.splice(e.value.findIndex((r) => r === t), 1) : e.value.push(t), k("update:modelValue", e.value), k("change", e.value, t);
    }, u = (t) => {
      typeof t == "object" && t !== null && String(c.datatype).toLowerCase() === "string" ? (e.value = t[String(c.dataprop || c.prop)], k("update:modelValue", String(e.value))) : typeof t == "object" && t !== null && String(c.datatype).toLowerCase() === "number" ? (e.value = t[String(c.dataprop || c.prop)], k("update:modelValue", Number(e.value))) : (e.value = t, k("update:modelValue", e.value)), d.value = !1, k("change", e.value, t);
    }, a = B(() => {
      let t = (c == null ? void 0 : c.placeholder) || "-- Select option --";
      if ($.value.length >= 1)
        if (typeof e.value == "number") {
          let l = $.value.filter((r) => Number(r[String(c.dataprop || c.prop)]) === Number(e.value));
          typeof $.value[0] == "object" && l.length >= 1 ? t = l[0][String(c.prop)] : typeof $.value[0] == "number" && (t = e.value);
        } else if (typeof e.value == "string") {
          let l = $.value.filter((r) => String(r[String(c.dataprop || c.prop)]) === e.value);
          typeof $.value[0] == "object" && l.length >= 1 ? t = l[0][String(c.prop)] : typeof $.value[0] == "string" && e.value !== "" && (t = e.value);
        } else
          typeof e.value == "object" && (Array.isArray(e.value) && e.value.length >= 1 ? typeof e.value[0] == "object" && String(c.prop) in e.value[0] ? t = e.value.map((l) => l[String(c.prop)]).join(", ") : t = e.value.join(", ") : e.value !== null && String(c.prop) in e.value && (t = e.value[String(c.prop)]));
      return t;
    });
    return (t, l) => (o(), i("div", {
      class: w(["picker suggestion tedirCategory", { active: d.value, pickerUp: s.up }])
    }, [
      f("div", {
        class: "pickerBackdrop",
        style: x({ display: d.value ? "block" : "none" }),
        onClick: n
      }, null, 4),
      f("div", Ee, [
        f("div", {
          class: "select pickerToggler",
          onClick: l[0] || (l[0] = (r) => d.value = !d.value)
        }, m(S(a)), 1),
        f("div", He, [
          f("div", Ue, [
            f("input", {
              type: "search",
              ref_key: "searchRef",
              ref: g,
              onInput: C,
              class: "input"
            }, null, 544)
          ]),
          Array.isArray(e.value) ? (o(), i("div", {
            key: 0,
            class: "pickerMenu",
            style: x({ "max-height": Number(s.size) !== 0 ? Number(s.size) * 42 + "px" : "auto" })
          }, [
            (o(!0), i(N, null, O(S($), (r, V) => (o(), i(N, {
              key: "option-" + r
            }, [
              typeof r == "string" ? (o(), i("div", {
                key: 0,
                onClick: _((A) => v(r), ["stop"]),
                class: "pickerItem"
              }, [
                f("div", Ke, [
                  f("input", {
                    type: "checkbox",
                    class: "checkInput",
                    checked: e.value.includes(r),
                    id: "check-" + (S(p) + String(V)),
                    style: { "pointer-events": "none" }
                  }, null, 8, Pe),
                  f("label", {
                    class: "checkLabel",
                    for: "check-" + (S(p) + String(V)),
                    style: { "pointer-events": "none" }
                  }, m(r), 9, qe)
                ])
              ], 8, De)) : typeof r == "object" && r !== null && s.prop in r ? (o(), i("div", {
                key: 1,
                onClick: _((A) => v(r, s.prop), ["stop"]),
                class: "pickerItem"
              }, [
                f("div", Je, [
                  f("input", {
                    type: "checkbox",
                    class: "checkInput",
                    checked: e.value.includes(r),
                    id: "check-" + (S(p) + String(V)),
                    style: { "pointer-events": "none" }
                  }, null, 8, Qe),
                  f("label", {
                    class: "checkLabel",
                    for: "check-" + (S(p) + String(V)),
                    style: { "pointer-events": "none" }
                  }, m(r[s.prop]), 9, Xe)
                ])
              ], 8, Ge)) : (o(), i("div", {
                key: 2,
                onClick: _((A) => v(r), ["stop"]),
                class: "pickerItem"
              }, [
                L(t.$slots, "default", {
                  option: r,
                  selected: e.value
                }, void 0, !0)
              ], 8, Ye))
            ], 64))), 128))
          ], 4)) : (o(), i("div", {
            key: 1,
            class: "pickerMenu",
            style: x({ "max-height": Number(s.size) !== 0 ? Number(s.size) * 42 + "px" : "auto" })
          }, [
            (o(!0), i(N, null, O(S($), (r, V) => (o(), i(N, {
              key: "option-" + r
            }, [
              typeof r == "string" ? (o(), i("div", {
                key: 0,
                onClick: (A) => u(r),
                class: w(["pickerItem", e.value === r ? "active" : ""])
              }, m(r), 11, Ze)) : typeof r == "object" && r !== null && s.prop in r ? (o(), i("div", {
                key: 1,
                onClick: (A) => u(r),
                class: w(["pickerItem", e.value[s.prop] === r[s.prop] || String(r[s.dataprop || s.prop]) === String(e.value) ? "active" : ""])
              }, m(r[s.prop]), 11, el)) : (o(), i("div", {
                key: 2,
                onClick: _((A) => u(r), ["stop"]),
                class: w(["pickerItem", e.value === r ? "active" : ""])
              }, [
                L(t.$slots, "default", {
                  option: r,
                  selected: e.value
                }, void 0, !0)
              ], 10, ll))
            ], 64))), 128))
          ], 4)),
          f("div", tl, [
            f("div", al, [
              M(f("input", {
                type: "text",
                "onUpdate:modelValue": l[1] || (l[1] = (r) => I.value = r),
                class: "input",
                placeholder: "Add New Category"
              }, null, 512), [
                [E, I.value]
              ]),
              f("button", {
                type: "button",
                class: "button tedirCategoryButton",
                onClick: l[2] || (l[2] = (r) => {
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
const il = /* @__PURE__ */ z(sl, [["__scopeId", "data-v-9bd9abf8"]]);
export {
  il as CategoryBox,
  nl as ComboBox,
  rl as ListBox,
  cl as SelectBox,
  ol as TagBox
};
