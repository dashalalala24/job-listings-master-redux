import { ADD_FILTER, DELETE_FILTER, RESET_FILTERS } from '../../utils/constants';

const addFilter = (filter) => ({
  type: ADD_FILTER,
  filter,
});

const deleteFilter = (filter) => ({
  type: DELETE_FILTER,
  filter,
});

const resetFilters = {
  type: RESET_FILTERS,
};

export { addFilter, deleteFilter, resetFilters };
