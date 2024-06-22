import { useState } from 'react'
import SearcForm from './components/SearchForm'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
  // states
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searched, setSearched] = useState('')

  // functions
  const handleSearch = (event) => {
    setSearched(event.target.value)
    }
  const handleNewName = (event) => setNewName(event.target.value)
  const handleNewNumber = (event) => setNewNumber(event.target.value)
  const resetInputs = () => {
    setNewName('')
    setNewNumber('')
  }
  const addPerson= (event) => {
    event.preventDefault()
    if (persons.map(person => person.name).includes(newName)) {
      window.alert(`${newName} is already in the phonebook`)
      resetInputs()
      return
    }
    const newPerson = {name: newName, number: newNumber}
    setPersons(persons.concat(newPerson))
    resetInputs()
  }

  const personsToShow = searched === ''  ? persons : persons.filter(({name}) => name.toLocaleLowerCase().match((`^${searched.toLowerCase()}`)))

  return (
    <div>
      <h2>Phonebook</h2>
      <SearcForm searchTerm={searched} handleSearch={handleSearch} />
      <h3>Add a new</h3>
      <PersonForm  addPerson={addPerson} newName={newName} handleNewName={handleNewName} newNumber={newNumber} handleNewNumber={handleNewNumber} />
      <h3>Numbers</h3>
      <Persons persons={personsToShow}/>
    </div>
  )

}

export default App