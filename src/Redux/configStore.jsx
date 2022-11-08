import { configureStore } from '@reduxjs/toolkit'
import BaiTapXucXacReducer from '../Redux/BaiTapXucXacReducer'
import BaiTapOTTReducer from './BaiTapOTTReducer'

export const store = configureStore({
    reducer: {
        BaiTapXucXacReducer,
        BaiTapOTTReducer,
    }
})