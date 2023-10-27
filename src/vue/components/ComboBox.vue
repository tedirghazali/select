<script setup lang="ts">
import { ref, computed, watch } from 'vue'

interface Props {
  modelValue?: any,
  //@ts-ignore
  options?: any[],
  prop?: string,
  placeholder?: string,
  size?: number,
  select?: boolean,
  up?: boolean,
  serverSearch?: boolean,
  emptySearch?: boolean
}

interface Emits {
  (e: 'update:modelValue', value: any[] | any): void,
  (e: 'change', value: any[] | any, option: any): void,
  (e: 'search', value: string): void
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
  //@ts-ignore
  options: [],
  prop: 'value',
  placeholder: 'Search option',
  size: 0,
  select: false,
  up: false,
  serverSearch: false,
  emptySearch: false
})

const emit = defineEmits<Emits>()

const picker = ref<boolean>(false)
const searchStr = ref<string>('')
const searchRef = ref<any>(null)
const searchTimer = ref<any>(undefined)

const filteredOptions = computed<any[]>(() => {
  //@ts-ignore
  let newOptions: any[] = props.options
  if(searchStr.value.length >= 1 && props.serverSearch !== true) {
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

const searchOptions = () => {
  clearTimeout(searchTimer.value)
  searchTimer.value = setTimeout(() => {
    searchStr.value = ''
    if(searchRef.value?.value && searchRef.value?.value !== '') {
      searchStr.value = searchRef.value.value
    }
    emit('search', searchStr.value)
    if ((filteredOptions.value.length >= 1 && searchStr.value !== '') || props.serverSearch == true) { 
      picker.value = true
    } else {
      picker.value = false
    }
  }, 500)
}

const chooseOption = (val: any[] | any, opt: any) => {
  if(typeof val === 'string' || isNaN(val) === false) {
    searchStr.value = val
    searchRef.value.value = val
  }
  if(props.emptySearch == true) {
    searchStr.value = '' 
    searchRef.value.value = ''
    emit('search', searchStr.value)
  }
  emit('update:modelValue', opt); 
  emit('change', val, opt); 
  picker.value = false;
}

const hideByClick = (e: any) => {
  e.target.style.display = 'none' 
  picker.value = false
}
</script>

<template>
  <div class="picker suggestion" :class="{active: picker, pickerUp: up}">
    <!--<teleport to="body">-->
      <div class="pickerBackdrop" :style="{display: picker ? 'block' : 'none'}" @click="hideByClick"></div>
    <!--</teleport>-->
    <div class="pickerWrap">
      <input v-if="select" type="search" ref="searchRef" @input="searchOptions" @click="picker = true" class="select" />
      <input v-else type="search" ref="searchRef" @input="searchOptions" @click="(filteredOptions.length >= 1 && searchStr !== '') ? picker = true : picker = false" class="input" />
      <div class="pickerContent pickerSizing">
        <template v-for="(option, index) in filteredOptions" :key="'option-'+option">
          <div v-if="typeof option === 'string'" @click="chooseOption(option, option)" class="pickerItem" :class="(modelValue === option) ? 'active' : ''">{{ option }}</div>
          <div v-else-if="typeof option === 'object' && prop in option" @click="chooseOption(option[prop], option)" class="pickerItem" :class="(modelValue[prop] === option[prop]) ? 'active' : ''">{{ option[prop] }}</div>
          <div v-else @click="chooseOption(option, option)" class="pickerItem" :class="(modelValue === option) ? 'active' : ''">
            <slot :option="option"></slot>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
@use picker;
@use form {
  field: input;
}
</style>
