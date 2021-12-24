import { defineComponent, ref, onUpdated, openBlock, createElementBlock, normalizeClass, withModifiers, createElementVNode, Fragment, createTextVNode, toDisplayString, renderList, renderSlot, pushScopeId, popScopeId } from "vue";
var SelectBox_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _withScopeId = (n) => (pushScopeId("data-v-211fa5b0"), n = n(), popScopeId(), n);
const _hoisted_1 = { class: "selectPicker" };
const _hoisted_2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("div", { class: "selectWrap" }, [
  /* @__PURE__ */ createElementVNode("input", {
    type: "search",
    class: "selectSearch"
  })
], -1));
const _hoisted_3 = {
  key: 0,
  class: "selectList"
};
const _hoisted_4 = ["onClick"];
const _hoisted_5 = ["onClick"];
const _hoisted_6 = ["onClick"];
const _hoisted_7 = {
  key: 1,
  class: "selectList"
};
const _hoisted_8 = ["onClick"];
const _hoisted_9 = ["onClick"];
const _hoisted_10 = ["onClick"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    modelValue: { default: null },
    options: { default: [] },
    prop: { default: "value" },
    placeholder: { default: "-- Select option --" }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const picker = ref(false);
    onUpdated(() => {
      document.addEventListener("click", () => {
        picker.value = false;
      });
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["select", { show: picker.value === true }]),
        onClick: _cache[1] || (_cache[1] = withModifiers(() => {
        }, ["stop"]))
      }, [
        createElementVNode("div", {
          class: "selectBox",
          onClick: _cache[0] || (_cache[0] = ($event) => picker.value = !picker.value)
        }, [
          typeof __props.modelValue === "string" && __props.modelValue !== "" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createTextVNode(toDisplayString(__props.modelValue), 1)
          ], 64)) : typeof __props.modelValue === "object" && __props.prop in __props.modelValue ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
            createTextVNode(toDisplayString(__props.modelValue[__props.prop]), 1)
          ], 64)) : Array.isArray(__props.modelValue) && __props.modelValue.length >= 1 && typeof __props.modelValue[0] === "string" ? (openBlock(), createElementBlock(Fragment, { key: 2 }, [
            createTextVNode(toDisplayString(__props.modelValue.join(", ")), 1)
          ], 64)) : Array.isArray(__props.modelValue) && __props.modelValue.length >= 1 && typeof __props.modelValue[0] === "object" && __props.prop in __props.modelValue[0] ? (openBlock(), createElementBlock(Fragment, { key: 3 }, [
            createTextVNode(toDisplayString(__props.modelValue.map((i) => i[__props.prop]).join(", ")), 1)
          ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 4 }, [
            createTextVNode(toDisplayString(__props.placeholder), 1)
          ], 64))
        ]),
        createElementVNode("div", _hoisted_1, [
          _hoisted_2,
          Array.isArray(__props.modelValue) ? (openBlock(), createElementBlock("div", _hoisted_3, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.options, (option, index) => {
              return openBlock(), createElementBlock(Fragment, {
                key: "option-" + option
              }, [
                typeof option === "string" ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  onClick: ($event) => {
                    if (!__props.modelValue.includes(option)) {
                      __props.modelValue.push(option);
                    }
                    emit("update:modelValue", __props.modelValue);
                  },
                  class: "selectItem"
                }, toDisplayString(option), 9, _hoisted_4)) : typeof option === "object" && __props.prop in option ? (openBlock(), createElementBlock("div", {
                  key: 1,
                  onClick: ($event) => {
                    if (!__props.modelValue.includes(option)) {
                      __props.modelValue.push(option);
                    }
                    emit("update:modelValue", __props.modelValue);
                  },
                  class: "selectItem"
                }, toDisplayString(option[__props.prop]), 9, _hoisted_5)) : (openBlock(), createElementBlock("div", {
                  key: 2,
                  onClick: ($event) => {
                    if (!__props.modelValue.includes(option)) {
                      __props.modelValue.push(option);
                    }
                    emit("update:modelValue", __props.modelValue);
                  },
                  class: "selectItem"
                }, [
                  renderSlot(_ctx.$slots, "default", { option }, void 0, true)
                ], 8, _hoisted_6))
              ], 64);
            }), 128))
          ])) : (openBlock(), createElementBlock("div", _hoisted_7, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(__props.options, (option, index) => {
              return openBlock(), createElementBlock(Fragment, {
                key: "option-" + option
              }, [
                typeof option === "string" ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  onClick: ($event) => {
                    emit("update:modelValue", option);
                    picker.value = false;
                  },
                  class: "selectItem"
                }, toDisplayString(option), 9, _hoisted_8)) : typeof option === "object" && __props.prop in option ? (openBlock(), createElementBlock("div", {
                  key: 1,
                  onClick: ($event) => {
                    emit("update:modelValue", option);
                    picker.value = false;
                  },
                  class: "selectItem"
                }, toDisplayString(option[__props.prop]), 9, _hoisted_9)) : (openBlock(), createElementBlock("div", {
                  key: 2,
                  onClick: ($event) => {
                    emit("update:modelValue", option);
                    picker.value = false;
                  },
                  class: "selectItem"
                }, [
                  renderSlot(_ctx.$slots, "default", { option }, void 0, true)
                ], 8, _hoisted_10))
              ], 64);
            }), 128))
          ]))
        ])
      ], 2);
    };
  }
});
var SelectBox = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-211fa5b0"]]);
export { SelectBox };
