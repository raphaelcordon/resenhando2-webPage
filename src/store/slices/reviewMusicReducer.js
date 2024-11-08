import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    reviewMusicData: {
        items: [],
        totalCount: 0,
    },
};

const reviewMusicSlice = createSlice({
    name: "reviewMusic",
    initialState,
    reducers: {
        storeReviewMusicData: (state, action) => {
            state.reviewMusicData.items = [
                ...state.reviewMusicData.items,
                ...action.payload.items,
            ];
            state.reviewMusicData.totalCount = action.payload.totalCount;
        },
    },
});

export const { storeReviewMusicData } = reviewMusicSlice.actions;
export default reviewMusicSlice.reducer;
