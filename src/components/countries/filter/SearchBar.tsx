import { useStore } from '../../../app/store';
import './search.css';

function SearchBar() {
  const filterStore = useStore((state) => state.setSearch);
  const search = useStore((state) => state.search);

  return (
    <div className="search">
      <input
        onChange={(e) => filterStore(e.target.value)}
        type="text"
        name="search"
        id="search"
        placeholder={'Search for a contry...'}
        value={search}
      />
      <i className="search-icon fa-solid fa-magnifying-glass"></i>
    </div>
  );
}

export default SearchBar;
