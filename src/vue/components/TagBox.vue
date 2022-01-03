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
const tagList = reactive<any[]>(props.modelValue)
const whiteList = ref<any[]>(props.options)

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

const createTag = (e) => {
  if(e.key !== 'Enter' && filteredOptions.value.length >= 1) { 
    picker.value = true
  } else {
    picker.value = false
  }
  if(inputStr.value.endsWith(props.separator) || e.key === 'Enter') {
    const filterStr = inputStr.value.replace(props.separator, '')
    if(!tagList.includes(filterStr)) {
      tagList.push(filterStr)
      if(whiteList.value.includes(filterStr)) {
        whiteList.value = whiteList.value.filter((item: any) => {
          if(typeof item === 'string' && item !== filterStr) {
            return true
          } else if(typeof item === 'object' && prop in item && item[prop] !== filterStr) {
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

    inputRef.value.style.setProperty('width', Math.ceil(window.getComputedStyle(tagControlHidden).width.replace('px', '')) + 30 + 'px')
    tagControlHidden.remove()
  }
})

onUpdated(() => {
  document.addEventListener('click', () => {
    picker.value = false
  })
})

</script>

<template>
  <div class="tagWrap" :class="{show: picker === true}" @click.stop="">
    <div class="tagBox" @click="inputFocus">
      <div v-for="(tag, index) in tagList" :key="'tag-'+index" class="tag">
        <div class="tagName">
          <template v-if="typeof tag === 'string' && tag !== ''">{{ tag }}</template>
          <template v-else-if="typeof tag === 'object' && prop in tag">{{ tag[prop] }}</template>
          <template v-else>{{ placeholder }}</template>
        </div>
        <div class="tagBadge" @click="tagList.splice(index, 1)">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-x">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </div>
      </div>
      <div class="tagWrap">
        <input type="search" ref="inputRef" v-model="inputStr" class="tagInput" @input="createTag($event)" @keyup.enter="createTag($event)" placeholder="Add new tag" />
      </div>
    </div>
    <div class="tagPicker">
      <div class="tagList" :style="{'max-height': (Number(size) !== 0) ? (Number(size) * 44)+'px' : 'auto'}">
        <template v-for="(option, index) in filteredOptions" :key="'option-'+option">
          <div v-if="typeof option === 'string'" @click="inputStr = option; picker = false;" class="tagItem">{{ option }}</div>
          <div v-else-if="typeof option === 'object' && prop in option" @click="inputStr = option; picker = false;" class="tagItem">{{ option[prop] }}</div>
          <div v-else @click="inputStr = option; picker = false;" class="tagItem">
            <slot :option="option"></slot>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tagWrap {
  position: relative;
}

.tagBox {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  align-items: center;
  border: 0.0625rem solid rgba(0, 0, 0, 0.15);
  padding: 0.3125rem 1.25rem;
  border-radius: 1rem;
  width: 100%;
  min-height: 44px;
  box-sizing: border-box;
  cursor: pointer;
  font-family: inherit;
  outline: none;
  user-tag: none;
  appearance: none;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  font-size: 0.875rem;
  font-weight: 400;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.tagBox:hover {
  box-shadow: none;
  background: #fff;
}

.show .tagBox {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.tag {
  display: flex;
  justify-content: start;
  align-items: center;
  border: 0.0625rem solid rgba(0, 0, 0, 0.15);
  border-radius: 1rem;
  margin-right: 0.5rem;
}

.tagName {
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  padding: 0.5rem 0.75rem;
  border-right: 0.0625rem solid rgba(0, 0, 0, 0.15);
}

.tagName:hover {
  color: #6e6e6e;
}

.tagBadge {
  border-top-right-radius: 1rem;
  border-bottom-right-radius: 1rem;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.05);
}

.tagBadge:hover {
  background-color: rgba(0, 0, 0, 0.15);
}

.tagBadge svg {
  pointer-events: none;
}

.tagPicker {
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
  user-tag: none;
  appearance: none;
  white-space: nowrap;
  font-size: 0.875rem;
  font-weight: 400;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.show .tagPicker {
  display: block;
}

.tagInput {
  position: relative;
  display: block;
  border: 0.0625rem solid transparent;
  padding: 0.15rem;
  border-radius: 1rem;
  line-height: 2rem;
  box-sizing: border-box;
  font-family: inherit;
  outline: none;
  appearance: none;
  white-space: nowrap;
  font-size: 0.875rem;
  font-weight: 400;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.tagList {
  margin-bottom: 1.25rem;
  overflow-x: hidden;
  overflow-y: auto;
}
.tagItem:first-child {
  border-top: 0.0625rem solid rgba(0, 0, 0, 0.15);
}
.tagItem {
  padding: 0.3125rem 1.25rem;
  border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.15);
  cursor: pointer;
}
.tagItem:hover {
  background: rgba(0, 0, 0, 0.05);
}
.tagItem:active {
  background: rgba(0, 0, 0, 0.15);
}

.tagCheck {
  display: flex;
  align-items: center;
  min-height: 1.3125rem;
  padding-left: 1.5em;
}
.tagCheckInput {
  width: 1rem;
  height: 1rem;
  background-color: #fff;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  border: 1px solid rgba(0, 0, 0, 0.15);
  appearance: none;
  color-adjust: exact;
  border-radius: 0.15rem;
}
.tagCheckInput:checked {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
  background-color: rgba(0, 0, 0, 0.25);
}
.tagCheck .tagCheckInput {
  float: left;
  margin-left: -1.5em;
}
.tagCheckLabel {
  margin-left: 0.3125rem;
  display: inline-block;
}
</style>
