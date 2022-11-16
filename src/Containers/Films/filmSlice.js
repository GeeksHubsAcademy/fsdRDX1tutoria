
import { createSlice } from '@reduxjs/toolkit';

export const filmSlice = createSlice({
    name: 'film',
    initialState: {
      details: {},
    },
    reducers: {
      addFilm: (state, action) => {
        return {
          ...state,
          ...action.payload
        }
      },
    }
    
});

export const { addFilm } = filmSlice.actions;

export const filmData = (state) => state.film;

export default filmSlice.reducer;