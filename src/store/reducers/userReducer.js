import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: "user",
    initialState: {
        accessToken: window.localStorage.getItem("resenhando:authToken") || null,
        userData: null,
    },
    reducers: {
        loginUser: (state, {payload}) => {
            state.accessToken = payload;
        },
        logoutUser: (state) => {
            state.accessToken = null;
            state.userData = null;
        },
        storeUserData: (state, {payload}) => {
            state.userData = payload;
        },
    },
});

export const { loginUser, logoutUser, storeUserData, } = userSlice.actions;
export default userSlice.reducer;