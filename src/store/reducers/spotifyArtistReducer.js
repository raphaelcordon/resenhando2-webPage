import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const spotifyArtistSlice = createSlice({
    name: "spotifyArtist",
    initialState,
    reducers: {
        addSpotifyArtist: (state, {payload}) => {
            const isArtist = state.some(item => item.id === payload.id);
            if (!isArtist) {
                state.push(payload);
            }
        },
    },
});

export const { addSpotifyArtist, getSpotityArtist, } = spotifyArtistSlice.actions;
export default spotifyArtistSlice.reducer;