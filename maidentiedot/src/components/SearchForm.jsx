const SearchForm = ({ searchTerm, handleSearch }) => {
  return (
    <form>
      <div>
        find countries: <input placeholder='search here...'
        value={searchTerm}
        onChange={() => handleSearch(event.target.value)}
        />
      </div>
  </form>
)}

export default SearchForm