
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'user',
    initialState: {
      token: '',
      characters: []
    },
    reducers: {
      login: (state, action) => {
        return {
          ...action.payload
        }
      },
      characters: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      }
    }
    
});

export const { login, characters } = userSlice.actions;

export const userData = (state) => state.user;

export default userSlice.reducer;