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
  <div>
    <div class="list">
      <div class="listWrap">
        <input type="search" v-model="searchStr" class="input" />
      </div>
      <div v-if="Array.isArray(modelValue)" class="listGroup" :style="{'max-height': (Number(size) !== 0) ? (Number(size) * 44)+'px' : 'auto'}">
        <template v-for="(option, index) in filteredOptions" :key="'option-'+option">
          <div v-if="typeof option === 'string'" @click.stop="(!modelValue.includes(option)) ? modelValue.push(option) : modelValue.splice(modelValue.findIndex((i: string) => i === option), 1); emit('update:modelValue', modelValue);" class="listItem">
            <div class="check">
              <input type="checkbox" class="checkInput" :checked="modelValue.includes(option)" :id="'check-'+(getRandomChar + String(index))" @change="(!modelValue.includes(option)) ? modelValue.push(option) : modelValue.splice(modelValue.findIndex((j: string) => j === option), 1); emit('update:modelValue', modelValue);">
              <label class="checkLabel" :for="'check-'+(getRandomChar + String(index))">{{ option }}</label>
            </div>
          </div>
          <div v-else-if="typeof option === 'object' && prop in option" @click.stop="(!modelValue.includes(option)) ? modelValue.push(option) : modelValue.splice(modelValue.findIndex((i: any) => i[prop] === option[prop]), 1); emit('update:modelValue', modelValue);" class="listItem">
            <div class="check">
              <input type="checkbox" class="checkInput" :checked="modelValue.includes(option)" :id="'check-'+(getRandomChar + String(index))" @change="(!modelValue.includes(option)) ? modelValue.push(option) : modelValue.splice(modelValue.findIndex((j: any) => j[prop] === option[prop]), 1); emit('update:modelValue', modelValue);">
              <label class="checkLabel" :for="'check-'+(getRandomChar + String(index))">{{ option[prop] }}</label>
            </div>
          </div>
          <div v-else @click="(!modelValue.includes(option)) ? modelValue.push(option) : modelValue.splice(modelValue.findIndex((i: any) => i === option), 1); emit('update:modelValue', modelValue);" class="listItem" :class="modelValue.includes(option) ? 'active' : ''">
            <slot :option="option" :items="modelValue"></slot>
          </div>
        </template>
      </div>
      <div v-else class="listGroup" :style="{'max-height': (Number(size) !== 0) ? (Number(size) * 44)+'px' : 'auto'}">
        <template v-for="(option, index) in filteredOptions" :key="'option-'+option">
          <div v-if="typeof option === 'string'" @click="emit('update:modelValue', option);" class="listItem" :class="(modelValue === option) ? 'active' : ''">{{ option }}</div>
          <div v-else-if="typeof option === 'object' && prop in option" @click="emit('update:modelValue', option);" class="listItem" :class="(modelValue[prop] === option[prop]) ? 'active' : ''">{{ option[prop] }}</div>
          <div v-else @click="emit('update:modelValue', option);" class="listItem" :class="(modelValue === option) ? 'active' : ''">
            <slot :option="option"></slot>
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
