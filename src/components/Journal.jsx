import React from "react"
import { useHistory } from "react-router"
import { Link } from "react-router-dom"

const Journal = ({ allBrews, selectBrew }) => {
  const history = useHistory()

  const loading = () => {
    return <h2>Brewing...</h2>
  }

  const loaded = () => {
    return (
      <div className="taplist">
        <Link to={`/create`}>
          <button
            onClick={() => {
              history.push("/create")
            }}
          >
            Add Brew
          </button>
        </Link>
        {allBrews.map((brew, index) => (
          <div className="brew" key={index}>
            <img className="thumbnail" src={brew.img} alt="" />
            <h3>{brew.name}</h3>
            <h4>{brew.style}</h4>
            <p>{brew.description}</p>
            <Link to={`/entry/${brew.number}`}>
              <button
                onClick={() => {
                  selectBrew(brew)
                  history.push("/edit")
                }}
              >
                See Recipe
              </button>
            </Link>
          </div>
        ))}
      </div>
    )
  }

  return allBrews ? loaded() : loading()
}

export default Journal
