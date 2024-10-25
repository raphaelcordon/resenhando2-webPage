import {configureStore} from '@reduxjs/toolkit'
import userReducer from '../store/slices/userSlice.js'
export default configureStore({
    reducer: {
        user: userReducer,
    },
},)