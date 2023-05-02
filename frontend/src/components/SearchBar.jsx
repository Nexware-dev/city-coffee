function SearchBar({search, onSearch}) {

   return (
    <div>
        <label htmlFor="search">Search:</label>
        <input id="search" type="text" value={search} onChange={onSearch}></input>
    </div>
   );
}

export default SearchBar;