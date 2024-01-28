export namespace FullCalendarHelpers {
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
}