import { ADD_FILTER, DELETE_FILTER, RESET_FILTERS } from '../../utils/constants';

export const filtersReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FILTER: {
      if (state.includes(action.filter)) {
        return state;
      } else {
        return [...state, action.filter];
      }
    }
    case DELETE_FILTER: {
      return state.filter((item) => item !== action.filter);
    }
    case RESET_FILTERS: {
      return [];
    }
    default: {
      return state;
    }
  }
};
