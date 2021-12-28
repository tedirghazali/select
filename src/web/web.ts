import { defineCustomElement } from 'vue'
import VueSelectBox from '../vue/components/SelectBox.vue'
import VueComboBox from '../vue/components/ComboBox.vue'

export const SelectBox = defineCustomElement(VueSelectBox)
export const ComboBox = defineCustomElement(VueComboBox)

export function useTedirSelect() {
  customElements.define('select-box', SelectBox)
  customElements.define('combo-box', ComboBox)
}
