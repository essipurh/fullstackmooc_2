import { useState, useEffect } from 'react'
import personService from './services/persons'
import SearcForm from './components/SearchForm'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Notification from './components/Notification'

const App = () => {
  // states
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searched, setSearched] = useState('')
  const [notificationMessage, setMessage] = useState({type: '', text: ''})

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response)
      })
  }, [])


  // functions
  const uiErrorMessage = (error) => {
    console.log(Object.values(error.response.data.error))
    const errorMessage = Object.values(error.response.data.error).map(val => val.message).join(' ')
    setMessage({type: 'error', text: errorMessage})
    setTimeout(() => {setMessage(null)}, 5000)
  }
  const handleSearch = (event) => setSearched(event.target.value)
  const handleNewName = (event) => setNewName(event.target.value)
  const handleNewNumber = (event) => setNewNumber(event.target.value)
  const resetInputs = () => {
    setNewName('')
    setNewNumber('')
  }
  const updatePerson = () => {
    const updatedPerson = {...persons.find(person => person.name.toLocaleLowerCase() === newName.toLocaleLowerCase()), number: newNumber}
    personService
      .update(updatedPerson.id, updatedPerson)
      .then(response => {
        setPersons(persons.map(person => person.id !== updatedPerson.id ? person : response))
        setMessage({type: 'confirmation', text:`Updated ${response.name}`})
        setTimeout(() => {setMessage(null)}, 5000)
        resetInputs()
      })
      .catch(error => {
        uiErrorMessage(error)
        if (error.response.status === 404) { setPersons(persons.filter(person => person.id !== updatedPerson.id)) }
      })
  }

  const addPerson= (event) => {
    event.preventDefault()
    if (persons.map(person => person.name.toLocaleLowerCase()).includes(newName.toLocaleLowerCase())) {
      if (window.confirm(`${newName} is already in the phonebook replace the old number with a new one?`)) {
        updatePerson()
      }
      return
    }
    const newPerson = {name: newName, number: newNumber}

    personService
      .create(newPerson)
      .then(response => {
        setPersons(persons.concat(response))
        resetInputs()
        setMessage({type: 'confirmation', text:`Added ${response.name}`})
        setTimeout(() => {setMessage(null)}, 5000)
      }) 
      .catch(error => {
        uiErrorMessage(error)
      })
  }

  const deletePerson = (person) => {
    if (window.confirm(`Delete ${person.name}?`)) {
      personService
      .deleteObject(person.id)
      .then(response => {
        const updatedPersons = persons.filter(({id}) => id !== response)
        setPersons(updatedPersons)
        setMessage({type: 'confirmation', text:`Deleted ${person.name}`})
        setTimeout(() => {setMessage(null)}, 5000)
        })
      .catch(error => {
        uiErrorMessage(error)
      })
    }
  }
  const personsToShow = searched === ''  ? persons : persons.filter(({name}) => name.toLocaleLowerCase().match((`^${searched.toLowerCase()}`)))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification notification={notificationMessage} />
      <SearcForm searchTerm={searched} handleSearch={handleSearch} />
      <h3>Add a new</h3>
      <PersonForm  addPerson={addPerson} newName={newName} handleNewName={handleNewName} newNumber={newNumber} handleNewNumber={handleNewNumber} />
      <h3>Numbers</h3>
      <Persons deletePerson={deletePerson} persons={personsToShow}/>
    </div>
  )

}

export default App