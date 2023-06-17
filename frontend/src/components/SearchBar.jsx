function SearchBar({search, onSearch}) {

   return (
    <div className="search-bar-container">
        <label htmlFor="search" className="search-bar-label">
            Search:
        </label>
        <input 
            id="search" 
            type="text"
            className="search-bar-input" 
            value={search}
            onChange={onSearch}
            placeholder="Enter search query"
        />
    </div>
   );
}

export default SearchBar;