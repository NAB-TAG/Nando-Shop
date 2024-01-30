import { EventApi } from "@fullcalendar/core/index.js";
import { UnknownAction, createSlice } from "@reduxjs/toolkit";

interface initialInterface {
    calendar_dashboard_events: any[]
}
const INITIAL_STATE: initialInterface = {
    calendar_dashboard_events: [{}]
}

export const calendarSlice = createSlice({
    name: "calendars",
    initialState: INITIAL_STATE,
    reducers: {
        updateCalendarDashboard: (state, action) => {
            const events = action.payload; // Suponiendo que payload es un array de EventApi
            state.calendar_dashboard_events = events;
        },
    }
});

export const { updateCalendarDashboard } = calendarSlice.actions;
export default calendarSlice.reducer;
