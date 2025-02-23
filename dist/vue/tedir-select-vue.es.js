import { defineComponent as M, ref as k, watch as R, computed as T, createElementBlock as n, openBlock as o, normalizeClass as N, createElementVNode as c, normalizeStyle as B, toDisplayString as g, Fragment as C, withDirectives as W, withModifiers as V, vShow as H, renderList as A, unref as I, renderSlot as z, reactive as D, createTextVNode as E, withKeys as K, vModelText as U } from "vue";
const P = { class: "pickerWrap" }, q = { class: "pickerContent" }, G = { class: "pickerHeader" }, J = {
  key: 0,
  class: "tedirSelectLoading"
}, Q = ["onClick"], X = { class: "check" }, Y = ["checked", "id"], Z = ["for"], x = ["onClick"], ee = { class: "check" }, le = ["checked", "id"], te = ["for"], ae = ["onClick"], se = ["onClick"], ue = ["onClick"], re = ["onClick"], ne = /* @__PURE__ */ M({
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
  setup(_, { emit: O }) {
    const s = _, f = O, l = k(s.modelValue || {}), v = k(!1), p = k(""), y = k(null), j = k(void 0);
    R(() => s.modelValue, () => {
      l.value = s.modelValue;
    });
    const m = () => {
      clearTimeout(j.value), j.value = setTimeout(() => {
        var e, t;
        p.value = "", (e = y.value) != null && e.value && ((t = y.value) == null ? void 0 : t.value) !== "" && (p.value = y.value.value), f("search", p.value);
      }, 500);
    }, h = T(() => {
      let e = s.options;
      return p.value.length >= 1 && (e = e.filter((t) => {
        if (isNaN(t) === !1 && Number(t) === Number(p.value))
          return !0;
        if (typeof t == "string" && t.toLowerCase().includes(p.value.toLowerCase()))
          return !0;
        if (typeof t == "object" && t !== null && Object.prototype.toString.call(t) === "[object Object]")
          for (const a of Object.keys(t)) {
            if (isNaN(t[a]) === !1 && Number(t[a]) === Number(p.value))
              return !0;
            if (typeof t[a] == "string" && t[a].toLowerCase().includes(p.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), e;
    }), w = ((e = 10) => {
      let t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", a = "";
      for (let S = 0; S < e; S++)
        a += t.charAt(Math.floor(Math.random() * t.length));
      return a;
    })(), $ = (e) => {
      var t;
      e.target.style.display = "none", v.value = !1, (t = y.value) != null && t.value && (y.value.value = "", p.value = "");
    }, d = (e) => {
      l.value = e, f("update:modelValue", l.value), f("change", l.value, e), v.value = !1;
    }, i = (e, t = "") => {
      t !== "" ? l.value.map((a) => a[t]).includes(e[t]) ? l.value.splice(l.value.findIndex((a) => a[t] === e[t]), 1) : l.value.push(e) : l.value.includes(e) ? l.value.splice(l.value.findIndex((a) => a === e), 1) : l.value.push(e), f("update:modelValue", l.value), f("change", l.value, e);
    }, r = (e) => {
      typeof e == "object" && e !== null && String(s.datatype).toLowerCase() === "string" ? (l.value = e[String(s.dataprop || s.prop)], f("update:modelValue", String(l.value))) : typeof e == "object" && e !== null && String(s.datatype).toLowerCase() === "number" ? (l.value = e[String(s.dataprop || s.prop)], f("update:modelValue", Number(l.value))) : (l.value = e, f("update:modelValue", l.value)), v.value = !1, f("change", l.value, e);
    }, u = T(() => {
      let e = (s == null ? void 0 : s.placeholder) || "-- Select option --";
      if (h.value.length >= 1)
        if (typeof l.value == "number") {
          let t = h.value.filter((a) => Number(a[String(s.dataprop || s.prop)]) === Number(l.value));
          typeof h.value[0] == "object" && t.length >= 1 ? e = t[0][String(s.prop)] : typeof h.value[0] == "number" && (e = String(l.value));
        } else if (typeof l.value == "string") {
          let t = h.value.filter((a) => String(a[String(s.dataprop || s.prop)]) === l.value);
          typeof h.value[0] == "object" && t.length >= 1 ? e = t[0][String(s.prop)] : typeof h.value[0] == "string" && l.value !== "" && (e = l.value);
        } else typeof l.value == "object" && (Array.isArray(l.value) && l.value.length >= 1 ? typeof l.value[0] == "object" && String(s.prop) in l.value[0] ? e = l.value.map((t) => t[String(s.prop)]).join(", ") : e = l.value.join(", ") : l.value !== null && String(s.prop) in l.value && (e = l.value[String(s.prop)]));
      return e;
    });
    return (e, t) => (o(), n("div", {
      class: N(["picker suggestion", { active: v.value, pickerUp: e.up }])
    }, [
      c("div", {
        class: "pickerBackdrop",
        style: B({ display: v.value ? "block" : "none" }),
        onClick: $
      }, null, 4),
      c("div", P, [
        c("div", {
          class: "select pickerToggler",
          onClick: t[0] || (t[0] = (a) => {
            v.value = !v.value, f("load");
          })
        }, g(u.value), 1),
        c("div", q, [
          c("div", G, [
            c("input", {
              type: "search",
              ref_key: "searchRef",
              ref: y,
              onInput: m,
              class: "input"
            }, null, 544)
          ]),
          e.loading ? (o(), n("div", J, t[3] || (t[3] = [
            c("span", { class: "spinner" }, null, -1)
          ]))) : (o(), n(C, { key: 1 }, [
            Array.isArray(l.value) ? (o(), n("div", {
              key: 0,
              class: "pickerMenu",
              style: B({ "max-height": Number(e.size) !== 0 ? Number(e.size) * 42 + "px" : "auto" })
            }, [
              W(c("div", {
                onClick: t[1] || (t[1] = V((a) => d(typeof e.modelValue == "object" ? Array.isArray(e.modelValue) ? [] : {} : ""), ["stop"])),
                class: "pickerItem"
              }, g(e.placeholder || "-- Select Option --"), 513), [
                [H, e.defaultOption]
              ]),
              (o(!0), n(C, null, A(h.value, (a, S) => (o(), n(C, {
                key: "option-" + a
              }, [
                typeof a == "string" && e.type !== "slot" ? (o(), n("div", {
                  key: 0,
                  onClick: V((L) => i(a), ["stop"]),
                  class: "pickerItem"
                }, [
                  c("div", X, [
                    c("input", {
                      type: "checkbox",
                      class: "checkInput",
                      checked: l.value.includes(a),
                      id: "check-" + (I(w) + String(S)),
                      style: { "pointer-events": "none" }
                    }, null, 8, Y),
                    c("label", {
                      class: "checkLabel",
                      for: "check-" + (I(w) + String(S)),
                      style: { "pointer-events": "none" }
                    }, g(a), 9, Z)
                  ])
                ], 8, Q)) : typeof a == "object" && a !== null && e.prop in a && e.type !== "slot" ? (o(), n("div", {
                  key: 1,
                  onClick: V((L) => i(a, e.prop), ["stop"]),
                  class: "pickerItem"
                }, [
                  c("div", ee, [
                    c("input", {
                      type: "checkbox",
                      class: "checkInput",
                      checked: l.value.includes(a),
                      id: "check-" + (I(w) + String(S)),
                      style: { "pointer-events": "none" }
                    }, null, 8, le),
                    c("label", {
                      class: "checkLabel",
                      for: "check-" + (I(w) + String(S)),
                      style: { "pointer-events": "none" }
                    }, g(a[e.prop]), 9, te)
                  ])
                ], 8, x)) : (o(), n("div", {
                  key: 2,
                  onClick: V((L) => i(a), ["stop"]),
                  class: "pickerItem"
                }, [
                  z(e.$slots, "default", {
                    option: a,
                    selected: l.value
                  }, void 0, !0)
                ], 8, ae))
              ], 64))), 128))
            ], 4)) : (o(), n("div", {
              key: 1,
              class: "pickerMenu",
              style: B({ "max-height": Number(e.size) !== 0 ? Number(e.size) * 42 + "px" : "auto" })
            }, [
              W(c("div", {
                onClick: t[2] || (t[2] = V((a) => d(typeof e.modelValue == "object" ? Array.isArray(e.modelValue) ? [] : {} : ""), ["stop"])),
                class: "pickerItem"
              }, g(e.placeholder || "-- Select Option --"), 513), [
                [H, e.defaultOption]
              ]),
              (o(!0), n(C, null, A(h.value, (a, S) => (o(), n(C, {
                key: "option-" + a
              }, [
                typeof a == "string" && e.type !== "slot" ? (o(), n("div", {
                  key: 0,
                  onClick: (L) => r(a),
                  class: N(["pickerItem", l.value === a ? "active" : ""])
                }, g(a), 11, se)) : typeof a == "object" && a !== null && e.prop in a && e.type !== "slot" ? (o(), n("div", {
                  key: 1,
                  onClick: (L) => r(a),
                  class: N(["pickerItem", l.value[e.prop] === a[e.prop] || String(a[e.dataprop || e.prop]) === String(l.value) ? "active" : ""])
                }, g(a[e.prop]), 11, ue)) : (o(), n("div", {
                  key: 2,
                  onClick: V((L) => r(a), ["stop"]),
                  class: N(["pickerItem", l.value === a ? "active" : ""])
                }, [
                  z(e.$slots, "default", {
                    option: a,
                    selected: l.value
                  }, void 0, !0)
                ], 10, re))
              ], 64))), 128))
            ], 4))
          ], 64))
        ])
      ])
    ], 2));
  }
}), F = (_, O) => {
  const s = _.__vccOpts || _;
  for (const [f, l] of O)
    s[f] = l;
  return s;
}, rl = /* @__PURE__ */ F(ne, [["__scopeId", "data-v-3802d66d"]]), oe = { class: "pickerWrap" }, ie = ["value", "placeholder"], ce = ["value", "placeholder"], de = { class: "pickerContent pickerSizing" }, ve = {
  key: 0,
  class: "tedirSelectLoading"
}, pe = ["onClick"], fe = ["onClick"], ye = ["onClick"], he = /* @__PURE__ */ M({
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
  emits: ["update:modelValue", "change", "search", "load"],
  setup(_, { emit: O }) {
    var i, r;
    const s = _, f = O, l = k(s.modelValue || {}), v = k(!1), p = k(((r = (i = s == null ? void 0 : s.options) == null ? void 0 : i.filter((u) => ((u == null ? void 0 : u[String(s == null ? void 0 : s.prop)]) || u) === s.modelValue)) == null ? void 0 : r[0]) || ""), y = k(null), j = k(void 0), m = k(!1);
    R(() => s.modelValue, () => {
      var u, e;
      l.value = s.modelValue, p.value = ((e = (u = s == null ? void 0 : s.options) == null ? void 0 : u.filter((t) => ((t == null ? void 0 : t[String(s == null ? void 0 : s.prop)]) || t) === s.modelValue)) == null ? void 0 : e[0]) || "", m.value = !1;
    });
    const h = T(() => {
      let u = s.options;
      return p.value.length >= 1 && s.serverSearch !== !0 && (u = u.filter((e) => {
        if (isNaN(e) === !1 && Number(e) === Number(p.value))
          return !0;
        if (typeof e == "string" && e.toLowerCase().includes(p.value.toLowerCase()))
          return !0;
        if (typeof e == "object" && e !== null && Object.prototype.toString.call(e) === "[object Object]")
          for (const t of Object.keys(e)) {
            if (isNaN(e[t]) === !1 && Number(e[t]) === Number(p.value))
              return !0;
            if (typeof e[t] == "string" && e[t].toLowerCase().includes(p.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), u;
    }), b = () => {
      clearTimeout(j.value), j.value = setTimeout(() => {
        var u, e;
        p.value = "", (u = y.value) != null && u.value && ((e = y.value) == null ? void 0 : e.value) !== "" && (p.value = y.value.value), f("search", p.value), h.value.length >= 1 && m.value === !0 || s.serverSearch == !0 ? v.value = !0 : v.value = !1;
      }, 500);
    }, w = (u, e) => {
      (typeof u == "string" || isNaN(u) === !1) && (p.value = u, y.value.value = u), s.emptySearch == !0 && (p.value = "", y.value.value = "", f("search", p.value)), typeof e == "object" && e !== null && String(s.datatype).toLowerCase() === "string" ? (l.value = e[String(s.dataprop || s.prop)], f("update:modelValue", String(l.value))) : typeof e == "object" && e !== null && String(s.datatype).toLowerCase() === "number" ? (l.value = e[String(s.dataprop || s.prop)], f("update:modelValue", Number(l.value))) : (l.value = e, f("update:modelValue", l.value)), f("change", u, e), v.value = !1;
    }, $ = (u) => {
      u.target.style.display = "none", v.value = !1;
    }, d = T(() => {
      var e;
      let u = p.value;
      if (h.value.length >= 1 && m.value !== !0 && s.emptySearch !== !0)
        if (typeof l.value == "number") {
          let t = h.value.filter((a) => Number(a[String(s.dataprop || s.prop)]) === Number(l.value));
          typeof h.value[0] == "object" && t.length >= 1 ? u = t[0][String(s.prop)] : typeof h.value[0] == "number" && (u = String(l.value));
        } else if (typeof l.value == "string") {
          let t = h.value.filter((a) => String(a[String(s.dataprop || s.prop)]) === l.value);
          typeof h.value[0] == "object" && t.length >= 1 ? u = t[0][String(s.prop)] : typeof h.value[0] == "string" && l.value !== "" && (u = l.value);
        } else typeof l.value == "object" && (Array.isArray(l.value) && l.value.length >= 1 ? typeof l.value[0] == "object" && String(s.prop) in l.value[0] ? u = l.value.map((t) => t[String(s.prop)]).join(", ") : u = l.value.join(", ") : l.value !== null && String(s.prop) in l.value && (u = l.value[String(s.prop)]));
      else (e = y.value) != null && e.value && m.value === !0 && s.emptySearch !== !0 && (u = y.value.value);
      return u;
    });
    return (u, e) => (o(), n("div", {
      class: N(["picker suggestion", { active: v.value, pickerUp: u.up }])
    }, [
      c("div", {
        class: "pickerBackdrop",
        style: B({ display: v.value ? "block" : "none" }),
        onClick: $
      }, null, 4),
      c("div", oe, [
        u.select ? (o(), n("input", {
          key: 0,
          type: "search",
          value: d.value,
          ref_key: "searchRef",
          ref: y,
          onInput: b,
          onClick: e[0] || (e[0] = (t) => {
            v.value = !0, f("load");
          }),
          onFocus: e[1] || (e[1] = (t) => m.value = !0),
          onBlur: e[2] || (e[2] = (t) => m.value = !1),
          class: "select",
          placeholder: u.placeholder
        }, null, 40, ie)) : (o(), n("input", {
          key: 1,
          type: "search",
          value: d.value,
          ref_key: "searchRef",
          ref: y,
          onInput: b,
          onClick: e[3] || (e[3] = (t) => {
            v.value = h.value.length >= 1 && p.value !== "", f("load");
          }),
          onFocus: e[4] || (e[4] = (t) => m.value = !0),
          onBlur: e[5] || (e[5] = (t) => m.value = !1),
          class: "input",
          placeholder: u.placeholder || "-- Search Option --"
        }, null, 40, ce)),
        c("div", de, [
          u.loading ? (o(), n("div", ve, e[6] || (e[6] = [
            c("span", { class: "spinner" }, null, -1)
          ]))) : (o(!0), n(C, { key: 1 }, A(h.value, (t, a) => (o(), n(C, {
            key: "option-" + t
          }, [
            typeof t == "string" ? (o(), n("div", {
              key: 0,
              onClick: (S) => w(t, t),
              class: N(["pickerItem", u.modelValue === t ? "active" : ""])
            }, g(t), 11, pe)) : typeof t == "object" && u.prop in t ? (o(), n("div", {
              key: 1,
              onClick: (S) => w(t[u.prop], t),
              class: N(["pickerItem", l.value[u.prop] === t[u.prop] || String(t[u.dataprop || u.prop]) === String(l.value) ? "active" : ""])
            }, g(t[u.prop]), 11, fe)) : (o(), n("div", {
              key: 2,
              onClick: V((S) => w(t, t), ["stop"]),
              class: N(["pickerItem", u.modelValue === t ? "active" : ""])
            }, [
              z(u.$slots, "default", { option: t }, void 0, !0)
            ], 10, ye))
          ], 64))), 128))
        ])
      ])
    ], 2));
  }
}), nl = /* @__PURE__ */ F(he, [["__scopeId", "data-v-873cb0de"]]), ke = { class: "list" }, ge = { class: "listHeader" }, me = ["onClick"], be = { class: "check" }, Ce = ["checked", "id"], Se = ["for"], $e = ["onClick"], Ne = { class: "check" }, je = ["checked", "id"], we = ["for"], Ve = ["onClick"], _e = ["onClick"], Ie = ["onClick"], Oe = ["onClick"], Le = /* @__PURE__ */ M({
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
  setup(_, { emit: O }) {
    const s = _, f = O, l = k(s.modelValue || {}), v = k(""), p = k(null), y = k(void 0);
    R(() => s.modelValue, () => {
      l.value = s.modelValue;
    });
    const j = () => {
      clearTimeout(y.value), y.value = setTimeout(() => {
        var d, i;
        v.value = "", (d = p.value) != null && d.value && ((i = p.value) == null ? void 0 : i.value) !== "" && (v.value = p.value.value), f("search", v.value);
      }, 500);
    }, m = T(() => {
      let d = s.options;
      return v.value.length >= 1 && (d = d.filter((i) => {
        if (isNaN(i) === !1 && Number(i) === Number(v.value))
          return !0;
        if (typeof i == "string" && i.toLowerCase().includes(v.value.toLowerCase()))
          return !0;
        if (typeof i == "object" && i !== null && Object.prototype.toString.call(i) === "[object Object]")
          for (const r of Object.keys(i)) {
            if (isNaN(i[r]) === !1 && Number(i[r]) === Number(v.value))
              return !0;
            if (typeof i[r] == "string" && i[r].toLowerCase().includes(v.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), d;
    }), b = (() => {
      let d = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", i = "";
      for (let r = 0; r < 10; r++)
        i += d.charAt(Math.floor(Math.random() * d.length));
      return i;
    })(), w = (d, i = "") => {
      i !== "" ? l.value.map((r) => r[i]).includes(d[i]) ? l.value.splice(l.value.findIndex((r) => r[i] === d[i]), 1) : l.value.push(d) : l.value.includes(d) ? l.value.splice(l.value.findIndex((r) => r === d), 1) : l.value.push(d), f("update:modelValue", l.value), f("change", l.value, d);
    }, $ = (d) => {
      typeof d == "object" && d !== null && String(s.datatype).toLowerCase() === "string" ? (l.value = d[String(s.dataprop || s.prop)], f("update:modelValue", String(l.value))) : typeof d == "object" && d !== null && String(s.datatype).toLowerCase() === "number" ? (l.value = d[String(s.dataprop || s.prop)], f("update:modelValue", Number(l.value))) : (l.value = d, f("update:modelValue", l.value)), f("change", l.value, d);
    };
    return (d, i) => (o(), n("div", null, [
      c("div", ke, [
        c("div", ge, [
          c("input", {
            type: "search",
            ref_key: "searchRef",
            ref: p,
            onInput: j,
            class: "input"
          }, null, 544)
        ]),
        Array.isArray(d.modelValue) ? (o(), n("div", {
          key: 0,
          class: "listMenu",
          style: B({ "max-height": Number(d.size) !== 0 ? Number(d.size) * 44 + "px" : "auto" })
        }, [
          (o(!0), n(C, null, A(m.value, (r, u) => (o(), n(C, {
            key: "option-" + r
          }, [
            typeof r == "string" ? (o(), n("div", {
              key: 0,
              onClick: V((e) => w(r), ["stop"]),
              class: "listItem"
            }, [
              c("div", be, [
                c("input", {
                  type: "checkbox",
                  class: "checkInput",
                  checked: l.value.includes(r),
                  id: "check-" + (I(b) + String(u)),
                  style: { "pointer-events": "none" }
                }, null, 8, Ce),
                c("label", {
                  class: "checkLabel",
                  for: "check-" + (I(b) + String(u)),
                  style: { "pointer-events": "none" }
                }, g(r), 9, Se)
              ])
            ], 8, me)) : typeof r == "object" && d.prop in r ? (o(), n("div", {
              key: 1,
              onClick: V((e) => w(r, d.prop), ["stop"]),
              class: "listItem"
            }, [
              c("div", Ne, [
                c("input", {
                  type: "checkbox",
                  class: "checkInput",
                  checked: l.value.includes(r),
                  id: "check-" + (I(b) + String(u)),
                  style: { "pointer-events": "none" }
                }, null, 8, je),
                c("label", {
                  class: "checkLabel",
                  for: "check-" + (I(b) + String(u)),
                  style: { "pointer-events": "none" }
                }, g(r[d.prop]), 9, we)
              ])
            ], 8, $e)) : (o(), n("div", {
              key: 2,
              onClick: V((e) => w(r), ["stop"]),
              class: N(["listItem", l.value.includes(r) ? "active" : ""])
            }, [
              z(d.$slots, "default", {
                option: r,
                selected: l.value
              }, void 0, !0)
            ], 10, Ve))
          ], 64))), 128))
        ], 4)) : (o(), n("div", {
          key: 1,
          class: "listMenu",
          style: B({ "max-height": Number(d.size) !== 0 ? Number(d.size) * 44 + "px" : "auto" })
        }, [
          (o(!0), n(C, null, A(m.value, (r, u) => (o(), n(C, {
            key: "option-" + r
          }, [
            typeof r == "string" ? (o(), n("div", {
              key: 0,
              onClick: (e) => $(r),
              class: N(["listItem", l.value === r ? "active" : ""])
            }, g(r), 11, _e)) : typeof r == "object" && d.prop in r ? (o(), n("div", {
              key: 1,
              onClick: (e) => $(r),
              class: N(["listItem", l.value[d.prop] === r[d.prop] || String(r[d.dataprop || d.prop]) === String(l.value) ? "active" : ""])
            }, g(r[d.prop]), 11, Ie)) : (o(), n("div", {
              key: 2,
              onClick: V((e) => $(r), ["stop"]),
              class: N(["listItem", l.value === r ? "active" : ""])
            }, [
              z(d.$slots, "default", {
                option: r,
                selected: l.value
              }, void 0, !0)
            ], 10, Oe))
          ], 64))), 128))
        ], 4))
      ])
    ]));
  }
}), ol = /* @__PURE__ */ F(Le, [["__scopeId", "data-v-d7fed8bc"]]), Be = { class: "tagWrap" }, Ae = { class: "tags" }, Te = { class: "tag groupItem" }, ze = ["onClick"], Me = { class: "tagContent" }, Re = ["onClick"], Fe = ["onClick"], We = ["onClick"], Ee = /* @__PURE__ */ M({
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
  setup(_, { emit: O }) {
    const s = _, f = O, l = k(!1), v = k(""), p = k(null), y = D(s.modelValue || []), j = k(s.options || []), m = k(s.separator || ","), h = k(s.prop || "value"), b = T(() => {
      let i = j.value;
      return v.value.length >= 1 && (i = i.filter((r) => {
        if (isNaN(r) === !1 && Number(r) === Number(v.value))
          return !0;
        if (typeof r == "string" && r.toLowerCase().includes(v.value.toLowerCase()))
          return !0;
        if (typeof r == "object" && r !== null && Object.prototype.toString.call(r) === "[object Object]")
          for (const u of Object.keys(r)) {
            if (isNaN(r[u]) === !1 && Number(r[u]) === Number(v.value))
              return !0;
            if (typeof r[u] == "string" && r[u].toLowerCase().includes(v.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), i;
    }), w = () => {
      p.value.focus();
    }, $ = (i) => {
      if (i.key !== "Enter" && b.value.length >= 1 ? l.value = !0 : l.value = !1, v.value.endsWith(m.value) || i.key === "Enter") {
        const r = v.value.replace(m.value, "");
        y.includes(r) || (y.push(r), j.value.includes(r) && (j.value = j.value.filter((u) => typeof u == "string" && u !== r ? !0 : typeof u == "object" && h.value in u && u[h.value] !== r))), v.value = "", f("update:modelValue", y);
      }
    };
    R(v, () => {
      if (p.value !== null) {
        const i = document.createElement("div");
        i.style.width = "max-content", i.style.position = "absolute", i.style.visibility = "hidden";
        const r = v.value.length >= 2 ? v.value : p.value.getAttribute("placeholder");
        i.innerHTML = r.replace(/ /g, "&nbsp;").trim(), document.body.appendChild(i);
        const u = Math.ceil(Number(window.getComputedStyle(i).width.replace("px", ""))) + 30;
        p.value.style.setProperty("width", u + "px"), i.remove();
      }
    });
    const d = (i) => {
      i.target.style.display = "none", l.value = !1;
    };
    return (i, r) => (o(), n("div", {
      class: N(["taggable", { active: l.value === !0 }])
    }, [
      c("div", {
        class: "tagBackdrop",
        style: B({ display: l.value ? "block" : "none" }),
        onClick: d
      }, null, 4),
      c("div", Be, [
        c("div", {
          class: "input tagToggler",
          onClick: w
        }, [
          c("div", Ae, [
            (o(!0), n(C, null, A(y, (u, e) => (o(), n("div", {
              key: "tag-" + e,
              class: "group"
            }, [
              c("div", Te, [
                typeof u == "string" && u !== "" ? (o(), n(C, { key: 0 }, [
                  E(g(u), 1)
                ], 64)) : typeof u == "object" && h.value in u ? (o(), n(C, { key: 1 }, [
                  E(g(u[h.value]), 1)
                ], 64)) : (o(), n(C, { key: 2 }, [
                  E(g(i.placeholder), 1)
                ], 64))
              ]),
              c("div", {
                class: "tag groupItem",
                onClick: (t) => y.splice(e, 1)
              }, r[3] || (r[3] = [
                c("svg", {
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
                  c("line", {
                    x1: "18",
                    y1: "6",
                    x2: "6",
                    y2: "18"
                  }),
                  c("line", {
                    x1: "6",
                    y1: "6",
                    x2: "18",
                    y2: "18"
                  })
                ], -1)
              ]), 8, ze)
            ]))), 128)),
            W(c("input", {
              type: "search",
              ref_key: "inputRef",
              ref: p,
              "onUpdate:modelValue": r[0] || (r[0] = (u) => v.value = u),
              class: "tagInput",
              onInput: r[1] || (r[1] = (u) => $(u)),
              onKeyup: r[2] || (r[2] = K((u) => $(u), ["enter"])),
              placeholder: "Add new tag"
            }, null, 544), [
              [U, v.value]
            ])
          ])
        ]),
        c("div", Me, [
          (o(!0), n(C, null, A(b.value, (u, e) => (o(), n(C, {
            key: "option-" + u
          }, [
            typeof u == "string" ? (o(), n("div", {
              key: 0,
              onClick: (t) => {
                v.value = u + ",", $(t);
              },
              class: "tagItem"
            }, g(u), 9, Re)) : typeof u == "object" && h.value in u ? (o(), n("div", {
              key: 1,
              onClick: (t) => {
                v.value = u[h.value] + ",", $(t);
              },
              class: "tagItem"
            }, g(u[h.value]), 9, Fe)) : (o(), n("div", {
              key: 2,
              onClick: (t) => {
                v.value = u + ",", $(t);
              },
              class: "tagItem"
            }, [
              z(i.$slots, "default", { option: u }, void 0, !0)
            ], 8, We))
          ], 64))), 128))
        ])
      ])
    ], 2));
  }
}), il = /* @__PURE__ */ F(Ee, [["__scopeId", "data-v-3acd22f1"]]), He = { class: "pickerOverlay pickerWrap" }, Ue = { class: "pickerContent" }, De = { class: "pickerHeader" }, Ke = ["onClick"], Pe = { class: "check" }, qe = ["checked", "id"], Ge = ["for"], Je = ["onClick"], Qe = { class: "check" }, Xe = ["checked", "id"], Ye = ["for"], Ze = ["onClick"], xe = ["onClick"], el = ["onClick"], ll = ["onClick"], tl = { class: "pickerFooter" }, al = { class: "tedirCategoryAdd" }, sl = /* @__PURE__ */ M({
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
  setup(_, { emit: O }) {
    const s = _, f = O, l = k(s.modelValue || {}), v = k(!1), p = k(""), y = k(null), j = k(void 0), m = k("");
    R(() => s.modelValue, () => {
      l.value = s.modelValue;
    });
    const h = () => {
      clearTimeout(j.value), j.value = setTimeout(() => {
        var e, t;
        p.value = "", (e = y.value) != null && e.value && ((t = y.value) == null ? void 0 : t.value) !== "" && (p.value = y.value.value), f("search", p.value);
      }, 500);
    }, b = T(() => {
      let e = s.options;
      return p.value.length >= 1 && (e = e.filter((t) => {
        if (isNaN(t) === !1 && Number(t) === Number(p.value))
          return !0;
        if (typeof t == "string" && t.toLowerCase().includes(p.value.toLowerCase()))
          return !0;
        if (typeof t == "object" && t !== null && Object.prototype.toString.call(t) === "[object Object]")
          for (const a of Object.keys(t)) {
            if (isNaN(t[a]) === !1 && Number(t[a]) === Number(p.value))
              return !0;
            if (typeof t[a] == "string" && t[a].toLowerCase().includes(p.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), e;
    }), $ = ((e = 10) => {
      let t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", a = "";
      for (let S = 0; S < e; S++)
        a += t.charAt(Math.floor(Math.random() * t.length));
      return a;
    })(), d = (e) => {
      var t;
      e.target.style.display = "none", v.value = !1, (t = y.value) != null && t.value && (y.value.value = "", p.value = "");
    }, i = (e, t = "") => {
      t !== "" ? l.value.map((a) => a[t]).includes(e[t]) ? l.value.splice(l.value.findIndex((a) => a[t] === e[t]), 1) : l.value.push(e) : l.value.includes(e) ? l.value.splice(l.value.findIndex((a) => a === e), 1) : l.value.push(e), f("update:modelValue", l.value), f("change", l.value, e);
    }, r = (e) => {
      typeof e == "object" && e !== null && String(s.datatype).toLowerCase() === "string" ? (l.value = e[String(s.dataprop || s.prop)], f("update:modelValue", String(l.value))) : typeof e == "object" && e !== null && String(s.datatype).toLowerCase() === "number" ? (l.value = e[String(s.dataprop || s.prop)], f("update:modelValue", Number(l.value))) : (l.value = e, f("update:modelValue", l.value)), v.value = !1, f("change", l.value, e);
    }, u = T(() => {
      let e = (s == null ? void 0 : s.placeholder) || "-- Select option --";
      if (b.value.length >= 1)
        if (typeof l.value == "number") {
          let t = b.value.filter((a) => Number(a[String(s.dataprop || s.prop)]) === Number(l.value));
          typeof b.value[0] == "object" && t.length >= 1 ? e = t[0][String(s.prop)] : typeof b.value[0] == "number" && (e = String(l.value));
        } else if (typeof l.value == "string") {
          let t = b.value.filter((a) => String(a[String(s.dataprop || s.prop)]) === l.value);
          typeof b.value[0] == "object" && t.length >= 1 ? e = t[0][String(s.prop)] : typeof b.value[0] == "string" && l.value !== "" && (e = l.value);
        } else typeof l.value == "object" && (Array.isArray(l.value) && l.value.length >= 1 ? typeof l.value[0] == "object" && String(s.prop) in l.value[0] ? e = l.value.map((t) => t[String(s.prop)]).join(", ") : e = l.value.join(", ") : l.value !== null && String(s.prop) in l.value && (e = l.value[String(s.prop)]));
      return e;
    });
    return (e, t) => (o(), n("div", {
      class: N(["picker suggestion tedirCategory", { active: v.value, pickerUp: e.up }])
    }, [
      c("div", {
        class: "pickerBackdrop",
        style: B({ display: v.value ? "block" : "none" }),
        onClick: d
      }, null, 4),
      c("div", He, [
        c("div", {
          class: "select pickerToggler",
          onClick: t[0] || (t[0] = (a) => v.value = !v.value)
        }, g(u.value), 1),
        c("div", Ue, [
          c("div", De, [
            c("input", {
              type: "search",
              ref_key: "searchRef",
              ref: y,
              onInput: h,
              class: "input"
            }, null, 544)
          ]),
          Array.isArray(l.value) ? (o(), n("div", {
            key: 0,
            class: "pickerMenu",
            style: B({ "max-height": Number(e.size) !== 0 ? Number(e.size) * 42 + "px" : "auto" })
          }, [
            (o(!0), n(C, null, A(b.value, (a, S) => (o(), n(C, {
              key: "option-" + a
            }, [
              typeof a == "string" ? (o(), n("div", {
                key: 0,
                onClick: V((L) => i(a), ["stop"]),
                class: "pickerItem"
              }, [
                c("div", Pe, [
                  c("input", {
                    type: "checkbox",
                    class: "checkInput",
                    checked: l.value.includes(a),
                    id: "check-" + (I($) + String(S)),
                    style: { "pointer-events": "none" }
                  }, null, 8, qe),
                  c("label", {
                    class: "checkLabel",
                    for: "check-" + (I($) + String(S)),
                    style: { "pointer-events": "none" }
                  }, g(a), 9, Ge)
                ])
              ], 8, Ke)) : typeof a == "object" && a !== null && e.prop in a ? (o(), n("div", {
                key: 1,
                onClick: V((L) => i(a, e.prop), ["stop"]),
                class: "pickerItem"
              }, [
                c("div", Qe, [
                  c("input", {
                    type: "checkbox",
                    class: "checkInput",
                    checked: l.value.includes(a),
                    id: "check-" + (I($) + String(S)),
                    style: { "pointer-events": "none" }
                  }, null, 8, Xe),
                  c("label", {
                    class: "checkLabel",
                    for: "check-" + (I($) + String(S)),
                    style: { "pointer-events": "none" }
                  }, g(a[e.prop]), 9, Ye)
                ])
              ], 8, Je)) : (o(), n("div", {
                key: 2,
                onClick: V((L) => i(a), ["stop"]),
                class: "pickerItem"
              }, [
                z(e.$slots, "default", {
                  option: a,
                  selected: l.value
                }, void 0, !0)
              ], 8, Ze))
            ], 64))), 128))
          ], 4)) : (o(), n("div", {
            key: 1,
            class: "pickerMenu",
            style: B({ "max-height": Number(e.size) !== 0 ? Number(e.size) * 42 + "px" : "auto" })
          }, [
            (o(!0), n(C, null, A(b.value, (a, S) => (o(), n(C, {
              key: "option-" + a
            }, [
              typeof a == "string" ? (o(), n("div", {
                key: 0,
                onClick: (L) => r(a),
                class: N(["pickerItem", l.value === a ? "active" : ""])
              }, g(a), 11, xe)) : typeof a == "object" && a !== null && e.prop in a ? (o(), n("div", {
                key: 1,
                onClick: (L) => r(a),
                class: N(["pickerItem", l.value[e.prop] === a[e.prop] || String(a[e.dataprop || e.prop]) === String(l.value) ? "active" : ""])
              }, g(a[e.prop]), 11, el)) : (o(), n("div", {
                key: 2,
                onClick: V((L) => r(a), ["stop"]),
                class: N(["pickerItem", l.value === a ? "active" : ""])
              }, [
                z(e.$slots, "default", {
                  option: a,
                  selected: l.value
                }, void 0, !0)
              ], 10, ll))
            ], 64))), 128))
          ], 4)),
          c("div", tl, [
            c("div", al, [
              W(c("input", {
                type: "text",
                "onUpdate:modelValue": t[1] || (t[1] = (a) => m.value = a),
                class: "input",
                placeholder: "Add New Category"
              }, null, 512), [
                [U, m.value]
              ]),
              c("button", {
                type: "button",
                class: "button tedirCategoryButton",
                onClick: t[2] || (t[2] = (a) => {
                  f("add", m.value), m.value = "";
                })
              }, "Save")
            ])
          ])
        ])
      ])
    ], 2));
  }
}), cl = /* @__PURE__ */ F(sl, [["__scopeId", "data-v-54a3b4ba"]]);
export {
  cl as CategoryBox,
  nl as ComboBox,
  ol as ListBox,
  rl as SelectBox,
  il as TagBox
};
