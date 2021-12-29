<script setup lang="ts">
import { ref, computed, onUpdated } from 'vue'

interface Props {
  modelValue?: any,
  //@ts-ignore
  options?: any[],
  prop?: string,
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
  <div class="list" :class="{show: picker === true}" @click.stop="">
    <div class="listBox">
      <div class="listWrap">
        <input type="search" v-model="searchStr" class="listSearch" />
      </div>
      <div v-if="Array.isArray(modelValue)" class="listGroup" :style="{'max-height': (Number(size) !== 0) ? (Number(size) * 44)+'px' : 'auto'}">
        <template v-for="(option, index) in filteredOptions" :key="'option-'+option">
          <div v-if="typeof option === 'string'" @click="(!modelValue.includes(option)) ? modelValue.push(option) : modelValue.splice(modelValue.findIndex((i: string) => i === option), 1); emit('update:modelValue', modelValue);" class="listItem">
            <div class="listCheck">
              <input type="checkbox" class="listCheckInput" :checked="modelValue.includes(option)" :id="'check-'+(getRandomChar + String(index))" @change="(!modelValue.includes(option)) ? modelValue.push(option) : modelValue.splice(modelValue.findIndex((j: string) => j === option), 1); emit('update:modelValue', modelValue);">
              <label class="listCheckLabel" :for="'check-'+(getRandomChar + String(index))">{{ option }}</label>
            </div>
          </div>
          <div v-else-if="typeof option === 'object' && prop in option" @click="(!modelValue.includes(option)) ? modelValue.push(option) : modelValue.splice(modelValue.findIndex((i: any) => i[prop] === option[prop]), 1); emit('update:modelValue', modelValue);" class="listItem">
            <div class="listCheck">
              <input type="checkbox" class="listCheckInput" :checked="modelValue.includes(option)" :id="'check-'+(getRandomChar + String(index))" @change="(!modelValue.includes(option)) ? modelValue.push(option) : modelValue.splice(modelValue.findIndex((j: any) => j[prop] === option[prop]), 1); emit('update:modelValue', modelValue);">
              <label class="listCheckLabel" :for="'check-'+(getRandomChar + String(index))">{{ option[prop] }}</label>
            </div>
          </div>
          <div v-else @click="(!modelValue.includes(option)) ? modelValue.push(option) : modelValue.splice(modelValue.findIndex((i: any) => i === option), 1); emit('update:modelValue', modelValue);" class="listItem">
            <slot :option="option" :items="modelValue"></slot>
          </div>
        </template>
      </div>
      <div v-else class="listGroup" :style="{'max-height': (Number(size) !== 0) ? (Number(size) * 44)+'px' : 'auto'}">
        <template v-for="(option, index) in filteredOptions" :key="'option-'+option">
          <div v-if="typeof option === 'string'" @click="emit('update:modelValue', option); picker = false;" class="listItem">{{ option }}</div>
          <div v-else-if="typeof option === 'object' && prop in option" @click="emit('update:modelValue', option); picker = false;" class="listItem">{{ option[prop] }}</div>
          <div v-else @click="emit('update:modelValue', option); picker = false;" class="listItem">
            <slot :option="option"></slot>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.list {
  position: relative;
}

.listBox {
  position: relative;
  display: block;
  background-color: #fff;
  border: 0.0625rem solid rgba(0, 0, 0, 0.15);
  border-radius: 1rem;
  width: 100%;
  line-height: 2rem;
  box-sizing: border-box;
  font-family: inherit;
  outline: none;
  user-list: none;
  appearance: none;
  white-space: nowrap;
  font-size: 0.875rem;
  font-weight: 400;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}

.listWrap {
  padding: 0.3125rem;
}
.listSearch {
  position: relative;
  display: block;
  border: 0.0625rem solid rgba(0, 0, 0, 0.15);
  padding: 0.15rem 1rem;
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

.listGroup {
  margin-bottom: 1.25rem;
  overflow-x: hidden;
  overflow-y: auto;
}
.listItem:first-child {
  border-top: 0.0625rem solid rgba(0, 0, 0, 0.15);
}
.listItem {
  padding: 0.3125rem 1.25rem;
  border-bottom: 0.0625rem solid rgba(0, 0, 0, 0.15);
  cursor: pointer;
}
.listItem:hover {
  background: rgba(0, 0, 0, 0.05);
}
.listItem:active {
  background: rgba(0, 0, 0, 0.15);
}

.listCheck {
  display: flex;
  align-items: center;
  min-height: 1.3125rem;
  padding-left: 1.5em;
}
.listCheckInput {
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
.listCheckInput:checked {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20'%3e%3cpath fill='none' stroke='%23fff' stroke-linecap='round' stroke-linejoin='round' stroke-width='3' d='M6 10l3 3l6-6'/%3e%3c/svg%3e");
  background-color: rgba(0, 0, 0, 0.25);
}
.listCheck .listCheckInput {
  float: left;
  margin-left: -1.5em;
}
.listCheckLabel {
  margin-left: 0.3125rem;
  display: inline-block;
}
</style>
