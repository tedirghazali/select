import { defineComponent as A, ref as S, watch as T, computed as z, openBlock as u, createElementBlock as c, normalizeClass as N, createElementVNode as o, normalizeStyle as w, unref as h, Fragment as p, createTextVNode as x, toDisplayString as g, withDirectives as _, vModelText as B, renderList as V, withModifiers as j, renderSlot as L, reactive as U, withKeys as W, pushScopeId as E, popScopeId as H } from "vue";
const R = { class: "pickerWrap" }, F = { class: "pickerContent" }, D = { class: "pickerHeader" }, K = ["onClick"], P = { class: "check" }, q = ["checked", "id"], G = ["for"], J = ["onClick"], Q = { class: "check" }, X = ["checked", "id"], Y = ["for"], Z = ["onClick"], ee = ["onClick"], le = ["onClick"], te = ["onClick"], ae = /* @__PURE__ */ A({
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
  emits: ["update:modelValue", "change"],
  setup(a, { emit: b }) {
    const f = a, e = S(f.modelValue || {}), r = S(!1), C = S("");
    T(() => f.modelValue, () => {
      e.value = f.modelValue;
    });
    const $ = z(() => {
      let s = f.options;
      return C.value.length >= 1 && (s = s.filter((n) => {
        if (isNaN(n) === !1 && Number(n) === Number(C.value))
          return !0;
        if (typeof n == "string" && n.toLowerCase().includes(C.value.toLowerCase()))
          return !0;
        if (typeof n == "object" && n !== null && Object.prototype.toString.call(n) === "[object Object]")
          for (const l of Object.keys(n)) {
            if (isNaN(n[l]) === !1 && Number(n[l]) === Number(C.value))
              return !0;
            if (typeof n[l] == "string" && n[l].toLowerCase().includes(C.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), s;
    }), y = ((s = 10) => {
      let n = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", l = "";
      for (let t = 0; t < s; t++)
        l += n.charAt(Math.floor(Math.random() * n.length));
      return l;
    })(), d = (s) => {
      s.target.style.display = "none", r.value = !1;
    }, k = (s, n = "") => {
      n !== "" ? e.value.map((l) => l[n]).includes(s[n]) ? e.value.splice(e.value.findIndex((l) => l[n] === s[n]), 1) : e.value.push(s) : e.value.includes(s) ? e.value.splice(e.value.findIndex((l) => l === s), 1) : e.value.push(s), b("update:modelValue", e.value), b("change", e.value, s);
    }, v = (s) => {
      typeof s == "object" && s !== null && String(f.datatype).toLowerCase() === "string" ? (e.value = s[String(f.dataprop || f.prop)], b("update:modelValue", String(e.value))) : (e.value = s, b("update:modelValue", e.value)), r.value = !1, b("change", e.value, s);
    };
    return (s, n) => (u(), c("div", {
      class: N(["picker suggestion", r.value ? "active" : ""])
    }, [
      o("div", {
        class: "pickerBackdrop",
        style: w({ display: r.value ? "block" : "none" }),
        onClick: d
      }, null, 4),
      o("div", R, [
        o("div", {
          class: "select pickerToggler",
          onClick: n[0] || (n[0] = (l) => r.value = !r.value)
        }, [
          typeof e.value == "string" && e.value !== "" && h($).length >= 1 && typeof h($)[0] == "string" ? (u(), c(p, { key: 0 }, [
            x(g(e.value), 1)
          ], 64)) : typeof e.value == "string" && h($).filter((l) => String(l[String(a.dataprop || a.prop)]) === e.value).length >= 1 && typeof h($).filter((l) => String(l[String(a.dataprop || a.prop)]) === e.value)[0] == "object" ? (u(), c(p, { key: 1 }, [
            x(g(h($).filter((l) => String(l[String(a.dataprop || a.prop)]) === e.value)[0][a.prop]), 1)
          ], 64)) : typeof e.value == "object" && e.value !== null && a.prop in e.value ? (u(), c(p, { key: 2 }, [
            x(g(e.value[a.prop]), 1)
          ], 64)) : Array.isArray(e.value) && e.value.length >= 1 && typeof e.value[0] == "string" ? (u(), c(p, { key: 3 }, [
            x(g(e.value.join(", ")), 1)
          ], 64)) : Array.isArray(e.value) && e.value.length >= 1 && typeof e.value[0] == "object" && a.prop in e.value[0] ? (u(), c(p, { key: 4 }, [
            x(g(e.value.map((l) => l[a.prop]).join(", ")), 1)
          ], 64)) : (u(), c(p, { key: 5 }, [
            x(g(a.placeholder), 1)
          ], 64))
        ]),
        o("div", F, [
          o("div", D, [
            _(o("input", {
              type: "search",
              "onUpdate:modelValue": n[1] || (n[1] = (l) => C.value = l),
              class: "input"
            }, null, 512), [
              [B, C.value]
            ])
          ]),
          Array.isArray(e.value) ? (u(), c("div", {
            key: 0,
            class: "pickerMenu",
            style: w({ "max-height": Number(a.size) !== 0 ? Number(a.size) * 42 + "px" : "auto" })
          }, [
            (u(!0), c(p, null, V(h($), (l, t) => (u(), c(p, {
              key: "option-" + l
            }, [
              typeof l == "string" ? (u(), c("div", {
                key: 0,
                onClick: j((i) => k(l), ["stop"]),
                class: "pickerItem"
              }, [
                o("div", P, [
                  o("input", {
                    type: "checkbox",
                    class: "checkInput",
                    checked: e.value.includes(l),
                    id: "check-" + (h(y) + String(t)),
                    style: { "pointer-events": "none" }
                  }, null, 8, q),
                  o("label", {
                    class: "checkLabel",
                    for: "check-" + (h(y) + String(t)),
                    style: { "pointer-events": "none" }
                  }, g(l), 9, G)
                ])
              ], 8, K)) : typeof l == "object" && l !== null && a.prop in l ? (u(), c("div", {
                key: 1,
                onClick: j((i) => k(l, a.prop), ["stop"]),
                class: "pickerItem"
              }, [
                o("div", Q, [
                  o("input", {
                    type: "checkbox",
                    class: "checkInput",
                    checked: e.value.includes(l),
                    id: "check-" + (h(y) + String(t)),
                    style: { "pointer-events": "none" }
                  }, null, 8, X),
                  o("label", {
                    class: "checkLabel",
                    for: "check-" + (h(y) + String(t)),
                    style: { "pointer-events": "none" }
                  }, g(l[a.prop]), 9, Y)
                ])
              ], 8, J)) : (u(), c("div", {
                key: 2,
                onClick: j((i) => k(l), ["stop"]),
                class: "pickerItem"
              }, [
                L(s.$slots, "default", {
                  option: l,
                  selected: e.value
                }, void 0, !0)
              ], 8, Z))
            ], 64))), 128))
          ], 4)) : (u(), c("div", {
            key: 1,
            class: "pickerMenu",
            style: w({ "max-height": Number(a.size) !== 0 ? Number(a.size) * 42 + "px" : "auto" })
          }, [
            (u(!0), c(p, null, V(h($), (l, t) => (u(), c(p, {
              key: "option-" + l
            }, [
              typeof l == "string" ? (u(), c("div", {
                key: 0,
                onClick: (i) => v(l),
                class: N(["pickerItem", e.value === l ? "active" : ""])
              }, g(l), 11, ee)) : typeof l == "object" && l !== null && a.prop in l ? (u(), c("div", {
                key: 1,
                onClick: (i) => v(l),
                class: N(["pickerItem", e.value[a.prop] === l[a.prop] || String(l[a.dataprop || a.prop]) === String(e.value) ? "active" : ""])
              }, g(l[a.prop]), 11, le)) : (u(), c("div", {
                key: 2,
                onClick: j((i) => v(l), ["stop"]),
                class: N(["pickerItem", e.value === l ? "active" : ""])
              }, [
                L(s.$slots, "default", {
                  option: l,
                  selected: e.value
                }, void 0, !0)
              ], 10, te))
            ], 64))), 128))
          ], 4))
        ])
      ])
    ], 2));
  }
});
const M = (a, b) => {
  const f = a.__vccOpts || a;
  for (const [e, r] of b)
    f[e] = r;
  return f;
}, tl = /* @__PURE__ */ M(ae, [["__scopeId", "data-v-4ad5849c"]]), se = { class: "pickerWrap" }, ue = { class: "pickerContent pickerSizing" }, ce = ["onClick"], ne = ["onClick"], re = ["onClick"], oe = /* @__PURE__ */ A({
  __name: "ComboBox",
  props: {
    modelValue: { default: null },
    options: { default: [] },
    prop: { default: "value" },
    placeholder: { default: "-- combo option --" },
    size: { default: 0 }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: b }) {
    const f = a, e = S(!1), r = S(""), C = z(() => {
      let m = f.options;
      return r.value.length >= 1 && (m = m.filter((y) => {
        if (isNaN(y) === !1 && Number(y) === Number(r.value))
          return !0;
        if (typeof y == "string" && y.toLowerCase().includes(r.value.toLowerCase()))
          return !0;
        if (typeof y == "object" && y !== null && Object.prototype.toString.call(y) === "[object Object]")
          for (const d of Object.keys(y)) {
            if (isNaN(y[d]) === !1 && Number(y[d]) === Number(r.value))
              return !0;
            if (typeof y[d] == "string" && y[d].toLowerCase().includes(r.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), m;
    }), $ = (m) => {
      m.target.style.display = "none", e.value = !1;
    };
    return (m, y) => (u(), c("div", {
      class: N(["picker suggestion", e.value ? "active" : ""])
    }, [
      o("div", {
        class: "pickerBackdrop",
        style: w({ display: e.value ? "block" : "none" }),
        onClick: $
      }, null, 4),
      o("div", se, [
        _(o("input", {
          type: "search",
          "onUpdate:modelValue": y[0] || (y[0] = (d) => r.value = d),
          onInput: y[1] || (y[1] = (d) => h(C).length >= 1 && r.value !== "" ? e.value = !0 : e.value = !1),
          onClick: y[2] || (y[2] = (d) => h(C).length >= 1 && r.value !== "" ? e.value = !0 : e.value = !1),
          class: "input"
        }, null, 544), [
          [B, r.value]
        ]),
        o("div", ue, [
          (u(!0), c(p, null, V(h(C), (d, k) => (u(), c(p, {
            key: "option-" + d
          }, [
            typeof d == "string" ? (u(), c("div", {
              key: 0,
              onClick: (v) => {
                r.value = d, b("update:modelValue", d), e.value = !1;
              },
              class: N(["pickerItem", a.modelValue === d ? "active" : ""])
            }, g(d), 11, ce)) : typeof d == "object" && a.prop in d ? (u(), c("div", {
              key: 1,
              onClick: (v) => {
                r.value = d[a.prop], b("update:modelValue", d), e.value = !1;
              },
              class: N(["pickerItem", a.modelValue[a.prop] === d[a.prop] ? "active" : ""])
            }, g(d[a.prop]), 11, ne)) : (u(), c("div", {
              key: 2,
              onClick: (v) => {
                r.value = d, b("update:modelValue", d), e.value = !1;
              },
              class: N(["pickerItem", a.modelValue === d ? "active" : ""])
            }, [
              L(m.$slots, "default", { option: d }, void 0, !0)
            ], 10, re))
          ], 64))), 128))
        ])
      ])
    ], 2));
  }
});
const al = /* @__PURE__ */ M(oe, [["__scopeId", "data-v-804539e4"]]), ie = { class: "list" }, de = { class: "listHeader" }, ve = ["onClick"], fe = { class: "check" }, ke = ["checked", "id"], ye = ["for"], he = ["onClick"], pe = { class: "check" }, ge = ["checked", "id"], Ce = ["for"], be = ["onClick"], me = ["onClick"], $e = ["onClick"], Se = ["onClick"], Ne = /* @__PURE__ */ A({
  __name: "ListBox",
  props: {
    modelValue: { default: {} },
    options: { default: [] },
    prop: { default: "value" },
    datatype: { default: "" },
    dataprop: { default: "" },
    size: { default: 0 }
  },
  emits: ["update:modelValue", "change"],
  setup(a, { emit: b }) {
    const f = a, e = S(f.modelValue || {}), r = S("");
    T(() => f.modelValue, () => {
      e.value = f.modelValue;
    });
    const C = z(() => {
      let k = f.options;
      return r.value.length >= 1 && (k = k.filter((v) => {
        if (isNaN(v) === !1 && Number(v) === Number(r.value))
          return !0;
        if (typeof v == "string" && v.toLowerCase().includes(r.value.toLowerCase()))
          return !0;
        if (typeof v == "object" && v !== null && Object.prototype.toString.call(v) === "[object Object]")
          for (const s of Object.keys(v)) {
            if (isNaN(v[s]) === !1 && Number(v[s]) === Number(r.value))
              return !0;
            if (typeof v[s] == "string" && v[s].toLowerCase().includes(r.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), k;
    }), m = (() => {
      let k = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", v = "";
      for (let s = 0; s < 10; s++)
        v += k.charAt(Math.floor(Math.random() * k.length));
      return v;
    })(), y = (k, v = "") => {
      v !== "" ? e.value.map((s) => s[v]).includes(k[v]) ? e.value.splice(e.value.findIndex((s) => s[v] === k[v]), 1) : e.value.push(k) : e.value.includes(k) ? e.value.splice(e.value.findIndex((s) => s === k), 1) : e.value.push(k), b("update:modelValue", e.value), b("change", e.value, k);
    }, d = (k) => {
      typeof k == "object" && k !== null && String(f.datatype).toLowerCase() === "string" ? (e.value = k[String(f.dataprop || f.prop)], b("update:modelValue", String(e.value))) : (e.value = k, b("update:modelValue", e.value)), b("change", e.value, k);
    };
    return (k, v) => (u(), c("div", null, [
      o("div", ie, [
        o("div", de, [
          _(o("input", {
            type: "search",
            "onUpdate:modelValue": v[0] || (v[0] = (s) => r.value = s),
            class: "input"
          }, null, 512), [
            [B, r.value]
          ])
        ]),
        Array.isArray(a.modelValue) ? (u(), c("div", {
          key: 0,
          class: "listMenu",
          style: w({ "max-height": Number(a.size) !== 0 ? Number(a.size) * 44 + "px" : "auto" })
        }, [
          (u(!0), c(p, null, V(h(C), (s, n) => (u(), c(p, {
            key: "option-" + s
          }, [
            typeof s == "string" ? (u(), c("div", {
              key: 0,
              onClick: j((l) => y(s), ["stop"]),
              class: "listItem"
            }, [
              o("div", fe, [
                o("input", {
                  type: "checkbox",
                  class: "checkInput",
                  checked: e.value.includes(s),
                  id: "check-" + (h(m) + String(n)),
                  style: { "pointer-events": "none" }
                }, null, 8, ke),
                o("label", {
                  class: "checkLabel",
                  for: "check-" + (h(m) + String(n)),
                  style: { "pointer-events": "none" }
                }, g(s), 9, ye)
              ])
            ], 8, ve)) : typeof s == "object" && a.prop in s ? (u(), c("div", {
              key: 1,
              onClick: j((l) => y(s, a.prop), ["stop"]),
              class: "listItem"
            }, [
              o("div", pe, [
                o("input", {
                  type: "checkbox",
                  class: "checkInput",
                  checked: e.value.includes(s),
                  id: "check-" + (h(m) + String(n)),
                  style: { "pointer-events": "none" }
                }, null, 8, ge),
                o("label", {
                  class: "checkLabel",
                  for: "check-" + (h(m) + String(n)),
                  style: { "pointer-events": "none" }
                }, g(s[a.prop]), 9, Ce)
              ])
            ], 8, he)) : (u(), c("div", {
              key: 2,
              onClick: j((l) => y(s), ["stop"]),
              class: N(["listItem", e.value.includes(s) ? "active" : ""])
            }, [
              L(k.$slots, "default", {
                option: s,
                selected: e.value
              }, void 0, !0)
            ], 10, be))
          ], 64))), 128))
        ], 4)) : (u(), c("div", {
          key: 1,
          class: "listMenu",
          style: w({ "max-height": Number(a.size) !== 0 ? Number(a.size) * 44 + "px" : "auto" })
        }, [
          (u(!0), c(p, null, V(h(C), (s, n) => (u(), c(p, {
            key: "option-" + s
          }, [
            typeof s == "string" ? (u(), c("div", {
              key: 0,
              onClick: (l) => d(s),
              class: N(["listItem", e.value === s ? "active" : ""])
            }, g(s), 11, me)) : typeof s == "object" && a.prop in s ? (u(), c("div", {
              key: 1,
              onClick: (l) => d(s),
              class: N(["listItem", e.value[a.prop] === s[a.prop] || String(s[a.dataprop || a.prop]) === String(e.value) ? "active" : ""])
            }, g(s[a.prop]), 11, $e)) : (u(), c("div", {
              key: 2,
              onClick: j((l) => d(s), ["stop"]),
              class: N(["listItem", e.value === s ? "active" : ""])
            }, [
              L(k.$slots, "default", {
                option: s,
                selected: e.value
              }, void 0, !0)
            ], 10, Se))
          ], 64))), 128))
        ], 4))
      ])
    ]));
  }
});
const sl = /* @__PURE__ */ M(Ne, [["__scopeId", "data-v-c2f3a9ca"]]), xe = (a) => (E("data-v-de7e2b23"), a = a(), H(), a), je = { class: "tagWrap" }, we = { class: "tags" }, Ie = { class: "tag groupItem" }, Ve = ["onClick"], Le = /* @__PURE__ */ xe(() => /* @__PURE__ */ o("svg", {
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
  /* @__PURE__ */ o("line", {
    x1: "18",
    y1: "6",
    x2: "6",
    y2: "18"
  }),
  /* @__PURE__ */ o("line", {
    x1: "6",
    y1: "6",
    x2: "18",
    y2: "18"
  })
], -1)), Oe = [
  Le
], _e = { class: "tagContent" }, Be = ["onClick"], Ae = ["onClick"], ze = ["onClick"], Me = /* @__PURE__ */ A({
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
  setup(a, { emit: b }) {
    const f = a, e = S(!1), r = S(""), C = S(null), $ = U(f.modelValue || []), m = S(f.options || []), y = S(f.separator || ","), d = S(f.prop || "value"), k = z(() => {
      let l = m.value;
      return r.value.length >= 1 && (l = l.filter((t) => {
        if (isNaN(t) === !1 && Number(t) === Number(r.value))
          return !0;
        if (typeof t == "string" && t.toLowerCase().includes(r.value.toLowerCase()))
          return !0;
        if (typeof t == "object" && t !== null && Object.prototype.toString.call(t) === "[object Object]")
          for (const i of Object.keys(t)) {
            if (isNaN(t[i]) === !1 && Number(t[i]) === Number(r.value))
              return !0;
            if (typeof t[i] == "string" && t[i].toLowerCase().includes(r.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), l;
    }), v = () => {
      C.value.focus();
    }, s = (l) => {
      if (l.key !== "Enter" && k.value.length >= 1 ? e.value = !0 : e.value = !1, r.value.endsWith(y.value) || l.key === "Enter") {
        const t = r.value.replace(y.value, "");
        $.includes(t) || ($.push(t), m.value.includes(t) && (m.value = m.value.filter((i) => typeof i == "string" && i !== t ? !0 : typeof i == "object" && d.value in i && i[d.value] !== t))), r.value = "", b("update:modelValue", $);
      }
    };
    T(r, () => {
      if (C.value !== null) {
        const l = document.createElement("div");
        l.style.width = "max-content", l.style.position = "absolute", l.style.visibility = "hidden";
        const t = r.value.length >= 2 ? r.value : C.value.getAttribute("placeholder");
        l.innerHTML = t.replace(/ /g, "&nbsp;").trim(), document.body.appendChild(l);
        const i = Math.ceil(Number(window.getComputedStyle(l).width.replace("px", ""))) + 30;
        C.value.style.setProperty("width", i + "px"), l.remove();
      }
    });
    const n = (l) => {
      l.target.style.display = "none", e.value = !1;
    };
    return (l, t) => (u(), c("div", {
      class: N(["taggable", { active: e.value === !0 }])
    }, [
      o("div", {
        class: "tagBackdrop",
        style: w({ display: e.value ? "block" : "none" }),
        onClick: n
      }, null, 4),
      o("div", je, [
        o("div", {
          class: "input tagToggler",
          onClick: v
        }, [
          o("div", we, [
            (u(!0), c(p, null, V($, (i, I) => (u(), c("div", {
              key: "tag-" + I,
              class: "group"
            }, [
              o("div", Ie, [
                typeof i == "string" && i !== "" ? (u(), c(p, { key: 0 }, [
                  x(g(i), 1)
                ], 64)) : typeof i == "object" && d.value in i ? (u(), c(p, { key: 1 }, [
                  x(g(i[d.value]), 1)
                ], 64)) : (u(), c(p, { key: 2 }, [
                  x(g(a.placeholder), 1)
                ], 64))
              ]),
              o("div", {
                class: "tag groupItem",
                onClick: (O) => $.splice(I, 1)
              }, Oe, 8, Ve)
            ]))), 128)),
            _(o("input", {
              type: "search",
              ref_key: "inputRef",
              ref: C,
              "onUpdate:modelValue": t[0] || (t[0] = (i) => r.value = i),
              class: "tagInput",
              onInput: t[1] || (t[1] = (i) => s(i)),
              onKeyup: t[2] || (t[2] = W((i) => s(i), ["enter"])),
              placeholder: "Add new tag"
            }, null, 544), [
              [B, r.value]
            ])
          ])
        ]),
        o("div", _e, [
          (u(!0), c(p, null, V(h(k), (i, I) => (u(), c(p, {
            key: "option-" + i
          }, [
            typeof i == "string" ? (u(), c("div", {
              key: 0,
              onClick: (O) => {
                r.value = i + ",", s(O);
              },
              class: "tagItem"
            }, g(i), 9, Be)) : typeof i == "object" && d.value in i ? (u(), c("div", {
              key: 1,
              onClick: (O) => {
                r.value = i[d.value] + ",", s(O);
              },
              class: "tagItem"
            }, g(i[d.value]), 9, Ae)) : (u(), c("div", {
              key: 2,
              onClick: (O) => {
                r.value = i + ",", s(O);
              },
              class: "tagItem"
            }, [
              L(l.$slots, "default", { option: i }, void 0, !0)
            ], 8, ze))
          ], 64))), 128))
        ])
      ])
    ], 2));
  }
});
const ul = /* @__PURE__ */ M(Me, [["__scopeId", "data-v-de7e2b23"]]), Te = { class: "pickerOverlay pickerWrap" }, Ue = { class: "pickerContent" }, We = { class: "pickerHeader" }, Ee = ["onClick"], He = { class: "check" }, Re = ["checked", "id"], Fe = ["for"], De = ["onClick"], Ke = { class: "check" }, Pe = ["checked", "id"], qe = ["for"], Ge = ["onClick"], Je = ["onClick"], Qe = ["onClick"], Xe = ["onClick"], Ye = { class: "pickerFooter" }, Ze = { class: "tedirCategoryAdd" }, el = /* @__PURE__ */ A({
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
  emits: ["update:modelValue", "change", "add"],
  setup(a, { emit: b }) {
    const f = a, e = S(f.modelValue || {}), r = S(!1), C = S(""), $ = S("");
    T(() => f.modelValue, () => {
      e.value = f.modelValue;
    });
    const m = z(() => {
      let n = f.options;
      return C.value.length >= 1 && (n = n.filter((l) => {
        if (isNaN(l) === !1 && Number(l) === Number(C.value))
          return !0;
        if (typeof l == "string" && l.toLowerCase().includes(C.value.toLowerCase()))
          return !0;
        if (typeof l == "object" && l !== null && Object.prototype.toString.call(l) === "[object Object]")
          for (const t of Object.keys(l)) {
            if (isNaN(l[t]) === !1 && Number(l[t]) === Number(C.value))
              return !0;
            if (typeof l[t] == "string" && l[t].toLowerCase().includes(C.value.toLowerCase()))
              return !0;
          }
        return !1;
      })), n;
    }), d = ((n = 10) => {
      let l = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ", t = "";
      for (let i = 0; i < n; i++)
        t += l.charAt(Math.floor(Math.random() * l.length));
      return t;
    })(), k = (n) => {
      n.target.style.display = "none", r.value = !1;
    }, v = (n, l = "") => {
      l !== "" ? e.value.map((t) => t[l]).includes(n[l]) ? e.value.splice(e.value.findIndex((t) => t[l] === n[l]), 1) : e.value.push(n) : e.value.includes(n) ? e.value.splice(e.value.findIndex((t) => t === n), 1) : e.value.push(n), b("update:modelValue", e.value), b("change", e.value, n);
    }, s = (n) => {
      typeof n == "object" && n !== null && String(f.datatype).toLowerCase() === "string" ? (e.value = n[String(f.dataprop || f.prop)], b("update:modelValue", String(e.value))) : (e.value = n, b("update:modelValue", e.value)), r.value = !1, b("change", e.value, n);
    };
    return (n, l) => (u(), c("div", {
      class: N(["picker suggestion tedirCategory", r.value ? "active" : ""])
    }, [
      o("div", {
        class: "pickerBackdrop",
        style: w({ display: r.value ? "block" : "none" }),
        onClick: k
      }, null, 4),
      o("div", Te, [
        o("div", {
          class: "select pickerToggler",
          onClick: l[0] || (l[0] = (t) => r.value = !r.value)
        }, [
          typeof e.value == "string" && e.value !== "" && h(m).length >= 1 && typeof h(m)[0] == "string" ? (u(), c(p, { key: 0 }, [
            x(g(e.value), 1)
          ], 64)) : typeof e.value == "string" && h(m).filter((t) => String(t[String(a.dataprop || a.prop)]) === e.value).length >= 1 && typeof h(m).filter((t) => String(t[String(a.dataprop || a.prop)]) === e.value)[0] == "object" ? (u(), c(p, { key: 1 }, [
            x(g(h(m).filter((t) => String(t[String(a.dataprop || a.prop)]) === e.value)[0][a.prop]), 1)
          ], 64)) : typeof e.value == "object" && e.value !== null && a.prop in e.value ? (u(), c(p, { key: 2 }, [
            x(g(e.value[a.prop]), 1)
          ], 64)) : Array.isArray(e.value) && e.value.length >= 1 && typeof e.value[0] == "string" ? (u(), c(p, { key: 3 }, [
            x(g(e.value.join(", ")), 1)
          ], 64)) : Array.isArray(e.value) && e.value.length >= 1 && typeof e.value[0] == "object" && a.prop in e.value[0] ? (u(), c(p, { key: 4 }, [
            x(g(e.value.map((t) => t[a.prop]).join(", ")), 1)
          ], 64)) : (u(), c(p, { key: 5 }, [
            x(g(a.placeholder), 1)
          ], 64))
        ]),
        o("div", Ue, [
          o("div", We, [
            _(o("input", {
              type: "search",
              "onUpdate:modelValue": l[1] || (l[1] = (t) => C.value = t),
              class: "input"
            }, null, 512), [
              [B, C.value]
            ])
          ]),
          Array.isArray(e.value) ? (u(), c("div", {
            key: 0,
            class: "pickerMenu",
            style: w({ "max-height": Number(a.size) !== 0 ? Number(a.size) * 42 + "px" : "auto" })
          }, [
            (u(!0), c(p, null, V(h(m), (t, i) => (u(), c(p, {
              key: "option-" + t
            }, [
              typeof t == "string" ? (u(), c("div", {
                key: 0,
                onClick: j((I) => v(t), ["stop"]),
                class: "pickerItem"
              }, [
                o("div", He, [
                  o("input", {
                    type: "checkbox",
                    class: "checkInput",
                    checked: e.value.includes(t),
                    id: "check-" + (h(d) + String(i)),
                    style: { "pointer-events": "none" }
                  }, null, 8, Re),
                  o("label", {
                    class: "checkLabel",
                    for: "check-" + (h(d) + String(i)),
                    style: { "pointer-events": "none" }
                  }, g(t), 9, Fe)
                ])
              ], 8, Ee)) : typeof t == "object" && t !== null && a.prop in t ? (u(), c("div", {
                key: 1,
                onClick: j((I) => v(t, a.prop), ["stop"]),
                class: "pickerItem"
              }, [
                o("div", Ke, [
                  o("input", {
                    type: "checkbox",
                    class: "checkInput",
                    checked: e.value.includes(t),
                    id: "check-" + (h(d) + String(i)),
                    style: { "pointer-events": "none" }
                  }, null, 8, Pe),
                  o("label", {
                    class: "checkLabel",
                    for: "check-" + (h(d) + String(i)),
                    style: { "pointer-events": "none" }
                  }, g(t[a.prop]), 9, qe)
                ])
              ], 8, De)) : (u(), c("div", {
                key: 2,
                onClick: j((I) => v(t), ["stop"]),
                class: "pickerItem"
              }, [
                L(n.$slots, "default", {
                  option: t,
                  selected: e.value
                }, void 0, !0)
              ], 8, Ge))
            ], 64))), 128))
          ], 4)) : (u(), c("div", {
            key: 1,
            class: "pickerMenu",
            style: w({ "max-height": Number(a.size) !== 0 ? Number(a.size) * 42 + "px" : "auto" })
          }, [
            (u(!0), c(p, null, V(h(m), (t, i) => (u(), c(p, {
              key: "option-" + t
            }, [
              typeof t == "string" ? (u(), c("div", {
                key: 0,
                onClick: (I) => s(t),
                class: N(["pickerItem", e.value === t ? "active" : ""])
              }, g(t), 11, Je)) : typeof t == "object" && t !== null && a.prop in t ? (u(), c("div", {
                key: 1,
                onClick: (I) => s(t),
                class: N(["pickerItem", e.value[a.prop] === t[a.prop] || String(t[a.dataprop || a.prop]) === String(e.value) ? "active" : ""])
              }, g(t[a.prop]), 11, Qe)) : (u(), c("div", {
                key: 2,
                onClick: j((I) => s(t), ["stop"]),
                class: N(["pickerItem", e.value === t ? "active" : ""])
              }, [
                L(n.$slots, "default", {
                  option: t,
                  selected: e.value
                }, void 0, !0)
              ], 10, Xe))
            ], 64))), 128))
          ], 4)),
          o("div", Ye, [
            o("div", Ze, [
              _(o("input", {
                type: "text",
                "onUpdate:modelValue": l[2] || (l[2] = (t) => $.value = t),
                class: "input",
                placeholder: "Add New Category"
              }, null, 512), [
                [B, $.value]
              ]),
              o("button", {
                type: "button",
                class: "button tedirCategoryButton",
                onClick: l[3] || (l[3] = (t) => {
                  b("add", $.value), $.value = "";
                })
              }, "Save")
            ])
          ])
        ])
      ])
    ], 2));
  }
});
const cl = /* @__PURE__ */ M(el, [["__scopeId", "data-v-740094f1"]]);
export {
  cl as CategoryBox,
  al as ComboBox,
  sl as ListBox,
  tl as SelectBox,
  ul as TagBox
};
