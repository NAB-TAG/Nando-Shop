import { configureStore } from '@reduxjs/toolkit'
import calendarReducer from './calendarSlice'


export const store = configureStore({
    reducer: {
        calendars: calendarReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch