import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { getFilter } from 'redux/filter/filterSelector';
import styles from './filter.module.css';

const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const handleFilter = event => {
    const action = setFilter(event.target.value);
    dispatch(action);
  };

  return (
    <>
      <label className={styles.filter}>
        Find contact by name
        <input type="text" value={filter} onChange={handleFilter} />
      </label>
    </>
  );
};

export default Filter;
