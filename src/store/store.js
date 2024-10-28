import {configureStore} from '@reduxjs/toolkit'
import userReducer from './slices/userReducer.js'
import reviewReducer from './slices/reviewReducer.js'
export default configureStore({
    reducer: {
        user: userReducer,
        review: reviewReducer,
    },
},)