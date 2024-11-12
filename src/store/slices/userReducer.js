import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: "user",
    initialState: {
        accessToken: window.localStorage.getItem("resenhando:authToken") || null,
        userData: null,
    },
    reducers: {
        loginUser: (state, action) => {
            state.accessToken = action.payload;
        },
        logoutUser: (state) => {
            state.accessToken = null;
            state.userData = null;
        },
        storeUserData: (state, action) => {
            state.userData = action.payload;
        },
    },
});

export const { loginUser, logoutUser, storeUserData } = userSlice.actions;
export default userSlice.reducer;