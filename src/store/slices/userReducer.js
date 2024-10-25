import { createSlice } from "@reduxjs/toolkit"

export const userSlice = createSlice({
    name: "user",
    initialState: {
        accessToken: window.localStorage.getItem('token') || null,
        userData: [],
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
            state.userCustomerData = action.payload;
        },
    },
});

export const { loginUser, logoutUser, storeUserData } = userSlice.actions;
export default userSlice.reducer;