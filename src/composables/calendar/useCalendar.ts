import { ref, computed } from 'vue'
import { date as dt } from 'alga-js'

export default function useCalendar(getYearRef: any = null, getMonthRef: any = null, getDayRef: any = null, locale: any = {value: 'en-US'}, weekDay: any = {value: 'short'}) {
  const setYearRef = ref<number>(0)
  const setMonthRef = ref<number>(0)
  const setDayRef = ref<number>(0)
  
  setYearRef.value = (getYearRef !== null && getYearRef.value !== 0) ? getYearRef.value : Number(new Date().getFullYear())
  setMonthRef.value = (getMonthRef !== null && getMonthRef.value !== 0) ? getMonthRef.value : Number(new Date().getMonth()) + 1
  setDayRef.value = (getDayRef !== null && getDayRef.value !== 0) ? getDayRef.value : Number(new Date().getDate())
  
  const weekDays = computed<string[]>(() => {
    return dt.days(locale.value, weekDay.value)
  })
    
  const prevDays = computed<number[]>(() => {
    const getFirstDay = Number(new Date(setYearRef.value, Number(setMonthRef.value) - 1, 1).getDay())
    let restPrevDays = []
    if(getFirstDay > 0) {
      const getPrevDay = Number(dt.daysInMonth(setYearRef.value, Number(setMonthRef.value) - 1)) - (getFirstDay - 1)
      for(let i = getPrevDay; i <= Number(dt.daysInMonth(setYearRef.value, Number(setMonthRef.value) - 1)); i++) {
        restPrevDays.push(i)
      }
    }
      
    return restPrevDays
  })
    
  const monthDays = computed<number>(() => {
    return dt.daysInMonth(setYearRef.value, setMonthRef.value)
  })
    
  const nextDays = computed<number[]>(() => {
    const getLastDay = Number(new Date(setYearRef.value, Number(setMonthRef.value) - 1, Number(dt.daysInMonth(setYearRef.value, setMonthRef.value))).getDay())
    let restNextDays = []
    if(getLastDay < 6) {
      const getNextDay = 6 - getLastDay
      for(let i = 1; i <= getNextDay; i++) {
        restNextDays.push(i)
      }
    }
      
    return restNextDays
  })
  
  const getCurrentDay: number = Number(new Date(setYearRef.value, Number(setMonthRef.value) - 1, setDayRef.value).getDay())
    
  const beforeDays = computed<number[]>(() => {
    let restBeforeDays = []
    if(getCurrentDay > 0) {
      const getBeforeDay = getCurrentDay + 1
      for(let i = 1; i < getBeforeDay; i++) {
        restBeforeDays.push(dt.subtractDate(new Date(setYearRef.value, Number(setMonthRef.value) - 1, setDayRef.value), i).valueOf())
      }
    }
      
    return restBeforeDays
  })
    
  const afterDays = computed<number[]>(() => {
    let restAfterDays = []
    if(getCurrentDay < 6) {
      const getAfterDay = 6 - getCurrentDay
      for(let i = 1; i <= getAfterDay; i++) {
        restAfterDays.push(dt.subtractDate(new Date(setYearRef.value, Number(setMonthRef.value) - 1, setDayRef.value), i).valueOf())
      }
    }
      
    return restAfterDays
  })
  
  return {
    setYearRef,
    setMonthRef,
    setDayRef,
    weekDays,
    prevDays,
    monthDays,
    nextDays,
    beforeDays,
    afterDays
  }
}
