<script setup lang="ts">
import { ref, reactive, computed, watch, onUpdated } from 'vue'

interface Props {
  //@ts-ignore
  modelValue?: any[],
  //@ts-ignore
  options?: any[],
  prop?: string,
  placeholder?: string,
  size?: number,
  separator?: string
}

interface Emits {
  (e: 'update:modelValue', value: any[] | any): void
}

const props = withDefaults(defineProps<Props>(), {
  //@ts-ignore
  modelValue: [],
  //@ts-ignore
  options: [],
  prop: 'value',
  placeholder: '-- add new tag --',
  size: 0,
  separator: ','
})

const emit = defineEmits<Emits>()

const picker = ref<boolean>(false)
const inputStr = ref<string>('')
const inputRef = ref<any>(null)
const tagList = reactive<any[]>(props.modelValue || [])
const whiteList = ref<any[]>(props.options || [])
const separator = ref<string>(props.separator || ',')
const prop = ref<string>(props.prop || 'value')

const filteredOptions = computed<any[]>(() => {
  //@ts-ignore
  let newOptions: any[] = whiteList.value
  if(inputStr.value.length >= 1) {
    newOptions = newOptions.filter((item: any) => {
      if(isNaN(item) === false && Number(item) === Number(inputStr.value)) {
        return true
      } else if(typeof item === 'string' && item.toLowerCase().includes(inputStr.value.toLowerCase())) {
        return true
      } else if(typeof item === 'object' && item !== null && Object.prototype.toString.call(item) === "[object Object]") {
        for(const key of Object.keys(item)) {
          if(isNaN(item[key]) === false && Number(item[key]) === Number(inputStr.value)) {
            return true
          } else if(typeof item[key] === 'string' && item[key].toLowerCase().includes(inputStr.value.toLowerCase())) {
            return true
          }
        }
      }
      return false
    })
  }
  return newOptions
})

const inputFocus = () => {
  inputRef.value.focus()
}

const createTag = (e: any) => {
  if(e.key !== 'Enter' && filteredOptions.value.length >= 1) { 
    picker.value = true
  } else {
    picker.value = false
  }
  if(inputStr.value.endsWith(separator.value) || e.key === 'Enter') {
    const filterStr = inputStr.value.replace(separator.value, '')
    if(!tagList.includes(filterStr)) {
      tagList.push(filterStr)
      if(whiteList.value.includes(filterStr)) {
        whiteList.value = whiteList.value.filter((item: any) => {
          if(typeof item === 'string' && item !== filterStr) {
            return true
          } else if(typeof item === 'object' && prop.value in item && item[prop.value] !== filterStr) {
            return true
          }
          return false
        })
      }
    }
    inputStr.value = ''
  }
}

watch(inputStr, () => {
  if(inputRef.value !== null) {
    const tagControlHidden = document.createElement('div')
    tagControlHidden.style.width = 'max-content'
    tagControlHidden.style.position = 'absolute'
    tagControlHidden.style.visibility = 'hidden'

    const tagString = (inputStr.value.length >= 2) ? inputStr.value : inputRef.value.getAttribute('placeholder')
    tagControlHidden.innerHTML = tagString.replace(/ /g, '&nbsp;').trim()
    document.body.appendChild(tagControlHidden)

    const countWidth = Math.ceil(Number(window.getComputedStyle(tagControlHidden).width.replace('px', ''))) + 30
    inputRef.value.style.setProperty('width', countWidth + 'px')
    tagControlHidden.remove()
  }
})

const randomChar = (maxlength: number = 10) => {
  let allChar: string = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let resChar: string = ''
  for(let i: number = 0; i < maxlength; i++) {
    resChar += allChar.charAt(Math.floor(Math.random() * allChar.length))
  }
  return resChar
}
</script>

<template>
  <div class="taggable" :class="{active: picker === true}">
    <teleport to="body">
      <div :id="'tag'+randomChar(7)" class="tagBackdrop" style="background-color: rgba(0, 0, 0, 0.5);"></div>
    </teleport>
    <div class="tagContent">
      <div class="input tagToggler" @click="inputFocus">
        <div class="tags">
          <div v-for="(tag, index) in tagList" :key="'tag-'+index" class="group">
            <div class="tag groupItem">
              <template v-if="typeof tag === 'string' && tag !== ''">{{ tag }}</template>
              <template v-else-if="typeof tag === 'object' && prop in tag">{{ tag[prop] }}</template>
              <template v-else>{{ placeholder }}</template>
            </div>
            <div class="tag groupItem" @click="tagList.splice(index, 1)">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </div>
          </div>
          <input type="search" ref="inputRef" v-model="inputStr" class="tagInput" @input="createTag($event)" @keyup.enter="createTag($event)" placeholder="Add new tag" />
        </div>
      </div>
      <div class="tagList">
        <!--<div class="tagList" :style="{'max-height': (Number(size) !== 0) ? (Number(size) * 44)+'px' : 'auto'}">-->
          <template v-for="(option, index) in filteredOptions" :key="'option-'+option">
            <div v-if="typeof option === 'string'" @click="inputStr = option; picker = false;" class="tagOption">{{ option }}</div>
            <div v-else-if="typeof option === 'object' && prop in option" @click="inputStr = option; picker = false;" class="tagOption">{{ option[prop] }}</div>
            <div v-else @click="inputStr = option; picker = false;" class="tagOption">
              <slot :option="option"></slot>
            </div>
          </template>
        <!--</div>-->
      </div>
    </div>
  </div>
</template>

<style scoped>
@use tags;
@use form {
  field: input, group;
}
</style>
