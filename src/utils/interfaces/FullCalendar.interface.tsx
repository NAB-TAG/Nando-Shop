import { EventApi } from "@fullcalendar/core/index.js"

export namespace FullCalendarInterface {
    export interface SelectInfo{
        start: {},
        end: string,
        startStr: string,
        endStr: string,
        allDay: boolean,
        jsEvent: {},
        view: {}
    }

    export interface ClickInfoInterface {
        event: { 
            title:string, 
            remove: any 
        }
    }

    export interface ListEventsInterface {
        currentEvents: EventApi[]
    }

    export interface OptionsInterface {
        weekendsVisible: boolean,
        handleWeekendsToggle: () => void
    }

    
}