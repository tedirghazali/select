import { defineComponent as z, ref as b, watch as M, computed as B, openBlock as o, createElementBlock as i, normalizeClass as N, createElementVNode as f, normalizeStyle as V, toDisplayString as S, unref as m, Fragment as _, renderList as O, withModifiers as x, renderSlot as L, reactive as E, createTextVNode as R, withDirectives as F, withKeys as H, vModelText as W, pushScopeId as U, popScopeId as D } from "vue";
const K = { class: "pickerWrap" }, P = { class: "pickerContent" }, q = { class: "pickerHeader" }, G = ["onClick"], J = { class: "check" }, Q = ["checked", "id"], X = ["for"], Y = ["onClick"], Z = { class: "check" }, ee = ["checked", "id"], le = ["for"], te = ["onClick"], ae = ["onClick"], se = ["onClick"], ue = ["onClick"], ce = /* @__PURE__ */ z({
  __name: "SelectBox",
  props: {
    modelValue: { default: {} },
    options: { default: [] },
    prop: { default: "value" },
    datatype: { default: "" },
    dataprop: { default: "" },
    placeholder: { default: "-- Select option --" },
    size: { default: 0 },
    type: { default: "" },
    up: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change", "search"],
  setup(u, { emit: k }) {
    const c = u, e = b(c.modelValue || {}), d = b(!1), h = b(""), g = b(null), w = b(void 0);
    M(() => c.modelValue, () => {
      e.value = c.modelValue;
    });
    const j = () => {
      clearTimeout(w.value), w.value = setTimeout(() => {
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
    }, s = B(() => {
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
      class: N(["picker suggestion", { active: d.value, pickerUp: u.up }])
    }, [
      f("div", {
        class: "pickerBackdrop",
        style: V({ display: d.value ? "block" : "none" }),
        onClick: p
      }, null, 4),
      f("div", K, [
        f("div", {
          class: "select pickerToggler",
          onClick: t[0] || (t[0] = (l) => d.value = !d.value)
        }, S(m(s)), 1),
        f("div", P, [
          f("div", q, [
            f("input", {
              type: "search",
              ref_key: "searchRef",
              ref: g,
              onInput: j,
              class: "input"
            }, null, 544)
          ]),
          Array.isArray(e.value) ? (o(), i("div", {
            key: 0,
            class: "pickerMenu",
            style: V({ "max-height": Number(u.size) !== 0 ? Number(u.size) * 42 + "px" : "auto" })
          }, [
            (o(!0), i(_, null, O(m(C), (l, r) => (o(), i(_, {
              key: "option-" + l
            }, [
              typeof l == "string" && u.type !== "slot" ? (o(), i("div", {
                key: 0,
                onClick: x((I) => n(l), ["stop"]),
                class: "pickerItem"
              }, [
                f("div", J, [
                  f("input", {
                    type: "checkbox",
                    class: "checkInput",
                    checked: e.value.includes(l),
                    id: "check-" + (m(y) + String(r)),
                    style: { "pointer-events": "none" }
                  }, null, 8, Q),
                  f("label", {
                    class: "checkLabel",
                    for: "check-" + (m(y) + String(r)),
                    style: { "pointer-events": "none" }
                  }, S(l), 9, X)
                ])
              ], 8, G)) : typeof l == "object" && l !== null && u.prop in l && u.type !== "slot" ? (o(), i("div", {
                key: 1,
                onClick: x((I) => n(l, u.prop), ["stop"]),
                class: "pickerItem"
              }, [
                f("div", Z, [
                  f("input", {
                    type: "checkbox",
                    class: "checkInput",
                    checked: e.value.includes(l),
                    id: "check-" + (m(y) + String(r)),
                    style: { "pointer-events": "none" }
                  }, null, 8, ee),
                  f("label", {
                    class: "checkLabel",
                    for: "check-" + (m(y) + String(r)),
                    style: { "pointer-events": "none" }
                  }, S(l[u.prop]), 9, le)
                ])
              ], 8, Y)) : (o(), i("div", {
                key: 2,
                onClick: x((I) => n(l), ["stop"]),
                class: "pickerItem"
              }, [
                L(a.$slots, "default", {
                  option: l,
                  selected: e.value
                }, void 0, !0)
              ], 8, te))
            ], 64))), 128))
          ], 4)) : (o(), i("div", {
            key: 1,
            class: "pickerMenu",
            style: V({ "max-height": Number(u.size) !== 0 ? Number(u.size) * 42 + "px" : "auto" })
          }, [
            (o(!0), i(_, null, O(m(C), (l, r) => (o(), i(_, {
              key: "option-" + l
            }, [
              typeof l == "string" && u.type !== "slot" ? (o(), i("div", {
                key: 0,
                onClick: (I) => v(l),
                class: N(["pickerItem", e.value === l ? "active" : ""])
              }, S(l), 11, ae)) : typeof l == "object" && l !== null && u.prop in l && u.type !== "slot" ? (o(), i("div", {
                key: 1,
                onClick: (I) => v(l),
                class: N(["pickerItem", e.value[u.prop] === l[u.prop] || String(l[u.dataprop || u.prop]) === String(e.value) ? "active" : ""])
              }, S(l[u.prop]), 11, se)) : (o(), i("div", {
                key: 2,
                onClick: x((I) => v(l), ["stop"]),
                class: N(["pickerItem", e.value === l ? "active" : ""])
              }, [
                L(a.$slots, "default", {
                  option: l,
                  selected: e.value
                }, void 0, !0)
              ], 10, ue))
            ], 64))), 128))
          ], 4))
        ])
      ])
    ], 2));
  }
});
const A = (u, k) => {
  const c = u.__vccOpts || u;
  for (const [e, d] of k)
    c[e] = d;
  return c;
}, ul = /* @__PURE__ */ A(ce, [["__scopeId", "data-v-ca470346"]]), ne = { class: "pickerWrap" }, re = { class: "pickerContent pickerSizing" }, oe = ["onClick"], ie = ["onClick"], de = ["onClick"], ve = /* @__PURE__ */ z({
  __name: "ComboBox",
  props: {
    modelValue: { default: null },
    options: { default: [] },
    prop: { default: "value" },
    placeholder: { default: "Search option" },
    size: { default: 0 },
    select: { type: Boolean, default: !1 },
    up: { type: Boolean, default: !1 },
    serverSearch: { type: Boolean, default: !1 }
  },
  emits: ["update:modelValue", "change", "search"],
  setup(u, { emit: k }) {
    const c = u, e = b(!1), d = b(""), h = b(null), g = b(void 0), w = B(() => {
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
    }), j = () => {
      clearTimeout(g.value), g.value = setTimeout(() => {
        var y, p;
        d.value = "", ((y = h.value) == null ? void 0 : y.value) && ((p = h.value) == null ? void 0 : p.value) !== "" && (d.value = h.value.value), k("search", d.value), w.value.length >= 1 && d.value !== "" ? e.value = !0 : e.value = !1;
      }, 500);
    }, C = (y, p) => {
      (typeof y == "string" || isNaN(y) === !1) && (d.value = y, h.value.value = y), k("update:modelValue", p), k("change", y, p), e.value = !1;
    }, $ = (y) => {
      y.target.style.display = "none", e.value = !1;
    };
    return (y, p) => (o(), i("div", {
      class: N(["picker suggestion", { active: e.value, pickerUp: u.up }])
    }, [
      f("div", {
        class: "pickerBackdrop",
        style: V({ display: e.value ? "block" : "none" }),
        onClick: $
      }, null, 4),
      f("div", ne, [
        u.select ? (o(), i("input", {
          key: 0,
          type: "search",
          ref_key: "searchRef",
          ref: h,
          onInput: j,
          onClick: p[0] || (p[0] = (n) => e.value = !0),
          class: "select"
        }, null, 544)) : (o(), i("input", {
          key: 1,
          type: "search",
          ref_key: "searchRef",
          ref: h,
          onInput: j,
          onClick: p[1] || (p[1] = (n) => m(w).length >= 1 && d.value !== "" ? e.value = !0 : e.value = !1),
          class: "input"
        }, null, 544)),
        f("div", re, [
          (o(!0), i(_, null, O(m(w), (n, v) => (o(), i(_, {
            key: "option-" + n
          }, [
            typeof n == "string" ? (o(), i("div", {
              key: 0,
              onClick: (s) => C(n, n),
              class: N(["pickerItem", u.modelValue === n ? "active" : ""])
            }, S(n), 11, oe)) : typeof n == "object" && u.prop in n ? (o(), i("div", {
              key: 1,
              onClick: (s) => C(n[u.prop], n),
              class: N(["pickerItem", u.modelValue[u.prop] === n[u.prop] ? "active" : ""])
            }, S(n[u.prop]), 11, ie)) : (o(), i("div", {
              key: 2,
              onClick: (s) => C(n, n),
              class: N(["pickerItem", u.modelValue === n ? "active" : ""])
            }, [
              L(y.$slots, "default", { option: n }, void 0, !0)
            ], 10, de))
          ], 64))), 128))
        ])
      ])
    ], 2));
  }
});
const cl = /* @__PURE__ */ A(ve, [["__scopeId", "data-v-6171fab7"]]), fe = { class: "list" }, pe = { class: "listHeader" }, he = ["onClick"], ke = { class: "check" }, ye = ["checked", "id"], ge = ["for"], be = ["onClick"], Ce = { class: "check" }, me = ["checked", "id"], Se = ["for"], $e = ["onClick"], _e = ["onClick"], Ne = ["onClick"], we = ["onClick"], je = /* @__PURE__ */ z({
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
  setup(u, { emit: k }) {
    const c = u, e = b(c.modelValue || {}), d = b(""), h = b(null), g = b(void 0);
    M(() => c.modelValue, () => {
      e.value = c.modelValue;
    });
    const w = () => {
      clearTimeout(g.value), g.value = setTimeout(() => {
        var n, v;
        d.value = "", ((n = h.value) == null ? void 0 : n.value) && ((v = h.value) == null ? void 0 : v.value) !== "" && (d.value = h.value.value), k("search", d.value);
      }, 500);
    }, j = B(() => {
      let n = c.options;
      return d.value.length >= 1 && (n = n.filter((v) => {
        if (isNaN(v) === !1 && Number(v) === Number(d.value))
          return !0;
        if (typeof v == "string" && v.toLowerCase().includes(d.value.toLowerCase()))
          return !0;
        if (typeof v == "object" && v !== null && Object.prototype.toString.call(v) === "[object Object]")
          for (const s of Object.keys(v)) {
            if (isNaN(v[s]) === !1 && Number(v[s]) === Number(d.value))
              return !0;
            if (typeof v[s] == "string" && v[s].toLowerCase().includes(d.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), n;
    }), $ = (() => {
      let n = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", v = "";
      for (let s = 0; s < 10; s++)
        v += n.charAt(Math.floor(Math.random() * n.length));
      return v;
    })(), y = (n, v = "") => {
      v !== "" ? e.value.map((s) => s[v]).includes(n[v]) ? e.value.splice(e.value.findIndex((s) => s[v] === n[v]), 1) : e.value.push(n) : e.value.includes(n) ? e.value.splice(e.value.findIndex((s) => s === n), 1) : e.value.push(n), k("update:modelValue", e.value), k("change", e.value, n);
    }, p = (n) => {
      typeof n == "object" && n !== null && String(c.datatype).toLowerCase() === "string" ? (e.value = n[String(c.dataprop || c.prop)], k("update:modelValue", String(e.value))) : typeof n == "object" && n !== null && String(c.datatype).toLowerCase() === "number" ? (e.value = n[String(c.dataprop || c.prop)], k("update:modelValue", Number(e.value))) : (e.value = n, k("update:modelValue", e.value)), k("change", e.value, n);
    };
    return (n, v) => (o(), i("div", null, [
      f("div", fe, [
        f("div", pe, [
          f("input", {
            type: "search",
            ref_key: "searchRef",
            ref: h,
            onInput: w,
            class: "input"
          }, null, 544)
        ]),
        Array.isArray(u.modelValue) ? (o(), i("div", {
          key: 0,
          class: "listMenu",
          style: V({ "max-height": Number(u.size) !== 0 ? Number(u.size) * 44 + "px" : "auto" })
        }, [
          (o(!0), i(_, null, O(m(j), (s, a) => (o(), i(_, {
            key: "option-" + s
          }, [
            typeof s == "string" ? (o(), i("div", {
              key: 0,
              onClick: x((t) => y(s), ["stop"]),
              class: "listItem"
            }, [
              f("div", ke, [
                f("input", {
                  type: "checkbox",
                  class: "checkInput",
                  checked: e.value.includes(s),
                  id: "check-" + (m($) + String(a)),
                  style: { "pointer-events": "none" }
                }, null, 8, ye),
                f("label", {
                  class: "checkLabel",
                  for: "check-" + (m($) + String(a)),
                  style: { "pointer-events": "none" }
                }, S(s), 9, ge)
              ])
            ], 8, he)) : typeof s == "object" && u.prop in s ? (o(), i("div", {
              key: 1,
              onClick: x((t) => y(s, u.prop), ["stop"]),
              class: "listItem"
            }, [
              f("div", Ce, [
                f("input", {
                  type: "checkbox",
                  class: "checkInput",
                  checked: e.value.includes(s),
                  id: "check-" + (m($) + String(a)),
                  style: { "pointer-events": "none" }
                }, null, 8, me),
                f("label", {
                  class: "checkLabel",
                  for: "check-" + (m($) + String(a)),
                  style: { "pointer-events": "none" }
                }, S(s[u.prop]), 9, Se)
              ])
            ], 8, be)) : (o(), i("div", {
              key: 2,
              onClick: x((t) => y(s), ["stop"]),
              class: N(["listItem", e.value.includes(s) ? "active" : ""])
            }, [
              L(n.$slots, "default", {
                option: s,
                selected: e.value
              }, void 0, !0)
            ], 10, $e))
          ], 64))), 128))
        ], 4)) : (o(), i("div", {
          key: 1,
          class: "listMenu",
          style: V({ "max-height": Number(u.size) !== 0 ? Number(u.size) * 44 + "px" : "auto" })
        }, [
          (o(!0), i(_, null, O(m(j), (s, a) => (o(), i(_, {
            key: "option-" + s
          }, [
            typeof s == "string" ? (o(), i("div", {
              key: 0,
              onClick: (t) => p(s),
              class: N(["listItem", e.value === s ? "active" : ""])
            }, S(s), 11, _e)) : typeof s == "object" && u.prop in s ? (o(), i("div", {
              key: 1,
              onClick: (t) => p(s),
              class: N(["listItem", e.value[u.prop] === s[u.prop] || String(s[u.dataprop || u.prop]) === String(e.value) ? "active" : ""])
            }, S(s[u.prop]), 11, Ne)) : (o(), i("div", {
              key: 2,
              onClick: x((t) => p(s), ["stop"]),
              class: N(["listItem", e.value === s ? "active" : ""])
            }, [
              L(n.$slots, "default", {
                option: s,
                selected: e.value
              }, void 0, !0)
            ], 10, we))
          ], 64))), 128))
        ], 4))
      ])
    ]));
  }
});
const nl = /* @__PURE__ */ A(je, [["__scopeId", "data-v-d7fed8bc"]]), Ie = (u) => (U("data-v-3acd22f1"), u = u(), D(), u), xe = { class: "tagWrap" }, Ve = { class: "tags" }, Oe = { class: "tag groupItem" }, Le = ["onClick"], Be = /* @__PURE__ */ Ie(() => /* @__PURE__ */ f("svg", {
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
  Be
], ze = { class: "tagContent" }, Ae = ["onClick"], Me = ["onClick"], Re = ["onClick"], Fe = /* @__PURE__ */ z({
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
  setup(u, { emit: k }) {
    const c = u, e = b(!1), d = b(""), h = b(null), g = E(c.modelValue || []), w = b(c.options || []), j = b(c.separator || ","), C = b(c.prop || "value"), $ = B(() => {
      let v = w.value;
      return d.value.length >= 1 && (v = v.filter((s) => {
        if (isNaN(s) === !1 && Number(s) === Number(d.value))
          return !0;
        if (typeof s == "string" && s.toLowerCase().includes(d.value.toLowerCase()))
          return !0;
        if (typeof s == "object" && s !== null && Object.prototype.toString.call(s) === "[object Object]")
          for (const a of Object.keys(s)) {
            if (isNaN(s[a]) === !1 && Number(s[a]) === Number(d.value))
              return !0;
            if (typeof s[a] == "string" && s[a].toLowerCase().includes(d.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), v;
    }), y = () => {
      h.value.focus();
    }, p = (v) => {
      if (v.key !== "Enter" && $.value.length >= 1 ? e.value = !0 : e.value = !1, d.value.endsWith(j.value) || v.key === "Enter") {
        const s = d.value.replace(j.value, "");
        g.includes(s) || (g.push(s), w.value.includes(s) && (w.value = w.value.filter((a) => typeof a == "string" && a !== s ? !0 : typeof a == "object" && C.value in a && a[C.value] !== s))), d.value = "", k("update:modelValue", g);
      }
    };
    M(d, () => {
      if (h.value !== null) {
        const v = document.createElement("div");
        v.style.width = "max-content", v.style.position = "absolute", v.style.visibility = "hidden";
        const s = d.value.length >= 2 ? d.value : h.value.getAttribute("placeholder");
        v.innerHTML = s.replace(/ /g, "&nbsp;").trim(), document.body.appendChild(v);
        const a = Math.ceil(Number(window.getComputedStyle(v).width.replace("px", ""))) + 30;
        h.value.style.setProperty("width", a + "px"), v.remove();
      }
    });
    const n = (v) => {
      v.target.style.display = "none", e.value = !1;
    };
    return (v, s) => (o(), i("div", {
      class: N(["taggable", { active: e.value === !0 }])
    }, [
      f("div", {
        class: "tagBackdrop",
        style: V({ display: e.value ? "block" : "none" }),
        onClick: n
      }, null, 4),
      f("div", xe, [
        f("div", {
          class: "input tagToggler",
          onClick: y
        }, [
          f("div", Ve, [
            (o(!0), i(_, null, O(g, (a, t) => (o(), i("div", {
              key: "tag-" + t,
              class: "group"
            }, [
              f("div", Oe, [
                typeof a == "string" && a !== "" ? (o(), i(_, { key: 0 }, [
                  R(S(a), 1)
                ], 64)) : typeof a == "object" && C.value in a ? (o(), i(_, { key: 1 }, [
                  R(S(a[C.value]), 1)
                ], 64)) : (o(), i(_, { key: 2 }, [
                  R(S(u.placeholder), 1)
                ], 64))
              ]),
              f("div", {
                class: "tag groupItem",
                onClick: (l) => g.splice(t, 1)
              }, Te, 8, Le)
            ]))), 128)),
            F(f("input", {
              type: "search",
              ref_key: "inputRef",
              ref: h,
              "onUpdate:modelValue": s[0] || (s[0] = (a) => d.value = a),
              class: "tagInput",
              onInput: s[1] || (s[1] = (a) => p(a)),
              onKeyup: s[2] || (s[2] = H((a) => p(a), ["enter"])),
              placeholder: "Add new tag"
            }, null, 544), [
              [W, d.value]
            ])
          ])
        ]),
        f("div", ze, [
          (o(!0), i(_, null, O(m($), (a, t) => (o(), i(_, {
            key: "option-" + a
          }, [
            typeof a == "string" ? (o(), i("div", {
              key: 0,
              onClick: (l) => {
                d.value = a + ",", p(l);
              },
              class: "tagItem"
            }, S(a), 9, Ae)) : typeof a == "object" && C.value in a ? (o(), i("div", {
              key: 1,
              onClick: (l) => {
                d.value = a[C.value] + ",", p(l);
              },
              class: "tagItem"
            }, S(a[C.value]), 9, Me)) : (o(), i("div", {
              key: 2,
              onClick: (l) => {
                d.value = a + ",", p(l);
              },
              class: "tagItem"
            }, [
              L(v.$slots, "default", { option: a }, void 0, !0)
            ], 8, Re))
          ], 64))), 128))
        ])
      ])
    ], 2));
  }
});
const rl = /* @__PURE__ */ A(Fe, [["__scopeId", "data-v-3acd22f1"]]), We = { class: "pickerOverlay pickerWrap" }, Ee = { class: "pickerContent" }, He = { class: "pickerHeader" }, Ue = ["onClick"], De = { class: "check" }, Ke = ["checked", "id"], Pe = ["for"], qe = ["onClick"], Ge = { class: "check" }, Je = ["checked", "id"], Qe = ["for"], Xe = ["onClick"], Ye = ["onClick"], Ze = ["onClick"], el = ["onClick"], ll = { class: "pickerFooter" }, tl = { class: "tedirCategoryAdd" }, al = /* @__PURE__ */ z({
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
  setup(u, { emit: k }) {
    const c = u, e = b(c.modelValue || {}), d = b(!1), h = b(""), g = b(null), w = b(void 0), j = b("");
    M(() => c.modelValue, () => {
      e.value = c.modelValue;
    });
    const C = () => {
      clearTimeout(w.value), w.value = setTimeout(() => {
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
      for (let I = 0; I < t; I++)
        r += l.charAt(Math.floor(Math.random() * l.length));
      return r;
    })(), n = (t) => {
      var l;
      t.target.style.display = "none", d.value = !1, (l = g.value) != null && l.value && (g.value.value = "", h.value = "");
    }, v = (t, l = "") => {
      l !== "" ? e.value.map((r) => r[l]).includes(t[l]) ? e.value.splice(e.value.findIndex((r) => r[l] === t[l]), 1) : e.value.push(t) : e.value.includes(t) ? e.value.splice(e.value.findIndex((r) => r === t), 1) : e.value.push(t), k("update:modelValue", e.value), k("change", e.value, t);
    }, s = (t) => {
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
      class: N(["picker suggestion tedirCategory", { active: d.value, pickerUp: u.up }])
    }, [
      f("div", {
        class: "pickerBackdrop",
        style: V({ display: d.value ? "block" : "none" }),
        onClick: n
      }, null, 4),
      f("div", We, [
        f("div", {
          class: "select pickerToggler",
          onClick: l[0] || (l[0] = (r) => d.value = !d.value)
        }, S(m(a)), 1),
        f("div", Ee, [
          f("div", He, [
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
            style: V({ "max-height": Number(u.size) !== 0 ? Number(u.size) * 42 + "px" : "auto" })
          }, [
            (o(!0), i(_, null, O(m($), (r, I) => (o(), i(_, {
              key: "option-" + r
            }, [
              typeof r == "string" ? (o(), i("div", {
                key: 0,
                onClick: x((T) => v(r), ["stop"]),
                class: "pickerItem"
              }, [
                f("div", De, [
                  f("input", {
                    type: "checkbox",
                    class: "checkInput",
                    checked: e.value.includes(r),
                    id: "check-" + (m(p) + String(I)),
                    style: { "pointer-events": "none" }
                  }, null, 8, Ke),
                  f("label", {
                    class: "checkLabel",
                    for: "check-" + (m(p) + String(I)),
                    style: { "pointer-events": "none" }
                  }, S(r), 9, Pe)
                ])
              ], 8, Ue)) : typeof r == "object" && r !== null && u.prop in r ? (o(), i("div", {
                key: 1,
                onClick: x((T) => v(r, u.prop), ["stop"]),
                class: "pickerItem"
              }, [
                f("div", Ge, [
                  f("input", {
                    type: "checkbox",
                    class: "checkInput",
                    checked: e.value.includes(r),
                    id: "check-" + (m(p) + String(I)),
                    style: { "pointer-events": "none" }
                  }, null, 8, Je),
                  f("label", {
                    class: "checkLabel",
                    for: "check-" + (m(p) + String(I)),
                    style: { "pointer-events": "none" }
                  }, S(r[u.prop]), 9, Qe)
                ])
              ], 8, qe)) : (o(), i("div", {
                key: 2,
                onClick: x((T) => v(r), ["stop"]),
                class: "pickerItem"
              }, [
                L(t.$slots, "default", {
                  option: r,
                  selected: e.value
                }, void 0, !0)
              ], 8, Xe))
            ], 64))), 128))
          ], 4)) : (o(), i("div", {
            key: 1,
            class: "pickerMenu",
            style: V({ "max-height": Number(u.size) !== 0 ? Number(u.size) * 42 + "px" : "auto" })
          }, [
            (o(!0), i(_, null, O(m($), (r, I) => (o(), i(_, {
              key: "option-" + r
            }, [
              typeof r == "string" ? (o(), i("div", {
                key: 0,
                onClick: (T) => s(r),
                class: N(["pickerItem", e.value === r ? "active" : ""])
              }, S(r), 11, Ye)) : typeof r == "object" && r !== null && u.prop in r ? (o(), i("div", {
                key: 1,
                onClick: (T) => s(r),
                class: N(["pickerItem", e.value[u.prop] === r[u.prop] || String(r[u.dataprop || u.prop]) === String(e.value) ? "active" : ""])
              }, S(r[u.prop]), 11, Ze)) : (o(), i("div", {
                key: 2,
                onClick: x((T) => s(r), ["stop"]),
                class: N(["pickerItem", e.value === r ? "active" : ""])
              }, [
                L(t.$slots, "default", {
                  option: r,
                  selected: e.value
                }, void 0, !0)
              ], 10, el))
            ], 64))), 128))
          ], 4)),
          f("div", ll, [
            f("div", tl, [
              F(f("input", {
                type: "text",
                "onUpdate:modelValue": l[1] || (l[1] = (r) => j.value = r),
                class: "input",
                placeholder: "Add New Category"
              }, null, 512), [
                [W, j.value]
              ]),
              f("button", {
                type: "button",
                class: "button tedirCategoryButton",
                onClick: l[2] || (l[2] = (r) => {
                  k("add", j.value), j.value = "";
                })
              }, "Save")
            ])
          ])
        ])
      ])
    ], 2));
  }
});
const ol = /* @__PURE__ */ A(al, [["__scopeId", "data-v-9bd9abf8"]]);
export {
  ol as CategoryBox,
  cl as ComboBox,
  nl as ListBox,
  ul as SelectBox,
  rl as TagBox
};
