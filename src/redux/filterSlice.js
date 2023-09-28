import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterInitialState,
  reducers: {
    changeFilterValue: {
      reducer(state, action) {
        return action.payload;
      },
      prepare(value) {
        return {
          payload: value,
        };
      },
    },
  },
});

export const { changeFilterValue } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
