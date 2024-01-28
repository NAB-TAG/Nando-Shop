'use client'
import React, { useEffect, useState } from 'react'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { INITIAL_EVENTS, createEventId, renderEventContent, renderSidebarEvent } from './event-utils'
import { Calendar, DateSelectArg, EventApi } from '@fullcalendar/core/index.js'
import { FullCalendarHelpers } from '@/utils/helpers/FullCalendarHelpers'
import SimpleTable from '@/components/tables/SimpleTable'
import { GroupForm } from '@/components/form/GroupsForm'

const CalendarFolder2 = () => {
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState<EventApi[]>([]);
  const [oklch, setOklch] = useState<boolean>(() => {
    if (typeof CSS !== 'undefined' && CSS.supports) {
      return CSS.supports('color', 'oklch(0 0% 0)');
    }
    return false;
  });

  const handleWeekendsToggle = () => {
    setWeekendsVisible(!weekendsVisible)
  }
  const handleEvents = ( events: EventApi[] ) => {
    setCurrentEvents(events)
  }
  
  
  return (
    <div className='demo-app'>
      <div role="tablist" className="tabs tabs-lifted mb-10">
          <input type="radio" name="my_tabs_calendar" role="tab" className="tab" aria-label="Eventos" />
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6 w-full h-96">
              <h4 className="text-2xl text-center">Lista de eventos</h4>
              
              <Sidebar handleWeekendsToggle={handleWeekendsToggle} currentEvents={currentEvents}/>
          </div>
      
          <input type="radio" name="my_tabs_calendar" role="tab" className="tab" aria-label="Calendario" defaultChecked />
          <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6 ">
              <h4 className="text-2xl text-center">Calendario</h4>
              <div className='demo-app-sidebar-section'>
        

          <div className="form-control">
            <label className="label cursor-pointer justify-start">
              <span className="label-text mr-4">Fines de semana</span> 
              <input type="checkbox" checked={weekendsVisible} className="checkbox checkbox-primary" onChange={ () => handleWeekendsToggle()}/>
            </label>
          </div>

      </div>
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
                  select={handleDateSelect}
                  eventContent={renderEventContent} // custom render function
                  eventClick={handleEventClick}
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

interface SidebarProps {
  handleWeekendsToggle: () => void,
  currentEvents: EventApi[]
}
const Sidebar: React.FC<SidebarProps> = ({ handleWeekendsToggle, currentEvents}) => {
  
  const handleSubmit = (values:{}) => {
    console.log(values)
  }

  return (
    <div className='demo-app-sidebar'>
 
        <h2>Tienes un total de {currentEvents.length} eventos.</h2>

        <GroupForm.searchFilter nameInput='search-dashboard-events' nameSelect='filter-dashboard-events' filterSelect={[{ id:1, name: "Titulo" }]} handleSubmit={handleSubmit} initialValues={{}}/>

        <div className="overflow-y-auto">
          <SimpleTable headerCols={['Titulo','Inicio','Final']}>
            {currentEvents.map((event, index) => {
              return(
                <tr className="" key={index}>
                  <th>{event.title}</th>
                  <td>{event.startStr}</td>
                  { event.endStr && 
                    <td>{event.endStr}</td>
                  }
                </tr>
              )
            })}
          </SimpleTable>
          
              
            
        </div>

    
    </div>
  )
}


const handleDateSelect = ( selectInfo: DateSelectArg ) => {
  let title = prompt('Please enter a new title for your event')
  let calendarApi = selectInfo.view.calendar
  

  calendarApi.unselect() // clear date selection

  if (title) {
    calendarApi.addEvent({
      id: createEventId(),
      title,
      start: selectInfo.startStr,
      end: selectInfo.endStr,
      allDay: selectInfo.allDay
    });
    
  }
}

const handleEventClick = ( clickInfo: FullCalendarHelpers.ClickInfoInterface ) => {
  if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
    clickInfo.event.remove()
  }
}
export default CalendarFolder2