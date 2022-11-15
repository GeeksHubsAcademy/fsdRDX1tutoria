
import { configureStore } from '@reduxjs/toolkit';
import userSlice from '../Containers/User/userSlice';

export default configureStore({
    reducer: {
        user: userSlice
    }
    
});