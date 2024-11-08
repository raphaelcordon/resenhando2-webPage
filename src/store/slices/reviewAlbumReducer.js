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
            state.reviewAlbumData.items = [
                ...state.reviewAlbumData.items,
                ...action.payload.items,
            ];
            state.reviewAlbumData.totalCount = action.payload.totalCount;
        },
    },
});

export const { storeReviewAlbumData } = reviewAlbumSlice.actions;
export default reviewAlbumSlice.reducer;
