import {configureStore} from '@reduxjs/toolkit'
import userReducer from './slices/userReducer.js'
import reviewArtistReducer from './slices/reviewArtistReducer.js'
export default configureStore({
    reducer: {
        user: userReducer,
        reviewArtist: reviewArtistReducer,
    },
},)