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
import { useDispatch, useSelector } from "react-redux";
import { updateCalendarDashboard } from "@/redux/calendarSlice";
import { RootState } from "@/redux/store";
import Highlighter from "react-highlight-words";

export namespace FullCalendarRender {

    interface calendarProps  {
      weekendsVisible: boolean,
      currentEvents: EventApi[],
      oklch: boolean | Dispatch<SetStateAction<boolean>>
    }
    export const Calendar:React.FC<calendarProps> = ({ weekendsVisible, currentEvents, oklch }) => {

      const [events, setEvents] = useState<EventApi[]>([]);

      const calendarEvents = useSelector((state: RootState) => state.calendars.calendar_dashboard_events)
      const dispatch = useDispatch()

      const handleEvents = (events: EventApi[]) => {
        // console.log(currentEvents)
        setEvents(events)

        const eventosSerializados = events.map((evento: EventApi) => ({
          allDay: evento.allDay,
          title: evento.title,
          start: evento.startStr,
          end: evento.endStr,
          id: evento.id
      }));
        
        dispatch(updateCalendarDashboard(eventosSerializados))
        
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
            // alternatively, use the `events` setting to fetch from a feed
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
      // Saco el store de redux
      const calendarEvents = useSelector((state: RootState) => state.calendars.calendar_dashboard_events)
      const [ events, setEvents ] = useState(calendarEvents);
      const [ searchWord, setSearchWord ] = useState('')
      // Cada vez que el store cambie, setea el state
      useEffect(() => {
        setEvents(calendarEvents)
      }, [calendarEvents])
      
      // Buscador
      const handleSubmit = (values:{search?:string , filter?: string}) => {
          let search = values.search ? values.search:'';
          let filter = values.filter ? values.filter:'1';
            
          let result;
          if (filter == "1") {
            result = calendarEvents.filter((object) => object.title.toLowerCase().includes(search)  )
            setSearchWord(search)
          }else{
            result = calendarEvents.filter((object) => object.start.toLowerCase().includes(search)||object.end.toLowerCase().includes(search)   )
            setSearchWord(search)
          }
          setEvents(result)
      }
      
        return (
            <div className='demo-app-sidebar'>
         
                <h2>Tienes un total de {events.length} eventos.</h2>
        
                <GroupForm.searchFilter nameInput='search' nameSelect='filter' filterSelect={[{ id:1, name: "Titulo" },{ id:2, name: "Fecha" }]} handleSubmit={handleSubmit} initialValues={{search: "", filter: "1"}}/>
        
                <div className="overflow-y-auto">
                  <SimpleTable headerCols={['Titulo','Inicio','Final']}>
                    {
                    events.length > 0 ?
                    events.map((event, index) => {
                      return(
                        <tr className="" key={index}>
                          <th>
                            <Highlighter
                              highlightClassName="YourHighlightClass" // Define your custom highlight class
                              searchWords={[searchWord]}
                              autoEscape={true}
                              textToHighlight={ event.title } // Replace this with your text
                            />
                          </th>
                          <td><Highlighter
                              highlightClassName="YourHighlightClass" // Define your custom highlight class
                              searchWords={[searchWord]}
                              autoEscape={true}
                              textToHighlight={ event.start } // Replace this with your text
                            />
                          </td>
                          { event.end && 
                            <td>
                              <Highlighter
                              highlightClassName="YourHighlightClass" // Define your custom highlight class
                              searchWords={[searchWord]}
                              autoEscape={true}
                              textToHighlight={ event.end } // Replace this with your text
                            />
                            </td>
                          }
                        </tr>
                      )
                    })
                    :
                    
                      <tr className="" >
                        <th>No se encontraron resultados...</th>
                        
                      </tr>
                    
                  }
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