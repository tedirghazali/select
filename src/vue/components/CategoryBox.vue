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
  size?: number
}

interface Emits {
  (e: 'update:modelValue', value: any[] | any): void,
  (e: 'change', value: any[] | any, option: any): void,
  (e: 'add', value: string): void,
  (e: 'search', value: string): void
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: {},
  //@ts-ignore
  options: [],
  prop: 'value',
  datatype: '',
  dataprop: '',
  placeholder: '-- Select option --',
  size: 0
})

const emit = defineEmits<Emits>()

const selected = ref<any>(props.modelValue || {})
const picker = ref<boolean>(false)
const searchStr = ref<string>('')
const searchRef = ref<any>(null)
const searchTimer = ref<any>(undefined)
const addStr = ref<string>('')

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
</script>

<template>
  <div class="picker suggestion tedirCategory" :class="picker ? 'active' : ''">
    <!--<teleport to="body">-->
      <div class="pickerBackdrop" :style="{display: picker ? 'block' : 'none'}" @click="hideByClick"></div>
    <!--</teleport>-->
    <div class="pickerOverlay pickerWrap">
      <div class="select pickerToggler" @click="picker = !picker">
        <template v-if="typeof selected === 'string' && selected !== '' && filteredOptions.length >= 1 && typeof filteredOptions[0] === 'string'">{{ selected }}</template>
        <template v-else-if="typeof selected === 'string' && filteredOptions.filter(i => String(i[String(dataprop || prop)]) === selected).length >= 1 && typeof filteredOptions.filter(i => String(i[String(dataprop || prop)]) === selected)[0] === 'object'">{{ filteredOptions.filter(i => String(i[String(dataprop || prop)]) === selected)[0][prop] }}</template>
        <template v-else-if="typeof selected === 'object' && selected !== null && prop in selected">{{ selected[prop] }}</template>
        <template v-else-if="Array.isArray(selected) && selected.length >= 1 && typeof selected[0] === 'string'">{{ selected.join(', ') }}</template>
        <template v-else-if="Array.isArray(selected) && selected.length >= 1 && typeof selected[0] === 'object' && prop in selected[0]">{{ selected.map(i => i[prop]).join(', ') }}</template>
        <template v-else>{{ placeholder }}</template>
      </div>
      <div class="pickerContent">
        <div class="pickerHeader">
          <input type="search" ref="searchRef" @input="searchOptions" class="input" />
        </div>
        <div v-if="Array.isArray(selected)" class="pickerMenu" :style="{'max-height': (Number(size) !== 0) ? (Number(size) * 42)+'px' : 'auto'}">
          <template v-for="(option, index) in filteredOptions" :key="'option-'+option">
            <div v-if="typeof option === 'string'" @click.stop="checkOption(option)" class="pickerItem">
              <div class="check">
                <input type="checkbox" class="checkInput" :checked="selected.includes(option)" :id="'check-'+(getRandomChar + String(index))" style="pointer-events: none">
                <label class="checkLabel" :for="'check-'+(getRandomChar + String(index))" style="pointer-events: none">{{ option }}</label>
              </div>
            </div>
            <div v-else-if="typeof option === 'object' && option !== null && prop in option" @click.stop="checkOption(option, prop)" class="pickerItem">
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
          <template v-for="(option, index) in filteredOptions" :key="'option-'+option">
            <div v-if="typeof option === 'string'" @click="selectOption(option)" class="pickerItem" :class="(selected === option) ? 'active' : ''">{{ option }}</div>
            <div v-else-if="typeof option === 'object' && option !== null && prop in option" @click="selectOption(option)" class="pickerItem" :class="(selected[prop] === option[prop] || String(option[dataprop || prop]) === String(selected)) ? 'active' : ''">{{ option[prop] }}</div>
            <div v-else @click.stop="selectOption(option)" class="pickerItem" :class="(selected === option) ? 'active' : ''">
              <slot :option="option" :selected="selected"></slot>
            </div>
          </template>
        </div>
        <div class="pickerFooter">
          <div class="tedirCategoryAdd">
            <input type="text" v-model="addStr" class="input" placeholder="Add New Category" />
            <button type="button" class="button tedirCategoryButton" @click="emit('add', addStr); addStr = '';">Save</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
@use picker;
@use form {
  field: input, check, group, button;
}

@use tedirCategory;
</style>
