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
            const newItems = action.payload.items.filter(
                (newItem) =>
                    !state.reviewArtistData.items.some(
                        (existingItem) => existingItem.id === newItem.id
                    )
            );

            state.reviewArtistData.items = [...newItems, ...state.reviewArtistData.items]; // Prepend new items
            state.reviewArtistData.totalCount = action.payload.totalCount;
        },
    },
});

export const { storeReviewArtistData } = reviewArtistSlice.actions;
export default reviewArtistSlice.reducer;
