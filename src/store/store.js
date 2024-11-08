import {configureStore} from '@reduxjs/toolkit'
import userReducer from './slices/userReducer.js'
import reviewArtistReducer from './slices/reviewArtistReducer.js'
import reviewAlbumReducer from './slices/reviewAlbumReducer.js'
import reviewMusicReducer from './slices/reviewMusicReducer.js'
export default configureStore({
    reducer: {
        user: userReducer,
        reviewArtist: reviewArtistReducer,
        reviewAlbum: reviewAlbumReducer,
        reviewMusic: reviewMusicReducer,
    },
},)