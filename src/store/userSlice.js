import { createSlice } from "@reduxjs/toolkit";
import { getCurrent, logOut, signIn, signUp } from './thunk';


const initialState = {
    user: { name: null, email: null },
    token: null,
};

const handleFulfilled = (state, { payload }) => {
    state.user = payload.user;
    state.token = payload.token;
}

const userSlice = createSlice({
    name: 'authUser',
    initialState: initialState,
    extraReducers: (builder) => {
        builder
            .addCase(signUp.fulfilled, handleFulfilled)
            .addCase(getCurrent.fulfilled, (state, { payload }) => {
                state.user = payload;
            }
            )
            .addCase(signIn.fulfilled, handleFulfilled)
            .addCase(logOut.fulfilled, (state) => {
                state.user = { name: null, email: null };
                state.token = null;
            })
    }
})

// export const { signUp, signIn, logOut } = userSlice.actions;
export const userReducer = userSlice.reducer;