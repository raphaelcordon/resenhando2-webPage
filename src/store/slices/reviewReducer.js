import { createSlice } from "@reduxjs/toolkit"

export const reviewSlice = createSlice({
    name: "review",
    initialState: {
        reviewData: [],
    },
    reducers: {
        storeReviewData: (state, action) => {
            state.reviewData = action.payload;
        },
    },
});

export const { storeReviewData } = reviewSlice.actions;
export default reviewSlice.reducer;