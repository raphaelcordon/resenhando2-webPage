import {configureStore} from '@reduxjs/toolkit'
import userReducer from './slices/userReducer.js'
import reviewArtistReducer from './slices/reviewArtistReducer.js'
import reviewAlbumReducer from './slices/reviewAlbumReducer.js'
import reviewTrackReducer from './slices/reviewTrackReducer.js'
export default configureStore({
    reducer: {
        user: userReducer,
        reviewArtist: reviewArtistReducer,
        reviewAlbum: reviewAlbumReducer,
        reviewTrack: reviewTrackReducer,
    },
},)