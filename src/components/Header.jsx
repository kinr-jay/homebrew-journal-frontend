import React, { useState } from "react"
import { useHistory } from "react-router"

const Header = ({ searchBrew }) => {
  const history = useHistory()
  const [searchInput, setSearchInput] = useState("")

  const handleChange = (event) => {
    setSearchInput(event.target.value)
  }

  const handleSubmit = () => {
    searchBrew(searchInput)
    history.push("/entry")
  }

  return (
    <header>
      <a href="/">Kinr Brews</a>
      <a href="/journal">Recipes</a>
      <input
        type="text"
        name="searchInput"
        id="searchInput"
        value={searchInput}
        onChange={handleChange}
      />
      <button onClick={handleSubmit}>Search</button>
    </header>
  )
}

export default Header
