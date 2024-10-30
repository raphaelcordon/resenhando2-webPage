import { createSlice } from "@reduxjs/toolkit"

export const reviewArtistSlice = createSlice({
    name: "reviewArtist",
    initialState: {
        reviewArtistData: [],
    },
    reducers: {
        storeReviewArtistData: (state, action) => {
            state.reviewArtistData = action.payload;
        },
    },
});

export const { storeReviewArtistData } = reviewArtistSlice.actions;
export default reviewArtistSlice.reducer;