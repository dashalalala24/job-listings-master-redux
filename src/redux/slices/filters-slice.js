import { createSlice } from '@reduxjs/toolkit';

export const filtersSlice = createSlice({
  name: '@@filters',
  initialState: [],
  reducers: {
    addFilter: (state, action) => {
      if (!state.includes(action.payload)) {
        state.push(action.payload);
      }
    },
    deleteFilter: (state, action) => {
      return state.filter((item) => item !== action.payload);
    },
    resetFilters: () => [],
  },
});

export const { addFilter, deleteFilter, resetFilters } = filtersSlice.actions;

export const filtersReducer = filtersSlice.reducer;

export const selectFilters = (state) => state.filters;
