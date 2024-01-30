import { DateSelectArg } from "@fullcalendar/core/index.js"
import { FullCalendarInterface } from "../interfaces/FullCalendar.interface"
import { createEventId } from "@/app/dashboard/@folder2/components/event-utils"

export namespace FullCalendarHelpers {
    /**
     * Accion al hacer click en un evento
     * @param clickInfo Evento seleccionado (no hace falta llamarlo)
     */
    export const handleEventClick = ( clickInfo: FullCalendarInterface.ClickInfoInterface ) => {
        if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'`)) {
          clickInfo.event.remove()
        }
    }
    /**
     * Accion al hacer click en una celda de fecha
     * @param selectInfo 
     */
    export const handleDateSelect = ( selectInfo: DateSelectArg ) => {
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
}