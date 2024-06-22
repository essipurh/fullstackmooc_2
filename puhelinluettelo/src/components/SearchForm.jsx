const SearcForm = ({ searchTerm, handleSearch }) => {
  return (
    <form>
      <div>
        filter shown with: <input placeholder='Write name'
        value={searchTerm}
        onChange={handleSearch}
        />
      </div>
  </form>
)}

export default SearcForm