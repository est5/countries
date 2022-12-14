import { useStore } from '../../../app/store';
import './search.css';

function SearchBar() {
  const filterStore = useStore((state) => state.setSearch);
  const search = useStore((state) => state.search);
  const loaded = useStore((state) => state.loaded);

  return (
    <div className="search">
      <input
        disabled={loaded}
        onChange={(e) => filterStore(e.target.value)}
        type="text"
        name="search"
        id="search"
        placeholder={'Search for a country...'}
        value={search}
      />
      <i className="search-icon fa-solid fa-magnifying-glass"></i>
    </div>
  );
}

export default SearchBar;
