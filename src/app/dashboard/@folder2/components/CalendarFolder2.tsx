'use client'
import React, { useEffect, useState } from 'react'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId, renderEventContent, renderSidebarEvent } from './event-utils'
import { Calendar, DateSelectArg, EventApi } from '@fullcalendar/core/index.js'
import { FullCalendarInterface } from '@/utils/interfaces/FullCalendar.interface'
import SimpleTable from '@/components/tables/SimpleTable'
import { GroupForm } from '@/components/form/GroupsForm'
import { FullCalendarHelpers } from '@/utils/helpers/FullCalendarHelpers'
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
  const handleEvents = ( events: EventApi[] ) => {
    console.log(events)
    setCurrentEvents(events)
  }
  
  
  return (
    <div className='demo-app'>
      {/* <Tab 
        name="calendar" 
        tab_0={ <><FullCalendarRender.ListEvents currentEvents={currentEvents}/></> } 
        name_0="Eventos" 
        tab_1={<p>2do</p>} 
        name_1="2do"
      /> */}

      <div role="tablist" className="tabs tabs-lifted mb-10">
          <input type="radio" name="my_tabs_calendar" role="tab" className="tab" aria-label="Eventos" />
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6 w-full h-96">
              <h4 className="text-2xl text-center">Lista de eventos</h4>
              
              <FullCalendarRender.ListEvents currentEvents={currentEvents}/>
          </div>
      
          <input type="radio" name="my_tabs_calendar" role="tab" className="tab" aria-label="Calendario" defaultChecked />
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6 ">
              <h4 className="text-2xl text-center">Calendario</h4>

              <FullCalendarRender.options handleWeekendsToggle={ handleWeekendsToggle } weekendsVisible={ weekendsVisible }/>

              <div className='demo-app-main'>
                <FullCalendar
                  plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
                  headerToolbar={{
                    left: 'prev,next today',
                    center: '',
                    right: 'title'
                  }}
                  eventColor={ `${ oklch ? 'oklch(var(--s))' : '#378006'}` }
                  buttonText={{
                    today:    'Actual',
                    month:    'Mes',
                    list:     'Lista'
                  }}
                  moreLinkText={"ver"}
                  droppable={true}
                  dragScroll={true}
                  dayHeaderClassNames={`${oklch ? 'bg-primary text-base-100' : ''}`}
                  titleFormat={{ year: 'numeric', month: '2-digit' }   }
                  locale="es"
                  initialView='dayGridMonth'
                  editable={true}
                  selectable={true}
                  selectMirror={true}
                  dayMaxEvents={true}
                  weekends={weekendsVisible}
                  initialEvents={INITIAL_EVENTS} // alternatively, use the `events` setting to fetch from a feed
                  select={FullCalendarHelpers.handleDateSelect}
                  eventContent={renderEventContent} // custom render function
                  eventClick={FullCalendarHelpers.handleEventClick}
                  eventsSet={handleEvents} // called after events are initialized/added/changed/removed
                  /* you can update a remote database when these fire:
                  eventAdd={function(){}}
                  eventChange={function(){}}
                  eventRemove={function(){}}
                  */
                />
              </div>
          </div>
      
      </div>  

    </div>
  )
}
export default CalendarFolder2

// 'use client'
// import React, { useEffect, useState } from 'react'

// import FullCalendar from '@fullcalendar/react'
// import dayGridPlugin from '@fullcalendar/daygrid'
// import timeGridPlugin from '@fullcalendar/timegrid'
// import interactionPlugin from '@fullcalendar/interaction'
// import { INITIAL_EVENTS, createEventId, renderEventContent, renderSidebarEvent } from './event-utils'
// import { Calendar, DateSelectArg, EventApi } from '@fullcalendar/core/index.js'
// import { FullCalendarInterface } from '@/utils/interfaces/FullCalendar.interface'
// import SimpleTable from '@/components/tables/SimpleTable'
// import { GroupForm } from '@/components/form/GroupsForm'
// import { FullCalendarHelpers } from '@/utils/helpers/FullCalendarHelpers'
// import { FullCalendarRender } from '@/utils/rendering/FullCalendarRender'
// import Tab from '@/components/tabs/Tab'
// import useOklchSupport from '@/utils/hooks/useOklchSupport'

// const CalendarFolder2 = () => {
//   const [weekendsVisible, setWeekendsVisible] = useState(true);
//   const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);
//   // const [ oklch, setOklch ] = useOklchSupport();

//   const handleWeekendsToggle = () => {
//     setWeekendsVisible(!weekendsVisible)
//   }
//   const handleEvents = ( events: EventApi[] ) => {
    
//     setCurrentEvents(events)
//   }
  
  
//   return (
//     <div className='demo-app'>
//       <Tab 
//         name="calendar" 
//         name_1="Calendario"
//         tab_1={<><FullCalendarRender.Calendar oklch={true} weekendsVisible={ weekendsVisible } currentEvents={ currentEvents }/></>} 
//         name_0="Eventos" 
//         tab_0={ <><FullCalendarRender.ListEvents currentEvents={currentEvents}/></> } 
//       />

//       </div>
//   )
// }
// export default CalendarFolder2