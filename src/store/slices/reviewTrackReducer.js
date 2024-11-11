import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    reviewTrackData: {
        items: [],
        totalCount: 0,
    },
};

const reviewTrackSlice = createSlice({
    name: "reviewTrack",
    initialState,
    reducers: {
        storeReviewTrackData: (state, action) => {
            state.reviewTrackData.items = [
                ...state.reviewTrackData.items,
                ...action.payload.items,
            ];
            state.reviewTrackData.totalCount = action.payload.totalCount;
        },
    },
});

export const { storeReviewTrackData } = reviewTrackSlice.actions;
export default reviewTrackSlice.reducer;
