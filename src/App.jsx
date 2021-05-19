import React, { useState } from "react"
import { Route, Switch } from "react-router-dom"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Homepage from "./components/Homepage"
import Journal from "./components/Journal"
import Entry from "./components/Entry"
import Form from "./components/Form"
import "./App.scss"

function App() {
  const url = "https://homebrew-journal.herokuapp.com"
  const emptyBrew = {
    name: "",
    style: "",
    grains: [],
    hops: [],
    description: "",
    img: "",
    number: 0,
  }

  const [allBrews, setAllBrews] = useState(null)
  const [selectedBrew, setSelectedBrew] = useState(emptyBrew)

  const getAllBrews = () => {
    fetch(url + "/brews")
      .then((res) => res.json())
      .then((data) => {
        setAllBrews(data)
      })
  }

  React.useEffect(() => getAllBrews(), [])

  const selectBrew = (brew) => {
    setSelectedBrew(brew)
  }

  const searchBrew = (input) => {
    const result = allBrews.filter(
      (brew) => input.lowercase() === brew.name.lowercase()
    )
    setSelectedBrew(result)
  }

  const handleCreate = (brew) => {
    fetch(url + "/brews", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(brew),
    }).then(() => getAllBrews())
  }

  const handleUpdate = (brew) => {
    fetch(url + "/brews/" + brew._id, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(brew),
    }).then(() => getAllBrews())
  }

  const handleDelete = (brew) => {
    fetch(url + "/brews/" + brew._id, {
      method: "delete",
    }).then(() => getAllBrews())
  }

  return (
    <div className="App">
      <Header searchBrew={searchBrew} />
      <Switch>
        <Route exact path="/">
          <Homepage />
        </Route>
        <Route path="/journal">
          <Journal allBrews={allBrews} selectBrew={selectBrew} />
        </Route>
        <Route path="/entry/:number">
          <Entry brew={selectedBrew} handleDelete={handleDelete} />
        </Route>
        <Route
          path="/create"
          render={(rp) => (
            <Form
              {...rp}
              label="Create"
              brew={emptyBrew}
              selectBrew={selectBrew}
              handleAction={handleCreate}
              nextNumber={allBrews ? allBrews.length + 1 : 1}
            />
          )}
        />
        <Route
          path="/edit"
          render={(rp) => (
            <Form
              {...rp}
              label="Update"
              brew={selectedBrew}
              selectBrew={selectBrew}
              handleAction={handleUpdate}
              nextNumber={selectedBrew.number}
            />
          )}
        />
      </Switch>
      <Footer />
    </div>
  )
}

export default App
