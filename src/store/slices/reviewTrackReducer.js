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
            const newItems = action.payload.items.filter(
                (newItem) =>
                    !state.reviewTrackData.items.some(
                        (existingItem) => existingItem.id === newItem.id
                    )
            );
            state.reviewTrackData.items = [...newItems, ...state.reviewTrackData.items]; // Prepend new items
            state.reviewTrackData.totalCount += newItems.length; // Adjust total count
        },
    },
});

export const { storeReviewTrackData } = reviewTrackSlice.actions;
export default reviewTrackSlice.reducer;
