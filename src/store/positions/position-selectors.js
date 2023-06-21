export const selectAllPositions = (state) => state.positions;

export const selectVisiblePositions = (state, filters = []) => {
  return filters.length === 0
    ? state.positions
    : state.positions.filter((pos) => {
        const posFilters = [].concat(pos.role, pos.level, ...pos.languages, ...pos.tools);

        return filters.every((filter) => posFilters.includes(filter));
      });
};
