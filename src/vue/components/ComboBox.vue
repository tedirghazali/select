<script setup lang="ts">
import { ref, computed, onUpdated } from 'vue'

interface Props {
  modelValue?: any,
  //@ts-ignore
  options?: any[],
  prop?: string,
  placeholder?: string,
  size?: number
}

interface Emits {
  (e: 'update:modelValue', value: any[] | any): void
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
  //@ts-ignore
  options: [],
  prop: 'value',
  placeholder: '-- combo option --',
  size: 0
})

const emit = defineEmits<Emits>()

const picker = ref<boolean>(false)
const searchStr = ref<string>('')

const filteredOptions = computed<any[]>(() => {
  //@ts-ignore
  let newOptions: any[] = props.options
  if(searchStr.value.length >= 1) {
    newOptions = newOptions.filter((item: any) => {
      if(isNaN(item) === false && Number(item) === Number(searchStr.value)) {
        return true
      } else if(typeof item === 'string' && item.toLowerCase().includes(searchStr.value.toLowerCase())) {
        return true
      } else if(typeof item === 'object' && item !== null && Object.prototype.toString.call(item) === "[object Object]") {
        for(const key of Object.keys(item)) {
          if(isNaN(item[key]) === false && Number(item[key]) === Number(searchStr.value)) {
            return true
          } else if(typeof item[key] === 'string' && item[key].toLowerCase().includes(searchStr.value.toLowerCase())) {
            return true
          }
        }
      }
      return false
    })
  }
  return newOptions
})

onUpdated(() => {
  document.addEventListener('click', () => {
    picker.value = false
  })
})
</script>

<template>
  <div class="combo" :class="{show: picker === true}" @click.stop="">
    <input type="search" v-model="searchStr" @input="(filteredOptions.length >= 1 && searchStr !== '') ? picker = true : picker = false" @click="(filteredOptions.length >= 1 && searchStr !== '') ? picker = true : picker = false" class="comboBox" />
    <div class="comboPicker">
      <div class="comboList" :style="{'max-height': (Number(size) !== 0) ? (Number(size) * 44)+'px' : 'auto'}">
        <template v-for="(option, index) in filteredOptions" :key="'option-'+option">
          <div v-if="typeof option === 'string'" @click="searchStr = option; emit('update:modelValue', option); picker = false;" class="comboItem">{{ option }}</div>
          <div v-else-if="typeof option === 'object' && prop in option" @click="searchStr = option[prop]; emit('update:modelValue', option); picker = false;" class="comboItem">{{ option[prop] }}</div>
          <div v-else @click="searchStr = option; emit('update:modelValue', option); picker = false;" class="comboItem">
            <slot :option="option"></slot>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.combo {
  position: relative;
}

.comboBox {
  position: relative;
  display: block;
  border: 0.0625rem solid rgba(0, 0, 0, 0.15);
  padding: 0.3125rem 1.25rem;
  border-radius: 1rem;
  width: 100%;
  min-height: 44px;
  line-height: 2rem;
  box-sizing: border-box;
  font-family: inherit;
  outline: none;
  user-select: none;
  appearance: none;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 0.875rem;
  font-weight: 400;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.comboBox:hover {
  box-shadow: none;
  background: #fff;
  color: #6e6e6e;
}
.show .comboBox {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.comboPicker {
  position: absolute;
  display: none;
  z-index: 1001;
  background-color: #fff;
  border: 0.0625rem solid rgba(0, 0, 0, 0.15);
  border-top-width: 0;
  border-bottom-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
  width: 100%;
  line-height: 2rem;
  box-sizing: border-box;
  font-family: inherit;
  outline: none;
  user-combo: none;
  appearance: none;
  white-space: nowrap;
  font-size: 0.875rem;
  font-weight: 400;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.show .comboPicker {
  display: block;
}

.comboList {
  margin-bottom: 1.25rem;
  overflow-x: hidden;
  overflow-y: auto;
}
.comboItem {
  padding: 0.3125rem 1.25rem;
  border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.15);
  cursor: pointer;
}
.comboItem:hover {
  background: rgba(0, 0, 0, 0.05);
}
.comboItem:active {
  background: rgba(0, 0, 0, 0.15);
}
</style>
