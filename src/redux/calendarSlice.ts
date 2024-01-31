import { EventApi } from "@fullcalendar/core/index.js";
import { UnknownAction, createSlice } from "@reduxjs/toolkit";

interface initialInterface {
    calendar_dashboard_events: {
        allDay: boolean,
        title: string,
        start: string, // Convert to string
        end: string, // Convert to string if end exists
        id: number
    }[]
}
const INITIAL_STATE: initialInterface = {
    calendar_dashboard_events: [{
        allDay: true,
        title: "",
        start: "", // Convert to string
        end: "", // Convert to string if end exists
        id: 1
    }]
}

export const calendarSlice = createSlice({
    name: "calendars",
    initialState: INITIAL_STATE,
    reducers: {
        updateCalendarDashboard: (state, action) => {
            // const events = action.payload;
            const events = action.payload.map((event:any) => {
                // Extraer solo la información necesaria del evento
                return {
                    allDay: event.allDay,
                    title: event.title,
                    start: event.start, // Convert to string
                    end: event.end, // Convert to string if end exists
                    id: event.id
                };
            });
            state.calendar_dashboard_events = events;
        },
    }
});

export const { updateCalendarDashboard } = calendarSlice.actions;
export default calendarSlice.reducer;
