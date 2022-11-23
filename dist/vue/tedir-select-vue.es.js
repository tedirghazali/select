import { defineComponent as T, ref as m, watch as M, computed as A, openBlock as c, createElementBlock as n, normalizeClass as N, createElementVNode as i, normalizeStyle as V, unref as y, Fragment as h, createTextVNode as x, toDisplayString as p, renderList as O, withModifiers as _, renderSlot as L, reactive as E, withDirectives as R, withKeys as H, vModelText as W, pushScopeId as F, popScopeId as D } from "vue";
const K = { class: "pickerWrap" }, U = { class: "pickerContent" }, P = { class: "pickerHeader" }, q = ["onClick"], G = { class: "check" }, J = ["checked", "id"], Q = ["for"], X = ["onClick"], Y = { class: "check" }, Z = ["checked", "id"], ee = ["for"], le = ["onClick"], te = ["onClick"], ae = ["onClick"], se = ["onClick"], ue = /* @__PURE__ */ T({
  __name: "SelectBox",
  props: {
    modelValue: { default: {} },
    options: { default: [] },
    prop: { default: "value" },
    datatype: { default: "" },
    dataprop: { default: "" },
    placeholder: { default: "-- Select option --" },
    size: { default: 0 }
  },
  emits: ["update:modelValue", "change", "search"],
  setup(s, { emit: g }) {
    const f = s, e = m(f.modelValue || {}), r = m(!1), k = m(""), $ = m(null), I = m(void 0);
    M(() => f.modelValue, () => {
      e.value = f.modelValue;
    });
    const j = () => {
      clearTimeout(I.value), I.value = setTimeout(() => {
        var l, t;
        k.value = "", ((l = $.value) == null ? void 0 : l.value) && ((t = $.value) == null ? void 0 : t.value) !== "" && (k.value = $.value.value), g("search", k.value);
      }, 500);
    }, S = A(() => {
      let l = f.options;
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
    }), C = ((l = 10) => {
      let t = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", a = "";
      for (let u = 0; u < l; u++)
        a += t.charAt(Math.floor(Math.random() * t.length));
      return a;
    })(), d = (l) => {
      l.target.style.display = "none", r.value = !1;
    }, v = (l, t = "") => {
      t !== "" ? e.value.map((a) => a[t]).includes(l[t]) ? e.value.splice(e.value.findIndex((a) => a[t] === l[t]), 1) : e.value.push(l) : e.value.includes(l) ? e.value.splice(e.value.findIndex((a) => a === l), 1) : e.value.push(l), g("update:modelValue", e.value), g("change", e.value, l);
    }, o = (l) => {
      typeof l == "object" && l !== null && String(f.datatype).toLowerCase() === "string" ? (e.value = l[String(f.dataprop || f.prop)], g("update:modelValue", String(e.value))) : (e.value = l, g("update:modelValue", e.value)), r.value = !1, g("change", e.value, l);
    };
    return (l, t) => (c(), n("div", {
      class: N(["picker suggestion", r.value ? "active" : ""])
    }, [
      i("div", {
        class: "pickerBackdrop",
        style: V({ display: r.value ? "block" : "none" }),
        onClick: d
      }, null, 4),
      i("div", K, [
        i("div", {
          class: "select pickerToggler",
          onClick: t[0] || (t[0] = (a) => r.value = !r.value)
        }, [
          typeof e.value == "string" && e.value !== "" && y(S).length >= 1 && typeof y(S)[0] == "string" ? (c(), n(h, { key: 0 }, [
            x(p(e.value), 1)
          ], 64)) : typeof e.value == "string" && y(S).filter((a) => String(a[String(s.dataprop || s.prop)]) === e.value).length >= 1 && typeof y(S).filter((a) => String(a[String(s.dataprop || s.prop)]) === e.value)[0] == "object" ? (c(), n(h, { key: 1 }, [
            x(p(y(S).filter((a) => String(a[String(s.dataprop || s.prop)]) === e.value)[0][s.prop]), 1)
          ], 64)) : typeof e.value == "object" && e.value !== null && s.prop in e.value ? (c(), n(h, { key: 2 }, [
            x(p(e.value[s.prop]), 1)
          ], 64)) : Array.isArray(e.value) && e.value.length >= 1 && typeof e.value[0] == "string" ? (c(), n(h, { key: 3 }, [
            x(p(e.value.join(", ")), 1)
          ], 64)) : Array.isArray(e.value) && e.value.length >= 1 && typeof e.value[0] == "object" && s.prop in e.value[0] ? (c(), n(h, { key: 4 }, [
            x(p(e.value.map((a) => a[s.prop]).join(", ")), 1)
          ], 64)) : (c(), n(h, { key: 5 }, [
            x(p(s.placeholder), 1)
          ], 64))
        ]),
        i("div", U, [
          i("div", P, [
            i("input", {
              type: "search",
              ref_key: "searchRef",
              ref: $,
              onInput: j,
              class: "input"
            }, null, 544)
          ]),
          Array.isArray(e.value) ? (c(), n("div", {
            key: 0,
            class: "pickerMenu",
            style: V({ "max-height": Number(s.size) !== 0 ? Number(s.size) * 42 + "px" : "auto" })
          }, [
            (c(!0), n(h, null, O(y(S), (a, u) => (c(), n(h, {
              key: "option-" + a
            }, [
              typeof a == "string" ? (c(), n("div", {
                key: 0,
                onClick: _((w) => v(a), ["stop"]),
                class: "pickerItem"
              }, [
                i("div", G, [
                  i("input", {
                    type: "checkbox",
                    class: "checkInput",
                    checked: e.value.includes(a),
                    id: "check-" + (y(C) + String(u)),
                    style: { "pointer-events": "none" }
                  }, null, 8, J),
                  i("label", {
                    class: "checkLabel",
                    for: "check-" + (y(C) + String(u)),
                    style: { "pointer-events": "none" }
                  }, p(a), 9, Q)
                ])
              ], 8, q)) : typeof a == "object" && a !== null && s.prop in a ? (c(), n("div", {
                key: 1,
                onClick: _((w) => v(a, s.prop), ["stop"]),
                class: "pickerItem"
              }, [
                i("div", Y, [
                  i("input", {
                    type: "checkbox",
                    class: "checkInput",
                    checked: e.value.includes(a),
                    id: "check-" + (y(C) + String(u)),
                    style: { "pointer-events": "none" }
                  }, null, 8, Z),
                  i("label", {
                    class: "checkLabel",
                    for: "check-" + (y(C) + String(u)),
                    style: { "pointer-events": "none" }
                  }, p(a[s.prop]), 9, ee)
                ])
              ], 8, X)) : (c(), n("div", {
                key: 2,
                onClick: _((w) => v(a), ["stop"]),
                class: "pickerItem"
              }, [
                L(l.$slots, "default", {
                  option: a,
                  selected: e.value
                }, void 0, !0)
              ], 8, le))
            ], 64))), 128))
          ], 4)) : (c(), n("div", {
            key: 1,
            class: "pickerMenu",
            style: V({ "max-height": Number(s.size) !== 0 ? Number(s.size) * 42 + "px" : "auto" })
          }, [
            (c(!0), n(h, null, O(y(S), (a, u) => (c(), n(h, {
              key: "option-" + a
            }, [
              typeof a == "string" ? (c(), n("div", {
                key: 0,
                onClick: (w) => o(a),
                class: N(["pickerItem", e.value === a ? "active" : ""])
              }, p(a), 11, te)) : typeof a == "object" && a !== null && s.prop in a ? (c(), n("div", {
                key: 1,
                onClick: (w) => o(a),
                class: N(["pickerItem", e.value[s.prop] === a[s.prop] || String(a[s.dataprop || s.prop]) === String(e.value) ? "active" : ""])
              }, p(a[s.prop]), 11, ae)) : (c(), n("div", {
                key: 2,
                onClick: _((w) => o(a), ["stop"]),
                class: N(["pickerItem", e.value === a ? "active" : ""])
              }, [
                L(l.$slots, "default", {
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
const z = (s, g) => {
  const f = s.__vccOpts || s;
  for (const [e, r] of g)
    f[e] = r;
  return f;
}, sl = /* @__PURE__ */ z(ue, [["__scopeId", "data-v-d6a60b70"]]), ce = { class: "pickerWrap" }, ne = { class: "pickerContent pickerSizing" }, re = ["onClick"], oe = ["onClick"], ie = ["onClick"], de = /* @__PURE__ */ T({
  __name: "ComboBox",
  props: {
    modelValue: { default: null },
    options: { default: [] },
    prop: { default: "value" },
    placeholder: { default: "-- combo option --" },
    size: { default: 0 }
  },
  emits: ["update:modelValue", "search"],
  setup(s, { emit: g }) {
    const f = s, e = m(!1), r = m(""), k = m(null), $ = m(void 0), I = A(() => {
      let b = f.options;
      return r.value.length >= 1 && (b = b.filter((C) => {
        if (isNaN(C) === !1 && Number(C) === Number(r.value))
          return !0;
        if (typeof C == "string" && C.toLowerCase().includes(r.value.toLowerCase()))
          return !0;
        if (typeof C == "object" && C !== null && Object.prototype.toString.call(C) === "[object Object]")
          for (const d of Object.keys(C)) {
            if (isNaN(C[d]) === !1 && Number(C[d]) === Number(r.value))
              return !0;
            if (typeof C[d] == "string" && C[d].toLowerCase().includes(r.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), b;
    }), j = () => {
      clearTimeout($.value), $.value = setTimeout(() => {
        var b, C;
        r.value = "", ((b = k.value) == null ? void 0 : b.value) && ((C = k.value) == null ? void 0 : C.value) !== "" && (r.value = k.value.value), g("search", r.value), I.value.length >= 1 && r.value !== "" ? e.value = !0 : e.value = !1;
      }, 500);
    }, S = (b) => {
      b.target.style.display = "none", e.value = !1;
    };
    return (b, C) => (c(), n("div", {
      class: N(["picker suggestion", e.value ? "active" : ""])
    }, [
      i("div", {
        class: "pickerBackdrop",
        style: V({ display: e.value ? "block" : "none" }),
        onClick: S
      }, null, 4),
      i("div", ce, [
        i("input", {
          type: "search",
          ref_key: "searchRef",
          ref: k,
          onInput: j,
          onClick: C[0] || (C[0] = (d) => y(I).length >= 1 && r.value !== "" ? e.value = !0 : e.value = !1),
          class: "input"
        }, null, 544),
        i("div", ne, [
          (c(!0), n(h, null, O(y(I), (d, v) => (c(), n(h, {
            key: "option-" + d
          }, [
            typeof d == "string" ? (c(), n("div", {
              key: 0,
              onClick: (o) => {
                r.value = d, g("update:modelValue", d), e.value = !1;
              },
              class: N(["pickerItem", s.modelValue === d ? "active" : ""])
            }, p(d), 11, re)) : typeof d == "object" && s.prop in d ? (c(), n("div", {
              key: 1,
              onClick: (o) => {
                r.value = d[s.prop], g("update:modelValue", d), e.value = !1;
              },
              class: N(["pickerItem", s.modelValue[s.prop] === d[s.prop] ? "active" : ""])
            }, p(d[s.prop]), 11, oe)) : (c(), n("div", {
              key: 2,
              onClick: (o) => {
                r.value = d, g("update:modelValue", d), e.value = !1;
              },
              class: N(["pickerItem", s.modelValue === d ? "active" : ""])
            }, [
              L(b.$slots, "default", { option: d }, void 0, !0)
            ], 10, ie))
          ], 64))), 128))
        ])
      ])
    ], 2));
  }
});
const ul = /* @__PURE__ */ z(de, [["__scopeId", "data-v-6df46acc"]]), ve = { class: "list" }, fe = { class: "listHeader" }, ke = ["onClick"], he = { class: "check" }, ye = ["checked", "id"], pe = ["for"], ge = ["onClick"], Ce = { class: "check" }, be = ["checked", "id"], me = ["for"], $e = ["onClick"], Se = ["onClick"], Ne = ["onClick"], Ie = ["onClick"], xe = /* @__PURE__ */ T({
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
  setup(s, { emit: g }) {
    const f = s, e = m(f.modelValue || {}), r = m(""), k = m(null), $ = m(void 0);
    M(() => f.modelValue, () => {
      e.value = f.modelValue;
    });
    const I = () => {
      clearTimeout($.value), $.value = setTimeout(() => {
        var v, o;
        r.value = "", ((v = k.value) == null ? void 0 : v.value) && ((o = k.value) == null ? void 0 : o.value) !== "" && (r.value = k.value.value), g("search", r.value);
      }, 500);
    }, j = A(() => {
      let v = f.options;
      return r.value.length >= 1 && (v = v.filter((o) => {
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
      })), v;
    }), b = (() => {
      let v = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", o = "";
      for (let l = 0; l < 10; l++)
        o += v.charAt(Math.floor(Math.random() * v.length));
      return o;
    })(), C = (v, o = "") => {
      o !== "" ? e.value.map((l) => l[o]).includes(v[o]) ? e.value.splice(e.value.findIndex((l) => l[o] === v[o]), 1) : e.value.push(v) : e.value.includes(v) ? e.value.splice(e.value.findIndex((l) => l === v), 1) : e.value.push(v), g("update:modelValue", e.value), g("change", e.value, v);
    }, d = (v) => {
      typeof v == "object" && v !== null && String(f.datatype).toLowerCase() === "string" ? (e.value = v[String(f.dataprop || f.prop)], g("update:modelValue", String(e.value))) : (e.value = v, g("update:modelValue", e.value)), g("change", e.value, v);
    };
    return (v, o) => (c(), n("div", null, [
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
          style: V({ "max-height": Number(s.size) !== 0 ? Number(s.size) * 44 + "px" : "auto" })
        }, [
          (c(!0), n(h, null, O(y(j), (l, t) => (c(), n(h, {
            key: "option-" + l
          }, [
            typeof l == "string" ? (c(), n("div", {
              key: 0,
              onClick: _((a) => C(l), ["stop"]),
              class: "listItem"
            }, [
              i("div", he, [
                i("input", {
                  type: "checkbox",
                  class: "checkInput",
                  checked: e.value.includes(l),
                  id: "check-" + (y(b) + String(t)),
                  style: { "pointer-events": "none" }
                }, null, 8, ye),
                i("label", {
                  class: "checkLabel",
                  for: "check-" + (y(b) + String(t)),
                  style: { "pointer-events": "none" }
                }, p(l), 9, pe)
              ])
            ], 8, ke)) : typeof l == "object" && s.prop in l ? (c(), n("div", {
              key: 1,
              onClick: _((a) => C(l, s.prop), ["stop"]),
              class: "listItem"
            }, [
              i("div", Ce, [
                i("input", {
                  type: "checkbox",
                  class: "checkInput",
                  checked: e.value.includes(l),
                  id: "check-" + (y(b) + String(t)),
                  style: { "pointer-events": "none" }
                }, null, 8, be),
                i("label", {
                  class: "checkLabel",
                  for: "check-" + (y(b) + String(t)),
                  style: { "pointer-events": "none" }
                }, p(l[s.prop]), 9, me)
              ])
            ], 8, ge)) : (c(), n("div", {
              key: 2,
              onClick: _((a) => C(l), ["stop"]),
              class: N(["listItem", e.value.includes(l) ? "active" : ""])
            }, [
              L(v.$slots, "default", {
                option: l,
                selected: e.value
              }, void 0, !0)
            ], 10, $e))
          ], 64))), 128))
        ], 4)) : (c(), n("div", {
          key: 1,
          class: "listMenu",
          style: V({ "max-height": Number(s.size) !== 0 ? Number(s.size) * 44 + "px" : "auto" })
        }, [
          (c(!0), n(h, null, O(y(j), (l, t) => (c(), n(h, {
            key: "option-" + l
          }, [
            typeof l == "string" ? (c(), n("div", {
              key: 0,
              onClick: (a) => d(l),
              class: N(["listItem", e.value === l ? "active" : ""])
            }, p(l), 11, Se)) : typeof l == "object" && s.prop in l ? (c(), n("div", {
              key: 1,
              onClick: (a) => d(l),
              class: N(["listItem", e.value[s.prop] === l[s.prop] || String(l[s.dataprop || s.prop]) === String(e.value) ? "active" : ""])
            }, p(l[s.prop]), 11, Ne)) : (c(), n("div", {
              key: 2,
              onClick: _((a) => d(l), ["stop"]),
              class: N(["listItem", e.value === l ? "active" : ""])
            }, [
              L(v.$slots, "default", {
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
const cl = /* @__PURE__ */ z(xe, [["__scopeId", "data-v-e44f257b"]]), je = (s) => (F("data-v-de7e2b23"), s = s(), D(), s), we = { class: "tagWrap" }, _e = { class: "tags" }, Ve = { class: "tag groupItem" }, Oe = ["onClick"], Le = /* @__PURE__ */ je(() => /* @__PURE__ */ i("svg", {
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
  Le
], Te = { class: "tagContent" }, Ae = ["onClick"], ze = ["onClick"], Me = ["onClick"], Re = /* @__PURE__ */ T({
  __name: "TagBox",
  props: {
    modelValue: { default: [] },
    options: { default: [] },
    prop: { default: "value" },
    placeholder: { default: "-- add new tag --" },
    size: { default: 0 },
    separator: { default: "," }
  },
  emits: ["update:modelValue"],
  setup(s, { emit: g }) {
    const f = s, e = m(!1), r = m(""), k = m(null), $ = E(f.modelValue || []), I = m(f.options || []), j = m(f.separator || ","), S = m(f.prop || "value"), b = A(() => {
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
    }), C = () => {
      k.value.focus();
    }, d = (o) => {
      if (o.key !== "Enter" && b.value.length >= 1 ? e.value = !0 : e.value = !1, r.value.endsWith(j.value) || o.key === "Enter") {
        const l = r.value.replace(j.value, "");
        $.includes(l) || ($.push(l), I.value.includes(l) && (I.value = I.value.filter((t) => typeof t == "string" && t !== l ? !0 : typeof t == "object" && S.value in t && t[S.value] !== l))), r.value = "", g("update:modelValue", $);
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
    const v = (o) => {
      o.target.style.display = "none", e.value = !1;
    };
    return (o, l) => (c(), n("div", {
      class: N(["taggable", { active: e.value === !0 }])
    }, [
      i("div", {
        class: "tagBackdrop",
        style: V({ display: e.value ? "block" : "none" }),
        onClick: v
      }, null, 4),
      i("div", we, [
        i("div", {
          class: "input tagToggler",
          onClick: C
        }, [
          i("div", _e, [
            (c(!0), n(h, null, O($, (t, a) => (c(), n("div", {
              key: "tag-" + a,
              class: "group"
            }, [
              i("div", Ve, [
                typeof t == "string" && t !== "" ? (c(), n(h, { key: 0 }, [
                  x(p(t), 1)
                ], 64)) : typeof t == "object" && S.value in t ? (c(), n(h, { key: 1 }, [
                  x(p(t[S.value]), 1)
                ], 64)) : (c(), n(h, { key: 2 }, [
                  x(p(s.placeholder), 1)
                ], 64))
              ]),
              i("div", {
                class: "tag groupItem",
                onClick: (u) => $.splice(a, 1)
              }, Be, 8, Oe)
            ]))), 128)),
            R(i("input", {
              type: "search",
              ref_key: "inputRef",
              ref: k,
              "onUpdate:modelValue": l[0] || (l[0] = (t) => r.value = t),
              class: "tagInput",
              onInput: l[1] || (l[1] = (t) => d(t)),
              onKeyup: l[2] || (l[2] = H((t) => d(t), ["enter"])),
              placeholder: "Add new tag"
            }, null, 544), [
              [W, r.value]
            ])
          ])
        ]),
        i("div", Te, [
          (c(!0), n(h, null, O(y(b), (t, a) => (c(), n(h, {
            key: "option-" + t
          }, [
            typeof t == "string" ? (c(), n("div", {
              key: 0,
              onClick: (u) => {
                r.value = t + ",", d(u);
              },
              class: "tagItem"
            }, p(t), 9, Ae)) : typeof t == "object" && S.value in t ? (c(), n("div", {
              key: 1,
              onClick: (u) => {
                r.value = t[S.value] + ",", d(u);
              },
              class: "tagItem"
            }, p(t[S.value]), 9, ze)) : (c(), n("div", {
              key: 2,
              onClick: (u) => {
                r.value = t + ",", d(u);
              },
              class: "tagItem"
            }, [
              L(o.$slots, "default", { option: t }, void 0, !0)
            ], 8, Me))
          ], 64))), 128))
        ])
      ])
    ], 2));
  }
});
const nl = /* @__PURE__ */ z(Re, [["__scopeId", "data-v-de7e2b23"]]), We = { class: "pickerOverlay pickerWrap" }, Ee = { class: "pickerContent" }, He = { class: "pickerHeader" }, Fe = ["onClick"], De = { class: "check" }, Ke = ["checked", "id"], Ue = ["for"], Pe = ["onClick"], qe = { class: "check" }, Ge = ["checked", "id"], Je = ["for"], Qe = ["onClick"], Xe = ["onClick"], Ye = ["onClick"], Ze = ["onClick"], el = { class: "pickerFooter" }, ll = { class: "tedirCategoryAdd" }, tl = /* @__PURE__ */ T({
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
  setup(s, { emit: g }) {
    const f = s, e = m(f.modelValue || {}), r = m(!1), k = m(""), $ = m(null), I = m(void 0), j = m("");
    M(() => f.modelValue, () => {
      e.value = f.modelValue;
    });
    const S = () => {
      clearTimeout(I.value), I.value = setTimeout(() => {
        var t, a;
        k.value = "", ((t = $.value) == null ? void 0 : t.value) && ((a = $.value) == null ? void 0 : a.value) !== "" && (k.value = $.value.value), g("search", k.value);
      }, 500);
    }, b = A(() => {
      let t = f.options;
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
    }), d = ((t = 10) => {
      let a = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", u = "";
      for (let w = 0; w < t; w++)
        u += a.charAt(Math.floor(Math.random() * a.length));
      return u;
    })(), v = (t) => {
      t.target.style.display = "none", r.value = !1;
    }, o = (t, a = "") => {
      a !== "" ? e.value.map((u) => u[a]).includes(t[a]) ? e.value.splice(e.value.findIndex((u) => u[a] === t[a]), 1) : e.value.push(t) : e.value.includes(t) ? e.value.splice(e.value.findIndex((u) => u === t), 1) : e.value.push(t), g("update:modelValue", e.value), g("change", e.value, t);
    }, l = (t) => {
      typeof t == "object" && t !== null && String(f.datatype).toLowerCase() === "string" ? (e.value = t[String(f.dataprop || f.prop)], g("update:modelValue", String(e.value))) : (e.value = t, g("update:modelValue", e.value)), r.value = !1, g("change", e.value, t);
    };
    return (t, a) => (c(), n("div", {
      class: N(["picker suggestion tedirCategory", r.value ? "active" : ""])
    }, [
      i("div", {
        class: "pickerBackdrop",
        style: V({ display: r.value ? "block" : "none" }),
        onClick: v
      }, null, 4),
      i("div", We, [
        i("div", {
          class: "select pickerToggler",
          onClick: a[0] || (a[0] = (u) => r.value = !r.value)
        }, [
          typeof e.value == "string" && e.value !== "" && y(b).length >= 1 && typeof y(b)[0] == "string" ? (c(), n(h, { key: 0 }, [
            x(p(e.value), 1)
          ], 64)) : typeof e.value == "string" && y(b).filter((u) => String(u[String(s.dataprop || s.prop)]) === e.value).length >= 1 && typeof y(b).filter((u) => String(u[String(s.dataprop || s.prop)]) === e.value)[0] == "object" ? (c(), n(h, { key: 1 }, [
            x(p(y(b).filter((u) => String(u[String(s.dataprop || s.prop)]) === e.value)[0][s.prop]), 1)
          ], 64)) : typeof e.value == "object" && e.value !== null && s.prop in e.value ? (c(), n(h, { key: 2 }, [
            x(p(e.value[s.prop]), 1)
          ], 64)) : Array.isArray(e.value) && e.value.length >= 1 && typeof e.value[0] == "string" ? (c(), n(h, { key: 3 }, [
            x(p(e.value.join(", ")), 1)
          ], 64)) : Array.isArray(e.value) && e.value.length >= 1 && typeof e.value[0] == "object" && s.prop in e.value[0] ? (c(), n(h, { key: 4 }, [
            x(p(e.value.map((u) => u[s.prop]).join(", ")), 1)
          ], 64)) : (c(), n(h, { key: 5 }, [
            x(p(s.placeholder), 1)
          ], 64))
        ]),
        i("div", Ee, [
          i("div", He, [
            i("input", {
              type: "search",
              ref_key: "searchRef",
              ref: $,
              onInput: S,
              class: "input"
            }, null, 544)
          ]),
          Array.isArray(e.value) ? (c(), n("div", {
            key: 0,
            class: "pickerMenu",
            style: V({ "max-height": Number(s.size) !== 0 ? Number(s.size) * 42 + "px" : "auto" })
          }, [
            (c(!0), n(h, null, O(y(b), (u, w) => (c(), n(h, {
              key: "option-" + u
            }, [
              typeof u == "string" ? (c(), n("div", {
                key: 0,
                onClick: _((B) => o(u), ["stop"]),
                class: "pickerItem"
              }, [
                i("div", De, [
                  i("input", {
                    type: "checkbox",
                    class: "checkInput",
                    checked: e.value.includes(u),
                    id: "check-" + (y(d) + String(w)),
                    style: { "pointer-events": "none" }
                  }, null, 8, Ke),
                  i("label", {
                    class: "checkLabel",
                    for: "check-" + (y(d) + String(w)),
                    style: { "pointer-events": "none" }
                  }, p(u), 9, Ue)
                ])
              ], 8, Fe)) : typeof u == "object" && u !== null && s.prop in u ? (c(), n("div", {
                key: 1,
                onClick: _((B) => o(u, s.prop), ["stop"]),
                class: "pickerItem"
              }, [
                i("div", qe, [
                  i("input", {
                    type: "checkbox",
                    class: "checkInput",
                    checked: e.value.includes(u),
                    id: "check-" + (y(d) + String(w)),
                    style: { "pointer-events": "none" }
                  }, null, 8, Ge),
                  i("label", {
                    class: "checkLabel",
                    for: "check-" + (y(d) + String(w)),
                    style: { "pointer-events": "none" }
                  }, p(u[s.prop]), 9, Je)
                ])
              ], 8, Pe)) : (c(), n("div", {
                key: 2,
                onClick: _((B) => o(u), ["stop"]),
                class: "pickerItem"
              }, [
                L(t.$slots, "default", {
                  option: u,
                  selected: e.value
                }, void 0, !0)
              ], 8, Qe))
            ], 64))), 128))
          ], 4)) : (c(), n("div", {
            key: 1,
            class: "pickerMenu",
            style: V({ "max-height": Number(s.size) !== 0 ? Number(s.size) * 42 + "px" : "auto" })
          }, [
            (c(!0), n(h, null, O(y(b), (u, w) => (c(), n(h, {
              key: "option-" + u
            }, [
              typeof u == "string" ? (c(), n("div", {
                key: 0,
                onClick: (B) => l(u),
                class: N(["pickerItem", e.value === u ? "active" : ""])
              }, p(u), 11, Xe)) : typeof u == "object" && u !== null && s.prop in u ? (c(), n("div", {
                key: 1,
                onClick: (B) => l(u),
                class: N(["pickerItem", e.value[s.prop] === u[s.prop] || String(u[s.dataprop || s.prop]) === String(e.value) ? "active" : ""])
              }, p(u[s.prop]), 11, Ye)) : (c(), n("div", {
                key: 2,
                onClick: _((B) => l(u), ["stop"]),
                class: N(["pickerItem", e.value === u ? "active" : ""])
              }, [
                L(t.$slots, "default", {
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
                  g("add", j.value), j.value = "";
                })
              }, "Save")
            ])
          ])
        ])
      ])
    ], 2));
  }
});
const rl = /* @__PURE__ */ z(tl, [["__scopeId", "data-v-ed7f3f43"]]);
export {
  rl as CategoryBox,
  ul as ComboBox,
  cl as ListBox,
  sl as SelectBox,
  nl as TagBox
};
