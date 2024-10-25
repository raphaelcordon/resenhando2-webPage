import {configureStore} from '@reduxjs/toolkit'
import userReducer from './slices/userReducer.js'
export default configureStore({
    reducer: {
        user: userReducer,
    },
},)