import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    reviewArtistData: {
        items: [],
        totalCount: 0,
    },
};

const reviewArtistSlice = createSlice({
    name: "reviewArtist",
    initialState,
    reducers: {
        storeReviewArtistData: (state, action) => {
            state.reviewArtistData.items = [
                ...state.reviewArtistData.items,
                ...action.payload.items,
            ];
            state.reviewArtistData.totalCount = action.payload.totalCount;
        },
    },
});

export const { storeReviewArtistData } = reviewArtistSlice.actions;
export default reviewArtistSlice.reducer;
