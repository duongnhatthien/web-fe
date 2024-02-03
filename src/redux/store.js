import { configureStore } from '@reduxjs/toolkit';
import userReducer from './Slide/userReducer';

export const store = configureStore({
    reducer: {
        currentUser: userReducer,
    },
});
