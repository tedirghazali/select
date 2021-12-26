<script setup lang="ts">
import { ref, computed, onUpdated } from 'vue'

interface Props {
  modelValue?: any,
  //@ts-ignore
  options?: any[],
  prop?: string,
  placeholder?: string
}

interface Emits {
  (e: 'update:modelValue', value: any[] | any): void
}

const props = withDefaults(defineProps<Props>(), {
  modelValue: null,
  //@ts-ignore
  options: [],
  prop: 'value',
  placeholder: '-- Select option --'
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

const randomChar = () => {
  let allChar: string = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let resChar: string = ''
  for(let i: number = 0; i < 10; i++) {
    resChar += allChar.charAt(Math.floor(Math.random() * allChar.length))
  }
  return resChar
}

const getRandomChar = randomChar()
</script>

<template>
  <div class="select" :class="{show: picker === true}" @click.stop="">
    <div class="selectBox" @click="picker = !picker">
      <template v-if="typeof modelValue === 'string' && modelValue !== ''">{{ modelValue }}</template>
      <template v-else-if="typeof modelValue === 'object' && prop in modelValue">{{ modelValue[prop] }}</template>
      <template v-else-if="Array.isArray(modelValue) && modelValue.length >= 1 && typeof modelValue[0] === 'string'">{{ modelValue.join(', ') }}</template>
      <template v-else-if="Array.isArray(modelValue) && modelValue.length >= 1 && typeof modelValue[0] === 'object' && prop in modelValue[0]">{{ modelValue.map(i => i[prop]).join(', ') }}</template>
      <template v-else>{{ placeholder }}</template>
    </div>
    <div class="selectPicker">
      <div class="selectWrap">
        <input type="search" v-model="searchStr" class="selectSearch" />
      </div>
      <div v-if="Array.isArray(modelValue)" class="selectList">
        <template v-for="(option, index) in filteredOptions" :key="'option-'+option">
          <div v-if="typeof option === 'string'" @click="(!modelValue.includes(option)) ? modelValue.push(option) : modelValue.splice(modelValue.findIndex((i: string) => i === option), 1); emit('update:modelValue', modelValue);" class="selectItem">
            <div class="selectCheck">
						  <input type="checkbox" class="selectCheckInput" :checked="modelValue.includes(option)" :id="'check-'+(getRandomChar + String(index))" @change="(!modelValue.includes(option)) ? modelValue.push(option) : modelValue.splice(modelValue.findIndex((j: string) => j === option), 1); emit('update:modelValue', modelValue);">
							<label class="selectCheckLabel" :for="'check-'+(getRandomChar + String(index))">{{ option }}</label>
					  </div>
          </div>
          <div v-else-if="typeof option === 'object' && prop in option" @click="(!modelValue.includes(option)) ? modelValue.push(option) : modelValue.splice(modelValue.findIndex((i: any) => i[prop] === option[prop]), 1); emit('update:modelValue', modelValue);" class="selectItem">
          <div class="selectCheck">
						  <input type="checkbox" class="selectCheckInput" :checked="modelValue.includes(option)" :id="'check-'+(getRandomChar + String(index))" @change="(!modelValue.includes(option)) ? modelValue.push(option) : modelValue.splice(modelValue.findIndex((j: any) => j[prop] === option[prop]), 1); emit('update:modelValue', modelValue);">
							<label class="selectCheckLabel" :for="'check-'+(getRandomChar + String(index))">{{ option[prop] }}</label>
					  </div>
          </div>
          <div v-else @click="(!modelValue.includes(option)) ? modelValue.push(option) : modelValue.splice(modelValue.findIndex((i: any) => i === option), 1); emit('update:modelValue', modelValue);" class="selectItem">
            <slot :option="option" :items="modelValue"></slot>
          </div>
        </template>
      </div>
      <div v-else class="selectList">
        <template v-for="(option, index) in filteredOptions" :key="'option-'+option">
          <div v-if="typeof option === 'string'" @click="emit('update:modelValue', option); picker = false;" class="selectItem">{{ option }}</div>
          <div v-else-if="typeof option === 'object' && prop in option" @click="emit('update:modelValue', option); picker = false;" class="selectItem">{{ option[prop] }}</div>
          <div v-else @click="emit('update:modelValue', option); picker = false;" class="selectItem">
            <slot :option="option"></slot>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.select {
  position: relative;
}

.selectBox {
  position: relative;
  display: block;
  border: 0.0625rem solid rgba(0, 0, 0, 0.15);
  padding: 0.3125rem 1.25rem;
  border-radius: 1rem;
  width: 100%;
  min-height: 44px;
  line-height: 2rem;
  box-sizing: border-box;
  cursor: pointer;
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
.selectBox:hover {
  box-shadow: none;
  background: #fff;
  color: #6e6e6e;
}

.selectBox::after {
  border-bottom: 3px solid rgba(0, 0, 0, 0.15);
  border-right: 3px solid rgba(0, 0, 0, 0.15);
  content: '';
  display: block;
  height: 10px;
  margin-top: -6px;
  pointer-events: none;
  position: absolute;
  right: 8px;
  top: 45%;
  margin-right: 10px;
  -webkit-transform-origin: 66% 66%;
  -ms-transform-origin: 66% 66%;
  transform-origin: 66% 66%;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-transition: all 0.15s ease-in-out;
  transition: all 0.15s ease-in-out;
  width: 10px;
}
.show .selectBox::after {
  -webkit-transform: rotate(-135deg);
  -ms-transform: rotate(-135deg);
  transform: rotate(-135deg);
}
.show .selectBox {
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.selectPicker {
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
  user-select: none;
  appearance: none;
  white-space: nowrap;
  font-size: 0.875rem;
  font-weight: 400;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
.show .selectPicker {
  display: block;
}

.selectWrap {
  padding: 0.3125rem;
}
.selectSearch {
  position: relative;
  display: block;
  border: 0.0625rem solid rgba(0, 0, 0, 0.15);
  padding: 0.3125rem 1.25rem;
  border-radius: 1rem;
  width: 100%;
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

.selectList {
  padding-bottom: 1.25rem;
}
.selectItem:first-child {
  border-top: 0.0625rem solid rgba(0, 0, 0, 0.15);
}
.selectItem {
  padding: 0.3125rem 1.25rem;
  border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.15);
  cursor: pointer;
}
.selectItem:hover {
  background: rgba(0, 0, 0, 0.05);
}
.selectItem:active {
  background: rgba(0, 0, 0, 0.15);
}

.selectCheck {
  display: flex;
  align-items: center;
  min-height: 1.3125rem;
  padding-left: 1.5em;
}
.selectCheckInput {
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
.selectCheckInput:checked {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
  background-color: rgba(0, 0, 0, 0.25);
}
.selectCheck .selectCheckInput {
  float: left;
  margin-left: -1.5em;
}
.selectCheckLabel {
  margin-left: 0.3125rem;
  display: inline-block;
}
</style>
