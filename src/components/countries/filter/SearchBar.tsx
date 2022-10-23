import './search.css';

function SearchBar() {
  return (
    <div className="search">
      <input
        type="text"
        name="search"
        id="search"
        placeholder={'Search for a contry...'}
      />
      <i className="search-icon fa-solid fa-magnifying-glass"></i>
    </div>
  );
}

export default SearchBar;
