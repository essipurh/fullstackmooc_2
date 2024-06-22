const PersonForm = ({ addPerson, newName, handleNewName, newNumber, handleNewNumber }) => {
  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input placeholder='Write new name'
          value={newName}
          onChange={handleNewName}
        />
      </div>
      <div>
        number: <input placeholder='Write phonenumber'
          value={newNumber}
          onChange={handleNewNumber}
        />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  )
}

export default PersonForm