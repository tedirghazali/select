<script setup lang="ts">
import { ref } from 'vue'
import SelectBox from './components/SelectBox.vue'
import ComboBox from './components/ComboBox.vue'
import { strOptions, objOptions } from './models/options'

const arrayOfStrings = strOptions()
const arrayOfObjects = objOptions()

const str = ref<string>('')
const obj = ref<any>({})
const arrOfStr = ref<string[]>([])
const arrOfObj = ref<any[]>([])
const comboStr = ref<string>('')
const comboObj = ref<any>({})
</script>

<template>
  <h3>SelectBox (String)</h3>
  <SelectBox v-model="str" :options="arrayOfStrings" :size="5" />
  <p>Your select in string: {{ str }}</p>
  <h3>SelectBox (Object)</h3>
  <SelectBox v-model="obj" :options="arrayOfObjects" :size="10" />
  <p>Your select in object: {{ obj }}</p>
  <h3>SelectBox (Array of Strings)</h3>
  <SelectBox v-model="arrOfStr" :options="arrayOfStrings" :size="25" />
  <p>Your select in multiple strings: {{ arrOfStr }}</p>
  <h3>SelectBox (Array of Objects)</h3>
  <SelectBox v-model="arrOfObj" :options="arrayOfObjects" :size="50" />
  <p>Your select in multiple objects: {{ arrOfObj }}</p>
  <p><br /></p>
  <h3>ComboBox Autocomplete (String)</h3>
  <ComboBox v-model="comboStr" :options="arrayOfStrings" :size="5" />
  <p>Your select in multiple objects: {{ comboStr }}</p>
  <h3>ComboBox Autocomplete (Object)</h3>
  <ComboBox v-model="comboObj" :options="arrayOfObjects" :size="5" />
  <p>Your select in multiple objects: {{ comboObj }}</p>
</template>

<style>
#app {
  font-family: Avenir, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 800px;
  color: #2c3e50;
  margin: 60px auto;
}
</style>
