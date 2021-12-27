import { defineComponent, ref, computed, onUpdated, openBlock, createElementBlock, normalizeClass, withModifiers, createElementVNode, Fragment, createTextVNode, toDisplayString, withDirectives, vModelText, normalizeStyle, renderList, unref, renderSlot } from "vue";
var SelectBox_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1 = { class: "selectPicker" };
const _hoisted_2 = { class: "selectWrap" };
const _hoisted_3 = ["onClick"];
const _hoisted_4 = { class: "selectCheck" };
const _hoisted_5 = ["checked", "id", "onChange"];
const _hoisted_6 = ["for"];
const _hoisted_7 = ["onClick"];
const _hoisted_8 = { class: "selectCheck" };
const _hoisted_9 = ["checked", "id", "onChange"];
const _hoisted_10 = ["for"];
const _hoisted_11 = ["onClick"];
const _hoisted_12 = ["onClick"];
const _hoisted_13 = ["onClick"];
const _hoisted_14 = ["onClick"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  props: {
    modelValue: { default: null },
    options: { default: [] },
    prop: { default: "value" },
    placeholder: { default: "-- Select option --" },
    size: { default: 0 }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
    const picker = ref(false);
    const searchStr = ref("");
    const filteredOptions = computed(() => {
      let newOptions = props.options;
      if (searchStr.value.length >= 1) {
        newOptions = newOptions.filter((item) => {
          if (isNaN(item) === false && Number(item) === Number(searchStr.value)) {
            return true;
          } else if (typeof item === "string" && item.toLowerCase().includes(searchStr.value.toLowerCase())) {
            return true;
          } else if (typeof item === "object" && item !== null && Object.prototype.toString.call(item) === "[object Object]") {
            for (const key of Object.keys(item)) {
              if (isNaN(item[key]) === false && Number(item[key]) === Number(searchStr.value)) {
                return true;
              } else if (typeof item[key] === "string" && item[key].toLowerCase().includes(searchStr.value.toLowerCase())) {
                return true;
              }
            }
          }
          return false;
        });
      }
      return newOptions;
    });
    onUpdated(() => {
      document.addEventListener("click", () => {
        picker.value = false;
      });
    });
    const randomChar = () => {
      let allChar = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let resChar = "";
      for (let i = 0; i < 10; i++) {
        resChar += allChar.charAt(Math.floor(Math.random() * allChar.length));
      }
      return resChar;
    };
    const getRandomChar = randomChar();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["select", { show: picker.value === true }]),
        onClick: _cache[2] || (_cache[2] = withModifiers(() => {
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
          createElementVNode("div", _hoisted_2, [
            withDirectives(createElementVNode("input", {
              type: "search",
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => searchStr.value = $event),
              class: "selectSearch"
            }, null, 512), [
              [vModelText, searchStr.value]
            ])
          ]),
          Array.isArray(__props.modelValue) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "selectList",
            style: normalizeStyle({ "max-height": Number(__props.size) !== 0 ? Number(__props.size) * 44 + "px" : "auto" })
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredOptions), (option, index) => {
              return openBlock(), createElementBlock(Fragment, {
                key: "option-" + option
              }, [
                typeof option === "string" ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  onClick: ($event) => {
                    !__props.modelValue.includes(option) ? __props.modelValue.push(option) : __props.modelValue.splice(__props.modelValue.findIndex((i) => i === option), 1);
                    emit("update:modelValue", __props.modelValue);
                  },
                  class: "selectItem"
                }, [
                  createElementVNode("div", _hoisted_4, [
                    createElementVNode("input", {
                      type: "checkbox",
                      class: "selectCheckInput",
                      checked: __props.modelValue.includes(option),
                      id: "check-" + (unref(getRandomChar) + String(index)),
                      onChange: ($event) => {
                        !__props.modelValue.includes(option) ? __props.modelValue.push(option) : __props.modelValue.splice(__props.modelValue.findIndex((j) => j === option), 1);
                        emit("update:modelValue", __props.modelValue);
                      }
                    }, null, 40, _hoisted_5),
                    createElementVNode("label", {
                      class: "selectCheckLabel",
                      for: "check-" + (unref(getRandomChar) + String(index))
                    }, toDisplayString(option), 9, _hoisted_6)
                  ])
                ], 8, _hoisted_3)) : typeof option === "object" && __props.prop in option ? (openBlock(), createElementBlock("div", {
                  key: 1,
                  onClick: ($event) => {
                    !__props.modelValue.includes(option) ? __props.modelValue.push(option) : __props.modelValue.splice(__props.modelValue.findIndex((i) => i[__props.prop] === option[__props.prop]), 1);
                    emit("update:modelValue", __props.modelValue);
                  },
                  class: "selectItem"
                }, [
                  createElementVNode("div", _hoisted_8, [
                    createElementVNode("input", {
                      type: "checkbox",
                      class: "selectCheckInput",
                      checked: __props.modelValue.includes(option),
                      id: "check-" + (unref(getRandomChar) + String(index)),
                      onChange: ($event) => {
                        !__props.modelValue.includes(option) ? __props.modelValue.push(option) : __props.modelValue.splice(__props.modelValue.findIndex((j) => j[__props.prop] === option[__props.prop]), 1);
                        emit("update:modelValue", __props.modelValue);
                      }
                    }, null, 40, _hoisted_9),
                    createElementVNode("label", {
                      class: "selectCheckLabel",
                      for: "check-" + (unref(getRandomChar) + String(index))
                    }, toDisplayString(option[__props.prop]), 9, _hoisted_10)
                  ])
                ], 8, _hoisted_7)) : (openBlock(), createElementBlock("div", {
                  key: 2,
                  onClick: ($event) => {
                    !__props.modelValue.includes(option) ? __props.modelValue.push(option) : __props.modelValue.splice(__props.modelValue.findIndex((i) => i === option), 1);
                    emit("update:modelValue", __props.modelValue);
                  },
                  class: "selectItem"
                }, [
                  renderSlot(_ctx.$slots, "default", {
                    option,
                    items: __props.modelValue
                  }, void 0, true)
                ], 8, _hoisted_11))
              ], 64);
            }), 128))
          ], 4)) : (openBlock(), createElementBlock("div", {
            key: 1,
            class: "selectList",
            style: normalizeStyle({ "max-height": Number(__props.size) !== 0 ? Number(__props.size) * 44 + "px" : "auto" })
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredOptions), (option, index) => {
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
                }, toDisplayString(option), 9, _hoisted_12)) : typeof option === "object" && __props.prop in option ? (openBlock(), createElementBlock("div", {
                  key: 1,
                  onClick: ($event) => {
                    emit("update:modelValue", option);
                    picker.value = false;
                  },
                  class: "selectItem"
                }, toDisplayString(option[__props.prop]), 9, _hoisted_13)) : (openBlock(), createElementBlock("div", {
                  key: 2,
                  onClick: ($event) => {
                    emit("update:modelValue", option);
                    picker.value = false;
                  },
                  class: "selectItem"
                }, [
                  renderSlot(_ctx.$slots, "default", { option }, void 0, true)
                ], 8, _hoisted_14))
              ], 64);
            }), 128))
          ], 4))
        ])
      ], 2);
    };
  }
});
var SelectBox = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-37fb9193"]]);
export { SelectBox };