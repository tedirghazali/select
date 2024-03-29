import { defineCustomElement } from 'vue'
import VueSelectBox from '../vue/components/SelectBox.vue'
import VueComboBox from '../vue/components/ComboBox.vue'
import VueListBox from '../vue/components/ListBox.vue'
import VueTagBox from '../vue/components/TagBox.vue'
import VueCategoryBox from '../vue/components/CategoryBox.vue'

export const SelectBox = defineCustomElement(VueSelectBox)
export const ComboBox = defineCustomElement(VueComboBox)
export const ListBox = defineCustomElement(VueListBox)
export const TagBox = defineCustomElement(VueTagBox)
export const CategoryBox = defineCustomElement(VueCategoryBox)

export function useTedirSelect() {
  customElements.define('select-box', SelectBox)
  customElements.define('combo-box', ComboBox)
  customElements.define('list-box', ListBox)
  customElements.define('tag-box', TagBox)
  customElements.define('category-box', CategoryBox)
}
