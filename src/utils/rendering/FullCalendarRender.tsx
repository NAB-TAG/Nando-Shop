import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { FullCalendarInterface } from "../interfaces/FullCalendar.interface";

import SimpleTable from "@/components/tables/SimpleTable";
import { GroupForm } from "@/components/form/GroupsForm";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import { FullCalendarHelpers } from "../helpers/FullCalendarHelpers";
import { EventApi } from "@fullcalendar/core/index.js";
import { INITIAL_EVENTS, renderEventContent } from "@/app/dashboard/@folder2/components/event-utils";

export namespace FullCalendarRender {

    interface calendarProps  {
      weekendsVisible: boolean,
      currentEvents: EventApi[],
      oklch: boolean | Dispatch<SetStateAction<boolean>>
    }
    export const Calendar:React.FC<calendarProps> = ({ weekendsVisible, currentEvents, oklch }) => {
      const [events, setEvents] = useState<EventApi[]>([]);
      const handleEvents = (events: EventApi[]) => {
        setEvents(currentEvents)
        console.log(events)
      }
      return (
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
      )
    }

    export const ListEvents:React.FC<FullCalendarInterface.ListEventsInterface> = ({ currentEvents }) => {
      
        const handleSubmit = (values:{}) => {
            console.log(values)
        }
        
        return (
            <div className='demo-app-sidebar'>
         
                <h2>Tienes un total de {currentEvents.length} eventos.</h2>
        
                <GroupForm.searchFilter nameInput='search' nameSelect='filter' filterSelect={[{ id:1, name: "Titulo" },{ id:2, name: "Fecha" }]} handleSubmit={handleSubmit} initialValues={{search: "s", filter: "1"}}/>
        
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

    export const options:React.FC<FullCalendarInterface.OptionsInterface> = ({ handleWeekendsToggle, weekendsVisible }) => (
      <div className='demo-app-sidebar-section'>

        <div className="form-control">
          <label className="label cursor-pointer justify-start">
            <span className="label-text mr-4">Fines de semana</span> 
            <input type="checkbox" checked={weekendsVisible} className="checkbox checkbox-primary" onChange={ () => handleWeekendsToggle()}/>
          </label>
        </div>

      </div>
    )
}