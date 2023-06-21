import { combineReducers } from 'redux';
import { positionsReducer } from './positions/position-reducer';
import { filtersReducer } from './filters/filter-reducer';

export const rootReducer = combineReducers({
  positions: positionsReducer,
  filters: filtersReducer,
});