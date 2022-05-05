<script setup lang="ts">
import { ref, computed, onUpdated } from 'vue'

interface Props {
  modelValue?: any,
  //@ts-ignore
  options?: any[],
  prop?: string,
  placeholder?: string,
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
  placeholder: '-- combo option --',
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
</script>

<template>
  <div class="picker suggestion" :class="picker ? 'active' : ''">
    <teleport to="body">
      <div class="pickerBackdrop" :style="{display: picker ? 'block' : 'none'}" @click="picker = false"></div>
    </teleport>
    <div class="pickerContent">
      <input type="search" v-model="searchStr" @input="(filteredOptions.length >= 1 && searchStr !== '') ? picker = true : picker = false" @click="(filteredOptions.length >= 1 && searchStr !== '') ? picker = true : picker = false" class="input" />
      <div class="pickerMenu">
        <template v-for="(option, index) in filteredOptions" :key="'option-'+option">
          <div v-if="typeof option === 'string'" @click="searchStr = option; emit('update:modelValue', option); picker = false;" class="pickerItem">{{ option }}</div>
          <div v-else-if="typeof option === 'object' && prop in option" @click="searchStr = option[prop]; emit('update:modelValue', option); picker = false;" class="pickerItem">{{ option[prop] }}</div>
          <div v-else @click="searchStr = option; emit('update:modelValue', option); picker = false;" class="comboItem">
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
