import { ref } from 'vue'

export default function index(arrArg: any[], options: any = { key: 'id', value: 0}) => {
  const getArray = ref<any[]>([])
  const resultNum = ref<number>(0)
  
  getArray.value = arrArg
  resultNum.value = -1
  
  if('key' in options && 'value' in options) {
    resultNum = (getArray.value.length >= 1) ? getArray.value.findIndex(obj => obj[options.key] === options.value) : -1
  } else {
    if(getArray.value.length >= 1) {
      resultNum = getArray.value.findIndex(obj => {
        for(const [key, val] of Object.entries(options)) {
          if(key in obj && obj[key] === val) {
            return true
          }
        }
      })
    }
  }
  
  return resultNum
}
