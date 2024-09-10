import {combineReducers, configureStore} from '@reduxjs/toolkit'
import sideBarSlice from './slice/main-page/side-bar-catalog'
import categorySlice from "@/store/slice/category-page/category-slice";

const rootReducer = combineReducers({sideBarSlice, categorySlice});
export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
    })
}

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']