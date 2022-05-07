import { defineComponent, ref, computed, openBlock, createElementBlock, normalizeClass, createBlock, Teleport, createElementVNode, normalizeStyle, Fragment, createTextVNode, toDisplayString, withDirectives, vModelText, renderList, unref, renderSlot, withModifiers } from "vue";
var SelectBox_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _hoisted_1$2 = { class: "pickerContent" };
const _hoisted_2$2 = { class: "pickerMenu" };
const _hoisted_3$2 = { class: "pickerWrap" };
const _hoisted_4$2 = ["onClick"];
const _hoisted_5$2 = { class: "check" };
const _hoisted_6$1 = ["checked", "id", "onChange"];
const _hoisted_7$1 = ["for"];
const _hoisted_8$1 = ["onClick"];
const _hoisted_9$1 = { class: "check" };
const _hoisted_10$1 = ["checked", "id", "onChange"];
const _hoisted_11$1 = ["for"];
const _hoisted_12$1 = ["onClick"];
const _hoisted_13$1 = ["onClick"];
const _hoisted_14$1 = ["onClick"];
const _hoisted_15 = ["onClick"];
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
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
        class: normalizeClass(["picker suggestion", picker.value ? "active" : ""])
      }, [
        (openBlock(), createBlock(Teleport, { to: "body" }, [
          createElementVNode("div", {
            class: "pickerBackdrop",
            style: normalizeStyle({ display: picker.value ? "block" : "none" }),
            onClick: _cache[0] || (_cache[0] = ($event) => picker.value = false)
          }, null, 4)
        ])),
        createElementVNode("div", _hoisted_1$2, [
          createElementVNode("div", {
            class: "select pickerToggler",
            onClick: _cache[1] || (_cache[1] = ($event) => picker.value = true)
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
          createElementVNode("div", _hoisted_2$2, [
            createElementVNode("div", _hoisted_3$2, [
              withDirectives(createElementVNode("input", {
                type: "search",
                "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => searchStr.value = $event),
                class: "input"
              }, null, 512), [
                [vModelText, searchStr.value]
              ])
            ]),
            Array.isArray(__props.modelValue) ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList(unref(filteredOptions), (option, index) => {
              return openBlock(), createElementBlock(Fragment, {
                key: "option-" + option
              }, [
                typeof option === "string" ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  onClick: ($event) => {
                    !__props.modelValue.includes(option) ? __props.modelValue.push(option) : __props.modelValue.splice(__props.modelValue.findIndex((i) => i === option), 1);
                    emit("update:modelValue", __props.modelValue);
                  },
                  class: "pickerItem"
                }, [
                  createElementVNode("div", _hoisted_5$2, [
                    createElementVNode("input", {
                      type: "checkbox",
                      class: "checkInput",
                      checked: __props.modelValue.includes(option),
                      id: "check-" + (unref(getRandomChar) + String(index)),
                      onChange: ($event) => {
                        !__props.modelValue.includes(option) ? __props.modelValue.push(option) : __props.modelValue.splice(__props.modelValue.findIndex((j) => j === option), 1);
                        emit("update:modelValue", __props.modelValue);
                      }
                    }, null, 40, _hoisted_6$1),
                    createElementVNode("label", {
                      class: "checkLabel",
                      for: "check-" + (unref(getRandomChar) + String(index))
                    }, toDisplayString(option), 9, _hoisted_7$1)
                  ])
                ], 8, _hoisted_4$2)) : typeof option === "object" && __props.prop in option ? (openBlock(), createElementBlock("div", {
                  key: 1,
                  onClick: ($event) => {
                    !__props.modelValue.includes(option) ? __props.modelValue.push(option) : __props.modelValue.splice(__props.modelValue.findIndex((i) => i[__props.prop] === option[__props.prop]), 1);
                    emit("update:modelValue", __props.modelValue);
                  },
                  class: "pickerItem"
                }, [
                  createElementVNode("div", _hoisted_9$1, [
                    createElementVNode("input", {
                      type: "checkbox",
                      class: "checkInput",
                      checked: __props.modelValue.includes(option),
                      id: "check-" + (unref(getRandomChar) + String(index)),
                      onChange: ($event) => {
                        !__props.modelValue.includes(option) ? __props.modelValue.push(option) : __props.modelValue.splice(__props.modelValue.findIndex((j) => j[__props.prop] === option[__props.prop]), 1);
                        emit("update:modelValue", __props.modelValue);
                      }
                    }, null, 40, _hoisted_10$1),
                    createElementVNode("label", {
                      class: "checkLabel",
                      for: "check-" + (unref(getRandomChar) + String(index))
                    }, toDisplayString(option[__props.prop]), 9, _hoisted_11$1)
                  ])
                ], 8, _hoisted_8$1)) : (openBlock(), createElementBlock("div", {
                  key: 2,
                  onClick: ($event) => {
                    !__props.modelValue.includes(option) ? __props.modelValue.push(option) : __props.modelValue.splice(__props.modelValue.findIndex((i) => i === option), 1);
                    emit("update:modelValue", __props.modelValue);
                  },
                  class: "pickerItem"
                }, [
                  renderSlot(_ctx.$slots, "default", {
                    option,
                    items: __props.modelValue
                  }, void 0, true)
                ], 8, _hoisted_12$1))
              ], 64);
            }), 128)) : (openBlock(true), createElementBlock(Fragment, { key: 1 }, renderList(unref(filteredOptions), (option, index) => {
              return openBlock(), createElementBlock(Fragment, {
                key: "option-" + option
              }, [
                typeof option === "string" ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  onClick: ($event) => {
                    emit("update:modelValue", option);
                    picker.value = false;
                  },
                  class: "pickerItem"
                }, toDisplayString(option), 9, _hoisted_13$1)) : typeof option === "object" && __props.prop in option ? (openBlock(), createElementBlock("div", {
                  key: 1,
                  onClick: ($event) => {
                    emit("update:modelValue", option);
                    picker.value = false;
                  },
                  class: "pickerItem"
                }, toDisplayString(option[__props.prop]), 9, _hoisted_14$1)) : (openBlock(), createElementBlock("div", {
                  key: 2,
                  onClick: ($event) => {
                    emit("update:modelValue", option);
                    picker.value = false;
                  },
                  class: "selectItem"
                }, [
                  renderSlot(_ctx.$slots, "default", { option }, void 0, true)
                ], 8, _hoisted_15))
              ], 64);
            }), 128))
          ])
        ])
      ], 2);
    };
  }
});
var SelectBox = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-33121258"]]);
var ComboBox_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1$1 = { class: "pickerContent" };
const _hoisted_2$1 = { class: "pickerMenu" };
const _hoisted_3$1 = ["onClick"];
const _hoisted_4$1 = ["onClick"];
const _hoisted_5$1 = ["onClick"];
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  props: {
    modelValue: { default: null },
    options: { default: [] },
    prop: { default: "value" },
    placeholder: { default: "-- combo option --" },
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
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", {
        class: normalizeClass(["picker suggestion", picker.value ? "active" : ""])
      }, [
        (openBlock(), createBlock(Teleport, { to: "body" }, [
          createElementVNode("div", {
            class: "pickerBackdrop",
            style: normalizeStyle({ display: picker.value ? "block" : "none" }),
            onClick: _cache[0] || (_cache[0] = ($event) => picker.value = false)
          }, null, 4)
        ])),
        createElementVNode("div", _hoisted_1$1, [
          withDirectives(createElementVNode("input", {
            type: "search",
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => searchStr.value = $event),
            onInput: _cache[2] || (_cache[2] = ($event) => unref(filteredOptions).length >= 1 && searchStr.value !== "" ? picker.value = true : picker.value = false),
            onClick: _cache[3] || (_cache[3] = ($event) => unref(filteredOptions).length >= 1 && searchStr.value !== "" ? picker.value = true : picker.value = false),
            class: "input"
          }, null, 544), [
            [vModelText, searchStr.value]
          ]),
          createElementVNode("div", _hoisted_2$1, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredOptions), (option, index) => {
              return openBlock(), createElementBlock(Fragment, {
                key: "option-" + option
              }, [
                typeof option === "string" ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  onClick: ($event) => {
                    searchStr.value = option;
                    emit("update:modelValue", option);
                    picker.value = false;
                  },
                  class: "pickerItem"
                }, toDisplayString(option), 9, _hoisted_3$1)) : typeof option === "object" && __props.prop in option ? (openBlock(), createElementBlock("div", {
                  key: 1,
                  onClick: ($event) => {
                    searchStr.value = option[__props.prop];
                    emit("update:modelValue", option);
                    picker.value = false;
                  },
                  class: "pickerItem"
                }, toDisplayString(option[__props.prop]), 9, _hoisted_4$1)) : (openBlock(), createElementBlock("div", {
                  key: 2,
                  onClick: ($event) => {
                    searchStr.value = option;
                    emit("update:modelValue", option);
                    picker.value = false;
                  },
                  class: "comboItem"
                }, [
                  renderSlot(_ctx.$slots, "default", { option }, void 0, true)
                ], 8, _hoisted_5$1))
              ], 64);
            }), 128))
          ])
        ])
      ], 2);
    };
  }
});
var ComboBox = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7ea5c7cc"]]);
var ListBox_vue_vue_type_style_index_0_scoped_true_lang = "";
const _hoisted_1 = { class: "list" };
const _hoisted_2 = { class: "listWrap" };
const _hoisted_3 = ["onClick"];
const _hoisted_4 = { class: "check" };
const _hoisted_5 = ["checked", "id", "onChange"];
const _hoisted_6 = ["for"];
const _hoisted_7 = ["onClick"];
const _hoisted_8 = { class: "check" };
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
    size: { default: 0 }
  },
  emits: ["update:modelValue"],
  setup(__props, { emit }) {
    const props = __props;
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
      return openBlock(), createElementBlock("div", null, [
        createElementVNode("div", _hoisted_1, [
          createElementVNode("div", _hoisted_2, [
            withDirectives(createElementVNode("input", {
              type: "search",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => searchStr.value = $event),
              class: "input"
            }, null, 512), [
              [vModelText, searchStr.value]
            ])
          ]),
          Array.isArray(__props.modelValue) ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "listGroup",
            style: normalizeStyle({ "max-height": Number(__props.size) !== 0 ? Number(__props.size) * 44 + "px" : "auto" })
          }, [
            (openBlock(true), createElementBlock(Fragment, null, renderList(unref(filteredOptions), (option, index) => {
              return openBlock(), createElementBlock(Fragment, {
                key: "option-" + option
              }, [
                typeof option === "string" ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  onClick: withModifiers(($event) => {
                    !__props.modelValue.includes(option) ? __props.modelValue.push(option) : __props.modelValue.splice(__props.modelValue.findIndex((i) => i === option), 1);
                    emit("update:modelValue", __props.modelValue);
                  }, ["stop"]),
                  class: "listItem"
                }, [
                  createElementVNode("div", _hoisted_4, [
                    createElementVNode("input", {
                      type: "checkbox",
                      class: "checkInput",
                      checked: __props.modelValue.includes(option),
                      id: "check-" + (unref(getRandomChar) + String(index)),
                      onChange: ($event) => {
                        !__props.modelValue.includes(option) ? __props.modelValue.push(option) : __props.modelValue.splice(__props.modelValue.findIndex((j) => j === option), 1);
                        emit("update:modelValue", __props.modelValue);
                      }
                    }, null, 40, _hoisted_5),
                    createElementVNode("label", {
                      class: "checkLabel",
                      for: "check-" + (unref(getRandomChar) + String(index))
                    }, toDisplayString(option), 9, _hoisted_6)
                  ])
                ], 8, _hoisted_3)) : typeof option === "object" && __props.prop in option ? (openBlock(), createElementBlock("div", {
                  key: 1,
                  onClick: withModifiers(($event) => {
                    !__props.modelValue.includes(option) ? __props.modelValue.push(option) : __props.modelValue.splice(__props.modelValue.findIndex((i) => i[__props.prop] === option[__props.prop]), 1);
                    emit("update:modelValue", __props.modelValue);
                  }, ["stop"]),
                  class: "listItem"
                }, [
                  createElementVNode("div", _hoisted_8, [
                    createElementVNode("input", {
                      type: "checkbox",
                      class: "checkInput",
                      checked: __props.modelValue.includes(option),
                      id: "check-" + (unref(getRandomChar) + String(index)),
                      onChange: ($event) => {
                        !__props.modelValue.includes(option) ? __props.modelValue.push(option) : __props.modelValue.splice(__props.modelValue.findIndex((j) => j[__props.prop] === option[__props.prop]), 1);
                        emit("update:modelValue", __props.modelValue);
                      }
                    }, null, 40, _hoisted_9),
                    createElementVNode("label", {
                      class: "checkLabel",
                      for: "check-" + (unref(getRandomChar) + String(index))
                    }, toDisplayString(option[__props.prop]), 9, _hoisted_10)
                  ])
                ], 8, _hoisted_7)) : (openBlock(), createElementBlock("div", {
                  key: 2,
                  onClick: ($event) => {
                    !__props.modelValue.includes(option) ? __props.modelValue.push(option) : __props.modelValue.splice(__props.modelValue.findIndex((i) => i === option), 1);
                    emit("update:modelValue", __props.modelValue);
                  },
                  class: normalizeClass(["listItem", __props.modelValue.includes(option) ? "active" : ""])
                }, [
                  renderSlot(_ctx.$slots, "default", {
                    option,
                    items: __props.modelValue
                  }, void 0, true)
                ], 10, _hoisted_11))
              ], 64);
            }), 128))
          ], 4)) : (openBlock(), createElementBlock("div", {
            key: 1,
            class: "listGroup",
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
                  },
                  class: normalizeClass(["listItem", __props.modelValue === option ? "active" : ""])
                }, toDisplayString(option), 11, _hoisted_12)) : typeof option === "object" && __props.prop in option ? (openBlock(), createElementBlock("div", {
                  key: 1,
                  onClick: ($event) => {
                    emit("update:modelValue", option);
                  },
                  class: normalizeClass(["listItem", __props.modelValue[__props.prop] === option[__props.prop] ? "active" : ""])
                }, toDisplayString(option[__props.prop]), 11, _hoisted_13)) : (openBlock(), createElementBlock("div", {
                  key: 2,
                  onClick: ($event) => {
                    emit("update:modelValue", option);
                  },
                  class: normalizeClass(["listItem", __props.modelValue === option ? "active" : ""])
                }, [
                  renderSlot(_ctx.$slots, "default", { option }, void 0, true)
                ], 10, _hoisted_14))
              ], 64);
            }), 128))
          ], 4))
        ])
      ]);
    };
  }
});
var ListBox = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-273c1180"]]);
export { ComboBox, ListBox, SelectBox };
