import { DateSelectArg } from "@fullcalendar/core/index.js"
import { FullCalendarInterface } from "../interfaces/FullCalendar.interface"
import { createEventId } from "@/app/dashboard/@folder2/components/event-utils"
import Swal from 'sweetalert2'
import { SweetAlertHelper } from "./SweetAlertHelpers"
export namespace FullCalendarHelpers {
    /**
     * Accion al hacer click en un evento
     * @param clickInfo Evento seleccionado (no hace falta llamarlo)
     */
    export const handleEventClick = ( clickInfo: FullCalendarInterface.ClickInfoInterface ) => {
      // Manda un mensaje de alerta para preconfirmar la siguiente accion
      SweetAlertHelper.confirmer('success', `Estas seguro de eliminar el evento "${clickInfo.event.title}"?`, {
        showCancelButton: true,
        cancelButtonText: "Cancelar",
        confirmButtonText: "Borrar",
      },
        () => {
          clickInfo.event.remove();
          SweetAlertHelper.normal('success', "El evento fue borrado")
        }
      )
    }
    /**
     * Accion al hacer click en una celda de fecha
     * @param selectInfo 
     */
    export const handleDateSelect = ( selectInfo: DateSelectArg ) => {
      
      let calendarApi = selectInfo.view.calendar
      
      SweetAlertHelper.fetch(
        'question',
        'Escribe el nombre para tu evento', 
        {
          input: "text",
          inputValidator: (value: string) => {
            return value ? null : '¡Por favor, ingrese un valor válido!';
          },
          confirmButtonText: "Crear un Evento",
          cancelButtonText: "Cancelar",
        }, 
        async (title) => {
          // Puede ser una llamada para la api, en este caso la estoy combinando con FullCalendar para crear un evento
          calendarApi.unselect()
          if (title) {
            calendarApi.addEvent({
              id: createEventId(),
              title,
              start: selectInfo.startStr,
              end: selectInfo.endStr,
              allDay: selectInfo.allDay
            }); 
          }
        },
        () => {
          // Si todo esta ok manda una alerta de que fue creada con exito
          SweetAlertHelper.normal('success', "El evento fue creado")
        }
      )
    }
}