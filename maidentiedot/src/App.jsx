import { useState, useEffect} from 'react'
import SearchForm from './components/SearchForm'
import Countries from './components/Countries'
import countryService from './services/countries'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [countries, setCountries] = useState([])

  useEffect(() => {
    countryService
    .getAll()
    .then(response => {
      setCountries(response)
    })
  }, [])

  const handleSearch = (search) => setSearchTerm(search)
  const countriesToShow = countries.filter(country => country.name.common.toLowerCase().match((`^${searchTerm.toLowerCase()}`)))

  return (
    <>
      <SearchForm value={searchTerm} handleSearch={handleSearch} />
      <Countries handleClick={handleSearch} countries={countriesToShow}/>
    </>
  )
}

export default App
