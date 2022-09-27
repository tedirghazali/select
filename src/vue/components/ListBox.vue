<script setup lang="ts">
import { ref, computed, watch } from 'vue'

interface Props {
  modelValue?: any,
  //@ts-ignore
  options?: any[],
  prop?: string,
  datatype?: string,
  dataprop?: string,
  size?: number
}

interface Emits {
  (e: 'update:modelValue', value: any[] | any): void,
  (e: 'change', value: any[] | any, option: any): void
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: {},
  //@ts-ignore
  options: [],
  prop: 'value',
  datatype: '',
  dataprop: '',
  size: 0
})

const emit = defineEmits<Emits>()

const selected = ref<any>(props.modelValue || {})
const searchStr = ref<string>('')

watch(() => props.modelValue, () => {
  selected.value = props.modelValue
})

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

const randomChar = () => {
  let allChar: string = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let resChar: string = ''
  for(let i: number = 0; i < 10; i++) {
    resChar += allChar.charAt(Math.floor(Math.random() * allChar.length))
  }
  return resChar
}

const getRandomChar = randomChar()

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
  } else {
    selected.value = option
    emit('update:modelValue', selected.value)
  }
  emit('change', selected.value, option)
}
</script>

<template>
  <div>
    <div class="list">
      <div class="listHeader">
        <input type="search" v-model="searchStr" class="input" />
      </div>
      <div v-if="Array.isArray(modelValue)" class="listMenu" :style="{'max-height': (Number(size) !== 0) ? (Number(size) * 44)+'px' : 'auto'}">
        <template v-for="(option, index) in filteredOptions" :key="'option-'+option">
          <div v-if="typeof option === 'string'" @click.stop="checkOption(option)" class="listItem">
            <div class="check">
              <input type="checkbox" class="checkInput" :checked="selected.includes(option)" :id="'check-'+(getRandomChar + String(index))" style="pointer-events: none">
              <label class="checkLabel" :for="'check-'+(getRandomChar + String(index))" style="pointer-events: none">{{ option }}</label>
            </div>
          </div>
          <div v-else-if="typeof option === 'object' && prop in option" @click.stop="checkOption(option, prop)" class="listItem">
            <div class="check">
              <input type="checkbox" class="checkInput" :checked="selected.includes(option)" :id="'check-'+(getRandomChar + String(index))" style="pointer-events: none">
              <label class="checkLabel" :for="'check-'+(getRandomChar + String(index))" style="pointer-events: none">{{ option[prop] }}</label>
            </div>
          </div>
          <div v-else @click.stop="checkOption(option)" class="listItem" :class="selected.includes(option) ? 'active' : ''">
            <slot :option="option" :selected="selected"></slot>
          </div>
        </template>
      </div>
      <div v-else class="listMenu" :style="{'max-height': (Number(size) !== 0) ? (Number(size) * 44)+'px' : 'auto'}">
        <template v-for="(option, index) in filteredOptions" :key="'option-'+option">
          <div v-if="typeof option === 'string'" @click="selectOption(option)" class="listItem" :class="(selected === option) ? 'active' : ''">{{ option }}</div>
          <div v-else-if="typeof option === 'object' && prop in option" @click="selectOption(option)" class="listItem" :class="(selected[prop] === option[prop] || String(option[dataprop || prop]) === String(selected)) ? 'active' : ''">{{ option[prop] }}</div>
          <div v-else @click.stop="selectOption(option)" class="listItem" :class="(selected === option) ? 'active' : ''">
            <slot :option="option" :selected="selected"></slot>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
@use list;
@use form {
  field: input, check;
}
</style>
