import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    reviewAlbumData: {
        items: [],
        totalCount: 0,
    },
};

const reviewAlbumSlice = createSlice({
    name: "reviewAlbum",
    initialState,
    reducers: {
        storeReviewAlbumData: (state, action) => {
            const newItems = action.payload.items.filter(
                (newItem) =>
                    !state.reviewAlbumData.items.some(
                        (existingItem) => existingItem.id === newItem.id
                    )
            );

            state.reviewAlbumData.items = [...newItems, ...state.reviewAlbumData.items]; // Prepend new items
            state.reviewAlbumData.totalCount += newItems.length; // Adjust total count
        },
    },
});

export const { storeReviewAlbumData } = reviewAlbumSlice.actions;
export default reviewAlbumSlice.reducer;
