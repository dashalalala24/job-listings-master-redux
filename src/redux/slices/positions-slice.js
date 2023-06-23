import { createSlice } from '@reduxjs/toolkit';

export const positionsSlice = createSlice({
  name: '@@positions',
  initialState: [],
  reducers: {
    addPositions: (state, action) => (state = action.payload),
  },
});

export const { addPositions } = positionsSlice.actions;

export const positionsReducer = positionsSlice.reducer;

export const selectVisiblePositions = (state, filters = []) => {
  return filters.length === 0
    ? state.positions
    : state.positions.filter((pos) => {
        const posFilters = [].concat(pos.role, pos.level, ...pos.languages, ...pos.tools);

        return filters.every((filter) => posFilters.includes(filter));
      });
};
