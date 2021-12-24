<script setup lang="ts">
import { ref } from 'vue'
import SelectBox from './components/SelectBox.vue'

const arrayOfStrings = ['Option One', 'Option Two', 'Option There']
const arrayOfObjects = [
  {id: 1, value: 'Option One'}, 
  {id: 2, value: 'Option Two'}, 
  {id: 3, value: 'Option There'}
]

const str = ref<string>('')
const obj = ref<any>({})
const arrOfStr = ref<string[]>([])
const arrOfObj = ref<any[]>([])
</script>

<template>
  <h3>String SelectBox</h3>
  <SelectBox v-model="str" :options="arrayOfStrings" />
  <p>Your select in string: {{ str }}</p>
  <h3>Object SelectBox</h3>
  <SelectBox v-model="obj" :options="arrayOfObjects" />
  <p>Your select in object: {{ obj }}</p>
  <h3>Array of Strings SelectBox</h3>
  <SelectBox v-model="arrOfStr" :options="arrayOfStrings" />
  <p>Your select in multiple strings: {{ arrOfStr }}</p>
  <h3>Array of Objects SelectBox</h3>
  <SelectBox v-model="arrOfObj" :options="arrayOfObjects" />
  <p>Your select in multiple objects: {{ arrOfObj }}</p>
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
