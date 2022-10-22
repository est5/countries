import Filter from './Filter';
import SearchBar from './SearchBar';
import './filterSection.css';

function FilterSection() {
  return (
    <nav>
      <SearchBar />
      <Filter />
    </nav>
  );
}

export default FilterSection;
