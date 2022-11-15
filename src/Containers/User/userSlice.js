
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
      token: ''
    },
    reducers: {
      login: (state, action) => {
        return {
          ...action.payload
        }
      }
    }
    
});

export const { login } = userSlice.actions;

export const userData = (state) => state.user;

export default userSlice.reducer;