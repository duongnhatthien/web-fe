import { createSlice } from '@reduxjs/toolkit';
export const userSlide = createSlice({
    name: 'currentUser',
    initialState: {
        name: '',
        email: '',
        isAdmin: false,
        access_token: '',
    },
    reducers: {
        updateCurrentUser: (state, action) => {
            console.log(action.payload);
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.isAdmin = action.payload.isAdmin;
            if (action.payload.access_token) {
                state.access_token = action.payload.access_token;
                localStorage.setItem('access_token', state.access_token);
            }
        },
    },
});
export const { updateCurrentUser } = userSlide.actions;
export const selectCurrentUser = (state) => state.currentUser;
export default userSlide.reducer;
