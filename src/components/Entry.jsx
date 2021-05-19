import React from "react"
import { Link } from "react-router-dom"

const Entry = ({ brew, handleDelete }) => {
  return (
    <div className="recipe">
      <img className="lg-img" src={brew.img} alt="" />
      <h3>{brew.name}</h3>
      <h4>{brew.style}</h4>
      <div className="ingredients">
        <ul>
          {brew.grains.map((grain, index) => (
            <li key={index}>{grain}</li>
          ))}
        </ul>
        <ul>
          {brew.hops.map((hop, index) => (
            <li key={index}>{hop}</li>
          ))}
        </ul>
      </div>
      <p>{brew.description}</p>
      <div className="actions">
        <Link to="/edit">
          <button>Edit</button>
        </Link>
        <Link to="/journal">
          <button
            onClick={() => {
              handleDelete(brew)
            }}
          >
            Delete
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Entry
