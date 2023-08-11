import React from 'react'
import { Usecart } from './context/CartContext'

const Addtocart = ({ item,idx }) => {
  const { removefromcart } = Usecart()
  const { img, name, price } = item
  return (
    <>
      <tr>
        <td className='text-center'>{idx+1}</td>
        <td className='text-center'>{name}</td>
        <td className='text-center'>Rs.{price}</td>
        <td className='text-center'><img src={img} className='image' alt="" /></td>
        <td className='d-flex justify-content-center align-items-center'>
          <button className='btn btn-danger bg-danger text-light' onClick={() => removefromcart(item)}>Delete</button>
        </td>

      </tr>
    </>
  )
}

export default Addtocart