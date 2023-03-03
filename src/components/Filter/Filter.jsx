import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import styles from './filter.module.css';

const Filter = () => {
  const filter = useSelector(store => store.filter);
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
