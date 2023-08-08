import React from 'react'
import { Usecart } from './context/CartContext'

const Card = ({ item }) => {
  const { addtocart, cartlist } = Usecart()
  // console.log(item)
  const { name, price, img } = item
  function handleadd() {
    addtocart(item)
    console.log(cartlist)
  }
  return (
    <>
      < div className='col-8 col-md-3 m-auto mb-1 mt-2'>
        <div className="card">
          <img src={img} className="card-img-top " alt="" />
          <div className="card-body d-flex flex-column align-items-center">
            <p className="h5 card-text text-center">{name}</p>
            <p className="h6">Rs.{price}</p>
            <p onClick={handleadd} className="btn btn-primary">Add to cart</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card