<script setup lang="ts">
import { ref, onUpdated } from 'vue'

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

onUpdated(() => {
  document.addEventListener('click', () => {
    picker.value = false
  })
})
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
        <input type="search" class="selectSearch" />
      </div>
      <div v-if="Array.isArray(modelValue)" class="selectList">
        <template v-for="(option, index) in options" :key="'option-'+option">
          <div v-if="typeof option === 'string'" @click="if(!modelValue.includes(option)) { modelValue.push(option); } emit('update:modelValue', modelValue);" class="selectItem">{{ option }}</div>
          <div v-else-if="typeof option === 'object' && prop in option" @click="if(!modelValue.includes(option)) { modelValue.push(option); } emit('update:modelValue', modelValue);" class="selectItem">{{ option[prop] }}</div>
          <div v-else @click="if(!modelValue.includes(option)) { modelValue.push(option); } emit('update:modelValue', modelValue);" class="selectItem">
            <slot :option="option"></slot>
          </div>
        </template>
      </div>
      <div v-else class="selectList">
        <template v-for="(option, index) in options" :key="'option-'+option">
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
</style>
