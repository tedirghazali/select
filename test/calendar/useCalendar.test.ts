import { mount } from '@vue/test-utils'
import useCalendar from '../../src/composables/calendar/useCalendar'

const CalendarComponent = {
  template: `
    <div id="daynames">{{ weekDays }}</div>
  `,
  setup() {
    const { 
      setYearRef,
      setMonthRef,
      setDayRef,
      weekDays,
      prevDays,
      monthDays,
      nextDays,
      beforeDays,
      afterDays
    } = useCalendar()
    
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
}

test('Testing useCalendar composable helper', () => {
  const wrapper = mount(CalendarComponent)
  
  const daynames = wrapper.get('#daynames')
  expect(JSON.parse(daynames.text())).toEqual(["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"])
})
