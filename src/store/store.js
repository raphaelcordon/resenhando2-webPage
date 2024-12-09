import {configureStore} from '@reduxjs/toolkit'
import userReducer from './reducers/userReducer'
import reviewArtistReducer from './reducers/reviewArtistReducer'
import reviewAlbumReducer from './reducers/reviewAlbumReducer'
import reviewTrackReducer from './reducers/reviewTrackReducer'
import spotifyArtistReducer from './reducers/spotifyArtistReducer'
export default configureStore({
    reducer: {
        user: userReducer,
        reviewArtist: reviewArtistReducer,
        reviewAlbum: reviewAlbumReducer,
        reviewTrack: reviewTrackReducer,
        spotifyArtistData: spotifyArtistReducer,
    },
},)