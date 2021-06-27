import { ref, computed } from 'vue'
import { date as dt, number as num } from 'alga-js'

export default function handleCalendar(getYearRef: any = null, getMonthRef: any = null, locale: any = {value: 'en-US'}, weekDay: any = {value: 'short'}) {
  const setYearRef = ref<number>(0)
  const setMonthRef = ref<number>(0)
  
  setYearRef.value = (getYearRef !== null && getYearRef.value !== 0) ? getYearRef.value : Number(new Date().getFullYear())
  setMonthRef.value = (getMonthRef !== null && getMonthRef.value !== 0) ? getMonthRef.value : Number(new Date().getMonth()) + 1
  
  const startYear = ref<number>(0)
  const endYear = ref<number>(0)
  const getRangeYears = computed<number[]>(() => {
    const getStartYear = (startYear.value !== 0) ? startYear.value : 1980
    const getEndYear = (endYear.value !== 0) ? endYear.value : Number(new Date().getFullYear()) + 5
    return num.loop(getStartYear, getEndYear)
  })
  const getMonthNames: string[] = dt.months()
  
  const handleMonthControl = (getControlArg: string) => {
    let monthNum: number = 1
    if(getControlArg === 'prev') {
      if(setMonthRef.value > 1 && setMonthRef.value <= 12) {
        monthNum = setMonthRef.value - 1
      } else if(setMonthRef.value === 1) {
        monthNum = 12
        setYearRef.value = setYearRef.value - 1
      }
    } else if(getControlArg === 'next') {
      if(setMonthRef.value >= 1 && setMonthRef.value < 12) {
        monthNum = setMonthRef.value + 1
      } else if(setMonthRef.value === 12) {
        monthNum = 1
        setYearRef.value = setYearRef.value + 1
      }
    }
    setMonthRef.value = monthNum
  }
  
  const handleYearControl = (getControlArg: string) => {
    if(getControlArg === 'prev') {
      setYearRef.value = setYearRef.value - 1
    } else if(getControlArg === 'next') {
      setYearRef.value = setYearRef.value + 1
    }
  }
  
  const handleWeekControl = (getControlArg: string) => {
    let weekNum: number = 1
    if(getControlArg === 'prev') {
    
    } else if(getControlArg === 'next') {
    
    }
  }
  
  const handleDateControl = (getControlArg: string) => {
    let dateNum: number = 1
    if(getControlArg === 'prev') {
    
    } else if(getControlArg === 'next') {
    
    }
  }
  
  return {
    setYearRef,
    setMonthRef,
    startYear,
    endYear,
    getRangeYears,
    getMonthNames,
    handleMonthControl,
    handleYearControl
  }
}
