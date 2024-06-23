import Country from "./Country"
const Countries = ({ handleClick, countries }) => {
  console.log(countries)
  if (countries.length > 10) {return <div>Too many matches, specify another filter</div>}
  if (countries.length === 1) {return <Country country={countries[0]} />}
  return (
    countries.map(country => 
      <div key={country.cca2}>
        {country.name.common}
        <button onClick={() => handleClick(country.name.common)}>show</button>
      </div>
    )
  ) 
}

export default Countries