import { ref, computed } from 'vue'
import { date as dt } from 'alga-js'

export default function useCalendar() {
  const setCalendarYear = ref<number>(0)
  const setCalendarMonth = ref<number>(0)
  const getCalendar = computed<string[]>(() => {
    return dt.calendar(setCalendarYear.value, setCalendarMonth.value)
  })
  
  const getDayNames = computed<string[]>(() => {
    return getCalendar.value.slice(0, 7)
  })
  
  const filterCalendarDate = (dateStr: string, charNum: number = 3) => {
    let dateVal: string = ''
    if(getDayNames.value.includes(dateStr)) {
      dateVal = dateStr.slice(0, charNum)
    } else {
      dateVal = dateStr.split('-')[2]
    }
    return dateVal
  }
  
  const getCalendarMonth = (dateStr: string) => {
    let dateVal: string = ''
    if(dateStr.includes('-')) {
      dateVal = dateStr.split('-')[1]
    }
    return dateVal
  }
  
  const checkCurrentCalendar = (dateStr: string) => {
    let dateVal: boolean = false
    if(getDayNames.value.includes(dateStr) || Number(getCalendarMonth(dateStr)) === setCalendarMonth.value) {
      dateVal = true
    }
    return dateVal
  }
  
  const checkCurrentDate = (dateStr: string) => {
    let dateVal: boolean = false
    if(Number(getCalendarMonth(dateStr)) === setCalendarMonth.value) {
      dateVal = true
    }
    return dateVal
  }
  
  return {
    setCalendarYear,
    setCalendarMonth,
    getCalendar,
    getDayNames,
    getCalendarMonth,
    filterCalendarDate,
    checkCurrentCalendar,
    checkCurrentDate
  }
}
