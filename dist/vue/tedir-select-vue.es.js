import { defineComponent as z, ref as S, watch as T, computed as A, openBlock as u, createElementBlock as c, normalizeClass as N, createBlock as U, Teleport as W, createElementVNode as o, normalizeStyle as j, unref as h, Fragment as p, createTextVNode as w, toDisplayString as g, withDirectives as _, vModelText as B, renderList as V, withModifiers as x, renderSlot as L, reactive as E, withKeys as H, pushScopeId as R, popScopeId as F } from "vue";
const D = { class: "pickerWrap" }, K = { class: "pickerContent" }, P = { class: "pickerHeader" }, q = ["onClick"], G = { class: "check" }, J = ["checked", "id"], Q = ["for"], X = ["onClick"], Y = { class: "check" }, Z = ["checked", "id"], ee = ["for"], le = ["onClick"], te = ["onClick"], ae = ["onClick"], se = ["onClick"], ue = /* @__PURE__ */ z({
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
  setup(a, { emit: C }) {
    const f = a, e = S(f.modelValue || {}), r = S(!1), b = S("");
    T(() => f.modelValue, () => {
      e.value = f.modelValue;
    });
    const $ = A(() => {
      let s = f.options;
      return b.value.length >= 1 && (s = s.filter((n) => {
        if (isNaN(n) === !1 && Number(n) === Number(b.value))
          return !0;
        if (typeof n == "string" && n.toLowerCase().includes(b.value.toLowerCase()))
          return !0;
        if (typeof n == "object" && n !== null && Object.prototype.toString.call(n) === "[object Object]")
          for (const l of Object.keys(n)) {
            if (isNaN(n[l]) === !1 && Number(n[l]) === Number(b.value))
              return !0;
            if (typeof n[l] == "string" && n[l].toLowerCase().includes(b.value.toLowerCase()))
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
      n !== "" ? e.value.map((l) => l[n]).includes(s[n]) ? e.value.splice(e.value.findIndex((l) => l[n] === s[n]), 1) : e.value.push(s) : e.value.includes(s) ? e.value.splice(e.value.findIndex((l) => l === s), 1) : e.value.push(s), C("update:modelValue", e.value), C("change", e.value, s);
    }, v = (s) => {
      typeof s == "object" && s !== null && String(f.datatype).toLowerCase() === "string" ? (e.value = s[String(f.dataprop || f.prop)], C("update:modelValue", String(e.value))) : (e.value = s, C("update:modelValue", e.value)), r.value = !1, C("change", e.value, s);
    };
    return (s, n) => (u(), c("div", {
      class: N(["picker suggestion", r.value ? "active" : ""])
    }, [
      (u(), U(W, { to: "body" }, [
        o("div", {
          class: "pickerBackdrop",
          style: j({ display: r.value ? "block" : "none" }),
          onClick: d
        }, null, 4)
      ])),
      o("div", D, [
        o("div", {
          class: "select pickerToggler",
          onClick: n[0] || (n[0] = (l) => r.value = !r.value)
        }, [
          typeof e.value == "string" && e.value !== "" && h($).length >= 1 && typeof h($)[0] == "string" ? (u(), c(p, { key: 0 }, [
            w(g(e.value), 1)
          ], 64)) : typeof e.value == "string" && h($).filter((l) => String(l[String(a.dataprop || a.prop)]) === e.value).length >= 1 && typeof h($).filter((l) => String(l[String(a.dataprop || a.prop)]) === e.value)[0] == "object" ? (u(), c(p, { key: 1 }, [
            w(g(h($).filter((l) => String(l[String(a.dataprop || a.prop)]) === e.value)[0][a.prop]), 1)
          ], 64)) : typeof e.value == "object" && e.value !== null && a.prop in e.value ? (u(), c(p, { key: 2 }, [
            w(g(e.value[a.prop]), 1)
          ], 64)) : Array.isArray(e.value) && e.value.length >= 1 && typeof e.value[0] == "string" ? (u(), c(p, { key: 3 }, [
            w(g(e.value.join(", ")), 1)
          ], 64)) : Array.isArray(e.value) && e.value.length >= 1 && typeof e.value[0] == "object" && a.prop in e.value[0] ? (u(), c(p, { key: 4 }, [
            w(g(e.value.map((l) => l[a.prop]).join(", ")), 1)
          ], 64)) : (u(), c(p, { key: 5 }, [
            w(g(a.placeholder), 1)
          ], 64))
        ]),
        o("div", K, [
          o("div", P, [
            _(o("input", {
              type: "search",
              "onUpdate:modelValue": n[1] || (n[1] = (l) => b.value = l),
              class: "input"
            }, null, 512), [
              [B, b.value]
            ])
          ]),
          Array.isArray(e.value) ? (u(), c("div", {
            key: 0,
            class: "pickerMenu",
            style: j({ "max-height": Number(a.size) !== 0 ? Number(a.size) * 42 + "px" : "auto" })
          }, [
            (u(!0), c(p, null, V(h($), (l, t) => (u(), c(p, {
              key: "option-" + l
            }, [
              typeof l == "string" ? (u(), c("div", {
                key: 0,
                onClick: x((i) => k(l), ["stop"]),
                class: "pickerItem"
              }, [
                o("div", G, [
                  o("input", {
                    type: "checkbox",
                    class: "checkInput",
                    checked: e.value.includes(l),
                    id: "check-" + (h(y) + String(t)),
                    style: { "pointer-events": "none" }
                  }, null, 8, J),
                  o("label", {
                    class: "checkLabel",
                    for: "check-" + (h(y) + String(t)),
                    style: { "pointer-events": "none" }
                  }, g(l), 9, Q)
                ])
              ], 8, q)) : typeof l == "object" && l !== null && a.prop in l ? (u(), c("div", {
                key: 1,
                onClick: x((i) => k(l, a.prop), ["stop"]),
                class: "pickerItem"
              }, [
                o("div", Y, [
                  o("input", {
                    type: "checkbox",
                    class: "checkInput",
                    checked: e.value.includes(l),
                    id: "check-" + (h(y) + String(t)),
                    style: { "pointer-events": "none" }
                  }, null, 8, Z),
                  o("label", {
                    class: "checkLabel",
                    for: "check-" + (h(y) + String(t)),
                    style: { "pointer-events": "none" }
                  }, g(l[a.prop]), 9, ee)
                ])
              ], 8, X)) : (u(), c("div", {
                key: 2,
                onClick: x((i) => k(l), ["stop"]),
                class: "pickerItem"
              }, [
                L(s.$slots, "default", {
                  option: l,
                  selected: e.value
                }, void 0, !0)
              ], 8, le))
            ], 64))), 128))
          ], 4)) : (u(), c("div", {
            key: 1,
            class: "pickerMenu",
            style: j({ "max-height": Number(a.size) !== 0 ? Number(a.size) * 42 + "px" : "auto" })
          }, [
            (u(!0), c(p, null, V(h($), (l, t) => (u(), c(p, {
              key: "option-" + l
            }, [
              typeof l == "string" ? (u(), c("div", {
                key: 0,
                onClick: (i) => v(l),
                class: N(["pickerItem", e.value === l ? "active" : ""])
              }, g(l), 11, te)) : typeof l == "object" && l !== null && a.prop in l ? (u(), c("div", {
                key: 1,
                onClick: (i) => v(l),
                class: N(["pickerItem", e.value[a.prop] === l[a.prop] || String(l[a.dataprop || a.prop]) === String(e.value) ? "active" : ""])
              }, g(l[a.prop]), 11, ae)) : (u(), c("div", {
                key: 2,
                onClick: x((i) => v(l), ["stop"]),
                class: N(["pickerItem", e.value === l ? "active" : ""])
              }, [
                L(s.$slots, "default", {
                  option: l,
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
const M = (a, C) => {
  const f = a.__vccOpts || a;
  for (const [e, r] of C)
    f[e] = r;
  return f;
}, sl = /* @__PURE__ */ M(ue, [["__scopeId", "data-v-a80159b8"]]), ce = { class: "pickerWrap" }, ne = { class: "pickerContent pickerSizing" }, re = ["onClick"], oe = ["onClick"], ie = ["onClick"], de = /* @__PURE__ */ z({
  __name: "ComboBox",
  props: {
    modelValue: { default: null },
    options: { default: [] },
    prop: { default: "value" },
    placeholder: { default: "-- combo option --" },
    size: { default: 0 }
  },
  emits: ["update:modelValue"],
  setup(a, { emit: C }) {
    const f = a, e = S(!1), r = S(""), b = A(() => {
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
      (u(), U(W, { to: "body" }, [
        o("div", {
          class: "pickerBackdrop",
          style: j({ display: e.value ? "block" : "none" }),
          onClick: $
        }, null, 4)
      ])),
      o("div", ce, [
        _(o("input", {
          type: "search",
          "onUpdate:modelValue": y[0] || (y[0] = (d) => r.value = d),
          onInput: y[1] || (y[1] = (d) => h(b).length >= 1 && r.value !== "" ? e.value = !0 : e.value = !1),
          onClick: y[2] || (y[2] = (d) => h(b).length >= 1 && r.value !== "" ? e.value = !0 : e.value = !1),
          class: "input"
        }, null, 544), [
          [B, r.value]
        ]),
        o("div", ne, [
          (u(!0), c(p, null, V(h(b), (d, k) => (u(), c(p, {
            key: "option-" + d
          }, [
            typeof d == "string" ? (u(), c("div", {
              key: 0,
              onClick: (v) => {
                r.value = d, C("update:modelValue", d), e.value = !1;
              },
              class: N(["pickerItem", a.modelValue === d ? "active" : ""])
            }, g(d), 11, re)) : typeof d == "object" && a.prop in d ? (u(), c("div", {
              key: 1,
              onClick: (v) => {
                r.value = d[a.prop], C("update:modelValue", d), e.value = !1;
              },
              class: N(["pickerItem", a.modelValue[a.prop] === d[a.prop] ? "active" : ""])
            }, g(d[a.prop]), 11, oe)) : (u(), c("div", {
              key: 2,
              onClick: (v) => {
                r.value = d, C("update:modelValue", d), e.value = !1;
              },
              class: N(["pickerItem", a.modelValue === d ? "active" : ""])
            }, [
              L(m.$slots, "default", { option: d }, void 0, !0)
            ], 10, ie))
          ], 64))), 128))
        ])
      ])
    ], 2));
  }
});
const ul = /* @__PURE__ */ M(de, [["__scopeId", "data-v-f4b8a3cd"]]), ve = { class: "list" }, fe = { class: "listHeader" }, ke = ["onClick"], ye = { class: "check" }, he = ["checked", "id"], pe = ["for"], ge = ["onClick"], be = { class: "check" }, Ce = ["checked", "id"], me = ["for"], $e = ["onClick"], Se = ["onClick"], Ne = ["onClick"], we = ["onClick"], xe = /* @__PURE__ */ z({
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
  setup(a, { emit: C }) {
    const f = a, e = S(f.modelValue || {}), r = S("");
    T(() => f.modelValue, () => {
      e.value = f.modelValue;
    });
    const b = A(() => {
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
      v !== "" ? e.value.map((s) => s[v]).includes(k[v]) ? e.value.splice(e.value.findIndex((s) => s[v] === k[v]), 1) : e.value.push(k) : e.value.includes(k) ? e.value.splice(e.value.findIndex((s) => s === k), 1) : e.value.push(k), C("update:modelValue", e.value), C("change", e.value, k);
    }, d = (k) => {
      typeof k == "object" && k !== null && String(f.datatype).toLowerCase() === "string" ? (e.value = k[String(f.dataprop || f.prop)], C("update:modelValue", String(e.value))) : (e.value = k, C("update:modelValue", e.value)), C("change", e.value, k);
    };
    return (k, v) => (u(), c("div", null, [
      o("div", ve, [
        o("div", fe, [
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
          style: j({ "max-height": Number(a.size) !== 0 ? Number(a.size) * 44 + "px" : "auto" })
        }, [
          (u(!0), c(p, null, V(h(b), (s, n) => (u(), c(p, {
            key: "option-" + s
          }, [
            typeof s == "string" ? (u(), c("div", {
              key: 0,
              onClick: x((l) => y(s), ["stop"]),
              class: "listItem"
            }, [
              o("div", ye, [
                o("input", {
                  type: "checkbox",
                  class: "checkInput",
                  checked: e.value.includes(s),
                  id: "check-" + (h(m) + String(n)),
                  style: { "pointer-events": "none" }
                }, null, 8, he),
                o("label", {
                  class: "checkLabel",
                  for: "check-" + (h(m) + String(n)),
                  style: { "pointer-events": "none" }
                }, g(s), 9, pe)
              ])
            ], 8, ke)) : typeof s == "object" && a.prop in s ? (u(), c("div", {
              key: 1,
              onClick: x((l) => y(s, a.prop), ["stop"]),
              class: "listItem"
            }, [
              o("div", be, [
                o("input", {
                  type: "checkbox",
                  class: "checkInput",
                  checked: e.value.includes(s),
                  id: "check-" + (h(m) + String(n)),
                  style: { "pointer-events": "none" }
                }, null, 8, Ce),
                o("label", {
                  class: "checkLabel",
                  for: "check-" + (h(m) + String(n)),
                  style: { "pointer-events": "none" }
                }, g(s[a.prop]), 9, me)
              ])
            ], 8, ge)) : (u(), c("div", {
              key: 2,
              onClick: x((l) => y(s), ["stop"]),
              class: N(["listItem", e.value.includes(s) ? "active" : ""])
            }, [
              L(k.$slots, "default", {
                option: s,
                selected: e.value
              }, void 0, !0)
            ], 10, $e))
          ], 64))), 128))
        ], 4)) : (u(), c("div", {
          key: 1,
          class: "listMenu",
          style: j({ "max-height": Number(a.size) !== 0 ? Number(a.size) * 44 + "px" : "auto" })
        }, [
          (u(!0), c(p, null, V(h(b), (s, n) => (u(), c(p, {
            key: "option-" + s
          }, [
            typeof s == "string" ? (u(), c("div", {
              key: 0,
              onClick: (l) => d(s),
              class: N(["listItem", e.value === s ? "active" : ""])
            }, g(s), 11, Se)) : typeof s == "object" && a.prop in s ? (u(), c("div", {
              key: 1,
              onClick: (l) => d(s),
              class: N(["listItem", e.value[a.prop] === s[a.prop] || String(s[a.dataprop || a.prop]) === String(e.value) ? "active" : ""])
            }, g(s[a.prop]), 11, Ne)) : (u(), c("div", {
              key: 2,
              onClick: x((l) => d(s), ["stop"]),
              class: N(["listItem", e.value === s ? "active" : ""])
            }, [
              L(k.$slots, "default", {
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
const cl = /* @__PURE__ */ M(xe, [["__scopeId", "data-v-c2f3a9ca"]]), je = (a) => (R("data-v-4f75424c"), a = a(), F(), a), Ie = { class: "tagWrap" }, Ve = { class: "tags" }, Le = { class: "tag groupItem" }, Oe = ["onClick"], _e = /* @__PURE__ */ je(() => /* @__PURE__ */ o("svg", {
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
], -1)), Be = [
  _e
], ze = { class: "tagContent" }, Ae = ["onClick"], Me = ["onClick"], Te = ["onClick"], Ue = /* @__PURE__ */ z({
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
  setup(a, { emit: C }) {
    const f = a, e = S(!1), r = S(""), b = S(null), $ = E(f.modelValue || []), m = S(f.options || []), y = S(f.separator || ","), d = S(f.prop || "value"), k = A(() => {
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
      b.value.focus();
    }, s = (l) => {
      if (l.key !== "Enter" && k.value.length >= 1 ? e.value = !0 : e.value = !1, r.value.endsWith(y.value) || l.key === "Enter") {
        const t = r.value.replace(y.value, "");
        $.includes(t) || ($.push(t), m.value.includes(t) && (m.value = m.value.filter((i) => typeof i == "string" && i !== t ? !0 : typeof i == "object" && d.value in i && i[d.value] !== t))), r.value = "", C("update:modelValue", $);
      }
    };
    T(r, () => {
      if (b.value !== null) {
        const l = document.createElement("div");
        l.style.width = "max-content", l.style.position = "absolute", l.style.visibility = "hidden";
        const t = r.value.length >= 2 ? r.value : b.value.getAttribute("placeholder");
        l.innerHTML = t.replace(/ /g, "&nbsp;").trim(), document.body.appendChild(l);
        const i = Math.ceil(Number(window.getComputedStyle(l).width.replace("px", ""))) + 30;
        b.value.style.setProperty("width", i + "px"), l.remove();
      }
    });
    const n = (l) => {
      l.target.style.display = "none", e.value = !1;
    };
    return (l, t) => (u(), c("div", {
      class: N(["taggable", { active: e.value === !0 }])
    }, [
      (u(), U(W, { to: "body" }, [
        o("div", {
          class: "tagBackdrop",
          style: j({ display: e.value ? "block" : "none" }),
          onClick: n
        }, null, 4)
      ])),
      o("div", Ie, [
        o("div", {
          class: "input tagToggler",
          onClick: v
        }, [
          o("div", Ve, [
            (u(!0), c(p, null, V($, (i, I) => (u(), c("div", {
              key: "tag-" + I,
              class: "group"
            }, [
              o("div", Le, [
                typeof i == "string" && i !== "" ? (u(), c(p, { key: 0 }, [
                  w(g(i), 1)
                ], 64)) : typeof i == "object" && d.value in i ? (u(), c(p, { key: 1 }, [
                  w(g(i[d.value]), 1)
                ], 64)) : (u(), c(p, { key: 2 }, [
                  w(g(a.placeholder), 1)
                ], 64))
              ]),
              o("div", {
                class: "tag groupItem",
                onClick: (O) => $.splice(I, 1)
              }, Be, 8, Oe)
            ]))), 128)),
            _(o("input", {
              type: "search",
              ref_key: "inputRef",
              ref: b,
              "onUpdate:modelValue": t[0] || (t[0] = (i) => r.value = i),
              class: "tagInput",
              onInput: t[1] || (t[1] = (i) => s(i)),
              onKeyup: t[2] || (t[2] = H((i) => s(i), ["enter"])),
              placeholder: "Add new tag"
            }, null, 544), [
              [B, r.value]
            ])
          ])
        ]),
        o("div", ze, [
          (u(!0), c(p, null, V(h(k), (i, I) => (u(), c(p, {
            key: "option-" + i
          }, [
            typeof i == "string" ? (u(), c("div", {
              key: 0,
              onClick: (O) => {
                r.value = i + ",", s(O);
              },
              class: "tagItem"
            }, g(i), 9, Ae)) : typeof i == "object" && d.value in i ? (u(), c("div", {
              key: 1,
              onClick: (O) => {
                r.value = i[d.value] + ",", s(O);
              },
              class: "tagItem"
            }, g(i[d.value]), 9, Me)) : (u(), c("div", {
              key: 2,
              onClick: (O) => {
                r.value = i + ",", s(O);
              },
              class: "tagItem"
            }, [
              L(l.$slots, "default", { option: i }, void 0, !0)
            ], 8, Te))
          ], 64))), 128))
        ])
      ])
    ], 2));
  }
});
const nl = /* @__PURE__ */ M(Ue, [["__scopeId", "data-v-4f75424c"]]), We = { class: "pickerOverlay pickerWrap" }, Ee = { class: "pickerContent" }, He = { class: "pickerHeader" }, Re = ["onClick"], Fe = { class: "check" }, De = ["checked", "id"], Ke = ["for"], Pe = ["onClick"], qe = { class: "check" }, Ge = ["checked", "id"], Je = ["for"], Qe = ["onClick"], Xe = ["onClick"], Ye = ["onClick"], Ze = ["onClick"], el = { class: "pickerFooter" }, ll = { class: "display-flex justifyContent-spaceBetween" }, tl = /* @__PURE__ */ z({
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
  setup(a, { emit: C }) {
    const f = a, e = S(f.modelValue || {}), r = S(!1), b = S(""), $ = S("");
    T(() => f.modelValue, () => {
      e.value = f.modelValue;
    });
    const m = A(() => {
      let n = f.options;
      return b.value.length >= 1 && (n = n.filter((l) => {
        if (isNaN(l) === !1 && Number(l) === Number(b.value))
          return !0;
        if (typeof l == "string" && l.toLowerCase().includes(b.value.toLowerCase()))
          return !0;
        if (typeof l == "object" && l !== null && Object.prototype.toString.call(l) === "[object Object]")
          for (const t of Object.keys(l)) {
            if (isNaN(l[t]) === !1 && Number(l[t]) === Number(b.value))
              return !0;
            if (typeof l[t] == "string" && l[t].toLowerCase().includes(b.value.toLowerCase()))
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
      l !== "" ? e.value.map((t) => t[l]).includes(n[l]) ? e.value.splice(e.value.findIndex((t) => t[l] === n[l]), 1) : e.value.push(n) : e.value.includes(n) ? e.value.splice(e.value.findIndex((t) => t === n), 1) : e.value.push(n), C("update:modelValue", e.value), C("change", e.value, n);
    }, s = (n) => {
      typeof n == "object" && n !== null && String(f.datatype).toLowerCase() === "string" ? (e.value = n[String(f.dataprop || f.prop)], C("update:modelValue", String(e.value))) : (e.value = n, C("update:modelValue", e.value)), r.value = !1, C("change", e.value, n);
    };
    return (n, l) => (u(), c("div", {
      class: N(["picker suggestion", r.value ? "active" : ""])
    }, [
      (u(), U(W, { to: "body" }, [
        o("div", {
          class: "pickerBackdrop",
          style: j({ display: r.value ? "block" : "none" }),
          onClick: k
        }, null, 4)
      ])),
      o("div", We, [
        o("div", {
          class: "select pickerToggler",
          onClick: l[0] || (l[0] = (t) => r.value = !r.value)
        }, [
          typeof e.value == "string" && e.value !== "" && h(m).length >= 1 && typeof h(m)[0] == "string" ? (u(), c(p, { key: 0 }, [
            w(g(e.value), 1)
          ], 64)) : typeof e.value == "string" && h(m).filter((t) => String(t[String(a.dataprop || a.prop)]) === e.value).length >= 1 && typeof h(m).filter((t) => String(t[String(a.dataprop || a.prop)]) === e.value)[0] == "object" ? (u(), c(p, { key: 1 }, [
            w(g(h(m).filter((t) => String(t[String(a.dataprop || a.prop)]) === e.value)[0][a.prop]), 1)
          ], 64)) : typeof e.value == "object" && e.value !== null && a.prop in e.value ? (u(), c(p, { key: 2 }, [
            w(g(e.value[a.prop]), 1)
          ], 64)) : Array.isArray(e.value) && e.value.length >= 1 && typeof e.value[0] == "string" ? (u(), c(p, { key: 3 }, [
            w(g(e.value.join(", ")), 1)
          ], 64)) : Array.isArray(e.value) && e.value.length >= 1 && typeof e.value[0] == "object" && a.prop in e.value[0] ? (u(), c(p, { key: 4 }, [
            w(g(e.value.map((t) => t[a.prop]).join(", ")), 1)
          ], 64)) : (u(), c(p, { key: 5 }, [
            w(g(a.placeholder), 1)
          ], 64))
        ]),
        o("div", Ee, [
          o("div", He, [
            _(o("input", {
              type: "search",
              "onUpdate:modelValue": l[1] || (l[1] = (t) => b.value = t),
              class: "input"
            }, null, 512), [
              [B, b.value]
            ])
          ]),
          Array.isArray(e.value) ? (u(), c("div", {
            key: 0,
            class: "pickerMenu",
            style: j({ "max-height": Number(a.size) !== 0 ? Number(a.size) * 42 + "px" : "auto" })
          }, [
            (u(!0), c(p, null, V(h(m), (t, i) => (u(), c(p, {
              key: "option-" + t
            }, [
              typeof t == "string" ? (u(), c("div", {
                key: 0,
                onClick: x((I) => v(t), ["stop"]),
                class: "pickerItem"
              }, [
                o("div", Fe, [
                  o("input", {
                    type: "checkbox",
                    class: "checkInput",
                    checked: e.value.includes(t),
                    id: "check-" + (h(d) + String(i)),
                    style: { "pointer-events": "none" }
                  }, null, 8, De),
                  o("label", {
                    class: "checkLabel",
                    for: "check-" + (h(d) + String(i)),
                    style: { "pointer-events": "none" }
                  }, g(t), 9, Ke)
                ])
              ], 8, Re)) : typeof t == "object" && t !== null && a.prop in t ? (u(), c("div", {
                key: 1,
                onClick: x((I) => v(t, a.prop), ["stop"]),
                class: "pickerItem"
              }, [
                o("div", qe, [
                  o("input", {
                    type: "checkbox",
                    class: "checkInput",
                    checked: e.value.includes(t),
                    id: "check-" + (h(d) + String(i)),
                    style: { "pointer-events": "none" }
                  }, null, 8, Ge),
                  o("label", {
                    class: "checkLabel",
                    for: "check-" + (h(d) + String(i)),
                    style: { "pointer-events": "none" }
                  }, g(t[a.prop]), 9, Je)
                ])
              ], 8, Pe)) : (u(), c("div", {
                key: 2,
                onClick: x((I) => v(t), ["stop"]),
                class: "pickerItem"
              }, [
                L(n.$slots, "default", {
                  option: t,
                  selected: e.value
                }, void 0, !0)
              ], 8, Qe))
            ], 64))), 128))
          ], 4)) : (u(), c("div", {
            key: 1,
            class: "pickerMenu",
            style: j({ "max-height": Number(a.size) !== 0 ? Number(a.size) * 42 + "px" : "auto" })
          }, [
            (u(!0), c(p, null, V(h(m), (t, i) => (u(), c(p, {
              key: "option-" + t
            }, [
              typeof t == "string" ? (u(), c("div", {
                key: 0,
                onClick: (I) => s(t),
                class: N(["pickerItem", e.value === t ? "active" : ""])
              }, g(t), 11, Xe)) : typeof t == "object" && t !== null && a.prop in t ? (u(), c("div", {
                key: 1,
                onClick: (I) => s(t),
                class: N(["pickerItem", e.value[a.prop] === t[a.prop] || String(t[a.dataprop || a.prop]) === String(e.value) ? "active" : ""])
              }, g(t[a.prop]), 11, Ye)) : (u(), c("div", {
                key: 2,
                onClick: x((I) => s(t), ["stop"]),
                class: N(["pickerItem", e.value === t ? "active" : ""])
              }, [
                L(n.$slots, "default", {
                  option: t,
                  selected: e.value
                }, void 0, !0)
              ], 10, Ze))
            ], 64))), 128))
          ], 4)),
          o("div", el, [
            o("div", ll, [
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
                class: "button marginLeft-0.5rem primary-light color-white hover:opacity-0.7",
                onClick: l[3] || (l[3] = (t) => {
                  C("add", $.value), $.value = "";
                })
              }, "Save")
            ])
          ])
        ])
      ])
    ], 2));
  }
});
const rl = /* @__PURE__ */ M(tl, [["__scopeId", "data-v-7bfff503"]]);
export {
  rl as CategoryBox,
  ul as ComboBox,
  cl as ListBox,
  sl as SelectBox,
  nl as TagBox
};
