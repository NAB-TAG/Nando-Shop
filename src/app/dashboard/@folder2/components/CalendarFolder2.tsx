'use client'
import React, { useState } from 'react'
import { EventApi } from '@fullcalendar/core/index.js'
import { FullCalendarRender } from '@/utils/rendering/FullCalendarRender'
import Tab from '@/components/tabs/Tab'
import useOklchSupport from '@/utils/hooks/useOklchSupport'

const CalendarFolder2 = () => {
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);
  const [ oklch, setOklch ] = useOklchSupport();

  const handleWeekendsToggle = () => {
    setWeekendsVisible(!weekendsVisible)
  }  
  
  return (
    <div className='demo-app'>
      <Tab 
        name="calendar" 
        tab_0={<>
          <FullCalendarRender.options handleWeekendsToggle={ handleWeekendsToggle } weekendsVisible={ weekendsVisible }/>
          <FullCalendarRender.Calendar currentEvents={currentEvents} oklch={oklch} weekendsVisible={weekendsVisible} />
        </>} 
        name_0="Calendario"
        tab_1={ <><FullCalendarRender.ListEvents currentEvents={currentEvents}/></> } 
        name_1="Eventos" 
      />
    </div>
  )
}
export default CalendarFolder2
