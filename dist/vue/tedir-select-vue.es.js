import { defineComponent as A, ref as $, watch as M, computed as T, openBlock as c, createElementBlock as n, normalizeClass as N, createElementVNode as i, normalizeStyle as L, unref as g, Fragment as p, createTextVNode as w, toDisplayString as C, renderList as O, withModifiers as V, renderSlot as _, reactive as E, withDirectives as R, withKeys as H, vModelText as W, pushScopeId as F, popScopeId as D } from "vue";
const K = { class: "pickerWrap" }, U = { class: "pickerContent" }, P = { class: "pickerHeader" }, q = ["onClick"], G = { class: "check" }, J = ["checked", "id"], Q = ["for"], X = ["onClick"], Y = { class: "check" }, Z = ["checked", "id"], ee = ["for"], le = ["onClick"], te = ["onClick"], ae = ["onClick"], se = ["onClick"], ue = /* @__PURE__ */ A({
  __name: "SelectBox",
  props: {
    modelValue: { default: {} },
    options: { default: [] },
    prop: { default: "value" },
    datatype: { default: "" },
    dataprop: { default: "" },
    placeholder: { default: "-- Select option --" },
    size: { default: 0 },
    type: { default: "" }
  },
  emits: ["update:modelValue", "change", "search"],
  setup(s, { emit: h }) {
    const d = s, e = $(d.modelValue || {}), r = $(!1), k = $(""), m = $(null), I = $(void 0);
    M(() => d.modelValue, () => {
      e.value = d.modelValue;
    });
    const j = () => {
      clearTimeout(I.value), I.value = setTimeout(() => {
        var l, t;
        k.value = "", ((l = m.value) == null ? void 0 : l.value) && ((t = m.value) == null ? void 0 : t.value) !== "" && (k.value = m.value.value), h("search", k.value);
      }, 500);
    }, S = T(() => {
      let l = d.options;
      return k.value.length >= 1 && (l = l.filter((t) => {
        if (isNaN(t) === !1 && Number(t) === Number(k.value))
          return !0;
        if (typeof t == "string" && t.toLowerCase().includes(k.value.toLowerCase()))
          return !0;
        if (typeof t == "object" && t !== null && Object.prototype.toString.call(t) === "[object Object]")
          for (const a of Object.keys(t)) {
            if (isNaN(t[a]) === !1 && Number(t[a]) === Number(k.value))
              return !0;
            if (typeof t[a] == "string" && t[a].toLowerCase().includes(k.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), l;
    }), y = ((l = 10) => {
      let t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", a = "";
      for (let u = 0; u < l; u++)
        a += t.charAt(Math.floor(Math.random() * t.length));
      return a;
    })(), v = (l) => {
      var t;
      l.target.style.display = "none", r.value = !1, (t = m.value) != null && t.value && (m.value.value = "", k.value = "");
    }, f = (l, t = "") => {
      t !== "" ? e.value.map((a) => a[t]).includes(l[t]) ? e.value.splice(e.value.findIndex((a) => a[t] === l[t]), 1) : e.value.push(l) : e.value.includes(l) ? e.value.splice(e.value.findIndex((a) => a === l), 1) : e.value.push(l), h("update:modelValue", e.value), h("change", e.value, l);
    }, o = (l) => {
      typeof l == "object" && l !== null && String(d.datatype).toLowerCase() === "string" ? (e.value = l[String(d.dataprop || d.prop)], h("update:modelValue", String(e.value))) : typeof l == "object" && l !== null && String(d.datatype).toLowerCase() === "number" ? (e.value = l[String(d.dataprop || d.prop)], h("update:modelValue", Number(e.value))) : (e.value = l, h("update:modelValue", e.value)), r.value = !1, h("change", e.value, l);
    };
    return (l, t) => (c(), n("div", {
      class: N(["picker suggestion", r.value ? "active" : ""])
    }, [
      i("div", {
        class: "pickerBackdrop",
        style: L({ display: r.value ? "block" : "none" }),
        onClick: v
      }, null, 4),
      i("div", K, [
        i("div", {
          class: "select pickerToggler",
          onClick: t[0] || (t[0] = (a) => r.value = !r.value)
        }, [
          typeof e.value == "string" && e.value !== "" && g(S).length >= 1 && typeof g(S)[0] == "string" ? (c(), n(p, { key: 0 }, [
            w(C(e.value), 1)
          ], 64)) : typeof e.value == "string" && g(S).filter((a) => String(a[String(s.dataprop || s.prop)]) === e.value).length >= 1 && typeof g(S).filter((a) => String(a[String(s.dataprop || s.prop)]) === e.value)[0] == "object" ? (c(), n(p, { key: 1 }, [
            w(C(g(S).filter((a) => String(a[String(s.dataprop || s.prop)]) === e.value)[0][s.prop]), 1)
          ], 64)) : typeof e.value == "object" && e.value !== null && s.prop in e.value ? (c(), n(p, { key: 2 }, [
            w(C(e.value[s.prop]), 1)
          ], 64)) : Array.isArray(e.value) && e.value.length >= 1 && typeof e.value[0] == "string" ? (c(), n(p, { key: 3 }, [
            w(C(e.value.join(", ")), 1)
          ], 64)) : Array.isArray(e.value) && e.value.length >= 1 && typeof e.value[0] == "object" && s.prop in e.value[0] ? (c(), n(p, { key: 4 }, [
            w(C(e.value.map((a) => a[s.prop]).join(", ")), 1)
          ], 64)) : (c(), n(p, { key: 5 }, [
            w(C(s.placeholder), 1)
          ], 64))
        ]),
        i("div", U, [
          i("div", P, [
            i("input", {
              type: "search",
              ref_key: "searchRef",
              ref: m,
              onInput: j,
              class: "input"
            }, null, 544)
          ]),
          Array.isArray(e.value) ? (c(), n("div", {
            key: 0,
            class: "pickerMenu",
            style: L({ "max-height": Number(s.size) !== 0 ? Number(s.size) * 42 + "px" : "auto" })
          }, [
            (c(!0), n(p, null, O(g(S), (a, u) => (c(), n(p, {
              key: "option-" + a
            }, [
              typeof a == "string" && s.type !== "slot" ? (c(), n("div", {
                key: 0,
                onClick: V((x) => f(a), ["stop"]),
                class: "pickerItem"
              }, [
                i("div", G, [
                  i("input", {
                    type: "checkbox",
                    class: "checkInput",
                    checked: e.value.includes(a),
                    id: "check-" + (g(y) + String(u)),
                    style: { "pointer-events": "none" }
                  }, null, 8, J),
                  i("label", {
                    class: "checkLabel",
                    for: "check-" + (g(y) + String(u)),
                    style: { "pointer-events": "none" }
                  }, C(a), 9, Q)
                ])
              ], 8, q)) : typeof a == "object" && a !== null && s.prop in a && s.type !== "slot" ? (c(), n("div", {
                key: 1,
                onClick: V((x) => f(a, s.prop), ["stop"]),
                class: "pickerItem"
              }, [
                i("div", Y, [
                  i("input", {
                    type: "checkbox",
                    class: "checkInput",
                    checked: e.value.includes(a),
                    id: "check-" + (g(y) + String(u)),
                    style: { "pointer-events": "none" }
                  }, null, 8, Z),
                  i("label", {
                    class: "checkLabel",
                    for: "check-" + (g(y) + String(u)),
                    style: { "pointer-events": "none" }
                  }, C(a[s.prop]), 9, ee)
                ])
              ], 8, X)) : (c(), n("div", {
                key: 2,
                onClick: V((x) => f(a), ["stop"]),
                class: "pickerItem"
              }, [
                _(l.$slots, "default", {
                  option: a,
                  selected: e.value
                }, void 0, !0)
              ], 8, le))
            ], 64))), 128))
          ], 4)) : (c(), n("div", {
            key: 1,
            class: "pickerMenu",
            style: L({ "max-height": Number(s.size) !== 0 ? Number(s.size) * 42 + "px" : "auto" })
          }, [
            (c(!0), n(p, null, O(g(S), (a, u) => (c(), n(p, {
              key: "option-" + a
            }, [
              typeof a == "string" && s.type !== "slot" ? (c(), n("div", {
                key: 0,
                onClick: (x) => o(a),
                class: N(["pickerItem", e.value === a ? "active" : ""])
              }, C(a), 11, te)) : typeof a == "object" && a !== null && s.prop in a && s.type !== "slot" ? (c(), n("div", {
                key: 1,
                onClick: (x) => o(a),
                class: N(["pickerItem", e.value[s.prop] === a[s.prop] || String(a[s.dataprop || s.prop]) === String(e.value) ? "active" : ""])
              }, C(a[s.prop]), 11, ae)) : (c(), n("div", {
                key: 2,
                onClick: V((x) => o(a), ["stop"]),
                class: N(["pickerItem", e.value === a ? "active" : ""])
              }, [
                _(l.$slots, "default", {
                  option: a,
                  selected: e.value
                }, void 0, !0)
              ], 10, se))
            ], 64))), 128))
          ], 4))
        ])
      ])
    ], 2));
  }
});
const z = (s, h) => {
  const d = s.__vccOpts || s;
  for (const [e, r] of h)
    d[e] = r;
  return d;
}, sl = /* @__PURE__ */ z(ue, [["__scopeId", "data-v-50169185"]]), ce = { class: "pickerWrap" }, ne = { class: "pickerContent pickerSizing" }, re = ["onClick"], oe = ["onClick"], ie = ["onClick"], de = /* @__PURE__ */ A({
  __name: "ComboBox",
  props: {
    modelValue: { default: null },
    options: { default: [] },
    prop: { default: "value" },
    placeholder: { default: "Search option" },
    size: { default: 0 },
    select: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "search"],
  setup(s, { emit: h }) {
    const d = s, e = $(!1), r = $(""), k = $(null), m = $(void 0), I = T(() => {
      let b = d.options;
      return r.value.length >= 1 && (b = b.filter((y) => {
        if (isNaN(y) === !1 && Number(y) === Number(r.value))
          return !0;
        if (typeof y == "string" && y.toLowerCase().includes(r.value.toLowerCase()))
          return !0;
        if (typeof y == "object" && y !== null && Object.prototype.toString.call(y) === "[object Object]")
          for (const v of Object.keys(y)) {
            if (isNaN(y[v]) === !1 && Number(y[v]) === Number(r.value))
              return !0;
            if (typeof y[v] == "string" && y[v].toLowerCase().includes(r.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), b;
    }), j = () => {
      clearTimeout(m.value), m.value = setTimeout(() => {
        var b, y;
        r.value = "", ((b = k.value) == null ? void 0 : b.value) && ((y = k.value) == null ? void 0 : y.value) !== "" && (r.value = k.value.value), h("search", r.value), I.value.length >= 1 && r.value !== "" ? e.value = !0 : e.value = !1;
      }, 500);
    }, S = (b) => {
      b.target.style.display = "none", e.value = !1;
    };
    return (b, y) => (c(), n("div", {
      class: N(["picker suggestion", e.value ? "active" : ""])
    }, [
      i("div", {
        class: "pickerBackdrop",
        style: L({ display: e.value ? "block" : "none" }),
        onClick: S
      }, null, 4),
      i("div", ce, [
        s.select ? (c(), n("input", {
          key: 0,
          type: "search",
          ref_key: "searchRef",
          ref: k,
          onInput: j,
          onClick: y[0] || (y[0] = (v) => e.value = !0),
          class: "select"
        }, null, 544)) : (c(), n("input", {
          key: 1,
          type: "search",
          ref_key: "searchRef",
          ref: k,
          onInput: j,
          onClick: y[1] || (y[1] = (v) => g(I).length >= 1 && r.value !== "" ? e.value = !0 : e.value = !1),
          class: "input"
        }, null, 544)),
        i("div", ne, [
          (c(!0), n(p, null, O(g(I), (v, f) => (c(), n(p, {
            key: "option-" + v
          }, [
            typeof v == "string" ? (c(), n("div", {
              key: 0,
              onClick: (o) => {
                r.value = v, h("update:modelValue", v), e.value = !1;
              },
              class: N(["pickerItem", s.modelValue === v ? "active" : ""])
            }, C(v), 11, re)) : typeof v == "object" && s.prop in v ? (c(), n("div", {
              key: 1,
              onClick: (o) => {
                r.value = v[s.prop], h("update:modelValue", v), e.value = !1;
              },
              class: N(["pickerItem", s.modelValue[s.prop] === v[s.prop] ? "active" : ""])
            }, C(v[s.prop]), 11, oe)) : (c(), n("div", {
              key: 2,
              onClick: (o) => {
                r.value = v, h("update:modelValue", v), e.value = !1;
              },
              class: N(["pickerItem", s.modelValue === v ? "active" : ""])
            }, [
              _(b.$slots, "default", { option: v }, void 0, !0)
            ], 10, ie))
          ], 64))), 128))
        ])
      ])
    ], 2));
  }
});
const ul = /* @__PURE__ */ z(de, [["__scopeId", "data-v-f7a05695"]]), ve = { class: "list" }, fe = { class: "listHeader" }, ke = ["onClick"], he = { class: "check" }, ye = ["checked", "id"], pe = ["for"], ge = ["onClick"], Ce = { class: "check" }, be = ["checked", "id"], me = ["for"], $e = ["onClick"], Se = ["onClick"], Ne = ["onClick"], Ie = ["onClick"], je = /* @__PURE__ */ A({
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
  setup(s, { emit: h }) {
    const d = s, e = $(d.modelValue || {}), r = $(""), k = $(null), m = $(void 0);
    M(() => d.modelValue, () => {
      e.value = d.modelValue;
    });
    const I = () => {
      clearTimeout(m.value), m.value = setTimeout(() => {
        var f, o;
        r.value = "", ((f = k.value) == null ? void 0 : f.value) && ((o = k.value) == null ? void 0 : o.value) !== "" && (r.value = k.value.value), h("search", r.value);
      }, 500);
    }, j = T(() => {
      let f = d.options;
      return r.value.length >= 1 && (f = f.filter((o) => {
        if (isNaN(o) === !1 && Number(o) === Number(r.value))
          return !0;
        if (typeof o == "string" && o.toLowerCase().includes(r.value.toLowerCase()))
          return !0;
        if (typeof o == "object" && o !== null && Object.prototype.toString.call(o) === "[object Object]")
          for (const l of Object.keys(o)) {
            if (isNaN(o[l]) === !1 && Number(o[l]) === Number(r.value))
              return !0;
            if (typeof o[l] == "string" && o[l].toLowerCase().includes(r.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), f;
    }), b = (() => {
      let f = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", o = "";
      for (let l = 0; l < 10; l++)
        o += f.charAt(Math.floor(Math.random() * f.length));
      return o;
    })(), y = (f, o = "") => {
      o !== "" ? e.value.map((l) => l[o]).includes(f[o]) ? e.value.splice(e.value.findIndex((l) => l[o] === f[o]), 1) : e.value.push(f) : e.value.includes(f) ? e.value.splice(e.value.findIndex((l) => l === f), 1) : e.value.push(f), h("update:modelValue", e.value), h("change", e.value, f);
    }, v = (f) => {
      typeof f == "object" && f !== null && String(d.datatype).toLowerCase() === "string" ? (e.value = f[String(d.dataprop || d.prop)], h("update:modelValue", String(e.value))) : typeof f == "object" && f !== null && String(d.datatype).toLowerCase() === "number" ? (e.value = f[String(d.dataprop || d.prop)], h("update:modelValue", Number(e.value))) : (e.value = f, h("update:modelValue", e.value)), h("change", e.value, f);
    };
    return (f, o) => (c(), n("div", null, [
      i("div", ve, [
        i("div", fe, [
          i("input", {
            type: "search",
            ref_key: "searchRef",
            ref: k,
            onInput: I,
            class: "input"
          }, null, 544)
        ]),
        Array.isArray(s.modelValue) ? (c(), n("div", {
          key: 0,
          class: "listMenu",
          style: L({ "max-height": Number(s.size) !== 0 ? Number(s.size) * 44 + "px" : "auto" })
        }, [
          (c(!0), n(p, null, O(g(j), (l, t) => (c(), n(p, {
            key: "option-" + l
          }, [
            typeof l == "string" ? (c(), n("div", {
              key: 0,
              onClick: V((a) => y(l), ["stop"]),
              class: "listItem"
            }, [
              i("div", he, [
                i("input", {
                  type: "checkbox",
                  class: "checkInput",
                  checked: e.value.includes(l),
                  id: "check-" + (g(b) + String(t)),
                  style: { "pointer-events": "none" }
                }, null, 8, ye),
                i("label", {
                  class: "checkLabel",
                  for: "check-" + (g(b) + String(t)),
                  style: { "pointer-events": "none" }
                }, C(l), 9, pe)
              ])
            ], 8, ke)) : typeof l == "object" && s.prop in l ? (c(), n("div", {
              key: 1,
              onClick: V((a) => y(l, s.prop), ["stop"]),
              class: "listItem"
            }, [
              i("div", Ce, [
                i("input", {
                  type: "checkbox",
                  class: "checkInput",
                  checked: e.value.includes(l),
                  id: "check-" + (g(b) + String(t)),
                  style: { "pointer-events": "none" }
                }, null, 8, be),
                i("label", {
                  class: "checkLabel",
                  for: "check-" + (g(b) + String(t)),
                  style: { "pointer-events": "none" }
                }, C(l[s.prop]), 9, me)
              ])
            ], 8, ge)) : (c(), n("div", {
              key: 2,
              onClick: V((a) => y(l), ["stop"]),
              class: N(["listItem", e.value.includes(l) ? "active" : ""])
            }, [
              _(f.$slots, "default", {
                option: l,
                selected: e.value
              }, void 0, !0)
            ], 10, $e))
          ], 64))), 128))
        ], 4)) : (c(), n("div", {
          key: 1,
          class: "listMenu",
          style: L({ "max-height": Number(s.size) !== 0 ? Number(s.size) * 44 + "px" : "auto" })
        }, [
          (c(!0), n(p, null, O(g(j), (l, t) => (c(), n(p, {
            key: "option-" + l
          }, [
            typeof l == "string" ? (c(), n("div", {
              key: 0,
              onClick: (a) => v(l),
              class: N(["listItem", e.value === l ? "active" : ""])
            }, C(l), 11, Se)) : typeof l == "object" && s.prop in l ? (c(), n("div", {
              key: 1,
              onClick: (a) => v(l),
              class: N(["listItem", e.value[s.prop] === l[s.prop] || String(l[s.dataprop || s.prop]) === String(e.value) ? "active" : ""])
            }, C(l[s.prop]), 11, Ne)) : (c(), n("div", {
              key: 2,
              onClick: V((a) => v(l), ["stop"]),
              class: N(["listItem", e.value === l ? "active" : ""])
            }, [
              _(f.$slots, "default", {
                option: l,
                selected: e.value
              }, void 0, !0)
            ], 10, Ie))
          ], 64))), 128))
        ], 4))
      ])
    ]));
  }
});
const cl = /* @__PURE__ */ z(je, [["__scopeId", "data-v-d7fed8bc"]]), we = (s) => (F("data-v-3acd22f1"), s = s(), D(), s), xe = { class: "tagWrap" }, Ve = { class: "tags" }, Le = { class: "tag groupItem" }, Oe = ["onClick"], _e = /* @__PURE__ */ we(() => /* @__PURE__ */ i("svg", {
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
  /* @__PURE__ */ i("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }),
  /* @__PURE__ */ i("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  })
], -1)), Be = [
  _e
], Ae = { class: "tagContent" }, Te = ["onClick"], ze = ["onClick"], Me = ["onClick"], Re = /* @__PURE__ */ A({
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
  setup(s, { emit: h }) {
    const d = s, e = $(!1), r = $(""), k = $(null), m = E(d.modelValue || []), I = $(d.options || []), j = $(d.separator || ","), S = $(d.prop || "value"), b = T(() => {
      let o = I.value;
      return r.value.length >= 1 && (o = o.filter((l) => {
        if (isNaN(l) === !1 && Number(l) === Number(r.value))
          return !0;
        if (typeof l == "string" && l.toLowerCase().includes(r.value.toLowerCase()))
          return !0;
        if (typeof l == "object" && l !== null && Object.prototype.toString.call(l) === "[object Object]")
          for (const t of Object.keys(l)) {
            if (isNaN(l[t]) === !1 && Number(l[t]) === Number(r.value))
              return !0;
            if (typeof l[t] == "string" && l[t].toLowerCase().includes(r.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), o;
    }), y = () => {
      k.value.focus();
    }, v = (o) => {
      if (o.key !== "Enter" && b.value.length >= 1 ? e.value = !0 : e.value = !1, r.value.endsWith(j.value) || o.key === "Enter") {
        const l = r.value.replace(j.value, "");
        m.includes(l) || (m.push(l), I.value.includes(l) && (I.value = I.value.filter((t) => typeof t == "string" && t !== l ? !0 : typeof t == "object" && S.value in t && t[S.value] !== l))), r.value = "", h("update:modelValue", m);
      }
    };
    M(r, () => {
      if (k.value !== null) {
        const o = document.createElement("div");
        o.style.width = "max-content", o.style.position = "absolute", o.style.visibility = "hidden";
        const l = r.value.length >= 2 ? r.value : k.value.getAttribute("placeholder");
        o.innerHTML = l.replace(/ /g, "&nbsp;").trim(), document.body.appendChild(o);
        const t = Math.ceil(Number(window.getComputedStyle(o).width.replace("px", ""))) + 30;
        k.value.style.setProperty("width", t + "px"), o.remove();
      }
    });
    const f = (o) => {
      o.target.style.display = "none", e.value = !1;
    };
    return (o, l) => (c(), n("div", {
      class: N(["taggable", { active: e.value === !0 }])
    }, [
      i("div", {
        class: "tagBackdrop",
        style: L({ display: e.value ? "block" : "none" }),
        onClick: f
      }, null, 4),
      i("div", xe, [
        i("div", {
          class: "input tagToggler",
          onClick: y
        }, [
          i("div", Ve, [
            (c(!0), n(p, null, O(m, (t, a) => (c(), n("div", {
              key: "tag-" + a,
              class: "group"
            }, [
              i("div", Le, [
                typeof t == "string" && t !== "" ? (c(), n(p, { key: 0 }, [
                  w(C(t), 1)
                ], 64)) : typeof t == "object" && S.value in t ? (c(), n(p, { key: 1 }, [
                  w(C(t[S.value]), 1)
                ], 64)) : (c(), n(p, { key: 2 }, [
                  w(C(s.placeholder), 1)
                ], 64))
              ]),
              i("div", {
                class: "tag groupItem",
                onClick: (u) => m.splice(a, 1)
              }, Be, 8, Oe)
            ]))), 128)),
            R(i("input", {
              type: "search",
              ref_key: "inputRef",
              ref: k,
              "onUpdate:modelValue": l[0] || (l[0] = (t) => r.value = t),
              class: "tagInput",
              onInput: l[1] || (l[1] = (t) => v(t)),
              onKeyup: l[2] || (l[2] = H((t) => v(t), ["enter"])),
              placeholder: "Add new tag"
            }, null, 544), [
              [W, r.value]
            ])
          ])
        ]),
        i("div", Ae, [
          (c(!0), n(p, null, O(g(b), (t, a) => (c(), n(p, {
            key: "option-" + t
          }, [
            typeof t == "string" ? (c(), n("div", {
              key: 0,
              onClick: (u) => {
                r.value = t + ",", v(u);
              },
              class: "tagItem"
            }, C(t), 9, Te)) : typeof t == "object" && S.value in t ? (c(), n("div", {
              key: 1,
              onClick: (u) => {
                r.value = t[S.value] + ",", v(u);
              },
              class: "tagItem"
            }, C(t[S.value]), 9, ze)) : (c(), n("div", {
              key: 2,
              onClick: (u) => {
                r.value = t + ",", v(u);
              },
              class: "tagItem"
            }, [
              _(o.$slots, "default", { option: t }, void 0, !0)
            ], 8, Me))
          ], 64))), 128))
        ])
      ])
    ], 2));
  }
});
const nl = /* @__PURE__ */ z(Re, [["__scopeId", "data-v-3acd22f1"]]), We = { class: "pickerOverlay pickerWrap" }, Ee = { class: "pickerContent" }, He = { class: "pickerHeader" }, Fe = ["onClick"], De = { class: "check" }, Ke = ["checked", "id"], Ue = ["for"], Pe = ["onClick"], qe = { class: "check" }, Ge = ["checked", "id"], Je = ["for"], Qe = ["onClick"], Xe = ["onClick"], Ye = ["onClick"], Ze = ["onClick"], el = { class: "pickerFooter" }, ll = { class: "tedirCategoryAdd" }, tl = /* @__PURE__ */ A({
  __name: "CategoryBox",
  props: {
    modelValue: { default: {} },
    options: { default: [] },
    prop: { default: "value" },
    datatype: { default: "" },
    dataprop: { default: "" },
    placeholder: { default: "-- Select option --" },
    size: { default: 0 }
  },
  emits: ["update:modelValue", "change", "add", "search"],
  setup(s, { emit: h }) {
    const d = s, e = $(d.modelValue || {}), r = $(!1), k = $(""), m = $(null), I = $(void 0), j = $("");
    M(() => d.modelValue, () => {
      e.value = d.modelValue;
    });
    const S = () => {
      clearTimeout(I.value), I.value = setTimeout(() => {
        var t, a;
        k.value = "", ((t = m.value) == null ? void 0 : t.value) && ((a = m.value) == null ? void 0 : a.value) !== "" && (k.value = m.value.value), h("search", k.value);
      }, 500);
    }, b = T(() => {
      let t = d.options;
      return k.value.length >= 1 && (t = t.filter((a) => {
        if (isNaN(a) === !1 && Number(a) === Number(k.value))
          return !0;
        if (typeof a == "string" && a.toLowerCase().includes(k.value.toLowerCase()))
          return !0;
        if (typeof a == "object" && a !== null && Object.prototype.toString.call(a) === "[object Object]")
          for (const u of Object.keys(a)) {
            if (isNaN(a[u]) === !1 && Number(a[u]) === Number(k.value))
              return !0;
            if (typeof a[u] == "string" && a[u].toLowerCase().includes(k.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), t;
    }), v = ((t = 10) => {
      let a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", u = "";
      for (let x = 0; x < t; x++)
        u += a.charAt(Math.floor(Math.random() * a.length));
      return u;
    })(), f = (t) => {
      var a;
      t.target.style.display = "none", r.value = !1, (a = m.value) != null && a.value && (m.value.value = "", k.value = "");
    }, o = (t, a = "") => {
      a !== "" ? e.value.map((u) => u[a]).includes(t[a]) ? e.value.splice(e.value.findIndex((u) => u[a] === t[a]), 1) : e.value.push(t) : e.value.includes(t) ? e.value.splice(e.value.findIndex((u) => u === t), 1) : e.value.push(t), h("update:modelValue", e.value), h("change", e.value, t);
    }, l = (t) => {
      typeof t == "object" && t !== null && String(d.datatype).toLowerCase() === "string" ? (e.value = t[String(d.dataprop || d.prop)], h("update:modelValue", String(e.value))) : typeof t == "object" && t !== null && String(d.datatype).toLowerCase() === "number" ? (e.value = t[String(d.dataprop || d.prop)], h("update:modelValue", Number(e.value))) : (e.value = t, h("update:modelValue", e.value)), r.value = !1, h("change", e.value, t);
    };
    return (t, a) => (c(), n("div", {
      class: N(["picker suggestion tedirCategory", r.value ? "active" : ""])
    }, [
      i("div", {
        class: "pickerBackdrop",
        style: L({ display: r.value ? "block" : "none" }),
        onClick: f
      }, null, 4),
      i("div", We, [
        i("div", {
          class: "select pickerToggler",
          onClick: a[0] || (a[0] = (u) => r.value = !r.value)
        }, [
          typeof e.value == "string" && e.value !== "" && g(b).length >= 1 && typeof g(b)[0] == "string" ? (c(), n(p, { key: 0 }, [
            w(C(e.value), 1)
          ], 64)) : typeof e.value == "string" && g(b).filter((u) => String(u[String(s.dataprop || s.prop)]) === e.value).length >= 1 && typeof g(b).filter((u) => String(u[String(s.dataprop || s.prop)]) === e.value)[0] == "object" ? (c(), n(p, { key: 1 }, [
            w(C(g(b).filter((u) => String(u[String(s.dataprop || s.prop)]) === e.value)[0][s.prop]), 1)
          ], 64)) : typeof e.value == "object" && e.value !== null && s.prop in e.value ? (c(), n(p, { key: 2 }, [
            w(C(e.value[s.prop]), 1)
          ], 64)) : Array.isArray(e.value) && e.value.length >= 1 && typeof e.value[0] == "string" ? (c(), n(p, { key: 3 }, [
            w(C(e.value.join(", ")), 1)
          ], 64)) : Array.isArray(e.value) && e.value.length >= 1 && typeof e.value[0] == "object" && s.prop in e.value[0] ? (c(), n(p, { key: 4 }, [
            w(C(e.value.map((u) => u[s.prop]).join(", ")), 1)
          ], 64)) : (c(), n(p, { key: 5 }, [
            w(C(s.placeholder), 1)
          ], 64))
        ]),
        i("div", Ee, [
          i("div", He, [
            i("input", {
              type: "search",
              ref_key: "searchRef",
              ref: m,
              onInput: S,
              class: "input"
            }, null, 544)
          ]),
          Array.isArray(e.value) ? (c(), n("div", {
            key: 0,
            class: "pickerMenu",
            style: L({ "max-height": Number(s.size) !== 0 ? Number(s.size) * 42 + "px" : "auto" })
          }, [
            (c(!0), n(p, null, O(g(b), (u, x) => (c(), n(p, {
              key: "option-" + u
            }, [
              typeof u == "string" ? (c(), n("div", {
                key: 0,
                onClick: V((B) => o(u), ["stop"]),
                class: "pickerItem"
              }, [
                i("div", De, [
                  i("input", {
                    type: "checkbox",
                    class: "checkInput",
                    checked: e.value.includes(u),
                    id: "check-" + (g(v) + String(x)),
                    style: { "pointer-events": "none" }
                  }, null, 8, Ke),
                  i("label", {
                    class: "checkLabel",
                    for: "check-" + (g(v) + String(x)),
                    style: { "pointer-events": "none" }
                  }, C(u), 9, Ue)
                ])
              ], 8, Fe)) : typeof u == "object" && u !== null && s.prop in u ? (c(), n("div", {
                key: 1,
                onClick: V((B) => o(u, s.prop), ["stop"]),
                class: "pickerItem"
              }, [
                i("div", qe, [
                  i("input", {
                    type: "checkbox",
                    class: "checkInput",
                    checked: e.value.includes(u),
                    id: "check-" + (g(v) + String(x)),
                    style: { "pointer-events": "none" }
                  }, null, 8, Ge),
                  i("label", {
                    class: "checkLabel",
                    for: "check-" + (g(v) + String(x)),
                    style: { "pointer-events": "none" }
                  }, C(u[s.prop]), 9, Je)
                ])
              ], 8, Pe)) : (c(), n("div", {
                key: 2,
                onClick: V((B) => o(u), ["stop"]),
                class: "pickerItem"
              }, [
                _(t.$slots, "default", {
                  option: u,
                  selected: e.value
                }, void 0, !0)
              ], 8, Qe))
            ], 64))), 128))
          ], 4)) : (c(), n("div", {
            key: 1,
            class: "pickerMenu",
            style: L({ "max-height": Number(s.size) !== 0 ? Number(s.size) * 42 + "px" : "auto" })
          }, [
            (c(!0), n(p, null, O(g(b), (u, x) => (c(), n(p, {
              key: "option-" + u
            }, [
              typeof u == "string" ? (c(), n("div", {
                key: 0,
                onClick: (B) => l(u),
                class: N(["pickerItem", e.value === u ? "active" : ""])
              }, C(u), 11, Xe)) : typeof u == "object" && u !== null && s.prop in u ? (c(), n("div", {
                key: 1,
                onClick: (B) => l(u),
                class: N(["pickerItem", e.value[s.prop] === u[s.prop] || String(u[s.dataprop || s.prop]) === String(e.value) ? "active" : ""])
              }, C(u[s.prop]), 11, Ye)) : (c(), n("div", {
                key: 2,
                onClick: V((B) => l(u), ["stop"]),
                class: N(["pickerItem", e.value === u ? "active" : ""])
              }, [
                _(t.$slots, "default", {
                  option: u,
                  selected: e.value
                }, void 0, !0)
              ], 10, Ze))
            ], 64))), 128))
          ], 4)),
          i("div", el, [
            i("div", ll, [
              R(i("input", {
                type: "text",
                "onUpdate:modelValue": a[1] || (a[1] = (u) => j.value = u),
                class: "input",
                placeholder: "Add New Category"
              }, null, 512), [
                [W, j.value]
              ]),
              i("button", {
                type: "button",
                class: "button tedirCategoryButton",
                onClick: a[2] || (a[2] = (u) => {
                  h("add", j.value), j.value = "";
                })
              }, "Save")
            ])
          ])
        ])
      ])
    ], 2));
  }
});
const rl = /* @__PURE__ */ z(tl, [["__scopeId", "data-v-1814db96"]]);
export {
  rl as CategoryBox,
  ul as ComboBox,
  cl as ListBox,
  sl as SelectBox,
  nl as TagBox
};
