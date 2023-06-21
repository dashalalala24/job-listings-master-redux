import { ADD_POSITIONS } from '../../utils/constants';

export const addPositions = (positions) => ({
  type: ADD_POSITIONS,
  positions,
});
