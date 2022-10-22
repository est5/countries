import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import './filter.css';

function Filter() {
  const options = ['All', 'Africa', 'America', 'Asia', 'Europe', 'Oceania'];

  const defaultOption = 'Select region';
  return (
    <Dropdown
      className="filter"
      options={options}
      value={defaultOption}
      placeholder="Select an option"
      onChange={(e) => console.log(e.value)}
    />
  );
}

export default Filter;
