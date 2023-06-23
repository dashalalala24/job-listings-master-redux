import { useSelector, useDispatch } from 'react-redux';
import { JobPosition } from './JobPosition';
import { selectVisiblePositions } from 'redux/slices/positions-slice';
import { addFilter, selectFilters } from 'redux/slices/filters-slice';

const JobList = () => {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilters);
  const positions = useSelector((state) => selectVisiblePositions(state, currentFilters));

  function handleAddFilter(filter) {
    dispatch(addFilter(filter));
  }
  return (
    <div className='job-list'>
      {positions.map((item) => (
        <JobPosition
          handleAddFilter={handleAddFilter}
          key={item.id}
          {...item}
        />
      ))}
    </div>
  );
};

export { JobList };
