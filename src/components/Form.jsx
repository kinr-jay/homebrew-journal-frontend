import React, { useState } from "react"
import { useHistory } from "react-router"

const Form = ({ label, brew, handleAction, nextNumber, selectBrew }) => {
  const history = useHistory()

  const [formData, setFormData] = useState(brew)

  React.useEffect(() => {
    const grains = formData.grains.join(", ")
    const hops = formData.hops.join(", ")
    setFormData({ ...formData, grains: grains, hops: hops })
    // eslint-disable-next-line
  }, [])

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const grainsArr = formData.grains.split(", ")
    const hopsArr = formData.hops.split(", ")

    const newBrew = {
      ...formData,
      grains: grainsArr,
      hops: hopsArr,
      number: nextNumber,
    }

    handleAction(newBrew)
    selectBrew(newBrew)
    history.push(`/entry/${newBrew.name}`)
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="main-form">
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
        <label htmlFor="style">Style: </label>
        <input
          type="text"
          name="style"
          id="style"
          value={formData.style}
          onChange={handleChange}
        />
        <label htmlFor="grains">Grains: </label>
        <input
          type="text"
          name="grains"
          id="grains"
          value={formData.grains}
          onChange={handleChange}
        />
        <label htmlFor="hops">Hops: </label>
        <input
          type="text"
          name="hops"
          id="hops"
          value={formData.hops}
          onChange={handleChange}
        />
        <label htmlFor="description">Description: </label>
        <input
          type="text"
          name="description"
          id="description"
          value={formData.description}
          onChange={handleChange}
        />
        <label htmlFor="img">Image URL: </label>
        <input
          type="text"
          name="img"
          id="img"
          value={formData.img}
          onChange={handleChange}
        />
      </div>
      <input
        className="form-submit"
        type="submit"
        value={`${label} the Brew`}
      />
    </form>
  )
}

export default Form
