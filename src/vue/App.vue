<script setup lang="ts">
import { ref } from 'vue'
import SelectBox from './components/SelectBox.vue'
import ComboBox from './components/ComboBox.vue'
import ListBox from './components/ListBox.vue'
import TagBox from './components/TagBox.vue'
import CategoryBox from './components/CategoryBox.vue'
import { strOptions, objOptions } from './models/options'

const arrayOfStrings = strOptions()
const arrayOfObjects = objOptions()

const str = ref<string>('')
const obj = ref<any>({})
const id = ref<string>('')
const num = ref<number>(1)
const arrOfStr = ref<string[]>([])
const arrOfObj = ref<any[]>([])
const comboStr = ref<string>('')
const comboObj = ref<any>({})

const testChange = (value: any, option: any) => {
  console.log('Test select change')
  console.log(value)
  console.log(option)
}

const testAdd = (value: string) => {
  console.log('Test add category')
  arrayOfStrings.push(value)
  console.log(value)
}

const testSearch = (value: string) => {
  console.log('Search: '+value)
}
</script>

<template>
  <div class="container mt-20px mb-20px">
    <h3>SelectBox (String)</h3>
    <SelectBox v-model="str" :options="arrayOfStrings" :size="5" @search="testSearch" :defaultOption="true" :loading="true" />
    <p>Your selected value is in a string: {{ str }}</p>
    <p><br/></p>
    <h3>SelectBox (Object)</h3>
    <SelectBox v-model="obj" :options="arrayOfObjects" :size="10" @search="testSearch" :defaultOption="true" />
    <p>Your selected value is in an object: {{ obj }}</p>
    <p><br/></p>
    <h3>SelectBox (String value from array of objects)</h3>
    <SelectBox v-model="id" prop="value" datatype="string" dataprop="id" :options="arrayOfObjects" :size="10" @change="testChange" />
    <p>Your selected value is in a string from array of objects: {{ id }}</p>
    <p><br/></p>
    <h3>SelectBox (Number type of value from array of objects)</h3>
    <SelectBox v-model="num" prop="value" datatype="number" dataprop="id" :options="arrayOfObjects" :size="10" @change="testChange" />
    <p>Your selected value is in a number from array of objects: {{ num }}</p>
    <p><br/></p>
    <h3>SelectBox (Array of Strings)</h3>
    <SelectBox v-model="arrOfStr" :options="arrayOfStrings" :size="5" :up="true" />
    <p>Your selected value is in multiple strings: {{ arrOfStr }}</p>
    <p><br/></p>
    <h3>SelectBox (Array of Objects)</h3>
    <SelectBox v-model="arrOfObj" :options="arrayOfObjects" :size="5" :up="true" />
    <p>Your selected value is in multiple objects: {{ arrOfObj }}</p>
    
    <p><br /><br /></p>
    <h3>ComboBox Autocomplete (String)</h3>
    <ComboBox v-model="comboStr" :options="arrayOfStrings" :size="5" @search="testSearch" />
    <p>You choose the value in a string: {{ comboStr }}</p>
    <p><br/></p>
    <h3>ComboBox Autocomplete (Object)</h3>
    <ComboBox v-model="comboObj" :options="arrayOfObjects" :size="5" :select="true" :emptySearch="true" />
    <p>You choose the value in an object: {{ comboObj }}</p>
    <p><br /></p>
    <h3>ComboBox Selection</h3>
    <ComboBox v-model="comboStr" :options="arrayOfStrings" :size="5" :select="true" @change="testChange" />
    <p>You choose the value in a string: {{ comboStr }}</p>
    
    <p><br /><br /></p>
    <h3>ListBox (String)</h3>
    <ListBox v-model="str" :options="arrayOfStrings" :size="5" @search="testSearch" />
    <p>Your selected value is in a string: {{ str }}</p>
    <p><br/></p>
    <h3>ListBox (Object)</h3>
    <ListBox v-model="obj" :options="arrayOfObjects" :size="5" />
    <p>Your selected value is in an object: {{ obj }}</p>
    <p><br/></p>
    <h3>ListBox (String value from array of objects)</h3>
    <ListBox v-model="id" prop="value" datatype="string" dataprop="id" :options="arrayOfObjects" :size="5" @change="testChange" />
    <p>Your selected value is in an object: {{ id }}</p>
    <p><br/></p>
    <h3>ListBox (Array of Strings)</h3>
    <ListBox v-model="arrOfStr" :options="arrayOfStrings" :size="5" />
    <p>Your selected value is in multiple strings: {{ arrOfStr }}</p>
    <p><br/></p>
    <h3>ListBox (Array of Objects)</h3>
    <ListBox v-model="arrOfObj" :options="arrayOfObjects" :size="5" />
    <p>Your selected value is in multiple objects: {{ arrOfObj }}</p>
    
    <p><br /><br /></p>
    <h3>TagBox (Only Array of Strings)</h3>
    <TagBox v-model="arrOfStr" :options="arrayOfStrings" :size="5" />
    <p>Your selected value is in a string: {{ arrOfStr }}</p>
    <!--<p><br/></p>
    <h3>TagBox (Objects)</h3>
    <TagBox v-model="arrOfObj" :options="arrayOfStrings" :size="5" />
    <p>Your selected value is in string: {{ arrOfObj }}</p>-->
    
    <p><br /><br /></p>
    <h3>CategoryBox (Array of Strings)</h3>
    <CategoryBox v-model="arrOfStr" :options="arrayOfStrings" :size="25" @add="testAdd" />
    <p>Your selected value is in multiple strings: {{ arrOfStr }}</p>
    <p><br/></p>
    <h3>CategoryBox (Array of Objects)</h3>
    <CategoryBox v-model="arrOfObj" :options="arrayOfObjects" :size="50" @search="testSearch" />
    <p>Your selected value is in multiple objects: {{ arrOfObj }}</p>
    
    <p><br /><br /></p>
  </div>
</template>
