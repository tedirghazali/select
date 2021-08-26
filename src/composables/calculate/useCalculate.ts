import { ref, computed } from 'vue'

export default function useCalculate(getQuantity: string = 'quantity', getPrice: string = 'price', getAmount: string = 'amount') {
  const setEntries = ref<any[]>([])
  const setRates = ref<any[]>([])
  
  const getEntries = computed<any[]>(() => {
    return setEntries.value.map((entry: any) => {
      entry[getAmount] = Number((Number(entry[getQuantity]) * Number(entry[getPrice])).toFixed(2))
      return entry
    })
  })
  
  const getSubTotal = computed<number>(() => {
    return (setEntries.value.length >= 1) ? Number(setEntries.value.map(entry => Number(entry[getQuantity]) * Number(entry[getPrice])).reduce((acc, val) => acc + val).toFixed(2)) : 0
  })
  
  const getTotal = computed<number>(() => {
    let setTotal = getSubTotal.value
    for(let rate of setRates.value) {
      if(rate.type === 'percent') {
        rate.amount = (Number(rate.amount) / 100) * Number(setTotal)
      }
      setTotal = (rate.calc === 'subtraction') ? Number(setTotal) - Number(rate.amount) : Number(setTotal) + Number(rate.amount)
    }
    return Number(setTotal.toFixed(2))
  })
  
  return {
    setEntries,
    setRates,
    getEntries,
    getSubTotal,
    getTotal
  }
}
