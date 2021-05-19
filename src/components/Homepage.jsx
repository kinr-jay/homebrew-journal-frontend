import React from "react"
import { Link } from "react-router-dom"

const Homepage = () => {
  return (
    <main>
      <h1>Homebrew Journal</h1>
      <h3>
        Welcome! This is a place where I share my adventures in homebrewing.
      </h3>
      <p>
        The initial phase of this project will be pretty basic. Anyone will be
        allowed to create and edit my recipes, which is ok for now. Go ahead and
        see if I care. I keep a physical journal anyway. That will really be the
        only functionality at first, but a search function is intended, and will
        be of more value when I have more than two recipes.
      </p>
      <p>Click the button below to see a list of the beers I've brewed.</p>
      <Link to="/journal">
        <button>Recipes</button>
      </Link>
    </main>
  )
}

export default Homepage
