import { useSelector, useDispatch } from 'react-redux';
import { deleteFilter, resetFilters, selectFilters } from '../redux/slices/filters-slice';
import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';

const FilterPanel = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilters);

  return currentFilters.length === 0 ? null : (
    <Card className='filter-panel'>
      <div className='filter-panel-wrapper'>
        <Stack>
          {currentFilters.map((badge) => {
            return (
              <Badge
                key={badge}
                variant='clearable'
                onClear={() => dispatch(deleteFilter(badge))}>
                {badge}
              </Badge>
            );
          })}
        </Stack>

        <button
          className='link'
          onClick={() => dispatch(resetFilters())}>
          Clear
        </button>
      </div>
    </Card>
  );
};

export { FilterPanel };
