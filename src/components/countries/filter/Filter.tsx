import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { useStore } from '../../../app/store';
import './filter.css';

function Filter() {
  const options = ['All', 'Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];

  const filterStore = useStore((state) => state.setFilter);
  const loaded = useStore((state) => state.loaded);

  const defaultOption = 'Select region';
  return (
    <Dropdown
      disabled={loaded}
      controlClassName="filter"
      options={options}
      value={defaultOption}
      placeholder="Select an option"
      onChange={(e) => filterStore(e.value)}
    />
  );
}

export default Filter;
