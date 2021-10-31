import React from 'react'

import './ItemForm.styles.scss'

const ItemForm = ({handleSubmit, objectToUpdate,handleChange }) =>{

  return (
    <form onSubmit={(event) => handleSubmit(event)}>
            <fieldset>
              <legend>Product {objectToUpdate.ID} Details</legend>
              <img src="https://previews.123rf.com/images/fordzolo/fordzolo1511/fordzolo151100093/47643461-new-product-green-stamp-text-on-green-circle-on-a-white-background-and-star.jpg" alt="" />
              <label htmlFor="Name">Name</label>
              <input
                onChange={(event) => handleChange(event)}
                name="Name"
                value={objectToUpdate.Name}
                type="text"
                placeholder="product name"
              />
              <br />
              <label htmlFor="Description">Description</label>
              <textarea
                onChange={(event) => handleChange(event)}
                name="Description"
                value={objectToUpdate.Description}
                placeholder="product description"
              />
              <br />
              <label htmlFor="Price">Price</label>
              <input
                onChange={(event) => handleChange(event)}
                name="Price"
                value={objectToUpdate.Price}
                type="number"
                min="1"
              />
              <br />
              <input className="save" type="submit" value="save" />
            </fieldset>
          </form>
  )
}

export default ItemForm;