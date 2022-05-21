<script setup lang="ts">
import { ref } from 'vue'
import SelectBox from './components/SelectBox.vue'
import ComboBox from './components/ComboBox.vue'
import ListBox from './components/ListBox.vue'
import TagBox from './components/TagBox.vue'
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
<div class="container mt-20px mb-20px">
  <h3>SelectBox (String)</h3>
  <SelectBox v-model="str" :options="arrayOfStrings" :size="5" />
  <p>Your selected value is in string: {{ str }}</p>
  <p><br/></p>
  <h3>SelectBox (Object)</h3>
  <SelectBox v-model="obj" :options="arrayOfObjects" :size="10" />
  <p>Your selected value is in object: {{ obj }}</p>
  <p><br/></p>
  <h3>SelectBox (Array of Strings)</h3>
  <SelectBox v-model="arrOfStr" :options="arrayOfStrings" :size="25" />
  <p>Your selected value is in multiple strings: {{ arrOfStr }}</p>
  <p><br/></p>
  <h3>SelectBox (Array of Objects)</h3>
  <SelectBox v-model="arrOfObj" :options="arrayOfObjects" :size="50" />
  <p>Your selected value is in multiple objects: {{ arrOfObj }}</p>
  
  <p><br /><br /></p>
  <h3>ComboBox Autocomplete (String)</h3>
  <ComboBox v-model="comboStr" :options="arrayOfStrings" :size="5" />
  <p>You choose the value in string: {{ comboStr }}</p>
  <p><br/></p>
  <h3>ComboBox Autocomplete (Object)</h3>
  <ComboBox v-model="comboObj" :options="arrayOfObjects" :size="5" />
  <p>You choose the value in object: {{ comboObj }}</p>
  
  <p><br /><br /></p>
  <h3>ListBox (String)</h3>
  <ListBox v-model="str" :options="arrayOfStrings" :size="5" />
  <p>Your selected value is in string: {{ str }}</p>
  <p><br/></p>
  <h3>ListBox (Object)</h3>
  <ListBox v-model="obj" :options="arrayOfObjects" :size="5" />
  <p>Your selected value is in object: {{ obj }}</p>
  <p><br/></p>
  <h3>ListBox (Array of Strings)</h3>
  <ListBox v-model="arrOfStr" :options="arrayOfStrings" :size="5" />
  <p>Your selected value is in multiple strings: {{ arrOfStr }}</p>
  <p><br/></p>
  <h3>ListBox (Array of Objects)</h3>
  <ListBox v-model="arrOfObj" :options="arrayOfObjects" :size="5" />
  <p>Your selected value is in multiple objects: {{ arrOfObj }}</p>
  
  <p><br /><br /></p>
  <h3>TagBox (Only Strings)</h3>
  <TagBox v-model="arrOfStr" :options="arrayOfStrings" :size="5" />
  <p>Your selected value is in string: {{ arrOfStr }}</p>
  <!--<p><br/></p>
  <h3>TagBox (Objects)</h3>
  <TagBox v-model="arrOfObj" :options="arrayOfStrings" :size="5" />
  <p>Your selected value is in string: {{ arrOfObj }}</p>-->
  
  <p><br /><br /></p>
</div>
</template>

<style>
@use base;

#app {
  font-family: Avenir, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

@use container;
</style>
