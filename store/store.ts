import {combineReducers, configureStore} from '@reduxjs/toolkit'
import sideBarSlice from './slice/main-page/side-bar-catalog'

const rootReducer = combineReducers({sideBarSlice});
export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']