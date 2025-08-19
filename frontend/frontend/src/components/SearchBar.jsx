const SearchBar = ({ query, setQuery }) => (
  <input
    type="text"
    placeholder="Search stores..."
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    className="border px-3 py-2 rounded w-full"
  />
);
export default SearchBar;
