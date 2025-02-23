<script setup lang="ts">
import { ref, computed, watch } from 'vue'

interface Props {
  modelValue?: any,
  //@ts-ignore
  options?: any[],
  prop?: string,
  datatype?: string,
  dataprop?: string,
  placeholder?: string,
  size?: number,
  select?: boolean,
  up?: boolean,
  serverSearch?: boolean,
  emptySearch?: boolean,
  loading?: boolean
}

interface Emits {
  (e: 'update:modelValue', value: any[] | any): void,
  (e: 'change', value: any[] | any, option: any): void,
  (e: 'search', value: string): void,
  (e: 'load'): void
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: {},
  //@ts-ignore
  options: [],
  prop: 'value',
  datatype: '',
  dataprop: '',
  placeholder: '-- Search Option --',
  size: 0,
  select: false,
  up: false,
  serverSearch: false,
  emptySearch: false,
  loading: false
})

const emit = defineEmits<Emits>()

const selected = ref<any>(props.modelValue || {})
const picker = ref<boolean>(false)
const searchStr = ref<string>(props?.options?.filter((i: any) => (i?.[String(props?.prop)] || i) === props.modelValue)?.[0] || '')
const searchRef = ref<any>(null)
const searchTimer = ref<any>(undefined)
const mouseIn = ref(false)

watch(() => props.modelValue, () => {
  selected.value = props.modelValue
  searchStr.value = props?.options?.filter((i: any) => (i?.[String(props?.prop)] || i) === props.modelValue)?.[0] || ''
  mouseIn.value = false
})

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
    if ((filteredOptions.value.length >= 1 && mouseIn.value === true) || props.serverSearch == true) { 
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
  //selected.value = opt
  //emit('update:modelValue', opt); 
  if(typeof opt === 'object' && opt !== null && String(props.datatype).toLowerCase() === 'string') { 
    selected.value = opt[String(props.dataprop || props.prop)]
    emit('update:modelValue', String(selected.value))
  } else if(typeof opt === 'object' && opt !== null && String(props.datatype).toLowerCase() === 'number') { 
    selected.value = opt[String(props.dataprop || props.prop)]
    emit('update:modelValue', Number(selected.value))
  } else {
    selected.value = opt
    emit('update:modelValue', selected.value)
  }
  emit('change', val, opt); 
  picker.value = false;
}

const hideByClick = (e: any) => {
  e.target.style.display = 'none' 
  picker.value = false
}

const selectedValue = computed<any | any[]>(() => {
  let newSelectedValue = searchStr.value
  if(filteredOptions.value.length >= 1 && mouseIn.value !== true && props.emptySearch !== true) {
    if(typeof selected.value === 'number') {
      let newFilteredOptions = filteredOptions.value.filter((i: any) => Number(i[String(props.dataprop || props.prop)]) === Number(selected.value))
      if(typeof filteredOptions.value[0] === 'object' && newFilteredOptions.length >= 1) {
        newSelectedValue = newFilteredOptions[0][String(props.prop)]
      } else if(typeof filteredOptions.value[0] === 'number') {
        newSelectedValue = String(selected.value)
      }
    } else if(typeof selected.value === 'string') {
      let newFilteredOptions = filteredOptions.value.filter((i: any) => String(i[String(props.dataprop || props.prop)]) === selected.value)
      if(typeof filteredOptions.value[0] === 'object' && newFilteredOptions.length >= 1) { 
        newSelectedValue = newFilteredOptions[0][String(props.prop)]
      } else if(typeof filteredOptions.value[0] === 'string' && selected.value !== '') { 
        newSelectedValue = selected.value
      }
    } else if(typeof selected.value === 'object') {
      if(Array.isArray(selected.value) && selected.value.length >= 1) {
        if(typeof selected.value[0] === 'object' && String(props.prop) in selected.value[0]) {
          newSelectedValue = selected.value.map((i: any) => i[String(props.prop)]).join(', ')
        } else {
          newSelectedValue = selected.value.join(', ')
        }
      } else if(selected.value !== null && String(props.prop) in selected.value) {
        newSelectedValue = selected.value[String(props.prop)]
      }
    }
  } else if(searchRef.value?.value && mouseIn.value === true && props.emptySearch !== true) {
    newSelectedValue = searchRef.value.value
  }
  return newSelectedValue
})
</script>

<template>
  <div class="picker suggestion" :class="{active: picker, pickerUp: up}">
    <!--<teleport to="body">-->
      <div class="pickerBackdrop" :style="{display: picker ? 'block' : 'none'}" @click="hideByClick"></div>
    <!--</teleport>-->
    <div class="pickerWrap">
      <input v-if="select" type="search" :value="selectedValue" ref="searchRef" @input="searchOptions" @click="picker = true; emit('load');" @focus="mouseIn = true" @blur="mouseIn = false" class="select" :placeholder="placeholder" />
      <input v-else type="search" :value="selectedValue" ref="searchRef" @input="searchOptions" @click="picker = (filteredOptions.length >= 1 && searchStr !== '') ? true : false" @focus="mouseIn = true" @blur="mouseIn = false" class="input" :placeholder="placeholder || '-- Search Option --'" />
      <div class="pickerContent pickerSizing">
        <div v-if="loading" class="tedirSelectLoading">
          <span class="spinner"></span>
        </div>
        <template v-else>
          <template v-for="(option, index) in filteredOptions" :key="'option-'+option">
            <div v-if="typeof option === 'string'" @click="chooseOption(option, option)" class="pickerItem" :class="(modelValue === option) ? 'active' : ''">{{ option }}</div>
            <div v-else-if="typeof option === 'object' && prop in option" @click="chooseOption(option[prop], option)" class="pickerItem" :class="(selected[prop] === option[prop] || String(option[dataprop || prop]) === String(selected)) ? 'active' : ''">{{ option[prop] }}</div>
            <div v-else @click.stop="chooseOption(option, option)" class="pickerItem" :class="(modelValue === option) ? 'active' : ''">
              <slot :option="option"></slot>
            </div>
          </template>
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
@use spinner;
@use tedirSelect;
</style>
