import React, { useEffect, useState } from 'react'
import { Usecart } from './context/CartContext'

const Card = ({ item }) => {
  const { addtocart, removefromcart, cartlist } = Usecart()
  const [addedToCart, setAddedToCart] = useState(false)
  // console.log(item)
  const {id, name, price, img } = item
  useEffect(()=>{
    const productsincart=cartlist.find(item=>item.id===id)
    if(productsincart){
      setAddedToCart(true)
    }
    else{
      setAddedToCart(false)
    }
  },[id,cartlist])
  return (
    <>
      < div className='col-8 col-md-3 m-auto mb-1 mt-2'>
        <div className="card">
          <img src={img} className="card-img-top " alt="" />
          <div className="card-body d-flex flex-column align-items-center">
            <p className="h5 card-text text-center">{name}</p>
            <p className="h6">Rs.{price}</p>
            {addedToCart? ( <p onClick={() => removefromcart(item)} className="btn btn-danger">Remove</p>):( <p onClick={() => addtocart(item)} className="btn btn-primary">Add to cart</p>)}
         
          </div>
        </div>
      </div>
    </>
  )
}

export default Card