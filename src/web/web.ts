import { defineCustomElement } from 'vue'
import VueSelectBox from '../vue/components/SelectBox.vue'

export const SelectBox = defineCustomElement(VueSelectBox)

export function useTedirSelect() {
  customElements.define('select-box', SelectBox)
}
