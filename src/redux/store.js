import { configureStore } from '@reduxjs/toolkit';

import { positionsReducer } from 'redux/slices/positions-slice';
import { filtersReducer } from 'redux/slices/filters-slice';

export const store = configureStore({
  reducer: { positions: positionsReducer, filters: filtersReducer },
  devTools: true,
});
