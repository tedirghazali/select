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
  type?: string,
  up?: boolean,
  defaultOption?: boolean,
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
  placeholder: '-- Select Option --',
  size: 0,
  type: '',
  up: false,
  defaultOption: false,
  loading: false
})

const emit = defineEmits<Emits>()

const selected = ref<any>(props.modelValue || {})
const picker = ref<boolean>(false)
const searchStr = ref<string>('')
const searchRef = ref<any>(null)
const searchTimer = ref<any>(undefined)

watch(() => props.modelValue, () => {
  selected.value = props.modelValue
})

const searchOptions = () => {
  clearTimeout(searchTimer.value)
  searchTimer.value = setTimeout(() => {
    searchStr.value = ''
    if(searchRef.value?.value && searchRef.value?.value !== '') {
      searchStr.value = searchRef.value.value
    }
    emit('search', searchStr.value)
  }, 500)
}

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

const randomChar = (maxlength: number = 10) => {
  let allChar: string = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let resChar: string = ''
  for(let i: number = 0; i < maxlength; i++) {
    resChar += allChar.charAt(Math.floor(Math.random() * allChar.length))
  }
  return resChar
}

const getRandomChar = randomChar()

const hideByClick = (e: any) => {
  e.target.style.display = 'none' 
  picker.value = false
  if(searchRef.value?.value) {
    searchRef.value.value = ''
    searchStr.value = ''
  }
}

const setDefaultOption = (option: any[] | any) => {
  selected.value = option
  emit('update:modelValue', selected.value)
  emit('change', selected.value, option)
  picker.value = false
}

const checkOption = (option: any, property: string = '') => {
  if(property !== '') {
    if(!selected.value.map((i: any) => i[property]).includes(option[property])) { 
      selected.value.push(option)
    } else { 
      selected.value.splice(selected.value.findIndex((i: any) => i[property] === option[property]), 1) 
    }
  } else {
    if(!selected.value.includes(option)) { 
      selected.value.push(option)
    } else { 
      selected.value.splice(selected.value.findIndex((i: any) => i === option), 1) 
    }
  }
  emit('update:modelValue', selected.value)
  emit('change', selected.value, option)
}

const selectOption = (option: any) => {
  if(typeof option === 'object' && option !== null && String(props.datatype).toLowerCase() === 'string') { 
    selected.value = option[String(props.dataprop || props.prop)]
    emit('update:modelValue', String(selected.value))
  } else if(typeof option === 'object' && option !== null && String(props.datatype).toLowerCase() === 'number') { 
    selected.value = option[String(props.dataprop || props.prop)]
    emit('update:modelValue', Number(selected.value))
  } else {
    selected.value = option
    emit('update:modelValue', selected.value)
  }
  picker.value = false
  emit('change', selected.value, option)
}

const selectedValue = computed<any | any[]>(() => {
  let newSelectedValue = props?.placeholder || '-- Select option --'
  if(filteredOptions.value.length >= 1) {
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
      <div class="select pickerToggler" @click="picker = !picker; emit('load');">
        {{ selectedValue }}
      </div>
      <div class="pickerContent">
        <div class="pickerHeader">
          <input type="search" ref="searchRef" @input="searchOptions" class="input" />
        </div>
        <div v-if="loading" class="tedirSelectLoading">
          <span class="spinner"></span>
        </div>
        <template v-else>
          <div v-if="Array.isArray(selected)" class="pickerMenu" :style="{'max-height': (Number(size) !== 0) ? (Number(size) * 42)+'px' : 'auto'}">
            <div v-show="defaultOption" @click.stop="setDefaultOption(typeof modelValue === 'object' ? (Array.isArray(modelValue) ? [] : {}) : '')" class="pickerItem">{{ placeholder || '-- Select Option --' }}</div>
            <template v-for="(option, index) in filteredOptions" :key="'option-'+option">
              <div v-if="typeof option === 'string' && type !== 'slot'" @click.stop="checkOption(option)" class="pickerItem">
                <div class="check">
                  <input type="checkbox" class="checkInput" :checked="selected.includes(option)" :id="'check-'+(getRandomChar + String(index))" style="pointer-events: none">
                  <label class="checkLabel" :for="'check-'+(getRandomChar + String(index))" style="pointer-events: none">{{ option }}</label>
                </div>
              </div>
              <div v-else-if="typeof option === 'object' && option !== null && prop in option && type !== 'slot'" @click.stop="checkOption(option, prop)" class="pickerItem">
                <div class="check">
                  <input type="checkbox" class="checkInput" :checked="selected.includes(option)" :id="'check-'+(getRandomChar + String(index))" style="pointer-events: none">
                  <label class="checkLabel" :for="'check-'+(getRandomChar + String(index))" style="pointer-events: none">{{ option[prop] }}</label>
                </div>
              </div>
              <div v-else @click.stop="checkOption(option)" class="pickerItem">
                <slot :option="option" :selected="selected"></slot>
              </div>
            </template>
          </div>
          <div v-else class="pickerMenu" :style="{'max-height': (Number(size) !== 0) ? (Number(size) * 42)+'px' : 'auto'}">
            <div v-show="defaultOption" @click.stop="setDefaultOption(typeof modelValue === 'object' ? (Array.isArray(modelValue) ? [] : {}) : '')" class="pickerItem">{{ placeholder || '-- Select Option --' }}</div>
            <template v-for="(option, index) in filteredOptions" :key="'option-'+option">
              <div v-if="typeof option === 'string' && type !== 'slot'" @click="selectOption(option)" class="pickerItem" :class="(selected === option) ? 'active' : ''">{{ option }}</div>
              <div v-else-if="typeof option === 'object' && option !== null && prop in option && type !== 'slot'" @click="selectOption(option)" class="pickerItem" :class="(selected[prop] === option[prop] || String(option[dataprop || prop]) === String(selected)) ? 'active' : ''">{{ option[prop] }}</div>
              <div v-else @click.stop="selectOption(option)" class="pickerItem" :class="(selected === option) ? 'active' : ''">
                <slot :option="option" :selected="selected"></slot>
              </div>
            </template>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
@use picker;
@use form {
  field: input, check;
}
@use spinner;
@use tedirSelect;
</style>
